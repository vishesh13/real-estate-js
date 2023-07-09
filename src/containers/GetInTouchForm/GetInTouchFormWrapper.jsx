import checkIsMobile from "../../utils/checkMobile";
import ContactFormMobile from "./mobile/ContactFormMobile";
import ContactFormWeb from "./web/ContactFormWeb";

const GetInTouchFormWrapper = () => {
  const isMobile = checkIsMobile();

  const Wrapper = isMobile ? ContactFormMobile : ContactFormWeb;

  return <Wrapper />;
}

export default GetInTouchFormWrapper;