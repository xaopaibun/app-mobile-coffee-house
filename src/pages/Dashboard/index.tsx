import { Button, Card, Col, message, Row, Statistic, Table } from 'antd';
import { Form, Select, SubmitButton } from 'formik-antd';
import { FormikProvider, useFormik } from 'formik';
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  DeleteOutlined,
  FormOutlined,
  SearchOutlined,
  CloudUploadOutlined,
  PlusOutlined,
  CloudDownloadOutlined,
} from '@ant-design/icons';
import { Option } from 'antd/lib/mentions';
import { CSVLink } from 'react-csv';

import { useAppDispatch } from 'hooks';
import HeaderDashboard from 'components/Header';
import { Product } from 'types';
import { loadingRef } from 'components/Loading';
import { generatePath, useNavigate } from 'react-router-dom';
import { routes } from 'navigations/routes';
// import { io } from 'socket.io-client';
import {
  deleteProductByIDThunk,
  getListCategoryThunk,
  getListProductThunk,
  getOrderStatisticThunk,
  getProductByCategoryIDThunk,
} from './thunk';
import { dashboardSelector } from './selectors';
import DashboardStyled from './styles';

const PER_PAGE = 10;

const Dashboard: FC = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);
  const { orderStatistic, listProduct, listCategory, loading, totalResults } =
    useSelector(dashboardSelector);

  useEffect(() => {
    Promise.all([
      dispatch(getListProductThunk({ limit: PER_PAGE, page })),
      dispatch(getOrderStatisticThunk()),
      dispatch(getListCategoryThunk()),
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    dispatch(getListProductThunk({ limit: PER_PAGE, page }));
  }, [dispatch, page]);

  const handleResetForm = () => formik.resetForm();

  const formik = useFormik<{ category_id: string }>({
    initialValues: {
      category_id: '',
    },
    onSubmit: (values) => {
      if (!values.category_id) {
        dispatch(getListProductThunk({ limit: PER_PAGE, page }));
      } else {
        dispatch(getProductByCategoryIDThunk(values.category_id));
      }
    },
  });

  const handleDeleteProductByID = async (ID: string) => {
    const resultAction = await dispatch(deleteProductByIDThunk(ID));
    if (deleteProductByIDThunk.fulfilled.match(resultAction)) {
      dispatch(getListProductThunk({ limit: 10, page }));
      message.success('Delete Product Success');
    } else {
      message.success('Delete Product Error');
    }
  };
  const columns = [
    {
      title: 'Tên Sản Phẩm',
      dataIndex: 'name',
      key: 'name',
      width: '9%',
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'image',
      key: 'image',
      width: '5%',
      render: (image: string, item: Product) => <img src={image[0]} width={120} alt={item.name} />,
    },
    {
      title: 'Slug',
      dataIndex: 'slug',
      key: 'slug',
      width: '9%',
    },
    {
      title: 'Giá',
      render: (_: string, item: Product) => (
        <span>
          {item.variant[0].option[0].price} VND -{' '}
          {item.variant[0].option[item.variant[0].option.length - 1].price} VND
        </span>
      ),
      width: '9%',
    },
    {
      title: 'Sửa',
      dataIndex: 'operation',
      width: '4%',
      render: (_: null, item: Product) => {
        return (
          <FormOutlined
            className="icon"
            onClick={() =>
              navigate(
                generatePath(routes.UpdateProduct.path, { entity: 'receiving', id: item._id })
              )
            }
          />
        );
      },
    },
    {
      title: 'Xoá',
      dataIndex: 'operation',
      width: '4%',
      render: (_: null, item: Product) => (
        <DeleteOutlined className="icon" onClick={() => handleDeleteProductByID(item._id)} />
      ),
    },
  ];

  useEffect(() => {
    loadingRef.current?.isLoading(loading);
  }, [loading]);

  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const socketRef = useRef<any>();

  // useEffect(() => {
  //   //socketRef.current = socketIOClient.connect('http://192.168.0.104:8000');
  //   socketRef.current = io('http://192.168.0.104:8000', {
  //     reconnectionDelayMax: 10000,
  //   });
  //   console.log('socketRef.current', socketRef.current);
  //   socketRef.current.io.on('ping', () => {
  //     console.log('ping');
  //   });
  //   return () => {
  //     socketRef.current.disconnect();
  //   };
  // }, []);

  return (
    <DashboardStyled>
      <HeaderDashboard title="Dashboard" className="header" />
      <div className="container">
        <Row gutter={16}>
          <Col span={6}>
            <Card>
              <Statistic title="Đơn hàng đang chờ xác nhận" value={orderStatistic.confirm} />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="Đơn hàng đang vận chuyển" value={orderStatistic.delivery} />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="Đơn hàng đã giao thành công" value={orderStatistic.success} />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="Đơn hàng đã huỷ" value={orderStatistic.cancel} />
            </Card>
          </Col>
        </Row>
        <div style={{ height: '30px' }} />
        <FormikProvider value={formik}>
          <Form layout="vertical">
            <div className="form-search">
              <Form.Item
                name="category_id"
                className="item"
                label={<span className="text-label">Loại sản phẩm</span>}
              >
                <Select
                  name="category_id"
                  showSearch
                  allowClear
                  filterOption={(input, option) =>
                    JSON.stringify(option?.children).toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {listCategory &&
                    listCategory.map(({ _id, category_name }) => (
                      <Option value={_id} key={_id}>
                        {category_name}
                      </Option>
                    ))}
                </Select>
              </Form.Item>
              {/* <Form.Item
                name="name"
                className="item"
                label={<span className="text-label">Tên sản phẩm</span>}
              >
                <Select
                  name="name"
                  showSearch
                  allowClear
                  filterOption={(input, option) =>
                    JSON.stringify(option?.children).toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {listProduct &&
                    listProduct.map(({ name }: { name: string }, i) => (
                      <Option value={name} key={i.toString()}>
                        {name}
                      </Option>
                    ))}
                </Select>
              </Form.Item> */}

              <SubmitButton className="btn-search" loading={false}>
                <SearchOutlined className="icon-search" />
                Tìm kiếm
              </SubmitButton>
              <span className="label-reset" onClick={handleResetForm}>
                Huỷ bỏ
              </span>
            </div>
          </Form>
        </FormikProvider>
        {totalResults > 0 ? (
          <div className="text-count">
            {page * PER_PAGE > totalResults ? totalResults : page * PER_PAGE} sản phẩm /{' '}
            {totalResults} tổng sản phẩm
          </div>
        ) : null}
        <div className="wrap-button">
          <Button className="btn btn-active" icon={<CloudUploadOutlined className="icon" />}>
            Tải Lên
          </Button>
          <Button className="btn btn-active" icon={<CloudDownloadOutlined className="icon" />}>
            <CSVLink data={listProduct} filename={'list-product.csv'} target="_blank">
              {' '}
              Tải Xuống
            </CSVLink>
          </Button>
          <Button
            className="btn btn-active"
            icon={<PlusOutlined className="icon" />}
            onClick={() =>
              navigate(generatePath(routes.CreateProduct.path, { entity: 'receiving' }))
            }
          >
            Thêm Sản Phẩm
          </Button>
        </div>
        <Table
          rowKey="i_id"
          loading={loading}
          className="table"
          dataSource={listProduct}
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
    </DashboardStyled>
  );
};

export default Dashboard;
