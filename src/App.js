// import logo from './logo.svg';
 import './App.css';
 
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <div className="App">
//       <CustomNavbar/>
//     </div>
//   );
// }

// export default App;


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
// import HomePage from './HomeContent';
 
// import ExamplesGrid from './ExamplesGrid';
import { Typography } from '@mui/material';
import FeelGood from './pages/FeelGood';
// import FeelGood from './pages/FeelGood';

function App() {

  const [activeTab, setActiveTab] = useState('feel-good'); // Initialize with 'home'
  const [activeFeelState, setFeelingChosen] = useState('FeelingChosen'); // Initialize with 'home'

  const handleNavClick = (eventKey) => {
    setActiveTab(eventKey);
  };


  return (
    <div >
 
 {/* class="bg-image" 
    style={{backgroundImage: `url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg')`,height: 500}} */}

      <Navbar bg="primary" className="fixed-top" data-bs-theme="dark" style={{background: 'linear-gradient(45deg, #FF4081,#eeaeca)',marginBottom:30}}>
        <Container>
          <Navbar.Brand href="#feel-good"><Typography variant='h5' style={{fontFamily:"cursive"}}><strong>Our Positive Space</strong></Typography></Navbar.Brand>
          <Nav className="me-auto" activeKey={activeTab} onSelect={handleNavClick}>
            <Nav.Link eventKey="feel-good" href="#feel-good">
              Feel Good Chat
            </Nav.Link>
            <Nav.Link eventKey="blog" href="#blog">
              Positivity Blog
            </Nav.Link>
            {/* <Nav.Link eventKey="stories" href="#stories">
              Stories
            </Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>

   

    {activeTab === 'blog' && (
            <Container>
              {/* Content to display when 'Stories' is selected */}
              <div>
                <h2>Positivity Blog</h2>
                {/* Add your content here */}
              </div>
            </Container>
          )}

      {activeTab === 'feel-good' && (
              <Container style={{padding:10,marginBottom:30,marginTop:70}}>
                {/* Content to display when 'Stories' is selected */}
                <div>
                 
                  {/* <ExamplesGrid setFeeling={setFeeling}/> */}
                  
                  {/* <HomePage/> */}
                  {/* Add your content here */}
                   <FeelGood />
                </div>
              </Container>
            )}

      </div>
  );
}

export default App;