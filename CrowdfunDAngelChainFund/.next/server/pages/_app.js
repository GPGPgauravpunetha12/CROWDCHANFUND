"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Sub_Components/HeaderLogo.js





const HeaderLogo = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Logo, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((image_default()), {
      src: "/favicon.ico",
      width: 42,
      height: 40
    }), "ANGEL CHAINFUND"]
  });
}; // const StyledLogo = styled(Image)`
// `


const Logo = external_styled_components_default().h1.withConfig({
  displayName: "HeaderLogo__Logo",
  componentId: "sc-mddz18-0"
})(["font-weight:bold;font-size:30px;margin-left:10px;font-family:'Poppins';display:flex;justify-content:space-between;background-color:", ";border-radius:10px;z-index:2;"], props => props.active ? props.theme.bgSubDiv : props.theme.bgDiv);
/* harmony default export */ const Sub_Components_HeaderLogo = (HeaderLogo);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Sub_Components/HeaderNav.js






const HeaderNav = () => {
  const Router = (0,router_.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(NavBetween, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(HeaderNavWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        passHref: true,
        href: '/',
        children: /*#__PURE__*/jsx_runtime_.jsx(HeaderNavLinks, {
          active: Router.pathname == "/" ? true : false,
          children: "Home"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        passHref: true,
        href: '/createcampaign',
        children: /*#__PURE__*/jsx_runtime_.jsx(HeaderNavLinks, {
          active: Router.pathname == "/createcampaign" ? true : false,
          children: "What we do"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        passHref: true,
        href: '/project',
        children: /*#__PURE__*/jsx_runtime_.jsx(HeaderNavLinks, {
          active: Router.pathname == "/dashboard" ? true : false,
          children: "Projects"
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      passHref: true,
      href: '/dashboard',
      children: /*#__PURE__*/jsx_runtime_.jsx(DonateNAVLinks, {
        active: Router.pathname == "/dashboard" ? true : false,
        children: "Donate Now"
      })
    })]
  });
};

const NavBetween = external_styled_components_default().div.withConfig({
  displayName: "HeaderNav__NavBetween",
  componentId: "sc-r7u7bf-0"
})(["display :flex;justify-content:space-between;align-items :center;width:30%;z-index:2;"]);
const DonateNAVLinks = external_styled_components_default().div.withConfig({
  displayName: "HeaderNav__DonateNAVLinks",
  componentId: "sc-r7u7bf-1"
})(["display:flex;justify-content:center;align-items:center;text-align:center;padding:6px;gap:10px;font-family:Roboto,sans-serif;position:relative;width:149px;height:35px;right:-10%;top:3%;cursor:pointer;font-weight:bold;background:linear-gradient(99.86deg,#FA709A -41.71%,#F8D003 66.36%);border-radius:29px;"]);
const HeaderNavWrapper = external_styled_components_default().div.withConfig({
  displayName: "HeaderNav__HeaderNavWrapper",
  componentId: "sc-r7u7bf-2"
})(["display:flex;justify-content:space-between;align-items:center;background-color:", ";padding:6px;height:50%;border-radius:10px;z-index:1;"], props => props.theme.bgDiv);
const HeaderNavLinks = external_styled_components_default().div.withConfig({
  displayName: "HeaderNav__HeaderNavLinks",
  componentId: "sc-r7u7bf-3"
})(["z-index:1;display:flex;align-items:center;justify-content:space-between;background-color:", ";height:100%;font-family:'Roboto';margin:5px;border-radius:10px;padding:6px;cursor:pointer;width:max-content;text-transform:uppercase;font-weight:bold;font-size:small;"], props => props.active ? props.theme.bgSubDiv : props.theme.bgDiv);
/* harmony default export */ const Sub_Components_HeaderNav = (HeaderNav);
;// CONCATENATED MODULE: external "@mui/icons-material/LightMode"
const LightMode_namespaceObject = require("@mui/icons-material/LightMode");
var LightMode_default = /*#__PURE__*/__webpack_require__.n(LightMode_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/DarkMode"
const DarkMode_namespaceObject = require("@mui/icons-material/DarkMode");
var DarkMode_default = /*#__PURE__*/__webpack_require__.n(DarkMode_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(1982);
;// CONCATENATED MODULE: ./components/Sub_Components/Wallet.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const networks = {
  polygon: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Polygon Testnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18
    },
    rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
  }
};

const Wallet = () => {
  const {
    0: address,
    1: setAddress
  } = (0,external_react_.useState)("");
  const {
    0: balance,
    1: setBalance
  } = (0,external_react_.useState)("");

  const connectWallet = async () => {
    await window.ethereum.request({
      method: "eth_requestAccounts"
    });
    const provider = new external_ethers_.ethers.providers.Web3Provider(window.ethereum, "any");

    if (provider.network !== "matic") {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [_objectSpread({}, networks["polygon"])]
      });
    }

    const account = provider.getSigner();
    const Address = await account.getAddress();
    setAddress(Address);
    const Balance = external_ethers_.ethers.utils.formatEther(await account.getBalance());
    setBalance(Balance);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ConnectWalletWrapper, {
    onClick: connectWallet,
    children: [balance == '' ? /*#__PURE__*/jsx_runtime_.jsx(Balance, {}) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(Balance, {
      children: [balance.slice(0, 4), " Matic"]
    }), address == '' ? /*#__PURE__*/jsx_runtime_.jsx(Address, {
      children: "Connect Wallet"
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(Address, {
      children: [address.slice(0, 6), "...", address.slice(39)]
    })]
  });
};

const ConnectWalletWrapper = external_styled_components_default().div.withConfig({
  displayName: "Wallet__ConnectWalletWrapper",
  componentId: "sc-hvfgc8-0"
})(["display:flex;align-items:center;justify-content:space-between;background-color:", ";padding:5px 9px;height:100%;color:", ";border-radius:10px;margin-right:15px;font-family:'Roboto';font-weight:bold;font-size:small;cursor:pointer;z-index:1;"], props => props.theme.bgDiv, props => props.theme.color);
const Address = external_styled_components_default().h2.withConfig({
  displayName: "Wallet__Address",
  componentId: "sc-hvfgc8-1"
})(["z-index:1;background-color:", ";height:100%;display:flex;align-items:center;justify-content:center;padding:0 5px 0 5px;border-radius:10px;"], props => props.theme.bgSubDiv);
const Balance = external_styled_components_default().h2.withConfig({
  displayName: "Wallet__Balance",
  componentId: "sc-hvfgc8-2"
})(["display:flex;height:100%;align-items:center;z-index:1;justify-content:center;margin-right:5px;"]);
/* harmony default export */ const Sub_Components_Wallet = (Wallet);
;// CONCATENATED MODULE: ./components/Sub_Components/HeaderRight.js









const HeaderRight = () => {
  const ThemeToggler = (0,external_react_.useContext)(App);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(HeaderRightWrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Sub_Components_Wallet, {}), /*#__PURE__*/jsx_runtime_.jsx(ThemeToggle, {
      children: ThemeToggler.theme === 'light' ? /*#__PURE__*/jsx_runtime_.jsx((DarkMode_default()), {
        onClick: ThemeToggler.changeTheme
      }) : /*#__PURE__*/jsx_runtime_.jsx((LightMode_default()), {
        onClick: ThemeToggler.changeTheme
      })
    })]
  });
};

const HeaderRightWrapper = external_styled_components_default().div.withConfig({
  displayName: "HeaderRight__HeaderRightWrapper",
  componentId: "sc-15qyb3d-0"
})(["display:flex;justify-content:center;align-items:center;margin-right:15px;height:50%;z-index:1;"]);
const ThemeToggle = external_styled_components_default().div.withConfig({
  displayName: "HeaderRight__ThemeToggle",
  componentId: "sc-15qyb3d-1"
})(["display:flex;justify-content:center;align-items:center;background-color:", ";height:100%;padding:5px;width:45px;border-radius:12px;cursor:pointer;z-index:1;"], props => props.theme.bgDiv);
/* harmony default export */ const Sub_Components_HeaderRight = (HeaderRight);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/Header.js









const Header = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Angel_ChainFund"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:title",
        content: "Angel_ChainFund",
        href: "images/favicon.ico"
      }, "title")]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(HeaderWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Sub_Components_HeaderLogo, {}), /*#__PURE__*/jsx_runtime_.jsx(Sub_Components_HeaderNav, {}), /*#__PURE__*/jsx_runtime_.jsx(Sub_Components_HeaderRight, {})]
    })]
  });
};

const HeaderWrapper = external_styled_components_default().div.withConfig({
  displayName: "Header__HeaderWrapper",
  componentId: "sc-1r2akj4-0"
})(["width:100%;height:70px;display:flex;justify-content:space-between;align-items:center;position:absolute;"]);
/* harmony default export */ const components_Header = (Header);
;// CONCATENATED MODULE: ./components/Themes.js
const light = {
  color: "#000",
  bgColor: '#F5F5F5',
  bgImage: 'linear-gradient(180deg, #efe7fd 0%, #F5F5F5 60%)',
  bgDiv: '#F5F5F5',
  bgSubDiv: '#efe7fd'
};
const dark = {
  color: '#fff',
  bgColor: '#923cb5',
  bgImage: 'linear-gradient(180deg, #2f0f3d 5%, #000000 90%)',
  bgDiv: 'black',
  bgSubDiv: 'rgb(33, 36, 41)'
};
const themes = {
  light: light,
  dark: dark
};
/* harmony default export */ const Themes = (themes);
;// CONCATENATED MODULE: ./components/Layout.js






const App = /*#__PURE__*/(0,external_react_.createContext)(); //use of context api

const Layout = ({
  children
}) => {
  const {
    0: theme,
    1: setTheme
  } = (0,external_react_.useState)('light');

  const changeTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  return /*#__PURE__*/jsx_runtime_.jsx(App.Provider, {
    value: {
      changeTheme,
      theme
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(external_styled_components_.ThemeProvider, {
      theme: Themes[theme],
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(LayoutWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(GloabalStyle, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), children]
      })
    })
  });
};

const GloabalStyle = (0,external_styled_components_.createGlobalStyle)(["body{margin:0;padding:0;overflow-x:hidden;}"]);
const LayoutWrapper = external_styled_components_default().div.withConfig({
  displayName: "Layout__LayoutWrapper",
  componentId: "sc-r6asel-0"
})(["min-height:100vh;background-color:", ";background-image:", ";color:", ";"], props => props.theme.bgColor, props => props.theme.bgImage, props => props.theme.color);
/* harmony default export */ const components_Layout = (Layout);
 //use of context api
;// CONCATENATED MODULE: ./pages/_app.js
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? _app_ownKeys(Object(source), !0).forEach(function (key) { _app_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(components_Layout, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
  });
}

/* harmony default export */ const _app = (MyApp);

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
var __webpack_exports__ = __webpack_require__.X(0, [121,383,563,664,675], () => (__webpack_exec__(2185)));
module.exports = __webpack_exports__;

})();