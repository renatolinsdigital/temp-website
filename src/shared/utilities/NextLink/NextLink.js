import Link from 'next/link';
import { AnchorStyled } from '../';

function NextLink({ location, label, isActive }) {
  return (
    <Link href={`/${location}`}>
      <AnchorStyled isActive={isActive}>{label}</AnchorStyled>
    </Link>
  )
};

export default NextLink;
