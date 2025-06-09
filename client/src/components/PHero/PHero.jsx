import "./PHero.css";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import useProperties from "../../hooks/useProperties";
import { HiLocationMarker } from "react-icons/hi";
import PropertyCard from "../PropertyCard/PropertyCard";

const PHero = () => {
  const { data} = useProperties();
  const [filter, setFilter] = useState("");

  return (
    <section className="phero-wrapper">
      <video className="pbg-video" autoPlay loop muted playsInline poster='./11.png'>
                <source src='./glass_vid.mp4' type='video/mp4' />
            </video>
      
      
    </section>
  );
};

export default PHero;
