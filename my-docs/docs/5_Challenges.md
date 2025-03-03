---
id: challenges
title: Crypto Dashboard - Challenges & Solutions
sidebar_label: 5. Challenges & Solutions
---

## Challenges & Solutions

### Challenge 1: API Rate Limits

- **Problem:** CoinGecko restricts the number of requests per minute.
- **Solution:** Implemented caching and set automatic data refetching using React Query to minimize redundant API calls.

### Challenge 2: Handling Network Errors

- **Problem:** API failures due to network issues.
- **Solution:** Integrated error handling to display messages when the API fails.

```js
if (error) return <ErrorMessage error={error} />;
```

### Challenge 3: UI Performance Optimization

- **Problem:** Unnecessary re-renders due to frequent updates.
- **Solution:** Used **memoization** and optimized component re-rendering.

---
