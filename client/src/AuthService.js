const API_URL = 'http://localhost:2000';

const login = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    });

    const data = await response.json();

    if (data.success) {
      localStorage.setItem('userToken', data.userToken);
    }

    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw new Error('Login failed');
  }
};


const checkLoggedIn = async () => {
  const userToken = localStorage.getItem('userToken');

  try {
    const response = await fetch(`${API_URL}/check-logged-in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userToken
      })
    });

    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw new Error('Token check failed');
  }
};

const askToken = async () => {
  const userToken = localStorage.getItem('userToken');

  try {
    const response = await fetch(`${API_URL}/quiz-question/ask-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userToken
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    
    if (data && data.questionToken) {
      localStorage.setItem('questionToken', data.questionToken);
    }
    
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw new Error('Token request failed');
  }
};

module.exports = {
  login,
  checkLoggedIn,
  askToken
};