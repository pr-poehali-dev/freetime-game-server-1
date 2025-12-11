import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  theme: 'bright' | 'dark' | 'green' | 'gamer';
  onThemeChange: (theme: 'bright' | 'dark' | 'green' | 'gamer') => void;
}

const Header = ({ theme, onThemeChange }: HeaderProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-display font-bold text-gradient">FreeTime</h1>
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('privileges')} className="text-sm font-medium hover:text-primary transition-colors">
              Привилегии
            </button>
            <button onClick={() => scrollToSection('store')} className="text-sm font-medium hover:text-primary transition-colors">
              Магазин
            </button>
            <button onClick={() => scrollToSection('rules')} className="text-sm font-medium hover:text-primary transition-colors">
              Правила
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-primary transition-colors">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2">
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

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Icon name="Palette" size={16} />
                <span className="hidden sm:inline">Тема</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onThemeChange('bright')}>
                <Icon name="Sun" size={16} className="mr-2" />
                Светлая
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onThemeChange('dark')}>
                <Icon name="Moon" size={16} className="mr-2" />
                Тёмная
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onThemeChange('green')}>
                <Icon name="Leaf" size={16} className="mr-2" />
                Зелёная
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onThemeChange('gamer')}>
                <Icon name="Gamepad2" size={16} className="mr-2" />
                Геймерская
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
