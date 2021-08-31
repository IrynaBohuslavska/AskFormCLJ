goog.provide('diplomaform.components.reused.question');
diplomaform.components.reused.question.text = (function diplomaform$components$reused$question$text(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-group"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control"], null)], null)], null);
});
diplomaform.components.reused.question.radio = (function diplomaform$components$reused$question$radio(props){
var iter__4622__auto__ = (function diplomaform$components$reused$question$radio_$_iter__62818(s__62819){
return (new cljs.core.LazySeq(null,(function (){
var s__62819__$1 = s__62819;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__62819__$1);
if(temp__5753__auto__){
var s__62819__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62819__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__62819__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__62821 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__62820 = (0);
while(true){
if((i__62820 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__62820);
cljs.core.chunk_append(b__62821,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-check"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(props)),new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"class","class",-2030961996),"form-check-input",new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(props))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-check-label"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null));

var G__62826 = (i__62820 + (1));
i__62820 = G__62826;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62821),diplomaform$components$reused$question$radio_$_iter__62818(cljs.core.chunk_rest(s__62819__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62821),null);
}
} else {
var i = cljs.core.first(s__62819__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-check"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(props)),new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"class","class",-2030961996),"form-check-input",new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(props))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-check-label"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),diplomaform$components$reused$question$radio_$_iter__62818(cljs.core.rest(s__62819__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(props));
});
diplomaform.components.reused.question.checkbox = (function diplomaform$components$reused$question$checkbox(props){
var iter__4622__auto__ = (function diplomaform$components$reused$question$checkbox_$_iter__62822(s__62823){
return (new cljs.core.LazySeq(null,(function (){
var s__62823__$1 = s__62823;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__62823__$1);
if(temp__5753__auto__){
var s__62823__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62823__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__62823__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__62825 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__62824 = (0);
while(true){
if((i__62824 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__62824);
cljs.core.chunk_append(b__62825,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-check"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"class","class",-2030961996),"form-check-input"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-check-label"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null));

var G__62831 = (i__62824 + (1));
i__62824 = G__62831;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62825),diplomaform$components$reused$question$checkbox_$_iter__62822(cljs.core.chunk_rest(s__62823__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62825),null);
}
} else {
var i = cljs.core.first(s__62823__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-check"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"class","class",-2030961996),"form-check-input"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-check-label"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),diplomaform$components$reused$question$checkbox_$_iter__62822(cljs.core.rest(s__62823__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(props));
});
diplomaform.components.reused.question.question = (function diplomaform$components$reused$question$question(props){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(props)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(props),true))?" *":null)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(props),"free-text"))?diplomaform.components.reused.question.text():null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(props),"single-choice"))?diplomaform.components.reused.question.radio(props):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(props),"multiple-choice"))?diplomaform.components.reused.question.checkbox(props):null)], null)], null);
});

//# sourceMappingURL=diplomaform.components.reused.question.js.map
