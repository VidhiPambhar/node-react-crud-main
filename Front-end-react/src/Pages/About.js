import React from 'react'
import background from "../Components/assets/employee.png";

function About() {
  return (
 <>
 <div className='container emp-profile'>
 <section style={{marginTop:"5rem"}} className='d-flex align-items-center'>
      <div className='container-fluid nav_bg'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row'>
            <div className='col-md-6 pt-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
              <h1 style={{fontSize:"48px",fontWeight:"700"}}>
                Welcome to our  <strong className='brand-name text-primary'>About Us</strong>
              </h1>
              
              
            </div>
            <div className='col-lg-6 pt-6 order-1 order-lg-2 header-img'>
              <img src={background} style={{textAlign:"right"}} className="img-fluid animated" alt="dfd"/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 </div>
 </>
  )
}

export default About