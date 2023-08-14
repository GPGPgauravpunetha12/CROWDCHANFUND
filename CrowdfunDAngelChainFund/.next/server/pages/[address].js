"use strict";
(() => {
var exports = {};
exports.id = 575;
exports.ids = [575];
exports.modules = {

/***/ 9934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Detail),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(1982);
// EXTERNAL MODULE: ./artifacts/contracts/Campaign.sol/CampaignFactory.json
var CampaignFactory = __webpack_require__(4393);
;// CONCATENATED MODULE: ./artifacts/contracts/Campaign.sol/Campaign.json
const Campaign_namespaceObject = JSON.parse('{"Mt":[{"inputs":[{"internalType":"string","name":"campaignTitle","type":"string"},{"internalType":"uint256","name":"requiredCampaignAmount","type":"uint256"},{"internalType":"string","name":"imgURI","type":"string"},{"internalType":"string","name":"storyURI","type":"string"},{"internalType":"address","name":"campaignOwner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"donar","type":"address"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"donated","type":"event"},{"inputs":[],"name":"donate","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"image","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"receivedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"requiredAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"story","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"title","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]}');
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/[address].js
// import styled from "styled-components";
// import Image from "next/image";
// import {ethers} from 'ethers';
// import CampaignFactory from '../artifacts/contracts/Campaign.sol/CampaignFactory.json'
// import Campaign from '../artifacts/contracts/Campaign.sol/Campaign.json'
// import { useEffect, useState } from "react";
// export default function Detail({Data, DonationsData}) {
//   const [mydonations, setMydonations] = useState([]);
//   const [story, setStory] = useState('');
//   const [amount, setAmount] = useState();
//   const [change, setChange] = useState(false);
//   useEffect(() => {
//     const Request = async () => {
//       let storyData;
//       await window.ethereum.request({ method: 'eth_requestAccounts' });
//       const Web3provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = Web3provider.getSigner();
//       const Address = await signer.getAddress();
//       const provider = new ethers.providers.JsonRpcProvider(
//         process.env.NEXT_PUBLIC_RPC_URL
//       );
//       const contract = new ethers.Contract(
//         Data.address,
//         Campaign.abi,
//         provider
//       );
//       fetch('https://crowdfunding.infura-ipfs.io/ipfs/' + Data.storyUrl)
//             .then(res => res.text()).then(data => storyData = data);
//       const MyDonations = contract.filters.donated(Address);
//       const MyAllDonations = await contract.queryFilter(MyDonations);
//       setMydonations(MyAllDonations.map((e) => {
//         return {
//           donar: e.args.donar,
//           amount: ethers.utils.formatEther(e.args.amount),
//           timestamp : parseInt(e.args.timestamp)
//         }
//       }));
//       setStory(storyData);
//     }
//     Request();
//   }, [change])
//   const DonateFunds = async () => {
//     try {
//       await window.ethereum.request({ method: 'eth_requestAccounts' });
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner();
//       const contract = new ethers.Contract(Data.address, Campaign.abi, signer);
//       const transaction = await contract.donate({value: ethers.utils.parseEther(amount)});
//       await transaction.wait();
//       setChange(true);
//       setAmount('');
//   } catch (error) {
//       console.log(error);
//   }
//   }
//   return (
//     <DetailWrapper>
//       <LeftContainer>
//         <ImageSection>
//           <Image
//             alt="crowdfunding dapp"
//             layout="fill"
//             src={
//               "https://crowdfunding.infura-ipfs.io/ipfs/" + Data.image
//             }
//           />
//         </ImageSection>
//         <Text>
//           {story}
//         </Text>
//       </LeftContainer>
//       <RightContainer>
//         <Title>{Data.title}</Title>
//         <DonateSection>
//           <Input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="Enter Amount To Donate" />
//           <Donate onClick={DonateFunds}>Donate</Donate>
//         </DonateSection>
//         <FundsData>
//           <Funds>
//             <FundText>Required Amount</FundText>
//             <FundText>{Data.requiredAmount} Matic</FundText>
//           </Funds>
//           <Funds>
//             <FundText>Received Amount</FundText>
//             <FundText>{Data.receivedAmount} Matic</FundText>
//           </Funds>
//         </FundsData>
//         <Donated>
//           <LiveDonation>
//             <DonationTitle>Recent Donation</DonationTitle>
//             {DonationsData.map((e) => {
//               return (
//                 <Donation key={e.timestamp}>
//                 <DonationData>{e.donar.slice(0,6)}...{e.donar.slice(39)}</DonationData>
//                 <DonationData>{e.amount} Matic</DonationData>
//                 <DonationData>{new Date(e.timestamp * 1000).toLocaleString()}</DonationData>
//               </Donation>
//               )
//             })
//             }
//           </LiveDonation>
//           <MyDonation>
//             <DonationTitle>My Past Donation</DonationTitle>
//             {mydonations.map((e) => {
//               return (
//                 <Donation key={e.timestamp}>
//                 <DonationData>{e.donar.slice(0,6)}...{e.donar.slice(39)}</DonationData>
//                 <DonationData>{e.amount} Matic</DonationData>
//                 <DonationData>{new Date(e.timestamp * 1000).toLocaleString()}</DonationData>
//               </Donation>
//               )
//             })
//             }
//           </MyDonation>
//         </Donated>
//       </RightContainer>
//     </DetailWrapper>
//   );
// }
// export async function getStaticPaths() {
//   const provider = new ethers.providers.JsonRpcProvider(
//     process.env.NEXT_PUBLIC_RPC_URL
//   );
//   const contract = new ethers.Contract(
//     process.env.NEXT_PUBLIC_ADDRESS,
//     CampaignFactory.abi,
//     provider
//   );
//   const getAllCampaigns = contract.filters.campaignCreated();
//   const AllCampaigns = await contract.queryFilter(getAllCampaigns);
//   return {
//     paths: AllCampaigns.map((e) => ({
//         params: {
//           address: e.args.campaignAddress.toString(),
//         }
//     })),
//     fallback: "blocking"
//   }
// }
// export async function getStaticProps(context) {
//   const provider = new ethers.providers.JsonRpcProvider(
//     process.env.NEXT_PUBLIC_RPC_URL
//   );
//   const contract = new ethers.Contract(
//     context.params.address,
//     Campaign.abi,
//     provider
//   );
//   const title = await contract.title();
//   const requiredAmount = await contract.requiredAmount();
//   const image = await contract.image();
//   const storyUrl = await contract.story();
//   const owner = await contract.owner();
//   const receivedAmount = await contract.receivedAmount();
//   const Donations = contract.filters.donated();
//   const AllDonations = await contract.queryFilter(Donations);
//   const Data = {
//       address: context.params.address,
//       title, 
//       requiredAmount: ethers.utils.formatEther(requiredAmount), 
//       image, 
//       receivedAmount: ethers.utils.formatEther(receivedAmount), 
//       storyUrl, 
//       owner,
//   }
//   const DonationsData =  AllDonations.map((e) => {
//     return {
//       donar: e.args.donar,
//       amount: ethers.utils.formatEther(e.args.amount),
//       timestamp : parseInt(e.args.timestamp)
//   }});
//   return {
//     props: {
//       Data,
//       DonationsData
//     }
//   }
// }
// const DetailWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 20px;
//   width: 98%;
// `;
// const LeftContainer = styled.div`
//   width: 45%;
// `;
// const RightContainer = styled.div`
//   width: 50%;
// `;
// const ImageSection = styled.div`
//   width: 100%;
//   position: relative;
//   height: 350px;
//   overflow: hidden;
// `;
// const Text = styled.p`
//   font-family: "Roboto";
//   font-size: large;
//   color: ${(props) => props.theme.color};
//   text-align: justify;
// `;
// const Title = styled.h1`
//   padding: 0;
//   margin: 0;
//   font-family: "Poppins";
//   font-size: x-large;
//   color: ${(props) => props.theme.color};
// `;
// const DonateSection = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: space-between;
//   align-items: center;
//   margin-top: 10px;
// `;
// const Input = styled.input`
//   padding: 8px 15px;
//   background-color: ${(props) => props.theme.bgDiv};
//   color: ${(props) => props.theme.color};
//   border: none;
//   border-radius: 8px;
//   outline: none;
//   font-size: large;
//   width: 40%;
//   height: 40px;
// `;
// const Donate = styled.button`
//   display: flex;
//   justify-content: center;
//   width: 40%;
//   padding: 15px;
//   color: white;
//   background-color: #00b712;
//   background-image: linear-gradient(180deg, #00b712 0%, #5aff15 80%);
//   border: none;
//   cursor: pointer;
//   font-weight: bold;
//   border-radius: 8px;
//   font-size: large;
// `;
// const FundsData = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   margin-top: 10px;
// `;
// const Funds = styled.div`
//   width: 45%;
//   background-color: ${(props) => props.theme.bgDiv};
//   padding: 8px;
//   border-radius: 8px;
//   text-align: center;
// `;
// const FundText = styled.p`
//   margin: 2px;
//   padding: 0;
//   font-family: "Poppins";
//   font-size: normal;
// `;
// const Donated = styled.div`
//   height: 280px;
//   margin-top: 15px;
//   background-color: ${(props) => props.theme.bgDiv};
// `;
// const LiveDonation = styled.div`
//   height: 65%;
//   overflow-y: auto;
// `;
// const MyDonation = styled.div`
//   height: 35%;
//   overflow-y: auto;
// `;
// const DonationTitle = styled.div`
//   font-family: "Roboto";
//   font-size: x-small;
//   text-transform: uppercase;
//   padding: 4px;
//   text-align: center;
//   background-color: #4cd137;
// `;
// const Donation = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 4px;
//   background-color: ${(props) => props.theme.bgSubDiv};
//   padding: 4px 8px;
// `;
// const DonationData = styled.p`
//   color: ${(props) => props.theme.color};
//   font-family: "Roboto";
//   font-size: large;
//   margin: 0;
//   padding: 0;
// `;








function Detail({
  Data,
  DonationsData
}) {
  const {
    0: mydonations,
    1: setMydonations
  } = (0,external_react_.useState)([]);
  const {
    0: story,
    1: setStory
  } = (0,external_react_.useState)('');
  const {
    0: amount,
    1: setAmount
  } = (0,external_react_.useState)();
  const {
    0: change,
    1: setChange
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    const Request = async () => {
      let storyData;
      await window.ethereum.request({
        method: 'eth_requestAccounts'
      });
      const Web3provider = new external_ethers_.ethers.providers.Web3Provider(window.ethereum);
      const signer = Web3provider.getSigner();
      const Address = await signer.getAddress();
      const provider = new external_ethers_.ethers.providers.JsonRpcProvider("https://polygon-mumbai.g.alchemy.com/v2/Ef7CxwGNUyC2k6VvPFMgCX5x5DWGfQ_6");
      const contract = new external_ethers_.ethers.Contract(Data.address, Campaign_namespaceObject.Mt, provider);
      fetch('https://crowdfunding.infura-ipfs.io/ipfs/' + Data.storyUrl).then(res => res.text()).then(data => storyData = data);
      const MyDonations = contract.filters.donated(Address);
      const MyAllDonations = await contract.queryFilter(MyDonations);
      setMydonations(MyAllDonations.map(e => {
        return {
          donar: e.args.donar,
          amount: external_ethers_.ethers.utils.formatEther(e.args.amount),
          timestamp: parseInt(e.args.timestamp)
        };
      }));
      setStory(storyData);
    };

    Request();
  }, [change]);

  const DonateFunds = async () => {
    try {
      await window.ethereum.request({
        method: 'eth_requestAccounts'
      });
      const provider = new external_ethers_.ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new external_ethers_.ethers.Contract(Data.address, Campaign_namespaceObject.Mt, signer);
      const transaction = await contract.donate({
        value: external_ethers_.ethers.utils.parseEther(amount)
      });
      await transaction.wait();
      setChange(true);
      setAmount('');
    } catch (error) {
      console.log(error);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(DetailWrapper, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(LeftContainer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(ImageSection, {
        children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
          alt: "crowdfunding dapp",
          layout: "fill",
          src: "https://crowdfunding.infura-ipfs.io/ipfs/" + Data.image
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Text, {
        children: story
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(RightContainer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Title, {
        children: Data.title
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(DonateSection, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Input, {
          value: amount,
          onChange: e => setAmount(e.target.value),
          type: "number",
          placeholder: "Enter Amount To Donate"
        }), /*#__PURE__*/jsx_runtime_.jsx(Donate, {
          onClick: DonateFunds,
          children: "Donate"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FundsData, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Funds, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(FundText, {
            children: "Required Amount"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FundText, {
            children: [Data.requiredAmount, " Matic"]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Funds, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(FundText, {
            children: "Received Amount"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FundText, {
            children: [Data.receivedAmount, " Matic"]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Donated, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(LiveDonation, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(DonationTitle, {
            children: "Recent Donation"
          }), DonationsData.map(e => {
            return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Donation, {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(DonationData, {
                children: [e.donar.slice(0, 6), "...", e.donar.slice(39)]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(DonationData, {
                children: [e.amount, " Matic"]
              }), /*#__PURE__*/jsx_runtime_.jsx(DonationData, {
                children: new Date(e.timestamp * 1000).toLocaleString()
              })]
            }, e.timestamp);
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MyDonation, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(DonationTitle, {
            children: "My Past Donation"
          }), mydonations.map(e => {
            return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Donation, {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(DonationData, {
                children: [e.donar.slice(0, 6), "...", e.donar.slice(39)]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(DonationData, {
                children: [e.amount, " Matic"]
              }), /*#__PURE__*/jsx_runtime_.jsx(DonationData, {
                children: new Date(e.timestamp * 1000).toLocaleString()
              })]
            }, e.timestamp);
          })]
        })]
      })]
    })]
  });
}
async function getStaticPaths() {
  const provider = new external_ethers_.ethers.providers.JsonRpcProvider("https://polygon-mumbai.g.alchemy.com/v2/Ef7CxwGNUyC2k6VvPFMgCX5x5DWGfQ_6");
  const contract = new external_ethers_.ethers.Contract("0xFBfa2b493FE83a05bE4E435209a8fc4d60407947", CampaignFactory/* abi */.Mt, provider);
  const getAllCampaigns = contract.filters.campaignCreated();
  const AllCampaigns = await contract.queryFilter(getAllCampaigns);
  return {
    paths: AllCampaigns.map(e => ({
      params: {
        address: e.args.campaignAddress.toString()
      }
    })),
    fallback: "blocking"
  };
}
async function getStaticProps(context) {
  const provider = new external_ethers_.ethers.providers.JsonRpcProvider("https://polygon-mumbai.g.alchemy.com/v2/Ef7CxwGNUyC2k6VvPFMgCX5x5DWGfQ_6");
  const contract = new external_ethers_.ethers.Contract(context.params.address, Campaign_namespaceObject.Mt, provider);
  const title = await contract.title();
  const requiredAmount = await contract.requiredAmount();
  const image = await contract.image();
  const storyUrl = await contract.story();
  const owner = await contract.owner();
  const receivedAmount = await contract.receivedAmount();
  const Donations = contract.filters.donated();
  const AllDonations = await contract.queryFilter(Donations);
  const Data = {
    address: context.params.address,
    title,
    requiredAmount: external_ethers_.ethers.utils.formatEther(requiredAmount),
    image,
    receivedAmount: external_ethers_.ethers.utils.formatEther(receivedAmount),
    storyUrl,
    owner
  };
  const DonationsData = AllDonations.map(e => {
    return {
      donar: e.args.donar,
      amount: external_ethers_.ethers.utils.formatEther(e.args.amount),
      timestamp: parseInt(e.args.timestamp)
    };
  });
  return {
    props: {
      Data,
      DonationsData
    },
    revalidate: 10
  };
}
const DetailWrapper = external_styled_components_default().div.withConfig({
  displayName: "address__DetailWrapper",
  componentId: "sc-hw3t8r-0"
})(["display:flex;justify-content:space-between;padding:20px;width:98%;position:relative;top:5rem;"]);
const LeftContainer = external_styled_components_default().div.withConfig({
  displayName: "address__LeftContainer",
  componentId: "sc-hw3t8r-1"
})(["width:45%;"]);
const RightContainer = external_styled_components_default().div.withConfig({
  displayName: "address__RightContainer",
  componentId: "sc-hw3t8r-2"
})(["width:50%;"]);
const ImageSection = external_styled_components_default().div.withConfig({
  displayName: "address__ImageSection",
  componentId: "sc-hw3t8r-3"
})(["width:100%;position:relative;height:350px;"]);
const Text = external_styled_components_default().p.withConfig({
  displayName: "address__Text",
  componentId: "sc-hw3t8r-4"
})(["font-family:\"Roboto\";font-size:large;color:", ";text-align:justify;"], props => props.theme.color);
const Title = external_styled_components_default().h1.withConfig({
  displayName: "address__Title",
  componentId: "sc-hw3t8r-5"
})(["padding:0;margin:0;font-family:\"Poppins\";font-size:x-large;color:", ";"], props => props.theme.color);
const DonateSection = external_styled_components_default().div.withConfig({
  displayName: "address__DonateSection",
  componentId: "sc-hw3t8r-6"
})(["display:flex;width:100%;justify-content:space-between;align-items:center;margin-top:10px;"]);
const Input = external_styled_components_default().input.withConfig({
  displayName: "address__Input",
  componentId: "sc-hw3t8r-7"
})(["padding:8px 15px;background-color:", ";color:", ";border:none;border-radius:8px;outline:none;font-size:large;width:40%;height:40px;"], props => props.theme.bgDiv, props => props.theme.color);
const Donate = external_styled_components_default().button.withConfig({
  displayName: "address__Donate",
  componentId: "sc-hw3t8r-8"
})(["display:flex;justify-content:center;width:40%;padding:15px;color:white;background-color:#00b712;background-image:linear-gradient(180deg,#00b712 0%,#5aff15 80%);border:none;cursor:pointer;font-weight:bold;border-radius:8px;font-size:large;"]);
const FundsData = external_styled_components_default().div.withConfig({
  displayName: "address__FundsData",
  componentId: "sc-hw3t8r-9"
})(["width:100%;display:flex;justify-content:space-between;margin-top:10px;"]);
const Funds = external_styled_components_default().div.withConfig({
  displayName: "address__Funds",
  componentId: "sc-hw3t8r-10"
})(["width:45%;background-color:", ";padding:8px;border-radius:8px;text-align:center;"], props => props.theme.bgDiv);
const FundText = external_styled_components_default().p.withConfig({
  displayName: "address__FundText",
  componentId: "sc-hw3t8r-11"
})(["margin:2px;padding:0;font-family:\"Poppins\";font-size:normal;"]);
const Donated = external_styled_components_default().div.withConfig({
  displayName: "address__Donated",
  componentId: "sc-hw3t8r-12"
})(["height:280px;margin-top:15px;background-color:", ";"], props => props.theme.bgDiv);
const LiveDonation = external_styled_components_default().div.withConfig({
  displayName: "address__LiveDonation",
  componentId: "sc-hw3t8r-13"
})(["height:65%;overflow-y:auto;"]);
const MyDonation = external_styled_components_default().div.withConfig({
  displayName: "address__MyDonation",
  componentId: "sc-hw3t8r-14"
})(["height:35%;overflow-y:auto;"]);
const DonationTitle = external_styled_components_default().div.withConfig({
  displayName: "address__DonationTitle",
  componentId: "sc-hw3t8r-15"
})(["font-family:\"Roboto\";font-size:x-small;text-transform:uppercase;padding:4px;text-align:center;background-color:#4cd137;"]);
const Donation = external_styled_components_default().div.withConfig({
  displayName: "address__Donation",
  componentId: "sc-hw3t8r-16"
})(["display:flex;justify-content:space-between;margin-top:4px;background-color:", ";padding:4px 8px;"], props => props.theme.bgSubDiv);
const DonationData = external_styled_components_default().p.withConfig({
  displayName: "address__DonationData",
  componentId: "sc-hw3t8r-17"
})(["color:", ";font-family:\"Roboto\";font-size:large;margin:0;padding:0;"], props => props.theme.color);

/***/ }),

/***/ 1982:
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,563,675,393], () => (__webpack_exec__(9934)));
module.exports = __webpack_exports__;

})();