-- Таблица транзакций для хранения всех платежей
CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    telegram_username VARCHAR(255),
    product_type VARCHAR(50) NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    amount_stars INTEGER NOT NULL,
    amount_rub DECIMAL(10, 2),
    token VARCHAR(255) UNIQUE,
    status VARCHAR(50) NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    completed_at TIMESTAMP,
    admin_notified BOOLEAN DEFAULT FALSE,
    minecraft_nickname VARCHAR(255),
    notes TEXT
);

CREATE INDEX idx_transactions_user_id ON transactions(user_id);
CREATE INDEX idx_transactions_token ON transactions(token);
CREATE INDEX idx_transactions_status ON transactions(status);
CREATE INDEX idx_transactions_created_at ON transactions(created_at DESC);

COMMENT ON TABLE transactions IS 'Хранение всех транзакций через Telegram Stars';
COMMENT ON COLUMN transactions.user_id IS 'Telegram ID пользователя';
COMMENT ON COLUMN transactions.product_type IS 'Тип продукта: privilege, token, case, service, currency';
COMMENT ON COLUMN transactions.status IS 'Статус: pending, completed, failed, refunded';
COMMENT ON COLUMN transactions.token IS 'Токен для активации (если применимо)';
