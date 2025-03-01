if (!document.getElementById("session-manager-overlay")) {
    let overlay = document.createElement("div");
    overlay.id = "session-manager-overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "20%";
    overlay.style.left = "50%";
    overlay.style.transform = "translateX(-50%)";
    overlay.style.background = "white";
    overlay.style.padding = "15px";
    overlay.style.borderRadius = "10px";
    overlay.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    overlay.style.zIndex = "9999";
    overlay.innerHTML = "<input type='text' id='session-search' placeholder='Search sessions...' style='width: 250px; padding: 8px;'>";
  
    document.body.appendChild(overlay);
  }

  