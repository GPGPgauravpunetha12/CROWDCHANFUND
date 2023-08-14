"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_FilterAlt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7510);
/* harmony import */ var _mui_icons_material_FilterAlt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_FilterAlt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_AccountBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3329);
/* harmony import */ var _mui_icons_material_AccountBox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AccountBox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Paid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9283);
/* harmony import */ var _mui_icons_material_Paid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Paid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9356);
/* harmony import */ var _mui_icons_material_Event__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Event__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _artifacts_contracts_Campaign_sol_CampaignFactory_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4393);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);













function Index({
  AllData,
  HealthData,
  EducationData,
  AnimalData,
  Covid_19Data,
  AccidentData,
  getLatestCampaign
}) {
  const {
    0: latest,
    1: setLatest
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(getLatestCampaign);
  const Router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(HomeWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(ImageWrap, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
        fill: true,
        src: `/covid_2.jpg`,
        width: 1600,
        height: 790,
        objectFit: "cover"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(BlackFilter, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(NeedHelp, {
        children: "Need Help...."
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(NeedHeading, {
        children: "Finding Hopes in Humanity"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(LastHeading, {
        children: ["Be the reson for someone", ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
          style: {
            color: '#FFFF00'
          },
          children: "smile"
        }), " today"]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
        passHref: true,
        href: '/dashboard',
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(DonateNAVLinks, {
          active: Router.pathname == '/dashboard' ? true : false,
          children: "Donate Now"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(WeCan, {
        children: "We can Save the future"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(BorderLine, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
          src: "/v-3.png",
          height: 170,
          width: 370
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(AboutUs, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(Rightside, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Head_one, {
          children: "About Us"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Head_two, {
          children: "You Can Help them"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Description, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("p", {
            children: "We have Created a Platform which would transform the World as we Are moving Towards Metaverse so we have implemented secure platform in blockchain and only to verified user will raise the funds and as we saw during Covid-19 there were lot of scams were happenning earlier in milap and keeto platform and there are other platform were also there So we have come to the solution we have ................"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(ReadMore, {
          children: "Read More"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Smile, {
          children: "\uD83D\uDE00"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(Leftside, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Handshake, {
          children: "\uD83E\uDD1D"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Img_one, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
            fill: true,
            src: `/a_2.png`,
            width: 282,
            height: 385,
            objectFit: "cover"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Img_two, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
            fill: true,
            src: `/a_1.png`,
            width: 246,
            height: 341,
            objectFit: "cover"
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(Foundation, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Ribone_one, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Ribone_two, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Ribone_four, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Ribone_five, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Ribone_six, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Ribone_seven, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(Writting, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Head_wone, {
          children: "Angel Chainfund Foundation"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(W_content, {
          children: "We are charity non-profit funding organisations Our activities are taken place around the world"
        })]
      })]
    })]
  });
}
async function getStaticProps() {
  const provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.JsonRpcProvider("https://polygon-mumbai.g.alchemy.com/v2/Ef7CxwGNUyC2k6VvPFMgCX5x5DWGfQ_6");
  const contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract("0xFBfa2b493FE83a05bE4E435209a8fc4d60407947", _artifacts_contracts_Campaign_sol_CampaignFactory_json__WEBPACK_IMPORTED_MODULE_7__/* .abi */ .Mt, provider);
  const getAllCampaigns = contract.filters.campaignCreated();
  const AllCampaigns = await contract.queryFilter(getAllCampaigns);
  const AllData = AllCampaigns.map(e => {
    return {
      title: e.args.title,
      image: e.args.imgURI,
      owner: e.args.owner,
      timeStamp: parseInt(e.args.timestamp),
      amount: ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(e.args.requiredAmount),
      address: e.args.campaignAddress
    };
  });
  const getLatestCampaign = AllData.map(e => {
    const lat = [];
    let fst_min = Math.min(new Date().getTime() - new Date(e.timeStamp).getTime(), new Date().getTime());
    let sec_min = Math.min(fst_min - new Date(e.timeStamp).getTime(), fst_min);
    if (fst_min || sec_min) lat.push(e);
    return lat;
  });
  const getHealthCampaigns = contract.filters.campaignCreated(null, null, null, null, null, null, 'Health');
  const HealthCampaigns = await contract.queryFilter(getHealthCampaigns);
  const HealthData = HealthCampaigns.map(e => {
    return {
      title: e.args.title,
      image: e.args.imgURI,
      owner: e.args.owner,
      timeStamp: parseInt(e.args.timestamp),
      amount: ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(e.args.requiredAmount),
      address: e.args.campaignAddress
    };
  });
  const getEducationCampaigns = contract.filters.campaignCreated(null, null, null, null, null, null, 'education');
  const EducationCampaigns = await contract.queryFilter(getEducationCampaigns);
  const EducationData = EducationCampaigns.map(e => {
    return {
      title: e.args.title,
      image: e.args.imgURI,
      owner: e.args.owner,
      timeStamp: parseInt(e.args.timestamp),
      amount: ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(e.args.requiredAmount),
      address: e.args.campaignAddress
    };
  });
  const getAnimalCampaigns = contract.filters.campaignCreated(null, null, null, null, null, null, 'Animal');
  const AnimalCampaigns = await contract.queryFilter(getAnimalCampaigns);
  const AnimalData = AnimalCampaigns.map(e => {
    return {
      title: e.args.title,
      image: e.args.imgURI,
      owner: e.args.owner,
      timeStamp: parseInt(e.args.timestamp),
      amount: ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(e.args.requiredAmount),
      address: e.args.campaignAddress
    };
  });
  const getCovid_19_Campaigns = contract.filters.campaignCreated(null, null, null, null, null, null, 'Covid-19');
  const Covid_19_Campaigns = await contract.queryFilter(getCovid_19_Campaigns);
  const Covid_19Data = Covid_19_Campaigns.map(e => {
    return {
      title: e.args.title,
      image: e.args.imgURI,
      owner: e.args.owner,
      timeStamp: parseInt(e.args.timestamp),
      amount: ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(e.args.requiredAmount),
      address: e.args.campaignAddress
    };
  });
  const getAccident_Campaigns = contract.filters.campaignCreated(null, null, null, null, null, null, 'Accident');
  const Accident_Campaigns = await contract.queryFilter(getAccident_Campaigns);
  const AccidentData = Accident_Campaigns.map(e => {
    return {
      title: e.args.title,
      image: e.args.imgURI,
      owner: e.args.owner,
      timeStamp: parseInt(e.args.timestamp),
      amount: ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(e.args.requiredAmount),
      address: e.args.campaignAddress
    };
  });
  return {
    props: {
      AllData,
      HealthData,
      EducationData,
      AnimalData,
      Covid_19Data,
      AccidentData,
      getLatestCampaign
    }
  };
} // background: rgba(0,0,0,0.4);

const HomeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__HomeWrapper",
  componentId: "sc-1p0q2g7-0"
})(["display:flex;flex-direction:column;align-items:center;width:100%;"]);
const FilterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__FilterWrapper",
  componentId: "sc-1p0q2g7-1"
})(["display:flex;align-items:center;width:80%;margin-top:15px;z-index:1;"]);
const Category = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__Category",
  componentId: "sc-1p0q2g7-2"
})(["padding:10px 15px;background-color:", ";margin:0px 15px;border-radius:8px;font-family:'Poppins';font-weight:normal;cursor:pointer;z-index:1;"], props => props.theme.bgDiv);
const CardsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__CardsWrapper",
  componentId: "sc-1p0q2g7-3"
})(["display:flex;z-index:1;justify-content:space-between;flex-wrap:wrap;width:80%;margin-top:25px;"]);
const Card = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__Card",
  componentId: "sc-1p0q2g7-4"
})(["width:30%;margin-top:20px;background-color:", ";z-index:1;&:hover{transform:translateY(-10px);transition:transform 0.5s;}&:not(:hover){transition:transform 0.5s;}"], props => props.theme.bgDiv);
const CardImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__CardImg",
  componentId: "sc-1p0q2g7-5"
})(["position:relative;height:120px;width:100%;z-index:1;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
  displayName: "pages__Title",
  componentId: "sc-1p0q2g7-6"
})(["z-index:1;font-family:'Roboto';font-size:28px;margin:2px 0px;padding:5px;cursor:pointer;font-weight:normal;"]);
const Titlee = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
  displayName: "pages__Titlee",
  componentId: "sc-1p0q2g7-7"
})(["font-family:'Roboto';font-size:25px;margin:2px 0px;width:290px;z-index:1;position:relative;background-color:", ";padding:5px;cursor:pointer;font-weight:bold;display:flex;justify-content:center;margin-left:6%;border-radius:8px;margin-top:15px;"], props => props.active ? props.theme.bgSubDiv : props.theme.bgDiv);
const CardData = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__CardData",
  componentId: "sc-1p0q2g7-8"
})(["display:flex;justify-content:space-between;margin:2px 0px;background-color:", ";padding:5px;z-index:1;cursor:pointer;"], props => props.theme.bgSubDiv);
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "pages__Text",
  componentId: "sc-1p0q2g7-9"
})(["display:flex;z-index:1;align-items:center;margin:0;padding:0;font-family:'Roboto';font-size:18px;font-weight:bold;"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__Button",
  componentId: "sc-1p0q2g7-10"
})(["padding:8px;text-align:center;width:100%;background-color:#00b712;background-image:linear-gradient(180deg,#00b712 0%,#5aff15 80%);border:none;cursor:pointer;font-family:'Roboto';text-transform:uppercase;color:#fff;font-size:14px;z-index:1;font-weight:bold;"]); // image wrap home

const ImageWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "pages__ImageWrap",
  componentId: "sc-1p0q2g7-11"
})(["height:100%;display:flex;position:relative;justify-content:center;align-items:center;& > span{position:relative;z-index:0;}"]);
const NeedHelp = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__NeedHelp",
  componentId: "sc-1p0q2g7-12"
})(["position:absolute;z-index:2;width:281px;height:48px;left:24px;top:21%;font-family:'Rock Salt';font-style:normal;font-weight:400;font-size:34px;line-height:48px;color:#ffffff;"]);
const NeedHeading = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__NeedHeading",
  componentId: "sc-1p0q2g7-13"
})(["width:600px;height:192px;top:29%;font-family:'Roboto';font-style:normal;font-weight:600;font-size:84px;line-height:92px;left:24px;background:linear-gradient(90deg,#f6d365 0%,#fda085 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-fill-color:transparent;position:absolute;padding:0px;gap:35px;text-align:center;z-index:2;"]);
const LastHeading = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__LastHeading",
  componentId: "sc-1p0q2g7-14"
})(["position:absolute;width:269px;height:19px;z-index:2;left:195px;font-family:'Roboto';top:57%;font-weight:400;font-size:16px;line-height:19px;color:#ffffff;"]);
const DonateNAVLinks = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__DonateNAVLinks",
  componentId: "sc-1p0q2g7-15"
})(["display:flex;flex-direction:row;align-items:flex-start;padding:11px 22px;gap:10px;z-index:2;position:absolute;width:199px;height:95px;left:235px;top:65%;background:linear-gradient(90deg,#fa709a -64.53%,#fee140 173.84%);box-shadow:0px 12px 8px rgba(0,0,0,0.25);border-radius:54px;height:23px;font-family:'Roboto';font-style:normal;font-weight:400;font-size:35px;line-height:23px;color:#ffffff;cursor:pointer;"]);
const WeCan = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__WeCan",
  componentId: "sc-1p0q2g7-16"
})(["position:absolute;width:430px;height:228px;left:1015px;top:155px;font-family:'Rock Salt';font-style:normal;font-weight:400;font-size:84px;line-height:112px;color:rgba(255,255,255,0.84);"]);
const BorderLine = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__BorderLine",
  componentId: "sc-1p0q2g7-17"
})(["position:absolute;width:533.94px;height:110.33px;left:1006px;top:362px;"]);
const BlackFilter = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__BlackFilter",
  componentId: "sc-1p0q2g7-18"
})(["position:absolute;top:0;left:0;height:750px;background:rgba(0,0,0,0.4);z-index:1;animation:sidein 4s ease-out 2s 1 normal;animation-fill-mode:forwards;@keyframes sidein{0%{width:0px;}100%{width:751px;}}"]); //------------------------------ css for about Us section

const AboutUs = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__AboutUs",
  componentId: "sc-1p0q2g7-19"
})(["position:relative;height:100vh;width:100%;"]);
const Leftside = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__Leftside",
  componentId: "sc-1p0q2g7-20"
})(["left:26%;"]);
const Rightside = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__Rightside",
  componentId: "sc-1p0q2g7-21"
})([""]); //left side

const Handshake = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__Handshake",
  componentId: "sc-1p0q2g7-22"
})(["position:absolute;left:8.38%;right:91.25%;top:9%;transform:scale(2.8);width:45px;height:60px;"]);
const Img_one = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "pages__Img_one",
  componentId: "sc-1p0q2g7-23"
})(["position:absolute;width:282px;height:385px;left:10%;top:150px;& > div{box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);}"]);
const Img_two = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "pages__Img_two",
  componentId: "sc-1p0q2g7-24"
})(["position:absolute;width:246px;height:341px;left:24%;right:70%;top:260px;& > div{box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);}"]); //Right side

const Head_one = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__Head_one",
  componentId: "sc-1p0q2g7-25"
})(["position:absolute;width:354px;height:38px;right:149px;top:200px;font-family:'Roboto';font-style:normal;font-weight:bold;font-size:32px;line-height:38px;color:#fe4911;"]);
const Head_two = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__Head_two",
  componentId: "sc-1p0q2g7-26"
})(["position:absolute;width:365px;height:112px;right:138px;top:239px;font-family:'Roboto';font-style:normal;font-weight:600;font-size:48px;line-height:56px;"]);
const Smile = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__Smile",
  componentId: "sc-1p0q2g7-27"
})(["position:absolute;right:9.84%;top:610px;width:19px;height:19px;transform:scale(1.8);"]);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "pages__Description",
  componentId: "sc-1p0q2g7-28"
})(["position:absolute;width:337px;height:105px;right:172px;top:336px;font-family:'Roboto';font-style:normal;font-weight:400;font-size:15px;line-height:21px;"]);
const ReadMore = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__ReadMore",
  componentId: "sc-1p0q2g7-29"
})(["top:577px;position:absolute;width:81px;height:25px;right:431px;border-bottom:1px solid #FE4911;padding:0 0 4px;font-family:'Roboto';font-style:normal;font-weight:bold;font-size:16px;line-height:19px;"]);
const Foundation = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__Foundation",
  componentId: "sc-1p0q2g7-30"
})(["display:flex;flex-direction:column;align-items:center;width:100%;height:100vh;"]);
const Writting = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__Writting",
  componentId: "sc-1p0q2g7-31"
})(["display:flex;position:relative;flex-direction:column;align-items:flex-start;padding:64px;gap:32px;width:673px;height:212px;left:154px;top:200px;background:linear-gradient(90deg,#F6D365 0%,#FDA085 100%);box-shadow:0px 4px 4px rgba(0,0,0,0.25);border-radius:8px;"]);
const Ribone_one = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__Ribone_one",
  componentId: "sc-1p0q2g7-32"
})(["position:absolute;left:0;right:52.22%;top:266.38%;bottom:-181.72%;background:linear-gradient(90deg,#FF9A9E 0%,#FAD0C4 99%,#FAD0C4 100%);box-shadow:0px 4px 4px rgba(0,0,0,0.25);border-radius:100px;transform:rotate(-16deg);"]);
const Ribone_two = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__Ribone_two",
  componentId: "sc-1p0q2g7-33"
})(["position:absolute;left:10.12%;right:32.1%;top:272.25%;bottom:-188.58%;background:linear-gradient(90deg,#84FAB0 0%,#8FD3F4 100%);box-shadow:0px 4px 4px rgba(0,0,0,0.25);border-radius:100px;transform:rotate(-16deg);"]);
const Ribone_three = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__Ribone_three",
  componentId: "sc-1p0q2g7-34"
})(["position:absolute;left:3.12%;right:32.1%;top:290.25%;bottom:-204.58%;background:linear-gradient(90deg,#96FBC4 0%,#F9F586 100%);box-shadow:0px 4px 4px rgba(0,0,0,0.25);border-radius:100px;transform:rotate(-16deg);"]);
const Ribone_four = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__Ribone_four",
  componentId: "sc-1p0q2g7-35"
})(["position:absolute;left:43.09%;right:17.13%;top:273.57%;bottom:-188.9%;background:linear-gradient(90deg,#6A11CB 0%,#2575FC 100%);background:linear-gradient(90deg,#6A11CB 0%,#2575FC 100%);box-shadow:0px 4px 4px rgb(0 0 0 / 25%);border-radius:100px;-webkit-transform:rotate(-16deg);-ms-transform:rotate(-16deg);transform:rotate(-16deg);"]);
const Ribone_five = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__Ribone_five",
  componentId: "sc-1p0q2g7-36"
})(["position:absolute;left:65.84%;right:-4.61%;top:227.11%;bottom:-142.45%;background:linear-gradient(90deg,#A1C4FD 0%,#C2E9FB 100%);box-shadow:0px 4px 4px rgba(0,0,0,0.25);border-radius:100px;transform:rotate(-16deg);"]);
const Ribone_six = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__Ribone_six",
  componentId: "sc-1p0q2g7-37"
})(["position:absolute;left:70.96%;right:-4.73%;top:240.98%;bottom:-156.32%;background:linear-gradient(90deg,#16D9E3 0%,#30C7EC 47%,#46AEF7 100%);box-shadow:0px 4px 4px rgba(0,0,0,0.25);border-radius:100px;transform:rotate(-16deg);"]);
const Ribone_seven = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__Ribone_seven",
  componentId: "sc-1p0q2g7-38"
})(["position:absolute;left:75.9%;right:-3.68%;top:255.2%;bottom:-171.53%;background:linear-gradient(90deg,#92FE9D 0%,#00C9FF 100%);box-shadow:0px 4px 4px rgba(0,0,0,0.25);border-radius:100px;transform:rotate(-16deg);"]);
const Head_wone = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__Head_wone",
  componentId: "sc-1p0q2g7-39"
})(["width:440px;height:48px;font-family:'Abhaya Libre ExtraBold';font-style:normal;font-weight:800;font-size:35px;line-height:48px;text-align:center;color:#FFFFFF;flex:none;order:0;flex-grow:0;"]);
const W_content = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__W_content",
  componentId: "sc-1p0q2g7-40"
})(["width:506px;height:64px;font-family:'Abhaya Libre';font-style:normal;font-weight:700;font-size:22px;line-height:32px;color:#FFFFFF;flex:none;order:1;flex-grow:0;"]); // ---------------------Urgent Causes 

const Urgent_case = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__Urgent_case",
  componentId: "sc-1p0q2g7-41"
})(["height:100vh;width:100%;"]);
const U_head = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__U_head",
  componentId: "sc-1p0q2g7-42"
})(["position:absolute;width:157px;height:23px;left:47px;top:2038px;font-family:'Roboto';font-style:normal;font-weight:600;font-size:20px;line-height:23px;"]);
const U_one = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__U_one",
  componentId: "sc-1p0q2g7-43"
})(["position:absolute;width:481px;height:221px;left:407px;top:1962px;background:rgba(207,203,194,0.45);box-shadow:0px 20px 30px rgba(0,0,0,0.25);border-radius:6px 0px 0px 6px;"]);
const U_two = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__U_two",
  componentId: "sc-1p0q2g7-44"
})([""]);
const U_fill = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__U_fill",
  componentId: "sc-1p0q2g7-45"
})([""]);
const U_one_img = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "pages__U_one_img",
  componentId: "sc-1p0q2g7-46"
})([""]);
const U_one_title = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__U_one_title",
  componentId: "sc-1p0q2g7-47"
})(["position:absolute;width:173.65px;height:28.94px;left:1017.91px;top:1950.36px;font-family:'Roboto';font-style:normal;font-weight:400;font-size:22px;line-height:26px;color:#FE4911;"]);
const U_one_desc = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__U_one_desc",
  componentId: "sc-1p0q2g7-48"
})([""]);
const U_one_amount = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__U_one_amount",
  componentId: "sc-1p0q2g7-49"
})([""]);
const kard = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "pages__kard",
  componentId: "sc-1p0q2g7-50"
})([""]);

/***/ }),

/***/ 3329:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AccountBox");

/***/ }),

/***/ 9356:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Event");

/***/ }),

/***/ 7510:
/***/ ((module) => {

module.exports = require("@mui/icons-material/FilterAlt");

/***/ }),

/***/ 9283:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Paid");

/***/ }),

/***/ 1982:
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = __webpack_require__.X(0, [121,383,563,664,675,393], () => (__webpack_exec__(2748)));
module.exports = __webpack_exports__;

})();