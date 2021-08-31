goog.provide('diplomaform.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("diplomaform.events","initialize-db","diplomaform.events/initialize-db",817842751),(function (_,___$1){
return diplomaform.db.default_db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("diplomaform.events","something","diplomaform.events/something",1655905566),(function (p__62113,_){
var map__62114 = p__62113;
var map__62114__$1 = cljs.core.__destructure_map(map__62114);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62114__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:3000/qa",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_response_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("diplomaform.events","generate-db","diplomaform.events/generate-db",-641004118)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-http-result","bad-http-result",770783148)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("diplomaform.events","something-res","diplomaform.events/something-res",1671257538),(function (p__62115,_){
var map__62116 = p__62115;
var map__62116__$1 = cljs.core.__destructure_map(map__62116);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62116__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:3000/res",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_response_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("diplomaform.events","generate-db-res","diplomaform.events/generate-db-res",1521796999)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-http-result","bad-http-result",770783148)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("diplomaform.events","post-results","diplomaform.events/post-results",1281454691),(function (_world,p__62117){
var vec__62118 = p__62117;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62118,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62118,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:3000/answers",new cljs.core.Keyword(null,"params","params",710516235),val,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(5000),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("diplomaform.events","generate-answers","diplomaform.events/generate-answers",760618743)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-http-result","bad-http-result",770783148)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("diplomaform.events","generate-answers","diplomaform.events/generate-answers",760618743),(function (db,p__62121){
var vec__62122 = p__62121;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62122,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62122,(1),null);
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(response);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("diplomaform.events","generate-db","diplomaform.events/generate-db",-641004118),(function (db,p__62125){
var vec__62126 = p__62125;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62126,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62126,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(response));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bad-http-result","bad-http-result",770783148),(function (db,p__62129){
var vec__62130 = p__62129;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62130,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62130,(1),null);
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("diplomaform.events","generate-db-res","diplomaform.events/generate-db-res",1521796999),(function (db,p__62133){
var vec__62134 = p__62133;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62134,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62134,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"answers","answers",-2066449770),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(response));
}));

//# sourceMappingURL=diplomaform.events.js.map
