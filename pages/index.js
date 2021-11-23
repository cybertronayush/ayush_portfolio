import NextLink from 'next/link'
import {
  Link,
  Badge,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  AiFillLinkedin
} from 'react-icons/io5'


const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Namaste🙏, I&apos;m a Full-Stack Developer based in India!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h3" variant="page-title">
            Ayush Singh Chauhan
          </Heading>
          <p>Digital Craftsman ( Full-Stack Developer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/ayush.png"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          <p>
            Ayush is a Software Engineer / Full-stack developer at SquareBoat
            based in India with a passion for building digital services/stuff he wants.
            He has a knack for all things launching products, from planning and designing
            all the way to solving real-life problems with code. When not online, he loves
            hanging out with his phone camera.
          </p>

        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio / Experience
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Mau (भारत), India.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          pursuing the Bachelor&apos;s Program in the Graduate School of
          Computer Science at GLA University of Mathura.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Ex Android Developer Intern At Krishi Network.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Working at SquareBoat ! India
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h6" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          {' '}
          <Link href="https://open.spotify.com/user/cybertronpop" target="_blank">
            Music
          </Link>
          , Cricket ,{' '}
          <Link href="https://unsplash.com/@cybertronayush" target="_blank">
            Photography ,
          </Link>
          Coding, Reading
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/cybertronayush" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @cybertronayush
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/ayush-singh-chauhan-11baa91b3/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={AiFillLinkedin} />}
              >
                @linkedin
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://drive.google.com/file/d/14f2XjWqI4ZMDGAmUDqlDPTe182uSD--g/view?usp=sharing" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @Resume
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/cybertronayush" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @cybertronayush
              </Button>
            </Link>
          </ListItem>
          <ListItem>

          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular Work
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
