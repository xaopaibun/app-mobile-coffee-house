import { Form, Input, Select, SubmitButton } from 'formik-antd';
import { FormikProvider, useFormik } from 'formik';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'hooks';
import HeaderDashboard from 'components/Header';
import { loadingRef } from 'components/Loading';
import { Button, Image, Upload } from 'antd';
import { UploadChangeParam, UploadFile } from 'antd/lib/upload';
import { UploadOutlined } from '@ant-design/icons';
import { PayloadCreateProduct } from 'types';
import { generatePath, useNavigate } from 'react-router-dom';
import { routes } from 'navigations/routes';
import { dashboardSelector } from '../selectors';
import { createProductThunk, getListCategoryThunk } from '../thunk';
import CreateProductStyled from './styles';

const Create: FC = () => {
  const dispatch = useAppDispatch();
  const { listCategory, loading } = useSelector(dashboardSelector);

  useEffect(() => {
    dispatch(getListCategoryThunk({ limit: 10, page: 1 }));
  }, [dispatch]);

  const { Option } = Select;

  const handleResetForm = () => formik.resetForm();

  const navigate = useNavigate();

  const formik = useFormik<PayloadCreateProduct>({
    initialValues: {
      name: '',
      category_id: '',
      image: {} as File,
      price: 0,
      content: '',
      slug: '',
      star: 0,
      information: '',
      stock: 0,
    },
    onSubmit: async (values) => {
      const { name, category_id, image, price, content, slug, star, information, stock } = values;
      const formData = new FormData();
      formData.append('name', name);
      formData.append('category_id', category_id);
      formData.append('image', new Blob([image as BlobPart]));
      formData.append('price', price.toString());
      formData.append('content', content);
      formData.append('slug', slug);
      formData.append('star', star.toString());
      formData.append('information', information);
      formData.append('stock', stock.toString());
      const resultAction = await dispatch(createProductThunk(formData));
      if (createProductThunk.fulfilled.match(resultAction)) {
        navigate(generatePath(routes.Dashboard.path, { entity: 'receiving' }));
      }
    },
  });

  useEffect(() => {
    loadingRef.current?.isLoading(loading);
  }, [loading]);

  const { TextArea } = Input;

  return (
    <>
      <HeaderDashboard title="Thêm mới sản phẩm" className="header" />
      <CreateProductStyled>
        <FormikProvider value={formik}>
          <Form layout="vertical" autoComplete="off">
            <Form.Item
              name="name"
              label={
                <span className="text-label">
                  Tên sản phẩm <span className="require">*</span>
                </span>
              }
              className="form-input"
            >
              <Input name="name" className="text-input" placeholder="Nhập tên sản phẩm" />
            </Form.Item>
            <Form.Item
              name="category_id"
              label={
                <span className="text-label">
                  Loại sản phẩm
                  <span className="require" />
                </span>
              }
              className="form-input"
            >
              <Select name="category_id" placeholder="Chọn loại sản phẩm" allowClear>
                {listCategory.map((item, index) => (
                  <Option key={index} value={item._id}>
                    {item.category_name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Upload
              name="image"
              accept=".jpeg, .png"
              showUploadList={false}
              beforeUpload={() => false}
              onChange={(value: UploadChangeParam<UploadFile<File>>) =>
                formik.setFieldValue('image', value.file)
              }
            >
              <Button icon={<UploadOutlined />}>Ấn để upload ảnh sản phẩm</Button>
            </Upload>
            {formik.values.image && (
              <Image
                src={URL.createObjectURL(new Blob([formik.values.image as BlobPart]))}
                alt="image"
                width={250}
                className="image"
              />
            )}
            <Form.Item
              name="slug"
              label={
                <span className="text-label">
                  Nhập slug <span className="require">*</span>
                </span>
              }
              className="form-input"
            >
              <Input name="slug" className="text-input" placeholder="Nhập slug" />
            </Form.Item>
            <Form.Item
              name="stock"
              label={
                <span className="text-label">
                  Nhập stock <span className="require">*</span>
                </span>
              }
              className="form-input"
            >
              <Input name="stock" className="text-input" placeholder="Nhập số lượng" />
            </Form.Item>
            <Form.Item
              name="price"
              label={
                <span className="text-label">
                  Nhập giá bán <span className="require">*</span>
                </span>
              }
              className="form-input"
            >
              <Input name="price" className="text-input" placeholder="Nhập giá bán" />
            </Form.Item>
            <Form.Item
              name="information"
              label={
                <span className="text-label">
                  Nhập information <span className="require">*</span>
                </span>
              }
              className="form-input"
            >
              <TextArea
                rows={6}
                name="information"
                className="text-input"
                placeholder="Nhập information"
              />
            </Form.Item>
            <Form.Item
              name="star"
              label={
                <span className="text-label">
                  Nhập star <span className="require">*</span>
                </span>
              }
              className="form-input"
            >
              <Input name="star" className="text-input" placeholder="Nhập star" />
            </Form.Item>
            <Form.Item name="content" label="Nhập nội dung" className="form-input">
              <TextArea
                rows={5}
                name="content"
                className="text-input"
                placeholder="Nhập nội dung"
              />
            </Form.Item>
            <div className="wrap-submit">
              <div className="wrap-button">
                <SubmitButton className="btn btn_submit">Thêm Mới</SubmitButton>
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

export default Create;
