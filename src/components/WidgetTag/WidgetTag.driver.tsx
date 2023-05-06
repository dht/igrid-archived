import { render, fireEvent } from '@testing-library/react';
import { WidgetTag, WidgetTagProps } from './WidgetTag';
import { BaseComponentDriver } from 'testing-base';

export class WidgetTagDriver extends BaseComponentDriver {
  private props: Partial<WidgetTagProps> = {};

  constructor() {
    super('WidgetTag');
  }

  when: any = {
    rendered: () => {
      render(<WidgetTag {...(this.props as WidgetTagProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<WidgetTag {...(this.props as WidgetTagProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<WidgetTagProps>) => {
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
