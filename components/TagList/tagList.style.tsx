import styled from "styled-components"
import { themeGet } from "styled-system"

export const TagListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  h3 {
    display: block;
  }
`

export const TagListItem = styled.div`
  flex: 25%;
  @media (max-width: 990px) {
    flex: 50%;
  }
  @media (max-width: 575px) {
    flex: 100%;
    flex-direction: column;
  }
`

export const TagSpan = styled.span`
  margin-bottom: 8px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  display: flex;
  color: ${themeGet("colors.black")};
  &:before {
    content: "•";
    padding-right: 5px;
    color: ${themeGet("colors.black")};
  }
`
