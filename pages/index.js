import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pilot: Social Trip Planning</title>
        <link rel="" href="/assets/branding/pilot_logo.png" />
      </Head>
      <main>
        <Header />
      </main>
      <footer></footer>
    </div>
  );
}
