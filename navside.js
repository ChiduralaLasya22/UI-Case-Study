import React from 'react'
import { useState } from 'react'
import Picture1 from './Picture1 (2).png'
import book from './book.png'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {RxDashboard} from 'react-icons/rx'
import {MdContentPasteSearch} from 'react-icons/md'
import {GiSandsOfTime} from 'react-icons/gi'
import harry from './harry.png'

function Navside(){
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
<div class='Container'>

</div>

<div style={{paddingTop:'30px',width:'170px', height:'10vh',backgroundColor:'#0c1524'}}>

     

<div style={leftButton} > <RxDashboard/> Dashboard</div>

<div style={leftButton} > <MdContentPasteSearch/>Surf-e-books</div>

<div style={{backgroundColor:'#0c1524',border:'none',fontSize:'16px',height:'70px',textAlign:'left',width:'170px', paddingBottom:'500px', color:'white'}}><GiSandsOfTime/>

 Take Quiz 
 </div>
 </div>
 </div>
 )
 }
 export default Navside;
