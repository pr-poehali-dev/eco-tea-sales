import { Leaf, Heart, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onClick?: (product: Product) => void;
  showIngredients?: boolean;
}

const effectIcons: { [key: string]: any } = {
  'Бодрость': Zap,
  'Релакс': Heart,
  'Здоровье': Leaf,
  'Энергия': Sparkles,
  'Концентрация': Zap
};

const ProductCard = ({ product, onAddToCart, onClick, showIngredients = false }: ProductCardProps) => {
  const handleCardClick = () => {
    if (onClick) onClick(product);
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all animate-scale-in cursor-pointer" onClick={handleCardClick}>
      <img src={product.images[0]} alt={product.name} className="w-full h-48 object-cover" />
      <CardContent className="pt-4">
        <Badge variant="secondary" className="mb-2">{product.category}</Badge>
        <h4 className="font-semibold text-lg mb-2 font-heading">{product.name}</h4>
        <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {product.effects.map((effect) => {
            const IconComponent = effectIcons[effect] || Leaf;
            return (
              <Badge key={effect} variant="outline" className="text-xs">
                <IconComponent className="h-3 w-3 mr-1" />
                {effect}
              </Badge>
            );
          })}
        </div>
        {showIngredients && (
          <div className="text-xs text-muted-foreground">
            Состав: {product.ingredients.join(', ')}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
        {onAddToCart && (
          <Button onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}>
            <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
            В корзину
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;