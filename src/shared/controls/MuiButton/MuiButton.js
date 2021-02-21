import { Button } from '@material-ui/core';

function MuiButton({ buttonMinWidth, ...rest }) {
  return <Button className={`button-min-width-${buttonMinWidth}`} {...rest} />
};

MuiButton.muiName = Button.muiName;

export default MuiButton;