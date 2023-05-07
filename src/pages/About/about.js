import React from 'react';
import img1 from './profile-img.jpeg'
const About = () => {
    return (
        <div className='about-outside' >
            <div style={{padding: '100px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <p style={{textAlign: 'left'}}  color="black" size="3">Hi, my name is </p>
            <font style={{textAlign: 'left'}} color="black" size="8">Rocio Altair</font>
            <font style={{textAlign: 'left'}} color="black" size="8">I build things for the app</font>
            <font style={{textAlign: 'left'}} color="black" size="2" >Flutter/iOS Developer mainly develops apps with flutter, with two years experience. Experienced in Swift/SwiftUI and Java. Keep learning about technologies such as Azure, RxSwift. I My goal is to become an integrated App developer.</font>
            </div>
            <img className='profile-img'  src={img1} alt="Girl in a jacket"></img>
        </div>
    )
}
export default About  