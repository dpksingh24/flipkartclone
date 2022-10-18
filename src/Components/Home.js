import React from "react";
import "../assets/css/Home.css";
import Product from "./Product";
import banner from "../assets/image/carousel2.jpg";
import led from "../assets/image/led.jfif";

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src={banner} alt='banner' />

        <div className='home__row'>
          <Product
            id='12321341'
            title='Hisense A73F 139 cm (55 inch) Ultra HD (4K) LED Smart Android TV with 102W JBL 6 Speakers, Dolby Vision and Atmos  (55A73F)'
            price={(45, 999)}
            rating={5}
            image={led}
          />
          <Product
            id='49538094'
            title='Lenovo Ideapad Gaming 3 Ryzen 5 Hexa Core 4600H - (8 GB/1 TB HDD/256 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650/60 Hz) 15ARH05 Gaming Laptop  (15.6 inch, Onyx Black, 2.2 kg)'
            price={(59, 990)}
            rating={4}
            image='https://rukminim1.flixcart.com/image/416/416/kk2wl8w0/computer/f/k/b/na-gaming-laptop-lenovo-original-imafzgdkvx9guy8q.jpeg?q=70'
          />
        </div>

        <div className='home__row'>
          <Product
            id='4903850'
            title='Apple Watch Series 3 GPS - 42 mm Space Grey Aluminium Case with Black Sport Band  (Black Strap, Regular)'
            price={(22, 900)}
            rating={5}
            image='https://rukminim1.flixcart.com/image/416/416/jmi22kw0/smartwatch/y/d/j/mtf32hn-a-apple-original-imaf9ec8ssmfcuxf.jpeg?q=70'
          />
          <Product
            id='23445930'
            title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric'
            price={98.99}
            rating={5}
            image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
          />
          <Product
            id='3254354345'
            title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
            price={599.99}
            rating={4}
            image='https://rukminim1.flixcart.com/image/416/416/kb5eikw0/tablet/z/q/x/apple-mxf52hn-a-original-imafskffwspv33zn.jpeg?q=70'
          />
        </div>

        <div className='home__row'>
          <h1
            style={{
              margin: "50px auto",
              textTransform: "uppercase",
              fontSize: "3rem",
            }}
          >
            Grocery
          </h1>
        </div>

        <div className='home__row'>
          <Product
            id='90829332'
            title='Rostaa Classic Almond Almonds  (35 g)'
            price={60}
            rating={3}
            image='https://rukminim1.flixcart.com/image/416/416/jhcatu80/nut-dry-fruit/g/f/q/35-almonds-35gm-mini-pack-combo-pouch-rostaa-original-imaf5cgzettwehw3.jpeg?q=70'
          />

          <Product
            id='90829375'
            title='Happilo 100% Natural Premium Californian Almonds  (100 g)'
            price={100}
            rating={4}
            image='https://rukminim1.flixcart.com/image/416/416/jqgy3rk0/nut-dry-fruit/p/t/g/100-100-natural-california-pouch-happilo-original-imafcgnkxtnghcec.jpeg?q=70'
          />
          <Product
            id='908293075'
            title='Optimum Nutrition Gold Standard 100% Protein Powder (907 g, Rocky Road)'
            price={(1, 848)}
            rating={4}
            image='https://rukminim1.flixcart.com/image/416/416/k8kiw7k0/protein-supplement/b/h/n/gold-standard-100-on266-optimum-nutrition-original-imafqk89ph5zdg5a.jpeg?q=70'
          />
          <Product
            id='90829376'
            title='Rajdhani Chakki Atta  (1 kg)'
            price={100}
            rating={4}
            image='https://rukminim1.flixcart.com/image/416/416/kc54ivk0/flour/h/w/f/1-chakki-atta-1-whole-wheat-flour-rajdhani-original-imaftcygzun4zzgh.jpeg?q=70'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
