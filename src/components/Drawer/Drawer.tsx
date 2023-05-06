import classnames from 'classnames';
import { Wrapper } from './Drawer.style';
import Divider from '../Divider/Divider';

export type DrawerProps = {
  open: boolean;
  height: number;
  children: JSX.Element;
};

export function Drawer(props: DrawerProps) {
  const { open, height } = props;

  const style = {
    height: height,
    maxHeight: open ? height : 0,
  };

  const className = classnames('Drawer-wrapper', {
    show: open,
  });

  return (
    <Wrapper data-testid='Drawer-wrapper' className={className} style={style}>
      {props.children}
      <Divider />
    </Wrapper>
  );
}

export default Drawer;
