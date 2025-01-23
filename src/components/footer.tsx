import {
    Box,
    Flex,
    Text,
    Link,
    Stack,
  } from "@chakra-ui/react";
  import { FaLinkedin, FaGithub} from "react-icons/fa"; // Icons for social media links
  
  const Footer = () => {
    return (
      <Box as="footer" bg="#0a192f" color="white" py={6} mt={10}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          px={8}
        >
          {/* Contact Information Section */}
          <Stack spacing={4} align={{ base: "center", md: "flex-start" }} mb={4}>
            <Text fontSize="lg" fontWeight="semibold">
              Contact Me
            </Text>
            <Text>
              Email:{" "}
              <Link
                href="mailto:mayankpatil892@gmail.com"
                _hover={{ textDecoration: "underline", color: "teal.300" }}
              >
                mayankpatil892@gmail.com
              </Link>
            </Text>
            <Text>
              Phone:{" "}
              <Link
                href="tel:+12108409645"
                _hover={{ textDecoration: "underline", color: "teal.300" }}
              >
                +1 (210) 840-9645
              </Link>
            </Text>
          </Stack>
  
          {/* Social Media Links */}
          <Stack direction="row" spacing={6} justify="center">
            <Link
              href="https://www.linkedin.com/in/mayankp11/"
              isExternal
              _hover={{ color: "teal.300" }}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              href="https://github.com/Mayankp11"
              isExternal
              _hover={{ color: "teal.300" }}
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </Link>
          </Stack>
        </Flex>
  
        {/* Footer Bottom Section */}
        <Box textAlign="center" mt={4}>
          <Text fontSize="sm">
            &copy; {new Date().getFullYear()} Mayank Patil. All rights reserved.
          </Text>
        </Box>
      </Box>
    );
  };
  
  export default Footer;
  