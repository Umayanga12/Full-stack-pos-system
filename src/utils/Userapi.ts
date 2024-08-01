// utils/api.ts
require('dotenv').config()
// Define the base URL for your API

const BASE_URL = "http://localhost:3020/user"; // Your base URL

export const fetchFromApi = async (endpoint: string, options?: RequestInit) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`, options);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};


export async function createUser(endpoint: string, user: { username: string; type: string; password: string }) {
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to create user');
  }

  return response.json();
}

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

