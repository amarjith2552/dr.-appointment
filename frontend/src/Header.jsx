import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup,
} from 'mdb-react-ui-kit';


function Header() {
  return (
    <div>
       <MDBNavbar bgColor='info' >
        <MDBContainer fluid>
        <MDBNavbarBrand href='/'>
            <img
              src='https://images.squarespace-cdn.com/content/v1/5ec5ef6eb94695070cec754a/1661132559516-AGS2E98KDAYLTI93W2FX/Artboard+1.png?format=1000w'
              height='80'
              alt=''
              loading='lazy'
            />            
            <img src="https://www.simplewellness.com.au/uploads/4/7/0/4/47040385/rowville-myotherapy-remedial-massage-make-an-appointment-1_orig.png" alt="" style={{width:'400px'}} />
          </MDBNavbarBrand>
          <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
          <input className='form-control' placeholder="Search" aria-label="Search" type='Search' />
          <MDBBtn color='success'>Search</MDBBtn>
        </MDBInputGroup>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header