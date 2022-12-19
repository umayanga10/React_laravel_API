import React from "react";
import Header from "./Header";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductLst() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])
    console.warn("result", data)



    async function deleteTask(id) {
       let result = await fetch("http://127.0.0.1:8000/api/delete/"+id,{
        method: 'DELETE'
       });
       result = await result.json();
       console.warn(result)
       getData();
    }

    async function getData() {
        let response = await fetch("http://127.0.0.1:8000/api/list");
        response = await response.json()
        setData(response)
    }

    return (
        <div>
            <Header />
            <h2>List Product</h2>
            <div className="col-sm-8 offset-sm-3">
                <Table>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Description</td>
                        <td>Image</td>
                        <td>Action</td>
                    </tr>
                    {
                        data.map((item) =>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td><img style={{ width: 100 }} src={"http://127.0.0.1:8000/" + item.file_path} /></td>
                                <td>
                                <Link to={"/update/"+item.id}><button className="btn btn-wrning">Edit</button> </Link>
                                <button className="btn btn-danger" onClick={()=>deleteTask(item.id)} >Delete</button>
                                </td>
                                
                            </tr>
                        )
                    }
                </Table>
            </div>
        </div>
    )
}

export default ProductLst;












