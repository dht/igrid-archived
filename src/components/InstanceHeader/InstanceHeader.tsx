import React, { useContext } from 'react';
import { gridContext } from '../../context/GridContext';
import { IWidgetInstance } from '../../types';
import { Icon } from '../Icon/Icon';
import { Actions, Title, Wrapper } from './InstanceHeader.style';

export type InstanceHeaderProps = {
  onToggleDescription: () => void;
  onRemove?: () => void;
  title?: string;
  description?: string;
};

export function InstanceHeader(props: InstanceHeaderProps) {
  const { editMode, renderInfo } = useContext(gridContext);
  const { title = '', description = '' } = props;

  const showDescriptionIcon = description && typeof renderInfo === 'function';

  return (
    <Wrapper className='InstanceHeader-wrapper' data-testid='InstanceHeader-wrapper'>
      <Title>{title}</Title>
      <Actions>
        {showDescriptionIcon && <Icon icon='notes' onClick={props.onToggleDescription} />}
        {editMode && <Icon icon='close' onClick={props.onRemove} />}
      </Actions>
    </Wrapper>
  );
}

export default InstanceHeader;
