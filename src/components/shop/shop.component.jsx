import { Fragment, useContext  } from 'react';
import { ShopContext } from '../contexts/shop.context';
import ProductCard from '../product-card/product-card.component';
import './shop.styles.scss';

const Shop = () => {
    

  const currentShop = useContext(ShopContext);

  return (
    <Fragment>
      <div className='shop-container'>
          {currentShop.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </div>
    </Fragment>
  );
};

export default Shop;