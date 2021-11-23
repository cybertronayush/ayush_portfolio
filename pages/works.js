import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_01.png'
import thumbWalknote from '../public/images/works//walknote_02.png'
import thumbFourPainters from '../public/images/works/resume.png'
import thumbMenkiki from '../public/images/works/modetokyo_eyecatch.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="BUCKITO" thumbnail={thumbInkdrop}>
            Find Incredible Movies to Watch,10000+ Realtime Realtime Recommendations make Your personalized bucket-list
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="Khareed-LO"
            thumbnail={thumbWalknote}
          >
            A Full-Fledged E-COMMERCE WEBSITE
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="ResumeME"
            thumbnail={thumbFourPainters}
          >
            The easiest way to share files across all of your devices. Send files of any size and type, as many times as you want, all for free!
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="TripWhiz">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </WorkGridItem>
        </Section>
      </SimpleGrid>






    </Container>
  </Layout>
)

export default Works
