const request = (url) => (body) => window.fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({ body })
}).then(o => o.json())

export default request
