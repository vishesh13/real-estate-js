import { Container, Grid } from "@mui/material";
import { ProjectCard } from "../../../components/molecules";
import { MultiItemCarousel, Text } from "../../../components/atoms";
import { COMPLETED_PROJECTS } from "../constants";
import { spacing } from "../../../styles";

const ProjectsMobile = ({ convertArrayIntoChunks }) => {
    return (
        <Grid item xs={12}>
            <div
                style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    minHeight: "50vh",
                    marginBottom: spacing.l,
                    padding: spacing.s,
                    margin: spacing.m,
                }}
            >
                <Container
                    sx={{
                        display: "flex",
                        alignSelf: "center",
                        height: "100%",
                        backgroundColor: "#F6F8FA",
                        borderRadius: "30px",
                        position: "absolute",
                    }}
                />
                <div style={{ zIndex: 999 }}>
                    <Text
                        size="xxl"
                        weight="semibold"
                        style={{
                            lineHeight: 1.2,
                            marginBottom: spacing.m,
                            textAlign: "center", 
                            textDecoration: "underline"
                        }}
                    >
                        Our Projects
                    </Text>
                    <MultiItemCarousel interval={8000000}>
                        {convertArrayIntoChunks(COMPLETED_PROJECTS, 1).map((j, jindex) => (
                            <div
                                key={jindex}
                                style={{
                                    margin: "auto",
                                }}
                            >
                                {j.map((i, index) => (
                                    <ProjectCard
                                        item={i}
                                        key={index}
                                        cardStyle={{
                                            borderRadius: 10,
                                            marginBottom: spacing.xs,
                                            padding: spacing.l,
                                            width: 240,
                                        }}
                                        imageStyle={{
                                            borderRadius: 10,
                                            height: 190,
                                            width: 182, 
                                        }}
                                    />
                                ))}
                            </div>
                        ))}
                    </MultiItemCarousel>
                </div>
            </div>
        </Grid>
    );
};

export default ProjectsMobile;
