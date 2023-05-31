
import style from '../../banner.module.css';
import Button from '../Button/Button';
import Link from 'next/link';
import icon from '../../../public/Icon.png'
import Image from 'next/image';

const Banner = () => {
    return (
        <div className=''>
         <div className={`w-3/4 mx-auto ${style} `}>
            <div className=''>
              <h1 className='font-medium text-center md:text-6xl mt-32'>Write better <br/>
                Content for you <br/>
                <span className='font-extrabold  text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#FFC947] to-[#FC6739] md:text-6xl'>Facebook Ads</span>
                <hr className='bg-gradient-to-r h-[2px] w-36 mx-auto from-[#FFC947] to-[#FC6739]'/>
                </h1> 
                <p className='text-center my-10'>Artificial intelligence writting tool helps you create blogs, <br/>social media websites and much more.</p>
            </div>
            <div className='w-64 mx-auto'>

            <Button text={'Start 14 days free trial'} w='w-64'></Button>
            </div>

            <div className='flex w-36 mx-auto mt-4'>
                <div className='mt-1'><Image src={icon} height={14} width={14} ></Image></div>
                <div><Link href={'/'} className='text-base flex'>  <span className='ml-2 '>Watch a demo</span> </Link></div>
            </div>
            
            <div className={`${style.banner} mx-auto `}>
                
            </div>
            <div className={`${style.hh} mx-auto `}>
                
            </div>
        </div>   
            <hr className='h-[1px] bg-[#252835] mt-32'/>
        </div>
        
    );
};

export default Banner;