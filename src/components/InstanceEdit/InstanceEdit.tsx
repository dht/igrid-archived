import classnames from 'classnames';
import { useContext } from 'react';
import { gridContext } from '../../context/GridContext';
import { useToggle } from '../../hooks/useToggle';
import { IWidgetInstance } from '../../types';
import { areaDimension } from '../../utils/cssGrid';
import { InstanceHeader } from '../InstanceHeader/InstanceHeader';
import { Content, Wrapper } from './InstanceEdit.style';

export type InstanceEditProps = {
  instance: IWidgetInstance;
  onRemove: () => void;
};

export function InstanceEdit(props: InstanceEditProps) {
  const { instance } = props;
  const { position, dimension, hideHeader } = instance;
  const { x, y = 0 } = dimension ?? {};
  const context = useContext(gridContext);
  const [showDescription, toggleDescription] = useToggle(false);

  if (!position) {
    return null;
  }

  const styleContainer = {
    gridArea: areaDimension(position.y, position.x, y, x),
  };

  const styleWidget = {
    maxHeight: `${y * 25}px`,
  };

  function renderWidget() {
    if (showDescription && context.renderInfo) {
      return context.renderInfo(instance);
    } else {
      return context.renderWidget(instance);
    }
  }

  const className = classnames('InstanceEdit-wrapper', {
    hideHeader,
  });

  return (
    <Wrapper data-testid='InstanceEdit-wrapper' className={className} style={styleContainer}>
      <InstanceHeader onToggleDescription={toggleDescription} onRemove={props.onRemove} />
      <Content style={styleWidget}>{renderWidget()}</Content>
    </Wrapper>
  );
}

export default InstanceEdit;
