import { useRouter } from "next/router";
import React from "react";

export default function ClientProjectsPage() {
  const router = useRouter();
  console.log(router.query);
  return <div>ClientProjectsPage</div>;
}
