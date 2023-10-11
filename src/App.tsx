import { Box, Center, Image } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SearchInput from "./components/SearchInput";
import home from "./assets/home.jpg";

function App() {
  return (
    <Box>
      <Image src={home} alt="Background Image" />
      <Center position="absolute" top="1%" right="1%">
        <NavBar />
      </Center>
      <Center
        position="absolute"
        top="20%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <SearchInput />
      </Center>
    </Box>
  );
}

export default App;
