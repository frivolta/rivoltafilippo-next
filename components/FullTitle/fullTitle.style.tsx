import styled from "styled-components"

export const FullTitleWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  padding: 16px 0;
  @media (max-width: 990px) {
    padding: 48px 0 24px 0;
  }
  @media (max-width: 575px) {
    padding: 32px 0 16px 0;
  }
  h3 {
    display: block;
  }
  span {
    margin-bottom: 8px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 16px;
    display: block;
  }
`
