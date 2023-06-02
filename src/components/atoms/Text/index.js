import Typography from "@mui/material/Typography";
import { colors, textSizes, typography } from "../../../styles";

const Text = ({
  children,
  color = colors.textPrimary,
  weight = "regular",
  size = "m",
  variant = "body1",
  sx,
  style,
  numberOfLines,
  disableScroll,
  isMinHeight,
  ...props
}) => {
  let styles = {};
  if (numberOfLines) {
    styles = {
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: numberOfLines,
      maxHeight: `calc(${numberOfLines} * 1.5 * ${textSizes[size]})`,
      overflow: disableScroll ? "hidden" : "auto",
      MsOverflowStyle: "none",
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      wordBreak: numberOfLines === 1 ? "break-all" : "break-word",
    };
  }
  if (isMinHeight) {
    styles = {
      ...styles,
      minHeight: `calc(${numberOfLines} * 1.5 * ${textSizes[size]})`,
    };
  }
  return (
    <Typography
      color={color}
      {...props}
      style={style}
      sx={{
        ...sx,
        ...styles,
        fontWeight: typography[weight],
        fontSize: textSizes[size] || size,
      }}
      variant={variant}
    >
      {children}
    </Typography>
  );
};
export default Text;
