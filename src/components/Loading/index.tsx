import { createRef, forwardRef, useState, useImperativeHandle } from 'react';
// import { useSelector } from 'react-redux';

// import { settingSelector } from 'containers/AppSettings/selectors';
import SpinLoading from 'components/SpinLoading';
import SectionStyled from './styles';

interface LoadinglRef {
  isLoading: (value: boolean) => void;
}

export const loadingRef = createRef<LoadinglRef>();

const Loading = forwardRef<LoadinglRef>((_, ref) => {
  const [loading, setLoading] = useState<boolean>(false);

  // const { collapsedMenu } = useSelector(settingSelector);

  useImperativeHandle(ref, () => {
    return {
      isLoading: (value) => {
        setLoading(value);
      },
    };
  });

  const collapsedMenu = true;

  return loading ? (
    <SectionStyled collapsedMenu={collapsedMenu}>
      <SpinLoading loading size="large" />
    </SectionStyled>
  ) : null;
});

export default Loading;
