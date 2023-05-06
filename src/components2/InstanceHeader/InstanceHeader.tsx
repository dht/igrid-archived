import React, { useContext } from 'react';
import { gridContext } from '../../context/GridContext';
import { IWidgetInstance } from '../../types';
import { Icon } from '../Icon/Icon';

type InstanceHeaderProps = {
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
        <div className='InstanceHeader-container'>
            <div className='title'>{title}</div>
            <div className='actions'>
                {showDescriptionIcon && (
                    <Icon icon='notes' onClick={props.onToggleDescription} />
                )}
                {editMode && <Icon icon='close' onClick={props.onRemove} />}
            </div>
        </div>
    );
}

export default InstanceHeader;
