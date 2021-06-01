import React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import NotFound from '../utils/not_found/NotFound'

function LoadMore() {
    const state = useContext(GlobalState)
    const [page, setPage] = state.productsAPI.page
    const [result] = state.productsAPI.result

    return (
        <div className="load_more">
            {
                result < page * 9 ? <NotFound />
                    : <button onClick={() => setPage(page + 1)}>Load more</button>
            }
        </div>
    )
}

export default LoadMore
