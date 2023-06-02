import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import MobileStepper from "@mui/material/MobileStepper";
import { colors, spacing } from "../../../styles";
import { Box, Container } from "@mui/material";
import { images } from "../../../assets/images";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const MutliItemCarousel = ({
  children,
  arrowPosition = 25,
  arrowSize = 50,
  mx = 0,
  interval = 4000,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const onPressBack = () => {
    setActiveStep((prevStep) => Math.max(0, prevStep - 1));
  };

  const onPressNext = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, children.length - 1));
  };

  return (
    <>
      <Box
        sx={{
          margin: `0 ${mx}`,
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            position: "relative",
          }}
        >
          <img
            src={images.multiCarousel.left}
            alt="left"
            width={arrowSize}
            height={arrowSize}
            style={{
              position: "absolute",
              zIndex: 999,
              left: `${-arrowPosition}px`,
            }}
            onClick={onPressBack}
          />
          <AutoPlaySwipeableViews
            interval={interval}
            axis="x"
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            slideStyle={{
              alignItems: "center",
              display: "flex",
            }}
          >
            {children.map((item) => item)}
          </AutoPlaySwipeableViews>
          <img
            src={images.multiCarousel.right}
            alt="right"
            width={arrowSize}
            height={arrowSize}
            style={{
              position: "absolute",
              zIndex: 999,
              right: `${-arrowPosition}px`,
            }}
            onClick={onPressNext}
          />
        </Container>
      </Box>
      <MobileStepper
        steps={children.length}
        position="static"
        activeStep={activeStep}
        sx={{
          paddingBottom: spacing.s,
          backgroundColor: "transparent",
          alignItems: "center",
          justifyContent: "center",
          border: 0,
          boxShadow: "0px 0px transparent",
          "& .MuiMobileStepper-dot": {
            width: {
              xs: 6,
              sm: 6,
              md: 6,
            },
            height: {
              xs: 6,
              sm: 6,
              md: 6,
            },
            borderRadius: {
              xs: 6,
              sm: 6,
              md: 6,
            },
            backgroundColor: colors.stroke,
            transition: (theme) =>
              theme.transitions.create("all", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
          },
          "& .MuiMobileStepper-dotActive": {
            backgroundColor: colors.primary,
            transition: (theme) =>
              theme.transitions.create("all", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
          },
        }}
      />
    </>
  );
};

export default MutliItemCarousel;
