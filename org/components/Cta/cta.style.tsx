import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

export const CtaWrappper = styled.div`
  backdrop-filter: blur(10px);
  background: linear-gradient(
    128deg,
    rgb(255, 34, 79) 0%,
    rgb(255, 14, 79) 100%
  );
  height: 100%;
  border-radius: 90px;
  box-shadow: rgba(0, 0, 0, 0.73) 0px 0.796192px 2.38858px -0.9375px,
    rgba(0, 0, 0, 0.69) 0px 2.41451px 7.24352px -1.875px,
    rgba(0, 0, 0, 0.592) 0px 6.38265px 19.148px -2.8125px,
    rgba(0, 0, 0, 0.25) 0px 20px 60px -3.75px;
  opacity: 1;
`;
export const CtaContainer = styled.div`
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  padding: 0 420px;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
`;
