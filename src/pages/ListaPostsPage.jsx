import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListaPostsPage() {

    const [lista, setLista] = useState([]);

    function fetchDolci() {
        axios.get("http://localhost:3000/posts")
            .then((res) =>
                setLista(res.data)
            )
            .catch(err => console.log(err)
            )
    }

    useEffect(fetchDolci, []);

    return (
        <>

            <div className="container">
                {

                    lista.map((post) => (

                        <div className="post" key={post.id}>
                            <h2>{post.title}</h2>
                            <img src={post.image} alt={post.title} />
                            <br />
                            <span>{post.content}</span>
                            <h5>{post.tags.join(", ")}</h5>
                            <Link to={`/listaposts/${post.id}`}>Dettagli</Link>
                        </div>
                    ))
                }
            </div>


        </>
    )
}