import {
    Box,
    Flex,
    HStack,
    Link,
    Spacer,
    Text,
    useBreakpointValue,
    IconButton,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
  } from "@chakra-ui/react";
  import { Global } from "@emotion/react";
  import { GiHamburgerMenu } from "react-icons/gi";
  import React from "react";
  import ColorModeSwitch from "./ColorModeSwitch";
  
  
  const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  
    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  
    // Use breakpoint value to switch between normal nav and hamburger nav
    const displayNav = useBreakpointValue({ base: "none", md: "flex" });
    const displayHamburger = useBreakpointValue({ base: "flex", md: "none" });
  
    return (
      <>
        <Global
          styles={{
            html: {
              scrollBehavior: "smooth",
            },
          }}
        />
        <Box
          as="header"
          bg="#0a192f"
          color="white"
          px={8}
          py={4}
          boxShadow="md"
          position="sticky"
          top={0}
          zIndex={1000}
        >
          <Flex alignItems="center">
            {/* Logo Section */}
            {/* <Heading as="h1" size="md" fontFamily="serif">
              <Link
                href="/"
                _hover={{ textDecoration: "none", color: "teal.300" }}
              >
                <Text>My Logo</Text>
              </Link>
            </Heading> */}
  
            {/* Spacer pushes navigation to the right */}
            <Spacer />
  
            {/* Hamburger menu for small screens */}
            <IconButton
              icon={<GiHamburgerMenu />}
              aria-label="Open menu"
              display={displayHamburger}
              onClick={toggleDrawer}
              variant="ghost"
              color="white"
            />
  
            {/* Desktop Navigation Links */}
            <HStack
              spacing={8}
              fontSize="md"
              fontWeight="semibold"
              display={displayNav}
            >
              <ColorModeSwitch />
              <Link
                href="#home"
                _hover={{ textDecoration: "underline", color: "teal.300" }}
              >
                Home
              </Link>
              <Link
                href="#about"
                _hover={{ textDecoration: "underline", color: "teal.300" }}
              >
                About
              </Link>
              <Link
                href="#experience"
                _hover={{ textDecoration: "underline", color: "teal.300" }}
              >
                Experience
              </Link>
              <Link
                href="#projects"
                _hover={{ textDecoration: "underline", color: "teal.300" }}
              >
                Projects
              </Link>
              <Link
                href="#techstack"
                _hover={{ textDecoration: "underline", color: "teal.300" }}
              >
                TechStack
              </Link>
              <Link
                href="#contact"
                _hover={{ textDecoration: "underline", color: "teal.300" }}
              >
                Contact
              </Link>
            </HStack>
          </Flex>
  
          {/* Drawer for Hamburger Menu (Mobile View) */}
          <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} placement="right">
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader bg="#0a192f" color="white">
                <Text fontSize="lg">Menu</Text>
              </DrawerHeader>
              <DrawerBody bg="#0a192f" color="white">
                <VStack spacing={4} align="start">
                  <Link
                    href="#home"
                    _hover={{ textDecoration: "underline", color: "teal.300" }}
                    onClick={toggleDrawer}
                  >
                    Home
                  </Link>
                  <Link
                    href="#about"
                    _hover={{ textDecoration: "underline", color: "teal.300" }}
                    onClick={toggleDrawer}
                  >
                    About
                  </Link>
                  <Link
                    href="#experience"
                    _hover={{ textDecoration: "underline", color: "teal.300" }}
                    onClick={toggleDrawer}
                  >
                    Experience
                  </Link>
                  <Link
                    href="#projects"
                    _hover={{ textDecoration: "underline", color: "teal.300" }}
                    onClick={toggleDrawer}
                  >
                    Projects
                  </Link>
                  <Link
                    href="#techstack"
                    _hover={{ textDecoration: "underline", color: "teal.300" }}
                    onClick={toggleDrawer}
                  >
                    TechStack
                  </Link>
                  <Link
                    href="#contact"
                    _hover={{ textDecoration: "underline", color: "teal.300" }}
                    onClick={toggleDrawer}
                  >
                    Contact
                  </Link>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </>
    );
  };
  
  export default Navbar;
  