import styled from "styled-components"

export const IconWrapper = styled.div`
  position: relative;
  width: 25%;
  display: inline-block;
  padding: 10px 0;
  @media (max-width: 990px) {
    width: 50%;
  }
  @media (max-width: 575px) {
    width: 100%;
    display: block;
    margin: 0 auto;
    text-align: center;
  }
  img {
    position: relative;
    display: block;
    max-width: 50px;
    @media (max-width: 575px) {
      margin: 0 auto;
      text-align: center;
    }
  }
  span {
    position: relative;
    display: block;
    margin: 15px 0;
    font-weight: 700;
  }
`
