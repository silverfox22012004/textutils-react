// import React, { useState } from 'react';
// import Navbar from './Components/Navbar';
// import TextForm from './Components/TextForm';
// import About from './Components/About';
// import Alert from './Components/Alert';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'; // Import your existing CSS file
// import { createBrowserRouter , RouterProvider} from 'react-router-dom';

// function App() {
//   const router= createBrowserRouter([
//     {
//       path:"/",
//       element:<About/>
//     },
//   ])
//   const [mode, setMode] = useState('light');
//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type) => {
//     setAlert({ msg: message, type: type });
//     setTimeout(() => setAlert(null), 1000);
//   };

//   const toggleMode = () => {
//     if (mode === 'light') {
//       setMode('dark');
//       document.body.style.backgroundColor = '#343a40';
//       document.body.style.color = 'white';
//       showAlert('Dark Mode Has Been Enabled', 'success');
//       document.title = 'TextUtils - Dark Mode';
//     } else {
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       document.body.style.color = '#343a40';
//       showAlert('Light Mode Has Been Enabled', 'success');
//       document.title = 'TextUtils - Light Mode';
//     }
//   };

//   return (
//     <>
//       <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
//       <Alert alert={alert} />
//       <div className="container my-3">
//         {/* TextForm and About Components */}
//         <TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode} />
//         {/* <About /> */}
//       </div>

//       {/* Buttons or any other interactive elements */}
//       {/* <div id="buttoncontainer">
//         <button id="button-primary" onClick={toggleMode}>
//           Toggle Mode
//         </button>
//         <button className="darklight" onClick={toggleMode}>
//           Dark/Light
//         </button>
//       </div> */}
//     </>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css'; // Import your existing CSS file

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      document.body.style.color = 'white';
      showAlert('Dark Mode Has Been Enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#343a40';
      showAlert('Light Mode Has Been Enabled', 'success');
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

