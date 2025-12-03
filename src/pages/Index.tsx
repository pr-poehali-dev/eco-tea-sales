import { useState } from 'react';
import Header from '@/components/Header';
import ContentSections from '@/components/ContentSections';
import Footer from '@/components/Footer';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  effects: string[];
  ingredients: string[];
  description: string;
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Утренний заряд',
    price: 450,
    image: 'https://cdn.poehali.dev/projects/c7f49f14-6d72-4166-864d-5894211cb8c4/files/748ce1fd-da0d-48fc-b05e-7da354b4436e.jpg',
    category: 'Зелёный чай',
    effects: ['Бодрость', 'Энергия'],
    ingredients: ['Зеленый чай', 'Мята', 'Лимонник'],
    description: 'Бодрящий чай для активного начала дня'
  },
  {
    id: 2,
    name: 'Вечерний релакс',
    price: 520,
    image: 'https://cdn.poehali.dev/projects/c7f49f14-6d72-4166-864d-5894211cb8c4/files/4923bfc1-57b3-4f27-8725-cfb5235a907b.jpg',
    category: 'Травяной чай',
    effects: ['Релакс', 'Сон'],
    ingredients: ['Ромашка', 'Лаванда', 'Мелисса'],
    description: 'Успокаивающий чай для спокойного вечера'
  },
  {
    id: 3,
    name: 'Иммунитет плюс',
    price: 590,
    image: 'https://cdn.poehali.dev/projects/c7f49f14-6d72-4166-864d-5894211cb8c4/files/75ae54db-2eb2-4741-ae89-c60e5ef705ed.jpg',
    category: 'Фруктовый чай',
    effects: ['Здоровье', 'Иммунитет'],
    ingredients: ['Шиповник', 'Имбирь', 'Облепиха'],
    description: 'Витаминный микс для укрепления здоровья'
  },
  {
    id: 4,
    name: 'Чистота разума',
    price: 480,
    image: 'https://cdn.poehali.dev/projects/c7f49f14-6d72-4166-864d-5894211cb8c4/files/748ce1fd-da0d-48fc-b05e-7da354b4436e.jpg',
    category: 'Белый чай',
    effects: ['Концентрация', 'Ясность'],
    ingredients: ['Белый чай', 'Жасмин', 'Женьшень'],
    description: 'Чай для ясности ума и концентрации'
  },
  {
    id: 5,
    name: 'Детокс-сбор',
    price: 550,
    image: 'https://cdn.poehali.dev/projects/c7f49f14-6d72-4166-864d-5894211cb8c4/files/4923bfc1-57b3-4f27-8725-cfb5235a907b.jpg',
    category: 'Травяной чай',
    effects: ['Очищение', 'Здоровье'],
    ingredients: ['Крапива', 'Одуванчик', 'Фенхель'],
    description: 'Очищающий сбор для детокса организма'
  },
  {
    id: 6,
    name: 'Цветочная гармония',
    price: 620,
    image: 'https://cdn.poehali.dev/projects/c7f49f14-6d72-4166-864d-5894211cb8c4/files/75ae54db-2eb2-4741-ae89-c60e5ef705ed.jpg',
    category: 'Цветочный чай',
    effects: ['Релакс', 'Настроение'],
    ingredients: ['Роза', 'Хризантема', 'Жасмин'],
    description: 'Нежный цветочный чай для хорошего настроения'
  }
];

const Index = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedEffect, setSelectedEffect] = useState('Все');
  const [adminMode, setAdminMode] = useState(false);

  const categories = ['Все', 'Зелёный чай', 'Травяной чай', 'Фруктовый чай', 'Белый чай', 'Цветочный чай'];
  const effects = ['Все', 'Бодрость', 'Релакс', 'Здоровье', 'Энергия', 'Концентрация'];

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const getTotalPrice = () => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  };

  const filteredProducts = mockProducts.filter(product => {
    const categoryMatch = selectedCategory === 'Все' || product.category === selectedCategory;
    const effectMatch = selectedEffect === 'Все' || product.effects.includes(selectedEffect);
    return categoryMatch && effectMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Header
        cart={cart}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        adminMode={adminMode}
        setAdminMode={setAdminMode}
        removeFromCart={removeFromCart}
        getTotalPrice={getTotalPrice}
      />
      
      <ContentSections
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        mockProducts={mockProducts}
        addToCart={addToCart}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedEffect={selectedEffect}
        setSelectedEffect={setSelectedEffect}
        filteredProducts={filteredProducts}
        categories={categories}
        effects={effects}
        adminMode={adminMode}
      />
      
      <Footer setActiveSection={setActiveSection} />
    </div>
  );
};

export default Index;
