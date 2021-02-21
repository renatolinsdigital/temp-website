import styled from 'styled-components';

const ControlsContainerStyled = styled.div(({ isVertical }) => (
  {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: isVertical ? 'column' : 'row',
    padding: '15px',
    'button': {
      width: isVertical ? '100%' : null,
      margin: isVertical ? '10px 0' : '0 10px'
    }
  }
));

export default ControlsContainerStyled;