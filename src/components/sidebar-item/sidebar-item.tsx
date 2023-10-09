import React from 'react';
import StatusTag from '../status-tag/status-tag';
import { type StatusTagType } from '../status-tag/status-tag';
import Flex from '../../../src/helpers/components/Flex/Flex';
import { ElementContent } from '../../types';

const SidebarItem: React.FC<{ children: ElementContent; status: StatusTagType }> = ({ children, status }) => {
  return (
    <Flex justify={Flex.justify.SPACE_BETWEEN} gap={Flex.gaps.MEDIUM}>
      {children}
      <StatusTag type={status} />
    </Flex>
  );
};

export default SidebarItem;
