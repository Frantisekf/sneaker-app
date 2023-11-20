import React from "react";
import { Sneaker } from "@/utils/types";

type SneakerCardProps = {
    sneaker: Sneaker;
    onDelete: () => void;
}

const SneakerCard: React.FC<SneakerCardProps> = ({ sneaker, onDelete }) => { 
    return (
        <div className="w-[424px] h-[202px] mt-4 ml-1 p-6 bg-white rounded-lg shadow-lg flex flex-col justify-between">
            <div>
                <div className="font-bold text-xl mb-1 flex flex-row justify-between">
                    <span>{sneaker.name}</span>
                    <button onClick={onDelete}>delete</button>
                </div>
                <div>{sneaker.brand}</div>
                <div>{sneaker.rating}</div>
            </div>
            <div className="flex flex-row text-left">
                <div className="flex flex-col mr-3 border-r border-gray-300 pr-24">
                    <p className="text-black-700 text-base font-bold">
                        ${sneaker.price}
                    </p>
                    <p>Price</p>
                </div>
                <div className="flex flex-col mr-3 border-r border-gray-300 pr-24">
                    <p className="text-black-700 text-base font-bold">
                        {sneaker.size}
                    </p>
                    <p>Size US</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-black-700 text-base font-bold">
                        {sneaker.year}
                    </p>
                    <p>Year</p>
                </div>
            </div>
        </div>
    );
}

export default SneakerCard;
