!function(e){var r={};function a(i){if(r[i])return r[i].exports;var t=r[i]={i:i,l:!1,exports:{}};return e[i].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,r,i){a.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:i})},a.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(r,"a",r),r},a.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},a.p="https://a.trellocdn.com/prgb/dist/",a(a.s="STwj")}({STwj:function(e,r,a){var i,t,o,n,s,d,l,c,u=a("Ueyl");t=a("hXt6").default,i=t.Keys,n=a("e1yY").default,d=function(e){try{return window.JSON.parse(e)}catch(e){return e,null}},o=function(e,r){var a;(a=new XMLHttpRequest).open("GET",e,!0),a.setRequestHeader("Accept","application/json,text/plain"),a.setRequestHeader("X-Trello-Client-Version",window.clientVersion||"quickload"),a.onreadystatechange=function(){4===a.readyState&&(200!==a.status?r([a.status,a.responseText]):r(null,[d(a.responseText),a]))},a.send(null)},s=function(e,r){var a,i,t,o,n,s,d,l;for(null==r&&(r={}),i=[],t=/invite-token-[-a-f0-9]*=([^;]+)/g;null!=(d=null!=(n=t.exec(document.cookie))?n[1]:void 0);)i.push(unescape(d));return i.length>0&&(r.invitationTokens=i.join(",")),/^\/1\/search(\/|$)/.test(e)&&(a=null!=(s=/dsc=([^;]+)/.exec(document.cookie))?s[1]:void 0,r.dsc=a),[e,function(){var e;for(o in e=[],r)l=r[o],e.push([o,encodeURIComponent(l)].join("="));return e}().join("&")].join("?")},l=location.pathname.substr(1),(c={init:function(){var e,r,a,t;if(c.preloads={},/token/.test(document.cookie))for(e=0,a=(t=[{key:i.QL_MEMBER_HEADER,url:s("/1/Members/me",u.memberHeader)}].concat(c.getDataUrls())).length;e<a;e++)r=t[e],c.preload(r)},getDataUrls:function(){var e,r,a,t,o,d,c,m,p,b;return""===l?[{key:i.QL_MEMBER_BOARDS,url:s("/1/Members/me",u.memberBoards)}]:null!=(b=null!=(t=/^\/([^\/]*)/.exec(l))?t[1]:void 0)?(b=decodeURIComponent(b).toLowerCase().replace(/[-_ ]+/g," "))?[{key:i.QL_MEMBER_QUICK_BOARDS,url:s("/1/Members/me",u.memberQuickBoards)},{key:i.QL_SEARCH,url:s("/1/search",u.quickBoardsSearch(b))}]:[{key:i.QL_MEMBER_QUICK_BOARDS,url:s("/1/Members/me",u.memberQuickBoards)}]:null!=(e=null!=(o=null!=(d=/^b\/([^\/]+)/.exec(l))?d[1]:void 0)?o:null!=(c=/^board\/[^\/]+\/([^\/]+)/.exec(l))?c[1]:void 0)?[{key:i.QL_BOARD_MIN,url:s("/1/Boards/"+e,u.currentBoardMinimal)},{key:i.QL_BOARD_SECONDARY,url:s("/1/Boards/"+e,u.currentBoardSecondary)},{key:i.QL_BOARD_PLUGINS,url:s("/1/Boards/"+e,u.currentBoardPluginData)}]:null!=(r=null!=(m=/^c\/([^\/]+)/.exec(l))?m[1]:void 0)?[{key:i.QL_CARD,url:s("/1/Cards/"+r,u.card)}]:null!=(a=null!=(p=/^([^\/]+)$/.exec(l))?p[1]:void 0)&&n(a)?[{key:i.QL_ORGS,url:s("/1/Organizations/"+a,u.organizationBoardsPage)}]:[]},preload:function(e){var r,a,i;r=e.key,(i=e.url)&&(t.startMeasurement(r),a={isLoading:!0,callbacks:[],start:Date.now(),used:!1,url:i},c.preloads[i]=a,o(i,function(e,o){var n,s,d,l,u,m;if(a.isLoading=!1,e)for(a.error=e,n=0,d=(u=a.callbacks).length;n<d;n++)(0,u[n])(e);else{for(a.data=o,t.stopMeasurement(r),s=0,l=(m=a.callbacks).length;s<l;s++)(0,m[s])(null,o);setTimeout(function(){return c.removePreload(i)},1e4)}}))},removePreload:function(e){var r,a,i;if(e in c.preloads){for(r=0,a=(i=c.removeFns).length;r<a;r++)(0,i[r])(c._cleanPreload(c.preloads[e]));return delete c.preloads[e]}},_cleanPreload:function(e){var r,a,i,t,o;for(r={},a=0,t=(o=["isLoading","start","used","url"]).length;a<t;a++)r[i=o[a]]=e[i];return r},removeFns:[],onRemove:function(e){return c.removeFns.push(e)},makeUrl:s,load:function(e,r){var a;if(null!=(a=c.preloads[e]))return a.used=!0,a.isLoading?a.callbacks.push(r):(r(a.error,a.data),c.removePreload(e)),c._cleanPreload(a);o(e,r)},clear:function(){var e;for(e in c)c.removePreload(e)}}).init(),e.exports=window.QuickLoad=c},Ueyl:function(e,r){var a;e.exports=a={},a.boardFieldsMinimal=["name","closed","dateLastActivity","dateLastView","datePluginDisable","idOrganization","prefs","shortLink","shortUrl","url","creationMethod"].join(","),a.boardFieldsFull=[a.boardFieldsMinimal,"desc","descData","idTags","invitations","invited","labelNames","limits","memberships","powerUps","subscribed"].join(","),a.boardFieldsMinimalSubscribed=[a.boardFieldsMinimal,"subscribed"].join(","),a.memberFields=["fullName","initials","idEnterprise","idMemberReferrer","memberType","username","avatarHash","bio","bioData","confirmed","products","url"].join(","),a.memberFieldsStatus=[a.memberFields,"status"].join(","),a.memberFieldsAndPremOrgsAdmin=[a.memberFields,"idPremOrgsAdmin"].join(","),a.organizationFieldsMinimal=["name","displayName","products","prefs","logoHash","idEnterprise","tags","limits"].join(","),a.organizationFieldsMinimalMemberships=[a.organizationFieldsMinimal,"memberships"].join(","),a.cardFieldsBulk=["badges","closed","dateLastActivity","desc","descData","due","dueComplete","idAttachmentCover","idList","idBoard","idMembers","idShort","idLabels","limits","name","pos","shortUrl","shortLink","subscribed","url"].join(","),a.boardFieldsInOrganization=[a.boardFieldsMinimal,"idTags"].join(","),a.organizationBoardsFields=[a.organizationFieldsMinimal,"desc","descData","website","limits","billableCollaboratorCount"].join(","),a.cardActions=["addAttachmentToCard","addChecklistToCard","addMemberToCard","commentCard","copyCommentCard","convertToCardFromCheckItem","createCard","copyCard","deleteAttachmentFromCard","emailCard","moveCardFromBoard","moveCardToBoard","removeChecklistFromCard","removeMemberFromCard","updateCard:idList","updateCard:closed","updateCard:due","updateCard:dueComplete","updateCheckItemStateOnCard","updateCustomFieldItem"].join(","),a.boardActions=[a.cardActions,"addMemberToBoard","addToOrganizationBoard","copyBoard","createBoard","createCustomField","createList","deleteCard","deleteCustomField","disablePlugin","disablePowerUp","enablePlugin","enablePowerUp","makeAdminOfBoard","makeNormalMemberOfBoard","makeObserverOfBoard","moveListFromBoard","moveListToBoard","removeFromOrganizationBoard","unconfirmedBoardInvitation","unconfirmedOrganizationInvitation","updateBoard","updateCustomField","updateList:closed"].join(","),a.card={fields:"all",stickers:!0,attachments:!0,customFieldItems:!0,pluginData:!0},a.currentBoardMinimal={lists:"open",list_fields:"name,closed,idBoard,pos,subscribed,limits,creationMethod,softLimit",cards:"visible",card_attachments:"cover",card_stickers:!0,card_fields:[a.cardFieldsBulk,"labels"].join(","),card_checklists:"none",members:"all",member_fields:a.memberFieldsStatus,membersInvited:"all",membersInvited_fields:a.memberFields,memberships_orgMemberType:!0,checklists:"none",organization:!0,organization_fields:"name,displayName,desc,descData,url,website,prefs,memberships,logoHash,products,limits,idEnterprise",organization_tags:!0,organization_enterprise:!0,myPrefs:!0,fields:a.boardFieldsFull},a.currentBoardSecondary={fields:"",actions:a.boardActions,actions_display:!0,actions_limit:50,action_memberCreator_fields:a.memberFieldsAndPremOrgsAdmin,action_reactions:!0,checklists:"none",cards:"visible",card_fields:"",card_checklists:"all",card_checklist_checkItems:"none",labels:"all",labels_limit:1e3},a.currentBoardPluginData={fields:"",boardPlugins:!0,cards:"visible",card_fields:"",card_attachments:!0,card_attachment_fields:"bytes,date,edgeColor,idMember,isUpload,mimeType,name,url",card_customFieldItems:!0,customFields:!0,pluginData:!0,card_pluginData:!0,organization:!0,organization_fields:"",organization_pluginData:!0},a.memberBoards={boards:"open,starred",board_fields:a.boardFieldsMinimalSubscribed,boardStars:!0,boardsInvited:"all",boardsInvited_fields:a.boardFieldsMinimalSubscribed,board_organization:!0,board_organization_fields:a.organizationFieldsMinimal,credits:"invitation,promoCode",organizations:"all",organization_fields:a.organizationFieldsMinimalMemberships,organizationsInvited:"all",organizationsInvited_fields:a.organizationFieldsMinimal,paid_account:!0},a.memberHeader={channels:!0,organizations:"all",organization_paid_account:!0,organization_fields:"name,displayName,idEnterprise",organization_enterprise:!0,paid_account:!0,pluginData:!0,savedSearches:!0,missedTransferDate:!0,enterprises:!0,enterprise_filter:["saml","member","member-unconfirmed","owned"],enterprise_fields:"name,displayName,isRealEnterprise,accessEnabled"},a.organizationBoardsPage={boards:"open",board_fields:a.boardFieldsInOrganization,board_starCounts:"organization",board_membershipCounts:"active",fields:a.organizationBoardsFields,paid_account:!0,memberships:"active",members:"all",tags:!0,billableCollaboratorCount:!0},a.memberQuickBoards={fields:"idOrganizations",boards:"open,starred",board_fields:a.boardFieldsMinimal,boardStars:!0,organizations:"all",organization_fields:"idBoards"},a.quickBoardsSearch=function(e){return{query:e,modelTypes:"boards",board_fields:a.boardFieldsMinimal,partial:!0}}},e1yY:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=["blank","shortcuts","search"];r.default=function(e){return/^[a-z0-9_]{3,}$/.test(e)&&-1===i.indexOf(e)}},hXt6:function(e,r,a){"use strict";function i(e,r){for(var a=0;a<r.length;a++){var i=r[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}Object.defineProperty(r,"__esModule",{value:!0}),a.d(r,"PerfKeys",function(){return o});var o={NAVIGATION:"startup:navigation",NAVIGATION_TLS:"startup:navigation-tls",NAVIGATION_TTFB:"startup:navigation-ttfb",HTML:"startup:html",TIME_TO_INTERACTIVE:"startup:time-to-interactive",LOAD_TO_INTERACTIVE:"startup:page-load-to-interactive",APP:"startup:app.js",APP_DOWNLOAD:"download:app.js",LTP:"startup:ltp.js",LTP_DOWNLOAD:"download:ltp.js",QL_MEMBER_HEADER:"quickload:memberHeader",QL_MEMBER_BOARDS:"quickload:memberBoards",QL_MEMBER_QUICK_BOARDS:"quickload:memberQuickBoards",QL_SEARCH:"quickload:quickBoardSearch",QL_BOARD_MIN:"quickload:currentBoardMinimal",QL_BOARD_SECONDARY:"quickload:currentBoardSecondary",QL_BOARD_PLUGINS:"quickload:currentBoardPluginData",QL_CARD:"quickload:card",QL_ORGS:"quickload:organizationBoardsPage",BOOTSTRAP_HOME_VIEW:"bootstrap:member-home-view",BOOTSTRAP_SUPERHOME_VIEW:"bootstrap:member-super-home-view",BOOTSTRAP_CARD_VIEW:"bootstrap:card-view",BOOTSTRAP_BOARD_VIEW:"bootstrap:boards-view"},n="performance"in window,s=function(e){},d=Object.keys(o).map(function(e){return o[e]}),l="requestIdleCallback"in window?window.requestIdleCallback:setTimeout,c=function(){function e(){var r=this;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),t(this,"startupReported",!1),t(this,"Keys",o),t(this,"startMeasurement",n?function(e){if(-1!==d.indexOf(e))try{window.performance.mark("".concat(e,"-start"))}catch(e){}}:s),t(this,"stopMeasurement",n?function(e){if(-1!==d.indexOf(e))try{window.performance.mark("".concat(e,"-end")),window.performance.measure(e,"".concat(e,"-start"),"".concat(e,"-end"));var a=window.performance.getEntriesByName(e)[0];r.reportMetrics([{name:e,totalTime:a.duration}])}catch(e){}}:s)}var r,a,c;return r=e,(a=[{key:"reportMetrics",value:function(e){l(function(){e.forEach(function(e){e.name,e.totalTime})})}},{key:"reportStartupMetrics",value:function(){if(!this.startupReported){try{performance.mark("done"),window.performance.measure(o.LOAD_TO_INTERACTIVE,"startup:html-start","done");var e=window.performance.getEntriesByType("navigation")[0],r=window.performance.getEntriesByType("resource").filter(function(e){return"script"===e.initiatorType&&e.name.includes("ltp")})[0],a=window.performance.getEntriesByType("resource").filter(function(e){return"script"===e.initiatorType&&e.name.includes("app")})[0],i=window.performance.getEntriesByName(o.LOAD_TO_INTERACTIVE)[0],t=window.performance.getEntriesByName("done")[0];this.reportMetrics([{name:o.NAVIGATION,totalTime:e.responseEnd-e.fetchStart},{name:o.NAVIGATION_TLS,totalTime:e.secureConnectionStart>0?e.connectEnd-e.secureConnectionStart:0},{name:o.NAVIGATION_TTFB,totalTime:e.responseStart-e.requestStart},{name:o.TIME_TO_INTERACTIVE,totalTime:i.duration},{name:o.LOAD_TO_INTERACTIVE,totalTime:t.startTime-e.startTime},{name:o.LTP_DOWNLOAD,totalTime:r.responseEnd-r.responseStart},{name:o.APP_DOWNLOAD,totalTime:a.responseEnd-a.responseStart}])}catch(e){}this.startupReported=!0}}}])&&i(r.prototype,a),c&&i(r,c),e}();window.TrelloPerf=window.TrelloPerf?window.TrelloPerf:new c,r.default=window.TrelloPerf}});
//# sourceMappingURL=quickload.a0b69ddd448f705e7fbc.js.map