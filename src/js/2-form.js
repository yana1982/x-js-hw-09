let formData = {
    email: '',
    message: '',
  };
  const form = document.querySelector('.feedback-form');
  
  form.addEventListener('input', (e) => {
    const formUser = new FormData(form);
    const email = formUser.get('email').trim();
    const message = formUser.get('message').trim();
    formData = { email, message };
  
    if (email && message) {
        formData = { email, message };

    saveToLS('email', email);
    saveToLS('message', message);
    saveToLS('feedback-form-state', formData);
    }
  });
  
    form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const formUser = new FormData(form);
    const email = formUser.get('email').trim();
    const message = formUser.get('message').trim();
    formData.email = email;
    formData.message = message;
  
    if (!email || !message) {
      alert('Fill please all fields');
      return;
    }
  
    console.log({ email, message });
  
    form.reset();
    localStorage.removeItem('email');
    localStorage.removeItem('message');
    localStorage.removeItem('feedback-form-state');
  });
  
  function saveToLS(key, value) {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
  }
  
  function loadFromLS(key) {
    const json = localStorage.getItem(key);
    try {
      const data = JSON.parse(json);
      return data;
    } catch {
      return json;
    }
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    formData = loadFromLS('feedback-form-state');
    
    form.elements.email.value = formData?.email || '';
    form.elements.message.value = formData?.message || '';
  });