import PropTypes from "prop-types"
import Logo from "./Logo";
import iconPlay from './assets/images/icon-play.svg'

StartScreen.propTypes = {
  dispatch: PropTypes.func,
}

export default function StartScreen({dispatch}) {
  return (
    <div className='start'>
        <Logo />
        <button className="btn btn-play" onClick={() => dispatch({type: "startGame"})}><img src={iconPlay} alt="Start game" /></button>
        <button className="btn btn-guide" onClick={() => dispatch({type: "guide"})}>HOW TO PLAY</button>
    </div>
  )
}
