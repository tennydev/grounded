import { Fragment, useContext } from "react";
import { CategoriesContext } from "../contexts/categories.context";
import ProductCard from "../product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log(categoriesMap);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment>
          <h2>{title}</h2>
          <div className="shop-container">
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
