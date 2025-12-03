import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import ProductCard from './ProductCard';

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

interface ContentSectionsProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  mockProducts: Product[];
  addToCart: (product: Product) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedEffect: string;
  setSelectedEffect: (effect: string) => void;
  filteredProducts: Product[];
  categories: string[];
  effects: string[];
  adminMode: boolean;
}

const ContentSections = ({
  activeSection,
  setActiveSection,
  mockProducts,
  addToCart,
  selectedCategory,
  setSelectedCategory,
  selectedEffect,
  setSelectedEffect,
  filteredProducts,
  categories,
  effects,
  adminMode
}: ContentSectionsProps) => {
  return (
    <main className="container mx-auto px-4 py-8">
      {activeSection === 'home' && (
        <section className="space-y-12 animate-fade-in">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 to-emerald-600 p-12 text-white">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-5xl font-bold mb-4 font-heading">Натуральные чаи и сборы трав</h2>
              <p className="text-xl mb-6 text-green-50">
                Авторские миксы для здоровья, бодрости и гармонии
              </p>
              <Button size="lg" variant="secondary" onClick={() => setActiveSection('catalog')}>
                Перейти в каталог
              </Button>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
              <Icon name="Leaf" className="absolute right-10 top-10 h-40 w-40" />
              <Icon name="Sparkles" className="absolute right-40 bottom-20 h-32 w-32" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Leaf" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 font-heading">100% натурально</h3>
                <p className="text-muted-foreground">Только органические ингредиенты без добавок</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 font-heading">Авторские рецепты</h3>
                <p className="text-muted-foreground">Уникальные сочетания трав для разных эффектов</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Sparkles" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 font-heading">Экологичная упаковка</h3>
                <p className="text-muted-foreground">Забота о природе в каждой детали</p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 font-heading">Популярные товары</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {mockProducts.slice(0, 3).map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'catalog' && (
        <section className="space-y-6 animate-fade-in">
          <div>
            <h2 className="text-4xl font-bold mb-2 font-heading">Каталог товаров</h2>
            <p className="text-muted-foreground">Выберите чай по типу или желаемому эффекту</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Тип чая</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Эффект</label>
              <div className="flex flex-wrap gap-2">
                {effects.map((effect) => (
                  <Button
                    key={effect}
                    variant={selectedEffect === effect ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedEffect(effect)}
                  >
                    {effect}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} showIngredients />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">По выбранным фильтрам товары не найдены</p>
            </div>
          )}
        </section>
      )}

      {activeSection === 'about' && (
        <section className="max-w-3xl mx-auto space-y-6 animate-fade-in">
          <h2 className="text-4xl font-bold font-heading">О бренде ЭкоЧай</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <p>
                ЭкоЧай — это семейное производство натуральных чайных сборов и травяных миксов. 
                Мы создаем уникальные рецепты, которые помогают людям заботиться о своем здоровье естественным путем.
              </p>
              <p>
                Все ингредиенты мы собираем в экологически чистых регионах, а процесс сушки и смешивания 
                происходит вручную с соблюдением традиционных технологий.
              </p>
              <div className="grid md:grid-cols-2 gap-4 pt-4">
                <div className="bg-secondary/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 font-heading">🌿 Наши ценности</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Натуральность ингредиентов</li>
                    <li>• Забота об окружающей среде</li>
                    <li>• Качество продукции</li>
                  </ul>
                </div>
                <div className="bg-secondary/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 font-heading">🏆 Сертификаты</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Органическое производство</li>
                    <li>• Качество и безопасность</li>
                    <li>• Экологическая упаковка</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {activeSection === 'delivery' && (
        <section className="max-w-3xl mx-auto space-y-6 animate-fade-in">
          <h2 className="text-4xl font-bold font-heading">Доставка и оплата</h2>
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3 font-heading">📦 Способы доставки</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                    <div>
                      <p className="font-medium">Курьерская доставка</p>
                      <p className="text-sm text-muted-foreground">По Москве и МО</p>
                    </div>
                    <span className="font-semibold">От 300 ₽</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                    <div>
                      <p className="font-medium">Почта России</p>
                      <p className="text-sm text-muted-foreground">По всей России</p>
                    </div>
                    <span className="font-semibold">От 250 ₽</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                    <div>
                      <p className="font-medium">Пункты выдачи</p>
                      <p className="text-sm text-muted-foreground">CDEK, Boxberry</p>
                    </div>
                    <span className="font-semibold">От 200 ₽</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3 font-heading">💳 Способы оплаты</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Банковская карта онлайн</li>
                  <li>• Наличными курьеру</li>
                  <li>• Оплата при получении</li>
                  <li>• Банковский перевод для юрлиц</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="text-sm">
                  <strong>🎁 Бесплатная доставка</strong> при заказе от 2000 ₽
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {activeSection === 'reviews' && (
        <section className="max-w-3xl mx-auto space-y-6 animate-fade-in">
          <h2 className="text-4xl font-bold font-heading">Отзывы покупателей</h2>
          <div className="space-y-4">
            {[
              { name: 'Анна К.', text: 'Потрясающий "Утренний заряд"! Действительно бодрит без кофеина. Вкус приятный, натуральный.', rating: 5 },
              { name: 'Михаил П.', text: 'Заказываю "Вечерний релакс" уже третий раз. Помогает расслабиться после работы. Качество на высоте!', rating: 5 },
              { name: 'Елена С.', text: 'Очень довольна "Иммунитет плюс". Зимой пью регулярно, болеть стала реже. Рекомендую!', rating: 5 }
            ].map((review, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-primary">{review.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <div className="flex gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <span key={i} className="text-yellow-500">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {activeSection === 'contacts' && (
        <section className="max-w-3xl mx-auto space-y-6 animate-fade-in">
          <h2 className="text-4xl font-bold font-heading">Контакты</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div>
                <h4 className="font-semibold mb-2 font-heading">📍 Адрес</h4>
                <p className="text-muted-foreground">г. Москва, ул. Зеленая, д. 15</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 font-heading">📞 Телефон</h4>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 font-heading">✉️ Email</h4>
                <p className="text-muted-foreground">info@ecotea.ru</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 font-heading">⏰ Время работы</h4>
                <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00<br/>Сб-Вс: 10:00 - 18:00</p>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {adminMode && (
        <section className="mt-12 animate-fade-in">
          <Card className="border-2 border-primary">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Shield" className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold font-heading">Админ-панель</h3>
              </div>
              
              <Tabs defaultValue="products">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="products">Товары</TabsTrigger>
                  <TabsTrigger value="orders">Заказы</TabsTrigger>
                </TabsList>
                
                <TabsContent value="products" className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold font-heading">Управление товарами</h4>
                    <Button>
                      <Icon name="Plus" className="h-4 w-4 mr-2" />
                      Добавить товар
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    {mockProducts.slice(0, 3).map((product) => (
                      <div key={product.id} className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <img src={product.image} alt={product.name} className="w-12 h-12 rounded object-cover" />
                          <div>
                            <p className="font-medium">{product.name}</p>
                            <p className="text-sm text-muted-foreground">{product.price} ₽</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Icon name="Pencil" className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Icon name="Trash2" className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="orders" className="space-y-4">
                  <h4 className="font-semibold font-heading">Последние заказы</h4>
                  <div className="text-center py-8 text-muted-foreground">
                    Заказов пока нет
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>
      )}
    </main>
  );
};

export default ContentSections;
