import React, { HTMLAttributes } from 'react';
import { DownOutlined, QuestionCircleOutlined } from '@ant-design/icons';
// import { generatePath, useNavigate } from 'react-router-dom';
import { Avatar, Dropdown, Menu } from 'antd';
// import { useSelector } from 'react-redux';

// import { authSelector } from 'containers/Auth/selectors';
import { HeaderStyled } from './styles';
// import { logout } from 'containers/Auth/slice';
// import { routes } from 'navigations/routes';
// import { useAppDispatch } from 'hooks';
// import { adminAvatar } from 'assets';
// import Modal from 'components/Modal';

interface Props {
  title: string;
}

const HeaderDashboard: React.FC<HTMLAttributes<HTMLDivElement> & Props> = ({
  title,
  children,
  className,
}) => {
  // const [visible, setVisible] = useState<boolean>(false);

  // const { userInfo } = useSelector(authSelector);

  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  return (
    <HeaderStyled className={className}>
      <div className="header__left">
        <p className="page__title">{title}</p>
      </div>
      {children}
      <div className="header__right">
        <Dropdown
          overlay={
            <Menu
              items={[
                {
                  key: '0',
                  label: 'Q & A',
                },
                {
                  key: '1',
                  label: 'お問い合わせ',
                },
              ]}
            />
          }
          placement="bottomRight"
        >
          <QuestionCircleOutlined className="imageQA" />
        </Dropdown>
        <div className="border" />
        {/* <Dropdown
          overlay={
            <Menu
              items={[
                {
                  key: 'profile',
                  label: 'プロフィール',
                  onClick: () =>
                    navigate(generatePath(routes.Profile.path, { entity: 'receiving' })),
                },
                {
                  key: 'reset-email',
                  label: 'メールアドレス変更',
                  onClick: () =>
                    navigate(generatePath(routes.ResetPassword.path, { entity: 'receiving' })),
                },
                {
                  key: 'reset-password',
                  label: 'パスワード変更',
                  onClick: () =>
                    navigate(generatePath(routes.ResetPassword.path, { entity: 'receiving' })),
                },
                {
                  type: 'divider',
                },
                {
                  key: 'logout',
                  label: 'ログアウト',
                  onClick: () => setVisible(true),
                },
              ]}
            />
          }
          placement="bottomRight"
          className="drop-down"
        > */}
        {/* <div className="flex">
            <Avatar size={36} gap={0} src={adminAvatar} alt="avatar" />
            <p className="drop-down">
              {userInfo?.name}
              <small>さん</small>
              <DownOutlined />
            </p>
          </div>
        </Dropdown> */}
        <div className="flex">
          <Avatar
            size={36}
            gap={0}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
            alt="avatar"
          />
          <p className="drop-down">
            {/* {userInfo?.name} */}
            <span>Anh : Phạm Văn Quý</span>
            <DownOutlined />
          </p>
        </div>
      </div>
      {/* <Modal
        title="ログアウト"
        visible={visible}
        width={416}
        closable
        okButton={{
          text: 'OK',
          onClick: () => {
            dispatch(logout());
            setVisible(false);
          },
        }}
        onCancel={() => setVisible(false)}
      >
        <ModalContent>
          <p className="text-content">ログアウトを実行します。よろしいですか？</p>
        </ModalContent>
      </Modal> */}
    </HeaderStyled>
  );
};

export default HeaderDashboard;
