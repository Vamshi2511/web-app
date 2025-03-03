import axios from "axios";
const api = axios.create({
    baseURL: "/api",
    timeout: 10000,
  });

export interface Crypto {
  id: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
}

// This function calls our Next.js API route at /api/crypto
export async function fetchCryptoData(): Promise<Crypto[]> {
  try {
    const response = await axios.get("/crypto");
    console.log("fetchCryptoData/ Data: ", response.data);
    return response.data;
  } catch (error) {
    
    console.error("Error fetching data from /crypto:", error);
    throw error;
    return [];
  }
}