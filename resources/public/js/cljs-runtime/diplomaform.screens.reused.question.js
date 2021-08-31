goog.provide('diplomaform.screens.reused.question');
diplomaform.screens.reused.question.id_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
diplomaform.screens.reused.question.text = (function diplomaform$screens$reused$question$text(counter){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-group"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter)], null)], null)], null);
});
diplomaform.screens.reused.question.radio = (function diplomaform$screens$reused$question$radio(counter,props){
var iter__4622__auto__ = (function diplomaform$screens$reused$question$radio_$_iter__64957(s__64958){
return (new cljs.core.LazySeq(null,(function (){
var s__64958__$1 = s__64958;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__64958__$1);
if(temp__5753__auto__){
var s__64958__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64958__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__64958__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__64960 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__64959 = (0);
while(true){
if((i__64959 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__64959);
var key = counter;
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter)].join('');
var res = ((cljs.core.contains_QMARK_(cljs.core.deref(diplomaform.screens.reused.question.id_atom),key))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(diplomaform.screens.reused.question.id_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(diplomaform.screens.reused.question.id_atom,cljs.core.merge,cljs.core.PersistentArrayMap.createAsIfByAssoc([key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null)])));
cljs.core.chunk_append(b__64960,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-check"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"class","class",-2030961996),"form-check-input",new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(props))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-check-label"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null));

var G__64965 = (i__64959 + (1));
i__64959 = G__64965;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64960),diplomaform$screens$reused$question$radio_$_iter__64957(cljs.core.chunk_rest(s__64958__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64960),null);
}
} else {
var i = cljs.core.first(s__64958__$2);
var key = counter;
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter)].join('');
var res = ((cljs.core.contains_QMARK_(cljs.core.deref(diplomaform.screens.reused.question.id_atom),key))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(diplomaform.screens.reused.question.id_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(diplomaform.screens.reused.question.id_atom,cljs.core.merge,cljs.core.PersistentArrayMap.createAsIfByAssoc([key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null)])));
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-check"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"class","class",-2030961996),"form-check-input",new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(props))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-check-label"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),diplomaform$screens$reused$question$radio_$_iter__64957(cljs.core.rest(s__64958__$2)));
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
diplomaform.screens.reused.question.checkbox = (function diplomaform$screens$reused$question$checkbox(counter,props){
var iter__4622__auto__ = (function diplomaform$screens$reused$question$checkbox_$_iter__64961(s__64962){
return (new cljs.core.LazySeq(null,(function (){
var s__64962__$1 = s__64962;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__64962__$1);
if(temp__5753__auto__){
var s__64962__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64962__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__64962__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__64964 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__64963 = (0);
while(true){
if((i__64963 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__64963);
var key = counter;
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter)].join('');
var res = ((cljs.core.contains_QMARK_(cljs.core.deref(diplomaform.screens.reused.question.id_atom),key))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(diplomaform.screens.reused.question.id_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(diplomaform.screens.reused.question.id_atom,cljs.core.merge,cljs.core.PersistentArrayMap.createAsIfByAssoc([key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null)])));
cljs.core.chunk_append(b__64964,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-check"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"class","class",-2030961996),"form-check-input"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-check-label"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null));

var G__64967 = (i__64963 + (1));
i__64963 = G__64967;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64964),diplomaform$screens$reused$question$checkbox_$_iter__64961(cljs.core.chunk_rest(s__64962__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64964),null);
}
} else {
var i = cljs.core.first(s__64962__$2);
var key = counter;
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter)].join('');
var res = ((cljs.core.contains_QMARK_(cljs.core.deref(diplomaform.screens.reused.question.id_atom),key))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(diplomaform.screens.reused.question.id_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(diplomaform.screens.reused.question.id_atom,cljs.core.merge,cljs.core.PersistentArrayMap.createAsIfByAssoc([key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null)])));
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-check"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"class","class",-2030961996),"form-check-input"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-check-label"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),diplomaform$screens$reused$question$checkbox_$_iter__64961(cljs.core.rest(s__64962__$2)));
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
diplomaform.screens.reused.question.question = (function diplomaform$screens$reused$question$question(props,counter){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(props)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(props),true))?" *":null)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(props),"free-text"))?diplomaform.screens.reused.question.text(counter):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(props),"single-choice"))?diplomaform.screens.reused.question.radio(counter,props):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(props),"multiple-choice"))?diplomaform.screens.reused.question.checkbox(counter,props):null)], null)], null);
});

//# sourceMappingURL=diplomaform.screens.reused.question.js.map
