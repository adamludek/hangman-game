import { Children } from "react";

export default function ScreenHeader({dispatch, action, icon, children}) {
  return (
    <header className="top-header">
        <button className="btn btn-header" onClick={() => dispatch(action)}><img src={icon} alt="Back to Menu"/></button>
        <h2>{children}</h2>
      </header>
  )
}
