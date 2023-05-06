import classnames from 'classnames';
import GridView from '../GridView/GridView';
import { gridContext } from '../../context/GridContext';
import { GridEdit } from '../GridEdit/GridEdit';
import { useRef, useState, useMemo } from 'react';
import { useToggle } from '../../hooks/useToggle';
import { useWidgets } from '../../hooks/useWidgets';
import { WidgetLibrary } from '../WidgetLibrary/WidgetLibrary';
import { IWidgetInstance, IWidget, IWidgetHeaderDetails } from '../../types';
import { Container } from './Grid.style';
import { useMount } from 'react-use';

export type GridProps = {
  id: string;
  defaultInstances: Record<string, IWidgetInstance>;
  widgetToFit?: IWidget;
  renderWidget?: (widget: IWidgetInstance) => JSX.Element | null;
  renderInfo?: (widget: IWidgetInstance) => JSX.Element;
  renderLibrary?: () => JSX.Element;
  clearWidgetToFit?: () => void;
  showToggle?: boolean;
  widgets?: Record<string, IWidget>;
  flavour?: string;
  darkMode?: boolean;
  ignoreWindowWidth?: boolean;
};

export function Grid(props: GridProps) {
  const {
    id,
    defaultInstances,
    renderInfo,
    widgets = {},
    showToggle,
    darkMode,
    flavour,
    ignoreWindowWidth,
  } = props;

  const [widgetId, setWidgetId] = useState<string>('');
  const [instances, verbs] = useWidgets(id, defaultInstances);
  const [editMode, toggleMode] = useToggle(false);
  const ref = useRef<HTMLDivElement>(null);

  const fullPageMode = useMemo(() => {
    return Object.values(instances).some((i: IWidgetInstance) => i.isFullPage);
  }, [instances]);

  const innerLibrary = typeof props.renderLibrary !== 'function';

  const GridCmp = editMode ? GridEdit : GridView;

  const className = classnames('Grid-container', {
    edit: editMode,
    dark: darkMode,
    fullPageMode,
    ignoreWindowWidth,
  });

  function renderWidgetDefault(instance: IWidgetInstance) {
    const widget = widgets[instance.widgetId ?? ''];
    if (!widget || !widget.component) {
      return <div />;
    }

    return widget.component();
  }

  function renderLibraryDefault() {
    return <WidgetLibrary selectedWidgetId={widgetId} widgets={widgets} onSelect={setWidgetId} />;
  }

  function clearWidgetToFitDefault() {
    setWidgetId('');
  }

  function getWidgetHeaderDetails(instance: IWidgetInstance): IWidgetHeaderDetails {
    const widget = widgets[instance.widgetId ?? ''];
    if (!widget) {
      return {};
    }

    return {
      title: widget.name,
      description: widget.description,
    };
  }

  let widgetToFit, renderLibrary, clearWidgetToFit;

  const renderWidget = props.renderWidget || renderWidgetDefault;

  if (innerLibrary) {
    widgetToFit = widgets[widgetId];
    renderLibrary = renderLibraryDefault;
    clearWidgetToFit = clearWidgetToFitDefault;
  } else {
    widgetToFit = props.widgetToFit;
    renderLibrary = props.renderLibrary;
    clearWidgetToFit = props.clearWidgetToFit;
  }

  const Provider = gridContext.Provider;

  const context = {
    editMode,
    instances,
    renderWidget,
    renderInfo,
    renderLibrary,
    getWidgetHeaderDetails,
    widgetToFit,
    clearWidgetToFit,
    verbs,
    showToggle,
    flavour,
  };

  return (
    <Provider value={context}>
      <Container
        className={className}
        ref={ref}
        screenWidth={screen.width}
        screenHeight={screen.height}
      >
        <GridCmp gridRef={ref} onToggle={toggleMode} />
      </Container>
    </Provider>
  );
}

export default Grid;
