import React, { useState } from 'react'

export default function About() {
   const [myStyle2, setMyStyle] = useState( {
    color: 'black',
    backgroundColor: 'white',
    width: '100%',
    align : 'center',
    margin: '0 auto',
    flexDirection: 'column',
    alignItems: 'center' 
   }  )
   const[btnText,setBtnText]=useState("Enable Dark Mode")
   const[btnStyle,setBtnStyle]=useState({
      color: 'white',
      backgroundColor: 'black'
   })
   function toggleStyle() {
    if (myStyle2.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        width: '100%',
        border : '1px solid white',
        align: 'center',
        margin: '0 auto',
        flexDirection: 'column',
        alignItems: 'center'
      })
      setBtnText("Enable Light Mode")
      setBtnStyle({
        color : 'black',
        backgroundColor: 'white'
      })
    }
    else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
        width: '100%',
        align: 'center',
        margin: '0 auto',
        flexDirection: 'column',
        alignItems: 'center'
      })
      setBtnText("Enable Dark Mode")
      setBtnStyle({
        color : 'white',
        backgroundColor: 'black'
      })
    }
  } 
  return (
    <div className='container my-2' style={myStyle2} >
    <div>
      <h1>About us</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle2}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle2} data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle2}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle2} data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle2}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle2} data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle2}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
    </div>
    <div className="dark my-2 mx-2" >
    <button onClick={toggleStyle} type="button" className='darklight' style={btnStyle}>{btnText}</button>
    </div>
    </div>
  )
}
