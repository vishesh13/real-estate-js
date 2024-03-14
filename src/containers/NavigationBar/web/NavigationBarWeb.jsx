import { AppBar, Box, Container, Toolbar, Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import PhoneIcon from '@mui/icons-material/Phone';
import { Icon, Text } from "../../../components/atoms"
import { colors, spacing, styleUtils, textSizes } from "../../../styles";

const NavigationBarWeb = () => {

    return (
        <Grid item xs={12}>
            <NavBar
                component="nav"
                sx={{ background: colors.white, }}
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
                                Ishanika Developers Pvt. Ltd.
                            </Text>
                        </StyledBox>
                        <Box sx={{ display: "flex", flex: 1 }} />
                        <Box display="flex" alignItems="center">
                            <ContactButton variant="text">
                                <PhoneIcon fontSize="large" /> 8588022019
                            </ContactButton>
                        </Box>
                    </Toolbar>
                </Container>
            </NavBar>
        </Grid>
    )
}

export default NavigationBarWeb;

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
  width: ${styleUtils.pxToRem("155px")};
  height: ${styleUtils.pxToRem("50px")};
  font-size: ${textSizes.xl};
`;