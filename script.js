const animatedElements = document.querySelectorAll('#articles, .gaza-article, .image-section');

window.addEventListener('scroll', () => {
  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});




function toggleDonationCenter() {
    const popup = document.getElementById("donation-center-popup");
    popup.classList.toggle("active");
  }
  
  function copyWallet() {
    const address = document.getElementById("donation-wallet").innerText;
    navigator.clipboard.writeText(address).then(() => {
      alert("Address copied: " + address);
    });
  }
  


  