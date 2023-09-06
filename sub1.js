import React from 'react'
import { useState } from 'react'
import Picture1 from './Picture1 (2).png'
import book from './book.png'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {RxDashboard} from 'react-icons/rx'
import {MdContentPasteSearch} from 'react-icons/md'
import {GiSandsOfTime} from 'react-icons/gi'
import harry from './harry.png'



function Sub1(){
    const [open,setOpen] = useState(false);
      const handleButton = () => {
        setOpen(!open)
      }  
      const handleSaveAndDownload = () => {
        window.print();
        
        // localStorage.setItem("count",count);
        // console.log(count);
       
        // localStorage.setItem("points",points);
        // console.log(points);
      };
      
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

<div style={leftButton}> <MdContentPasteSearch/>Surf-e-books</div>

<div style={{backgroundColor:'#0c1524',border:'none',fontSize:'16px',height:'70px',textAlign:'left',width:'170px', paddingBottom:'500px', color:'white'}}><GiSandsOfTime/>

 Take Quiz 
 </div>
 </div>
 <div class="Container border border-dark rounded border border-2 d-flex flex-column" style={{maxHeight:'70vh',width:'180vh',marginLeft:'180px',}}>
<div>
    <h6 class="card-title text-center">Harry Potter & The Half Blood Prince (Subscribe)​</h6>
    <button class="btn" type="submit" ><a href="http://localhost:3000/list">back</a></button>

</div>
<div class="d-flex" style={{margin:"10px",backgroundColor:'#0c1524'}}>
<div >
    <p style={{width:'200px',color:'white'}}>
    Author: J.K Rowling<br/>
      Category:Novel<br/>
      Publisher: Potter More​<br/>
      Date Published : June 26, 1997​<br/>
      Points :  200​
    </p>
    </div>
<div>
    <p style={{color:'white'}}>Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).​</p>
    <div>
    <button onClick={handleButton}>Subscribe</button>
</div>
    </div>
    <div>
    <img src={harry}></img>
</div>
 
</div>

</div>
 
 {open&&(
 <div class="Container border border-dark rounded border border-2 d-flex flex-column" style={{maxHeight:'70vh',width:'180vh',marginLeft:'180px',marginTop:'20px'}}> 
 <div>
    <h6 class="card-title text-center">Harry Potter & The Half Blood Prince (Subscribe)​</h6>
    <div>
         <div style={{marginTop:'20px'}}class="d-flex justify-content-between">
    <input type="global id" className="form-control" placeholder="Enter Global Id"  style={{width:'25vh'}}></input>
    
    <input type="Name" className="form-control" placeholder="Enter Your Name"style={{width:'25vh'}}/>
    <input type="Grade" className="form-control" placeholder="Enter Your Grade" style={{width:'25vh'}}/> 

     </div> 
    <div>
    <div style={{marginTop:'15px'}} class="d-flex justify-content-between">
    <input type="Joining date" className="form-control" placeholder="Enter Your Joining Date"  style={{width:'25vh'}}/>
    <input type="Supervisor" className="form-control" placeholder="Enter Your Supervisor"style={{width:'30vh'}}/>
    <input type="Emp Id" className="form-control" placeholder="Enter Your EmpId" style={{width:'25vh'}}/> 

     </div>
     <div style={{marginTop:'15px',paddingLeft:'70vh'}}>
     <button onClick={handleSaveAndDownload}>Save & Download</button></div>
    </div>
</div>
</div> 
<div>
    
</div>
 </div> )}
</div>
  
    )

    
}

export default Sub1;
