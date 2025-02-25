import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export default function PostDetail() {

    // destructoring per l'id
    const { id } = useParams();

    // set stato componente 
    const [post, setPost] = useState({});

    function fetchDolci() {
        axios.get(`http://localhost:3000/posts/${id}`)
            .then(res => setPost(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => fetchDolci(), [id])

    return (

        <>
            <h2>Pagina dettaglio post del dolce {post.title}</h2>
            <img src={post.image} alt={post.title} />
        </>
    )
}