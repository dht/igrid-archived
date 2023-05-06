import { ActionBar } from '../ActionBar/ActionBar';
import { gridContext } from '../../context/GridContext';
import { Instance } from '../Instance/Instance';
import { IWidgetInstance } from '../../types';
import { RefObject, useContext } from 'react';

type GridViewProps = {
    gridRef: RefObject<HTMLDivElement>;
    onToggle: () => void;
};

export function GridView(props: GridViewProps) {
    const { instances, editMode, showToggle, flavour } =
        useContext(gridContext);

    function renderWidget(instance: IWidgetInstance) {
        const isVisible =
            !flavour || !instance.flavour || instance.flavour === flavour;

        return (
            <Instance
                key={instance.id}
                isVisible={isVisible}
                instance={instance}
            />
        );
    }

    return (
        <>
            {Object.values(instances ?? {}).map(renderWidget)}
            {showToggle && (
                <ActionBar editMode={editMode} onToggle={props.onToggle} />
            )}
        </>
    );
}

export default GridView;
