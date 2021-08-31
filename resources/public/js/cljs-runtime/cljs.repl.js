goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__70395){
var map__70396 = p__70395;
var map__70396__$1 = cljs.core.__destructure_map(map__70396);
var m = map__70396__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70396__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70396__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__70397_70545 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__70398_70546 = null;
var count__70399_70547 = (0);
var i__70400_70548 = (0);
while(true){
if((i__70400_70548 < count__70399_70547)){
var f_70549 = chunk__70398_70546.cljs$core$IIndexed$_nth$arity$2(null,i__70400_70548);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_70549], 0));


var G__70550 = seq__70397_70545;
var G__70551 = chunk__70398_70546;
var G__70552 = count__70399_70547;
var G__70553 = (i__70400_70548 + (1));
seq__70397_70545 = G__70550;
chunk__70398_70546 = G__70551;
count__70399_70547 = G__70552;
i__70400_70548 = G__70553;
continue;
} else {
var temp__5753__auto___70554 = cljs.core.seq(seq__70397_70545);
if(temp__5753__auto___70554){
var seq__70397_70555__$1 = temp__5753__auto___70554;
if(cljs.core.chunked_seq_QMARK_(seq__70397_70555__$1)){
var c__4649__auto___70557 = cljs.core.chunk_first(seq__70397_70555__$1);
var G__70558 = cljs.core.chunk_rest(seq__70397_70555__$1);
var G__70559 = c__4649__auto___70557;
var G__70560 = cljs.core.count(c__4649__auto___70557);
var G__70561 = (0);
seq__70397_70545 = G__70558;
chunk__70398_70546 = G__70559;
count__70399_70547 = G__70560;
i__70400_70548 = G__70561;
continue;
} else {
var f_70562 = cljs.core.first(seq__70397_70555__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_70562], 0));


var G__70563 = cljs.core.next(seq__70397_70555__$1);
var G__70564 = null;
var G__70565 = (0);
var G__70566 = (0);
seq__70397_70545 = G__70563;
chunk__70398_70546 = G__70564;
count__70399_70547 = G__70565;
i__70400_70548 = G__70566;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_70567 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_70567], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_70567)))?cljs.core.second(arglists_70567):arglists_70567)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__70412_70574 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__70413_70575 = null;
var count__70414_70576 = (0);
var i__70415_70577 = (0);
while(true){
if((i__70415_70577 < count__70414_70576)){
var vec__70424_70579 = chunk__70413_70575.cljs$core$IIndexed$_nth$arity$2(null,i__70415_70577);
var name_70580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70424_70579,(0),null);
var map__70427_70581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70424_70579,(1),null);
var map__70427_70582__$1 = cljs.core.__destructure_map(map__70427_70581);
var doc_70583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70427_70582__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_70584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70427_70582__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_70580], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_70584], 0));

if(cljs.core.truth_(doc_70583)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_70583], 0));
} else {
}


var G__70589 = seq__70412_70574;
var G__70590 = chunk__70413_70575;
var G__70591 = count__70414_70576;
var G__70592 = (i__70415_70577 + (1));
seq__70412_70574 = G__70589;
chunk__70413_70575 = G__70590;
count__70414_70576 = G__70591;
i__70415_70577 = G__70592;
continue;
} else {
var temp__5753__auto___70593 = cljs.core.seq(seq__70412_70574);
if(temp__5753__auto___70593){
var seq__70412_70594__$1 = temp__5753__auto___70593;
if(cljs.core.chunked_seq_QMARK_(seq__70412_70594__$1)){
var c__4649__auto___70595 = cljs.core.chunk_first(seq__70412_70594__$1);
var G__70596 = cljs.core.chunk_rest(seq__70412_70594__$1);
var G__70597 = c__4649__auto___70595;
var G__70598 = cljs.core.count(c__4649__auto___70595);
var G__70599 = (0);
seq__70412_70574 = G__70596;
chunk__70413_70575 = G__70597;
count__70414_70576 = G__70598;
i__70415_70577 = G__70599;
continue;
} else {
var vec__70429_70600 = cljs.core.first(seq__70412_70594__$1);
var name_70601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70429_70600,(0),null);
var map__70432_70602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70429_70600,(1),null);
var map__70432_70603__$1 = cljs.core.__destructure_map(map__70432_70602);
var doc_70604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70432_70603__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_70605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70432_70603__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_70601], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_70605], 0));

if(cljs.core.truth_(doc_70604)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_70604], 0));
} else {
}


var G__70607 = cljs.core.next(seq__70412_70594__$1);
var G__70608 = null;
var G__70609 = (0);
var G__70610 = (0);
seq__70412_70574 = G__70607;
chunk__70413_70575 = G__70608;
count__70414_70576 = G__70609;
i__70415_70577 = G__70610;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__70434 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__70435 = null;
var count__70436 = (0);
var i__70437 = (0);
while(true){
if((i__70437 < count__70436)){
var role = chunk__70435.cljs$core$IIndexed$_nth$arity$2(null,i__70437);
var temp__5753__auto___70612__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___70612__$1)){
var spec_70613 = temp__5753__auto___70612__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_70613)], 0));
} else {
}


var G__70614 = seq__70434;
var G__70615 = chunk__70435;
var G__70616 = count__70436;
var G__70617 = (i__70437 + (1));
seq__70434 = G__70614;
chunk__70435 = G__70615;
count__70436 = G__70616;
i__70437 = G__70617;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__70434);
if(temp__5753__auto____$1){
var seq__70434__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__70434__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__70434__$1);
var G__70620 = cljs.core.chunk_rest(seq__70434__$1);
var G__70621 = c__4649__auto__;
var G__70622 = cljs.core.count(c__4649__auto__);
var G__70623 = (0);
seq__70434 = G__70620;
chunk__70435 = G__70621;
count__70436 = G__70622;
i__70437 = G__70623;
continue;
} else {
var role = cljs.core.first(seq__70434__$1);
var temp__5753__auto___70624__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___70624__$2)){
var spec_70625 = temp__5753__auto___70624__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_70625)], 0));
} else {
}


var G__70626 = cljs.core.next(seq__70434__$1);
var G__70627 = null;
var G__70628 = (0);
var G__70629 = (0);
seq__70434 = G__70626;
chunk__70435 = G__70627;
count__70436 = G__70628;
i__70437 = G__70629;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__70635 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__70636 = cljs.core.ex_cause(t);
via = G__70635;
t = G__70636;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__70448 = datafied_throwable;
var map__70448__$1 = cljs.core.__destructure_map(map__70448);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70448__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70448__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70448__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__70449 = cljs.core.last(via);
var map__70449__$1 = cljs.core.__destructure_map(map__70449);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70449__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70449__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70449__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__70450 = data;
var map__70450__$1 = cljs.core.__destructure_map(map__70450);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70450__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70450__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70450__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__70451 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__70451__$1 = cljs.core.__destructure_map(map__70451);
var top_data = map__70451__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70451__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__70462 = phase;
var G__70462__$1 = (((G__70462 instanceof cljs.core.Keyword))?G__70462.fqn:null);
switch (G__70462__$1) {
case "read-source":
var map__70463 = data;
var map__70463__$1 = cljs.core.__destructure_map(map__70463);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70463__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70463__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__70464 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__70464__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70464,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__70464);
var G__70464__$2 = (cljs.core.truth_((function (){var fexpr__70466 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__70466.cljs$core$IFn$_invoke$arity$1 ? fexpr__70466.cljs$core$IFn$_invoke$arity$1(source) : fexpr__70466.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__70464__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__70464__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70464__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__70464__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__70468 = top_data;
var G__70468__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70468,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__70468);
var G__70468__$2 = (cljs.core.truth_((function (){var fexpr__70469 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__70469.cljs$core$IFn$_invoke$arity$1 ? fexpr__70469.cljs$core$IFn$_invoke$arity$1(source) : fexpr__70469.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__70468__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__70468__$1);
var G__70468__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70468__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__70468__$2);
var G__70468__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70468__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__70468__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70468__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__70468__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__70470 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70470,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70470,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70470,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70470,(3),null);
var G__70473 = top_data;
var G__70473__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70473,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__70473);
var G__70473__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70473__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__70473__$1);
var G__70473__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70473__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__70473__$2);
var G__70473__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70473__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__70473__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70473__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__70473__$4;
}

break;
case "execution":
var vec__70477 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70477,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70477,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70477,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70477,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__70446_SHARP_){
var or__4223__auto__ = (p1__70446_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__70483 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__70483.cljs$core$IFn$_invoke$arity$1 ? fexpr__70483.cljs$core$IFn$_invoke$arity$1(p1__70446_SHARP_) : fexpr__70483.call(null,p1__70446_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__70484 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__70484__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70484,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__70484);
var G__70484__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70484__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__70484__$1);
var G__70484__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70484__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__70484__$2);
var G__70484__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70484__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__70484__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70484__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__70484__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__70462__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__70493){
var map__70494 = p__70493;
var map__70494__$1 = cljs.core.__destructure_map(map__70494);
var triage_data = map__70494__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70494__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70494__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70494__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70494__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70494__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70494__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70494__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70494__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4223__auto__ = class$;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__70500 = phase;
var G__70500__$1 = (((G__70500 instanceof cljs.core.Keyword))?G__70500.fqn:null);
switch (G__70500__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__70501 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__70502 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70503 = loc;
var G__70504 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__70505_70664 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__70506_70665 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__70507_70666 = true;
var _STAR_print_fn_STAR__temp_val__70508_70667 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__70507_70666);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__70508_70667);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__70489_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__70489_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__70506_70665);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__70505_70664);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__70501,G__70502,G__70503,G__70504) : format.call(null,G__70501,G__70502,G__70503,G__70504));

break;
case "macroexpansion":
var G__70510 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__70511 = cause_type;
var G__70512 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70513 = loc;
var G__70514 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__70510,G__70511,G__70512,G__70513,G__70514) : format.call(null,G__70510,G__70511,G__70512,G__70513,G__70514));

break;
case "compile-syntax-check":
var G__70515 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__70516 = cause_type;
var G__70517 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70518 = loc;
var G__70519 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__70515,G__70516,G__70517,G__70518,G__70519) : format.call(null,G__70515,G__70516,G__70517,G__70518,G__70519));

break;
case "compilation":
var G__70520 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__70521 = cause_type;
var G__70522 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70523 = loc;
var G__70524 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__70520,G__70521,G__70522,G__70523,G__70524) : format.call(null,G__70520,G__70521,G__70522,G__70523,G__70524));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__70525 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__70526 = symbol;
var G__70527 = loc;
var G__70528 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__70529_70672 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__70530_70673 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__70531_70674 = true;
var _STAR_print_fn_STAR__temp_val__70532_70675 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__70531_70674);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__70532_70675);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__70490_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__70490_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__70530_70673);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__70529_70672);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__70525,G__70526,G__70527,G__70528) : format.call(null,G__70525,G__70526,G__70527,G__70528));
} else {
var G__70533 = "Execution error%s at %s(%s).\n%s\n";
var G__70534 = cause_type;
var G__70535 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70536 = loc;
var G__70537 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__70533,G__70534,G__70535,G__70536,G__70537) : format.call(null,G__70533,G__70534,G__70535,G__70536,G__70537));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__70500__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
