type WidgetTagProps = {
  label: string;
};

export function WidgetTag(props: WidgetTagProps) {
  return <div className='WidgetTag-container'>{props.label}</div>;
}

export default WidgetTag;
