import { RefObject, useCallback, useContext, useRef } from 'react';
import { useGridCursorFixed } from '../../hooks/useGridCursor';
import { gridContext } from '../../context/GridContext';
import { IGridPosition, IWidgetInstance } from '../../types';
import { InstanceEdit } from '../InstanceEdit/InstanceEdit';
import { ActionBar } from '../ActionBar/ActionBar';
import { v4 as uuidv4 } from 'uuid';

type GridEditProps = {
    gridRef: RefObject<HTMLDivElement>;
    onToggle: () => void;
};

export function GridEdit(props: GridEditProps) {
    const ref = props.gridRef;
    const libraryRef = useRef<HTMLDivElement>(null);
    const context = useContext(gridContext);
    const { instances, editMode, verbs, widgetToFit } = context;
    const gridOptions = {
        cellWidth: 25,
        cellHeight: 25,
    };

    const onAdd = useCallback(
        (position: IGridPosition) => {
            if (!verbs || !widgetToFit) {
                return;
            }

            const item = {
                description: widgetToFit.description,
                dimension: widgetToFit.defaultDimension,
                title: widgetToFit.name,
                id: uuidv4(),
                pageId: 'home',
                position,
                widgetId: widgetToFit.id,
            };

            verbs.add(item.id, item);

            if (context.clearWidgetToFit) {
                context.clearWidgetToFit();
            }
        },
        [verbs, widgetToFit, context]
    );

    const [cursorStyle, areaStyle] = useGridCursorFixed(ref, gridOptions, {
        dimension: widgetToFit?.defaultDimension,
        onAdd,
    });

    function onRemove(instance: IWidgetInstance) {
        verbs?.remove(instance.id);
    }

    function renderWidget(instance: IWidgetInstance) {
        return (
            <InstanceEdit
                key={instance.id}
                instance={instance}
                onRemove={() => onRemove(instance)}
            />
        );
    }

    function renderArea() {
        if (!widgetToFit?.defaultDimension) {
            return null;
        }

        return (
            <>
                <div className='area' style={areaStyle}></div>
                <div className='cursor' style={cursorStyle}></div>
            </>
        );
    }

    function renderLibrary() {
        if (!context.renderLibrary) {
            return null;
        }
        return (
            <div className='library' ref={libraryRef}>
                {context.renderLibrary()}
            </div>
        );
    }

    return (
        <>
            {Object.values(instances).map(renderWidget)}
            {renderArea()}
            {renderLibrary()}
            <ActionBar editMode={editMode} onToggle={props.onToggle} />
        </>
    );
}

export default GridEdit;
