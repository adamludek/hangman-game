function PauseMenu({dispatch, category, playerAnswer, status, data}) {
  return (
    <div className="menu-bg">
      <div className="menu-bg">
        <div className="menu">
          <header>
            <h2>
              {!playerAnswer.some(el => el.includes("*")) && "You Win"}
              {status === "game-over" && "You Lose"}
              {status === "inGame" && playerAnswer.some(el => el.includes("*")) && "Paused"}</h2>
          </header>
          <nav>
            {status === "inGame" && playerAnswer.some(el => el.includes("*")) ? <button className="btn btn-pause-normal" onClick={() => dispatch({type: "pauseMenu"})}>Continue</button> : <button className="btn btn-pause-normal" onClick={() => dispatch({type: "setCategory", payload: {category: category, wordNum: Math.floor(Math.random() * data[category].length)}})}>Play again</button>}
            <button className="btn btn-pause-normal btn-long" onClick={() => dispatch({type: "newCategory"})}>New category</button>
            <button className="btn btn-pause-normal btn-pause-gradient" onClick={() => dispatch({type: "quit"})}> Quit game</button>
          </nav>
        </div>
      </div>
      </div>
  )
}

export default PauseMenu