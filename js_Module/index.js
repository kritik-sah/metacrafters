// create a variable to hold your NFT's
var blogNft = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(data) {
  if (data && data.title && data.desc) {
    blogNft.push(data);
  } else {
    console.log("Please add proper data");
  }
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  blogNft.forEach((item) => {
    console.log("Title ", item.title);
    console.log("Description ", item.desc);
    console.log("//////////////////////////////////////////");
  });
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  let count = blogNft.length;
  console.log(count);
}

// call your functions below this line
mintNFT({ title: "Genisis blog", desc: "first blog" });
mintNFT({ title: "#1 blog", desc: "first blog after genisis" });
mintNFT({ title: "#2 blog", desc: "second blog" });
listNFTs();
getTotalSupply();
