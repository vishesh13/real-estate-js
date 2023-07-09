import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import { spacing, colors } from "../../../styles";
import { Icon, Text } from "../../atoms";
import { images } from "../../../assets/images";
// import useIsMobile from "../../../hooks/useIsMobile";

const ProjectCard = ({ item, cardStyle, imageStyle }) => {
  // const isMobile = useIsMobile();
  return (
    <Card
      sx={{
        ...cardStyle,
        padding: spacing.xxl,
      }}
    >
      <div
        style={{
          // display: "flex",
          // flexDirection: "row",
          // justifyContent: "space-between",
          // flex: 1,
        }}
      >
        <Text size="l" weight="bold" color={colors.blackText}>
          {item.name}
        </Text>
        <img
          alt="“"
          src={images["projects"][item.image]}
          style={{
            ...imageStyle
          }}
        />
      </div>
    </Card>
  );
};

export default ProjectCard;

const Row = styled("div")`
  display: flex;
  margin-top: ${spacing.m};
  margin-bottom: ${spacing.m};
`;
