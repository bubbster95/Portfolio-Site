accordion = (id, panId) => {
    const button = document.getElementById(id);
    const panel = document.getElementById(panId);
    if (panel.style.display === 'flex') {
        button.className = 'tile';
        panel.style.display = 'none';
    } else {
        button.className = 'active';
        panel.style.display = 'flex';
        panel.scrollIntoView(false);
      }
}

enlarge = (id, largeId) =>{
    console.log(id, largeId)
    const img = document.getElementById(id);
    // const imgLg = document.getElementById(largeId);
    if (img.style.display === 'inline-block') {
        img.style.display = 'none';
    } else {
        img.style.display = 'inline-block'
    }
}