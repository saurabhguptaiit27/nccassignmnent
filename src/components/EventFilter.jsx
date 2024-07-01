// src/components/EventFilter.js
import React from "react";
import styled from "styled-components";

const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
`;

const FilterButton = styled.button`
  padding: 10px 20px;
  border: 1px solid #e0e0e0;
  border-radius: 25px;
  background-color: ${(props) => (props.active ? "#00559A" : "#e0e0e0")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  cursor: pointer;

  &:hover {
    background-color: #0092ed;
    color: #fff;
  }
`;

const EventFilter = ({ categories, currentCategory, onCategoryChange }) => (
  <FilterWrapper>
    {categories.map((category) => (
      <FilterButton
        key={category}
        active={category === currentCategory}
        onClick={() => onCategoryChange(category)}
      >
        {category}
      </FilterButton>
    ))}
  </FilterWrapper>
);

export default EventFilter;
