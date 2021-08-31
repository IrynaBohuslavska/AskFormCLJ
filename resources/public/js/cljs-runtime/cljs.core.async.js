goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__66336 = arguments.length;
switch (G__66336) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async66337 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66337 = (function (f,blockable,meta66338){
this.f = f;
this.blockable = blockable;
this.meta66338 = meta66338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async66337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66339,meta66338__$1){
var self__ = this;
var _66339__$1 = this;
return (new cljs.core.async.t_cljs$core$async66337(self__.f,self__.blockable,meta66338__$1));
}));

(cljs.core.async.t_cljs$core$async66337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66339){
var self__ = this;
var _66339__$1 = this;
return self__.meta66338;
}));

(cljs.core.async.t_cljs$core$async66337.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66337.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async66337.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async66337.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async66337.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta66338","meta66338",-304085885,null)], null);
}));

(cljs.core.async.t_cljs$core$async66337.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async66337.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66337");

(cljs.core.async.t_cljs$core$async66337.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async66337");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async66337.
 */
cljs.core.async.__GT_t_cljs$core$async66337 = (function cljs$core$async$__GT_t_cljs$core$async66337(f__$1,blockable__$1,meta66338){
return (new cljs.core.async.t_cljs$core$async66337(f__$1,blockable__$1,meta66338));
});

}

return (new cljs.core.async.t_cljs$core$async66337(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__66342 = arguments.length;
switch (G__66342) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__66344 = arguments.length;
switch (G__66344) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__66346 = arguments.length;
switch (G__66346) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_68038 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_68038) : fn1.call(null,val_68038));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_68038) : fn1.call(null,val_68038));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__66348 = arguments.length;
switch (G__66348) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___68043 = n;
var x_68044 = (0);
while(true){
if((x_68044 < n__4706__auto___68043)){
(a[x_68044] = (0));

var G__68045 = (x_68044 + (1));
x_68044 = G__68045;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__68046 = (i + (1));
i = G__68046;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async66349 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66349 = (function (flag,meta66350){
this.flag = flag;
this.meta66350 = meta66350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async66349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66351,meta66350__$1){
var self__ = this;
var _66351__$1 = this;
return (new cljs.core.async.t_cljs$core$async66349(self__.flag,meta66350__$1));
}));

(cljs.core.async.t_cljs$core$async66349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66351){
var self__ = this;
var _66351__$1 = this;
return self__.meta66350;
}));

(cljs.core.async.t_cljs$core$async66349.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66349.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async66349.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async66349.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async66349.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta66350","meta66350",-1048903739,null)], null);
}));

(cljs.core.async.t_cljs$core$async66349.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async66349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66349");

(cljs.core.async.t_cljs$core$async66349.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async66349");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async66349.
 */
cljs.core.async.__GT_t_cljs$core$async66349 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async66349(flag__$1,meta66350){
return (new cljs.core.async.t_cljs$core$async66349(flag__$1,meta66350));
});

}

return (new cljs.core.async.t_cljs$core$async66349(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async66352 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66352 = (function (flag,cb,meta66353){
this.flag = flag;
this.cb = cb;
this.meta66353 = meta66353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async66352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66354,meta66353__$1){
var self__ = this;
var _66354__$1 = this;
return (new cljs.core.async.t_cljs$core$async66352(self__.flag,self__.cb,meta66353__$1));
}));

(cljs.core.async.t_cljs$core$async66352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66354){
var self__ = this;
var _66354__$1 = this;
return self__.meta66353;
}));

(cljs.core.async.t_cljs$core$async66352.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66352.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async66352.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async66352.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async66352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta66353","meta66353",-1931912089,null)], null);
}));

(cljs.core.async.t_cljs$core$async66352.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async66352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66352");

(cljs.core.async.t_cljs$core$async66352.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async66352");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async66352.
 */
cljs.core.async.__GT_t_cljs$core$async66352 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async66352(flag__$1,cb__$1,meta66353){
return (new cljs.core.async.t_cljs$core$async66352(flag__$1,cb__$1,meta66353));
});

}

return (new cljs.core.async.t_cljs$core$async66352(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__66355_SHARP_){
var G__66357 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__66355_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__66357) : fret.call(null,G__66357));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__66356_SHARP_){
var G__66358 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__66356_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__66358) : fret.call(null,G__66358));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__68049 = (i + (1));
i = G__68049;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___68050 = arguments.length;
var i__4830__auto___68051 = (0);
while(true){
if((i__4830__auto___68051 < len__4829__auto___68050)){
args__4835__auto__.push((arguments[i__4830__auto___68051]));

var G__68052 = (i__4830__auto___68051 + (1));
i__4830__auto___68051 = G__68052;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__66361){
var map__66362 = p__66361;
var map__66362__$1 = cljs.core.__destructure_map(map__66362);
var opts = map__66362__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq66359){
var G__66360 = cljs.core.first(seq66359);
var seq66359__$1 = cljs.core.next(seq66359);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66360,seq66359__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__66368 = arguments.length;
switch (G__66368) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__66272__auto___68055 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__66273__auto__ = (function (){var switch__66149__auto__ = (function (state_66393){
var state_val_66395 = (state_66393[(1)]);
if((state_val_66395 === (7))){
var inst_66388 = (state_66393[(2)]);
var state_66393__$1 = state_66393;
var statearr_66396_68056 = state_66393__$1;
(statearr_66396_68056[(2)] = inst_66388);

(statearr_66396_68056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66395 === (1))){
var state_66393__$1 = state_66393;
var statearr_66397_68057 = state_66393__$1;
(statearr_66397_68057[(2)] = null);

(statearr_66397_68057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66395 === (4))){
var inst_66371 = (state_66393[(7)]);
var inst_66371__$1 = (state_66393[(2)]);
var inst_66372 = (inst_66371__$1 == null);
var state_66393__$1 = (function (){var statearr_66398 = state_66393;
(statearr_66398[(7)] = inst_66371__$1);

return statearr_66398;
})();
if(cljs.core.truth_(inst_66372)){
var statearr_66399_68058 = state_66393__$1;
(statearr_66399_68058[(1)] = (5));

} else {
var statearr_66400_68059 = state_66393__$1;
(statearr_66400_68059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66395 === (13))){
var state_66393__$1 = state_66393;
var statearr_66401_68060 = state_66393__$1;
(statearr_66401_68060[(2)] = null);

(statearr_66401_68060[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66395 === (6))){
var inst_66371 = (state_66393[(7)]);
var state_66393__$1 = state_66393;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66393__$1,(11),to,inst_66371);
} else {
if((state_val_66395 === (3))){
var inst_66390 = (state_66393[(2)]);
var state_66393__$1 = state_66393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66393__$1,inst_66390);
} else {
if((state_val_66395 === (12))){
var state_66393__$1 = state_66393;
var statearr_66402_68061 = state_66393__$1;
(statearr_66402_68061[(2)] = null);

(statearr_66402_68061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66395 === (2))){
var state_66393__$1 = state_66393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66393__$1,(4),from);
} else {
if((state_val_66395 === (11))){
var inst_66381 = (state_66393[(2)]);
var state_66393__$1 = state_66393;
if(cljs.core.truth_(inst_66381)){
var statearr_66403_68063 = state_66393__$1;
(statearr_66403_68063[(1)] = (12));

} else {
var statearr_66404_68064 = state_66393__$1;
(statearr_66404_68064[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66395 === (9))){
var state_66393__$1 = state_66393;
var statearr_66405_68065 = state_66393__$1;
(statearr_66405_68065[(2)] = null);

(statearr_66405_68065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66395 === (5))){
var state_66393__$1 = state_66393;
if(cljs.core.truth_(close_QMARK_)){
var statearr_66406_68066 = state_66393__$1;
(statearr_66406_68066[(1)] = (8));

} else {
var statearr_66407_68067 = state_66393__$1;
(statearr_66407_68067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66395 === (14))){
var inst_66386 = (state_66393[(2)]);
var state_66393__$1 = state_66393;
var statearr_66408_68068 = state_66393__$1;
(statearr_66408_68068[(2)] = inst_66386);

(statearr_66408_68068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66395 === (10))){
var inst_66378 = (state_66393[(2)]);
var state_66393__$1 = state_66393;
var statearr_66409_68069 = state_66393__$1;
(statearr_66409_68069[(2)] = inst_66378);

(statearr_66409_68069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66395 === (8))){
var inst_66375 = cljs.core.async.close_BANG_(to);
var state_66393__$1 = state_66393;
var statearr_66410_68070 = state_66393__$1;
(statearr_66410_68070[(2)] = inst_66375);

(statearr_66410_68070[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__66150__auto__ = null;
var cljs$core$async$state_machine__66150__auto____0 = (function (){
var statearr_66411 = [null,null,null,null,null,null,null,null];
(statearr_66411[(0)] = cljs$core$async$state_machine__66150__auto__);

(statearr_66411[(1)] = (1));

return statearr_66411;
});
var cljs$core$async$state_machine__66150__auto____1 = (function (state_66393){
while(true){
var ret_value__66151__auto__ = (function (){try{while(true){
var result__66152__auto__ = switch__66149__auto__(state_66393);
if(cljs.core.keyword_identical_QMARK_(result__66152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66152__auto__;
}
break;
}
}catch (e66412){if((e66412 instanceof Object)){
var ex__66153__auto__ = e66412;
var statearr_66417_68073 = state_66393;
(statearr_66417_68073[(5)] = ex__66153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66412;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68074 = state_66393;
state_66393 = G__68074;
continue;
} else {
return ret_value__66151__auto__;
}
break;
}
});
cljs$core$async$state_machine__66150__auto__ = function(state_66393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66150__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66150__auto____1.call(this,state_66393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66150__auto____0;
cljs$core$async$state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66150__auto____1;
return cljs$core$async$state_machine__66150__auto__;
})()
})();
var state__66274__auto__ = (function (){var statearr_66418 = f__66273__auto__();
(statearr_66418[(6)] = c__66272__auto___68055);

return statearr_66418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__66274__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__66419){
var vec__66420 = p__66419;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66420,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66420,(1),null);
var job = vec__66420;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__66272__auto___68076 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__66273__auto__ = (function (){var switch__66149__auto__ = (function (state_66427){
var state_val_66428 = (state_66427[(1)]);
if((state_val_66428 === (1))){
var state_66427__$1 = state_66427;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66427__$1,(2),res,v);
} else {
if((state_val_66428 === (2))){
var inst_66424 = (state_66427[(2)]);
var inst_66425 = cljs.core.async.close_BANG_(res);
var state_66427__$1 = (function (){var statearr_66429 = state_66427;
(statearr_66429[(7)] = inst_66424);

return statearr_66429;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_66427__$1,inst_66425);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____0 = (function (){
var statearr_66430 = [null,null,null,null,null,null,null,null];
(statearr_66430[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__);

(statearr_66430[(1)] = (1));

return statearr_66430;
});
var cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____1 = (function (state_66427){
while(true){
var ret_value__66151__auto__ = (function (){try{while(true){
var result__66152__auto__ = switch__66149__auto__(state_66427);
if(cljs.core.keyword_identical_QMARK_(result__66152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66152__auto__;
}
break;
}
}catch (e66431){if((e66431 instanceof Object)){
var ex__66153__auto__ = e66431;
var statearr_66432_68077 = state_66427;
(statearr_66432_68077[(5)] = ex__66153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66431;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68078 = state_66427;
state_66427 = G__68078;
continue;
} else {
return ret_value__66151__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__ = function(state_66427){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____1.call(this,state_66427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__;
})()
})();
var state__66274__auto__ = (function (){var statearr_66437 = f__66273__auto__();
(statearr_66437[(6)] = c__66272__auto___68076);

return statearr_66437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__66274__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__66438){
var vec__66439 = p__66438;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66439,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66439,(1),null);
var job = vec__66439;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___68079 = n;
var __68080 = (0);
while(true){
if((__68080 < n__4706__auto___68079)){
var G__66442_68081 = type;
var G__66442_68082__$1 = (((G__66442_68081 instanceof cljs.core.Keyword))?G__66442_68081.fqn:null);
switch (G__66442_68082__$1) {
case "compute":
var c__66272__auto___68085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__68080,c__66272__auto___68085,G__66442_68081,G__66442_68082__$1,n__4706__auto___68079,jobs,results,process,async){
return (function (){
var f__66273__auto__ = (function (){var switch__66149__auto__ = ((function (__68080,c__66272__auto___68085,G__66442_68081,G__66442_68082__$1,n__4706__auto___68079,jobs,results,process,async){
return (function (state_66455){
var state_val_66456 = (state_66455[(1)]);
if((state_val_66456 === (1))){
var state_66455__$1 = state_66455;
var statearr_66457_68086 = state_66455__$1;
(statearr_66457_68086[(2)] = null);

(statearr_66457_68086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66456 === (2))){
var state_66455__$1 = state_66455;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66455__$1,(4),jobs);
} else {
if((state_val_66456 === (3))){
var inst_66453 = (state_66455[(2)]);
var state_66455__$1 = state_66455;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66455__$1,inst_66453);
} else {
if((state_val_66456 === (4))){
var inst_66445 = (state_66455[(2)]);
var inst_66446 = process(inst_66445);
var state_66455__$1 = state_66455;
if(cljs.core.truth_(inst_66446)){
var statearr_66462_68087 = state_66455__$1;
(statearr_66462_68087[(1)] = (5));

} else {
var statearr_66463_68088 = state_66455__$1;
(statearr_66463_68088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66456 === (5))){
var state_66455__$1 = state_66455;
var statearr_66464_68089 = state_66455__$1;
(statearr_66464_68089[(2)] = null);

(statearr_66464_68089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66456 === (6))){
var state_66455__$1 = state_66455;
var statearr_66465_68090 = state_66455__$1;
(statearr_66465_68090[(2)] = null);

(statearr_66465_68090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66456 === (7))){
var inst_66451 = (state_66455[(2)]);
var state_66455__$1 = state_66455;
var statearr_66466_68091 = state_66455__$1;
(statearr_66466_68091[(2)] = inst_66451);

(statearr_66466_68091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__68080,c__66272__auto___68085,G__66442_68081,G__66442_68082__$1,n__4706__auto___68079,jobs,results,process,async))
;
return ((function (__68080,switch__66149__auto__,c__66272__auto___68085,G__66442_68081,G__66442_68082__$1,n__4706__auto___68079,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____0 = (function (){
var statearr_66467 = [null,null,null,null,null,null,null];
(statearr_66467[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__);

(statearr_66467[(1)] = (1));

return statearr_66467;
});
var cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____1 = (function (state_66455){
while(true){
var ret_value__66151__auto__ = (function (){try{while(true){
var result__66152__auto__ = switch__66149__auto__(state_66455);
if(cljs.core.keyword_identical_QMARK_(result__66152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66152__auto__;
}
break;
}
}catch (e66468){if((e66468 instanceof Object)){
var ex__66153__auto__ = e66468;
var statearr_66469_68092 = state_66455;
(statearr_66469_68092[(5)] = ex__66153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66468;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68093 = state_66455;
state_66455 = G__68093;
continue;
} else {
return ret_value__66151__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__ = function(state_66455){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____1.call(this,state_66455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__;
})()
;})(__68080,switch__66149__auto__,c__66272__auto___68085,G__66442_68081,G__66442_68082__$1,n__4706__auto___68079,jobs,results,process,async))
})();
var state__66274__auto__ = (function (){var statearr_66470 = f__66273__auto__();
(statearr_66470[(6)] = c__66272__auto___68085);

return statearr_66470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__66274__auto__);
});})(__68080,c__66272__auto___68085,G__66442_68081,G__66442_68082__$1,n__4706__auto___68079,jobs,results,process,async))
);


break;
case "async":
var c__66272__auto___68095 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__68080,c__66272__auto___68095,G__66442_68081,G__66442_68082__$1,n__4706__auto___68079,jobs,results,process,async){
return (function (){
var f__66273__auto__ = (function (){var switch__66149__auto__ = ((function (__68080,c__66272__auto___68095,G__66442_68081,G__66442_68082__$1,n__4706__auto___68079,jobs,results,process,async){
return (function (state_66483){
var state_val_66484 = (state_66483[(1)]);
if((state_val_66484 === (1))){
var state_66483__$1 = state_66483;
var statearr_66485_68096 = state_66483__$1;
(statearr_66485_68096[(2)] = null);

(statearr_66485_68096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66484 === (2))){
var state_66483__$1 = state_66483;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66483__$1,(4),jobs);
} else {
if((state_val_66484 === (3))){
var inst_66481 = (state_66483[(2)]);
var state_66483__$1 = state_66483;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66483__$1,inst_66481);
} else {
if((state_val_66484 === (4))){
var inst_66473 = (state_66483[(2)]);
var inst_66474 = async(inst_66473);
var state_66483__$1 = state_66483;
if(cljs.core.truth_(inst_66474)){
var statearr_66486_68097 = state_66483__$1;
(statearr_66486_68097[(1)] = (5));

} else {
var statearr_66487_68098 = state_66483__$1;
(statearr_66487_68098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66484 === (5))){
var state_66483__$1 = state_66483;
var statearr_66488_68099 = state_66483__$1;
(statearr_66488_68099[(2)] = null);

(statearr_66488_68099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66484 === (6))){
var state_66483__$1 = state_66483;
var statearr_66489_68100 = state_66483__$1;
(statearr_66489_68100[(2)] = null);

(statearr_66489_68100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66484 === (7))){
var inst_66479 = (state_66483[(2)]);
var state_66483__$1 = state_66483;
var statearr_66490_68101 = state_66483__$1;
(statearr_66490_68101[(2)] = inst_66479);

(statearr_66490_68101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__68080,c__66272__auto___68095,G__66442_68081,G__66442_68082__$1,n__4706__auto___68079,jobs,results,process,async))
;
return ((function (__68080,switch__66149__auto__,c__66272__auto___68095,G__66442_68081,G__66442_68082__$1,n__4706__auto___68079,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____0 = (function (){
var statearr_66491 = [null,null,null,null,null,null,null];
(statearr_66491[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__);

(statearr_66491[(1)] = (1));

return statearr_66491;
});
var cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____1 = (function (state_66483){
while(true){
var ret_value__66151__auto__ = (function (){try{while(true){
var result__66152__auto__ = switch__66149__auto__(state_66483);
if(cljs.core.keyword_identical_QMARK_(result__66152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66152__auto__;
}
break;
}
}catch (e66492){if((e66492 instanceof Object)){
var ex__66153__auto__ = e66492;
var statearr_66493_68102 = state_66483;
(statearr_66493_68102[(5)] = ex__66153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66492;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68103 = state_66483;
state_66483 = G__68103;
continue;
} else {
return ret_value__66151__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__ = function(state_66483){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____1.call(this,state_66483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__;
})()
;})(__68080,switch__66149__auto__,c__66272__auto___68095,G__66442_68081,G__66442_68082__$1,n__4706__auto___68079,jobs,results,process,async))
})();
var state__66274__auto__ = (function (){var statearr_66494 = f__66273__auto__();
(statearr_66494[(6)] = c__66272__auto___68095);

return statearr_66494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__66274__auto__);
});})(__68080,c__66272__auto___68095,G__66442_68081,G__66442_68082__$1,n__4706__auto___68079,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66442_68082__$1)].join('')));

}

var G__68105 = (__68080 + (1));
__68080 = G__68105;
continue;
} else {
}
break;
}

var c__66272__auto___68106 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__66273__auto__ = (function (){var switch__66149__auto__ = (function (state_66516){
var state_val_66517 = (state_66516[(1)]);
if((state_val_66517 === (7))){
var inst_66512 = (state_66516[(2)]);
var state_66516__$1 = state_66516;
var statearr_66520_68108 = state_66516__$1;
(statearr_66520_68108[(2)] = inst_66512);

(statearr_66520_68108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66517 === (1))){
var state_66516__$1 = state_66516;
var statearr_66521_68109 = state_66516__$1;
(statearr_66521_68109[(2)] = null);

(statearr_66521_68109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66517 === (4))){
var inst_66497 = (state_66516[(7)]);
var inst_66497__$1 = (state_66516[(2)]);
var inst_66498 = (inst_66497__$1 == null);
var state_66516__$1 = (function (){var statearr_66522 = state_66516;
(statearr_66522[(7)] = inst_66497__$1);

return statearr_66522;
})();
if(cljs.core.truth_(inst_66498)){
var statearr_66523_68110 = state_66516__$1;
(statearr_66523_68110[(1)] = (5));

} else {
var statearr_66524_68111 = state_66516__$1;
(statearr_66524_68111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66517 === (6))){
var inst_66497 = (state_66516[(7)]);
var inst_66502 = (state_66516[(8)]);
var inst_66502__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_66503 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66504 = [inst_66497,inst_66502__$1];
var inst_66505 = (new cljs.core.PersistentVector(null,2,(5),inst_66503,inst_66504,null));
var state_66516__$1 = (function (){var statearr_66526 = state_66516;
(statearr_66526[(8)] = inst_66502__$1);

return statearr_66526;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66516__$1,(8),jobs,inst_66505);
} else {
if((state_val_66517 === (3))){
var inst_66514 = (state_66516[(2)]);
var state_66516__$1 = state_66516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66516__$1,inst_66514);
} else {
if((state_val_66517 === (2))){
var state_66516__$1 = state_66516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66516__$1,(4),from);
} else {
if((state_val_66517 === (9))){
var inst_66509 = (state_66516[(2)]);
var state_66516__$1 = (function (){var statearr_66532 = state_66516;
(statearr_66532[(9)] = inst_66509);

return statearr_66532;
})();
var statearr_66536_68112 = state_66516__$1;
(statearr_66536_68112[(2)] = null);

(statearr_66536_68112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66517 === (5))){
var inst_66500 = cljs.core.async.close_BANG_(jobs);
var state_66516__$1 = state_66516;
var statearr_66537_68113 = state_66516__$1;
(statearr_66537_68113[(2)] = inst_66500);

(statearr_66537_68113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66517 === (8))){
var inst_66502 = (state_66516[(8)]);
var inst_66507 = (state_66516[(2)]);
var state_66516__$1 = (function (){var statearr_66538 = state_66516;
(statearr_66538[(10)] = inst_66507);

return statearr_66538;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66516__$1,(9),results,inst_66502);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____0 = (function (){
var statearr_66542 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_66542[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__);

(statearr_66542[(1)] = (1));

return statearr_66542;
});
var cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____1 = (function (state_66516){
while(true){
var ret_value__66151__auto__ = (function (){try{while(true){
var result__66152__auto__ = switch__66149__auto__(state_66516);
if(cljs.core.keyword_identical_QMARK_(result__66152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66152__auto__;
}
break;
}
}catch (e66546){if((e66546 instanceof Object)){
var ex__66153__auto__ = e66546;
var statearr_66547_68117 = state_66516;
(statearr_66547_68117[(5)] = ex__66153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66546;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68118 = state_66516;
state_66516 = G__68118;
continue;
} else {
return ret_value__66151__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__ = function(state_66516){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____1.call(this,state_66516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__;
})()
})();
var state__66274__auto__ = (function (){var statearr_66548 = f__66273__auto__();
(statearr_66548[(6)] = c__66272__auto___68106);

return statearr_66548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__66274__auto__);
}));


var c__66272__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__66273__auto__ = (function (){var switch__66149__auto__ = (function (state_66589){
var state_val_66590 = (state_66589[(1)]);
if((state_val_66590 === (7))){
var inst_66585 = (state_66589[(2)]);
var state_66589__$1 = state_66589;
var statearr_66593_68119 = state_66589__$1;
(statearr_66593_68119[(2)] = inst_66585);

(statearr_66593_68119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66590 === (20))){
var state_66589__$1 = state_66589;
var statearr_66594_68120 = state_66589__$1;
(statearr_66594_68120[(2)] = null);

(statearr_66594_68120[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66590 === (1))){
var state_66589__$1 = state_66589;
var statearr_66595_68121 = state_66589__$1;
(statearr_66595_68121[(2)] = null);

(statearr_66595_68121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66590 === (4))){
var inst_66554 = (state_66589[(7)]);
var inst_66554__$1 = (state_66589[(2)]);
var inst_66555 = (inst_66554__$1 == null);
var state_66589__$1 = (function (){var statearr_66596 = state_66589;
(statearr_66596[(7)] = inst_66554__$1);

return statearr_66596;
})();
if(cljs.core.truth_(inst_66555)){
var statearr_66600_68122 = state_66589__$1;
(statearr_66600_68122[(1)] = (5));

} else {
var statearr_66601_68123 = state_66589__$1;
(statearr_66601_68123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66590 === (15))){
var inst_66567 = (state_66589[(8)]);
var state_66589__$1 = state_66589;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66589__$1,(18),to,inst_66567);
} else {
if((state_val_66590 === (21))){
var inst_66580 = (state_66589[(2)]);
var state_66589__$1 = state_66589;
var statearr_66602_68125 = state_66589__$1;
(statearr_66602_68125[(2)] = inst_66580);

(statearr_66602_68125[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66590 === (13))){
var inst_66582 = (state_66589[(2)]);
var state_66589__$1 = (function (){var statearr_66603 = state_66589;
(statearr_66603[(9)] = inst_66582);

return statearr_66603;
})();
var statearr_66604_68126 = state_66589__$1;
(statearr_66604_68126[(2)] = null);

(statearr_66604_68126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66590 === (6))){
var inst_66554 = (state_66589[(7)]);
var state_66589__$1 = state_66589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66589__$1,(11),inst_66554);
} else {
if((state_val_66590 === (17))){
var inst_66575 = (state_66589[(2)]);
var state_66589__$1 = state_66589;
if(cljs.core.truth_(inst_66575)){
var statearr_66605_68128 = state_66589__$1;
(statearr_66605_68128[(1)] = (19));

} else {
var statearr_66606_68129 = state_66589__$1;
(statearr_66606_68129[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66590 === (3))){
var inst_66587 = (state_66589[(2)]);
var state_66589__$1 = state_66589;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66589__$1,inst_66587);
} else {
if((state_val_66590 === (12))){
var inst_66564 = (state_66589[(10)]);
var state_66589__$1 = state_66589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66589__$1,(14),inst_66564);
} else {
if((state_val_66590 === (2))){
var state_66589__$1 = state_66589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66589__$1,(4),results);
} else {
if((state_val_66590 === (19))){
var state_66589__$1 = state_66589;
var statearr_66607_68131 = state_66589__$1;
(statearr_66607_68131[(2)] = null);

(statearr_66607_68131[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66590 === (11))){
var inst_66564 = (state_66589[(2)]);
var state_66589__$1 = (function (){var statearr_66608 = state_66589;
(statearr_66608[(10)] = inst_66564);

return statearr_66608;
})();
var statearr_66609_68132 = state_66589__$1;
(statearr_66609_68132[(2)] = null);

(statearr_66609_68132[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66590 === (9))){
var state_66589__$1 = state_66589;
var statearr_66610_68133 = state_66589__$1;
(statearr_66610_68133[(2)] = null);

(statearr_66610_68133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66590 === (5))){
var state_66589__$1 = state_66589;
if(cljs.core.truth_(close_QMARK_)){
var statearr_66611_68134 = state_66589__$1;
(statearr_66611_68134[(1)] = (8));

} else {
var statearr_66612_68135 = state_66589__$1;
(statearr_66612_68135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66590 === (14))){
var inst_66569 = (state_66589[(11)]);
var inst_66567 = (state_66589[(8)]);
var inst_66567__$1 = (state_66589[(2)]);
var inst_66568 = (inst_66567__$1 == null);
var inst_66569__$1 = cljs.core.not(inst_66568);
var state_66589__$1 = (function (){var statearr_66613 = state_66589;
(statearr_66613[(11)] = inst_66569__$1);

(statearr_66613[(8)] = inst_66567__$1);

return statearr_66613;
})();
if(inst_66569__$1){
var statearr_66614_68136 = state_66589__$1;
(statearr_66614_68136[(1)] = (15));

} else {
var statearr_66615_68137 = state_66589__$1;
(statearr_66615_68137[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66590 === (16))){
var inst_66569 = (state_66589[(11)]);
var state_66589__$1 = state_66589;
var statearr_66616_68139 = state_66589__$1;
(statearr_66616_68139[(2)] = inst_66569);

(statearr_66616_68139[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66590 === (10))){
var inst_66561 = (state_66589[(2)]);
var state_66589__$1 = state_66589;
var statearr_66617_68140 = state_66589__$1;
(statearr_66617_68140[(2)] = inst_66561);

(statearr_66617_68140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66590 === (18))){
var inst_66572 = (state_66589[(2)]);
var state_66589__$1 = state_66589;
var statearr_66618_68141 = state_66589__$1;
(statearr_66618_68141[(2)] = inst_66572);

(statearr_66618_68141[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66590 === (8))){
var inst_66558 = cljs.core.async.close_BANG_(to);
var state_66589__$1 = state_66589;
var statearr_66619_68142 = state_66589__$1;
(statearr_66619_68142[(2)] = inst_66558);

(statearr_66619_68142[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____0 = (function (){
var statearr_66620 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66620[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__);

(statearr_66620[(1)] = (1));

return statearr_66620;
});
var cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____1 = (function (state_66589){
while(true){
var ret_value__66151__auto__ = (function (){try{while(true){
var result__66152__auto__ = switch__66149__auto__(state_66589);
if(cljs.core.keyword_identical_QMARK_(result__66152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66152__auto__;
}
break;
}
}catch (e66621){if((e66621 instanceof Object)){
var ex__66153__auto__ = e66621;
var statearr_66622_68144 = state_66589;
(statearr_66622_68144[(5)] = ex__66153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66621;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68146 = state_66589;
state_66589 = G__68146;
continue;
} else {
return ret_value__66151__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__ = function(state_66589){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____1.call(this,state_66589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__66150__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__66150__auto__;
})()
})();
var state__66274__auto__ = (function (){var statearr_66623 = f__66273__auto__();
(statearr_66623[(6)] = c__66272__auto__);

return statearr_66623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__66274__auto__);
}));

return c__66272__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__66625 = arguments.length;
switch (G__66625) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__66627 = arguments.length;
switch (G__66627) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__66630 = arguments.length;
switch (G__66630) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__66272__auto___68151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__66273__auto__ = (function (){var switch__66149__auto__ = (function (state_66656){
var state_val_66657 = (state_66656[(1)]);
if((state_val_66657 === (7))){
var inst_66652 = (state_66656[(2)]);
var state_66656__$1 = state_66656;
var statearr_66658_68153 = state_66656__$1;
(statearr_66658_68153[(2)] = inst_66652);

(statearr_66658_68153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66657 === (1))){
var state_66656__$1 = state_66656;
var statearr_66659_68154 = state_66656__$1;
(statearr_66659_68154[(2)] = null);

(statearr_66659_68154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66657 === (4))){
var inst_66633 = (state_66656[(7)]);
var inst_66633__$1 = (state_66656[(2)]);
var inst_66634 = (inst_66633__$1 == null);
var state_66656__$1 = (function (){var statearr_66670 = state_66656;
(statearr_66670[(7)] = inst_66633__$1);

return statearr_66670;
})();
if(cljs.core.truth_(inst_66634)){
var statearr_66675_68156 = state_66656__$1;
(statearr_66675_68156[(1)] = (5));

} else {
var statearr_66680_68157 = state_66656__$1;
(statearr_66680_68157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66657 === (13))){
var state_66656__$1 = state_66656;
var statearr_66686_68158 = state_66656__$1;
(statearr_66686_68158[(2)] = null);

(statearr_66686_68158[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66657 === (6))){
var inst_66633 = (state_66656[(7)]);
var inst_66639 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_66633) : p.call(null,inst_66633));
var state_66656__$1 = state_66656;
if(cljs.core.truth_(inst_66639)){
var statearr_66687_68160 = state_66656__$1;
(statearr_66687_68160[(1)] = (9));

} else {
var statearr_66688_68161 = state_66656__$1;
(statearr_66688_68161[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66657 === (3))){
var inst_66654 = (state_66656[(2)]);
var state_66656__$1 = state_66656;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66656__$1,inst_66654);
} else {
if((state_val_66657 === (12))){
var state_66656__$1 = state_66656;
var statearr_66689_68162 = state_66656__$1;
(statearr_66689_68162[(2)] = null);

(statearr_66689_68162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66657 === (2))){
var state_66656__$1 = state_66656;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66656__$1,(4),ch);
} else {
if((state_val_66657 === (11))){
var inst_66633 = (state_66656[(7)]);
var inst_66643 = (state_66656[(2)]);
var state_66656__$1 = state_66656;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66656__$1,(8),inst_66643,inst_66633);
} else {
if((state_val_66657 === (9))){
var state_66656__$1 = state_66656;
var statearr_66691_68163 = state_66656__$1;
(statearr_66691_68163[(2)] = tc);

(statearr_66691_68163[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66657 === (5))){
var inst_66636 = cljs.core.async.close_BANG_(tc);
var inst_66637 = cljs.core.async.close_BANG_(fc);
var state_66656__$1 = (function (){var statearr_66692 = state_66656;
(statearr_66692[(8)] = inst_66636);

return statearr_66692;
})();
var statearr_66695_68164 = state_66656__$1;
(statearr_66695_68164[(2)] = inst_66637);

(statearr_66695_68164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66657 === (14))){
var inst_66650 = (state_66656[(2)]);
var state_66656__$1 = state_66656;
var statearr_66696_68165 = state_66656__$1;
(statearr_66696_68165[(2)] = inst_66650);

(statearr_66696_68165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66657 === (10))){
var state_66656__$1 = state_66656;
var statearr_66697_68166 = state_66656__$1;
(statearr_66697_68166[(2)] = fc);

(statearr_66697_68166[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66657 === (8))){
var inst_66645 = (state_66656[(2)]);
var state_66656__$1 = state_66656;
if(cljs.core.truth_(inst_66645)){
var statearr_66698_68167 = state_66656__$1;
(statearr_66698_68167[(1)] = (12));

} else {
var statearr_66699_68168 = state_66656__$1;
(statearr_66699_68168[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__66150__auto__ = null;
var cljs$core$async$state_machine__66150__auto____0 = (function (){
var statearr_66700 = [null,null,null,null,null,null,null,null,null];
(statearr_66700[(0)] = cljs$core$async$state_machine__66150__auto__);

(statearr_66700[(1)] = (1));

return statearr_66700;
});
var cljs$core$async$state_machine__66150__auto____1 = (function (state_66656){
while(true){
var ret_value__66151__auto__ = (function (){try{while(true){
var result__66152__auto__ = switch__66149__auto__(state_66656);
if(cljs.core.keyword_identical_QMARK_(result__66152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66152__auto__;
}
break;
}
}catch (e66706){if((e66706 instanceof Object)){
var ex__66153__auto__ = e66706;
var statearr_66713_68169 = state_66656;
(statearr_66713_68169[(5)] = ex__66153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66706;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68171 = state_66656;
state_66656 = G__68171;
continue;
} else {
return ret_value__66151__auto__;
}
break;
}
});
cljs$core$async$state_machine__66150__auto__ = function(state_66656){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66150__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66150__auto____1.call(this,state_66656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66150__auto____0;
cljs$core$async$state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66150__auto____1;
return cljs$core$async$state_machine__66150__auto__;
})()
})();
var state__66274__auto__ = (function (){var statearr_66724 = f__66273__auto__();
(statearr_66724[(6)] = c__66272__auto___68151);

return statearr_66724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__66274__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__66272__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__66273__auto__ = (function (){var switch__66149__auto__ = (function (state_66762){
var state_val_66763 = (state_66762[(1)]);
if((state_val_66763 === (7))){
var inst_66753 = (state_66762[(2)]);
var state_66762__$1 = state_66762;
var statearr_66773_68172 = state_66762__$1;
(statearr_66773_68172[(2)] = inst_66753);

(statearr_66773_68172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66763 === (1))){
var inst_66725 = init;
var state_66762__$1 = (function (){var statearr_66785 = state_66762;
(statearr_66785[(7)] = inst_66725);

return statearr_66785;
})();
var statearr_66791_68173 = state_66762__$1;
(statearr_66791_68173[(2)] = null);

(statearr_66791_68173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66763 === (4))){
var inst_66728 = (state_66762[(8)]);
var inst_66728__$1 = (state_66762[(2)]);
var inst_66733 = (inst_66728__$1 == null);
var state_66762__$1 = (function (){var statearr_66792 = state_66762;
(statearr_66792[(8)] = inst_66728__$1);

return statearr_66792;
})();
if(cljs.core.truth_(inst_66733)){
var statearr_66793_68175 = state_66762__$1;
(statearr_66793_68175[(1)] = (5));

} else {
var statearr_66794_68177 = state_66762__$1;
(statearr_66794_68177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66763 === (6))){
var inst_66725 = (state_66762[(7)]);
var inst_66737 = (state_66762[(9)]);
var inst_66728 = (state_66762[(8)]);
var inst_66737__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_66725,inst_66728) : f.call(null,inst_66725,inst_66728));
var inst_66738 = cljs.core.reduced_QMARK_(inst_66737__$1);
var state_66762__$1 = (function (){var statearr_66795 = state_66762;
(statearr_66795[(9)] = inst_66737__$1);

return statearr_66795;
})();
if(inst_66738){
var statearr_66796_68178 = state_66762__$1;
(statearr_66796_68178[(1)] = (8));

} else {
var statearr_66797_68179 = state_66762__$1;
(statearr_66797_68179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66763 === (3))){
var inst_66755 = (state_66762[(2)]);
var state_66762__$1 = state_66762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66762__$1,inst_66755);
} else {
if((state_val_66763 === (2))){
var state_66762__$1 = state_66762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66762__$1,(4),ch);
} else {
if((state_val_66763 === (9))){
var inst_66737 = (state_66762[(9)]);
var inst_66725 = inst_66737;
var state_66762__$1 = (function (){var statearr_66799 = state_66762;
(statearr_66799[(7)] = inst_66725);

return statearr_66799;
})();
var statearr_66800_68181 = state_66762__$1;
(statearr_66800_68181[(2)] = null);

(statearr_66800_68181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66763 === (5))){
var inst_66725 = (state_66762[(7)]);
var state_66762__$1 = state_66762;
var statearr_66801_68182 = state_66762__$1;
(statearr_66801_68182[(2)] = inst_66725);

(statearr_66801_68182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66763 === (10))){
var inst_66750 = (state_66762[(2)]);
var state_66762__$1 = state_66762;
var statearr_66802_68183 = state_66762__$1;
(statearr_66802_68183[(2)] = inst_66750);

(statearr_66802_68183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66763 === (8))){
var inst_66737 = (state_66762[(9)]);
var inst_66745 = cljs.core.deref(inst_66737);
var state_66762__$1 = state_66762;
var statearr_66803_68184 = state_66762__$1;
(statearr_66803_68184[(2)] = inst_66745);

(statearr_66803_68184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__66150__auto__ = null;
var cljs$core$async$reduce_$_state_machine__66150__auto____0 = (function (){
var statearr_66804 = [null,null,null,null,null,null,null,null,null,null];
(statearr_66804[(0)] = cljs$core$async$reduce_$_state_machine__66150__auto__);

(statearr_66804[(1)] = (1));

return statearr_66804;
});
var cljs$core$async$reduce_$_state_machine__66150__auto____1 = (function (state_66762){
while(true){
var ret_value__66151__auto__ = (function (){try{while(true){
var result__66152__auto__ = switch__66149__auto__(state_66762);
if(cljs.core.keyword_identical_QMARK_(result__66152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66152__auto__;
}
break;
}
}catch (e66813){if((e66813 instanceof Object)){
var ex__66153__auto__ = e66813;
var statearr_66814_68185 = state_66762;
(statearr_66814_68185[(5)] = ex__66153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66813;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68186 = state_66762;
state_66762 = G__68186;
continue;
} else {
return ret_value__66151__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__66150__auto__ = function(state_66762){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__66150__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__66150__auto____1.call(this,state_66762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__66150__auto____0;
cljs$core$async$reduce_$_state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__66150__auto____1;
return cljs$core$async$reduce_$_state_machine__66150__auto__;
})()
})();
var state__66274__auto__ = (function (){var statearr_66819 = f__66273__auto__();
(statearr_66819[(6)] = c__66272__auto__);

return statearr_66819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__66274__auto__);
}));

return c__66272__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__66272__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__66273__auto__ = (function (){var switch__66149__auto__ = (function (state_66828){
var state_val_66829 = (state_66828[(1)]);
if((state_val_66829 === (1))){
var inst_66823 = cljs.core.async.reduce(f__$1,init,ch);
var state_66828__$1 = state_66828;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66828__$1,(2),inst_66823);
} else {
if((state_val_66829 === (2))){
var inst_66825 = (state_66828[(2)]);
var inst_66826 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_66825) : f__$1.call(null,inst_66825));
var state_66828__$1 = state_66828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66828__$1,inst_66826);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__66150__auto__ = null;
var cljs$core$async$transduce_$_state_machine__66150__auto____0 = (function (){
var statearr_66831 = [null,null,null,null,null,null,null];
(statearr_66831[(0)] = cljs$core$async$transduce_$_state_machine__66150__auto__);

(statearr_66831[(1)] = (1));

return statearr_66831;
});
var cljs$core$async$transduce_$_state_machine__66150__auto____1 = (function (state_66828){
while(true){
var ret_value__66151__auto__ = (function (){try{while(true){
var result__66152__auto__ = switch__66149__auto__(state_66828);
if(cljs.core.keyword_identical_QMARK_(result__66152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66152__auto__;
}
break;
}
}catch (e66833){if((e66833 instanceof Object)){
var ex__66153__auto__ = e66833;
var statearr_66834_68188 = state_66828;
(statearr_66834_68188[(5)] = ex__66153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66833;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68189 = state_66828;
state_66828 = G__68189;
continue;
} else {
return ret_value__66151__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__66150__auto__ = function(state_66828){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__66150__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__66150__auto____1.call(this,state_66828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__66150__auto____0;
cljs$core$async$transduce_$_state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__66150__auto____1;
return cljs$core$async$transduce_$_state_machine__66150__auto__;
})()
})();
var state__66274__auto__ = (function (){var statearr_66836 = f__66273__auto__();
(statearr_66836[(6)] = c__66272__auto__);

return statearr_66836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__66274__auto__);
}));

return c__66272__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__66839 = arguments.length;
switch (G__66839) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__66272__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__66273__auto__ = (function (){var switch__66149__auto__ = (function (state_66866){
var state_val_66867 = (state_66866[(1)]);
if((state_val_66867 === (7))){
var inst_66848 = (state_66866[(2)]);
var state_66866__$1 = state_66866;
var statearr_66868_68193 = state_66866__$1;
(statearr_66868_68193[(2)] = inst_66848);

(statearr_66868_68193[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66867 === (1))){
var inst_66841 = cljs.core.seq(coll);
var inst_66842 = inst_66841;
var state_66866__$1 = (function (){var statearr_66869 = state_66866;
(statearr_66869[(7)] = inst_66842);

return statearr_66869;
})();
var statearr_66870_68194 = state_66866__$1;
(statearr_66870_68194[(2)] = null);

(statearr_66870_68194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66867 === (4))){
var inst_66842 = (state_66866[(7)]);
var inst_66846 = cljs.core.first(inst_66842);
var state_66866__$1 = state_66866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66866__$1,(7),ch,inst_66846);
} else {
if((state_val_66867 === (13))){
var inst_66860 = (state_66866[(2)]);
var state_66866__$1 = state_66866;
var statearr_66871_68196 = state_66866__$1;
(statearr_66871_68196[(2)] = inst_66860);

(statearr_66871_68196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66867 === (6))){
var inst_66851 = (state_66866[(2)]);
var state_66866__$1 = state_66866;
if(cljs.core.truth_(inst_66851)){
var statearr_66872_68197 = state_66866__$1;
(statearr_66872_68197[(1)] = (8));

} else {
var statearr_66873_68198 = state_66866__$1;
(statearr_66873_68198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66867 === (3))){
var inst_66864 = (state_66866[(2)]);
var state_66866__$1 = state_66866;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66866__$1,inst_66864);
} else {
if((state_val_66867 === (12))){
var state_66866__$1 = state_66866;
var statearr_66874_68199 = state_66866__$1;
(statearr_66874_68199[(2)] = null);

(statearr_66874_68199[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66867 === (2))){
var inst_66842 = (state_66866[(7)]);
var state_66866__$1 = state_66866;
if(cljs.core.truth_(inst_66842)){
var statearr_66875_68200 = state_66866__$1;
(statearr_66875_68200[(1)] = (4));

} else {
var statearr_66876_68201 = state_66866__$1;
(statearr_66876_68201[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66867 === (11))){
var inst_66857 = cljs.core.async.close_BANG_(ch);
var state_66866__$1 = state_66866;
var statearr_66877_68202 = state_66866__$1;
(statearr_66877_68202[(2)] = inst_66857);

(statearr_66877_68202[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66867 === (9))){
var state_66866__$1 = state_66866;
if(cljs.core.truth_(close_QMARK_)){
var statearr_66878_68203 = state_66866__$1;
(statearr_66878_68203[(1)] = (11));

} else {
var statearr_66879_68204 = state_66866__$1;
(statearr_66879_68204[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66867 === (5))){
var inst_66842 = (state_66866[(7)]);
var state_66866__$1 = state_66866;
var statearr_66880_68205 = state_66866__$1;
(statearr_66880_68205[(2)] = inst_66842);

(statearr_66880_68205[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66867 === (10))){
var inst_66862 = (state_66866[(2)]);
var state_66866__$1 = state_66866;
var statearr_66881_68206 = state_66866__$1;
(statearr_66881_68206[(2)] = inst_66862);

(statearr_66881_68206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66867 === (8))){
var inst_66842 = (state_66866[(7)]);
var inst_66853 = cljs.core.next(inst_66842);
var inst_66842__$1 = inst_66853;
var state_66866__$1 = (function (){var statearr_66882 = state_66866;
(statearr_66882[(7)] = inst_66842__$1);

return statearr_66882;
})();
var statearr_66883_68207 = state_66866__$1;
(statearr_66883_68207[(2)] = null);

(statearr_66883_68207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__66150__auto__ = null;
var cljs$core$async$state_machine__66150__auto____0 = (function (){
var statearr_66884 = [null,null,null,null,null,null,null,null];
(statearr_66884[(0)] = cljs$core$async$state_machine__66150__auto__);

(statearr_66884[(1)] = (1));

return statearr_66884;
});
var cljs$core$async$state_machine__66150__auto____1 = (function (state_66866){
while(true){
var ret_value__66151__auto__ = (function (){try{while(true){
var result__66152__auto__ = switch__66149__auto__(state_66866);
if(cljs.core.keyword_identical_QMARK_(result__66152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66152__auto__;
}
break;
}
}catch (e66885){if((e66885 instanceof Object)){
var ex__66153__auto__ = e66885;
var statearr_66886_68209 = state_66866;
(statearr_66886_68209[(5)] = ex__66153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66885;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68210 = state_66866;
state_66866 = G__68210;
continue;
} else {
return ret_value__66151__auto__;
}
break;
}
});
cljs$core$async$state_machine__66150__auto__ = function(state_66866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66150__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66150__auto____1.call(this,state_66866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66150__auto____0;
cljs$core$async$state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66150__auto____1;
return cljs$core$async$state_machine__66150__auto__;
})()
})();
var state__66274__auto__ = (function (){var statearr_66887 = f__66273__auto__();
(statearr_66887[(6)] = c__66272__auto__);

return statearr_66887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__66274__auto__);
}));

return c__66272__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_68211 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_68211(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_68213 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_68213(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_68216 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_68216(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_68217 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_68217(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async66890 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66890 = (function (ch,cs,meta66891){
this.ch = ch;
this.cs = cs;
this.meta66891 = meta66891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async66890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66892,meta66891__$1){
var self__ = this;
var _66892__$1 = this;
return (new cljs.core.async.t_cljs$core$async66890(self__.ch,self__.cs,meta66891__$1));
}));

(cljs.core.async.t_cljs$core$async66890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66892){
var self__ = this;
var _66892__$1 = this;
return self__.meta66891;
}));

(cljs.core.async.t_cljs$core$async66890.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66890.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async66890.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66890.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async66890.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async66890.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async66890.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta66891","meta66891",2126622588,null)], null);
}));

(cljs.core.async.t_cljs$core$async66890.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async66890.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66890");

(cljs.core.async.t_cljs$core$async66890.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async66890");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async66890.
 */
cljs.core.async.__GT_t_cljs$core$async66890 = (function cljs$core$async$mult_$___GT_t_cljs$core$async66890(ch__$1,cs__$1,meta66891){
return (new cljs.core.async.t_cljs$core$async66890(ch__$1,cs__$1,meta66891));
});

}

return (new cljs.core.async.t_cljs$core$async66890(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__66272__auto___68224 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__66273__auto__ = (function (){var switch__66149__auto__ = (function (state_67027){
var state_val_67028 = (state_67027[(1)]);
if((state_val_67028 === (7))){
var inst_67023 = (state_67027[(2)]);
var state_67027__$1 = state_67027;
var statearr_67029_68225 = state_67027__$1;
(statearr_67029_68225[(2)] = inst_67023);

(statearr_67029_68225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (20))){
var inst_66926 = (state_67027[(7)]);
var inst_66938 = cljs.core.first(inst_66926);
var inst_66939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66938,(0),null);
var inst_66940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66938,(1),null);
var state_67027__$1 = (function (){var statearr_67030 = state_67027;
(statearr_67030[(8)] = inst_66939);

return statearr_67030;
})();
if(cljs.core.truth_(inst_66940)){
var statearr_67031_68226 = state_67027__$1;
(statearr_67031_68226[(1)] = (22));

} else {
var statearr_67032_68227 = state_67027__$1;
(statearr_67032_68227[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (27))){
var inst_66975 = (state_67027[(9)]);
var inst_66895 = (state_67027[(10)]);
var inst_66970 = (state_67027[(11)]);
var inst_66968 = (state_67027[(12)]);
var inst_66975__$1 = cljs.core._nth(inst_66968,inst_66970);
var inst_66976 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_66975__$1,inst_66895,done);
var state_67027__$1 = (function (){var statearr_67033 = state_67027;
(statearr_67033[(9)] = inst_66975__$1);

return statearr_67033;
})();
if(cljs.core.truth_(inst_66976)){
var statearr_67034_68228 = state_67027__$1;
(statearr_67034_68228[(1)] = (30));

} else {
var statearr_67035_68229 = state_67027__$1;
(statearr_67035_68229[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (1))){
var state_67027__$1 = state_67027;
var statearr_67036_68230 = state_67027__$1;
(statearr_67036_68230[(2)] = null);

(statearr_67036_68230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (24))){
var inst_66926 = (state_67027[(7)]);
var inst_66945 = (state_67027[(2)]);
var inst_66946 = cljs.core.next(inst_66926);
var inst_66904 = inst_66946;
var inst_66905 = null;
var inst_66906 = (0);
var inst_66907 = (0);
var state_67027__$1 = (function (){var statearr_67037 = state_67027;
(statearr_67037[(13)] = inst_66907);

(statearr_67037[(14)] = inst_66945);

(statearr_67037[(15)] = inst_66906);

(statearr_67037[(16)] = inst_66904);

(statearr_67037[(17)] = inst_66905);

return statearr_67037;
})();
var statearr_67038_68231 = state_67027__$1;
(statearr_67038_68231[(2)] = null);

(statearr_67038_68231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (39))){
var state_67027__$1 = state_67027;
var statearr_67042_68232 = state_67027__$1;
(statearr_67042_68232[(2)] = null);

(statearr_67042_68232[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (4))){
var inst_66895 = (state_67027[(10)]);
var inst_66895__$1 = (state_67027[(2)]);
var inst_66896 = (inst_66895__$1 == null);
var state_67027__$1 = (function (){var statearr_67043 = state_67027;
(statearr_67043[(10)] = inst_66895__$1);

return statearr_67043;
})();
if(cljs.core.truth_(inst_66896)){
var statearr_67044_68233 = state_67027__$1;
(statearr_67044_68233[(1)] = (5));

} else {
var statearr_67045_68234 = state_67027__$1;
(statearr_67045_68234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (15))){
var inst_66907 = (state_67027[(13)]);
var inst_66906 = (state_67027[(15)]);
var inst_66904 = (state_67027[(16)]);
var inst_66905 = (state_67027[(17)]);
var inst_66922 = (state_67027[(2)]);
var inst_66923 = (inst_66907 + (1));
var tmp67039 = inst_66906;
var tmp67040 = inst_66904;
var tmp67041 = inst_66905;
var inst_66904__$1 = tmp67040;
var inst_66905__$1 = tmp67041;
var inst_66906__$1 = tmp67039;
var inst_66907__$1 = inst_66923;
var state_67027__$1 = (function (){var statearr_67046 = state_67027;
(statearr_67046[(13)] = inst_66907__$1);

(statearr_67046[(18)] = inst_66922);

(statearr_67046[(15)] = inst_66906__$1);

(statearr_67046[(16)] = inst_66904__$1);

(statearr_67046[(17)] = inst_66905__$1);

return statearr_67046;
})();
var statearr_67047_68235 = state_67027__$1;
(statearr_67047_68235[(2)] = null);

(statearr_67047_68235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (21))){
var inst_66949 = (state_67027[(2)]);
var state_67027__$1 = state_67027;
var statearr_67051_68237 = state_67027__$1;
(statearr_67051_68237[(2)] = inst_66949);

(statearr_67051_68237[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (31))){
var inst_66975 = (state_67027[(9)]);
var inst_66979 = done(null);
var inst_66980 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_66975);
var state_67027__$1 = (function (){var statearr_67052 = state_67027;
(statearr_67052[(19)] = inst_66979);

return statearr_67052;
})();
var statearr_67053_68239 = state_67027__$1;
(statearr_67053_68239[(2)] = inst_66980);

(statearr_67053_68239[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (32))){
var inst_66967 = (state_67027[(20)]);
var inst_66969 = (state_67027[(21)]);
var inst_66970 = (state_67027[(11)]);
var inst_66968 = (state_67027[(12)]);
var inst_66982 = (state_67027[(2)]);
var inst_66983 = (inst_66970 + (1));
var tmp67048 = inst_66967;
var tmp67049 = inst_66969;
var tmp67050 = inst_66968;
var inst_66967__$1 = tmp67048;
var inst_66968__$1 = tmp67050;
var inst_66969__$1 = tmp67049;
var inst_66970__$1 = inst_66983;
var state_67027__$1 = (function (){var statearr_67054 = state_67027;
(statearr_67054[(20)] = inst_66967__$1);

(statearr_67054[(21)] = inst_66969__$1);

(statearr_67054[(22)] = inst_66982);

(statearr_67054[(11)] = inst_66970__$1);

(statearr_67054[(12)] = inst_66968__$1);

return statearr_67054;
})();
var statearr_67055_68240 = state_67027__$1;
(statearr_67055_68240[(2)] = null);

(statearr_67055_68240[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (40))){
var inst_66995 = (state_67027[(23)]);
var inst_66999 = done(null);
var inst_67000 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_66995);
var state_67027__$1 = (function (){var statearr_67056 = state_67027;
(statearr_67056[(24)] = inst_66999);

return statearr_67056;
})();
var statearr_67057_68242 = state_67027__$1;
(statearr_67057_68242[(2)] = inst_67000);

(statearr_67057_68242[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (33))){
var inst_66986 = (state_67027[(25)]);
var inst_66988 = cljs.core.chunked_seq_QMARK_(inst_66986);
var state_67027__$1 = state_67027;
if(inst_66988){
var statearr_67058_68244 = state_67027__$1;
(statearr_67058_68244[(1)] = (36));

} else {
var statearr_67059_68245 = state_67027__$1;
(statearr_67059_68245[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (13))){
var inst_66916 = (state_67027[(26)]);
var inst_66919 = cljs.core.async.close_BANG_(inst_66916);
var state_67027__$1 = state_67027;
var statearr_67060_68246 = state_67027__$1;
(statearr_67060_68246[(2)] = inst_66919);

(statearr_67060_68246[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (22))){
var inst_66939 = (state_67027[(8)]);
var inst_66942 = cljs.core.async.close_BANG_(inst_66939);
var state_67027__$1 = state_67027;
var statearr_67061_68247 = state_67027__$1;
(statearr_67061_68247[(2)] = inst_66942);

(statearr_67061_68247[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (36))){
var inst_66986 = (state_67027[(25)]);
var inst_66990 = cljs.core.chunk_first(inst_66986);
var inst_66991 = cljs.core.chunk_rest(inst_66986);
var inst_66992 = cljs.core.count(inst_66990);
var inst_66967 = inst_66991;
var inst_66968 = inst_66990;
var inst_66969 = inst_66992;
var inst_66970 = (0);
var state_67027__$1 = (function (){var statearr_67062 = state_67027;
(statearr_67062[(20)] = inst_66967);

(statearr_67062[(21)] = inst_66969);

(statearr_67062[(11)] = inst_66970);

(statearr_67062[(12)] = inst_66968);

return statearr_67062;
})();
var statearr_67063_68248 = state_67027__$1;
(statearr_67063_68248[(2)] = null);

(statearr_67063_68248[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (41))){
var inst_66986 = (state_67027[(25)]);
var inst_67002 = (state_67027[(2)]);
var inst_67003 = cljs.core.next(inst_66986);
var inst_66967 = inst_67003;
var inst_66968 = null;
var inst_66969 = (0);
var inst_66970 = (0);
var state_67027__$1 = (function (){var statearr_67064 = state_67027;
(statearr_67064[(20)] = inst_66967);

(statearr_67064[(21)] = inst_66969);

(statearr_67064[(11)] = inst_66970);

(statearr_67064[(12)] = inst_66968);

(statearr_67064[(27)] = inst_67002);

return statearr_67064;
})();
var statearr_67065_68249 = state_67027__$1;
(statearr_67065_68249[(2)] = null);

(statearr_67065_68249[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (43))){
var state_67027__$1 = state_67027;
var statearr_67066_68250 = state_67027__$1;
(statearr_67066_68250[(2)] = null);

(statearr_67066_68250[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (29))){
var inst_67011 = (state_67027[(2)]);
var state_67027__$1 = state_67027;
var statearr_67067_68251 = state_67027__$1;
(statearr_67067_68251[(2)] = inst_67011);

(statearr_67067_68251[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (44))){
var inst_67020 = (state_67027[(2)]);
var state_67027__$1 = (function (){var statearr_67068 = state_67027;
(statearr_67068[(28)] = inst_67020);

return statearr_67068;
})();
var statearr_67069_68252 = state_67027__$1;
(statearr_67069_68252[(2)] = null);

(statearr_67069_68252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (6))){
var inst_66959 = (state_67027[(29)]);
var inst_66958 = cljs.core.deref(cs);
var inst_66959__$1 = cljs.core.keys(inst_66958);
var inst_66960 = cljs.core.count(inst_66959__$1);
var inst_66961 = cljs.core.reset_BANG_(dctr,inst_66960);
var inst_66966 = cljs.core.seq(inst_66959__$1);
var inst_66967 = inst_66966;
var inst_66968 = null;
var inst_66969 = (0);
var inst_66970 = (0);
var state_67027__$1 = (function (){var statearr_67070 = state_67027;
(statearr_67070[(20)] = inst_66967);

(statearr_67070[(21)] = inst_66969);

(statearr_67070[(29)] = inst_66959__$1);

(statearr_67070[(30)] = inst_66961);

(statearr_67070[(11)] = inst_66970);

(statearr_67070[(12)] = inst_66968);

return statearr_67070;
})();
var statearr_67071_68255 = state_67027__$1;
(statearr_67071_68255[(2)] = null);

(statearr_67071_68255[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (28))){
var inst_66967 = (state_67027[(20)]);
var inst_66986 = (state_67027[(25)]);
var inst_66986__$1 = cljs.core.seq(inst_66967);
var state_67027__$1 = (function (){var statearr_67072 = state_67027;
(statearr_67072[(25)] = inst_66986__$1);

return statearr_67072;
})();
if(inst_66986__$1){
var statearr_67073_68257 = state_67027__$1;
(statearr_67073_68257[(1)] = (33));

} else {
var statearr_67074_68258 = state_67027__$1;
(statearr_67074_68258[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (25))){
var inst_66969 = (state_67027[(21)]);
var inst_66970 = (state_67027[(11)]);
var inst_66972 = (inst_66970 < inst_66969);
var inst_66973 = inst_66972;
var state_67027__$1 = state_67027;
if(cljs.core.truth_(inst_66973)){
var statearr_67075_68261 = state_67027__$1;
(statearr_67075_68261[(1)] = (27));

} else {
var statearr_67076_68263 = state_67027__$1;
(statearr_67076_68263[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (34))){
var state_67027__$1 = state_67027;
var statearr_67077_68264 = state_67027__$1;
(statearr_67077_68264[(2)] = null);

(statearr_67077_68264[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (17))){
var state_67027__$1 = state_67027;
var statearr_67078_68265 = state_67027__$1;
(statearr_67078_68265[(2)] = null);

(statearr_67078_68265[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (3))){
var inst_67025 = (state_67027[(2)]);
var state_67027__$1 = state_67027;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67027__$1,inst_67025);
} else {
if((state_val_67028 === (12))){
var inst_66954 = (state_67027[(2)]);
var state_67027__$1 = state_67027;
var statearr_67079_68269 = state_67027__$1;
(statearr_67079_68269[(2)] = inst_66954);

(statearr_67079_68269[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (2))){
var state_67027__$1 = state_67027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67027__$1,(4),ch);
} else {
if((state_val_67028 === (23))){
var state_67027__$1 = state_67027;
var statearr_67080_68270 = state_67027__$1;
(statearr_67080_68270[(2)] = null);

(statearr_67080_68270[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (35))){
var inst_67009 = (state_67027[(2)]);
var state_67027__$1 = state_67027;
var statearr_67081_68275 = state_67027__$1;
(statearr_67081_68275[(2)] = inst_67009);

(statearr_67081_68275[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (19))){
var inst_66926 = (state_67027[(7)]);
var inst_66930 = cljs.core.chunk_first(inst_66926);
var inst_66931 = cljs.core.chunk_rest(inst_66926);
var inst_66932 = cljs.core.count(inst_66930);
var inst_66904 = inst_66931;
var inst_66905 = inst_66930;
var inst_66906 = inst_66932;
var inst_66907 = (0);
var state_67027__$1 = (function (){var statearr_67082 = state_67027;
(statearr_67082[(13)] = inst_66907);

(statearr_67082[(15)] = inst_66906);

(statearr_67082[(16)] = inst_66904);

(statearr_67082[(17)] = inst_66905);

return statearr_67082;
})();
var statearr_67083_68280 = state_67027__$1;
(statearr_67083_68280[(2)] = null);

(statearr_67083_68280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (11))){
var inst_66926 = (state_67027[(7)]);
var inst_66904 = (state_67027[(16)]);
var inst_66926__$1 = cljs.core.seq(inst_66904);
var state_67027__$1 = (function (){var statearr_67084 = state_67027;
(statearr_67084[(7)] = inst_66926__$1);

return statearr_67084;
})();
if(inst_66926__$1){
var statearr_67085_68284 = state_67027__$1;
(statearr_67085_68284[(1)] = (16));

} else {
var statearr_67086_68285 = state_67027__$1;
(statearr_67086_68285[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (9))){
var inst_66956 = (state_67027[(2)]);
var state_67027__$1 = state_67027;
var statearr_67087_68286 = state_67027__$1;
(statearr_67087_68286[(2)] = inst_66956);

(statearr_67087_68286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (5))){
var inst_66902 = cljs.core.deref(cs);
var inst_66903 = cljs.core.seq(inst_66902);
var inst_66904 = inst_66903;
var inst_66905 = null;
var inst_66906 = (0);
var inst_66907 = (0);
var state_67027__$1 = (function (){var statearr_67088 = state_67027;
(statearr_67088[(13)] = inst_66907);

(statearr_67088[(15)] = inst_66906);

(statearr_67088[(16)] = inst_66904);

(statearr_67088[(17)] = inst_66905);

return statearr_67088;
})();
var statearr_67089_68293 = state_67027__$1;
(statearr_67089_68293[(2)] = null);

(statearr_67089_68293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (14))){
var state_67027__$1 = state_67027;
var statearr_67090_68295 = state_67027__$1;
(statearr_67090_68295[(2)] = null);

(statearr_67090_68295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (45))){
var inst_67017 = (state_67027[(2)]);
var state_67027__$1 = state_67027;
var statearr_67091_68299 = state_67027__$1;
(statearr_67091_68299[(2)] = inst_67017);

(statearr_67091_68299[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (26))){
var inst_66959 = (state_67027[(29)]);
var inst_67013 = (state_67027[(2)]);
var inst_67014 = cljs.core.seq(inst_66959);
var state_67027__$1 = (function (){var statearr_67092 = state_67027;
(statearr_67092[(31)] = inst_67013);

return statearr_67092;
})();
if(inst_67014){
var statearr_67093_68303 = state_67027__$1;
(statearr_67093_68303[(1)] = (42));

} else {
var statearr_67094_68304 = state_67027__$1;
(statearr_67094_68304[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (16))){
var inst_66926 = (state_67027[(7)]);
var inst_66928 = cljs.core.chunked_seq_QMARK_(inst_66926);
var state_67027__$1 = state_67027;
if(inst_66928){
var statearr_67095_68306 = state_67027__$1;
(statearr_67095_68306[(1)] = (19));

} else {
var statearr_67096_68307 = state_67027__$1;
(statearr_67096_68307[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (38))){
var inst_67006 = (state_67027[(2)]);
var state_67027__$1 = state_67027;
var statearr_67097_68312 = state_67027__$1;
(statearr_67097_68312[(2)] = inst_67006);

(statearr_67097_68312[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (30))){
var state_67027__$1 = state_67027;
var statearr_67098_68313 = state_67027__$1;
(statearr_67098_68313[(2)] = null);

(statearr_67098_68313[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (10))){
var inst_66907 = (state_67027[(13)]);
var inst_66905 = (state_67027[(17)]);
var inst_66915 = cljs.core._nth(inst_66905,inst_66907);
var inst_66916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66915,(0),null);
var inst_66917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66915,(1),null);
var state_67027__$1 = (function (){var statearr_67099 = state_67027;
(statearr_67099[(26)] = inst_66916);

return statearr_67099;
})();
if(cljs.core.truth_(inst_66917)){
var statearr_67100_68317 = state_67027__$1;
(statearr_67100_68317[(1)] = (13));

} else {
var statearr_67101_68318 = state_67027__$1;
(statearr_67101_68318[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (18))){
var inst_66952 = (state_67027[(2)]);
var state_67027__$1 = state_67027;
var statearr_67102_68320 = state_67027__$1;
(statearr_67102_68320[(2)] = inst_66952);

(statearr_67102_68320[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (42))){
var state_67027__$1 = state_67027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67027__$1,(45),dchan);
} else {
if((state_val_67028 === (37))){
var inst_66995 = (state_67027[(23)]);
var inst_66895 = (state_67027[(10)]);
var inst_66986 = (state_67027[(25)]);
var inst_66995__$1 = cljs.core.first(inst_66986);
var inst_66996 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_66995__$1,inst_66895,done);
var state_67027__$1 = (function (){var statearr_67103 = state_67027;
(statearr_67103[(23)] = inst_66995__$1);

return statearr_67103;
})();
if(cljs.core.truth_(inst_66996)){
var statearr_67104_68331 = state_67027__$1;
(statearr_67104_68331[(1)] = (39));

} else {
var statearr_67105_68332 = state_67027__$1;
(statearr_67105_68332[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67028 === (8))){
var inst_66907 = (state_67027[(13)]);
var inst_66906 = (state_67027[(15)]);
var inst_66909 = (inst_66907 < inst_66906);
var inst_66910 = inst_66909;
var state_67027__$1 = state_67027;
if(cljs.core.truth_(inst_66910)){
var statearr_67106_68334 = state_67027__$1;
(statearr_67106_68334[(1)] = (10));

} else {
var statearr_67107_68335 = state_67027__$1;
(statearr_67107_68335[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__66150__auto__ = null;
var cljs$core$async$mult_$_state_machine__66150__auto____0 = (function (){
var statearr_67108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67108[(0)] = cljs$core$async$mult_$_state_machine__66150__auto__);

(statearr_67108[(1)] = (1));

return statearr_67108;
});
var cljs$core$async$mult_$_state_machine__66150__auto____1 = (function (state_67027){
while(true){
var ret_value__66151__auto__ = (function (){try{while(true){
var result__66152__auto__ = switch__66149__auto__(state_67027);
if(cljs.core.keyword_identical_QMARK_(result__66152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66152__auto__;
}
break;
}
}catch (e67109){if((e67109 instanceof Object)){
var ex__66153__auto__ = e67109;
var statearr_67110_68342 = state_67027;
(statearr_67110_68342[(5)] = ex__66153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67109;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68344 = state_67027;
state_67027 = G__68344;
continue;
} else {
return ret_value__66151__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__66150__auto__ = function(state_67027){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__66150__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__66150__auto____1.call(this,state_67027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__66150__auto____0;
cljs$core$async$mult_$_state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__66150__auto____1;
return cljs$core$async$mult_$_state_machine__66150__auto__;
})()
})();
var state__66274__auto__ = (function (){var statearr_67111 = f__66273__auto__();
(statearr_67111[(6)] = c__66272__auto___68224);

return statearr_67111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__66274__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__67113 = arguments.length;
switch (G__67113) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_68353 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_68353(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_68359 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_68359(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_68362 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_68362(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_68366 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_68366(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_68372 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_68372(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___68390 = arguments.length;
var i__4830__auto___68391 = (0);
while(true){
if((i__4830__auto___68391 < len__4829__auto___68390)){
args__4835__auto__.push((arguments[i__4830__auto___68391]));

var G__68393 = (i__4830__auto___68391 + (1));
i__4830__auto___68391 = G__68393;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__67118){
var map__67119 = p__67118;
var map__67119__$1 = cljs.core.__destructure_map(map__67119);
var opts = map__67119__$1;
var statearr_67120_68396 = state;
(statearr_67120_68396[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_67121_68398 = state;
(statearr_67121_68398[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_67122_68449 = state;
(statearr_67122_68449[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq67114){
var G__67115 = cljs.core.first(seq67114);
var seq67114__$1 = cljs.core.next(seq67114);
var G__67116 = cljs.core.first(seq67114__$1);
var seq67114__$2 = cljs.core.next(seq67114__$1);
var G__67117 = cljs.core.first(seq67114__$2);
var seq67114__$3 = cljs.core.next(seq67114__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67115,G__67116,G__67117,seq67114__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async67123 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async67123 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta67124){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta67124 = meta67124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async67123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67125,meta67124__$1){
var self__ = this;
var _67125__$1 = this;
return (new cljs.core.async.t_cljs$core$async67123(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta67124__$1));
}));

(cljs.core.async.t_cljs$core$async67123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67125){
var self__ = this;
var _67125__$1 = this;
return self__.meta67124;
}));

(cljs.core.async.t_cljs$core$async67123.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async67123.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async67123.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async67123.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async67123.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async67123.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async67123.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async67123.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async67123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta67124","meta67124",-1012889409,null)], null);
}));

(cljs.core.async.t_cljs$core$async67123.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async67123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async67123");

(cljs.core.async.t_cljs$core$async67123.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async67123");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async67123.
 */
cljs.core.async.__GT_t_cljs$core$async67123 = (function cljs$core$async$mix_$___GT_t_cljs$core$async67123(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta67124){
return (new cljs.core.async.t_cljs$core$async67123(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta67124));
});

}

return (new cljs.core.async.t_cljs$core$async67123(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__66272__auto___68490 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__66273__auto__ = (function (){var switch__66149__auto__ = (function (state_67193){
var state_val_67194 = (state_67193[(1)]);
if((state_val_67194 === (7))){
var inst_67153 = (state_67193[(2)]);
var state_67193__$1 = state_67193;
if(cljs.core.truth_(inst_67153)){
var statearr_67195_68494 = state_67193__$1;
(statearr_67195_68494[(1)] = (8));

} else {
var statearr_67196_68496 = state_67193__$1;
(statearr_67196_68496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67194 === (20))){
var inst_67146 = (state_67193[(7)]);
var state_67193__$1 = state_67193;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67193__$1,(23),out,inst_67146);
} else {
if((state_val_67194 === (1))){
var inst_67129 = calc_state();
var inst_67130 = cljs.core.__destructure_map(inst_67129);
var inst_67131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67130,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_67132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67130,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_67133 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67130,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_67134 = inst_67129;
var state_67193__$1 = (function (){var statearr_67197 = state_67193;
(statearr_67197[(8)] = inst_67134);

(statearr_67197[(9)] = inst_67133);

(statearr_67197[(10)] = inst_67132);

(statearr_67197[(11)] = inst_67131);

return statearr_67197;
})();
var statearr_67198_68501 = state_67193__$1;
(statearr_67198_68501[(2)] = null);

(statearr_67198_68501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67194 === (24))){
var inst_67137 = (state_67193[(12)]);
var inst_67134 = inst_67137;
var state_67193__$1 = (function (){var statearr_67199 = state_67193;
(statearr_67199[(8)] = inst_67134);

return statearr_67199;
})();
var statearr_67200_68503 = state_67193__$1;
(statearr_67200_68503[(2)] = null);

(statearr_67200_68503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67194 === (4))){
var inst_67146 = (state_67193[(7)]);
var inst_67148 = (state_67193[(13)]);
var inst_67145 = (state_67193[(2)]);
var inst_67146__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67145,(0),null);
var inst_67147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67145,(1),null);
var inst_67148__$1 = (inst_67146__$1 == null);
var state_67193__$1 = (function (){var statearr_67201 = state_67193;
(statearr_67201[(7)] = inst_67146__$1);

(statearr_67201[(13)] = inst_67148__$1);

(statearr_67201[(14)] = inst_67147);

return statearr_67201;
})();
if(cljs.core.truth_(inst_67148__$1)){
var statearr_67202_68505 = state_67193__$1;
(statearr_67202_68505[(1)] = (5));

} else {
var statearr_67203_68506 = state_67193__$1;
(statearr_67203_68506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67194 === (15))){
var inst_67167 = (state_67193[(15)]);
var inst_67138 = (state_67193[(16)]);
var inst_67167__$1 = cljs.core.empty_QMARK_(inst_67138);
var state_67193__$1 = (function (){var statearr_67204 = state_67193;
(statearr_67204[(15)] = inst_67167__$1);

return statearr_67204;
})();
if(inst_67167__$1){
var statearr_67205_68513 = state_67193__$1;
(statearr_67205_68513[(1)] = (17));

} else {
var statearr_67206_68514 = state_67193__$1;
(statearr_67206_68514[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67194 === (21))){
var inst_67137 = (state_67193[(12)]);
var inst_67134 = inst_67137;
var state_67193__$1 = (function (){var statearr_67207 = state_67193;
(statearr_67207[(8)] = inst_67134);

return statearr_67207;
})();
var statearr_67208_68517 = state_67193__$1;
(statearr_67208_68517[(2)] = null);

(statearr_67208_68517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67194 === (13))){
var inst_67160 = (state_67193[(2)]);
var inst_67161 = calc_state();
var inst_67134 = inst_67161;
var state_67193__$1 = (function (){var statearr_67209 = state_67193;
(statearr_67209[(8)] = inst_67134);

(statearr_67209[(17)] = inst_67160);

return statearr_67209;
})();
var statearr_67210_68519 = state_67193__$1;
(statearr_67210_68519[(2)] = null);

(statearr_67210_68519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67194 === (22))){
var inst_67187 = (state_67193[(2)]);
var state_67193__$1 = state_67193;
var statearr_67211_68520 = state_67193__$1;
(statearr_67211_68520[(2)] = inst_67187);

(statearr_67211_68520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67194 === (6))){
var inst_67147 = (state_67193[(14)]);
var inst_67151 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_67147,change);
var state_67193__$1 = state_67193;
var statearr_67212_68521 = state_67193__$1;
(statearr_67212_68521[(2)] = inst_67151);

(statearr_67212_68521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67194 === (25))){
var state_67193__$1 = state_67193;
var statearr_67213_68523 = state_67193__$1;
(statearr_67213_68523[(2)] = null);

(statearr_67213_68523[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67194 === (17))){
var inst_67139 = (state_67193[(18)]);
var inst_67147 = (state_67193[(14)]);
var inst_67169 = (inst_67139.cljs$core$IFn$_invoke$arity$1 ? inst_67139.cljs$core$IFn$_invoke$arity$1(inst_67147) : inst_67139.call(null,inst_67147));
var inst_67170 = cljs.core.not(inst_67169);
var state_67193__$1 = state_67193;
var statearr_67214_68525 = state_67193__$1;
(statearr_67214_68525[(2)] = inst_67170);

(statearr_67214_68525[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67194 === (3))){
var inst_67191 = (state_67193[(2)]);
var state_67193__$1 = state_67193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67193__$1,inst_67191);
} else {
if((state_val_67194 === (12))){
var state_67193__$1 = state_67193;
var statearr_67215_68526 = state_67193__$1;
(statearr_67215_68526[(2)] = null);

(statearr_67215_68526[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67194 === (2))){
var inst_67134 = (state_67193[(8)]);
var inst_67137 = (state_67193[(12)]);
var inst_67137__$1 = cljs.core.__destructure_map(inst_67134);
var inst_67138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67137__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_67139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67137__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_67140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67137__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_67193__$1 = (function (){var statearr_67216 = state_67193;
(statearr_67216[(16)] = inst_67138);

(statearr_67216[(18)] = inst_67139);

(statearr_67216[(12)] = inst_67137__$1);

return statearr_67216;
})();
return cljs.core.async.ioc_alts_BANG_(state_67193__$1,(4),inst_67140);
} else {
if((state_val_67194 === (23))){
var inst_67178 = (state_67193[(2)]);
var state_67193__$1 = state_67193;
if(cljs.core.truth_(inst_67178)){
var statearr_67217_68530 = state_67193__$1;
(statearr_67217_68530[(1)] = (24));

} else {
var statearr_67218_68532 = state_67193__$1;
(statearr_67218_68532[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67194 === (19))){
var inst_67173 = (state_67193[(2)]);
var state_67193__$1 = state_67193;
var statearr_67219_68533 = state_67193__$1;
(statearr_67219_68533[(2)] = inst_67173);

(statearr_67219_68533[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67194 === (11))){
var inst_67147 = (state_67193[(14)]);
var inst_67157 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_67147);
var state_67193__$1 = state_67193;
var statearr_67220_68534 = state_67193__$1;
(statearr_67220_68534[(2)] = inst_67157);

(statearr_67220_68534[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67194 === (9))){
var inst_67138 = (state_67193[(16)]);
var inst_67164 = (state_67193[(19)]);
var inst_67147 = (state_67193[(14)]);
var inst_67164__$1 = (inst_67138.cljs$core$IFn$_invoke$arity$1 ? inst_67138.cljs$core$IFn$_invoke$arity$1(inst_67147) : inst_67138.call(null,inst_67147));
var state_67193__$1 = (function (){var statearr_67221 = state_67193;
(statearr_67221[(19)] = inst_67164__$1);

return statearr_67221;
})();
if(cljs.core.truth_(inst_67164__$1)){
var statearr_67222_68542 = state_67193__$1;
(statearr_67222_68542[(1)] = (14));

} else {
var statearr_67223_68543 = state_67193__$1;
(statearr_67223_68543[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67194 === (5))){
var inst_67148 = (state_67193[(13)]);
var state_67193__$1 = state_67193;
var statearr_67224_68544 = state_67193__$1;
(statearr_67224_68544[(2)] = inst_67148);

(statearr_67224_68544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67194 === (14))){
var inst_67164 = (state_67193[(19)]);
var state_67193__$1 = state_67193;
var statearr_67225_68545 = state_67193__$1;
(statearr_67225_68545[(2)] = inst_67164);

(statearr_67225_68545[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67194 === (26))){
var inst_67183 = (state_67193[(2)]);
var state_67193__$1 = state_67193;
var statearr_67226_68546 = state_67193__$1;
(statearr_67226_68546[(2)] = inst_67183);

(statearr_67226_68546[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67194 === (16))){
var inst_67175 = (state_67193[(2)]);
var state_67193__$1 = state_67193;
if(cljs.core.truth_(inst_67175)){
var statearr_67227_68550 = state_67193__$1;
(statearr_67227_68550[(1)] = (20));

} else {
var statearr_67228_68551 = state_67193__$1;
(statearr_67228_68551[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67194 === (10))){
var inst_67189 = (state_67193[(2)]);
var state_67193__$1 = state_67193;
var statearr_67229_68552 = state_67193__$1;
(statearr_67229_68552[(2)] = inst_67189);

(statearr_67229_68552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67194 === (18))){
var inst_67167 = (state_67193[(15)]);
var state_67193__$1 = state_67193;
var statearr_67230_68554 = state_67193__$1;
(statearr_67230_68554[(2)] = inst_67167);

(statearr_67230_68554[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67194 === (8))){
var inst_67146 = (state_67193[(7)]);
var inst_67155 = (inst_67146 == null);
var state_67193__$1 = state_67193;
if(cljs.core.truth_(inst_67155)){
var statearr_67231_68555 = state_67193__$1;
(statearr_67231_68555[(1)] = (11));

} else {
var statearr_67232_68556 = state_67193__$1;
(statearr_67232_68556[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__66150__auto__ = null;
var cljs$core$async$mix_$_state_machine__66150__auto____0 = (function (){
var statearr_67233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67233[(0)] = cljs$core$async$mix_$_state_machine__66150__auto__);

(statearr_67233[(1)] = (1));

return statearr_67233;
});
var cljs$core$async$mix_$_state_machine__66150__auto____1 = (function (state_67193){
while(true){
var ret_value__66151__auto__ = (function (){try{while(true){
var result__66152__auto__ = switch__66149__auto__(state_67193);
if(cljs.core.keyword_identical_QMARK_(result__66152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66152__auto__;
}
break;
}
}catch (e67234){if((e67234 instanceof Object)){
var ex__66153__auto__ = e67234;
var statearr_67235_68560 = state_67193;
(statearr_67235_68560[(5)] = ex__66153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67234;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68562 = state_67193;
state_67193 = G__68562;
continue;
} else {
return ret_value__66151__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__66150__auto__ = function(state_67193){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__66150__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__66150__auto____1.call(this,state_67193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__66150__auto____0;
cljs$core$async$mix_$_state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__66150__auto____1;
return cljs$core$async$mix_$_state_machine__66150__auto__;
})()
})();
var state__66274__auto__ = (function (){var statearr_67237 = f__66273__auto__();
(statearr_67237[(6)] = c__66272__auto___68490);

return statearr_67237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__66274__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_68567 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_68567(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_68572 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_68572(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_68576 = (function() {
var G__68577 = null;
var G__68577__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__68577__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__68577 = function(p,v){
switch(arguments.length){
case 1:
return G__68577__1.call(this,p);
case 2:
return G__68577__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__68577.cljs$core$IFn$_invoke$arity$1 = G__68577__1;
G__68577.cljs$core$IFn$_invoke$arity$2 = G__68577__2;
return G__68577;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__67240 = arguments.length;
switch (G__67240) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_68576(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_68576(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__67243 = arguments.length;
switch (G__67243) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__67241_SHARP_){
if(cljs.core.truth_((p1__67241_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__67241_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__67241_SHARP_.call(null,topic)))){
return p1__67241_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__67241_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async67244 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async67244 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta67245){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta67245 = meta67245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async67244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67246,meta67245__$1){
var self__ = this;
var _67246__$1 = this;
return (new cljs.core.async.t_cljs$core$async67244(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta67245__$1));
}));

(cljs.core.async.t_cljs$core$async67244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67246){
var self__ = this;
var _67246__$1 = this;
return self__.meta67245;
}));

(cljs.core.async.t_cljs$core$async67244.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async67244.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async67244.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async67244.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async67244.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async67244.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async67244.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async67244.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta67245","meta67245",-1649812929,null)], null);
}));

(cljs.core.async.t_cljs$core$async67244.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async67244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async67244");

(cljs.core.async.t_cljs$core$async67244.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async67244");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async67244.
 */
cljs.core.async.__GT_t_cljs$core$async67244 = (function cljs$core$async$__GT_t_cljs$core$async67244(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta67245){
return (new cljs.core.async.t_cljs$core$async67244(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta67245));
});

}

return (new cljs.core.async.t_cljs$core$async67244(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__66272__auto___68605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__66273__auto__ = (function (){var switch__66149__auto__ = (function (state_67318){
var state_val_67319 = (state_67318[(1)]);
if((state_val_67319 === (7))){
var inst_67314 = (state_67318[(2)]);
var state_67318__$1 = state_67318;
var statearr_67320_68608 = state_67318__$1;
(statearr_67320_68608[(2)] = inst_67314);

(statearr_67320_68608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67319 === (20))){
var state_67318__$1 = state_67318;
var statearr_67321_68610 = state_67318__$1;
(statearr_67321_68610[(2)] = null);

(statearr_67321_68610[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67319 === (1))){
var state_67318__$1 = state_67318;
var statearr_67322_68611 = state_67318__$1;
(statearr_67322_68611[(2)] = null);

(statearr_67322_68611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67319 === (24))){
var inst_67297 = (state_67318[(7)]);
var inst_67306 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_67297);
var state_67318__$1 = state_67318;
var statearr_67323_68612 = state_67318__$1;
(statearr_67323_68612[(2)] = inst_67306);

(statearr_67323_68612[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67319 === (4))){
var inst_67249 = (state_67318[(8)]);
var inst_67249__$1 = (state_67318[(2)]);
var inst_67250 = (inst_67249__$1 == null);
var state_67318__$1 = (function (){var statearr_67324 = state_67318;
(statearr_67324[(8)] = inst_67249__$1);

return statearr_67324;
})();
if(cljs.core.truth_(inst_67250)){
var statearr_67325_68613 = state_67318__$1;
(statearr_67325_68613[(1)] = (5));

} else {
var statearr_67326_68614 = state_67318__$1;
(statearr_67326_68614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67319 === (15))){
var inst_67291 = (state_67318[(2)]);
var state_67318__$1 = state_67318;
var statearr_67327_68615 = state_67318__$1;
(statearr_67327_68615[(2)] = inst_67291);

(statearr_67327_68615[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67319 === (21))){
var inst_67311 = (state_67318[(2)]);
var state_67318__$1 = (function (){var statearr_67328 = state_67318;
(statearr_67328[(9)] = inst_67311);

return statearr_67328;
})();
var statearr_67329_68616 = state_67318__$1;
(statearr_67329_68616[(2)] = null);

(statearr_67329_68616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67319 === (13))){
var inst_67273 = (state_67318[(10)]);
var inst_67275 = cljs.core.chunked_seq_QMARK_(inst_67273);
var state_67318__$1 = state_67318;
if(inst_67275){
var statearr_67330_68618 = state_67318__$1;
(statearr_67330_68618[(1)] = (16));

} else {
var statearr_67331_68619 = state_67318__$1;
(statearr_67331_68619[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67319 === (22))){
var inst_67303 = (state_67318[(2)]);
var state_67318__$1 = state_67318;
if(cljs.core.truth_(inst_67303)){
var statearr_67332_68621 = state_67318__$1;
(statearr_67332_68621[(1)] = (23));

} else {
var statearr_67333_68622 = state_67318__$1;
(statearr_67333_68622[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67319 === (6))){
var inst_67249 = (state_67318[(8)]);
var inst_67299 = (state_67318[(11)]);
var inst_67297 = (state_67318[(7)]);
var inst_67297__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_67249) : topic_fn.call(null,inst_67249));
var inst_67298 = cljs.core.deref(mults);
var inst_67299__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67298,inst_67297__$1);
var state_67318__$1 = (function (){var statearr_67334 = state_67318;
(statearr_67334[(11)] = inst_67299__$1);

(statearr_67334[(7)] = inst_67297__$1);

return statearr_67334;
})();
if(cljs.core.truth_(inst_67299__$1)){
var statearr_67335_68623 = state_67318__$1;
(statearr_67335_68623[(1)] = (19));

} else {
var statearr_67336_68624 = state_67318__$1;
(statearr_67336_68624[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67319 === (25))){
var inst_67308 = (state_67318[(2)]);
var state_67318__$1 = state_67318;
var statearr_67337_68625 = state_67318__$1;
(statearr_67337_68625[(2)] = inst_67308);

(statearr_67337_68625[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67319 === (17))){
var inst_67273 = (state_67318[(10)]);
var inst_67282 = cljs.core.first(inst_67273);
var inst_67283 = cljs.core.async.muxch_STAR_(inst_67282);
var inst_67284 = cljs.core.async.close_BANG_(inst_67283);
var inst_67285 = cljs.core.next(inst_67273);
var inst_67259 = inst_67285;
var inst_67260 = null;
var inst_67261 = (0);
var inst_67262 = (0);
var state_67318__$1 = (function (){var statearr_67338 = state_67318;
(statearr_67338[(12)] = inst_67260);

(statearr_67338[(13)] = inst_67259);

(statearr_67338[(14)] = inst_67262);

(statearr_67338[(15)] = inst_67261);

(statearr_67338[(16)] = inst_67284);

return statearr_67338;
})();
var statearr_67339_68626 = state_67318__$1;
(statearr_67339_68626[(2)] = null);

(statearr_67339_68626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67319 === (3))){
var inst_67316 = (state_67318[(2)]);
var state_67318__$1 = state_67318;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67318__$1,inst_67316);
} else {
if((state_val_67319 === (12))){
var inst_67293 = (state_67318[(2)]);
var state_67318__$1 = state_67318;
var statearr_67340_68627 = state_67318__$1;
(statearr_67340_68627[(2)] = inst_67293);

(statearr_67340_68627[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67319 === (2))){
var state_67318__$1 = state_67318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67318__$1,(4),ch);
} else {
if((state_val_67319 === (23))){
var state_67318__$1 = state_67318;
var statearr_67341_68629 = state_67318__$1;
(statearr_67341_68629[(2)] = null);

(statearr_67341_68629[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67319 === (19))){
var inst_67249 = (state_67318[(8)]);
var inst_67299 = (state_67318[(11)]);
var inst_67301 = cljs.core.async.muxch_STAR_(inst_67299);
var state_67318__$1 = state_67318;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67318__$1,(22),inst_67301,inst_67249);
} else {
if((state_val_67319 === (11))){
var inst_67259 = (state_67318[(13)]);
var inst_67273 = (state_67318[(10)]);
var inst_67273__$1 = cljs.core.seq(inst_67259);
var state_67318__$1 = (function (){var statearr_67342 = state_67318;
(statearr_67342[(10)] = inst_67273__$1);

return statearr_67342;
})();
if(inst_67273__$1){
var statearr_67343_68631 = state_67318__$1;
(statearr_67343_68631[(1)] = (13));

} else {
var statearr_67344_68632 = state_67318__$1;
(statearr_67344_68632[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67319 === (9))){
var inst_67295 = (state_67318[(2)]);
var state_67318__$1 = state_67318;
var statearr_67345_68633 = state_67318__$1;
(statearr_67345_68633[(2)] = inst_67295);

(statearr_67345_68633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67319 === (5))){
var inst_67256 = cljs.core.deref(mults);
var inst_67257 = cljs.core.vals(inst_67256);
var inst_67258 = cljs.core.seq(inst_67257);
var inst_67259 = inst_67258;
var inst_67260 = null;
var inst_67261 = (0);
var inst_67262 = (0);
var state_67318__$1 = (function (){var statearr_67346 = state_67318;
(statearr_67346[(12)] = inst_67260);

(statearr_67346[(13)] = inst_67259);

(statearr_67346[(14)] = inst_67262);

(statearr_67346[(15)] = inst_67261);

return statearr_67346;
})();
var statearr_67347_68634 = state_67318__$1;
(statearr_67347_68634[(2)] = null);

(statearr_67347_68634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67319 === (14))){
var state_67318__$1 = state_67318;
var statearr_67351_68636 = state_67318__$1;
(statearr_67351_68636[(2)] = null);

(statearr_67351_68636[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67319 === (16))){
var inst_67273 = (state_67318[(10)]);
var inst_67277 = cljs.core.chunk_first(inst_67273);
var inst_67278 = cljs.core.chunk_rest(inst_67273);
var inst_67279 = cljs.core.count(inst_67277);
var inst_67259 = inst_67278;
var inst_67260 = inst_67277;
var inst_67261 = inst_67279;
var inst_67262 = (0);
var state_67318__$1 = (function (){var statearr_67352 = state_67318;
(statearr_67352[(12)] = inst_67260);

(statearr_67352[(13)] = inst_67259);

(statearr_67352[(14)] = inst_67262);

(statearr_67352[(15)] = inst_67261);

return statearr_67352;
})();
var statearr_67353_68638 = state_67318__$1;
(statearr_67353_68638[(2)] = null);

(statearr_67353_68638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67319 === (10))){
var inst_67260 = (state_67318[(12)]);
var inst_67259 = (state_67318[(13)]);
var inst_67262 = (state_67318[(14)]);
var inst_67261 = (state_67318[(15)]);
var inst_67267 = cljs.core._nth(inst_67260,inst_67262);
var inst_67268 = cljs.core.async.muxch_STAR_(inst_67267);
var inst_67269 = cljs.core.async.close_BANG_(inst_67268);
var inst_67270 = (inst_67262 + (1));
var tmp67348 = inst_67260;
var tmp67349 = inst_67259;
var tmp67350 = inst_67261;
var inst_67259__$1 = tmp67349;
var inst_67260__$1 = tmp67348;
var inst_67261__$1 = tmp67350;
var inst_67262__$1 = inst_67270;
var state_67318__$1 = (function (){var statearr_67354 = state_67318;
(statearr_67354[(12)] = inst_67260__$1);

(statearr_67354[(13)] = inst_67259__$1);

(statearr_67354[(17)] = inst_67269);

(statearr_67354[(14)] = inst_67262__$1);

(statearr_67354[(15)] = inst_67261__$1);

return statearr_67354;
})();
var statearr_67355_68639 = state_67318__$1;
(statearr_67355_68639[(2)] = null);

(statearr_67355_68639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67319 === (18))){
var inst_67288 = (state_67318[(2)]);
var state_67318__$1 = state_67318;
var statearr_67356_68640 = state_67318__$1;
(statearr_67356_68640[(2)] = inst_67288);

(statearr_67356_68640[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67319 === (8))){
var inst_67262 = (state_67318[(14)]);
var inst_67261 = (state_67318[(15)]);
var inst_67264 = (inst_67262 < inst_67261);
var inst_67265 = inst_67264;
var state_67318__$1 = state_67318;
if(cljs.core.truth_(inst_67265)){
var statearr_67357_68641 = state_67318__$1;
(statearr_67357_68641[(1)] = (10));

} else {
var statearr_67358_68642 = state_67318__$1;
(statearr_67358_68642[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__66150__auto__ = null;
var cljs$core$async$state_machine__66150__auto____0 = (function (){
var statearr_67359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67359[(0)] = cljs$core$async$state_machine__66150__auto__);

(statearr_67359[(1)] = (1));

return statearr_67359;
});
var cljs$core$async$state_machine__66150__auto____1 = (function (state_67318){
while(true){
var ret_value__66151__auto__ = (function (){try{while(true){
var result__66152__auto__ = switch__66149__auto__(state_67318);
if(cljs.core.keyword_identical_QMARK_(result__66152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66152__auto__;
}
break;
}
}catch (e67360){if((e67360 instanceof Object)){
var ex__66153__auto__ = e67360;
var statearr_67361_68643 = state_67318;
(statearr_67361_68643[(5)] = ex__66153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67360;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68644 = state_67318;
state_67318 = G__68644;
continue;
} else {
return ret_value__66151__auto__;
}
break;
}
});
cljs$core$async$state_machine__66150__auto__ = function(state_67318){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66150__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66150__auto____1.call(this,state_67318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66150__auto____0;
cljs$core$async$state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66150__auto____1;
return cljs$core$async$state_machine__66150__auto__;
})()
})();
var state__66274__auto__ = (function (){var statearr_67362 = f__66273__auto__();
(statearr_67362[(6)] = c__66272__auto___68605);

return statearr_67362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__66274__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__67364 = arguments.length;
switch (G__67364) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__67366 = arguments.length;
switch (G__67366) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__67368 = arguments.length;
switch (G__67368) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__66272__auto___68653 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__66273__auto__ = (function (){var switch__66149__auto__ = (function (state_67407){
var state_val_67408 = (state_67407[(1)]);
if((state_val_67408 === (7))){
var state_67407__$1 = state_67407;
var statearr_67409_68654 = state_67407__$1;
(statearr_67409_68654[(2)] = null);

(statearr_67409_68654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67408 === (1))){
var state_67407__$1 = state_67407;
var statearr_67410_68655 = state_67407__$1;
(statearr_67410_68655[(2)] = null);

(statearr_67410_68655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67408 === (4))){
var inst_67371 = (state_67407[(7)]);
var inst_67373 = (inst_67371 < cnt);
var state_67407__$1 = state_67407;
if(cljs.core.truth_(inst_67373)){
var statearr_67411_68656 = state_67407__$1;
(statearr_67411_68656[(1)] = (6));

} else {
var statearr_67412_68657 = state_67407__$1;
(statearr_67412_68657[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67408 === (15))){
var inst_67403 = (state_67407[(2)]);
var state_67407__$1 = state_67407;
var statearr_67413_68658 = state_67407__$1;
(statearr_67413_68658[(2)] = inst_67403);

(statearr_67413_68658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67408 === (13))){
var inst_67396 = cljs.core.async.close_BANG_(out);
var state_67407__$1 = state_67407;
var statearr_67414_68663 = state_67407__$1;
(statearr_67414_68663[(2)] = inst_67396);

(statearr_67414_68663[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67408 === (6))){
var state_67407__$1 = state_67407;
var statearr_67415_68664 = state_67407__$1;
(statearr_67415_68664[(2)] = null);

(statearr_67415_68664[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67408 === (3))){
var inst_67405 = (state_67407[(2)]);
var state_67407__$1 = state_67407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67407__$1,inst_67405);
} else {
if((state_val_67408 === (12))){
var inst_67393 = (state_67407[(8)]);
var inst_67393__$1 = (state_67407[(2)]);
var inst_67394 = cljs.core.some(cljs.core.nil_QMARK_,inst_67393__$1);
var state_67407__$1 = (function (){var statearr_67416 = state_67407;
(statearr_67416[(8)] = inst_67393__$1);

return statearr_67416;
})();
if(cljs.core.truth_(inst_67394)){
var statearr_67417_68668 = state_67407__$1;
(statearr_67417_68668[(1)] = (13));

} else {
var statearr_67418_68669 = state_67407__$1;
(statearr_67418_68669[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67408 === (2))){
var inst_67370 = cljs.core.reset_BANG_(dctr,cnt);
var inst_67371 = (0);
var state_67407__$1 = (function (){var statearr_67419 = state_67407;
(statearr_67419[(9)] = inst_67370);

(statearr_67419[(7)] = inst_67371);

return statearr_67419;
})();
var statearr_67420_68670 = state_67407__$1;
(statearr_67420_68670[(2)] = null);

(statearr_67420_68670[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67408 === (11))){
var inst_67371 = (state_67407[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_67407,(10),Object,null,(9));
var inst_67380 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_67371) : chs__$1.call(null,inst_67371));
var inst_67381 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_67371) : done.call(null,inst_67371));
var inst_67382 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_67380,inst_67381);
var state_67407__$1 = state_67407;
var statearr_67421_68676 = state_67407__$1;
(statearr_67421_68676[(2)] = inst_67382);


cljs.core.async.impl.ioc_helpers.process_exception(state_67407__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67408 === (9))){
var inst_67371 = (state_67407[(7)]);
var inst_67384 = (state_67407[(2)]);
var inst_67385 = (inst_67371 + (1));
var inst_67371__$1 = inst_67385;
var state_67407__$1 = (function (){var statearr_67422 = state_67407;
(statearr_67422[(10)] = inst_67384);

(statearr_67422[(7)] = inst_67371__$1);

return statearr_67422;
})();
var statearr_67423_68680 = state_67407__$1;
(statearr_67423_68680[(2)] = null);

(statearr_67423_68680[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67408 === (5))){
var inst_67391 = (state_67407[(2)]);
var state_67407__$1 = (function (){var statearr_67424 = state_67407;
(statearr_67424[(11)] = inst_67391);

return statearr_67424;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67407__$1,(12),dchan);
} else {
if((state_val_67408 === (14))){
var inst_67393 = (state_67407[(8)]);
var inst_67398 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_67393);
var state_67407__$1 = state_67407;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67407__$1,(16),out,inst_67398);
} else {
if((state_val_67408 === (16))){
var inst_67400 = (state_67407[(2)]);
var state_67407__$1 = (function (){var statearr_67425 = state_67407;
(statearr_67425[(12)] = inst_67400);

return statearr_67425;
})();
var statearr_67426_68681 = state_67407__$1;
(statearr_67426_68681[(2)] = null);

(statearr_67426_68681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67408 === (10))){
var inst_67375 = (state_67407[(2)]);
var inst_67376 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_67407__$1 = (function (){var statearr_67427 = state_67407;
(statearr_67427[(13)] = inst_67375);

return statearr_67427;
})();
var statearr_67428_68685 = state_67407__$1;
(statearr_67428_68685[(2)] = inst_67376);


cljs.core.async.impl.ioc_helpers.process_exception(state_67407__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67408 === (8))){
var inst_67389 = (state_67407[(2)]);
var state_67407__$1 = state_67407;
var statearr_67429_68690 = state_67407__$1;
(statearr_67429_68690[(2)] = inst_67389);

(statearr_67429_68690[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__66150__auto__ = null;
var cljs$core$async$state_machine__66150__auto____0 = (function (){
var statearr_67430 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67430[(0)] = cljs$core$async$state_machine__66150__auto__);

(statearr_67430[(1)] = (1));

return statearr_67430;
});
var cljs$core$async$state_machine__66150__auto____1 = (function (state_67407){
while(true){
var ret_value__66151__auto__ = (function (){try{while(true){
var result__66152__auto__ = switch__66149__auto__(state_67407);
if(cljs.core.keyword_identical_QMARK_(result__66152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66152__auto__;
}
break;
}
}catch (e67431){if((e67431 instanceof Object)){
var ex__66153__auto__ = e67431;
var statearr_67432_68699 = state_67407;
(statearr_67432_68699[(5)] = ex__66153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67431;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68701 = state_67407;
state_67407 = G__68701;
continue;
} else {
return ret_value__66151__auto__;
}
break;
}
});
cljs$core$async$state_machine__66150__auto__ = function(state_67407){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66150__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66150__auto____1.call(this,state_67407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66150__auto____0;
cljs$core$async$state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66150__auto____1;
return cljs$core$async$state_machine__66150__auto__;
})()
})();
var state__66274__auto__ = (function (){var statearr_67433 = f__66273__auto__();
(statearr_67433[(6)] = c__66272__auto___68653);

return statearr_67433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__66274__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__67436 = arguments.length;
switch (G__67436) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__66272__auto___68703 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__66273__auto__ = (function (){var switch__66149__auto__ = (function (state_67468){
var state_val_67469 = (state_67468[(1)]);
if((state_val_67469 === (7))){
var inst_67448 = (state_67468[(7)]);
var inst_67447 = (state_67468[(8)]);
var inst_67447__$1 = (state_67468[(2)]);
var inst_67448__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67447__$1,(0),null);
var inst_67449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67447__$1,(1),null);
var inst_67450 = (inst_67448__$1 == null);
var state_67468__$1 = (function (){var statearr_67470 = state_67468;
(statearr_67470[(7)] = inst_67448__$1);

(statearr_67470[(8)] = inst_67447__$1);

(statearr_67470[(9)] = inst_67449);

return statearr_67470;
})();
if(cljs.core.truth_(inst_67450)){
var statearr_67471_68708 = state_67468__$1;
(statearr_67471_68708[(1)] = (8));

} else {
var statearr_67472_68709 = state_67468__$1;
(statearr_67472_68709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67469 === (1))){
var inst_67437 = cljs.core.vec(chs);
var inst_67438 = inst_67437;
var state_67468__$1 = (function (){var statearr_67473 = state_67468;
(statearr_67473[(10)] = inst_67438);

return statearr_67473;
})();
var statearr_67474_68713 = state_67468__$1;
(statearr_67474_68713[(2)] = null);

(statearr_67474_68713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67469 === (4))){
var inst_67438 = (state_67468[(10)]);
var state_67468__$1 = state_67468;
return cljs.core.async.ioc_alts_BANG_(state_67468__$1,(7),inst_67438);
} else {
if((state_val_67469 === (6))){
var inst_67464 = (state_67468[(2)]);
var state_67468__$1 = state_67468;
var statearr_67475_68716 = state_67468__$1;
(statearr_67475_68716[(2)] = inst_67464);

(statearr_67475_68716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67469 === (3))){
var inst_67466 = (state_67468[(2)]);
var state_67468__$1 = state_67468;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67468__$1,inst_67466);
} else {
if((state_val_67469 === (2))){
var inst_67438 = (state_67468[(10)]);
var inst_67440 = cljs.core.count(inst_67438);
var inst_67441 = (inst_67440 > (0));
var state_67468__$1 = state_67468;
if(cljs.core.truth_(inst_67441)){
var statearr_67477_68718 = state_67468__$1;
(statearr_67477_68718[(1)] = (4));

} else {
var statearr_67478_68719 = state_67468__$1;
(statearr_67478_68719[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67469 === (11))){
var inst_67438 = (state_67468[(10)]);
var inst_67457 = (state_67468[(2)]);
var tmp67476 = inst_67438;
var inst_67438__$1 = tmp67476;
var state_67468__$1 = (function (){var statearr_67479 = state_67468;
(statearr_67479[(11)] = inst_67457);

(statearr_67479[(10)] = inst_67438__$1);

return statearr_67479;
})();
var statearr_67480_68723 = state_67468__$1;
(statearr_67480_68723[(2)] = null);

(statearr_67480_68723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67469 === (9))){
var inst_67448 = (state_67468[(7)]);
var state_67468__$1 = state_67468;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67468__$1,(11),out,inst_67448);
} else {
if((state_val_67469 === (5))){
var inst_67462 = cljs.core.async.close_BANG_(out);
var state_67468__$1 = state_67468;
var statearr_67481_68725 = state_67468__$1;
(statearr_67481_68725[(2)] = inst_67462);

(statearr_67481_68725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67469 === (10))){
var inst_67460 = (state_67468[(2)]);
var state_67468__$1 = state_67468;
var statearr_67482_68726 = state_67468__$1;
(statearr_67482_68726[(2)] = inst_67460);

(statearr_67482_68726[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67469 === (8))){
var inst_67448 = (state_67468[(7)]);
var inst_67447 = (state_67468[(8)]);
var inst_67449 = (state_67468[(9)]);
var inst_67438 = (state_67468[(10)]);
var inst_67452 = (function (){var cs = inst_67438;
var vec__67443 = inst_67447;
var v = inst_67448;
var c = inst_67449;
return (function (p1__67434_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__67434_SHARP_);
});
})();
var inst_67453 = cljs.core.filterv(inst_67452,inst_67438);
var inst_67438__$1 = inst_67453;
var state_67468__$1 = (function (){var statearr_67483 = state_67468;
(statearr_67483[(10)] = inst_67438__$1);

return statearr_67483;
})();
var statearr_67484_68731 = state_67468__$1;
(statearr_67484_68731[(2)] = null);

(statearr_67484_68731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__66150__auto__ = null;
var cljs$core$async$state_machine__66150__auto____0 = (function (){
var statearr_67485 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67485[(0)] = cljs$core$async$state_machine__66150__auto__);

(statearr_67485[(1)] = (1));

return statearr_67485;
});
var cljs$core$async$state_machine__66150__auto____1 = (function (state_67468){
while(true){
var ret_value__66151__auto__ = (function (){try{while(true){
var result__66152__auto__ = switch__66149__auto__(state_67468);
if(cljs.core.keyword_identical_QMARK_(result__66152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66152__auto__;
}
break;
}
}catch (e67486){if((e67486 instanceof Object)){
var ex__66153__auto__ = e67486;
var statearr_67487_68732 = state_67468;
(statearr_67487_68732[(5)] = ex__66153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67486;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68733 = state_67468;
state_67468 = G__68733;
continue;
} else {
return ret_value__66151__auto__;
}
break;
}
});
cljs$core$async$state_machine__66150__auto__ = function(state_67468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66150__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66150__auto____1.call(this,state_67468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66150__auto____0;
cljs$core$async$state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66150__auto____1;
return cljs$core$async$state_machine__66150__auto__;
})()
})();
var state__66274__auto__ = (function (){var statearr_67488 = f__66273__auto__();
(statearr_67488[(6)] = c__66272__auto___68703);

return statearr_67488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__66274__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__67490 = arguments.length;
switch (G__67490) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__66272__auto___68739 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__66273__auto__ = (function (){var switch__66149__auto__ = (function (state_67514){
var state_val_67515 = (state_67514[(1)]);
if((state_val_67515 === (7))){
var inst_67496 = (state_67514[(7)]);
var inst_67496__$1 = (state_67514[(2)]);
var inst_67497 = (inst_67496__$1 == null);
var inst_67498 = cljs.core.not(inst_67497);
var state_67514__$1 = (function (){var statearr_67516 = state_67514;
(statearr_67516[(7)] = inst_67496__$1);

return statearr_67516;
})();
if(inst_67498){
var statearr_67517_68740 = state_67514__$1;
(statearr_67517_68740[(1)] = (8));

} else {
var statearr_67518_68741 = state_67514__$1;
(statearr_67518_68741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67515 === (1))){
var inst_67491 = (0);
var state_67514__$1 = (function (){var statearr_67519 = state_67514;
(statearr_67519[(8)] = inst_67491);

return statearr_67519;
})();
var statearr_67520_68743 = state_67514__$1;
(statearr_67520_68743[(2)] = null);

(statearr_67520_68743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67515 === (4))){
var state_67514__$1 = state_67514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67514__$1,(7),ch);
} else {
if((state_val_67515 === (6))){
var inst_67509 = (state_67514[(2)]);
var state_67514__$1 = state_67514;
var statearr_67521_68744 = state_67514__$1;
(statearr_67521_68744[(2)] = inst_67509);

(statearr_67521_68744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67515 === (3))){
var inst_67511 = (state_67514[(2)]);
var inst_67512 = cljs.core.async.close_BANG_(out);
var state_67514__$1 = (function (){var statearr_67522 = state_67514;
(statearr_67522[(9)] = inst_67511);

return statearr_67522;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_67514__$1,inst_67512);
} else {
if((state_val_67515 === (2))){
var inst_67491 = (state_67514[(8)]);
var inst_67493 = (inst_67491 < n);
var state_67514__$1 = state_67514;
if(cljs.core.truth_(inst_67493)){
var statearr_67523_68745 = state_67514__$1;
(statearr_67523_68745[(1)] = (4));

} else {
var statearr_67524_68750 = state_67514__$1;
(statearr_67524_68750[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67515 === (11))){
var inst_67491 = (state_67514[(8)]);
var inst_67501 = (state_67514[(2)]);
var inst_67502 = (inst_67491 + (1));
var inst_67491__$1 = inst_67502;
var state_67514__$1 = (function (){var statearr_67525 = state_67514;
(statearr_67525[(10)] = inst_67501);

(statearr_67525[(8)] = inst_67491__$1);

return statearr_67525;
})();
var statearr_67526_68755 = state_67514__$1;
(statearr_67526_68755[(2)] = null);

(statearr_67526_68755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67515 === (9))){
var state_67514__$1 = state_67514;
var statearr_67527_68756 = state_67514__$1;
(statearr_67527_68756[(2)] = null);

(statearr_67527_68756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67515 === (5))){
var state_67514__$1 = state_67514;
var statearr_67528_68760 = state_67514__$1;
(statearr_67528_68760[(2)] = null);

(statearr_67528_68760[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67515 === (10))){
var inst_67506 = (state_67514[(2)]);
var state_67514__$1 = state_67514;
var statearr_67529_68762 = state_67514__$1;
(statearr_67529_68762[(2)] = inst_67506);

(statearr_67529_68762[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67515 === (8))){
var inst_67496 = (state_67514[(7)]);
var state_67514__$1 = state_67514;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67514__$1,(11),out,inst_67496);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__66150__auto__ = null;
var cljs$core$async$state_machine__66150__auto____0 = (function (){
var statearr_67530 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_67530[(0)] = cljs$core$async$state_machine__66150__auto__);

(statearr_67530[(1)] = (1));

return statearr_67530;
});
var cljs$core$async$state_machine__66150__auto____1 = (function (state_67514){
while(true){
var ret_value__66151__auto__ = (function (){try{while(true){
var result__66152__auto__ = switch__66149__auto__(state_67514);
if(cljs.core.keyword_identical_QMARK_(result__66152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66152__auto__;
}
break;
}
}catch (e67531){if((e67531 instanceof Object)){
var ex__66153__auto__ = e67531;
var statearr_67532_68763 = state_67514;
(statearr_67532_68763[(5)] = ex__66153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67531;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68767 = state_67514;
state_67514 = G__68767;
continue;
} else {
return ret_value__66151__auto__;
}
break;
}
});
cljs$core$async$state_machine__66150__auto__ = function(state_67514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66150__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66150__auto____1.call(this,state_67514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66150__auto____0;
cljs$core$async$state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66150__auto____1;
return cljs$core$async$state_machine__66150__auto__;
})()
})();
var state__66274__auto__ = (function (){var statearr_67533 = f__66273__auto__();
(statearr_67533[(6)] = c__66272__auto___68739);

return statearr_67533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__66274__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async67535 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async67535 = (function (f,ch,meta67536){
this.f = f;
this.ch = ch;
this.meta67536 = meta67536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async67535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67537,meta67536__$1){
var self__ = this;
var _67537__$1 = this;
return (new cljs.core.async.t_cljs$core$async67535(self__.f,self__.ch,meta67536__$1));
}));

(cljs.core.async.t_cljs$core$async67535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67537){
var self__ = this;
var _67537__$1 = this;
return self__.meta67536;
}));

(cljs.core.async.t_cljs$core$async67535.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async67535.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async67535.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async67535.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async67535.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async67538 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async67538 = (function (f,ch,meta67536,_,fn1,meta67539){
this.f = f;
this.ch = ch;
this.meta67536 = meta67536;
this._ = _;
this.fn1 = fn1;
this.meta67539 = meta67539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async67538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67540,meta67539__$1){
var self__ = this;
var _67540__$1 = this;
return (new cljs.core.async.t_cljs$core$async67538(self__.f,self__.ch,self__.meta67536,self__._,self__.fn1,meta67539__$1));
}));

(cljs.core.async.t_cljs$core$async67538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67540){
var self__ = this;
var _67540__$1 = this;
return self__.meta67539;
}));

(cljs.core.async.t_cljs$core$async67538.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async67538.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async67538.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async67538.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__67534_SHARP_){
var G__67541 = (((p1__67534_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__67534_SHARP_) : self__.f.call(null,p1__67534_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__67541) : f1.call(null,G__67541));
});
}));

(cljs.core.async.t_cljs$core$async67538.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta67536","meta67536",-1093190741,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async67535","cljs.core.async/t_cljs$core$async67535",465430436,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta67539","meta67539",-50259784,null)], null);
}));

(cljs.core.async.t_cljs$core$async67538.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async67538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async67538");

(cljs.core.async.t_cljs$core$async67538.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async67538");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async67538.
 */
cljs.core.async.__GT_t_cljs$core$async67538 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async67538(f__$1,ch__$1,meta67536__$1,___$2,fn1__$1,meta67539){
return (new cljs.core.async.t_cljs$core$async67538(f__$1,ch__$1,meta67536__$1,___$2,fn1__$1,meta67539));
});

}

return (new cljs.core.async.t_cljs$core$async67538(self__.f,self__.ch,self__.meta67536,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__67542 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__67542) : self__.f.call(null,G__67542));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async67535.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async67535.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async67535.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta67536","meta67536",-1093190741,null)], null);
}));

(cljs.core.async.t_cljs$core$async67535.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async67535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async67535");

(cljs.core.async.t_cljs$core$async67535.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async67535");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async67535.
 */
cljs.core.async.__GT_t_cljs$core$async67535 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async67535(f__$1,ch__$1,meta67536){
return (new cljs.core.async.t_cljs$core$async67535(f__$1,ch__$1,meta67536));
});

}

return (new cljs.core.async.t_cljs$core$async67535(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async67543 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async67543 = (function (f,ch,meta67544){
this.f = f;
this.ch = ch;
this.meta67544 = meta67544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async67543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67545,meta67544__$1){
var self__ = this;
var _67545__$1 = this;
return (new cljs.core.async.t_cljs$core$async67543(self__.f,self__.ch,meta67544__$1));
}));

(cljs.core.async.t_cljs$core$async67543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67545){
var self__ = this;
var _67545__$1 = this;
return self__.meta67544;
}));

(cljs.core.async.t_cljs$core$async67543.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async67543.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async67543.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async67543.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async67543.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async67543.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async67543.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta67544","meta67544",-1234273920,null)], null);
}));

(cljs.core.async.t_cljs$core$async67543.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async67543.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async67543");

(cljs.core.async.t_cljs$core$async67543.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async67543");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async67543.
 */
cljs.core.async.__GT_t_cljs$core$async67543 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async67543(f__$1,ch__$1,meta67544){
return (new cljs.core.async.t_cljs$core$async67543(f__$1,ch__$1,meta67544));
});

}

return (new cljs.core.async.t_cljs$core$async67543(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async67546 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async67546 = (function (p,ch,meta67547){
this.p = p;
this.ch = ch;
this.meta67547 = meta67547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async67546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67548,meta67547__$1){
var self__ = this;
var _67548__$1 = this;
return (new cljs.core.async.t_cljs$core$async67546(self__.p,self__.ch,meta67547__$1));
}));

(cljs.core.async.t_cljs$core$async67546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67548){
var self__ = this;
var _67548__$1 = this;
return self__.meta67547;
}));

(cljs.core.async.t_cljs$core$async67546.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async67546.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async67546.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async67546.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async67546.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async67546.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async67546.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async67546.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta67547","meta67547",1400800928,null)], null);
}));

(cljs.core.async.t_cljs$core$async67546.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async67546.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async67546");

(cljs.core.async.t_cljs$core$async67546.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async67546");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async67546.
 */
cljs.core.async.__GT_t_cljs$core$async67546 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async67546(p__$1,ch__$1,meta67547){
return (new cljs.core.async.t_cljs$core$async67546(p__$1,ch__$1,meta67547));
});

}

return (new cljs.core.async.t_cljs$core$async67546(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__67562 = arguments.length;
switch (G__67562) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__66272__auto___68805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__66273__auto__ = (function (){var switch__66149__auto__ = (function (state_67591){
var state_val_67592 = (state_67591[(1)]);
if((state_val_67592 === (7))){
var inst_67587 = (state_67591[(2)]);
var state_67591__$1 = state_67591;
var statearr_67593_68806 = state_67591__$1;
(statearr_67593_68806[(2)] = inst_67587);

(statearr_67593_68806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67592 === (1))){
var state_67591__$1 = state_67591;
var statearr_67594_68810 = state_67591__$1;
(statearr_67594_68810[(2)] = null);

(statearr_67594_68810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67592 === (4))){
var inst_67573 = (state_67591[(7)]);
var inst_67573__$1 = (state_67591[(2)]);
var inst_67574 = (inst_67573__$1 == null);
var state_67591__$1 = (function (){var statearr_67595 = state_67591;
(statearr_67595[(7)] = inst_67573__$1);

return statearr_67595;
})();
if(cljs.core.truth_(inst_67574)){
var statearr_67596_68812 = state_67591__$1;
(statearr_67596_68812[(1)] = (5));

} else {
var statearr_67597_68813 = state_67591__$1;
(statearr_67597_68813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67592 === (6))){
var inst_67573 = (state_67591[(7)]);
var inst_67578 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_67573) : p.call(null,inst_67573));
var state_67591__$1 = state_67591;
if(cljs.core.truth_(inst_67578)){
var statearr_67598_68815 = state_67591__$1;
(statearr_67598_68815[(1)] = (8));

} else {
var statearr_67599_68816 = state_67591__$1;
(statearr_67599_68816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67592 === (3))){
var inst_67589 = (state_67591[(2)]);
var state_67591__$1 = state_67591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67591__$1,inst_67589);
} else {
if((state_val_67592 === (2))){
var state_67591__$1 = state_67591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67591__$1,(4),ch);
} else {
if((state_val_67592 === (11))){
var inst_67581 = (state_67591[(2)]);
var state_67591__$1 = state_67591;
var statearr_67605_68821 = state_67591__$1;
(statearr_67605_68821[(2)] = inst_67581);

(statearr_67605_68821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67592 === (9))){
var state_67591__$1 = state_67591;
var statearr_67606_68822 = state_67591__$1;
(statearr_67606_68822[(2)] = null);

(statearr_67606_68822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67592 === (5))){
var inst_67576 = cljs.core.async.close_BANG_(out);
var state_67591__$1 = state_67591;
var statearr_67607_68823 = state_67591__$1;
(statearr_67607_68823[(2)] = inst_67576);

(statearr_67607_68823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67592 === (10))){
var inst_67584 = (state_67591[(2)]);
var state_67591__$1 = (function (){var statearr_67608 = state_67591;
(statearr_67608[(8)] = inst_67584);

return statearr_67608;
})();
var statearr_67609_68824 = state_67591__$1;
(statearr_67609_68824[(2)] = null);

(statearr_67609_68824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67592 === (8))){
var inst_67573 = (state_67591[(7)]);
var state_67591__$1 = state_67591;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67591__$1,(11),out,inst_67573);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__66150__auto__ = null;
var cljs$core$async$state_machine__66150__auto____0 = (function (){
var statearr_67612 = [null,null,null,null,null,null,null,null,null];
(statearr_67612[(0)] = cljs$core$async$state_machine__66150__auto__);

(statearr_67612[(1)] = (1));

return statearr_67612;
});
var cljs$core$async$state_machine__66150__auto____1 = (function (state_67591){
while(true){
var ret_value__66151__auto__ = (function (){try{while(true){
var result__66152__auto__ = switch__66149__auto__(state_67591);
if(cljs.core.keyword_identical_QMARK_(result__66152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66152__auto__;
}
break;
}
}catch (e67613){if((e67613 instanceof Object)){
var ex__66153__auto__ = e67613;
var statearr_67614_68825 = state_67591;
(statearr_67614_68825[(5)] = ex__66153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67613;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68826 = state_67591;
state_67591 = G__68826;
continue;
} else {
return ret_value__66151__auto__;
}
break;
}
});
cljs$core$async$state_machine__66150__auto__ = function(state_67591){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66150__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66150__auto____1.call(this,state_67591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66150__auto____0;
cljs$core$async$state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66150__auto____1;
return cljs$core$async$state_machine__66150__auto__;
})()
})();
var state__66274__auto__ = (function (){var statearr_67617 = f__66273__auto__();
(statearr_67617[(6)] = c__66272__auto___68805);

return statearr_67617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__66274__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__67619 = arguments.length;
switch (G__67619) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__66272__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__66273__auto__ = (function (){var switch__66149__auto__ = (function (state_67687){
var state_val_67688 = (state_67687[(1)]);
if((state_val_67688 === (7))){
var inst_67683 = (state_67687[(2)]);
var state_67687__$1 = state_67687;
var statearr_67689_68836 = state_67687__$1;
(statearr_67689_68836[(2)] = inst_67683);

(statearr_67689_68836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67688 === (20))){
var inst_67651 = (state_67687[(7)]);
var inst_67664 = (state_67687[(2)]);
var inst_67665 = cljs.core.next(inst_67651);
var inst_67637 = inst_67665;
var inst_67638 = null;
var inst_67639 = (0);
var inst_67640 = (0);
var state_67687__$1 = (function (){var statearr_67695 = state_67687;
(statearr_67695[(8)] = inst_67639);

(statearr_67695[(9)] = inst_67637);

(statearr_67695[(10)] = inst_67638);

(statearr_67695[(11)] = inst_67640);

(statearr_67695[(12)] = inst_67664);

return statearr_67695;
})();
var statearr_67696_68842 = state_67687__$1;
(statearr_67696_68842[(2)] = null);

(statearr_67696_68842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67688 === (1))){
var state_67687__$1 = state_67687;
var statearr_67697_68843 = state_67687__$1;
(statearr_67697_68843[(2)] = null);

(statearr_67697_68843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67688 === (4))){
var inst_67626 = (state_67687[(13)]);
var inst_67626__$1 = (state_67687[(2)]);
var inst_67627 = (inst_67626__$1 == null);
var state_67687__$1 = (function (){var statearr_67698 = state_67687;
(statearr_67698[(13)] = inst_67626__$1);

return statearr_67698;
})();
if(cljs.core.truth_(inst_67627)){
var statearr_67699_68844 = state_67687__$1;
(statearr_67699_68844[(1)] = (5));

} else {
var statearr_67700_68845 = state_67687__$1;
(statearr_67700_68845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67688 === (15))){
var state_67687__$1 = state_67687;
var statearr_67704_68849 = state_67687__$1;
(statearr_67704_68849[(2)] = null);

(statearr_67704_68849[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67688 === (21))){
var state_67687__$1 = state_67687;
var statearr_67705_68851 = state_67687__$1;
(statearr_67705_68851[(2)] = null);

(statearr_67705_68851[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67688 === (13))){
var inst_67639 = (state_67687[(8)]);
var inst_67637 = (state_67687[(9)]);
var inst_67638 = (state_67687[(10)]);
var inst_67640 = (state_67687[(11)]);
var inst_67647 = (state_67687[(2)]);
var inst_67648 = (inst_67640 + (1));
var tmp67701 = inst_67639;
var tmp67702 = inst_67637;
var tmp67703 = inst_67638;
var inst_67637__$1 = tmp67702;
var inst_67638__$1 = tmp67703;
var inst_67639__$1 = tmp67701;
var inst_67640__$1 = inst_67648;
var state_67687__$1 = (function (){var statearr_67709 = state_67687;
(statearr_67709[(8)] = inst_67639__$1);

(statearr_67709[(9)] = inst_67637__$1);

(statearr_67709[(10)] = inst_67638__$1);

(statearr_67709[(11)] = inst_67640__$1);

(statearr_67709[(14)] = inst_67647);

return statearr_67709;
})();
var statearr_67710_68852 = state_67687__$1;
(statearr_67710_68852[(2)] = null);

(statearr_67710_68852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67688 === (22))){
var state_67687__$1 = state_67687;
var statearr_67711_68853 = state_67687__$1;
(statearr_67711_68853[(2)] = null);

(statearr_67711_68853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67688 === (6))){
var inst_67626 = (state_67687[(13)]);
var inst_67635 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_67626) : f.call(null,inst_67626));
var inst_67636 = cljs.core.seq(inst_67635);
var inst_67637 = inst_67636;
var inst_67638 = null;
var inst_67639 = (0);
var inst_67640 = (0);
var state_67687__$1 = (function (){var statearr_67714 = state_67687;
(statearr_67714[(8)] = inst_67639);

(statearr_67714[(9)] = inst_67637);

(statearr_67714[(10)] = inst_67638);

(statearr_67714[(11)] = inst_67640);

return statearr_67714;
})();
var statearr_67715_68858 = state_67687__$1;
(statearr_67715_68858[(2)] = null);

(statearr_67715_68858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67688 === (17))){
var inst_67651 = (state_67687[(7)]);
var inst_67657 = cljs.core.chunk_first(inst_67651);
var inst_67658 = cljs.core.chunk_rest(inst_67651);
var inst_67659 = cljs.core.count(inst_67657);
var inst_67637 = inst_67658;
var inst_67638 = inst_67657;
var inst_67639 = inst_67659;
var inst_67640 = (0);
var state_67687__$1 = (function (){var statearr_67716 = state_67687;
(statearr_67716[(8)] = inst_67639);

(statearr_67716[(9)] = inst_67637);

(statearr_67716[(10)] = inst_67638);

(statearr_67716[(11)] = inst_67640);

return statearr_67716;
})();
var statearr_67717_68863 = state_67687__$1;
(statearr_67717_68863[(2)] = null);

(statearr_67717_68863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67688 === (3))){
var inst_67685 = (state_67687[(2)]);
var state_67687__$1 = state_67687;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67687__$1,inst_67685);
} else {
if((state_val_67688 === (12))){
var inst_67673 = (state_67687[(2)]);
var state_67687__$1 = state_67687;
var statearr_67722_68865 = state_67687__$1;
(statearr_67722_68865[(2)] = inst_67673);

(statearr_67722_68865[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67688 === (2))){
var state_67687__$1 = state_67687;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67687__$1,(4),in$);
} else {
if((state_val_67688 === (23))){
var inst_67681 = (state_67687[(2)]);
var state_67687__$1 = state_67687;
var statearr_67723_68866 = state_67687__$1;
(statearr_67723_68866[(2)] = inst_67681);

(statearr_67723_68866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67688 === (19))){
var inst_67668 = (state_67687[(2)]);
var state_67687__$1 = state_67687;
var statearr_67724_68867 = state_67687__$1;
(statearr_67724_68867[(2)] = inst_67668);

(statearr_67724_68867[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67688 === (11))){
var inst_67637 = (state_67687[(9)]);
var inst_67651 = (state_67687[(7)]);
var inst_67651__$1 = cljs.core.seq(inst_67637);
var state_67687__$1 = (function (){var statearr_67725 = state_67687;
(statearr_67725[(7)] = inst_67651__$1);

return statearr_67725;
})();
if(inst_67651__$1){
var statearr_67726_68868 = state_67687__$1;
(statearr_67726_68868[(1)] = (14));

} else {
var statearr_67727_68869 = state_67687__$1;
(statearr_67727_68869[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67688 === (9))){
var inst_67675 = (state_67687[(2)]);
var inst_67676 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_67687__$1 = (function (){var statearr_67735 = state_67687;
(statearr_67735[(15)] = inst_67675);

return statearr_67735;
})();
if(cljs.core.truth_(inst_67676)){
var statearr_67736_68870 = state_67687__$1;
(statearr_67736_68870[(1)] = (21));

} else {
var statearr_67737_68872 = state_67687__$1;
(statearr_67737_68872[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67688 === (5))){
var inst_67629 = cljs.core.async.close_BANG_(out);
var state_67687__$1 = state_67687;
var statearr_67740_68873 = state_67687__$1;
(statearr_67740_68873[(2)] = inst_67629);

(statearr_67740_68873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67688 === (14))){
var inst_67651 = (state_67687[(7)]);
var inst_67655 = cljs.core.chunked_seq_QMARK_(inst_67651);
var state_67687__$1 = state_67687;
if(inst_67655){
var statearr_67741_68878 = state_67687__$1;
(statearr_67741_68878[(1)] = (17));

} else {
var statearr_67742_68879 = state_67687__$1;
(statearr_67742_68879[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67688 === (16))){
var inst_67671 = (state_67687[(2)]);
var state_67687__$1 = state_67687;
var statearr_67744_68880 = state_67687__$1;
(statearr_67744_68880[(2)] = inst_67671);

(statearr_67744_68880[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67688 === (10))){
var inst_67638 = (state_67687[(10)]);
var inst_67640 = (state_67687[(11)]);
var inst_67645 = cljs.core._nth(inst_67638,inst_67640);
var state_67687__$1 = state_67687;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67687__$1,(13),out,inst_67645);
} else {
if((state_val_67688 === (18))){
var inst_67651 = (state_67687[(7)]);
var inst_67662 = cljs.core.first(inst_67651);
var state_67687__$1 = state_67687;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67687__$1,(20),out,inst_67662);
} else {
if((state_val_67688 === (8))){
var inst_67639 = (state_67687[(8)]);
var inst_67640 = (state_67687[(11)]);
var inst_67642 = (inst_67640 < inst_67639);
var inst_67643 = inst_67642;
var state_67687__$1 = state_67687;
if(cljs.core.truth_(inst_67643)){
var statearr_67746_68885 = state_67687__$1;
(statearr_67746_68885[(1)] = (10));

} else {
var statearr_67747_68886 = state_67687__$1;
(statearr_67747_68886[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__66150__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__66150__auto____0 = (function (){
var statearr_67749 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67749[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__66150__auto__);

(statearr_67749[(1)] = (1));

return statearr_67749;
});
var cljs$core$async$mapcat_STAR__$_state_machine__66150__auto____1 = (function (state_67687){
while(true){
var ret_value__66151__auto__ = (function (){try{while(true){
var result__66152__auto__ = switch__66149__auto__(state_67687);
if(cljs.core.keyword_identical_QMARK_(result__66152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66152__auto__;
}
break;
}
}catch (e67750){if((e67750 instanceof Object)){
var ex__66153__auto__ = e67750;
var statearr_67751_68888 = state_67687;
(statearr_67751_68888[(5)] = ex__66153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67750;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68889 = state_67687;
state_67687 = G__68889;
continue;
} else {
return ret_value__66151__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__66150__auto__ = function(state_67687){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__66150__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__66150__auto____1.call(this,state_67687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__66150__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__66150__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__66150__auto__;
})()
})();
var state__66274__auto__ = (function (){var statearr_67753 = f__66273__auto__();
(statearr_67753[(6)] = c__66272__auto__);

return statearr_67753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__66274__auto__);
}));

return c__66272__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__67755 = arguments.length;
switch (G__67755) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__67780 = arguments.length;
switch (G__67780) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__67784 = arguments.length;
switch (G__67784) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__66272__auto___68893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__66273__auto__ = (function (){var switch__66149__auto__ = (function (state_67810){
var state_val_67811 = (state_67810[(1)]);
if((state_val_67811 === (7))){
var inst_67805 = (state_67810[(2)]);
var state_67810__$1 = state_67810;
var statearr_67813_68895 = state_67810__$1;
(statearr_67813_68895[(2)] = inst_67805);

(statearr_67813_68895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67811 === (1))){
var inst_67787 = null;
var state_67810__$1 = (function (){var statearr_67814 = state_67810;
(statearr_67814[(7)] = inst_67787);

return statearr_67814;
})();
var statearr_67815_68897 = state_67810__$1;
(statearr_67815_68897[(2)] = null);

(statearr_67815_68897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67811 === (4))){
var inst_67790 = (state_67810[(8)]);
var inst_67790__$1 = (state_67810[(2)]);
var inst_67791 = (inst_67790__$1 == null);
var inst_67792 = cljs.core.not(inst_67791);
var state_67810__$1 = (function (){var statearr_67820 = state_67810;
(statearr_67820[(8)] = inst_67790__$1);

return statearr_67820;
})();
if(inst_67792){
var statearr_67825_68898 = state_67810__$1;
(statearr_67825_68898[(1)] = (5));

} else {
var statearr_67830_68899 = state_67810__$1;
(statearr_67830_68899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67811 === (6))){
var state_67810__$1 = state_67810;
var statearr_67839_68900 = state_67810__$1;
(statearr_67839_68900[(2)] = null);

(statearr_67839_68900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67811 === (3))){
var inst_67807 = (state_67810[(2)]);
var inst_67808 = cljs.core.async.close_BANG_(out);
var state_67810__$1 = (function (){var statearr_67840 = state_67810;
(statearr_67840[(9)] = inst_67807);

return statearr_67840;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_67810__$1,inst_67808);
} else {
if((state_val_67811 === (2))){
var state_67810__$1 = state_67810;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67810__$1,(4),ch);
} else {
if((state_val_67811 === (11))){
var inst_67790 = (state_67810[(8)]);
var inst_67799 = (state_67810[(2)]);
var inst_67787 = inst_67790;
var state_67810__$1 = (function (){var statearr_67842 = state_67810;
(statearr_67842[(7)] = inst_67787);

(statearr_67842[(10)] = inst_67799);

return statearr_67842;
})();
var statearr_67843_68901 = state_67810__$1;
(statearr_67843_68901[(2)] = null);

(statearr_67843_68901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67811 === (9))){
var inst_67790 = (state_67810[(8)]);
var state_67810__$1 = state_67810;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67810__$1,(11),out,inst_67790);
} else {
if((state_val_67811 === (5))){
var inst_67787 = (state_67810[(7)]);
var inst_67790 = (state_67810[(8)]);
var inst_67794 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_67790,inst_67787);
var state_67810__$1 = state_67810;
if(inst_67794){
var statearr_67845_68903 = state_67810__$1;
(statearr_67845_68903[(1)] = (8));

} else {
var statearr_67846_68904 = state_67810__$1;
(statearr_67846_68904[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67811 === (10))){
var inst_67802 = (state_67810[(2)]);
var state_67810__$1 = state_67810;
var statearr_67847_68905 = state_67810__$1;
(statearr_67847_68905[(2)] = inst_67802);

(statearr_67847_68905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67811 === (8))){
var inst_67787 = (state_67810[(7)]);
var tmp67844 = inst_67787;
var inst_67787__$1 = tmp67844;
var state_67810__$1 = (function (){var statearr_67848 = state_67810;
(statearr_67848[(7)] = inst_67787__$1);

return statearr_67848;
})();
var statearr_67849_68909 = state_67810__$1;
(statearr_67849_68909[(2)] = null);

(statearr_67849_68909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__66150__auto__ = null;
var cljs$core$async$state_machine__66150__auto____0 = (function (){
var statearr_67851 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_67851[(0)] = cljs$core$async$state_machine__66150__auto__);

(statearr_67851[(1)] = (1));

return statearr_67851;
});
var cljs$core$async$state_machine__66150__auto____1 = (function (state_67810){
while(true){
var ret_value__66151__auto__ = (function (){try{while(true){
var result__66152__auto__ = switch__66149__auto__(state_67810);
if(cljs.core.keyword_identical_QMARK_(result__66152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66152__auto__;
}
break;
}
}catch (e67852){if((e67852 instanceof Object)){
var ex__66153__auto__ = e67852;
var statearr_67853_68910 = state_67810;
(statearr_67853_68910[(5)] = ex__66153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67852;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68911 = state_67810;
state_67810 = G__68911;
continue;
} else {
return ret_value__66151__auto__;
}
break;
}
});
cljs$core$async$state_machine__66150__auto__ = function(state_67810){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66150__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66150__auto____1.call(this,state_67810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66150__auto____0;
cljs$core$async$state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66150__auto____1;
return cljs$core$async$state_machine__66150__auto__;
})()
})();
var state__66274__auto__ = (function (){var statearr_67854 = f__66273__auto__();
(statearr_67854[(6)] = c__66272__auto___68893);

return statearr_67854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__66274__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__67856 = arguments.length;
switch (G__67856) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__66272__auto___68913 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__66273__auto__ = (function (){var switch__66149__auto__ = (function (state_67895){
var state_val_67897 = (state_67895[(1)]);
if((state_val_67897 === (7))){
var inst_67891 = (state_67895[(2)]);
var state_67895__$1 = state_67895;
var statearr_67898_68914 = state_67895__$1;
(statearr_67898_68914[(2)] = inst_67891);

(statearr_67898_68914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67897 === (1))){
var inst_67858 = (new Array(n));
var inst_67859 = inst_67858;
var inst_67860 = (0);
var state_67895__$1 = (function (){var statearr_67899 = state_67895;
(statearr_67899[(7)] = inst_67860);

(statearr_67899[(8)] = inst_67859);

return statearr_67899;
})();
var statearr_67900_68915 = state_67895__$1;
(statearr_67900_68915[(2)] = null);

(statearr_67900_68915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67897 === (4))){
var inst_67863 = (state_67895[(9)]);
var inst_67863__$1 = (state_67895[(2)]);
var inst_67864 = (inst_67863__$1 == null);
var inst_67865 = cljs.core.not(inst_67864);
var state_67895__$1 = (function (){var statearr_67901 = state_67895;
(statearr_67901[(9)] = inst_67863__$1);

return statearr_67901;
})();
if(inst_67865){
var statearr_67903_68916 = state_67895__$1;
(statearr_67903_68916[(1)] = (5));

} else {
var statearr_67904_68917 = state_67895__$1;
(statearr_67904_68917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67897 === (15))){
var inst_67885 = (state_67895[(2)]);
var state_67895__$1 = state_67895;
var statearr_67905_68918 = state_67895__$1;
(statearr_67905_68918[(2)] = inst_67885);

(statearr_67905_68918[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67897 === (13))){
var state_67895__$1 = state_67895;
var statearr_67906_68919 = state_67895__$1;
(statearr_67906_68919[(2)] = null);

(statearr_67906_68919[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67897 === (6))){
var inst_67860 = (state_67895[(7)]);
var inst_67881 = (inst_67860 > (0));
var state_67895__$1 = state_67895;
if(cljs.core.truth_(inst_67881)){
var statearr_67907_68920 = state_67895__$1;
(statearr_67907_68920[(1)] = (12));

} else {
var statearr_67908_68921 = state_67895__$1;
(statearr_67908_68921[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67897 === (3))){
var inst_67893 = (state_67895[(2)]);
var state_67895__$1 = state_67895;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67895__$1,inst_67893);
} else {
if((state_val_67897 === (12))){
var inst_67859 = (state_67895[(8)]);
var inst_67883 = cljs.core.vec(inst_67859);
var state_67895__$1 = state_67895;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67895__$1,(15),out,inst_67883);
} else {
if((state_val_67897 === (2))){
var state_67895__$1 = state_67895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67895__$1,(4),ch);
} else {
if((state_val_67897 === (11))){
var inst_67875 = (state_67895[(2)]);
var inst_67876 = (new Array(n));
var inst_67859 = inst_67876;
var inst_67860 = (0);
var state_67895__$1 = (function (){var statearr_67910 = state_67895;
(statearr_67910[(7)] = inst_67860);

(statearr_67910[(8)] = inst_67859);

(statearr_67910[(10)] = inst_67875);

return statearr_67910;
})();
var statearr_67911_68923 = state_67895__$1;
(statearr_67911_68923[(2)] = null);

(statearr_67911_68923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67897 === (9))){
var inst_67859 = (state_67895[(8)]);
var inst_67873 = cljs.core.vec(inst_67859);
var state_67895__$1 = state_67895;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67895__$1,(11),out,inst_67873);
} else {
if((state_val_67897 === (5))){
var inst_67863 = (state_67895[(9)]);
var inst_67868 = (state_67895[(11)]);
var inst_67860 = (state_67895[(7)]);
var inst_67859 = (state_67895[(8)]);
var inst_67867 = (inst_67859[inst_67860] = inst_67863);
var inst_67868__$1 = (inst_67860 + (1));
var inst_67869 = (inst_67868__$1 < n);
var state_67895__$1 = (function (){var statearr_67912 = state_67895;
(statearr_67912[(11)] = inst_67868__$1);

(statearr_67912[(12)] = inst_67867);

return statearr_67912;
})();
if(cljs.core.truth_(inst_67869)){
var statearr_67913_68924 = state_67895__$1;
(statearr_67913_68924[(1)] = (8));

} else {
var statearr_67914_68925 = state_67895__$1;
(statearr_67914_68925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67897 === (14))){
var inst_67888 = (state_67895[(2)]);
var inst_67889 = cljs.core.async.close_BANG_(out);
var state_67895__$1 = (function (){var statearr_67917 = state_67895;
(statearr_67917[(13)] = inst_67888);

return statearr_67917;
})();
var statearr_67918_68926 = state_67895__$1;
(statearr_67918_68926[(2)] = inst_67889);

(statearr_67918_68926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67897 === (10))){
var inst_67879 = (state_67895[(2)]);
var state_67895__$1 = state_67895;
var statearr_67919_68927 = state_67895__$1;
(statearr_67919_68927[(2)] = inst_67879);

(statearr_67919_68927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67897 === (8))){
var inst_67868 = (state_67895[(11)]);
var inst_67859 = (state_67895[(8)]);
var tmp67916 = inst_67859;
var inst_67859__$1 = tmp67916;
var inst_67860 = inst_67868;
var state_67895__$1 = (function (){var statearr_67920 = state_67895;
(statearr_67920[(7)] = inst_67860);

(statearr_67920[(8)] = inst_67859__$1);

return statearr_67920;
})();
var statearr_67921_68928 = state_67895__$1;
(statearr_67921_68928[(2)] = null);

(statearr_67921_68928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__66150__auto__ = null;
var cljs$core$async$state_machine__66150__auto____0 = (function (){
var statearr_67923 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67923[(0)] = cljs$core$async$state_machine__66150__auto__);

(statearr_67923[(1)] = (1));

return statearr_67923;
});
var cljs$core$async$state_machine__66150__auto____1 = (function (state_67895){
while(true){
var ret_value__66151__auto__ = (function (){try{while(true){
var result__66152__auto__ = switch__66149__auto__(state_67895);
if(cljs.core.keyword_identical_QMARK_(result__66152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66152__auto__;
}
break;
}
}catch (e67924){if((e67924 instanceof Object)){
var ex__66153__auto__ = e67924;
var statearr_67925_68929 = state_67895;
(statearr_67925_68929[(5)] = ex__66153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67924;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68930 = state_67895;
state_67895 = G__68930;
continue;
} else {
return ret_value__66151__auto__;
}
break;
}
});
cljs$core$async$state_machine__66150__auto__ = function(state_67895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66150__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66150__auto____1.call(this,state_67895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66150__auto____0;
cljs$core$async$state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66150__auto____1;
return cljs$core$async$state_machine__66150__auto__;
})()
})();
var state__66274__auto__ = (function (){var statearr_67927 = f__66273__auto__();
(statearr_67927[(6)] = c__66272__auto___68913);

return statearr_67927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__66274__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__67929 = arguments.length;
switch (G__67929) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__66272__auto___68932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__66273__auto__ = (function (){var switch__66149__auto__ = (function (state_67976){
var state_val_67977 = (state_67976[(1)]);
if((state_val_67977 === (7))){
var inst_67971 = (state_67976[(2)]);
var state_67976__$1 = state_67976;
var statearr_67978_68933 = state_67976__$1;
(statearr_67978_68933[(2)] = inst_67971);

(statearr_67978_68933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67977 === (1))){
var inst_67931 = [];
var inst_67932 = inst_67931;
var inst_67933 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_67976__$1 = (function (){var statearr_67979 = state_67976;
(statearr_67979[(7)] = inst_67933);

(statearr_67979[(8)] = inst_67932);

return statearr_67979;
})();
var statearr_67980_68935 = state_67976__$1;
(statearr_67980_68935[(2)] = null);

(statearr_67980_68935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67977 === (4))){
var inst_67936 = (state_67976[(9)]);
var inst_67936__$1 = (state_67976[(2)]);
var inst_67937 = (inst_67936__$1 == null);
var inst_67938 = cljs.core.not(inst_67937);
var state_67976__$1 = (function (){var statearr_67982 = state_67976;
(statearr_67982[(9)] = inst_67936__$1);

return statearr_67982;
})();
if(inst_67938){
var statearr_67983_68937 = state_67976__$1;
(statearr_67983_68937[(1)] = (5));

} else {
var statearr_67984_68938 = state_67976__$1;
(statearr_67984_68938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67977 === (15))){
var inst_67932 = (state_67976[(8)]);
var inst_67963 = cljs.core.vec(inst_67932);
var state_67976__$1 = state_67976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67976__$1,(18),out,inst_67963);
} else {
if((state_val_67977 === (13))){
var inst_67958 = (state_67976[(2)]);
var state_67976__$1 = state_67976;
var statearr_67985_68939 = state_67976__$1;
(statearr_67985_68939[(2)] = inst_67958);

(statearr_67985_68939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67977 === (6))){
var inst_67932 = (state_67976[(8)]);
var inst_67960 = inst_67932.length;
var inst_67961 = (inst_67960 > (0));
var state_67976__$1 = state_67976;
if(cljs.core.truth_(inst_67961)){
var statearr_67986_68940 = state_67976__$1;
(statearr_67986_68940[(1)] = (15));

} else {
var statearr_67987_68941 = state_67976__$1;
(statearr_67987_68941[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67977 === (17))){
var inst_67968 = (state_67976[(2)]);
var inst_67969 = cljs.core.async.close_BANG_(out);
var state_67976__$1 = (function (){var statearr_67989 = state_67976;
(statearr_67989[(10)] = inst_67968);

return statearr_67989;
})();
var statearr_67990_68943 = state_67976__$1;
(statearr_67990_68943[(2)] = inst_67969);

(statearr_67990_68943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67977 === (3))){
var inst_67974 = (state_67976[(2)]);
var state_67976__$1 = state_67976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67976__$1,inst_67974);
} else {
if((state_val_67977 === (12))){
var inst_67932 = (state_67976[(8)]);
var inst_67951 = cljs.core.vec(inst_67932);
var state_67976__$1 = state_67976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67976__$1,(14),out,inst_67951);
} else {
if((state_val_67977 === (2))){
var state_67976__$1 = state_67976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67976__$1,(4),ch);
} else {
if((state_val_67977 === (11))){
var inst_67940 = (state_67976[(11)]);
var inst_67936 = (state_67976[(9)]);
var inst_67932 = (state_67976[(8)]);
var inst_67948 = inst_67932.push(inst_67936);
var tmp67991 = inst_67932;
var inst_67932__$1 = tmp67991;
var inst_67933 = inst_67940;
var state_67976__$1 = (function (){var statearr_67992 = state_67976;
(statearr_67992[(7)] = inst_67933);

(statearr_67992[(12)] = inst_67948);

(statearr_67992[(8)] = inst_67932__$1);

return statearr_67992;
})();
var statearr_67993_68948 = state_67976__$1;
(statearr_67993_68948[(2)] = null);

(statearr_67993_68948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67977 === (9))){
var inst_67933 = (state_67976[(7)]);
var inst_67944 = cljs.core.keyword_identical_QMARK_(inst_67933,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_67976__$1 = state_67976;
var statearr_67995_68953 = state_67976__$1;
(statearr_67995_68953[(2)] = inst_67944);

(statearr_67995_68953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67977 === (5))){
var inst_67941 = (state_67976[(13)]);
var inst_67933 = (state_67976[(7)]);
var inst_67940 = (state_67976[(11)]);
var inst_67936 = (state_67976[(9)]);
var inst_67940__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_67936) : f.call(null,inst_67936));
var inst_67941__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_67940__$1,inst_67933);
var state_67976__$1 = (function (){var statearr_67996 = state_67976;
(statearr_67996[(13)] = inst_67941__$1);

(statearr_67996[(11)] = inst_67940__$1);

return statearr_67996;
})();
if(inst_67941__$1){
var statearr_67997_68955 = state_67976__$1;
(statearr_67997_68955[(1)] = (8));

} else {
var statearr_67998_68956 = state_67976__$1;
(statearr_67998_68956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67977 === (14))){
var inst_67940 = (state_67976[(11)]);
var inst_67936 = (state_67976[(9)]);
var inst_67953 = (state_67976[(2)]);
var inst_67954 = [];
var inst_67955 = inst_67954.push(inst_67936);
var inst_67932 = inst_67954;
var inst_67933 = inst_67940;
var state_67976__$1 = (function (){var statearr_67999 = state_67976;
(statearr_67999[(7)] = inst_67933);

(statearr_67999[(14)] = inst_67953);

(statearr_67999[(8)] = inst_67932);

(statearr_67999[(15)] = inst_67955);

return statearr_67999;
})();
var statearr_68000_68959 = state_67976__$1;
(statearr_68000_68959[(2)] = null);

(statearr_68000_68959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67977 === (16))){
var state_67976__$1 = state_67976;
var statearr_68001_68960 = state_67976__$1;
(statearr_68001_68960[(2)] = null);

(statearr_68001_68960[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67977 === (10))){
var inst_67946 = (state_67976[(2)]);
var state_67976__$1 = state_67976;
if(cljs.core.truth_(inst_67946)){
var statearr_68003_68961 = state_67976__$1;
(statearr_68003_68961[(1)] = (11));

} else {
var statearr_68004_68962 = state_67976__$1;
(statearr_68004_68962[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67977 === (18))){
var inst_67965 = (state_67976[(2)]);
var state_67976__$1 = state_67976;
var statearr_68005_68963 = state_67976__$1;
(statearr_68005_68963[(2)] = inst_67965);

(statearr_68005_68963[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67977 === (8))){
var inst_67941 = (state_67976[(13)]);
var state_67976__$1 = state_67976;
var statearr_68006_68964 = state_67976__$1;
(statearr_68006_68964[(2)] = inst_67941);

(statearr_68006_68964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__66150__auto__ = null;
var cljs$core$async$state_machine__66150__auto____0 = (function (){
var statearr_68007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68007[(0)] = cljs$core$async$state_machine__66150__auto__);

(statearr_68007[(1)] = (1));

return statearr_68007;
});
var cljs$core$async$state_machine__66150__auto____1 = (function (state_67976){
while(true){
var ret_value__66151__auto__ = (function (){try{while(true){
var result__66152__auto__ = switch__66149__auto__(state_67976);
if(cljs.core.keyword_identical_QMARK_(result__66152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66152__auto__;
}
break;
}
}catch (e68008){if((e68008 instanceof Object)){
var ex__66153__auto__ = e68008;
var statearr_68009_68966 = state_67976;
(statearr_68009_68966[(5)] = ex__66153__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68008;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68968 = state_67976;
state_67976 = G__68968;
continue;
} else {
return ret_value__66151__auto__;
}
break;
}
});
cljs$core$async$state_machine__66150__auto__ = function(state_67976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66150__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66150__auto____1.call(this,state_67976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66150__auto____0;
cljs$core$async$state_machine__66150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66150__auto____1;
return cljs$core$async$state_machine__66150__auto__;
})()
})();
var state__66274__auto__ = (function (){var statearr_68011 = f__66273__auto__();
(statearr_68011[(6)] = c__66272__auto___68932);

return statearr_68011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__66274__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
