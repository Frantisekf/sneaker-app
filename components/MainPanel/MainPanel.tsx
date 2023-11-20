
import React, { useState, useEffect} from 'react';
import SneakerCard from '../SneakerCard/SneakerCard';
import { deleteSneakerEntry, fetchSneakerData } from '@/pages/api/api';
import { Sneaker } from '@/utils/types';
import Image from 'next/image';
import HotTrendingIcon from '/public/svg/desktop/streamline-icon-hot-trending-2@140x140 1.svg';


const MainPanel: React.FC = () => {
const [sneakerData, setSneakerData] = useState<Sneaker[]>([])
const [searchQuery, setSearchQuery] = useState('');


useEffect(() => { 
    const getSneakerData = async () => {
        const data = await fetchSneakerData();
        setSneakerData(data);
      };
  
      getSneakerData();
}, []);

const handleDelete = async (id: string) => { 
  await deleteSneakerEntry(id)
  setSneakerData(sneakerData.filter(sneaker => sneaker._id !== id));
}

const sortBySize = () => {
  const sortedData = [...sneakerData].sort((a, b) => a.size - b.size);
  setSneakerData(sortedData);
};


const sortByYear = () => {
  const sortedData = [...sneakerData].sort((a, b) => a.year - b.year);
  setSneakerData(sortedData);
};

const sortByPrice = () => {
  const sortedData = [...sneakerData].sort((a, b) => a.price - b.price);
  setSneakerData(sortedData);
};

const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSearchQuery(event.target.value);
};

const filteredSneakers = sneakerData.filter(sneaker =>
  sneaker.name.toLowerCase().includes(searchQuery.toLowerCase())
);

  return (
    <div>
      <div className="flex  mb-8 justify-end">
        <input 
        type="text"
        placeholder="Search by title..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="p-2 border rounded"
      />
      <button>Add new sneaker</button>
    </div>
      <div className="flex space-x-2 mb-4 justify-end">
        <span className="text-center self-center pr-5">Sort by:</span>
        <button onClick={sortBySize} className="px-4 py-2 bg-blue-500 text-white rounded">Sort by Size</button>
        <button onClick={sortByYear} className="px-4 py-2 bg-green-500 text-white rounded">Sort by Year</button>
        <button onClick={sortByPrice} className="px-4 py-2 bg-red-500 text-white rounded">Sort by Price</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {sneakerData.length === 0 && 
        <Image
        priority
        src={HotTrendingIcon}
        alt="no sneakers found"
      /> }  
      {filteredSneakers.map((sneaker) => (
        <SneakerCard sneaker={sneaker} key={sneaker.name} onDelete={() => handleDelete(sneaker._id)}/>
      ))}
      </div>
    </div>
  );
};

export default MainPanel;
