
import { FaStar } from 'react-icons/fa';
import {  useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
   
    const singleCrafts = useLoaderData();
   

    const {image,itemName,shortDescription,stockStatus,price,rating,customization,email,subcategory ,name}= singleCrafts || {};
   
   

   

    return (
        <div className='flex gap-5 my-16 border shadow-xl p-24 rounded-xl'>

            <img className='w-[400px] mx-auto h-[400px;] object-cover rounded-xl ' src={image} alt="" />
            <div>
                <h2 className='mb-5 text-5xl font-semibold'><span className='text-cyan-500 font-medium shadow-lg rounded-lg '> {itemName} </span> </h2>
               <div className='flex justify-between my-2'>
               <h2 className='btn btn-sm text-xl shadow-xl   text-gray-600 bg-gray-300'>Subcategory :<span className=''> {subcategory} </span> </h2>
                <h2 className='rounded-lg bg-gray-200 px-2  text-lg shadow-xl '>Stock Status : <span className='text-red-500 text-xl font-bold'> {stockStatus} </span> </h2>
               </div>
             
                <h2 className='text-xl font-semibold border-y py-2'>Description:  <span className=''> {shortDescription} </span> </h2>
                
               
                <div className='space-y-5 flex gap-16 border-y rounded-xl my-2'>
                <h2 className='btn btn-ghost text-3xl text-red-600 font-bold border-red-400 shadow-xl mt-10'>Price: <span className=''> {price} </span> </h2>
               <div className='py-2 '>
               <h2 className='btn w-[27rem] text-xl shadow-lg  '>Author Name:<span className='text-error'> {name} </span> </h2>
               <hr />
                 <h2 className='btn w-[27rem]  text-xl shadow-lg  '>Email: <span className='text-error'> {email} </span> </h2>
               </div>
                 
             </div>
                <div className='flex items-center  gap-5 my-4 '>
                    <h2 className='btn  text-lg shadow-lg '>Rating <span className='flex gap-2' > {rating}<FaStar className='text-yellow-400 text-2xl   items-center' /> </span> </h2>
                    <h2 className='btn text-lg'>Customization :<span className='text-success text-xl'> {customization} </span> </h2>
                </div>
              
            </div>

        </div>
    );
};



export default ViewDetails;
