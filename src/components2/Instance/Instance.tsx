import React, { useContext, useRef } from 'react';
import { gridContext } from '../../context/GridContext';
import { useToggle } from '../../hooks/useToggle';
import { IWidgetInstance } from '../../types';
import { areaDimension } from '../../utils/cssGrid';
import { InstanceHeader } from '../InstanceHeader/InstanceHeader';
import classnames from 'classnames';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import { useLocalStorage } from 'react-use';
import { Container } from './Instance.style';

type InstanceProps = {
  instance: IWidgetInstance;
  isVisible: boolean;
};

export function Instance(props: InstanceProps) {
  const { instance, isVisible } = props;
  const {
    id,
    position,
    dimension,
    hideHeader = true,
    isTransparent,
    allowOverflow,
    isHidden,
    isFullPage,
    isFloating,
  } = instance;
  const ref = useRef<HTMLDivElement>(null);
  const [deltaPosition, patchDeltaPosition] = useLocalStorage(`WIDGET_POSITION_${id}`, {
    x: 0,
    y: 0,
  });

  const { x, y = 0 } = dimension ?? {};
  const context = useContext(gridContext);
  const [showDescription, toggleDescription] = useToggle(false);

  if (!position || isHidden) {
    return null;
  }

  const styleContainer: React.CSSProperties = {
    gridArea: areaDimension(position.y, position.x, y, x),
  };

  const styleWidget = {};

  function renderWidget() {
    if (showDescription && context.renderInfo) {
      return context.renderInfo(instance);
    } else {
      return context.renderWidget(instance);
    }
  }

  const headerDetails = context.getWidgetHeaderDetails(instance);

  const className = classnames('Instance-container', {
    transparent: isTransparent,
    visible: isVisible,
  });

  const classNameContent = classnames('content', {
    overflow: allowOverflow,
  });

  if (isFullPage) {
    return context.renderWidget(instance);
  }

  function renderInner() {
    return (
      <Container className={className} style={styleContainer} ref={ref}>
        {!hideHeader && (
          <InstanceHeader
            title={headerDetails.title}
            description={headerDetails.description}
            onToggleDescription={toggleDescription}
          />
        )}
        <div className={classNameContent} style={styleWidget}>
          {renderWidget()}
        </div>
      </Container>
    );
  }

  if (isFloating) {
    function onStop(_ev: DraggableEvent, data: DraggableData) {
      patchDeltaPosition({
        x: data.x,
        y: data.y,
      });
    }

    const Cmp: any = Draggable;

    return (
      <Cmp onStop={onStop} defaultPosition={deltaPosition} nodeRef={ref}>
        {renderInner()}
      </Cmp>
    );
  }

  return renderInner();
}

export default Instance;
