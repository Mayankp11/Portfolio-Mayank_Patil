import {
    Flex,
    Box,
    Text,
    Heading,
    List,
    ListItem,
    Button,
    ListIcon,
  } from "@chakra-ui/react";
  
  import { useState } from "react";
  import { IoMdArrowDropright } from "react-icons/io";
  import { PiDotOutlineThin } from "react-icons/pi";
  
  
  const WorkExperience = () => {
    const companies = [
      {
        name: "United Business Solution",
        title: "Full Stack Developer(Contract Position)",
        date: "Dec 2023 – Present",
        location: "Monmouth Junction, NJ",
        details: [
          "Optimized REST API performance through efficient data serialization, pagination, and caching strategies, achieving a 25% reduction in response times and latency as measured by performance benchmarks and monitoring tools",
          "Configured and enforced stricter control for admin panels using Spring Security roles, ensuring only users with permission can view or manage sensitive data ",
          "Developed and maintained code for 15+ third-party integration applications, enhancing functionality for reliable performance",
          "Refactored code and implemented design patterns, improving maintainability and boosting efficiency by 30% based on performance metrics",
          " Gained proficiency in Agile methodologies and SDLC processes, including logical design workflows such as identifying business objects and services, defining interfaces, and validating dependencies ",
        ],
      },
      {
        name: "University of Texas at San Antonio",
        title: "Graduate Teaching Assistant",
        date: "Aug 2022 – Dec 2023",
        location: "San Antonio, TX",
        details: [
          " Responsible for grading and supervising exams for 200+ students, ensuring timely results, and managing student databases for improved organization",
          "Curated daily articles to offer up-to-date, diverse perspectives on topics, enhancing student engagement and understanding ",
          "Facilitated in-person sessions for code reviews and resolving student queries, receiving excellent feedback for support and guidance ",
        ],
      },
      {
        name: "John Peace Library, UTSA",
        title: "Student Assistant",
        date: "Feb 2022 – Jul 2022",
        location: "San Antonio, TX",
        details: [
          " Developed a database to manage the book inventory for the library, improving efficiency by 25% in tracking and organizing resources ",
          "Managed user authentication for 500+ patrons, ensuring secure and reliable access to library resources, reducing access issues ",
        ],
      },
      {
        name: "Mojoes Technologies",
        title: "Junior Java Developer",
        date: "Aug 2020 – Nov 2021",
        location: "Nashik, MH",
        details: [
          " Played a key role in developing a J2EE enterprise application for a local startup, leading to significant operational enhancements and user experience ",
          "Implemented scalable RESTful endpoints for seamless CRUD operations, optimizing data processing efficiency by 30% and significantly improving response times by 40%",
          "Created secure registration and login pages with user authentication using JWT, ensuring proper validation and access control",
          "Spearheaded unit and integration testing with JUnit and Mockito, leveraging mock objects and JWT validation, reducing errors by 20% post-deployment",
          "Designed reusable React components and managed event handling for seamless user interactions across the enterprise application",
        ],
      },
      {
        name: "TechBona Infomatics Pvt. Ltd.",
        title: "Software Engineer Intern",
        date: "May - July 2020",
        location: "Nashik, MH",
        details: [
          "Collaborated on the development of REST APIs for a coursework management project, which were successfully deployed to production",
          "Monitored chatbot performance, analyzed user responses, and enhanced functionality to ensure seamless interactions and improve user satisfaction",
          "Optimized SQL queries for reporting and analytics, reducing query execution time and enabling more efficient data retrieval for business users",
        ],
      },
    ];
    const [selectedCompany, setSelectedCompany] = useState(companies[0]);
  
    return (
      <>
        <Heading fontSize="3xl" fontFamily="serif" textAlign={"center"}>
          WORK EXPERIENCE
        </Heading>
        <br />
        <Heading
          textDecoration="underline"
          fontSize="lg"
          fontFamily="mono"
          textAlign="center"
          mt={2}
        >
          An experienced professional software developer with expertise in
          designing and developing secure, scalable, and efficient enterprise
          applications. I have utilized modern <br />
          <Text as="span">
            technologies and frameworks to deliver high-quality solutions that
            meet business needs.
          </Text>{" "}
          Take a look at the companies I have worked for.
        </Heading>
        <Flex
          direction="row"
          alignItems="flex-start"
          mt={6}
          p={4}
          maxWidth={"2000px"}
          mx={"auto"}
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          <Box w={["100%", "30%"]}borderRadius={8} p={2} mr={1}>
            <Heading as="h3" size="md" mb={4} color={"teal"}>
              Roles and Responsibilities
            </Heading>
            <List spacing={3}>
              {companies.map((company, index) => (
                <ListItem key={index}>
                  <ListIcon as={PiDotOutlineThin} color="teal.500" />
                  <Button
                    variant="link"
                    onClick={() =>
                      setSelectedCompany({
                        ...company,
                      })
                    }
                  >
                    {company.title} | {company.name}
                  </Button>
                </ListItem>
              ))}
            </List>
          </Box>
  
          <Box
            w={["100%", "70%"]}
            maxWidth={"1100px"}
            borderRadius={8}
            p={4}
            bg="gray.50"
            ml={4}
          >
            <Heading size="lg" mb={4} color={"teal.600"} fontFamily={"Bold"}>
              {selectedCompany.title} | {selectedCompany.name}
            </Heading>
            <Text mt={2} color={"gray.500"}>
              {selectedCompany.date} | {selectedCompany.location}
            </Text>
            {selectedCompany.details.map((detail, index) => (
              <Text
                key={index}
                mt={1}
                color={"blackAlpha.800"}
                display="flex"
                alignItems="center"
              >
                <IoMdArrowDropright style={{ marginRight: "8px" }} />
                {detail}
              </Text>
            ))}
          </Box>
        </Flex>
      </>
    );
  };
  
  export default WorkExperience;
  