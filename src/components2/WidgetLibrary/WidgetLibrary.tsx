import Draggable from 'react-draggable';
import { useRef } from 'react';
import { WidgetRow } from '../WidgetRow/WidgetRow';
import { IWidget } from '../../types';
import { Header, List, Wrapper } from './WidgetLibrary.style';

type WidgetLibraryProps = {
  widgets: Record<string, IWidget>;
  onSelect: (id: string) => void;
  selectedWidgetId?: string;
};

export function WidgetLibrary(props: WidgetLibraryProps) {
  const { widgets, selectedWidgetId } = props;
  const ref = useRef<HTMLDivElement>(null);

  const Cmp: any = Draggable;

  return (
    <Cmp nodeRef={ref} handle='.header'>
      <Wrapper className='WidgetLibrary-container' ref={ref}>
        <Header>Widget Library</Header>
        <List>
          {Object.values(widgets).map((widget) => (
            <WidgetRow
              widget={widget}
              key={widget.id}
              onSelect={props.onSelect}
              isSelected={widget.id === selectedWidgetId}
            />
          ))}
        </List>
      </Wrapper>
    </Cmp>
  );
}

export default WidgetLibrary;
