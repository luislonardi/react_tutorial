import React from "react";
import ReactDom from 'react-dom';
import './index.css';

  const firstBook={
    title: 'Pastillas para dormir',
    author: 'Bayer',
    img: 'https://m.media-amazon.com/images/I/81iMHrpqygL._AC_UL320_.jpg',
  }
  
  const secondBook={
    title: 'Verity',
    author: 'Kenneth',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71Mx-bE91+L._AC_UL254_SR254,254_.jpg',
  }


function BookList(){
  return(
  <section className= 'booklist'>
  <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
  <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}  />
  </section>
  )
}

const Book =(props)=>{
  console.log(props)
    return (
  <article className="book">
    <img src= {props.img} alt='figura alternativa'/>
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
    
  </article>
  )
}


ReactDom.render(<BookList/>, document.getElementById('root'))