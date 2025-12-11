import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const rulesData = [
  {
    title: 'Основные правила',
    rules: [
      'Уважайте других игроков и администрацию',
      'Запрещено использование читов и запрещённых модов',
      'Запрещен гриферство и разрушение чужих построек',
      'Не спамьте в чате и не используйте капслок',
    ],
  },
  {
    title: 'Правила чата',
    rules: [
      'Запрещена реклама сторонних серверов',
      'Не допускается оскорбление игроков',
      'Запрещена политика и провокации',
      'Используйте русский или английский язык',
    ],
  },
  {
    title: 'Правила аккаунтов',
    rules: [
      'Один игрок - один основной аккаунт',
      'Запрещена передача аккаунта третьим лицам',
      'За нарушение правил банится IP-адрес',
      'Мультиаккаунтинг для обхода бана запрещен',
    ],
  },
  {
    title: 'Игровой процесс',
    rules: [
      'Запрещены дюпы и баги для получения преимущества',
      'Не используйте ошибки сервера в своих целях',
      'О найденных багах сообщайте администрации',
      'Запрещена продажа игровых ценностей за реальные деньги',
    ],
  },
  {
    title: 'Проверки на читы',
    rules: [
      'Администрация может запросить проверку в любой момент',
      'Отказ от проверки = признание использования читов',
      'Необходимо показать папку .minecraft и список процессов',
      'При подтверждении читов - перманентный бан',
    ],
  },
  {
    title: 'Донат услуги',
    rules: [
      'Все покупки окончательны и не подлежат возврату',
      'При бане донат-статус не компенсируется',
      'Запрещено требовать компенсацию за лаги/вайпы',
      'Донат не даёт права нарушать правила',
    ],
  },
];

const Rules = () => {
  const handleDownloadPDF = () => {
    // В реальном приложении здесь будет ссылка на PDF файл
    alert('PDF файл с правилами будет доступен после полной настройки сервера');
  };

  return (
    <section id="rules" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient">
            Правила сервера
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ознакомьтесь с правилами для комфортной игры
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-6 mb-6">
            <Accordion type="single" collapsible className="w-full">
              {rulesData.map((section, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-display font-semibold">
                    <div className="flex items-center gap-3">
                      <Icon name="BookOpen" size={20} className="text-primary" />
                      {section.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 pt-2">
                      {section.rules.map((rule, ruleIndex) => (
                        <li key={ruleIndex} className="flex items-start gap-2 text-sm">
                          <Icon name="CheckCircle2" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          <div className="text-center">
            <Button onClick={handleDownloadPDF} size="lg" className="gradient-primary text-white border-0 gap-2">
              <Icon name="Download" size={20} />
              Скачать полные правила (PDF)
            </Button>
          </div>

          <Card className="mt-8 p-6 gradient-accent">
            <div className="flex items-start gap-4 text-white">
              <Icon name="AlertTriangle" size={28} className="flex-shrink-0" />
              <div>
                <h4 className="font-display font-semibold mb-2 text-lg">Важно знать</h4>
                <p className="text-sm opacity-90">
                  Незнание правил не освобождает от ответственности. Администрация оставляет за собой право изменять правила 
                  без предварительного уведомления. За серьёзные нарушения выдаётся перманентный бан без возможности разбана.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Rules;
