import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 5,
    title: "my first book",
    description: "first book i ever wrote",
  },
  {
    id: "p2",
    price: 2,
    title: "my sec book",
    description: "sec book i ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((prod) => (
          <ProductItem
            key={prod.id}
            title={prod.title}
            price={prod.price}
            description={prod.description}
            id={prod.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
