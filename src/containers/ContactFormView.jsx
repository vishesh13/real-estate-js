import {
    Avatar,
    Button,
    FormControl,
    FormLabel,
    FormHelperText,
    Menu,
    InputAdornment,
    IconButton,
    Grid,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import checkIsMobile from "../utils/checkMobile";

import { Icon, Text, TextInput } from "../components/atoms";

import { colors, spacing, styleUtils, textSizes, typography } from "../styles";

const ContactFormView = () => {
    const isMobile = checkIsMobile();

    return (
        <Grid container spacing={1}>
            <Grid item xs={6}>
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
                </FormControl>
                <FormControl
                    variant="standard"
                    sx={{ marginTop: styleUtils.pxToRem("12px") }}
                >
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
                </FormControl>

                <FormControl variant="standard" sx={{ marginTop: styleUtils.pxToRem("12px") }}>
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
                </FormControl>
                <FormControl
                    variant="standard"
                    sx={{ marginTop: styleUtils.pxToRem("12px") }}
                >
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
                </FormControl>
                <Button
                    variant="contained"
                    sx={{
                        width: styleUtils.pxToRem("155px"),
                        height: styleUtils.pxToRem("50px"),
                        margin: "auto",
                        fontSize: textSizes.xl,
                        backgroundColor: colors.blackText,
                        color: colors.white,
                        marginTop: spacing.s,
                        marginLeft: spacing.xxl,
                    }}
                >
                    Enquire Now
                </Button>
            </Grid>
            {!isMobile &&
                <>
                    <Grid item xs={6}>
                        <FormControl
                            variant="standard"
                        >
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
                        </FormControl>
                    </Grid>
                    <Button
                        variant="contained"
                        sx={{
                            width: styleUtils.pxToRem("155px"),
                            height: styleUtils.pxToRem("50px"),
                            margin: "auto",
                            fontSize: textSizes.xl,
                            backgroundColor: colors.blackText,
                            color: colors.white,
                            marginTop: spacing.s,
                        }}
                    >
                        Enquire Now
                    </Button>
                </>
            }
        </Grid>
    );

}

export default ContactFormView;

const StyleTextInput = styled(TextInput)`
    width: ${styleUtils.pxToRem("270px")};
    border-radius: 15px;
    border: 2px solid #efeef3;
    background-color: ${colors.white};
`;

const StyledFormLabel = styled(FormLabel)`
    color: ${colors.blackText};
    font-size: ${textSizes.m};
    font-weight: ${typography.semibold};
    margin-bottom: ${styleUtils.pxToRem("6px")};
`;