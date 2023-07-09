import checkIsMobile from "../../utils/checkMobile";
import DetailsViewMobile from "./mobile/DetailsViewMobile";
import DetailsViewWeb from "./web/DetailsViewWeb";

const DetailsViewWrapper = () => {
  const isMobile = checkIsMobile();

  const Wrapper = isMobile ? DetailsViewMobile : DetailsViewWeb;

  return <Wrapper />;
}

export default DetailsViewWrapper;