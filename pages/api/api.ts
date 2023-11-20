import { API_URL } from '../../utils/constants'
import { Sneaker } from '../../utils/types'
import { ApiError } from './apiError'

export const fetchSneakerData = async (): Promise<Sneaker[]> => {
    try {
      const response = await fetch(API_URL)
  
      const data = await response.json()
      return data
    } catch (error) {
        if (error instanceof ApiError) {
            console.error(`API Error: ${error.message} (Status: ${error.status})`);
        } else {
            console.error('Error fetching data: ', error);
        }
        throw error;
    }
  }

export const deleteSneakerEntry = async (id: string): Promise<void> => { 
    try {
        const response = await fetch(`${API_URL}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        } catch (error) {
            if (error instanceof ApiError) {
                console.error(`API Error: ${error.message} (Status: ${error.status})`);
            } else {
                console.error('Error deleting data: ', error);
            }
            throw error;
        }
    }
export const addSneakerEntry = async (sneaker: Sneaker): Promise<Sneaker> => {
    try {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sneaker)
        })
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    
        return await response.json();

        } catch (error) {
            if (error instanceof ApiError) {
                console.error(`API Error: ${error.message} (Status: ${error.status})`);
            } else {
                console.error('Error adding data: ', error);
            }
            throw error;
        }
    }

