import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import { toast } from 'sonner';

const Hero = () => {
  const serverIP = 'FreeTime.gomc.me';
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    toast.success('IP скопирован в буфер обмена!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-gradient">
            FreeTime Server
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Лучший игровой сервер Minecraft с уникальными привилегиями, захватывающими режимами и дружным комьюнити
          </p>

          <Card className="inline-flex items-center gap-4 p-4 hover-scale hover-glow">
            <div className="flex items-center gap-2">
              <Icon name="Server" size={24} className="text-primary" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">IP сервера</p>
                <p className="font-display font-bold text-lg">{serverIP}</p>
              </div>
            </div>
            <Button onClick={copyToClipboard} variant={copied ? 'default' : 'outline'} className="gap-2">
              {copied ? (
                <>
                  <Icon name="Check" size={16} />
                  Скопировано
                </>
              ) : (
                <>
                  <Icon name="Copy" size={16} />
                  Копировать
                </>
              )}
            </Button>
          </Card>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="p-6 hover-scale hover-glow">
              <Icon name="Users" size={32} className="text-primary mx-auto mb-3" />
              <h3 className="font-display font-semibold text-lg mb-2">1000+ игроков</h3>
              <p className="text-sm text-muted-foreground">Активное комьюнити онлайн 24/7</p>
            </Card>
            <Card className="p-6 hover-scale hover-glow">
              <Icon name="Zap" size={32} className="text-primary mx-auto mb-3" />
              <h3 className="font-display font-semibold text-lg mb-2">Без лагов</h3>
              <p className="text-sm text-muted-foreground">Мощные серверы для комфортной игры</p>
            </Card>
            <Card className="p-6 hover-scale hover-glow">
              <Icon name="Shield" size={32} className="text-primary mx-auto mb-3" />
              <h3 className="font-display font-semibold text-lg mb-2">Защита</h3>
              <p className="text-sm text-muted-foreground">Античит и модерация 24/7</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
