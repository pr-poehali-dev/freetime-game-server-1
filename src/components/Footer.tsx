import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-display font-bold text-gradient mb-4">FreeTime</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Лучший Minecraft сервер с уникальными возможностями и дружным комьюнити
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://t.me/FreeTimeSRV_bot" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={18} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://discord.gg/freetime" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageSquare" size={18} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://youtube.com/@freetime" target="_blank" rel="noopener noreferrer">
                  <Icon name="Youtube" size={18} />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('privileges')} className="text-muted-foreground hover:text-primary transition-colors">
                  Привилегии
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('store')} className="text-muted-foreground hover:text-primary transition-colors">
                  Магазин
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('rules')} className="text-muted-foreground hover:text-primary transition-colors">
                  Правила
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('reviews')} className="text-muted-foreground hover:text-primary transition-colors">
                  Отзывы
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Server" size={14} />
                <span>IP: FreeTime.gomc.me</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Users" size={14} />
                <span>Онлайн: 1000+ игроков</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" size={14} />
                <span>Работаем 24/7</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Shield" size={14} />
                <span>Защита от DDoS</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://t.me/InfernoClient" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Icon name="User" size={14} />
                  Администратор @InfernoClient
                </a>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Icon name="Mail" size={14} />
                  Форма обратной связи
                </button>
              </li>
              <li>
                <a href="https://t.me/FreeTimeSRV_bot" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Icon name="Bot" size={14} />
                  Telegram бот
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} FreeTime Server. Все права защищены. Minecraft является товарным знаком Mojang AB.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
