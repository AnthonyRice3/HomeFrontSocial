import React from 'react'
import {truncate} from 'lodash'

const PropertyCard = ({card}) => {
  return (
    <div className="flexColStart gap-[0.6rem] p-4 rounded-[10px] max-w-max mx-auto transition-all duration-300 z-0 relative hover:scale-[1.025] hover:shadow-custom hover:bg-gradient-to-b hover:from-transparent hover:to-[rgba(136,160,255,0.46)]">
      <img src={card.image} alt="fence" className="w-60 h-40 rounded-[10px] object-cover" />
      <span className="secondaryText">
        <span style={{ color: "orange" }}>$</span>
        <span>{card.price}</span>
      </span>
      <span className="primaryText text-xl font-semibold">{truncate(card.title, {length: 20})}</span>
      <span className="secondaryText w-60">{truncate(card.description, {length: 80})}</span>
    </div>
  )
}

export default PropertyCard