import { AppBar, Box, Container, Toolbar, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import PhoneIcon from '@mui/icons-material/Phone';
import { Icon, Text } from "../../../components/atoms"
import { colors, spacing, styleUtils, textSizes } from "../../../styles";

const NavigationBarMobile = () => {

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
              size={24}
              color={colors.blackText}
              style={{ marginRight: spacing.xs }}
            />
            <Text
              color={colors.blackText}
              weight="semibold"
              size="m"
            >
              Ishanika Developers
            </Text>
          </StyledBox>
          <Box display="flex" alignItems="center">
            <ContactButton variant="text">
              <PhoneIcon fontSize="small" style={{marginRight: spacing.xxs}}/> 8588022019
            </ContactButton>
          </Box>
        </Toolbar>
      </Container>
    </NavBar>
  )
}

export default NavigationBarMobile;

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
  justify-content: center;
  margin-left: ${spacing.s};
  width: ${styleUtils.pxToRem("125px")};
  height: ${styleUtils.pxToRem("30px")};
  font-size: ${textSizes.s};
`;