(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[706],{5881:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Y}});var o=r(29),i=r(9499),a=r(7794),c=r.n(a),l=r(186),d=r(7294),s=r(5893),p=l.ZP.div.withConfig({displayName:"FormLeftWrapper__FormLeft",componentId:"sc-1xiz2kw-0"})(["width:48%;"]),u=l.ZP.div.withConfig({displayName:"FormLeftWrapper__FormInput",componentId:"sc-1xiz2kw-1"})(["display:flex;flex-direction:column;font-family:'poppins';margin-top:10px;"]),m=l.ZP.input.withConfig({displayName:"FormLeftWrapper__Input",componentId:"sc-1xiz2kw-2"})(["padding:15px;background-color:",";color:",";margin-top:4px;border:none;border-radius:8px;outline:none;font-size:large;width:100%;"],(function(e){return e.theme.bgDiv}),(function(e){return e.theme.color})),f=l.ZP.textarea.withConfig({displayName:"FormLeftWrapper__TextArea",componentId:"sc-1xiz2kw-3"})(["padding:15px;background-color:",";color:",";margin-top:4px;border:none;border-radius:8px;outline:none;font-size:large;max-width:100%;min-width:100%;overflow-x:hidden;min-height:160px;"],(function(e){return e.theme.bgDiv}),(function(e){return e.theme.color})),h=function(){var e=(0,d.useContext)(D);return(0,s.jsxs)(p,{children:[(0,s.jsxs)(u,{children:[(0,s.jsx)("label",{children:"Campaign Title"}),(0,s.jsx)(m,{onChange:e.FormHandler,value:e.form.campaignTitle,placeholder:"Campaign Title",name:"campaignTitle"})]}),(0,s.jsxs)(u,{children:[(0,s.jsx)("label",{children:"Story"}),(0,s.jsx)(f,{onChange:e.FormHandler,value:e.form.story,name:"story",placeholder:"Describe Your Story"})]})]})},g=r(7433),x=r(6470),b=r(6245),w="Basic "+r(8764).lW.from("2HwigdaImy2FPZyrwb1t2tnZzps:407819d206dc4d6fea475495c2d6e8d0").toString("base64"),y=(0,b.Ue)({host:"ipfs.infura.io",port:5001,protocol:"https",headers:{authorization:w}}),j=l.ZP.div.withConfig({displayName:"FormRightWrapper__FormRight",componentId:"sc-zcn6ol-0"})(["width:45%;"]),v=l.ZP.div.withConfig({displayName:"FormRightWrapper__FormInput",componentId:"sc-zcn6ol-1"})(["display:flex;flex-direction:column;font-family:'poppins';margin-top:10px;"]),_=l.ZP.div.withConfig({displayName:"FormRightWrapper__FormRow",componentId:"sc-zcn6ol-2"})(["display:flex;justify-content:space-between;width:100%;"]),C=l.ZP.input.withConfig({displayName:"FormRightWrapper__Input",componentId:"sc-zcn6ol-3"})(["padding:15px;background-color:",";color:",";margin-top:4px;border:none;border-radius:8px;outline:none;font-size:large;width:100%;"],(function(e){return e.theme.bgDiv}),(function(e){return e.theme.color})),F=l.ZP.div.withConfig({displayName:"FormRightWrapper__RowFirstInput",componentId:"sc-zcn6ol-4"})(["display:flex;flex-direction:column;width:45%;"]),I=l.ZP.div.withConfig({displayName:"FormRightWrapper__RowSecondInput",componentId:"sc-zcn6ol-5"})(["display:flex;flex-direction:column;width:45%;"]),k=l.ZP.select.withConfig({displayName:"FormRightWrapper__Select",componentId:"sc-zcn6ol-6"})(["padding:15px;background-color:",";color:",";margin-top:4px;border:none;border-radius:8px;outline:none;font-size:large;width:100%;"],(function(e){return e.theme.bgDiv}),(function(e){return e.theme.color})),P=l.ZP.input.withConfig({displayName:"FormRightWrapper__Image",componentId:"sc-zcn6ol-7"})(["background-color:",";color:",";margin-top:4px;border:none;border-radius:8px;outline:none;font-size:large;width:100%;&::-webkit-file-upload-button{padding:15px;background-color:",";color:",";outline:none;border:none;font-weight:bold;}"],(function(e){return e.theme.bgDiv}),(function(e){return e.theme.color}),(function(e){return e.theme.bgSubDiv}),(function(e){return e.theme.color})),S=l.ZP.button.withConfig({displayName:"FormRightWrapper__Button",componentId:"sc-zcn6ol-8"})(["display:flex;justify-content:center;width:100%;padding:15px;color:white;background-color:#00b712;background-image:linear-gradient(180deg,#00b712 0%,#5aff15 80%);border:none;margin-top:30px;cursor:pointer;font-weight:bold;font-size:large;"]),Z=function(){var e=(0,d.useContext)(D),n=(0,d.useState)(!1),t=n[0],r=n[1],i=(0,d.useState)(!1),a=i[0],l=i[1],p=function(){var n=(0,o.Z)(c().mark((function n(t){var o,i;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),r(!0),""===e.form.story){n.next=13;break}return n.prev=3,n.next=6,y.add(e.form.story);case 6:o=n.sent,e.setStoryUrl(o.path),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(3),g.Am.warn("Error Uploading Story");case 13:if(null===e.image){n.next=24;break}return n.prev=14,n.next=17,y.add(e.image);case 17:i=n.sent,e.setImageUrl(i.path),n.next=24;break;case 21:n.prev=21,n.t1=n.catch(14),g.Am.warn("Error Uploading Image");case 24:r(!1),l(!0),e.setUploaded(!0),g.Am.success("Files Uploaded Sucessfully");case 28:case"end":return n.stop()}}),n,null,[[3,10],[14,21]])})));return function(e){return n.apply(this,arguments)}}();return(0,s.jsxs)(j,{children:[(0,s.jsx)(v,{children:(0,s.jsxs)(_,{children:[(0,s.jsxs)(F,{children:[(0,s.jsx)("label",{children:"Required Amount"}),(0,s.jsx)(C,{onChange:e.FormHandler,value:e.form.requiredAmount,name:"requiredAmount",type:"number",placeholder:"Required Amount"})]}),(0,s.jsxs)(I,{children:[(0,s.jsx)("label",{children:"Choose Category"}),(0,s.jsxs)(k,{onChange:e.FormHandler,value:e.form.category,name:"category",children:[(0,s.jsx)("option",{children:"Education"}),(0,s.jsx)("option",{children:"Covid-19"}),(0,s.jsx)("option",{children:"Accident"}),(0,s.jsx)("option",{children:"Health"}),(0,s.jsx)("option",{children:"Animal"})]})]})]})}),(0,s.jsxs)(v,{children:[(0,s.jsx)("label",{children:"Select Image"}),(0,s.jsx)(P,{alt:"dapp",onChange:e.ImageHandler,type:"file",accept:"image/*"})]}),1==t?(0,s.jsx)(S,{children:(0,s.jsx)(x.gy,{color:"#fff",height:20})}):0==a?(0,s.jsx)(S,{onClick:p,children:"Upload Files to IPFS"}):(0,s.jsx)(S,{style:{cursor:"no-drop"},children:"Files uploaded Sucessfully"}),(0,s.jsx)(S,{onClick:e.startCampaign,children:"Start Campaign"})]})},N=r(241),z=r(4146),A=r(5553),O=r(4393),q=r(1664),R=r.n(q);function W(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?W(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var D=(0,d.createContext)(),T=l.ZP.div.withConfig({displayName:"Form__FormWrapper",componentId:"sc-1w5fqbl-0"})(["width:100%;display:flex;justify-content:center;"]),U=l.ZP.div.withConfig({displayName:"Form__FormMain",componentId:"sc-1w5fqbl-1"})(["width:80%;"]),H=l.ZP.div.withConfig({displayName:"Form__FormInputsWrapper",componentId:"sc-1w5fqbl-2"})(["display:flex;justify-content:space-between;margin-top:45px;"]),L=l.ZP.div.withConfig({displayName:"Form__Spinner",componentId:"sc-1w5fqbl-3"})(["width:100%;height:80vh;display:flex;justify-content:center;align-items:center;"]),B=l.ZP.div.withConfig({displayName:"Form__Address",componentId:"sc-1w5fqbl-4"})(["width:100%;height:80vh;display:flex;display:flex;flex-direction:column;align-items:center;background-color:",";border-radius:8px;"],(function(e){return e.theme.bgSubDiv})),M=l.ZP.button.withConfig({displayName:"Form__Button",componentId:"sc-1w5fqbl-5"})(["display:flex;justify-content:center;width:30%;padding:15px;color:white;background-color:#00b712;background-image:linear-gradient(180deg,#00b712 0%,#5aff15 80%);border:none;margin-top:30px;cursor:pointer;font-weight:bold;font-size:large;"]),X=l.ZP.h2.withConfig({displayName:"Form__Titlee",componentId:"sc-1w5fqbl-6"})(["width:557px;height:75px;font-family:'Sen';font-style:normal;font-weight:700;font-size:62px;line-height:75px;flex:none;order:1;flex-grow:0;"]),G=l.ZP.div.withConfig({displayName:"Form__ProjectWrap",componentId:"sc-1w5fqbl-7"})(["display:flex;align-items:center;text-align:center;justify content:center;z-index:0;height:50%;width:100%!important;display:flex;flex-direction:column;padding:0px 43px;gap:38px;position:relative;width:1442px;height:348px;left:-1px;top:0px;background:rgba(254,73,17,0.88);"]),Q=function(){var n=(0,d.useState)({campaignTitle:"",story:"",requiredAmount:"",category:"education"}),t=n[0],r=n[1],a=(0,d.useState)(!1),l=a[0],p=a[1],u=(0,d.useState)(""),m=u[0],f=u[1],b=(0,d.useState)(!1),w=b[0],y=b[1],j=(0,d.useState)(),v=j[0],_=j[1],C=(0,d.useState)(),F=C[0],I=C[1],k=(0,d.useState)(null),P=k[0],S=k[1],q=function(){var e=(0,o.Z)(c().mark((function e(n){var r,o,i,a,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=new N.Q(window.ethereum),o=r.getSigner(),""!==t.campaignTitle){e.next=7;break}g.Am.warn("Title Field Is Empty"),e.next=28;break;case 7:if(""!==t.story){e.next=11;break}g.Am.warn("Story Field Is Empty"),e.next=28;break;case 11:if(""!==t.requiredAmount){e.next=15;break}g.Am.warn("Required Amount Field Is Empty"),e.next=28;break;case 15:if(0!=w){e.next=19;break}g.Am.warn("Files Upload Required"),e.next=28;break;case 19:return p(!0),i=new z.CH("0xFBfa2b493FE83a05bE4E435209a8fc4d60407947",O.Mt,o),a=A.fi(t.requiredAmount),e.next=24,i.createCampaign(t.campaignTitle,a,F,t.category,v);case 24:return l=e.sent,e.next=27,l.wait();case 27:f(l.to);case 28:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,s.jsxs)(D.Provider,{value:{form:t,setForm:r,image:P,setImage:S,ImageHandler:function(e){S(e.target.files[0])},FormHandler:function(e){r(E(E({},t),{},(0,i.Z)({},e.target.name,e.target.value)))},setImageUrl:I,setStoryUrl:_,startCampaign:q,setUploaded:y},children:[(0,s.jsxs)(G,{children:[(0,s.jsx)(X,{children:"Create your Campaign"})," "]}),(0,s.jsx)(T,{children:(0,s.jsx)(U,{children:1==l?""==m?(0,s.jsx)(L,{children:(0,s.jsx)(x.gy,{height:60})}):(0,s.jsxs)(B,{children:[(0,s.jsx)("h1",{children:"Campagin Started Sucessfully!"}),(0,s.jsx)("h1",{children:m}),(0,s.jsx)(R(),{passHref:!0,href:"/project"+e.address,children:(0,s.jsx)(M,{children:"Go To Campaign"})})]}):(0,s.jsxs)(H,{children:[(0,s.jsx)(h,{}),(0,s.jsx)(Z,{})]})})})]})},Y=function(){return(0,s.jsx)("div",{children:(0,s.jsx)(Q,{})})}},3844:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/createcampaign",function(){return t(5881)}])},3897:function(){}},function(e){e.O(0,[146,530,393,774,888,179],(function(){return n=3844,e(e.s=n);var n}));var n=e.O();_N_E=n}]);