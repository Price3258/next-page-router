import path from "path";
import fs from "node:fs/promises";

function HomePage(props) {
  const { products } = props;
  const renderProducts = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));
  return <ul>{renderProducts}</ul>;
}

export async function getStaticProps() {
  console.log("re-generating...");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");

  const readFile = await fs.readFile(filePath);

  const data = JSON.parse(readFile);

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}

export default HomePage;
