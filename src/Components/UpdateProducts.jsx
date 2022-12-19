import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./Header";

function UpdateProduct(props) {
    const params = useParams();
    const [data, setData] = useState([]);
    const { id } = params
    console.log(id)
    console.log(data.name)

    useEffect(() => {
        getProduct();
    }, [])

    async function getProduct() {
        let result = await fetch("http://127.0.0.1:8000/api/getProduct/" + id);
        result = await result.json()
        setData(result)
    }

    return (
        <div>
            <Header />
            <h2>Update Product</h2>
            <input type="text" defaultValue={data.name} /><br /><br />
            <input type="text" defaultValue={data.price} /><br /><br />
            <input type="text" defaultValue={data.description} /><br /><br />
            <input type="text" defaultValue={data.name} /><br /><br />
            <img style={{ width: 100 }} src={"http://127.0.0.1:8000/" + data.file_path} /><br/><br/>
            <button>Update</button>
        </div>
    )
}

export default UpdateProduct;