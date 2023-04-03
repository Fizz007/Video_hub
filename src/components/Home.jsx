import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Container, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const headingOptions = {
  pos:"absolute",
  left:"50%",
  top:"50%",
  transform:'translate(-50%,-50%)',
  textTransform:'uppercase',
  p:'4',
  size:'4xl'
}

const Home = () => {
  return (
    <Box>
    <Carousel
  autoPlay
  infiniteLoop
  interval={2000}
  showStatus={false}
  showThumbs={false}
  showArrows={true}
>
  <Box w="full" h={'100vh'}>
    <Image src={img1} />
    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
      Watch The Future
    </Heading>
  </Box>
  <Box w="full" h={'100vh'}>
    <Image src={img2} />
    <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
      Future is Gaming
    </Heading>
  </Box>
  <Box w="full" h={'100vh'}>
    <Image src={img3} />
    <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
      Gaming as Console
    </Heading>
  </Box>
  <Box w="full" h={'100vh'}>
    <Image src={img4} />
    <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
      Party At Night
    </Heading>

  </Box>


</Carousel>

    <Container maxW={'container.xl'} minH={'100vh'} p="16">
      <Heading
        textTransform={'uppercase'}
        py="2"
        w={'fit-content'}
        borderBottom={'2px solid'}
        m="auto"
      >
        Services
      </Heading>

      <Stack
        h="full"
        p={'4'}
        alignItems={'center'}
        direction={['column', 'row']}
      >
        <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

        <Text
          letterSpacing={'widest'}
          lineHeight={'190%'}
          p={['4', '16']}
          textAlign={'center'}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo
          tempora deleniti quod, est eos veniam autem asperiores rem, nam
          laudantium ut, similique ducimus amet sequi et voluptas iusto rerum
          at aliquid numquam corporis ipsa reprehenderit? Porro iusto magnam,
          sit vero deleniti, non nemo rem accusamus neque, quibusdam ab.
          Libero, reprehenderit recusandae labore eaque, aspernatur aliquid
          modi soluta ullam voluptatum unde repellat in molestias quod?
          Doloribus ratione illum quisquam earum consequuntur nam voluptatem,
          velit culpa maiores. Inventore esse illum excepturi dolores est
          natus aliquid maiores sunt omnis deserunt accusantium amet enim eos
          adipisci minima hic, nam provident quo aperiam quasi vel?
          Dignissimos accusantium aliquid aut vel explicabo voluptatum
          molestias fugit harum reprehenderit incidunt. Quis cumque explicabo
          omnis officiis autem dolorum!
        </Text>
      </Stack>
    </Container>


    
  </Box>
  );
};


export default Home;
