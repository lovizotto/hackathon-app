import { useContext, useEffect, useState } from "react";
import { supabase } from "../lib/api";
import databaseContext from "../DatabaseContext";

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { invalidate, setInvalidate } = useContext(databaseContext);
  useEffect(() => {
    setLoading(true);
    setError(false);
    supabase
      .from("products")
      .select("*")
      .then(({ data, error }) => {
        console.log(data);
        if (error) {
          setError(true);
          console.error(error);
        } else {
          console.log(data);
          setLoading(false);
          setProducts(data);
          setInvalidate(false);
        }
      });
  }, [invalidate]);
  return {
    products,
    loading,
    error,
  };
};
