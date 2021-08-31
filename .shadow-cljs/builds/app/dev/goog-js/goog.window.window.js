["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/window/window.js"],"~:js","goog.provide(\"goog.window\");\ngoog.require(\"goog.dom\");\ngoog.require(\"goog.dom.TagName\");\ngoog.require(\"goog.dom.safe\");\ngoog.require(\"goog.html.SafeUrl\");\ngoog.require(\"goog.html.uncheckedconversions\");\ngoog.require(\"goog.labs.userAgent.platform\");\ngoog.require(\"goog.string\");\ngoog.require(\"goog.string.Const\");\ngoog.require(\"goog.userAgent\");\ngoog.requireType(\"goog.string.TypedString\");\ngoog.window.DEFAULT_POPUP_HEIGHT = 500;\ngoog.window.DEFAULT_POPUP_WIDTH = 690;\ngoog.window.DEFAULT_POPUP_TARGET = \"google_popup\";\ngoog.window.createFakeWindow_ = function() {\n  return {};\n};\ngoog.window.open = function(linkRef, opt_options, opt_parentWin) {\n  if (!opt_options) {\n    opt_options = {};\n  }\n  var parentWin = opt_parentWin || window;\n  var safeLinkRef;\n  if (linkRef instanceof goog.html.SafeUrl) {\n    safeLinkRef = linkRef;\n  } else {\n    var url = typeof linkRef.href != \"undefined\" ? linkRef.href : String(linkRef);\n    safeLinkRef = goog.html.SafeUrl.sanitize(url);\n  }\n  var target = opt_options.target || linkRef.target;\n  var sb = [];\n  for (var option in opt_options) {\n    switch(option) {\n      case \"width\":\n      case \"height\":\n      case \"top\":\n      case \"left\":\n        sb.push(option + \"\\x3d\" + opt_options[option]);\n        break;\n      case \"target\":\n      case \"noopener\":\n      case \"noreferrer\":\n        break;\n      default:\n        sb.push(option + \"\\x3d\" + (opt_options[option] ? 1 : 0));\n    }\n  }\n  var optionString = sb.join(\",\");\n  var newWin;\n  if (goog.labs.userAgent.platform.isIos() && parentWin.navigator && parentWin.navigator[\"standalone\"] && target && target != \"_self\") {\n    var a = goog.dom.createElement(goog.dom.TagName.A);\n    goog.dom.safe.setAnchorHref(a, safeLinkRef);\n    a.setAttribute(\"target\", target);\n    if (opt_options[\"noreferrer\"]) {\n      a.setAttribute(\"rel\", \"noreferrer\");\n    }\n    var click = document.createEvent(\"MouseEvent\");\n    click.initMouseEvent(\"click\", true, true, parentWin, 1);\n    a.dispatchEvent(click);\n    newWin = goog.window.createFakeWindow_();\n  } else {\n    if (opt_options[\"noreferrer\"]) {\n      newWin = goog.dom.safe.openInWindow(\"\", parentWin, target, optionString);\n      var sanitizedLinkRef = goog.html.SafeUrl.unwrap(safeLinkRef);\n      if (newWin) {\n        if (goog.userAgent.EDGE_OR_IE) {\n          if (goog.string.contains(sanitizedLinkRef, \";\")) {\n            sanitizedLinkRef = \"'\" + sanitizedLinkRef.replace(/'/g, \"%27\") + \"'\";\n          }\n        }\n        newWin.opener = null;\n        var safeHtml = goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from(\"b/12014412, meta tag with sanitized URL\"), '\\x3cmeta name\\x3d\"referrer\" content\\x3d\"no-referrer\"\\x3e' + '\\x3cmeta http-equiv\\x3d\"refresh\" content\\x3d\"0; url\\x3d' + goog.string.htmlEscape(sanitizedLinkRef) + '\"\\x3e');\n        var newDoc = newWin.document;\n        if (newDoc && newDoc.write) {\n          goog.dom.safe.documentWrite(newDoc, safeHtml);\n          newDoc.close();\n        }\n      }\n    } else {\n      newWin = goog.dom.safe.openInWindow(safeLinkRef, parentWin, target, optionString);\n      if (newWin && opt_options[\"noopener\"]) {\n        newWin.opener = null;\n      }\n    }\n  }\n  return newWin;\n};\ngoog.window.openBlank = function(opt_message, opt_options, opt_parentWin) {\n  var loadingMessage;\n  if (!opt_message) {\n    loadingMessage = \"\";\n  } else {\n    loadingMessage = goog.string.escapeString(goog.string.htmlEscape(opt_message));\n  }\n  var url = goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from(\"b/12014412, encoded string in javascript: URL\"), 'javascript:\"' + encodeURI(loadingMessage) + '\"');\n  return goog.window.open(url, opt_options, opt_parentWin);\n};\ngoog.window.popup = function(linkRef, opt_options) {\n  if (!opt_options) {\n    opt_options = {};\n  }\n  opt_options[\"target\"] = opt_options[\"target\"] || linkRef[\"target\"] || goog.window.DEFAULT_POPUP_TARGET;\n  opt_options[\"width\"] = opt_options[\"width\"] || goog.window.DEFAULT_POPUP_WIDTH;\n  opt_options[\"height\"] = opt_options[\"height\"] || goog.window.DEFAULT_POPUP_HEIGHT;\n  var newWin = goog.window.open(linkRef, opt_options);\n  if (!newWin) {\n    return true;\n  }\n  newWin.focus();\n  return false;\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Utilities for window manipulation.\n */\n\n\ngoog.provide('goog.window');\n\ngoog.require('goog.dom');\ngoog.require('goog.dom.TagName');\ngoog.require('goog.dom.safe');\ngoog.require('goog.html.SafeUrl');\ngoog.require('goog.html.uncheckedconversions');\ngoog.require('goog.labs.userAgent.platform');\ngoog.require('goog.string');\ngoog.require('goog.string.Const');\ngoog.require('goog.userAgent');\ngoog.requireType('goog.string.TypedString');\n\n\n/**\n * Default height for popup windows\n * @type {number}\n */\ngoog.window.DEFAULT_POPUP_HEIGHT = 500;\n\n\n/**\n * Default width for popup windows\n * @type {number}\n */\ngoog.window.DEFAULT_POPUP_WIDTH = 690;\n\n\n/**\n * Default target for popup windows\n * @type {string}\n */\ngoog.window.DEFAULT_POPUP_TARGET = 'google_popup';\n\n\n/**\n * @return {!Window}\n * @suppress {checkTypes}\n * @private\n */\ngoog.window.createFakeWindow_ = function() {\n  'use strict';\n  return /** @type {!Window} */ ({});\n};\n\n/**\n * Opens a new window.\n *\n * @param {!goog.html.SafeUrl|string|!Object|null} linkRef If an Object with an\n *     'href' attribute (such as HTMLAnchorElement) is passed then the value of\n *     'href' is used, otherwise its toString method is called. Note that if a\n *     string|Object is used, it will be sanitized with SafeUrl.sanitize().\n *\n * @param {?Object=} opt_options supports the following options:\n *  'target': (string) target (window name). If null, linkRef.target will\n *      be used.\n *  'width': (number) window width.\n *  'height': (number) window height.\n *  'top': (number) distance from top of screen\n *  'left': (number) distance from left of screen\n *  'toolbar': (boolean) show toolbar\n *  'scrollbars': (boolean) show scrollbars\n *  'location': (boolean) show location\n *  'statusbar': (boolean) show statusbar\n *  'menubar': (boolean) show menubar\n *  'resizable': (boolean) resizable\n *  'noreferrer': (boolean) whether to attempt to remove the referrer header\n *      from the request headers. Does this by opening a blank window that\n *      then redirects to the target url, so users may see some flickering.\n *  'noopener': (boolean) whether to remove the `opener` property from the\n *      window object of the newly created window. The property contains a\n *      reference to the original window, and can be used to launch a\n *      reverse tabnabbing attack.\n *\n * @param {?Window=} opt_parentWin Parent window that should be used to open the\n *                 new window.\n *\n * @return {?Window} Returns the window object that was opened. This returns\n *                  null if a popup blocker prevented the window from being\n *                  opened. In case when a new window is opened in a different\n *                  browser sandbox (such as iOS standalone mode), the returned\n *                  object is a emulated Window object that functions as if\n *                  a cross-origin window has been opened.\n */\ngoog.window.open = function(linkRef, opt_options, opt_parentWin) {\n  'use strict';\n  if (!opt_options) {\n    opt_options = {};\n  }\n  var parentWin = opt_parentWin || window;\n\n  /** @type {!goog.html.SafeUrl} */\n  var safeLinkRef;\n\n  if (linkRef instanceof goog.html.SafeUrl) {\n    safeLinkRef = linkRef;\n  } else {\n    // HTMLAnchorElement has a toString() method with the same behavior as\n    // goog.Uri in all browsers except for Safari, which returns\n    // '[object HTMLAnchorElement]'.  We check for the href first, then\n    // assume that it's a goog.Uri or String otherwise.\n    /**\n     * @type {string|!goog.string.TypedString}\n     * @suppress {missingProperties}\n     */\n    var url =\n        typeof linkRef.href != 'undefined' ? linkRef.href : String(linkRef);\n    safeLinkRef = goog.html.SafeUrl.sanitize(url);\n  }\n\n  /** @suppress {missingProperties} loose references to 'target' */\n  /** @suppress {strictMissingProperties} */\n  var target = opt_options.target || linkRef.target;\n\n  var sb = [];\n  for (var option in opt_options) {\n    switch (option) {\n      case 'width':\n      case 'height':\n      case 'top':\n      case 'left':\n        sb.push(option + '=' + opt_options[option]);\n        break;\n      case 'target':\n      case 'noopener':\n      case 'noreferrer':\n        break;\n      default:\n        sb.push(option + '=' + (opt_options[option] ? 1 : 0));\n    }\n  }\n  var optionString = sb.join(',');\n\n  var newWin;\n  if (goog.labs.userAgent.platform.isIos() && parentWin.navigator &&\n      parentWin.navigator['standalone'] && target && target != '_self') {\n    // iOS in standalone mode disregards \"target\" in window.open and always\n    // opens new URL in the same window. The workaround is to create an \"A\"\n    // element and send a click event to it.\n    // Notice that the \"A\" tag does NOT have to be added to the DOM.\n\n    var a = goog.dom.createElement(goog.dom.TagName.A);\n    goog.dom.safe.setAnchorHref(a, safeLinkRef);\n\n    a.setAttribute('target', target);\n    if (opt_options['noreferrer']) {\n      a.setAttribute('rel', 'noreferrer');\n    }\n\n    var click = /** @type {!MouseEvent} */ (document.createEvent('MouseEvent'));\n    click.initMouseEvent(\n        'click',\n        true,  // canBubble\n        true,  // cancelable\n        parentWin,\n        1);  // detail = mousebutton\n    a.dispatchEvent(click);\n    // New window is not available in this case. Instead, a fake Window object\n    // is returned. In particular, it will have window.document undefined. In\n    // general, it will appear to most of clients as a Window for a different\n    // origin. Since iOS standalone web apps are run in their own sandbox, this\n    // is the most appropriate return value.\n    newWin = goog.window.createFakeWindow_();\n  } else if (opt_options['noreferrer']) {\n    // This code used to use meta-refresh to stop the referrer from being\n    // included in the request headers. This was the only cross-browser way\n    // to remove the referrer circa 2009. However, this never worked in Chrome,\n    // and, instead newWin.opener had to be set to null on this browser. This\n    // behavior is slated to be removed in Chrome and should not be relied\n    // upon. Referrer Policy is the only spec'd and supported way of stripping\n    // referrers and works across all current browsers. This is used in\n    // addition to the aforementioned tricks.\n    //\n    // We also set the opener to be set to null in the new window, thus\n    // disallowing the opened window from navigating its opener.\n    //\n    // Detecting user agent and then using a different strategy per browser\n    // would allow the referrer to leak in case of an incorrect/missing user\n    // agent.\n    newWin = goog.dom.safe.openInWindow('', parentWin, target, optionString);\n\n    var sanitizedLinkRef = goog.html.SafeUrl.unwrap(safeLinkRef);\n    if (newWin) {\n      if (goog.userAgent.EDGE_OR_IE) {\n        // IE/EDGE can't parse the content attribute if the url contains\n        // a semicolon. We can fix this by adding quotes around the url, but\n        // then we can't parse quotes in the URL correctly. We take a\n        // best-effort approach.\n        //\n        // If the URL has semicolons, wrap it in single quotes to protect\n        // the semicolons.\n        // If the URL has semicolons and single quotes, url-encode the single\n        // quotes as well.\n        //\n        // This is imperfect. Notice that both ' and ; are reserved characters\n        // in URIs, so this could do the wrong thing, but at least it will\n        // do the wrong thing in only rare cases.\n        // ugh.\n        if (goog.string.contains(sanitizedLinkRef, ';')) {\n          sanitizedLinkRef = \"'\" + sanitizedLinkRef.replace(/'/g, '%27') + \"'\";\n        }\n      }\n      newWin.opener = null;\n\n      // TODO(rjamet): Building proper SafeHtml with SafeHtml.createMetaRefresh\n      // pulls in a lot of compiled code, which is composed of various unneeded\n      // goog.html parts such as SafeStyle.create among others. So, for now,\n      // keep the unchecked conversion until we figure out how to make the\n      // dependencies of createSafeHtmlTagSecurityPrivateDoNotAccessOrElse less\n      // heavy.\n      var safeHtml =\n          goog.html.uncheckedconversions\n              .safeHtmlFromStringKnownToSatisfyTypeContract(\n                  goog.string.Const.from(\n                      'b/12014412, meta tag with sanitized URL'),\n                  '<meta name=\"referrer\" content=\"no-referrer\">' +\n                      '<meta http-equiv=\"refresh\" content=\"0; url=' +\n                      goog.string.htmlEscape(sanitizedLinkRef) + '\">');\n\n      // During window loading `newWin.document` may be unset in some browsers.\n      // Storing and checking a reference to the document prevents NPEs.\n      var newDoc = newWin.document;\n      if (newDoc && newDoc.write) {\n        goog.dom.safe.documentWrite(newDoc, safeHtml);\n        newDoc.close();\n      }\n    }\n  } else {\n    newWin = goog.dom.safe.openInWindow(\n        safeLinkRef, parentWin, target, optionString);\n    // Passing in 'noopener' into the 'windowFeatures' param of window.open(...)\n    // will yield a feature-deprived browser. This is an known issue, tracked\n    // here: https://github.com/whatwg/html/issues/1902\n    if (newWin && opt_options['noopener']) {\n      newWin.opener = null;\n    }\n  }\n  // newWin is null if a popup blocker prevented the window open.\n  return newWin;\n};\n\n\n/**\n * Opens a new window without any real content in it.\n *\n * This can be used to get around popup blockers if you need to open a window\n * in response to a user event, but need to do asynchronous work to determine\n * the URL to open, and then set the URL later.\n *\n * Example usage:\n *\n * var newWin = goog.window.openBlank('Loading...');\n * setTimeout(\n *     function() {\n *       newWin.location.href = 'http://www.google.com';\n *     }, 100);\n *\n * @param {string=} opt_message String to show in the new window. This string\n *     will be HTML-escaped to avoid XSS issues.\n * @param {?Object=} opt_options Options to open window with.\n *     {@see goog.window.open for exact option semantics}.\n * @param {?Window=} opt_parentWin Parent window that should be used to open the\n *                 new window.\n * @return {?Window} Returns the window object that was opened. This returns\n *                  null if a popup blocker prevented the window from being\n *                  opened.\n */\ngoog.window.openBlank = function(opt_message, opt_options, opt_parentWin) {\n  'use strict';\n  // Open up a window with the loading message and nothing else.\n  // This will be interpreted as HTML content type with a missing doctype\n  // and html/body tags, but is otherwise acceptable.\n  //\n  // IMPORTANT: The order of escaping is crucial here in order to avoid XSS.\n  // First, HTML-escaping is needed because the result of the JS expression\n  // is evaluated as HTML. Second, JS-string escaping is needed; this avoids\n  // \\u escaping from inserting HTML tags and \\ from escaping the final \".\n  // Finally, URL percent-encoding is done with encodeURI(); this\n  // avoids percent-encoding from bypassing HTML and JS escaping.\n  //\n  // Note: There are other ways the same result could be achieved but the\n  // current behavior was preserved when this code was refactored to use\n  // SafeUrl, in order to avoid breakage.\n  var loadingMessage;\n  if (!opt_message) {\n    loadingMessage = '';\n  } else {\n    loadingMessage =\n        goog.string.escapeString(goog.string.htmlEscape(opt_message));\n  }\n  var url = goog.html.uncheckedconversions\n                .safeUrlFromStringKnownToSatisfyTypeContract(\n                    goog.string.Const.from(\n                        'b/12014412, encoded string in javascript: URL'),\n                    'javascript:\"' + encodeURI(loadingMessage) + '\"');\n  return /** @type {?Window} */ (\n      goog.window.open(url, opt_options, opt_parentWin));\n};\n\n\n/**\n * Raise a help popup window, defaulting to \"Google standard\" size and name.\n *\n * (If your project is using GXPs, consider using {@link PopUpLink.gxp}.)\n *\n* @param {?goog.html.SafeUrl|string|?Object} linkRef If an Object with an 'href'\n *     attribute (such as HTMLAnchorElement) is passed then the value of 'href'\n *     is used, otherwise  otherwise its toString method is called. Note that\n *     if a string|Object is used, it will be sanitized with SafeUrl.sanitize().\n *\n * @param {?Object=} opt_options Options to open window with.\n *     {@see goog.window.open for exact option semantics}\n *     Additional wrinkles to the options:\n *     - if 'target' field is null, linkRef.target will be used. If *that's*\n *     null, the default is \"google_popup\".\n *     - if 'width' field is not specified, the default is 690.\n *     - if 'height' field is not specified, the default is 500.\n *\n * @return {boolean} true if the window was not popped up, false if it was.\n */\ngoog.window.popup = function(linkRef, opt_options) {\n  'use strict';\n  if (!opt_options) {\n    opt_options = {};\n  }\n\n  // set default properties\n  opt_options['target'] = opt_options['target'] || linkRef['target'] ||\n      goog.window.DEFAULT_POPUP_TARGET;\n  opt_options['width'] =\n      opt_options['width'] || goog.window.DEFAULT_POPUP_WIDTH;\n  opt_options['height'] =\n      opt_options['height'] || goog.window.DEFAULT_POPUP_HEIGHT;\n\n  var newWin = goog.window.open(linkRef, opt_options);\n  if (!newWin) {\n    return true;\n  }\n  newWin.focus();\n\n  return false;\n};\n","~:compiled-at",1627678975397,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.window.window.js\",\n\"lineCount\":112,\n\"mappings\":\"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\",\n\"sources\":[\"goog/window/window.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Utilities for window manipulation.\\n */\\n\\n\\ngoog.provide('goog.window');\\n\\ngoog.require('goog.dom');\\ngoog.require('goog.dom.TagName');\\ngoog.require('goog.dom.safe');\\ngoog.require('goog.html.SafeUrl');\\ngoog.require('goog.html.uncheckedconversions');\\ngoog.require('goog.labs.userAgent.platform');\\ngoog.require('goog.string');\\ngoog.require('goog.string.Const');\\ngoog.require('goog.userAgent');\\ngoog.requireType('goog.string.TypedString');\\n\\n\\n/**\\n * Default height for popup windows\\n * @type {number}\\n */\\ngoog.window.DEFAULT_POPUP_HEIGHT = 500;\\n\\n\\n/**\\n * Default width for popup windows\\n * @type {number}\\n */\\ngoog.window.DEFAULT_POPUP_WIDTH = 690;\\n\\n\\n/**\\n * Default target for popup windows\\n * @type {string}\\n */\\ngoog.window.DEFAULT_POPUP_TARGET = 'google_popup';\\n\\n\\n/**\\n * @return {!Window}\\n * @suppress {checkTypes}\\n * @private\\n */\\ngoog.window.createFakeWindow_ = function() {\\n  'use strict';\\n  return /** @type {!Window} */ ({});\\n};\\n\\n/**\\n * Opens a new window.\\n *\\n * @param {!goog.html.SafeUrl|string|!Object|null} linkRef If an Object with an\\n *     'href' attribute (such as HTMLAnchorElement) is passed then the value of\\n *     'href' is used, otherwise its toString method is called. Note that if a\\n *     string|Object is used, it will be sanitized with SafeUrl.sanitize().\\n *\\n * @param {?Object=} opt_options supports the following options:\\n *  'target': (string) target (window name). If null, linkRef.target will\\n *      be used.\\n *  'width': (number) window width.\\n *  'height': (number) window height.\\n *  'top': (number) distance from top of screen\\n *  'left': (number) distance from left of screen\\n *  'toolbar': (boolean) show toolbar\\n *  'scrollbars': (boolean) show scrollbars\\n *  'location': (boolean) show location\\n *  'statusbar': (boolean) show statusbar\\n *  'menubar': (boolean) show menubar\\n *  'resizable': (boolean) resizable\\n *  'noreferrer': (boolean) whether to attempt to remove the referrer header\\n *      from the request headers. Does this by opening a blank window that\\n *      then redirects to the target url, so users may see some flickering.\\n *  'noopener': (boolean) whether to remove the `opener` property from the\\n *      window object of the newly created window. The property contains a\\n *      reference to the original window, and can be used to launch a\\n *      reverse tabnabbing attack.\\n *\\n * @param {?Window=} opt_parentWin Parent window that should be used to open the\\n *                 new window.\\n *\\n * @return {?Window} Returns the window object that was opened. This returns\\n *                  null if a popup blocker prevented the window from being\\n *                  opened. In case when a new window is opened in a different\\n *                  browser sandbox (such as iOS standalone mode), the returned\\n *                  object is a emulated Window object that functions as if\\n *                  a cross-origin window has been opened.\\n */\\ngoog.window.open = function(linkRef, opt_options, opt_parentWin) {\\n  'use strict';\\n  if (!opt_options) {\\n    opt_options = {};\\n  }\\n  var parentWin = opt_parentWin || window;\\n\\n  /** @type {!goog.html.SafeUrl} */\\n  var safeLinkRef;\\n\\n  if (linkRef instanceof goog.html.SafeUrl) {\\n    safeLinkRef = linkRef;\\n  } else {\\n    // HTMLAnchorElement has a toString() method with the same behavior as\\n    // goog.Uri in all browsers except for Safari, which returns\\n    // '[object HTMLAnchorElement]'.  We check for the href first, then\\n    // assume that it's a goog.Uri or String otherwise.\\n    /**\\n     * @type {string|!goog.string.TypedString}\\n     * @suppress {missingProperties}\\n     */\\n    var url =\\n        typeof linkRef.href != 'undefined' ? linkRef.href : String(linkRef);\\n    safeLinkRef = goog.html.SafeUrl.sanitize(url);\\n  }\\n\\n  /** @suppress {missingProperties} loose references to 'target' */\\n  /** @suppress {strictMissingProperties} */\\n  var target = opt_options.target || linkRef.target;\\n\\n  var sb = [];\\n  for (var option in opt_options) {\\n    switch (option) {\\n      case 'width':\\n      case 'height':\\n      case 'top':\\n      case 'left':\\n        sb.push(option + '=' + opt_options[option]);\\n        break;\\n      case 'target':\\n      case 'noopener':\\n      case 'noreferrer':\\n        break;\\n      default:\\n        sb.push(option + '=' + (opt_options[option] ? 1 : 0));\\n    }\\n  }\\n  var optionString = sb.join(',');\\n\\n  var newWin;\\n  if (goog.labs.userAgent.platform.isIos() && parentWin.navigator &&\\n      parentWin.navigator['standalone'] && target && target != '_self') {\\n    // iOS in standalone mode disregards \\\"target\\\" in window.open and always\\n    // opens new URL in the same window. The workaround is to create an \\\"A\\\"\\n    // element and send a click event to it.\\n    // Notice that the \\\"A\\\" tag does NOT have to be added to the DOM.\\n\\n    var a = goog.dom.createElement(goog.dom.TagName.A);\\n    goog.dom.safe.setAnchorHref(a, safeLinkRef);\\n\\n    a.setAttribute('target', target);\\n    if (opt_options['noreferrer']) {\\n      a.setAttribute('rel', 'noreferrer');\\n    }\\n\\n    var click = /** @type {!MouseEvent} */ (document.createEvent('MouseEvent'));\\n    click.initMouseEvent(\\n        'click',\\n        true,  // canBubble\\n        true,  // cancelable\\n        parentWin,\\n        1);  // detail = mousebutton\\n    a.dispatchEvent(click);\\n    // New window is not available in this case. Instead, a fake Window object\\n    // is returned. In particular, it will have window.document undefined. In\\n    // general, it will appear to most of clients as a Window for a different\\n    // origin. Since iOS standalone web apps are run in their own sandbox, this\\n    // is the most appropriate return value.\\n    newWin = goog.window.createFakeWindow_();\\n  } else if (opt_options['noreferrer']) {\\n    // This code used to use meta-refresh to stop the referrer from being\\n    // included in the request headers. This was the only cross-browser way\\n    // to remove the referrer circa 2009. However, this never worked in Chrome,\\n    // and, instead newWin.opener had to be set to null on this browser. This\\n    // behavior is slated to be removed in Chrome and should not be relied\\n    // upon. Referrer Policy is the only spec'd and supported way of stripping\\n    // referrers and works across all current browsers. This is used in\\n    // addition to the aforementioned tricks.\\n    //\\n    // We also set the opener to be set to null in the new window, thus\\n    // disallowing the opened window from navigating its opener.\\n    //\\n    // Detecting user agent and then using a different strategy per browser\\n    // would allow the referrer to leak in case of an incorrect/missing user\\n    // agent.\\n    newWin = goog.dom.safe.openInWindow('', parentWin, target, optionString);\\n\\n    var sanitizedLinkRef = goog.html.SafeUrl.unwrap(safeLinkRef);\\n    if (newWin) {\\n      if (goog.userAgent.EDGE_OR_IE) {\\n        // IE/EDGE can't parse the content attribute if the url contains\\n        // a semicolon. We can fix this by adding quotes around the url, but\\n        // then we can't parse quotes in the URL correctly. We take a\\n        // best-effort approach.\\n        //\\n        // If the URL has semicolons, wrap it in single quotes to protect\\n        // the semicolons.\\n        // If the URL has semicolons and single quotes, url-encode the single\\n        // quotes as well.\\n        //\\n        // This is imperfect. Notice that both ' and ; are reserved characters\\n        // in URIs, so this could do the wrong thing, but at least it will\\n        // do the wrong thing in only rare cases.\\n        // ugh.\\n        if (goog.string.contains(sanitizedLinkRef, ';')) {\\n          sanitizedLinkRef = \\\"'\\\" + sanitizedLinkRef.replace(/'/g, '%27') + \\\"'\\\";\\n        }\\n      }\\n      newWin.opener = null;\\n\\n      // TODO(rjamet): Building proper SafeHtml with SafeHtml.createMetaRefresh\\n      // pulls in a lot of compiled code, which is composed of various unneeded\\n      // goog.html parts such as SafeStyle.create among others. So, for now,\\n      // keep the unchecked conversion until we figure out how to make the\\n      // dependencies of createSafeHtmlTagSecurityPrivateDoNotAccessOrElse less\\n      // heavy.\\n      var safeHtml =\\n          goog.html.uncheckedconversions\\n              .safeHtmlFromStringKnownToSatisfyTypeContract(\\n                  goog.string.Const.from(\\n                      'b/12014412, meta tag with sanitized URL'),\\n                  '<meta name=\\\"referrer\\\" content=\\\"no-referrer\\\">' +\\n                      '<meta http-equiv=\\\"refresh\\\" content=\\\"0; url=' +\\n                      goog.string.htmlEscape(sanitizedLinkRef) + '\\\">');\\n\\n      // During window loading `newWin.document` may be unset in some browsers.\\n      // Storing and checking a reference to the document prevents NPEs.\\n      var newDoc = newWin.document;\\n      if (newDoc && newDoc.write) {\\n        goog.dom.safe.documentWrite(newDoc, safeHtml);\\n        newDoc.close();\\n      }\\n    }\\n  } else {\\n    newWin = goog.dom.safe.openInWindow(\\n        safeLinkRef, parentWin, target, optionString);\\n    // Passing in 'noopener' into the 'windowFeatures' param of window.open(...)\\n    // will yield a feature-deprived browser. This is an known issue, tracked\\n    // here: https://github.com/whatwg/html/issues/1902\\n    if (newWin && opt_options['noopener']) {\\n      newWin.opener = null;\\n    }\\n  }\\n  // newWin is null if a popup blocker prevented the window open.\\n  return newWin;\\n};\\n\\n\\n/**\\n * Opens a new window without any real content in it.\\n *\\n * This can be used to get around popup blockers if you need to open a window\\n * in response to a user event, but need to do asynchronous work to determine\\n * the URL to open, and then set the URL later.\\n *\\n * Example usage:\\n *\\n * var newWin = goog.window.openBlank('Loading...');\\n * setTimeout(\\n *     function() {\\n *       newWin.location.href = 'http://www.google.com';\\n *     }, 100);\\n *\\n * @param {string=} opt_message String to show in the new window. This string\\n *     will be HTML-escaped to avoid XSS issues.\\n * @param {?Object=} opt_options Options to open window with.\\n *     {@see goog.window.open for exact option semantics}.\\n * @param {?Window=} opt_parentWin Parent window that should be used to open the\\n *                 new window.\\n * @return {?Window} Returns the window object that was opened. This returns\\n *                  null if a popup blocker prevented the window from being\\n *                  opened.\\n */\\ngoog.window.openBlank = function(opt_message, opt_options, opt_parentWin) {\\n  'use strict';\\n  // Open up a window with the loading message and nothing else.\\n  // This will be interpreted as HTML content type with a missing doctype\\n  // and html/body tags, but is otherwise acceptable.\\n  //\\n  // IMPORTANT: The order of escaping is crucial here in order to avoid XSS.\\n  // First, HTML-escaping is needed because the result of the JS expression\\n  // is evaluated as HTML. Second, JS-string escaping is needed; this avoids\\n  // \\\\u escaping from inserting HTML tags and \\\\ from escaping the final \\\".\\n  // Finally, URL percent-encoding is done with encodeURI(); this\\n  // avoids percent-encoding from bypassing HTML and JS escaping.\\n  //\\n  // Note: There are other ways the same result could be achieved but the\\n  // current behavior was preserved when this code was refactored to use\\n  // SafeUrl, in order to avoid breakage.\\n  var loadingMessage;\\n  if (!opt_message) {\\n    loadingMessage = '';\\n  } else {\\n    loadingMessage =\\n        goog.string.escapeString(goog.string.htmlEscape(opt_message));\\n  }\\n  var url = goog.html.uncheckedconversions\\n                .safeUrlFromStringKnownToSatisfyTypeContract(\\n                    goog.string.Const.from(\\n                        'b/12014412, encoded string in javascript: URL'),\\n                    'javascript:\\\"' + encodeURI(loadingMessage) + '\\\"');\\n  return /** @type {?Window} */ (\\n      goog.window.open(url, opt_options, opt_parentWin));\\n};\\n\\n\\n/**\\n * Raise a help popup window, defaulting to \\\"Google standard\\\" size and name.\\n *\\n * (If your project is using GXPs, consider using {@link PopUpLink.gxp}.)\\n *\\n* @param {?goog.html.SafeUrl|string|?Object} linkRef If an Object with an 'href'\\n *     attribute (such as HTMLAnchorElement) is passed then the value of 'href'\\n *     is used, otherwise  otherwise its toString method is called. Note that\\n *     if a string|Object is used, it will be sanitized with SafeUrl.sanitize().\\n *\\n * @param {?Object=} opt_options Options to open window with.\\n *     {@see goog.window.open for exact option semantics}\\n *     Additional wrinkles to the options:\\n *     - if 'target' field is null, linkRef.target will be used. If *that's*\\n *     null, the default is \\\"google_popup\\\".\\n *     - if 'width' field is not specified, the default is 690.\\n *     - if 'height' field is not specified, the default is 500.\\n *\\n * @return {boolean} true if the window was not popped up, false if it was.\\n */\\ngoog.window.popup = function(linkRef, opt_options) {\\n  'use strict';\\n  if (!opt_options) {\\n    opt_options = {};\\n  }\\n\\n  // set default properties\\n  opt_options['target'] = opt_options['target'] || linkRef['target'] ||\\n      goog.window.DEFAULT_POPUP_TARGET;\\n  opt_options['width'] =\\n      opt_options['width'] || goog.window.DEFAULT_POPUP_WIDTH;\\n  opt_options['height'] =\\n      opt_options['height'] || goog.window.DEFAULT_POPUP_HEIGHT;\\n\\n  var newWin = goog.window.open(linkRef, opt_options);\\n  if (!newWin) {\\n    return true;\\n  }\\n  newWin.focus();\\n\\n  return false;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"requireType\",\"window\",\"DEFAULT_POPUP_HEIGHT\",\"DEFAULT_POPUP_WIDTH\",\"DEFAULT_POPUP_TARGET\",\"createFakeWindow_\",\"goog.window.createFakeWindow_\",\"open\",\"goog.window.open\",\"linkRef\",\"opt_options\",\"opt_parentWin\",\"parentWin\",\"safeLinkRef\",\"html\",\"SafeUrl\",\"url\",\"href\",\"String\",\"sanitize\",\"target\",\"sb\",\"option\",\"push\",\"optionString\",\"join\",\"newWin\",\"labs\",\"userAgent\",\"platform\",\"isIos\",\"navigator\",\"a\",\"dom\",\"createElement\",\"TagName\",\"A\",\"safe\",\"setAnchorHref\",\"setAttribute\",\"click\",\"document\",\"createEvent\",\"initMouseEvent\",\"dispatchEvent\",\"openInWindow\",\"sanitizedLinkRef\",\"unwrap\",\"EDGE_OR_IE\",\"string\",\"contains\",\"replace\",\"opener\",\"safeHtml\",\"uncheckedconversions\",\"safeHtmlFromStringKnownToSatisfyTypeContract\",\"Const\",\"from\",\"htmlEscape\",\"newDoc\",\"write\",\"documentWrite\",\"close\",\"openBlank\",\"goog.window.openBlank\",\"opt_message\",\"loadingMessage\",\"escapeString\",\"safeUrlFromStringKnownToSatisfyTypeContract\",\"encodeURI\",\"popup\",\"goog.window.popup\",\"focus\"]\n}\n"]