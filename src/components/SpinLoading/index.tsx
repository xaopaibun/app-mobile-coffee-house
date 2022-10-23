import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { SpinSize } from 'antd/lib/spin';
import { Spin } from 'antd';

type Props = {
  loading?: boolean;
  size?: SpinSize;
};

const SpinLoading: React.FC<Props> = ({ children, loading = false, size }) => {
  return (
    <Spin spinning={loading} size={size} indicator={<LoadingOutlined style={{ fontSize: 24 }} />}>
      {children}
    </Spin>
  );
};

export default SpinLoading;
