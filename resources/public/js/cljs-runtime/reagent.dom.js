goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__71733 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__71734 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__71734);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__71736 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__71737 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__71737);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__71736);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__71733);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__71743 = arguments.length;
switch (G__71743) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__71746 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71746,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71746,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__71758_71792 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__71759_71793 = null;
var count__71760_71794 = (0);
var i__71761_71795 = (0);
while(true){
if((i__71761_71795 < count__71760_71794)){
var vec__71776_71798 = chunk__71759_71793.cljs$core$IIndexed$_nth$arity$2(null,i__71761_71795);
var container_71799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71776_71798,(0),null);
var comp_71800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71776_71798,(1),null);
reagent.dom.re_render_component(comp_71800,container_71799);


var G__71801 = seq__71758_71792;
var G__71802 = chunk__71759_71793;
var G__71803 = count__71760_71794;
var G__71804 = (i__71761_71795 + (1));
seq__71758_71792 = G__71801;
chunk__71759_71793 = G__71802;
count__71760_71794 = G__71803;
i__71761_71795 = G__71804;
continue;
} else {
var temp__5753__auto___71805 = cljs.core.seq(seq__71758_71792);
if(temp__5753__auto___71805){
var seq__71758_71806__$1 = temp__5753__auto___71805;
if(cljs.core.chunked_seq_QMARK_(seq__71758_71806__$1)){
var c__4649__auto___71807 = cljs.core.chunk_first(seq__71758_71806__$1);
var G__71808 = cljs.core.chunk_rest(seq__71758_71806__$1);
var G__71809 = c__4649__auto___71807;
var G__71810 = cljs.core.count(c__4649__auto___71807);
var G__71811 = (0);
seq__71758_71792 = G__71808;
chunk__71759_71793 = G__71809;
count__71760_71794 = G__71810;
i__71761_71795 = G__71811;
continue;
} else {
var vec__71780_71812 = cljs.core.first(seq__71758_71806__$1);
var container_71813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71780_71812,(0),null);
var comp_71814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71780_71812,(1),null);
reagent.dom.re_render_component(comp_71814,container_71813);


var G__71815 = cljs.core.next(seq__71758_71806__$1);
var G__71816 = null;
var G__71817 = (0);
var G__71818 = (0);
seq__71758_71792 = G__71815;
chunk__71759_71793 = G__71816;
count__71760_71794 = G__71817;
i__71761_71795 = G__71818;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
