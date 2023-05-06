import { IWidgetInstance } from '../types';
import { useDictionary, Verbs } from './useDictionary';

const LOCAL_STORAGE_WIDGETS_KEY = 'LOCAL_STORAGE_WIDGETS_KEY';

type UseWidgetsReturn = [
    Record<string, IWidgetInstance>,
    Verbs<IWidgetInstance>
];

export function useWidgets(
    gridId: string,
    initialValue: Record<string, IWidgetInstance>
): UseWidgetsReturn {
    return useDictionary<IWidgetInstance>(
        initialValue,
        LOCAL_STORAGE_WIDGETS_KEY + '_' + gridId
    );
}
