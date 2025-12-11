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
    name: 'Новичок',
    price: 'Бесплатно',
    icon: '🌱',
    features: ['Префикс [Новичок]', '/kit Новичок', '2 дома', 'Базовые команды'],
  },
  {
    name: 'Игрок',
    price: '100 ₽',
    icon: '⚔️',
    features: ['Префикс [Игрок]', '/kit Игрок', '4 дома', 'Цветной ник', '/heal раз в час'],
  },
  {
    name: 'Эксперт',
    price: '250 ₽',
    icon: '🛡️',
    features: ['Префикс [Эксперт]', '/kit Эксперт', '6 домов', '/fly в лобби', '/hat', 'Приват 15x15'],
  },
  {
    name: 'Мастер',
    price: '400 ₽',
    icon: '👑',
    features: ['Префикс [Мастер]', '/kit Мастер', '10 домов', '/fly на всех мирах', '/heal без КД', 'Приват 25x25'],
    popular: true,
  },
  {
    name: 'Легенда',
    price: '600 ₽',
    icon: '💎',
    features: ['Префикс [Легенда]', '/kit Легенда', '15 домов', '/speed', '/feed', '/god на 30 сек', 'Приват 35x35'],
  },
  {
    name: 'Титан',
    price: '850 ₽',
    icon: '🔥',
    features: ['Префикс [Титан]', '/kit Титан', '20 домов', '/god на 60 сек', '/tp к игрокам', 'VIP чат', 'Приват 50x50'],
  },
  {
    name: 'Бог',
    price: '1200 ₽',
    icon: '⚡',
    features: ['Префикс [Бог]', '/kit Бог', '30 домов', '/god без ограничений', '/vanish', 'Все команды', 'Приват 75x75'],
  },
  {
    name: 'Создатель',
    price: '1800 ₽',
    icon: '🌟',
    features: ['Префикс [Создатель]', '/kit Создатель', '50 домов', 'Все команды Бога', '/nick цвет', 'Личный мир', 'Приват 100x100'],
  },
  {
    name: 'Админ VIP',
    price: '2500 ₽',
    icon: '👹',
    features: ['Префикс [Админ VIP]', 'Все киты', 'Безлимитные дома', '/worldedit', '/gmc /gms /gmsp', 'Приватный портал', 'Уникальные эффекты'],
  },
  {
    name: 'Полубог',
    price: '3500 ₽',
    icon: '🔱',
    features: ['Префикс [Полубог]', 'Все возможности', '/time /weather', 'Спавн мобов', 'Кастомные команды', 'Личный NPC'],
  },
  {
    name: 'Владыка',
    price: '5000 ₽',
    icon: '👑✨',
    features: ['Префикс [Владыка]', 'Максимальные права', 'WorldEdit Pro', 'Команды сервера', 'Эксклюзивный контент', 'Личная арена PvP'],
  },
  {
    name: 'Спонсор',
    price: '850 ₽',
    icon: '⭐',
    features: ['Префикс [Спонсор]', '/kit Спонсор', '15 домов', 'VIP поддержка', 'Уникальные плюшки', 'Доступ к бета-тестам'],
  },
  {
    name: 'YouTuber',
    price: '1500 ₽',
    icon: '📹',
    features: ['Префикс [YouTuber]', '/kit YouTuber', '25 домов', 'Съёмка контента', 'Реклама канала', 'Особые привилегии', 'Доступ к эвентам'],
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