// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import  Navbar  from './navbar.js';
import Welcome from './welcome.js';
import Founder from './founder.js';
import Types from './types.js';
import ScrollSnapContainer from './ScrollSnapContainer.js';

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider>

        <Navbar />

        <Welcome />

        <Founder />

        <Types />

        <ScrollSnapContainer />



      </ChakraProvider>
    </CacheProvider>
  )
}