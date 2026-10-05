import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CardContext = createContext();

export function CardProvider({children}){
    const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
          throw new Error("Failed to fetch cards");
        }

        const data = await response.json();
        setCards(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

    // const removeCard = (id) => {
    // setCards((previousCards) =>
    //   previousCards.filter((card) => card.id !== id)
    // );

     const removeCard = (id) => {
    console.log("Removing card:", id);

    setCards((cards) =>
      cards.filter((card) => card.id !== id)
    );
  };


  return (
    <CardContext.Provider
      value={{
        cards,
        loading,
        error,
        removeCard,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export function useCards() {
  return useContext(CardContext);
}
