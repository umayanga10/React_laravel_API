import React from "react";
import Header from "./Header";
import { useState } from "react";

function AddProducts() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState("");

    const handleName = (e) =>{
        setName(e.target.value);
    }

    const handlePrice = (e) =>{
        setPrice(e.target.value);
    }

    const handleDescription = (e) =>{
        setDescription(e.target.value);
    }

    const handleFile = (e) =>{
        setFile(e.target.files[0]);
    }

    async function addproduct() {
        console.warn(name,price,description,file)

        const formData = new FormData();

        formData.append('name',name);
        formData.append('price',price);
        formData.append('description',description);
        formData.append('file',file);

        let result = await fetch("http://127.0.0.1:8000/api/addProduct", {
            method: 'POST',
            body: formData
        });

        alert("Data has been saved")
    }

    return(
        <div>
            <Header/>
            <h2>Add Product</h2>
            <div className="col-sm-6 offset-sm-3">
                <br/>
                <input type="text" className="form-control" onChange={handleName} placeholder="Enter Name"/><br/>
                <input type="text" className="form-control" onChange={handlePrice} placeholder="Enter price"/><br/>
                <input type="text" className="form-control" onChange={handleDescription} placeholder="Enter description"/><br/>
                <input type="file" className="form-control" onChange={handleFile} placeholder="Enter Name"/><br/>
                <button className="btn btn-info" onClick={addproduct}>Add Product</button>
            </div>
        </div>
        
    )
}

export default AddProducts;