import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/helpers/api-util";
import Head from "next/head";

export default function HomePage(props) {
  const { featuredEvents } = props;

  return (
    <>
      <div>
        <Head>
          <title>Nextjs Events</title>
          <meta name="description" content="Find a lot of news" />
        </Head>
      </div>
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
    revalidate: 1800,
  };
}
