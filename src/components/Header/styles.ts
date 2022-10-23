import styled from 'styled-components';
import { Layout } from 'antd';

const { Header } = Layout;

export const HeaderStyled = styled(Header)`
  display: flex;
  background-color: #f9f8f8;
  height: 56px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dddddd;
  padding: 0 20px;
  line-height: unset;
  .header__left {
    .page__title {
      font-size: 18px;
      color: #424242;
      margin: -3px 0 0;
    }
  }
  .header__right {
    display: flex;
    align-items: center;
    .imageQA {
      font-size: 26px;
      color: #c4c4c4;
      cursor: pointer;
      transition: all 0.2s;
      &:hover {
        color: #999;
      }
    }
    .drop-down {
      margin: 0 10px;
      cursor: pointer;
      font-size: 13px;
      color: #666666;
      .anticon {
        margin-left: 4px;
        color: #bbb;
        font-size: 9px;
      }
      small {
        font-size: 11px;
      }
    }
    .border {
      margin: 0 20px;
      width: 1px;
      height: 20px;
      background-color: rgba(0, 0, 0, 0.1);
    }
    .avatar {
      border: none;
      background: none;
      padding: 0;
      border-radius: 50%;
      cursor: pointer;
    }
    .flex {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const ModalContent = styled.div`
  .text-content {
    font-size: 13px;
    color: #424242;
    text-align: center;
  }
`;
