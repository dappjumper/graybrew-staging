(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"1c14":function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[t.ready?i("div",{staticClass:"products"},t._l(t.catalog,(function(t,a){return i("Product",{key:a,staticClass:"product",attrs:{item:t,id:a,product:t}})})),1):t._e(),t.ready?t._e():i("div",[t._v("\n    Loading...\n  ")])])},n=[],r=i("ded3"),d=i.n(r),s=i("2f62"),o=i("be6f"),c={name:"ProductList",data:()=>({ready:!1,catalog:{},keyToAdd:""}),components:{Product:o["a"]},methods:d()({},Object(s["b"])("cart",["addToCart"])),computed:d()({},Object(s["c"])("products",["getProducts"])),watch:{getProducts:{immediate:!0,handler(t){t&&(this.ready=!0,this.catalog=t)}}}},u=c,l=(i("247a"),i("2877")),p=Object(l["a"])(u,e,n,!1,null,"d98ef6cc",null);a["a"]=p.exports},"247a":function(t,a,i){"use strict";var e=i("25c4"),n=i.n(e);n.a},"25c4":function(t,a,i){},"7d12":function(t,a,i){"use strict";var e=i("c08d"),n=i.n(e);n.a},8838:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("section",[t._m(0),i("div",{staticClass:"row bg-grey-1 text-grey-9",staticStyle:{"margin-top":"3rem"}},[i("div",{staticClass:"container store"},[i("ProductList")],1)])])},n=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"underHeader row bg-primary text-grey-1"},[i("div",{staticClass:"container"},[i("h2",[t._v("Our products")])])])}],r=i("1c14"),d={name:"PageShop",components:{ProductList:r["a"]}},s=d,o=i("2877"),c=Object(o["a"])(s,e,n,!1,null,null,null);a["default"]=c.exports},be6f:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[t.small?i("q-card",{attrs:{dark:""}},[i("q-card-section",[t._v("\n      "+t._s(t.quantity)+" x "+t._s(t.product.name)+" "),i("a",{staticClass:"absolute-right",staticStyle:{cursor:"pointer"},on:{click:function(a){return t.removeItem(t.id)}}},[t._v("x")]),i("br"),t._v("\n      ₱"+t._s(t.quantity*t.product.price)+" - "+t._s(t.product.description)+"\n    ")])],1):t._e(),t.small?t._e():i("q-card",{staticClass:"displayItem"},[i("q-img",{attrs:{src:t.product.thumb}}),i("q-card-section",{staticClass:"text-primary"},[i("div",{staticClass:"row no-wrap items-center"},[i("div",{staticClass:"col text-h6"},[t._v("\n          "+t._s(t.product.name)+"\n        ")])])]),i("q-card-section",{staticClass:"q-pt-none",staticStyle:{"margin-bottom":"3.5rem"}},[i("div",{staticClass:"text-subtitle1 text-bold"},[t._v("\n        ₱"+t._s(t.product.price)+"\n      ")]),i("div",{staticClass:"text-caption text-grey-8"},[t._v("\n        "+t._s(t.product.description)+"\n      ")])]),i("q-card-section",[i("q-btn-group",[i("transition",{attrs:{name:"fade"}},[i("q-btn",{staticClass:"absolute quantifier",staticStyle:{"border-bottom-left-radius":"0","border-top-left-radius":"0",top:"0",right:"0px","z-index":"1",transform:"translateY(-100%)"},attrs:{color:"primary",icon:"add"},on:{click:function(a){t.quantityToAdd++}}})],1),i("q-input",{staticClass:"absolute quantifier fadeIn shown",class:{shown:t.quantityToAdd>1},staticStyle:{top:"1px",left:"0","z-index":"0",width:"100%"},attrs:{color:"primary",unelevated:"",type:"number"},on:{input:t.ensureSafeQuantity},model:{value:t.quantityToAdd,callback:function(a){t.quantityToAdd=t._n(a)},expression:"quantityToAdd"}}),i("q-btn",{staticClass:"absolute quantifier fadeIn",class:{shown:t.quantityToAdd>=2},staticStyle:{"border-bottom-right-radius":"0","border-top-right-radius":"0",top:"0",left:"0px","z-index":"1",transform:"translateY(-100%)"},attrs:{color:"primary",icon:"remove"},on:{click:function(a){t.quantityToAdd>=2&&t.quantityToAdd--}}}),i("q-btn",{staticClass:"absolute-right addButton",class:{"bg-positive":t.adding},staticStyle:{"border-radius":"0",width:"100%"},attrs:{unelevated:"",color:"primary",label:t.adding?t.quantityAdded+" added to cart!":"Add "+(t.quantityToAdd>1?" "+t.quantityToAdd+" ":"")+" to cart",icon:t.adding?"thumb_up":"shopping_cart"},on:{click:function(a){t.quantityAdded=t.quantityToAdd,t.animateAdding(),t.addItem({id:t.id,quantity:t.quantityToAdd}),t.quantityToAdd=1}}})],1)],1)],1)],1)},n=[],r=i("ded3"),d=i.n(r),s=i("2f62"),o={name:"ProductList",props:["product","id","quantity","mini"],data:()=>({quantityToAdd:1,adding:!1,quantityAdded:0,timer:0}),computed:{small(){return"undefined"!==typeof this.mini},innerQuantity:{get(){return this.quantity},set(t){if(""===t)return!1;this.setQuantity({id:this.id,quantity:t})}}},methods:d()(d()(d()({},Object(s["d"])("cart",["addItem","toggle","removeItem","changeQuantity","setQuantity"])),Object(s["c"])("cart",["quantityInCart"])),{},{animateAdding(){this.adding=!0,window.clearTimeout(this.timer),this.timer=setTimeout(()=>{this.adding=!1},2e3)},ensureSafeQuantity(){this.quantityToAdd<1&&(this.quantityToAdd=1)}})},c=o,u=(i("7d12"),i("2877")),l=i("f09f"),p=i("a370"),m=i("068f"),y=i("e7a9"),f=i("9c40"),b=i("27f9"),q=i("eebe"),h=i.n(q),g=Object(u["a"])(c,e,n,!1,null,"55c9bf83",null);a["a"]=g.exports;h()(g,"components",{QCard:l["a"],QCardSection:p["a"],QImg:m["a"],QBtnGroup:y["a"],QBtn:f["a"],QInput:b["a"]})},c08d:function(t,a,i){}}]);