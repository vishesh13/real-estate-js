import { AppBar, Box, Container, Toolbar, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import PhoneIcon from '@mui/icons-material/Phone';
import { Icon, Text } from "../../components/atoms"
import { colors, spacing, styleUtils, textSizes } from "../../styles";

const NavigationBar = () => {
  return (
    <NavBar
      component="nav"
      sx={{ background: displayScrollEffect ? colors.black : colors.white, }}
    >
      <Container>
        <Toolbar disableGutters>
          <StyledBox>
            <Icon
              name="buildingBlock"
              size={41}
              color={colors.blackText}
              style={{ marginRight: spacing.xs }}
            />
            <Text
              color={colors.blackText}
              weight="semibold"
              size="xxxl"
            >
              Ishanika Developers
            </Text>
          </StyledBox>
          <Box sx={{ display: "flex", flex: 1 }} />

          <Box display="flex" alignItems="center">
            <Button
              variant="text"
              sx={{
                width: styleUtils.pxToRem("155px"),
                height: styleUtils.pxToRem("50px"),
                marginLeft: spacing.s,
                color: colors.blackText,
                fontSize: textSizes.xl,
                justifyContent: "space-between",
              }}
            >
              <PhoneIcon /> 9148967013
            </Button>
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
