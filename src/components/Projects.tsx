import {
    Box,
    Heading,
    Text,
    Image,
    Grid,
    Link,
    Flex,
    Tag,
    Button,
    HStack,
    
   
    
  } from "@chakra-ui/react";
  import { FaJava, FaDocker,FaGithub, FaReact, FaDatabase } from 'react-icons/fa';
  import LibraryManagementSystemImage from "../images/Projects/LibraryManagement2.png";
  import UserManagementImage from "../images/Projects/UserManagement.png";
  import TranslateMate from "../images/Projects/TranslateMate.png";
  import GameHub from "../images/Projects/GameHub-home.png";
  import SparkCluster from "../images/Projects/ApacheSparkCluster.png";
  import ServerlessApp from "../images/Projects/ServerlessFirebase.png";
  import SoccerBigQuery from "../images/Projects/BigQuerySoccerDataIngestion.png"
  import { SiApachespark, SiApachetomcat, SiChakraui, SiFirebase, SiGooglecloud, SiKubernetes, SiPostman, SiServerless, SiSpring, SiSpringboot, SiTypescript } from "react-icons/si";
  import { TbFileTypeCss, TbSql } from "react-icons/tb";
  import { FaAws } from "react-icons/fa6";
  
  const Projects = () => {
    const projects = [
      {
        title: "Library Management System - REST APIs",
        description:
          "Implemented a full-stack Library Management System for managing books, users, and borrowing operations, with user authentication and role-based access control. Implemented functionality for tracking user borrow history, ensuring transparency and accountability. Created an audit trail for borrowing actions and reduced bugs through SonarLint analysis",
        imageUrl: LibraryManagementSystemImage,
        repoUrl: "https://github.com/Mayankp11/SpringBoot-Library-Management",
        technologies: ["Java","Maven","Tomcat","Spring Boot", "Spring JPA","Spring Security","SonarLint","Postman","Mockito","MySQL"],
        icons: [<FaJava />,<SiSpringboot />, <TbSql />,<SiApachetomcat />],
      },
  
      {
        title: "Spring-REST-User Management",
        description: "Designed user management CRUD APIs with Spring Boot, using Spring Security and JWT for authentication. Integrated Hibernate ORM and MySQL for data management, and implemented email verification and password reset with AWS SES. Ensured API functionality with JUnit 5 and Mockito ",
        imageUrl: UserManagementImage,
        repoUrl: "https://github.com/Mayankp11/SpringBoot-mobile-app-ws",
        technologies: ["Java","Maven","AWS SES","Spring Boot", "Spring Security", "JWT", "Hibernate ORM", "MySQL","Swagger","JUnit 5","Mockito"],
        icons: [<FaJava />, <SiSpring/>, <FaAws />,<TbSql />,<SiPostman/>],
      },
      {
        title: "TranslateMate",
        description: "Built a React application leveraging the Google Cloud Translation API to enable users to translate text between multiple languages, providing real-time translations and example sentences to enhance language comprehension. The application also features integrated flashcards in various languages, assisting users in memorizing new vocabulary and phrases, making it an essential tool for language learning.",
        imageUrl: TranslateMate,
        repoUrl: "https://github.com/Mayankp11/language-translator",
        technologies: ["React","TypeScript","Google Cloud Translation API","ChakraUI","Axios","Material-UI","React-Router","React-Query","React-Flip-Move","React-Icons"],
        icons: [<FaReact/>, <SiTypescript/>,<TbFileTypeCss/>],   
      },
      {
        title: "GameHub",
        description: "Developed a video game discovery platform using React and the RAWG Video Games API to showcase a diverse collection of games. The platform features search functionality, filters for genre, platform, and popularity, and displays game ratings with visual indicators. A dark/light mode toggle enhances the user experience, making game discovery seamless and engaging.",
        imageUrl: GameHub,
        repoUrl: "https://github.com/Mayankp11/react-gameHub",
        technologies: ["React","TypeScript","ChakraUI","Axios","React-Hook","React-Query","React-Icons","RAWG Video Games API"],
        icons: [<FaReact/>, <SiTypescript/>,<SiChakraui/>],
      },
      {
        title: "Deploying Apache Spark on Kubernetes with Docker Containers",
        description: "This project demonstrates the setup and deployment of an Apache Spark cluster on a Kubernetes platform using Docker containers. It includes the creation of a Spark Master and multiple Spark Workers, managed within a Kubernetes namespace, to enable scalable and distributed data processing. The cluster is equipped with a Spark Web UI for monitoring tasks, logs, and worker activity. With Kubernetes' orchestration capabilities and Docker's portability, this setup provides a robust, scalable, and reproducible environment for running big data processing jobs efficiently.",
        imageUrl: SparkCluster,
        repoUrl: "https://github.com/Mayankp11/Apache-Spark-cluster",
        technologies: ["Apache Spark","Kubernetes","Docker","YAML","Spark Web UI","Cluster Management","Kubernetes Namespace"],
        icons: [<FaDocker/>,<SiKubernetes/>,<SiApachespark/>],
       },
      {
        title: "BigQuery Soccer Data Ingestion",
        description: "BigQuery is a fully-managed, serverless data warehouse designed for fast SQL queries on large datasets. This project helps users ingest soccer data into BigQuery, covering dataset creation, loading data from JSON and CSV files, and querying player and event data. Users also gain hands-on experience applying SQL for data analysis. Additionally, Locker Studio is used to visualize the ingested data, providing valuable insights through interactive charts and graphs to enhance decision-making and collaboration.",
        imageUrl: SoccerBigQuery,
        repoUrl: "https://github.com/Mayankp11/GoogleCloudBigQuery",
        technologies: ["Google Cloud","BigQuery","SQL","JSON","CSV","Locker Studio","Data Visualization","Data Analysis"],
        icons: [<SiGooglecloud/>,<FaDatabase/>,<TbSql/>],
      },
      {
        title: "Build a Serverless Web App with Firebase",
        description: "Built a serverless web app using Firebase, which involved setting up Firebase hosting and configuring Google sign-in authentication. Created a Firestore database to store user data and applied Firestore security rules. The app supports real-time scheduling features and was deployed on Firebase, integrating key services like authentication, hosting, and Firestore for seamless user interaction and data management.",
        imageUrl: ServerlessApp,
        repoUrl: "https://github.com/Mayankp11?tab=repositories",
        technologies: ["Serrless","Firebase","Firestore","Authentication","Hosting","Real-time Scheduling","Security Rules"],
        icons: [<SiFirebase/>,<SiServerless/>,<SiGooglecloud/>],
      }
    ];
  
    return (
      <Flex direction="column" p={5} maxWidth="1800px" mx="auto" gap={5} alignItems={"center"}>
        <Heading mb={5} fontSize="3xl"  fontFamily="serif">
          Projects
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
          {projects.map((project, index) => (
            <Box
          key={index}
          p={5}
          shadow="lg"
          borderWidth="1px"
          borderRadius="12px"
          bg="gray.200"
            >
          <Box mb={6} border="1px solid #ddd" borderRadius="12px" overflow="hidden">
            <Image
              src={project.imageUrl}
              alt={project.title}
              objectFit="cover"
              width="100%"
              height="350px"
              _hover={{
            transform: "scale(1.1)",
            transition: "transform 0.3s ease",
              }}
            />
          </Box>
          <Heading fontSize="xl" fontFamily="serif" color="gray.800">
            {project.title}
          </Heading>
          <Text mt={4} color="blackAlpha.800" fontSize="md">
            {project.description}
          </Text>
          <Flex mt={4} wrap="wrap" gap={2}>
            {project.technologies.map((tech, idx) => (
              <Tag
            key={idx}
            size="sm"
            colorScheme="teal"
            borderRadius="full"
            variant="solid"
            px={3}
            py={1}
            fontWeight="semibold"
            fontSize="sm"
              >
            {tech}
              </Tag>
            ))}
          </Flex>
  
          {/* Display Project Icons */}
          <HStack mt={4} spacing={3}>
            {project.icons.map((icon, idx) => (
              <Box key={idx} fontSize="4xl" color={"green.800"}>{icon}</Box>
            ))}
          </HStack>
  
          <Flex justify="flex-end" mt={4} gap={4}>
            <Link
              href={project.repoUrl}
              isExternal
              _hover={{
            transform: "scale(1.2)",
            transition: "transform 0.4s ease",
              }}
            >
              <FaGithub size="50px" color="black"/> 
            </Link>
          </Flex>
            </Box>
          ))}
        </Grid>
  
        {/* Display All Project  */}
        <Box alignItems={"center"} mt={5} textAlign={"center"}>
          <Text textDecoration={"underline"} mt={5} fontSize="xl" color="gray.500" fontFamily="monospace">
          Continuously working on creating innovative projects. Feel free to reach out if you're interested in collaborating.
          </Text>
          <Button
            as="a"
            href="https://github.com/Mayankp11?tab=repositories"
            target="_blank"
            colorScheme="teal"
            size="sm"
            mt={2}
            variant="outline"
            _hover={{
              transform: "scale(1.1)",
              transition: "transform 0.3s ease",
            }}
          >
            View more on GitHub
          </Button>
        </Box>
      </Flex>
    );
  };
  
  export default Projects;
  