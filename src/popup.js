document.addEventListener("DOMContentLoaded", () => {
    let sessionList = document.getElementById("session-list");
    chrome.storage.local.get(["sessions"], (data) => {
      if (data.sessions) {
        data.sessions.forEach(session => {
          let li = document.createElement("li");
          li.textContent = session.name;
          sessionList.appendChild(li);
        });
      }
    });
  });
  