import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="ResumeME">
    <Container>
      <Title>
        ResumeME <Badge>2021</Badge>
      </Title>
      <P>
        The easiest way to share files across all of your devices. Send files of any size and type, as many times as you want, all for free!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>MongoDB, React, JavaScript, NodeJS, Express</span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="http://resumeme.hashigma.com/">
            ResumeME- File Sharing Application <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/cybertronayush/ResumeME-CloudSEK">
            Github Source Code
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Features</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="#">
            <Badge mr={2}>1</Badge>
            Upload any file/Resume.
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="#">
            <Badge mr={2}>2</Badge>
            <span>   Generate personalized links to share with a single person with multiple.</span>
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>


        <ListItem>
          <Link href="#">
            <Badge mr={2}>3</Badge>
            Automatic Send EMAIL to a person with File
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <WorkImage
        src="/images/works/resume.png"
        alt="walknote"
      />

    </Container>
  </Layout>
)

export default Work
