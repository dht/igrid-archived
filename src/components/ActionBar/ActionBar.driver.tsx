import { render, fireEvent } from '@testing-library/react';
import { ActionBar, ActionBarProps } from './ActionBar';
import { BaseComponentDriver } from 'testing-base';

export class ActionBarDriver extends BaseComponentDriver {
  private props: Partial<ActionBarProps> = {};

  constructor() {
    super('ActionBar');
  }

  when: any = {
    rendered: () => {
      render(<ActionBar {...(this.props as ActionBarProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<ActionBar {...(this.props as ActionBarProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<ActionBarProps>) => {
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
