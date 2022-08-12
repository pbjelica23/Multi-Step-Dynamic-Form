import styled from "styled-components";

const Container = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  //background: ${(p) => (p.header ? "#673B9A" : "#fff")};

  .header {
    display: flex;
    padding: 1rem 0;
  }

  .languageSwitcher {
    display: flex;
  }

  .success p {
    color: #fff;
    font-family: "Poppins";
    font-size: 1.5rem;
  }

  .success span {
    color: #fff;
    font-family: "Poppins";
  }

  .red {
    color: #db1f12;
    margin-top: 5px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    .languageSwitcher {
      margin-left: 5%;
    }
  }
`;

export { Container };
