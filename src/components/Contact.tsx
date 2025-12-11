import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient">
            Контакты
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8">
            <h3 className="text-2xl font-display font-bold mb-6">Форма обратной связи</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                <Input
                  placeholder="Введите ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email или Telegram</label>
                <Input
                  placeholder="example@email.com или @username"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Сообщение</label>
                <Textarea
                  placeholder="Опишите ваш вопрос или предложение"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full gradient-primary text-white border-0">
                <Icon name="Send" size={16} className="mr-2" />
                Отправить сообщение
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 hover-scale">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Icon name="Send" size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-semibold mb-2">Telegram бот</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Самый быстрый способ связи и покупки донатов
                  </p>
                  <Button variant="outline" asChild>
                    <a href="https://t.me/FreeTimeSRV_bot" target="_blank" rel="noopener noreferrer">
                      Открыть бота
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-scale">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Icon name="MessageSquare" size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-semibold mb-2">Discord сервер</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Общение с игроками и поддержкой в Discord
                  </p>
                  <Button variant="outline" asChild>
                    <a href="https://discord.gg/freetime" target="_blank" rel="noopener noreferrer">
                      Присоединиться
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-scale">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Icon name="Youtube" size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-semibold mb-2">YouTube канал</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Обзоры обновлений и игровой контент
                  </p>
                  <Button variant="outline" asChild>
                    <a href="https://youtube.com/@freetime" target="_blank" rel="noopener noreferrer">
                      Подписаться
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 gradient-primary text-white">
              <div className="flex items-start gap-4">
                <Icon name="Headphones" size={28} className="flex-shrink-0" />
                <div>
                  <h4 className="font-display font-semibold mb-2 text-lg">Техподдержка 24/7</h4>
                  <p className="text-sm opacity-90">
                    Наша команда всегда готова помочь с любыми вопросами. 
                    Администратор @InfernoClient ответит в течение 30 минут.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
