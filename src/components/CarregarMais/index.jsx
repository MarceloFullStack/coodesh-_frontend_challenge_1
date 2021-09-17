import React, { useState } from 'react'

export default function LoadMore({number}) {
    const [loadMore, setLoadMore] = useState(number)
    const [load, setLoad] = useState(false)
  
    function handleLoadMore() {
      setTimeout(() => {
        setLoad(false)
        setLoadMore(loadMore + 5)
      }, 1500);
      setLoad(true)
    }
    return (
        <>
            <button onClick={() => handleLoadMore()}>{load ? 'Carregando...': 'Carregar mais'}</button>
        </>
    )
}
