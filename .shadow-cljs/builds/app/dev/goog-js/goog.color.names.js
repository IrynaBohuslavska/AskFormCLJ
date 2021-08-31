["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/color/names.js"],"~:js","goog.provide(\"goog.color.names\");\ngoog.color.names = {\"aliceblue\":\"#f0f8ff\", \"antiquewhite\":\"#faebd7\", \"aqua\":\"#00ffff\", \"aquamarine\":\"#7fffd4\", \"azure\":\"#f0ffff\", \"beige\":\"#f5f5dc\", \"bisque\":\"#ffe4c4\", \"black\":\"#000000\", \"blanchedalmond\":\"#ffebcd\", \"blue\":\"#0000ff\", \"blueviolet\":\"#8a2be2\", \"brown\":\"#a52a2a\", \"burlywood\":\"#deb887\", \"cadetblue\":\"#5f9ea0\", \"chartreuse\":\"#7fff00\", \"chocolate\":\"#d2691e\", \"coral\":\"#ff7f50\", \"cornflowerblue\":\"#6495ed\", \"cornsilk\":\"#fff8dc\", \"crimson\":\"#dc143c\", \"cyan\":\"#00ffff\", \"darkblue\":\"#00008b\", \"darkcyan\":\"#008b8b\", \n\"darkgoldenrod\":\"#b8860b\", \"darkgray\":\"#a9a9a9\", \"darkgreen\":\"#006400\", \"darkgrey\":\"#a9a9a9\", \"darkkhaki\":\"#bdb76b\", \"darkmagenta\":\"#8b008b\", \"darkolivegreen\":\"#556b2f\", \"darkorange\":\"#ff8c00\", \"darkorchid\":\"#9932cc\", \"darkred\":\"#8b0000\", \"darksalmon\":\"#e9967a\", \"darkseagreen\":\"#8fbc8f\", \"darkslateblue\":\"#483d8b\", \"darkslategray\":\"#2f4f4f\", \"darkslategrey\":\"#2f4f4f\", \"darkturquoise\":\"#00ced1\", \"darkviolet\":\"#9400d3\", \"deeppink\":\"#ff1493\", \"deepskyblue\":\"#00bfff\", \"dimgray\":\"#696969\", \"dimgrey\":\"#696969\", \n\"dodgerblue\":\"#1e90ff\", \"firebrick\":\"#b22222\", \"floralwhite\":\"#fffaf0\", \"forestgreen\":\"#228b22\", \"fuchsia\":\"#ff00ff\", \"gainsboro\":\"#dcdcdc\", \"ghostwhite\":\"#f8f8ff\", \"gold\":\"#ffd700\", \"goldenrod\":\"#daa520\", \"gray\":\"#808080\", \"green\":\"#008000\", \"greenyellow\":\"#adff2f\", \"grey\":\"#808080\", \"honeydew\":\"#f0fff0\", \"hotpink\":\"#ff69b4\", \"indianred\":\"#cd5c5c\", \"indigo\":\"#4b0082\", \"ivory\":\"#fffff0\", \"khaki\":\"#f0e68c\", \"lavender\":\"#e6e6fa\", \"lavenderblush\":\"#fff0f5\", \"lawngreen\":\"#7cfc00\", \"lemonchiffon\":\"#fffacd\", \n\"lightblue\":\"#add8e6\", \"lightcoral\":\"#f08080\", \"lightcyan\":\"#e0ffff\", \"lightgoldenrodyellow\":\"#fafad2\", \"lightgray\":\"#d3d3d3\", \"lightgreen\":\"#90ee90\", \"lightgrey\":\"#d3d3d3\", \"lightpink\":\"#ffb6c1\", \"lightsalmon\":\"#ffa07a\", \"lightseagreen\":\"#20b2aa\", \"lightskyblue\":\"#87cefa\", \"lightslategray\":\"#778899\", \"lightslategrey\":\"#778899\", \"lightsteelblue\":\"#b0c4de\", \"lightyellow\":\"#ffffe0\", \"lime\":\"#00ff00\", \"limegreen\":\"#32cd32\", \"linen\":\"#faf0e6\", \"magenta\":\"#ff00ff\", \"maroon\":\"#800000\", \"mediumaquamarine\":\"#66cdaa\", \n\"mediumblue\":\"#0000cd\", \"mediumorchid\":\"#ba55d3\", \"mediumpurple\":\"#9370db\", \"mediumseagreen\":\"#3cb371\", \"mediumslateblue\":\"#7b68ee\", \"mediumspringgreen\":\"#00fa9a\", \"mediumturquoise\":\"#48d1cc\", \"mediumvioletred\":\"#c71585\", \"midnightblue\":\"#191970\", \"mintcream\":\"#f5fffa\", \"mistyrose\":\"#ffe4e1\", \"moccasin\":\"#ffe4b5\", \"navajowhite\":\"#ffdead\", \"navy\":\"#000080\", \"oldlace\":\"#fdf5e6\", \"olive\":\"#808000\", \"olivedrab\":\"#6b8e23\", \"orange\":\"#ffa500\", \"orangered\":\"#ff4500\", \"orchid\":\"#da70d6\", \"palegoldenrod\":\"#eee8aa\", \n\"palegreen\":\"#98fb98\", \"paleturquoise\":\"#afeeee\", \"palevioletred\":\"#db7093\", \"papayawhip\":\"#ffefd5\", \"peachpuff\":\"#ffdab9\", \"peru\":\"#cd853f\", \"pink\":\"#ffc0cb\", \"plum\":\"#dda0dd\", \"powderblue\":\"#b0e0e6\", \"purple\":\"#800080\", \"red\":\"#ff0000\", \"rosybrown\":\"#bc8f8f\", \"royalblue\":\"#4169e1\", \"saddlebrown\":\"#8b4513\", \"salmon\":\"#fa8072\", \"sandybrown\":\"#f4a460\", \"seagreen\":\"#2e8b57\", \"seashell\":\"#fff5ee\", \"sienna\":\"#a0522d\", \"silver\":\"#c0c0c0\", \"skyblue\":\"#87ceeb\", \"slateblue\":\"#6a5acd\", \"slategray\":\"#708090\", \n\"slategrey\":\"#708090\", \"snow\":\"#fffafa\", \"springgreen\":\"#00ff7f\", \"steelblue\":\"#4682b4\", \"tan\":\"#d2b48c\", \"teal\":\"#008080\", \"thistle\":\"#d8bfd8\", \"tomato\":\"#ff6347\", \"turquoise\":\"#40e0d0\", \"violet\":\"#ee82ee\", \"wheat\":\"#f5deb3\", \"white\":\"#ffffff\", \"whitesmoke\":\"#f5f5f5\", \"yellow\":\"#ffff00\", \"yellowgreen\":\"#9acd32\"};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Names of standard colors with their associated hex values.\n */\n\ngoog.provide('goog.color.names');\n\n\n/**\n * A map that contains a lot of colors that are recognised by various browsers.\n * This list is way larger than the minimal one dictated by W3C.\n * The keys of this map are the lowercase \"readable\" names of the colors, while\n * the values are the \"hex\" values.\n *\n * @type {!Object<string, string>}\n */\ngoog.color.names = {\n  'aliceblue': '#f0f8ff',\n  'antiquewhite': '#faebd7',\n  'aqua': '#00ffff',\n  'aquamarine': '#7fffd4',\n  'azure': '#f0ffff',\n  'beige': '#f5f5dc',\n  'bisque': '#ffe4c4',\n  'black': '#000000',\n  'blanchedalmond': '#ffebcd',\n  'blue': '#0000ff',\n  'blueviolet': '#8a2be2',\n  'brown': '#a52a2a',\n  'burlywood': '#deb887',\n  'cadetblue': '#5f9ea0',\n  'chartreuse': '#7fff00',\n  'chocolate': '#d2691e',\n  'coral': '#ff7f50',\n  'cornflowerblue': '#6495ed',\n  'cornsilk': '#fff8dc',\n  'crimson': '#dc143c',\n  'cyan': '#00ffff',\n  'darkblue': '#00008b',\n  'darkcyan': '#008b8b',\n  'darkgoldenrod': '#b8860b',\n  'darkgray': '#a9a9a9',\n  'darkgreen': '#006400',\n  'darkgrey': '#a9a9a9',\n  'darkkhaki': '#bdb76b',\n  'darkmagenta': '#8b008b',\n  'darkolivegreen': '#556b2f',\n  'darkorange': '#ff8c00',\n  'darkorchid': '#9932cc',\n  'darkred': '#8b0000',\n  'darksalmon': '#e9967a',\n  'darkseagreen': '#8fbc8f',\n  'darkslateblue': '#483d8b',\n  'darkslategray': '#2f4f4f',\n  'darkslategrey': '#2f4f4f',\n  'darkturquoise': '#00ced1',\n  'darkviolet': '#9400d3',\n  'deeppink': '#ff1493',\n  'deepskyblue': '#00bfff',\n  'dimgray': '#696969',\n  'dimgrey': '#696969',\n  'dodgerblue': '#1e90ff',\n  'firebrick': '#b22222',\n  'floralwhite': '#fffaf0',\n  'forestgreen': '#228b22',\n  'fuchsia': '#ff00ff',\n  'gainsboro': '#dcdcdc',\n  'ghostwhite': '#f8f8ff',\n  'gold': '#ffd700',\n  'goldenrod': '#daa520',\n  'gray': '#808080',\n  'green': '#008000',\n  'greenyellow': '#adff2f',\n  'grey': '#808080',\n  'honeydew': '#f0fff0',\n  'hotpink': '#ff69b4',\n  'indianred': '#cd5c5c',\n  'indigo': '#4b0082',\n  'ivory': '#fffff0',\n  'khaki': '#f0e68c',\n  'lavender': '#e6e6fa',\n  'lavenderblush': '#fff0f5',\n  'lawngreen': '#7cfc00',\n  'lemonchiffon': '#fffacd',\n  'lightblue': '#add8e6',\n  'lightcoral': '#f08080',\n  'lightcyan': '#e0ffff',\n  'lightgoldenrodyellow': '#fafad2',\n  'lightgray': '#d3d3d3',\n  'lightgreen': '#90ee90',\n  'lightgrey': '#d3d3d3',\n  'lightpink': '#ffb6c1',\n  'lightsalmon': '#ffa07a',\n  'lightseagreen': '#20b2aa',\n  'lightskyblue': '#87cefa',\n  'lightslategray': '#778899',\n  'lightslategrey': '#778899',\n  'lightsteelblue': '#b0c4de',\n  'lightyellow': '#ffffe0',\n  'lime': '#00ff00',\n  'limegreen': '#32cd32',\n  'linen': '#faf0e6',\n  'magenta': '#ff00ff',\n  'maroon': '#800000',\n  'mediumaquamarine': '#66cdaa',\n  'mediumblue': '#0000cd',\n  'mediumorchid': '#ba55d3',\n  'mediumpurple': '#9370db',\n  'mediumseagreen': '#3cb371',\n  'mediumslateblue': '#7b68ee',\n  'mediumspringgreen': '#00fa9a',\n  'mediumturquoise': '#48d1cc',\n  'mediumvioletred': '#c71585',\n  'midnightblue': '#191970',\n  'mintcream': '#f5fffa',\n  'mistyrose': '#ffe4e1',\n  'moccasin': '#ffe4b5',\n  'navajowhite': '#ffdead',\n  'navy': '#000080',\n  'oldlace': '#fdf5e6',\n  'olive': '#808000',\n  'olivedrab': '#6b8e23',\n  'orange': '#ffa500',\n  'orangered': '#ff4500',\n  'orchid': '#da70d6',\n  'palegoldenrod': '#eee8aa',\n  'palegreen': '#98fb98',\n  'paleturquoise': '#afeeee',\n  'palevioletred': '#db7093',\n  'papayawhip': '#ffefd5',\n  'peachpuff': '#ffdab9',\n  'peru': '#cd853f',\n  'pink': '#ffc0cb',\n  'plum': '#dda0dd',\n  'powderblue': '#b0e0e6',\n  'purple': '#800080',\n  'red': '#ff0000',\n  'rosybrown': '#bc8f8f',\n  'royalblue': '#4169e1',\n  'saddlebrown': '#8b4513',\n  'salmon': '#fa8072',\n  'sandybrown': '#f4a460',\n  'seagreen': '#2e8b57',\n  'seashell': '#fff5ee',\n  'sienna': '#a0522d',\n  'silver': '#c0c0c0',\n  'skyblue': '#87ceeb',\n  'slateblue': '#6a5acd',\n  'slategray': '#708090',\n  'slategrey': '#708090',\n  'snow': '#fffafa',\n  'springgreen': '#00ff7f',\n  'steelblue': '#4682b4',\n  'tan': '#d2b48c',\n  'teal': '#008080',\n  'thistle': '#d8bfd8',\n  'tomato': '#ff6347',\n  'turquoise': '#40e0d0',\n  'violet': '#ee82ee',\n  'wheat': '#f5deb3',\n  'white': '#ffffff',\n  'whitesmoke': '#f5f5f5',\n  'yellow': '#ffff00',\n  'yellowgreen': '#9acd32'\n};\n","~:compiled-at",1627678975464,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.color.names.js\",\n\"lineCount\":9,\n\"mappings\":\"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\",\n\"sources\":[\"goog/color/names.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Names of standard colors with their associated hex values.\\n */\\n\\ngoog.provide('goog.color.names');\\n\\n\\n/**\\n * A map that contains a lot of colors that are recognised by various browsers.\\n * This list is way larger than the minimal one dictated by W3C.\\n * The keys of this map are the lowercase \\\"readable\\\" names of the colors, while\\n * the values are the \\\"hex\\\" values.\\n *\\n * @type {!Object<string, string>}\\n */\\ngoog.color.names = {\\n  'aliceblue': '#f0f8ff',\\n  'antiquewhite': '#faebd7',\\n  'aqua': '#00ffff',\\n  'aquamarine': '#7fffd4',\\n  'azure': '#f0ffff',\\n  'beige': '#f5f5dc',\\n  'bisque': '#ffe4c4',\\n  'black': '#000000',\\n  'blanchedalmond': '#ffebcd',\\n  'blue': '#0000ff',\\n  'blueviolet': '#8a2be2',\\n  'brown': '#a52a2a',\\n  'burlywood': '#deb887',\\n  'cadetblue': '#5f9ea0',\\n  'chartreuse': '#7fff00',\\n  'chocolate': '#d2691e',\\n  'coral': '#ff7f50',\\n  'cornflowerblue': '#6495ed',\\n  'cornsilk': '#fff8dc',\\n  'crimson': '#dc143c',\\n  'cyan': '#00ffff',\\n  'darkblue': '#00008b',\\n  'darkcyan': '#008b8b',\\n  'darkgoldenrod': '#b8860b',\\n  'darkgray': '#a9a9a9',\\n  'darkgreen': '#006400',\\n  'darkgrey': '#a9a9a9',\\n  'darkkhaki': '#bdb76b',\\n  'darkmagenta': '#8b008b',\\n  'darkolivegreen': '#556b2f',\\n  'darkorange': '#ff8c00',\\n  'darkorchid': '#9932cc',\\n  'darkred': '#8b0000',\\n  'darksalmon': '#e9967a',\\n  'darkseagreen': '#8fbc8f',\\n  'darkslateblue': '#483d8b',\\n  'darkslategray': '#2f4f4f',\\n  'darkslategrey': '#2f4f4f',\\n  'darkturquoise': '#00ced1',\\n  'darkviolet': '#9400d3',\\n  'deeppink': '#ff1493',\\n  'deepskyblue': '#00bfff',\\n  'dimgray': '#696969',\\n  'dimgrey': '#696969',\\n  'dodgerblue': '#1e90ff',\\n  'firebrick': '#b22222',\\n  'floralwhite': '#fffaf0',\\n  'forestgreen': '#228b22',\\n  'fuchsia': '#ff00ff',\\n  'gainsboro': '#dcdcdc',\\n  'ghostwhite': '#f8f8ff',\\n  'gold': '#ffd700',\\n  'goldenrod': '#daa520',\\n  'gray': '#808080',\\n  'green': '#008000',\\n  'greenyellow': '#adff2f',\\n  'grey': '#808080',\\n  'honeydew': '#f0fff0',\\n  'hotpink': '#ff69b4',\\n  'indianred': '#cd5c5c',\\n  'indigo': '#4b0082',\\n  'ivory': '#fffff0',\\n  'khaki': '#f0e68c',\\n  'lavender': '#e6e6fa',\\n  'lavenderblush': '#fff0f5',\\n  'lawngreen': '#7cfc00',\\n  'lemonchiffon': '#fffacd',\\n  'lightblue': '#add8e6',\\n  'lightcoral': '#f08080',\\n  'lightcyan': '#e0ffff',\\n  'lightgoldenrodyellow': '#fafad2',\\n  'lightgray': '#d3d3d3',\\n  'lightgreen': '#90ee90',\\n  'lightgrey': '#d3d3d3',\\n  'lightpink': '#ffb6c1',\\n  'lightsalmon': '#ffa07a',\\n  'lightseagreen': '#20b2aa',\\n  'lightskyblue': '#87cefa',\\n  'lightslategray': '#778899',\\n  'lightslategrey': '#778899',\\n  'lightsteelblue': '#b0c4de',\\n  'lightyellow': '#ffffe0',\\n  'lime': '#00ff00',\\n  'limegreen': '#32cd32',\\n  'linen': '#faf0e6',\\n  'magenta': '#ff00ff',\\n  'maroon': '#800000',\\n  'mediumaquamarine': '#66cdaa',\\n  'mediumblue': '#0000cd',\\n  'mediumorchid': '#ba55d3',\\n  'mediumpurple': '#9370db',\\n  'mediumseagreen': '#3cb371',\\n  'mediumslateblue': '#7b68ee',\\n  'mediumspringgreen': '#00fa9a',\\n  'mediumturquoise': '#48d1cc',\\n  'mediumvioletred': '#c71585',\\n  'midnightblue': '#191970',\\n  'mintcream': '#f5fffa',\\n  'mistyrose': '#ffe4e1',\\n  'moccasin': '#ffe4b5',\\n  'navajowhite': '#ffdead',\\n  'navy': '#000080',\\n  'oldlace': '#fdf5e6',\\n  'olive': '#808000',\\n  'olivedrab': '#6b8e23',\\n  'orange': '#ffa500',\\n  'orangered': '#ff4500',\\n  'orchid': '#da70d6',\\n  'palegoldenrod': '#eee8aa',\\n  'palegreen': '#98fb98',\\n  'paleturquoise': '#afeeee',\\n  'palevioletred': '#db7093',\\n  'papayawhip': '#ffefd5',\\n  'peachpuff': '#ffdab9',\\n  'peru': '#cd853f',\\n  'pink': '#ffc0cb',\\n  'plum': '#dda0dd',\\n  'powderblue': '#b0e0e6',\\n  'purple': '#800080',\\n  'red': '#ff0000',\\n  'rosybrown': '#bc8f8f',\\n  'royalblue': '#4169e1',\\n  'saddlebrown': '#8b4513',\\n  'salmon': '#fa8072',\\n  'sandybrown': '#f4a460',\\n  'seagreen': '#2e8b57',\\n  'seashell': '#fff5ee',\\n  'sienna': '#a0522d',\\n  'silver': '#c0c0c0',\\n  'skyblue': '#87ceeb',\\n  'slateblue': '#6a5acd',\\n  'slategray': '#708090',\\n  'slategrey': '#708090',\\n  'snow': '#fffafa',\\n  'springgreen': '#00ff7f',\\n  'steelblue': '#4682b4',\\n  'tan': '#d2b48c',\\n  'teal': '#008080',\\n  'thistle': '#d8bfd8',\\n  'tomato': '#ff6347',\\n  'turquoise': '#40e0d0',\\n  'violet': '#ee82ee',\\n  'wheat': '#f5deb3',\\n  'white': '#ffffff',\\n  'whitesmoke': '#f5f5f5',\\n  'yellow': '#ffff00',\\n  'yellowgreen': '#9acd32'\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"color\",\"names\"]\n}\n"]