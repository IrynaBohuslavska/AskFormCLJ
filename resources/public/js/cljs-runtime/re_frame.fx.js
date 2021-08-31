goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__61509 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__61510 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__61510);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___61601 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___61601)){
var new_db_61602 = temp__5753__auto___61601;
var fexpr__61513_61603 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__61513_61603.cljs$core$IFn$_invoke$arity$1 ? fexpr__61513_61603.cljs$core$IFn$_invoke$arity$1(new_db_61602) : fexpr__61513_61603.call(null,new_db_61602));
} else {
}

var seq__61514 = cljs.core.seq(effects_without_db);
var chunk__61515 = null;
var count__61516 = (0);
var i__61517 = (0);
while(true){
if((i__61517 < count__61516)){
var vec__61529 = chunk__61515.cljs$core$IIndexed$_nth$arity$2(null,i__61517);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61529,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61529,(1),null);
var temp__5751__auto___61604 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___61604)){
var effect_fn_61605 = temp__5751__auto___61604;
(effect_fn_61605.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61605.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61605.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61606 = seq__61514;
var G__61607 = chunk__61515;
var G__61608 = count__61516;
var G__61609 = (i__61517 + (1));
seq__61514 = G__61606;
chunk__61515 = G__61607;
count__61516 = G__61608;
i__61517 = G__61609;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61514);
if(temp__5753__auto__){
var seq__61514__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61514__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__61514__$1);
var G__61610 = cljs.core.chunk_rest(seq__61514__$1);
var G__61611 = c__4649__auto__;
var G__61612 = cljs.core.count(c__4649__auto__);
var G__61613 = (0);
seq__61514 = G__61610;
chunk__61515 = G__61611;
count__61516 = G__61612;
i__61517 = G__61613;
continue;
} else {
var vec__61534 = cljs.core.first(seq__61514__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61534,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61534,(1),null);
var temp__5751__auto___61614 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___61614)){
var effect_fn_61615 = temp__5751__auto___61614;
(effect_fn_61615.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61615.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61615.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61616 = cljs.core.next(seq__61514__$1);
var G__61617 = null;
var G__61618 = (0);
var G__61619 = (0);
seq__61514 = G__61616;
chunk__61515 = G__61617;
count__61516 = G__61618;
i__61517 = G__61619;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__60946__auto___61620 = re_frame.interop.now();
var duration__60947__auto___61621 = (end__60946__auto___61620 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__60947__auto___61621,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__60946__auto___61620);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__61509);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___61622 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___61622)){
var new_db_61623 = temp__5753__auto___61622;
var fexpr__61538_61624 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__61538_61624.cljs$core$IFn$_invoke$arity$1 ? fexpr__61538_61624.cljs$core$IFn$_invoke$arity$1(new_db_61623) : fexpr__61538_61624.call(null,new_db_61623));
} else {
}

var seq__61539 = cljs.core.seq(effects_without_db);
var chunk__61540 = null;
var count__61541 = (0);
var i__61542 = (0);
while(true){
if((i__61542 < count__61541)){
var vec__61552 = chunk__61540.cljs$core$IIndexed$_nth$arity$2(null,i__61542);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61552,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61552,(1),null);
var temp__5751__auto___61625 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___61625)){
var effect_fn_61626 = temp__5751__auto___61625;
(effect_fn_61626.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61626.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61626.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61627 = seq__61539;
var G__61628 = chunk__61540;
var G__61629 = count__61541;
var G__61630 = (i__61542 + (1));
seq__61539 = G__61627;
chunk__61540 = G__61628;
count__61541 = G__61629;
i__61542 = G__61630;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61539);
if(temp__5753__auto__){
var seq__61539__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61539__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__61539__$1);
var G__61631 = cljs.core.chunk_rest(seq__61539__$1);
var G__61632 = c__4649__auto__;
var G__61633 = cljs.core.count(c__4649__auto__);
var G__61634 = (0);
seq__61539 = G__61631;
chunk__61540 = G__61632;
count__61541 = G__61633;
i__61542 = G__61634;
continue;
} else {
var vec__61555 = cljs.core.first(seq__61539__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61555,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61555,(1),null);
var temp__5751__auto___61635 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___61635)){
var effect_fn_61636 = temp__5751__auto___61635;
(effect_fn_61636.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61636.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61636.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61637 = cljs.core.next(seq__61539__$1);
var G__61638 = null;
var G__61639 = (0);
var G__61640 = (0);
seq__61539 = G__61637;
chunk__61540 = G__61638;
count__61541 = G__61639;
i__61542 = G__61640;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__61559){
var map__61560 = p__61559;
var map__61560__$1 = cljs.core.__destructure_map(map__61560);
var effect = map__61560__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61560__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61560__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__61561 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__61562 = null;
var count__61563 = (0);
var i__61564 = (0);
while(true){
if((i__61564 < count__61563)){
var effect = chunk__61562.cljs$core$IIndexed$_nth$arity$2(null,i__61564);
re_frame.fx.dispatch_later(effect);


var G__61641 = seq__61561;
var G__61642 = chunk__61562;
var G__61643 = count__61563;
var G__61644 = (i__61564 + (1));
seq__61561 = G__61641;
chunk__61562 = G__61642;
count__61563 = G__61643;
i__61564 = G__61644;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61561);
if(temp__5753__auto__){
var seq__61561__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61561__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__61561__$1);
var G__61645 = cljs.core.chunk_rest(seq__61561__$1);
var G__61646 = c__4649__auto__;
var G__61647 = cljs.core.count(c__4649__auto__);
var G__61648 = (0);
seq__61561 = G__61645;
chunk__61562 = G__61646;
count__61563 = G__61647;
i__61564 = G__61648;
continue;
} else {
var effect = cljs.core.first(seq__61561__$1);
re_frame.fx.dispatch_later(effect);


var G__61649 = cljs.core.next(seq__61561__$1);
var G__61650 = null;
var G__61651 = (0);
var G__61652 = (0);
seq__61561 = G__61649;
chunk__61562 = G__61650;
count__61563 = G__61651;
i__61564 = G__61652;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__61577 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__61578 = null;
var count__61579 = (0);
var i__61580 = (0);
while(true){
if((i__61580 < count__61579)){
var vec__61587 = chunk__61578.cljs$core$IIndexed$_nth$arity$2(null,i__61580);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61587,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61587,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___61653 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___61653)){
var effect_fn_61654 = temp__5751__auto___61653;
(effect_fn_61654.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61654.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61654.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__61655 = seq__61577;
var G__61656 = chunk__61578;
var G__61657 = count__61579;
var G__61658 = (i__61580 + (1));
seq__61577 = G__61655;
chunk__61578 = G__61656;
count__61579 = G__61657;
i__61580 = G__61658;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61577);
if(temp__5753__auto__){
var seq__61577__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61577__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__61577__$1);
var G__61659 = cljs.core.chunk_rest(seq__61577__$1);
var G__61660 = c__4649__auto__;
var G__61661 = cljs.core.count(c__4649__auto__);
var G__61662 = (0);
seq__61577 = G__61659;
chunk__61578 = G__61660;
count__61579 = G__61661;
i__61580 = G__61662;
continue;
} else {
var vec__61590 = cljs.core.first(seq__61577__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61590,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61590,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___61663 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___61663)){
var effect_fn_61664 = temp__5751__auto___61663;
(effect_fn_61664.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61664.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61664.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__61665 = cljs.core.next(seq__61577__$1);
var G__61666 = null;
var G__61667 = (0);
var G__61668 = (0);
seq__61577 = G__61665;
chunk__61578 = G__61666;
count__61579 = G__61667;
i__61580 = G__61668;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__61593 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__61594 = null;
var count__61595 = (0);
var i__61596 = (0);
while(true){
if((i__61596 < count__61595)){
var event = chunk__61594.cljs$core$IIndexed$_nth$arity$2(null,i__61596);
re_frame.router.dispatch(event);


var G__61669 = seq__61593;
var G__61670 = chunk__61594;
var G__61671 = count__61595;
var G__61672 = (i__61596 + (1));
seq__61593 = G__61669;
chunk__61594 = G__61670;
count__61595 = G__61671;
i__61596 = G__61672;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61593);
if(temp__5753__auto__){
var seq__61593__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61593__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__61593__$1);
var G__61673 = cljs.core.chunk_rest(seq__61593__$1);
var G__61674 = c__4649__auto__;
var G__61675 = cljs.core.count(c__4649__auto__);
var G__61676 = (0);
seq__61593 = G__61673;
chunk__61594 = G__61674;
count__61595 = G__61675;
i__61596 = G__61676;
continue;
} else {
var event = cljs.core.first(seq__61593__$1);
re_frame.router.dispatch(event);


var G__61677 = cljs.core.next(seq__61593__$1);
var G__61678 = null;
var G__61679 = (0);
var G__61680 = (0);
seq__61593 = G__61677;
chunk__61594 = G__61678;
count__61595 = G__61679;
i__61596 = G__61680;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__61597 = cljs.core.seq(value);
var chunk__61598 = null;
var count__61599 = (0);
var i__61600 = (0);
while(true){
if((i__61600 < count__61599)){
var event = chunk__61598.cljs$core$IIndexed$_nth$arity$2(null,i__61600);
clear_event(event);


var G__61681 = seq__61597;
var G__61682 = chunk__61598;
var G__61683 = count__61599;
var G__61684 = (i__61600 + (1));
seq__61597 = G__61681;
chunk__61598 = G__61682;
count__61599 = G__61683;
i__61600 = G__61684;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61597);
if(temp__5753__auto__){
var seq__61597__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61597__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__61597__$1);
var G__61685 = cljs.core.chunk_rest(seq__61597__$1);
var G__61686 = c__4649__auto__;
var G__61687 = cljs.core.count(c__4649__auto__);
var G__61688 = (0);
seq__61597 = G__61685;
chunk__61598 = G__61686;
count__61599 = G__61687;
i__61600 = G__61688;
continue;
} else {
var event = cljs.core.first(seq__61597__$1);
clear_event(event);


var G__61689 = cljs.core.next(seq__61597__$1);
var G__61690 = null;
var G__61691 = (0);
var G__61692 = (0);
seq__61597 = G__61689;
chunk__61598 = G__61690;
count__61599 = G__61691;
i__61600 = G__61692;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
