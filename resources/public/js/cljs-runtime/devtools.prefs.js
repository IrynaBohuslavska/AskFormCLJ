goog.provide('devtools.prefs');
devtools.prefs.default_config = (new cljs.core.Delay((function (){
return cljs.core.deref(devtools.defaults.config);
}),null));
devtools.prefs.external_config = (new cljs.core.Delay((function (){
return cljs.core.PersistentArrayMap.EMPTY;
}),null));
devtools.prefs.initial_config = (new cljs.core.Delay((function (){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(devtools.prefs.default_config),cljs.core.deref(devtools.prefs.external_config)], 0));
}),null));
devtools.prefs._STAR_current_config_STAR_ = (new cljs.core.Delay((function (){
return cljs.core.deref(devtools.prefs.initial_config);
}),null));
devtools.prefs.set_prefs_BANG_ = (function devtools$prefs$set_prefs_BANG_(new_prefs){
return (devtools.prefs._STAR_current_config_STAR_ = new_prefs);
});
devtools.prefs.get_prefs = (function devtools$prefs$get_prefs(){
if(cljs.core.delay_QMARK_(devtools.prefs._STAR_current_config_STAR_)){
devtools.prefs.set_prefs_BANG_(cljs.core.deref(devtools.prefs._STAR_current_config_STAR_));
} else {
}

return devtools.prefs._STAR_current_config_STAR_;
});
devtools.prefs.pref = (function devtools$prefs$pref(key){
var G__60944 = devtools.prefs.get_prefs();
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__60944) : key.call(null,G__60944));
});
devtools.prefs.set_pref_BANG_ = (function devtools$prefs$set_pref_BANG_(key,val){
return devtools.prefs.set_prefs_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(devtools.prefs.get_prefs(),key,val));
});
devtools.prefs.merge_prefs_BANG_ = (function devtools$prefs$merge_prefs_BANG_(m){
return devtools.prefs.set_prefs_BANG_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([devtools.prefs.get_prefs(),m], 0)));
});
devtools.prefs.update_pref_BANG_ = (function devtools$prefs$update_pref_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___60965 = arguments.length;
var i__4830__auto___60966 = (0);
while(true){
if((i__4830__auto___60966 < len__4829__auto___60965)){
args__4835__auto__.push((arguments[i__4830__auto___60966]));

var G__60968 = (i__4830__auto___60966 + (1));
i__4830__auto___60966 = G__60968;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,args){
var new_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,devtools.prefs.pref(key),args);
return devtools.prefs.set_pref_BANG_(key,new_val);
}));

(devtools.prefs.update_pref_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.prefs.update_pref_BANG_.cljs$lang$applyTo = (function (seq60951){
var G__60952 = cljs.core.first(seq60951);
var seq60951__$1 = cljs.core.next(seq60951);
var G__60953 = cljs.core.first(seq60951__$1);
var seq60951__$2 = cljs.core.next(seq60951__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60952,G__60953,seq60951__$2);
}));


//# sourceMappingURL=devtools.prefs.js.map
