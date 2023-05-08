import React from 'react';
import Fade from "react-reveal";
import img1 from './profile-img.jpeg'

const About = () => {
    return (
        <section id="about">
          <Fade duration={1000}>
            <div className="row">
              <div className="three columns">
                <img className='profile-pic'  src={img1} alt="Girl in a jacket"></img>
              </div>
              <div className="nine columns main-col">
                <h2>About Me</h2>
  
                <p>lutter/iOS Developer mainly develops apps with flutter, with two years experience. Experienced in Swift/SwiftUI and Java. Keep learning about technologies such as Azure, RxSwift. I My goal is to become an integrated App developer.</p>
                <div className="row">
                  <div className="columns contact-details">
                    <h2>Contact Details</h2>
                    <p className="address">
                      <span>Rocio Altair</span>
                      <br />
                      <span>Taipei</span>
                      <br />
                      <span>+886 970129378</span>
                      <br />
                      <span>rocioaltair01@gmail.com</span>
                    </p>
                  </div>
                  <div className="columns download">
                    <p>
                      {/* <a href={resumeDownload} className="button">
                        <i className="fa fa-download"></i>Download Resume
                      </a> */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </section>
      );
    
}
export default About  

// import React from 'react';
// import img1 from './profile-img.jpeg'
// const About = () => {
//     return (
//         <div className='about'>
//             <div className='about-outside' >
//                 <div>
//                     <p className='p-1'>Hi, my name is </p>
//                     <p className='p-2'>Rocio Altair</p>
//                     <p className='p-3'>I build things for the app</p>
//                     <p className='p-4'>Flutter/iOS Developer mainly develops apps with flutter, with two years experience. Experienced in Swift/SwiftUI and Java. Keep learning about technologies such as Azure, RxSwift. I My goal is to become an integrated App developer.</p>
//                 </div>
//                 <img className='profile-img'  src={img1} alt="Girl in a jacket"></img>
//             </div>
//             <a href="https://www.canva.com/design/DAFiOWcaHnc/t6UbdHyHSeyulFNRJff8VQ/edit?utm_content=DAFiOWcaHnc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
//                 <button type="button" class="btn btn-outline-success">Clicke here to view my CV</button> 
//             </a>
//         </div>
//     )
// }
// export default About 