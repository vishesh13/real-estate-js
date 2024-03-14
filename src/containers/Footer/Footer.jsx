import { Box, Button, Card, Container, FormControl, FormLabel, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';

import checkIsMobile from "../../utils/checkMobile";

import { Text, TextInput } from "../../components/atoms";
import { colors, spacing, styleUtils, textSizes, typography } from "../../styles";
import HearContactForm from "./HearContactForm";

const Footer = () => {
  const isMobile = checkIsMobile();

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
                marginBottom: spacing.s,
                height: "68vh",
                overflow: "hidden",
              }}
            >

              <ScrolledTextContainer>
                <Text
                  color={colors.blackText}
                  size="xxxl"
                  weight="bold"
                  style={{ lineHeight: 1.2 }}
                >
                  Foundations
                </Text>
                <Text
                  color={colors.blackText}
                  size="m"
                  weight="meidum"
                  style={{ marginTop: spacing.xs, lineHeight: 1.2 }}
                >
                  RABINDRA KUMAR MISHRA – Born in buxar, Bihar, formally joined father’s business logistics service, but always keen into architectural design and structure, to build for better tomorrow. His introduction into the organisation in 1991 led the group to build economical and affordable housing for the larger sections of the society.
                  His keen interest in architectural design and structure made everyone proud and most importantly his focus on designing of apartments.
                </Text>
                <Text
                  color={colors.blackText}
                  size="m"
                  weight="meidum"
                  style={{ marginTop: spacing.xs, lineHeight: 1.2 }}
                >
                  SUDAMA PANDIT – living the dreams of papa, he lately realises that timber business is not pacing with the competitor, therefore he tried his hands in real estate sector. His initial involvement into some informal companies of real estate taught him lot about this sector. After a prolonged struggle in the market to find his existence, he found Mr. Rabindra Kumar Mishra as a friend who later on introduced Mr. Radhyeshyam Lohia an significant investor of Nirmala Apartment, located near Chatterjee hat police station. This is the first time when he started formally and came up with many more projects like Nirmala Garden, Pitamber Banerjee Lane and many more. His major work of focus was into paper work of all the projects before completion and after completion. On the other hand, looking down the sales figure and forecasting expenditure of every project and reviewing accounts was his speciality. His reading habits has made many changes
                </Text>
                <Text
                  color={colors.blackText}
                  size="m"
                  weight="meidum"
                  style={{ marginTop: spacing.xs, lineHeight: 1.2 }}
                >
                  PRADEEP CHAMARIA – As a stock market enthusiast and had too much to invest in the market encouraged him to join one of the real estate companies where he meets RABINDRA KUMAR MISHRA, who was finding an investor for his project and also a director for the company. His investment into market shares has really paid well. Looking into the brighter side his knowledge and PR skills is appreciable. His approach into the organisation made some important announcements like “AFFORDABLE HOUSING FOR ALL”.
                </Text>
                <Text
                  color={colors.blackText}
                  size="m"
                  weight="meidum"
                  style={{ marginTop: spacing.xs, marginBottom: spacing.m, lineHeight: 1.2 }}
                >
                  DEEPAK JHUNJHUNWALA – He has seen many up and downs in the stock market and real life as well. To begin with, one should learn from this man. His knowledge into technicalities of stock market and being NSE member he has accomplished many results. Though he has very less time to understand the real estate market, but after meeting his friend Mr.Pradeep Chamaria, he joined as a investor into the project called OM NEST & OM APARTMENT. These two projects didn’t yield good sales figure for him but his interests grew and joined as a Director into the company. Later on, he came up with the idea “LOW COST HOUSING FOR ALL”. This idea boosted our project called OM GARDEN, where we built more than 70 units comprising 3 Blocks, which got completed in 2018 and got overwhelming response. Some of the families brought 2 flats and many referred their relatives and friends to purchase it.
                </Text>
              </ScrolledTextContainer>
            </Card>

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
                  <PlaceIcon color="#808080" style={{ marginRight: spacing.xs }} /> Ishanika Developers Pvt Ltd <br />
                  16 India Exchange Place Kolkata-700001. <br />
                  Landmark: Calcutta Stock Exchange
                </Text>
              </Box>

              <Box display="flex" alignItems="center" sx={{ marginTop: spacing.xs }}>
                <Text
                  color={colors.blackText}
                  size="m"
                  weight="meidum"
                  style={{ marginTop: spacing.xs, display: "inline-flex" }}
                >
                  <PhoneIcon color="#808080" style={{ marginRight: spacing.xs }} /> 8588022019/9836009826
                </Text>
              </Box>


              <Box display="flex" alignItems="center" sx={{ marginTop: spacing.xs }}>
                <Text
                  color={colors.blackText}
                  size="m"
                  weight="meidum"
                  style={{ marginTop: spacing.xs, display: "inline-flex" }}
                >
                  <EmailIcon color="#808080" style={{ marginRight: spacing.xs }} /> ipdlmailing@gmail.com
                </Text>
              </Box>
            </Card>
          </Grid>

          {!isMobile &&
            <HearContactForm />
          }
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;

const ScrolledTextContainer = styled("div")`
  height: 100%;

  -moz-transform: translateY(100%);
  -webkit-transform: translateY(100%);
  transform: translateY(100%);

  -moz-animation: my-animation 15s linear infinite;
  -webkit-animation: my-animation 15s linear infinite;
  animation: my-animation 15s linear infinite;

  /* for Firefox */
@-moz-keyframes my-animation {
  from { -moz-transform: translateY(100%); }
  to { -moz-transform: translateY(-100%); }
}

/* for Chrome */
@-webkit-keyframes my-animation {
  from { -webkit-transform: translateY(100%); }
  to { -webkit-transform: translateY(-100%); }
}

@keyframes my-animation {
  from {
    -moz-transform: translateY(100%);
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
  to {
    -moz-transform: translateY(-100%);
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
}
`;