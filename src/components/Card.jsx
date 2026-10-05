import React from "react";
import App from "../App";
import { useCards } from "../context/CardContext";

function Card({ id, title, description, date, image }) {

      const { removeCard } = useCards();
  return (
    <div className="relative bg-white shadow-md p-4 w-full h-90">

   
      <button 
      onClick={()=> {removeCard(id)}}
      className="absolute top-2 right-2 text-red-400 text-2xl">
        X
      </button>

      <h2 className="font-bold text-lg pr-5">
        {title}
      </h2>

      <p className="text-gray-600 text-sm mt-2">
        {description}
      </p>

      <p className="text-gray-400 text-xs mt-3">
        {date}
      </p>

   
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover rounded mt-3  hover: cursor-pointer 
        hover: shadow-amber-200
        "
      />

    </div>
  );
}

export default Card;