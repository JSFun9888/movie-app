import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Results from '../components/Results'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Movie ratings</title>
        <meta name="Movie ratings" content="Movie ratings web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Header */}
      <Header/>

      {/* Navbar */}
      <Navbar/>

      {/* Results */}
      <Results/>

    </div>
  )
}
