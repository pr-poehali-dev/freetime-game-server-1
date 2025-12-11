import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Privilege {
  name: string;
  price: string;
  icon: string;
  features: string[];
  popular?: boolean;
}

const privileges: Privilege[] = [
  {
    name: 'Барон',
    price: 'Бесплатно',
    icon: '⚔️',
    features: ['Префикс [Барон]', '/kit Барон', '2 дома', 'Базовые команды'],
  },
  {
    name: 'Виконт',
    price: '150 ₽',
    icon: '🛡️',
    features: ['Префикс [Виконт]', '/kit Виконт', '5 домов', '/fly в лобби', 'Цветной ник'],
  },
  {
    name: 'Граф',
    price: '350 ₽',
    icon: '👑',
    features: ['Префикс [Граф]', '/kit Граф', '10 домов', '/fly на всех мирах', '/hat', '/heal'],
    popular: true,
  },
  {
    name: 'Маркиз',
    price: '500 ₽',
    icon: '💎',
    features: ['Префикс [Маркиз]', '/kit Маркиз', '15 домов', 'Все команды Графа', '/speed', '/feed'],
  },
  {
    name: 'Герцог',
    price: '700 ₽',
    icon: '🔥',
    features: ['Префикс [Герцог]', '/kit Герцог', '20 домов', 'Все команды Маркиза', '/god', '/tp'],
  },
  {
    name: 'Спонсор',
    price: '850 ₽',
    icon: '⭐',
    features: ['Префикс [Спонсор]', '/kit Спонсор', '15 домов', 'Уникальные возможности', 'VIP чат'],
  },
];

const Privileges = () => {
  const handlePayment = (privilegeName: string) => {
    window.open('https://t.me/FreeTimeSRV_bot', '_blank');
  };

  return (
    <section id="privileges" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient">
            Привилегии сервера
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Выбери свой уровень и получи эксклюзивные возможности на сервере
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {privileges.map((privilege, index) => (
            <Card
              key={privilege.name}
              className={`p-6 hover-scale hover-glow relative overflow-hidden animate-slide-up ${
                privilege.popular ? 'border-primary border-2' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {privilege.popular && (
                <Badge className="absolute top-4 right-4 gradient-primary text-white border-0">
                  Популярно
                </Badge>
              )}
              
              <div className="text-center mb-4">
                <div className="text-6xl mb-3">{privilege.icon}</div>
                <h3 className="text-2xl font-display font-bold mb-2">{privilege.name}</h3>
                <p className="text-3xl font-bold text-primary">{privilege.price}</p>
              </div>

              <ul className="space-y-2 mb-6">
                {privilege.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handlePayment(privilege.name)}
                className="w-full gradient-primary text-white border-0 hover:opacity-90"
              >
                <Icon name="Send" size={16} className="mr-2" />
                Оплатить через Telegram Stars
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 max-w-2xl">
            <div className="flex items-start gap-4">
              <Icon name="Info" size={24} className="text-primary flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-display font-semibold mb-2">Как получить привилегию?</h4>
                <p className="text-sm text-muted-foreground">
                  Нажмите "Оплатить через Telegram Stars", отправьте указанную сумму боту @FreeTimeSRV_bot.
                  После оплаты администратор @InfernoClient активирует привилегию в течение 5 минут.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Privileges;
