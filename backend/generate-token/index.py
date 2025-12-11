"""
Генерация токенов для активации покупок
Принимает данные о платеже и создает уникальный токен в базе данных
"""
import json
import secrets
import os
from typing import Dict, Any
from datetime import datetime, timedelta
import psycopg2
from psycopg2.extras import RealDictCursor


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Auth-Token',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    
    user_id = body_data.get('user_id')
    telegram_username = body_data.get('telegram_username')
    product_type = body_data.get('product_type')
    product_name = body_data.get('product_name')
    amount_stars = body_data.get('amount_stars')
    amount_rub = body_data.get('amount_rub')
    minecraft_nickname = body_data.get('minecraft_nickname')
    
    if not all([user_id, product_type, product_name, amount_stars]):
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Missing required fields: user_id, product_type, product_name, amount_stars'}),
            'isBase64Encoded': False
        }
    
    token = secrets.token_urlsafe(16)
    expires_at = datetime.now() + timedelta(hours=24)
    
    try:
        conn = psycopg2.connect(os.environ['DATABASE_URL'])
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        
        cursor.execute("""
            INSERT INTO transactions 
            (user_id, telegram_username, product_type, product_name, amount_stars, amount_rub, token, status, minecraft_nickname, created_at)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            RETURNING id, token, created_at
        """, (
            user_id, 
            telegram_username, 
            product_type, 
            product_name, 
            amount_stars, 
            amount_rub, 
            token, 
            'pending',
            minecraft_nickname,
            datetime.now()
        ))
        
        result = cursor.fetchone()
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
                'success': True,
                'transaction_id': result['id'],
                'token': result['token'],
                'expires_at': expires_at.isoformat(),
                'message': 'Token generated successfully'
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
