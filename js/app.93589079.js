(function(e){function t(t){for(var a,s,c=t[0],o=t[1],u=t[2],d=0,v=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&v.push(r[s][0]),r[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);l&&l(t);while(v.length)v.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=o;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id="4678"},8160:function(e){e.exports=JSON.parse('{"b":"vx-labs.eu.auth0.com","a":"27Y7oQxrPKMKGUQTjOeU1nKHUh4mRH4z"}')},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("AppDrawer"),n("v-app-bar",{attrs:{height:"73",app:"",flat:""}},[n("v-spacer"),n("v-toolbar-title",[e._v("🐝")])],1),n("v-main",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1),n("v-footer",{attrs:{app:""}})],1)},i=[],s=(n("caad"),n("ac1f"),n("2532"),n("5319"),n("841c"),n("5530")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.authenticated?n("v-navigation-drawer",{attrs:{app:"",permanent:"","expand-on-hover":""},scopedSlots:e._u([{key:"append",fn:function(){return[n("AuthButton")]},proxy:!0}],null,!1,2700509624)},[n("v-list",{attrs:{dense:""}},[n("v-list-item",{staticClass:"px-2"},[n("v-list-item-avatar",[n("v-img",{attrs:{src:e.profile.picture}})],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(e.profile.given_name)+" "+e._s(e.profile.family_name))]),n("v-list-item-subtitle",[e._v(e._s(e.profile.email))])],1)],1)],1),n("v-divider"),n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item",{attrs:{link:"",to:"/"}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-home")])],1),n("v-list-item-title",[e._v("Home page")])],1),n("v-list-item",{attrs:{link:"",to:"/devices/"}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-devices")])],1),n("v-list-item-title",[e._v("IoT Devices")])],1),n("v-list-item",{attrs:{link:"",to:"/topics/"}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-share-variant")])],1),n("v-list-item-title",[e._v("Message Topics")])],1),n("v-list-item",{attrs:{link:"",to:"/events/"}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-history")])],1),n("v-list-item-title",[e._v("Events")])],1)],1)],1):e._e()},o=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item",{on:{click:e.toogleAuthentication}},[n("v-list-item-icon",[e.authenticated?n("v-icon",[e._v("mdi-logout")]):n("v-icon",[e._v("mdi-login")])],1),n("v-list-item-title",{domProps:{innerHTML:e._s(e.authenticated?"Logout":"Login")}})],1)],1)},l=[],d=n("2f62"),v=a["a"].extend({name:"AuthButton",computed:Object(s["a"])({},Object(d["c"])(["authenticated"])),methods:Object(s["a"])({},Object(d["b"])(["toogleAuthentication"]))}),p=v,f=n("2877"),h=n("6544"),m=n.n(h),b=n("132d"),g=n("8860"),j=n("da13"),w=n("34c3"),x=n("5d23"),k=Object(f["a"])(p,u,l,!1,null,null,null),_=k.exports;m()(k,{VIcon:b["a"],VList:g["a"],VListItem:j["a"],VListItemIcon:w["a"],VListItemTitle:x["d"]});var T=a["a"].extend({components:{AuthButton:_},computed:Object(s["a"])({},Object(d["c"])(["authenticated","profile"]))}),y=T,O=n("ce7e"),L=n("adda"),V=n("8270"),R=n("f774"),D=Object(f["a"])(y,c,o,!1,null,null,null),C=D.exports;m()(D,{VDivider:O["a"],VIcon:b["a"],VImg:L["a"],VList:g["a"],VListItem:j["a"],VListItemAvatar:V["a"],VListItemContent:x["b"],VListItemIcon:w["a"],VListItemSubtitle:x["c"],VListItemTitle:x["d"],VNavigationDrawer:R["a"]});var S=a["a"].extend({name:"App",components:{AppDrawer:C},methods:Object(s["a"])({},Object(d["b"])(["handleAuthentication"])),mounted:function(){var e=this;this.handleAuthentication().then((function(){if(e.$store.dispatch("refreshDevices"),e.$store.dispatch("refreshTopics"),e.$store.dispatch("refreshEvents"),window.location.search.includes("code=")){var t=e.$store.getters.lastPath;void 0!==t?e.$router.replace(t):e.$router.replace(window.location.pathname)}}))}}),E=S,P=n("7496"),I=n("40dc"),z=n("a523"),A=n("553a"),$=n("f6c4"),B=n("2fa4"),N=n("2a7f"),H=Object(f["a"])(E,r,i,!1,null,null,null),M=H.exports;m()(H,{VApp:P["a"],VAppBar:I["a"],VContainer:z["a"],VFooter:A["a"],VMain:$["a"],VSpacer:B["a"],VToolbarTitle:N["a"]});var F=n("8c4f"),U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("DeviceList",{attrs:{title:"Devices"}})},G=[],q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{dark:e.dark,loading:e.areDevicesLoading}},[n("v-data-table",{staticClass:"pa-4",attrs:{search:e.search,headers:e.headers,items:e.devices},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{dense:"",flat:"",color:e.color}},[n("v-toolbar-title",[e._v(e._s(e.title))]),n("v-spacer"),n("v-spacer"),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),n("v-btn",{attrs:{icon:""},on:{click:e.refreshDevices}},[n("v-icon",[e._v("mdi-refresh")])],1)],1)]},proxy:!0},{key:"item.humanStatus",fn:function(t){var a=t.item;return[a.active?n("v-chip",{attrs:{small:"",outlined:"",label:"",color:a.connected?"green":"orange"},domProps:{innerHTML:e._s(a.connected?"Online":"Offline")}}):n("v-chip",{attrs:{small:"",label:"",outlined:"",color:"grey"},domProps:{innerHTML:e._s("Disabled")}})]}},{key:"item.actions",fn:function(t){var a=t.item;return[n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("mdi-chart-timeline-variant")])],1),n("v-menu",{scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({attrs:{icon:""}},a),[n("v-icon",[e._v("mdi-dots-vertical")])],1)]}}],null,!0)},[n("v-list",[a.active?n("v-list-item",{on:{click:function(t){return e.disableDevice(a.id)}}},[n("v-list-item-title",[e._v("Disable")])],1):n("v-list-item",{on:{click:function(t){return e.enableDevice(a.id)}}},[n("v-list-item-title",[e._v("Enable")])],1),n("v-list-item",{on:{click:function(t){return e.deleteDevice(a.id)}}},[n("v-list-item-title",[e._v("Delete")])],1)],1)],1)]}}])})],1)},J=[],K=a["a"].extend({name:"deviceList",props:["title","color","dark"],computed:Object(s["a"])({},Object(d["c"])(["devices","areDevicesLoading"])),methods:Object(s["a"])({},Object(d["b"])(["deleteDevice","enableDevice","disableDevice","refreshDevices"])),data:function(){return{search:null,dialog:!1,headers:[{text:"Status",value:"humanStatus"},{text:"Name",value:"name"},{text:"Sent bytes",value:"sentBytes"},{text:"Received bytes",value:"receivedBytes"},{text:"Subscription count",value:"subscriptionCount"},{text:"Actions",value:"actions",sortable:!1}]}}}),Q=K,W=n("8336"),Y=n("b0af"),X=n("cc20"),Z=n("8fea"),ee=n("e449"),te=n("8654"),ne=n("71d9"),ae=Object(f["a"])(Q,q,J,!1,null,null,null),re=ae.exports;m()(ae,{VBtn:W["a"],VCard:Y["a"],VChip:X["a"],VDataTable:Z["a"],VIcon:b["a"],VList:g["a"],VListItem:j["a"],VListItemTitle:x["d"],VMenu:ee["a"],VSpacer:B["a"],VTextField:te["a"],VToolbar:ne["a"],VToolbarTitle:N["a"]});var ie=a["a"].extend({name:"Devices",components:{DeviceList:re}}),se=ie,ce=Object(f["a"])(se,U,G,!1,null,null,null),oe=ce.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("EventList",{attrs:{title:"Events"}})},le=[],de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{dark:e.dark,loading:e.areEventsLoading}},[n("v-data-table",{staticClass:"pa-4",attrs:{headers:e.headers,items:e.events},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{dense:"",flat:"",color:e.color}},[n("v-toolbar-title",[e._v(e._s(e.title))]),n("v-spacer"),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:e.refreshEvents}},[n("v-icon",[e._v("mdi-refresh")])],1)],1)]},proxy:!0},{key:"item.timestamp",fn:function(e){var t=e.item;return[n("HumanTimestamp",{attrs:{timestamp:t.timestamp}})]}},{key:"item.actions",fn:function(t){var n=t.item;return[e._v(e._s(e.formatEvent(n)))]}}])})],1)},ve=[],pe=(n("99af"),n("7db0"),n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v(e._s(e.formatDate(e.timestamp)))])}),fe=[],he=n("c1df"),me=n.n(he),be=a["a"].extend({props:["timestamp"],methods:{formatDate:function(e){return me()(e/1e6).fromNow()}}}),ge=be,je=Object(f["a"])(ge,pe,fe,!1,null,null,null),we=je.exports,xe=a["a"].extend({name:"deviceList",components:{HumanTimestamp:we},props:["title","color","dark"],computed:Object(s["a"])({},Object(d["c"])(["events","areEventsLoading","devices"])),methods:Object(s["a"])(Object(s["a"])({},Object(d["b"])(["deleteDevice","enableDevice","disableDevice","refreshEvents"])),{},{resolveDeviceName:function(e){var t=this.devices.find((function(t){return t.id===e}));return void 0!==t?t.name:e},formatEvent:function(e){switch(e.service){default:switch(e.kind){case"session_connected":return"".concat(this.resolveDeviceName(e.attributes.session_id)," connected");case"subscription_created":return"".concat(this.resolveDeviceName(e.attributes.session_id)," subscribed to topic ").concat(e.attributes.pattern," with QoS ").concat(e.attributes.qos);case"subscription_deleted":return"".concat(this.resolveDeviceName(e.attributes.session_id)," unsubscribed from topic ").concat(e.attributes.pattern);case"session_disconnected":return"".concat(this.resolveDeviceName(e.attributes.session_id)," disconnected");default:return"wasp:".concat(e.kind," (").concat(JSON.stringify(e.attributes),")")}}}}),data:function(){return{search:null,dialog:!1,headers:[{text:"Timestamp",value:"timestamp"},{text:"Action",value:"actions"}]}}}),ke=xe,_e=Object(f["a"])(ke,de,ve,!1,null,null,null),Te=_e.exports;m()(_e,{VBtn:W["a"],VCard:Y["a"],VDataTable:Z["a"],VIcon:b["a"],VSpacer:B["a"],VToolbar:ne["a"],VToolbarTitle:N["a"]});var ye=a["a"].extend({name:"Events",components:{EventList:Te}}),Oe=ye,Le=Object(f["a"])(Oe,ue,le,!1,null,null,null),Ve=Le.exports,Re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-col",[n("TopicList",{attrs:{title:"Topics"}})],1),e.selectedTopic.length>0?n("v-col",[n("TopicRecords")],1):e._e()],1)},De=[],Ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{dark:e.dark,loading:e.areTopicsLoading}},[n("v-data-table",{staticClass:"pa-4",attrs:{"hide-default-header":"","custom-filter":e.topicsFilter,search:e.search,headers:e.headers,items:e.topics},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{dense:"",flat:"",color:e.color}},[n("v-toolbar-title",[e._v(e._s(e.title))]),n("v-spacer"),n("v-spacer"),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),n("v-btn",{attrs:{icon:""},on:{click:e.refreshTopics}},[n("v-icon",[e._v("mdi-refresh")])],1)],1)]},proxy:!0},{key:"item.humanTopic",fn:function(t){var a=t.item;return[n("v-list-item",{key:a.title,on:{click:function(t){return e.selectTopic(a.name)}},scopedSlots:e._u([{key:"default",fn:function(t){return[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(a.name)}}),void 0!==a.lastRecord?n("v-list-item-subtitle",[e._v(" Last message: "),void 0!==a.lastRecord.payload?n("span",[a.lastRecord.payload.length<30?n("span",{staticClass:"text--primary"},[e._v(e._s(a.lastRecord.payload))]):n("span",{staticClass:"text--primary"},[e._v(e._s(a.lastRecord.payload.substring(0,30))+"...")])]):e._e(),e._v(" "),n("HumanTimestamp",{attrs:{timestamp:a.lastRecord.timestamp}})],1):e._e()],1),n("v-list-item-action",[n("v-list-item-action-text",[e._v(e._s(a.messageCount)+" Messages")]),n("v-list-item-action-text",[e._v(e._s(a.sizeInBytes)+" Bytes")])],1)]}}],null,!0)})]}}])})],1)},Se=[],Ee=a["a"].extend({name:"topicList",components:{HumanTimestamp:we},props:["title","color","dark"],computed:Object(s["a"])({},Object(d["c"])(["topics","selectedTopic","areTopicsLoading"])),methods:Object(s["a"])(Object(s["a"])({},Object(d["b"])(["refreshTopics","selectTopic"])),{},{topicsFilter:function(e,t,n){return null!=n&&null!=t&&n.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())}}),data:function(){return{search:null,dialog:!1,headers:[{text:"Topic",value:"humanTopic"}]}}}),Pe=Ee,Ie=n("1800"),ze=Object(f["a"])(Pe,Ce,Se,!1,null,null,null),Ae=ze.exports;m()(ze,{VBtn:W["a"],VCard:Y["a"],VDataTable:Z["a"],VIcon:b["a"],VListItem:j["a"],VListItemAction:Ie["a"],VListItemActionText:x["a"],VListItemContent:x["b"],VListItemSubtitle:x["c"],VListItemTitle:x["d"],VSpacer:B["a"],VTextField:te["a"],VToolbar:ne["a"],VToolbarTitle:N["a"]});var $e,Be,Ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{dark:e.dark,loading:e.isSelectedTopicRecordsLoading}},[n("v-card-title",[n("v-toolbar",{attrs:{dense:"",flat:"",color:e.color}},[n("v-toolbar-title",[e._v(e._s(e.selectedTopic))]),n("v-spacer"),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:e.refreshSelectedTopicRecords}},[n("v-icon",[e._v("mdi-refresh")])],1)],1)],1),n("v-tabs",{attrs:{grow:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("v-tab",[e._v("History")]),n("v-tab",[e._v("Graph")]),n("v-tab",[e._v("Statistics")])],1),n("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("v-tab-item",[n("v-data-table",{staticClass:"pa-4",attrs:{"hide-default-header":"",headers:e.headers,items:e.selectedTopicRecords},scopedSlots:e._u([{key:"item.humanRecords",fn:function(t){var a=t.item;return[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(a.payload)}}),e.devices.length>0?n("v-list-item-subtitle",[e._v(" Published by: "),n("span",{staticClass:"text--primary"},[e._v(e._s(e.resolveDeviceName(a.publisher)))])]):e._e()],1),n("v-list-item-action",[n("v-list-item-action-text",[n("HumanTimestamp",{attrs:{timestamp:a.timestamp}})],1),n("v-list-item-action-text",[e._v(e._s(a.payload.length)+" Bytes")])],1)],1)]}}])})],1),n("v-tab-item",[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("Timeline",{attrs:{records:e.selectedTopicRecords}})],1)],1)],1),n("v-tab-item",[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("TopicStats")],1)],1)],1)],1)],1)},He=[],Me=(n("d81d"),n("1fca")),Fe=a["a"].extend({name:"timeline",props:["records"],extends:Me["a"],watch:{records:function(){this.$data._chart.data.datasets[0].data=this.parsedLogs,this.$data._chart.update()}},computed:{parsedLogs:function(){return this.records.map((function(e){return{t:new Date(e.timestamp/1e6),y:e.payload}}))}},mounted:function(){this.renderChart({datasets:[{label:"Records",data:this.parsedLogs}]},{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{type:"time",distribution:"series",time:{minUnit:"minute",round:"minute"}}]}})}}),Ue=Fe,Ge=Object(f["a"])(Ue,$e,Be,!1,null,null,null),qe=Ge.exports,Je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{justify:"space-around"}},[n("GraphCard",{attrs:{title:"Messages sent per hour",serie:e.rate}}),n("GraphCard",{attrs:{title:"Bytes sent per hour",serie:e.sizeRate}})],1)},Ke=[],Qe=(n("13d5"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{color:"green",dark:"",width:"350",height:"150"}},[n("v-card-title",{staticClass:"headline"},[e._v(e._s(e.avg))]),n("v-card-subtitle",[n("strong",[e._v(e._s(e.title))])]),n("v-card-text",[n("div",{staticClass:"display-1"},[n("v-sparkline",{attrs:{value:e.serie,color:"rgba(255, 255, 255, .7)","line-width":"2",padding:"24","stroke-linecap":"round",smooth:""}})],1)])],1)}),We=[],Ye=(n("b680"),a["a"].extend({props:["serie","title"],computed:{avg:function(){var e=this.serie;return(e.reduce((function(e,t){return e+t}),0)/e.length).toFixed(1)}},data:function(){return{}}})),Xe=Ye,Ze=n("99d9"),et=n("7f2e"),tt=Object(f["a"])(Xe,Qe,We,!1,null,null,null),nt=tt.exports;m()(tt,{VCard:Y["a"],VCardSubtitle:Ze["b"],VCardText:Ze["c"],VCardTitle:Ze["d"],VSparkline:et["a"]});var at=a["a"].extend({components:{GraphCard:nt},computed:Object(s["a"])(Object(s["a"])({},Object(d["c"])(["selectedTopicRecords"])),{},{buckets:function(){return this.selectedTopicRecords.reduce((function(e,t){if(0==e.length)return e.push([t]),e;var n=e[e.length-1][0].timestamp;return n-t.timestamp>=36e11?e.push([t]):e[e.length-1].push(t),e}),[])},rate:function(){return this.buckets.map((function(e){return e.length}))},sizeRate:function(){return this.buckets.map((function(e){return e.reduce((function(e,t){return e+t.payload.length}),0)}))}})}),rt=at,it=n("0fd9"),st=Object(f["a"])(rt,Je,Ke,!1,null,null,null),ct=st.exports;m()(st,{VRow:it["a"]});var ot=a["a"].extend({name:"deviceList",components:{Timeline:qe,TopicStats:ct,HumanTimestamp:we},props:["color","dark"],computed:Object(s["a"])({},Object(d["c"])(["topics","selectedTopic","selectedTopicRecords","isSelectedTopicRecordsLoading","devices"])),methods:Object(s["a"])(Object(s["a"])({},Object(d["b"])(["refreshSelectedTopicRecords"])),{},{resolveDeviceName:function(e){var t=this.devices.find((function(t){return t.id===e}));return void 0!==t?t.name:"Unavailable"}}),data:function(){return{tab:null,search:"",selected:null,dialog:!1,headers:[{text:"Records",value:"humanRecords"}]}}}),ut=ot,lt=n("71a3"),dt=n("c671"),vt=n("fe57"),pt=n("aac8"),ft=Object(f["a"])(ut,Ne,He,!1,null,null,null),ht=ft.exports;m()(ft,{VBtn:W["a"],VCard:Y["a"],VCardText:Ze["c"],VCardTitle:Ze["d"],VDataTable:Z["a"],VIcon:b["a"],VListItem:j["a"],VListItemAction:Ie["a"],VListItemActionText:x["a"],VListItemContent:x["b"],VListItemSubtitle:x["c"],VListItemTitle:x["d"],VSpacer:B["a"],VTab:lt["a"],VTabItem:dt["a"],VTabs:vt["a"],VTabsItems:pt["a"],VToolbar:ne["a"],VToolbarTitle:N["a"]});var mt=a["a"].extend({name:"Devices",components:{TopicList:Ae,TopicRecords:ht},computed:Object(s["a"])({},Object(d["c"])(["selectedTopic"]))}),bt=mt,gt=n("62ad"),jt=Object(f["a"])(bt,Re,De,!1,null,null,null),wt=jt.exports;m()(jt,{VCol:gt["a"],VRow:it["a"]});var xt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v("Hello !")])},kt=[],_t=a["a"].extend({name:"Devices"}),Tt=_t,yt=Object(f["a"])(Tt,xt,kt,!1,null,null,null),Ot=yt.exports,Lt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"450"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("Login")]),n("v-card-text",[e._v(" You must be logged in to access this page. "),n("br"),e._v("Click the login button below to prove your identity. ")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{text:"",loading:e.authenticationPending,disabled:e.authenticationPending},on:{click:function(t){return e.doLogin()}}},[e._v("Login")])],1)],1)],1)},Vt=[],Rt=(n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),{data:function(){return{dialog:!0}},computed:Object(s["a"])({},Object(d["c"])(["authenticated","authenticationPending"])),methods:Object(s["a"])(Object(s["a"])({},Object(d["b"])(["login"])),{},{doLogin:function(){var e=new URLSearchParams(window.location.search);return this.login(e.get("lastPage"))},doCheck:function(){if(this.authenticated){var e=new URLSearchParams(window.location.search);this.$router.replace(e.get("lastPage"))}}}),mounted:function(){var e=this;this.$nextTick((function(){return e.doCheck()}))},watch:{authenticated:function(){this.doCheck()}}}),Dt=Rt,Ct=n("169a"),St=Object(f["a"])(Dt,Lt,Vt,!1,null,null,null),Et=St.exports;m()(St,{VBtn:W["a"],VCard:Y["a"],VCardActions:Ze["a"],VCardText:Ze["c"],VCardTitle:Ze["d"],VDialog:Ct["a"],VSpacer:B["a"]});var Pt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-row",{attrs:{align:"center",justify:"center"}},[e._v(" hello ! ")])],1)],1)],1)},It=[],zt={name:"About"},At=zt,$t=Object(f["a"])(At,Pt,It,!1,null,null,null),Bt=$t.exports;m()($t,{VCol:gt["a"],VContainer:z["a"],VRow:it["a"]});n("4de4"),n("c740"),n("96cf");var Nt=n("1da1"),Ht=n("d4ec"),Mt=n("bee2"),Ft=n("bc3a"),Ut=n.n(Ft),Gt=function(){function e(t){Object(Ht["a"])(this,e),this.httpClient=Ut.a.create({baseURL:t,timeout:3e3})}return Object(Mt["a"])(e,[{key:"enableDevice",value:function(){var e=Object(Nt["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.httpClient.patch("/devices/".concat(n),{active:!0},{headers:{Authorization:"Bearer ".concat(t)}}));case 1:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"disableDevice",value:function(){var e=Object(Nt["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.httpClient.patch("/devices/".concat(n),{active:!1},{headers:{Authorization:"Bearer ".concat(t)}}));case 1:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"deleteDevice",value:function(){var e=Object(Nt["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.httpClient.delete("/devices/".concat(n),{headers:{Authorization:"Bearer ".concat(t)}}));case 1:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"listDevices",value:function(){var e=Object(Nt["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.httpClient.get("/devices/",{headers:{Authorization:"Bearer ".concat(t)}});case 2:return n=e.sent,e.abrupt("return",n.data.sort((function(e,t){return e.name.localeCompare(t.name)})));case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"listTopics",value:function(){var e=Object(Nt["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.httpClient.get("/topics/",{headers:{Authorization:"Bearer ".concat(t)}});case 2:return n=e.sent,e.abrupt("return",n.data.sort((function(e,t){return e.name.localeCompare(t.name)})));case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getTopic",value:function(){var e=Object(Nt["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.httpClient.post("/topics/",{pattern:n},{headers:{Authorization:"Bearer ".concat(t)}});case 2:return a=e.sent,e.abrupt("return",a.data.reverse());case 4:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"getEvents",value:function(){var e=Object(Nt["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.httpClient.post("/events/",{},{headers:{Authorization:"Bearer ".concat(t)}});case 2:return n=e.sent,e.abrupt("return",n.data.reverse());case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),qt=function e(){Object(Ht["a"])(this,e),this.client=new Gt("https://api.iot.cloud.vx-labs.net")},Jt=function e(){Object(Ht["a"])(this,e),this.owner="",this.loadingDeviceList=!1,this.loadingTopicList=!1,this.loadingEventList=!1,this.loadingSelectedTopic=!1,this.selectedTopic="",this.selectedTopicRecords=[],this.topics=[],this.events=[],this.devices=[]},Kt=function e(){Object(Ht["a"])(this,e),this.api=new qt,this.resources=new Jt},Qt=(n("b64b"),n("2ca0"),n("9767")),Wt=function(){function e(t,n){Object(Ht["a"])(this,e),this.auth0=new Qt["a"]({domain:t,client_id:n,redirect_uri:window.location.origin+"/login",cacheLocation:"localstorage",connection:"google-oauth2",audience:"https://api.iot.cloud.vx-labs.net"})}return Object(Mt["a"])(e,[{key:"login",value:function(e){return this.auth0.loginWithRedirect({appState:e})}},{key:"logout",value:function(){var e=Object.keys(localStorage),t=e.length;while(t--){var n=localStorage.key(t);if(null!==n&&n.startsWith("@@auth0")){localStorage.removeItem(n);break}}return this.auth0.logout({returnTo:window.location.origin})}},{key:"handleAuthentication",value:function(){var e=Object(Nt["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.auth0.getTokenSilently();case 3:return e.abrupt("return");case 6:return e.prev=6,e.t0=e["catch"](0),e.next=10,this.auth0.handleRedirectCallback();case 10:return t=e.sent,e.abrupt("return",t.appState);case 12:case"end":return e.stop()}}),e,this,[[0,6]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"userProfile",value:function(){var e=Object(Nt["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.auth0.getUser());case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"token",value:function(){var e=Object(Nt["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.auth0.getTokenSilently();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),Yt=n("8160"),Xt=new Wt(Yt["b"],Yt["a"]),Zt=function e(){Object(Ht["a"])(this,e),this.authenticated=!1,this.authenticationPending=!1},en={state:new Zt,getters:{authenticated:function(e){return e.authenticated},authenticationPending:function(e){return e.authenticationPending},lastPath:function(e){return e.lastPath},profile:function(e){return e.profile}},mutations:{authenticationPending:function(e){e.authenticationPending=!0},authenticationFailed:function(e){e.authenticationPending=!1},appStateRecovered:function(e,t){e.lastPath=t},profileFetched:function(e,t){e.profile=t,e.authenticated=!0,e.authenticationPending=!1},logout:function(e){e.authenticated=!1}},actions:{toogleAuthentication:function(e){var t=e.state,n=e.dispatch;return t.authenticated?n("logout"):n("login")},login:function(e,t){return Object(Nt["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,a("authenticationPending"),n.abrupt("return",Xt.login(t));case 3:case"end":return n.stop()}}),n)})))()},logout:function(e){var t=e.commit;Xt.logout(),t("logout")},refreshToken:function(){return Object(Nt["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Xt.token());case 1:case"end":return e.stop()}}),e)})))()},handleAuthentication:function(e){return Object(Nt["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,n("authenticationPending"),t.prev=2,t.next=5,Xt.handleAuthentication();case 5:return a=t.sent,t.next=8,Xt.userProfile();case 8:r=t.sent,void 0!==a&&n("appStateRecovered",a),n("profileFetched",r),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](2),n("authenticationFailed");case 16:case"end":return t.stop()}}),t,null,[[2,13]])})))()}}},tn=en;a["a"].use(d["a"]);var nn=new d["a"].Store({state:new Kt,getters:{owner:function(e){return e.resources.owner},devices:function(e){return e.resources.devices},topics:function(e){return e.resources.topics},events:function(e){return e.resources.events},selectedTopic:function(e){return e.resources.selectedTopic},selectedTopicRecords:function(e){return e.resources.selectedTopicRecords},areTopicsLoading:function(e){return e.resources.loadingTopicList},areDevicesLoading:function(e){return e.resources.loadingDeviceList},areEventsLoading:function(e){return e.resources.loadingEventList},isSelectedTopicRecordsLoading:function(e){return e.resources.loadingSelectedTopic}},mutations:{devicesLoading:function(e){e.resources.loadingDeviceList=!0},devicesLoaded:function(e,t){e.resources.devices=t,e.resources.loadingDeviceList=!1},eventsLoading:function(e){e.resources.loadingDeviceList=!0},eventsLoaded:function(e,t){e.resources.events=t,e.resources.loadingEventList=!1},topicsLoading:function(e){e.resources.loadingTopicList=!0},topicsLoaded:function(e,t){e.resources.topics=t,e.resources.loadingTopicList=!1},deviceDeleted:function(e,t){e.resources.devices=e.resources.devices.filter((function(e){return e.id!==t}))},deviceEnabled:function(e,t){var n=e.resources.devices.findIndex((function(e){return e.id===t}));n>-1&&a["a"].set(e.resources.devices,n,Object.assign({},e.resources.devices[n],{active:!0}))},deviceDisabled:function(e,t){var n=e.resources.devices.findIndex((function(e){return e.id===t}));n>-1&&a["a"].set(e.resources.devices,n,Object.assign({},e.resources.devices[n],{active:!1}))},devicePasswordChanged:function(e,t){var n=t.id,r=t.password,i=e.resources.devices.findIndex((function(e){return e.id===n}));i>-1&&a["a"].set(e.resources.devices,i,Object.assign({},e.resources.devices[i],{password:r}))},topicSelected:function(e,t){var n=t.topic;e.resources.selectedTopic=n,e.resources.selectedTopicRecords=[]},selectedTopicRecordsLoading:function(e){e.resources.loadingSelectedTopic=!0},selectedTopicRecordsFetched:function(e,t){var n=t.records;e.resources.selectedTopicRecords=n,e.resources.loadingSelectedTopic=!1}},actions:{resolveDeviceName:function(e,t){var n=e.state,a=n.resources.devices.find((function(e){return e.id===t}));return void 0!==a?a.name:t},refreshSelectedTopicRecords:function(e){return Object(Nt["a"])(regeneratorRuntime.mark((function t(){var n,a,r,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,a=e.dispatch,r=e.commit,r("selectedTopicRecordsLoading"),t.next=4,a("refreshToken",{},{root:!0});case 4:return i=t.sent,t.next=7,n.api.client.getTopic(i,n.resources.selectedTopic);case 7:s=t.sent,r("selectedTopicRecordsFetched",{records:s});case 9:case"end":return t.stop()}}),t)})))()},selectTopic:function(e,t){return Object(Nt["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.dispatch,r=e.commit,r("topicSelected",{topic:t}),n.next=4,a("refreshSelectedTopicRecords");case 4:case"end":return n.stop()}}),n)})))()},refreshDevices:function(e){return Object(Nt["a"])(regeneratorRuntime.mark((function t(){var n,a,r,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,a=e.dispatch,r=e.commit,r("devicesLoading"),t.next=4,a("refreshToken",{},{root:!0});case 4:return i=t.sent,t.next=7,n.api.client.listDevices(i);case 7:s=t.sent,r("devicesLoaded",s);case 9:case"end":return t.stop()}}),t)})))()},refreshTopics:function(e){return Object(Nt["a"])(regeneratorRuntime.mark((function t(){var n,a,r,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,a=e.dispatch,r=e.commit,r("topicsLoading"),t.next=4,a("refreshToken",{},{root:!0});case 4:return i=t.sent,t.next=7,n.api.client.listTopics(i);case 7:s=t.sent,r("topicsLoaded",s);case 9:case"end":return t.stop()}}),t)})))()},deleteDevice:function(e,t){return Object(Nt["a"])(regeneratorRuntime.mark((function n(){var a,r,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,r=e.state,i=e.dispatch,n.next=3,i("refreshToken",{},{root:!0});case 3:return s=n.sent,n.next=6,r.api.client.deleteDevice(s,t);case 6:a("deviceDeleted",t);case 7:case"end":return n.stop()}}),n)})))()},enableDevice:function(e,t){return Object(Nt["a"])(regeneratorRuntime.mark((function n(){var a,r,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,r=e.state,i=e.dispatch,n.next=3,i("refreshToken",{},{root:!0});case 3:return s=n.sent,n.next=6,r.api.client.enableDevice(s,t);case 6:a("deviceEnabled",t);case 7:case"end":return n.stop()}}),n)})))()},disableDevice:function(e,t){return Object(Nt["a"])(regeneratorRuntime.mark((function n(){var a,r,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,r=e.state,i=e.dispatch,n.next=3,i("refreshToken",{},{root:!0});case 3:return s=n.sent,n.next=6,r.api.client.disableDevice(s,t);case 6:a("deviceDisabled",t);case 7:case"end":return n.stop()}}),n)})))()},changeDevicePassword:function(e,t){return Object(Nt["a"])(regeneratorRuntime.mark((function n(){var a,r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=e.commit,r=t.id,i=t.password,a("devicePasswordChanged",{id:r,password:i});case 3:case"end":return n.stop()}}),n)})))()},refreshEvents:function(e){return Object(Nt["a"])(regeneratorRuntime.mark((function t(){var n,a,r,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,a=e.dispatch,r=e.commit,r("eventsLoading"),t.next=4,a("refreshToken",{},{root:!0});case 4:return i=t.sent,t.next=7,n.api.client.getEvents(i);case 7:s=t.sent,r("eventsLoaded",s);case 9:case"end":return t.stop()}}),t)})))()}},modules:{session:tn}});a["a"].use(F["a"]);var an=function(e,t,n){nn.getters.authenticated?n():n({path:"/login",query:{lastPage:e.fullPath}})},rn=[{path:"/",name:"Dashboard",component:Ot,beforeEnter:an},{path:"/devices/",name:"Devices",component:oe,beforeEnter:an},{path:"/topics/",name:"Topics",component:wt,beforeEnter:an},{path:"/events/",name:"Events",component:Ve,beforeEnter:an},{path:"/about",name:"About",component:Bt},{path:"/login",component:Et}],sn=new F["a"]({mode:"history",base:"/",routes:rn}),cn=sn,on=n("f309");a["a"].use(on["a"]);var un=new on["a"]({theme:{}});new a["a"]({router:cn,store:nn,vuetify:un,render:function(e){return e(M)}}).$mount("#app")}});
//# sourceMappingURL=app.93589079.js.map