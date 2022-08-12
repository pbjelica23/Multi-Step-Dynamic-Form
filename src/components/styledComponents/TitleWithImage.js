import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import img1 from "../../assets/images/monkey.png";

const WrapHead = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 50px 0px;

  h2 {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 2rem;
    color: #fff;
    margin-top: 50px;
  }

  img {
    width: 150px;
    margin-left: auto;
    display: block;
  }

  @media (max-width: 1024px) {
    margin-left: 5%;
    margin-right: 5%;

    h2 {
      margin-top: 25px;
    }

    img {
      width: 100px;
    }
  }
`;

export function TitleWithImage() {
  const { t } = useTranslation();
  return (
    <WrapHead>
      <h2>{t("register")}</h2>
      <img src={img1} alt="Illustration" />
    </WrapHead>
  );
}
