(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e245478e"],{"04d1":function(e,t,c){var n=c("342f"),a=n.match(/firefox\/(\d+)/i);e.exports=!!a&&+a[1]},"159b":function(e,t,c){var n=c("da84"),a=c("fdbc"),o=c("785a"),r=c("17c2"),s=c("9112"),i=function(e){if(e&&e.forEach!==r)try{s(e,"forEach",r)}catch(t){e.forEach=r}};for(var l in a)a[l]&&i(n[l]&&n[l].prototype);i(o)},"17c2":function(e,t,c){"use strict";var n=c("b727").forEach,a=c("a640"),o=a("forEach");e.exports=o?[].forEach:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}},3693:function(e,t,c){"use strict";var n=c("7a23"),a={class:"carousel-container rounded-3 overflow-hidden position-relative"},o=["src","alt","onerror"],r={class:"dots position-absolute"},s=["onClick"];function i(e,t,c,i,l,d){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",a,[Object(n["createVNode"])(n["TransitionGroup"],{tag:"div",class:"carousels w-100 h-100 overflow-hidden position-relative",name:l.transitionName},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.pictures,(function(e,t){return Object(n["withDirectives"])((Object(n["openBlock"])(),Object(n["createElementBlock"])("img",{src:e.url,alt:e.title,class:"carousel w-100 h-100 position-absolute",key:t,onerror:l.defaultImg},null,8,o)),[[n["vShow"],l.index===t]])})),128))]})),_:1},8,["name"]),Object(n["withDirectives"])(Object(n["createElementVNode"])("div",r,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.pictures,(function(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("button",{key:t,class:Object(n["normalizeClass"])({active:l.index===t}),onClick:function(e){return d.setIndex(t)}},null,10,s)})),128))],512),[[n["vShow"],c.pictures.length>1]])])}var l={props:{pictures:{type:Array,default:function(){return[{title:"",url:"https://images.unsplash.com/photo-1583395145517-1e3177037600?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"},{title:"",url:"https://images.unsplash.com/photo-1630244024081-dc4039254a46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"},{title:"",url:"https://images.unsplash.com/photo-1635937998083-dde9f462d8ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"},{title:"",url:"https://images.unsplash.com/photo-1571474004502-c1def214ac6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1631&q=80"},{title:"",url:"https://images.unsplash.com/photo-1470004914212-05527e49370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"}]}}},data:function(){return{transitionName:"left-in",index:0,timer:null,defaultImg:'this.src="'+c("c538")+'"'}},watch:{index:function(e,t){e>this.pictures.length-1?this.index=0:e<0?this.index=this.pictures.length-1:this.transitionName=e>t?"right-in":"left-in"}},methods:{setIndex:function(e){this.index=e},autoPlay:function(){var e=this;this.timer=setInterval((function(){e.index++}),3e3)},stopPlay:function(){clearInterval(this.timer),this.timer=null}},mounted:function(){"/"===this.$route.path&&this.autoPlay()}},d=(c("a3d6"),c("6b0d")),u=c.n(d);const b=u()(l,[["render",i],["__scopeId","data-v-c66fb9b8"]]);t["a"]=b},"4e82":function(e,t,c){"use strict";var n=c("23e7"),a=c("e330"),o=c("59ed"),r=c("7b0b"),s=c("07fa"),i=c("577e"),l=c("d039"),d=c("addb"),u=c("a640"),b=c("04d1"),f=c("d998"),m=c("2d00"),p=c("512c"),h=[],j=a(h.sort),v=a(h.push),O=l((function(){h.sort(void 0)})),g=l((function(){h.sort(null)})),x=u("sort"),w=!l((function(){if(m)return m<70;if(!(b&&b>3)){if(f)return!0;if(p)return p<603;var e,t,c,n,a="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:c=3;break;case 68:case 71:c=4;break;default:c=2}for(n=0;n<47;n++)h.push({k:t+n,v:c})}for(h.sort((function(e,t){return t.v-e.v})),n=0;n<h.length;n++)t=h[n].k.charAt(0),a.charAt(a.length-1)!==t&&(a+=t);return"DGBEFHACIJK"!==a}})),E=O||!g||!x||!w,N=function(e){return function(t,c){return void 0===c?-1:void 0===t?1:void 0!==e?+e(t,c)||0:i(t)>i(c)?1:-1}};n({target:"Array",proto:!0,forced:E},{sort:function(e){void 0!==e&&o(e);var t=r(this);if(w)return void 0===e?j(t):j(t,e);var c,n,a=[],i=s(t);for(n=0;n<i;n++)n in t&&v(a,t[n]);d(a,N(e)),c=a.length,n=0;while(n<c)t[n]=a[n++];while(n<i)delete t[n++];return t}})},"512c":function(e,t,c){var n=c("342f"),a=n.match(/AppleWebKit\/(\d+)\./);e.exports=!!a&&+a[1]},"598c":function(e,t,c){"use strict";c("ec2b")},a157:function(e,t,c){"use strict";c("ec35")},a3d6:function(e,t,c){"use strict";c("fdc3")},a640:function(e,t,c){"use strict";var n=c("d039");e.exports=function(e,t){var c=[][e];return!!c&&n((function(){c.call(null,t||function(){throw 1},1)}))}},addb:function(e,t,c){var n=c("f36a"),a=Math.floor,o=function(e,t){var c=e.length,i=a(c/2);return c<8?r(e,t):s(e,o(n(e,0,i),t),o(n(e,i),t),t)},r=function(e,t){var c,n,a=e.length,o=1;while(o<a){n=o,c=e[o];while(n&&t(e[n-1],c)>0)e[n]=e[--n];n!==o++&&(e[n]=c)}return e},s=function(e,t,c,n){var a=t.length,o=c.length,r=0,s=0;while(r<a||s<o)e[r+s]=r<a&&s<o?n(t[r],c[s])<=0?t[r++]:c[s++]:r<a?t[r++]:c[s++];return e};e.exports=o},b0c0:function(e,t,c){var n=c("83ab"),a=c("5e77").EXISTS,o=c("e330"),r=c("9bf2").f,s=Function.prototype,i=o(s.toString),l=/^\s*function ([^ (]*)/,d=o(l.exec),u="name";n&&!a&&r(s,u,{configurable:!0,get:function(){try{return d(l,i(this))[1]}catch(e){return""}}})},b2ad:function(e,t,c){"use strict";c("4e82");t["a"]=function(e){e.sort((function(){return Math.random()-.5}))}},c621:function(e,t,c){"use strict";c("fcab")},d504:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),a=function(e){return Object(n["pushScopeId"])("data-v-645d1d3d"),e=e(),Object(n["popScopeId"])(),e},o={class:"home pt-md-5"},r={class:"container py-5 px-4"},s={class:"mb-6 px-4"},i={class:"row gx-1 gy-3 justify-content-center"},l=Object(n["createStaticVNode"])('<div class="col-md-8 col-lg-7" data-v-645d1d3d><div class="text-center text-md-start" data-v-645d1d3d><h1 class="lh-base fw-light fs-2 fs-sm-1" data-v-645d1d3d> 探索<span class="text-decoration-underline text-warning" data-v-645d1d3d><span class="text-dark" data-v-645d1d3d>台灣之美</span></span><br data-v-645d1d3d> 讓我們更親近這片土地 </h1><span class="text-secondary fs-6 fs-sm-4" data-v-645d1d3d><i class="bi bi-geo-alt-fill text-warning" data-v-645d1d3d></i> 台灣旅遊景點導覽<span class="ms-2 font-noto-serif fw-bolder" data-v-645d1d3d>Taiwan Travel Guide</span></span></div></div>',1),d={class:"col-md-4 col-lg-5"},u=a((function(){return Object(n["createElementVNode"])("input",{class:"border rounded bg-light fs-5 px-3 py-2 w-100 mb-2",type:"text",placeholder:"你想去哪裡？請輸入關鍵字"},null,-1)})),b=a((function(){return Object(n["createElementVNode"])("button",{type:"button",class:"btn btn-primary text-white w-100"},[Object(n["createElementVNode"])("i",{class:"bi bi-search me-2"}),Object(n["createTextVNode"])("搜 尋 ")],-1)})),f={class:"home-carousel mb-6"},m={class:"home-activity mb-6"},p=a((function(){return Object(n["createElementVNode"])("div",{class:"d-flex justify-content-between align-items-end mb-3"},[Object(n["createElementVNode"])("h2",{class:"fw-light mb-0"},"近期活動"),Object(n["createElementVNode"])("a",{class:"text-danger fs-5 text-end",href:"#/activities"},[Object(n["createTextVNode"])("查看更多活動 "),Object(n["createElementVNode"])("i",{class:"bi bi-chevron-right"})])],-1)})),h={class:"row row-cols-1 row-cols-md-2 gy-3"},j={class:"home-scenic-spot mb-6"},v=a((function(){return Object(n["createElementVNode"])("div",{class:"d-flex justify-content-between align-items-end mb-3"},[Object(n["createElementVNode"])("h2",{class:"fw-light mb-0"},"熱門打卡景點"),Object(n["createElementVNode"])("a",{class:"text-danger fs-5 text-end",href:"#/scenic-spots"},[Object(n["createTextVNode"])("查看更多景點 "),Object(n["createElementVNode"])("i",{class:"bi bi-chevron-right"})])],-1)})),O={class:"row gy-3"},g={class:"home-resaurant mb-6"},x=a((function(){return Object(n["createElementVNode"])("div",{class:"d-flex justify-content-between align-items-end mb-3"},[Object(n["createElementVNode"])("h2",{class:"fw-light mb-0"},"一再回訪美食"),Object(n["createElementVNode"])("a",{class:"text-danger fs-5 text-end",href:"#/restaurants"},[Object(n["createTextVNode"])("查看更多美食 "),Object(n["createElementVNode"])("i",{class:"bi bi-chevron-right"})])],-1)})),w={class:"row gy-3"};function E(e,t,c,a,E,N){var V=Object(n["resolveComponent"])("DropdownList"),y=Object(n["resolveComponent"])("Carousel"),k=Object(n["resolveComponent"])("EventCard"),B=Object(n["resolveComponent"])("GeneralCard");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[Object(n["createElementVNode"])("div",r,[Object(n["createElementVNode"])("header",s,[Object(n["createElementVNode"])("div",i,[l,Object(n["createElementVNode"])("div",d,[Object(n["createElementVNode"])("form",null,[Object(n["createVNode"])(V,{listItems:E.themes},null,8,["listItems"]),u,b])])])]),Object(n["createElementVNode"])("section",f,[Object(n["createVNode"])(y)]),Object(n["createElementVNode"])("section",m,[p,Object(n["createElementVNode"])("div",h,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(E.events,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{key:e.ID,class:"col"},[Object(n["createVNode"])(k,{event:e},null,8,["event"])])})),128))])]),Object(n["createElementVNode"])("section",j,[v,Object(n["createElementVNode"])("div",O,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(E.scenicSpots,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{key:e.ID,class:"col-6 col-md-3"},[Object(n["createVNode"])(B,{item:e,cardPath:"scenic-spots"},null,8,["item"])])})),128))])]),Object(n["createElementVNode"])("section",g,[x,Object(n["createElementVNode"])("div",w,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(E.restaurants,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{key:e.ID,class:"col-6 col-md-3"},[Object(n["createVNode"])(B,{item:e,cardPath:"restaurants"},null,8,["item"])])})),128))])])])])}c("d3b7"),c("159b"),c("fb6a"),c("b0c0");var N=function(e){return Object(n["pushScopeId"])("data-v-f26d8bb4"),e=e(),Object(n["popScopeId"])(),e},V={class:"dropdown-list position-relative mb-2"},y={class:"dropdown-input border rounded bg-light position-relative"},k={key:0,class:"text-primary"},B={key:1,class:"text-primary"},S=N((function(){return Object(n["createElementVNode"])("button",{type:"button",class:"btn p-0 d-flex fs-6 text-secondary stretched-link","data-bs-toggle":"collapse","data-bs-target":"#dropdownCollapse","aria-expanded":"false","aria-controls":"dropdownCollapse"},[Object(n["createElementVNode"])("i",{class:"bi bi-chevron-down"})],-1)})),D={class:"collapse mt-1 position-absolute w-100",id:"dropdownCollapse",ref:"collapse"},I={class:"card card-body p-0"},C={class:"list-unstyled mb-0"},T=["onClick"];function M(e,t,c,a,o,r){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",V,[Object(n["createElementVNode"])("div",y,[o.selectedItem?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",k,Object(n["toDisplayString"])(o.selectedItem),1)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",B,Object(n["toDisplayString"])(r.defaultSelect),1)),S]),Object(n["createElementVNode"])("div",D,[Object(n["createElementVNode"])("div",I,[Object(n["createElementVNode"])("ul",C,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.listItems,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:e.name,class:"dropdown-list-item"},[Object(n["createElementVNode"])("a",{class:"d-block w-100",href:"#",onClick:Object(n["withModifiers"])((function(t){return r.selectHandler(e.name)}),["prevent"])},Object(n["toDisplayString"])(e.name),9,T)])})),128))])])],512)])}var H=c("810f"),G=c.n(H),A={data:function(){return{collapse:{},selectedItem:""}},props:{listItems:{type:Object,default:function(){}}},computed:{defaultSelect:function(){return this.listItems[0].name}},methods:{selectHandler:function(e){this.selectedItem=e,this.collapse.hide()}},mounted:function(){this.collapse=new G.a(this.$refs.collapse,{toggle:!1})}},F=(c("a157"),c("6b0d")),L=c.n(F);const _=L()(A,[["render",M],["__scopeId","data-v-f26d8bb4"]]);var P=_,Y=c("3693"),J=function(e){return Object(n["pushScopeId"])("data-v-7f5786a3"),e=e(),Object(n["popScopeId"])(),e},W=["href"],q={class:"card rounded-3 shadow"},$={class:"row g-0 h-100"},R={class:"col-4 overflow-hidden"},U=["src","alt","onerror"],K={class:"col-8"},z={class:"card-body h-100 d-flex flex-column"},X={class:"text-secondary fs-5 mb-1"},Q={class:"card-title fw-bolder"},Z={class:"d-flex justify-content-between mt-auto"},ee={key:0,class:"text-secondary fs-5"},te=J((function(){return Object(n["createElementVNode"])("i",{class:"bi bi-geo-alt"},null,-1)})),ce=J((function(){return Object(n["createElementVNode"])("span",{class:"fs-5 text-primary ms-auto"},[Object(n["createTextVNode"])("詳細介紹 "),Object(n["createElementVNode"])("i",{class:"bi bi-chevron-right"})],-1)}));function ne(e,t,c,a,o,r){return Object(n["openBlock"])(),Object(n["createElementBlock"])("a",{class:"event-card",href:"#/activities/".concat(c.event.ID)},[Object(n["createElementVNode"])("div",q,[Object(n["createElementVNode"])("div",$,[Object(n["createElementVNode"])("div",R,[Object(n["createElementVNode"])("img",{class:"object-fit-cover",src:r.imgUrl,alt:c.event.Name,onerror:o.defaultImg},null,8,U)]),Object(n["createElementVNode"])("div",K,[Object(n["createElementVNode"])("div",z,[Object(n["createElementVNode"])("span",X,Object(n["toDisplayString"])(r.startTime)+" - "+Object(n["toDisplayString"])(r.endTime),1),Object(n["createElementVNode"])("h3",Q,Object(n["toDisplayString"])(c.event.Name),1),Object(n["createElementVNode"])("div",Z,[c.event.City?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",ee,[te,Object(n["createTextVNode"])(" "+Object(n["toDisplayString"])(c.event.City),1)])):Object(n["createCommentVNode"])("",!0),ce])])])])])],8,W)}var ae={data:function(){return{defaultImg:'this.src="'+c("c538")+'"'}},props:{event:{type:Object,default:void 0}},computed:{imgUrl:function(){return this.event.Picture.PictureUrl1||c("c538")},startTime:function(){return new Date(this.event.StartTime).toLocaleDateString()},endTime:function(){return new Date(this.event.EndTime).toLocaleDateString()}}};c("c621");const oe=L()(ae,[["render",ne],["__scopeId","data-v-7f5786a3"]]);var re=oe,se=c("b562"),ie=c("b2ad"),le=c("3b94"),de={components:{DropdownList:P,Carousel:Y["a"],EventCard:re,GeneralCard:se["a"]},data:function(){return{themes:[{name:"探索景點"},{name:"節慶活動"},{name:"品嘗美食"}],events:[],scenicSpots:[],restaurants:[]}},methods:{getActivities:function(){var e=this;this.axios({method:"get",url:"https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$format=JSON",headers:Object(le["a"])()}).then((function(t){var c=(new Date).getFullYear(),n=(new Date).getMonth(),a=[];t.data.forEach((function(e){var t=new Date(e.StartTime),o=new Date(e.EndTime);o<new Date||t.getFullYear()===c&&t.getMonth()===n&&a.push(e)})),Object(ie["a"])(a),e.events=a.slice(0,4)})).catch((function(e){console.log(e)}))},getScenicSpots:function(){var e=this;this.axios({method:"get",url:"https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$format=JSON",headers:Object(le["a"])()}).then((function(t){var c=t.data;Object(ie["a"])(c),e.scenicSpots=c.slice(0,4)})).catch((function(e){console.log(e)}))},getRestaurants:function(){var e=this;this.axios({method:"get",url:"https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$format=JSON",headers:Object(le["a"])()}).then((function(t){var c=t.data;Object(ie["a"])(c),e.restaurants=c.slice(0,4)})).catch((function(e){console.log(e)}))}},created:function(){this.getActivities(),this.getScenicSpots(),this.getRestaurants()}};c("598c");const ue=L()(de,[["render",E],["__scopeId","data-v-645d1d3d"]]);t["default"]=ue},d998:function(e,t,c){var n=c("342f");e.exports=/MSIE|Trident/.test(n)},ec2b:function(e,t,c){},ec35:function(e,t,c){},fcab:function(e,t,c){},fdc3:function(e,t,c){}}]);
//# sourceMappingURL=chunk-e245478e.1fb1bc9f.js.map