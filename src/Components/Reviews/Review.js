import React from 'react';
import { toast } from 'react-toastify';

const Review = () => {
    const handleCreate = event => {
        event.preventDefault()

        toast('Dont worry This function update soon')
    }

    return (
        <div style={{ maxWidth: "400px", color: "white" }} className='mx-auto p-3 bg-secondary mt-5 '>

            <form className='p-4' onSubmit={handleCreate}>
            <p className='text-center m-2'> <input className='text-center rounded' type='text' placeholder='Your name' /> </p>
            <p className='text-center m-2'> <input className='text-center rounded' type='text' placeholder='description' /> </p>
            <p className='text-center m-2'> <input className='text-center rounded' type='submit' value='create review' /> </p>

            </form>

        </div>
    );
};

export default Review;