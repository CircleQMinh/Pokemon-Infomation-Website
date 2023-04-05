import React from 'react'

function GlobalHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
        <img src="/static/img/logo.jpg" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
          Circle's PIW
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <a className="nav-link" href="/list">
              <i className="fa-solid fa-magnifying-glass"></i>
              <i className="fa-regular fa-rectangle-list"></i>Pokemon List
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-database"></i>Pokemon Data
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                  <a className="dropdown-item" href="/data/items">
                    Items
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/data/types">
                    Types
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/data/moves">
                   
                   Moves
                  </a>
                </li>
                <li className="dropdown-divider"></li>
                <li>
                  <a className="dropdown-item" href="/data/abilities">
                   Abilities
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link"  href="/battle"><i className="fa-brands fa-battle-net"></i>Random PKM Battle</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  href="/guess"><i className="fa-solid fa-circle-question"></i>PKM Guessing Game</a>
            </li>
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

export default GlobalHeader