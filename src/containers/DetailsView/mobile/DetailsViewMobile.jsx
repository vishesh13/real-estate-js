import { Card, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import { images } from "../../../assets/images";
import { Text } from "../../../components/atoms"
import { colors, spacing } from "../../../styles";
import GetInTouchFormWrapper from "../../GetInTouchForm/GetInTouchFormWrapper";

/**
 * Details View about organisation
 */
const DetailsViewMobile = () => {

    return (
        <Grid
            id="DETAILS_VIEW_MOBILE_CONTAINER_GRID"
            container
            columnSpacing={spacing.s}
            sx={{
                marginTop: spacing.l,
                paddingTop: spacing.xl,
                marginLeft: spacing.s,
            }}
        >
            <Grid item md={5} sx={{ marginTop: spacing.l, px: spacing.s }}>
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
        </Grid>
    )
}

export default DetailsViewMobile;

const InfoDiv = styled("div")`
    bottom: 0;
    padding: ${spacing.s};
    position: absolute;
    background: #fed835;
`;