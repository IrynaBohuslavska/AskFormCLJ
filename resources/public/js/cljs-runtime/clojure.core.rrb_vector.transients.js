goog.provide('clojure.core.rrb_vector.transients');
clojure.core.rrb_vector.transients.ensure_editable = (function clojure$core$rrb_vector$transients$ensure_editable(edit,node){
if((node.edit === edit)){
return node;
} else {
var new_arr = cljs.core.aclone(node.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(edit,new_arr));
}
});
clojure.core.rrb_vector.transients.editable_root = (function clojure$core$rrb_vector$transients$editable_root(root){
return (new cljs.core.VectorNode(({}),cljs.core.aclone(root.arr)));
});
clojure.core.rrb_vector.transients.editable_tail = (function clojure$core$rrb_vector$transients$editable_tail(tail){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tail,(0),ret,(0),tail.length);

return ret;
});
clojure.core.rrb_vector.transients.push_tail_BANG_ = (function clojure$core$rrb_vector$transients$push_tail_BANG_(shift,cnt,root_edit,current_node,tail_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var n_63725 = ret;
var shift_63726__$1 = shift;
while(true){
var arr_63727 = n_63725.arr;
var subidx_63728 = (((cnt - (1)) >> shift_63726__$1) & (31));
if((shift_63726__$1 === (5))){
(arr_63727[subidx_63728] = tail_node);
} else {
var child_63729 = (arr_63727[subidx_63728]);
if((child_63729 == null)){
(arr_63727[subidx_63728] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_63726__$1 - (5)),tail_node));
} else {
var editable_child_63730 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_63729);
(arr_63727[subidx_63728] = editable_child_63730);

var G__63731 = editable_child_63730;
var G__63732 = (shift_63726__$1 - (5));
n_63725 = G__63731;
shift_63726__$1 = G__63732;
continue;
}
}
break;
}

return ret;
} else {
var arr = ret.arr;
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var li = ((rngs[(32)]) - (1));
var cret = (((shift === (5)))?null:(function (){var child = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr[li]));
var ccnt = (((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)]));
if((!((ccnt === ((1) << shift))))){
var G__63707 = (shift - (5));
var G__63708 = (ccnt + (1));
var G__63709 = root_edit;
var G__63710 = child;
var G__63711 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__63707,G__63708,G__63709,G__63710,G__63711) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__63707,G__63708,G__63709,G__63710,G__63711));
} else {
return null;
}
})());
if(cljs.core.truth_(cret)){
(arr[li] = cret);

(rngs[li] = ((rngs[li]) + (32)));

return ret;
} else {
(arr[(li + (1))] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift - (5)),tail_node));

(rngs[(li + (1))] = ((rngs[li]) + (32)));

(rngs[(32)] = ((rngs[(32)]) + (1)));

return ret;
}
}
});
clojure.core.rrb_vector.transients.pop_tail_BANG_ = (function clojure$core$rrb_vector$transients$pop_tail_BANG_(shift,cnt,root_edit,current_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var subidx = (((cnt - (1)) >> shift) & (31));
if((shift > (5))){
var child = (function (){var G__63712 = (shift - (5));
var G__63713 = cnt;
var G__63714 = root_edit;
var G__63715 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__63712,G__63713,G__63714,G__63715) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__63712,G__63713,G__63714,G__63715));
})();
if((((child == null)) && ((subidx === (0))))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = null);

return ret;

}
}
} else {
var subidx = (((cnt - (1)) >> shift) & (31));
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx__$1 = (function (){var subidx__$1 = subidx;
while(true){
if((((((rngs[(subidx__$1 + (1))]) | (0)) === (0))) || ((subidx__$1 === (31))))){
return subidx__$1;
} else {
var G__63733 = (subidx__$1 + (1));
subidx__$1 = G__63733;
continue;
}
break;
}
})();
if((shift > (5))){
var child = (ret.arr[subidx__$1]);
var child_cnt = (((subidx__$1 === (0)))?(rngs[(0)]):((rngs[subidx__$1]) - (rngs[(subidx__$1 - (1))])));
var new_child = (function (){var G__63716 = (shift - (5));
var G__63717 = child_cnt;
var G__63718 = root_edit;
var G__63719 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__63716,G__63717,G__63718,G__63719) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__63716,G__63717,G__63718,G__63719));
})();
if((((new_child == null)) && ((subidx__$1 === (0))))){
return null;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(child)){
var arr = ret.arr;
(rngs[subidx__$1] = ((rngs[subidx__$1]) - (32)));

(arr[subidx__$1] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;
} else {
var rng = clojure.core.rrb_vector.nodes.last_range(child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range(new_child):(0)));
var arr = ret.arr;
(rngs[subidx__$1] = ((rngs[subidx__$1]) - diff));

(arr[subidx__$1] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;

}
}
} else {
if((subidx__$1 === (0))){
return null;
} else {
var arr = ret.arr;
var child = (arr[subidx__$1]);
(arr[subidx__$1] = null);

(rngs[subidx__$1] = (0));

(rngs[(32)] = ((rngs[(32)]) - (1)));

return ret;

}
}
}
});
clojure.core.rrb_vector.transients.do_assoc_BANG_ = (function clojure$core$rrb_vector$transients$do_assoc_BANG_(shift,root_edit,current_node,i,val){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var shift_63734__$1 = shift;
var node_63735 = ret;
while(true){
if((shift_63734__$1 === (0))){
var arr_63736 = node_63735.arr;
(arr_63736[(i & (31))] = val);
} else {
var arr_63737 = node_63735.arr;
var subidx_63738 = ((i >> shift_63734__$1) & (31));
var child_63739 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_63737[subidx_63738]));
(arr_63737[subidx_63738] = child_63739);

var G__63744 = (shift_63734__$1 - (5));
var G__63745 = child_63739;
shift_63734__$1 = G__63744;
node_63735 = G__63745;
continue;
}
break;
}
} else {
var arr_63746 = ret.arr;
var rngs_63747 = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx_63748 = ((i >> shift) & (31));
var subidx_63749__$1 = (function (){var subidx_63749__$1 = subidx_63748;
while(true){
if((i < ((rngs_63747[subidx_63749__$1]) | (0)))){
return subidx_63749__$1;
} else {
var G__63751 = (subidx_63749__$1 + (1));
subidx_63749__$1 = G__63751;
continue;
}
break;
}
})();
var i_63750__$1 = (((subidx_63749__$1 === (0)))?i:(i - (rngs_63747[(subidx_63749__$1 - (1))])));
(arr_63746[subidx_63749__$1] = (function (){var G__63720 = (shift - (5));
var G__63721 = root_edit;
var G__63722 = (arr_63746[subidx_63749__$1]);
var G__63723 = i_63750__$1;
var G__63724 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__63720,G__63721,G__63722,G__63723,G__63724) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__63720,G__63721,G__63722,G__63723,G__63724));
})());
}

return ret;
});

//# sourceMappingURL=clojure.core.rrb_vector.transients.js.map
