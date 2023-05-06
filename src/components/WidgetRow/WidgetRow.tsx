import classnames from 'classnames';
import { Description, Dimensions, Name, Row, Tags, Wrapper } from './WidgetRow.style';

export type WidgetRowProps = {
  widget: IWidget;
  onSelect: (id: string) => void;
  isSelected?: boolean;
};

export function WidgetRow(props: WidgetRowProps) {
  const { widget, isSelected } = props;
  const { id, name, description, defaultDimension, tags = [] } = widget;
  const { x: width, y: height } = defaultDimension ?? {};

  const className = classnames('WidgetRow-wrapper', {
    selected: isSelected,
  });

  function onSelect() {
    props.onSelect(id);
  }

  return (
    <Wrapper className={className} data-testid='WidgetRow-wrapper' onClick={onSelect}>
      <Row>
        <Name>{name}</Name>
        <Dimensions>
          {width}x{height}
        </Dimensions>
      </Row>
      <Row>
        <Description>{description}</Description>
        <Tags>{tags}</Tags>
      </Row>
    </Wrapper>
  );
}

export default WidgetRow;
