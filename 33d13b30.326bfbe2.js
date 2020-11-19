(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{1006:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var a=t(0),i=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),p=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},O=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),d=p(t),O=a,u=d["".concat(o,".").concat(O)]||d[O]||s[O]||c;return t?i.a.createElement(u,r(r({ref:n},l),{},{components:t})):i.a.createElement(u,r({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=O;var r={};for(var b in n)hasOwnProperty.call(n,b)&&(r[b]=n[b]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var l=2;l<c;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"},291:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return r})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return p}));var a=t(2),i=t(7),c=(t(0),t(1006)),o={id:"netinfo",title:"NetInfo"},r={unversionedId:"netinfo",id:"version-0.60/netinfo",isDocsHomePage:!1,title:"NetInfo",description:"Deprecated. Use react-native-community/react-native-netinfo instead.",source:"@site/versioned_docs/version-0.60/netinfo.md",slug:"/netinfo",permalink:"/docs/0.60/netinfo",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/netinfo.md",version:"0.60",lastUpdatedAt:1603945169},b=[{value:"ConnectionType enum",id:"connectiontype-enum",children:[]},{value:"EffectiveConnectionType enum",id:"effectiveconnectiontype-enum",children:[]},{value:"Android",id:"android",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods-1",children:[{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[]},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[]},{value:"<code>getConnectionInfo()</code>",id:"getconnectioninfo",children:[]},{value:"<code>isConnectionExpensive()</code>",id:"isconnectionexpensive",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>isConnected</code>",id:"isconnected",children:[]}]}],l={rightToc:b};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"Deprecated.")," Use ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-netinfo"}),"react-native-community/react-native-netinfo")," instead.")),Object(c.b)("p",null,"NetInfo exposes info about online/offline status"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"NetInfo.getConnectionInfo().then((connectionInfo) => {\n  console.log(\n    'Initial, type: ' +\n      connectionInfo.type +\n      ', effectiveType: ' +\n      connectionInfo.effectiveType\n  );\n});\nfunction handleFirstConnectivityChange(connectionInfo) {\n  console.log(\n    'First change, type: ' +\n      connectionInfo.type +\n      ', effectiveType: ' +\n      connectionInfo.effectiveType\n  );\n  NetInfo.removeEventListener(\n    'connectionChange',\n    handleFirstConnectivityChange\n  );\n}\nNetInfo.addEventListener(\n  'connectionChange',\n  handleFirstConnectivityChange\n);\n")),Object(c.b)("h3",{id:"connectiontype-enum"},"ConnectionType enum"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"ConnectionType")," describes the type of connection the device is using to communicate with the network."),Object(c.b)("p",null,"Cross platform values for ",Object(c.b)("inlineCode",{parentName:"p"},"ConnectionType"),":"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"none")," - device is offline"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"wifi")," - device is online and connected via wifi, or is the iOS simulator"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"cellular")," - device is connected via Edge, 3G, WiMax, or LTE"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"unknown")," - error case and the network status is unknown")),Object(c.b)("p",null,"Android-only values for ",Object(c.b)("inlineCode",{parentName:"p"},"ConnectionType"),":"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"bluetooth")," - device is connected via Bluetooth"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"ethernet")," - device is connected via Ethernet"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"wimax")," - device is connected via WiMAX")),Object(c.b)("h3",{id:"effectiveconnectiontype-enum"},"EffectiveConnectionType enum"),Object(c.b)("p",null,"Cross platform values for ",Object(c.b)("inlineCode",{parentName:"p"},"EffectiveConnectionType"),":"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"2g")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"3g")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"4g")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"unknown"))),Object(c.b)("h3",{id:"android"},"Android"),Object(c.b)("p",null,"To request network info, you need to add the following line to your app's ",Object(c.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),":"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},'<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />')),Object(c.b)("h3",{id:"methods"},"Methods"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.60/netinfo#addeventlistener"}),Object(c.b)("inlineCode",{parentName:"a"},"addEventListener"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.60/netinfo#removeeventlistener"}),Object(c.b)("inlineCode",{parentName:"a"},"removeEventListener"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.60/netinfo#getconnectioninfo"}),Object(c.b)("inlineCode",{parentName:"a"},"getConnectionInfo"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.60/netinfo#isconnectionexpensive"}),Object(c.b)("inlineCode",{parentName:"a"},"isConnectionExpensive")))),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.60/netinfo#isconnected"}),Object(c.b)("inlineCode",{parentName:"a"},"isConnected")))),Object(c.b)("hr",null),Object(c.b)("h1",{id:"reference"},"Reference"),Object(c.b)("h2",{id:"methods-1"},"Methods"),Object(c.b)("h3",{id:"addeventlistener"},Object(c.b)("inlineCode",{parentName:"h3"},"addEventListener()")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"NetInfo.addEventListener(eventName, handler);\n")),Object(c.b)("p",null,"Adds an event handler."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"eventName"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"enum(connectionChange, change)"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The change event name.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"handler"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Listener function.")))),Object(c.b)("p",null,"Supported events:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"connectionChange"),": Fires when the network status changes. The argument to the event handler is an object with keys:",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"type"),": A ",Object(c.b)("inlineCode",{parentName:"li"},"ConnectionType")," (listed above)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"effectiveType"),": An ",Object(c.b)("inlineCode",{parentName:"li"},"EffectiveConnectionType")," (listed above)"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"change"),": This event is deprecated. Listen to ",Object(c.b)("inlineCode",{parentName:"li"},"connectionChange")," instead. Fires when the network status changes. The argument to the event handler is one of the deprecated connectivity types listed above.")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"removeeventlistener"},Object(c.b)("inlineCode",{parentName:"h3"},"removeEventListener()")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"NetInfo.removeEventListener(eventName, handler);\n")),Object(c.b)("p",null,"Removes the listener for network status changes."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"eventName"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"enum(connectionChange, change)"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The change event name.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"handler"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Listener function.")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getconnectioninfo"},Object(c.b)("inlineCode",{parentName:"h3"},"getConnectionInfo()")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"NetInfo.getConnectionInfo();\n")),Object(c.b)("p",null,"Returns a promise that resolves to an object with ",Object(c.b)("inlineCode",{parentName:"p"},"type")," and ",Object(c.b)("inlineCode",{parentName:"p"},"effectiveType")," keys whose values are a ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.60/netinfo#connectiontype-enum"}),Object(c.b)("inlineCode",{parentName:"a"},"ConnectionType"))," and an ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.60/netinfo#effectiveconnectiontype-enum"}),Object(c.b)("inlineCode",{parentName:"a"},"EffectiveConnectionType")),"), respectively."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"isconnectionexpensive"},Object(c.b)("inlineCode",{parentName:"h3"},"isConnectionExpensive()")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"NetInfo.isConnectionExpensive();\n")),Object(c.b)("p",null,"Available on Android. Detect if the current active connection is metered or not. A network is classified as metered when the user is sensitive to heavy data usage on that connection due to monetary costs, data limitations or battery/performance issues."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"NetInfo.isConnectionExpensive()\n.then(isConnectionExpensive => {\n  console.log('Connection is ' + (isConnectionExpensive ? 'Expensive' : 'Not Expensive'));\n})\n.catch(error => {\n  console.error(error);\n});\n")),Object(c.b)("h2",{id:"properties-1"},"Properties"),Object(c.b)("h3",{id:"isconnected"},Object(c.b)("inlineCode",{parentName:"h3"},"isConnected")),Object(c.b)("p",null,"Available on all platforms. Asynchronously fetch a boolean to determine internet connectivity."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"NetInfo.isConnected.fetch().then(isConnected => {\n  console.log('First, is ' + (isConnected ? 'online' : 'offline'));\n});\nfunction handleFirstConnectivityChange(isConnected) {\n  console.log('Then, is ' + (isConnected ? 'online' : 'offline'));\n  NetInfo.isConnected.removeEventListener(\n    'connectionChange',\n    handleFirstConnectivityChange\n  );\n}\nNetInfo.isConnected.addEventListener(\n  'connectionChange',\n  handleFirstConnectivityChange\n);\n")))}p.isMDXComponent=!0}}]);