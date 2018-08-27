webpackJsonp([1],{LFav:function(t,i){},NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("7+uW"),s=e("Zrlr"),a=e.n(s),r=e("wxAW"),o=e.n(r),d=new(function(){function t(){a()(this,t),this.now,this.hour,this.minute,this.second}return o()(t,[{key:"updateTime",value:function(){this.now=new Date,this.hour=this.now.getHours().toString().split(""),this.minute=this.now.getMinutes().toString().split(""),this.second=this.now.getSeconds().toString().split("");var t=[];return this.digitCheck(this.hour)||this.hour.unshift("0"),this.digitCheck(this.minute)||this.minute.unshift("0"),this.digitCheck(this.second)||this.second.unshift("0"),t.push(this.hour),t.push(this.minute),t.push(this.second),t}},{key:"digitCheck",value:function(t){return 2===t.length}}]),t}()),c={name:"Clock",data:function(){return{digitOrder:[6,7,5,8,4,3,9,2,0,1],time:d.updateTime()}},methods:{startTime:function(){var t=this;setInterval(function(){t.time=d.updateTime()},500)}},created:function(){this.startTime()},destoryed:function(){clearInterval(this.startTime())}},v={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"clock"}},[e("div",{attrs:{id:"d0"}},t._l(t.digitOrder,function(i){return e("div",{key:i},[i.toString()===t.time[0][0].toString()?e("span",{class:"d"+i+" active"},[t._v(t._s(i))]):e("span",{class:"d"+i},[t._v(t._s(i))])])})),t._v(" "),e("div",{attrs:{id:"d1"}},t._l(t.digitOrder,function(i){return e("div",{key:i},[i.toString()===t.time[0][1].toString()?e("span",{class:"d"+i+" active"},[t._v(t._s(i))]):e("span",{class:"d"+i},[t._v(t._s(i))])])})),t._v(" "),e("div",{staticClass:"cathode active"},[t._v(":")]),t._v(" "),e("div",{attrs:{id:"d2"}},t._l(t.digitOrder,function(i){return e("div",{key:i},[i.toString()===t.time[1][0].toString()?e("span",{class:"d"+i+" active"},[t._v(t._s(i))]):e("span",{class:"d"+i},[t._v(t._s(i))])])})),t._v(" "),e("div",{attrs:{id:"d3"}},t._l(t.digitOrder,function(i){return e("div",{key:i},[i.toString()===t.time[1][1].toString()?e("span",{class:"d"+i+" active"},[t._v(t._s(i))]):e("span",{class:"d"+i},[t._v(t._s(i))])])})),t._v(" "),e("div",{staticClass:"cathode active"},[t._v(":")]),t._v(" "),e("div",{attrs:{id:"d4"}},t._l(t.digitOrder,function(i){return e("div",{key:i},[i.toString()===t.time[2][0].toString()?e("span",{class:"d"+i+" active"},[t._v(t._s(i))]):e("span",{class:"d"+i},[t._v(t._s(i))])])})),t._v(" "),e("div",{attrs:{id:"d5"}},t._l(t.digitOrder,function(i){return e("div",{key:i},[i.toString()===t.time[2][1].toString()?e("span",{class:"d"+i+" active"},[t._v(t._s(i))]):e("span",{class:"d"+i},[t._v(t._s(i))])])}))])},staticRenderFns:[]};var u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"details"}},[e("h1",[t._v("What is a Nixie Tube?")]),t._v(" "),e("p",[t._v("Usually contained within a vacuum filled with a gas like neon, it contains wire mesh cathodes in the shape of numbers, sometimes even letters and symbols.  The cathodes are stacked 6 7 5 8 4 3 9 2 0 1, from front to back, and each one is heated individually to give it the glow.  In recent years, it has made a revival in the nostalgic and retro scene.  While it is susceptible to damage due to it's glass tube casing, it is more for decoration, and is common in Steampunk aesthetics.")]),t._v(" "),e("p",[e("strong",[t._v("Fun fact:")]),t._v(" The name "),e("em",[t._v("Nixie")]),t._v(' derrives from "'),e("strong",[t._v("N")]),t._v("umeric "),e("strong",[t._v("I")]),t._v("ndicator e"),e("strong",[t._v("X")]),t._v('perimental No, 1" by Burroughs Coperation.')]),t._v(" "),e("p",[t._v("More info available on the "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Nixie_tube"}},[t._v("Wikipedia")]),t._v(" page.")])])}]};var h={name:"App",components:{Clock:e("VU/8")(c,v,!1,function(t){e("ngnd")},"data-v-78e5c6db",null).exports,Details:e("VU/8")({name:"Details"},u,!1,function(t){e("X2O7")},"data-v-75480338",null).exports}},l={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("h1",[this._v("Nixie Tube Clock")]),this._v(" "),i("Clock"),this._v(" "),i("Details")],1)},staticRenderFns:[]};var _=e("VU/8")(h,l,!1,function(t){e("LFav")},null,null).exports;n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:_},template:"<App/>"})},X2O7:function(t,i){},ngnd:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.8597ab37891d2fded5ce.js.map