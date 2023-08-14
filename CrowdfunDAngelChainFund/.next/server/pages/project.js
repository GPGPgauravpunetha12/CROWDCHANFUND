"use strict";
(() => {
var exports = {};
exports.id = 512;
exports.ids = [512];
exports.modules = {

/***/ 2625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Projects),
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













function Projects({
  AllData,
  HealthData,
  EducationData,
  AnimalData,
  Covid_19Data,
  AccidentData
}) {
  const {
    0: filter,
    1: setFilter
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(AllData);
  const Router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(HomeWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(ProjectWrap, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Titlee, {
        children: "Explore Campaigns"
      }), " "]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(FilterWrapper, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((_mui_icons_material_FilterAlt__WEBPACK_IMPORTED_MODULE_1___default()), {
        style: {
          fontSize: 40
        }
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Category, {
        onClick: () => setFilter(AllData),
        children: "All"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Category, {
        onClick: () => setFilter(HealthData),
        children: "Health"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Category, {
        onClick: () => setFilter(EducationData),
        children: "Education"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Category, {
        onClick: () => setFilter(AnimalData),
        children: "Animal"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Category, {
        onClick: () => setFilter(Covid_19Data),
        children: "Covid-19"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Category, {
        onClick: () => setFilter(AccidentData),
        children: "Accident"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(CardsWrapper, {
      children: filter.map(e => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(Card, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(CardImg, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
              layout: "fill",
              alt: "Crowdfunding dapp",
              objectFit: "cover",
              src: 'https://ipfs.infura.io:5001/' + e.image
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Title, {
            children: e.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(CardData, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(Text, {
              children: ["Owner", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((_mui_icons_material_AccountBox__WEBPACK_IMPORTED_MODULE_2___default()), {})]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(Text, {
              children: [e.owner.slice(0, 6), "...", e.owner.slice(39)]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(CardData, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(Text, {
              children: ["Amount", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((_mui_icons_material_Paid__WEBPACK_IMPORTED_MODULE_3___default()), {})]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(Text, {
              children: [e.amount, " Matic"]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(CardData, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Text, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((_mui_icons_material_Event__WEBPACK_IMPORTED_MODULE_4___default()), {})
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Text, {
              children: new Date(e.timeStamp * 1000).toLocaleString()
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
            passHref: true,
            href: '/' + e.address,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Button, {
              children: "Go to Campaign"
            })
          })]
        }, e.title);
      })
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
      AccidentData
    }
  };
} // background: rgba(0,0,0,0.4);

const HomeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "project__HomeWrapper",
  componentId: "sc-1oh6g5e-0"
})(["display:flex;flex-direction:column;align-items:center;width:100%;"]);
const FilterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "project__FilterWrapper",
  componentId: "sc-1oh6g5e-1"
})(["display:flex;align-items:center;width:80%;margin-top:15px;z-index:1;"]);
const Category = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "project__Category",
  componentId: "sc-1oh6g5e-2"
})(["padding:10px 15px;background-color:", ";margin:0px 15px;border-radius:8px;font-family:'Poppins';font-weight:normal;cursor:pointer;z-index:1;"], props => props.theme.bgDiv);
const CardsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "project__CardsWrapper",
  componentId: "sc-1oh6g5e-3"
})(["display:flex;z-index:1;justify-content:space-between;flex-wrap:wrap;width:80%;margin-top:25px;"]);
const Card = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "project__Card",
  componentId: "sc-1oh6g5e-4"
})(["width:30%;margin-top:20px;background-color:", ";z-index:1;&:hover{transform:translateY(-10px);transition:transform 0.5s;}&:not(:hover){transition:transform 0.5s;}"], props => props.theme.bgDiv);
const CardImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "project__CardImg",
  componentId: "sc-1oh6g5e-5"
})(["position:relative;height:120px;width:100%;z-index:1;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
  displayName: "project__Title",
  componentId: "sc-1oh6g5e-6"
})(["z-index:1;font-family:'Roboto';font-size:28px;margin:2px 0px;padding:5px;cursor:pointer;font-weight:normal;"]);
const CardData = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "project__CardData",
  componentId: "sc-1oh6g5e-7"
})(["display:flex;justify-content:space-between;margin:2px 0px;background-color:", ";padding:5px;z-index:1;cursor:pointer;"], props => props.theme.bgSubDiv);
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "project__Text",
  componentId: "sc-1oh6g5e-8"
})(["display:flex;z-index:1;align-items:center;margin:0;padding:0;font-family:'Roboto';font-size:18px;font-weight:bold;"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "project__Button",
  componentId: "sc-1oh6g5e-9"
})(["padding:8px;text-align:center;width:100%;background-color:#00b712;background-image:linear-gradient(180deg,#00b712 0%,#5aff15 80%);border:none;cursor:pointer;font-family:'Roboto';text-transform:uppercase;color:#fff;font-size:14px;z-index:1;font-weight:bold;"]); // first imaage Component----------------------

const Titlee = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
  displayName: "project__Titlee",
  componentId: "sc-1oh6g5e-10"
})(["width:557px;height:75px;font-family:'Sen';font-style:normal;font-weight:700;font-size:62px;line-height:75px;flex:none;order:1;flex-grow:0;"]);
const ProjectWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "project__ProjectWrap",
  componentId: "sc-1oh6g5e-11"
})(["display:flex;align-items:center;justify content:center;z-index:0;height:50%;width:100%;display:flex;flex-direction:column;padding:0px 43px;gap:38px;position:relative;width:1442px;height:348px;left:-1px;top:0px;background:rgba(254,73,17,0.88);"]);

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
var __webpack_exports__ = __webpack_require__.X(0, [121,383,563,664,675,393], () => (__webpack_exec__(2625)));
module.exports = __webpack_exports__;

})();