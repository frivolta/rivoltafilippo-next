import styled from "styled-components"
import { themeGet } from "styled-system"

export const TimelineWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 990px) {
    flex-direction: column;
  }
`
export const TimelineItem = styled.div`
  background-color: ${themeGet("colors.primary")};
  flex: 1 1 0;
  text-align: center;
  padding-top: 48px;
  padding-bottom: 48px;
  margin: 0 8px 0;
  box-shadow: 5px 17px 51px -13px rgba(0,0,0,.57);
  font-size: 14px;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  opacity: 0.68;
  min-width: 25%;
  max-width:25%;

  &:first-child{
    margin-left:0;
  }
 
  &:last-child{
    margin-right:0;
  }
  
  &.active{
    opacity: 1;
  }

  @media (max-width: 990px) {
    min-width: 100%;
    max-width:100%;
    flex: 1 1 100%;
    margin: 16px 0;
  }
  @media (max-width: 575px) {
  }
}`
