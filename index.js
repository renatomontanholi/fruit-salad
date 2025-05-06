const axios = require('axios');
const env = '@/.env'
const {tokenIsValid} = '@/safetyFuynctions'

async function fetchUserData(token, userId) {
  if(!tokenIsValid(token)) {
    throw new Error('Token Invalid')
  }
  
  const req = new axios();

  req.baseUrl = env.apiUrl;
  req.url = 'user'
  req.path = userId
  req.headers = {
    'Authorization': token,
    'Content-Type': 'application/json'
  };

  try {
    const response = await req.get();
    return response.data;
  } catch (error) {
    console.error('Error Fetching User: '+userId)
    throw error;
  }
}

module.exports = { fetchUserData };