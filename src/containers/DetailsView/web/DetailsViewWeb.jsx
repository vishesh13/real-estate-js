import { Card, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import { images } from "../../../assets/images";
import { Text } from "../../../components/atoms"
import { colors, spacing } from "../../../styles";
import GetInTouchFormWrapper from "../../GetInTouchForm/GetInTouchFormWrapper";

/**
 * Details View about organisation
 */
const DetailsViewWeb = () => {

    return (
        <Grid item xs={12}>
            <Grid
                id="DETAILS_VIEW_CONTAINER_GRID"
                container
                columnSpacing={spacing.s}
                sx={{
                    marginTop: spacing.l,
                    paddingTop: spacing.xl,
                    marginLeft: spacing.l,
                }}
            >
                <Grid item md={5} sx={{ marginTop: spacing.l }}>
                    <Card
                        style={{
                            background: colors.white,
                            borderRadius: spacing.m,
                            padding: spacing.l,
                        }}
                    >
                        <Text weight="bold" size="xxl" color={colors.blackText}>
                            Ishanika Developers
                        </Text>
                        <Text size="s" weight="semibold" color={colors.blackText}>
                            BUILDING DREAM HOMES SINCE 1991
                        </Text>
                        <Text weight="medium" size="s" color={colors.lightGray} sx={{ marginTop: spacing.s }}>
                            We all know Housing is one of the important and developing sector all over the world. Most of the
                            developing nations is yet to build housing for all, but our company is focusing on Affordability, low
                            cost and housing for all since its incorporation. These 3 pillars have been the foundation of the
                            company. It became huge success when company implemented it and incorporated into ongoing
                            projects.
                            Today, Ishanika Developers Pvt Ltd has become a household name in South Howrah. With our 3+
                            ongoing projects in South Howrah, it has gained popularity and created a huge demand for low-cost
                            housing.
                        </Text>
                    </Card>
                    <GetInTouchFormWrapper />
                </Grid>

                <Grid item md={6}>
                    <Card
                        style={{
                            backgroundImage: `url(${images.coverproj})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            borderRadius: spacing.m,
                            height: "80vh",
                            position: "relative",
                        }}
                    >
                        <InfoDiv>
                            <Text size="xl" weight="bold" color={colors.blackText} style={{ marginBottom: spacing.xs }}>
                                Our Mission
                            </Text>
                            <Text size="m" weight="semibold" color={colors.blackText}>
                                We all know nuclear families has evolved in every city. This is how our company comes into the picture by providing small flats at low cost, mostly starting from 15 Lakhs +. <br />
                                <br />
                                We are a real estate company that focuses on Housing for All. This Company is always in research process, how to fulfil the customers aspiration with limited earnings. It is not always the luxury, but some private space for their families they want. We want customers to be happy and their dream home to be the happiest on earth.
                            </Text>
                        </InfoDiv>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default DetailsViewWeb;

const InfoDiv = styled("div")`
    bottom: 0;
    padding: ${spacing.s};
    position: absolute;
    background: #fed835;
`;