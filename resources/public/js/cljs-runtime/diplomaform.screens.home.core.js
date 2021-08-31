goog.provide('diplomaform.screens.home.core');
diplomaform.screens.home.core.counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
diplomaform.screens.home.core.id_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
diplomaform.screens.home.core.text = (function diplomaform$screens$home$core$text(counter){
var id = ["input-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter)].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-group"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input","input.input",-850828147),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),id], null)], null)], null);
});
diplomaform.screens.home.core.radio = (function diplomaform$screens$home$core$radio(counter,props){
var iter__4622__auto__ = (function diplomaform$screens$home$core$radio_$_iter__63793(s__63794){
return (new cljs.core.LazySeq(null,(function (){
var s__63794__$1 = s__63794;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__63794__$1);
if(temp__5753__auto__){
var s__63794__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63794__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__63794__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__63796 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__63795 = (0);
while(true){
if((i__63795 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__63795);
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter)].join('');
cljs.core.chunk_append(b__63796,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-check"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"class","class",-2030961996),"form-check-input choise",new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(props))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-check-label"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null));

var G__63817 = (i__63795 + (1));
i__63795 = G__63817;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63796),diplomaform$screens$home$core$radio_$_iter__63793(cljs.core.chunk_rest(s__63794__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63796),null);
}
} else {
var i = cljs.core.first(s__63794__$2);
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter)].join('');
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-check"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"class","class",-2030961996),"form-check-input choise",new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(props))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-check-label"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),diplomaform$screens$home$core$radio_$_iter__63793(cljs.core.rest(s__63794__$2)));
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
diplomaform.screens.home.core.checkbox = (function diplomaform$screens$home$core$checkbox(counter,props){
var iter__4622__auto__ = (function diplomaform$screens$home$core$checkbox_$_iter__63797(s__63798){
return (new cljs.core.LazySeq(null,(function (){
var s__63798__$1 = s__63798;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__63798__$1);
if(temp__5753__auto__){
var s__63798__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63798__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__63798__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__63800 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__63799 = (0);
while(true){
if((i__63799 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__63799);
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter)].join('');
cljs.core.chunk_append(b__63800,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-check"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"class","class",-2030961996),"form-check-input choise"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-check-label"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null));

var G__63823 = (i__63799 + (1));
i__63799 = G__63823;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63800),diplomaform$screens$home$core$checkbox_$_iter__63797(cljs.core.chunk_rest(s__63798__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63800),null);
}
} else {
var i = cljs.core.first(s__63798__$2);
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter)].join('');
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-check"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"class","class",-2030961996),"form-check-input choise"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-check-label"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),diplomaform$screens$home$core$checkbox_$_iter__63797(cljs.core.rest(s__63798__$2)));
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
diplomaform.screens.home.core.question = (function diplomaform$screens$home$core$question(props,counter){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(props)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(props),true))?" *":null)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(props),"free-text"))?diplomaform.screens.home.core.text(counter):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(props),"single-choice"))?diplomaform.screens.home.core.radio(counter,props):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(props),"multiple-choice"))?diplomaform.screens.home.core.checkbox(counter,props):null)], null)], null);
});
diplomaform.screens.home.core.extract_text = (function diplomaform$screens$home$core$extract_text(counter){
return document.getElementById(["input-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter)].join('')).value;
});
diplomaform.screens.home.core.extract_single_choice = (function diplomaform$screens$home$core$extract_single_choice(props,counter){
var iter__4622__auto__ = (function diplomaform$screens$home$core$extract_single_choice_$_iter__63801(s__63802){
return (new cljs.core.LazySeq(null,(function (){
var s__63802__$1 = s__63802;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__63802__$1);
if(temp__5753__auto__){
var s__63802__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63802__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__63802__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__63804 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__63803 = (0);
while(true){
if((i__63803 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__63803);
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter)].join('');
cljs.core.chunk_append(b__63804,cljs.core.PersistentArrayMap.createAsIfByAssoc([i,document.getElementById(id).checked]));

var G__63824 = (i__63803 + (1));
i__63803 = G__63824;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63804),diplomaform$screens$home$core$extract_single_choice_$_iter__63801(cljs.core.chunk_rest(s__63802__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63804),null);
}
} else {
var i = cljs.core.first(s__63802__$2);
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter)].join('');
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([i,document.getElementById(id).checked]),diplomaform$screens$home$core$extract_single_choice_$_iter__63801(cljs.core.rest(s__63802__$2)));
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
diplomaform.screens.home.core.extract_multiple_choice = (function diplomaform$screens$home$core$extract_multiple_choice(props,counter){
var iter__4622__auto__ = (function diplomaform$screens$home$core$extract_multiple_choice_$_iter__63805(s__63806){
return (new cljs.core.LazySeq(null,(function (){
var s__63806__$1 = s__63806;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__63806__$1);
if(temp__5753__auto__){
var s__63806__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63806__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__63806__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__63808 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__63807 = (0);
while(true){
if((i__63807 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__63807);
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter)].join('');
cljs.core.chunk_append(b__63808,cljs.core.PersistentArrayMap.createAsIfByAssoc([i,document.getElementById(id).checked]));

var G__63828 = (i__63807 + (1));
i__63807 = G__63828;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63808),diplomaform$screens$home$core$extract_multiple_choice_$_iter__63805(cljs.core.chunk_rest(s__63806__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63808),null);
}
} else {
var i = cljs.core.first(s__63806__$2);
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter)].join('');
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([i,document.getElementById(id).checked]),diplomaform$screens$home$core$extract_multiple_choice_$_iter__63805(cljs.core.rest(s__63806__$2)));
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
diplomaform.screens.home.core.extract_value = (function diplomaform$screens$home$core$extract_value(props,counter){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"values","values",372645556),(function (){var G__63809 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(props);
switch (G__63809) {
case "free-text":
return diplomaform.screens.home.core.extract_text(counter);

break;
case "single-choice":
return diplomaform.screens.home.core.extract_single_choice(props,counter);

break;
case "multiple-choice":
return diplomaform.screens.home.core.extract_multiple_choice(props,counter);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63809)].join('')));

}
})());
});
diplomaform.screens.home.core.on_submit = (function diplomaform$screens$home$core$on_submit(event){
event.preventDefault();

var data = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("diplomaform.subs","data","diplomaform.subs/data",479416646)], null));
var results = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (counter,props){
return diplomaform.screens.home.core.extract_value(props,counter);
}),new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data)));
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("diplomaform.events","post-results","diplomaform.events/post-results",1281454691),results], null));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data));

return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(results);
});
diplomaform.screens.home.core.home_page = (function diplomaform$screens$home$core$home_page(){
var data = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("diplomaform.subs","data","diplomaform.subs/data",479416646)], null));
var smth = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("diplomaform.events","something","diplomaform.events/something",1655905566)], null));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__63810_SHARP_){
return diplomaform.screens.home.core.on_submit(p1__63810_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container field"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"d-flex justify-content-center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Answer, please :"], null)], null),(function (){var iter__4622__auto__ = (function diplomaform$screens$home$core$home_page_$_iter__63811(s__63812){
return (new cljs.core.LazySeq(null,(function (){
var s__63812__$1 = s__63812;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__63812__$1);
if(temp__5753__auto__){
var s__63812__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63812__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__63812__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__63814 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__63813 = (0);
while(true){
if((i__63813 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__63813);
cljs.core.chunk_append(b__63814,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [diplomaform.screens.home.core.question,i,(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(diplomaform.screens.home.core.counter,cljs.core.inc) - (1))], null));

var G__63831 = (i__63813 + (1));
i__63813 = G__63831;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63814),diplomaform$screens$home$core$home_page_$_iter__63811(cljs.core.chunk_rest(s__63812__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63814),null);
}
} else {
var i = cljs.core.first(s__63812__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [diplomaform.screens.home.core.question,i,(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(diplomaform.screens.home.core.counter,cljs.core.inc) - (1))], null),diplomaform$screens$home$core$home_page_$_iter__63811(cljs.core.rest(s__63812__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data)));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"btn btn-light button",new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),"Submit"], null)], null)], null)], null);
});
});

//# sourceMappingURL=diplomaform.screens.home.core.js.map
