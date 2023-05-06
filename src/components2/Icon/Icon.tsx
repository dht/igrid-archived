import { Icon as Brush } from './brush_black_24dp';
import { Icon as Close } from './close_black_24dp';
import { Icon as Download } from './file_download_black_24dp';
import { Icon as Edit } from './edit_black_24dp';
import { Icon as Info } from './info_black_24dp';
import { Icon as List } from './view_list_black_24dp';
import { Icon as Notes } from './notes_black_24dp';
import { Container } from './Icon.style';

type IconProps = {
  icon: 'brush' | 'close' | 'edit' | 'list' | 'download' | 'info' | 'notes';
  size?: number;
  onClick?: (ev: React.MouseEvent<HTMLElement>) => void;
};

const all: Record<string, () => JSX.Element> = {
  brush: Brush,
  close: Close,
  edit: Edit,
  list: List,
  download: Download,
  info: Info,
  notes: Notes,
};

export function Icon(props: IconProps) {
  const { icon, size = 20 } = props;
  const Cmp = all[icon];

  const style = {
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <Container onClick={props.onClick} style={style}>
      <Cmp />
    </Container>
  );
}

export default Icon;
