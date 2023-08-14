import React,{useState} from "react";
import Picture1 from './Picture1 (2).png'
import book from './book.png'
import {RxDashboard} from 'react-icons/rx'
import {MdContentPasteSearch} from 'react-icons/md'
import {GiSandsOfTime} from 'react-icons/gi'
import {IoMdNotificationsOutline} from 'react-icons/io'
import Hquiz from "./quiz-ques";


function Quiz(){
  const [open,setOpen] = useState(false);
      const handleButton = () => {
        setOpen(!open)
      } 

    const leftButton = {
  
    backgroundColor:'#0c1524',
  
    border :'none',
  
    fontSize :'16px',
  
    color :'white',
  
    height :'50px',
  
    width :'170px',
  
    textAlign :'left'
  
  };
      return(
         <div>
          <nav style={{backgroundColor:'#0c1524',height:'17vh',fontFamily:'calibri'}}class="navbar navbar-expand-lg navbar-light">
          <h2 style={{color:'white',paddingBottom:'50px'}}><img src={book} style={{borderRadius:'10%',backgroundColor:'white',height:'40px',width:'40px'}}/>e-Library</h2>
  
  <div style={{color:'white',paddingtop:'1000px'}}>Poweredby</div>
  <img src={Picture1} /> 
  <div class="float-end">
    <div><IoMdNotificationsOutline/></div>
  
  </div>
    </nav>
    <div>
      <div>
    
  </div>
  
  </div>
  <div class='Container'>
  
  </div>
  
  <div style={{paddingTop:'30px',width:'170px', height:'10vh',backgroundColor:'#0c1524'}}>
  
       
  
  <div style={leftButton} > <RxDashboard/> Dashboard</div>
  
  <div style={leftButton} > <MdContentPasteSearch/>Surf-e-books</div>
  
  <div style={{backgroundColor:'#0c1524',border:'none',fontSize:'16px',height:'70px',textAlign:'left',width:'170px', paddingBottom:'500px', color:'white'}}><GiSandsOfTime/>
  
  Take Quiz </div></div>
   <div>
   <div class="Container border border-dark rounded border border-2 d-flex flex-column" style={{maxHeight:'70vh',width:'180vh',marginLeft:'180px'}}>
   <div>
    <h6 class="card-title text-center">Select From Your Active Subscription​​</h6>
    <button class="btn" type="submit" ><a href="http://localhost:3000/list">back</a></button>

    </div>
    <div>
    <table class="table table-striped table-dark" style={{marginTop:'10px'}}>
    <thead>
    <tr>
      <th scope="col">e-BooK Id</th>
      <th scope="col">e-Book Name</th>
      <th scope="col">Subscription Date</th>
      <th scope="col">Subscription Id</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1221</th>
       <td onClick={handleButton}>Harry Potter & The Half Blood….​</td> 
      {/* <td>Harry Potter & The Half Blood</td> */}
      <td>29 Mar 2020​</td>
      <td>1022242​</td>
    </tr>
    <tr>
      <th scope="row">1226</th>
      <td>Interstellar</td>
      <td>25 Feb 2020​</td>
      <td>1011231​</td>
    </tr>
    <tr>
      <th scope="row">1889</th>
      <td>Corporate Chanakya​</td>
      <td>12 Jan 2020​</td>
      <td>1011223​</td>
    </tr>
  </tbody>
</table>
    </div>
</div>
   </div>
    {open&&( 
   <div>
   <div class="Container border border-dark rounded border border-2 d-flex flex-column" style={{maxHeight:'70vh',width:'180vh',marginLeft:'180px',marginTop:'20px'}}>
<div>
    <h6 class="card-title text-center">Harry Potter & The Half Blood Prince Quiz​</h6>
    <Hquiz/>
    </div>
</div>
   </div>
    )} 
   </div>
      )
}
export default Quiz;
