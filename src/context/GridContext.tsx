import { createContext } from 'react';
import { Verbs } from '../hooks/useDictionary';
import { IWidgetInstance, IWidget, IWidgetHeaderDetails } from '../types';

type GridContext = {
    editMode: boolean;
    instances: Record<string, IWidgetInstance>;
    renderWidget: (instance: IWidgetInstance) => JSX.Element | null;
    renderInfo?: (instance: IWidgetInstance) => JSX.Element;
    getWidgetHeaderDetails: (instance: IWidgetInstance) => IWidgetHeaderDetails;
    renderLibrary?: () => JSX.Element;
    widgetToFit?: IWidget;
    clearWidgetToFit?: () => void;
    verbs?: Verbs<IWidgetInstance>;
    showToggle?: boolean;
    flavour?: string;
};

export const initialContext: GridContext = {
    editMode: false,
    renderWidget: (_instance: IWidgetInstance) => <div />,
    renderLibrary: () => <div />,
    getWidgetHeaderDetails: (_instance: IWidgetInstance) => ({
        title: '',
        description: '',
    }),
    instances: {},
};

export const gridContext = createContext<GridContext>(initialContext);
