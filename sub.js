import React from 'react'
import { useState } from 'react'
import Picture1 from './Picture1 (2).png'
import book from './book.png'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {RxDashboard} from 'react-icons/rx'
import {MdContentPasteSearch} from 'react-icons/md'
import {GiSandsOfTime} from 'react-icons/gi'
import harry from './harry.png'
import axios from 'axios'



function Subscribe(){
    const [open,setOpen] = useState(false);
      const handleButton = () => {
        setOpen(!open)
      }  
      // const handleSaveAndDownload = () => {
      //   window.print();
        
        // localStorage.setItem("count",count);
        // console.log(count);
       
        // localStorage.setItem("points",points);
        // console.log(points);
      // };
      const [points,SetPoints] = useState(200);
      const [count,Setcount] = useState(1);
      const [isSubscribed, setIsSubscribed] = useState(false);
      const handleSaveAndDownload = () => {
        window.print();
        Setcount(count+1);
        localStorage.setItem("count",count);
        console.log(count);
        SetPoints(points+200);
        localStorage.setItem("points",points);
        console.log(points);
      };
      const handleSubscribe = () => {
        setshow(!show)
        setIsSubscribed(true);
      };
      const [formData, setFormData] = useState({

        name: '',
    
        title: '',
    
        subcriptionDate:'',
    
        grade:''
    
      });
    
     
    
      const handleChange = (event) => {
    
        setFormData({
    
          ...formData,
    
          [event.target.name]: event.target.value
    
        });
    
      };
    
     
    
      const handleSubmit = (event) => {
    
        event.preventDefault();
    
     
    
        axios.post('http://localhost:8000/data', formData)
    
          .then(response => {
    
           
    
            console.log('Subcription List!');
    
            window.print();
    
            
    
          })
    
          .catch(error => {
    
            console.error(error);
    
           
    
          });
    
      };
      
      const [show, setshow] =React.useState(false);
      
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

     

<div style={leftButton}><a href="http://localhost:3000/dash" ><button style={{backgroundColor:'#0c1524',color:'white',border:'none'}}><RxDashboard/>Dashboard</button></a></div>

  <div style={leftButton} > <a href="http://localhost:3000/list" > <button style={{backgroundColor:'#0c1524',color:'white',border:'none'}}><MdContentPasteSearch/>Surf-e-books</button></a></div>
  
  <div style={{backgroundColor:'#0c1524',border:'none',fontSize:'16px',height:'70px',textAlign:'left',width:'170px', paddingBottom:'500px', color:'white'}}><a href="http://localhost:3000/quiz" ><button style={{backgroundColor:'#0c1524',color:'white',border:'none'}}><GiSandsOfTime/>
  
  Take Quiz</button></a> </div>
 </div>
 <div class="Container border border-dark rounded border border-2 d-flex flex-column" style={{maxHeight:'70vh',width:'180vh',marginLeft:'180px',}}>
<div>
    <h6 class="card-title text-center" value={formData.title} onChange={handleChange}>Harry Potter & The Half Blood Prince (Subscribe)​</h6>
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
    <button  onClick={handleButton}>Subscribe</button>
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
    <h6 class="card-title text-center" value={formData.title} onChange={handleChange}>Harry Potter & The Half Blood Prince (Subscribe)​</h6>
    <div class="col" ><input type="text" placeholder="title" name="title" value={formData.title} onChange={handleChange} required/></div>

    <div>
         <div style={{marginTop:'20px'}}class="d-flex justify-content-between">
    <input type="number" className="form-control" placeholder="Enter Global Id"  style={{width:'25vh'}}></input>
    
    <div > <input type="text" placeholder="name" name="name" value={formData.name} onChange={handleChange} required/> </div>
    <div ><input type="text" placeholder="grade" name="grade" value={formData.grade} onChange={handleChange} required/></div>
     </div> 
    <div>
    <div style={{marginTop:'15px'}} class="d-flex justify-content-between">
    <input type="date" placeholder="Subcription Date"name="subcriptionDate" value={formData.subcriptionDate} onChange={handleChange} required/>
    <input type="text" className="form-control" placeholder="Enter Your Supervisor"style={{width:'30vh'}}/>
    <input type="number" className="form-control" placeholder="Enter Your EmpId" style={{width:'25vh'}}/> 

     </div>
     <div style={{marginTop:'15px',paddingLeft:'70vh'}}>
     <button onClick={handleSubmit}>Save & Download</button></div>
    </div>
</div>
</div> 
<div>
    
</div>
 </div> )}
</div>
  
 )
 
    
}

export default Subscribe;
