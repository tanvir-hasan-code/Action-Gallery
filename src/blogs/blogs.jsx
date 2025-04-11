import React, { useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Blog Component
const Blogs = () => {
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [favItems, setFavItems] = useState([]);
// Data Fetch
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  useEffect(() => {
    const savedIds = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedIds);
  }, []);

  useEffect(() => {
    if (items.length && favorites.length) {
      const matched = items.filter((item) => favorites.includes(item.id));
      setFavItems(matched);
    } else {
      setFavItems([]); 
    }
  }, [items, favorites]);

  const handleAddToFavorites = (id) => {
    if (!favorites.includes(id)) {
      const updated = [...favorites, id];
      setFavorites(updated);
      localStorage.setItem("favorites", JSON.stringify(updated));
      toast.success("✅ Item Added to your Favorite Lists");
    }
  };

  const handleRemoveFavorite = (id) => {
    const updated = favorites.filter((favId) => favId !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
    toast.info("❌ Item Removed from Favorite List", {
      style: {
        background: "#ffe4e6",   
        color: "#b91c1c",        
        fontWeight: "bold",
        borderRadius: "10px",
      },
      icon: "🗑️",
    });
  };
  const totalBidAmount = favItems.reduce((sum, item) => sum + item.bid, 0);
  return (
    <div className="main-container flex gap-7">
      <div className="p-6 bg-white mt-5 rounded-4xl w-[70%]">
        <div className="border rounded-2xl border-gray-300">
          <table className="table w-full">
            <thead>
              <tr className="font-bold text-xl">
                <th>Items</th>
                <th>Current Bid</th>
                <th>Time Left</th>
                <th>Bid Now</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span className="font-semibold ">{item.title}</span>
                  </td>
                  <td className="text-center font-semibold">$ {item.bid}</td>
                  <td className="text-blue-600 font-medium text-center">
                    {item.timeLeft}
                  </td>
                  <td>
                    <button
                      className={`text-2xl flex mx-auto ${
                        favorites.includes(item.id)
                          ? "text-red-200 cursor-not-allowed"
                          : "text-gray-500"
                      }`}
                      onClick={() => handleAddToFavorites(item.id)}
                      disabled={favorites.includes(item.id)}
                    >
                      <FaBookmark />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-5 bg-white p-4 rounded-4xl w-[30%]">
        <div className="">
          <h2 className="text-2xl text-center font-semibold mb-4 border-b-2 border-gray-300 pb-3 text-blue-500">
            🤍 Favorite Item
          </h2>
          {favItems.length === 0 ? (
            <div className="w-9/12 mx-auto text-center grid gap-2 mt-7 border-b-2 border-gray-300 pb-7">
              <h1 className="font-bold text-xl">No favorites yet.</h1>
              <p className="text-gray-400">
                Click the heart icon on any item to add it to your favorites
              </p>
            </div>
          ) : (
            <ul className="space-y-2">
              {favItems.map((fav) => (
                <li
                  key={fav.id}
                  className="flex items-center justify-between gap-3 bg-white p-2 rounded shadow border"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={fav.image}
                      alt={fav.title}
                      className="w-14 h-14 object-cover rounded border"
                    />
                    <span className="font-semibold">
                      {fav.title}
                      <div className="flex gap-3">
                        <p className="font-normal">Price: {fav.bid} $</p>
                        <p className="font-normal">Bids:{fav.bids}</p>
                      </div>
                    </span>
                  </div>
                  <button
                    onClick={() => handleRemoveFavorite(fav.id)}
                    className="text-red-500 text-lg hover:text-red-700 btn btn-xs"
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
          )}
          ;
          <div className="border-t-2 flex justify-between pt-2">
            <h1 className="text-xl font-bold">Total bids Amount</h1>
            <h1 className="text-xl font-bold">${totalBidAmount.toFixed(2)}</h1>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
};

export default Blogs;
