// client/script.js
document.getElementById('registerForm').addEventListener('submit', async function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
  
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password, address, phone })
      });
  
      const data = await res.json();
  
      if (res.ok) {
        alert('User registered successfully');
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong!');
    }
  });
  