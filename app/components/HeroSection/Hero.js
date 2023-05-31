import Image from 'next/image';
import istock from "../../../public/istockphoto-1131893484-612x612.jpg";
import Button from '../Button/Button';
import style from "../../hero.module.css";

const Hero = () => {
    return (
        <div className='w-3/4 mx-auto my-32'>
            <div className="hero  mb-20">
  <div className="hero-content flex-col lg:flex-row">
    <Image src={istock} height={500}width={1000} className='w-96 rounded-md'></Image>
    <div>
      <h1 className="text-4xl font-semibold">Create content efficiently and quickly with great AI writing tools</h1>
      <p className="py-6 text-xl">150k+ users. No Credit Card Required. Pro designs and writing at no cost. Start for free. Ai Writer Tool | Generate text for ecom, social media, website, sales, blogs etc.</p>
      <div className='w-64 '>

            <Button text={'Start 14 days free trial'} w='w-64'></Button>
            </div>
    </div>
    <div className={`${style.background1}`}></div>
  </div>
</div>


<div className="hero  ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Image src={istock} height={500}width={1000} className='w-96 rounded-md'></Image>
    <div>
      <h1 className="text-4xl font-semibold">Create content efficiently and quickly with great AI writing tools</h1>
      <p className="py-6 text-xl">150k+ users. No Credit Card Required. Pro designs and writing at no cost. Start for free. Ai Writer Tool | Generate text for ecom, social media, website, sales, blogs etc.</p>
      <div className='w-64 '>

            <Button text={'Start 14 days free trial'} w='w-64'></Button>
            </div>
    </div>
    <div className={`${style.background2}`}></div>
  </div>
</div>
        </div>
    );
};

export default Hero;