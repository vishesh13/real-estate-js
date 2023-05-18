import { Box, Button, Card, Container, FormControl, FormLabel, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

import { Text, TextInput } from "../../components/atoms";
import { colors, spacing, styleUtils, textSizes, typography } from "../../styles";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: colors.white,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container sx={{ py: spacing.l }}>
        <Grid container columnSpacing={spacing.xxxl}>
          <Grid item md={6}>
          <Card
              style={{
                background: colors.white,
                borderRadius: spacing.m,
                padding: "2rem 1rem 1rem 1rem",
              }}
            >
            <Text
              color={colors.blackText}
              size="xxxl"
              weight="bold"
              style={{ lineHeight: 1.2 }}
            >
              Connect With Us
            </Text>

            <Text
              color={colors.blackText}
              size="m"
              weight="meidum"
              style={{ marginTop: spacing.xs, lineHeight: 1.2 }}
            >
              Drop your enquiry to start a reliable, simple, effortless and transparent journey with us.
            </Text>

            <Box display="flex" alignItems="center" sx={{ marginTop: spacing.xs }}>
              <Text
                color={colors.blackText}
                size="m"
                weight="meidum"
                style={{ marginTop: spacing.xs, display: "inline-flex" }}
              >
                <PhoneIcon color="#808080" style={{ marginRight: spacing.xs }} /> 9148967013
              </Text>
            </Box>

            
            <Box display="flex" alignItems="center" sx={{ marginTop: spacing.xs }}>
              <Text
                color={colors.blackText}
                size="m"
                weight="meidum"
                style={{ marginTop: spacing.xs, display: "inline-flex" }}
              >
                <EmailIcon color="#808080"  style={{ marginRight: spacing.xs }} /> ipdlmailing@gmail.com
              </Text>
            </Box>
            </Card>
          </Grid>
          <Grid item md={6}>

            <Card
              style={{
                marginLeft: spacing.xxl,
                borderRadius: spacing.m,
                background: "#fed835",
                padding: "2rem 1rem 1rem 6rem",
              }}
            >

              <Text
                color={colors.blackText}
                size="xxl"
                weight="bold"
                style={{ lineHeight: 1.2, marginBottom: spacing.s }}
              >
                WE’D LOVE TO HEAR FROM YOU.
              </Text>
              <FormControl variant="standard">

                <StyledFormLabel>
                  Your Name
                </StyledFormLabel>
                <StyleTextInput
                  name="fullName"
                  //   value={formik.values.fullName}
                  //   onChange={formik.handleChange}
                  //   error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                  placeholder="Your Name*"
                />
                {/* {formik.touched.fullName && Boolean(formik.errors.fullName) && (
          <FormHelperText className="form-error-field">
            {formik.errors.fullName}
          </FormHelperText>
        )} */}

                <StyledFormLabel>
                  Email
                </StyledFormLabel>
                <StyleTextInput
                  name="email"
                  //   value={formik.values.email}
                  //   onChange={formik.handleChange}
                  //   error={formik.touched.email && Boolean(formik.errors.email)}
                  placeholder="Your Email*"
                />
                {/* {formik.touched.email && Boolean(formik.errors.email) && (
          <FormHelperText className="form-error-field">
            {formik.errors.email}
          </FormHelperText>
        )} */}



                <StyledFormLabel>
                  Mobile
                </StyledFormLabel>
                <StyleTextInput
                  name="phone number"
                  //   value={formik.values.fullName}
                  //   onChange={formik.handleChange}
                  //   error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                  placeholder="Your Mobile*"
                />

                <StyledFormLabel>
                  Message
                </StyledFormLabel>
                <StyleTextInput
                  name="note"
                  placeholder="Message"
                  //   onChange={handleNoteChange}
                  inputProps={{ style: { height: 210, overflow: "auto" } }}
                  multiline
                  sx={{
                    // width: styleUtils.pxToRem(isMobile ? "304px" : "432px"),
                    // height: styleUtils.pxToRem("159px"),
                  }}
                />
                <SubmitBtn
                  variant="contained"
                  sx={{
                    height: styleUtils.pxToRem("50px"),
                  }}
                >
                  Submit
                </SubmitBtn>
              </FormControl>
            </Card>

          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;

const StyleTextInput = styled(TextInput)`
  width: ${styleUtils.pxToRem("350px")};
  border-radius: 15px;
  border: 2px solid #efeef3;
  background-color: ${colors.white};
  margin-bottom: ${spacing.xs};
`;

const SubmitBtn = styled(Button)`
  width: ${styleUtils.pxToRem("350px")};
  border-radius: 15px;
  background-color: ${colors.blackText};
  font-size: ${textSizes.xl};
  color: ${colors.white};
  margin-top: ${spacing.s};
`;

const StyledFormLabel = styled(FormLabel)`
  color: ${colors.blackText};
  font-size: ${textSizes.m};
  font-weight: ${typography.semibold};
  margin-bottom: ${styleUtils.pxToRem("6px")};
`;