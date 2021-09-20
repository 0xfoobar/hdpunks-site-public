const web3 = new Web3(ethereum);

// Create web3 contract objects
const punksAddress = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB";
const punksAbi = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"punksOfferedForSale","outputs":[{"name":"isForSale","type":"bool"},{"name":"punkIndex","type":"uint256"},{"name":"seller","type":"address"},{"name":"minValue","type":"uint256"},{"name":"onlySellTo","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"punkIndex","type":"uint256"}],"name":"enterBidForPunk","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"punkIndex","type":"uint256"},{"name":"minPrice","type":"uint256"}],"name":"acceptBidForPunk","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"addresses","type":"address[]"},{"name":"indices","type":"uint256[]"}],"name":"setInitialOwners","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"imageHash","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"nextPunkIndexToAssign","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"punkIndexToAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"standard","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"punkBids","outputs":[{"name":"hasBid","type":"bool"},{"name":"punkIndex","type":"uint256"},{"name":"bidder","type":"address"},{"name":"value","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"allInitialOwnersAssigned","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"allPunksAssigned","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"punkIndex","type":"uint256"}],"name":"buyPunk","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"punkIndex","type":"uint256"}],"name":"transferPunk","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"punkIndex","type":"uint256"}],"name":"withdrawBidForPunk","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"punkIndex","type":"uint256"}],"name":"setInitialOwner","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"punkIndex","type":"uint256"},{"name":"minSalePriceInWei","type":"uint256"},{"name":"toAddress","type":"address"}],"name":"offerPunkForSaleToAddress","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"punksRemainingToAssign","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"punkIndex","type":"uint256"},{"name":"minSalePriceInWei","type":"uint256"}],"name":"offerPunkForSale","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"punkIndex","type":"uint256"}],"name":"getPunk","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"pendingWithdrawals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"punkIndex","type":"uint256"}],"name":"punkNoLongerForSale","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":true,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"punkIndex","type":"uint256"}],"name":"Assign","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"punkIndex","type":"uint256"}],"name":"PunkTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"punkIndex","type":"uint256"},{"indexed":false,"name":"minValue","type":"uint256"},{"indexed":true,"name":"toAddress","type":"address"}],"name":"PunkOffered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"punkIndex","type":"uint256"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":true,"name":"fromAddress","type":"address"}],"name":"PunkBidEntered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"punkIndex","type":"uint256"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":true,"name":"fromAddress","type":"address"}],"name":"PunkBidWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"punkIndex","type":"uint256"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":true,"name":"fromAddress","type":"address"},{"indexed":true,"name":"toAddress","type":"address"}],"name":"PunkBought","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"punkIndex","type":"uint256"}],"name":"PunkNoLongerForSale","type":"event"}]');
const punksContract = new web3.eth.Contract(punksAbi, punksAddress);
const punksDeploymentBlock = 3914495;

const wrapperAddress = "0xb7F7F6C52F2e2fdb1963Eab30438024864c313F6";
const wrapperAbi = JSON.parse('[{"inputs":[{"internalType":"address","name":"punkContract","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"proxy","type":"address"}],"name":"ProxyRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"punkIndex","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"punkIndex","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"proxyInfo","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"punkContract","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"registerProxy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"baseUri","type":"string"}],"name":"setBaseURI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]');
const wrapperContract = new web3.eth.Contract(wrapperAbi, wrapperAddress);
const wrapperDeploymentBlock = 10821737;

const hdAddress = "0x9490165195503fcF6A0FD20aC113223fEfb66eD5";
const hdAbi = JSON.parse('[{"inputs":[{"internalType":"address","name":"_feeSplitter","type":"address"}],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"_punkId","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"PUNKS","outputs":[{"internalType":"contract PunksContract","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WRAPPER","outputs":[{"internalType":"contract WrapperContract","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_baseTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_mintFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_minted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_publicMinting","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ercRecipient","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"imageHash","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_punkId","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_punkIds","type":"uint256[]"},{"internalType":"address","name":"to","type":"address"}],"name":"mintMany","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"__baseTokenURI","type":"string"}],"name":"setBaseTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_imageHash","type":"string"}],"name":"setImageHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"__mintFee","type":"uint256"}],"name":"setMintFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_val","type":"bool"}],"name":"setPublicMinting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"splitter","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenContract","type":"address"}],"name":"withdrawFungible","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenContract","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"withdrawNonFungible","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
const hdContract = new web3.eth.Contract(hdAbi, hdAddress);
const hdDeploymentBlock = 12411214;

// We will cache the list of punks here for reuse
let ownedPunks;

// Functions to connect with MetaMask
async function getAccounts() {
    return await ethereum.request({ method: "eth_requestAccounts" });
}

async function getAccount() {
    account = (await getAccounts())[0];
    // account = "0xe34Bded2b256430A9BE53CbF5cbA3B6d866d55F3";
    return account;
}

// Connect to MetaMask
async function connectWallet() {
    console.log("connecting wallet");
    res = await getAccounts();
    console.log("accounts:", res);
    account = await getAccount();
    $("#connectWallet").text(account.substring(0, 10)+"...");
    await update(account);
}

function compare(a, b) {
    return parseInt(a) - parseInt(b);
}

// The main callback function once a wallet is connected
async function update(account) {
    console.log(`calling update(${account})`);
    let events = await getEventsForAccount(account);
    let punkIds = await getPunksFromEvents(events, account);
    let wrapperEvents = await getWrapperEventsForAccount(account);
    let wrapperPunkIds = await getPunksFromWrapperEvents(wrapperEvents, account);
    let allPunkIds = Array.from(new Set([...punkIds, ...wrapperPunkIds])).sort(compare);
    let ownedPunks = await displayPunks(allPunkIds);
    console.log(`ownedPunks: ${ownedPunks}`);
    if(ownedPunks.length > 0) {
        $("#mintAll").show();
    }
}

// Iterate through all punk candidates and display the ones which are owned
async function displayPunks(punkIds) {
    ownedPunks = [];
    let account = await getAccount();
    $("#mintRow").empty();
    for(let punkId of punkIds) {
        punkOwner = await punksContract.methods.punkIndexToAddress(punkId).call();
        if(punkOwner.toLowerCase() == wrapperAddress.toLowerCase()) {
            punkOwner = await wrapperContract.methods.ownerOf(punkId).call();
        }
        if(punkOwner.toLowerCase() == account.toLowerCase()) {
            $("#mintRow").append(await punkCard(punkId));
            ownedPunks.push(punkId);
            console.log(`owns punk ${punkId}`);
        }
    }
    return ownedPunks;
}

async function recentMints() {
    params = {
        fromBlock: hdDeploymentBlock,
        toBlock: "latest",
    }
    let mintEvents = await hdContract.getPastEvents("Mint", params);
    console.log(`mintEvents: ${mintEvents}`);
    let ids = mintEvents.map(event => event.returnValues._punkId);
    return ids;
}

async function displayRecentMints() {
    let ids = await recentMints();
    console.log(`recent mints are ${ids}`);
    for(let i = 0; i < ids.length; i++) {
        obj = `<img src="${hdPunkImage(ids[i])}" height="100%">`;
        $("#recent-mints").append(obj);
    }
}


function processEvent(event) {
    punkId = event.returnValues.punkIndex;
    ethPrice = web3.utils.fromWei(event.returnValues.value, "ether");
    console.log("Punk "+punkId+" bought for "+ethPrice+" eth");
}

async function getEventsForPunk(punkId) {
    params = {
        fromBlock: deploymentBlock,
        toBlock: "latest",
        filter: {
            punkIndex: punkId,
        },
    }
    assignEvents = await punksContract.getPastEvents("Assign", params);
    punkTransferEvents = await punksContract.getPastEvents("PunkTransfer", params);
    punkBoughtEvents = await punksContract.getPastEvents("PunkBought", params);

    if(punkBoughtEvents.length > 0) {
        console.log("Punk "+punkId+", "+punkBoughtEvents.length+" purchases");
        punkBoughtEvents.forEach((event) => {
            console.log(web3.utils.fromWei(event.returnValues.value, "ether")+" eth")
        });
    }
    return punkBoughtEvents;
}

async function getEventsForAccount(account) {
    punkBoughtEvents = await punksContract.getPastEvents("PunkBought", {
        fromBlock: punksDeploymentBlock,
        toBlock: "latest",
        filter: {
            toAddress: account,
        },
    });
    punkTransferEvents = await punksContract.getPastEvents("PunkTransfer", {
        fromBlock: punksDeploymentBlock,
        toBlock: "latest",
        filter: {
            to: account,
        },
    });
    assignEvents = await punksContract.getPastEvents("Assign", {
        fromBlock: punksDeploymentBlock,
        toBlock: "latest",
        filter: {
            to: account,
        },
    });
    events = punkBoughtEvents.concat(punkTransferEvents).concat(assignEvents)
    console.log(events);
    return events;
}

async function getWrapperEventsForAccount(account) {
    // Transfer
    transferEvents = await wrapperContract.getPastEvents("Transfer", {
        fromBlock: wrapperDeploymentBlock,
        toBlock: "latest",
        filter: {
            to: account,
        },
    });
    console.log(transferEvents);
    return transferEvents;
}

// Even returns ones not under your control any more
function getPunksFromEvents(events, account) {
    let punkIdsSet = new Set();
    for(let i = 0; i < events.length; i++) {
        id = events[i].returnValues.punkIndex;
        punkIdsSet.add(parseInt(id));
    }
    console.log("punkIdsSet:", punkIdsSet);
    let punkIdsSorted = Array.from(punkIdsSet).sort();
    return punkIdsSorted;
}

function getPunksFromWrapperEvents(events, account) {
    let punkIdsSet = new Set();
    for(let i = 0; i < events.length; i++) {
        id = events[i].returnValues.tokenId;
        punkIdsSet.add(parseInt(id));
    }
    console.log("punkIdsSet:", punkIdsSet);
    let punkIdsSorted = Array.from(punkIdsSet).sort();
    return punkIdsSorted;
}

function padPunkId(punkId) {
    // Pads a punk ID to have 4 digits, precondition for finding image URL
    width = 4
    width -= punkId.toString().length;
    if (width > 0) {
        return new Array( width + (/\./.test( punkId ) ? 2 : 1) ).join( '0' ) + punkId;
    }
    return punkId + ""; // always return a string
}

function hdPunkImage(punkId) {
    return `https://storage.googleapis.com/hdpunks-cdn/images/${punkId}.png`;
}

function punkImage(punkId) {
    return `https://larvalabs.com/public/images/cryptopunks/punk${padPunkId(punkId)}.png`
}

async function punkCard(punkId) {
    let minted = await isMinted(punkId);
    let button;
    if(minted) {
        button = `<button id="mint${punkId}" type="button" class="btn btn-success" disabled="true">Minted!</button>`;
    } else {
        button = `<button id="mint${punkId}" type="button" class="btn btn-primary" onclick="mint(${punkId})">Mint</button>`;
    }

    return `
    <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <img class="punkbackground" src="${hdPunkImage(punkId)}" data-toggle="modal" data-target="#myModal" onclick="swapModal(${punkId})">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <img class="pixelated punkbackground float-left" src="${punkImage(punkId)}" height="72px" data-toggle="modal" data-target="#myModal" onclick="swapModal(${punkId})">
          </div>
          <div class="col">
            <div class="row">
              Punk ${punkId}
            </div>
            <div class="row">
              ${button}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
}

function swapModal(punkId) {
    $("#modal-hd").attr("src", hdPunkImage(punkId));
    $("#modal-og").attr("src", punkImage(punkId));
}

async function mintFeeInWei() {
    let fee = await hdContract.methods.mintFee().call();
    return fee
}

async function mintFeeInEth() {
    return "0.08"
    // return web3.utils.fromWei(await mintFeeInWei(), "ether");
}

async function isMinted(punkId) {
    return false;
    try {
        owner = await hdContract.methods.ownerOf(punkId).call();
        return true;
    } catch(error) {
        return false;
    }
    // owner = false;
    // console.log(`owner of HD punk ${punkId} is ${owner}`);
}

async function mint(punkId) {
    let account = await getAccount();
    console.log(`Calling web3 mint(${punkId}, ${account}), mint fee ${await mintFeeInEth()} eth`);
    let tx = await hdContract.methods.mint(punkId, account).send({
        "from": account,
        "value": await mintFeeInWei(),
    });
    console.log(tx);
    // tx = true;
    if(tx) {
        $(`#mint${punkId}`).attr("class", "btn btn-success").text("Minted!").prop("disabled", true);
    }
}

async function mintAll() {
    let account = await getAccount();
    let totalMintFee = ownedPunks.length * (await mintFeeInWei());
    console.log(`ownedPunks: ${ownedPunks}`);
    console.log(`Calling web3 mintMany(${ownedPunks}, ${account})`);
    let tx = await hdContract.methods.mintMany(
        ownedPunks,
        account
    ).send({
        "from": account,
        "value": totalMintFee,
    });
}

// async function updateBondingCurve() {
//     minted = await hdContract.methods.minted().call();
//     pct = 100 * minted / 1000;
//     console.log(`${minted} HD cats minted, which is ${pct}%`);
//     $("#bondingcurve").width(`${pct}%`).text(`${minted} cats minted`);
// }

async function placeholderPunks() {
    let punkIds = ["2484", "5577", "6089"];
    $("#mintRow").empty();
    for(let punkId of punkIds) {
        $("#mintRow").append(await punkCard(punkId));
    }
}

function addCallbacks() {

}

async function populateSearchId() {
    let punkId = $("#searchId").val();
    // $("#searchCard").empty().append(await punkCard(id));
    $("#searchHdPunkImage").attr("src", hdPunkImage(punkId));
    $("#searchOgPunkImage").attr("src", punkImage(punkId));
}

ethereum.on('accountsChanged', (accounts) => {
    console.log("accounts changed! now "+accounts);
    connectWallet();
});

// DOM modification
window.onload = async function() {
    $("#connectWallet").click(connectWallet);
    // $("#searchId").append(await punkCard(635));
    await populateSearchId();
    await displayRecentMints();
    // await placeholderPunks();
    await connectWallet();
    // account = "0x50eD6500E5e0E4ca1cf8F7006c4a4EbC469C82E1";
    // await updateBondingCurve();

};