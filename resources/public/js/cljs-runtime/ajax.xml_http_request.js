goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__62154 = e.target.readyState;
var fexpr__62153 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__62153.cljs$core$IFn$_invoke$arity$1 ? fexpr__62153.cljs$core$IFn$_invoke$arity$1(G__62154) : fexpr__62153.call(null,G__62154));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__62156,handler){
var map__62157 = p__62156;
var map__62157__$1 = cljs.core.__destructure_map(map__62157);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62157__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62157__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62157__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62157__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62157__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62157__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62157__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__62155_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__62155_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___62174 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___62174)){
var response_type_62175 = temp__5753__auto___62174;
(this$__$1.responseType = cljs.core.name(response_type_62175));
} else {
}

var seq__62158_62176 = cljs.core.seq(headers);
var chunk__62159_62177 = null;
var count__62160_62178 = (0);
var i__62161_62179 = (0);
while(true){
if((i__62161_62179 < count__62160_62178)){
var vec__62168_62180 = chunk__62159_62177.cljs$core$IIndexed$_nth$arity$2(null,i__62161_62179);
var k_62181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62168_62180,(0),null);
var v_62182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62168_62180,(1),null);
this$__$1.setRequestHeader(k_62181,v_62182);


var G__62183 = seq__62158_62176;
var G__62184 = chunk__62159_62177;
var G__62185 = count__62160_62178;
var G__62186 = (i__62161_62179 + (1));
seq__62158_62176 = G__62183;
chunk__62159_62177 = G__62184;
count__62160_62178 = G__62185;
i__62161_62179 = G__62186;
continue;
} else {
var temp__5753__auto___62187 = cljs.core.seq(seq__62158_62176);
if(temp__5753__auto___62187){
var seq__62158_62188__$1 = temp__5753__auto___62187;
if(cljs.core.chunked_seq_QMARK_(seq__62158_62188__$1)){
var c__4649__auto___62189 = cljs.core.chunk_first(seq__62158_62188__$1);
var G__62190 = cljs.core.chunk_rest(seq__62158_62188__$1);
var G__62191 = c__4649__auto___62189;
var G__62192 = cljs.core.count(c__4649__auto___62189);
var G__62193 = (0);
seq__62158_62176 = G__62190;
chunk__62159_62177 = G__62191;
count__62160_62178 = G__62192;
i__62161_62179 = G__62193;
continue;
} else {
var vec__62171_62194 = cljs.core.first(seq__62158_62188__$1);
var k_62195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62171_62194,(0),null);
var v_62196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62171_62194,(1),null);
this$__$1.setRequestHeader(k_62195,v_62196);


var G__62197 = cljs.core.next(seq__62158_62188__$1);
var G__62198 = null;
var G__62199 = (0);
var G__62200 = (0);
seq__62158_62176 = G__62197;
chunk__62159_62177 = G__62198;
count__62160_62178 = G__62199;
i__62161_62179 = G__62200;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4223__auto__ = body;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
