import { Form, Select, SubmitButton } from 'formik-antd';
import { FormikProvider, useFormik } from 'formik';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { jsPDF } from 'jspdf';
import { useAppDispatch } from 'hooks';
import HeaderDashboard from 'components/Header';
import { loadingRef } from 'components/Loading';
import { generatePath, useNavigate, useParams } from 'react-router-dom';
import { routes } from 'navigations/routes';
import { Order } from 'types';
import { Button, Card } from 'antd';
import { getOrderDetailByIDThunk, updateOrderByIDThunk } from '../thunk';
import { orderSelector } from '../selectors';
import CreateProductStyled from './styles';

const STATUS_PAYMENT = [
  {
    value: 1,
    label: 'Chưa thanh toán',
  },
  {
    value: 2,
    label: 'Đã thanh toán',
  },
];

const STATUS_ORDER = [
  {
    value: 1,
    label: 'Đang chờ xác nhận',
  },
  {
    value: 2,
    label: 'Đã xác nhận đơn hàng',
  },
  {
    value: 3,
    label: 'Đã huỷ',
  },
  {
    value: 4,
    label: 'Đã hoàn thành',
  },
];

const STATUS_SHIP = [
  {
    value: 1,
    label: 'Đang chờ pha chế, đóng gói',
  },
  {
    value: 2,
    label: 'Đang vận chuyển',
  },
  {
    value: 3,
    label: 'Đã huỷ',
  },
  {
    value: 4,
    label: 'Đã vận chuyển thành công',
  },
];

const Update: FC = () => {
  const dispatch = useAppDispatch();
  const { loading, orderDetail } = useSelector(orderSelector);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getOrderDetailByIDThunk(id));
    }
  }, [dispatch, id]);

  const { Option } = Select;

  const handleResetForm = () => formik.resetForm();

  const navigate = useNavigate();

  const formik = useFormik<Order>({
    initialValues: {
      full_name: '',
      email: '',
      phone_number: '',
      address: '',
      total_money: 0,
      payment: 1,
      status: 1,
      date: '',
      list_product: [],
      shipping_information: 1,
    },
    onSubmit: async (values) => {
      const resultAction = await dispatch(updateOrderByIDThunk({ id: id!, data: values }));
      if (updateOrderByIDThunk.fulfilled.match(resultAction)) {
        navigate(generatePath(routes.OrderPage.path, { entity: 'receiving' }));
      }
    },
  });

  useEffect(() => {
    loadingRef.current?.isLoading(loading);
  }, [loading]);

  useEffect(() => {
    if (orderDetail) {
      formik.setFieldValue('full_name', orderDetail.full_name);
      formik.setFieldValue('email', orderDetail.email);
      formik.setFieldValue('phone_number', orderDetail.phone_number);
      formik.setFieldValue('address', orderDetail.address);
      formik.setFieldValue('total_money', orderDetail.total_money);
      formik.setFieldValue('payment', orderDetail.payment);
      formik.setFieldValue('list_product', orderDetail.list_product);
      formik.setFieldValue('status', orderDetail.status);
      formik.setFieldValue('date', orderDetail.date);
      formik.setFieldValue('shipping_information', orderDetail.shipping_information);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderDetail]);

  const handleExportPDF = () => {
    const doc = new jsPDF();

    doc.text(
      `Ho Ten: ${formik.values.full_name} \n Email: ${formik.values.email} \n Địa chỉ: ${
        formik.values.address
      } \n Tổng tiền: ${formik.values.total_money} $ \n Ngày đặt hàng:  ${
        formik.values.date && new Date(formik.values.date).toISOString().slice(0, 10)
      }`,
      10,
      10
    );
    doc.save(`${formik.values.phone_number}.pdf`);
  };
  return (
    <>
      <HeaderDashboard title="Cập nhật đơn hàng" className="header" />
      <CreateProductStyled>
        <FormikProvider value={formik}>
          <Card>
            <p>Họ Tên: {formik.values.full_name}</p>
            <p>Email: {formik.values.email}</p>
            <p>Số điện thoại: {formik.values.phone_number}</p>
            <p>Địa chỉ: {formik.values.address}</p>
            <p>Tổng tiền: {formik.values.total_money} $</p>
            <div>Danh sách sản phẩm đặt mua:</div>
            <ul>
              {formik.values.list_product &&
                formik.values.list_product.map((item, index) => (
                  <li key={index}>
                    {item.name}: {item.quantity}{' '}
                  </li>
                ))}
            </ul>
            <p>
              Ngày đặt hàng:{' '}
              {formik.values.date && new Date(formik.values.date).toISOString().slice(0, 10)}
            </p>
            <Form.Item
              name="payment"
              label={
                <span className="text-label">
                  Tình trạng thanh toán
                  <span className="require" />
                </span>
              }
              className="form-input"
            >
              <Select name="payment" allowClear disabled={formik.values.payment === 2}>
                {STATUS_PAYMENT.map((item, index) => (
                  <Option key={index} value={item.value}>
                    {item.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="status"
              label={
                <span className="text-label">
                  Tình trạng đơn hàng
                  <span className="require" />
                </span>
              }
              className="form-input"
            >
              <Select name="status" allowClear>
                {STATUS_ORDER.map((item, index) => (
                  <Option key={index} value={item.value}>
                    {item.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="shipping_information"
              label={
                <span className="text-label">
                  Tình trạng vận chuyển
                  <span className="require" />
                </span>
              }
              className="form-input"
            >
              <Select name="shipping_information" allowClear>
                {STATUS_SHIP.map((item, index) => (
                  <Option key={index} value={item.value}>
                    {item.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Button onClick={handleExportPDF}>Xuất hoá đơn</Button>
          </Card>
          <Form>
            <div className="wrap-submit">
              <div className="wrap-button">
                <SubmitButton className="btn btn_submit">Cập nhật</SubmitButton>
                <button className="btn btn_close" type="button" onClick={handleResetForm}>
                  Huỷ bỏ
                </button>
              </div>
            </div>
          </Form>
        </FormikProvider>
      </CreateProductStyled>
    </>
  );
};

export default Update;

// import { Form, Input, Select, SubmitButton } from 'formik-antd';
// import { FormikProvider, useFormik } from 'formik';
// import { FC, useEffect } from 'react';
// import { useSelector } from 'react-redux';

// import { useAppDispatch } from 'hooks';
// import HeaderDashboard from 'components/Header';
// import { loadingRef } from 'components/Loading';
// import { generatePath, useNavigate, useParams } from 'react-router-dom';
// import { routes } from 'navigations/routes';
// import { Order } from 'types';
// import { getOrderDetailByIDThunk, updateOrderByIDThunk } from '../thunk';
// import { orderSelector } from '../selectors';
// import CreateProductStyled from './styles';

// const STATUS_PAYMENT = [
//   {
//     value: 1,
//     label: 'Chưa thanh toán',
//   },
//   {
//     value: 2,
//     label: 'Đã thanh toán',
//   },
// ];

// const STATUS_ORDER = [
//   {
//     value: 1,
//     label: 'Đang chờ xác nhận',
//   },
//   {
//     value: 2,
//     label: 'Đã xác nhận đơn hàng',
//   },
//   {
//     value: 3,
//     label: 'Đã huỷ',
//   },
//   {
//     value: 4,
//     label: 'Đã hoàn thành',
//   },
// ];

// const Update: FC = () => {
//   const dispatch = useAppDispatch();
//   const { loading, orderDetail } = useSelector(orderSelector);

//   const { id } = useParams();

//   useEffect(() => {
//     if (id) {
//       dispatch(getOrderDetailByIDThunk(id));
//     }
//   }, [dispatch, id]);

//   const { Option } = Select;

//   const handleResetForm = () => formik.resetForm();

//   const { TextArea } = Input;

//   useEffect(() => {
//     formik.setFieldValue('full_name', orderDetail.full_name);
//     formik.setFieldValue('email', orderDetail.email);
//     formik.setFieldValue('phone_number', orderDetail.phone_number);
//     formik.setFieldValue('address', orderDetail.address);
//     formik.setFieldValue('total_money', orderDetail.total_money);
//     formik.setFieldValue('payment', orderDetail.payment);
//     formik.setFieldValue('list_product', orderDetail.list_product);
//     formik.setFieldValue('status', orderDetail.status);
//     formik.setFieldValue('date', orderDetail.date);
//   }, [orderDetail]);

//   const navigate = useNavigate();

//   const formik = useFormik<Order>({
//     initialValues: {
//       full_name: '',
//       email: '',
//       phone_number: '',
//       address: '',
//       total_money: 0,
//       payment: 1,
//       status: 1,
//       date: '',
//       list_product: [],
//       shipping_information: 1,
//     },
//     onSubmit: async (values) => {
//       const resultAction = await dispatch(updateOrderByIDThunk({ id: id!, data: values }));
//       if (updateOrderByIDThunk.fulfilled.match(resultAction)) {
//         navigate(generatePath(routes.OrderPage.path, { entity: 'receiving' }));
//       }
//     },
//   });

//   useEffect(() => {
//     loadingRef.current?.isLoading(loading);
//   }, [loading]);

//   return (
//     <>
//       <HeaderDashboard title="Cập nhật đơn hàng" className="header" />
//       <CreateProductStyled>
//         <FormikProvider value={formik}>
//           <Form layout="vertical" autoComplete="off">
//             <Form.Item
//               name="full_name"
//               label={
//                 <span className="text-label">
//                   Họ và tên <span className="require">*</span>
//                 </span>
//               }
//               className="form-input"
//             >
//               <Input
//                 autoComplete="off"
//                 readOnly
//                 name="full_name"
//                 className="text-input"
//                 placeholder="Nhập tên sản phẩm"
//               />
//             </Form.Item>

//             <Form.Item
//               name="email"
//               label={
//                 <span className="text-label">
//                   Email <span className="require">*</span>
//                 </span>
//               }
//               className="form-input"
//             >
//               <Input
//                 autoComplete="off"
//                 readOnly
//                 name="email"
//                 className="text-input"
//                 placeholder="Nhập slug"
//               />
//             </Form.Item>
//             <Form.Item
//               name="phone_number"
//               label={
//                 <span className="text-label">
//                   Số điện thoại <span className="require">*</span>
//                 </span>
//               }
//               className="form-input"
//             >
//               <Input autoComplete="off" readOnly name="phone_number" className="text-input" />
//             </Form.Item>
//             <Form.Item
//               name="address"
//               label={
//                 <span className="text-label">
//                   Địa chỉ <span className="require">*</span>
//                 </span>
//               }
//               className="form-input"
//             >
//               <TextArea
//                 rows={4}
//                 name="address"
//                 className="text-input"
//                 placeholder="Nhập information"
//                 maxLength={6}
//                 autoComplete="off"
//                 readOnly
//               />
//             </Form.Item>
//             <Form.Item
//               name="total_money"
//               label={
//                 <span className="text-label">
//                   Tổng tiền <span className="require">*</span>
//                 </span>
//               }
//               className="form-input"
//             >
//               <TextArea
//                 rows={4}
//                 name="total_money"
//                 className="text-input"
//                 placeholder="Nhập information"
//                 maxLength={6}
//                 autoComplete="off"
//                 readOnly
//               />
//             </Form.Item>
//             <Form.Item
//               name="payment"
//               label={
//                 <span className="text-label">
//                   Tình trạng thanh toán
//                   <span className="require" />
//                 </span>
//               }
//               className="form-input"
//             >
//               <Select name="payment" allowClear>
//                 {STATUS_PAYMENT.map((item, index) => (
//                   <Option key={index} value={item.value}>
//                     {item.label}
//                   </Option>
//                 ))}
//               </Select>
//             </Form.Item>
//             <Form.Item
//               name="status"
//               label={
//                 <span className="text-label">
//                   Tình trạng đơn hàng
//                   <span className="require" />
//                 </span>
//               }
//               className="form-input"
//             >
//               <Select name="status" allowClear>
//                 {STATUS_ORDER.map((item, index) => (
//                   <Option key={index} value={item.value}>
//                     {item.label}
//                   </Option>
//                 ))}
//               </Select>
//             </Form.Item>
//             <Form.Item name="list_product" label="Nhập nội dung" className="form-input">
//               <TextArea
//                 rows={4}
//                 name="list_product"
//                 className="text-input"
//                 placeholder="Nhập nội dung"
//                 maxLength={6}
//                 autoComplete="off"
//                 readOnly
//               >
//                 <p>abc</p>
//               </TextArea>
//             </Form.Item>
//             <Form.Item
//               name="date"
//               label={<span className="text-label">Ngày đặt hàng</span>}
//               className="form-input"
//             >
//               <Input
//                 autoComplete="off"
//                 readOnly
//                 name="date"
//                 className="text-input"
//                 placeholder="Nhập giá bán"
//                 value={
//                   formik.values.date && new Date(formik.values.date).toISOString().slice(0, 10)
//                 }
//               />
//             </Form.Item>
//             <div className="wrap-submit">
//               <div className="wrap-button">
//                 <SubmitButton className="btn btn_submit">Cập nhật</SubmitButton>
//                 <button className="btn btn_close" type="button" onClick={handleResetForm}>
//                   Huỷ bỏ
//                 </button>
//               </div>
//             </div>
//           </Form>
//         </FormikProvider>
//       </CreateProductStyled>
//     </>
//   );
// };

// export default Update;
