goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__70806,p__70807){
var map__70808 = p__70806;
var map__70808__$1 = cljs.core.__destructure_map(map__70808);
var svc = map__70808__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70808__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70808__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70808__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__70809 = p__70807;
var map__70809__$1 = cljs.core.__destructure_map(map__70809);
var msg = map__70809__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70809__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70809__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70809__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70809__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__70810,p__70811){
var map__70812 = p__70810;
var map__70812__$1 = cljs.core.__destructure_map(map__70812);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70812__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__70813 = p__70811;
var map__70813__$1 = cljs.core.__destructure_map(map__70813);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70813__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__70814,p__70815){
var map__70816 = p__70814;
var map__70816__$1 = cljs.core.__destructure_map(map__70816);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70816__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70816__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__70817 = p__70815;
var map__70817__$1 = cljs.core.__destructure_map(map__70817);
var msg = map__70817__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70817__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__70818,tid){
var map__70819 = p__70818;
var map__70819__$1 = cljs.core.__destructure_map(map__70819);
var svc = map__70819__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70819__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__70824 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__70825 = null;
var count__70826 = (0);
var i__70827 = (0);
while(true){
if((i__70827 < count__70826)){
var vec__70834 = chunk__70825.cljs$core$IIndexed$_nth$arity$2(null,i__70827);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70834,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70834,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__70842 = seq__70824;
var G__70843 = chunk__70825;
var G__70844 = count__70826;
var G__70845 = (i__70827 + (1));
seq__70824 = G__70842;
chunk__70825 = G__70843;
count__70826 = G__70844;
i__70827 = G__70845;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__70824);
if(temp__5753__auto__){
var seq__70824__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70824__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__70824__$1);
var G__70846 = cljs.core.chunk_rest(seq__70824__$1);
var G__70847 = c__4649__auto__;
var G__70848 = cljs.core.count(c__4649__auto__);
var G__70849 = (0);
seq__70824 = G__70846;
chunk__70825 = G__70847;
count__70826 = G__70848;
i__70827 = G__70849;
continue;
} else {
var vec__70837 = cljs.core.first(seq__70824__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70837,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70837,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__70850 = cljs.core.next(seq__70824__$1);
var G__70851 = null;
var G__70852 = (0);
var G__70853 = (0);
seq__70824 = G__70850;
chunk__70825 = G__70851;
count__70826 = G__70852;
i__70827 = G__70853;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__70820_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__70820_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__70821_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__70821_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__70822_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__70822_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__70823_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__70823_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__70840){
var map__70841 = p__70840;
var map__70841__$1 = cljs.core.__destructure_map(map__70841);
var svc = map__70841__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70841__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70841__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
