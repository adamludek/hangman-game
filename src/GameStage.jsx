export default function GameStage({stage, index}) {
  return (
    <div className="stage">
        <header>
          <p>0{index+1}</p>
          <h6>{stage.stage.toUpperCase()}</h6>
        </header>
        <main>
            <p>{stage.text}</p>
        </main>
    </div>
  )
}
