import React from 'react'

function BookList() {
      
            return (
                 <section>
                <Book />
                 <Book />
                 </section>
            );
      
}

const Book = () =>{
      return (
            <article>
            <Image></Image>
            <Author />
            
            <Title />
            </article>
      )
}

 const Image = () =>(
       <img src="./images/img1.jpg" 
       alt="avatar">
       </img>
     );
const Author = () => <h1>i love this picture</h1>

const Title = () =><h4>Nice Picture</h4>




export default BookList;
