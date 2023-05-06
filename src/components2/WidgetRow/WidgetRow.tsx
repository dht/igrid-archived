import { IWidget } from '../../types';
import classnames from 'classnames';

type WidgetRowProps = {
  widget: IWidget;
  onSelect: (id: string) => void;
  isSelected?: boolean;
};

export function WidgetRow(props: WidgetRowProps) {
  const { widget, isSelected } = props;
  const { id, name, description, defaultDimension, tags = [] } = widget;
  const { x: width, y: height } = defaultDimension ?? {};

  const className = classnames('WidgetRow-container', {
    selected: isSelected,
  });

  function onSelect() {
    props.onSelect(id);
  }

  return (
    <div className={className} onClick={onSelect}>
      <div className='row'>
        <div className='name'>{name}</div>
        <div className='dimensions'>
          {width}x{height}
        </div>
      </div>
      <div className='row'>
        <div className='description'>{description}</div>
        <div className='tags'>{tags}</div>
      </div>
    </div>
  );
}

export default WidgetRow;
