import { Grid } from "@mui/material";
import NavigationBar from "../NavigationBar/NavigationBar";
import DetailsView from "../DetailsView/DetailsView";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer"

const HomeView = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <NavigationBar />
      </Grid>
      <Grid item xs={12}>
        <DetailsView />
      </Grid>
      <Grid item xs={12}>
        <Projects />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  )
}

export default HomeView;