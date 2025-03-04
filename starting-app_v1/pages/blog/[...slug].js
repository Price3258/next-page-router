import { useRouter } from "next/router";
import React from "react";

export default function BlogPostsPage() {
  const router = useRouter();
  console.log(router.query);

  return <div>BlogPostsPage</div>;
}
