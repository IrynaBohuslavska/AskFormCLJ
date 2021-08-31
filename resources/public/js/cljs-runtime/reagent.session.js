goog.provide('reagent.session');
if((typeof reagent !== 'undefined') && (typeof reagent.session !== 'undefined') && (typeof reagent.session.state !== 'undefined')){
} else {
reagent.session.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor(reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__4835__auto__ = [];
var len__4829__auto___71936 = arguments.length;
var i__4830__auto___71937 = (0);
while(true){
if((i__4830__auto___71937 < len__4829__auto___71936)){
args__4835__auto__.push((arguments[i__4830__auto___71937]));

var G__71938 = (i__4830__auto___71937 + (1));
i__4830__auto___71937 = G__71938;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__71870){
var vec__71871 = p__71870;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71871,(0),null);
var temp_a = cljs.core.deref(reagent.session.cursor(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)));
if((!((temp_a == null)))){
return temp_a;
} else {
return default$;
}
}));

(reagent.session.get.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get.cljs$lang$applyTo = (function (seq71867){
var G__71868 = cljs.core.first(seq71867);
var seq71867__$1 = cljs.core.next(seq71867);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71868,seq71867__$1);
}));

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__4835__auto__ = [];
var len__4829__auto___71939 = arguments.length;
var i__4830__auto___71940 = (0);
while(true){
if((i__4830__auto___71940 < len__4829__auto___71939)){
args__4835__auto__.push((arguments[i__4830__auto___71940]));

var G__71941 = (i__4830__auto___71940 + (1));
i__4830__auto___71940 = G__71941;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__71878){
var vec__71879 = p__71878;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71879,(0),null);
var result = cljs.core.deref(reagent.session.cursor(ks));
if((!((result == null)))){
return result;
} else {
return default$;
}
}));

(reagent.session.get_in.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_in.cljs$lang$applyTo = (function (seq71876){
var G__71877 = cljs.core.first(seq71876);
var seq71876__$1 = cljs.core.next(seq71876);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71877,seq71876__$1);
}));

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___71942 = arguments.length;
var i__4830__auto___71943 = (0);
while(true){
if((i__4830__auto___71943 < len__4829__auto___71942)){
args__4835__auto__.push((arguments[i__4830__auto___71943]));

var G__71944 = (i__4830__auto___71943 + (1));
i__4830__auto___71943 = G__71944;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,reagent.session.state,f,args);
}));

(reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq71883){
var G__71884 = cljs.core.first(seq71883);
var seq71883__$1 = cljs.core.next(seq71883);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71884,seq71883__$1);
}));

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_(reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_(reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___71945 = arguments.length;
var i__4830__auto___71946 = (0);
while(true){
if((i__4830__auto___71946 < len__4829__auto___71945)){
args__4835__auto__.push((arguments[i__4830__auto___71946]));

var G__71947 = (i__4830__auto___71946 + (1));
i__4830__auto___71946 = G__71947;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__71900){
var vec__71902 = p__71900;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71902,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
}));

(reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq71893){
var G__71895 = cljs.core.first(seq71893);
var seq71893__$1 = cljs.core.next(seq71893);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71895,seq71893__$1);
}));

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___71948 = arguments.length;
var i__4830__auto___71949 = (0);
while(true){
if((i__4830__auto___71949 < len__4829__auto___71948)){
args__4835__auto__.push((arguments[i__4830__auto___71949]));

var G__71950 = (i__4830__auto___71949 + (1));
i__4830__auto___71949 = G__71950;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__71913){
var vec__71915 = p__71913;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71915,(0),null);
var cur = reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(ks,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
reagent.session.assoc_in_BANG_(ks,null);

return cur;
}));

(reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq71909){
var G__71910 = cljs.core.first(seq71909);
var seq71909__$1 = cljs.core.next(seq71909);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71910,seq71909__$1);
}));

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___71951 = arguments.length;
var i__4830__auto___71952 = (0);
while(true){
if((i__4830__auto___71952 < len__4829__auto___71951)){
args__4835__auto__.push((arguments[i__4830__auto___71952]));

var G__71953 = (i__4830__auto___71952 + (1));
i__4830__auto___71952 = G__71953;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__71918_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update,p1__71918_SHARP_,k,f),args);
}));
}));

(reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq71919){
var G__71920 = cljs.core.first(seq71919);
var seq71919__$1 = cljs.core.next(seq71919);
var G__71921 = cljs.core.first(seq71919__$1);
var seq71919__$2 = cljs.core.next(seq71919__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71920,G__71921,seq71919__$2);
}));

/**
 * Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___71954 = arguments.length;
var i__4830__auto___71955 = (0);
while(true){
if((i__4830__auto___71955 < len__4829__auto___71954)){
args__4835__auto__.push((arguments[i__4830__auto___71955]));

var G__71956 = (i__4830__auto___71955 + (1));
i__4830__auto___71955 = G__71956;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__71926_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__71926_SHARP_,ks,f),args);
}));
}));

(reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq71927){
var G__71928 = cljs.core.first(seq71927);
var seq71927__$1 = cljs.core.next(seq71927);
var G__71929 = cljs.core.first(seq71927__$1);
var seq71927__$2 = cljs.core.next(seq71927__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71928,G__71929,seq71927__$2);
}));


//# sourceMappingURL=reagent.session.js.map
