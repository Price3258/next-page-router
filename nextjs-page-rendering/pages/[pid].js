import path from "path";
import fs from "node:fs/promises";

export default function ProductDetailPage(props) {
  const { product } = props;
  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const readFile = await fs.readFile(filePath);
  const data = JSON.parse(readFile);

  const product = data.products.find((p) => p.id === productId);

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: "p1" } },
      { params: { pid: "p2" } },
      { params: { pid: "p3" } },
      { params: { pid: "p4" } },
    ],
    fallback: false,
  };
}
