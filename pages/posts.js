import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbFishWorkflow from '../public/images/contents/gmail.png'
import thumbMyDeskSetup from '../public/images/contents/linkedin.png'
import thumb500PaidUsers from '../public/images/contents/Github.png'
import thumbFinancialGoal from '../public/images/contents/code.png'
import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'
import thumb50xFaster from '../public/images/contents/youtube-50x-faster.jpg'

const Posts = () => (
  <Layout title="Contact ME">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Ways
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="ayush.scaleup@gmail.com"
            thumbnail={thumbFishWorkflow}
            href="https://mail.google.com/mail/u/2/?ogbl#inbox?compose=GTvVlcSMVJNPbRlSPztLwpKhVclBxCHpbBMwbbrncbldjtWhDQCxJpGMKQxFJxXBqSGzRtRJHqjWR"
          />
          <GridItem
            title="Connect Me On LinkedIn"
            thumbnail={thumbMyDeskSetup}
            href="https://www.linkedin.com/in/ayush-singh-chauhan-11baa91b3/"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Github"
            thumbnail={thumb500PaidUsers}
            href="https://github.com/cybertronayush"
          />
          <GridItem
            title="LeetCode"
            thumbnail={thumbFinancialGoal}
            href="https://leetcode.com/cybertronayush/"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>


        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
