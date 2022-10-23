import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: Poppins;
    src: url(/assets/fonts/SVN-Poppins-Regular.otf);
  }
  *{
    font-family:Helvetica;
  }
  .ant-input-affix-wrapper-readonly {
      background: #f9f8f8;
      border-color: #eaeaea;
      color: #2a2a2a;
      &:hover {
        border-color: #eaeaea;
      }
      &.ant-input-affix-wrapper-focused {
        box-shadow: none;
      }
      .ant-input {
        background-color: transparent;
      }
    }
`;
