// src/components/EventGallery.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import EventFilter from "./EventFilter";
import EventCard from "./EventCard";
import EventPopup from "./EventPopup";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../reduxToolkit/slices/eventsSlice.js";

const categories = [
  "All",
  "Plantation day",
  "Annual day",
  "Sports day",
  "NCC",
  "Science labs",
  "Alumni association",
  "Cleanliness drive",
];

const GalleryWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const EventCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px 10px;
`;

const Banner = styled.div`
  background-image: url("nccscienceexhibition.png");
  padding: 40px 20px;
  text-align: center;
  margin-bottom: 20px;
  background-blend-mode: overlay;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("nccscienceexhibition.png");
  background-position: center bottom;

  h1 {
    margin: 0;
    font-size: 2.5em;
    color: #fff;
  }

  p {
    color: #fff;
  }
`;

const LoadMoreButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #fff;
  color: red;
  border: 1px solid red;
  border-radius: 4px;
  cursor: pointer;
`;

const EventGallery = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => {
    return state.events.events;
  });

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const [currentCategory, setCurrentCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(null);


  const filteredEvents =
    currentCategory === "All"
      ? events
      : events.filter(
          (event) => event?.attributes.category === currentCategory
        );

  return (
    <GalleryWrapper>
      <Banner>
        <h1>Our events gallery</h1>
        <p>
          Events at DBITR are filled with joyous occasions, cultural gatherings,
          and learning opportunities that bring us all together.
        </p>
      </Banner>
      <EventFilter
        categories={categories}
        currentCategory={currentCategory}
        onCategoryChange={setCurrentCategory}
      />
      <EventCards>
        {filteredEvents.map((event) => (
          <EventCard key={event?.id} event={event} onClick={setSelectedEvent} />
        ))}
      </EventCards>
      <LoadMoreButton>View more</LoadMoreButton>
      {selectedEvent && (
        <EventPopup
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </GalleryWrapper>
  );
};

export default EventGallery;
