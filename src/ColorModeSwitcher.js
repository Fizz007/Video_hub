import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
     pos={"fixed"}
     top={'3'}
     right={'3'}
      variant="ghost"
      zIndex={"overlay"}
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
