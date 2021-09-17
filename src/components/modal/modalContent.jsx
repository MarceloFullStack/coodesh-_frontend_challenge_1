import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
export default function Card({ data, setOpen }) {
    const [uuid, setUuid] = useState(router?.query)
    const [copiado, setCopiado] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const { uuid } = router.query
        setUuid(uuid)
        return () => {
            // Limpa a assinatura antes do componente deixar a tela
            setUuid(null)
        };
    }, []);

    return (
        <>
            <div className=" absolute top-0 right-0 p-4 font-extrabold">
                <button onClick={() => {
                    setOpen(false)
                    if (uuid) {
                        window.location.assign('/pharma')
                    }

                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="hover:h-10 hover:w-10 h-6 w-6 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>



            </div>
            <div className="mx-auto space-x-4 -mt-32">
                <div className=" flex flex-col items-center justify-center mt-10">
                    <div>
                        <a href={`/pharma/?uuid=${data.uuid}`} className="text-xl text-indigo-500 text-center mt-10" >Informações do Usuário</a>
                    </div>
                    {/* TODO botao copiar link, converter em componente */}
                    <button className={`relative box-content  text-sm ${copiado ?' bg-indigo-500': 'bg-green-500'} px-2 py-1 rounded-full font-extrabold text-white`} onClick={() => {
                        navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_BASE_URL}/pharma?uuid=${data.uuid}`)
                        setCopiado(false)
                    }}>

                        {
                            !copiado ? (
                                <span className="absolute -top-2 right-1 h-3 w-3">
                                    <span className="animate-ping absolute -right-1 -top-0 inline-flex h-5 w-5 rounded-full bg-green-400 opacity-75">
                                    </span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                            ) : null
                        }

                        <span className="text-gray-100 hover:text-white uppercase text-sm">{copiado ? "copiar link" : "copiado"}</span>
                    </button>

                </div>
                <div className="bg-white  overflow-hidden sm:rounded-lg">
                    <div className="md:flex md:divide-x px-4 py-5 sm:px-6 space-x-4 items-center justify-center">
                        <div className='p-2'>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Nome Completo</h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500 text-nowarp">{data.nome}</p>
                        </div>
                        <div className='p-2'>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Gênero</h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">{data.genero}</p>
                        </div>
                        <div className='p-2'>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Naturalidade</h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">{data.estado}</p>
                        </div>
                        <div className='p-2'>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Idade</h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">{data.idade}</p>
                        </div>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Código</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{data.uuid}</dd>
                            </div>
                            <div className="bg-white px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Telefone</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{data.telefone}</dd>
                            </div>
                            <div className="bg-gray-50 px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Endereço</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{data.endereco}</dd>
                            </div>
                            <div className="bg-white px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Data de Nascimento</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{data.nascimento}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

        </>
    )
}