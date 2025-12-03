import Icon from '@/components/ui/icon';

interface FooterProps {
  setActiveSection: (section: string) => void;
}

const Footer = ({ setActiveSection }: FooterProps) => {
  return (
    <footer className="mt-16 bg-white border-t border-green-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Leaf" className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-lg font-heading">ЭкоЧай</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Натуральные чаи и травяные сборы для здоровья и гармонии
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 font-heading">Навигация</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button onClick={() => setActiveSection('catalog')} className="hover:text-primary">Каталог</button></li>
              <li><button onClick={() => setActiveSection('about')} className="hover:text-primary">О бренде</button></li>
              <li><button onClick={() => setActiveSection('delivery')} className="hover:text-primary">Доставка</button></li>
              <li><button onClick={() => setActiveSection('contacts')} className="hover:text-primary">Контакты</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 font-heading">Контакты</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>+7 (495) 123-45-67</li>
              <li>info@ecotea.ru</li>
              <li>г. Москва, ул. Зеленая, 15</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2024 ЭкоЧай. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
