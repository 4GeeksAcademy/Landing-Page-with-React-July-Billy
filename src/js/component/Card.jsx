import React from 'react';

const Card = () => {
    return (
        <div className="card col-3 row mx-3 px-0 mb-5 mt-2" style={{width: '18rem'}}>
          <img className="card-img-top px-0" src="https://picsum.photos/seed/picsum/120/80" alt="Card image cap" />
          <div className="card-body d-flex flex-column align-items-center">
            <h5 className="card-title text-center">Card title</h5>
            <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <hr className="w-100 my-2"/>
            <a href="#" className="btn btn-primary mt-2">Find Out More!</a>
          </div>
        </div>
    );
}

export default Card;