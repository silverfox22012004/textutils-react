import React,{useState} from 'react'
//import Sanscript from "sanscript";
//import translate from "google-translate-api-browser";
export default function TextForm(props) {
    const[text,setText]=useState('');
    //text ="new text";wrong way to update text
    //setText("new text");right way to update text
    const handleUpClick = () =>{
        //console.log(text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase','success');
    }
    const handleDownClick = () =>{
      let newText2=text.toLowerCase();
      setText(newText2); 
      props.showAlert('Converted to lowercase','success');    
    }
    const handleClearText = () =>{
      let newText3="";
      setText(newText3);
    }
    const handleGrammar = () =>{
      let newText=text.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }).join(' ');
      setText(newText);
      props.showAlert('First Letter of every word is now Capital','success');
    }
    const handleTranslation = async () => {
      if (text.trim() === "") {
        props.showAlert("Please enter text to translate", "warning");
        return;
      }
    
      let apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|hi`;
    
      try {
        let response = await fetch(apiUrl);
        let data = await response.json();
        if (data.responseData.translatedText) {
          setText(data.responseData.translatedText);
          props.showAlert("Text translated to Hindi", "success");
        } else {
          props.showAlert("Translation failed. Try again later", "danger");
        }
      } catch (error) {
        console.error("Error translating text:", error);
        props.showAlert("Error translating text", "danger");
      }
    };
    
    

const handleTransliteration = async () => {
  if (text.trim() === "") {
    props.showAlert("Please enter text to transliterate", "warning");
    return;
  }

  let apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|hi`;

  try {
    let response = await fetch(apiUrl);
    let data = await response.json();

    if (data.responseData && data.responseData.translatedText) {
      setText(data.responseData.translatedText);
      props.showAlert("Text transliterated to Hindi", "success");
    } else {
      props.showAlert("Transliteration failed", "danger");
    }
  } catch (error) {
    console.error("Error transliterating text:", error);
    props.showAlert("Error in transliteration", "danger");
  }
};


    


    
    const handleExtraSpace = () =>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert('Extra space has been removed','success');
    }
    const copyText =() =>{
      var text=document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert('Copied to Clipboard','success');

    }
    const handleOnChange = (event) =>{
        console.log("On change");
        setText(event.target.value)
    }
    
     
    
  return (
    <>
    <div className={`container ${props.mode === 'dark' ? 'dark-mode' : ''}`}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea
        className="form-control"
        id="myBox"
        value={text}
        onChange={handleOnChange}
        style={{
            backgroundColor: props.mode === 'dark' ? '#343a40' : 'white', // Background color
            color: props.mode === 'dark' ? 'white' : 'black', // Text color
            caretColor: props.mode === 'dark' ? 'cyan' : 'black', // Cursor color
        }}
      placeholder="ENTER YOUR TEXT HERE"
      rows="8"></textarea>
      </div>
        <div id="buttoncontainer">   
          <button id='button-primary' onClick={handleUpClick}>Convert to uppercase</button>
          <button id="button-primary" onClick={handleDownClick}>Conver to lowercase</button>
          <button id="button-primary" onClick={handleGrammar}>First Letter Capital</button>
          <button id="button-primary" onClick={copyText}>Copy Text</button>
          <button id="button-primary" onClick={handleExtraSpace}>Remove Extra Space</button>
          <button id="button-primary" onClick={handleClearText}>Clear Text</button>
          <button id="button-primary" >Translate into Hindi <br />coming soon...</button>
          <button id="button-primary">Translate to Devnagri Script <br />coming soon...</button> 
          </div>
        </div>
    <div className="conatiner2 my-3">
      <h1>Your text summary</h1>
      <p> {text.split(" ").length}words and {text.length}characters</p>
      <p> you can read this in { 0.009 * text.split(" ").length} minutes</p>
      <h1>PREVIEW</h1>
      <p>{text.length>0?text:"Enter something in textbox to preview it here"}</p>
    </div>
    </>
  )
}
