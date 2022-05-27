import React, { useEffect, useState } from 'react';
import Tool from '../Tool/Tool';


const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('tools.json')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className='container text-center py-5'>
            
                <h2 className='py-4'> All Tools</h2>
                <div  className='tool-grid'>
                    {
                        tools.map(tool => <Tool tool={tool} key={tool._id}></Tool>)
                    }
                </div>
           

        </div>
    );
};

export default Tools;