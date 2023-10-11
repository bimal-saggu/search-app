import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <InputGroup>
      <Input
        variant="outline"
        borderRadius={12}
        size="lg"
        bg="white"
        placeholder="Search"
        borderColor="white"
        focusBorderColor="white"
        paddingLeft={7}
      />
      <InputRightElement
        children={<CiSearch size="35px" />}
        marginTop={1}
        marginRight={7}
      />
    </InputGroup>
  );
};

export default SearchInput;
