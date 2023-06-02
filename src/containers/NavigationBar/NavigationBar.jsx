import { AppBar, Box, Container, Toolbar, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import PhoneIcon from '@mui/icons-material/Phone';
import checkIsMobile from "../../utils/checkMobile";
import { Icon, Text } from "../../components/atoms"
import { colors, spacing, styleUtils, textSizes } from "../../styles";

const NavigationBar = () => {
  const isMobile = checkIsMobile();

  return (
    <NavBar
      component="nav"
      sx={{ background: colors.white, }}
    >
      <Container>
        <Toolbar disableGutters>
          <StyledBox>
            <Icon
              name="buildingBlock"
              size={isMobile ? 24 : 41}
              color={colors.blackText}
              style={{ marginRight: spacing.xs }}
            />
            <Text
              color={colors.blackText}
              weight="semibold"
              size={isMobile ? "l" : "xxxl"}
            >
              Ishanika Developers
            </Text>
          </StyledBox>
          {!isMobile &&
            <Box sx={{ display: "flex", flex: 1 }} />
          }
          <Box display="flex" alignItems="center">
            <ContactButton
              variant="text"
              sx={{
                width: styleUtils.pxToRem(isMobile ? "125px" : "155px"),
                height: styleUtils.pxToRem(isMobile ? "35px" : "50px"),
                fontSize: isMobile ? textSizes.m : textSizes.xl,
              }}
            >
              <PhoneIcon fontSize={isMobile ? "small" : "large"} /> 8588022019
            </ContactButton>
          </Box>
        </Toolbar>
      </Container>
    </NavBar>
  )
}

export default NavigationBar;

const StyledBox = styled(Box)`
  display: inline-flex;
  align-items: center;
  padding: 0 ${spacing.xs};
`;

const NavBar = styled(AppBar)`
  position: fixed;
  top: 0;
  transition-timing-function: ease-in;
  transition: all .5s;
`;

const ContactButton = styled(Button)`
  color: ${colors.blackText};
  justify-content: space-between;
  margin-left: ${spacing.s};
`;