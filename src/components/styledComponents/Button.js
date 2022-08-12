import styled from "styled-components";

const Button = styled.button`
  background-color: rgb(255, 184, 14);
  color: rgb(57, 0, 124);
  border-radius: 0.5rem;
  border: 1px solid rgb(255, 184, 14);
  font-family: "Poppins";
  font-weight: 400;
  font-size: 1rem;
  padding: 0.5rem 1.25rem;
  cursor: pointer;
  margin-right: 1rem;

  &:hover {
    background-color: rgb(255, 157, 0);
    color: rgb(255, 255, 255);
  }
`;

export { Button };
