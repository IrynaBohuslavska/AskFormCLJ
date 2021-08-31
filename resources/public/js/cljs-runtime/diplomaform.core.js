goog.provide('diplomaform.core');
diplomaform.core.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"index","index",-1531685915)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/stats",new cljs.core.Keyword(null,"stats","stats",-85643011)], null)], null));
diplomaform.core.path_for = (function diplomaform$core$path_for(var_args){
var args__4835__auto__ = [];
var len__4829__auto___63825 = arguments.length;
var i__4830__auto___63826 = (0);
while(true){
if((i__4830__auto___63826 < len__4829__auto___63825)){
args__4835__auto__.push((arguments[i__4830__auto___63826]));

var G__63827 = (i__4830__auto___63826 + (1));
i__4830__auto___63826 = G__63827;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return diplomaform.core.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(diplomaform.core.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,p__63818){
var vec__63819 = p__63818;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63819,(0),null);
if(cljs.core.truth_(params)){
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$3(diplomaform.core.router,route,params));
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$2(diplomaform.core.router,route));
}
}));

(diplomaform.core.path_for.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(diplomaform.core.path_for.cljs$lang$applyTo = (function (seq63815){
var G__63816 = cljs.core.first(seq63815);
var seq63815__$1 = cljs.core.next(seq63815);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63816,seq63815__$1);
}));

diplomaform.core.page_for = (function diplomaform$core$page_for(route){
var G__63822 = route;
var G__63822__$1 = (((G__63822 instanceof cljs.core.Keyword))?G__63822.fqn:null);
switch (G__63822__$1) {
case "index":
return new cljs.core.Var(function(){return diplomaform.screens.home.core.home_page;},new cljs.core.Symbol("diplomaform.screens.home.core","home-page","diplomaform.screens.home.core/home-page",-433554872,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"diplomaform.screens.home.core","diplomaform.screens.home.core",-288196783,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"diplomaform/screens/home/core.cljs",16,1,106,106,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(diplomaform.screens.home.core.home_page)?diplomaform.screens.home.core.home_page.cljs$lang$test:null)]));

break;
case "stats":
return new cljs.core.Var(function(){return diplomaform.screens.stats.core.diagram;},new cljs.core.Symbol("diplomaform.screens.stats.core","diagram","diplomaform.screens.stats.core/diagram",1346639122,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"diplomaform.screens.stats.core","diplomaform.screens.stats.core",1757367465,null),new cljs.core.Symbol(null,"diagram","diagram",-1307192011,null),"diplomaform/screens/stats/core.cljs",(14),(1),(12),(12),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(diplomaform.screens.stats.core.diagram)?diplomaform.screens.stats.core.diagram.cljs$lang$test:null)]));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63822__$1)].join('')));

}
});
diplomaform.core.current_page = (function diplomaform$core$current_page(){
return (function (){
var page = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(reagent.session.get(new cljs.core.Keyword(null,"route","route",329891309)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null)], null);
});
});
diplomaform.core.mount_root = (function diplomaform$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [diplomaform.core.current_page], null),document.getElementById("app"));
});
diplomaform.core.init_BANG_ = (function diplomaform$core$init_BANG_(){
clerk.core.initialize_BANG_();

accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
var match = reitit.frontend.match_by_path(diplomaform.core.router,path);
var current_page = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
var route_params = new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match);
reagent.core.after_render(clerk.core.after_render_BANG_);

reagent.session.put_BANG_(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),diplomaform.core.page_for(current_page),new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params], null));

return clerk.core.navigate_page_BANG_(path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return cljs.core.boolean$(reitit.frontend.match_by_path(diplomaform.core.router,path));
})], null));

accountant.core.dispatch_current_BANG_();

return diplomaform.core.mount_root();
});

//# sourceMappingURL=diplomaform.core.js.map
