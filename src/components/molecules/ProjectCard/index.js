import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import { spacing, colors } from "../../../styles";
import { Text } from "../../atoms";
import { images } from "../../../assets/images";

const ProjectCard = ({ item, cardStyle, imageStyle }) => {

  return (
    <Card
      sx={{
        ...cardStyle,
      }}
    >
      <img
        alt="“"
        src={images["projects"][item.image]}
        style={{
          ...imageStyle
        }}
      />
      <Text size="l" weight="semibold" color={colors.blackText} sx={{marginTop: spacing.xs}}>
        {item.name}
      </Text>
      <Text size="m" weight="medium" color={colors.blackText} sx={{marginTop: spacing.xs}}>
        {item.address}
      </Text>
    </Card>
  );
};

export default ProjectCard;

const Row = styled("div")`
  display: flex;
  margin-top: ${spacing.m};
  margin-bottom: ${spacing.m};
`;
