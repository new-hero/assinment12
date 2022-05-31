import React, { useEffect, useState } from 'react';
import Managetool from './Managetool';

// http://localhost:5000
const Managetools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className='container text-center py-5'>
            
        <h2 className='py-4'> All Tools</h2>
        <div  className='tool-grid'>
            {
                tools.map(tool => <Managetool tool={tool} key={tool._id} ></Managetool> )
            }
        </div>
   

</div>
    );
};

export default Managetools;