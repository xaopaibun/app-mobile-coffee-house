import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  .ant-menu-item .ant-menu-item-selected {
    background-color: #b039cc !important;
  }
  .sider {
    min-height: 100vh;
    background-color: #ffffff;
    border-right: 1px solid #e5e5e5;
    ::-webkit-scrollbar {
      display: none;
    }
    .wrap-logo {
      display: flex;
      justify-content: center;
      user-select: none;
      .image-logo {
        width: 60px;
        margin: 10px 0 68px -1px;
        cursor: pointer;
      }
      .image-logo-large {
        width: 180px;
        height: 180px;
        margin: 8px auto 46px;
        transition: width 0.3s;
        cursor: pointer;
      }
    }
    .site-layout-background {
      display: flex;
      justify-content: flex-end;
      padding: 10px 10px 0 10px;
      color: rgba(0, 0, 0, 0.85);
      background-color: #ffffff;
      color: #cccccc;
      .trigger {
        font-size: 20px;
      }
      .anticon-menu-unfold.trigger {
        display: block;
        margin: 0 auto;
      }
    }
    .ant-menu {
      font-size: 15px;
      border-right: unset;
      .ant-menu-item,
      .ant-menu-submenu {
        margin: 15px 0;
        color: #424242;
        .anticon,
        .ant-menu-submenu-arrow {
          color: #c4c4c4;
        }
        .title-home {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          svg {
            width: 10px;
            height: 10px;
          }
          &:hover {
            color: #00a3a5;
            font-weight: 700;
            .anticon {
              color: #00a3a5;
            }
          }
        }
        .official-text {
          width: 80%;
          line-height: 20px;
        }
        .ant-menu-submenu-title:hover,
        .ant-menu-item:hover {
          color: #00a3a5;
          font-weight: 700;
          .anticon {
            color: #00a3a5;
          }
        }
        .ant-menu-item-icon {
          width: 15%;
          font-size: 18px !important;
        }
        &::after {
          border-right: unset;
        }
      }

      .ant-menu-item-selected {
        background-color: rgba(233, 224, 203, 0.15);
        font-weight: 700;
        .anticon,
        .ant-menu-submenu-arrow {
          color: #000000;
        }
        &::after {
          border-left: 4px solid #f6ac00;
          border-right: unset;
          left: 0;
        }
      }

      .ant-menu-submenu-selected {
        .ant-menu-submenu-title {
          .anticon,
          .ant-menu-submenu-arrow {
            color: #000000;
          }
          &::after {
            border-left: 4px solid #f6ac00;
            border-right: unset;
            left: 0;
          }
        }
      }

      .sub-menu-setting {
        .ant-menu-item-group-title {
          padding: 0 34px 0 24px;
          font-weight: bold;
          color: #41a8a9;
          font-size: 12px;
          .anticon {
            font-size: 18px;
            vertical-align: middle;
            margin-top: -2px;
          }
        }
      }

      .collapse {
        .ant-menu-item-group-title {
          text-align: center;
          padding: 0;
        }
        .sub-menu {
          color: #c4c4c4;
        }
      }
    }
  }
  .ant-menu-item-active,
  .ant-menu-submenu-active {
    .ant-menu-submenu-title {
      color: #00a3a5;
      font-weight: 700;
    }
    .ant-menu-title-content {
      color: #00a3a5;
      font-weight: 700;
    }
    .anticon {
      color: #00a3a5;
    }
    .ant-menu-submenu-arrow {
      color: #00a3a5;
    }
  }
`;
