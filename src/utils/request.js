const request = (url) => (query) => window.fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({ query })
}).then(o => o.json())

export default request
