const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')
const JWT = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmOWZiZGY1Ny1kZmYyLTQ1MjAtOGI3YS1mNzM4NjQzYmYyNTEiLCJlbWFpbCI6ImJlbm5ldHR6aWVnbGVyOTlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImFmNDM4OGNiNjI3ODZhZDk0NTJlIiwic2NvcGVkS2V5U2VjcmV0IjoiNmM4ZjY4NmM5ODFhMjAzMjI0YTVjMDBlZDExZTY3MGFmNTRjNDY0M2RkYWQ3NmE2ZjIzNjJmYmE5MTRmNWU0MyIsImlhdCI6MTY4MDgyMTQwNn0.QiYpxj1YIwniW_DWI-06L6dCb-_Q0EW1N6eZqrMi36M'

const pinFileToIPFS = async () => {
    const formData = new FormData();
    const src = "monke.jpeg";
    
    const file = fs.createReadStream(src)
    formData.append('file', file)
    
    const metadata = JSON.stringify({
      name: 'Monkey NFT',
    });
    formData.append('pinataMetadata', metadata);
    
    const options = JSON.stringify({
      cidVersion: 0,
    })
    formData.append('pinataOptions', options);

    try{
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: "Infinity",
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          Authorization: JWT
        }
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
}
