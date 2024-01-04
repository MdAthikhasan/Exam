import React from "react";

const NetworkErrorPage = () => {
  const refreshPage = () => {
    window.location.reload(true);  
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1 style={{ color: "#FF6347" }}>Network Error</h1>
      <p style={{ color: "#555" }}>
        There was an issue connecting to the network.
      </p>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={refreshPage}
      >
        Refresh
      </button>
    </div>
  );
};

export default NetworkErrorPage;
