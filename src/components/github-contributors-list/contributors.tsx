import { FC } from 'react';
import cx from 'classnames';
import Link from '../../../src/components/link/link';
import styles from './contributors.module.scss';

type Contributor = {
  name: string;
  href: string;
  key?: string;
};

interface contributorsDataProps {
  contributorsData: Array<Contributor>;
}

export const Contributors: FC<contributorsDataProps> = ({ contributorsData }) => {
  const lastIndex = contributorsData.length - 1;
  return (
    <>
      {contributorsData.map(({ name, href, key }, index) => (
        <Link key={key || href} href={href} className={cx({ [styles.contributor]: index < lastIndex })}>
          {name}
        </Link>
      ))}
    </>
  );
};
