import styled from 'styled-components';

// import { MENU_COLLAPSED_WIDTH, MENU_WIDTH } from 'constant';

type Props = {
  collapsedMenu: boolean;
};

export default styled.section<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: calc(100wh - 196px);
  position: fixed;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 99;
`;
