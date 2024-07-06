import React from 'react';
import NavBar from './NavBar';
import Card from './Card';
import Jumbotron from './Jumbotron';
import Footer from './footer';


// Create your first component
const Home = () => {
  return (
    <div>
      <NavBar/>
    <div className="container col-10 p-0">
      <div className='col-12 mt-5 mx-auto' style={{justifyContent: 'center'}}>
      <Jumbotron />
      </div>
      <div className='row p-0 mx-auto mb-5'style={{justifyContent: 'center'}}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default Home;