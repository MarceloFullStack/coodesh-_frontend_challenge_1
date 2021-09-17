import Head from 'next/head';
import Link from 'next/link'
import Logo from '../public/logo.svg'
export default function Home() {
  
  return (
    <div className="h-screen -mt-24 -mb-24 flex items-center justify-center ">
      <Head>
        <title>Coodesh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col text-center items-center">
        <h1 className="text-6xl font-bold">
          Bem-vindo{' '}
        </h1>
        <div className="my-4">
          <Link  href="http://localhost:3000/pharma">
  

            <a className="text-blue-600 mt-4">Recrutador, Clique para acessar o teste técnico !</a>
   
          </Link>
          </div>
        <div>
          <Logo className="h-5 w-auto"/>
        </div>
        
      </main>
    </div>
  )
}
