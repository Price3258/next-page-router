import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
import { BASE_URL } from "@/lib/constant";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;
  const [loadedEvents, setLoadedEvents] = useState();

  const { data, error } = useSWR(BASE_URL + "/events.json", fetcher);

  useEffect(() => {
    if (data) {
      const events = [];

      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }
      setLoadedEvents(events);
    }
  }, [data]);

  if (!loadedEvents) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12 ||
    error
  ) {
    return (
      <>
        <ErrorAlert>
          <p>invalid filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </>
    );
  }

  const filteredEvents =
    loadedEvents.length > 0 &&
    loadedEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getFullYear() === numYear &&
        eventDate.getMonth() === numMonth - 1
      );
    });
  const formattedDate = new Date(numYear, numMonth - 1);

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </>
    );
  }

  return (
    <div>
      <ResultsTitle date={formattedDate} />
      <EventList items={filteredEvents} />
    </div>
  );
}
