import React, { useContext, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { UserContext } from "../../../context/userContext"
import ProductItem from '../utils/productItem/ProductItem'
import axios from 'axios'


function DetailProduct() {
  const params = useParams()
  const state = useContext(UserContext)
  const [detailProduct, setDetailProduct] = useState([])

  //Filter Function
  const getProduct = async (id) => {
    const res = await axios.get(`/api/products/${id}`)
    setDetailProduct(res.data.products)
  }

  useEffect(() => {
    if (params.id) {
      getProduct(params.id)
    }
  }, [params.id, detailProduct])

  if (detailProduct.length === 0) return null;

  return (
    <>
      <div className="detail">
        <img src={detailProduct.images.url} alt="" />
        <div className="box-detail">
          <div className="row">
            <h2>{detailProduct.title}</h2>
          </div>

          <span>Rs. {detailProduct.price}</span>
          <p>{detailProduct.description}</p>
          <p>{detailProduct.content}</p>
          <Link to="/payment" className="cart"
          >
            Book Now
                    </Link><br></br>
          < div className="rating">
            <Link to="/comment" className="comment">
              Rates / Reviews
                    </Link>
          </div>

          < div className="chatspace">
            <Link to="/chat" className="chat">
              Chat Now
                    </Link>
          </div>

        </div>

      </div>
      <div>
        <h2>Related Accommodations</h2>
        <div className="products">
          <ProductItem key={detailProduct._id} product={detailProduct} />
        </div>
      </div>
    </>
  )
}

export default DetailProduct
