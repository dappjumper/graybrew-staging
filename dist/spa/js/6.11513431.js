(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"0f89":function(t,a,i){"use strict";var e=i("2094"),n=i.n(e);n.a},2094:function(t,a,i){},ccd0:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("section",[i("div",{staticClass:"underHeader row bg-primary text-grey-1"}),i("div",{staticClass:"row bg-grey-1 text-grey-9 productContent",staticStyle:{"max-width":"1400px",margin:"0 auto","padding-bottom":"3rem"}},[i("div",{staticClass:"container",staticStyle:{"text-align":"center"}},[i("q-img",{staticStyle:{cursor:"pointer",height:"100%",width:"50vw","max-width":"300px"},attrs:{contain:"",src:t.product.thumb}})],1),i("div",{staticClass:"container sidepad"},[i("q-card",{staticClass:"displayItem",attrs:{flat:""}},[i("q-card-section",{staticClass:"text-primary"},[i("div",{staticClass:"row no-wrap items-center"},[i("div",{staticClass:"col text-h4"},[t._v("\n              "+t._s(t.product.name)+"\n            ")])])]),i("q-card-section",{staticClass:"q-pt-none",staticStyle:{"margin-bottom":"3.5rem"}},[i("div",{staticClass:"text-subtitle1 text-bold text-primary"},[t._v("\n            ₱"+t._s(t.product.price)+"\n          ")]),i("div",{staticClass:"text-caption text-grey-8"},[t._v("\n            "+t._s(t.product.description)+"\n          ")]),i("div",{staticClass:"text-caption text-grey-8"},[i("br"),t._v("All-natural"),i("br"),t._v("\n            No artificial flavors or preservatives"),i("br"),t._v("\n            Gluten-free"),i("br"),t._v("\n            100% Vegan"),i("br"),t._v("\n            60% less acidic"),i("br"),t._v("\n            Sugar-free"),i("br"),t._v("\n            Lactose-free"),i("br"),t._v("\n            Recyclable packaging"),i("br")])]),i("q-card-section",[i("q-btn-group",[i("transition",{attrs:{name:"fade"}},[i("q-btn",{staticClass:"absolute quantifier",staticStyle:{"border-bottom-left-radius":"0","border-top-left-radius":"0",top:"0",right:"0px","z-index":"1",transform:"translateY(-100%)"},attrs:{color:"primary",flat:"",icon:"o_add"},on:{click:function(a){t.quantityToAdd++}}})],1),i("q-input",{staticClass:"absolute quantifier fadeIn shown text-primary quantityField",class:{shown:t.quantityToAdd>1},staticStyle:{top:"1px",left:"0","z-index":"0",width:"100%"},attrs:{color:"primary",type:"number"},on:{input:t.ensureSafeQuantity},model:{value:t.quantityToAdd,callback:function(a){t.quantityToAdd=t._n(a)},expression:"quantityToAdd"}}),i("q-btn",{staticClass:"absolute quantifier fadeIn",class:{shown:t.quantityToAdd>=2},staticStyle:{"border-bottom-right-radius":"0","border-top-right-radius":"0",top:"0",left:"0px","z-index":"1",transform:"translateY(-100%)"},attrs:{color:"primary",icon:"o_remove",flat:""},on:{click:function(a){t.quantityToAdd>=2&&t.quantityToAdd--}}}),i("q-btn",{staticClass:"absolute-right addButton",class:{"bg-positive":t.adding},staticStyle:{"border-radius":"0",width:"100%"},attrs:{unelevated:"",color:"primary",label:t.adding?t.quantityAdded+" added to cart!":"Add "+(t.quantityToAdd>1?" "+t.quantityToAdd+" ":"")+" to cart",icon:t.adding?"o_thumb_up":"o_shopping_cart"},on:{click:function(a){t.quantityAdded=t.quantityToAdd,t.animateAdding(),t.addItem({id:t.$route.params.id,quantity:t.quantityToAdd}),t.quantityToAdd=1}}})],1)],1)],1)],1)])])},n=[],r=i("ded3"),d=i.n(r),s=i("2f62"),o={name:"PageDetail",data(){return{ready:!1,quantityToAdd:1,adding:!1}},components:{},computed:{product:{get(){return this.getProduct()(this.$route.params.id)},set(t){}}},methods:d()(d()(d()(d()({},Object(s["c"])("products",["getProduct"])),Object(s["d"])("cart",["addItem","toggle","removeItem","changeQuantity","setQuantity"])),Object(s["c"])("cart",["quantityInCart","toggle"])),{},{animateAdding(){this.adding=!0,window.clearTimeout(this.timer),this.timer=setTimeout(()=>{this.adding=!1},2e3)},ensureSafeQuantity(){this.quantityToAdd<1&&(this.quantityToAdd=1)}})},c=o,u=(i("0f89"),i("2877")),l=i("068f"),p=i("f09f"),y=i("a370"),m=i("e7a9"),b=i("9c40"),g=i("27f9"),f=i("eebe"),q=i.n(f),v=Object(u["a"])(c,e,n,!1,null,"0339d4d8",null);a["default"]=v.exports;q()(v,"components",{QImg:l["a"],QCard:p["a"],QCardSection:y["a"],QBtnGroup:m["a"],QBtn:b["a"],QInput:g["a"]})}}]);