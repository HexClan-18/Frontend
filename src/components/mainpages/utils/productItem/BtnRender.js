import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../../context/userContext'

function BtnRender({ product, deleteProduct }) {
    const state = useContext(UserContext)
    const isAdmin = state.loginDetails.role === 1

    return (
        isAdmin ?
            <div className="row_btn">
                <Link id="btn_buy" to="#!"
                    onClick={() => deleteProduct(product._id, product.images.public_id)}>
                    Delete
                    </Link>
                <Link id="btn_view" to={`/admin/edit_product/${product._id}`}>
                    Edit
                    </Link>
            </div>
            :
            <div className="row_btn">
                <Link id="btn_view" to={`/guest/detail/${product._id}`}>
                    View
                    </Link>
            </div>
    )
}

export default BtnRender
