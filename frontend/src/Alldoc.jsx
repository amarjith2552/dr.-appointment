import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Col, Row} from 'react-bootstrap'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardSubTitle,
    MDBCardText,
    MDBCardLink
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
function Alldoc() {
    const[data,setdata]=useState([])
    const base_url='http://localhost:4000/doctors'
    const fetchData=async()=>{
        const result=await axios.get(base_url)
        console.log(result.data);
        setdata(result.data)
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
        <Row>
        {
    data.map(item=>(
       <Col style={{padding:'18px',color:'white'}} sm={12} md={6} lg={4} xl={3}>
            <MDBCard className='bg-dark'>
            <MDBCardBody>
              <MDBCardTitle><h2>{item.name}</h2></MDBCardTitle>
              <MDBCardSubTitle><div style={{display:'flex'}}>
                <img src="https://cdn1.iconfinder.com/data/icons/medical-health-care-flat/33/male_doctor-1024.png" alt="" style={{height:'20px'}} />
                <h5>{item.specialty}</h5>
                </div>
             </MDBCardSubTitle>
              <MDBCardText>
               <div style={{display:'flex'}}>
                <img src="https://cdn-icons-png.flaticon.com/512/4320/4320350.png" alt="" style={{height:'20px'}} />
                 <h5>{item.hospital}</h5></div>
              
    <div style={{display:'flex'}}>
                   Rating : {item.rating}
                   <img src="https://cdn1.iconfinder.com/data/icons/web-interface-part-2/32/star-512.png" alt="" style={{height:'20px'}}/>
        
    </div>          </MDBCardText>
<Link to={`view/${item.id}`}>
                  <MDBCardLink style={{color:'black',borderRadius:'10px',backgroundColor:'lightcyan',padding:'8px'}} href=''>More Details</MDBCardLink>
    
</Link>            </MDBCardBody>
          </MDBCard>
       </Col>
    ))
}
        </Row>
        

    </div>
  )
}

export default Alldoc