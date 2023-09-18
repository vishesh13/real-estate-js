import { Alert, Stack } from "@mui/material";
import { useFormik } from "formik";

import ContactFormMobile from "./mobile/ContactFormMobile";
import checkIsMobile from "../../utils/checkMobile";
import ContactFormWeb from "./web/ContactFormWeb";
import { emailConfig } from "../../config";

const GetInTouchFormWrapper = () => {
  const isMobile = checkIsMobile();
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

  const Wrapper = isMobile ? ContactFormMobile : ContactFormWeb;

  return <Wrapper formik={formik} />;
};

export default GetInTouchFormWrapper;
