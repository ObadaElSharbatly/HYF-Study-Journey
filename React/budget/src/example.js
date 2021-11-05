const arr = [
    {
        id: 101,
      name: "Jone",
      age: 1
    },
    {
        id: 102,
      name: "Jane",
      age: 2
    },
    {
        id: 103,
      name: "johnny",
      age: 3
    }
  ];
  console.log(arr);

  const person = arr.find(element => element.id === 101);
  person.name = "Ganit";
  person.age = 25;

  console.log(arr);
