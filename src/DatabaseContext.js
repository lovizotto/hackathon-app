import React from "react";

const databaseContext = React.createContext({
  invalidate: false,
});

export default databaseContext;
