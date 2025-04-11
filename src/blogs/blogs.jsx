import React, { useEffect, useState } from 'react';
import { FaBookmark } from "react-icons/fa";

const Blogs = () => {
  const [items, setItems] = useState([]);         // সব ডাটা
  const [favorites, setFavorites] = useState([]); // আইডি গুলো
  const [favItems, setFavItems] = useState([]);   // ম্যাচিং আইটেমগুলো

  // ✅ Step 1: data.json থেকে ডাটা লোড করা
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  // ✅ Step 2: লোকাল স্টোরেজ থেকে ফেভারিট আইডি লোড
  useEffect(() => {
    const savedIds = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedIds);
  }, []);

  // ✅ Step 3: আইডি দিয়ে matching item গুলো খুঁজে বের করা
  useEffect(() => {
    if (items.length && favorites.length) {
      const matched = items.filter(item => favorites.includes(item.id));
      setFavItems(matched);
    }
  }, [items, favorites]);

  // ✅ Step 4: একটি আইটেম ফেভারিটে অ্যাড করা (লোকাল স্টোরেজে শুধু আইডি সেভ)
  const handleAddToFavorites = (id) => {
    if (!favorites.includes(id)) {
      const updated = [...favorites, id];
      setFavorites(updated);
      localStorage.setItem("favorites", JSON.stringify(updated));
    }
  };

  return (
    <div className="p-6 bg-white mt-5 rounded-4xl">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Items</th>
            <th>Current Bid</th>
            <th>Time Left</th>
            <th>Bid Now</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                <span>{item.title}</span>
              </td>
              <td>$ {item.bid}</td>
              <td className="text-blue-600 font-medium">{item.timeLeft}</td>
              <td>
                <button className="text-2xl" onClick={() => handleAddToFavorites(item.id)}>
                  <FaBookmark />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Favorites Section */}
      <div className="mt-10 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Favorite Items</h2>
        {favItems.length === 0 ? (
          <p>No items added yet.</p>
        ) : (
          <ul className="space-y-2">
            {favItems.map(fav => (
              <li key={fav.id} className="flex items-center gap-3">
                <img src={fav.image} alt={fav.title} className="w-10 h-10 object-cover rounded" />
                <span>{fav.title}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Blogs;
