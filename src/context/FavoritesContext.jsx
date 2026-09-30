import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

/* FAVORITES CONTEXT */

const FavoritesContext = createContext(null);

const STORAGE_KEY = "lunaria-favorites";

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const savedFavorites =
        localStorage.getItem(STORAGE_KEY);

      return savedFavorites
        ? JSON.parse(savedFavorites)
        : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const isFavorite = (productId) => {
    return favorites.some(
      (product) => product.id === productId
    );
  };

  const addFavorite = (product) => {
    setFavorites((currentFavorites) => {
      const alreadyExists = currentFavorites.some(
        (item) => item.id === product.id
      );

      if (alreadyExists) {
        return currentFavorites;
      }

      return [...currentFavorites, product];
    });
  };

  const removeFavorite = (productId) => {
    setFavorites((currentFavorites) => {
      return currentFavorites.filter(
        (product) => product.id !== productId
      );
    });
  };

  const toggleFavorite = (product) => {
    setFavorites((currentFavorites) => {
      const alreadyExists = currentFavorites.some(
        (item) => item.id === product.id
      );

      if (alreadyExists) {
        return currentFavorites.filter(
          (item) => item.id !== product.id
        );
      }

      return [...currentFavorites, product];
    });
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  const favoritesCount = favorites.length;

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        favoritesCount,
        isFavorite,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error(
      "useFavorites debe utilizarse dentro de FavoritesProvider."
    );
  }

  return context;
}

export {
  FavoritesProvider,
  useFavorites,
};