
import {useEffect, useState} from "react";
import axios from "axios";
import '../style/ListProductUser.css'
import {useCart} from "../hooks/useCart";
import {formatCurrency} from "../format/FormatCurrency";

function ListProductUser() {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/products').then(data => {
            setList(data.data)
        })
    }, [])
    const {addToCart} = useCart()
    return (
        <div className="row">
            <div className="col-12"><h4>Top Product</h4>
                <div className="row">
                    {list.map(item => (
                        <>
                            <div className="col-4 mt-2">
                                <div className="card">
                                    <img src= {item.images[0]} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.category}</p>
                                        <p className="card-text">{formatCurrency(item.price)}</p>
                                        <button className='btn-add-to-cart' onClick={() => addToCart(item)}>Thêm vào giỏ
                                            hàng
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ListProductUser