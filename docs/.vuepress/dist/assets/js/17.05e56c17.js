(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{471:function(t,i,e){},539:function(t,i,e){"use strict";e(471)},557:function(t,i,e){"use strict";e.r(i);e(223),e(37);var s=["一等奖","二等奖","三等奖","四等奖","五等奖","六等奖","七等奖","谢谢参与"],n={data:function(){return{activeIndex:null,interval:500,list:s,circle:16,selectIndex:null,isActive:!1,text:"开始抽奖"}},methods:{start:function(t){this.isActive||this.startTimer()},startTimer:function(){this.activeIndex=this.selectIndex,this.circle=8*(3+parseInt(3*Math.random()))+(8-this.activeIndex),this.selectIndex=parseInt(8*Math.random()),this.circle+=this.selectIndex,this.isActive=!0,this.interval=500,setTimeout(this.handleTimeout,this.interval)},handleTimeout:function(){if(this.activeIndex++,this.circle--,this.interval>100&&this.circle>10&&(this.interval-=50),this.activeIndex>=8&&(this.activeIndex=0),this.circle<10&&(this.interval+=50),0==this.circle)return this.text=this.list[this.selectIndex],void(this.isActive=!1);setTimeout(this.handleTimeout,this.interval)}}},c=(e(539),e(5)),a=Object(c.a)(n,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"lottery"},[t._l(t.list,(function(i,s){return e("div",{key:s,staticClass:"item",class:{active:s==t.activeIndex}},[t._v("\n    "+t._s(i)+"\n  ")])})),t._v(" "),e("div",{staticClass:"item btn",on:{click:t.start}},[t._v("开始抽奖")]),t._v(" "),t.isActive?e("div",{staticClass:"text"},[t._v("抽奖中...")]):e("div",{staticClass:"text"},[t._v("\n    "+t._s(t.text)+"\n  ")])],2)}),[],!1,null,"c75ebca8",null);i.default=a.exports}}]);