import AnchorProps from 'shared/models/AnchorProps.model';
import AnchorStyled from 'shared/utilities/AnchorStyled/Anchor.styled';

function Link(
  {
    location,
    label,
    isOpeningInNewTab,
    hoverColor,
    isActive,
    children,
  }: AnchorProps,
) {
  return (
    <AnchorStyled
      href={`${location}`}
      hoverColor={hoverColor}
      isActive={isActive}
      target={isOpeningInNewTab ? '_blank' : '_self'}
    >
      <>
        {label}
        {children}
      </>
    </AnchorStyled>
  );
}

export default Link;
