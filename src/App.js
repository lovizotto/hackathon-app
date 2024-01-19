import Button from "./components/Button";
import { ProductList } from "./containers/ProductList";
import { ProductForm } from "./containers/ProductForm";
import DatabaseContext from "./DatabaseContext";
import { useContext, useState } from "react";

function App() {
  const [invalidation, setInvalidation] = useState(false);
  const [addProductFormVisible, setAddProductFormVisible] = useState(false);

  const handleInvalidate = (value) => {
    setInvalidation(value);
  };

  return (
    <DatabaseContext.Provider
      value={{
        invalidate: invalidation,
        setInvalidate: handleInvalidate,
      }}
    >
      <div className="container-fluid">
        <Button
          className="bg-amber-600"
          onClick={() => setAddProductFormVisible((prev) => !prev)}
        >
          {addProductFormVisible ? "Hide Form" : "Add Product + "}
        </Button>
        {addProductFormVisible && <ProductForm />}
        <ProductList />
      </div>
    </DatabaseContext.Provider>
  );
}

export default App;
