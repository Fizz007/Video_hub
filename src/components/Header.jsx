import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
  Stack,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Button
        pos={'fixed'}
        top={'3'}
        left={'3'}
        colorScheme={'purple'}
        p={'0'}
        h={'10'}
        w={'10'}
        zIndex={"overlay"}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Video Hub</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
                <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                    <Link to={'/'}>Home
                    </Link>
                </Button>
                <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                    <Link to={'/videos'}>Videos
                    </Link>
                </Button>
                <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                    <Link to={'/videos?category=free'}>Free Videos
                    </Link>
                </Button>
                <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                    <Link to={'/upload'}>Upload Video
                    </Link>
                </Button>
               
            </VStack>

            <HStack pos={'absolute'} bottom={'10'} left={'0'} w={'full'} justifyContent={'space-evenly'}>
            <Button onClick={onClose} colorScheme={'purple'}>
                    <Link to={'/login'}>Log In
                    </Link>
                </Button>
            <Button onClick={onClose} variant={'outline'} colorScheme={'purple'}>
                    <Link to={'/signup'}>Sign Up
                    </Link>
                </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Header;
