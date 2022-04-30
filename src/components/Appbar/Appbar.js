import React from 'react'
const Appbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm   navbar navbar-dark bg-dark ">
        <div className="container-fluid ">
          <a className="navbar-brand " href="#">BANKER DAD</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end text-center" id="navbarSupportedContent">
            <ul className="navbar-nav active m-2">
              <li className="nav-item ">
                <a className="nav-link active m-2" aria-current="page" href="#">MINIT BADGE</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active m-2" href="#">TELEGRAM</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active m-2" href="#">RWITTER</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active m-2" href="#">DISCORD</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active m-2" href="#">$RANKER</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active m-2" href="#">INVENTORY</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active m-2" href="#">LITEPAPER</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Appbar