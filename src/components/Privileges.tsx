import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Privilege {
  name: string;
  priceMonth?: string;
  priceForever?: string;
  icon: string;
  features: string[];
  popular?: boolean;
}

const privileges: Privilege[] = [
  {
    name: 'Барон',
    priceForever: 'Бесплатно',
    icon: '⚔️',
    features: ['Префикс [Барон]', '/kit Барон', '2 дома', 'Базовые команды', 'Доступ к чату'],
  },
  {
    name: 'Страж',
    priceForever: 'Бесплатно',
    icon: '🛡️',
    features: ['Префикс [Страж]', '/kit Страж', '3 дома', '/heal раз в час', 'Защита территории'],
  },
  {
    name: 'Герой',
    priceForever: 'Бесплатно',
    icon: '🏆',
    features: ['Префикс [Герой]', '/kit Герой', '4 дома', 'Цветной ник', '/back после смерти'],
  },
  {
    name: 'Аспид',
    priceMonth: '2 ₽',
    priceForever: '4 ₽',
    icon: '🐍',
    features: ['Префикс [Аспид]', '/kit Аспид', '5 домов', '/fly в лобби', '/hat', 'Приват 10x10'],
  },
  {
    name: 'Сквид',
    priceMonth: '6 ₽',
    priceForever: '12 ₽',
    icon: '🦑',
    features: ['Префикс [Сквид]', '/kit Сквид', '7 домов', '/fly везде', '/heal без КД', 'Приват 15x15'],
    popular: true,
  },
  {
    name: 'Глава',
    priceMonth: '10 ₽',
    priceForever: '20 ₽',
    icon: '👑',
    features: ['Префикс [Глава]', '/kit Глава', '10 домов', '/speed', '/feed', '/god 30 сек', 'Приват 20x20'],
  },
  {
    name: 'Элита',
    priceMonth: '25 ₽',
    priceForever: '50 ₽',
    icon: '💎',
    features: ['Префикс [Элита]', '/kit Элита', '15 домов', '/god 60 сек', '/tp к игрокам', 'VIP чат', 'Приват 30x30'],
  },
  {
    name: 'Титан',
    priceForever: '50 ₽',
    icon: '🔥',
    features: ['Префикс [Титан]', '/kit Титан', '20 домов', '/god без лимита', '/vanish', 'Все команды', 'Приват 40x40'],
  },
  {
    name: 'Принц',
    priceMonth: '120 ₽',
    priceForever: '240 ₽',
    icon: '🤴',
    features: ['Префикс [Принц]', '/kit Принц', '30 домов', '/nick цвет', 'Личный мир', '/worldedit базовый', 'Приват 60x60'],
  },
  {
    name: 'Князь',
    priceMonth: '250 ₽',
    priceForever: '500 ₽',
    icon: '👸',
    features: ['Префикс [Князь]', '/kit Князь', '40 домов', 'WorldEdit расширенный', '/time /weather', 'Спавн мобов', 'Приват 80x80'],
  },
  {
    name: 'Герцог',
    priceMonth: '333 ₽',
    priceForever: '666 ₽',
    icon: '🎭',
    features: ['Префикс [Герцог]', '/kit Герцог', '60 домов', 'Максимальные права', '/gmc /gms /gmsp', 'Личный NPC', 'Приват 100x100'],
  },
  {
    name: 'Стажёр',
    priceMonth: '450 ₽',
    priceForever: '900 ₽',
    icon: '🎓',
    features: ['Префикс [Стажёр]', 'Права модератора', '/kick /mute /ban', 'Проверка игроков', 'Доступ к логам', 'Админ-панель', 'Безлимит домов'],
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
                {privilege.priceMonth && privilege.priceForever ? (
                  <div className="space-y-1">
                    <p className="text-lg font-semibold text-primary">{privilege.priceMonth} / месяц</p>
                    <p className="text-2xl font-bold text-primary">{privilege.priceForever} навсегда</p>
                  </div>
                ) : (
                  <p className="text-3xl font-bold text-primary">{privilege.priceForever}</p>
                )}
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