import React from "react";

// Add a date property to each event
const events = [
  { title: "Cabbage", date: "2024-09-09", id: 1 },
  { title: "Garlic", date: "2024-09-08", id: 2 },
  { title: "Apple", date: "2024-09-09", id: 3 },
];

export default function Events() {
  // Get today's date in the format YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];

  // Filter events to show only today's events based on the date comparison
  const todayEvents = events.filter((event) => event.date === today);

  const listItems = todayEvents.map((event) => (
    <li key={event.id} style={{ color: "black" }}>
      {event.title}
    </li>
  ));

  return <ul>{listItems}</ul>;
}
