(this["webpackJsonpreact-tracker"]=this["webpackJsonpreact-tracker"]||[]).push([[0],{116:function(e,a,t){},127:function(e,a,t){},14:function(e,a,t){e.exports={headerWrapper:"Header_headerWrapper__1oKyh",container:"Header_container__1VC87",header:"Header_header__1VCKf",headerNav:"Header_headerNav__3cqTS",headerLink:"Header_headerLink__2SBEi",line:"Header_line__TnUnq",headerItem:"Header_headerItem__2DETK",headerUser:"Header_headerUser__1rJjU",iconLink:"Header_iconLink__3c4Da"}},15:function(e,a,t){e.exports={issue:"Issue_issue__3_TPL",issueItems:"Issue_issueItems__3OL8E",issueItemsActive:"Issue_issueItemsActive__1roBl",time:"Issue_time__WB73G",indicatorMissed:"Issue_indicatorMissed__3blBa",indicatorComplite:"Issue_indicatorComplite__35xsZ",indicatorProcess:"Issue_indicatorProcess__2q5lB",name:"Issue_name__1CzIT",label:"Issue_label__Dv4fE",text:"Issue_text__30Ej2",progress:"Issue_progress__2w0kB",progressMissed:"Issue_progressMissed__35v7J",progressComplite:"Issue_progressComplite__HAx9L",progressInprocess:"Issue_progressInprocess__2cmpT",timer:"Issue_timer__3JeQg",playButton:"Issue_playButton__1Cz0n",activeBar:"Issue_activeBar__RMf7d",burger:"Issue_burger__1uigI",burgerMenu:"Issue_burgerMenu__Er4hN"}},23:function(e,a,t){e.exports={wrapperWorklog:"TimeSlider_wrapperWorklog__2-55T",worklogWindow:"TimeSlider_worklogWindow__h96Tj",header:"TimeSlider_header__3wDYY",container:"TimeSlider_container__3V91H",rangeSlider:"TimeSlider_rangeSlider__1V9EU",range:"TimeSlider_range__3C4s9",track:"TimeSlider_track__2HJVC",thumbDot:"TimeSlider_thumbDot__SEY2Z",thumbItem:"TimeSlider_thumbItem__3IRiG",thumb1:"TimeSlider_thumb1__1jfQp",thumb2:"TimeSlider_thumb2__2oZFN",worklogInputs:"TimeSlider_worklogInputs__364mi",worklogButtons:"TimeSlider_worklogButtons__1reyV",acceptButton:"TimeSlider_acceptButton__1UJga",declineButton:"TimeSlider_declineButton__1Aczf",accept:"TimeSlider_accept__2cqij",decline:"TimeSlider_decline__30pUd","input-range__label-container":"TimeSlider_input-range__label-container__ebaZ-"}},230:function(e,a,t){},231:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=t(39),l=t.n(s),c=t(16),i=(t(127),t(116)),o=t.n(i),u=t(14),m=t.n(u),_=t.p+"static/media/settings.c938a767.svg",d=t.p+"static/media/info.5e9f1ee3.svg",p=t.p+"static/media/exit.8b324315.svg",b=t.p+"static/media/photo.123d85f2.jpg",E=function(){return r.a.createElement("div",{className:m.a.headerWrapper},r.a.createElement("div",{className:m.a.container},r.a.createElement("div",{className:m.a.header},r.a.createElement("nav",{className:m.a.headerNav},r.a.createElement(c.b,{exact:!0,to:"/",className:m.a.headerLink},"Home"),r.a.createElement(c.b,{exact:!0,to:"/",className:m.a.headerLink},"Issues"),r.a.createElement(c.b,{exact:!0,to:"/",className:m.a.headerLink},"Filter"),r.a.createElement(c.b,{exact:!0,to:"/",className:m.a.headerLink},"Projects"),r.a.createElement("div",{className:m.a.line})),r.a.createElement("div",{className:m.a.headerItem},r.a.createElement(c.b,{exact:!0,to:"/",className:m.a.iconLink}," ",r.a.createElement("img",{src:_,alt:"settings"})),r.a.createElement(c.b,{exact:!0,to:"/",className:m.a.iconLink}," ",r.a.createElement("img",{src:d,alt:"info"})),r.a.createElement(c.b,{exact:!0,to:"/",className:m.a.iconLink}," ",r.a.createElement("img",{src:p,alt:"exit"})),r.a.createElement(c.b,{exact:!0,to:"/",className:m.a.iconLink}," ",r.a.createElement("img",{src:b,alt:"userPhoto",className:m.a.headerUser}))))))},v=t(55),g=t.n(v),f=t(6),h=t(44),N=t.n(h),S=t(37),w=t.n(S),y=t.p+"static/media/calendar.881f835b.svg",I=t(68),O=t.n(I),k=function(e){return r.a.createElement("div",{className:O.a.issue},r.a.createElement("div",{className:O.a.indicator,style:{backgroundColor:"".concat(e.color)}}),r.a.createElement("div",{className:O.a.text},r.a.createElement("p",null,e.label),r.a.createElement("p",null,e.time)))},j=function(e){var a=e.syncIssuesList.map((function(e){return r.a.createElement(k,{color:e.color,label:e.label,time:e.time,key:e.id,id:e.id})})),t=Object(n.useState)(!1),s=Object(f.a)(t,2),l=s[0],c=s[1];return r.a.createElement("div",{className:w.a.sync},r.a.createElement("div",{className:w.a.items},r.a.createElement("div",{className:w.a.header},"Google calendar sync"),r.a.createElement("button",{className:l?w.a.switchBtnActive:w.a.switchBtn,onClick:function(){c(!l)}}),r.a.createElement("img",{src:y,alt:"calendar"})),r.a.createElement("div",{className:w.a.issues},!!l&&a))},T=t(8),B=t(56),L=t.n(B),W=t(251),x=t(249),C=t(7),F=t(45),M=t.n(F),A=function(e){var a=e.input,t=e.meta,n=Object(C.a)(e,["input","meta"]);t.touched&&t.error;return r.a.createElement("div",{className:M.a.formControl},r.a.createElement("input",Object.assign({},a,n,{className:M.a.inputStyle})))},D=function(e){var a=e.input,t=e.meta,n=Object(C.a)(e,["input","meta"]),s=t.touched&&t.error;return r.a.createElement("div",{className:M.a.formControl},r.a.createElement("input",Object.assign({},a,n,{className:M.a.inputStyle2})),r.a.createElement("div",null,s?r.a.createElement("span",{className:M.a.error},t.error):null))},V=t(32),H=t.n(V),R=function(e){var a=Object(n.useState)(0),t=Object(f.a)(a,2),s=t[0],l=t[1],c=Object(n.useState)(0),i=Object(f.a)(c,2),o=i[0],u=i[1],m=Object(n.useState)(0),_=Object(f.a)(m,2),d=_[0],p=_[1],b=Object(n.useState)(!0),E=Object(f.a)(b,2),v=E[0],g=E[1],h=Object(n.useState)(0),N=Object(f.a)(h,2),S=N[0],w=N[1];Object(n.useEffect)((function(){var a;return v&&(a=setInterval((function(){l(S),60===o&&(p(d+1),u(0)),60===s&&(u(o+1),l(0),w(0)),w((function(e){return e+1})),e.setStopwatchTime(S)}),1e3)),function(){return clearInterval(a)}}),[v,S]);var y={hours:d>=10?d:"0"+d,minutes:o>=10?o:"0"+o,seconds:s>=10?s:"0"+s};return r.a.createElement("div",{className:H.a.container},r.a.createElement("div",{className:H.a.stopwatch},y.hours,":",y.minutes,":",y.seconds),r.a.createElement("div",{className:H.a.buttons},r.a.createElement("button",{className:"".concat(H.a.button," ").concat(H.a.stopBtn),onClick:e.toggleSlider}),r.a.createElement("button",{className:"".concat(H.a.button," ").concat(H.a.pauseBtn),onClick:function(){g(!v)}})))},J=t(23),P=t.n(J),U=t.p+"static/media/accept.150ceca8.svg",G=t.p+"static/media/decline.018be997.svg",z=t(250),K=t(246),Z=t(67),q=function(e){if(!e)return"Field is required"},Q=Object(K.a)({root:{width:543}});function Y(e){var a=Math.trunc(e/60),t=e%60;return e<600&&(a="0"+a),0===t&&(t="0"+t),"".concat(a," : ").concat(t)}var X=Object(Z.a)({root:{color:"#FFCC40"},track:{height:10},rail:{color:"#d8d8d8",opacity:1,height:10,borderRadius:4},thumb:{height:16,width:16,backgroundColor:"#FFCC40",marginTop:-3,border:"6px solid #fff"},valueLabel:{left:-20,top:25,"& *":{background:"transparent",color:"#000",width:50,height:50,fontSize:16}}})(z.a),$=function(e){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("label",null,"Worklog name"),r.a.createElement(W.a,{name:"label",component:D,placeholder:"Enter the worklog name",validate:[q]}),r.a.createElement("label",null,"Issue"),r.a.createElement(W.a,{name:"issue",component:D,placeholder:"Enter the issue name",validate:[q]}),r.a.createElement("div",{className:P.a.worklogButtons},r.a.createElement("button",{className:P.a.acceptButton},r.a.createElement("img",{className:P.a.accept,src:U,alt:"accept"})),r.a.createElement("button",{className:P.a.declineButton},r.a.createElement("img",{className:P.a.decline,src:G,alt:"decline"})))))};$=Object(x.a)({form:"issueForm"})($);var ee=function(e){var a=Q();return r.a.createElement("div",{className:P.a.wrapperWorklog},r.a.createElement("div",{className:P.a.worklogWindow},r.a.createElement("div",{className:P.a.header},r.a.createElement("p",null,"New worklog")),r.a.createElement("div",{className:P.a.container},r.a.createElement("div",{className:P.a.rangeSlider},r.a.createElement("div",{className:a.root},r.a.createElement(X,{value:e.sliderValue,onChange:function(a,t){e.setSliderValue(t)},valueLabelDisplay:"on","aria-labelledby":"range-slider",getAriaValueText:Y,valueLabelFormat:Y,min:420,max:1140,step:30}))),r.a.createElement($,{onSubmit:e.onSubmit}))))},ae=t(18),te=t(28),ne="NEW_WORKLOG",re="DELETE_WORKLOG",se="COPY_WORKLOG",le="SET_ACTIVE_TIMER",ce={issues:[{time:{from:"09:00",by:"10:00"},label:"JRM-310",name:"Team standup",timer:"01:00:00",id:99}],favoriteIssues:[{time:{from:"14:00",by:"17:30"},label:"JRM-541",name:"WORK",timer:"8:00:00",id:98}],timer:"00:00:00"};var ie=function(e,a){return{type:se,payload:{label:e,name:a}}},oe=function(e){return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement(W.a,{name:"label",component:A,placeholder:"New Label"}),r.a.createElement(W.a,{name:"issue",component:A,placeholder:"New Issue"})))};oe=Object(x.a)({form:"issueForm"})(oe);var ue=function(e){var a=Object(n.useState)(!1),t=Object(f.a)(a,2),s=t[0],l=t[1],c=Object(n.useState)(!1),i=Object(f.a)(c,2),o=i[0],u=i[1],m=Object(n.useState)(0),_=Object(f.a)(m,2),d=_[0],p=_[1],b=Object(n.useState)([540,690]),E=Object(f.a)(b,2),v=E[0],g=E[1],h=Object(T.c)(),N=Object(T.d)((function(e){return e.issuesList.initialLabel})),S={label:N,issue:Object(T.d)((function(e){return e.issuesList.initialName}))},w=function(){l(!s)},y=function(){u(!o)};return r.a.createElement("div",null,s||N?null:r.a.createElement("div",{className:L.a.newWorklog},r.a.createElement("button",{className:L.a.appendWorklog,onClick:w}),r.a.createElement("p",{className:L.a.label},"NEW WORKLOG")),s||N?r.a.createElement("div",{className:L.a.timerOn},r.a.createElement(oe,{initialValues:S}),r.a.createElement(R,{toggleSlider:y,stopwatchTime:d,setStopwatchTime:p}),o?r.a.createElement(ee,{onSubmit:function(e){h(function(e,a,t,n){return{type:ne,payload:{stopwatchTime:e,sliderValue:a,label:t,issue:n}}}(d,v,e.label,e.issue)),h(ie(null,null)),p(0),g([540,690]),y(),w()},sliderValue:v,setSliderValue:g}):null):null)},me=function(){var e=Object(n.useState)(!1),a=Object(f.a)(e,2),t=a[0],s=a[1],l=Object(T.d)((function(e){return e.sync.syncIssues}));return r.a.createElement("div",{className:N.a.tracking},r.a.createElement("div",null,r.a.createElement("div",{className:N.a.header},r.a.createElement("p",null,"Time tracking"),r.a.createElement("div",null,r.a.createElement("button",{className:N.a.buttonBurger,onMouseEnter:function(){s(!0)}},r.a.createElement("span",{className:N.a.burgerSpan})),t&&r.a.createElement("ul",{className:N.a.burgerMenu,onMouseLeave:function(){s(!1)}},r.a.createElement("li",null,"Jira Link"),r.a.createElement("li",null,"Duplicate"),r.a.createElement("li",null,"Add to favorite"),r.a.createElement("li",null,"Delete"))))),r.a.createElement(ue,null),r.a.createElement(j,{syncIssuesList:l}))},_e=t(33),de=t.n(_e),pe=t.p+"static/media/upload.377b7306.svg",be=t(15),Ee=t.n(be),ve=t.p+"static/media/play.736bdb3f.svg",ge=function(e){var a=Object(n.useState)(!1),t=Object(f.a)(a,2),s=t[0],l=t[1],c=Object(n.useState)(!1),i=Object(f.a)(c,2),o=i[0],u=i[1],m=Object(T.c)();return r.a.createElement("div",{className:Ee.a.issue,onMouseLeave:function(){l(!1)}},r.a.createElement("div",{className:s?Ee.a.issueItemsActive:Ee.a.issueItems,onMouseEnter:function(){l(!0)}},r.a.createElement("div",{className:Ee.a.time},r.a.createElement("strong",null,e.timeIssueFrom)," \u2014 ",e.timeIssueBy),r.a.createElement("div",{className:Ee.a.indicatorComplite}),r.a.createElement("div",{className:Ee.a.name},r.a.createElement("p",{className:Ee.a.label},e.label),r.a.createElement("p",{className:Ee.a.text},e.text)),r.a.createElement("div",{className:Ee.a.progress},r.a.createElement("span",{className:Ee.a.progressComplite})),r.a.createElement("div",{className:Ee.a.timer},r.a.createElement("p",null,e.timer)),r.a.createElement("button",{className:Ee.a.playButton},r.a.createElement("img",{src:ve,alt:"play"}))),s?r.a.createElement("div",{className:Ee.a.activeBar},r.a.createElement("button",{className:Ee.a.burger,onMouseEnter:function(){u(!0)}},r.a.createElement("span",null),o?r.a.createElement("ul",{className:Ee.a.burgerMenu,onMouseLeave:function(){u(!1)}},r.a.createElement("li",null,"Jira Link"),r.a.createElement("li",{onClick:function(){m(ie(e.label,e.text))}},"Duplicate"),e.isFavorite?null:r.a.createElement("li",null,"Add to favorite"),r.a.createElement("li",{onClick:function(){var a,t;m((a=e.id,t=e.isFavorite,{type:re,payload:{id:a,isFavorite:t}}))}},"Delete")):null)):null)},fe=function(e){var a=e.issuesList.map((function(e){return r.a.createElement(ge,{timeIssueFrom:e.time.from,timeIssueBy:e.time.by,label:e.label,text:e.name,timer:e.timer,key:e.id,id:e.id,isFavorite:!1})}));return r.a.createElement("div",{className:de.a.thisDate},r.a.createElement("div",{className:de.a.now},r.a.createElement("div",{className:de.a.today},e.today),r.a.createElement("div",{className:de.a.todayTimer},r.a.createElement("p",null,e.todayTimer),r.a.createElement("div",{className:de.a.meter},r.a.createElement("span",{className:de.a.meterProgress}))),r.a.createElement("button",{className:de.a.uploadButton},r.a.createElement("img",{src:pe,alt:"upload"}))),a)},he=function(){var e=Object(T.d)((function(e){return e.date.day})),a=Object(T.d)((function(e){return e.issuesList.timer})),t=Object(T.d)((function(e){return e.issuesList.issues}));return r.a.createElement(fe,{today:e,todayTimer:a,issuesList:t})},Ne=t(29),Se=t.n(Ne),we=t(248),ye=(t(229),t(230),function(){var e=Object(n.useState)(new Date),a=Object(f.a)(e,2),t=a[0],s=a[1];return r.a.createElement(we.a,{onChange:s,value:t,locale:"en-EN",formatShortWeekday:function(e,a){return["S","M","T","W","T","F","S"][a.getDay()]},tileContent:function(e,a){return r.a.createElement("span",{className:"meter"})}})}),Ie=function(e){var a=Object(T.d)((function(e){return e.date.day})),t=Object(n.useState)(!1),s=Object(f.a)(t,2),l=s[0],i=s[1];return r.a.createElement("div",{className:Se.a.dateSorting},r.a.createElement("div",{className:Se.a.data},r.a.createElement("button",{className:Se.a.changeData,onClick:function(){i(!l)}},a),r.a.createElement("img",{src:y,alt:"calendar"})),r.a.createElement("div",{className:Se.a.calendarWrapper},l?r.a.createElement(ye,null):null),r.a.createElement("div",null,r.a.createElement(c.b,{to:"/all",className:Se.a.sorting,activeClassName:Se.a.sortingActive},"All"),r.a.createElement(c.b,{to:"favorite",className:Se.a.sorting,activeClassName:Se.a.sortingActive},"Favorites")))},Oe=t(46),ke=t.n(Oe),je=function(e){var a=Object(T.d)((function(e){return e.issuesList.favoriteIssues})),t=a.map((function(e){return r.a.createElement(ge,{timeIssueFrom:e.time.from,timeIssueBy:e.time.by,label:e.label,text:e.name,timer:e.timer,key:e.id,id:e.id,isFavorite:!0})}));return r.a.createElement("div",{className:ke.a.wrapper},0===a.length?r.a.createElement("div",null,r.a.createElement("h1",null,"There is no favorite issues yet"),r.a.createElement("div",{className:ke.a.issues},r.a.createElement("div",{className:ke.a.newWorklog},r.a.createElement("button",{className:ke.a.appendWorklog}),r.a.createElement("p",{className:ke.a.label},"NEW FAVORITE")))):null,t)},Te=t(9),Be=function(){return r.a.createElement("div",{className:g.a.main},r.a.createElement("div",{className:g.a.container},r.a.createElement("div",{className:g.a.timeTracker},r.a.createElement("div",{className:g.a.allIssues},r.a.createElement(Ie,null),r.a.createElement(Te.d,null,r.a.createElement(Te.a,{exact:!0,from:"/",to:"/all"}),r.a.createElement(Te.b,{path:"/all"},r.a.createElement(he,null)),r.a.createElement(Te.b,{path:"/favorite"},r.a.createElement(je,null)),r.a.createElement(Te.b,{path:"*"},r.a.createElement("div",null,"404 not found")))),r.a.createElement(me,null))))},Le=function(){return r.a.createElement("div",{className:o.a.wrapper},r.a.createElement(E,null),r.a.createElement(Be,null))},We=t(10),xe="SHOW-CALENDAR",Ce={day:function(){var e=new Date;return"".concat(e.getDate()," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]," ").concat(e.getFullYear())}()};var Fe={syncIssues:[{color:"#75e1f9",label:"Logo redesign",time:"09:00 \u2014 10:00",id:1},{color:"#F2994A",label:"Meeting with CEO",time:"14:00 \u2014 14:45",id:2},{color:"#8165F0",label:"Brainstorm",time:"15:00 \u2014 16:15",id:3}]};var Me=t(252),Ae=Object(We.b)({date:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case xe:return Object(ae.a)(Object(ae.a)({},e),{},{showCalendar:a.payload});default:return e}},issuesList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,a=arguments.length>1?arguments[1]:void 0,t=Object(te.a)(e.issues);switch(a.type){case ne:function n(e){var a=Math.trunc(e[0]/60),t=e[0]%60,n=Math.trunc(e[1]/60),r=e[1]%60;return e[0]<600&&(a="0"+a),e[1]<600&&(n="0"+n),0===t&&(t="0"+t),0===r&&(r="0"+r),[a+":"+t,n+":"+r]}var r=n(a.payload.sliderValue),s=r[0],l=r[1],c=function(e){var a=e%60,t=Math.trunc(e/60%60),n=Math.trunc(e/3600%24);return n<10&&(n="0"+n),t<10&&(t="0"+t),a<10&&(a="0"+a),n+":"+t+":"+a},i=c(a.payload.stopwatchTime);function o(e,a){return Math.random()*(a-e)+e}var u=o(0,10);return t.push({time:{from:s,by:l},label:a.payload.label,name:a.payload.issue,timer:i,id:u}),Object(ae.a)(Object(ae.a)({},e),{},{issues:t});case re:var m=Object(te.a)(e.favoriteIssues);return!0===a.payload.isFavorite&&(m=m.filter((function(e){return e.id!==a.payload.id}))),!1===a.payload.isFavorite&&(t=t.filter((function(e){return e.id!==a.payload.id}))),Object(ae.a)(Object(ae.a)({},e),{},{issues:t,favoriteIssues:m});case se:var _=a.payload.label,d=a.payload.name;return Object(ae.a)(Object(ae.a)({},e),{},{initialLabel:_,initialName:d});case le:return Object(ae.a)(Object(ae.a)({},e),{},{isActiveTimer:!e.isActiveTimer});default:return e}},sync:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe;return e},form:Me.a}),De=Object(We.c)(Ae);window.store=De;var Ve=De;l.a.render(r.a.createElement(c.a,null,r.a.createElement(T.a,{store:Ve},r.a.createElement(Le,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,a,t){e.exports={dateSorting:"DateSorting_dateSorting__13RQp",sorting:"DateSorting_sorting__1Ozas",sortingActive:"DateSorting_sortingActive__1Tiu6",data:"DateSorting_data__2-RZc",changeData:"DateSorting_changeData__QLFGm",calendar:"DateSorting_calendar__3vTlk",calendarWrapper:"DateSorting_calendarWrapper__Fb1wi"}},32:function(e,a,t){e.exports={container:"Stopwatch_container__3o9aw",issue:"Stopwatch_issue__2Ylj2",label:"Stopwatch_label__22uRX",stopwatch:"Stopwatch_stopwatch__3SGo9",buttons:"Stopwatch_buttons__2aVbZ",button:"Stopwatch_button__izZ48",stopBtn:"Stopwatch_stopBtn__263-e",pauseBtn:"Stopwatch_pauseBtn__Du6Wd"}},33:function(e,a,t){e.exports={thisDate:"AllIssues_thisDate__12bB7",now:"AllIssues_now__bujsj",today:"AllIssues_today__tjxIL",todayTimer:"AllIssues_todayTimer__2J3dw",meter:"AllIssues_meter__2UsbM",meterProgress:"AllIssues_meterProgress__8oitR",meterFull:"AllIssues_meterFull__3VC_x",uploadButton:"AllIssues_uploadButton__dLaw7"}},37:function(e,a,t){e.exports={sync:"Sync_sync__1glNl",items:"Sync_items__3TSeP",header:"Sync_header__1lIdf",switchBtn:"Sync_switchBtn__3P1hn",switchBtnActive:"Sync_switchBtnActive__2wLG8",issues:"Sync_issues__1PnUi"}},44:function(e,a,t){e.exports={tracking:"Tracker_tracking__2uVmE",header:"Tracker_header__1dl5h",buttonBurger:"Tracker_buttonBurger__3bAic",burgerSpan:"Tracker_burgerSpan__1fWfu",burgerMenu:"Tracker_burgerMenu__3lnnF"}},45:function(e,a,t){e.exports={inputStyle:"FormsControl_inputStyle__1Kd1S",inputStyle2:"FormsControl_inputStyle2__20fuu"}},46:function(e,a,t){e.exports={issues:"FavoriteIssues_issues__3JyzD",newWorklog:"FavoriteIssues_newWorklog__2Tc2g",appendWorklog:"FavoriteIssues_appendWorklog__1kS51",label:"FavoriteIssues_label__2PDQP",wrapper:"FavoriteIssues_wrapper__SHIQH"}},55:function(e,a,t){e.exports={main:"Main_main__3de2d",container:"Main_container__3Tx6w",timeTracker:"Main_timeTracker__UHHNb",allIssues:"Main_allIssues__2lSqD"}},56:function(e,a,t){e.exports={newWorklog:"TimerNew_newWorklog__2OGAe",appendWorklog:"TimerNew_appendWorklog__3UfVr",label:"TimerNew_label__dAnzR",timerOn:"TimerNew_timerOn__16gH2",issue:"TimerNew_issue__31tWf",stopwatch:"TimerNew_stopwatch__38DwW",buttons:"TimerNew_buttons__3-yM8",button:"TimerNew_button__1eiUE",stopBtn:"TimerNew_stopBtn__3gtc0",pauseBtn:"TimerNew_pauseBtn__-aMzW"}},68:function(e,a,t){e.exports={issue:"SyncIssue_issue__15gkF",indicator:"SyncIssue_indicator__2LMVu",text:"SyncIssue_text__UZ12f",indicatorblue:"SyncIssue_indicatorblue__3gn1f",orange:"SyncIssue_orange__3oXdO",violet:"SyncIssue_violet__ewJfH"}}},[[231,1,2]]]);
//# sourceMappingURL=main.29053b2b.chunk.js.map