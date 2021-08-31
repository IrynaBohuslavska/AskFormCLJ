["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/async/animationdelay.js"],"~:js","goog.provide(\"goog.async.AnimationDelay\");\ngoog.require(\"goog.Disposable\");\ngoog.require(\"goog.events\");\ngoog.require(\"goog.functions\");\ngoog.async.AnimationDelay = function(listener, opt_window, opt_handler) {\n  goog.async.AnimationDelay.base(this, \"constructor\");\n  this.id_ = null;\n  this.usingListeners_ = false;\n  this.listener_ = listener;\n  this.handler_ = opt_handler;\n  this.win_ = opt_window || window;\n  this.callback_ = goog.bind(this.doAction_, this);\n};\ngoog.inherits(goog.async.AnimationDelay, goog.Disposable);\ngoog.async.AnimationDelay.TIMEOUT = 20;\ngoog.async.AnimationDelay.MOZ_BEFORE_PAINT_EVENT_ = \"MozBeforePaint\";\ngoog.async.AnimationDelay.prototype.start = function() {\n  this.stop();\n  this.usingListeners_ = false;\n  var raf = this.getRaf_();\n  var cancelRaf = this.getCancelRaf_();\n  if (raf && !cancelRaf && this.win_.mozRequestAnimationFrame) {\n    this.id_ = goog.events.listen(this.win_, goog.async.AnimationDelay.MOZ_BEFORE_PAINT_EVENT_, this.callback_);\n    this.win_.mozRequestAnimationFrame(null);\n    this.usingListeners_ = true;\n  } else {\n    if (raf && cancelRaf) {\n      this.id_ = raf.call(this.win_, this.callback_);\n    } else {\n      this.id_ = this.win_.setTimeout(goog.functions.lock(this.callback_), goog.async.AnimationDelay.TIMEOUT);\n    }\n  }\n};\ngoog.async.AnimationDelay.prototype.startIfNotActive = function() {\n  if (!this.isActive()) {\n    this.start();\n  }\n};\ngoog.async.AnimationDelay.prototype.stop = function() {\n  if (this.isActive()) {\n    var raf = this.getRaf_();\n    var cancelRaf = this.getCancelRaf_();\n    if (raf && !cancelRaf && this.win_.mozRequestAnimationFrame) {\n      goog.events.unlistenByKey(this.id_);\n    } else {\n      if (raf && cancelRaf) {\n        cancelRaf.call(this.win_, this.id_);\n      } else {\n        this.win_.clearTimeout(this.id_);\n      }\n    }\n  }\n  this.id_ = null;\n};\ngoog.async.AnimationDelay.prototype.fire = function() {\n  this.stop();\n  this.doAction_();\n};\ngoog.async.AnimationDelay.prototype.fireIfActive = function() {\n  if (this.isActive()) {\n    this.fire();\n  }\n};\ngoog.async.AnimationDelay.prototype.isActive = function() {\n  return this.id_ != null;\n};\ngoog.async.AnimationDelay.prototype.doAction_ = function() {\n  if (this.usingListeners_ && this.id_) {\n    goog.events.unlistenByKey(this.id_);\n  }\n  this.id_ = null;\n  this.listener_.call(this.handler_, goog.now());\n};\ngoog.async.AnimationDelay.prototype.disposeInternal = function() {\n  this.stop();\n  goog.async.AnimationDelay.base(this, \"disposeInternal\");\n};\ngoog.async.AnimationDelay.prototype.getRaf_ = function() {\n  var win = this.win_;\n  return win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.oRequestAnimationFrame || win.msRequestAnimationFrame || null;\n};\ngoog.async.AnimationDelay.prototype.getCancelRaf_ = function() {\n  var win = this.win_;\n  return win.cancelAnimationFrame || win.cancelRequestAnimationFrame || win.webkitCancelRequestAnimationFrame || win.mozCancelRequestAnimationFrame || win.oCancelRequestAnimationFrame || win.msCancelRequestAnimationFrame || null;\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview A delayed callback that pegs to the next animation frame\n * instead of a user-configurable timeout.\n */\n\ngoog.provide('goog.async.AnimationDelay');\n\ngoog.require('goog.Disposable');\ngoog.require('goog.events');\ngoog.require('goog.functions');\n\n\n\n// TODO(nicksantos): Should we factor out the common code between this and\n// goog.async.Delay? I'm not sure if there's enough code for this to really\n// make sense. Subclassing seems like the wrong approach for a variety of\n// reasons. Maybe there should be a common interface?\n\n\n\n/**\n * A delayed callback that pegs to the next animation frame\n * instead of a user configurable timeout. By design, this should have\n * the same interface as goog.async.Delay.\n *\n * Uses requestAnimationFrame and friends when available, but falls\n * back to a timeout of goog.async.AnimationDelay.TIMEOUT.\n *\n * For more on requestAnimationFrame and how you can use it to create smoother\n * animations, see:\n * @see http://paulirish.com/2011/requestanimationframe-for-smart-animating/\n *\n * @param {function(this:THIS, number)} listener Function to call\n *     when the delay completes. Will be passed the timestamp when it's called,\n *     in unix ms.\n * @param {Window=} opt_window The window object to execute the delay in.\n *     Defaults to the global object.\n * @param {THIS=} opt_handler The object scope to invoke the function in.\n * @template THIS\n * @constructor\n * @struct\n * @extends {goog.Disposable}\n * @final\n */\ngoog.async.AnimationDelay = function(listener, opt_window, opt_handler) {\n  'use strict';\n  goog.async.AnimationDelay.base(this, 'constructor');\n\n  /**\n   * Identifier of the active delay timeout, or event listener,\n   * or null when inactive.\n   * @private {?goog.events.Key|number}\n   */\n  this.id_ = null;\n\n  /**\n   * If we're using dom listeners.\n   * @private {?boolean}\n   */\n  this.usingListeners_ = false;\n\n  /**\n   * The function that will be invoked after a delay.\n   * @const\n   * @private\n   */\n  this.listener_ = listener;\n\n  /**\n   * The object context to invoke the callback in.\n   * @const\n   * @private {(THIS|undefined)}\n   */\n  this.handler_ = opt_handler;\n\n  /**\n   * @private {Window}\n   */\n  this.win_ = opt_window || window;\n\n  /**\n   * Cached callback function invoked when the delay finishes.\n   * @private {function()}\n   */\n  this.callback_ = goog.bind(this.doAction_, this);\n};\ngoog.inherits(goog.async.AnimationDelay, goog.Disposable);\n\n\n/**\n * Default wait timeout for animations (in milliseconds).  Only used for timed\n * animation, which uses a timer (setTimeout) to schedule animation.\n *\n * @type {number}\n * @const\n */\ngoog.async.AnimationDelay.TIMEOUT = 20;\n\n\n/**\n * Name of event received from the requestAnimationFrame in Firefox.\n *\n * @type {string}\n * @const\n * @private\n */\ngoog.async.AnimationDelay.MOZ_BEFORE_PAINT_EVENT_ = 'MozBeforePaint';\n\n\n/**\n * Starts the delay timer. The provided listener function will be called\n * before the next animation frame.\n */\ngoog.async.AnimationDelay.prototype.start = function() {\n  'use strict';\n  this.stop();\n  this.usingListeners_ = false;\n\n  var raf = this.getRaf_();\n  var cancelRaf = this.getCancelRaf_();\n  if (raf && !cancelRaf && this.win_.mozRequestAnimationFrame) {\n    // Because Firefox (Gecko) runs animation in separate threads, it also saves\n    // time by running the requestAnimationFrame callbacks in that same thread.\n    // Sadly this breaks the assumption of implicit thread-safety in JS, and can\n    // thus create thread-based inconsistencies on counters etc.\n    //\n    // Calling cycleAnimations_ using the MozBeforePaint event instead of as\n    // callback fixes this.\n    //\n    // Trigger this condition only if the mozRequestAnimationFrame is available,\n    // but not the W3C requestAnimationFrame function (as in draft) or the\n    // equivalent cancel functions.\n    this.id_ = goog.events.listen(\n        this.win_, goog.async.AnimationDelay.MOZ_BEFORE_PAINT_EVENT_,\n        this.callback_);\n    this.win_.mozRequestAnimationFrame(null);\n    this.usingListeners_ = true;\n  } else if (raf && cancelRaf) {\n    this.id_ = raf.call(this.win_, this.callback_);\n  } else {\n    this.id_ = this.win_.setTimeout(\n        // Prior to Firefox 13, Gecko passed a non-standard parameter\n        // to the callback that we want to ignore.\n        goog.functions.lock(this.callback_), goog.async.AnimationDelay.TIMEOUT);\n  }\n};\n\n\n/**\n * Starts the delay timer if it's not already active.\n */\ngoog.async.AnimationDelay.prototype.startIfNotActive = function() {\n  'use strict';\n  if (!this.isActive()) {\n    this.start();\n  }\n};\n\n\n/**\n * Stops the delay timer if it is active. No action is taken if the timer is not\n * in use.\n */\ngoog.async.AnimationDelay.prototype.stop = function() {\n  'use strict';\n  if (this.isActive()) {\n    var raf = this.getRaf_();\n    var cancelRaf = this.getCancelRaf_();\n    if (raf && !cancelRaf && this.win_.mozRequestAnimationFrame) {\n      goog.events.unlistenByKey(this.id_);\n    } else if (raf && cancelRaf) {\n      cancelRaf.call(this.win_, /** @type {number} */ (this.id_));\n    } else {\n      this.win_.clearTimeout(/** @type {number} */ (this.id_));\n    }\n  }\n  this.id_ = null;\n};\n\n\n/**\n * Fires delay's action even if timer has already gone off or has not been\n * started yet; guarantees action firing. Stops the delay timer.\n */\ngoog.async.AnimationDelay.prototype.fire = function() {\n  'use strict';\n  this.stop();\n  this.doAction_();\n};\n\n\n/**\n * Fires delay's action only if timer is currently active. Stops the delay\n * timer.\n */\ngoog.async.AnimationDelay.prototype.fireIfActive = function() {\n  'use strict';\n  if (this.isActive()) {\n    this.fire();\n  }\n};\n\n\n/**\n * @return {boolean} True if the delay is currently active, false otherwise.\n */\ngoog.async.AnimationDelay.prototype.isActive = function() {\n  'use strict';\n  return this.id_ != null;\n};\n\n\n/**\n * Invokes the callback function after the delay successfully completes.\n * @private\n */\ngoog.async.AnimationDelay.prototype.doAction_ = function() {\n  'use strict';\n  if (this.usingListeners_ && this.id_) {\n    goog.events.unlistenByKey(this.id_);\n  }\n  this.id_ = null;\n\n  // We are not using the timestamp returned by requestAnimationFrame\n  // because it may be either a Date.now-style time or a\n  // high-resolution time (depending on browser implementation). Using\n  // goog.now() will ensure that the timestamp used is consistent and\n  // compatible with goog.fx.Animation.\n  this.listener_.call(this.handler_, goog.now());\n};\n\n\n/** @override */\ngoog.async.AnimationDelay.prototype.disposeInternal = function() {\n  'use strict';\n  this.stop();\n  goog.async.AnimationDelay.base(this, 'disposeInternal');\n};\n\n\n/**\n * @return {?function(function(number)): number} The requestAnimationFrame\n *     function, or null if not available on this browser.\n * @private\n */\ngoog.async.AnimationDelay.prototype.getRaf_ = function() {\n  'use strict';\n  var win = this.win_;\n  return win.requestAnimationFrame || win.webkitRequestAnimationFrame ||\n      win.mozRequestAnimationFrame || win.oRequestAnimationFrame ||\n      win.msRequestAnimationFrame || null;\n};\n\n\n/**\n * @return {?function(number): undefined} The cancelAnimationFrame function,\n *     or null if not available on this browser.\n * @private\n */\ngoog.async.AnimationDelay.prototype.getCancelRaf_ = function() {\n  'use strict';\n  var win = this.win_;\n  return win.cancelAnimationFrame || win.cancelRequestAnimationFrame ||\n      win.webkitCancelRequestAnimationFrame ||\n      win.mozCancelRequestAnimationFrame || win.oCancelRequestAnimationFrame ||\n      win.msCancelRequestAnimationFrame || null;\n};\n","~:compiled-at",1627678975468,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.async.animationdelay.js\",\n\"lineCount\":86,\n\"mappings\":\"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\",\n\"sources\":[\"goog/async/animationdelay.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview A delayed callback that pegs to the next animation frame\\n * instead of a user-configurable timeout.\\n */\\n\\ngoog.provide('goog.async.AnimationDelay');\\n\\ngoog.require('goog.Disposable');\\ngoog.require('goog.events');\\ngoog.require('goog.functions');\\n\\n\\n\\n// TODO(nicksantos): Should we factor out the common code between this and\\n// goog.async.Delay? I'm not sure if there's enough code for this to really\\n// make sense. Subclassing seems like the wrong approach for a variety of\\n// reasons. Maybe there should be a common interface?\\n\\n\\n\\n/**\\n * A delayed callback that pegs to the next animation frame\\n * instead of a user configurable timeout. By design, this should have\\n * the same interface as goog.async.Delay.\\n *\\n * Uses requestAnimationFrame and friends when available, but falls\\n * back to a timeout of goog.async.AnimationDelay.TIMEOUT.\\n *\\n * For more on requestAnimationFrame and how you can use it to create smoother\\n * animations, see:\\n * @see http://paulirish.com/2011/requestanimationframe-for-smart-animating/\\n *\\n * @param {function(this:THIS, number)} listener Function to call\\n *     when the delay completes. Will be passed the timestamp when it's called,\\n *     in unix ms.\\n * @param {Window=} opt_window The window object to execute the delay in.\\n *     Defaults to the global object.\\n * @param {THIS=} opt_handler The object scope to invoke the function in.\\n * @template THIS\\n * @constructor\\n * @struct\\n * @extends {goog.Disposable}\\n * @final\\n */\\ngoog.async.AnimationDelay = function(listener, opt_window, opt_handler) {\\n  'use strict';\\n  goog.async.AnimationDelay.base(this, 'constructor');\\n\\n  /**\\n   * Identifier of the active delay timeout, or event listener,\\n   * or null when inactive.\\n   * @private {?goog.events.Key|number}\\n   */\\n  this.id_ = null;\\n\\n  /**\\n   * If we're using dom listeners.\\n   * @private {?boolean}\\n   */\\n  this.usingListeners_ = false;\\n\\n  /**\\n   * The function that will be invoked after a delay.\\n   * @const\\n   * @private\\n   */\\n  this.listener_ = listener;\\n\\n  /**\\n   * The object context to invoke the callback in.\\n   * @const\\n   * @private {(THIS|undefined)}\\n   */\\n  this.handler_ = opt_handler;\\n\\n  /**\\n   * @private {Window}\\n   */\\n  this.win_ = opt_window || window;\\n\\n  /**\\n   * Cached callback function invoked when the delay finishes.\\n   * @private {function()}\\n   */\\n  this.callback_ = goog.bind(this.doAction_, this);\\n};\\ngoog.inherits(goog.async.AnimationDelay, goog.Disposable);\\n\\n\\n/**\\n * Default wait timeout for animations (in milliseconds).  Only used for timed\\n * animation, which uses a timer (setTimeout) to schedule animation.\\n *\\n * @type {number}\\n * @const\\n */\\ngoog.async.AnimationDelay.TIMEOUT = 20;\\n\\n\\n/**\\n * Name of event received from the requestAnimationFrame in Firefox.\\n *\\n * @type {string}\\n * @const\\n * @private\\n */\\ngoog.async.AnimationDelay.MOZ_BEFORE_PAINT_EVENT_ = 'MozBeforePaint';\\n\\n\\n/**\\n * Starts the delay timer. The provided listener function will be called\\n * before the next animation frame.\\n */\\ngoog.async.AnimationDelay.prototype.start = function() {\\n  'use strict';\\n  this.stop();\\n  this.usingListeners_ = false;\\n\\n  var raf = this.getRaf_();\\n  var cancelRaf = this.getCancelRaf_();\\n  if (raf && !cancelRaf && this.win_.mozRequestAnimationFrame) {\\n    // Because Firefox (Gecko) runs animation in separate threads, it also saves\\n    // time by running the requestAnimationFrame callbacks in that same thread.\\n    // Sadly this breaks the assumption of implicit thread-safety in JS, and can\\n    // thus create thread-based inconsistencies on counters etc.\\n    //\\n    // Calling cycleAnimations_ using the MozBeforePaint event instead of as\\n    // callback fixes this.\\n    //\\n    // Trigger this condition only if the mozRequestAnimationFrame is available,\\n    // but not the W3C requestAnimationFrame function (as in draft) or the\\n    // equivalent cancel functions.\\n    this.id_ = goog.events.listen(\\n        this.win_, goog.async.AnimationDelay.MOZ_BEFORE_PAINT_EVENT_,\\n        this.callback_);\\n    this.win_.mozRequestAnimationFrame(null);\\n    this.usingListeners_ = true;\\n  } else if (raf && cancelRaf) {\\n    this.id_ = raf.call(this.win_, this.callback_);\\n  } else {\\n    this.id_ = this.win_.setTimeout(\\n        // Prior to Firefox 13, Gecko passed a non-standard parameter\\n        // to the callback that we want to ignore.\\n        goog.functions.lock(this.callback_), goog.async.AnimationDelay.TIMEOUT);\\n  }\\n};\\n\\n\\n/**\\n * Starts the delay timer if it's not already active.\\n */\\ngoog.async.AnimationDelay.prototype.startIfNotActive = function() {\\n  'use strict';\\n  if (!this.isActive()) {\\n    this.start();\\n  }\\n};\\n\\n\\n/**\\n * Stops the delay timer if it is active. No action is taken if the timer is not\\n * in use.\\n */\\ngoog.async.AnimationDelay.prototype.stop = function() {\\n  'use strict';\\n  if (this.isActive()) {\\n    var raf = this.getRaf_();\\n    var cancelRaf = this.getCancelRaf_();\\n    if (raf && !cancelRaf && this.win_.mozRequestAnimationFrame) {\\n      goog.events.unlistenByKey(this.id_);\\n    } else if (raf && cancelRaf) {\\n      cancelRaf.call(this.win_, /** @type {number} */ (this.id_));\\n    } else {\\n      this.win_.clearTimeout(/** @type {number} */ (this.id_));\\n    }\\n  }\\n  this.id_ = null;\\n};\\n\\n\\n/**\\n * Fires delay's action even if timer has already gone off or has not been\\n * started yet; guarantees action firing. Stops the delay timer.\\n */\\ngoog.async.AnimationDelay.prototype.fire = function() {\\n  'use strict';\\n  this.stop();\\n  this.doAction_();\\n};\\n\\n\\n/**\\n * Fires delay's action only if timer is currently active. Stops the delay\\n * timer.\\n */\\ngoog.async.AnimationDelay.prototype.fireIfActive = function() {\\n  'use strict';\\n  if (this.isActive()) {\\n    this.fire();\\n  }\\n};\\n\\n\\n/**\\n * @return {boolean} True if the delay is currently active, false otherwise.\\n */\\ngoog.async.AnimationDelay.prototype.isActive = function() {\\n  'use strict';\\n  return this.id_ != null;\\n};\\n\\n\\n/**\\n * Invokes the callback function after the delay successfully completes.\\n * @private\\n */\\ngoog.async.AnimationDelay.prototype.doAction_ = function() {\\n  'use strict';\\n  if (this.usingListeners_ && this.id_) {\\n    goog.events.unlistenByKey(this.id_);\\n  }\\n  this.id_ = null;\\n\\n  // We are not using the timestamp returned by requestAnimationFrame\\n  // because it may be either a Date.now-style time or a\\n  // high-resolution time (depending on browser implementation). Using\\n  // goog.now() will ensure that the timestamp used is consistent and\\n  // compatible with goog.fx.Animation.\\n  this.listener_.call(this.handler_, goog.now());\\n};\\n\\n\\n/** @override */\\ngoog.async.AnimationDelay.prototype.disposeInternal = function() {\\n  'use strict';\\n  this.stop();\\n  goog.async.AnimationDelay.base(this, 'disposeInternal');\\n};\\n\\n\\n/**\\n * @return {?function(function(number)): number} The requestAnimationFrame\\n *     function, or null if not available on this browser.\\n * @private\\n */\\ngoog.async.AnimationDelay.prototype.getRaf_ = function() {\\n  'use strict';\\n  var win = this.win_;\\n  return win.requestAnimationFrame || win.webkitRequestAnimationFrame ||\\n      win.mozRequestAnimationFrame || win.oRequestAnimationFrame ||\\n      win.msRequestAnimationFrame || null;\\n};\\n\\n\\n/**\\n * @return {?function(number): undefined} The cancelAnimationFrame function,\\n *     or null if not available on this browser.\\n * @private\\n */\\ngoog.async.AnimationDelay.prototype.getCancelRaf_ = function() {\\n  'use strict';\\n  var win = this.win_;\\n  return win.cancelAnimationFrame || win.cancelRequestAnimationFrame ||\\n      win.webkitCancelRequestAnimationFrame ||\\n      win.mozCancelRequestAnimationFrame || win.oCancelRequestAnimationFrame ||\\n      win.msCancelRequestAnimationFrame || null;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"async\",\"AnimationDelay\",\"goog.async.AnimationDelay\",\"listener\",\"opt_window\",\"opt_handler\",\"base\",\"id_\",\"usingListeners_\",\"listener_\",\"handler_\",\"win_\",\"window\",\"callback_\",\"bind\",\"doAction_\",\"inherits\",\"Disposable\",\"TIMEOUT\",\"MOZ_BEFORE_PAINT_EVENT_\",\"prototype\",\"start\",\"goog.async.AnimationDelay.prototype.start\",\"stop\",\"raf\",\"getRaf_\",\"cancelRaf\",\"getCancelRaf_\",\"mozRequestAnimationFrame\",\"events\",\"listen\",\"call\",\"setTimeout\",\"functions\",\"lock\",\"startIfNotActive\",\"goog.async.AnimationDelay.prototype.startIfNotActive\",\"isActive\",\"goog.async.AnimationDelay.prototype.stop\",\"unlistenByKey\",\"clearTimeout\",\"fire\",\"goog.async.AnimationDelay.prototype.fire\",\"fireIfActive\",\"goog.async.AnimationDelay.prototype.fireIfActive\",\"goog.async.AnimationDelay.prototype.isActive\",\"goog.async.AnimationDelay.prototype.doAction_\",\"now\",\"disposeInternal\",\"goog.async.AnimationDelay.prototype.disposeInternal\",\"goog.async.AnimationDelay.prototype.getRaf_\",\"win\",\"requestAnimationFrame\",\"webkitRequestAnimationFrame\",\"oRequestAnimationFrame\",\"msRequestAnimationFrame\",\"goog.async.AnimationDelay.prototype.getCancelRaf_\",\"cancelAnimationFrame\",\"cancelRequestAnimationFrame\",\"webkitCancelRequestAnimationFrame\",\"mozCancelRequestAnimationFrame\",\"oCancelRequestAnimationFrame\",\"msCancelRequestAnimationFrame\"]\n}\n"]