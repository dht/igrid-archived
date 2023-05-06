import { useRef } from 'react';
import Draggable from 'react-draggable';
import { IWidget } from '../../types';
import { WidgetRow } from '../WidgetRow/WidgetRow';
import { Header, List, Wrapper } from './WidgetLibrary.style';

export type WidgetLibraryProps = {
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
      <Wrapper className='WidgetLibrary-wrapper' ref={ref}>
        <Header className='header'>Widget Library</Header>
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
