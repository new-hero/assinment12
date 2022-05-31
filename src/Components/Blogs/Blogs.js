import React from 'react';

const Blogs = () => {
    return (
        <div className='container text-start w-75 mx-auto'>
            <h2>How will you improve the performance of a React Application</h2>
            <p>Improve the performance of React Application by react component hooks like as react routers helps to make a single page application prevent browser reloading. use css framework like bootsrap , tailwind easily for responsive website use toast and many other service . react can make website easily  </p>
            <br/>
            <h2>What are the different ways to manage a state in a React application</h2>

            <p> React state some time change and some time not change . if a state be change in future on base in a condition.then use useStat hook for set a state it will be change in different condition like my age change in yearly, If a state may be not change then declear a variable.like my name it may be not change; </p>
            <h2> How does prototypical inheritance work?</h2>
            <p> prototypical inheritance work like a chain when a property can not find in a current component then for get this property go to upper level of component. this process running until found</p>
            <h2>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
            <p> If i declear a variable with const variable then this variable can not be change in react if i use useStat hook  different data set in this hook based on different condition  So useState is safe for a state</p>
            <h2>14.5 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?

            </h2>
            <p>
            use filter array method and use .includes('serachtext') for get name 
            
            </p>
        </div>
    );
};

export default Blogs;