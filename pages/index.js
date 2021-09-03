import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Frontt.io Clone</title>
        <meta name="description" content="a minimal clone of frontt.io" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="text-indigo-500 text-2xl">
        Header
      </header>

      <main>
        Main
      </main>

      <footer>
        Footer
      </footer>
    </div>
  )
}
