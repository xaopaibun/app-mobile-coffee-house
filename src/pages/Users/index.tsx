import { message, Table } from 'antd';
import { useAppDispatch } from 'hooks';
import { FC, useEffect, useState } from 'react';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { User } from 'types';
import HeaderDashboard from 'components/Header';
import { FormikProvider, useFormik } from 'formik';
import { Form, Input, SubmitButton } from 'formik-antd';
import UsersStyled from './styles';
import { usersSelector } from './selectors';
import { deleteUserThunk, getListUserThunk } from './thunk';
const PER_PAGE = 10;
const Users: FC = () => {
  const dispatch = useAppDispatch();

  const [page, setPage] = useState<number>(1);
  const { listUser, loading, totalResults } = useSelector(usersSelector);

  useEffect(() => {
    dispatch(getListUserThunk({ limit: 10, page }));
  }, [dispatch, page]);

  const handleDeleteCategoryByID = async (value: string) => {
    const resultAction = await dispatch(deleteUserThunk(value));
    if (deleteUserThunk.fulfilled.match(resultAction)) {
      dispatch(getListUserThunk({ limit: 10, page }));
      message.success('Delete User Success');
    } else {
      message.error('Delete User Error');
    }
  };

  const columns = [
    {
      title: 'STT',
      width: '5%',
      render: (_x: null, _y: User, index: number) => index + 1,
    },
    {
      title: 'Họ và tên',
      dataIndex: 'name',
      key: 'name',
      width: '10%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '15%',
    },
    {
      title: 'Tuổi',
      dataIndex: 'age',
      key: 'age',
      width: '5%',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      width: '7%',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
      width: '20%',
    },
    {
      title: 'Quyền',
      dataIndex: 'role',
      key: 'role',
      width: '5%',
    },
    {
      title: 'Sửa',
      dataIndex: 'operation',
      width: '5%',
      render: (_: null, item: User) => item.role === 'user' && <FormOutlined className="icon" />,
    },
    {
      title: 'Xoá',
      dataIndex: 'operation',
      width: '5%',
      render: (_: null, item: User) =>
        item.role === 'user' && (
          <DeleteOutlined className="icon" onClick={() => handleDeleteCategoryByID(item._id)} />
        ),
    },
  ];

  const formik = useFormik<{ name: string }>({
    initialValues: {
      name: '',
    },
    onSubmit: async (values) => {
      // const resultAction = await dispatch(createUserThunk(values));
      // if (createUserThunk.fulfilled.match(resultAction)) {
      //   dispatch(getListUserThunk({ limit: 10, page }));
      //   message.success('Create Category Success');
      //   handleResetForm();
      // } else {
      //   message.error('Create Category Error');
      // }
    },
  });

  const handleResetForm = () => formik.resetForm();

  return (
    <UsersStyled>
      <HeaderDashboard title="Users" className="header" />
      <div className="container">
        <FormikProvider value={formik}>
          <Form layout="vertical">
            <div className="form-search">
              <Form.Item
                name="email"
                className="item"
                label={<span className="text-label">Nhập email</span>}
              >
                <Input name="email" placeholder="Nhập tên danh mục" />
              </Form.Item>

              <SubmitButton className="btn-search" loading={false}>
                Tìm kiếm
              </SubmitButton>
              <span className="label-reset" onClick={handleResetForm}>
                Huỷ bỏ
              </span>
            </div>
          </Form>
        </FormikProvider>
        <Table
          rowKey="i_id"
          loading={loading}
          className="table"
          dataSource={listUser}
          columns={columns}
          pagination={{
            pageSize: PER_PAGE,
            total: totalResults,
            current: page,
            onChange: setPage,
            showSizeChanger: false,
            position: ['topCenter'],
            hideOnSinglePage: false,
          }}
        />
      </div>
    </UsersStyled>
  );
};

export default Users;
