import styled from "styled-components";
import React from "react";

//dark mode toggler
const ToggleWrapper = styled.div`
  width: 50px;
  min-width: 50px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid #666;
  margin-left: auto;
  margin-right: 0;
  background-image: linear-gradient(to right, #673b9a, #ffb80e);
  cursor: pointer;

  @media (max-width: 1024px) {
    margin-right: 5%;
  }
`;

const Notch = styled.div`
  height: 21px;
  width: 21px;
  border: 1px solid #666;
  margin-top: 1px;
  background: white;
  border-radius: 50%;
  transition: transform 0.1 linear;
  transform: translate(${(p) => (p.isActive ? "26px" : "1px")});
`;

export function Toggle({ isActive, onToggle }) {
  return (
    <ToggleWrapper onClick={onToggle}>
      <Notch isActive={isActive} />
    </ToggleWrapper>
  );
}
