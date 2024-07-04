import React from "react";
import styled from "styled-components";

const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  position: relative;

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }

  h3 {
    margin-top: 20px;
  }

  p {
    color: #757575;
  }
`;

const EventPopup = ({ event, onClose }) => (
  <PopupWrapper>
    <PopupContent>
      <button onClick={onClose}>×</button>
      <img
        src={event.attributes.eventImage.data[0].attributes.formats.thumbnail.url}
        alt={event.attributes.name}
      />
      <h3>{event.attributes.name}</h3>
      <p>{event.attributes.eventDate}</p>
    </PopupContent>
  </PopupWrapper>
);

export default EventPopup;
