import React from "react";
import ReactDom from 'react-dom';
import './index.css';

function BookList(){
  
  return(
  <section className= 'booklist'>
  <Book />
  <Book />
  <Book />
  <Book />
  <Book />
  <Book />
  </section>
  )
}

const Book =()=>{
  return (
    <article className="book">
      <Image></Image>
      <Title />
      <Author />
    </article>
  )
}

const Image= ()=>(
  <img
    src='https://m.media-amazon.com/images/I/81iMHrpqygL._AC_UL320_.jpg'
    alt='figura alternativa'
  />  
);

const Title= ()=> <h1>Pastillas para dormir</h1>

const Author= ()=> <h4> Bayer</h4>



ReactDom.render(<BookList/>, document.getElementById('root'))