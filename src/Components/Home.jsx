import ban from '../assets/Images/banner-4.jpg'
import Banner from './Banner';
import Cards from './BrandCard/Cards';
import Footer from './Footer';
import Nav2 from './Nav2';

import NavBar from './NavBar';
import Section3 from './Section3';
import Section4 from './Section4';
const Home = () => {
  return (

    <section className='mx-auto'> 
      <div className="w-[1550px] h-[794px] relative bg-no-repeat bg-cover -top-[40px]" style={{ backgroundImage: `url(${ban}` }}>

      <Nav2></Nav2>

      <NavBar></NavBar>

      <Banner></Banner>

    </div>
    
       <Cards></Cards>
       <Section3></Section3>
       <Section4></Section4>
      <Footer></Footer>
    </section>



  );
};

export default Home;






