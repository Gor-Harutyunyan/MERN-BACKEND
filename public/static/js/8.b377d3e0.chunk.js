(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[8],{42:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(49);t.a=function(e){return r.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},49:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(47),r=a.n(n),c=a(48),l=a(10),o=a(0),s=a.n(o),i=a(1),u=a(44),m=a(42),p=a(58),d=a(11),E=a(51),f=a(50),h=a(15),v=(a(65),function(e){var t=Object(o.useContext)(d.a),a=Object(o.useState)(!1),n=Object(l.a)(a,2),i=n[0],v=n[1],b=Object(o.useState)(!1),j=Object(l.a)(b,2),k=j[0],C=j[1],O=Object(E.a)(),g=O.isLoading,N=O.error,_=O.sendRequest,w=O.clearError,y=function(){return v(!1)},D=function(){C(!1)},I=function(){var a=Object(c.a)(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return C(!1),a.prev=1,a.next=4,_("https://mern-first-proj.herokuapp.com/api"+"/places/".concat(e.id),"DELETE",null,{Authorization:"Bearer "+t.token});case 4:e.onDelete(e.id),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(1);case 9:case"end":return a.stop()}}),a,null,[[1,7]])})));return function(){return a.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(f.a,{error:N,onClear:w}),s.a.createElement(p.a,{show:i,onCancel:y,header:e.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:s.a.createElement(u.a,{onClick:y},"CLOSE")},s.a.createElement("div",{className:"map-container"},s.a.createElement("h2",null,"Here should be a map showing the location of this place on Google Maps"))),s.a.createElement(p.a,{show:k,onCancel:D,header:"Are you sure?",footerClass:"place-item__modal-actions",footer:s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,{inverse:!0,onClick:D},"CANCEL"),s.a.createElement(u.a,{danger:!0,onClick:I},"DELETE"))},s.a.createElement("p",null,"Do you want to proceed and delete this place? Please note that it can't be undone thereafter")),s.a.createElement("li",{className:"place-item"},s.a.createElement(m.a,{className:"place-item__content"},g&&s.a.createElement(h.a,{asOverlay:!0}),s.a.createElement("div",{className:"place-item__image"},s.a.createElement("img",{src:"".concat("https://mern-first-proj.herokuapp.com","/").concat(e.image),alt:e.title})),s.a.createElement("div",{className:"place-item__info"},s.a.createElement("h2",null,e.title),s.a.createElement("h3",null,e.address),s.a.createElement("p",null,e.description)),s.a.createElement("div",{className:"place-item__actions"},s.a.createElement(u.a,{inverse:!0,onClick:function(){return v(!0)}},"VIEW ON MAP"),t.userId===e.creatorId&&s.a.createElement(u.a,{to:"/places/".concat(e.id)},"EDIT"),t.userId===e.creatorId&&s.a.createElement(u.a,{danger:!0,onClick:function(){C(!0)}},"DELETE")))))}),b=(a(66),function(e){return 0===e.items.length?s.a.createElement("div",{className:"place-list center"},s.a.createElement(m.a,null,s.a.createElement("h2",null,"No places found. Maybe create one?"),s.a.createElement(u.a,{to:"/places/new"},"Share Place"))):s.a.createElement("ul",{className:"place-list"},e.items.map((function(t){return s.a.createElement(v,{key:t.id,id:t.id,image:t.image,title:t.title,description:t.description,address:t.address,creatorId:t.creator,coordinates:t.location,onDelete:e.onDeletePlace})})))});t.default=function(){var e=Object(o.useState)(),t=Object(l.a)(e,2),a=t[0],n=t[1],u=Object(E.a)(),m=u.isLoading,p=u.error,d=u.sendRequest,v=u.clearError,j=Object(i.h)().userId;Object(o.useEffect)((function(){(function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d("".concat("https://mern-first-proj.herokuapp.com/api","/places/user/").concat(j));case 3:t=e.sent,n(t.places),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[d,j]);return s.a.createElement(s.a.Fragment,null,s.a.createElement(f.a,{error:p,onClear:v}),m&&s.a.createElement("div",{className:"center"},s.a.createElement(h.a,null)),!m&&a&&s.a.createElement(b,{items:a,onDeletePlace:function(e){n((function(t){return t.filter((function(t){return t.id!==e}))}))}}))}}}]);
//# sourceMappingURL=8.b377d3e0.chunk.js.map