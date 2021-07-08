const greeting = (name, greeting = 'Hello') => {
    console.log(`${greeting} ${name}, welcome aboard!`);
  }
  
  greeting('Burak'); 
  greeting('Veronika', 'Привет');