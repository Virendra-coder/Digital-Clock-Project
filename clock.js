function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');

  const minutes = String(now.getMinutes()).padStart(2, '0');

  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  document.getElementById(
    'time'
  ).textContent = `${hours}: ${minutes}: ${seconds}`;
}

// Clock ko har second update karein
setInterval(updateClock, 1000);

// Clock initialize karna
updateClock();
