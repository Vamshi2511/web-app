import { NextResponse } from "next/server";
import axios from "axios";

export const runtime = "nodejs"; // Force Node.js runtime for caching

// Simple cache using an empty string when no data is cached
let cachedData = "";
let lastFetchTime = 0;
const CACHE_DURATION = 60 * 1000; // Cache duration of 1 minute

export async function GET() {
  const now = Date.now();

  // Return cached data if available and not expired
  if (cachedData !== "" && now - lastFetchTime < CACHE_DURATION) {
    console.log("Returning cached data");
    return NextResponse.json(JSON.parse(cachedData));
  }

  try {
    console.log("Fetching new crypto data from CoinGecko...");
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 10,
          page: 1,
          sparkline: false,
          price_change_percentage: "1h,24h,7d",
        },
      }
    );
    cachedData = JSON.stringify(response.data);
    lastFetchTime = now;
    console.log("Fetched Crypto Data:", response.data);
    return NextResponse.json(response.data);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching from CoinGecko:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
