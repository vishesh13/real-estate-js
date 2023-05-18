import Icons from "../../../assets/icons";
import { colors, textSizes } from "../../../styles";

const Icon = ({
  name,
  children,
  size = textSizes.l,
  color = colors.black,
  ...props
}) => {
  return (
    <>
      {Icons[name].render(
        { width: size, height: size, fill: color, ...props },
        children
      )}
    </>
  );
};

export default Icon;
