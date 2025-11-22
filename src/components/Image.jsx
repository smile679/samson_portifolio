import Reveal from '../Animations/Reveal'
import RevealX from '../Animations/RevealX'
import  smile from '../images/smile.webp'

const Image=()=>{
  return(
    <div className='image'>
      <RevealX>
        <img src={"https://res.cloudinary.com/dineyc77u/image/upload/v1763844322/smile_phcyvp.webp"} alt="image"/>
      </RevealX>
    </div>
  )
}

export default Image