
const users = [
    { id: 1, name: "Alice", age: 17, city: "New York" },
    { id: 2, name: "Bob", age: 25, city: "Los Angeles" },
    { id: 3, name: "Charlie", age: 30, city: "New York" },
    { id: 4, name: "Diana", age: 22, city: "Chicago" },
  ];
  
  /**
   * @param {Array} users 
   * @returns {Array} 
   */
  function filterAdults(users) {
    return users.filter(user => user.age >= 18);
  }
  
  /**
  .
   * @param 
   * @returns 
   */
  function mapUserNames(users) {
    return users.map(user => user.name);
  }
  
  /**
 
   * @param 
   * @returns 
   */
  function groupUsersByCity(users) {
    return users.reduce((acc, user) => {
      if (!acc[user.city]) {
        acc[user.city] = [];
      }
      acc[user.city].push(user);
      return acc;
    }, {});
  }
  
 
  console.log("Filtered Adults:", filterAdults(users)); 

  
  console.log("Mapped User Names:", mapUserNames(users)); 
  
  
  console.log("Grouped Users By City:", groupUsersByCity(users)); 
 
  