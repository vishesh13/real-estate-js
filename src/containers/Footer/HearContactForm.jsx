
import { Box, Button, Card, Container, FormControl, FormLabel, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';

import checkIsMobile from "../../utils/checkMobile";

import { Text, TextInput } from "../../components/atoms";
import { colors, spacing, styleUtils, textSizes, typography } from "../../styles";

const HearContactForm = () => {

    return (
        <Grid item md={6}>
            <Card
                style={{
                    borderRadius: spacing.m,
                    background: "#fed835",
                    padding: "2rem",
                }}
            >
                <Text
                    color={colors.blackText}
                    size="xxl"
                    weight="extrabold"
                    style={{ lineHeight: 1.2, marginBottom: spacing.s, textAlign: "center" }}
                >
                    WE’D LOVE TO HEAR FROM YOU.
                </Text>

                <StyledFormContainer>

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
                </StyledFormContainer>
            </Card>
        </Grid>
    )
}

export default HearContactForm;

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

const StyledFormContainer = styled("div")`
  margin-left: 4.125rem;
`;