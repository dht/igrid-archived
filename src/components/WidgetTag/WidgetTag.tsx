import { Wrapper } from './WidgetTag.style';

export type WidgetTagProps = {
  label: string;
};

export function WidgetTag(props: WidgetTagProps) {
  const { label } = props;

  return (
    <Wrapper className='WidgetTag-wrapper' data-testid='WidgetTag-wrapper'>
      {label}
    </Wrapper>
  );
}

export default WidgetTag;
