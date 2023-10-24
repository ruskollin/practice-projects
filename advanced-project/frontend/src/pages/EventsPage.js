import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Concert",
  },
  {
    id: "e2",
    title: "Travel",
  },
];

function EventsPage() {
  return (
    <div>
      <h1>EVENTS</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            {/* <Link to={`/events/{event.id}`}> </Link> */}
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsPage;
