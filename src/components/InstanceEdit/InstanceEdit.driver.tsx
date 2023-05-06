import { render, fireEvent } from '@testing-library/react';
import { InstanceEdit, InstanceEditProps } from './InstanceEdit';
import { BaseComponentDriver } from 'testing-base';

export class InstanceEditDriver extends BaseComponentDriver {
  private props: Partial<InstanceEditProps> = {};

  constructor() {
    super('InstanceEdit');
  }

  when: any = {
    rendered: () => {
      render(<InstanceEdit {...(this.props as InstanceEditProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<InstanceEdit {...(this.props as InstanceEditProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<InstanceEditProps>) => {
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
