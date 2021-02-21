import styled from 'styled-components';

const AnchorStyled = styled.a(({ isActive, theme }) => (
  {
    cursor: 'pointer',
    transition: '.2s all ease',
    lineHeight: 1.5,
    color: isActive
      ? theme.colors.textBold
      : theme.colors.text,
    ':hover': {
      color: theme.colors.secondary
    }
  }
));

export default AnchorStyled;