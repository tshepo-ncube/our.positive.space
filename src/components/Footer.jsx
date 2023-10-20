import React, { Component } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
class Footer extends Component {

    
  render() {
    const handleIgEvent = ()=> {
        const instagramUrl = 'https://www.instagram.com/our.positive.space/'; // Replace with your Instagram URL
        window.open(instagramUrl, '_blank');
    }
    return (
        <footer
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          backgroundColor: 'white',
          textAlign: 'center',
        }}
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social media:</span>
          </div>
          <div>
             
            <a href="#" className="me-4 link-secondary">
              <i className="fab fa-instagram"></i>
              <InstagramIcon onClick={handleIgEvent} />
            </a>
             
          </div>
        </section>
      </footer>
      
    );
  }
}

export default Footer;
