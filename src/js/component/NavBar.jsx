import React from 'react';


const NavBar = () => {
  return(
  <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand text-light"href="#">Start Bootstrap</a>
    <button class="navbar-toggler border-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse text-light bg-dark" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#">Contact</a>
        </li>
        </ul>
    </div>
  </div>
</nav>
  )
};

export default NavBar;