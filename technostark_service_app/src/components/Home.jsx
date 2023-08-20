import React from 'react'
import {AiFillGoogleCircle , AiFillAmazonCircle , AiFillYoutube , AiFillInstagram} from 'react-icons/ai'
import vg from "../assets/2.webp"

//  css
import "../style/home.scss";

const Home = () => {
  return (
    <>
    <div className="home">

      <main>
      <h1>Technostark</h1>
      <p>we Provide Services Realated To Tech</p>
      </main>

    </div>

    <div className="home2">

      <img src={vg} alt="Graphics" />

      <div className="text">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto minus fuga aspernatur nostrum officia, cumque earum at? Porro consequatur esse adipisci itaque nostrum! Magni cupiditate, commodi odit iste repellendus aspernatur ratione porro harum quia, praesentium doloribus labore, minima omnis voluptas?</p>
      </div>
    </div>


    <div className="home3" id='about'>

      <div>
        <h1>who we are ?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, doloremque rerum. Facere earum tenetur consequatur repellat velit inventore mollitia quia assumenda enim quos, laudantium aspernatur, nostrum tempora rem ipsum aut accusantium voluptatem harum ipsam alias eaque ratione id! Laudantium molestiae necessitatibus culpa nulla id adipisci dicta, sapiente fugit veritatis, iusto ad nobis corrupti laborum illo facere porro distinctio earum in! Obcaecati nemo dolores tenetur, quam iusto accusantium tempore sed? Quos, saepe. Eligendi aliquam nam culpa accusantium unde incidunt ullam ab optio, fugiat iusto doloribus? Soluta, incidunt! Earum, explicabo, eaque vel reprehenderit quis nostrum quidem eveniet, rerum reiciendis debitis eligendi libero.</p>

      </div>

    </div>

<div className="home4">
    <div className="brands">
      <h1>Brands</h1>

      <div className="brandsLogo">
        <article>
          <div
          style={{
            animationDelay:"0.3s",
          }}
          >
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>
        </article>

        <article>
          <div
          style={{
            animationDelay:"0.3s",
          }}
          >
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
        </article>

        <article>
          <div
          style={{
            animationDelay:"0.3s",
          }}
          >
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>
        </article>

        <article>
          <div
          style={{
            animationDelay:"0.3s",
          }}
          >
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>
        </article>

      </div>
    </div>
    </div>

    </>
  )
}

export default Home
