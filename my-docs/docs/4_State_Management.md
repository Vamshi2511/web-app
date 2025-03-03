---
id: state-management
title: Crypto Dashboard - State Management
sidebar_label: 4. State Management
---

## State Management Approach

### Why React Query?

The project uses **React Query** for efficient state management due to:

- Automatic background data fetching.
- Caching and performance optimization.
- Built-in support for loading and error states.

#### Implementation Example:

```js
import { useQuery } from "@tanstack/react-query";
import { fetchCryptoData } from "../lib/fetchCrypto";

const { data, error, isLoading, refetch } = useQuery(
  "cryptoData",
  fetchCryptoData,
  {
    refetchInterval: 30000, // Refreshes data every 30 seconds
  }
);
```
