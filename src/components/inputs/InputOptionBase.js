import React, { useState } from "react";
import chevronUp from "../../assets/svg/chevron-up.svg";

export const InputOptionBase = ({ children, title, wide }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div>
      <div className="bgMain spaceBetween input-container" onClick={()=>setIsCollapsed(!isCollapsed)}>
        <h3 className={wide ? "input-title-wide" : "input-title-noWide"}>{title}</h3>
        <div className="input-chevron">
          <img className={isCollapsed ? "reverse chevron-pic" : "chevron-pic"} src={chevronUp} alt="Logo Kasa" />
        </div>
      </div>

      {isCollapsed && <div className="bgSecondary input-content">{children}</div>}
    </div> 
  );
};
