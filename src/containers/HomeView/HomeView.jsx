import { Grid } from "@mui/material";
import NavigationWrapper from "../NavigationBar/NavigationWrapper";
import DetailsViewWrapper from "../DetailsView/DetailsViewWrapper";
import ProjectsWrapper from "../Projects/ProjectsWrapper";
import Footer from "../Footer/Footer"

const HomeView = () => {
  return (
    <Grid container spacing={2}>
        <NavigationWrapper />
        <DetailsViewWrapper />
        <ProjectsWrapper />
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  )
}

export default HomeView;