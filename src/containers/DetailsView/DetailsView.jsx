import { Card } from "@mui/material";

import ContactFormView from "../ContactFormView";

import { images } from "../../assets/images";
import { Text } from "../../components/atoms"
import { colors, spacing } from "../../styles";

/**
 * Details View about organisation
 */
const DetailsView = (props) => {
    return (
        <div
            style={{
                height: "80vh",
                backgroundImage: `url(${images.coverproj})`,
                backgroundPosition: "right",
                backgroundSize: "55%",
                backgroundRepeat: "no-repeat",
                borderRadius: "50px",
                marginTop: spacing.xxxxxl,
                marginRight: spacing.s,
            }}
        >
            <Card
                style={{
                    background: colors.white,
                    maxWidth: "35%",
                    marginLeft: spacing.xxxxxl,
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

            <Card
                style={{
                    background: "#fed835",
                    maxWidth: "35%",
                    marginTop: spacing.l,
                    marginLeft: spacing.xxxxxl,
                    borderRadius: spacing.m,
                    padding: spacing.l,
                }}
            >
                <Text weight="bold" size="xxl" color={colors.titleBlack} sx={{ marginBottom: spacing.m, textAlign: "center" }}>
                    Get in touch!
                </Text>
                <ContactFormView />
            </Card>
        </div>
    )
}

export default DetailsView;