accordion = (id, panId) => {
    const button = document.getElementById(id);
    const panel = document.getElementById(panId);
    if (panel.style.display === "block") {
        button.className = 'tile';
        panel.style.display = "none";
    } else {
        button.className = 'active';
        panel.style.display = "block";
      }
}