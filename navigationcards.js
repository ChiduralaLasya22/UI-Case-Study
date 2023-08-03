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
const [filteredCards, setFilteredCards] = useState([]);

const leftButton = {

  backgroundColor:'#0c1524',

  border :'none',

  fontSize :'16px',

  color :'white',

  height :'50px',

  width :'170px',

  textAlign :'left'

};

useEffect(() => {

  fetchData();

}, []);



const fetchData = async () => {

  try {

    const response = await axios.get('http://localhost:8000/cards');

    setCards(response.data);

    setFilteredCards(response.data);

  } catch (error) {

    console.error('Error fetching data:', error);

  }

};




 
const handleSearch = () => {
  const results = cards.filter(card => {

    const lowercaseAuthorQuery = authorQuery.toLowerCase();

  const lowercaseCategoryQuery = categoryQuery.toLowerCase();

  const lowercaseNameQuery = nameQuery.toLowerCase();

 

    const lowercaseAuthor = card.author.toLowerCase();

    const lowercaseCategory = card.category.toLowerCase();

    const lowercaseName = card.name.toLowerCase();



    return (

      lowercaseAuthor.includes(lowercaseAuthorQuery) &&

      lowercaseCategory.includes(lowercaseCategoryQuery) &&

      lowercaseName.includes(lowercaseNameQuery)

    );

   

  });

 setFilteredCards(results);

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

 

<div class="d-flex gap-4 row row-cols-4">

 

<div class="card" style={{width: "20rem",marginLeft:'200px',marginTop:'10px',backgroundColor:"#0c1524"}}>

  <div class="card-body">

 

   <h6 style={{color:"white"}} class="card-title text-center">Harry Potter & the half blood prince</h6>

   

    <p style={{color:"white",fontFamily:"Times New roman"}}>

      Author: J.K Rowling<br/>

      Category: Novel

    </p>

   

    <img src={harry} style={{float:'right'}}></img>

    <a href="http://localhost:3000/preview">Preview</a><br/>

    <a href="http://localhost:3000/sub">Subcribe Now</a>

   

  </div>

</div>

 

<div class="card" style={{width: "20rem",marginTop:'10px',backgroundColor:"#0c1524"}}>

  <div class="card-body">

   <h6 style={{color:"white"}} class="card-title text-center">Harry Potter & the prisoniors of Azkaban</h6>

    <p style={{color:"white",fontFamily:"Times New roman"}}>

      Author: J.K Rowling<br/>

      Category:Novel

    </p>

    <img src={harry} style={{float:'right'}}></img>

    <a href="#">Preview</a><br/>

    <a href="#">Subcribe Now</a>

   

  </div>

</div>

 

<div class="card" style={{width: "20rem",marginTop:'10px',backgroundColor:"#0c1524"}}>

  <div class="card-body">

   <h6 style={{color:"white"}} class="card-title text-center">Harry Potter & the deathly hallows part 1</h6>

    <p style={{color:"white",fontFamily:"Times New roman"}}>

      Author: J.K Rowling<br/>

      Category:Novel

    </p>t

    <img src={harry} style={{float:'right'}}></img>

    <a href="#">Preview</a><br/>

    <a href="#">Subcribe Now</a>

   

  </div>

</div>

<div class="card" style={{width: "20rem",marginLeft:"200px",marginTop:'5px',backgroundColor:"#0c1524"}}>

  <div class="card-body">

   <h6 style={{color:"white"}} class="card-title text-center">Interstellar</h6>

    <p style={{color:"white",fontFamily:"Times New roman"}}>

      Author: R.K Pillai<br/>

      Category:Management

    </p>

    <img src={intersellar} style={{float:'right'}}></img>

    <a href="#">Preview</a><br/>

    <a href="#">Subcribe Now</a>

   

  </div>

</div>

<div class="card" style={{width: "20rem",marginTop:'5px',backgroundColor:"#0c1524"}}>

  <div class="card-body">

   <h6 style={{color:"white"}} class="card-title text-center">Corporate Chanakya</h6>

    <p style={{color:"white",fontFamily:"Times New roman"}}>

      Author: R.K.L.K<br/>

      Category:Technical

    </p>

    <img src={chanakya} style={{float:'right'}}></img>

    <a href="#">Preview</a><br/>

    <a href="#">Subcribe Now</a>

   

  </div>

</div>

<div class="card shadow" style={{width: "20rem",marginTop:'5px',backgroundColor:"#0c1524"}}>

  <div class="card-body">

   <h6 style={{color:"white"}} class="card-title text-center" >Learn Angular in 24 Hrs</h6>

    <p style={{color:"white",fontFamily:"Times New roman"}}>

      Author: J.K Rowling<br/>

      Category:Novel

    </p>

    <img src={angular} style={{float:'right'}}></img>

    <a href="#">Preview</a><br/>

    <a href="#">Subcribe Now</a>

   

  </div>

</div>
 



 

    </div>
</div>
  )

    }

 

 

export default Navigation;
