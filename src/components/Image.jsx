import Reveal from '../Animations/Reveal'
import RevealX from '../Animations/RevealX'
import  smile from '../images/smile.webp'

const Image=()=>{
  return(
    <div className='image'>
      <RevealX>
        <img src={smile} alt="image"/>
      </RevealX>
    </div>
  )
}

export default Image