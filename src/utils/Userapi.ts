// utils/api.ts
require('dotenv').config()
// Define the base URL for your API
const BASE_URL = process.env.BASE_URL;

// Utility function to handle API requests
const fetchFromApi = async (endpoint: string, options?: RequestInit) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`, options);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

// CREATE: Add a new user
export const createUser = async (user: { name: string; email: string }) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };

  return fetchFromApi('users', options);
};

// READ: Fetch all users
export const fetchUsers = async () => {
  return fetchFromApi('users');
};

// READ: Fetch a single user by ID
export const fetchUserById = async (id: string) => {
  return fetchFromApi(`users/${id}`);
};

// UPDATE: Update a user by ID
export const updateUser = async (id: string, updates: { name?: string; email?: string }) => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updates),
  };

  return fetchFromApi(`users/${id}`, options);
};

// DELETE: Delete a user by ID
export const deleteUser = async (id: string) => {
  const options = {
    method: 'DELETE',
  };

  return fetchFromApi(`users/${id}`, options);
};
