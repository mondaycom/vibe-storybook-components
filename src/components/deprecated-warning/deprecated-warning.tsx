import { FC } from 'react';
import Link from '../link/link';
import Tip from '../tip/tip';

export interface DeprecatedWarningProps {
  alternativeName: string;
  alternativeLink?: string;
}

export const DeprecatedWarning: FC<DeprecatedWarningProps> = ({ alternativeName, alternativeLink }) => (
  <Tip emoji="🚨" title="Deprecated component" type={Tip.types?.DANGER}>
    <>
      This is a legacy component and will be deprecated in the next Vibe major version. Please consider using the
      <Link href={alternativeLink} size={Link.sizes.SMALL}>
        {alternativeName}
      </Link>
      component for your needs instead.
    </>
  </Tip>
);

export default DeprecatedWarning;