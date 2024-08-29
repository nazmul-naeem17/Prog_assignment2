document.addEventListener('DOMContentLoaded', () => {
    toggleProducts(); 
  });
  
  function toggleProducts() {
    const products = document.querySelectorAll('.single-product');
    const button = document.querySelector('.product-btn');
    const showMoreText = 'See More Products';
    const showLessText = 'See Less Products';
    const showingMore = button.textContent === showLessText;
    const showingLess = button.textContent === showMoreText;
    products.forEach((product, index) => {
      if (showingMore) {
        if (index < 6) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      } else{
        if (index < 12) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      }
    });
    button.textContent = showingMore ? showMoreText : showLessText;
  }
  
  function subscribe(event) {
    event.preventDefault(); // Prevent form submission

    const email = event.target.email.value;
    const successMessage = document.getElementById("success-message");
    successMessage.innerHTML = ""; // Clear previous content

    const emailText = document.createElement("p");
    emailText.innerText = ` Email Successfully Subscribed. Subscribed Email: ${email}`;

    successMessage.appendChild(emailText);
}