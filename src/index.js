import React from "react";
import ReactDom from 'react-dom';
import './index.css';

 const books=[
   {
    title: 'Pastillas para dormir',
    author: 'Bayer',
    imagen: 'https://m.media-amazon.com/images/I/81iMHrpqygL._AC_UL320_.jpg',
  },
  {
    title: 'Verity',
    author: 'Kenneth',
    imagen: 'https://images-na.ssl-images-amazon.com/images/I/71Mx-bE91+L._AC_UL254_SR254,254_.jpg',
  }
];
const names=['john','peter','susan']
const newNames=names.map((name)=>{
    return <h1>{name}</h1>
})

function BookList(){
  return(
  <section className= 'booklist'>
    {newNames}
  </section>
  )
}

const Book =(props)=>{
  //const {img,title,author}=props
  //console.log(props)
    return (
  <article className="book">
    <img src= {props.img} alt='figura alternativa'/>
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>    
  </article>
  )
}


ReactDom.render(<BookList/>, document.getElementById('root'))