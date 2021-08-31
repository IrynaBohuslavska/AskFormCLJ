goog.provide('reitit.trie');
reitit.trie.into_set = (function reitit$trie$into_set(x){
if(((cljs.core.set_QMARK_(x)) || (cljs.core.sequential_QMARK_(x)))){
return cljs.core.set(x);
} else {
if((x == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,x);

}
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
reitit.trie.Wild = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k71992,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__71996 = k71992;
var G__71996__$1 = (((G__71996 instanceof cljs.core.Keyword))?G__71996.fqn:null);
switch (G__71996__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71992,else__4475__auto__);

}
}));

(reitit.trie.Wild.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__71997){
var vec__71998 = p__71997;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71998,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71998,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(reitit.trie.Wild.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#reitit.trie.Wild{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71991){
var self__ = this;
var G__71991__$1 = this;
return (new cljs.core.RecordIter((0),G__71991__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.trie.Wild.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Wild.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Wild.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1970880185 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(reitit.trie.Wild.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71993,other71994){
var self__ = this;
var this71993__$1 = this;
return (((!((other71994 == null)))) && ((((this71993__$1.constructor === other71994.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71993__$1.value,other71994.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71993__$1.__extmap,other71994.__extmap)))))));
}));

(reitit.trie.Wild.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(reitit.trie.Wild.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k71992){
var self__ = this;
var this__4479__auto____$1 = this;
var G__72001 = k71992;
var G__72001__$1 = (((G__72001 instanceof cljs.core.Keyword))?G__72001.fqn:null);
switch (G__72001__$1) {
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71992);

}
}));

(reitit.trie.Wild.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__71991){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__72002 = cljs.core.keyword_identical_QMARK_;
var expr__72003 = k__4481__auto__;
if(cljs.core.truth_((pred__72002.cljs$core$IFn$_invoke$arity$2 ? pred__72002.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__72003) : pred__72002.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__72003)))){
return (new reitit.trie.Wild(G__71991,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__71991),null));
}
}));

(reitit.trie.Wild.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__71991){
var self__ = this;
var this__4471__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,G__71991,self__.__extmap,self__.__hash));
}));

(reitit.trie.Wild.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(reitit.trie.Wild.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(reitit.trie.Wild.cljs$lang$type = true);

(reitit.trie.Wild.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"reitit.trie/Wild",null,(1),null));
}));

(reitit.trie.Wild.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"reitit.trie/Wild");
}));

/**
 * Positional factory function for reitit.trie/Wild.
 */
reitit.trie.__GT_Wild = (function reitit$trie$__GT_Wild(value){
return (new reitit.trie.Wild(value,null,null,null));
});

/**
 * Factory function for reitit.trie/Wild, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Wild = (function reitit$trie$map__GT_Wild(G__71995){
var extmap__4512__auto__ = (function (){var G__72005 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__71995,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_(G__71995)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__72005);
} else {
return G__72005;
}
})();
return (new reitit.trie.Wild(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__71995),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
reitit.trie.CatchAll = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k72007,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__72011 = k72007;
var G__72011__$1 = (((G__72011 instanceof cljs.core.Keyword))?G__72011.fqn:null);
switch (G__72011__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k72007,else__4475__auto__);

}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__72012){
var vec__72013 = p__72012;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72013,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72013,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(reitit.trie.CatchAll.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#reitit.trie.CatchAll{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__72006){
var self__ = this;
var G__72006__$1 = this;
return (new cljs.core.RecordIter((0),G__72006__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-987265038 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this72008,other72009){
var self__ = this;
var this72008__$1 = this;
return (((!((other72009 == null)))) && ((((this72008__$1.constructor === other72009.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72008__$1.value,other72009.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72008__$1.__extmap,other72009.__extmap)))))));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k72007){
var self__ = this;
var this__4479__auto____$1 = this;
var G__72016 = k72007;
var G__72016__$1 = (((G__72016 instanceof cljs.core.Keyword))?G__72016.fqn:null);
switch (G__72016__$1) {
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k72007);

}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__72006){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__72017 = cljs.core.keyword_identical_QMARK_;
var expr__72018 = k__4481__auto__;
if(cljs.core.truth_((pred__72017.cljs$core$IFn$_invoke$arity$2 ? pred__72017.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__72018) : pred__72017.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__72018)))){
return (new reitit.trie.CatchAll(G__72006,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__72006),null));
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__72006){
var self__ = this;
var this__4471__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,G__72006,self__.__extmap,self__.__hash));
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(reitit.trie.CatchAll.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(reitit.trie.CatchAll.cljs$lang$type = true);

(reitit.trie.CatchAll.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"reitit.trie/CatchAll",null,(1),null));
}));

(reitit.trie.CatchAll.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"reitit.trie/CatchAll");
}));

/**
 * Positional factory function for reitit.trie/CatchAll.
 */
reitit.trie.__GT_CatchAll = (function reitit$trie$__GT_CatchAll(value){
return (new reitit.trie.CatchAll(value,null,null,null));
});

/**
 * Factory function for reitit.trie/CatchAll, taking a map of keywords to field values.
 */
reitit.trie.map__GT_CatchAll = (function reitit$trie$map__GT_CatchAll(G__72010){
var extmap__4512__auto__ = (function (){var G__72020 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__72010,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_(G__72010)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__72020);
} else {
return G__72020;
}
})();
return (new reitit.trie.CatchAll(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__72010),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
reitit.trie.Match = (function (params,data,__meta,__extmap,__hash){
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k72022,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__72026 = k72022;
var G__72026__$1 = (((G__72026 instanceof cljs.core.Keyword))?G__72026.fqn:null);
switch (G__72026__$1) {
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k72022,else__4475__auto__);

}
}));

(reitit.trie.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__72027){
var vec__72028 = p__72027;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72028,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72028,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(reitit.trie.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#reitit.trie.Match{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__72021){
var self__ = this;
var G__72021__$1 = this;
return (new cljs.core.RecordIter((0),G__72021__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.trie.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1117628764 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(reitit.trie.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this72023,other72024){
var self__ = this;
var this72023__$1 = this;
return (((!((other72024 == null)))) && ((((this72023__$1.constructor === other72024.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72023__$1.params,other72024.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72023__$1.data,other72024.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72023__$1.__extmap,other72024.__extmap)))))))));
}));

(reitit.trie.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(reitit.trie.Match.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k72022){
var self__ = this;
var this__4479__auto____$1 = this;
var G__72031 = k72022;
var G__72031__$1 = (((G__72031 instanceof cljs.core.Keyword))?G__72031.fqn:null);
switch (G__72031__$1) {
case "params":
case "data":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k72022);

}
}));

(reitit.trie.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__72021){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__72032 = cljs.core.keyword_identical_QMARK_;
var expr__72033 = k__4481__auto__;
if(cljs.core.truth_((pred__72032.cljs$core$IFn$_invoke$arity$2 ? pred__72032.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__72033) : pred__72032.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__72033)))){
return (new reitit.trie.Match(G__72021,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72032.cljs$core$IFn$_invoke$arity$2 ? pred__72032.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__72033) : pred__72032.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__72033)))){
return (new reitit.trie.Match(self__.params,G__72021,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__72021),null));
}
}
}));

(reitit.trie.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__72021){
var self__ = this;
var this__4471__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,G__72021,self__.__extmap,self__.__hash));
}));

(reitit.trie.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(reitit.trie.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
}));

(reitit.trie.Match.cljs$lang$type = true);

(reitit.trie.Match.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"reitit.trie/Match",null,(1),null));
}));

(reitit.trie.Match.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"reitit.trie/Match");
}));

/**
 * Positional factory function for reitit.trie/Match.
 */
reitit.trie.__GT_Match = (function reitit$trie$__GT_Match(params,data){
return (new reitit.trie.Match(params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Match, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Match = (function reitit$trie$map__GT_Match(G__72025){
var extmap__4512__auto__ = (function (){var G__72035 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__72025,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377)], 0));
if(cljs.core.record_QMARK_(G__72025)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__72035);
} else {
return G__72035;
}
})();
return (new reitit.trie.Match(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__72025),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__72025),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
reitit.trie.Node = (function (children,wilds,catch_all,params,data,__meta,__extmap,__hash){
this.children = children;
this.wilds = wilds;
this.catch_all = catch_all;
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k72037,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__72041 = k72037;
var G__72041__$1 = (((G__72041 instanceof cljs.core.Keyword))?G__72041.fqn:null);
switch (G__72041__$1) {
case "children":
return self__.children;

break;
case "wilds":
return self__.wilds;

break;
case "catch-all":
return self__.catch_all;

break;
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k72037,else__4475__auto__);

}
}));

(reitit.trie.Node.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__72042){
var vec__72043 = p__72042;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72043,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72043,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(reitit.trie.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#reitit.trie.Node{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wilds","wilds",132271223),self__.wilds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),self__.catch_all],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__72036){
var self__ = this;
var G__72036__$1 = this;
return (new cljs.core.RecordIter((0),G__72036__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"wilds","wilds",132271223),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.trie.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (33004208 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(reitit.trie.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this72038,other72039){
var self__ = this;
var this72038__$1 = this;
return (((!((other72039 == null)))) && ((((this72038__$1.constructor === other72039.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72038__$1.children,other72039.children)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72038__$1.wilds,other72039.wilds)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72038__$1.catch_all,other72039.catch_all)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72038__$1.params,other72039.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72038__$1.data,other72039.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72038__$1.__extmap,other72039.__extmap)))))))))))))));
}));

(reitit.trie.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"wilds","wilds",132271223),null,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(reitit.trie.Node.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k72037){
var self__ = this;
var this__4479__auto____$1 = this;
var G__72046 = k72037;
var G__72046__$1 = (((G__72046 instanceof cljs.core.Keyword))?G__72046.fqn:null);
switch (G__72046__$1) {
case "children":
case "wilds":
case "catch-all":
case "params":
case "data":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k72037);

}
}));

(reitit.trie.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__72036){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__72047 = cljs.core.keyword_identical_QMARK_;
var expr__72048 = k__4481__auto__;
if(cljs.core.truth_((pred__72047.cljs$core$IFn$_invoke$arity$2 ? pred__72047.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__72048) : pred__72047.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__72048)))){
return (new reitit.trie.Node(G__72036,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72047.cljs$core$IFn$_invoke$arity$2 ? pred__72047.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wilds","wilds",132271223),expr__72048) : pred__72047.call(null,new cljs.core.Keyword(null,"wilds","wilds",132271223),expr__72048)))){
return (new reitit.trie.Node(self__.children,G__72036,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72047.cljs$core$IFn$_invoke$arity$2 ? pred__72047.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),expr__72048) : pred__72047.call(null,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),expr__72048)))){
return (new reitit.trie.Node(self__.children,self__.wilds,G__72036,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72047.cljs$core$IFn$_invoke$arity$2 ? pred__72047.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__72048) : pred__72047.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__72048)))){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,G__72036,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72047.cljs$core$IFn$_invoke$arity$2 ? pred__72047.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__72048) : pred__72047.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__72048)))){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,G__72036,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__72036),null));
}
}
}
}
}
}));

(reitit.trie.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"wilds","wilds",132271223),self__.wilds,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),self__.catch_all,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__72036){
var self__ = this;
var this__4471__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,G__72036,self__.__extmap,self__.__hash));
}));

(reitit.trie.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(reitit.trie.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"wilds","wilds",1772802750,null),new cljs.core.Symbol(null,"catch-all","catch-all",-1470323199,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
}));

(reitit.trie.Node.cljs$lang$type = true);

(reitit.trie.Node.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"reitit.trie/Node",null,(1),null));
}));

(reitit.trie.Node.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"reitit.trie/Node");
}));

/**
 * Positional factory function for reitit.trie/Node.
 */
reitit.trie.__GT_Node = (function reitit$trie$__GT_Node(children,wilds,catch_all,params,data){
return (new reitit.trie.Node(children,wilds,catch_all,params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Node, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Node = (function reitit$trie$map__GT_Node(G__72040){
var extmap__4512__auto__ = (function (){var G__72050 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__72040,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wilds","wilds",132271223),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], 0));
if(cljs.core.record_QMARK_(G__72040)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__72050);
} else {
return G__72050;
}
})();
return (new reitit.trie.Node(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__72040),new cljs.core.Keyword(null,"wilds","wilds",132271223).cljs$core$IFn$_invoke$arity$1(G__72040),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570).cljs$core$IFn$_invoke$arity$1(G__72040),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__72040),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__72040),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

reitit.trie.wild_QMARK_ = (function reitit$trie$wild_QMARK_(x){
return (x instanceof reitit.trie.Wild);
});
reitit.trie.catch_all_QMARK_ = (function reitit$trie$catch_all_QMARK_(x){
return (x instanceof reitit.trie.CatchAll);
});

/**
 * @interface
 */
reitit.trie.Matcher = function(){};

var reitit$trie$Matcher$match$dyn_72277 = (function (this$,i,max,path){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.trie.match[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(this$,i,max,path) : m__4522__auto__.call(null,this$,i,max,path));
} else {
var m__4519__auto__ = (reitit.trie.match["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(this$,i,max,path) : m__4519__auto__.call(null,this$,i,max,path));
} else {
throw cljs.core.missing_protocol("Matcher.match",this$);
}
}
});
reitit.trie.match = (function reitit$trie$match(this$,i,max,path){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$match$arity$4 == null)))))){
return this$.reitit$trie$Matcher$match$arity$4(this$,i,max,path);
} else {
return reitit$trie$Matcher$match$dyn_72277(this$,i,max,path);
}
});

var reitit$trie$Matcher$view$dyn_72280 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.trie.view[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (reitit.trie.view["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Matcher.view",this$);
}
}
});
reitit.trie.view = (function reitit$trie$view(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$view$arity$1 == null)))))){
return this$.reitit$trie$Matcher$view$arity$1(this$);
} else {
return reitit$trie$Matcher$view$dyn_72280(this$);
}
});

var reitit$trie$Matcher$depth$dyn_72282 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.trie.depth[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (reitit.trie.depth["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Matcher.depth",this$);
}
}
});
reitit.trie.depth = (function reitit$trie$depth(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$depth$arity$1 == null)))))){
return this$.reitit$trie$Matcher$depth$arity$1(this$);
} else {
return reitit$trie$Matcher$depth$dyn_72282(this$);
}
});

var reitit$trie$Matcher$length$dyn_72283 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.trie.length[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (reitit.trie.length["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Matcher.length",this$);
}
}
});
reitit.trie.length = (function reitit$trie$length(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$length$arity$1 == null)))))){
return this$.reitit$trie$Matcher$length$arity$1(this$);
} else {
return reitit$trie$Matcher$length$dyn_72283(this$);
}
});


/**
 * @interface
 */
reitit.trie.TrieCompiler = function(){};

var reitit$trie$TrieCompiler$data_matcher$dyn_72284 = (function (this$,params,data){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.trie.data_matcher[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(this$,params,data) : m__4522__auto__.call(null,this$,params,data));
} else {
var m__4519__auto__ = (reitit.trie.data_matcher["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(this$,params,data) : m__4519__auto__.call(null,this$,params,data));
} else {
throw cljs.core.missing_protocol("TrieCompiler.data-matcher",this$);
}
}
});
reitit.trie.data_matcher = (function reitit$trie$data_matcher(this$,params,data){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$data_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$data_matcher$arity$3(this$,params,data);
} else {
return reitit$trie$TrieCompiler$data_matcher$dyn_72284(this$,params,data);
}
});

var reitit$trie$TrieCompiler$static_matcher$dyn_72286 = (function (this$,path,matcher){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.trie.static_matcher[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,matcher) : m__4522__auto__.call(null,this$,path,matcher));
} else {
var m__4519__auto__ = (reitit.trie.static_matcher["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,matcher) : m__4519__auto__.call(null,this$,path,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.static-matcher",this$);
}
}
});
reitit.trie.static_matcher = (function reitit$trie$static_matcher(this$,path,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$static_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$static_matcher$arity$3(this$,path,matcher);
} else {
return reitit$trie$TrieCompiler$static_matcher$dyn_72286(this$,path,matcher);
}
});

var reitit$trie$TrieCompiler$wild_matcher$dyn_72290 = (function (this$,key,end,matcher){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.trie.wild_matcher[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,end,matcher) : m__4522__auto__.call(null,this$,key,end,matcher));
} else {
var m__4519__auto__ = (reitit.trie.wild_matcher["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,end,matcher) : m__4519__auto__.call(null,this$,key,end,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.wild-matcher",this$);
}
}
});
reitit.trie.wild_matcher = (function reitit$trie$wild_matcher(this$,key,end,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$wild_matcher$arity$4 == null)))))){
return this$.reitit$trie$TrieCompiler$wild_matcher$arity$4(this$,key,end,matcher);
} else {
return reitit$trie$TrieCompiler$wild_matcher$dyn_72290(this$,key,end,matcher);
}
});

var reitit$trie$TrieCompiler$catch_all_matcher$dyn_72295 = (function (this$,key,params,data){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.trie.catch_all_matcher[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,params,data) : m__4522__auto__.call(null,this$,key,params,data));
} else {
var m__4519__auto__ = (reitit.trie.catch_all_matcher["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,params,data) : m__4519__auto__.call(null,this$,key,params,data));
} else {
throw cljs.core.missing_protocol("TrieCompiler.catch-all-matcher",this$);
}
}
});
reitit.trie.catch_all_matcher = (function reitit$trie$catch_all_matcher(this$,key,params,data){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 == null)))))){
return this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4(this$,key,params,data);
} else {
return reitit$trie$TrieCompiler$catch_all_matcher$dyn_72295(this$,key,params,data);
}
});

var reitit$trie$TrieCompiler$linear_matcher$dyn_72300 = (function (this$,matchers,ordered_QMARK_){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.trie.linear_matcher[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(this$,matchers,ordered_QMARK_) : m__4522__auto__.call(null,this$,matchers,ordered_QMARK_));
} else {
var m__4519__auto__ = (reitit.trie.linear_matcher["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(this$,matchers,ordered_QMARK_) : m__4519__auto__.call(null,this$,matchers,ordered_QMARK_));
} else {
throw cljs.core.missing_protocol("TrieCompiler.linear-matcher",this$);
}
}
});
reitit.trie.linear_matcher = (function reitit$trie$linear_matcher(this$,matchers,ordered_QMARK_){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$linear_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$linear_matcher$arity$3(this$,matchers,ordered_QMARK_);
} else {
return reitit$trie$TrieCompiler$linear_matcher$dyn_72300(this$,matchers,ordered_QMARK_);
}
});

var reitit$trie$TrieCompiler$_pretty$dyn_72301 = (function (this$,matcher){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.trie._pretty[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__4522__auto__.call(null,this$,matcher));
} else {
var m__4519__auto__ = (reitit.trie._pretty["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__4519__auto__.call(null,this$,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.-pretty",this$);
}
}
});
reitit.trie._pretty = (function reitit$trie$_pretty(this$,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$_pretty$arity$2 == null)))))){
return this$.reitit$trie$TrieCompiler$_pretty$arity$2(this$,matcher);
} else {
return reitit$trie$TrieCompiler$_pretty$dyn_72301(this$,matcher);
}
});

var reitit$trie$TrieCompiler$_path_matcher$dyn_72302 = (function (this$,matcher){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.trie._path_matcher[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__4522__auto__.call(null,this$,matcher));
} else {
var m__4519__auto__ = (reitit.trie._path_matcher["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__4519__auto__.call(null,this$,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.-path-matcher",this$);
}
}
});
reitit.trie._path_matcher = (function reitit$trie$_path_matcher(this$,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$_path_matcher$arity$2 == null)))))){
return this$.reitit$trie$TrieCompiler$_path_matcher$arity$2(this$,matcher);
} else {
return reitit$trie$TrieCompiler$_path_matcher$dyn_72302(this$,matcher);
}
});

reitit.trie.assoc_param = (function reitit$trie$assoc_param(match,k,v){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(match,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,v));
});
reitit.trie.common_prefix = (function reitit$trie$common_prefix(s1,s2){
var max = (function (){var x__4309__auto__ = cljs.core.count(s1);
var y__4310__auto__ = cljs.core.count(s2);
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})();
var i = (0);
while(true){
if((i > max)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s1,(0),max);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s1,i),cljs.core.get.cljs$core$IFn$_invoke$arity$2(s2,i))){
if((!((i === (0))))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s1,(0),i);
} else {
return null;
}
} else {
var G__72310 = (i + (1));
i = G__72310;
continue;

}
}
break;
}
});
reitit.trie._keyword = (function reitit$trie$_keyword(s){
var temp__5751__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,"/");
if(cljs.core.truth_(temp__5751__auto__)){
var i = temp__5751__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(i + (1))));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s);
}
});
reitit.trie.split_path = (function reitit$trie$split_path(s,p__72051){
var map__72052 = p__72051;
var map__72052__$1 = cljs.core.__destructure_map(map__72052);
var syntax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72052__$1,new cljs.core.Keyword(null,"syntax","syntax",-1637761676),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"bracket","bracket",-600276523),null], null), null));
var bracket_QMARK_ = new cljs.core.Keyword(null,"bracket","bracket",-600276523).cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set(syntax));
var colon_QMARK_ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set(syntax));
var _static = (function (from,to){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,to)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,from,to)], null);
} else {
return null;
}
});
var _wild = (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_Wild(reitit.trie._keyword(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(from + (1)),to)))], null);
});
var _catch_all = (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_CatchAll(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(from + (1)),to)))], null);
});
var ss = null;
var from = (0);
var to = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to,cljs.core.count(s))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(ss,_static(from,to));
} else {
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,to);
if(cljs.core.truth_((function (){var and__4221__auto__ = bracket_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",c);
} else {
return and__4221__auto__;
}
})())){
var to_SINGLEQUOTE_ = (function (){var or__4223__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(s,"}",to);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","unclosed-brackets","reitit.trie/unclosed-brackets",1599327560),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),s], null));
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,(to + (1))))){
var G__72315 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_catch_all((to + (1)),to_SINGLEQUOTE_)], 0));
var G__72316 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
var G__72317 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
ss = G__72315;
from = G__72316;
to = G__72317;
continue;
} else {
var G__72318 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_wild(to,to_SINGLEQUOTE_)], 0));
var G__72319 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
var G__72320 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
ss = G__72318;
from = G__72319;
to = G__72320;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = colon_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",c);
} else {
return and__4221__auto__;
}
})())){
var to_SINGLEQUOTE_ = (function (){var or__4223__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(s,"/",to);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.count(s);
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(to_SINGLEQUOTE_ - to))){
var G__72324 = ss;
var G__72325 = from;
var G__72326 = (to + (1));
ss = G__72324;
from = G__72325;
to = G__72326;
continue;
} else {
var G__72327 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_wild(to,to_SINGLEQUOTE_)], 0));
var G__72328 = cljs.core.long$(to_SINGLEQUOTE_);
var G__72329 = cljs.core.long$(to_SINGLEQUOTE_);
ss = G__72327;
from = G__72328;
to = G__72329;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = colon_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",c);
} else {
return and__4221__auto__;
}
})())){
var to_SINGLEQUOTE_ = cljs.core.count(s);
var G__72330 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_catch_all(to,to_SINGLEQUOTE_)], 0));
var G__72331 = cljs.core.long$(to_SINGLEQUOTE_);
var G__72332 = cljs.core.long$(to_SINGLEQUOTE_);
ss = G__72330;
from = G__72331;
to = G__72332;
continue;
} else {
var G__72333 = ss;
var G__72334 = from;
var G__72335 = (to + (1));
ss = G__72333;
from = G__72334;
to = G__72335;
continue;

}
}
}
}
break;
}
});
reitit.trie.join_path = (function reitit$trie$join_path(xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),((typeof x === 'string')?x:(((x instanceof reitit.trie.Wild))?["{",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.value),(1)),"}"].join(''):(((x instanceof reitit.trie.CatchAll))?["{*",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.value),(1)),"}"].join(''):null)))].join('');
}),"",xs);
});
reitit.trie.normalize = (function reitit$trie$normalize(s,opts){
return reitit.trie.join_path(reitit.trie.split_path(s,opts));
});
reitit.trie._slice_start = (function reitit$trie$_slice_start(p__72053,p__72054){
var vec__72055 = p__72053;
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72055,(0),null);
var p1s = vec__72055;
var vec__72058 = p__72054;
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72058,(0),null);
var p2s = vec__72058;
var _split = (function (p){
var temp__5751__auto__ = (function (){var and__4221__auto__ = p;
if(cljs.core.truth_(and__4221__auto__)){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(p,"/");
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var i = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,i)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null);
}
});
var _slash = (function (cp,p){
if((!(typeof cp === 'string'))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cp], null);
} else {
if(((typeof cp === 'string') && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cp),cljs.core.count(p))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,cljs.core.count(cp))], null);
} else {
if(((typeof p === 'string') && (cljs.core.not(cp)))){
return _split(p);
} else {
return null;
}
}
}
});
var _postcut = (function (p__72061){
var vec__72062 = p__72061;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72062,(0),null);
var pps = vec__72062;
var i = (function (){var and__4221__auto__ = p;
if(cljs.core.truth_(and__4221__auto__)){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(p,"/");
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4221__auto__ = i;
if(cljs.core.truth_(and__4221__auto__)){
return (i > (0));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,i)], null),cljs.core.rest(pps));
} else {
return pps;
}
});
var _tailcut = (function (cp,p__72065){
var vec__72066 = p__72065;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72066,(0),null);
var ps = vec__72066;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(_slash(cp,p),cljs.core.rest(ps));
});
if((((p1 == null)) || ((p2 == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_postcut(p1s),_postcut(p2s)], null);
} else {
var temp__5751__auto__ = (function (){var and__4221__auto__ = typeof p1 === 'string';
if(and__4221__auto__){
var and__4221__auto____$1 = typeof p2 === 'string';
if(and__4221__auto____$1){
return reitit.trie.common_prefix(p1,p2);
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var cp = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_tailcut(cp,p1s),_tailcut(cp,p2s)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1s,p2s], null);
}
}
});
reitit.trie._slice_end = (function reitit$trie$_slice_end(x,xs){
var i = ((typeof x === 'string')?clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(x,"/"):null);
if(((typeof i === 'number') && ((i > (0))))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(x,i)], null),xs);
} else {
return xs;
}
});
reitit.trie.conflicting_parts_QMARK_ = (function reitit$trie$conflicting_parts_QMARK_(parts1,parts2){
while(true){
var vec__72069 = reitit.trie._slice_start(parts1,parts2);
var vec__72072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72069,(0),null);
var seq__72073 = cljs.core.seq(vec__72072);
var first__72074 = cljs.core.first(seq__72073);
var seq__72073__$1 = cljs.core.next(seq__72073);
var s1 = first__72074;
var ss1 = seq__72073__$1;
var vec__72075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72069,(1),null);
var seq__72076 = cljs.core.seq(vec__72075);
var first__72077 = cljs.core.first(seq__72076);
var seq__72076__$1 = cljs.core.next(seq__72076);
var s2 = first__72077;
var ss2 = seq__72076__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(s1,s2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0))){
return true;
} else {
if((((s1 == null)) || ((s2 == null)))){
return false;
} else {
if(((reitit.trie.catch_all_QMARK_(s1)) || (reitit.trie.catch_all_QMARK_(s2)))){
return true;
} else {
if(((reitit.trie.wild_QMARK_(s1)) || (reitit.trie.wild_QMARK_(s2)))){
var G__72340 = reitit.trie._slice_end(s1,ss1);
var G__72341 = reitit.trie._slice_end(s2,ss2);
parts1 = G__72340;
parts2 = G__72341;
continue;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s1,s2)){
return false;
} else {
var G__72342 = ss1;
var G__72343 = ss2;
parts1 = G__72342;
parts2 = G__72343;
continue;

}
}
}
}
}
break;
}
});
reitit.trie.conflicting_paths_QMARK_ = (function reitit$trie$conflicting_paths_QMARK_(path1,path2,opts){
return reitit.trie.conflicting_parts_QMARK_(reitit.trie.split_path(path1,opts),reitit.trie.split_path(path2,opts));
});
reitit.trie._node = (function reitit$trie$_node(m){
return reitit.trie.map__GT_Node(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"wilds","wilds",132271223),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY], null),m], 0)));
});
reitit.trie._insert = (function reitit$trie$_insert(node,p__72080,fp,params,data){
var vec__72081 = p__72080;
var seq__72082 = cljs.core.seq(vec__72081);
var first__72083 = cljs.core.first(seq__72082);
var seq__72082__$1 = cljs.core.next(seq__72082);
var path = first__72083;
var ps = seq__72082__$1;
var node_SINGLEQUOTE_ = (((path == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(node,new cljs.core.Keyword(null,"data","data",-232669377),data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235),params], 0)):(((path instanceof reitit.trie.Wild))?(function (){var next = cljs.core.first(ps);
if((((next instanceof reitit.trie.Wild)) || ((next instanceof reitit.trie.CatchAll)))){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","following-parameters","reitit.trie/following-parameters",-1072685800),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),fp,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,next], null))], null));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wilds","wilds",132271223),path], null),(function (n){
var G__72084 = (function (){var or__4223__auto__ = n;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
}
})();
var G__72085 = ps;
var G__72086 = fp;
var G__72087 = params;
var G__72088 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__72084,G__72085,G__72086,G__72087,G__72088) : reitit.trie._insert.call(null,G__72084,G__72085,G__72086,G__72087,G__72088));
}));
}
})():(((path instanceof reitit.trie.CatchAll))?cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),path], null),reitit.trie._node(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"data","data",-232669377),data], null))):((cljs.core.empty_QMARK_(path))?(reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(node,ps,fp,params,data) : reitit.trie._insert.call(null,node,ps,fp,params,data)):(function (){var or__4223__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,p__72089){
var vec__72090 = p__72089;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72090,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72090,(1),null);
var temp__5751__auto__ = reitit.trie.common_prefix(p,path);
if(cljs.core.truth_(temp__5751__auto__)){
var cp = temp__5751__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cp,p)){
var n_SINGLEQUOTE_ = (function (){var G__72093 = n;
var G__72094 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ps,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,cljs.core.count(p)));
var G__72095 = fp;
var G__72096 = params;
var G__72097 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__72093,G__72094,G__72095,G__72096,G__72097) : reitit.trie._insert.call(null,G__72093,G__72094,G__72095,G__72096,G__72097));
})();
return cljs.core.reduced(cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),p], null),n_SINGLEQUOTE_));
} else {
var rp = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,((cp).length));
var rp_SINGLEQUOTE_ = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,((cp).length));
var n_SINGLEQUOTE_ = (function (){var G__72098 = reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
var G__72099 = ps;
var G__72100 = fp;
var G__72101 = params;
var G__72102 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__72098,G__72099,G__72100,G__72101,G__72102) : reitit.trie._insert.call(null,G__72098,G__72099,G__72100,G__72101,G__72102));
})();
var n_SINGLEQUOTE__SINGLEQUOTE_ = (function (){var G__72103 = reitit.trie._node(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.createAsIfByAssoc([rp,n,rp_SINGLEQUOTE_,n_SINGLEQUOTE_])], null));
var G__72104 = null;
var G__72105 = null;
var G__72106 = null;
var G__72107 = null;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__72103,G__72104,G__72105,G__72106,G__72107) : reitit.trie._insert.call(null,G__72103,G__72104,G__72105,G__72106,G__72107));
})();
return cljs.core.reduced(cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"children","children",-940561982),(function (children){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(children,p),cp,n_SINGLEQUOTE__SINGLEQUOTE_);
})));
}
} else {
return null;
}
}),null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),path], null),(function (){var G__72108 = reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
var G__72109 = ps;
var G__72110 = fp;
var G__72111 = params;
var G__72112 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__72108,G__72109,G__72110,G__72111,G__72112) : reitit.trie._insert.call(null,G__72108,G__72109,G__72110,G__72111,G__72112));
})());
}
})()
))));
var temp__5751__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),""], null));
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(node_SINGLEQUOTE_,new cljs.core.Keyword(null,"data","data",-232669377)),child], 0)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.dissoc,"");
} else {
return node_SINGLEQUOTE_;
}
});
reitit.trie.decode = (function reitit$trie$decode(path,start,end,percent_QMARK_){
var param = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(path,start,end);
if(cljs.core.truth_(percent_QMARK_)){
return decodeURIComponent(param);
} else {
return param;
}
});
reitit.trie.clojure_trie_compiler = (function reitit$trie$clojure_trie_compiler(){
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie72113 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.TrieCompiler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie72113 = (function (meta72114){
this.meta72114 = meta72114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie72113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72115,meta72114__$1){
var self__ = this;
var _72115__$1 = this;
return (new reitit.trie.t_reitit$trie72113(meta72114__$1));
}));

(reitit.trie.t_reitit$trie72113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72115){
var self__ = this;
var _72115__$1 = this;
return self__.meta72114;
}));

(reitit.trie.t_reitit$trie72113.prototype.reitit$trie$TrieCompiler$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie72113.prototype.reitit$trie$TrieCompiler$data_matcher$arity$3 = (function (_,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match(params,data);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie72116 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie72116 = (function (meta72114,_,params,data,match,meta72117){
this.meta72114 = meta72114;
this._ = _;
this.params = params;
this.data = data;
this.match = match;
this.meta72117 = meta72117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie72116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72118,meta72117__$1){
var self__ = this;
var _72118__$1 = this;
return (new reitit.trie.t_reitit$trie72116(self__.meta72114,self__._,self__.params,self__.data,self__.match,meta72117__$1));
}));

(reitit.trie.t_reitit$trie72116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72118){
var self__ = this;
var _72118__$1 = this;
return self__.meta72117;
}));

(reitit.trie.t_reitit$trie72116.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie72116.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,max)){
return self__.match;
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie72116.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.data;
}));

(reitit.trie.t_reitit$trie72116.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
}));

(reitit.trie.t_reitit$trie72116.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie72116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta72114","meta72114",586378369,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie72113","reitit.trie/t_reitit$trie72113",-42444238,null)], null)),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"meta72117","meta72117",876730528,null)], null);
}));

(reitit.trie.t_reitit$trie72116.cljs$lang$type = true);

(reitit.trie.t_reitit$trie72116.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie72116");

(reitit.trie.t_reitit$trie72116.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"reitit.trie/t_reitit$trie72116");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie72116.
 */
reitit.trie.__GT_t_reitit$trie72116 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie72116(meta72114__$1,___$2,params__$1,data__$1,match__$1,meta72117){
return (new reitit.trie.t_reitit$trie72116(meta72114__$1,___$2,params__$1,data__$1,match__$1,meta72117));
});

}

return (new reitit.trie.t_reitit$trie72116(self__.meta72114,___$1,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie72113.prototype.reitit$trie$TrieCompiler$static_matcher$arity$3 = (function (_,path,matcher){
var self__ = this;
var ___$1 = this;
var size = cljs.core.count(path);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie72125 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie72125 = (function (meta72114,_,path,matcher,size,meta72126){
this.meta72114 = meta72114;
this._ = _;
this.path = path;
this.matcher = matcher;
this.size = size;
this.meta72126 = meta72126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie72125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72127,meta72126__$1){
var self__ = this;
var _72127__$1 = this;
return (new reitit.trie.t_reitit$trie72125(self__.meta72114,self__._,self__.path,self__.matcher,self__.size,meta72126__$1));
}));

(reitit.trie.t_reitit$trie72125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72127){
var self__ = this;
var _72127__$1 = this;
return self__.meta72126;
}));

(reitit.trie.t_reitit$trie72125.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie72125.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,p){
var self__ = this;
var ___$2 = this;
if((!((max < (i + self__.size))))){
var j = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,self__.size)){
return reitit.trie.match(self__.matcher,(i + self__.size),max,p);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,(i + j)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.path,j))){
var G__72356 = (j + (1));
j = G__72356;
continue;
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie72125.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.path,reitit.trie.view(self__.matcher)], null);
}));

(reitit.trie.t_reitit$trie72125.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth(self__.matcher) + (1));
}));

(reitit.trie.t_reitit$trie72125.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.count(self__.path);
}));

(reitit.trie.t_reitit$trie72125.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta72114","meta72114",586378369,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie72113","reitit.trie/t_reitit$trie72113",-42444238,null)], null)),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"meta72126","meta72126",-368577445,null)], null);
}));

(reitit.trie.t_reitit$trie72125.cljs$lang$type = true);

(reitit.trie.t_reitit$trie72125.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie72125");

(reitit.trie.t_reitit$trie72125.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"reitit.trie/t_reitit$trie72125");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie72125.
 */
reitit.trie.__GT_t_reitit$trie72125 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie72125(meta72114__$1,___$2,path__$1,matcher__$1,size__$1,meta72126){
return (new reitit.trie.t_reitit$trie72125(meta72114__$1,___$2,path__$1,matcher__$1,size__$1,meta72126));
});

}

return (new reitit.trie.t_reitit$trie72125(self__.meta72114,___$1,path,matcher,size,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie72113.prototype.reitit$trie$TrieCompiler$wild_matcher$arity$4 = (function (_,key,end,matcher){
var self__ = this;
var ___$1 = this;
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie72135 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie72135 = (function (meta72114,_,key,end,matcher,meta72136){
this.meta72114 = meta72114;
this._ = _;
this.key = key;
this.end = end;
this.matcher = matcher;
this.meta72136 = meta72136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie72135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72137,meta72136__$1){
var self__ = this;
var _72137__$1 = this;
return (new reitit.trie.t_reitit$trie72135(self__.meta72114,self__._,self__.key,self__.end,self__.matcher,meta72136__$1));
}));

(reitit.trie.t_reitit$trie72135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72137){
var self__ = this;
var _72137__$1 = this;
return self__.meta72136;
}));

(reitit.trie.t_reitit$trie72135.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie72135.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((((i < max)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(path,i),self__.end)))){
var percent_QMARK_ = false;
var j = i;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max,j)){
var temp__5751__auto__ = reitit.trie.match(self__.matcher,max,max,path);
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
return reitit.trie.assoc_param(match,self__.key,reitit.trie.decode(path,i,max,percent_QMARK_));
} else {
return null;
}
} else {
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(path,j);
var pred__72146 = cljs.core._EQ_;
var expr__72147 = c;
if(cljs.core.truth_((pred__72146.cljs$core$IFn$_invoke$arity$2 ? pred__72146.cljs$core$IFn$_invoke$arity$2(self__.end,expr__72147) : pred__72146.call(null,self__.end,expr__72147)))){
var temp__5751__auto__ = reitit.trie.match(self__.matcher,j,max,path);
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
return reitit.trie.assoc_param(match,self__.key,reitit.trie.decode(path,i,j,percent_QMARK_));
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var G__72149 = "%";
var G__72150 = expr__72147;
return (pred__72146.cljs$core$IFn$_invoke$arity$2 ? pred__72146.cljs$core$IFn$_invoke$arity$2(G__72149,G__72150) : pred__72146.call(null,G__72149,G__72150));
})())){
var G__72358 = true;
var G__72359 = (j + (1));
percent_QMARK_ = G__72358;
j = G__72359;
continue;
} else {
var G__72360 = percent_QMARK_;
var G__72361 = (j + (1));
percent_QMARK_ = G__72360;
j = G__72361;
continue;
}
}
}
break;
}
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie72135.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,reitit.trie.view(self__.matcher)], null);
}));

(reitit.trie.t_reitit$trie72135.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth(self__.matcher) + (1));
}));

(reitit.trie.t_reitit$trie72135.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie72135.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta72114","meta72114",586378369,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie72113","reitit.trie/t_reitit$trie72113",-42444238,null)], null)),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"meta72136","meta72136",1864991604,null)], null);
}));

(reitit.trie.t_reitit$trie72135.cljs$lang$type = true);

(reitit.trie.t_reitit$trie72135.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie72135");

(reitit.trie.t_reitit$trie72135.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"reitit.trie/t_reitit$trie72135");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie72135.
 */
reitit.trie.__GT_t_reitit$trie72135 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie72135(meta72114__$1,___$2,key__$1,end__$1,matcher__$1,meta72136){
return (new reitit.trie.t_reitit$trie72135(meta72114__$1,___$2,key__$1,end__$1,matcher__$1,meta72136));
});

}

return (new reitit.trie.t_reitit$trie72135(self__.meta72114,___$1,key,end,matcher,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie72113.prototype.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 = (function (_,key,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match(params,data);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie72151 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie72151 = (function (meta72114,_,key,params,data,match,meta72152){
this.meta72114 = meta72114;
this._ = _;
this.key = key;
this.params = params;
this.data = data;
this.match = match;
this.meta72152 = meta72152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie72151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72153,meta72152__$1){
var self__ = this;
var _72153__$1 = this;
return (new reitit.trie.t_reitit$trie72151(self__.meta72114,self__._,self__.key,self__.params,self__.data,self__.match,meta72152__$1));
}));

(reitit.trie.t_reitit$trie72151.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72153){
var self__ = this;
var _72153__$1 = this;
return self__.meta72152;
}));

(reitit.trie.t_reitit$trie72151.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie72151.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((i <= max)){
return reitit.trie.assoc_param(self__.match,self__.key,reitit.trie.decode(path,i,max,true));
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie72151.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.data], null)], null);
}));

(reitit.trie.t_reitit$trie72151.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
}));

(reitit.trie.t_reitit$trie72151.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie72151.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta72114","meta72114",586378369,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie72113","reitit.trie/t_reitit$trie72113",-42444238,null)], null)),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"meta72152","meta72152",-490246613,null)], null);
}));

(reitit.trie.t_reitit$trie72151.cljs$lang$type = true);

(reitit.trie.t_reitit$trie72151.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie72151");

(reitit.trie.t_reitit$trie72151.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"reitit.trie/t_reitit$trie72151");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie72151.
 */
reitit.trie.__GT_t_reitit$trie72151 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie72151(meta72114__$1,___$2,key__$1,params__$1,data__$1,match__$1,meta72152){
return (new reitit.trie.t_reitit$trie72151(meta72114__$1,___$2,key__$1,params__$1,data__$1,match__$1,meta72152));
});

}

return (new reitit.trie.t_reitit$trie72151(self__.meta72114,___$1,key,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie72113.prototype.reitit$trie$TrieCompiler$linear_matcher$arity$3 = (function (_,matchers,ordered_QMARK_){
var self__ = this;
var ___$1 = this;
var matchers__$1 = cljs.core.vec((cljs.core.truth_(ordered_QMARK_)?matchers:cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(reitit.trie.depth,reitit.trie.length),matchers))));
var size = cljs.core.count(matchers__$1);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie72154 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie72154 = (function (meta72114,_,matchers,ordered_QMARK_,size,meta72155){
this.meta72114 = meta72114;
this._ = _;
this.matchers = matchers;
this.ordered_QMARK_ = ordered_QMARK_;
this.size = size;
this.meta72155 = meta72155;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie72154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72156,meta72155__$1){
var self__ = this;
var _72156__$1 = this;
return (new reitit.trie.t_reitit$trie72154(self__.meta72114,self__._,self__.matchers,self__.ordered_QMARK_,self__.size,meta72155__$1));
}));

(reitit.trie.t_reitit$trie72154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72156){
var self__ = this;
var _72156__$1 = this;
return self__.meta72155;
}));

(reitit.trie.t_reitit$trie72154.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie72154.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
var j = (0);
while(true){
if((j < self__.size)){
var or__4223__auto__ = reitit.trie.match(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.matchers,j),i,max,path);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var G__72363 = (j + (1));
j = G__72363;
continue;
}
} else {
return null;
}
break;
}
}));

(reitit.trie.t_reitit$trie72154.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(reitit.trie.view,self__.matchers);
}));

(reitit.trie.t_reitit$trie72154.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reitit.trie.depth,self__.matchers)) + (1));
}));

(reitit.trie.t_reitit$trie72154.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie72154.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta72114","meta72114",586378369,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie72113","reitit.trie/t_reitit$trie72113",-42444238,null)], null)),new cljs.core.Symbol(null,"matchers","matchers",-39860883,null),new cljs.core.Symbol(null,"ordered?","ordered?",-1842273081,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"meta72155","meta72155",-814463082,null)], null);
}));

(reitit.trie.t_reitit$trie72154.cljs$lang$type = true);

(reitit.trie.t_reitit$trie72154.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie72154");

(reitit.trie.t_reitit$trie72154.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"reitit.trie/t_reitit$trie72154");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie72154.
 */
reitit.trie.__GT_t_reitit$trie72154 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie72154(meta72114__$1,___$2,matchers__$2,ordered_QMARK___$1,size__$1,meta72155){
return (new reitit.trie.t_reitit$trie72154(meta72114__$1,___$2,matchers__$2,ordered_QMARK___$1,size__$1,meta72155));
});

}

return (new reitit.trie.t_reitit$trie72154(self__.meta72114,___$1,matchers__$1,ordered_QMARK_,size,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie72113.prototype.reitit$trie$TrieCompiler$_pretty$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return reitit.trie.view(matcher);
}));

(reitit.trie.t_reitit$trie72113.prototype.reitit$trie$TrieCompiler$_path_matcher$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return (function (path){
var temp__5751__auto__ = reitit.trie.match(matcher,(0),cljs.core.count(path),path);
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
return reitit.trie.__GT_Match(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
} else {
return null;
}
});
}));

(reitit.trie.t_reitit$trie72113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta72114","meta72114",586378369,null)], null);
}));

(reitit.trie.t_reitit$trie72113.cljs$lang$type = true);

(reitit.trie.t_reitit$trie72113.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie72113");

(reitit.trie.t_reitit$trie72113.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"reitit.trie/t_reitit$trie72113");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie72113.
 */
reitit.trie.__GT_t_reitit$trie72113 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie72113(meta72114){
return (new reitit.trie.t_reitit$trie72113(meta72114));
});

}

return (new reitit.trie.t_reitit$trie72113(cljs.core.PersistentArrayMap.EMPTY));
});
reitit.trie.map_parameters = (function reitit$trie$map_parameters(keys){
return cljs.core.zipmap(keys,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));
});
/**
 * Returns a trie with routes added to it.
 */
reitit.trie.insert = (function reitit$trie$insert(var_args){
var G__72158 = arguments.length;
switch (G__72158) {
case 1:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$1 = (function (routes){
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$2(null,routes);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$2 = (function (node,routes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__72159){
var vec__72160 = p__72159;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72160,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72160,(1),null);
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$3(acc,p,d);
}),node,routes);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$3 = (function (node,path,data){
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(node,path,data,null);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$4 = (function (node,path,data,p__72163){
var map__72164 = p__72163;
var map__72164__$1 = cljs.core.__destructure_map(map__72164);
var opts = map__72164__$1;
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72164__$1,new cljs.core.Keyword("reitit.trie","parameters","reitit.trie/parameters",-1304786787),reitit.trie.map_parameters);
var parts = reitit.trie.split_path(path,opts);
var params = (function (){var G__72165 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,parts));
return (parameters.cljs$core$IFn$_invoke$arity$1 ? parameters.cljs$core$IFn$_invoke$arity$1(G__72165) : parameters.call(null,G__72165));
})();
return reitit.trie._insert((function (){var or__4223__auto__ = node;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
}
})(),reitit.trie.split_path(path,opts),path,params,data);
}));

(reitit.trie.insert.cljs$lang$maxFixedArity = 4);

/**
 * Returns a default [[TrieCompiler]].
 */
reitit.trie.compiler = (function reitit$trie$compiler(){
return reitit.trie.clojure_trie_compiler();
});
/**
 * Returns a compiled trie, to be used with [[pretty]] or [[path-matcher]].
 */
reitit.trie.compile = (function reitit$trie$compile(var_args){
var G__72167 = arguments.length;
switch (G__72167) {
case 1:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$1 = (function (options){
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$2(options,reitit.trie.compiler());
}));

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$2 = (function (options,compiler){
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(options,compiler,cljs.core.PersistentVector.EMPTY);
}));

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$3 = (function (p__72169,compiler,cp){
var map__72170 = p__72169;
var map__72170__$1 = cljs.core.__destructure_map(map__72170);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72170__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72170__$1,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72170__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var wilds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72170__$1,new cljs.core.Keyword(null,"wilds","wilds",132271223));
var catch_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72170__$1,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570));
var ends = (function (p__72171){
var map__72172 = p__72171;
var map__72172__$1 = cljs.core.__destructure_map(map__72172);
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72172__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var or__4223__auto__ = cljs.core.keys(children__$1);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/"], null);
}
});
var matchers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__72173 = cljs.core.PersistentVector.EMPTY;
if(cljs.core.truth_(data)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__72173,reitit.trie.data_matcher(compiler,params,data));
} else {
return G__72173;
}
})(),(function (){var iter__4622__auto__ = (function reitit$trie$iter__72175(s__72176){
return (new cljs.core.LazySeq(null,(function (){
var s__72176__$1 = s__72176;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__72176__$1);
if(temp__5753__auto__){
var s__72176__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72176__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__72176__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__72178 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__72177 = (0);
while(true){
if((i__72177 < size__4621__auto__)){
var vec__72180 = cljs.core._nth(c__4620__auto__,i__72177);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72180,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72180,(1),null);
cljs.core.chunk_append(b__72178,reitit.trie.static_matcher(compiler,p,reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))));

var G__72366 = (i__72177 + (1));
i__72177 = G__72366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72178),reitit$trie$iter__72175(cljs.core.chunk_rest(s__72176__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72178),null);
}
} else {
var vec__72187 = cljs.core.first(s__72176__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72187,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72187,(1),null);
return cljs.core.cons(reitit.trie.static_matcher(compiler,p,reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))),reitit$trie$iter__72175(cljs.core.rest(s__72176__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(children);
})()),(function (){var iter__4622__auto__ = (function reitit$trie$iter__72190(s__72191){
return (new cljs.core.LazySeq(null,(function (){
var s__72191__$1 = s__72191;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__72191__$1);
if(temp__5753__auto__){
var s__72191__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72191__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__72191__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__72193 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__72192 = (0);
while(true){
if((i__72192 < size__4621__auto__)){
var vec__72194 = cljs.core._nth(c__4620__auto__,i__72192);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72194,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72194,(1),null);
cljs.core.chunk_append(b__72193,(function (){var pv = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends(c);
if(cljs.core.next(ends__$1)){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","multiple-terminators","reitit.trie/multiple-terminators",-116295163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terminators","terminators",-1448255712),ends__$1,new cljs.core.Keyword(null,"path","path",-188191168),reitit.trie.join_path(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))], null));
} else {
return reitit.trie.wild_matcher(compiler,pv,cljs.core.ffirst(ends__$1),reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,pv)));
}
})());

var G__72367 = (i__72192 + (1));
i__72192 = G__72367;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72193),reitit$trie$iter__72190(cljs.core.chunk_rest(s__72191__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72193),null);
}
} else {
var vec__72199 = cljs.core.first(s__72191__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72199,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72199,(1),null);
return cljs.core.cons((function (){var pv = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends(c);
if(cljs.core.next(ends__$1)){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","multiple-terminators","reitit.trie/multiple-terminators",-116295163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terminators","terminators",-1448255712),ends__$1,new cljs.core.Keyword(null,"path","path",-188191168),reitit.trie.join_path(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))], null));
} else {
return reitit.trie.wild_matcher(compiler,pv,cljs.core.ffirst(ends__$1),reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,pv)));
}
})(),reitit$trie$iter__72190(cljs.core.rest(s__72191__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(wilds);
})()),(function (){var iter__4622__auto__ = (function reitit$trie$iter__72202(s__72203){
return (new cljs.core.LazySeq(null,(function (){
var s__72203__$1 = s__72203;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__72203__$1);
if(temp__5753__auto__){
var s__72203__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72203__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__72203__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__72205 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__72204 = (0);
while(true){
if((i__72204 < size__4621__auto__)){
var vec__72208 = cljs.core._nth(c__4620__auto__,i__72204);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72208,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72208,(1),null);
cljs.core.chunk_append(b__72205,reitit.trie.catch_all_matcher(compiler,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p),params,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(c)));

var G__72368 = (i__72204 + (1));
i__72204 = G__72368;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72205),reitit$trie$iter__72202(cljs.core.chunk_rest(s__72203__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72205),null);
}
} else {
var vec__72211 = cljs.core.first(s__72203__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72211,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72211,(1),null);
return cljs.core.cons(reitit.trie.catch_all_matcher(compiler,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p),params,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(c)),reitit$trie$iter__72202(cljs.core.rest(s__72203__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(catch_all);
})());
if((cljs.core.count(matchers) > (1))){
return reitit.trie.linear_matcher(compiler,matchers,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(matchers),(1))){
return cljs.core.first(matchers);
} else {
return reitit.trie.data_matcher(compiler,cljs.core.PersistentArrayMap.EMPTY,null);

}
}
}));

(reitit.trie.compile.cljs$lang$maxFixedArity = 3);

/**
 * Returns a simplified EDN structure of a compiled trie for printing purposes.
 */
reitit.trie.pretty = (function reitit$trie$pretty(var_args){
var G__72216 = arguments.length;
switch (G__72216) {
case 1:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2(compiled_trie,reitit.trie.compiler());
}));

(reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._pretty(compiler,compiled_trie);
}));

(reitit.trie.pretty.cljs$lang$maxFixedArity = 2);

/**
 * Returns a function of `path -> Match` from a compiled trie.
 */
reitit.trie.path_matcher = (function reitit$trie$path_matcher(var_args){
var G__72218 = arguments.length;
switch (G__72218) {
case 1:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(compiled_trie,reitit.trie.compiler());
}));

(reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._path_matcher(compiler,compiled_trie);
}));

(reitit.trie.path_matcher.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=reitit.trie.js.map
