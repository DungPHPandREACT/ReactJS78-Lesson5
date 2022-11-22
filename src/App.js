import React, { useState } from 'react'

const App = () => {
  // const [tenState, hamCapNhatGiaTriState] = useState(giaTriKhoiTao)
  const [number, setNumber] = useState(0);
  const [colorRed, setColorRed] = useState("red");
  const [colorYellow, setColorYellow] = useState("");
  const [colorGreen, setColorGreen] = useState("");

  const cssFlex = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  }


  const handleChangeColor = () => {
    if(colorRed==="red"){
      setColorYellow("yellow");
      setColorRed("");
    } else if (colorYellow==="yellow"){
      setColorGreen("green");
      setColorYellow("");
    } else {
      setColorRed("red");
      setColorGreen("");
    }
  }

  return (
    <div>
      {/* <h1>{number}</h1>
      <button onClick={increaseNumber}>+</button> */}

      <div style={cssFlex}>
        <button style={{width: "70px", margin: "15px 0px"}} onClick={handleChangeColor}>Next</button>
        <div style={{display: "flex"}}>
          <div style={{width: "40px", height: "40px",borderRadius: "30px",border: "1px solid black", background: colorRed}}></div>
          <div style={{width: "40px", height: "40px",borderRadius: "30px",border: "1px solid black", background: colorYellow}}></div>
          <div style={{width: "40px", height: "40px",borderRadius: "30px",border: "1px solid black", background: colorGreen}}></div>
        </div>
      </div>
    </div>
  )
}

export default App