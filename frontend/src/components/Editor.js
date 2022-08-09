import EventDetails from "./EventDetails";
import EventForm from "./EventForm";
import { useEventsContext } from "../hooks/useEventsContext";

export default function Editor() {
  const { events } = useEventsContext();
  return (
    <>
      <div className="events">
        {events &&
          events.map((event) => <EventDetails key={event._id} event={event} />)}
      </div>
      <EventForm />
    </>
  );
}
