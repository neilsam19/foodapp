import { useEffect, useState, process } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(
        `${URL}?query=${query}&apiKey=${import.meta.env.VITE_REACT_API_KEY}`
      );
      const data = await res.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      ></input>
    </div>
  );
}
