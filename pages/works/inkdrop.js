import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Buckito">
    <Container>
      <Title>
        BUCKITO <Badge>2021-</Badge>
      </Title>
      <P>
        <p> Find Incredible Movies to Watch, </p>
        <p> 10000+ Realtime Realtime Recommendations</p>
        <p> make Your personalized bucket-list</p>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="http://buckito.hashigma.com/">
            http://buckito.hashigma.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>GraphQL, Python, React, FastAPI, JavaScript</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://github.com/cybertronayush/BUCKITO-RECOMMENDATION-FAST-API">
            Everything About Buckito<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/inkdrop_01.png" alt="Buckito" />
      <WorkImage src="/images/works/inkdrop_02.png" alt="Buckito" />
    </Container>
  </Layout>
)

export default Work
