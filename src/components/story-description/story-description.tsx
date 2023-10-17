import React, { FC, useMemo } from 'react';
import cx from 'classnames';
import styles from './story-description.module.scss';
import { ElementContent } from '../../types';
import { FlexAlign, FlexDirection, FlexGap, FlexJustify } from 'src/helpers/components/Flex/FlexConstants';
import Flex from 'src/helpers/components/Flex/Flex';

type StoryDescriptionProps = {
  align?: FlexAlign;
  description?: string | ElementContent;
  children: ElementContent;
  className: string;
  headerAlign?: FlexAlign;
  headerJustify?: FlexJustify;
  headerStyle: Record<string, unknown>;
  justify?: FlexJustify;
  vertical?: boolean;
};

const StoryDescription: FC<StoryDescriptionProps> = ({
  description = '',
  headerStyle,
  children,
  vertical = false,
  className,
  align,
  justify = FlexJustify.START,
  headerAlign,
  headerJustify,
}) => {
  const direction = useMemo(() => (vertical ? FlexDirection.COLUMN : FlexDirection.ROW), [vertical]);

  return (
    <Flex direction={direction} gap={FlexGap.MEDIUM} justify={justify} align={align || undefined} className={className}>
      <Flex
        className={cx(styles.description, { [styles.vertical]: vertical })}
        style={{ width: '120px', ...headerStyle }}
        justify={headerJustify}
        align={headerAlign || FlexAlign.CENTER}
      >
        {description}
      </Flex>
      {children}
    </Flex>
  );
};

export default StoryDescription;
