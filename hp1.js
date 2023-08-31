import React from 'react'
import { useState } from 'react'
import Picture1 from './Picture1 (2).png'
import book from './book.png'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {RxDashboard} from 'react-icons/rx'
import {MdContentPasteSearch} from 'react-icons/md'
import {GiSandsOfTime} from 'react-icons/gi'
import harry from './harry.png'

function HP1(){
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
 
 <div class="Container border border-dark rounded border border-2 d-flex flex-column" style={{maxHeight:'70vh',width:'180vh',marginLeft:'180px'}}>
<div>
    <h6 class="card-title text-center">Harry Potter & the prisoniors of Azkaban​</h6>
    <button class="btn" type="submit" ><a href="http://localhost:3000/list">back</a></button>

</div>
<div class="d-flex " style={{margin:"10px",backgroundColor:'#0c1524'}}>
<div >
    <p style={{color:'white',width:'200px',fontSize:"14px"}}>
    Author: J.K Rowling<br/>
      Category:Novel<br/>
      Publisher: Potter More​<br/>
      Date Published : 8 July 1999​<br/>
      Points :  200​
    </p>
    </div>
<div >
<p style={{color:'white',fontSize:"14px"}}>Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).​</p>
    <div>
    <button onClick={handleButton}>Read</button>
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
    <h6 class="card-title text-center">Harry Potter & The Half Blood Prince (Plot)​</h6>
 
</div>

<div style={{margin:'10px',backgroundColor:'#0c1524'}}>
<p style={{color:'white',fontSize:"14px"}}>The central character in the series is Harry Potter, a boy who lives in the fictional town of Little Whinging, Surrey with his aunt, uncle, and cousin – the Dursleys – and discovers at the age of eleven that he is a wizard, though he lives in the ordinary world of non-magical people known as Muggles.[8] The wizarding world exists parallel to the Muggle world, albeit hidden and in secrecy. His magical ability is inborn, and children with such abilities are invited to attend exclusive magic schools that teach the necessary skills to succeed in the wizarding world.[9]​

Harry becomes a student at Hogwarts School of Witchcraft and Wizardry, a wizarding academy in Scotland, and it is here where most of the events in the series take place. As Harry develops through his adolescence, he learns to overcome the problems that face him: magical, social, and emotional, including ordinary teenage challenges such as friendships, infatuation, romantic relationships, schoolwork and exams, anxiety, depression, stress, and the greater test of preparing himself for the confrontation that lies ahead in wizarding Britain's increasingly-violent second wizarding war.[10]​

Each novel chronicles one year in Harry's life[11] during the period from 1991 to 1998.[12] The books also contain many flashbacks, which are frequently experienced by Harry viewing the memories of other characters in a device called a Pensieve.​

The environment Rowling created is intimately connected to reality. The British magical community of the Harry Potter books is inspired by 1990s British culture.​</p>   
    
 
</div>

</div>)}
</div>
  
    )

    
}

export default HP1;
