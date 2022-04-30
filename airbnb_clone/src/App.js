import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card"
import Data from "./data"

function App() {

  const card_data = Data.map(item=>{
    
    return <Card
        img = {item.coverImg}
        rating = {item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.country}
        title = {item.title}
        price={item.price}
      />
  });

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <section className="cards-list">
        {card_data}
      </section>
    </div>
  );
}

export default App;
