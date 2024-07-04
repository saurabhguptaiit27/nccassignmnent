// src/components/EventCard.js
import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  margin: 10px;
  width: calc(33.333% - 20px);

  img {
    width: 100%;
    height: auto;
  }

  h3 {
    padding: 10px;
    margin: 0;
  }

  p {
    padding: 0 10px 10px;
    margin: 0;
    color: #757575;
  }
`;


const EventCard = ({ event, onClick }) => (
  <CardWrapper onClick={() => onClick(event)}>
    <img
      src={
        event.attributes.eventImage.data[0].attributes?.formats?.thumbnail.url
      }
      alt={event.attributes.name}
    />
    <hr />
    <h3>{event.attributes.name}</h3>
    <p>{event.attributes.eventDate}</p>
  </CardWrapper>
);

export default EventCard;
