import checkIsMobile from "../../utils/checkMobile";
import NavigationBarMobile from "./mobile/NavigationBarMobile";
import NavigationBarWeb from "./web/NavigationBarWeb";

const NavigationWrapper = () => {
  const isMobile = checkIsMobile();

  const Wrapper = isMobile ? NavigationBarMobile : NavigationBarWeb;

  return <Wrapper />;
}

export default NavigationWrapper;