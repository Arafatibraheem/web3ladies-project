const walletBtn = document.querySelector(".btn2");

walletBtn.addEventListener("click", function() {
    const provider = new ethers.providers.Web3Provider(
        window.ethereum, 
        "goerli");

    if(provider) {
        provider.send("eth_requestAccounts", []).then(() => {
            provider.listAccounts().then((accounts) => {
            signer = provider.getSigner(accounts[0]);
            })
        })
    } else {
        alert("Please install metamask from Chrome store");
    }
})
