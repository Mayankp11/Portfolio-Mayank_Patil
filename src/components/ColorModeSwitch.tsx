import { IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";
import { BsMoon } from "react-icons/bs";

const ColorModeSwitch: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle color mode"
      icon={colorMode === "light" ? <BsMoon /> : <SunIcon />}
      onClick={toggleColorMode}
      variant="link"
      size="lg"
      color={colorMode === "light" ? "yellow.500" : "yellow.500"}  // Change icon color based on mode
    />
  );
};

export default ColorModeSwitch;
