import React from 'react';
import NavBar from './NavBar';
import Card from './Card';
import Jumbotron from './Jumbotron';
import Footer from './footer';


// Create your first component
const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="container col-12 p-0">
        <div className='col-12 mt-5' style={{ justifyContent: 'center' }}>
          <Jumbotron />
          <div className='row p-0 mb-5' style={{ justifyContent: 'center'}}>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;