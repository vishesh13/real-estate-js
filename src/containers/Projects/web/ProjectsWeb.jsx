import { Container, Grid } from "@mui/material";
import { ProjectCard } from "../../../components/molecules";
import { MultiItemCarousel, Text } from "../../../components/atoms";
import { COMPLETED_PROJECTS } from "../constants";
import { spacing } from "../../../styles";

const ProjectsWeb = ({ convertArrayIntoChunks }) => {

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
                        size="xxxl"
                        weight="semibold"
                        style={{ margin: spacing.m, textAlign: "center", textDecoration: "underline" }}
                    >
                        Our Projects
                    </Text>
                    <MultiItemCarousel interval={8000}>
                        {convertArrayIntoChunks(COMPLETED_PROJECTS, 2).map((j, jindex) => (
                            <div
                                key={jindex}
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-evenly",
                                }}
                            >
                                {j.map((i, index) => (
                                    <ProjectCard
                                        item={i}
                                        key={index}
                                        cardStyle={{
                                            borderRadius: 15,
                                            marginBottom: spacing.s,
                                            width: 412,
                                            padding: spacing.xxl,
                                        }}
                                        imageStyle={{
                                            width: 282, 
                                            height: 190,
                                            borderRadius: 15,
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

export default ProjectsWeb;
