import React from 'react'
import { useState, useEffect } from 'react'
import Picture1 from './Picture1 (2).png'
import book from './book.png'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {RxDashboard} from 'react-icons/rx'
import {MdContentPasteSearch} from 'react-icons/md'
import {GiSandsOfTime} from 'react-icons/gi'
import harry from './harry.png'
import PieChart from './piechart'
import axios from 'axios'

function Dashboard(){
  function btnClick() {
    window.open("http://localhost:3000/list");}
    const [open,setOpen] = useState(false);
      const handleButton = () => {
        setOpen(!open)
      } 
      useEffect(() => {

        axios.get('http://localhost:8000/data')
    
          .then(response => {
    
            setData(response.data);
    
            const currentDate = new Date().setHours(0, 0, 0, 0);
    
           
    
            const expiringData = response.data.filter(item => new Date(item.subcriptionDate) <= currentDate);
    
            setExpiringData(expiringData);
    
            setRemainingDataCount(response.data.length - expiringData.length);
    
          })
    
          .catch(error => {
    
            console.error('Error fetching data:', error);
    
          });
    
      }, []);
      const [data, setData] = useState([]);

      const [expiringData, setExpiringData] = useState([]);
    
      const [remainingDataCount, setRemainingDataCount] = useState(0);
     
    
      const pointsCount = (data.length)*200;
    
      const itemCount = data.length; 
        
    
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

     

<div style={leftButton} onClick={btnClick}> <RxDashboard/> Dashboard</div>

<div style={leftButton} > <MdContentPasteSearch/>Surf-e-books</div>

<div style={{backgroundColor:'#0c1524',border:'none',fontSize:'16px',height:'70px',textAlign:'left',width:'170px', paddingBottom:'500px', color:'white'}}><GiSandsOfTime/>

 Take Quiz 
 </div>
 </div>

 <div class="container">
        <div class="row gap-4" style={{marginLeft:'150px'}}>

          {/* Total Points container */}
          <div class=" shadow rounded-4 col p-1 border border-dark border border-2">
            <h6 class="text-center">    
Total Points</h6>

            <div class="d-flex p-3">
            <p>Points scored by Subcriptions</p>
            <div class="rounded-circle border border-4 border border-danger p-4" style={{width:'120px'}}><h6 class="text-center">{pointsCount}</h6></div>
            </div></div>

            {/*Books Subcription container */}
            <div class=" shadow rounded-4 col p-1 border border-dark border border-2">
            <h6 class="text-center">Books Subcribed</h6>
            <div class="d-flex p-3">
            <p>Number of Books read</p>
            <div class="rounded-circle border border-4 border border-primary p-4" style={{width:'120px'}}><h6 class="text-center">{itemCount}</h6></div>
            </div></div>

            {/* Active books Subcription container */}
            <div class=" shadow rounded-4 col p-1 border border-dark border border-2">
            <h6 class="text-center">Active Subcriptions</h6>
            <div class="d-flex p-3">
            <p>Number of books currently reading</p>
            <div class="rounded-circle border border-4 border border-success p-4" style={{width:'120px'}}><h6 class="text-center">1</h6></div>
            </div></div>

            {/* next row */}
            <div class="row gap-3">

              {/* table of top subcriptions */}
            <div class=" shadow rounded-4 col p-1 border border-dark border border-2">
            <h5 class="text-center">Top subcriptions by time</h5>
            <table class="table table-striped table-dark" style={{marginTop:'15px'}}>
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col">Points</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>Lasya</td>
      <td>1900</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Sreeja</td>
      <td>1600</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Vijju</td>
      <td>1500</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Sravani</td>
      <td>1200</td>
    </tr>
  </tbody>
</table></div>
                    
            <div class=" shadow rounded-4 col p-1 border border-dark border border-2">
            <h5 class="text-center">Trend Charts</h5>
            <PieChart/>   

            </div>
            </div>
        </div>
</div>

</div>
)
}
export default Dashboard;
