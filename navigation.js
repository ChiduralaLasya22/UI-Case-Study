import React, { useEffect, useState } from "react";

import Picture1 from './Picture1 (2).png'

import book from './book.png'

import {RxDashboard} from 'react-icons/rx'

import {MdCategory, MdContentPasteSearch} from 'react-icons/md'

import {GiSandsOfTime} from 'react-icons/gi'

import {IoMdNotificationsOutline} from 'react-icons/io'

import harry from './harry.png'

import intersellar from './intersellar.png'

import chanakya from './chanakya.png'

import angular from './angular.png'

import axios from "axios";

 

function Navigation(){
const [cards, setCards] = useState([]);
const [authorQuery, setAuthorQuery] = useState('');
const [categoryQuery, setCategoryQuery] = useState('');
const [nameQuery, setNameQuery] = useState('');
 const handleSearch = (e) => {

    e.preventDefault();

  }

    useEffect(() => {

      axios

      .get("http://localhost:8000/cards") // Replace with your JSON server URL

      .then((response) => setCards(response.data))

      .catch((error) => console.error(error));

  }, []);
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
<div class="Container border border-dark rounded border border-2" style={{height:'100px',width:'170vh',marginLeft:'200px'}}>
<div class="d-flex flex-column">
<div class="text-center py-3">E-Book Filters</div>

  <div class="d-flex justify-content-around" >

    <input type="search" value={nameQuery} onChange={e => setNameQuery(e.target.value)} placeholder="Search by Name"/>

    <input type="search" value={categoryQuery} onChange={e => setCategoryQuery(e.target.value)} placeholder="Search by Category"/>

    <input type="search" value={authorQuery} onChange={e => setAuthorQuery(e.target.value)} placeholder="Search by Author"/>

    <button onClick={handleSearch} class=" shadow btn btn-outline-success">filter</button>

  </div>
</div>

</div>

 



 

</div>

 

    </div>

  )

    }

 

 

export default Navigation;
