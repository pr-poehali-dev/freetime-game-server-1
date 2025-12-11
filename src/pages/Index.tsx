import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Privileges from '@/components/Privileges';
import Store from '@/components/Store';
import Rules from '@/components/Rules';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [theme, setTheme] = useState<'bright' | 'dark' | 'green' | 'gamer'>('bright');

  const changeTheme = (newTheme: 'bright' | 'dark' | 'green' | 'gamer') => {
    setTheme(newTheme);
    const root = document.documentElement;
    root.classList.remove('dark', 'green', 'gamer');
    
    if (newTheme === 'dark') {
      root.classList.add('dark');
    } else if (newTheme === 'green') {
      root.classList.add('green');
    } else if (newTheme === 'gamer') {
      root.classList.add('gamer');
    }
  };

  return (
    <div className="min-h-screen">
      <Header theme={theme} onThemeChange={changeTheme} />
      <Hero />
      <Privileges />
      <Store />
      <Rules />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
