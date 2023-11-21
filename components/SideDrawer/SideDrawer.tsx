import { addSneakerEntry } from '@/pages/api/api';
import { Sneaker } from '@/utils/types';
import React, { useState } from 'react';
import { type Rate } from '@/utils/types';

type SideDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  onAddSneaker: (newSneaker: Sneaker) => void;
};

const SideDrawer: React.FC<SideDrawerProps> = ({ isOpen, onClose, onAddSneaker }) => {
  const [newSneaker, setNewSneaker] = useState<Sneaker>({
    _id: "",
    name: "",
    brand: "",
    price: 0,
    size: 0,
    year: 0,
    rating: 1,
  });

  const drawerClasses = isOpen
    ? "transform translate-x-0"
    : "transform translate-x-full";

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setNewSneaker((prevSneaker) => ({
        ...prevSneaker,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setNewSneaker(newSneaker);

      await addSneakerEntry(newSneaker);

      onClose();

      onAddSneaker(newSneaker);
    };  

  return (
    <div className={`fixed inset-0 z-50 overflow-hidden ${isOpen ? '' : 'hidden'}`}>
      <div
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"
        onClick={onClose}
      ></div>

      <section
        className={`absolute inset-y-0 right-0 pl-10 max-w-full flex transition-transform duration-300 ease-in-out ${drawerClasses}`}
      >
        <div className="w-screen max-w-md">
        <form className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll" onSubmit={handleSubmit}>
            <div className="p-6">
              <h2 className="text-xl font-medium text-gray-900">Add New Sneaker</h2>
              <div className="mt-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold">Name</label>
                <input type="text" id="name" name="name" value={newSneaker.name} onChange={handleInputChange} className="w-full p-2 border rounded" required />
              </div>
              <div className="mt-4">
                <label htmlFor="brand" className="block text-gray-700 text-sm font-bold">Brand</label>
                <input type="text" id="brand" name="brand" value={newSneaker.brand} onChange={handleInputChange} className="w-full p-2 border rounded" required />
              </div>
              <div className="mt-4">
                <label htmlFor="price" className="block text-gray-700 text-sm font-bold">Price</label>
                <input type="number" id="price" name="price" value={newSneaker.price} onChange={handleInputChange} className="w-full p-2 border rounded" required />
              </div>
              <div className="mt-4">
                <label htmlFor="size" className="block text-gray-700 text-sm font-bold">Size (US)</label>
                <input type="number" id="size" name="size" value={newSneaker.size} onChange={handleInputChange} className="w-full p-2 border rounded" required />
              </div>
              <div className="mt-4">
                <label htmlFor="year" className="block text-gray-700 text-sm font-bold">Year</label>
                <input type="number" id="year" name="year" value={newSneaker.year} onChange={handleInputChange} className="w-full p-2 border rounded" required />
              </div>
              <div className="mt-4">
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add Sneaker</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SideDrawer;
