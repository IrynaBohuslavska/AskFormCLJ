goog.provide('reitit.coercion.spec');
reitit.coercion.spec.string_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.core.strip_extra_keys_transformer,spec_tools.core.string_transformer], 0));
reitit.coercion.spec.json_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.core.strip_extra_keys_transformer,spec_tools.core.json_transformer], 0));
reitit.coercion.spec.strip_extra_keys_transformer = spec_tools.core.strip_extra_keys_transformer;
reitit.coercion.spec.no_op_transformer = (function (){
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.spec !== 'undefined') && (typeof reitit.coercion.spec.t_reitit$coercion$spec63576 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {spec_tools.core.Transformer}
 * @implements {cljs.core.IWithMeta}
*/
reitit.coercion.spec.t_reitit$coercion$spec63576 = (function (meta63577){
this.meta63577 = meta63577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.coercion.spec.t_reitit$coercion$spec63576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63578,meta63577__$1){
var self__ = this;
var _63578__$1 = this;
return (new reitit.coercion.spec.t_reitit$coercion$spec63576(meta63577__$1));
}));

(reitit.coercion.spec.t_reitit$coercion$spec63576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63578){
var self__ = this;
var _63578__$1 = this;
return self__.meta63577;
}));

(reitit.coercion.spec.t_reitit$coercion$spec63576.prototype.spec_tools$core$Transformer$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.coercion.spec.t_reitit$coercion$spec63576.prototype.spec_tools$core$Transformer$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("reitit.coercion.spec","no-op","reitit.coercion.spec/no-op",-549362779);
}));

(reitit.coercion.spec.t_reitit$coercion$spec63576.prototype.spec_tools$core$Transformer$_encoder$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return null;
}));

(reitit.coercion.spec.t_reitit$coercion$spec63576.prototype.spec_tools$core$Transformer$_decoder$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return null;
}));

(reitit.coercion.spec.t_reitit$coercion$spec63576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta63577","meta63577",-92421471,null)], null);
}));

(reitit.coercion.spec.t_reitit$coercion$spec63576.cljs$lang$type = true);

(reitit.coercion.spec.t_reitit$coercion$spec63576.cljs$lang$ctorStr = "reitit.coercion.spec/t_reitit$coercion$spec63576");

(reitit.coercion.spec.t_reitit$coercion$spec63576.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"reitit.coercion.spec/t_reitit$coercion$spec63576");
}));

/**
 * Positional factory function for reitit.coercion.spec/t_reitit$coercion$spec63576.
 */
reitit.coercion.spec.__GT_t_reitit$coercion$spec63576 = (function reitit$coercion$spec$__GT_t_reitit$coercion$spec63576(meta63577){
return (new reitit.coercion.spec.t_reitit$coercion$spec63576(meta63577));
});

}

return (new reitit.coercion.spec.t_reitit$coercion$spec63576(cljs.core.PersistentArrayMap.EMPTY));
})()
;

/**
 * @interface
 */
reitit.coercion.spec.IntoSpec = function(){};

var reitit$coercion$spec$IntoSpec$into_spec$dyn_63614 = (function (this$,name){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.coercion.spec.into_spec[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__4522__auto__.call(null,this$,name));
} else {
var m__4519__auto__ = (reitit.coercion.spec.into_spec["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__4519__auto__.call(null,this$,name));
} else {
throw cljs.core.missing_protocol("IntoSpec.into-spec",this$);
}
}
});
reitit.coercion.spec.into_spec = (function reitit$coercion$spec$into_spec(this$,name){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$spec$IntoSpec$into_spec$arity$2 == null)))))){
return this$.reitit$coercion$spec$IntoSpec$into_spec$arity$2(this$,name);
} else {
return reitit$coercion$spec$IntoSpec$into_spec$dyn_63614(this$,name);
}
});

reitit.coercion.spec.ensure_name = (function reitit$coercion$spec$ensure_name(_QMARK_name){
var or__4223__auto__ = _QMARK_name;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("spec",cljs.core.name(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("")));
}
});
(cljs.core.PersistentArrayMap.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1),new cljs.core.Keyword(null,"name","name",1843675177));
}));

(cljs.core.PersistentHashMap.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1),new cljs.core.Keyword(null,"name","name",1843675177));
}));

(cljs.core.PersistentVector.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1),new cljs.core.Keyword(null,"name","name",1843675177));
}));

(spec_tools.data_spec.Maybe.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(spec_tools.data_spec.Maybe.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1);
}));

(spec_tools.core.Spec.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(spec_tools.core.Spec.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

goog.object.set(reitit.coercion.spec.IntoSpec,"_",true);

goog.object.set(reitit.coercion.spec.into_spec,"_",(function (this$,_){
return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),this$], null));
}));

goog.object.set(reitit.coercion.spec.IntoSpec,"null",true);

goog.object.set(reitit.coercion.spec.into_spec,"null",(function (this$,_){
return null;
}));
reitit.coercion.spec.stringify_pred = (function reitit$coercion$spec$stringify_pred(pred){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.seq_QMARK_(pred))?cljs.core.seq(pred):pred));
});
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.spec !== 'undefined') && (typeof reitit.coercion.spec.coerce_response_QMARK_ !== 'undefined')){
} else {
reitit.coercion.spec.coerce_response_QMARK_ = (function (){var method_table__4712__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4713__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4714__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4715__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4716__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("reitit.coercion.spec","default","reitit.coercion.spec/default",-1835621218)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__63582 = cljs.core.get_global_hierarchy;
return (fexpr__63582.cljs$core$IFn$_invoke$arity$0 ? fexpr__63582.cljs$core$IFn$_invoke$arity$0() : fexpr__63582.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reitit.coercion.spec","coerce-response?"),cljs.core.identity,new cljs.core.Keyword("reitit.coercion.spec","default","reitit.coercion.spec/default",-1835621218),hierarchy__4716__auto__,method_table__4712__auto__,prefer_table__4713__auto__,method_cache__4714__auto__,cached_hierarchy__4715__auto__));
})();
}
reitit.coercion.spec.coerce_response_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("reitit.coercion.spec","default","reitit.coercion.spec/default",-1835621218),(function (_){
return true;
}));
reitit.coercion.spec.default_options = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coerce-response?","coerce-response?",1125033091),reitit.coercion.spec.coerce_response_QMARK_,new cljs.core.Keyword(null,"transformers","transformers",-734201565),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.spec.strip_extra_keys_transformer,new cljs.core.Keyword(null,"formats","formats",-1397890976),new cljs.core.PersistentArrayMap(null, 1, ["application/json",reitit.coercion.spec.json_transformer], null)], null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.spec.string_transformer], null),new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.spec.no_op_transformer], null)], null)], null);
reitit.coercion.spec.create = (function reitit$coercion$spec$create(p__63585){
var map__63586 = p__63585;
var map__63586__$1 = cljs.core.__destructure_map(map__63586);
var opts = map__63586__$1;
var transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63586__$1,new cljs.core.Keyword(null,"transformers","transformers",-734201565));
var coerce_response_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63586__$1,new cljs.core.Keyword(null,"coerce-response?","coerce-response?",1125033091));
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.spec !== 'undefined') && (typeof reitit.coercion.spec.t_reitit$coercion$spec63587 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {reitit.coercion.Coercion}
*/
reitit.coercion.spec.t_reitit$coercion$spec63587 = (function (p__63585,map__63586,opts,transformers,coerce_response_QMARK_,meta63588){
this.p__63585 = p__63585;
this.map__63586 = map__63586;
this.opts = opts;
this.transformers = transformers;
this.coerce_response_QMARK_ = coerce_response_QMARK_;
this.meta63588 = meta63588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.coercion.spec.t_reitit$coercion$spec63587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63589,meta63588__$1){
var self__ = this;
var _63589__$1 = this;
return (new reitit.coercion.spec.t_reitit$coercion$spec63587(self__.p__63585,self__.map__63586,self__.opts,self__.transformers,self__.coerce_response_QMARK_,meta63588__$1));
}));

(reitit.coercion.spec.t_reitit$coercion$spec63587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63589){
var self__ = this;
var _63589__$1 = this;
return self__.meta63588;
}));

(reitit.coercion.spec.t_reitit$coercion$spec63587.prototype.reitit$coercion$Coercion$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.coercion.spec.t_reitit$coercion$spec63587.prototype.reitit$coercion$Coercion$_get_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"spec","spec",347520401);
}));

(reitit.coercion.spec.t_reitit$coercion$spec63587.prototype.reitit$coercion$Coercion$_get_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.coercion.spec.t_reitit$coercion$spec63587.prototype.reitit$coercion$Coercion$_get_apidocs$arity$3 = (function (this$,specification,p__63590){
var self__ = this;
var map__63591 = p__63590;
var map__63591__$1 = cljs.core.__destructure_map(map__63591);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63591__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var responses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63591__$1,new cljs.core.Keyword(null,"responses","responses",1257546453));
var this$__$1 = this;
var G__63592 = specification;
var G__63592__$1 = (((G__63592 instanceof cljs.core.Keyword))?G__63592.fqn:null);
switch (G__63592__$1) {
case "swagger":
return spec_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(parameters)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("spec-tools.swagger.core","parameters","spec-tools.swagger.core/parameters",-239005676),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(parameters),(function (){var iter__4622__auto__ = (function reitit$coercion$spec$create_$_iter__63593(s__63594){
return (new cljs.core.LazySeq(null,(function (){
var s__63594__$1 = s__63594;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__63594__$1);
if(temp__5753__auto__){
var s__63594__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63594__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__63594__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__63596 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__63595 = (0);
while(true){
if((i__63595 < size__4621__auto__)){
var vec__63597 = cljs.core._nth(c__4620__auto__,i__63595);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63597,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63597,(1),null);
cljs.core.chunk_append(b__63596,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,v,null)], null));

var G__63616 = (i__63595 + (1));
i__63595 = G__63616;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63596),reitit$coercion$spec$create_$_iter__63593(cljs.core.chunk_rest(s__63594__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63596),null);
}
} else {
var vec__63600 = cljs.core.first(s__63594__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63600,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63600,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,v,null)], null),reitit$coercion$spec$create_$_iter__63593(cljs.core.rest(s__63594__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(parameters);
})())], null):null),(cljs.core.truth_(responses)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("spec-tools.swagger.core","responses","spec-tools.swagger.core/responses",308528333),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(responses),(function (){var iter__4622__auto__ = (function reitit$coercion$spec$create_$_iter__63603(s__63604){
return (new cljs.core.LazySeq(null,(function (){
var s__63604__$1 = s__63604;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__63604__$1);
if(temp__5753__auto__){
var s__63604__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63604__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__63604__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__63606 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__63605 = (0);
while(true){
if((i__63605 < size__4621__auto__)){
var vec__63607 = cljs.core._nth(c__4620__auto__,i__63605);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63607,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63607,(1),null);
cljs.core.chunk_append(b__63606,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var $ = response;
var $__$1 = clojure.set.rename_keys($,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1($__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3($__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791),((function (i__63605,$,$__$1,vec__63607,k,response,c__4620__auto__,size__4621__auto__,b__63606,s__63604__$2,temp__5753__auto__,G__63592,G__63592__$1,this$__$1,map__63591,map__63591__$1,parameters,responses,map__63586,map__63586__$1,opts,transformers,coerce_response_QMARK_){
return (function (p1__63583_SHARP_){
return this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,p1__63583_SHARP_,null);
});})(i__63605,$,$__$1,vec__63607,k,response,c__4620__auto__,size__4621__auto__,b__63606,s__63604__$2,temp__5753__auto__,G__63592,G__63592__$1,this$__$1,map__63591,map__63591__$1,parameters,responses,map__63586,map__63586__$1,opts,transformers,coerce_response_QMARK_))
);
} else {
return $__$1;
}
})()], null));

var G__63617 = (i__63605 + (1));
i__63605 = G__63617;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63606),reitit$coercion$spec$create_$_iter__63603(cljs.core.chunk_rest(s__63604__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63606),null);
}
} else {
var vec__63610 = cljs.core.first(s__63604__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63610,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63610,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var $ = response;
var $__$1 = clojure.set.rename_keys($,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1($__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3($__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791),((function ($,$__$1,vec__63610,k,response,s__63604__$2,temp__5753__auto__,G__63592,G__63592__$1,this$__$1,map__63591,map__63591__$1,parameters,responses,map__63586,map__63586__$1,opts,transformers,coerce_response_QMARK_){
return (function (p1__63583_SHARP_){
return this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,p1__63583_SHARP_,null);
});})($,$__$1,vec__63610,k,response,s__63604__$2,temp__5753__auto__,G__63592,G__63592__$1,this$__$1,map__63591,map__63591__$1,parameters,responses,map__63586,map__63586__$1,opts,transformers,coerce_response_QMARK_))
);
} else {
return $__$1;
}
})()], null),reitit$coercion$spec$create_$_iter__63603(cljs.core.rest(s__63604__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(responses);
})())], null):null)], 0)));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't produce Spec apidocs for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(specification)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"specification","specification",22067900),specification,new cljs.core.Keyword(null,"coercion","coercion",904067157),new cljs.core.Keyword(null,"spec","spec",347520401)], null));

}
}));

(reitit.coercion.spec.t_reitit$coercion$spec63587.prototype.reitit$coercion$Coercion$_compile_model$arity$3 = (function (_,model,name){
var self__ = this;
var ___$1 = this;
return reitit.coercion.spec.into_spec(model,name);
}));

(reitit.coercion.spec.t_reitit$coercion$spec63587.prototype.reitit$coercion$Coercion$_open_model$arity$2 = (function (_,spec){
var self__ = this;
var ___$1 = this;
return spec;
}));

(reitit.coercion.spec.t_reitit$coercion$spec63587.prototype.reitit$coercion$Coercion$_encode_error$arity$2 = (function (_,error){
var self__ = this;
var ___$1 = this;
var problems = new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"problems","problems",2097327077).cljs$core$IFn$_invoke$arity$1(error));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.spec.alpha.form)),new cljs.core.Keyword(null,"problems","problems",2097327077),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__63584_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__63584_SHARP_,new cljs.core.Keyword(null,"pred","pred",1927423397),reitit.coercion.spec.stringify_pred);
}),problems));
}));

(reitit.coercion.spec.t_reitit$coercion$spec63587.prototype.reitit$coercion$Coercion$_request_coercer$arity$3 = (function (this$,type,spec){
var self__ = this;
var this$__$1 = this;
var spec__$1 = this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,spec,null);
var map__63613 = (self__.transformers.cljs$core$IFn$_invoke$arity$1 ? self__.transformers.cljs$core$IFn$_invoke$arity$1(type) : self__.transformers.call(null,type));
var map__63613__$1 = cljs.core.__destructure_map(map__63613);
var formats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63613__$1,new cljs.core.Keyword(null,"formats","formats",-1397890976));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63613__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
return (function (value,format){
var temp__5751__auto__ = (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(formats,format);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default$;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var transformer = temp__5751__auto__;
var coerced = spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$3(spec__$1,value,transformer);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,coerced)){
return coerced;
} else {
var transformed = spec_tools.core.conform.cljs$core$IFn$_invoke$arity$3(spec__$1,coerced,transformer);
if(cljs.spec.alpha.invalid_QMARK_(transformed)){
var problems = spec_tools.core.explain_data.cljs$core$IFn$_invoke$arity$3(spec__$1,coerced,transformer);
return reitit.coercion.map__GT_CoercionError(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),spec__$1,new cljs.core.Keyword(null,"problems","problems",2097327077),problems], null));
} else {
return cljs.spec.alpha.unform(spec__$1,transformed);
}
}
} else {
return value;
}
});
}));

(reitit.coercion.spec.t_reitit$coercion$spec63587.prototype.reitit$coercion$Coercion$_response_coercer$arity$2 = (function (this$,spec){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.coerce_response_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.coerce_response_QMARK_.cljs$core$IFn$_invoke$arity$1(spec) : self__.coerce_response_QMARK_.call(null,spec)))){
return this$__$1.reitit$coercion$Coercion$_request_coercer$arity$3(null,new cljs.core.Keyword(null,"response","response",-1068424192),spec);
} else {
return null;
}
}));

(reitit.coercion.spec.t_reitit$coercion$spec63587.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__63585","p__63585",861170565,null),new cljs.core.Symbol(null,"map__63586","map__63586",2005666042,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"transformers","transformers",906329962,null),new cljs.core.Symbol(null,"coerce-response?","coerce-response?",-1529402678,null),new cljs.core.Symbol(null,"meta63588","meta63588",2097880333,null)], null);
}));

(reitit.coercion.spec.t_reitit$coercion$spec63587.cljs$lang$type = true);

(reitit.coercion.spec.t_reitit$coercion$spec63587.cljs$lang$ctorStr = "reitit.coercion.spec/t_reitit$coercion$spec63587");

(reitit.coercion.spec.t_reitit$coercion$spec63587.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"reitit.coercion.spec/t_reitit$coercion$spec63587");
}));

/**
 * Positional factory function for reitit.coercion.spec/t_reitit$coercion$spec63587.
 */
reitit.coercion.spec.__GT_t_reitit$coercion$spec63587 = (function reitit$coercion$spec$create_$___GT_t_reitit$coercion$spec63587(p__63585__$1,map__63586__$2,opts__$1,transformers__$1,coerce_response_QMARK___$1,meta63588){
return (new reitit.coercion.spec.t_reitit$coercion$spec63587(p__63585__$1,map__63586__$2,opts__$1,transformers__$1,coerce_response_QMARK___$1,meta63588));
});

}

return (new reitit.coercion.spec.t_reitit$coercion$spec63587(p__63585,map__63586__$1,opts,transformers,coerce_response_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.coercion","coercion","reitit.coercion/coercion",-866612966)], null)));
});
reitit.coercion.spec.coercion = reitit.coercion.spec.create(reitit.coercion.spec.default_options);

//# sourceMappingURL=reitit.coercion.spec.js.map
