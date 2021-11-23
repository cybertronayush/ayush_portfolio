import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Khareed-LO">
    <Container>
      <Title>
        Khareed-LO <Badge>2021</Badge>
      </Title>
      <span ><strong>About</strong> </span><br></br>

      <span>Khareed-Lo is an Ecommerce Website, where user can buy View and Buy Products.</span>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="http://khareed-lo.hashigma.com/">
            Khareed-LO{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/cybertronayush/SquareBoat-Hiring">
            Khareed-LO Github{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, MongoDB, Express, NodeJS</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Product Features</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>

          <p mx="2px">Signup / Login using Jason Web Token</p> </ListItem>
        <ListItem> <p mx="2px">View product catalog,</p> </ListItem>
        <ListItem><p mx="2px">Including product title photo and description</p> </ListItem>
        <ListItem><p mx="2px">Order a Product</p> </ListItem>
        <ListItem><p mx="2px">View Related Product</p> </ListItem>
        <ListItem><p mx="2px">View history of product View order confirmation with Order ID.</p>
        </ListItem>






      </UnorderedList>

      <SimpleGrid columns={1} gap={2}>
        <WorkImage src="/images/works/walknote_01.png" alt="walknote" />
      </SimpleGrid>
      <SimpleGrid columns={1} gap={2}>
        <WorkImage src="/images/works/walknote_02.png" alt="walknote" />
      </SimpleGrid>
      <WorkImage src="/images/works/walknote_03.png" alt="walknote" />
      <WorkImage src="/images/works/walknote_04.png" alt="walknote" />

    </Container>
  </Layout>
)

export default Work
