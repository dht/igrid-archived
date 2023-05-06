import './Drawer.scss';
import classnames from 'classnames';
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

  const className = classnames('Drawer-container', {
    show: open,
  });

  return (
    <div className={className} style={style}>
      {props.children}
      <Divider />
    </div>
  );
}

export default Drawer;
