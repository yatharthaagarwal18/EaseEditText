import React from "react"

export default function About(props) {

    let myStyle ={
      color: props.mode ==='dark'?'white':'black',
      backgroundColor: props.mode ==='dark'?'black':'white'
    }
  return (
   <div className="accordion" style={ {color: props.mode ==='dark'?'white':'black'}} id="accordionExample">
    <h1 className="my-3">About Us</h1>
  <div className="accordion-item">
    <h2 className="accordion-header" style={myStyle}>
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>User-Friendly Interface</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      If your text editor site has an intuitive and user-friendly interface, it can provide a positive user experience. A clean design, easy navigation, and well-placed features contribute to the overall usability, making it accessible for users of varying levels of expertise.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Versatile Text Manipulation Features</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      If your text editor offers a range of powerful text manipulation features, such as converting text to uppercase/lowercase, clearing text, copying to the clipboard, and undo/redo functionality (as per the previous example), users will appreciate the versatility and convenience for various writing and editing tasks.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Interactive and Informative Summary</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      If your text editor provides an interactive and informative summary of the text, such as word count, character count, and estimated reading time, it enhances the user's ability to analyze and understand their written content. These features can be particularly useful for writers, students, or anyone looking to manage and optimize their text content.
      </div>
    </div>
  </div>
</div>
  )
}
