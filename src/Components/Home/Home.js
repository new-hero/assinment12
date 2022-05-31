import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews';
import Tool from '../Tool/Tool';

const Home = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://blooming-headland-33271.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    const sixTools=tools.slice(0, 6)
    return (
        <div>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
         <div className='tool-grid'>
             {
                 sixTools.map(tool=> <Tool tool={tool} key={tool._id}></Tool>)
             }
         </div>
            <Reviews></Reviews>
            <Footer></Footer>
         
        </div>
    );
};

export default Home;