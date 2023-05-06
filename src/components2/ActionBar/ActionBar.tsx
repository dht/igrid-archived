import { useRef } from 'react';
import Draggable from 'react-draggable';
import { Icon } from '../Icon/Icon';
import { Content, Header, Wrapper } from './ActionBar.style';

type ActionBarProps = {
  onToggle: () => void;
  editMode: boolean;
};

export function ActionBar(props: ActionBarProps) {
  const { editMode } = props;
  const ref = useRef<HTMLDivElement>(null);

  function renderEdit() {
    return (
      <>
        {/* <Icon icon="list" size={50} />
                <Icon icon="brush" size={50} />
                <Icon icon="download" size={50} /> */}
        <Icon icon='close' size={50} onClick={props.onToggle} />
      </>
    );
  }

  function renderView() {
    return (
      <>
        <Icon icon='edit' size={50} onClick={props.onToggle} />
      </>
    );
  }

  const Cmp: any = Draggable;

  return (
    <Cmp nodeRef={ref} handle='.header'>
      <Wrapper ref={ref} className='ActionBar-container'>
        <Header></Header>
        <Content>{editMode ? renderEdit() : renderView()}</Content>
      </Wrapper>
    </Cmp>
  );
}

export default ActionBar;
