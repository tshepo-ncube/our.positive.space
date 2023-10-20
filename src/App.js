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

const styles = {
  div: {
    backgroundColor: '#fff',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
  },
  h1: {
    color: '#333',
    fontSize: '24px',
    margin: '0 0 20px',
  },
  p: {
    color: '#666',
    fontSize: '16px',
    lineHeight: '1.5',
    margin: '0 0 15px',
  },
};


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
              home
            </Nav.Link>
            {/* <Nav.Link eventKey="blog" href="#blog">
              blog
            </Nav.Link> */}
            {/* <Nav.Link eventKey="stories" href="#stories">
              Stories
            </Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>

   

    {activeTab === 'about' && (
            <Container>
                      <div style={styles.div}>
              <h1 style={styles.h1}>The Power of Affirmations</h1>
              <p style={styles.p}>
                Affirmations are positive statements that can transform your mindset and well-being. They work by reshaping your thoughts and beliefs, promoting self-confidence, reducing stress, and increasing motivation.
              </p>
              <p style={styles.p}>
                Create effective affirmations by making them positive, present-tense, and specific. Repeat them daily for the best results. Belief in your affirmations is essential for their success.
              </p>
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