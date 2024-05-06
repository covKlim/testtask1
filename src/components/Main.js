import React, { useState } from 'react';
import Card from "./Card";
import axios from "axios";
const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
const Main=()=>{
    return(
        <>
        <div className="header">
            <div className="row2">
                <h2>Поиск книг</h2>
                <div className="search">
                    <input type="text" placeholder="Найди Ту Самую..."/>
                    <button></button>
                </div>
            </div>
        </div>
        <div className="container">
              {
                    <Card book={bookData}/>
              }  
            </div>
        </>
    )
}
}

export default Main;