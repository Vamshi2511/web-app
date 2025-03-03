"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCryptoData, Crypto } from "../lib/fetchCrypto";
import SearchBar from "../components/SearchBar";
import CryptoTable from "../components/CryptoTable";
import LoadingOverlay from "../components/LoadingOverlay";
import ErrorMessage from "../components/ErrorMessage";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  // Use React Query to fetch data.
  const {
    data: cryptoData = [],
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  } = useQuery<Crypto[], Error>({
    queryKey: ["cryptoData"],
    queryFn: fetchCryptoData,
  });

  // Filter data based on search query.
  const filteredData = cryptoData.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ maxWidth: 800, margin: "auto", position: "relative", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Cryptocurrency Market Data
      </h1>

      {/* Container for Search Bar and Refresh Button with proper spacing */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <button
          onClick={() => refetch()}
          style={{
            padding: "10px 15px",
            background: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Refresh Prices
        </button>
      </div>

      {/* Display error message in UI if there's an error */}
      {isError && <ErrorMessage error={error} />}

      {/* Show loading overlay while fetching data */}
      {(isLoading || isFetching) && <LoadingOverlay />}

      <CryptoTable cryptoData={filteredData} />
    </div>
  );
}