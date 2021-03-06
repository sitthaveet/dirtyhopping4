import { Link as ChakraLink, Text, Code, List, ListIcon, ListItem } from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'
import { Button, Select } from '@chakra-ui/react'
import Map from '../components/Map'
import { getCafe } from '../components/map'
import useCafe from '../hooks/use-cafe'

const Index = () => {
  const { data } = useCafe()
  console.log(data, 'data')

  const districts = data?.map((cafe) => cafe.fields.District)
  const uniqueDistricts = new Set(districts)

  return (
    <Container>
      <Hero title="DirtyHopping" />
      <Main>
        <text>Randomize your next dirty</text>

        <Select placeholder="Select district">
          {[...uniqueDistricts].map((district) => {
            return <option value={district}>{district}</option>
          })}
        </Select>

        <div id="map"></div>

        <Button color="white" bg="#66462F" variant="solid">
          Find Dirty
        </Button>

        <Map />
      </Main>

      <DarkModeSwitch />
      <Footer>
        <Text>An undirty project by Son</Text>
      </Footer>
    </Container>
  )
}

export default Index
