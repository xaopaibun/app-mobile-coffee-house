import { Card, message, Table } from 'antd';
import { useAppDispatch } from 'hooks';
import { FC, useEffect, useState } from 'react';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { Category } from 'types';
import HeaderDashboard from 'components/Header';
import { FormikProvider, useFormik } from 'formik';
import { Form, Input, SubmitButton } from 'formik-antd';
import CategoryStyled from './styles';
import { categorySelector } from './selectors';
import { createCategoryThunk, deleteCategoryThunk, getListCategoryThunk } from './thunk';

const PER_PAGE = 10;
const CategoryPage: FC = () => {
  const dispatch = useAppDispatch();

  const [page, setPage] = useState<number>(1);
  const { listCategory, loading, totalResults } = useSelector(categorySelector);

  useEffect(() => {
    dispatch(getListCategoryThunk({ limit: 10, page }));
  }, [dispatch, page]);

  const handleDeleteCategoryByID = async (value: string) => {
    const resultAction = await dispatch(deleteCategoryThunk(value));
    if (deleteCategoryThunk.fulfilled.match(resultAction)) {
      dispatch(getListCategoryThunk({ limit: 10, page }));
      message.success('Delete Category Success');
    } else {
      message.error('Delete Category Error');
    }
  };

  const columns = [
    {
      title: 'STT',
      width: '10%',
      render: (_x: null, _y: Category, index: number) => index + 1,
    },
    {
      title: 'Tên Danh Mục',
      dataIndex: 'category_name',
      key: 'category_name',
      width: '80%',
    },
    {
      title: 'Sửa',
      dataIndex: 'operation',
      width: '5%',
      render: () => {
        return <FormOutlined className="icon" />;
      },
    },
    {
      title: 'Xoá',
      dataIndex: 'operation',
      width: '5%',
      render: (_: null, item: Category) => (
        <DeleteOutlined className="icon" onClick={() => handleDeleteCategoryByID(item._id)} />
      ),
    },
  ];

  const formik = useFormik<{ category_name: string }>({
    initialValues: {
      category_name: '',
    },
    onSubmit: async (values) => {
      const resultAction = await dispatch(createCategoryThunk(values));
      if (createCategoryThunk.fulfilled.match(resultAction)) {
        dispatch(getListCategoryThunk({ limit: 10, page }));
        message.success('Create Category Success');
        handleResetForm();
      } else {
        message.error('Create Category Error');
      }
    },
  });

  const handleResetForm = () => formik.resetForm();

  return (
    <CategoryStyled>
      <HeaderDashboard title="Category" className="header" />
      <div className="container">
        <Card>
          <FormikProvider value={formik}>
            <Form layout="vertical">
              <div className="form-search">
                <Form.Item
                  name="category_name"
                  className="item"
                  label={<span className="text-label">Tên danh mục</span>}
                >
                  <Input name="category_name" placeholder="Nhập tên danh mục" />
                </Form.Item>

                <SubmitButton className="btn-search" loading={false}>
                  Thêm danh mục
                </SubmitButton>
                <span className="label-reset" onClick={handleResetForm}>
                  Huỷ bỏ
                </span>
              </div>
            </Form>
          </FormikProvider>
        </Card>
        <Table
          rowKey="i_id"
          loading={loading}
          className="table"
          dataSource={listCategory}
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
    </CategoryStyled>
  );
};

export default CategoryPage;
