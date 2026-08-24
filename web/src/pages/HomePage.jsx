import { Helmet } from 'react-helmet'
import Banner from '../components/Hero'
import FAQs from '../components/FAQs'
import Contact from '../components/Contact'
import Mission from '../components/Mission'
import Values from '../components/Values'
import About from '../components/About'
import Blog from '../components/Blog'
import Reviews from '../components/Reviews'
const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Trusted International Movers in the UAE</title>
        <meta
          name="description"
          content="Discover reliable global relocation services with expert movers in UAE. Safe packing, customs support, and secure shipping tailored for stress-free international moves."
        />
      </Helmet>
      <About/>
      <Mission/>
      <Values/>

      <Reviews/>
 
    </div>
  )
}

export default HomePage
