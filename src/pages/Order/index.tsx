import { FC, useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from 'hooks';
import { useSelector } from 'react-redux';

import HeaderDashboard from 'components/Header';
import { FormikProvider, useFormik } from 'formik';
import { Form, Input, SubmitButton } from 'formik-antd';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { message, Table, Tag } from 'antd';
import { Order } from 'types';
import { routes } from 'navigations/routes';
import { generatePath, useNavigate } from 'react-router-dom';
import OrderStyled from './styles';
import { orderSelector } from './selectors';
import { deleteOrderByIDThunk, getListOrderThunk } from './thunk';

const PER_PAGE = 10;

const OrderPage: FC = () => {
  const dispatch = useAppDispatch();
  const { listOrder, loading, totalResults } = useSelector(orderSelector);
  const [page, setPage] = useState<number>(1);

  const navigate = useNavigate();

  const renderTextStatusPayment = useCallback((value: number) => {
    switch (value) {
      case 2:
        return <Tag color="green">Đã thanh toán</Tag>;
      case 1:
        return <Tag color="geekblue">Chưa thanh toán</Tag>;
      default:
        break;
    }
  }, []);

  const renderTextStatusOrder = useCallback((value: number) => {
    switch (value) {
      case 4:
        return <Tag color="green">Đã hoàn thành</Tag>;
      case 3:
        return <Tag color="#f50">Đã huỷ</Tag>;
      case 2:
        return <Tag color="purple">Đã xác nhận đơn hàng</Tag>;
      case 1:
        return <Tag color="cyan">Đang chờ xác nhận</Tag>;
      default:
        break;
    }
  }, []);

  const renderTextStatusShip = useCallback((value: number) => {
    switch (value) {
      case 4:
        return <Tag color="green">Vận chuyển thành công</Tag>;
      case 3:
        return <Tag color="#f50">Đã huỷ</Tag>;
      case 2:
        return <Tag color="purple">Đang vận chuyển</Tag>;
      case 1:
        return <Tag color="cyan">Đang chờ pha chế, đóng gói</Tag>;
      default:
        break;
    }
  }, []);
  // const renderTextStatusShipping = useCallback((value: number) => {
  //   switch (value) {
  //     case 2:
  //       return <Tag color="#108ee9">Đã thanh toán</Tag>;
  //     case 1:
  //       return <Tag color="#f50">Chưa thanh toán</Tag>;
  //     default:
  //       break;
  //   }
  // }, []);

  const columns = [
    {
      title: 'STT',
      width: '5%',
      render: (_x: null, _y: Order, index: number) => index + 1,
    },
    {
      title: 'Họ và tên',
      dataIndex: 'full_name',
      key: 'full_name',
      width: '8%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '15%',
    },
    {
      title: 'Phone',
      dataIndex: 'phone_number',
      key: 'phone_number',
      width: '10%',
    },
    {
      title: 'Danh sách sản phẩm mua',
      dataIndex: 'list_product',
      key: 'list_product',
      width: '15%',
      render: (_x: null, item: Order) => (
        <div>
          {item.list_product.map(({ _id, name, quantity }) => (
            <p key={_id}>
              - {name} : {quantity}
            </p>
          ))}
        </div>
      ),
    },
    {
      title: 'Tổng tiền',
      dataIndex: 'total_money',
      key: 'total_money',
      width: '5%',
    },
    {
      title: 'Thanh toán',
      dataIndex: 'payment',
      key: 'payment',
      width: '10%',
      render: (_: null, item: Order) => renderTextStatusPayment(item.payment),
    },
    {
      title: 'Trạng thái đơn hàng',
      dataIndex: 'status',
      key: 'status',
      width: '10%',
      render: (_: null, item: Order) => renderTextStatusOrder(item.status),
    },
    {
      title: 'Trạng thái vận chuyển',
      dataIndex: 'shipping_information',
      key: 'shipping_information',
      width: '10%',
      render: (_: null, item: Order) => renderTextStatusShip(item.shipping_information),
    },
    {
      title: 'Ngày đặt hàng',
      dataIndex: 'date',
      key: 'date',
      width: '10%',
      render: (_: null, item: Order) => (
        <span>{new Date(item.date).toISOString().slice(0, 10)}</span>
      ),
    },
    {
      title: 'Sửa',
      dataIndex: 'operation',
      width: '5%',
      render: (_: null, item: Order) => (
        <FormOutlined
          className="icon"
          onClick={() =>
            navigate(
              generatePath(routes.UpdateOrderPage.path, { entity: 'receiving', id: item._id })
            )
          }
        />
      ),
    },
    {
      title: 'Xoá',
      dataIndex: 'operation',
      width: '5%',
      render: (_: null, item: Order) => (
        <DeleteOutlined className="icon" onClick={() => handleDeleteOrderID(item._id!)} />
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

  const handleDeleteOrderID = async (value: string) => {
    const resultAction = await dispatch(deleteOrderByIDThunk(value));
    if (deleteOrderByIDThunk.fulfilled.match(resultAction)) {
      dispatch(getListOrderThunk({ limit: 10, page }));
      message.success('Delete Order Success');
    } else {
      message.error('Delete Order Error');
    }
  };

  const handleResetForm = () => formik.resetForm();

  useEffect(() => {
    dispatch(getListOrderThunk({ limit: 10, page }));
  }, [dispatch, page]);

  return (
    <OrderStyled>
      <HeaderDashboard title="Quản lý đơn hàng" className="header" />
      <div className="container">
        <FormikProvider value={formik}>
          <Form layout="vertical">
            <div className="form-search">
              <Form.Item
                name="email"
                className="item"
                label={<span className="text-label">Nhập email</span>}
              >
                <Input name="email" placeholder="Nhập email user" />
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
          dataSource={listOrder}
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
    </OrderStyled>
  );
};

export default OrderPage;
