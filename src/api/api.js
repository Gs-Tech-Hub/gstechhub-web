import React, { useState } from 'react';
import axios from 'axios';

const ApiHandler = ({ baseUrl }) => {
  const [error, setError] = useState(null);

  const fetchData = async (endpoint) => {
    try {
      const response = await axios.get(`${baseUrl}/${endpoint}`);
      return response.data;
    } catch (error) {
      // Attempt to fetch from local JSON file if the external API fails
      try {
        const localResponse = await fetch('/HomeData.json').then(res => res.json());
        return localResponse; // Directly return the fetched JSON object
      } catch (localError) {
        setError(localError);
      }
    }
  };

  const createData = async (endpoint, data) => {
    try {
      const response = await axios.post(`${baseUrl}/${endpoint}`, data);
      return response.data;
    } catch (error) {
      setError(error);
    }
  };

  const updateData = async (endpoint, id, updatedData) => {
    try {
      await axios.put(`${baseUrl}/${endpoint}/${id}`, updatedData);
    } catch (error) {
      setError(error);
    }
  };

  const deleteData = async (endpoint, id) => {
    try {
      await axios.delete(`${baseUrl}/${endpoint}/${id}`);
    } catch (error) {
      setError(error);
    }
  };

  return { fetchData, createData, updateData, deleteData, error };
};

export default ApiHandler;
