goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__67549,res){
var map__67550 = p__67549;
var map__67550__$1 = cljs.core.__destructure_map(map__67550);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67550__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67550__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__67551 = res;
var G__67551__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67551,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__67551);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67551__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__67551__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__67553 = arguments.length;
switch (G__67553) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__67554,msg,handlers,timeout_after_ms){
var map__67555 = p__67554;
var map__67555__$1 = cljs.core.__destructure_map(map__67555);
var runtime = map__67555__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67555__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___67756 = arguments.length;
var i__4830__auto___67757 = (0);
while(true){
if((i__4830__auto___67757 < len__4829__auto___67756)){
args__4835__auto__.push((arguments[i__4830__auto___67757]));

var G__67758 = (i__4830__auto___67757 + (1));
i__4830__auto___67757 = G__67758;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__67560,ev,args){
var map__67561 = p__67560;
var map__67561__$1 = cljs.core.__destructure_map(map__67561);
var runtime = map__67561__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67561__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__67563 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__67566 = null;
var count__67567 = (0);
var i__67568 = (0);
while(true){
if((i__67568 < count__67567)){
var ext = chunk__67566.cljs$core$IIndexed$_nth$arity$2(null,i__67568);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__67759 = seq__67563;
var G__67760 = chunk__67566;
var G__67761 = count__67567;
var G__67762 = (i__67568 + (1));
seq__67563 = G__67759;
chunk__67566 = G__67760;
count__67567 = G__67761;
i__67568 = G__67762;
continue;
} else {
var G__67763 = seq__67563;
var G__67764 = chunk__67566;
var G__67765 = count__67567;
var G__67766 = (i__67568 + (1));
seq__67563 = G__67763;
chunk__67566 = G__67764;
count__67567 = G__67765;
i__67568 = G__67766;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__67563);
if(temp__5753__auto__){
var seq__67563__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67563__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__67563__$1);
var G__67767 = cljs.core.chunk_rest(seq__67563__$1);
var G__67768 = c__4649__auto__;
var G__67769 = cljs.core.count(c__4649__auto__);
var G__67770 = (0);
seq__67563 = G__67767;
chunk__67566 = G__67768;
count__67567 = G__67769;
i__67568 = G__67770;
continue;
} else {
var ext = cljs.core.first(seq__67563__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__67771 = cljs.core.next(seq__67563__$1);
var G__67772 = null;
var G__67773 = (0);
var G__67774 = (0);
seq__67563 = G__67771;
chunk__67566 = G__67772;
count__67567 = G__67773;
i__67568 = G__67774;
continue;
} else {
var G__67775 = cljs.core.next(seq__67563__$1);
var G__67776 = null;
var G__67777 = (0);
var G__67778 = (0);
seq__67563 = G__67775;
chunk__67566 = G__67776;
count__67567 = G__67777;
i__67568 = G__67778;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq67556){
var G__67557 = cljs.core.first(seq67556);
var seq67556__$1 = cljs.core.next(seq67556);
var G__67558 = cljs.core.first(seq67556__$1);
var seq67556__$2 = cljs.core.next(seq67556__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67557,G__67558,seq67556__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__67600,p__67601){
var map__67602 = p__67600;
var map__67602__$1 = cljs.core.__destructure_map(map__67602);
var runtime = map__67602__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67602__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67603 = p__67601;
var map__67603__$1 = cljs.core.__destructure_map(map__67603);
var msg = map__67603__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67603__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__67604 = cljs.core.deref(state_ref);
var map__67604__$1 = cljs.core.__destructure_map(map__67604);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67604__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67604__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__67610){
var map__67611 = p__67610;
var map__67611__$1 = cljs.core.__destructure_map(map__67611);
var runtime = map__67611__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67611__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__67615,msg){
var map__67616 = p__67615;
var map__67616__$1 = cljs.core.__destructure_map(map__67616);
var runtime = map__67616__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67616__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__67620,key,p__67621){
var map__67622 = p__67620;
var map__67622__$1 = cljs.core.__destructure_map(map__67622);
var state = map__67622__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67622__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__67623 = p__67621;
var map__67623__$1 = cljs.core.__destructure_map(map__67623);
var spec = map__67623__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67623__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__67653,key,spec){
var map__67654 = p__67653;
var map__67654__$1 = cljs.core.__destructure_map(map__67654);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67654__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__67690_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__67690_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__67691_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__67691_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__67692_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__67692_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__67693_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__67693_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__67694_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__67694_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__67706,key){
var map__67708 = p__67706;
var map__67708__$1 = cljs.core.__destructure_map(map__67708);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67708__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__67712,msg){
var map__67713 = p__67712;
var map__67713__$1 = cljs.core.__destructure_map(map__67713);
var runtime = map__67713__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67713__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__67718,p__67719){
var map__67720 = p__67718;
var map__67720__$1 = cljs.core.__destructure_map(map__67720);
var runtime = map__67720__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67720__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67721 = p__67719;
var map__67721__$1 = cljs.core.__destructure_map(map__67721);
var msg = map__67721__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67721__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67721__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__67728 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__67730 = null;
var count__67731 = (0);
var i__67732 = (0);
while(true){
if((i__67732 < count__67731)){
var map__67743 = chunk__67730.cljs$core$IIndexed$_nth$arity$2(null,i__67732);
var map__67743__$1 = cljs.core.__destructure_map(map__67743);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67743__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__67816 = seq__67728;
var G__67817 = chunk__67730;
var G__67818 = count__67731;
var G__67819 = (i__67732 + (1));
seq__67728 = G__67816;
chunk__67730 = G__67817;
count__67731 = G__67818;
i__67732 = G__67819;
continue;
} else {
var G__67821 = seq__67728;
var G__67822 = chunk__67730;
var G__67823 = count__67731;
var G__67824 = (i__67732 + (1));
seq__67728 = G__67821;
chunk__67730 = G__67822;
count__67731 = G__67823;
i__67732 = G__67824;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__67728);
if(temp__5753__auto__){
var seq__67728__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67728__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__67728__$1);
var G__67826 = cljs.core.chunk_rest(seq__67728__$1);
var G__67827 = c__4649__auto__;
var G__67828 = cljs.core.count(c__4649__auto__);
var G__67829 = (0);
seq__67728 = G__67826;
chunk__67730 = G__67827;
count__67731 = G__67828;
i__67732 = G__67829;
continue;
} else {
var map__67745 = cljs.core.first(seq__67728__$1);
var map__67745__$1 = cljs.core.__destructure_map(map__67745);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67745__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__67831 = cljs.core.next(seq__67728__$1);
var G__67832 = null;
var G__67833 = (0);
var G__67834 = (0);
seq__67728 = G__67831;
chunk__67730 = G__67832;
count__67731 = G__67833;
i__67732 = G__67834;
continue;
} else {
var G__67835 = cljs.core.next(seq__67728__$1);
var G__67836 = null;
var G__67837 = (0);
var G__67838 = (0);
seq__67728 = G__67835;
chunk__67730 = G__67836;
count__67731 = G__67837;
i__67732 = G__67838;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
