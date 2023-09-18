import { Button, Card, FormControl, FormLabel, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";

import { Text, TextInput } from "../../components/atoms";
import {
  colors,
  spacing,
  styleUtils,
  textSizes,
  typography,
} from "../../styles";

const HearContactForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: () => {
      if (window.Email) {
        window.Email.send({
          ...emailConfig,
          // From: formik.values.email, //Sender's email
          Body: `Hi,\n
           My name is ${formik.values.fullName},and here follows my details.\n
           Email: ${formik.values.email},\n
           Contact: ${formik.values.phone},\n
           Below is my enquiry:\n
           ${formik.values.message}`,
        }).then(() => {
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="success">Enquiry submitted</Alert>
          </Stack>;
        });
      }
    },
  });

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
          style={{
            lineHeight: 1.2,
            marginBottom: spacing.s,
            textAlign: "center",
          }}
        >
          WE’D LOVE TO HEAR FROM YOU.
        </Text>

        <StyledFormContainer>
          <FormControl variant="standard">
            <StyledFormLabel>Your Name</StyledFormLabel>
            <StyleTextInput
              name="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              placeholder="Your Name*"
            />
            {formik.touched.fullName && Boolean(formik.errors.fullName) && (
              <FormHelperText className="form-error-field">
                {formik.errors.fullName}
              </FormHelperText>
            )}

            <StyledFormLabel>Email</StyledFormLabel>
            <StyleTextInput
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              placeholder="Your Email*"
            />
            {formik.touched.email && Boolean(formik.errors.email) && (
              <FormHelperText className="form-error-field">
                {formik.errors.email}
              </FormHelperText>
            )}

            <StyledFormLabel>Mobile</StyledFormLabel>
            <StyleTextInput
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              placeholder="Your Mobile*"
            />

            <StyledFormLabel>Message</StyledFormLabel>
            <StyleTextInput
              name="message"
              placeholder="Message"
              onChange={formik.handleChange}
              inputProps={{ style: { height: 210, overflow: "auto" } }}
              multiline
            />
            <SubmitBtn
              variant="contained"
              onClick={formik.handleSubmit}
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
  );
};

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
