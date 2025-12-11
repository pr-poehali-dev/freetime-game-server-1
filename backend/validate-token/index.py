"""
Валидация токена и активация покупки
Проверяет токен в базе данных и активирует покупку если токен валидный
"""
import json
import os
from typing import Dict, Any
from datetime import datetime, timedelta
import psycopg2
from psycopg2.extras import RealDictCursor


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Auth-Token',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    params = event.get('queryStringParameters', {}) or {}
    token = params.get('token')
    
    if not token:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Token parameter is required'}),
            'isBase64Encoded': False
        }
    
    try:
        conn = psycopg2.connect(os.environ['DATABASE_URL'])
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        
        cursor.execute("""
            SELECT id, user_id, telegram_username, product_type, product_name, 
                   amount_stars, amount_rub, status, minecraft_nickname, created_at
            FROM transactions
            WHERE token = %s
        """, (token,))
        
        transaction = cursor.fetchone()
        
        if not transaction:
            cursor.close()
            conn.close()
            return {
                'statusCode': 404,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Token not found', 'valid': False}),
                'isBase64Encoded': False
            }
        
        if transaction['status'] == 'completed':
            cursor.close()
            conn.close()
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'valid': False, 
                    'error': 'Token already used',
                    'transaction': dict(transaction)
                }),
                'isBase64Encoded': False
            }
        
        token_age = datetime.now() - transaction['created_at']
        if token_age > timedelta(hours=24):
            cursor.close()
            conn.close()
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'valid': False, 
                    'error': 'Token expired',
                    'transaction': dict(transaction)
                }),
                'isBase64Encoded': False
            }
        
        cursor.execute("""
            UPDATE transactions
            SET status = %s, completed_at = %s
            WHERE id = %s
            RETURNING id
        """, ('completed', datetime.now(), transaction['id']))
        
        conn.commit()
        cursor.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'valid': True,
                'message': 'Token validated and activated',
                'transaction': dict(transaction)
            }),
            'isBase64Encoded': False
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': f'Database error: {str(e)}'}),
            'isBase64Encoded': False
        }
