import Logo from "./Logo";
import iconPlay from './assets/images/icon-play.svg'

export default function StartScreen() {
  return (
    <div className='start'>
        <Logo />
        <button className="btn-play"><img src={iconPlay} alt="" /></button>
    </div>
  )
}
