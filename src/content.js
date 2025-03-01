(function () {
    // Prevent multiple overlays
    if (document.getElementById("myExtensionOverlay")) return;
  
    // Create floating overlay
    let overlay = document.createElement("div");
    overlay.id = "myExtensionOverlay";
    overlay.style.position = "fixed";
    overlay.style.top = "20%";
    overlay.style.left = "50%";
    overlay.style.transform = "translate(-50%, -50%)";
    overlay.style.background = "white";
    overlay.style.padding = "20px";
    overlay.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.1)";
    overlay.style.borderRadius = "8px";
    overlay.style.zIndex = "10000";
  
    // Add content
    overlay.innerHTML = `<h2>Session Manager</h2>
      <button id="closeOverlay">Close</button>`;
  
    // Close button
    overlay.querySelector("#closeOverlay").addEventListener("click", () => {
      overlay.remove();
    });
  
    document.body.appendChild(overlay);
  })();
  