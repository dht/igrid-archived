import { IWidgets, IWidget, IWidgetLibraryBuilder } from '../types';

export class WidgetLibraryBuilder implements IWidgetLibraryBuilder {
    private widgets: IWidgets = {};

    getScopedWidgetId(appId: string, widgetId: string) {
        return `${appId}_${widgetId}`;
    }

    withWidgets(widgets: IWidget[]) {
        widgets.forEach((widget) => {
            this.widgets[widget.id] = widget;
        });

        return this;
    }

    build(): IWidgets {
        return this.widgets;
    }
}
