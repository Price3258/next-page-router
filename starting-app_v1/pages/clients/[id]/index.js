import { useRouter } from "next/router";
import React from "react";

export default function ClientProjectsPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    // router.push("/clients/max/projecta");
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: {
        id: "max",
        clientprojectid: "projecta",
      },
    });
  }

  return (
    <div>
      <h1>ClientProjectsPage</h1>
      <button onClick={loadProjectHandler}>load project A</button>
    </div>
  );
}
