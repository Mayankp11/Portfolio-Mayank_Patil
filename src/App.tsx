import { Flex } from "@chakra-ui/react"
import About from "./components/About"


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

<About/>
   </Flex>
  )
}

export default App