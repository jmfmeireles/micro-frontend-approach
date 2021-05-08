(self.webpackChunknews_app=self.webpackChunknews_app||[]).push([[32],{2032:(e,t,n)=>{"use strict";n.r(t),n(7562),n(2377);var r,o,a=n(5627),i=n(9718),c=n(4751),l=n(7347),u=n.n(l),s=(n(2327),n(405)),d=n(9495),g=n(520),m=n.n(g);!function(e){e.NAV_BAR_HEIGHT="4rem"}(r||(r={}));var f,h,p,b,y,v,w=(0,g.createGlobalStyle)(o||(f=["\n  html,\n  body {\n    height: 100%;\n    width: 100%;\n    line-height: 1.5;\n  }\n\n  body {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    padding-top: ",";\n  }\n\n  body.fontLoaded {\n    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n  \n  p,\n  label {\n    line-height: 1.5em;\n  }\n\n  input, select, button {\n    font-family: inherit;\n    font-size: inherit;\n  }\n\n  .icon {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n"],h||(h=f.slice(0)),o=Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(h)}}))),r.NAV_BAR_HEIGHT),S=n(2718),E=n(7531),k=m().div(p||(p=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  width: 960px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n  box-sizing: content-box;\n  color: ",";\n"])),(function(e){return e.theme.primary})),O=n(6403),I=n(3295),j=null!==(b=window)&&void 0!==b&&b.matchMedia?null===(y=window.matchMedia("(prefers-color-scheme: dark)"))||void 0===y?void 0:y.matches:void 0,A={selected:window.localStorage&&localStorage.getItem("selectedTheme")||"system"},P=(v={name:"theme",initialState:A,reducers:{changeTheme:function(e,t){e.selected=t.payload}}},(0,O.oM)(v)),C=P.actions,z=(P.reducer,function(){var e;return e={key:P.name,reducer:P.reducer},(0,I.vp)(e),{actions:P.actions}}),F=(0,E.lX)();function T(e,t){var n=t.history,r=void 0===n?F:n,o=(0,S.$)().i18n,i=(0,c.I0)(),l=(0,d.k6)();a.useEffect((function(){e.theme&&i(C.changeTheme(e.theme))}),[e.theme]);var u=function(){l.push("/news")};return a.createElement(a.Fragment,null,a.createElement(s.q,{titleTemplate:"%s - React Boilerplate",defaultTitle:"React Boilerplate",htmlAttributes:{lang:o.language}},a.createElement("meta",{name:"description",content:"A React Boilerplate application"})),a.createElement(d.F0,{history:r},a.createElement(k,null,a.createElement(d.AW,{exact:!0,path:"/",component:function(){return a.createElement("button",{onClick:u},"Go to News Container")}}),a.createElement(d.AW,{path:"/news",component:function(){return a.createElement("div",null,"News Container main")}}))),a.createElement(w,null))}var B=n(4065),L=n(4890);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return 0===Object.keys(e).length?function(e){return e}:(0,L.UY)(N({},e))}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var D=n(6629),M={light:{primary:"red",text:"rgba(58,52,51,1)",textSecondary:"rgba(58,52,51,0.7)",background:"rgba(255,255,255,1)",backgroundVariant:"rgba(251,249,249,1)",border:"rgba(58,52,51,0.12)",borderLight:"rgba(58,52,51,0.05)"},dark:{primary:"blue",text:"rgba(241,233,231,1)",textSecondary:"rgba(241,233,231,0.6)",background:"rgba(0,0,0,1)",backgroundVariant:"rgba(28,26,26,1)",border:"rgba(241,233,231,0.15)",borderLight:"rgba(241,233,231,0.05)"}},V=(0,D.P1)([function(e){return e.theme||A}],(function(e){return"system"===e.selected?j?M.dark:M.light:M[e.selected]})),G=((0,D.P1)([function(e){return e.theme||A}],(function(e){return e.selected})),function(e){z();var t=(0,c.v9)(V);return a.createElement(g.ThemeProvider,{theme:t},a.Children.only(e.children))});var J=n(7662),U=n(8718),K=n(6071);const W=JSON.parse('{"routingFeature":{"title":"Industry-standard Routing","description":"It\'s natural to want to add pages (e.g. `/about`) to your application, and routing makes this possible."},"i18nFeature":{"title":"i18n Internationalization & Pluralization","selectLanguage":"Select Language","description":"Scalable apps need to support multiple languages, easily add and support multiple languages. Change the language below to see how instantly it updates the page without refreshing."},"feedbackFeature":{"title":"Instant Feedback","description":"Enjoy the best DX and code your app at the speed of thought! Your saved changes to the CSS and JS are reflected instantaneously without refreshing the page."},"scaffoldingFeature":{"title":"Quick Scaffolding","description":"Automate the creation of components, features, routes, selectors and sagas - and their tests - right from the CLI! Avoid fighting the glue of your code and focus on your app!"}}'),Z=JSON.parse('{"routingFeature":{"title":"Standard Routing","description":"Routing macht es möglich Seiten (z.B. \'/about\') Ihrer Anwendung hinzuzufügen."},"i18nFeature":{"title":"i18n Internationalisierung und Pluralisierung","selectLanguage":"Sprache auswählen","description":"Das Internet ist global. Mehrsprachige- und Pluralisierungsunterstützung ist entscheidend für große Web-Anwendungen. Sie können die Sprache unten verändern, ohne die Seite aktualisieren zu müssen."},"feedbackFeature":{"title":"Sofortiges Feedback","description":"Genießen Sie die beste Entwicklungserfahrung und programmieren Sie Ihre App so schnell wie noch nie! Ihre Änderungen an dem CSS und JavaScript sind sofort reflektiert, ohne die Seite aktualisieren zu müssen."},"scaffoldingFeature":{"title":"Schnelles Scaffolding","description":"Automatisieren Sie die Kreation von Komponenten, Containern, Routen, Selektoren und Sagas – und ihre Tests – direkt von dem Terminal!"}}');function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var Y={},$={en:{translation:W},de:{translation:Z}};!function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Y,r=arguments.length>2?arguments[2]:void 0;Object.keys(t).forEach((function(o){var a=r?"".concat(r,".").concat(o):o;"object"===X(t[o])?(n[o]={},e(t[o],n[o],a)):n[o]=a}))}(W),J.Z.use(U.Db).use(K.Z).init({resources:$,fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1}}),new(u())("Inter",{}).load().then((function(){document.body.classList.add("fontLoaded")}));var q,Q,ee,te,ne,re,oe=(Q=(q=(0,B.ZP)({})).run,ee=[q],te=[(0,I.Ky)({createReducer:H,runSaga:Q})],(0,O.xC)({reducer:H(),middleware:[].concat((ne=(0,O.Bx)(),function(e){if(Array.isArray(e))return _(e)}(ne)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(ne)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(ne)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),ee),devTools:"MISSING_ENV_VAR".PUBLIC_URL.length>0,enhancers:te}));window.rendernews=function(e,t,n,r,o){i.render(a.createElement(c.zt,{store:oe},a.createElement(G,null,a.createElement(s.B,null,a.createElement(a.StrictMode,null,a.createElement(T,{history:t,theme:o}),a.createElement("div",null,"Counter: ".concat(n.count)),a.createElement("button",{onClick:function(){return r(!1)}},"Hide Tile Preview"),a.createElement("button",{onClick:function(){return r(!0)}},"Show Tile Preview"))))),document.getElementById(e))},window.unmountnews=function(e){i.unmountComponentAtNode(document.getElementById(e))},document.getElementById("news-container")||i.render(a.createElement(c.zt,{store:oe},a.createElement(G,null,a.createElement(s.B,null,a.createElement(a.StrictMode,null,a.createElement(T,null))))),document.getElementById("root")),re&&re instanceof Function&&n.e(217).then(n.bind(n,3217)).then((function(e){var t=e.getCLS,n=e.getFID,r=e.getFCP,o=e.getLCP,a=e.getTTFB;t(re),n(re),r(re),o(re),a(re)}))}}]);