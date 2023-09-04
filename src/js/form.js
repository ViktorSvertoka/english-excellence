const inputs = document.querySelectorAll('input[name^="user-"]');
const form = document.querySelector('.leave__feedback');

form.addEventListener('input', () => {  
  const feedbackState = {};  
  inputs.forEach(input => {    
    feedbackState[input.name.split('-')[1]] = input.value;  });
});

inputs.forEach(input => { 
  input.addEventListener('blur', () => {   
    if (input.value.length > 0) {      
      input.classList.remove('invalid');      
      input.classList.add('valid');    
    }  
  });
});

form.addEventListener('submit', event => {  
  event.preventDefault();  
  let isValid = true;  
  inputs.forEach(input => {    
    if (input.value === '') {     
      input.classList.add('invalid');      
      isValid = false;    
    } else {      
      input.classList.remove('invalid');      
      input.classList.remove('valid');    
    } 
  });  
  if (isValid) {    
    inputs.forEach(input => {     
      input.value = '';   
    });  
  }});
