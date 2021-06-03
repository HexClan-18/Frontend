import React, { useContext, useState, useEffect } from 'react'
import ProductItem from '../utils/productItem/ProductItem'
import Loading from '../utils/loading/Loading'
import axios from 'axios'
import Filters from './Filters'
import LoadMore from './LoadMore'
import { UserContext } from '../../../context/userContext'
import NotFound from '../utils/not_found/NotFound'

function Products() {
    const state = useContext(UserContext)
    const [categories, setCategories] = useState([])
    const [callback, setCallback] = useState(false)
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState('');
    const [sort, setSort] = useState('');
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1)
    const [result, setResult] = useState(0)

    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }

    const isAdmin = state.loginDetails.role === 1
    const token = state.loginDetails.token
    const [loading, setLoading] = useState(false)

    const handleCheck = (id) => {
        products.forEach(product => {
            if (product._id === id) product.checked = !product.checked
        })
        setProducts([...products])
    }

    //Filter Function
    const getProducts = async () => {
        const res = await axios.get(`/api/products?limit=${page * 9}&${category}&${sort}&title[regex]=${search}`)
        setProducts(res.data.products)
        setResult(res.data.result)
    }

    //Get categories
    const getCategories = async () => {
        const res = await axios.get('/api/category')
        setCategories(res.data)
    }



    useEffect(() => {
        getProducts()
    }, [callback, category, sort, search, page,])

    useEffect(() => {
        console.log(state.loginDetails);
    }, [])

    useEffect(() => {
        getCategories()
    }, [callback])



    const deleteProduct = async (id, public_id) => {
        try {
            setLoading(true)
            const destroyImg = axios.post('/api/destroy', { public_id }, {
                headers: { Authorization: token }
            })
            const deleteProduct = axios.delete(`/api/products/${id}`, {
                headers: { Authorization: token }
            })

            await destroyImg
            await deleteProduct
            setCallback(!callback)
            setLoading(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    if (loading) return <div><Loading /></div>
    return (
        <>
            <div className="filter_menu">
                <div className="row">
                    <span>Filter Here: </span>
                    <select name="category" value={category} onChange={handleCategory} >
                        <option value=''>Select Accommodation Category</option>
                        {
                            categories.map(category => (
                                <option value={"category=" + category.name} key={category._id}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <input type="text" value={search} placeholder="Where do you search an accommodation?"
                    onChange={e => setSearch(e.target.value.toLowerCase())} />

                <div className="row sort">
                    <span>Sort By: </span>
                    <select value={sort} onChange={e => setSort(e.target.value)} >
                        <option value=''>Newest</option>
                        {/* <option value='sort=oldest'>Oldest</option> */}
                        {/* <option value='sort=-sold'>Best sales</option> */}
                        <option value='sort=-price'>Price: High-Low</option>
                        <option value='sort=price'>Price: Low-High</option>
                    </select>
                </div>
            </div>

            <div className="products">
                {
                    products.map(product => {
                        return <ProductItem key={product._id} product={product}
                            isAdmin={isAdmin} deleteProduct={deleteProduct} handleCheck={handleCheck} />
                    })
                }
            </div>

            <div className="load_more">
                {
                    result < page * 9 ? <NotFound />
                        : <button onClick={() => setPage(page + 1)}>Load more</button>
                }
            </div>
            {products.length === 0}
        </>
    )
}

export default Products
