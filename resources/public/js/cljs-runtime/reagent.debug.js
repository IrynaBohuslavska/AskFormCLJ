goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__71038__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__71038 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71039__i = 0, G__71039__a = new Array(arguments.length -  0);
while (G__71039__i < G__71039__a.length) {G__71039__a[G__71039__i] = arguments[G__71039__i + 0]; ++G__71039__i;}
  args = new cljs.core.IndexedSeq(G__71039__a,0,null);
} 
return G__71038__delegate.call(this,args);};
G__71038.cljs$lang$maxFixedArity = 0;
G__71038.cljs$lang$applyTo = (function (arglist__71040){
var args = cljs.core.seq(arglist__71040);
return G__71038__delegate(args);
});
G__71038.cljs$core$IFn$_invoke$arity$variadic = G__71038__delegate;
return G__71038;
})()
);

(o.error = (function() { 
var G__71041__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__71041 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71042__i = 0, G__71042__a = new Array(arguments.length -  0);
while (G__71042__i < G__71042__a.length) {G__71042__a[G__71042__i] = arguments[G__71042__i + 0]; ++G__71042__i;}
  args = new cljs.core.IndexedSeq(G__71042__a,0,null);
} 
return G__71041__delegate.call(this,args);};
G__71041.cljs$lang$maxFixedArity = 0;
G__71041.cljs$lang$applyTo = (function (arglist__71043){
var args = cljs.core.seq(arglist__71043);
return G__71041__delegate(args);
});
G__71041.cljs$core$IFn$_invoke$arity$variadic = G__71041__delegate;
return G__71041;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
