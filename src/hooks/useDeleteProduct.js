import { useState, useEffect, useContext } from "react";
import { supabase } from "../lib/api";
import databaseContext from "../DatabaseContext";

export const useDeleteProduct = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { setInvalidate } = useContext(databaseContext);
  const deleteProduct = async (productId) => {
    setLoading(true);
    setError(false);
    const { error } = await supabase
      .from("products")
      .delete()
      .match({ id: productId });
    if (error) {
      setError(true);
      console.error(error);
    } else {
      setLoading(false);
      setInvalidate(true);
    }
  };

  return {
    deleteProduct,
    loading,
    error,
  };
};
