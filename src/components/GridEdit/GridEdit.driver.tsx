import { render, fireEvent } from '@testing-library/react';
import { GridEdit, GridEditProps } from './GridEdit';
import { BaseComponentDriver } from 'testing-base';

export class GridEditDriver extends BaseComponentDriver {
  private props: Partial<GridEditProps> = {};

  constructor() {
    super('GridEdit');
  }

  when: any = {
    rendered: () => {
      render(<GridEdit {...(this.props as GridEditProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<GridEdit {...(this.props as GridEditProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<GridEditProps>) => {
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
