import Link from "next/link";
import React from "react";

export default function ClientPage() {
  const clients = [
    { id: "max", name: "max" },
    { id: "test", name: "test" },
  ];
  return (
    <div>
      <h1>ClientPage</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: {
                  id: client.id,
                },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
