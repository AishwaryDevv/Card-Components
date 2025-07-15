"use client";
// import * as motion from "motion/react-client"
import { useEffect, useState } from "react"
import './App.css'
import Usercard from './components/Usercard/Usercard.jsx'
import Andrew from './assets/andrew3.jpeg'
import Alex from './assets/alex.jpeg'  
import Tristan from './assets/tristan.jpg'
import Navbar from './components/Navbar/Navbar.jsx'
import David from './assets/david.png'
import Jordan from './assets/jordan.avif'
import Patrick from './assets/Patrick2.jpg'
import Joe from './assets/joe.png'
import Elon from './assets/elon.jpg'
import Robert from './assets/Robert.webp'
import { motion } from "framer-motion";


// Background color logic - changes on each refresh
const backgroundColors = ['#2F5249', '#CB0404', '#FF2E63','#183D3D','#142850'];
const headerColors = [ '#B3E5FC'];

//<p className="Text">Hello My name is Aishwary G</p> 
function App() {

  useEffect(() => {
    const randomColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
    document.body.style.backgroundColor = randomColor;

    const randomHeaderColor = headerColors[Math.floor(Math.random() * headerColors.length)];
    const headerElement = document.querySelector('.mainheader');
  headerElement.style.backgroundColor = randomHeaderColor;
  headerElement.style.borderRadius = '20px';

  // Decide text color based on how light the header color is
  if (
    //randomHeaderColor === '#F1F8E9' || 
    //randomHeaderColor === '#FFE082' || 
    randomHeaderColor === '#D1C4E9' || 
    randomHeaderColor === '#B3E5FC'
  ) {
    headerElement.style.color = '#3B060A';
  } else {
    headerElement.style.color = '#3B060A';
  }
},  []); 


  const cards = [
    { name: "Alex Hurmoji",       desc: "Aquisition.com",     img: Alex ,   href: "https://www.acquisition.com/bio-alex"},
    { name: "Andrew Tate",        desc: "Hustlers.com",       img: Andrew , href:"https://en.wikipedia.org/wiki/Andrew_Tate"},
    { name: "Tristan Tate",       desc: "Rizzler.com",        img: Tristan, href:"https://www.instagram.com/notalismntate/?hl=en"},
    { name: "David Googins",      desc: "Can'thurtme.com",    img: David ,  href:"https://en.wikipedia.org/wiki/David_Goggins" },
    { name: "Jordan B. Peterson", desc: "Psycology.com",      img: Jordan,  href:"https://en.wikipedia.org/wiki/Jordan_Peterson" },
    { name: "Patrick Bet-David",  desc: "Businessman.com",    img: Patrick, href:"https://en.wikipedia.org/wiki/Patrick_Bet-David" },
    { name: "Joe Rogan",          desc: "Podcast.com",        img: Joe ,    href:"https://en.wikipedia.org/wiki/Joe_Rogan"},
    { name: "Elon Musk",          desc: "Wealth.com",         img: Elon ,   href:"https://en.wikipedia.org/wiki/Elon_Musk"},
    { name: "Robert Greene",      desc: "Writer.com",         img: Robert,  href:"https://en.wikipedia.org/wiki/Robert_Greene_(American_author)" },
    //{ name: "Rudra P Sinha",      desc: "Tech.com",           img: Robert,  href:"https://x.com/rudrapsinha" },
  ];

  //ToggleSwitch
//   const [isOn, setIsOn] = useState(false)
//   const toggleSwitch = () => setIsOn(!isOn)

//   const container = {
//     width: 70,
//     height: 35,
//     //backgroundColor: "var(--hue-3-transparent)",
//     backgroundColor:"white",
//     borderRadius: 50,
//     cursor: "pointer",
//     display: "flex",
//     padding: 3,
// }

// const handle = {
//     width: 25,
//     height: 25,
//     backgroundColor: "#9911ff",
//     borderRadius: "50%",
// }

  // return (
  //   <>
  //      <motion.div 
  //         initial={{ y: -50, opacity: 0 }}
  //         animate={{ y: 0, opacity: 1 }}
  //         transition={{ duration: 0.6 }}>
  //           <p className="mainheader">
  //             <Navbar heading="Master's in Life."/>
  //           </p>
  //      </motion.div>
  //     <div className="container" >
  //       <div className="minicontainer" > 
        
  //       <motion.div whileHover={{ scale: 1.03}} whileTap={{ scale: 0.95 }}>
  //         <Usercard name="Alex Hurmoji" desc="Aquisition.com" image={Alex} style={{"border-radius":"15px"}}/>
  //         </motion.div>

  //         <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
  //         <Usercard name="Andrew Tate"  desc="Hustlers.com" image={Andrew} style={{"border-radius":"15px"}}/>
  //         </motion.div>

  //         <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
  //         <Usercard name="Tristan Tate" desc="Rizzler.com" image={Tristan} style={{"border-radius":"15px"}}/>
  //           </motion.div>

  //           <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
  //           <Usercard name="David Googins" desc="Can'thurtme.com" image={David} style={{"border-radius":"15px"}}/> 
  //           </motion.div>

  //           <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
  //           <Usercard name="Jordan B. Peterson" desc="Psycology.com" image={Jordan} style={{"border-radius":"15px"}}/>
  //           </motion.div>

  //           <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
  //           <Usercard name="Patrick Bet-David" desc="Businessman.com" image={Patrick} style={{"border-radius":"15px"}}/>
  //           </motion.div>

  //           <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
  //           <Usercard name="Joe Rogan" desc="Podcast.com" image={Joe} style={{"border-radius":"15px"}}/> 
  //           </motion.div>

  //           <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
  //           <Usercard name="Elon Musk" desc="Wealth.com" image={Elon} style={{"border-radius":"15px"}}/>
  //           </motion.div>
         
  //           <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
  //           <Usercard name="Robert Greene" desc="Writer.com" image={Robert} style={{"border-radius":"15px"}}/>
  //           </motion.div>
          
  //      </div>
  //     </div>
  //     </>
  // )
  return (
    <>

{/* <label>
  <input type="radio" class="appearance-none forced-colors:appearance-auto" />
  <p class=" forced-colors:block">Cyan</p>
  <div class=" forced-colors:blue ">test </div>
  <div class="bg-cyan-500 forced-colors:red ">test</div>
</label> */}

      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mainheader">
          <Navbar heading="Master's in Life."/>
        </div>
      </motion.div> 


    {/* initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }} */}

      {/* <motion.p
    initial={{ opacity: 0, scale: 0.6 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="hero-heading"
  >
    Welcome to My Page
  </motion.p> */}



      <p className="subheader">
        A collection of modern thinkers, creators, and entrepreneurs I learn from.

        {/* Toggle Switch for Dark Mode */}
      {/* <button
            className="toggle-container"
            style={{
                ...container,
                justifyContent: "flex-" + (isOn ? "start" : "end"),
            }}
            onClick={toggleSwitch}
        >
            <motion.div
                className="toggle-handle"
                style={handle}
                layout
                transition={{
                    type: "spring",
                    visualDuration: 0.2,
                    bounce: 0.2,
                }}
            />
        </button> */}

        {/*Toggle Switch End*/}
      </p>

      <div className="container">
        <div className="minicontainer">
          {cards.map((card) => (
           
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Usercard 
                  name={card.name} 
                  desc={card.desc} 
                  image={card.img}
                  href={card.href}
                  // {...card}
                  style={{ borderRadius: "15px" }}
                />
              </motion.div>
          ))}
        </div>
      </div>
      <footer className="footer">
        <p>© 2025 Aishwary B. Inspired by Modern Masters.</p>
      </footer>
    </>
  )
}


export default App
