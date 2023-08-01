import React from "react";
import Picture1 from './Picture1 (2).png'
import book from './book.png'
function logout () {
  return(
    <div  style={{backgroundColor:'#0c1524',height:'100vh',paddingLeft:'80vh', paddingTop:'30vh'}}>
      {/* <div  style={{backgroundColor:'gray',fontFamily:'calibri',height:'30vh',width:'60vh'}}>
    <div > */}14
    <h2 style={{color:'white'}}><img src={book} style={{borderRadius:'10%',backgroundColor:'white',height:'40px',width:'40px'}}/>e-Library</h2>

<div style={{color:'white', marginLeft:'50px'}}>Poweredby</div>
<img style={{ marginLeft:'60px'}}src={Picture1} />


 <div >
<h5 style={{color:'white', fontSize:'20px', marginTop:'20px'}}>You have been Successfully Logged out</h5> </div> 
<button class="btn btn-outline-light" style={{marginLeft:'60px'}}><a href="http://localhost:3000/">Go Back to Home Page</a></button>
{/* </div>
</div> */}
</div>
)
  
}
export default logout;
