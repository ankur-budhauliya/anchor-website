"use client";

import { EVENTS_CONFIG } from "@/constants/events";
import { EventCard } from "./event-card";

export function EventsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {EVENTS_CONFIG.categories.map((event, index) => (
        <EventCard key={event.id} event={event} index={index} />
      ))}
    </div>
  );
}
