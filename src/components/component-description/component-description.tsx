import { FC, ReactNode } from 'react';

type ComponentDescriptionProps = {
  description?: string;
  children?: ReactNode;
};

const ComponentDescription: FC<ComponentDescriptionProps> = ({ description = '', children = null }) => (
  <div>
    <span>{description}</span>
    {children}
  </div>
);

export default ComponentDescription;
