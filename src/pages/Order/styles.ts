import styled from 'styled-components';

type Props = {};

export default styled.section<Props>`
  .container {
    padding: 30px;
    .text-label {
      font-size: 13px;
      color: #777777;
    }
    .wrap-button {
      position: absolute;
      right: 0;
      margin: 12px 30px;
      z-index: 9;
      .btn {
        padding: 0 15px;
        height: 40px;
        cursor: pointer;
        font-size: 13px;
        font-weight: 700;
        margin-left: 10px;
      }
      .btn-active {
        background-color: #f6ac00;
        border: 1px solid #f6ac00;
        box-shadow: 1px 1px 4px rgba(68, 68, 68, 0.2);
        border-radius: 5px;
        color: #ffffff;
        .icon {
          font-size: 18px;
        }
      }
    }
    .form-search {
      display: flex;
      align-items: center;
      .item {
        width: 25%;
        margin-right: 20px;
      }
      .label-reset {
        font-size: 14px;
        cursor: pointer;
        text-decoration-line: underline;
        color: #00a3a5;
      }
      .btn-search {
        background: #ffffff;
        border: 1px solid #00a3a5;
        box-shadow: 1px 1px 4px rgba(68, 68, 68, 0.2);
        border-radius: 5px;
        margin-right: 10px;
        font-size: 14px;
        color: #00a3a5;
        cursor: pointer;
        .icon-search {
          font-size: 18px;
          margin-right: 3px;
        }
      }
    }
    .text-count {
      position: absolute;
      margin-top: 22px;
      font-size: 14px;
      color: #424242;
      z-index: 9;
    }
    .table {
      position: relative;
      margin-bottom: 80px;
      .ant-table-thead {
        border-radius: 2px 2px 0px 0px;
        .ant-table-cell {
          background-color: #ebebeb;
          font-weight: 700;
          font-size: 11px;
          color: #2a2a2a;
          margin: 0 3px;
          padding: 20px 16px;
          &:before {
            display: none;
          }
        }
      }
      .ant-table-tbody {
        .ant-table-cell {
          font-size: 12px;
          color: #424242;
          word-wrap: break-word;
          word-break: break-word;
          padding: 10px 16px;
          vertical-align: top;
          .list-item {
            padding-left: 10px;
          }
        }
        .icon {
          color: #c4c4c4;
          font-size: 20px;
          cursor: pointer;
        }
        & > tr.ant-table-row-selected > td {
          background-color: #fdf7ea;
        }
      }
      .ant-pagination-item-active {
        border-color: #00a3a5;
        a {
          color: #00a3a5;
        }
      }
    }
  }
`;
