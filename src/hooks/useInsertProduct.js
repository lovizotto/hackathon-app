import { useContext, useState } from "react";
import { supabase } from "../lib/api";
import databaseContext from "../DatabaseContext";

export const useInsertProduct = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { setInvalidate } = useContext(databaseContext);
  const createProduct = async (product) => {
    setLoading(true);
    setError(false);
    const { error } = await supabase.from("products").insert([product]);
    if (error) {
      setError(true);
      console.error(error);
    } else {
      setLoading(false);
      setInvalidate(true);
    }
  };
  return {
    createProduct,
    loading,
    error,
  };
};
