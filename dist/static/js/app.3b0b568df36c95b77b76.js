webpackJsonp([1],{28:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(9),a=n(8),r=n.n(a);o.a.config.productionTip=!1,new o.a({el:"#app",template:"<App/>",components:{App:r.a}})},29:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(34),a=n.n(o);e.default={name:"app",components:{Randomize:a.a}}},30:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(10),a=n.n(o);e.default={name:"randomize",data:function(){return{title:"Нажми на кнопку что бы узнать куда пойти сегодня",random_text:"Никуда"}},methods:{load:function(){var t=this;a.a.get("https://kudago.com/public-api/v1.2/events/?expand=event").then(function(e){var n=e.data.results,o=Math.floor(Math.random()*n.length);t.random_text=n[o].title,console.log("Все отлично =>",n[o].title)},function(t){console.log("Ошибка =>",t)})}}}},31:function(t,e){},32:function(t,e){},34:function(t,e,n){n(32);var o=n(7)(n(30),n(36),"data-v-5b6645e8",null);t.exports=o.exports},35:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("randomize")],1)},staticRenderFns:[]}},36:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"randomize"},[n("div",{staticClass:"wrap"},[n("h1",[t._v(t._s(t.title))]),n("button",{on:{click:t.load}},[t._v("Пойдем!")]),n("p",[t._v(t._s(t.random_text))])])])},staticRenderFns:[]}},8:function(t,e,n){n(31);var o=n(7)(n(29),n(35),null,null);t.exports=o.exports}},[28]);
//# sourceMappingURL=app.3b0b568df36c95b77b76.js.map