var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.pinata.cloud/data/testAuthentication',
  headers: { 
      'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJhZjhmMDg5My0xNmUyLTQ2ZmYtOWRiMC0yYTU2NWMwMmQyYjUiLCJlbWFpbCI6ImplbG1hdG90cmFAZ3VmdW0uY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjUwMWRjYzczY2RlMzIwZmE2MDBlIiwic2NvcGVkS2V5U2VjcmV0IjoiMzBmMDRhZGZlMDMzZjQxNGIwMDAwZTk2NmFjNDhhOGVlOWU5OGQxY2IyNjU5MzkyZjhhZDkyMGJmNmQ5MWE1MCIsImlhdCI6MTY4MzM3OTkyMn0.dIvPCLFUG8ClQsrclh4hzoeOs8tULYPEIdhGUjcA9rM"
  }
};

async function testApi() {
  const res = await axios(config)

  console.log(res.data);
}
testApi();
