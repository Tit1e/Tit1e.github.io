(function(t){function e(e){for(var n,i,s=e[0],h=e[1],c=e[2],d=0,l=[];d<s.length;d++)i=s[d],o[i]&&l.push(o[i][0]),o[i]=0;for(n in h)Object.prototype.hasOwnProperty.call(h,n)&&(t[n]=h[n]);u&&u(e);while(l.length)l.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var h=a[s];0!==o[h]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],h=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=h;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),o=a.n(n);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("demo")],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("Calendar",{ref:"Calendar",attrs:{markDate:t.markDate,markDateMore:t.markDateMore,futureDayHide:"1554476157",canChoose:!1},on:{choseDay:t.clickDay,changeMonth:t.changeDate,isToday:t.isToday}}),a("br"),a("h3",[t._v("markDateMore：标记多种颜色，1号2号一种风格,3号四号另一种风格")]),a("br"),a("h3",[t._v("markDate：单一标记，多个日期同一种标记，23号，24号")]),a("div",{staticClass:"bt-box"},[a("div",{staticClass:"bt-jump",on:{click:function(){return t.$refs.Calendar.ChoseMonth("2018-12-12")}}},[t._v("跳转至 2018-12-12 并选中")]),a("div",{staticClass:"bt-jump",on:{click:function(){return t.$refs.Calendar.ChoseMonth("2018-12-12",!1)}}},[t._v("跳转至 2018-12-12 不选中")])])],1)},s=[],h=(a("84c5"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"wh_container",style:{"border-radius":t.borderRadius}},[a("div",{staticClass:"wh_content_all"},[a("div",{staticClass:"wh_top_changge"},[a("li",{on:{click:function(e){return t.PreMonth(t.myDate,!1)}}},[a("div",{staticClass:"wh_jiantou1"})]),a("li",{staticClass:"wh_content_li"},[t._v(t._s(t.dateTop))]),a("li",{on:{click:function(e){return t.NextMonth(t.myDate,!1)}}},[a("div",{staticClass:"wh_jiantou2"})])]),a("div",{staticClass:"wh_content wh_head_week"},t._l(t.textTop,function(e){return a("div",{staticClass:"wh_content_item"},[a("div",{staticClass:"wh_top_tag"},[t._v(t._s(e))])])}),0),a("div",{staticClass:"wh_content wh_day_list"},t._l(t.list,function(e,n){return a("div",{staticClass:"wh_content_item",on:{click:function(a){return t.clickDay(e,n)}}},[a("div",{staticClass:"wh_item_date",class:[{wh_isMark:e.isMark},{wh_other_dayhide:"nowMonth"!==e.otherMonth},{wh_want_dayhide:e.dayHide},{wh_isToday:t.showToday?e.isToday:""},{wh_chose_day:e.chooseDay},t.setClass(e)]},[a("span",{staticClass:"wh_item_date_text"},[t._v(t._s(e.id)+"\n        ")])])])}),0)])])}),c=[],u=a("5d73"),d=a.n(u),l=a("768b"),f=a("75fc"),y=(a("a481"),a("e814")),g=a.n(y),m=(a("28a5"),0),p={getDaysInOneMonth:function(t){var e=t.getFullYear(),a=t.getMonth()+1,n=new Date(e,a,0);return n.getDate()},getMonthweek:function(t){var e=t.getFullYear(),a=t.getMonth()+1,n=new Date(e+"-"+a+"-1");return this.sundayStart?0==n.getDay()?7:n.getDay():0==n.getDay()?6:n.getDay()-1},getOtherMonth:function(t){var e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"nextMonth",n=this.dateFormat(t).split("-"),o=n[0],r=n[1],i=n[2],s=o;"nextMonth"===a?(e=g()(r)+1,13==e&&(s=g()(s)+1,e=1)):(e=g()(r)-1,0==e&&(s=g()(s)-1,e=12));var h=i,c=new Date(s,e,0).getDate();h>c&&(h=c),e<10&&(e="0"+e),h<10&&(h="0"+h);var u=s+"-"+e+"-"+h;return new Date(u)},getLeftArr:function(t){var e=[],a=this.getMonthweek(t)||7;m=a;for(var n=this.getDaysInOneMonth(this.getOtherMonth(t,"preMonth"))-a+1,o=this.getOtherMonth(t,"preMonth"),r=0;r<a;r++){var i=o.getFullYear()+"-"+(o.getMonth()+1)+"-"+(n+r);e.push({id:n+r,date:i,isToday:!1,otherMonth:"preMonth"})}return e},getRightArr:function(t){var e=[],a=this.getOtherMonth(t,"nextMonth"),n=this.getDaysInOneMonth(t)+this.getMonthweek(t),o=0;o=7===m?7-n%7:n%7?7-n%7+7:7;for(var r=0;r<o;r++){var i=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+(r+1);e.push({id:r+1,date:i,isToday:!1,otherMonth:"nextMonth"})}return e},dateFormat:function(t){return t="string"===typeof t?new Date(t.replace(/\-/g,"/")):t,t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()},getMonthListNoOther:function(t){for(var e=[],a=this.getDaysInOneMonth(t),n=t.getFullYear(),o=t.getMonth()+1,r=this.dateFormat(new Date),i=0;i<a;i++){var s=n+"-"+o+"-"+(i+1);e.push({id:i+1,date:s,isToday:r===s,otherMonth:"nowMonth"})}return e},getMonthList:function(t){return[].concat(Object(f["a"])(this.getLeftArr(t)),Object(f["a"])(this.getMonthListNoOther(t)),Object(f["a"])(this.getRightArr(t)))},sundayStart:!1},D={data:function(){return{myDate:[],list:[],historyChose:[],dateTop:""}},props:{markDate:{type:Array,default:function(){return[]}},markDateMore:{type:Array,default:function(){return[]}},textTop:{type:Array,default:function(){return["一","二","三","四","五","六","日"]}},sundayStart:{type:Boolean,default:function(){return!1}},agoDayHide:{type:String,default:"0"},futureDayHide:{type:String,default:"2554387200"},borderRadius:{type:String,default:"4px"},showToday:{type:Boolean,default:!0},canChoose:{type:Boolean,default:!0}},created:function(){this.intStart(),this.myDate=new Date},methods:{intStart:function(){p.sundayStart=this.sundayStart},setClass:function(t){var e={};return e[t.markClassName]="".concat(t.markClassName),e},clickDay:function(t,e){if(!this.canChoose)return!1;"nowMonth"!==t.otherMonth||t.dayHide||this.getList(this.myDate,t.date),"nowMonth"!==t.otherMonth&&("preMonth"===t.otherMonth?this.PreMonth(t.date):this.NextMonth(t.date))},ChoseMonth:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t=p.dateFormat(t),this.myDate=new Date(t),this.$emit("changeMonth",p.dateFormat(this.myDate)),e?this.getList(this.myDate,t,e):this.getList(this.myDate)},PreMonth:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t=p.dateFormat(t),this.myDate=p.getOtherMonth(this.myDate,"preMonth"),this.$emit("changeMonth",p.dateFormat(this.myDate)),e?this.getList(this.myDate,t,e):this.getList(this.myDate)},NextMonth:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t=p.dateFormat(t),this.myDate=p.getOtherMonth(this.myDate,"nextMonth"),this.$emit("changeMonth",p.dateFormat(this.myDate)),e?this.getList(this.myDate,t,e):this.getList(this.myDate)},forMatArgs:function(){var t=this.markDate,e=this.markDateMore;return t=t.map(function(t){return p.dateFormat(t)}),e=e.map(function(t){return t.date=p.dateFormat(t.date),t}),[t,e]},getList:function(t,e){!(arguments.length>2&&void 0!==arguments[2])||arguments[2];var a=this.forMatArgs(),n=Object(l["a"])(a,2),o=n[0],r=n[1];this.dateTop="".concat(t.getFullYear()," 年  ").concat(t.getMonth()+1," 月");for(var i=p.getMonthList(this.myDate),s=0;s<i.length;s++){var h="",c=i[s];c.chooseDay=!1;var u=c.date,f=new Date(u).getTime()/1e3,y=!0,g=!1,m=void 0;try{for(var D,v=d()(r);!(y=(D=v.next()).done);y=!0){var M=D.value;M.date===u&&(h="".concat(M.className," chooseBg")||!1)}}catch(w){g=!0,m=w}finally{try{y||null==v.return||v.return()}finally{if(g)throw m}}c.markClassName=h,c.isMark=o.indexOf(u)>-1,c.dayHide=f<this.agoDayHide||f>this.futureDayHide,c.isToday&&this.$emit("isToday",u);var _=!c.dayHide&&"nowMonth"===c.otherMonth;e&&e===u&&_?(this.$emit("choseDay",u),this.historyChose.push(u),c.chooseDay=!0):this.historyChose[this.historyChose.length-1]===u&&!e&&_&&(c.chooseDay=!0)}this.list=i}},mounted:function(){this.getList(this.myDate)},watch:{markDate:{handler:function(t,e){this.getList(this.myDate)},deep:!0},markDateMore:{handler:function(t,e){this.getList(this.myDate)},deep:!0},agoDayHide:{handler:function(t,e){this.getList(this.myDate)},deep:!0},futureDayHide:{handler:function(t,e){this.getList(this.myDate)},deep:!0},sundayStart:{handler:function(t,e){this.intStart(),this.getList(this.myDate)},deep:!0}}},v=D,M=(a("dbc7"),a("2877")),_=Object(M["a"])(v,h,c,!1,null,"cbee853e",null),w=_.exports,b=w,k={data:function(){return{markDate:["2019-04-23","2019-04-24"],markDateMore:[{date:"2019-04-01",className:"mark1"},{date:"2019-04-02",className:"mark1"},{date:"2019-04-03",className:"mark2"},{date:"2019-04-04",className:"mark2"}]}},components:{Calendar:b},methods:{isToday:function(t){console.log("isToday：".concat(t))},clickDay:function(t){console.log("选中了",t)},clickToday:function(t){console.log("跳到了本月今天",t)},changeDate:function(t){console.log("左右点击切换月份",t)},demo:function(){this.$refs.Calendar.ChoseMonth("2018-12-12")}}},C=k,O=(a("f753"),Object(M["a"])(C,i,s,!1,null,"1b82f606",null)),x=O.exports,T={name:"app",components:{demo:x}},L=T,j=(a("034f"),Object(M["a"])(L,o,r,!1,null,null,null)),F=j.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(F)}}).$mount("#app")},"64a9":function(t,e,a){},"72ab":function(t,e,a){},dbc7:function(t,e,a){"use strict";var n=a("72ab"),o=a.n(n);o.a},efa8:function(t,e,a){},f753:function(t,e,a){"use strict";var n=a("efa8"),o=a.n(n);o.a}});
//# sourceMappingURL=app.3297068c.js.map