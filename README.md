Candidate Instructions

Below is an SDK function with multiple design and quality issues. This is meant to simulate production-level SDK logic. Please:

Read and explain the code

Identify problems

Propose and (if time permits) refactor the code

Justify your choices as if this were consumed by external developers

Then implement an additional small function or feature that would complement this SDK module (e.g., a helper to update user data, or fetch a list of users with filters)

Code Snippet

// sdk/client.js
const axios = require('axios');

async function fetchUserData(token, userId) {
  const url = `https://api.example.com/user/${userId}`;
  const headers = {
    'Authorization': token,
    'Content-Type': 'application/json'
  };

  const response = await axios.get(url, { headers });
  return response.data;
}

module.exports = { fetchUserData };