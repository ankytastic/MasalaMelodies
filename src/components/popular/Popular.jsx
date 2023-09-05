import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Popular.css";
import Button from '@mui/material/Button';
import Header from '../header/Header';

const Popular = () => {
  const [activePanel, setActivePanel] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const handlePanelClick = (index) => {
    if (activePanel === index) {
      setActivePanel(null);
    } else {
      setActivePanel(index);
    }
  };

  useEffect(() => {
    const fetchRandomRecipes = async () => {
      const numberOfRecipes = 6;
      const tempRecipes = new Set();
      const fetchedRecipes = [];

      while (fetchedRecipes.length < numberOfRecipes) {
        try {
          const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
          const data = response.data.meals[0];
          if (!tempRecipes.has(data.idMeal)) {
            tempRecipes.add(data.idMeal);
            fetchedRecipes.push(data);
          }
        } catch (error) {
          console.error('Error fetching recipe:', error);
        }
      }

      setRecipes(fetchedRecipes);
      setLoading(false);
    };

    fetchRandomRecipes();
  }, []);

  return (
    <>
    <Header />
    <div>
      <div className='heading'>
        Popular Recipes
      </div>
      <div className="container">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className={`panel ${activePanel === index ? 'active' : ''}`}
            onClick={() => handlePanelClick(index)}
            style={{ backgroundImage: `url(${recipe?.strMealThumb})` }}
          >
            {loading && (
              <div className="loading-text">
                <p>Delicious Recipes Await...</p>
              </div>
            )}
            {recipe && !loading && (
              <>
                <h3><a href={recipe.strSource} target="_blank" rel="noopener noreferrer"><Button variant="contained">{recipe.strMeal}</Button></a></h3>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Popular;
