import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { GlobalState } from '../../../GlobalState'
import Loading from '../utils/loading/Loading'
import { useHistory, useParams } from 'react-router-dom'
import { UserContext } from "../../../context/userContext";

const initialState = {
  title: '',
  price: 0,
  description: '',
  content: '',
  category: '',
  location: '', // add location
  _id: '',
  lat: 6.4526,
  lng: 78.8256,
}

function CreateProduct() {
  const state = useContext(UserContext)
  const [product, setProduct] = useState(initialState)
  const [images, setImages] = useState(false)
  const [loading, setLoading] = useState(false)


  const isAdmin = state.loginDetails.role === 1
  const token = state.loginDetails.token;


  const history = useHistory()
  const param = useParams()

  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [onEdit, setOnEdit] = useState(false)
  const [callback, setCallback] = useState(false)


  //Filter Function
  const getProduct = async (id) => {
    const res = await axios.get(`/api/products/${id}`)
    setProduct(res.data.products)
  }


  //Get categories
  const getCategories = async () => {
    const res = await axios.get('/api/category')
    setCategories(res.data)
  }

  useEffect(() => {
    getCategories()
    if (param.id) {
      setOnEdit(true)
      getProduct(param.id)
    } else {
      setOnEdit(false)
      setProduct(initialState)
      setImages(false)
    }
  }, [])



  useEffect(() => {
    if (param.id) {
      setOnEdit(true)
      getProduct(param.id)
    } else {
      setOnEdit(false)
      setProduct(initialState)
      setImages(false)
    }
  }, [param.id, products])

  const handleUpload = async e => {
    e.preventDefault()
    const file = e.target.files[0]
    if (!isAdmin) return alert("You're not an admin")


    if (!file) return alert("File not exist.")

    if (file.size > 1024 * 1024) // 1mb
      return alert("Size too large!")
    // add jpg files
    if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg') // 1mb
      return alert("File format is incorrect.")

    let formData = new FormData()
    formData.append('file', file)

    setLoading(true)
    try {
      const res = await axios.post('/api/upload', formData, {
        headers: { 'content-type': 'multipart/form-data', Authorization: token }
      })
      setLoading(false)
      setImages(res.data)
    } catch (err) {
      setLoading(false)
    }

  }

  const handleDestroy = async () => {
    try {
      if (!isAdmin) return alert("You're not an admin")
      setLoading(true)
      await axios.post('/api/destroy', { public_id: images.public_id }, {
        headers: { Authorization: token }
      })
      setLoading(false)
      setImages(false)
    } catch (err) {
      alert(err.response.data.msg)
    }
  }

  const handleChangeInput = e => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      if (!isAdmin) return alert("You're not an admin")
      if (!images) return alert("No Image Upload")

      if (onEdit) {
        await axios.put(`/api/products/${product._id}`, { ...product, images }, {
          headers: { Authorization: token }
        })
      } else {
        await axios.post('/api/products', { ...product, images }, {
          headers: { Authorization: token }

        }); console.log(product);
      }
      setCallback(!callback)
      history.push("/")
    } catch (err) {
      alert(err.response.data.msg)
    }
  }

  const styleUpload = {
    display: images ? "block" : "none"
  }
  return (
    <div className="create_product">
      <div className="upload">
        <input type="file" name="file" id="file_up" onChange={handleUpload} />
        {
          loading ? <div id="file_img"><Loading /></div>

            : <div id="file_img" style={styleUpload}>
              <img src={images ? images.url : ''} alt="" />
              <span onClick={handleDestroy}>X</span>
            </div>
        }

      </div>

      <form onSubmit={handleSubmit}>

        <div className="row">
          <label htmlFor="title">Introduction</label>
          <input type="text" name="title" id="title"
            placeholder="Short intro: Name/Type/Location" required
            value={product.title} onChange={handleChangeInput} />
        </div>

        <div className="row">
          <label htmlFor="price">Price</label>
          <input type="number" name="price" id="price" required
            value={product.price} onChange={handleChangeInput} />
        </div>

        <div className="row">
          <label htmlFor="description">Description</label>
          <textarea type="text" name="description" id="description"
            placeholder="Add Property Description/Features" required
            value={product.description} rows="5" onChange={handleChangeInput} />
        </div>
        {/* add location*/}
        <div className="row">
          <label htmlFor="location">Location</label>
          <input type="text" name="location" id="location"
            placeholder="Area of your place" required
            value={product.location} rows="5" onChange={handleChangeInput} />
        </div>
        <div className="row">
          <label htmlFor="content">Address</label>
          <textarea type="text" name="content" id="content"
            placeholder="Place Address" required
            value={product.content} rows="5" onChange={handleChangeInput} />
        </div>

        <div className="row">
          <label htmlFor="categories">Categories: </label>
          <select name="category" value={product.category} onChange={handleChangeInput} >
            <option value="">Please select a category</option>
            {
              categories.map(category => (
                <option value={category.name} key={category._id}>
                  {category.name}
                </option>
              ))
            }
          </select>
        </div>

        <button type="submit">{onEdit ? "Update" : "Create"}</button>
      </form>
    </div>
  )
}

export default CreateProduct
