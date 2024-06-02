import { useState } from "react";
import img1 from "../../Assets/img01.jpg"
import img2 from "../../Assets/img1.jpg"
import img3 from "../../Assets/img2.jpg"
import img4 from "../../Assets/img3.jpg"
import img5 from "../../Assets/img4.jpg"
import img6 from "../../Assets/img5.jpg"

import "./style.css";


const cards = [
  {
    header: "India",
    image: img1,
    text: 'Alleppey',

},  
  {
        header: "New Zealand",
        image: img2,
        text: 'Bora Bora',

    },
    {
        header: "Indonesia",
        image: img3,
        text: 'Bali Island',

    },
    {
      header: "Canada",
      image: img4,
      text: `Columbia`,
    },
    
    {
      header: "Spain",
      image: img5,
      text: `Costa Brava`,
    },
    
    {
      header: "South Africa",
      image: img6,
      text: `Blyde River Canyon and Panorama Route`,
    },
    
];

export const Accordion = () => {
    const [active, setActive] = useState(0);
  
  
    return (
      
      <section>
         
        {cards.map((card, index) => {
          const isActive = active === index ? "active" : "";
          return (
            
            <article
              key={card.image}
              className={isActive}
              onClick={() => setActive(index)}
            >
              
                  
              <img src={card.image} />
              <div className="content">
                <span className="material-symbols-outlined"></span>
                <div>
                  <h2>{card.header}</h2>
                  <p>{card.text}</p>
                </div>
              </div>
            </article>
          );
        })}
    </section>
    );
  };
