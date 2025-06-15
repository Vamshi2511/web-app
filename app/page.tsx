"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCryptoData, Crypto } from "../lib/fetchCrypto";
import SearchBar from "../components/SearchBar";
import CryptoTable from "../components/CryptoTable";
import LoadingOverlay from "../components/LoadingOverlay";
import ErrorMessage from "../components/ErrorMessage";
import ThemeToggle from "../components/ThemeToggle";
import ChatBotToggle from "../components/ChatBotToggle";
import ChatWindow from "../components/ChatWindow";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showChat, setShowChat] = useState(false);

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

  const filteredData = cryptoData.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "auto",
        position: "relative",
        padding: "20px",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Cryptocurrency Market Data
      </h1>

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
        <ThemeToggle />
      </div>

      {isError && <ErrorMessage error={error} />}
      {(isLoading || isFetching) && <LoadingOverlay />}
      <CryptoTable cryptoData={filteredData} />

      {/* ✅ Chatbot Components Rendered in the DOM */}
      <ChatBotToggle onClick={() => setShowChat((prev) => !prev)} />
      {showChat && <ChatWindow onClose={() => setShowChat(false)} />}
    </div>
  );
}
