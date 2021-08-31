goog.provide('diplomaform.components.diagram');
diplomaform.components.diagram.max_count = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((10));
diplomaform.components.diagram.diagram = (function diplomaform$components$diagram$diagram(){
var answers = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("diplomaform.subs","answers","diplomaform.subs/answers",-1553716079)], null));
var smth = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("diplomaform.events","something-res","diplomaform.events/something-res",1671257538)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container field"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"d-flex justify-content-center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Results diagram:"], null)], null),cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(answers))], 0)),(function (){var iter__4622__auto__ = (function diplomaform$components$diagram$diagram_$_iter__63807(s__63808){
return (new cljs.core.LazySeq(null,(function (){
var s__63808__$1 = s__63808;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__63808__$1);
if(temp__5753__auto__){
var s__63808__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63808__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__63808__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__63810 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__63809 = (0);
while(true){
if((i__63809 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__63809);
cljs.core.chunk_append(b__63810,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [diplomaform.components.reused.diagram_part.diagram_part,i,cljs.core.deref(diplomaform.components.diagram.max_count)], null));

var G__63811 = (i__63809 + (1));
i__63809 = G__63811;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63810),diplomaform$components$diagram$diagram_$_iter__63807(cljs.core.chunk_rest(s__63808__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63810),null);
}
} else {
var i = cljs.core.first(s__63808__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [diplomaform.components.reused.diagram_part.diagram_part,i,cljs.core.deref(diplomaform.components.diagram.max_count)], null),diplomaform$components$diagram$diagram_$_iter__63807(cljs.core.rest(s__63808__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(answers)));
})()], null)], null);
});

//# sourceMappingURL=diplomaform.components.diagram.js.map
