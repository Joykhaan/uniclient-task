import Image from 'next/image'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Customer from './components/Customers/Customer'
import Footer from './components/Footer/Footer'
import Hero from './components/HeroSection/Hero'
import Package from './components/Package/Package'


export default function Home() {
  return (
    <>
    <Header></Header>
    <Banner></Banner>
    <Customer></Customer>
    <Hero></Hero>
    <Package></Package>
    <Footer></Footer>
    </>
    
  )
}
