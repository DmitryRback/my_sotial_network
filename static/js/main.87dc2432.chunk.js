(this["webpackJsonpfirst-react"]=this["webpackJsonpfirst-react"]||[]).push([[0],{104:function(e,t,a){e.exports={friends:"Friends_friends__2ZD1S",users:"Friends_users__26AS1"}},12:function(e,t,a){e.exports={nav:"NavBar_nav__7_Z07",nav_nav:"NavBar_nav_nav__3Zn63",on:"NavBar_on__2-lMx",nav_btn:"NavBar_nav_btn__8mrWy",first:"NavBar_first__2g3aL",item:"NavBar_item__2g8li",active:"NavBar_active__3vRt1",bottom:"NavBar_bottom__RiLk4"}},13:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return s}));var n=a(144),r=n.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"ca1dc8a0-f4f2-4de2-85ac-647cb0320e99"}}),o={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return r.delete("follow/".concat(e))},follow:function(e){return r.post("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolet methos. Please ProfileAPI Object"),i.getProfile(e)}},i={getProfile:function(e){return r.get("profile/".concat(e))},getStatus:function(e){return r.get("profile/status/".concat(e))},updateStatus:function(e){return r.put("profile/status",{status:e})}},s={getMe:function(){return r.get("auth/me")},login:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:a})},logout:function(){return r.delete("auth/login")}}},136:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(45),r=a(8),o=function(e){return{type:"ADD-MESSAGE",newMessage:e}},i={dialogs:[{name:"Dmitry Poloviy",id:1,img:"https://previews.123rf.com/images/puruan/puruan1702/puruan170208178/72742074-boy-avatar-icon-in-colors-.jpg"},{name:"Vasilisa Poloviy",id:2,img:"https://previews.123rf.com/images/puruan/puruan1702/puruan170208178/72742074-boy-avatar-icon-in-colors-.jpg"},{name:"Sofia Poloviy",id:3,img:"https://previews.123rf.com/images/puruan/puruan1702/puruan170208178/72742074-boy-avatar-icon-in-colors-.jpg"},{name:"Julia Poloviy",id:4,img:"https://previews.123rf.com/images/puruan/puruan1702/puruan170208178/72742074-boy-avatar-icon-in-colors-.jpg"},{name:"Natalia Poloviy",id:5,img:"https://previews.123rf.com/images/puruan/puruan1702/puruan170208178/72742074-boy-avatar-icon-in-colors-.jpg"}],messages:[{message:"Hi",id:1},{message:"How are you How are you How are you How are you",id:2},{message:"How youre Life?",id:3},{message:"EDBI",id:4},{message:"LBCDN",id:5}]};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":return Object(r.a)({},e,{messages:[].concat(Object(n.a)(e.messages),[{message:t.newMessage,id:6}])});default:return e}}},139:function(e,t,a){"use strict";var n=a(9),r=a.n(n),o=a(15),i=a(45),s=a(8),c=a(13),l=function(e,t,a,n){return e.map((function(e){return e[t]===a?Object(s.a)({},e,{},n):e}))};a.d(t,"e",(function(){return A})),a.d(t,"f",(function(){return g})),a.d(t,"g",(function(){return E})),a.d(t,"d",(function(){return h})),a.d(t,"c",(function(){return v})),a.d(t,"h",(function(){return S})),a.d(t,"b",(function(){return O}));var u={users:[],pageSize:12,totalItemsCount:27,currentPage:1,isFetching:!1,toggleFollowingProgress:[]},p=function(e){return{type:"FOLLOW",userId:e}},f=function(e){return{type:"UNFOLLOW",userId:e}},m=function(e){return{type:"SET_USERS",users:e}},A=function(e){return{type:"SET_CURRENT_PAGE",page:e}},g=function(e){return{type:"SET_TOTAL_USERS_COUNT",usersCount:e}},d=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},E=function(e,t){return{type:"TOGGLE_FOLLOWING_PROGRESS",isFetching:e,userId:t}},h=function(e,t){return function(){var a=Object(o.a)(r.a.mark((function a(n){var o;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(d(!0)),a.next=3,c.c.getUsers(e,t);case 3:o=a.sent,n(d(!1)),n(m(o.items)),n(g(o.totalCount));case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},v=function(e,t){return function(){var a=Object(o.a)(r.a.mark((function a(n){var o;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(d(!0)),n(A(e)),a.next=4,c.c.getUsers(e,t);case 4:o=a.sent,n(d(!1)),n(m(o.items));case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},b=function(){var e=Object(o.a)(r.a.mark((function e(t,a,n,o){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(E(!0,a)),e.next=3,n(a);case 3:0===e.sent.data.resultCode&&t(o(a)),t(E(!1,a));case 6:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),S=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:b(a,e,c.c.unfollow.bind(c.c),f);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:b(a,e,c.c.follow.bind(c.c),p);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(s.a)({},e,{users:l(e.users,"id",t.userId,{followed:!0})});case"UNFOLLOW":return Object(s.a)({},e,{users:l(e.users,"id",t.userId,{followed:!1})});case"SET_USERS":return Object(s.a)({},e,{users:Object(i.a)(t.users)});case"SET_CURRENT_PAGE":return Object(s.a)({},e,{currentPage:t.page});case"SET_TOTAL_USERS_COUNT":return Object(s.a)({},e,{totalItemsCount:t.usersCount});case"TOGGLE_IS_FETCHING":return Object(s.a)({},e,{isFetching:t.isFetching});case"TOGGLE_FOLLOWING_PROGRESS":return Object(s.a)({},e,{toggleFollowingProgress:t.isFetching?[].concat(Object(i.a)(e.toggleFollowingProgress),[t.userId]):e.toggleFollowingProgress.filter((function(e){return e!==t.userId}))});default:return e}}},140:function(e,t,a){e.exports=a.p+"static/media/loader.08ef5b15.svg"},141:function(e,t,a){e.exports=a.p+"static/media/background.e61daf1d.jpg"},142:function(e,t,a){e.exports={login_block:"LoginBtn_login_block__1qbrR",exit:"LoginBtn_exit__2O3aG",login_btn:"LoginBtn_login_btn__3FY6s",login:"LoginBtn_login__1wlAM"}},145:function(e,t,a){e.exports={btn:"Button1_btn__2ww_U"}},146:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAABg0lEQVQ4jaWVP0vDYBCHn4ZCQXERdY2Dg1kUxNWpoB2Kg1AQ/ADS4R3c/B5B/AT+wYKCk4id3BwKurzg5Lu7CY4qV681yZsmbX0ghMtdfrlL7i6VZvuIPIyzG0ALqAMhsAC8Aw54BM7iMOrl3IonapxdAWKg4UX73AOHcRi9JT1BRnAP6I0pKGwDL8bZ3VxRdXSAOe/WYiT+yjjbTIlqyRfZzCegBpwbZ5eTmZ4AMyM0HuIwqgwOsb2IXyTj076ocXZd380o5jPXs3aShnSNZLrvudIsldhZWoH2YRGLGV/WzlIPtLGLqBln++9bz7WCWGE10EkpY1ByWenCbKCjV8ag5LLShfeqznJZBk/GWe/iCJxk2s33TU23qqN5XKSgTd/HOPvtBaTpBLq+7jzXdMj09QZj2gY+/in4qTp/+1S31M2US+VLJikOo2sxhgJxGN3qpp80Y4kfCqZEVVgcm7rRx0G+xVpSUJCvnyIOo1dgR/9RB8BWzj9K2vAyDqNn78nAD+O/Zjw1cE58AAAAAElFTkSuQmCC"},147:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAA8ElEQVQokWPc5+35n4GKgFnn3h0Hdk4uFi4+Pj5KjH318MGDGyeOX2B2Y2K48eHVSyNKDAUZ9vj69Qe7nH0CmQ6mFZ5kYGCoeHD50p23T58+wVBNAMAMY2BgSGZXVv3ArGZqyfDQ2PKpwtkTJLsU5IBHV6/eAxl2MK0QRDOADQQBUg0FGQbyFch3B9MKr8DE4QaSYiiaYSeR5VAMJMbQT69fv7p34fxNbIZhNRCfoSDDbp89c42BgWHCwbTCvdhcj9VAbIb++fnzx51zZ28wMDD0H0wr3IhVEz4D0Q19/+L52////887mFa4EqcGBgYGADGtq7NurRqEAAAAAElFTkSuQmCC"},150:function(e,t,a){e.exports={user:"Friend_user__1y-6O"}},151:function(e,t,a){e.exports={barUser:"SidebarUser_barUser__n3btl"}},152:function(e,t,a){e.exports=a.p+"static/media/logos.9dd399bd.svg"},153:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(17),r=a(18),o=a(20),i=a(19),s=a(21),c=a(34),l=a(0),u=a.n(l),p=a(11),f=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var t=function(t){function a(){return Object(n.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(s.a)(a,t),Object(r.a)(a,[{key:"render",value:function(){return this.props.isAuth?u.a.createElement(e,this.props):u.a.createElement(c.a,{to:"/login"})}}]),a}(u.a.Component);return Object(p.b)(f)(t)}},179:function(e,t,a){e.exports=a(309)},184:function(e,t,a){},185:function(e,t,a){},27:function(e,t,a){e.exports={cover:"ProfileInfo_cover__Rxt3q",profile_description:"ProfileInfo_profile_description__1mhTy",avatar:"ProfileInfo_avatar__I5E3t",description:"ProfileInfo_description__1oBWm",status:"ProfileInfo_status__wxIRc",busy:"ProfileInfo_busy__39nfi",free:"ProfileInfo_free__1lCV-",joob_description:"ProfileInfo_joob_description__LbMRz",login_btn:"ProfileInfo_login_btn__2oEWd",statusMessage:"ProfileInfo_statusMessage__3dcSQ"}},30:function(e,t){e.exports="data:image/jpeg;base64,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"},305:function(e,t,a){},306:function(e,t,a){},307:function(e,t,a){},308:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAHklEQVR4AWMgHoyC/2QCbAbVk4Pp693RMBoNo1EAAF8qOcCciT1KAAAAAElFTkSuQmCC"},309:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(70),i=a.n(o),s=(a(184),a(17)),c=a(18),l=a(20),u=a(19),p=a(21),f=(a(185),a(74)),m=a.n(f),A=a(27),g=a.n(A),d=a(48),E=a(30),h=a.n(E),v=a(98),b=function(e){var t=Object(n.useState)(!1),a=Object(v.a)(t,2),o=a[0],i=a[1],s=Object(n.useState)(e.status),c=Object(v.a)(s,2),l=c[0],u=c[1];Object(n.useEffect)((function(){u(e.status)}),[e.status]);return r.a.createElement("div",null,!o&&r.a.createElement("div",null,r.a.createElement("span",{className:g.a.statusMessage,onDoubleClick:function(){i(!0)}},"".concat(e.status||"no status"))),o&&r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,value:l}),r.a.createElement("button",{onClick:function(){i(!1),e.updateStatus(l)}},"save")))},S=a(141),O=a.n(S),k=a(10),w=a(142),y=a.n(w),P=function(e){return r.a.createElement("div",null,r.a.createElement(k.b,{to:"/login",className:y.a.login_btn},r.a.createElement("div",null,r.a.createElement("img",{src:e.person}),"Login")))},_=function(e){return e.profile?r.a.createElement("div",null,r.a.createElement("div",{className:g.a.cover},r.a.createElement("img",{src:O.a})),r.a.createElement("div",{className:g.a.profile_description},r.a.createElement("div",{className:g.a.avatar},r.a.createElement("img",{src:e.profile.photos.large?e.profile.photos.large:h.a}),r.a.createElement("div",null,e.profile.lookingForAJob?r.a.createElement("div",{className:g.a.free},r.a.createElement("p",null,"Free"),"p>"):r.a.createElement("div",{className:g.a.busy},r.a.createElement("p",null,"Busy")))),r.a.createElement("div",{className:g.a.description},r.a.createElement("h2",null,e.profile.fullName),!e.isAuth&&r.a.createElement("div",null,r.a.createElement(k.b,{to:"/login",className:g.a.login_btn},r.a.createElement("p",null,"Login"))),r.a.createElement("div",{className:g.a.status},r.a.createElement(b,{updateStatus:e.updateStatus,status:e.status}))))):r.a.createElement(d.a,null)},j=a(9),N=a.n(j),C=a(15),I=a(45),B=a(8),H=a(13),T="PROFILE/ADD-POST",R={posts:[{message:"Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?Hello how are youre?",id:1,likesCount:15},{message:"It's my first post",id:2,likesCount:20},{message:"Hello ",id:3,likesCount:15},{message:"post",id:4,likesCount:0}],profile:null,status:null},D=function(e){return{type:"PROFILE/SET_STATUS",status:e}},U=function(e){return function(){var t=Object(C.a)(N.a.mark((function t(a){var n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.c.getProfile(e);case 2:n=t.sent,a({type:"PROFILE/SET_USERS_PROFILE",profile:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(B.a)({},e,{posts:[{id:5,message:t.postMessage,likesCount:0}].concat(Object(I.a)(e.posts))});case"PROFILE/SET_USERS_PROFILE":return Object(B.a)({},e,{profile:t.profile});case"PROFILE/SET_PROFILE_USERS_DATA":return Object(B.a)({},e);case"PROFILE/SET_STATUS":return Object(B.a)({},e,{status:t.status});case"PROFILE/DELETE_POST":return Object(B.a)({},e,{posts:e.posts.filter((function(e){return e.id!==t.id}))});default:return e}},Q=a(59),L=a.n(Q),M=a(53),J=a.n(M),G=function(e){return r.a.createElement("div",{className:J.a.item},r.a.createElement("div",{className:J.a.item_content},r.a.createElement("div",{className:J.a.name_ava},r.a.createElement("img",{src:h.a}),r.a.createElement("p",null,"name")),r.a.createElement("div",{className:J.a.message},e.message),r.a.createElement("div",{className:J.a.likes},r.a.createElement("p",null,"Like ",e.likeCount))))},V=a(97),F=a(137),Z=a(71),q=a(32),Y=a(39),z=Object(q.a)(10),W=Object(q.b)(2),K=Object(F.a)({form:"userPost"})((function(e){return r.a.createElement("form",{className:L.a.form,onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(V.a,{name:"postText",component:Y.b,placeholder:"Add new post.",validate:[q.c,z,W]})),r.a.createElement("div",null,r.a.createElement(Z.a,{text:"Add post"})))}));var X=function(e){var t=e.postsArr.map((function(e){return r.a.createElement(G,{message:e.message,key:e.id,likeCount:e.likesCount})}));return r.a.createElement("div",{className:L.a.post},r.a.createElement("h2",null,"My posts"),r.a.createElement(K,{onSubmit:function(t){e.addPostActionCreator(t.postText)}}),r.a.createElement("div",{className:L.a.post},t))},$=a(11),ee=Object($.b)((function(e){return{newPostText:e.profilePage.newPostText,postsArr:e.profilePage.posts}}),{addPostActionCreator:function(e){return{type:T,postMessage:e}}})(X),te=function(e){return r.a.createElement("div",null,r.a.createElement(_,Object.assign({isAuth:e.isAuth},e)),r.a.createElement(ee,null))},ae=a(34),ne=(a(153),a(5)),re=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).refreshProfile=function(){var e=a.props.match.params.userId;e||(e=a.props.authorizedUserId)||a.props.history.push("/login"),a.props.getProfile(e),a.props.getStatus(e)},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(te,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,isAuth:this.props.isAuth}))}}]),t}(r.a.Component),oe=Object(ne.d)(Object($.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getProfile:U,getStatus:function(e){return function(){var t=Object(C.a)(N.a.mark((function t(a){var n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.b.getStatus(e);case 2:n=t.sent,a(D(n.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(C.a)(N.a.mark((function t(a){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&a(D(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),ae.f)(re),ie=(a(305),function(){return r.a.createElement("div",null,"Settings")}),se=(a(306),function(){return r.a.createElement("div",null,"News")}),ce=(a(307),function(){return r.a.createElement("div",null,"Music")}),le=a(12),ue=a.n(le),pe=a(104),fe=a.n(pe),me=a(150),Ae=a.n(me),ge=function(e){return r.a.createElement("div",{className:Ae.a.user},r.a.createElement("img",{src:e.img}),r.a.createElement("p",null,e.name))},de=function(e){var t=e.friends.map((function(e){return r.a.createElement(ge,{name:e.name,key:e.id,id:e.id,img:e.img})}));return r.a.createElement("div",null,r.a.createElement("div",{className:fe.a.friends},r.a.createElement("p",null,"Friends")),r.a.createElement("div",{className:fe.a.users},t))},Ee=a(151),he=a.n(Ee),ve=function(e){return r.a.createElement("div",{className:he.a.barUser},r.a.createElement(k.b,{to:"/profile/"+e.id},r.a.createElement("img",{onClick:function(){return e.goToProfile(e.id)},src:e.fullProfile&&e.fullProfile.photos.small?e.fullProfile.photos.small:h.a})),r.a.createElement("div",null,e.login))},be=a(33),Se=a.n(be),Oe=a(16),ke=function(e){return r.a.createElement("div",{className:"".concat(ue.a.nav,"  ").concat(e.navBar&&ue.a.on)},r.a.createElement("nav",{className:ue.a.nav_nav},r.a.createElement("div",null,e.isAuth&&r.a.createElement(ve,{id:e.id,goToProfile:e.goToProfile,fullProfile:e.fullProfile,login:e.login})),r.a.createElement("div",{className:ue.a.nav_btn},r.a.createElement("div",{className:ue.a.item+" "+ue.a.first},r.a.createElement(k.b,{to:"/profile",activeClassName:ue.a.active},r.a.createElement(Se.a,{path:Oe.b,size:"32px",color:"#ed104b"}),"Profile")),r.a.createElement("div",{className:ue.a.item},r.a.createElement(k.b,{to:"/dialogs",activeClassName:ue.a.active},r.a.createElement(Se.a,{path:Oe.h,size:"32px",color:"#8224e3"}),"Messages")),r.a.createElement("div",{className:ue.a.item},r.a.createElement(k.b,{to:"/news",activeClassName:ue.a.active},r.a.createElement(Se.a,{path:Oe.f,size:"32px",color:"#f40000"}),"News")),r.a.createElement("div",{className:ue.a.item},r.a.createElement(k.b,{to:"/users",activeClassName:ue.a.active},r.a.createElement(Se.a,{path:Oe.a,size:"32px",color:"#0018f4"}),"Users")),r.a.createElement("div",{className:ue.a.item},r.a.createElement(k.b,{to:"/music",activeClassName:ue.a.active},r.a.createElement(Se.a,{path:Oe.i,size:"32px",color:"#8224e3"}),"Music")),r.a.createElement("div",{className:ue.a.item},r.a.createElement(k.b,{to:"/settings",activeClassName:ue.a.active},r.a.createElement(Se.a,{path:Oe.g,size:"32px",color:"#59d600"}),"Settings"))),r.a.createElement("div",{className:ue.a.bottom},r.a.createElement(de,{friends:e.friends}))))},we=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).goToProfile=function(e){a.props.getProfile(e)},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(ke,Object.assign({},this.props,{goToProfile:this.goToProfile,navBar:this.props.navBar}))}}]),t}(r.a.Component),ye=Object(ne.d)(Object($.b)((function(e){return{friends:e.siteBar.friends,id:e.auth.userId,fullProfile:e.auth.fullProfile,login:e.auth.login,isAuth:e.auth.isAuth,navBar:e.siteBar.navBar}}),{getProfile:U}))(we),Pe=a(78),_e=a.n(Pe),je=a(152),Ne=a.n(je),Ce=(a(308),a(96)),Ie=a.n(Ce),Be=a(79),He=a.n(Be),Te=function(e){return r.a.createElement("div",{className:He.a.login_block},e.isAuth?r.a.createElement("div",{className:He.a.login},r.a.createElement("button",{className:He.a.exit,onClick:e.LogoutThunk},"Exit"),r.a.createElement(k.b,{to:"/profile/"+e.id},r.a.createElement("img",{src:e.fullProfile&&e.fullProfile.photos.small?e.fullProfile.photos.small:h.a}))):r.a.createElement(P,{person:Ie.a}))},Re=function(e){return r.a.createElement("header",{className:_e.a.header},r.a.createElement("div",{className:_e.a.logo},r.a.createElement("img",{src:Ne.a})),r.a.createElement("div",{className:_e.a.menu},r.a.createElement(Se.a,{path:Oe.e,size:"28px",color:"white",onClick:e.changeVisibleNavBar})),r.a.createElement(Te,{isAuth:e.isAuth,id:e.id,LogoutThunk:e.LogoutThunk,fullProfile:e.fullProfile}))},De=a(43),Ue={userId:null,login:null,email:null,isAuth:!1,fullProfile:null},xe=function(e,t,a,n){return{type:"AUTH/SET_USER_DATA",data:{userId:e,login:t,email:a,isAuth:n}}},Qe=function(e){return{type:"AUTH/SET_FULL_PROFILE",fullProfile:e}},Le=function(){return function(){var e=Object(C.a)(N.a.mark((function e(t){var a,n,r,o,i;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.getMe();case 2:0===(a=e.sent).data.resultCode&&(n=a.data.data,r=n.id,o=n.login,i=n.email,t(xe(r,o,i,!0)),H.c.getProfile(r).then((function(e){t(Qe(e.data))})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH/SET_USER_DATA":return Object(B.a)({},e,{},t.data);case"AUTH/SET_FULL_PROFILE":return Object(B.a)({},e,{fullProfile:Object(B.a)({},t.fullProfile)});default:return e}},Je={friends:[{name:"Dmitry Poloviy",id:1,img:"https://previews.123rf.com/images/puruan/puruan1702/puruan170208178/72742074-boy-avatar-icon-in-colors-.jpg"},{name:"Vasilisa Poloviy",id:2,img:"https://previews.123rf.com/images/puruan/puruan1702/puruan170208178/72742074-boy-avatar-icon-in-colors-.jpg"},{name:"Sofia Poloviy",id:3,img:"https://previews.123rf.com/images/puruan/puruan1702/puruan170208178/72742074-boy-avatar-icon-in-colors-.jpg"}],navBar:!0},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_STATE":return!0===e.navBar?Object(B.a)({},e,{navBar:!1}):Object(B.a)({},e,{navBar:!0});default:return e}},Ve=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).changeVisibleNavBar=function(){a.props.changeVisibleNavBar()},a.goToProfile=function(e){a.getProfile(e)},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(Re,Object.assign({},this.props,{goToProfile:this.goToProfile,changeVisibleNavBar:this.changeVisibleNavBar}))}}]),t}(r.a.Component),Fe=Object(ne.d)(Object($.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,id:e.auth.userId,email:e.auth.email,fullProfile:e.auth.fullProfile}}),{setAuthUserData:xe,setFullProfile:Qe,getProfile:U,LogoutThunk:function(){return function(){var e=Object(C.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.logout();case 2:t(xe(null,null,null,!1));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},changeVisibleNavBar:function(){return{type:"CHANGE_STATE"}}}),ae.f)(Ve),Ze=a(46),qe=a.n(Ze),Ye=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return this.props.isAuth?r.a.createElement(ae.a,{to:"/profile"}):r.a.createElement("div",{className:qe.a.box},r.a.createElement("h2",null,"Login"),r.a.createElement(We,{onSubmit:function(t){e.props.LoginThunk(t.email,t.password,t.rememberMe)}}))}}]),t}(r.a.Component),ze=Object(q.a)(30),We=Object(F.a)({form:"login"})((function(e){var t=e.handleSubmit,a=e.error;return r.a.createElement("form",{onSubmit:t},Object(Y.c)(qe.a.placeholder,Y.a,"email","Email",[q.c,ze]),Object(Y.c)(qe.a.placeholder,Y.a,"password","Password",[q.c,ze],{type:"password"}),a&&r.a.createElement("div",{className:qe.a.fullError},a),r.a.createElement("div",{className:qe.a.bottom},Object(Y.c)("","input","rememberMe",null,null,{type:"checkbox"},"Remember me"),r.a.createElement(Z.a,{text:"Login"})))})),Ke=Object($.b)((function(e){return{isAuth:e.auth.isAuth}}),{LoginThunk:function(e,t,a){return function(n){H.a.login(e,t,a).then((function(e){if(0===e.data.resultCode)n(Le());else{var t=e.data.messages.length>0?e.data.messages[0]:"Common error";n(Object(De.a)("login",{_error:t}))}}))}}})(Ye),Xe={initialized:!1},$e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(B.a)({},e,{initialized:!0});default:return e}},et=a(136),tt=a(139),at=a(105),nt=a(138),rt=Object(ne.c)({profilePage:x,dialogsPage:et.b,siteBar:Ge,usersPage:tt.a,auth:Me,app:$e,form:nt.a}),ot=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ne.d,it=Object(ne.e)(rt,ot(Object(ne.a)(at.a))),st=Object(ne.e)(rt,Object(ne.a)(at.a));window.__store__=st;var ct=it,lt=function(e){return function(t){return r.a.createElement(n.Suspense,{fallback:r.a.createElement(d.a,null)},r.a.createElement(e,t))}},ut=r.a.lazy((function(){return a.e(3).then(a.bind(null,316))})),pt=r.a.lazy((function(){return a.e(4).then(a.bind(null,315))})),ft=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(Fe,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(ye,null),r.a.createElement("div",{className:"container"},r.a.createElement(ae.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(oe,null)}}),r.a.createElement(ae.b,{path:"/dialogs",render:lt(ut)}),r.a.createElement(ae.b,{path:"/music",component:ce}),r.a.createElement(ae.b,{path:"/users",render:lt(pt)}),r.a.createElement(ae.b,{path:"/news",component:se}),r.a.createElement(ae.b,{path:"/settings",component:ie}),r.a.createElement(ae.b,{path:"/login",render:function(){return r.a.createElement(Ke,null)}}))),r.a.createElement("div",{className:"footer"},"footer")):r.a.createElement(d.a,{preloader:m.a.preloader})}}]),t}(n.Component),mt=Object(ne.d)(ae.f,Object($.b)((function(e){return{initialized:e.app.initialized,navBar:e.siteBar.navBar}}),{initializeApp:function(){return function(){var e=Object(C.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t(Le()),e.next=3,Promise.all([a]);case 3:t({type:"INITIALIZED_SUCCESS"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(ft),At=function(){return r.a.createElement(k.a,{basename:"/my_sotial_network"},r.a.createElement($.a,{store:ct},r.a.createElement(mt,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(At,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},32:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return o}));var n=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t&&t.length>e)return"Max length ".concat(e," symbols.")}},o=function(e){return function(t){if(t&&t.length<e)return"Min length ".concat(e," symbols")}}},39:function(e,t,a){"use strict";a.d(t,"b",(function(){return v})),a.d(t,"a",(function(){return b})),a.d(t,"c",(function(){return S}));var n=a(99),r=a(17),o=a(18),i=a(20),s=a(19),c=a(21),l=a(0),u=a.n(l),p=a(40),f=a.n(p),m=a(146),A=a.n(m),g=a(147),d=a.n(g),E=(a(46),a(32),a(97)),h=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={showErrorMessage:!1},a.showErrorMessage=function(){a.state.showErrorMessage?a.setState({showErrorMessage:!1}):a.setState({showErrorMessage:!0})},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.meta.error,t=this.props.meta.touched&&e;return u.a.createElement("div",{className:f.a.formControl+" "+(t?f.a.error:"")},u.a.createElement("div",{className:this.props.classInput?this.props.classInput:f.a.textarea},this.props.children,t&&u.a.createElement("div",{className:f.a.message},u.a.createElement("img",{onClick:this.showErrorMessage,src:A.a})),this.state.showErrorMessage&&t&&u.a.createElement("div",{className:f.a.errorMessage},u.a.createElement("div",{className:f.a.inErrorMessage},u.a.createElement("p",null,e),u.a.createElement("img",{src:d.a})))))}}]),t}(u.a.Component),v=function(e){var t=e.input,a=(e.meta,e.child,Object(n.a)(e,["input","meta","child"]));return u.a.createElement(h,e," ",u.a.createElement("textarea",Object.assign({},t,a)))},b=function(e){var t=e.input,a=(e.meta,e.child,Object(n.a)(e,["input","meta","child"]));return u.a.createElement(h,Object.assign({},e,{classInput:f.a.classInput}),u.a.createElement("input",Object.assign({},t,a)))},S=function(e,t,a,n,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"";return u.a.createElement("div",null,u.a.createElement(E.a,Object.assign({className:e,component:t,name:a,placeholder:n,validate:r},o)),i)}},40:function(e,t,a){e.exports={formControl:"FormControl_formControl__39wZb",error:"FormControl_error__1bopc",textarea:"FormControl_textarea__1sRnJ",classInput:"FormControl_classInput__1Z1s2",message:"FormControl_message__2VC2e",errorMessage:"FormControl_errorMessage__2KAEL",inErrorMessage:"FormControl_inErrorMessage__3EfLd"}},46:function(e,t,a){e.exports={box:"Login_box___wV5r",placeholder:"Login_placeholder__Bi5Zt",bottom:"Login_bottom__2Pjon",fullError:"Login_fullError__tCnVW"}},48:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(74),i=a.n(o),s=a(140),c=a.n(s);t.a=function(e){return r.a.createElement("div",{className:e.preloader},r.a.createElement("img",{src:c.a,className:i.a.inPreloader}))}},53:function(e,t,a){e.exports={item:"Post_item__3mnSe",item_content:"Post_item_content__1A8SR",name_ava:"Post_name_ava__3My8v",message:"Post_message__1ZTQU",likes:"Post_likes__WoB-3"}},59:function(e,t,a){e.exports={post:"MyPosts_post__k4BOs",form:"MyPosts_form__2kXLk"}},71:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(145),i=a.n(o);t.a=function(e){return r.a.createElement("button",{className:i.a.btn,onClick:e.onClick},e.text)}},74:function(e,t,a){e.exports={inPreloader:"Preloader_inPreloader__1JxPB",preloader:"Preloader_preloader__2u30V"}},78:function(e,t,a){e.exports={header:"Header_header___1o6B",logo:"Header_logo__36tk3",menu:"Header_menu__3veDt"}},79:function(e,t,a){e.exports={login_block:"LoginBlock_login_block__12YWA",exit:"LoginBlock_exit__uUH68",login_btn:"LoginBlock_login_btn__1diGv",login:"LoginBlock_login__1sjqF"}},96:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAA0klEQVR4Ac3SgQaDQBzH8UMIw2GAIcAAe4dhDzBA2CMMEIY9Qhgg7BF6gADDMIQQQhhCOAQY2vdPyNF02OzLB538cqS+Xt/3KyQokCOGdh0JYCC16CDV0C5DKaQIPjRiSLHLkMET3uhMo0PuMtShtM58tChdhjJI4fDsIYKUuAxt8IJUoIZksFLkOpahg0GKQP08vrrAHgnuqAc3XLCD/2nAwxEG4yqU1nmDcGroDKlFhC209c4aJzSQDlM/4QPLmdevUCu70TWuMzXop4acU3/bG5RWv7F83RE+AAAAAElFTkSuQmCC"}},[[179,1,2]]]);
//# sourceMappingURL=main.87dc2432.chunk.js.map