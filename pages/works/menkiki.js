import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="TripWhiz">
    <Container>
      <Title>
        TripWhiz <Badge>android</Badge>
      </Title>
      <P>
        <p> <strong>About </strong></p>
        TripWhiz apps is not only not a source of inspiration but also extremely
        useful for Planning Trip, booking and managing luggage—even making restaurant
        reservations or Suggestion for best Places to visit We want to create this app to make it convenient the next time someone decides to plan a tour.
      </P>
      <P>
        • Planning a trip and don’t know where to start? Want to plan the perfect trip,
        but don’t have time to research destinations, much less figure out all the details?

        <p>
          • Imagine checking one place for all your travel details and getting a heads up as things happen throughout your trip.
          This project will do exactly that will take all our headache and pain while planning a trip in just a few Beautiful clicks.
        </p>

      </P>
      <UnorderedList my={4}>
        <ListItem>Tell your Travel preferences.</ListItem>
        <ListItem>Set Your Budget, And some other necessary details.</ListItem>
        <ListItem>Get Everything Sorted from Hotel to travel.</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Kotlin, XML, MVVM, Firebase </span>
        </ListItem>

        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/cybertronayush/TripWhiz">
            github.com/cybertronayush/TripWhiz <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Box align="center" my={6}>
        <Link
          className="link-appstore"
          href=""
          target="_blank"
        >
          <Image
            maxW={240}
            src="/images/works/appstore.png"
            className="image-appstore"
            alt="Download on App Store"
          />
        </Link>
      </Box>

      <WorkImage src="/images/works/menkiki_01.jpg" alt="tripwhiz" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/plan.jpg" alt="tripwhiz" />
        <WorkImage src="/images/works/places.jpg" alt="tripwhiz" />
        <WorkImage src="/images/works/menkiki_01.png" alt="tripwhiz" />
        <WorkImage src="/images/works/tripwhiz_login.png" alt="tripwhiz" />

      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
