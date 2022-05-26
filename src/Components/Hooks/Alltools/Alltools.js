import React, { useState } from 'react';
import a from '../../../images/a.png';
import b from '../../../images/b.png';
import c from '../../../images/c.png';
import d from '../../../images/d.png';
import e from '../../../images/e.png';
import f from '../../../images/f.png';
import g from '../../../images/g.png';
import h from '../../../images/h.png';
import Tool from '../../Tool/Tool';

const Alltools = () => {
   const [tools, setTool] = useState([])
    const toolArray=[
        {
            _id:1,
            name: "Hammer",
            img:{a},
            description: "Essential Tool",
            quantity:500, 
            price:150
        },
        {
            _id:2,
            name: "Hammer",
            img:{b},
            description: "Essential Tool",
            quantity:500, 
            price:150
        },
        {
            _id:3,
            name: "Hammer",
            img:{c},
            description: "Essential Tool",
            quantity:500, 
            price:150
        },
        {
            _id:4,
            name: "Hammer",
            img:{d},
            description: "Essential Tool",
            quantity:500, 
            price:150
        },
        {
            _id:5,
            name: "Hammer",
            img:{e},
            description: "Essential Tool",
            quantity:500, 
            price:150
        },
        {
            _id:6,
            name: "Hammer",
            img:{f},
            description: "Essential Tool",
            quantity:500, 
            price:150
        },
        {
            _id:7,
            name: "Hammer",
            img:{g},
            description: "Essential Tool",
            quantity:500, 
            price:150
        },
        {
            _id:8,
            name: "Hammer",
            img:{h},
            description: "Essential Tool",
            quantity:500, 
            price:150
        } 
    ]
    return [ ];
    };
    
    export default Alltools;
    // <div>
    //     {
    //         tools.map(tool=> <Tool tool={tool} key={tool._id}></Tool>)
    //     }            
    // </div>

    // {
    //     "img":"https://cdn.vox-cdn.com/thumbor/vyv2NP627YwPyjG9lf4kFcx_yfg=/0x0:3600x2329/920x0/filters:focal(0x0:3600x2329):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22990299/Hammer_61_ycYjtYGL._AC_SL1500_.jpg",
    //     "name": "Hammer",
    //     "description": "Essential Tool",
    //     "quantity":500, 
    //     "price":150
    // }