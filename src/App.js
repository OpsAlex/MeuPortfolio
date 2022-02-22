import React from 'react';
import 'style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from 'sendEmail';

function App() {
  return (
    <div className="App">
      <div className="container">
        <ContactUs/>
      </div>
    </div>
  );
}

export default App;