import Link from "next/link";
import React from "react";

const HomePage = (props) => {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">clients</Link>
        </li>
        <li>
          <Link href="/blog/123/213">Go blog 123/123</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
