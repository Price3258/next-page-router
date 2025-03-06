import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { getFeaturedEvents } from "@/helpers/api-util";
import { useRouter } from "next/router";
import React from "react";

export default function HomePage(props) {
  const router = useRouter();

  const { featuredEvents } = props;

  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={featuredEvents} />
    </>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      featuredEvents,
    },
  };
}
