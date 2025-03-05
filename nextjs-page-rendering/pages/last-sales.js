import { useEffect, useState } from "react";
import useSWR from "swr";

const URL = process.env.NEXT_PUBLIC_FIREBASE_SALES_URL + "/sales.json";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
  // const [isLoading, setIsLoading] = useState(false);

  const { data, error, isLoading } = useSWR(URL, fetcher);

  useEffect(() => {
    if (data) {
      const transformedSales = [];
      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedSales);
    }
  }, [data]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(URL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const transformedSales = [];
  //       for (const key in data) {
  //         transformedSales.push({
  //           id: key,
  //           username: data[key].username,
  //           volume: data[key].volume,
  //         });
  //       }
  //       setSales(transformedSales);
  //       setIsLoading(false);
  //     });
  // }, [URL]);

  if (error) {
    return <p>Failed to load</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!sales && !data) {
    return <p>No data yet...</p>; // 클라이언트 사이드에서 데이터를 가져오기 때문에 사전렌더링이 이걸로 됨. ( 데이터가 없으니까 )
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} {sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
  const response = await fetch(URL);

  const data = await response.json();
  const transformedSales = [];
  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }
  return {
    props: {
      sales: transformedSales,
    },
    revalidate: 10,
  };
}
