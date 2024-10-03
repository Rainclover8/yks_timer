import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage({home}) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Link to="/">{home}</Link>
      <h1>404 - Sayfa Bulunamadı</h1>
    </div>
  );
}

export default NotFoundPage;
