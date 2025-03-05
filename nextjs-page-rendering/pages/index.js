function HomePage(props) {
  console.log(props);
  const { products } = props;
  const renderProducts = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));
  return <ul>{renderProducts}</ul>;
}

export async function getStaticProps() {
  return {
    props: {
      products: [
        { id: "p1", title: "Product 1" },
        { id: "p3", title: "Product 3" },
      ],
    },
  };
}

export default HomePage;
