"""
Получение списка транзакций для админ-панели
Возвращает список всех транзакций с фильтрацией по статусу
"""
import json
import os
from typing import Dict, Any
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
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Auth-Token, X-Admin-Key',
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
    status_filter = params.get('status', 'all')
    limit = int(params.get('limit', '50'))
    
    try:
        conn = psycopg2.connect(os.environ['DATABASE_URL'])
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        
        if status_filter == 'all':
            cursor.execute("""
                SELECT id, user_id, telegram_username, product_type, product_name, 
                       amount_stars, amount_rub, token, status, minecraft_nickname, 
                       created_at, completed_at, admin_notified
                FROM transactions
                ORDER BY created_at DESC
                LIMIT %s
            """, (limit,))
        else:
            cursor.execute("""
                SELECT id, user_id, telegram_username, product_type, product_name, 
                       amount_stars, amount_rub, token, status, minecraft_nickname, 
                       created_at, completed_at, admin_notified
                FROM transactions
                WHERE status = %s
                ORDER BY created_at DESC
                LIMIT %s
            """, (status_filter, limit))
        
        transactions = cursor.fetchall()
        
        cursor.close()
        conn.close()
        
        transactions_list = []
        for t in transactions:
            transaction_dict = dict(t)
            if transaction_dict['created_at']:
                transaction_dict['created_at'] = transaction_dict['created_at'].isoformat()
            if transaction_dict['completed_at']:
                transaction_dict['completed_at'] = transaction_dict['completed_at'].isoformat()
            if transaction_dict['amount_rub']:
                transaction_dict['amount_rub'] = float(transaction_dict['amount_rub'])
            transactions_list.append(transaction_dict)
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'count': len(transactions_list),
                'transactions': transactions_list
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