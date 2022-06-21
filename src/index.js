import React from "react";
import ReactDom from 'react-dom'

function BookList(){
  
  return(
  <section>
  <Book />
  </section>
  )
}

const Book =()=>{
  return (
    <article>
      <Image></Image>
    </article>
  )
}

const Image= ()=>(
  <img
    src='https://www.amazon.com/-/es/seguridad-resistente-electr%C3%B3nico-programable-pulgadas/dp/B074KDHMKJ/ref=sr_1_1?keywords=amazonbasics&pd_rd_r=f816388f-31cb-4cb3-bc32-037d70ae7f7c&pd_rd_w=OiQzW&pd_rd_wg=UjTUl&pf_rd_p=43c970ec-59f4-4449-b2cb-0815c70c7b7d&pf_rd_r=T5BJS1RD38KDFTM2RKHZ&qid=1655842244&sr=8-1'
    alt='figura alternativa'
  />  
);


ReactDom.render(<BookList/>, document.getElementById('root'))