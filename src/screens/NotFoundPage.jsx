import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage({home}) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
    <Link to="/">{home}</Link>
    <h1>404 - Sayfa Bulunamadı</h1>
    <p>Aradığınız sayfa bulunamadı. Aşağıdaki linklere göz atabilirsiniz:</p>
    <ul style={{ listStyleType: "none" }}>
      <li><Link to="/exam/tyt">TYT Sayfası</Link></li>
      <li><Link to="/exam/ayt">AYT Sayfası</Link></li>
      <li><Link to="/exam/msu">MSÜ Sayfası</Link></li>
    </ul>
  </div>
  );
}

export default NotFoundPage;
