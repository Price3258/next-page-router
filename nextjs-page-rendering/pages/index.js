import path from "path";
import fs from "node:fs/promises";
import Link from "next/link";

function HomePage(props) {
  const { products } = props;
  const renderProducts = products.map((product) => (
    <li key={product.id}>
      <Link href={`/products/${product.id}`}>{product.title}</Link>
    </li>
  ));
  return <ul>{renderProducts}</ul>;
}

export async function getStaticProps() {
  console.log("re-generating...");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");

  const readFile = await fs.readFile(filePath);

  const data = JSON.parse(readFile);

  if (!data) {
    return {
      redirect: {
        destination: "no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return {
      return: {
        notFound: true,
      },
    };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}

export default HomePage;
