(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"1c14":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.ready?e("div",{staticClass:"products"},t._l(t.catalog,(function(t,a){return e("Product",{key:a,staticClass:"product",attrs:{item:t,id:a,product:t}})})),1):t._e(),t.ready?t._e():e("div",[t._v("\n    Loading...\n  ")])])},n=[],s=e("ded3"),r=e.n(s),d=e("2f62"),o=e("be6f"),c={name:"ProductList",data:()=>({ready:!1,catalog:{},keyToAdd:""}),components:{Product:o["a"]},methods:r()({},Object(d["b"])("cart",["addToCart"])),computed:r()({},Object(d["c"])("products",["getProducts"])),watch:{getProducts:{immediate:!0,handler(t){t&&(this.ready=!0,this.catalog=t)}}}},u=c,l=(e("247a"),e("2877")),p=Object(l["a"])(u,i,n,!1,null,"d98ef6cc",null);a["a"]=p.exports},"247a":function(t,a,e){"use strict";var i=e("25c4"),n=e.n(i);n.a},"25c4":function(t,a,e){},"7bc4":function(t,a,e){"use strict";var i=e("8ddd"),n=e.n(i);n.a},8041:function(t,a,e){"use strict";var i=e("cb9a"),n=e.n(i);n.a},"8b24":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[t._m(0),t._m(1),e("div",{staticClass:"row bg-grey-1 text-grey-9"},[e("div",{staticClass:"container store"},[e("ProductList")],1)])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"underHeader row bg-secondary text-grey-1 hero"},[e("div",{staticClass:"container sidepad"},[e("h1",{staticClass:"text-bold"},[t._v("\n        Enjoy Cold Brew\n      ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row bg-grey-1 text-primary"},[e("div",{staticClass:"container sidepad"},[e("h2",{staticClass:"text-bold"},[t._v("Our products")])])])}],s=e("1c14"),r={name:"PageShop",components:{ProductList:s["a"]}},d=r,o=(e("8041"),e("2877")),c=e("09e3"),u=e("eebe"),l=e.n(u),p=Object(o["a"])(d,i,n,!1,null,null,null);a["default"]=p.exports;l()(p,"components",{QPageContainer:c["a"]})},"8ddd":function(t,a,e){},be6f:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.small?e("q-card",{attrs:{dark:""}},[e("q-card-section",[t._v("\n      "+t._s(t.quantity)+" x "+t._s(t.product.name)+" "),e("a",{staticClass:"absolute-right",staticStyle:{cursor:"pointer"},on:{click:function(a){return t.removeItem(t.id)}}},[t._v("x")]),e("br"),t._v("\n      ₱"+t._s(t.quantity*t.product.price)+" - "+t._s(t.product.description)+"\n    ")])],1):t._e(),t.small?t._e():e("q-card",{staticClass:"displayItem"},[e("q-img",{attrs:{src:t.product.thumb}}),e("q-card-section",{staticClass:"text-primary"},[e("div",{staticClass:"row no-wrap items-center"},[e("div",{staticClass:"col text-h6"},[t._v("\n          "+t._s(t.product.name)+"\n        ")])])]),e("q-card-section",{staticClass:"q-pt-none",staticStyle:{"margin-bottom":"3.5rem"}},[e("div",{staticClass:"text-subtitle1 text-bold text-primary"},[t._v("\n        ₱"+t._s(t.product.price)+"\n      ")]),e("div",{staticClass:"text-caption text-grey-8"},[t._v("\n        "+t._s(t.product.description)+"\n      ")])]),e("q-card-section",[e("q-btn-group",[e("transition",{attrs:{name:"fade"}},[e("q-btn",{staticClass:"absolute quantifier",staticStyle:{"border-bottom-left-radius":"0","border-top-left-radius":"0",top:"0",right:"0px","z-index":"1",transform:"translateY(-100%)"},attrs:{color:"primary",flat:"",icon:"o_add"},on:{click:function(a){t.quantityToAdd++}}})],1),e("q-input",{staticClass:"absolute quantifier fadeIn shown text-primary",class:{shown:t.quantityToAdd>1},staticStyle:{top:"1px",left:"0","z-index":"0",width:"100%"},attrs:{color:"primary",type:"number"},on:{input:t.ensureSafeQuantity},model:{value:t.quantityToAdd,callback:function(a){t.quantityToAdd=t._n(a)},expression:"quantityToAdd"}}),e("q-btn",{staticClass:"absolute quantifier fadeIn",class:{shown:t.quantityToAdd>=2},staticStyle:{"border-bottom-right-radius":"0","border-top-right-radius":"0",top:"0",left:"0px","z-index":"1",transform:"translateY(-100%)"},attrs:{color:"primary",icon:"o_remove",flat:""},on:{click:function(a){t.quantityToAdd>=2&&t.quantityToAdd--}}}),e("q-btn",{staticClass:"absolute-right addButton",class:{"bg-positive":t.adding},staticStyle:{"border-radius":"0",width:"100%"},attrs:{unelevated:"",color:"primary",label:t.adding?t.quantityAdded+" added to cart!":"Add "+(t.quantityToAdd>1?" "+t.quantityToAdd+" ":"")+" to cart",icon:t.adding?"o_thumb_up":"o_shopping_cart"},on:{click:function(a){t.quantityAdded=t.quantityToAdd,t.animateAdding(),t.addItem({id:t.id,quantity:t.quantityToAdd}),t.quantityToAdd=1}}})],1)],1)],1)],1)},n=[],s=e("ded3"),r=e.n(s),d=e("2f62"),o={name:"ProductList",props:["product","id","quantity","mini"],data:()=>({quantityToAdd:1,adding:!1,quantityAdded:0,timer:0}),computed:{small(){return"undefined"!==typeof this.mini},innerQuantity:{get(){return this.quantity},set(t){if(""===t)return!1;this.setQuantity({id:this.id,quantity:t})}}},methods:r()(r()(r()({},Object(d["d"])("cart",["addItem","toggle","removeItem","changeQuantity","setQuantity"])),Object(d["c"])("cart",["quantityInCart"])),{},{animateAdding(){this.adding=!0,window.clearTimeout(this.timer),this.timer=setTimeout(()=>{this.adding=!1},2e3)},ensureSafeQuantity(){this.quantityToAdd<1&&(this.quantityToAdd=1)}})},c=o,u=(e("7bc4"),e("2877")),l=e("f09f"),p=e("a370"),m=e("068f"),y=e("e7a9"),f=e("9c40"),b=e("27f9"),q=e("eebe"),h=e.n(q),v=Object(u["a"])(c,i,n,!1,null,"5d4d9d3b",null);a["a"]=v.exports;h()(v,"components",{QCard:l["a"],QCardSection:p["a"],QImg:m["a"],QBtnGroup:y["a"],QBtn:f["a"],QInput:b["a"]})},cb9a:function(t,a,e){}}]);