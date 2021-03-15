import React from 'react';
import { AnchorStyled } from '../';
import { AnchorProps } from '../../models';

function Link(
  {
    location,
    label,
    isOpeningInNewTab,
    hoverColor,
    isActive,
    children
  }: AnchorProps) {

  return (
    <AnchorStyled
      href={`${location}`}
      hoverColor={hoverColor}
      isActive={isActive}
      target={isOpeningInNewTab ? '_blank' : '_self'}>
      <>
        {label}
        {children}
      </>
    </AnchorStyled>
  );
}

export default Link;
