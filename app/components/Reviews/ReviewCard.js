import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaTwitter } from "react-icons/fa";


const ReviewCard = ({ review }) => {
    const { reviewDetails, name, image } = review;
    return (
        <div className=" shadow-xl grid justify-items-center">
            <div className="card-body items-center  bg-[#FFFFFF] rounded-md">
                <div className='flex bg-[#FFFFFF]'>
                 <Image
                    src={image}
                    height={150}
                    width={150}
                    alt="review"
                    className="rounded-full mr-4 w-10"
                ></Image>
                <h3 className="font-semibold bg-[#FFFFFF] text-black">{name}</h3>
                <FaTwitter className='text-blue-400 bg-blue-400 ml-7 mt-1'></FaTwitter>   
                </div>
                
                <>
                    <div className="flex mb-4">

                    </div>
                </>

                <p className='bg-[#FFFFFF] text-black'>{reviewDetails}</p>
                <p className='text-blue-500 bg-[#FFFFFF]'>#devs #tools</p>
            </div>
        </div>
        // <div className=" shadow-xl grid justify-items-center ">
        //     <div className='bg-[#FFFFFF] w-96 h-28'>
        //         <div className='bg-[#FFFFFF]'>
        //             {/* <Image className='w-100' src={image} height={200} width={200}></Image> */}
        //             <h3>Darrel steward</h3>
        //         </div>
        //     </div>

        // </div>
    );
};

export default ReviewCard;