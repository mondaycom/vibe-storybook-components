import { FC, ReactNode } from 'react';
import './anchor-list-item.scss';

type AnchorListItemProps = {
  children?: ReactNode;
};

const AnchorListItem: FC<AnchorListItemProps> = ({ children = null }) => (
  <li className="vibe-sb-comps-anchor-list-item">{children}</li>
);

export default AnchorListItem;
