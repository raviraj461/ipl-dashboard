(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){},34:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(24),r=c.n(n),j=(c(31),c(32),c(5)),i=c(2),l=c(13),h=c.n(l),b=c(16),m=c(17),d=c(48),o=c(49),O=(c(20),c(34),c(53)),x=c(0),u=function(e){var t=e.teamName;return Object(x.jsx)(O.a,{className:t,children:Object(x.jsx)(O.a.Body,{children:Object(x.jsx)(O.a.Title,{children:Object(x.jsx)("h3",{children:Object(x.jsx)(j.b,{to:"/teams/".concat(t),children:t})})})})})},f=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(b.a)(h.a.mark((function e(){var t,c,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat("","/team"),e.next=3,fetch(t);case 3:return c=e.sent,e.next=6,c.json();case 6:a=e.sent,s(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),document.title="IPL Dashboard"}),[c]),Object(x.jsx)("div",{className:"HomePage",children:Object(x.jsx)(d.a,{children:Object(x.jsx)(d.a,{children:c.map((function(e){return Object(x.jsxs)(o.a,{lg:"4",children:["  ",Object(x.jsx)(u,{teamName:e.teamName,className:e.teamName},e.id)]})}))})})})},N=c(50),p=c(51),g=(c(44),function(e){var t=e.teamName,c=e.match;if(!c)return null;var a=c.team1===t?c.team2:c.team1,s="/teams/"+a;return Object(x.jsx)("div",{className:"MatchDetailCard",children:Object(x.jsx)("div",{className:a,children:Object(x.jsxs)("div",{className:"margin-lg-card",children:[Object(x.jsxs)(d.a,{children:[Object(x.jsxs)(o.a,{lg:"8",children:[Object(x.jsxs)("h2",{children:[Object(x.jsx)("span",{className:"small",children:"vs"})," \xa0",Object(x.jsx)(j.b,{to:s,children:a})]}),Object(x.jsxs)("h3",{children:["on ",c.date]}),Object(x.jsxs)("h4",{children:["at ",c.venue]}),Object(x.jsxs)("h5",{children:[c.matchWinner===t&&Object(x.jsx)(N.a,{className:"win-class"}),c.matchWinner===a&&Object(x.jsx)(p.a,{className:"loss-class"})," \xa0",c.matchWinner," won by ",c.resultMargin," ",c.result]})]}),Object(x.jsx)(o.a,{lg:"4 more-link",children:Object(x.jsxs)("p",{children:[Object(x.jsx)("strong",{children:"First Innings"})," ",Object(x.jsx)("br",{}),c.team1," ",Object(x.jsx)("br",{}),Object(x.jsx)("strong",{children:"Second Innings"})," ",Object(x.jsx)("br",{}),c.team2," ",Object(x.jsx)("br",{}),Object(x.jsx)("strong",{children:"Player of Match"}),"  ",Object(x.jsx)("br",{}),c.playerOfMatch,Object(x.jsx)("br",{}),Object(x.jsx)("strong",{children:"Umpires"})," ",Object(x.jsx)("br",{})," ",c.umpire1," , ",c.umpire2]})})]}),Object(x.jsx)(d.a,{children:Object(x.jsx)(o.a,{lg:"12"})})]})})})}),v=function(e){var t=e.teamName,c=e.match;if(!c)return null;var a=c.team1===t?c.team2:c.team1,s="/teams/"+a;return Object(x.jsx)("div",{className:"MatchSmallCard",children:Object(x.jsx)(O.a,{className:a,children:Object(x.jsxs)(O.a.Body,{children:[Object(x.jsxs)(O.a.Title,{children:[Object(x.jsx)("span",{className:"small",children:"vs"}),"  ",Object(x.jsx)(j.b,{to:s,children:a})]}),Object(x.jsxs)(O.a.Text,{children:[c.matchWinner===t&&Object(x.jsx)(N.a,{className:"win-class"}),c.matchWinner===a&&Object(x.jsx)(p.a,{className:"loss-class"}),"\xa0",c.matchWinner," won by ",c.resultMargin," ",c.result]})]})})})},L=function(e){var t=e.teamName,c=e.match;if(!c)return null;var a=c.team1===t?c.team2:c.team1;return Object(x.jsxs)("div",{className:"LastFourMatches",children:[c.matchWinner===t&&Object(x.jsx)(N.a,{className:"win-class"}),c.matchWinner===a&&Object(x.jsx)(p.a,{className:"loss-class"})]})},w=c(26),y=(c(45),function(){var e=Object(a.useState)({matches:[]}),t=Object(m.a)(e,2),c=t[0],s=t[1],n=Object(i.f)().teamName;return Object(a.useEffect)((function(){(function(){var e=Object(b.a)(h.a.mark((function e(){var t,c,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat("","/team/").concat(n),e.next=3,fetch(t);case 3:return c=e.sent,e.next=6,c.json();case 6:a=e.sent,s(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),document.title="IPL Dashboard"}),[n]),c&&c.teamName?Object(x.jsx)("div",{className:"TeamPage",children:Object(x.jsxs)(d.a,{children:[Object(x.jsxs)(o.a,{lg:"4",children:[Object(x.jsx)(d.a,{children:Object(x.jsx)("h1",{children:c.teamName})}),Object(x.jsxs)(d.a,{children:[Object(x.jsxs)(o.a,{sm:"6",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("strong",{children:"Total Matches"})," : ",c.totalMatches]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("strong",{children:"Wins/Loss"})," : ",Object(x.jsx)("span",{className:"win-class",children:c.totalWins})," / ",Object(x.jsx)("span",{className:"loss-class",children:c.totalLost})]}),Object(x.jsx)("p",{children:Object(x.jsx)("strong",{children:"Last Four Matches "})}),Object(x.jsx)("div",{class:"float-container",children:c.matches.map((function(e){return Object(x.jsx)(L,{teamName:c.teamName,match:e},e.id)}))})]}),Object(x.jsx)(o.a,{sm:"6",children:Object(x.jsx)(w.PieChart,{data:[{title:"Losses",value:c.totalLost,color:"#a34d5d",label:"Losses"},{title:"Wins",value:c.totalWins,color:"#4da375",label:"Wins"}]})})]})]}),Object(x.jsx)(o.a,{lg:"8",children:Object(x.jsxs)(d.a,{children:[Object(x.jsx)(o.a,{lg:"12",children:Object(x.jsx)(g,{teamName:c.teamName,match:c.matches[0]})}),Object(x.jsx)(d.a,{children:c.matches.slice(1).map((function(e){return Object(x.jsx)(o.a,{lg:"4",children:Object(x.jsx)(v,{teamName:c.teamName,match:e},e.id)})}))}),Object(x.jsx)(j.b,{to:"/teams/".concat(n,"/matches/").concat("2020"),className:"pull-right ml-auto more-link",children:"More "})]})})]})}):""}),M=(c(46),function(e){for(var t=e.teamName,c=[],a="2008";a<="2020";a++)c.push(a);return Object(x.jsx)("ul",{className:"remove-disc",children:c.map((function(e){return Object(x.jsx)("li",{children:Object(x.jsx)(j.b,{to:"/teams/".concat(t,"/matches/").concat(e),children:e})},e)}))})}),P=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),c=t[0],s=t[1],n=Object(i.f)(),r=n.teamName,j=n.year;return Object(a.useEffect)((function(){(function(){var e=Object(b.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team/").concat(r,"/matches?year=").concat(j));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),document.title="IPL Dashboard"}),[r,j]),c?Object(x.jsx)("div",{className:"MatchPage",children:Object(x.jsxs)(d.a,{children:[Object(x.jsxs)(o.a,{lg:"2",className:"year-selector-class",children:[Object(x.jsx)("h3",{children:"Years"}),Object(x.jsx)(M,{teamName:r},c.id)]}),Object(x.jsxs)(o.a,{lg:"10",children:[Object(x.jsxs)("h1",{children:[r," in ",j]}),c.map((function(e){return Object(x.jsx)(g,{teamName:r,match:e},e.id)}))]})]})}):Object(x.jsx)("h1",{children:"Matches Not Found"})},W=c.p+"static/media/IPL.400e98a5.jpeg",I=function(){return Object(x.jsxs)(d.a,{className:"banner-page",children:[Object(x.jsx)(o.a,{lg:"9",children:Object(x.jsxs)("h1",{children:[" ",Object(x.jsx)("img",{src:W,alt:"IPL Logo",width:"100px",height:"100px"}),"  Indian Premier League"]})}),Object(x.jsx)(o.a,{lg:"3",children:Object(x.jsx)("div",{className:"banner-link",children:Object(x.jsx)(j.b,{to:"/teams/",children:"IPL Teams"})})})]})},k=c(52);var F=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(k.a,{children:Object(x.jsx)(d.a,{children:Object(x.jsx)(o.a,{lg:"12",children:Object(x.jsxs)(j.a,{children:[Object(x.jsx)(I,{}),Object(x.jsxs)(i.c,{children:[Object(x.jsx)(i.a,{path:"/teams/:teamName/matches/:year",children:Object(x.jsx)(P,{})}),Object(x.jsx)(i.a,{path:"/teams/:teamName",children:Object(x.jsx)(y,{})}),Object(x.jsx)(i.a,{path:"/teams/",children:Object(x.jsx)(f,{})})]})]})})})})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,54)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(F,{})}),document.getElementById("root")),T()}},[[47,1,2]]]);
//# sourceMappingURL=main.1191fb37.chunk.js.map