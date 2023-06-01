'use client';
import React from 'react';
import vector from "../../../public/customerLogo/Vector.png";
import vector1 from "../../../public/customerLogo/Vector (1).png";
import vector2 from "../../../public/customerLogo/Vector (2).png";
import vector3 from "../../../public/customerLogo/Vector (3).png";
import amazon1 from "../../../public/customerLogo/From Amazon.com.png";
import amazon2 from "../../../public/customerLogo/From Amazon.com (1).png";
import amazon3 from "../../../public/customerLogo/From Amazon.com (2).png";
import aromix from "../../../public/customerLogo/aromix.png";
import fireli from "../../../public/customerLogo/fireli.png";
import martino from "../../../public/customerLogo/martino.png";
import natroma from "../../../public/customerLogo/Natroma.png";
import vertex from "../../../public/customerLogo/Vertex.png";
import rakibul from "../../../public/customerLogo/Vertex.png";
import Image from 'next/image';
const Customer = () => {
    const customers = [
        { logo:  vector , name: amazon1  },
        { logo:  vector1 , name:  amazon2 },
        { logo:  vector , name: amazon1  },
        { logo: vector1 , name: martino  },
        { logo:  vector1 , name:  amazon2 },
        { logo: vector1 , name: martino  },
        { logo:  vector1 , name:  amazon2 },
        { logo: vector1 , name: martino  },


    ]
   
    // const customer = customers.map = ((customer, index) => {
    //     return customer
    // })
    // console.log(customer)
    return (
        <div className='mt-24 w-3/4 mx-auto'>
            <h4 className='text-center text-white mb-8'>Trusted by nearly 5000+ paying customers</h4>
            {/* <div className='grid grid-cols-4 gap-6'>
                <div className='flex ml-10'>
                    <Image className='w-9 ' src={vector} height={200} width={500} ></Image>
                    <Image className='w-32' src={amazon1} height={200} width={500} ></Image>
                </div>
                <div className='flex ml-10'>
                    <Image className='w-9 ' src={vector2} height={200} width={500} ></Image>
                    <Image className='w-32' src={amazon2} height={200} width={500} ></Image>
                </div>
                <div className='flex ml-10'>
                    <Image className='w-9 ' src={vector3} height={200} width={500} ></Image>
                    <Image className='w-32' src={amazon3} height={200} width={500} ></Image>
                </div>
                <div className='flex ml-10'>
                    <Image className='w-9 ' src={vector} height={200} width={500} ></Image>
                    <Image className='w-32' src={aromix} height={200} width={500} ></Image>
                </div>
                <div className='flex ml-10'>
                    <Image className='w-9 ' src={vector} height={200} width={500} ></Image>
                    <Image className='w-32' src={fireli} height={200} width={500} ></Image>
                </div>
                <div className='flex ml-10'>
                    <Image className='w-9 ' src={vector} height={200} width={500} ></Image>
                    <Image className='w-32' src={natroma} height={200} width={500} ></Image>
                </div>
                <div className='flex ml-10'>
                    <Image className='w-9 ' src={vector} height={200} width={500} ></Image>
                    <Image className='w-32' src={amazon1} height={200} width={500} ></Image>
                </div>
                <div className='flex ml-10'>
                    <Image className='w-9 ' src={vector} height={200} width={500} ></Image>
                    <Image className='w-32' src={vertex} height={200} width={500} ></Image>
                </div>

            </div> */}

            <div>
            
                <div className='grid grid-cols-4 gap-6'>
                  {
                    customers.map((review, id) => <div
                        key={id}
                        review={review}
                        // className='mt-24 w-3/4 mx-auto'
                    >
                      <div className='flex ml-10'>
                    <Image className='w-9 ' src={review.logo} height={200} width={500} ></Image>
                    <Image className='w-32' src={review.name} height={200} width={500} ></Image>
                </div>  
                    </div>

                    )
                }  
                </div>
            
            </div>

        </div>
    );
};

export default Customer;