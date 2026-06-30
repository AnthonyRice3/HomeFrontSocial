import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import PHero from "../../components/PHero/PHero";

const staticProperties = [
  { id: "1", image: "./1.jpg", price: "1,200", title: "Wood Privacy Fence",      description: "Classic wood privacy fence for residential yards.", city: "Naples", country: "USA" },
  { id: "2", image: "./2.jpg", price: "1,800", title: "Chain Link Fence",         description: "Durable chain link fencing for commercial and residential use.", city: "Naples", country: "USA" },
  { id: "3", image: "./3.jpg", price: "2,500", title: "Aluminum Ornamental",      description: "Elegant aluminum ornamental fence with powder coat finish.", city: "Naples", country: "USA" },
  { id: "4", image: "./4.jpg", price: "3,200", title: "Vinyl Privacy Fence",      description: "Low-maintenance vinyl privacy fence in multiple styles.", city: "Naples", country: "USA" },
  { id: "5", image: "./1.jpg", price: "950",   title: "Pool Fence",               description: "Code-compliant pool enclosure fencing for safety.", city: "Naples", country: "USA" },
  { id: "6", image: "./2.jpg", price: "1,450", title: "Cedar Split Rail",         description: "Rustic cedar split rail fence for open properties.", city: "Naples", country: "USA" },
];

const Properties = () => {
  const [filter, setFilter] = useState("");

  const filtered = staticProperties.filter(
    (p) =>
      p.title.toLowerCase().includes(filter.toLowerCase()) ||
      p.city.toLowerCase().includes(filter.toLowerCase()) ||
      p.country.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="wrapper">
      <PHero />
      <div className="flexColCenter paddings innerWidth gap-8">
        <SearchBar filter={filter} setFilter={setFilter} />
        <div className="paddings flexCenter">
          {filtered.map((card, i) => (
            <PropertyCard card={card} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;