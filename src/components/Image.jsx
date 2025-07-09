import Reveal from '../Animations/Reveal'
import  smile from '../images/smile.png'

const Image=()=>{
  return(
    <div className='image'>
      <Reveal>
        <img src={smile} alt="image"/>
      </Reveal>
    </div>
  )
}

export default Image