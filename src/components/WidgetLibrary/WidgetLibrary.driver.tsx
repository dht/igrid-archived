import { render, fireEvent } from '@testing-library/react';
import { WidgetLibrary, WidgetLibraryProps } from './WidgetLibrary';
import { BaseComponentDriver } from 'testing-base';

export class WidgetLibraryDriver extends BaseComponentDriver {
  private props: Partial<WidgetLibraryProps> = {};

  constructor() {
    super('WidgetLibrary');
  }

  when: any = {
    rendered: () => {
      render(<WidgetLibrary {...(this.props as WidgetLibraryProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<WidgetLibrary {...(this.props as WidgetLibraryProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<WidgetLibraryProps>) => {
      this.props = props;
      return this;
    },
  };

  get = {
    WrapperClassName: () => {
      return this.wrapper.className;
    },
    label: () => {
      return this.wrapper.innerHTML;
    },
  };
}
