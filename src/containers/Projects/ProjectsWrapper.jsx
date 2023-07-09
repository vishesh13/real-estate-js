import checkIsMobile from "../../utils/checkMobile";
import ProjectsMobile from "./mobile/ProjectsMobile";
import ProjectsWeb from "./web/ProjectsWeb";

const convertArrayIntoChunks = (inputArray, perChunk = 5) =>
  inputArray.reduce((arr, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);
    if (!arr[chunkIndex]) {
      arr[chunkIndex] = [];
    }
    arr[chunkIndex].push(item);
    return arr;
  }, []
  );
  

const ProjectsWrapper = () => {
  const isMobile = checkIsMobile();

  const Wrapper = isMobile ? ProjectsMobile : ProjectsWeb;

  return <Wrapper convertArrayIntoChunks={convertArrayIntoChunks} />;
}

export default ProjectsWrapper;