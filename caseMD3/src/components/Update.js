import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

function Update() {
    let [id, setId] = useState("");
    let [name, setName] = useState("");
    let [price, setPrice] = useState("");
    let [quantity, setQuantity] = useState("");
    let [category,setCategory] = useState("");
    let [images,setImages] = useState("");
    const params = useParams();
    const idUpdate = params.id;

    const navigate = useNavigate();
    const changeId = (event) => {
        let dataInput = event.target.value;
        setId(dataInput);
    }
    const changeName = (event) => {
        let dataInput = event.target.value;
        setName(dataInput);
    }
    const changePrice = (event) => {
        let dataInput = event.target.value;
        setPrice(dataInput);
    }
    const changeQuantity = (event) => {
        let dataInput = event.target.value;
        setQuantity(dataInput);
    }
    const changeCategory = (event) => {
        let dataInput = event.target.value;
        setCategory(dataInput);
    }
    const changeImages = (event) => {
        let dataInput = event.target.value;
        setImages(dataInput);
    }
    useEffect(() => {
        axios.get("http://localhost:3000/products"+ idUpdate).then ((res)=>{
            let data = res.data
            setId(data.id)
            setName(data.name)
            setPrice(data.price)
            setQuantity(data.quantity)
            setCategory(data.category)
            setImages(data.images)
        })
    }, []);
    const submit = () => {
        let product = {
            id: id,
            name: name,
            price: price,
            quantity: quantity,
            category: category,
            images: images,
        }
        console.log(product);
        axios.put(`http://localhost:3000/products/${idUpdate}`,product).then(() => {
            alert("Update Success");
            navigate("/admin/list");
        })
    }
    return (
        <>
            <h2>Update Product</h2>
            <input type="number" placeholder={'Id'} value={id} onChange={(event) => {
                changeId(event)
            }}/>
            <input type="text" placeholder={'Name'} value={name} onChange={(event) => {
                changeName(event)
            }}/>
            <input type="text" placeholder={'price'} value={price} onChange={(event) => {
                changePrice(event)
            }}/>
            <input type="text" placeholder={'Quantity'} value={quantity} onChange={(event) => {
                changeQuantity(event)
            }}/>
            <input type="text" placeholder={'Category'} value={category} onChange={(event) => {
                changeCategory(event)
            }}/>
            <input type="text" placeholder={'Images'} value={images} onChange={(event) => {
                changeImages(event)
            }}/>
            <button onClick={() => {
                submit()
            }}>Submit
            </button>
        </>
    );
}

export default Update;