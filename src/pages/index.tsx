import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Container } from '@mui/material';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Awesome Trainer Webapp</title>
        <meta name="description" content="Awesome Trainer Webapp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxWidth="lg">
          <h1>hello home page</h1>
        </Container>
      </main>
    </>
  )
}
