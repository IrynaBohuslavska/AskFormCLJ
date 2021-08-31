goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61241 = arguments.length;
var i__4830__auto___61242 = (0);
while(true){
if((i__4830__auto___61242 < len__4829__auto___61241)){
args__4835__auto__.push((arguments[i__4830__auto___61242]));

var G__61243 = (i__4830__auto___61242 + (1));
i__4830__auto___61242 = G__61243;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq60968){
var G__60969 = cljs.core.first(seq60968);
var seq60968__$1 = cljs.core.next(seq60968);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60969,seq60968__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__60971 = cljs.core.seq(sources);
var chunk__60972 = null;
var count__60973 = (0);
var i__60974 = (0);
while(true){
if((i__60974 < count__60973)){
var map__61007 = chunk__60972.cljs$core$IIndexed$_nth$arity$2(null,i__60974);
var map__61007__$1 = cljs.core.__destructure_map(map__61007);
var src = map__61007__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61007__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61007__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61007__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61007__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e61009){var e_61248 = e61009;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_61248);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_61248.message)].join('')));
}

var G__61249 = seq__60971;
var G__61250 = chunk__60972;
var G__61251 = count__60973;
var G__61252 = (i__60974 + (1));
seq__60971 = G__61249;
chunk__60972 = G__61250;
count__60973 = G__61251;
i__60974 = G__61252;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__60971);
if(temp__5753__auto__){
var seq__60971__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60971__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__60971__$1);
var G__61255 = cljs.core.chunk_rest(seq__60971__$1);
var G__61256 = c__4649__auto__;
var G__61257 = cljs.core.count(c__4649__auto__);
var G__61258 = (0);
seq__60971 = G__61255;
chunk__60972 = G__61256;
count__60973 = G__61257;
i__60974 = G__61258;
continue;
} else {
var map__61012 = cljs.core.first(seq__60971__$1);
var map__61012__$1 = cljs.core.__destructure_map(map__61012);
var src = map__61012__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61012__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61012__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61012__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61012__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e61014){var e_61259 = e61014;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_61259);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_61259.message)].join('')));
}

var G__61260 = cljs.core.next(seq__60971__$1);
var G__61261 = null;
var G__61262 = (0);
var G__61263 = (0);
seq__60971 = G__61260;
chunk__60972 = G__61261;
count__60973 = G__61262;
i__60974 = G__61263;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__61031 = cljs.core.seq(js_requires);
var chunk__61032 = null;
var count__61033 = (0);
var i__61034 = (0);
while(true){
if((i__61034 < count__61033)){
var js_ns = chunk__61032.cljs$core$IIndexed$_nth$arity$2(null,i__61034);
var require_str_61266 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_61266);


var G__61267 = seq__61031;
var G__61268 = chunk__61032;
var G__61269 = count__61033;
var G__61270 = (i__61034 + (1));
seq__61031 = G__61267;
chunk__61032 = G__61268;
count__61033 = G__61269;
i__61034 = G__61270;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61031);
if(temp__5753__auto__){
var seq__61031__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61031__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__61031__$1);
var G__61274 = cljs.core.chunk_rest(seq__61031__$1);
var G__61275 = c__4649__auto__;
var G__61276 = cljs.core.count(c__4649__auto__);
var G__61277 = (0);
seq__61031 = G__61274;
chunk__61032 = G__61275;
count__61033 = G__61276;
i__61034 = G__61277;
continue;
} else {
var js_ns = cljs.core.first(seq__61031__$1);
var require_str_61278 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_61278);


var G__61279 = cljs.core.next(seq__61031__$1);
var G__61280 = null;
var G__61281 = (0);
var G__61282 = (0);
seq__61031 = G__61279;
chunk__61032 = G__61280;
count__61033 = G__61281;
i__61034 = G__61282;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__61052){
var map__61053 = p__61052;
var map__61053__$1 = cljs.core.__destructure_map(map__61053);
var msg = map__61053__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61053__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61053__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61054(s__61055){
return (new cljs.core.LazySeq(null,(function (){
var s__61055__$1 = s__61055;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__61055__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__61060 = cljs.core.first(xs__6308__auto__);
var map__61060__$1 = cljs.core.__destructure_map(map__61060);
var src = map__61060__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61060__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61060__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__61055__$1,map__61060,map__61060__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__61053,map__61053__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61054_$_iter__61056(s__61057){
return (new cljs.core.LazySeq(null,((function (s__61055__$1,map__61060,map__61060__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__61053,map__61053__$1,msg,info,reload_info){
return (function (){
var s__61057__$1 = s__61057;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__61057__$1);
if(temp__5753__auto____$1){
var s__61057__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__61057__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__61057__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__61059 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__61058 = (0);
while(true){
if((i__61058 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__61058);
cljs.core.chunk_append(b__61059,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__61286 = (i__61058 + (1));
i__61058 = G__61286;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61059),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61054_$_iter__61056(cljs.core.chunk_rest(s__61057__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61059),null);
}
} else {
var warning = cljs.core.first(s__61057__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61054_$_iter__61056(cljs.core.rest(s__61057__$2)));
}
} else {
return null;
}
break;
}
});})(s__61055__$1,map__61060,map__61060__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__61053,map__61053__$1,msg,info,reload_info))
,null,null));
});})(s__61055__$1,map__61060,map__61060__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__61053,map__61053__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61054(cljs.core.rest(s__61055__$1)));
} else {
var G__61287 = cljs.core.rest(s__61055__$1);
s__61055__$1 = G__61287;
continue;
}
} else {
var G__61288 = cljs.core.rest(s__61055__$1);
s__61055__$1 = G__61288;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__61063_61289 = cljs.core.seq(warnings);
var chunk__61064_61290 = null;
var count__61065_61291 = (0);
var i__61066_61292 = (0);
while(true){
if((i__61066_61292 < count__61065_61291)){
var map__61073_61293 = chunk__61064_61290.cljs$core$IIndexed$_nth$arity$2(null,i__61066_61292);
var map__61073_61294__$1 = cljs.core.__destructure_map(map__61073_61293);
var w_61295 = map__61073_61294__$1;
var msg_61296__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61073_61294__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_61297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61073_61294__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_61298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61073_61294__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_61299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61073_61294__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_61299)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_61297),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_61298),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_61296__$1)].join(''));


var G__61300 = seq__61063_61289;
var G__61301 = chunk__61064_61290;
var G__61302 = count__61065_61291;
var G__61303 = (i__61066_61292 + (1));
seq__61063_61289 = G__61300;
chunk__61064_61290 = G__61301;
count__61065_61291 = G__61302;
i__61066_61292 = G__61303;
continue;
} else {
var temp__5753__auto___61304 = cljs.core.seq(seq__61063_61289);
if(temp__5753__auto___61304){
var seq__61063_61305__$1 = temp__5753__auto___61304;
if(cljs.core.chunked_seq_QMARK_(seq__61063_61305__$1)){
var c__4649__auto___61306 = cljs.core.chunk_first(seq__61063_61305__$1);
var G__61307 = cljs.core.chunk_rest(seq__61063_61305__$1);
var G__61308 = c__4649__auto___61306;
var G__61309 = cljs.core.count(c__4649__auto___61306);
var G__61310 = (0);
seq__61063_61289 = G__61307;
chunk__61064_61290 = G__61308;
count__61065_61291 = G__61309;
i__61066_61292 = G__61310;
continue;
} else {
var map__61076_61315 = cljs.core.first(seq__61063_61305__$1);
var map__61076_61316__$1 = cljs.core.__destructure_map(map__61076_61315);
var w_61317 = map__61076_61316__$1;
var msg_61318__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61076_61316__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_61319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61076_61316__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_61320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61076_61316__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_61321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61076_61316__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_61321)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_61319),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_61320),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_61318__$1)].join(''));


var G__61331 = cljs.core.next(seq__61063_61305__$1);
var G__61332 = null;
var G__61333 = (0);
var G__61334 = (0);
seq__61063_61289 = G__61331;
chunk__61064_61290 = G__61332;
count__61065_61291 = G__61333;
i__61066_61292 = G__61334;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__61051_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__61051_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__61081){
var map__61082 = p__61081;
var map__61082__$1 = cljs.core.__destructure_map(map__61082);
var msg = map__61082__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61082__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__61083 = cljs.core.seq(updates);
var chunk__61085 = null;
var count__61086 = (0);
var i__61087 = (0);
while(true){
if((i__61087 < count__61086)){
var path = chunk__61085.cljs$core$IIndexed$_nth$arity$2(null,i__61087);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__61158_61350 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__61162_61351 = null;
var count__61163_61352 = (0);
var i__61164_61353 = (0);
while(true){
if((i__61164_61353 < count__61163_61352)){
var node_61354 = chunk__61162_61351.cljs$core$IIndexed$_nth$arity$2(null,i__61164_61353);
if(cljs.core.not(node_61354.shadow$old)){
var path_match_61355 = shadow.cljs.devtools.client.browser.match_paths(node_61354.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61355)){
var new_link_61358 = (function (){var G__61175 = node_61354.cloneNode(true);
G__61175.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61355),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61175;
})();
(node_61354.shadow$old = true);

(new_link_61358.onload = ((function (seq__61158_61350,chunk__61162_61351,count__61163_61352,i__61164_61353,seq__61083,chunk__61085,count__61086,i__61087,new_link_61358,path_match_61355,node_61354,path,map__61082,map__61082__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_61354);
});})(seq__61158_61350,chunk__61162_61351,count__61163_61352,i__61164_61353,seq__61083,chunk__61085,count__61086,i__61087,new_link_61358,path_match_61355,node_61354,path,map__61082,map__61082__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61355], 0));

goog.dom.insertSiblingAfter(new_link_61358,node_61354);


var G__61361 = seq__61158_61350;
var G__61362 = chunk__61162_61351;
var G__61363 = count__61163_61352;
var G__61364 = (i__61164_61353 + (1));
seq__61158_61350 = G__61361;
chunk__61162_61351 = G__61362;
count__61163_61352 = G__61363;
i__61164_61353 = G__61364;
continue;
} else {
var G__61365 = seq__61158_61350;
var G__61366 = chunk__61162_61351;
var G__61367 = count__61163_61352;
var G__61368 = (i__61164_61353 + (1));
seq__61158_61350 = G__61365;
chunk__61162_61351 = G__61366;
count__61163_61352 = G__61367;
i__61164_61353 = G__61368;
continue;
}
} else {
var G__61369 = seq__61158_61350;
var G__61370 = chunk__61162_61351;
var G__61371 = count__61163_61352;
var G__61372 = (i__61164_61353 + (1));
seq__61158_61350 = G__61369;
chunk__61162_61351 = G__61370;
count__61163_61352 = G__61371;
i__61164_61353 = G__61372;
continue;
}
} else {
var temp__5753__auto___61373 = cljs.core.seq(seq__61158_61350);
if(temp__5753__auto___61373){
var seq__61158_61374__$1 = temp__5753__auto___61373;
if(cljs.core.chunked_seq_QMARK_(seq__61158_61374__$1)){
var c__4649__auto___61376 = cljs.core.chunk_first(seq__61158_61374__$1);
var G__61377 = cljs.core.chunk_rest(seq__61158_61374__$1);
var G__61378 = c__4649__auto___61376;
var G__61379 = cljs.core.count(c__4649__auto___61376);
var G__61380 = (0);
seq__61158_61350 = G__61377;
chunk__61162_61351 = G__61378;
count__61163_61352 = G__61379;
i__61164_61353 = G__61380;
continue;
} else {
var node_61381 = cljs.core.first(seq__61158_61374__$1);
if(cljs.core.not(node_61381.shadow$old)){
var path_match_61382 = shadow.cljs.devtools.client.browser.match_paths(node_61381.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61382)){
var new_link_61383 = (function (){var G__61176 = node_61381.cloneNode(true);
G__61176.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61382),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61176;
})();
(node_61381.shadow$old = true);

(new_link_61383.onload = ((function (seq__61158_61350,chunk__61162_61351,count__61163_61352,i__61164_61353,seq__61083,chunk__61085,count__61086,i__61087,new_link_61383,path_match_61382,node_61381,seq__61158_61374__$1,temp__5753__auto___61373,path,map__61082,map__61082__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_61381);
});})(seq__61158_61350,chunk__61162_61351,count__61163_61352,i__61164_61353,seq__61083,chunk__61085,count__61086,i__61087,new_link_61383,path_match_61382,node_61381,seq__61158_61374__$1,temp__5753__auto___61373,path,map__61082,map__61082__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61382], 0));

goog.dom.insertSiblingAfter(new_link_61383,node_61381);


var G__61389 = cljs.core.next(seq__61158_61374__$1);
var G__61390 = null;
var G__61391 = (0);
var G__61392 = (0);
seq__61158_61350 = G__61389;
chunk__61162_61351 = G__61390;
count__61163_61352 = G__61391;
i__61164_61353 = G__61392;
continue;
} else {
var G__61393 = cljs.core.next(seq__61158_61374__$1);
var G__61394 = null;
var G__61395 = (0);
var G__61396 = (0);
seq__61158_61350 = G__61393;
chunk__61162_61351 = G__61394;
count__61163_61352 = G__61395;
i__61164_61353 = G__61396;
continue;
}
} else {
var G__61397 = cljs.core.next(seq__61158_61374__$1);
var G__61398 = null;
var G__61399 = (0);
var G__61400 = (0);
seq__61158_61350 = G__61397;
chunk__61162_61351 = G__61398;
count__61163_61352 = G__61399;
i__61164_61353 = G__61400;
continue;
}
}
} else {
}
}
break;
}


var G__61402 = seq__61083;
var G__61403 = chunk__61085;
var G__61404 = count__61086;
var G__61405 = (i__61087 + (1));
seq__61083 = G__61402;
chunk__61085 = G__61403;
count__61086 = G__61404;
i__61087 = G__61405;
continue;
} else {
var G__61406 = seq__61083;
var G__61407 = chunk__61085;
var G__61408 = count__61086;
var G__61409 = (i__61087 + (1));
seq__61083 = G__61406;
chunk__61085 = G__61407;
count__61086 = G__61408;
i__61087 = G__61409;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61083);
if(temp__5753__auto__){
var seq__61083__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61083__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__61083__$1);
var G__61411 = cljs.core.chunk_rest(seq__61083__$1);
var G__61412 = c__4649__auto__;
var G__61413 = cljs.core.count(c__4649__auto__);
var G__61414 = (0);
seq__61083 = G__61411;
chunk__61085 = G__61412;
count__61086 = G__61413;
i__61087 = G__61414;
continue;
} else {
var path = cljs.core.first(seq__61083__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__61183_61415 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__61187_61416 = null;
var count__61188_61417 = (0);
var i__61189_61418 = (0);
while(true){
if((i__61189_61418 < count__61188_61417)){
var node_61419 = chunk__61187_61416.cljs$core$IIndexed$_nth$arity$2(null,i__61189_61418);
if(cljs.core.not(node_61419.shadow$old)){
var path_match_61422 = shadow.cljs.devtools.client.browser.match_paths(node_61419.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61422)){
var new_link_61423 = (function (){var G__61199 = node_61419.cloneNode(true);
G__61199.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61422),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61199;
})();
(node_61419.shadow$old = true);

(new_link_61423.onload = ((function (seq__61183_61415,chunk__61187_61416,count__61188_61417,i__61189_61418,seq__61083,chunk__61085,count__61086,i__61087,new_link_61423,path_match_61422,node_61419,path,seq__61083__$1,temp__5753__auto__,map__61082,map__61082__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_61419);
});})(seq__61183_61415,chunk__61187_61416,count__61188_61417,i__61189_61418,seq__61083,chunk__61085,count__61086,i__61087,new_link_61423,path_match_61422,node_61419,path,seq__61083__$1,temp__5753__auto__,map__61082,map__61082__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61422], 0));

goog.dom.insertSiblingAfter(new_link_61423,node_61419);


var G__61425 = seq__61183_61415;
var G__61426 = chunk__61187_61416;
var G__61427 = count__61188_61417;
var G__61428 = (i__61189_61418 + (1));
seq__61183_61415 = G__61425;
chunk__61187_61416 = G__61426;
count__61188_61417 = G__61427;
i__61189_61418 = G__61428;
continue;
} else {
var G__61429 = seq__61183_61415;
var G__61430 = chunk__61187_61416;
var G__61431 = count__61188_61417;
var G__61432 = (i__61189_61418 + (1));
seq__61183_61415 = G__61429;
chunk__61187_61416 = G__61430;
count__61188_61417 = G__61431;
i__61189_61418 = G__61432;
continue;
}
} else {
var G__61433 = seq__61183_61415;
var G__61434 = chunk__61187_61416;
var G__61435 = count__61188_61417;
var G__61436 = (i__61189_61418 + (1));
seq__61183_61415 = G__61433;
chunk__61187_61416 = G__61434;
count__61188_61417 = G__61435;
i__61189_61418 = G__61436;
continue;
}
} else {
var temp__5753__auto___61437__$1 = cljs.core.seq(seq__61183_61415);
if(temp__5753__auto___61437__$1){
var seq__61183_61438__$1 = temp__5753__auto___61437__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61183_61438__$1)){
var c__4649__auto___61439 = cljs.core.chunk_first(seq__61183_61438__$1);
var G__61441 = cljs.core.chunk_rest(seq__61183_61438__$1);
var G__61442 = c__4649__auto___61439;
var G__61443 = cljs.core.count(c__4649__auto___61439);
var G__61444 = (0);
seq__61183_61415 = G__61441;
chunk__61187_61416 = G__61442;
count__61188_61417 = G__61443;
i__61189_61418 = G__61444;
continue;
} else {
var node_61445 = cljs.core.first(seq__61183_61438__$1);
if(cljs.core.not(node_61445.shadow$old)){
var path_match_61446 = shadow.cljs.devtools.client.browser.match_paths(node_61445.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61446)){
var new_link_61447 = (function (){var G__61200 = node_61445.cloneNode(true);
G__61200.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61446),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61200;
})();
(node_61445.shadow$old = true);

(new_link_61447.onload = ((function (seq__61183_61415,chunk__61187_61416,count__61188_61417,i__61189_61418,seq__61083,chunk__61085,count__61086,i__61087,new_link_61447,path_match_61446,node_61445,seq__61183_61438__$1,temp__5753__auto___61437__$1,path,seq__61083__$1,temp__5753__auto__,map__61082,map__61082__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_61445);
});})(seq__61183_61415,chunk__61187_61416,count__61188_61417,i__61189_61418,seq__61083,chunk__61085,count__61086,i__61087,new_link_61447,path_match_61446,node_61445,seq__61183_61438__$1,temp__5753__auto___61437__$1,path,seq__61083__$1,temp__5753__auto__,map__61082,map__61082__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61446], 0));

goog.dom.insertSiblingAfter(new_link_61447,node_61445);


var G__61449 = cljs.core.next(seq__61183_61438__$1);
var G__61450 = null;
var G__61451 = (0);
var G__61452 = (0);
seq__61183_61415 = G__61449;
chunk__61187_61416 = G__61450;
count__61188_61417 = G__61451;
i__61189_61418 = G__61452;
continue;
} else {
var G__61453 = cljs.core.next(seq__61183_61438__$1);
var G__61454 = null;
var G__61455 = (0);
var G__61456 = (0);
seq__61183_61415 = G__61453;
chunk__61187_61416 = G__61454;
count__61188_61417 = G__61455;
i__61189_61418 = G__61456;
continue;
}
} else {
var G__61457 = cljs.core.next(seq__61183_61438__$1);
var G__61458 = null;
var G__61459 = (0);
var G__61460 = (0);
seq__61183_61415 = G__61457;
chunk__61187_61416 = G__61458;
count__61188_61417 = G__61459;
i__61189_61418 = G__61460;
continue;
}
}
} else {
}
}
break;
}


var G__61461 = cljs.core.next(seq__61083__$1);
var G__61462 = null;
var G__61463 = (0);
var G__61464 = (0);
seq__61083 = G__61461;
chunk__61085 = G__61462;
count__61086 = G__61463;
i__61087 = G__61464;
continue;
} else {
var G__61465 = cljs.core.next(seq__61083__$1);
var G__61466 = null;
var G__61467 = (0);
var G__61468 = (0);
seq__61083 = G__61465;
chunk__61085 = G__61466;
count__61086 = G__61467;
i__61087 = G__61468;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__61203){
var map__61204 = p__61203;
var map__61204__$1 = cljs.core.__destructure_map(map__61204);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61204__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__61208){
var map__61209 = p__61208;
var map__61209__$1 = cljs.core.__destructure_map(map__61209);
var _ = map__61209__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61209__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__61210,done,error){
var map__61211 = p__61210;
var map__61211__$1 = cljs.core.__destructure_map(map__61211);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61211__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__61215,done,error){
var map__61216 = p__61215;
var map__61216__$1 = cljs.core.__destructure_map(map__61216);
var msg = map__61216__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61216__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61216__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61216__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__61218){
var map__61222 = p__61218;
var map__61222__$1 = cljs.core.__destructure_map(map__61222);
var src = map__61222__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61222__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__61223 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__61223) : done.call(null,G__61223));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__61224){
var map__61225 = p__61224;
var map__61225__$1 = cljs.core.__destructure_map(map__61225);
var msg__$1 = map__61225__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61225__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e61226){var ex = e61226;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__61227){
var map__61228 = p__61227;
var map__61228__$1 = cljs.core.__destructure_map(map__61228);
var env = map__61228__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61228__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__61229){
var map__61230 = p__61229;
var map__61230__$1 = cljs.core.__destructure_map(map__61230);
var msg = map__61230__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61230__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__61233){
var map__61234 = p__61233;
var map__61234__$1 = cljs.core.__destructure_map(map__61234);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61234__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61234__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__61239){
var map__61240 = p__61239;
var map__61240__$1 = cljs.core.__destructure_map(map__61240);
var svc = map__61240__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61240__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
