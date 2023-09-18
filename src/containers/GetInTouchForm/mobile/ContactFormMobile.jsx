import {
  Avatar,
  Button,
  Card,
  FormControl,
  FormLabel,
  FormHelperText,
  Menu,
  InputAdornment,
  IconButton,
  Grid,
} from "@mui/material";

import { styled } from "@mui/material/styles";

import { Text, TextInput } from "../../../components/atoms";

import {
  colors,
  spacing,
  styleUtils,
  textSizes,
  typography,
} from "../../../styles";

const ContactFormMobile = ({ formik }) => {
  return (
    <Card
      style={{
        background: "#fed835",
        marginTop: spacing.l,
        borderRadius: spacing.m,
        padding: spacing.l,
      }}
    >
      <Text
        weight="extrabold"
        size="xxl"
        color={colors.titleBlack}
        sx={{ marginBottom: spacing.m, textAlign: "left", pl: spacing.m }}
      >
        Get in touch!
      </Text>

      <Grid container spacing={1} sx={{ pl: spacing.s }}>
        <Grid item xs={6}>
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
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ marginTop: styleUtils.pxToRem("12px") }}
          >
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
          </FormControl>

          <FormControl
            variant="standard"
            sx={{ marginTop: styleUtils.pxToRem("12px") }}
          >
            <StyledFormLabel>Mobile</StyledFormLabel>
            <StyleTextInput
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              placeholder="Your Mobile*"
            />
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ marginTop: styleUtils.pxToRem("12px") }}
          >
            <StyledFormLabel>Message</StyledFormLabel>
            <StyleTextInput
              name="message"
              placeholder="Message"
              onChange={formik.handleChange}
              inputProps={{ style: { height: 210, overflow: "auto" } }}
              multiline
            />
          </FormControl>
          <Button
            variant="contained"
            onClick={formik.handleSubmit}
            sx={{
              width: styleUtils.pxToRem("155px"),
              height: styleUtils.pxToRem("50px"),
              fontSize: textSizes.xl,
              backgroundColor: colors.blackText,
              color: colors.white,
              marginTop: spacing.l,
              marginLeft: "auto",
            }}
          >
            Enquire Now
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ContactFormMobile;

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
