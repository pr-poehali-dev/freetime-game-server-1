import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface StoreItem {
  name: string;
  price: string;
  icon: string;
  description: string;
}

const storeItems: StoreItem[] = [
  {
    name: 'Кейс',
    price: '2 ₽',
    icon: '📦',
    description: 'Базовый кейс с наградами',
  },
  {
    name: 'Токен-кейс',
    price: '10 ₽',
    icon: '🎁',
    description: 'Редкие награды и бонусы',
  },
  {
    name: 'Донат-кейс',
    price: '25 ₽',
    icon: '💰',
    description: 'Эксклюзивные предметы',
  },
  {
    name: 'Размут',
    price: '5 ₽',
    icon: '🔊',
    description: 'Снятие мута с аккаунта',
  },
  {
    name: 'Разбан',
    price: '100 ₽',
    icon: '🔓',
    description: 'Разбан аккаунта на сервере',
  },
  {
    name: 'Ключи',
    price: '2 ₽',
    icon: '🔑',
    description: 'Ключи для открытия кейсов',
  },
  {
    name: 'Пропуск Анархия',
    price: '30 ₽',
    icon: '🚪',
    description: 'Доступ к режиму Анархия',
  },
  {
    name: 'Баланс',
    price: '2 ₽/шт',
    icon: '💵',
    description: 'Игровая валюта сервера',
  },
  {
    name: 'Токены',
    price: '1 ₽/2000',
    icon: '🪙',
    description: 'Токены для обмена на товары',
  },
];

const Store = () => {
  const handlePurchase = (itemName: string) => {
    window.open('https://t.me/FreeTimeSRV_bot', '_blank');
  };

  return (
    <section id="store" className="py-20">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient">
            Магазин сервера
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Приобретай полезные предметы, услуги и валюту для игры
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {storeItems.map((item, index) => (
            <Card
              key={item.name}
              className="p-6 hover-scale hover-glow animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold mb-1">{item.name}</h3>
                  <p className="text-2xl font-bold text-primary">{item.price}</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{item.description}</p>

              <Button
                onClick={() => handlePurchase(item.name)}
                variant="outline"
                className="w-full"
              >
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Купить
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 max-w-2xl gradient-secondary">
            <div className="flex items-center gap-4 text-white">
              <Icon name="Sparkles" size={32} className="flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-display font-semibold mb-2">Оплата через Telegram Stars</h4>
                <p className="text-sm opacity-90">
                  Все покупки производятся через бота @FreeTimeSRV_bot. Токены и валюта 
                  зачисляются автоматически после оплаты. Для услуг разбана - ожидайте связи с администратором.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Store;
