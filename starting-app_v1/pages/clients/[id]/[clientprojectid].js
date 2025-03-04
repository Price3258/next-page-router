import { useRouter } from "next/router";
import React from "react";

export default function SelectedClientProjectPage() {
  const router = useRouter();
  console.log(router.query);

  return <div>SelectedClientProjectPage</div>;
}
