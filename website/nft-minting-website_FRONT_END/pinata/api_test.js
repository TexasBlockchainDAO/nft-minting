var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.pinata.cloud/data/testAuthentication',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmOWZiZGY1Ny1kZmYyLTQ1MjAtOGI3YS1mNzM4NjQzYmYyNTEiLCJlbWFpbCI6ImJlbm5ldHR6aWVnbGVyOTlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImFmNDM4OGNiNjI3ODZhZDk0NTJlIiwic2NvcGVkS2V5U2VjcmV0IjoiNmM4ZjY4NmM5ODFhMjAzMjI0YTVjMDBlZDExZTY3MGFmNTRjNDY0M2RkYWQ3NmE2ZjIzNjJmYmE5MTRmNWU0MyIsImlhdCI6MTY4MDgyMTQwNn0.QiYpxj1YIwniW_DWI-06L6dCb-_Q0EW1N6eZqrMi36M'
  }
};

async function testApi() {
  const res = await axios(config)

  console.log(res.data);
}
testApi();
