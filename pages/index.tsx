import { Box, Center, Code, Container, Flex, useToast } from '@chakra-ui/react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const toast = useToast();

  toast({
      title: 'Login Info:',
      description: "Database User: www | Password: pass",
      status: 'success',
      duration: null,
      isClosable: true,
      position: 'bottom-right'
  });

    // const initialFocusRef = React.useRef()
    
    return (
        <Center>
          <Head>
              <title>Ad-Mapper</title>
              <meta name="description" content="" />
              <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>
            <Center>
              <Box w='100vw' h='100vh' bg='black'>
                <embed src="https://workspace-preview.neo4j.io/?connectURL=neo4j%2Bs%3A%2F%2Fwww%40ef39c519.databases.neo4j.io%3A7687&dbname=Instance01" width='100%' height='100%' />
              </Box>
            </Center>
          </main>
        </Center>
    )
}
