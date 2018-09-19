(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(36),o=n.n(i),s=(n(80),n(78),n(3)),c=n.n(s),l=(n(74),n(7)),u=n(35);function h(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var i=e.apply(t,n);function o(e,t){try{var n=i[e](t),o=n.value}catch(e){return void r(e)}n.done?a(o):Promise.resolve(o).then(s,c)}function s(e){o("next",e)}function c(e){o("throw",e)}s()})}}var p,m="".concat("http://localhost:9984","/api/v1/");function d(){return(d=h(c.a.mark(function e(t){var n,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/oracle",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({assetId:t})});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,console.log(a),e.abrupt("return",!0);case 8:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function f(e,t,n){return b.apply(this,arguments)}function b(){return(b=h(c.a.mark(function e(t,n,a){var r,i,o,s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return r=l.Transaction.makeEd25519Condition(t.publicKey,!0),(i=l.Transaction.makeOutput(r)).public_keys=[t.publicKey],o=l.Transaction.makeCreateTransaction(n,a,[i],t.publicKey),s=l.Transaction.signTransaction(o,t.privateKey),e.next=9,p.postTransactionCommit(s).then(function(e){return e}).catch(function(e){return!1});case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function v(){return y.apply(this,arguments)}function y(){return(y=h(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:p||(p=new l.Connection(m));case 1:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var g=n(17);function w(e){return(w="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function S(e){return(S=Object.getPrototypeOf||function(e){return e.__proto__})(e)}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var C=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(r=S(t).call(this,e))||"object"!==w(r)&&"function"!==typeof r?N(a):r).state={inputValue:"",inputPassphrase:"",inputAsset:""},n.handleSubmit=n.handleSubmit.bind(N(N(n))),n.handleCreate=n.handleCreate.bind(N(N(n))),g.AppInsights.downloadAndSetup({instrumentationKey:String("06c7c048-9d94-47eb-a245-3377a9bdd29a")}),n}var n,a,i,o,s;return n=t,(a=[{key:"handleValueChange",value:function(e){this.setState({inputValue:e.target.value})}},{key:"handlePassphraseChange",value:function(e){this.setState({inputPassphrase:e.target.value})}},{key:"handleAssetChange",value:function(e){this.setState({inputAsset:e.target.value})}},{key:"handleSubmit",value:function(e){this.state.inputValue&&(e.preventDefault(),console.log("inputValue: "+this.state.inputValue),g.AppInsights.trackEvent("UISubmit",{assetId:this.state.inputValue}),function(e){d.apply(this,arguments)}(this.state.inputValue))}},{key:"handleCreate",value:(o=c.a.mark(function e(t){var n,a,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.inputAsset||!this.state.inputPassphrase){e.next=9;break}return t.preventDefault(),i=this.state.inputPassphrase,n=new l.Ed25519Keypair(u.mnemonicToSeed(i).slice(0,32)),a={number:parseInt(this.state.inputAsset.toString(),10),timestamp:Date.now()},e.next=6,f(n,a,null);case 6:r=e.sent,console.log(r),this.setState({inputValue:r.id});case 9:case"end":return e.stop()}var i},e,this)}),s=function(){var e=this,t=arguments;return new Promise(function(n,a){var r=o.apply(e,t);function i(e,t){try{var i=r[e](t),o=i.value}catch(e){return void a(e)}i.done?n(o):Promise.resolve(o).then(s,c)}function s(e){i("next",e)}function c(e){i("throw",e)}s()})},function(e){return s.apply(this,arguments)})},{key:"render",value:function(){return r.a.createElement("section",{className:"jumbotron text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,r.a.createElement("strong",null,"BigchainDB")," integration with ",r.a.createElement("strong",null,"Hyperledger Fabric")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"alert alert-warning"},"This UI is for demo usage of the BigchainDB-Hyperledger Fabric oracle. The following form first we create a BigchainDB asset by providing passphrase and asset data. Once the asset is created, the asset id is passed to a Hyperledger chain-code which internally passes it to the oracle. The oracle then queries BigchainDB with the asset id and executes a callback passed by the Hyperledger chain-code.",r.a.createElement("br",null),"The oracle then sends back the results to Hyperledger chain-code.",r.a.createElement("br",null),r.a.createElement("br",null),"In a real scenario, the chain-code can do pre-processing and create a dynamic callback before sending the request to the oracle."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("h4",{className:"jumbotron-heading"},"BigchainDB asset creation"),r.a.createElement("br",null),r.a.createElement("div",{className:"lead-body"},r.a.createElement("form",{className:"inputForm",onSubmit:this.handleCreate},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"inputPassphrase",className:"sr-only"},"Passphrase:"),r.a.createElement("input",{type:"text",name:"inputPassphrase",id:"inputPassphrase",className:"form-control",placeholder:"Passphrase",value:this.state.inputPassphrase,onChange:this.handlePassphraseChange.bind(this)})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"inputAsset",className:"sr-only"},"Asset:"),r.a.createElement("textarea",{type:"text",name:"inputAsset",id:"inputAsset",className:"form-control",placeholder:"Enter a number",value:this.state.inputAsset,onChange:this.handleAssetChange.bind(this)})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit"},"Create asset"))))),r.a.createElement("div",{className:"col-6"},r.a.createElement("h4",{className:"jumbotron-heading"},"Hyperledger Fabric Oracle"),r.a.createElement("br",null),r.a.createElement("div",{className:"lead-body"},r.a.createElement("form",{className:"inputForm",onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"inputValue",className:"sr-only"},"Value:"),r.a.createElement("input",{type:"text",name:"inputValue",id:"inputValue",className:"form-control",placeholder:"Asset id",value:this.state.inputValue,onChange:this.handleValueChange.bind(this)})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit"},"Send to Hyperledger")))))),r.a.createElement("div",{className:"footer"},"Developed By: ",r.a.createElement("a",{href:"https://www.bigchaindb.com"},"BigchainDB")," and ",r.a.createElement("a",{href:"https://theledger.be"},"TheLedger"))))}}])&&k(n.prototype,a),i&&k(n,i),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");E(e.prototype,t&&t.prototype),t&&E(e,t)}(t,e),t}(a.Component),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(40).config(),o.a.render(r.a.createElement(C,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");x?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):P(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):P(e)})}}()},67:function(e,t){},69:function(e,t){},74:function(e,t,n){},78:function(e,t,n){},90:function(e,t,n){n(89),e.exports=n(37)}},[[90,0,1]]]);
//# sourceMappingURL=main.3b343e4b.chunk.js.map