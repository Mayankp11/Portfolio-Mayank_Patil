import {
    Box,
    Flex,
    HStack,
    Image,
    Text,
    Tooltip,
  } from "@chakra-ui/react";
  import Java from "../images/Certificates/JavaLogo.png";
  import Spring from "../images/Certificates/SpringLogo.png";
  import TypeScript from "../images/Certificates/TypeScriptLogo.png";
  import JavaScript from "../images/Certificates/JavaScriptLogo.png";
  import React from "../images/Certificates/ReactLogo.png";
  import MySql from "../images/Certificates/MySqlLogo.png";
  import MongoDb from "../images/Certificates/MongoDbLogo.png";
  import DSA from "../images/Certificates/LeetCode_.png";
  import Python from "../images/Certificates/Python.png";
  import AWS from "../images/Certificates/AWS-Certified-Cloud-Practitioner_badge.png";
  
  const TechStack = () => {
    const certifications = [
      { name: "JAVA", img: Java },
      { name: "Spring Framework", img: Spring },
      { name: "TypeScript", img: TypeScript },
      { name: "JavaScript", img: JavaScript },
      { name: "React", img: React },
      { name: "Python", img: Python },
      { name: "MySQL", img: MySql },
      { name: "MongoDB", img: MongoDb },
      { name: "Data Structures and Algorithms", img: DSA },
    ];
  
    return (
      <>
        {/* <Heading fontSize="3xl" fontFamily="serif" textAlign="center" mb={4}>
          My Certifications
        </Heading> */}
  
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={6} // Add space between each item
          flexWrap="wrap" // Ensure wrapping on smaller screens
          width="100%"
          p={4} // Add padding for spacing
        >
          {certifications.map((certification, index) => (
            <Tooltip label={certification.name} key={index} fontSize="sm">
              <Box
                key={index}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                width="100px"
                height="100px"
                borderRadius="full"
                border="2px solid #ddd"
                boxShadow="lg"
                overflow="hidden"
              >
                {certification.img ? (
                  <Image
                    src={certification.img}
                    alt={certification.name}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                    _hover={{
                      transform: "scale(1.2)",
                      transition: "transform 0.4s ease",
                    }}
                  />
                ) : (
                  <Box
                    width="100%"
                    height="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bg="gray.200"
                    borderRadius="full"
                  >
                    {certification.name}
                  </Box>
                )}
              </Box>
            </Tooltip>
          ))}
        </Box>
        <Flex
          direction="column"
          p={5}
          maxWidth="1800px"
          mx="auto"
          gap={5}
          alignItems={"center"}
        >
          <Text fontSize="sm" textAlign="center" color="gray.500" fontFamily={"monospace"}>
            Also checkout my Google Cloud Profile and AWS Certification, click to
            view.
          </Text>
          <HStack spacing={4}>
            <Text>Google Cloud Skills Profile</Text>
            <a
              href="https://www.cloudskillsboost.google/public_profiles/0160bc58-f662-4c67-95e0-addafda6fd7d"
              tabIndex={0}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100px"
                height="100px"
                borderRadius="full"
                border="2px solid #ddd"
                boxShadow="lg"
                overflow="hidden"
                _hover={{
                  transform: "scale(1.2)",
                  transition: "transform 0.4s ease",
                }}
              >
                <Image
                  src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
                  alt="Google Cloud"
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              </Box>
            </a>
            {/* </HStack> */}
  
            {/* <HStack spacing={4}> */}
            <Text>AWS Cloud Practitioner Certificate</Text>
            <a
              href="https://www.credly.com/badges/ccc13ff8-eda5-4ed6-9f84-834e535f4009/linked_in_profile"
              tabIndex={0}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100px"
                height="100px"
                borderRadius="full"
                border="2px solid #ddd"
                boxShadow="lg"
                overflow="hidden"
                _hover={{
                  transform: "scale(1.2)",
                  transition: "transform 0.4s ease",
                }}
              >
                <Image
                  src={AWS}
                  alt="AWS Cloud Practitioner Certificate"
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              </Box>
            </a>
          </HStack>
        </Flex>
      </>
    );
  };
  
  export default TechStack;
  