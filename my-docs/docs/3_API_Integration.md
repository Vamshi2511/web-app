---
id: api-integration
title: Crypto Dashboard - API Integration
sidebar_label: 3. API Integration
---

## API Integration Details

### Public API: CoinGecko

The app retrieves cryptocurrency prices from the **CoinGecko API**. The request structure is as follows:

```js
const fetchCryptoPrices = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,cardano,solana,ripple&vs_currencies=usd"
  );
  return response.json();
};
```

### How Data is Fetched and Updated

- **Initial Load:** Data is fetched when the app first loads.
- **Manual Refresh:** Clicking the "Refresh Prices" button triggers an API request.
- **Filtering:** Users can filter cryptocurrencies using a search bar.
