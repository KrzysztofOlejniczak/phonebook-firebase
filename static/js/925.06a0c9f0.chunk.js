"use strict";(self.webpackChunkphonebook_firebase=self.webpackChunkphonebook_firebase||[]).push([[925],{4708:function(n,r,e){var t=e(9439),o=e(7462),a=e(2791),i=e(1402),c=e(1540),u=e(184),s=function(n,r){return(0,o.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},r&&!n.vars&&{colorScheme:n.palette.mode})},p=function(n){return(0,o.Z)({color:(n.vars||n).palette.text.primary},n.typography.body1,{backgroundColor:(n.vars||n).palette.background.default,"@media print":{backgroundColor:(n.vars||n).palette.common.white}})};r.ZP=function(n){var r=(0,i.Z)({props:n,name:"MuiCssBaseline"}),e=r.children,l=r.enableColorScheme,f=void 0!==l&&l;return(0,u.jsxs)(a.Fragment,{children:[(0,u.jsx)(c.Z,{styles:function(n){return function(n){var r,e,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i={};a&&n.colorSchemes&&Object.entries(n.colorSchemes).forEach((function(r){var e,o=(0,t.Z)(r,2),a=o[0],c=o[1];i[n.getColorSchemeSelector(a).replace(/\s*&/,"")]={colorScheme:null==(e=c.palette)?void 0:e.mode}}));var c=(0,o.Z)({html:s(n,a),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:n.typography.fontWeightBold},body:(0,o.Z)({margin:0},p(n),{"&::backdrop":{backgroundColor:(n.vars||n).palette.background.default}})},i),u=null==(r=n.components)||null==(e=r.MuiCssBaseline)?void 0:e.styleOverrides;return u&&(c=[c,u]),c}(n,f)}}),e]})}},1889:function(n,r,e){e.d(r,{ZP:function(){return N}});var t=e(3433),o=e(4942),a=e(3366),i=e(7462),c=e(2791),u=e(8182),s=e(1184),p=e(8519),l=e(4419),f=e(6934),d=e(1402),m=e(3967);var v=c.createContext(),g=e(5878),h=e(1217);function b(n){return(0,h.Z)("MuiGrid",n)}var x=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],w=(0,g.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,t.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,t.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,t.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,t.Z)(x.map((function(n){return"grid-xs-".concat(n)}))),(0,t.Z)(x.map((function(n){return"grid-sm-".concat(n)}))),(0,t.Z)(x.map((function(n){return"grid-md-".concat(n)}))),(0,t.Z)(x.map((function(n){return"grid-lg-".concat(n)}))),(0,t.Z)(x.map((function(n){return"grid-xl-".concat(n)}))))),k=e(184),S=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function Z(n){var r=parseFloat(n);return"".concat(r).concat(String(n).replace(String(r),"")||"px")}function y(n){var r=n.breakpoints,e=n.values,t="";Object.keys(e).forEach((function(n){""===t&&0!==e[n]&&(t=n)}));var o=Object.keys(r).sort((function(n,e){return r[n]-r[e]}));return o.slice(0,o.indexOf(t))}var W=(0,f.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,r){var e=n.ownerState,o=e.container,a=e.direction,i=e.item,c=e.spacing,u=e.wrap,s=e.zeroMinWidth,p=e.breakpoints,l=[];o&&(l=function(n,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[e["spacing-xs-".concat(String(n))]];var t=[];return r.forEach((function(r){var o=n[r];Number(o)>0&&t.push(e["spacing-".concat(r,"-").concat(String(o))])})),t}(c,p,r));var f=[];return p.forEach((function(n){var t=e[n];t&&f.push(r["grid-".concat(n,"-").concat(String(t))])})),[r.root,o&&r.container,i&&r.item,s&&r.zeroMinWidth].concat((0,t.Z)(l),["row"!==a&&r["direction-xs-".concat(String(a))],"wrap"!==u&&r["wrap-xs-".concat(String(u))]],f)}})((function(n){var r=n.ownerState;return(0,i.Z)({boxSizing:"border-box"},r.container&&{display:"flex",flexWrap:"wrap",width:"100%"},r.item&&{margin:0},r.zeroMinWidth&&{minWidth:0},"wrap"!==r.wrap&&{flexWrap:r.wrap})}),(function(n){var r=n.theme,e=n.ownerState,t=(0,s.P$)({values:e.direction,breakpoints:r.breakpoints.values});return(0,s.k9)({theme:r},t,(function(n){var r={flexDirection:n};return 0===n.indexOf("column")&&(r["& > .".concat(w.item)]={maxWidth:"none"}),r}))}),(function(n){var r=n.theme,e=n.ownerState,t=e.container,a=e.rowSpacing,i={};if(t&&0!==a){var c,u=(0,s.P$)({values:a,breakpoints:r.breakpoints.values});"object"===typeof u&&(c=y({breakpoints:r.breakpoints.values,values:u})),i=(0,s.k9)({theme:r},u,(function(n,e){var t,a=r.spacing(n);return"0px"!==a?(0,o.Z)({marginTop:"-".concat(Z(a))},"& > .".concat(w.item),{paddingTop:Z(a)}):null!=(t=c)&&t.includes(e)?{}:(0,o.Z)({marginTop:0},"& > .".concat(w.item),{paddingTop:0})}))}return i}),(function(n){var r=n.theme,e=n.ownerState,t=e.container,a=e.columnSpacing,i={};if(t&&0!==a){var c,u=(0,s.P$)({values:a,breakpoints:r.breakpoints.values});"object"===typeof u&&(c=y({breakpoints:r.breakpoints.values,values:u})),i=(0,s.k9)({theme:r},u,(function(n,e){var t,a=r.spacing(n);return"0px"!==a?(0,o.Z)({width:"calc(100% + ".concat(Z(a),")"),marginLeft:"-".concat(Z(a))},"& > .".concat(w.item),{paddingLeft:Z(a)}):null!=(t=c)&&t.includes(e)?{}:(0,o.Z)({width:"100%",marginLeft:0},"& > .".concat(w.item),{paddingLeft:0})}))}return i}),(function(n){var r,e=n.theme,t=n.ownerState;return e.breakpoints.keys.reduce((function(n,o){var a={};if(t[o]&&(r=t[o]),!r)return n;if(!0===r)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var c=(0,s.P$)({values:t.columns,breakpoints:e.breakpoints.values}),u="object"===typeof c?c[o]:c;if(void 0===u||null===u)return n;var p="".concat(Math.round(r/u*1e8)/1e6,"%"),l={};if(t.container&&t.item&&0!==t.columnSpacing){var f=e.spacing(t.columnSpacing);if("0px"!==f){var d="calc(".concat(p," + ").concat(Z(f),")");l={flexBasis:d,maxWidth:d}}}a=(0,i.Z)({flexBasis:p,flexGrow:0,maxWidth:p},l)}return 0===e.breakpoints.values[o]?Object.assign(n,a):n[e.breakpoints.up(o)]=a,n}),{})}));var M=function(n){var r=n.classes,e=n.container,o=n.direction,a=n.item,i=n.spacing,c=n.wrap,u=n.zeroMinWidth,s=n.breakpoints,p=[];e&&(p=function(n,r){if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return["spacing-xs-".concat(String(n))];var e=[];return r.forEach((function(r){var t=n[r];if(Number(t)>0){var o="spacing-".concat(r,"-").concat(String(t));e.push(o)}})),e}(i,s));var f=[];s.forEach((function(r){var e=n[r];e&&f.push("grid-".concat(r,"-").concat(String(e)))}));var d={root:["root",e&&"container",a&&"item",u&&"zeroMinWidth"].concat((0,t.Z)(p),["row"!==o&&"direction-xs-".concat(String(o)),"wrap"!==c&&"wrap-xs-".concat(String(c))],f)};return(0,l.Z)(d,b,r)},z=c.forwardRef((function(n,r){var e=(0,d.Z)({props:n,name:"MuiGrid"}),t=(0,m.Z)().breakpoints,o=(0,p.Z)(e),s=o.className,l=o.columns,f=o.columnSpacing,g=o.component,h=void 0===g?"div":g,b=o.container,x=void 0!==b&&b,w=o.direction,Z=void 0===w?"row":w,y=o.item,z=void 0!==y&&y,N=o.rowSpacing,j=o.spacing,C=void 0===j?0:j,O=o.wrap,P=void 0===O?"wrap":O,B=o.zeroMinWidth,E=void 0!==B&&B,G=(0,a.Z)(o,S),T=N||C,F=f||C,L=c.useContext(v),$=x?l||12:L,R={},_=(0,i.Z)({},G);t.keys.forEach((function(n){null!=G[n]&&(R[n]=G[n],delete _[n])}));var A=(0,i.Z)({},o,{columns:$,container:x,direction:Z,item:z,rowSpacing:T,columnSpacing:F,wrap:P,zeroMinWidth:E,spacing:C},R,{breakpoints:t.keys}),D=M(A);return(0,k.jsx)(v.Provider,{value:$,children:(0,k.jsx)(W,(0,i.Z)({ownerState:A,className:(0,u.Z)(D.root,s),as:h,ref:r},_))})})),N=z}}]);
//# sourceMappingURL=925.06a0c9f0.chunk.js.map