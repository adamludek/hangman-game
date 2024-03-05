import ScreenHeader from "./ScreenHeader"
import iconMenu from "./assets/images/icon-menu.svg"
import iconHeart from "./assets/images/icon-heart.svg"
import PauseMenu from "./PauseMenu"


export default function InGameScreen({dispatch, category, playerAnswer, playerLifes, usedKeys, onPauseMenu, status, data}) {
  return (
    <>
    <div className="guide in-game">
        <ScreenHeader dispatch={dispatch} action={{type: "pauseMenu"}} icon={iconMenu}><h2>{category}</h2><div className="life-container"><progress max={8} value={playerLifes}/><img src={iconHeart} alt="Heart"/></div></ScreenHeader>
        <main>
            <div className="words-container">
              {playerAnswer.map((word, index) => <div key={word+index} >{[...word].map((letter, index) => <div key={letter+index} className={`letter ${letter === "*" ? "disabled" : ""} `}>{letter !== "*" && letter}</div>)}</div>)}
            </div>
            <div className="keys-container">
                {Array.from({length: 26}, (_, i) => String.fromCharCode(65 + i)).map(letter => <button key={letter} className={"btn key"} onClick={() => dispatch({type: "checkLetter", payload: letter.toLowerCase()})} disabled={ !playerAnswer.some(el => el.includes("*")) || status === "game-over" || usedKeys.includes(letter.toLowerCase())}>{letter}</button>)}
            </div>
        </main>
    </div>
    {onPauseMenu && <PauseMenu dispatch={dispatch} data={data} category={category} playerAnswer={playerAnswer} status={status}/>}
    </>
  )
}
