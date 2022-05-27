import React from 'react';
// import my from '../../images/my.png'

const Protfolio = () => {
    return (
        <div className='container text-center'>
            <h2>My Protfolio</h2>
            <div className='row'>
            <div className='col'>
                {/* <img src={my} alt='my-img' className='img-fluid'/> */}
            </div>
            <div className='col'>
                <h3>Name: Subrata Sarker.</h3>
                <h3>Email: Tccdcc8@gmail.com.</h3>
                <h3>Education: Diploma in Medical Technology.</h3>
                <h3>Skills OF WEBDEVELOPING</h3>
                <ol>
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
        </div>
    );
};
// your name, email address, educational background, list of technologies or skills you have as a web developer. 
export default Protfolio;