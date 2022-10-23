import styled from 'styled-components';

type Props = {};

export default styled.section<Props>`
  padding: 30px;
  margin-bottom: 100px;
  .text-label {
    font-size: 13px;
    color: #424242;
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
  .require {
    font-family: 'Lato';
    font-size: 20px;
    color: #f0330a;
  }
  .form-input {
    width: 30%;
    .text-input {
      font-size: 14px;
    }
    .input_small {
      width: 120px;
    }
    .input-month-day {
      width: 80px;
    }
    .text-label-content {
      font-size: 12px;
      color: #777777;
      margin: 0 10px 0 7px;
    }
  }
  .wrap-submit {
    height: 95px;
    width: calc(100% - 240px);
    transition: width 0.3s;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.06);
    .wrap-button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      .btn {
        border-radius: 5px;
        border: none;
        width: 16%;
        height: 40px;
        cursor: pointer;
        &_submit {
          margin-right: 12px;
          color: #ffffff;
          background-color: #f6ac00;
          box-shadow: 1px 1px 4px rgba(68, 68, 68, 0.2);
        }
        &_close {
          background: #ffffff;
          border: 1px solid #d9d9d9;
          box-shadow: 1px 1px 4px rgba(68, 68, 68, 0.2);
          color: #777777;
        }
      }
    }
  }
`;
