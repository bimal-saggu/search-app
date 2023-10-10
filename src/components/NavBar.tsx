import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/zevi.webp";

const NavBar = () => {
  return (
    <HStack margin={7}>
      <Image src={logo} width={20} />
    </HStack>
  );
};

export default NavBar;
