import './css/style.css';

function App() {
  return (
    <div className="bg-dark text-white">

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">

          <a className="navbar-brand fw-bold fs-2" href="/">
            Pizza House
          </a>

          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menu">

            <ul className="navbar-nav me-auto">

              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>

            </ul>

            <form className="d-flex">
              <input
                className="form-control"
                placeholder="Search"
              />

              <button className="btn btn-danger ms-2">
                🔍
              </button>
            </form>

          </div>

        </div>
      </nav>

      {/* Banner */}

      <div className="hero">

        <div className="overlay">

          <h1>Neapolitan Pizza</h1>

          <p>
            If you are looking for traditional Italian pizza,
            the Neapolitan is the best option!
          </p>

        </div>

      </div>

      {/* Menu */}

      <div className="container py-5">

        <h1 className="mb-4">Our Menu</h1>

        <div className="row g-4">

          {/* Card 1 */}

          <div className="col-md-3">

            <div className="card pizza-card">

              <span className="badge bg-warning text-dark sale">
                SALE
              </span>

              <img
                src="/images/menu1.jpg"
                className="card-img-top"
                alt=""
              />

              <div className="card-body">

                <h5>Margherita Pizza</h5>

                <p>
                  <del>$40.00</del>
                  <span className="text-warning ms-2">
                    $24.00
                  </span>
                </p>

                <button className="btn btn-dark w-100">
                  Buy
                </button>

              </div>

            </div>

          </div>

          {/* Card 2 */}

          <div className="col-md-3">

            <div className="card pizza-card">

              <img
                src="/images/menu2.jpg"
                className="card-img-top"
                alt=""
              />

              <div className="card-body">

                <h5>Mushroom Pizza</h5>

                <p>$25.00</p>

                <button className="btn btn-dark w-100">
                  Buy
                </button>

              </div>

            </div>

          </div>

          {/* Card 3 */}

          <div className="col-md-3">

            <div className="card pizza-card">

              <span className="badge bg-warning text-dark sale">
                NEW
              </span>

              <img
                src="/images/menu3.jpg"
                className="card-img-top"
                alt=""
              />

              <div className="card-body">

                <h5>Hawaiian Pizza</h5>

                <p>$30.00</p>

                <button className="btn btn-dark w-100">
                  Buy
                </button>

              </div>

            </div>

          </div>

          {/* Card 4 */}

          <div className="col-md-3">

            <div className="card pizza-card">

              <span className="badge bg-warning text-dark sale">
                SALE
              </span>

              <img
                src="/images/menu4.jpg"
                className="card-img-top"
                alt=""
              />

              <div className="card-body">

                <h5>Pesto Pizza</h5>

                <p>
                  <del>$40.00</del>
                  <span className="text-warning ms-2">
                    $30.00
                  </span>
                </p>

                <button className="btn btn-dark w-100">
                  Buy
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Form */}

      <div className="container pb-5">

        <h1 className="text-center mb-4">
          Book Your Table
        </h1>

        <div className="row">

          <div className="col-md-4">
            <input
              className="form-control"
              placeholder="Your Name *"
            />
          </div>

          <div className="col-md-4">
            <input
              className="form-control"
              placeholder="Your Email *"
            />
          </div>

          <div className="col-md-4">
            <select className="form-select">
              <option>Select a Service</option>
            </select>
          </div>

        </div>

        <textarea
          className="form-control mt-4"
          rows="6"
          placeholder="Please write your comment"
        ></textarea>

        <button className="btn btn-warning mt-4">
          Send Message
        </button>

      </div>

    </div>
  );
}

export default App;