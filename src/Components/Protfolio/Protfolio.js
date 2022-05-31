import React from 'react';
import my from '../../images/my.jpg'

const Protfolio = () => {
    return (
        <div className='container text-start py-5'>
            <h1 className='text-center py-3'>My Protfolio</h1>
            <div className='row mx-auto '>
            <div className='col-sm-6'>
                <img src={my} alt='my-img' className='img-fluid'/>
            </div>
            <div className='col-sm-6 mt-3 mt-lg-5'>
                <h3>Name: Subrata Sarker.</h3>
                <h3>Email: Tccdcc8@gmail.com.</h3>
                <h3>Education: Diploma in Medical Technology.</h3>
                <h3>Skills for web developing</h3>
                <ol style={{fontSize:"25px"}}>
                    <li> HTML , HTML5</li>
                    <li> CSS , CSS3</li>
                    <li> BOOTSTRAP</li>
                    <li> JAVASCRIPT</li>
                    <li> ES6</li>
                    <li> REACT </li>
                    <li> NODE JS</li>
                    <li> MONGODB</li>    
                </ol>
            </div>
            </div>

        <div className='py-5'>
            <h2 className='text-center'> Some Project Link</h2>
            <div className='row'>
            <div className='col'>
            </div>
            <div className='col'>
            
            <ul >
                <li> <a target="_blank" href="https://assignment10new-hero.netlify.app">Doctor Service</a></li>
                <li>  <a target="_blank" href="https://assignment9new-hero.netlify.app">Support of Practice</a></li>
            </ul>

            </div>
            <div className='col'>
            </div>
            </div>
        </div>
        </div>
    );
};
// your name, email address, educational background, list of technologies or skills you have as a web developer. 
export default Protfolio;