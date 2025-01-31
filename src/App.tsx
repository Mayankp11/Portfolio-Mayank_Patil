import { Box, Flex } from "@chakra-ui/react"
import About from "./components/About"
import Navbar from "./components/Navbar"
import IntroSection from "./components/IntroSection"
import Projects from "./components/Projects"
import WorkExperience from "./components/WorkExperience"
import TechStack from "./components/TechStack"
import Footer from "./components/footer"
import { Analytics } from "@vercel/analytics/react"


const App = () => {
  return (
    <Flex
    direction="column" // Stack children vertically
    height="100vh" // Full height
    width="100vw" // Full width
    p={2} // Add padding for spacing
    gap={4} // Add spacing between children
    overflow="auto" // Enable scrolling when content overflows
  >

 {/* Navbar Section */}
 <Box m={0} p={0} w="100%" id="home">
        {/* Uncomment to enable the color mode switch */}
        {/* <ColorModeSwitch /> */}
        <Navbar />
        <IntroSection />
      </Box>

      {/* About Section */}
      <Box width="100%" id="about">
        <About />
      </Box>

       {/* Experience Section */}
       <Box mt={8} width="100%" id="experience">
        <WorkExperience />
      </Box>

       {/* Projects Section */}
       <Box width="100%" id="projects">
        <Projects />
      </Box>

       {/* Tech Stack Section */}
       <Box id="techstack" width="100%">
        <TechStack />
      </Box>

        {/* Footer Section */}
        <Box id="contact" width="100%">
        <Footer />
      </Box>
      <Analytics/>
   </Flex>
  )
}

export default App