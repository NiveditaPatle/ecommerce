import HeroSection from './Components/HeroSection'
import { useProductContext } from './context/productcontext';


const About = () => {

  const {myName} = useProductContext();

  return (
    <>
     <h6>{myName}</h6>
      <HeroSection name='NP Ecommerce'/>
    </>
  )
};

export default About
