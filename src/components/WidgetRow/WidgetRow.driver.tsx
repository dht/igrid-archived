import { render, fireEvent } from '@testing-library/react';
import { WidgetRow, WidgetRowProps } from './WidgetRow';
import { BaseComponentDriver } from 'testing-base';

export class WidgetRowDriver extends BaseComponentDriver {
  private props: Partial<WidgetRowProps> = {};

  constructor() {
    super('WidgetRow');
  }

  when: any = {
    rendered: () => {
      render(<WidgetRow {...(this.props as WidgetRowProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<WidgetRow {...(this.props as WidgetRowProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<WidgetRowProps>) => {
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
