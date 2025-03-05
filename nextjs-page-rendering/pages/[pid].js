import path from "path";
import fs from "node:fs/promises";

export default function ProductDetailPage(props) {
  const { product } = props;

  //   if (!product) {
  //     return <p>Loading...</p>;
  //   }

  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const readFile = await fs.readFile(filePath);
  const data = JSON.parse(readFile);
  return data;
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;
  const data = await getData();

  const product = data.products.find((p) => p.id === productId);

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((p) => p.id);
  const pathWithParams = ids.map((id) => ({ params: { pid: id } }));
  return {
    paths: pathWithParams,
    // fallback: true, // 위에 로딩 추가가 필요.
    // fallback: "blocking", // 로딩없이 처리해줌.
    fallback: false,
  };
}
