import React, { useState, useEffect } from 'react'
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from '../components/Table/table'  // new
import { handlerData } from '../service_data'
import Modal from '../components/modal'
import { useRouter } from 'next/router'
import { TIPO_PAGINACAO } from '../config/GlobalVaiables.js'

function App(res) {
  const [result, setResult] = useState([])
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { uuid } = router.query;
  const response = handlerData(res.data.results, uuid)
  const [loadMore, setLoadMore] = useState(5)
  const [load, setLoad] = useState(false)
  const [showLoad, setShowLoad] = useState(true)

  function handleLoadMore() {
    setTimeout(() => {
      setLoad(false)
      setLoadMore(loadMore >= response.length ? response.length : loadMore + 5)
    }, 1000);
    setLoad(true)
    if (loadMore >= response.length) {
      setShowLoad(false)
    }
  }
  
  useEffect(() => {
    if (uuid) {
      setResult(response[0])
      setOpen(true)
    } else {

    }

    return () => {
      // Limpa a assinatura antes do componente deixar a tela
      setResult([])
    };
  }, [uuid]);

  const handleClick = async (e) => {
    setOpen(true)
    setResult(e)

  }
  const columns = React.useMemo(() => [
    {
      Header: "Nome",
      accessor: 'nome',
      Cell: AvatarCell,
      imgAccessor: "imgUrl",
      emailAccessor: "email",
    },
    // {
    //   Header: "Nome",
    //   accessor: 'nome',
    // },
    {
      Header: "Gênero",
      accessor: 'genero',
    },
    // {
    //   Header: "Status",
    //   accessor: 'status',
    //   Cell: StatusPill,
    // },
    {
      Header: "Idade",
      accessor: 'idade',
    },
    {
      Header: "Estado",
      accessor: 'estado',
      Filter: SelectColumnFilter,  // new
      filter: 'includes',
    },
    {
      Header: 'Ações',
      accessor: 'id',
      Cell: ({ row: { original } }) => (
        <div className={"text-start"}>
          <button className={"bg-green-800 text-white py-1 px-2 text-xs rounded-xl"} onClick={() => handleClick(original)}>Visualizar</button>
          {/* <button onClick={() => handleDelete(row.original)}>Delete</button> */}
        </div>
      )
    }
  ], [])


  var data = React.useMemo(() => response, [])


  return (
    <main className="max-w-7xl min-h-full mx-auto px-4 sm:px-6 lg:px-8 p-6">
      <div className="">
        <Table columns={columns} data={data} CustomPageSize={loadMore} />
        <Modal open={open} setOpen={setOpen} imgUrl={result.imgUrl} data={result} />
      </div>
      {
        TIPO_PAGINACAO === 2 ? (
          <div className={'text-center'}>
        {
          showLoad ? (
            <button className='text-gray-600 mt-4 animate-pulse' onClick={() => handleLoadMore()}>{load ? 'Carregando...' : 'Carregar mais'}</button>
          ) : <p className='text-gray-600 mt-4'>Fim da lista</p>
        }
      </div>
        ): null
      }
    </main>

  );
}
// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.DATA_LINK}`)
  const data = await res.json()
  // Pass data to the page via props
  return { props: { data } }
}
export default App;