import React from 'react';
import img1 from './profile-img.jpeg'
const Home = () => {
    return (
        <div className='about'>
            <div className='about-outside' >
                <div>
                    <p className='p-1'>Hi, my name is </p>
                    <p className='p-2'>Rocio Altair</p>
                    <p className='p-3'>I build things for the app</p>
                    <p className='p-4'>Flutter/iOS Developer mainly develops apps with flutter, with two years experience. Experienced in Swift/SwiftUI and Java. Keep learning about technologies such as Azure, RxSwift. I My goal is to become an integrated App developer.</p>
                </div>
                <img className='profile-img'  src={img1} alt="Girl in a jacket"></img>
            </div>
            <a href="https://www.canva.com/design/DAFiOWcaHnc/t6UbdHyHSeyulFNRJff8VQ/edit?utm_content=DAFiOWcaHnc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                <button type="button" class="btn btn-outline-success">Clicke here to view my CV</button> 
            </a>     
        </div>
    )
}

export default Home