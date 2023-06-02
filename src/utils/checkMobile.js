import { useMediaQuery } from "@mui/material";

const checkIsMobile = () => {
    const isMobile = useMediaQuery((platform) => platform.breakpoints.down("md"));
    return isMobile;
}

export default checkIsMobile;