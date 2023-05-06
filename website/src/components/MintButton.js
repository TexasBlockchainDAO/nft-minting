import React from 'react';
import { useState } from 'react';
import axios from 'axios';


const JWT = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJhZjhmMDg5My0xNmUyLTQ2ZmYtOWRiMC0yYTU2NWMwMmQyYjUiLCJlbWFpbCI6ImplbG1hdG90cmFAZ3VmdW0uY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjUwMWRjYzczY2RlMzIwZmE2MDBlIiwic2NvcGVkS2V5U2VjcmV0IjoiMzBmMDRhZGZlMDMzZjQxNGIwMDAwZTk2NmFjNDhhOGVlOWU5OGQxY2IyNjU5MzkyZjhhZDkyMGJmNmQ5MWE1MCIsImlhdCI6MTY4MzM3OTkyMn0.dIvPCLFUG8ClQsrclh4hzoeOs8tULYPEIdhGUjcA9rM"
const MintButton = ({ onMint }) => {

    const [fileImg, setFileImg] = useState(null);
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")

  const handleMint = async (e) => {
    console.log('Minting NFT...');
    // Add your minting logic here
    console.log(fileImg);
    console.log(name);
    console.log(desc);

     if (fileImg) {
            try {

                const formData = new FormData();
                formData.append("file", fileImg);

                const metadata = JSON.stringify({
                    name: name,
                    description: desc,
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
                      'Authorization': JWT
                    }
                  });
                  console.log(res.data);

                    const ImgHash = `ipfs://${res.data.IpfsHash}`;
                
                    console.log(ImgHash);

                } catch (error) {
                  console.log(error);
                }

                /*
               const resFile = await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers: {
                        'pinata_api_key': `${process.env.API_KEY}`,
                        'pinata_secret_api_key': `${process.env.API_SECRET}`,
                        "Content-Type": "multipart/form-data"
                    },
                });
                */
                //   sendJSONtoIPFS(ImgHash)


            } catch (error) {
                console.log("Error sending File to IPFS: ")
                console.log(error)
            }
        }
  };
    
  return (
    <form onSubmit={onMint}>
    <input type="file" onChange={(e) => setFileImg(e.target.files[0])} required />
    <input type="text" onChange={(e) => setName(e.target.value)} placeholder='name' required value={name} />
    <input type="text" onChange={(e) => setDesc(e.target.value)} placeholder="desc" required value={desc} />
    <button className="mint-button" onClick={handleMint}>Mint NFT</button>
    </form>
  );
    /*
  return (
    <button className="mint-button" onClick={onMint}>
      Mint NFT
    </button>
  );
  */
};

export default MintButton;
