import { Container, VStack, Box, Text, Heading, Image, IconButton, Link, HStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaPinterest } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box boxSize="200px">
          <Image borderRadius="full" src="https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMHBlcnNvbnxlbnwwfHx8fDE3MTcxNDE3NjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" />
        </Box>
        <Heading as="h1" size="2xl">
          John Doe
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Full Stack Developer | JavaScript Enthusiast | Open Source Contributor
        </Text>
        <HStack spacing={4}>
          <Link href="https://github.com/johndoe" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
          </Link>
          <Link href="https://linkedin.com/in/johndoe" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          </Link>
          <Link href="https://twitter.com/johndoe" isExternal>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          </Link>
          <Link href="https://facebook.com/johndoe" isExternal>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          </Link>
          <Link href="https://instagram.com/johndoe" isExternal>
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
          </Link>
          <Link href="https://youtube.com/johndoe" isExternal>
            <IconButton aria-label="YouTube" icon={<FaYoutube />} size="lg" />
          </Link>
          <Link href="https://tiktok.com/@johndoe" isExternal>
            <IconButton aria-label="TikTok" icon={<FaTiktok />} size="lg" />
          </Link>
          <Link href="https://pinterest.com/johndoe" isExternal>
            <IconButton aria-label="Pinterest" icon={<FaPinterest />} size="lg" />
          </Link>
        </HStack>
        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            About Me
          </Heading>
          <Text fontSize="md">Hi, I'm John Doe, a passionate Full Stack Developer with over 5 years of experience in building web applications. I love working with JavaScript, React, Node.js, and other modern web technologies. I'm also an active contributor to open source projects and enjoy collaborating with other developers to create amazing software.</Text>
          <Text fontSize="md" mt={4}>
            In my career, I've had the opportunity to work on a variety of projects, ranging from small startups to large enterprise applications. My expertise lies in creating scalable and maintainable code, and I have a strong focus on performance and user experience. I am proficient in both front-end and back-end development, and I enjoy the challenge of solving complex problems.
          </Text>
          <Text fontSize="md" mt={4}>
            Outside of work, I am an avid learner and constantly seek to improve my skills. I regularly attend tech conferences and workshops, and I am always on the lookout for new technologies and trends in the industry. In my free time, I enjoy contributing to open source projects, writing technical blogs, and mentoring junior developers.
          </Text>
          <Text fontSize="md" mt={4}>
            When I'm not coding, you can find me exploring the outdoors, playing guitar, or experimenting with new recipes in the kitchen. I believe in maintaining a healthy work-life balance and strive to bring creativity and passion to everything I do.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
