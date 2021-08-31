goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_61533 = (function (value){
var x__4521__auto__ = (((value == null))?null:value);
var m__4522__auto__ = (devtools.format._header[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4522__auto__.call(null,value));
} else {
var m__4519__auto__ = (devtools.format._header["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4519__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_61533(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_61535 = (function (value){
var x__4521__auto__ = (((value == null))?null:value);
var m__4522__auto__ = (devtools.format._has_body[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4522__auto__.call(null,value));
} else {
var m__4519__auto__ = (devtools.format._has_body["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4519__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_61535(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_61539 = (function (value){
var x__4521__auto__ = (((value == null))?null:value);
var m__4522__auto__ = (devtools.format._body[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4522__auto__.call(null,value));
} else {
var m__4519__auto__ = (devtools.format._body["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4519__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_61539(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o61366 = temp__5751__auto__;
var temp__5751__auto____$1 = (o61366["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o61367 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o61367["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o61368 = temp__5751__auto____$2;
return (o61368["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o61370 = temp__5751__auto__;
var temp__5751__auto____$1 = (o61370["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o61371 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o61371["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o61372 = temp__5751__auto____$2;
return (o61372["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o61374 = temp__5751__auto__;
var temp__5751__auto____$1 = (o61374["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o61375 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o61375["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o61376 = temp__5751__auto____$2;
return (o61376["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o61381 = temp__5751__auto__;
var temp__5751__auto____$1 = (o61381["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o61382 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o61382["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o61383 = temp__5751__auto____$2;
return (o61383["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o61384 = temp__5751__auto__;
var temp__5751__auto____$1 = (o61384["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o61385 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o61385["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o61386 = temp__5751__auto____$2;
return (o61386["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o61387 = temp__5751__auto__;
var temp__5751__auto____$1 = (o61387["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o61388 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o61388["markup"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o61389 = temp__5751__auto____$2;
return (o61389["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o61390 = temp__5751__auto__;
var temp__5751__auto____$1 = (o61390["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o61391 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o61391["markup"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o61392 = temp__5751__auto____$2;
return (o61392["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61550 = arguments.length;
var i__4830__auto___61551 = (0);
while(true){
if((i__4830__auto___61551 < len__4829__auto___61550)){
args__4835__auto__.push((arguments[i__4830__auto___61551]));

var G__61552 = (i__4830__auto___61551 + (1));
i__4830__auto___61551 = G__61552;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq61393){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61393));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61553 = arguments.length;
var i__4830__auto___61554 = (0);
while(true){
if((i__4830__auto___61554 < len__4829__auto___61553)){
args__4835__auto__.push((arguments[i__4830__auto___61554]));

var G__61555 = (i__4830__auto___61554 + (1));
i__4830__auto___61554 = G__61555;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq61426){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61426));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61560 = arguments.length;
var i__4830__auto___61561 = (0);
while(true){
if((i__4830__auto___61561 < len__4829__auto___61560)){
args__4835__auto__.push((arguments[i__4830__auto___61561]));

var G__61562 = (i__4830__auto___61561 + (1));
i__4830__auto___61561 = G__61562;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq61436){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61436));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61563 = arguments.length;
var i__4830__auto___61564 = (0);
while(true){
if((i__4830__auto___61564 < len__4829__auto___61563)){
args__4835__auto__.push((arguments[i__4830__auto___61564]));

var G__61565 = (i__4830__auto___61564 + (1));
i__4830__auto___61564 = G__61565;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq61445){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61445));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61569 = arguments.length;
var i__4830__auto___61570 = (0);
while(true){
if((i__4830__auto___61570 < len__4829__auto___61569)){
args__4835__auto__.push((arguments[i__4830__auto___61570]));

var G__61571 = (i__4830__auto___61570 + (1));
i__4830__auto___61570 = G__61571;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq61457){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61457));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61572 = arguments.length;
var i__4830__auto___61573 = (0);
while(true){
if((i__4830__auto___61573 < len__4829__auto___61572)){
args__4835__auto__.push((arguments[i__4830__auto___61573]));

var G__61574 = (i__4830__auto___61573 + (1));
i__4830__auto___61573 = G__61574;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq61480){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61480));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61580 = arguments.length;
var i__4830__auto___61582 = (0);
while(true){
if((i__4830__auto___61582 < len__4829__auto___61580)){
args__4835__auto__.push((arguments[i__4830__auto___61582]));

var G__61583 = (i__4830__auto___61582 + (1));
i__4830__auto___61582 = G__61583;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq61485){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61485));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61586 = arguments.length;
var i__4830__auto___61587 = (0);
while(true){
if((i__4830__auto___61587 < len__4829__auto___61586)){
args__4835__auto__.push((arguments[i__4830__auto___61587]));

var G__61588 = (i__4830__auto___61587 + (1));
i__4830__auto___61587 = G__61588;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__61498){
var vec__61499 = p__61498;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61499,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__61490_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__61490_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq61492){
var G__61493 = cljs.core.first(seq61492);
var seq61492__$1 = cljs.core.next(seq61492);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61493,seq61492__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__61506 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__61507 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__61508 = (function (){var G__61510 = new cljs.core.Keyword(null,"li","li",723558921);
var G__61511 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__61512 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__61510,G__61511,G__61512) : devtools.format.make_template_fn.call(null,G__61510,G__61511,G__61512));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__61506,G__61507,G__61508) : devtools.format.make_template_fn.call(null,G__61506,G__61507,G__61508));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61590 = arguments.length;
var i__4830__auto___61591 = (0);
while(true){
if((i__4830__auto___61591 < len__4829__auto___61590)){
args__4835__auto__.push((arguments[i__4830__auto___61591]));

var G__61594 = (i__4830__auto___61591 + (1));
i__4830__auto___61591 = G__61594;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq61515){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61515));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61601 = arguments.length;
var i__4830__auto___61602 = (0);
while(true){
if((i__4830__auto___61602 < len__4829__auto___61601)){
args__4835__auto__.push((arguments[i__4830__auto___61602]));

var G__61603 = (i__4830__auto___61602 + (1));
i__4830__auto___61602 = G__61603;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq61524){
var G__61525 = cljs.core.first(seq61524);
var seq61524__$1 = cljs.core.next(seq61524);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61525,seq61524__$1);
}));


//# sourceMappingURL=devtools.format.js.map
