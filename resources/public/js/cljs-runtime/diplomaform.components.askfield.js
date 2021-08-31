goog.provide('diplomaform.components.askfield');
diplomaform.components.askfield.askfield = (function diplomaform$components$askfield$askfield(){
var data = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("diplomaform.subs","data","diplomaform.subs/data",479416646)], null));
var smth = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("diplomaform.events","something","diplomaform.events/something",1655905566)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container field"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"d-flex justify-content-center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Answer, please :"], null)], null),(function (){var iter__4622__auto__ = (function diplomaform$components$askfield$askfield_$_iter__63678(s__63679){
return (new cljs.core.LazySeq(null,(function (){
var s__63679__$1 = s__63679;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__63679__$1);
if(temp__5753__auto__){
var s__63679__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63679__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__63679__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__63681 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__63680 = (0);
while(true){
if((i__63680 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__63680);
cljs.core.chunk_append(b__63681,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [diplomaform.components.reused.question.question,i], null));

var G__63686 = (i__63680 + (1));
i__63680 = G__63686;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63681),diplomaform$components$askfield$askfield_$_iter__63678(cljs.core.chunk_rest(s__63679__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63681),null);
}
} else {
var i = cljs.core.first(s__63679__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [diplomaform.components.reused.question.question,i], null),diplomaform$components$askfield$askfield_$_iter__63678(cljs.core.rest(s__63679__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data)));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [diplomaform.components.reused.button.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Submit",new cljs.core.Keyword(null,"color","color",1011675173),"btn btn-light button"], null)], null)], null)], null);
});

//# sourceMappingURL=diplomaform.components.askfield.js.map
