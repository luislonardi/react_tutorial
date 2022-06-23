import React from "react";
import ReactDom from 'react-dom';
import './index.css';

 const books=[
   {
    id:1,
    title: 'Pastillas para dormir',
    author: 'Bayer',
    img: 'https://m.media-amazon.com/images/I/81iMHrpqygL._AC_UL320_.jpg',
  },
  {
    id:2,
    title: 'Verity',
    author: 'Kenneth',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71Mx-bE91+L._AC_UL254_SR254,254_.jpg',
  },
  {
    id:3,
    title: 'Sky is the limit',
    author: 'John',
    img: 'https://m.media-amazon.com/images/I/81yotbuQyfL._AC_UY218_.jpg',
  },
];


function BookList(){
  return(
  <section className= 'booklist'>
    {books.map((book)=>{
       return(
        <Book key={book.id} {...book}></Book>
      )
    })}
  </section>
  )
}

const Book =({img,title,author})=>{
  //attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler=()=>{
    alert('hello worlds')
  }
    return (
  <article className="book">
    <img src= {img} alt='alt.'/>
    <h1 onClick={()=>console.log(title)}>{title}</h1>
    <h4>{author}</h4>
    <button type='button' onClick={clickHandler}>Reference</button> 
  </article>
  )
}


ReactDom.render(<BookList/>, document.getElementById('root'))