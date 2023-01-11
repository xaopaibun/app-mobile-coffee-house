import { Form, Input, Select, SubmitButton } from 'formik-antd';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'hooks';
import HeaderDashboard from 'components/Header';
import { loadingRef } from 'components/Loading';
import { Button, Card, Image, Upload } from 'antd';
import { UploadChangeParam, UploadFile } from 'antd/lib/upload';
import { PayloadCreateProduct } from 'types';
import { generatePath, useNavigate } from 'react-router-dom';
import { routes } from 'navigations/routes';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
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
      slug: '',
      category_id: '',
      image: [] as Array<File>,
      content: '',
      height: 0,
      weight: 0,
      width: 0,
      length: 0,
      variant: [
        {
          name: '',
          option: [],
        },
      ],
    },
    onSubmit: async (values) => {
      console.log(22, values);
      const { name, category_id, image, height, weight, width, content, slug, length, variant } =
        values;
      const formData = new FormData();
      formData.append('name', name);
      formData.append('category_id', category_id);
      for (let i = 0; i < image.length; i++) {
        formData.append(`image`, new Blob([image[i] as unknown as BlobPart]));
      }
      formData.append('height', height.toString());
      formData.append('content', content);
      formData.append('slug', slug);
      formData.append('weight', weight.toString());
      formData.append('width', width.toString());
      formData.append('length', length.toString());
      for (let i = 0; i < variant.length; i++) {
        formData.append(`variant[${i}][name]`, variant[i].name);
        for (let j = 0; j < variant[i].option.length; j++) {
          formData.append(
            `variant[${i}][option][${j}][price]`,
            variant[i].option[j].price.toString()
          );
          formData.append(
            `variant[${i}][option][${j}][value]`,
            variant[i].option[j].value.toString()
          );
          formData.append(
            `variant[${i}][option][${j}][inventory]`,
            variant[i].option[j].inventory.toString()
          );
        }
      }
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

  // const handleAddOption = (index: number) => (index: number) => {
  //   formik.values.variant[index].option.push({
  //     price: 0,
  //     value: '',
  //     inventory: true,
  //   });
  //   formik.setFieldValue('variant', formik.values.variant);
  // };

  return (
    <>
      <HeaderDashboard title="Thêm mới sản phẩm" className="header" />
      <CreateProductStyled>
        <FormikProvider value={formik}>
          <Form layout="vertical" autoComplete="off">
            <Card title="Thông tin cơ bản" className="card">
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
            </Card>
            <Card title="Thông tin chi tiết" className="card">
              <div>
                Hình ảnh sản phẩm <br />
                Khuyến nghị: Tải lên ít nhất 3 hình ảnh để giúp người mua tìm hiểu thêm
              </div>
              <div className="list-image">
                {formik.values.image &&
                  formik.values.image.map((item) => (
                    <Image
                      src={URL.createObjectURL(new Blob([item as BlobPart]))}
                      alt="image"
                      width={105}
                      className="image"
                    />
                  ))}
                <Upload
                  name="image"
                  accept=".jpeg, .png"
                  multiple
                  listType="picture-card"
                  showUploadList={false}
                  beforeUpload={() => false}
                  onChange={(value: UploadChangeParam<UploadFile<File>>) => {
                    formik.setFieldValue(
                      'image',
                      value.fileList.map((item) => item.originFileObj)
                    );
                  }}
                >
                  <div>
                    {loading ? <LoadingOutlined /> : <PlusOutlined />}
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                </Upload>
              </div>
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
              <Form.Item name="content" label="Nhập nội dung" className="form-input">
                <TextArea
                  rows={8}
                  name="content"
                  className="text-input"
                  placeholder="Nhập mô tả sản phẩm"
                />
              </Form.Item>
            </Card>
            <Card title="Thông tin bán hàng" className="card">
              <FieldArray
                name="variant"
                render={(arrayHelpers) => (
                  <div>
                    {formik.values.variant.map((_item, index) => (
                      <div key={index}>
                        <Form.Item
                          name={`variant[${index}].name`}
                          label="Nhập tên biến thể "
                          className="form-input"
                        >
                          <Input
                            name={`variant[${index}].name`}
                            className="text-input"
                            placeholder="Nhập variant"
                          />
                        </Form.Item>
                        <FieldArray
                          name={`variant[${index}].option`}
                          render={(arrayHelpers_option) => (
                            <div>
                              {formik.values.variant[index].option.map((option, i) => (
                                <div key={index} style={{ display: 'flex' }}>
                                  <Form.Item
                                    name={`variant[${index}].option[${i}].name`}
                                    label="Tùy chọn"
                                    className="form-input"
                                  >
                                    <Input
                                      name={`variant[${index}].option[${i}].name`}
                                      className="text-input"
                                      placeholder="Nhập một tùy chọn"
                                    />
                                  </Form.Item>
                                  <Button
                                    className="btn btn-submit"
                                    onClick={() => arrayHelpers_option.remove(index)}
                                  >
                                    -
                                  </Button>
                                </div>
                              ))}
                              <p
                                className="button-label"
                                onClick={() =>
                                  arrayHelpers_option.push({ price: 0, value: '', inventory: true })
                                }
                              >
                                + Thêm một tuỳ chọn
                              </p>
                            </div>
                          )}
                        />
                        {/* <Button
                          className="btn btn-submit"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          -
                        </Button> */}
                        <Button
                          className="btn-add"
                          onClick={() =>
                            arrayHelpers.push({
                              name: '',
                              option: [],
                            })
                          }
                        >
                          <span className="button-label">+ Thêm biến thể</span>
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              />
            </Card>
            <Card title="Vận chuyển & Bảo hành" className="card">
              <Form.Item name="weight" label="Trọng lượng Sản phẩm" className="form-input">
                <Input
                  name="weight"
                  className="text-input"
                  placeholder="Nhập trọng lượng Sản phẩm"
                />
              </Form.Item>
              <p>Kích thước Sản phẩm</p>
              <div style={{ display: 'flex' }}>
                <Input name="height" className="text-input" placeholder="Chiều cao (cm)" />
                <Input name="width" className="text-input" placeholder="Chiều rộng (cm)" />
                <Input name="length" className="text-input" placeholder="Chiều dài (cm)" />
              </div>
            </Card>
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
