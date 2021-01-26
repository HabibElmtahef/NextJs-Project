import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
       <nav className="navbar navbar-expand-lg navbar-light bg-light position-sticky">
  <div className="container-fluid">
    <Link  href="/">
    <a className="navbar-brand font-weught-bold">Ecom App</a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link  href="/">
          <a className="nav-link " aria-current="page"><i className="fas fa-store-alt"></i> Products</a></Link>
        </li>

        <li className="nav-item">
          <Link  href="/login"><a className="nav-link"><i className="fas fa-user"></i> Login</a></Link>
        </li>
        <li className="nav-item">
          <Link  href="/create"><a className="nav-link"><i className="fas fa-plus-circle"></i> Add Product</a></Link>
        </li>
        <li className="nav-item">
          <Link  href="/cart"><a className="nav-link"><i className="fas fa-shopping-cart"></i> Cart</a></Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        
    )
}

export default Navbar
