// src/accessKeyGenerator.js

// Generate a random alphanumeric string of a given length
function generateRandomString(length) {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }
  
  // Generate a unique access key
  function generateAccessKey(database) {
    let accessKey;
    let isUnique = false;
  
    while (!isUnique) {
      accessKey = `${generateRandomString(3)}-${generateRandomString(3)}-${generateRandomString(3)}`;
      if (!database.includes(accessKey)) {
        database.push(accessKey);
        isUnique = true;
      }
    }
  
    return accessKey;
  }
  
  export default generateUniqueAccessKey;