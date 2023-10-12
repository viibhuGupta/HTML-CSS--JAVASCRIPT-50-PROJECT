import "./App.css"
const App = () => {
  return (
    <>

      <div>
            <nav className="Navbar">
                  <div className="logo">
                        <img src="/Images/brand_logo.png" alt="" />
                  </div>

                  <ul>
                        <li>Menu</li>
                        <li>Loaction</li>
                        <li>About</li>
                        <li>Contact</li>
                  </ul>

                  <div>
                        <button className="login">Login</button>
                  </div>
            </nav>

            <body>
                  <div className="body">
                     <div className="left-hero">
                     <div className="title">
                       <h1>
                              Your Feet Deserved the Best
                        </h1>
                       </div>

                       <div>
                        <p>
                              Your feet Deserved the best and where here to Help you with our Best Quality Shoees , Our Shoees are Best In The Current MArcket So you can Trust Our Product
                        </p>

                       <div className="Buy">
                       <button className="red-button">Shop Now</button>
                        <button>Category</button>
                       </div>

                        <div className="online-res">
                              <p>Also Available on </p>

                              <img src="/Images/flipkart.png" alt="" />
                              <img src="/Images/amazon.png" alt="" />
                        </div>
                       </div>
                     </div>



                       <div className="hero-shooes">
                        <img src="/Images/hero-image.png" alt="" />
                       </div>



                       

                  </div>
            </body>
      </div>
    </>
  );
};

export default App;

