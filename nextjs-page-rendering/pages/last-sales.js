import { useEffect, useState } from "react";

export default function LastSalesPage() {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const URL = process.env.NEXT_PUBLIC_FIREBASE_SALES_URL + "/sales.json";

  useEffect(() => {
    setIsLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const transformedSales = [];
        for (const key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }
        setSales(transformedSales);
        setIsLoading(false);
      });
  }, [URL]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!sales) {
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
