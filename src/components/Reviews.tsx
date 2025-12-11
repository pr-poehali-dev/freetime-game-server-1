import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface Review {
  nickname: string;
  text: string;
  rating: number;
  date: string;
}

const reviews: Review[] = [
  {
    nickname: 'MasterCraft',
    text: 'Отличный сервер! Играю уже полгода, администрация адекватная, нет лагов. Купил привилегию Граф - очень доволен возможностями.',
    rating: 5,
    date: '15.11.2024',
  },
  {
    nickname: 'DiamondHunter',
    text: 'Самый лучший сервер, на котором я играл. Много режимов, активное комьюнити. Рекомендую всем!',
    rating: 5,
    date: '10.11.2024',
  },
  {
    nickname: 'ShadowKnight',
    text: 'Хороший сервер, но иногда бывают проблемы с чатом. В остальном всё отлично, буду играть дальше.',
    rating: 4,
    date: '08.11.2024',
  },
  {
    nickname: 'CreeperKing',
    text: 'Играю с друзьями, очень нравится режим выживания. Привилегия Виконт даёт много плюшек за небольшие деньги.',
    rating: 5,
    date: '05.11.2024',
  },
  {
    nickname: 'EnderWarrior',
    text: 'Сервер норм, но модерация иногда слишком строгая. В целом рекомендую для игры с друзьями.',
    rating: 4,
    date: '02.11.2024',
  },
  {
    nickname: 'RedstoneGuru',
    text: 'Отличная работа администрации, быстро решают проблемы. Сервер стабильный, без читеров.',
    rating: 5,
    date: '28.10.2024',
  },
  {
    nickname: 'BlockBuilder',
    text: 'Классный сервер для строительства! Много места, защита территории работает идеально.',
    rating: 5,
    date: '25.10.2024',
  },
  {
    nickname: 'PvPMaster',
    text: 'Хороший баланс PvP, но хотелось бы больше арен. Привилегия Герцог стоит своих денег.',
    rating: 4,
    date: '20.10.2024',
  },
  {
    nickname: 'MineLegend',
    text: 'Играю уже год, сервер только развивается. Часто добавляют новые фишки и режимы.',
    rating: 5,
    date: '15.10.2024',
  },
  {
    nickname: 'CraftMaster',
    text: 'Сервер хороший, но цены на некоторые привилегии высоковаты. В остальном всё супер!',
    rating: 3,
    date: '10.10.2024',
  },
];

const Reviews = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name={i < rating ? 'Star' : 'Star'}
        size={16}
        className={i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient">
            Отзывы игроков
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Что говорят наши игроки о FreeTime сервере
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="p-6 hover-scale animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground font-display">
                    {review.nickname.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-display font-semibold">{review.nickname}</h4>
                  <div className="flex items-center gap-1 mt-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{review.text}</p>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Icon name="Calendar" size={14} />
                {review.date}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 max-w-2xl">
            <div className="flex items-center gap-4">
              <Icon name="MessageCircle" size={32} className="text-primary flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-display font-semibold mb-2">Оставьте свой отзыв</h4>
                <p className="text-sm text-muted-foreground">
                  Напишите боту @FreeTimeSRV_bot команду /review и поделитесь впечатлениями о сервере!
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
