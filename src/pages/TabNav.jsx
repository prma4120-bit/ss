import React, { useEffect, useState } from "react";
import { routes } from "./Router";

export default function TabNav() {
  const [current, setCurrent] = useState(() => (window.location.hash || "").replace("#", ""));

  useEffect(() => {
    const onHash = () => setCurrent((window.location.hash || "").replace("#", ""));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // group routes by category
  const groups = routes.reduce((acc, r) => {
    const cat = r.category || "General";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(r);
    return acc;
  }, {});

  const handleSelect = (e) => {
    const v = e.target.value || "";
    window.location.hash = v;
  };
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentLabel = (() => {
    const found = routes.find((r) => r.path === current);
    return found ? found.label : (routes[0] && routes[0].label) || "Home";
  })();

  const openMobile = () => setMobileOpen((s) => !s);

  const go = (path) => {
    window.location.hash = path || "";
    setMobileOpen(false);
  };

  return (
    <nav className="nav">
      {/* mobile: custom dropdown */}
      <div className="nav-select-wrap nav-mobile">
        <button className="nav-mobile-toggle" onClick={openMobile} aria-expanded={mobileOpen}>
          {currentLabel}
          <span className="chev">▾</span>
        </button>

        <div className={`nav-mobile-menu ${mobileOpen ? "open" : ""}`} role="menu">
          {Object.keys(groups).map((cat) => (
            <div key={cat} className="mobile-group">
              <div className="mobile-group-title">{cat}</div>
              {groups[cat].map((r) => (
                <button key={r.path} className={`nav-mobile-item ${current === r.path ? 'active' : ''}`} onClick={() => go(r.path)} role="menuitem">
                  {r.label}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* desktop: grouped tab layout */}
      <div className="tabs">
        {Object.keys(groups).map((cat) => (
          <div className="nav-category" key={cat}>
            <div className="nav-category-title">{cat}</div>
            <div className="nav-group">
              {groups[cat].map((r) => (
                <a
                  key={r.path}
                  href={`#${r.path}`}
                  className={`nav-tab ${current === r.path ? "active" : ""}`}
                >
                  {r.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}
