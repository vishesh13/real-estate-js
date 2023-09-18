import { Alert, Snackbar } from "@mui/material";
import { colors } from "../../../styles";
import { Text } from "../";
import checkIsMobile from "../../../utils/checkMobile";

const Banner = ({ isShown, alertProps }) => {
  const isMobile = checkIsMobile();

  const anchorOrigin = isMobile
    ? { vertical: "bottom", horizontal: "center" }
    : { vertical: "top", horizontal: "center" };

  return (
    <Snackbar
      open={isShown}
      anchorOrigin={anchorOrigin}
      {...snackbarProps}
      //   onClose={handleClose}
      autoHideDuration={2000}
    >
      <Alert
        // onClose={handleClose}
        elevation={6}
        {...alertProps}
        sx={{ width: "100%" }}
        // eslint-disable-next-line react/no-children-prop
        children={
          <Text
            size="xs"
            weight="medium"
            color={colors.black}
            style={{ transform: "translateY(2px)" }}
          >
            {alertProps.children.message}
          </Text>
        }
      />
    </Snackbar>
  );
};

export default Banner;
