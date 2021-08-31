goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_69111 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_69111(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_69115 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_69115(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__68071 = coll;
var G__68072 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__68071,G__68072) : shadow.dom.lazy_native_coll_seq.call(null,G__68071,G__68072));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__68116 = arguments.length;
switch (G__68116) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__68130 = arguments.length;
switch (G__68130) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__68145 = arguments.length;
switch (G__68145) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__68155 = arguments.length;
switch (G__68155) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__68176 = arguments.length;
switch (G__68176) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__68192 = arguments.length;
switch (G__68192) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e68212){if((e68212 instanceof Object)){
var e = e68212;
return console.log("didnt support attachEvent",el,e);
} else {
throw e68212;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__68220 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__68221 = null;
var count__68222 = (0);
var i__68223 = (0);
while(true){
if((i__68223 < count__68222)){
var el = chunk__68221.cljs$core$IIndexed$_nth$arity$2(null,i__68223);
var handler_69130__$1 = ((function (seq__68220,chunk__68221,count__68222,i__68223,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__68220,chunk__68221,count__68222,i__68223,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_69130__$1);


var G__69131 = seq__68220;
var G__69132 = chunk__68221;
var G__69133 = count__68222;
var G__69134 = (i__68223 + (1));
seq__68220 = G__69131;
chunk__68221 = G__69132;
count__68222 = G__69133;
i__68223 = G__69134;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__68220);
if(temp__5753__auto__){
var seq__68220__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68220__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__68220__$1);
var G__69135 = cljs.core.chunk_rest(seq__68220__$1);
var G__69136 = c__4649__auto__;
var G__69137 = cljs.core.count(c__4649__auto__);
var G__69138 = (0);
seq__68220 = G__69135;
chunk__68221 = G__69136;
count__68222 = G__69137;
i__68223 = G__69138;
continue;
} else {
var el = cljs.core.first(seq__68220__$1);
var handler_69139__$1 = ((function (seq__68220,chunk__68221,count__68222,i__68223,el,seq__68220__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__68220,chunk__68221,count__68222,i__68223,el,seq__68220__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_69139__$1);


var G__69140 = cljs.core.next(seq__68220__$1);
var G__69141 = null;
var G__69142 = (0);
var G__69143 = (0);
seq__68220 = G__69140;
chunk__68221 = G__69141;
count__68222 = G__69142;
i__68223 = G__69143;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__68243 = arguments.length;
switch (G__68243) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__68271 = cljs.core.seq(events);
var chunk__68272 = null;
var count__68273 = (0);
var i__68274 = (0);
while(true){
if((i__68274 < count__68273)){
var vec__68296 = chunk__68272.cljs$core$IIndexed$_nth$arity$2(null,i__68274);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68296,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68296,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__69145 = seq__68271;
var G__69146 = chunk__68272;
var G__69147 = count__68273;
var G__69148 = (i__68274 + (1));
seq__68271 = G__69145;
chunk__68272 = G__69146;
count__68273 = G__69147;
i__68274 = G__69148;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__68271);
if(temp__5753__auto__){
var seq__68271__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68271__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__68271__$1);
var G__69149 = cljs.core.chunk_rest(seq__68271__$1);
var G__69150 = c__4649__auto__;
var G__69151 = cljs.core.count(c__4649__auto__);
var G__69152 = (0);
seq__68271 = G__69149;
chunk__68272 = G__69150;
count__68273 = G__69151;
i__68274 = G__69152;
continue;
} else {
var vec__68309 = cljs.core.first(seq__68271__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68309,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68309,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__69153 = cljs.core.next(seq__68271__$1);
var G__69154 = null;
var G__69155 = (0);
var G__69156 = (0);
seq__68271 = G__69153;
chunk__68272 = G__69154;
count__68273 = G__69155;
i__68274 = G__69156;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__68321 = cljs.core.seq(styles);
var chunk__68322 = null;
var count__68323 = (0);
var i__68324 = (0);
while(true){
if((i__68324 < count__68323)){
var vec__68347 = chunk__68322.cljs$core$IIndexed$_nth$arity$2(null,i__68324);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68347,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68347,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__69157 = seq__68321;
var G__69158 = chunk__68322;
var G__69159 = count__68323;
var G__69160 = (i__68324 + (1));
seq__68321 = G__69157;
chunk__68322 = G__69158;
count__68323 = G__69159;
i__68324 = G__69160;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__68321);
if(temp__5753__auto__){
var seq__68321__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68321__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__68321__$1);
var G__69162 = cljs.core.chunk_rest(seq__68321__$1);
var G__69163 = c__4649__auto__;
var G__69164 = cljs.core.count(c__4649__auto__);
var G__69165 = (0);
seq__68321 = G__69162;
chunk__68322 = G__69163;
count__68323 = G__69164;
i__68324 = G__69165;
continue;
} else {
var vec__68354 = cljs.core.first(seq__68321__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68354,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68354,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__69167 = cljs.core.next(seq__68321__$1);
var G__69168 = null;
var G__69169 = (0);
var G__69170 = (0);
seq__68321 = G__69167;
chunk__68322 = G__69168;
count__68323 = G__69169;
i__68324 = G__69170;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__68367_69171 = key;
var G__68367_69172__$1 = (((G__68367_69171 instanceof cljs.core.Keyword))?G__68367_69171.fqn:null);
switch (G__68367_69172__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_69174 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_69174,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_69174,"aria-");
}
})())){
el.setAttribute(ks_69174,value);
} else {
(el[ks_69174] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__68402){
var map__68403 = p__68402;
var map__68403__$1 = cljs.core.__destructure_map(map__68403);
var props = map__68403__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68403__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__68405 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68405,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68405,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68405,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__68411 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__68411,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__68411;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__68417 = arguments.length;
switch (G__68417) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__68429){
var vec__68431 = p__68429;
var seq__68432 = cljs.core.seq(vec__68431);
var first__68433 = cljs.core.first(seq__68432);
var seq__68432__$1 = cljs.core.next(seq__68432);
var nn = first__68433;
var first__68433__$1 = cljs.core.first(seq__68432__$1);
var seq__68432__$2 = cljs.core.next(seq__68432__$1);
var np = first__68433__$1;
var nc = seq__68432__$2;
var node = vec__68431;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__68437 = nn;
var G__68438 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__68437,G__68438) : create_fn.call(null,G__68437,G__68438));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__68440 = nn;
var G__68441 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__68440,G__68441) : create_fn.call(null,G__68440,G__68441));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__68445 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68445,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68445,(1),null);
var seq__68450_69179 = cljs.core.seq(node_children);
var chunk__68451_69180 = null;
var count__68452_69181 = (0);
var i__68453_69182 = (0);
while(true){
if((i__68453_69182 < count__68452_69181)){
var child_struct_69183 = chunk__68451_69180.cljs$core$IIndexed$_nth$arity$2(null,i__68453_69182);
var children_69184 = shadow.dom.dom_node(child_struct_69183);
if(cljs.core.seq_QMARK_(children_69184)){
var seq__68507_69185 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_69184));
var chunk__68509_69186 = null;
var count__68510_69187 = (0);
var i__68511_69188 = (0);
while(true){
if((i__68511_69188 < count__68510_69187)){
var child_69189 = chunk__68509_69186.cljs$core$IIndexed$_nth$arity$2(null,i__68511_69188);
if(cljs.core.truth_(child_69189)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_69189);


var G__69190 = seq__68507_69185;
var G__69191 = chunk__68509_69186;
var G__69192 = count__68510_69187;
var G__69193 = (i__68511_69188 + (1));
seq__68507_69185 = G__69190;
chunk__68509_69186 = G__69191;
count__68510_69187 = G__69192;
i__68511_69188 = G__69193;
continue;
} else {
var G__69194 = seq__68507_69185;
var G__69195 = chunk__68509_69186;
var G__69196 = count__68510_69187;
var G__69197 = (i__68511_69188 + (1));
seq__68507_69185 = G__69194;
chunk__68509_69186 = G__69195;
count__68510_69187 = G__69196;
i__68511_69188 = G__69197;
continue;
}
} else {
var temp__5753__auto___69198 = cljs.core.seq(seq__68507_69185);
if(temp__5753__auto___69198){
var seq__68507_69199__$1 = temp__5753__auto___69198;
if(cljs.core.chunked_seq_QMARK_(seq__68507_69199__$1)){
var c__4649__auto___69200 = cljs.core.chunk_first(seq__68507_69199__$1);
var G__69201 = cljs.core.chunk_rest(seq__68507_69199__$1);
var G__69202 = c__4649__auto___69200;
var G__69203 = cljs.core.count(c__4649__auto___69200);
var G__69204 = (0);
seq__68507_69185 = G__69201;
chunk__68509_69186 = G__69202;
count__68510_69187 = G__69203;
i__68511_69188 = G__69204;
continue;
} else {
var child_69205 = cljs.core.first(seq__68507_69199__$1);
if(cljs.core.truth_(child_69205)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_69205);


var G__69206 = cljs.core.next(seq__68507_69199__$1);
var G__69207 = null;
var G__69208 = (0);
var G__69209 = (0);
seq__68507_69185 = G__69206;
chunk__68509_69186 = G__69207;
count__68510_69187 = G__69208;
i__68511_69188 = G__69209;
continue;
} else {
var G__69210 = cljs.core.next(seq__68507_69199__$1);
var G__69211 = null;
var G__69212 = (0);
var G__69213 = (0);
seq__68507_69185 = G__69210;
chunk__68509_69186 = G__69211;
count__68510_69187 = G__69212;
i__68511_69188 = G__69213;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_69184);
}


var G__69214 = seq__68450_69179;
var G__69215 = chunk__68451_69180;
var G__69216 = count__68452_69181;
var G__69217 = (i__68453_69182 + (1));
seq__68450_69179 = G__69214;
chunk__68451_69180 = G__69215;
count__68452_69181 = G__69216;
i__68453_69182 = G__69217;
continue;
} else {
var temp__5753__auto___69218 = cljs.core.seq(seq__68450_69179);
if(temp__5753__auto___69218){
var seq__68450_69219__$1 = temp__5753__auto___69218;
if(cljs.core.chunked_seq_QMARK_(seq__68450_69219__$1)){
var c__4649__auto___69220 = cljs.core.chunk_first(seq__68450_69219__$1);
var G__69221 = cljs.core.chunk_rest(seq__68450_69219__$1);
var G__69222 = c__4649__auto___69220;
var G__69223 = cljs.core.count(c__4649__auto___69220);
var G__69224 = (0);
seq__68450_69179 = G__69221;
chunk__68451_69180 = G__69222;
count__68452_69181 = G__69223;
i__68453_69182 = G__69224;
continue;
} else {
var child_struct_69225 = cljs.core.first(seq__68450_69219__$1);
var children_69226 = shadow.dom.dom_node(child_struct_69225);
if(cljs.core.seq_QMARK_(children_69226)){
var seq__68535_69227 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_69226));
var chunk__68537_69228 = null;
var count__68538_69229 = (0);
var i__68539_69230 = (0);
while(true){
if((i__68539_69230 < count__68538_69229)){
var child_69231 = chunk__68537_69228.cljs$core$IIndexed$_nth$arity$2(null,i__68539_69230);
if(cljs.core.truth_(child_69231)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_69231);


var G__69232 = seq__68535_69227;
var G__69233 = chunk__68537_69228;
var G__69234 = count__68538_69229;
var G__69235 = (i__68539_69230 + (1));
seq__68535_69227 = G__69232;
chunk__68537_69228 = G__69233;
count__68538_69229 = G__69234;
i__68539_69230 = G__69235;
continue;
} else {
var G__69236 = seq__68535_69227;
var G__69237 = chunk__68537_69228;
var G__69238 = count__68538_69229;
var G__69239 = (i__68539_69230 + (1));
seq__68535_69227 = G__69236;
chunk__68537_69228 = G__69237;
count__68538_69229 = G__69238;
i__68539_69230 = G__69239;
continue;
}
} else {
var temp__5753__auto___69240__$1 = cljs.core.seq(seq__68535_69227);
if(temp__5753__auto___69240__$1){
var seq__68535_69241__$1 = temp__5753__auto___69240__$1;
if(cljs.core.chunked_seq_QMARK_(seq__68535_69241__$1)){
var c__4649__auto___69242 = cljs.core.chunk_first(seq__68535_69241__$1);
var G__69243 = cljs.core.chunk_rest(seq__68535_69241__$1);
var G__69244 = c__4649__auto___69242;
var G__69245 = cljs.core.count(c__4649__auto___69242);
var G__69246 = (0);
seq__68535_69227 = G__69243;
chunk__68537_69228 = G__69244;
count__68538_69229 = G__69245;
i__68539_69230 = G__69246;
continue;
} else {
var child_69247 = cljs.core.first(seq__68535_69241__$1);
if(cljs.core.truth_(child_69247)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_69247);


var G__69248 = cljs.core.next(seq__68535_69241__$1);
var G__69249 = null;
var G__69250 = (0);
var G__69251 = (0);
seq__68535_69227 = G__69248;
chunk__68537_69228 = G__69249;
count__68538_69229 = G__69250;
i__68539_69230 = G__69251;
continue;
} else {
var G__69252 = cljs.core.next(seq__68535_69241__$1);
var G__69253 = null;
var G__69254 = (0);
var G__69255 = (0);
seq__68535_69227 = G__69252;
chunk__68537_69228 = G__69253;
count__68538_69229 = G__69254;
i__68539_69230 = G__69255;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_69226);
}


var G__69256 = cljs.core.next(seq__68450_69219__$1);
var G__69257 = null;
var G__69258 = (0);
var G__69259 = (0);
seq__68450_69179 = G__69256;
chunk__68451_69180 = G__69257;
count__68452_69181 = G__69258;
i__68453_69182 = G__69259;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__68591 = cljs.core.seq(node);
var chunk__68592 = null;
var count__68593 = (0);
var i__68594 = (0);
while(true){
if((i__68594 < count__68593)){
var n = chunk__68592.cljs$core$IIndexed$_nth$arity$2(null,i__68594);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__69262 = seq__68591;
var G__69263 = chunk__68592;
var G__69264 = count__68593;
var G__69265 = (i__68594 + (1));
seq__68591 = G__69262;
chunk__68592 = G__69263;
count__68593 = G__69264;
i__68594 = G__69265;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__68591);
if(temp__5753__auto__){
var seq__68591__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68591__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__68591__$1);
var G__69266 = cljs.core.chunk_rest(seq__68591__$1);
var G__69267 = c__4649__auto__;
var G__69268 = cljs.core.count(c__4649__auto__);
var G__69269 = (0);
seq__68591 = G__69266;
chunk__68592 = G__69267;
count__68593 = G__69268;
i__68594 = G__69269;
continue;
} else {
var n = cljs.core.first(seq__68591__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__69270 = cljs.core.next(seq__68591__$1);
var G__69271 = null;
var G__69272 = (0);
var G__69273 = (0);
seq__68591 = G__69270;
chunk__68592 = G__69271;
count__68593 = G__69272;
i__68594 = G__69273;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__68609 = arguments.length;
switch (G__68609) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__68620 = arguments.length;
switch (G__68620) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__68637 = arguments.length;
switch (G__68637) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4835__auto__ = [];
var len__4829__auto___69278 = arguments.length;
var i__4830__auto___69279 = (0);
while(true){
if((i__4830__auto___69279 < len__4829__auto___69278)){
args__4835__auto__.push((arguments[i__4830__auto___69279]));

var G__69280 = (i__4830__auto___69279 + (1));
i__4830__auto___69279 = G__69280;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__68647_69281 = cljs.core.seq(nodes);
var chunk__68648_69282 = null;
var count__68649_69283 = (0);
var i__68650_69284 = (0);
while(true){
if((i__68650_69284 < count__68649_69283)){
var node_69285 = chunk__68648_69282.cljs$core$IIndexed$_nth$arity$2(null,i__68650_69284);
fragment.appendChild(shadow.dom._to_dom(node_69285));


var G__69286 = seq__68647_69281;
var G__69287 = chunk__68648_69282;
var G__69288 = count__68649_69283;
var G__69289 = (i__68650_69284 + (1));
seq__68647_69281 = G__69286;
chunk__68648_69282 = G__69287;
count__68649_69283 = G__69288;
i__68650_69284 = G__69289;
continue;
} else {
var temp__5753__auto___69290 = cljs.core.seq(seq__68647_69281);
if(temp__5753__auto___69290){
var seq__68647_69291__$1 = temp__5753__auto___69290;
if(cljs.core.chunked_seq_QMARK_(seq__68647_69291__$1)){
var c__4649__auto___69293 = cljs.core.chunk_first(seq__68647_69291__$1);
var G__69294 = cljs.core.chunk_rest(seq__68647_69291__$1);
var G__69295 = c__4649__auto___69293;
var G__69296 = cljs.core.count(c__4649__auto___69293);
var G__69297 = (0);
seq__68647_69281 = G__69294;
chunk__68648_69282 = G__69295;
count__68649_69283 = G__69296;
i__68650_69284 = G__69297;
continue;
} else {
var node_69298 = cljs.core.first(seq__68647_69291__$1);
fragment.appendChild(shadow.dom._to_dom(node_69298));


var G__69299 = cljs.core.next(seq__68647_69291__$1);
var G__69300 = null;
var G__69301 = (0);
var G__69302 = (0);
seq__68647_69281 = G__69299;
chunk__68648_69282 = G__69300;
count__68649_69283 = G__69301;
i__68650_69284 = G__69302;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq68646){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68646));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__68659_69303 = cljs.core.seq(scripts);
var chunk__68660_69304 = null;
var count__68661_69305 = (0);
var i__68662_69306 = (0);
while(true){
if((i__68662_69306 < count__68661_69305)){
var vec__68677_69307 = chunk__68660_69304.cljs$core$IIndexed$_nth$arity$2(null,i__68662_69306);
var script_tag_69308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68677_69307,(0),null);
var script_body_69309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68677_69307,(1),null);
eval(script_body_69309);


var G__69313 = seq__68659_69303;
var G__69314 = chunk__68660_69304;
var G__69315 = count__68661_69305;
var G__69316 = (i__68662_69306 + (1));
seq__68659_69303 = G__69313;
chunk__68660_69304 = G__69314;
count__68661_69305 = G__69315;
i__68662_69306 = G__69316;
continue;
} else {
var temp__5753__auto___69317 = cljs.core.seq(seq__68659_69303);
if(temp__5753__auto___69317){
var seq__68659_69318__$1 = temp__5753__auto___69317;
if(cljs.core.chunked_seq_QMARK_(seq__68659_69318__$1)){
var c__4649__auto___69319 = cljs.core.chunk_first(seq__68659_69318__$1);
var G__69320 = cljs.core.chunk_rest(seq__68659_69318__$1);
var G__69321 = c__4649__auto___69319;
var G__69322 = cljs.core.count(c__4649__auto___69319);
var G__69323 = (0);
seq__68659_69303 = G__69320;
chunk__68660_69304 = G__69321;
count__68661_69305 = G__69322;
i__68662_69306 = G__69323;
continue;
} else {
var vec__68682_69324 = cljs.core.first(seq__68659_69318__$1);
var script_tag_69325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68682_69324,(0),null);
var script_body_69326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68682_69324,(1),null);
eval(script_body_69326);


var G__69327 = cljs.core.next(seq__68659_69318__$1);
var G__69328 = null;
var G__69329 = (0);
var G__69330 = (0);
seq__68659_69303 = G__69327;
chunk__68660_69304 = G__69328;
count__68661_69305 = G__69329;
i__68662_69306 = G__69330;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__68691){
var vec__68692 = p__68691;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68692,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68692,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__68717 = arguments.length;
switch (G__68717) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__68746 = cljs.core.seq(style_keys);
var chunk__68747 = null;
var count__68748 = (0);
var i__68749 = (0);
while(true){
if((i__68749 < count__68748)){
var it = chunk__68747.cljs$core$IIndexed$_nth$arity$2(null,i__68749);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__69338 = seq__68746;
var G__69339 = chunk__68747;
var G__69340 = count__68748;
var G__69341 = (i__68749 + (1));
seq__68746 = G__69338;
chunk__68747 = G__69339;
count__68748 = G__69340;
i__68749 = G__69341;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__68746);
if(temp__5753__auto__){
var seq__68746__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68746__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__68746__$1);
var G__69342 = cljs.core.chunk_rest(seq__68746__$1);
var G__69343 = c__4649__auto__;
var G__69344 = cljs.core.count(c__4649__auto__);
var G__69345 = (0);
seq__68746 = G__69342;
chunk__68747 = G__69343;
count__68748 = G__69344;
i__68749 = G__69345;
continue;
} else {
var it = cljs.core.first(seq__68746__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__69346 = cljs.core.next(seq__68746__$1);
var G__69347 = null;
var G__69348 = (0);
var G__69349 = (0);
seq__68746 = G__69346;
chunk__68747 = G__69347;
count__68748 = G__69348;
i__68749 = G__69349;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k68770,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__68781 = k68770;
var G__68781__$1 = (((G__68781 instanceof cljs.core.Keyword))?G__68781.fqn:null);
switch (G__68781__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k68770,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__68783){
var vec__68785 = p__68783;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68785,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68785,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__68769){
var self__ = this;
var G__68769__$1 = this;
return (new cljs.core.RecordIter((0),G__68769__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this68771,other68772){
var self__ = this;
var this68771__$1 = this;
return (((!((other68772 == null)))) && ((((this68771__$1.constructor === other68772.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68771__$1.x,other68772.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68771__$1.y,other68772.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68771__$1.__extmap,other68772.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k68770){
var self__ = this;
var this__4479__auto____$1 = this;
var G__68814 = k68770;
var G__68814__$1 = (((G__68814 instanceof cljs.core.Keyword))?G__68814.fqn:null);
switch (G__68814__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k68770);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__68769){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__68818 = cljs.core.keyword_identical_QMARK_;
var expr__68819 = k__4481__auto__;
if(cljs.core.truth_((pred__68818.cljs$core$IFn$_invoke$arity$2 ? pred__68818.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__68819) : pred__68818.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__68819)))){
return (new shadow.dom.Coordinate(G__68769,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__68818.cljs$core$IFn$_invoke$arity$2 ? pred__68818.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__68819) : pred__68818.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__68819)))){
return (new shadow.dom.Coordinate(self__.x,G__68769,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__68769),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__68769){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__68769,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__68773){
var extmap__4512__auto__ = (function (){var G__68841 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__68773,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__68773)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__68841);
} else {
return G__68841;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__68773),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__68773),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k68860,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__68871 = k68860;
var G__68871__$1 = (((G__68871 instanceof cljs.core.Keyword))?G__68871.fqn:null);
switch (G__68871__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k68860,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__68881){
var vec__68882 = p__68881;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68882,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68882,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__68859){
var self__ = this;
var G__68859__$1 = this;
return (new cljs.core.RecordIter((0),G__68859__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this68861,other68862){
var self__ = this;
var this68861__$1 = this;
return (((!((other68862 == null)))) && ((((this68861__$1.constructor === other68862.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68861__$1.w,other68862.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68861__$1.h,other68862.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68861__$1.__extmap,other68862.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k68860){
var self__ = this;
var this__4479__auto____$1 = this;
var G__68902 = k68860;
var G__68902__$1 = (((G__68902 instanceof cljs.core.Keyword))?G__68902.fqn:null);
switch (G__68902__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k68860);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__68859){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__68906 = cljs.core.keyword_identical_QMARK_;
var expr__68907 = k__4481__auto__;
if(cljs.core.truth_((pred__68906.cljs$core$IFn$_invoke$arity$2 ? pred__68906.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__68907) : pred__68906.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__68907)))){
return (new shadow.dom.Size(G__68859,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__68906.cljs$core$IFn$_invoke$arity$2 ? pred__68906.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__68907) : pred__68906.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__68907)))){
return (new shadow.dom.Size(self__.w,G__68859,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__68859),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__68859){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__68859,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__68864){
var extmap__4512__auto__ = (function (){var G__68922 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__68864,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__68864)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__68922);
} else {
return G__68922;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__68864),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__68864),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__69406 = (i + (1));
var G__69407 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__69406;
ret = G__69407;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68947){
var vec__68949 = p__68947;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68949,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68949,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__68958 = arguments.length;
switch (G__68958) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__69415 = ps;
var G__69416 = (i + (1));
el__$1 = G__69415;
i = G__69416;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__68975 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68975,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68975,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68975,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__68979_69421 = cljs.core.seq(props);
var chunk__68980_69422 = null;
var count__68981_69423 = (0);
var i__68982_69424 = (0);
while(true){
if((i__68982_69424 < count__68981_69423)){
var vec__68993_69425 = chunk__68980_69422.cljs$core$IIndexed$_nth$arity$2(null,i__68982_69424);
var k_69426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68993_69425,(0),null);
var v_69427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68993_69425,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_69426);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_69426),v_69427);


var G__69428 = seq__68979_69421;
var G__69429 = chunk__68980_69422;
var G__69430 = count__68981_69423;
var G__69431 = (i__68982_69424 + (1));
seq__68979_69421 = G__69428;
chunk__68980_69422 = G__69429;
count__68981_69423 = G__69430;
i__68982_69424 = G__69431;
continue;
} else {
var temp__5753__auto___69432 = cljs.core.seq(seq__68979_69421);
if(temp__5753__auto___69432){
var seq__68979_69433__$1 = temp__5753__auto___69432;
if(cljs.core.chunked_seq_QMARK_(seq__68979_69433__$1)){
var c__4649__auto___69434 = cljs.core.chunk_first(seq__68979_69433__$1);
var G__69435 = cljs.core.chunk_rest(seq__68979_69433__$1);
var G__69436 = c__4649__auto___69434;
var G__69437 = cljs.core.count(c__4649__auto___69434);
var G__69438 = (0);
seq__68979_69421 = G__69435;
chunk__68980_69422 = G__69436;
count__68981_69423 = G__69437;
i__68982_69424 = G__69438;
continue;
} else {
var vec__68999_69439 = cljs.core.first(seq__68979_69433__$1);
var k_69440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68999_69439,(0),null);
var v_69441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68999_69439,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_69440);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_69440),v_69441);


var G__69442 = cljs.core.next(seq__68979_69433__$1);
var G__69443 = null;
var G__69444 = (0);
var G__69445 = (0);
seq__68979_69421 = G__69442;
chunk__68980_69422 = G__69443;
count__68981_69423 = G__69444;
i__68982_69424 = G__69445;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__69016 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69016,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69016,(1),null);
var seq__69019_69446 = cljs.core.seq(node_children);
var chunk__69021_69447 = null;
var count__69022_69448 = (0);
var i__69023_69449 = (0);
while(true){
if((i__69023_69449 < count__69022_69448)){
var child_struct_69450 = chunk__69021_69447.cljs$core$IIndexed$_nth$arity$2(null,i__69023_69449);
if((!((child_struct_69450 == null)))){
if(typeof child_struct_69450 === 'string'){
var text_69451 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_69451),child_struct_69450].join(''));
} else {
var children_69452 = shadow.dom.svg_node(child_struct_69450);
if(cljs.core.seq_QMARK_(children_69452)){
var seq__69060_69453 = cljs.core.seq(children_69452);
var chunk__69062_69454 = null;
var count__69063_69455 = (0);
var i__69064_69456 = (0);
while(true){
if((i__69064_69456 < count__69063_69455)){
var child_69457 = chunk__69062_69454.cljs$core$IIndexed$_nth$arity$2(null,i__69064_69456);
if(cljs.core.truth_(child_69457)){
node.appendChild(child_69457);


var G__69458 = seq__69060_69453;
var G__69459 = chunk__69062_69454;
var G__69460 = count__69063_69455;
var G__69461 = (i__69064_69456 + (1));
seq__69060_69453 = G__69458;
chunk__69062_69454 = G__69459;
count__69063_69455 = G__69460;
i__69064_69456 = G__69461;
continue;
} else {
var G__69462 = seq__69060_69453;
var G__69463 = chunk__69062_69454;
var G__69464 = count__69063_69455;
var G__69465 = (i__69064_69456 + (1));
seq__69060_69453 = G__69462;
chunk__69062_69454 = G__69463;
count__69063_69455 = G__69464;
i__69064_69456 = G__69465;
continue;
}
} else {
var temp__5753__auto___69466 = cljs.core.seq(seq__69060_69453);
if(temp__5753__auto___69466){
var seq__69060_69467__$1 = temp__5753__auto___69466;
if(cljs.core.chunked_seq_QMARK_(seq__69060_69467__$1)){
var c__4649__auto___69468 = cljs.core.chunk_first(seq__69060_69467__$1);
var G__69469 = cljs.core.chunk_rest(seq__69060_69467__$1);
var G__69470 = c__4649__auto___69468;
var G__69471 = cljs.core.count(c__4649__auto___69468);
var G__69472 = (0);
seq__69060_69453 = G__69469;
chunk__69062_69454 = G__69470;
count__69063_69455 = G__69471;
i__69064_69456 = G__69472;
continue;
} else {
var child_69473 = cljs.core.first(seq__69060_69467__$1);
if(cljs.core.truth_(child_69473)){
node.appendChild(child_69473);


var G__69474 = cljs.core.next(seq__69060_69467__$1);
var G__69475 = null;
var G__69476 = (0);
var G__69477 = (0);
seq__69060_69453 = G__69474;
chunk__69062_69454 = G__69475;
count__69063_69455 = G__69476;
i__69064_69456 = G__69477;
continue;
} else {
var G__69478 = cljs.core.next(seq__69060_69467__$1);
var G__69479 = null;
var G__69480 = (0);
var G__69481 = (0);
seq__69060_69453 = G__69478;
chunk__69062_69454 = G__69479;
count__69063_69455 = G__69480;
i__69064_69456 = G__69481;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_69452);
}
}


var G__69486 = seq__69019_69446;
var G__69487 = chunk__69021_69447;
var G__69488 = count__69022_69448;
var G__69489 = (i__69023_69449 + (1));
seq__69019_69446 = G__69486;
chunk__69021_69447 = G__69487;
count__69022_69448 = G__69488;
i__69023_69449 = G__69489;
continue;
} else {
var G__69490 = seq__69019_69446;
var G__69491 = chunk__69021_69447;
var G__69492 = count__69022_69448;
var G__69493 = (i__69023_69449 + (1));
seq__69019_69446 = G__69490;
chunk__69021_69447 = G__69491;
count__69022_69448 = G__69492;
i__69023_69449 = G__69493;
continue;
}
} else {
var temp__5753__auto___69494 = cljs.core.seq(seq__69019_69446);
if(temp__5753__auto___69494){
var seq__69019_69495__$1 = temp__5753__auto___69494;
if(cljs.core.chunked_seq_QMARK_(seq__69019_69495__$1)){
var c__4649__auto___69496 = cljs.core.chunk_first(seq__69019_69495__$1);
var G__69497 = cljs.core.chunk_rest(seq__69019_69495__$1);
var G__69498 = c__4649__auto___69496;
var G__69499 = cljs.core.count(c__4649__auto___69496);
var G__69500 = (0);
seq__69019_69446 = G__69497;
chunk__69021_69447 = G__69498;
count__69022_69448 = G__69499;
i__69023_69449 = G__69500;
continue;
} else {
var child_struct_69501 = cljs.core.first(seq__69019_69495__$1);
if((!((child_struct_69501 == null)))){
if(typeof child_struct_69501 === 'string'){
var text_69502 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_69502),child_struct_69501].join(''));
} else {
var children_69503 = shadow.dom.svg_node(child_struct_69501);
if(cljs.core.seq_QMARK_(children_69503)){
var seq__69073_69504 = cljs.core.seq(children_69503);
var chunk__69075_69505 = null;
var count__69076_69506 = (0);
var i__69077_69507 = (0);
while(true){
if((i__69077_69507 < count__69076_69506)){
var child_69508 = chunk__69075_69505.cljs$core$IIndexed$_nth$arity$2(null,i__69077_69507);
if(cljs.core.truth_(child_69508)){
node.appendChild(child_69508);


var G__69509 = seq__69073_69504;
var G__69510 = chunk__69075_69505;
var G__69511 = count__69076_69506;
var G__69512 = (i__69077_69507 + (1));
seq__69073_69504 = G__69509;
chunk__69075_69505 = G__69510;
count__69076_69506 = G__69511;
i__69077_69507 = G__69512;
continue;
} else {
var G__69513 = seq__69073_69504;
var G__69514 = chunk__69075_69505;
var G__69515 = count__69076_69506;
var G__69516 = (i__69077_69507 + (1));
seq__69073_69504 = G__69513;
chunk__69075_69505 = G__69514;
count__69076_69506 = G__69515;
i__69077_69507 = G__69516;
continue;
}
} else {
var temp__5753__auto___69517__$1 = cljs.core.seq(seq__69073_69504);
if(temp__5753__auto___69517__$1){
var seq__69073_69518__$1 = temp__5753__auto___69517__$1;
if(cljs.core.chunked_seq_QMARK_(seq__69073_69518__$1)){
var c__4649__auto___69519 = cljs.core.chunk_first(seq__69073_69518__$1);
var G__69520 = cljs.core.chunk_rest(seq__69073_69518__$1);
var G__69521 = c__4649__auto___69519;
var G__69522 = cljs.core.count(c__4649__auto___69519);
var G__69523 = (0);
seq__69073_69504 = G__69520;
chunk__69075_69505 = G__69521;
count__69076_69506 = G__69522;
i__69077_69507 = G__69523;
continue;
} else {
var child_69524 = cljs.core.first(seq__69073_69518__$1);
if(cljs.core.truth_(child_69524)){
node.appendChild(child_69524);


var G__69525 = cljs.core.next(seq__69073_69518__$1);
var G__69526 = null;
var G__69527 = (0);
var G__69528 = (0);
seq__69073_69504 = G__69525;
chunk__69075_69505 = G__69526;
count__69076_69506 = G__69527;
i__69077_69507 = G__69528;
continue;
} else {
var G__69529 = cljs.core.next(seq__69073_69518__$1);
var G__69530 = null;
var G__69531 = (0);
var G__69532 = (0);
seq__69073_69504 = G__69529;
chunk__69075_69505 = G__69530;
count__69076_69506 = G__69531;
i__69077_69507 = G__69532;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_69503);
}
}


var G__69533 = cljs.core.next(seq__69019_69495__$1);
var G__69534 = null;
var G__69535 = (0);
var G__69536 = (0);
seq__69019_69446 = G__69533;
chunk__69021_69447 = G__69534;
count__69022_69448 = G__69535;
i__69023_69449 = G__69536;
continue;
} else {
var G__69537 = cljs.core.next(seq__69019_69495__$1);
var G__69538 = null;
var G__69539 = (0);
var G__69540 = (0);
seq__69019_69446 = G__69537;
chunk__69021_69447 = G__69538;
count__69022_69448 = G__69539;
i__69023_69449 = G__69540;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___69544 = arguments.length;
var i__4830__auto___69545 = (0);
while(true){
if((i__4830__auto___69545 < len__4829__auto___69544)){
args__4835__auto__.push((arguments[i__4830__auto___69545]));

var G__69546 = (i__4830__auto___69545 + (1));
i__4830__auto___69545 = G__69546;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq69082){
var G__69083 = cljs.core.first(seq69082);
var seq69082__$1 = cljs.core.next(seq69082);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69083,seq69082__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__69090 = arguments.length;
switch (G__69090) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__66272__auto___69548 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__66273__auto__ = (function (){var switch__66149__auto__ = (function (state_69095){
var state_val_69096 = (state_69095[(1)]);
if((state_val_69096 === (1))){
var state_69095__$1 = state_69095;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69095__$1,(2),once_or_cleanup);
} else {
if((state_val_69096 === (2))){
var inst_69092 = (state_69095[(2)]);
var inst_69093 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_69095__$1 = (function (){var statearr_69097 = state_69095;
(statearr_69097[(7)] = inst_69092);

return statearr_69097;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_69095__$1,inst_69093);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__66150__auto__ = null;
var shadow$dom$state_machine__66150__auto____0 = (function (){
var statearr_69098 = [null,null,null,null,null,null,null,null];
(statearr_69098[(0)] = shadow$dom$state_machine__66150__auto__);

(statearr_69098[(1)] = (1));

return statearr_69098;
});
var shadow$dom$state_machine__66150__auto____1 = (function (state_69095){
while(true){
var ret_value__66151__auto__ = (function (){try{while(true){
var result__66152__auto__ = switch__66149__auto__(state_69095);
if(cljs.core.keyword_identical_QMARK_(result__66152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66152__auto__;
}
break;
}
}catch (e69099){if((e69099 instanceof Object)){
var ex__66153__auto__ = e69099;
var statearr_69100_69552 = state_69095;
(statearr_69100_69552[(5)] = ex__66153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69099;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69553 = state_69095;
state_69095 = G__69553;
continue;
} else {
return ret_value__66151__auto__;
}
break;
}
});
shadow$dom$state_machine__66150__auto__ = function(state_69095){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__66150__auto____0.call(this);
case 1:
return shadow$dom$state_machine__66150__auto____1.call(this,state_69095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__66150__auto____0;
shadow$dom$state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__66150__auto____1;
return shadow$dom$state_machine__66150__auto__;
})()
})();
var state__66274__auto__ = (function (){var statearr_69101 = f__66273__auto__();
(statearr_69101[(6)] = c__66272__auto___69548);

return statearr_69101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__66274__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
