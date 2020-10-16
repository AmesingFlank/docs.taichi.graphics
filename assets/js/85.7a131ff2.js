(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{502:function(t,a,e){"use strict";e.r(a);var r=e(20),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"performance-tuning"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#performance-tuning"}},[t._v("#")]),t._v(" Performance tuning")]),t._v(" "),e("h2",{attrs:{id:"for-loop-decorators"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#for-loop-decorators"}},[t._v("#")]),t._v(" For-loop decorators")]),t._v(" "),e("p",[t._v("In Taichi kernels, for-loops in the outermost scope is automatically\nparallelized.")]),t._v(" "),e("p",[t._v("However, there are some implementation details about "),e("strong",[t._v("how it is\nparallelized")]),t._v(".")]),t._v(" "),e("p",[t._v("Taichi provides some API to modify these parameters. This allows\nadvanced users to manually fine-tune the performance.")]),t._v(" "),e("p",[t._v("For example, specifying a suitable "),e("code",[t._v("ti.block_dim")]),t._v(" could yield an almost\n3x performance boost in\n"),e("a",{attrs:{href:"https://github.com/taichi-dev/taichi/blob/master/examples/mpm3d.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("examples/mpm3d.py"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),e("p",[t._v("For performance profiling utilities, see "),e("RouterLink",{attrs:{to:"/zh/docs/develop/contribution/profiler.html"}},[e("strong",[t._v("Profiler")]),t._v(" section of the Contribution Guide")]),t._v(".")],1)]),t._v(" "),e("h3",{attrs:{id:"thread-hierarchy-of-gpus"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thread-hierarchy-of-gpus"}},[t._v("#")]),t._v(" Thread hierarchy of GPUs")]),t._v(" "),e("p",[t._v("GPUs have a "),e("strong",[t._v("thread hierarchy")]),t._v(".")]),t._v(" "),e("p",[t._v("From small to large, the computation units are: "),e("strong",[t._v("iteration")]),t._v(" <\n"),e("strong",[t._v("thread")]),t._v(" < "),e("strong",[t._v("block")]),t._v(" < "),e("strong",[t._v("grid")]),t._v(".")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("iteration")]),t._v(": Iteration is the "),e("strong",[t._v("body of a for-loop")]),t._v(". Each\niteration corresponding to a specific "),e("code",[t._v("i")]),t._v(" value in for-loop.")]),t._v(" "),e("li",[e("strong",[t._v("thread")]),t._v(": Iterations are grouped into threads. Threads are the\nminimal unit that is parallelized. All iterations within a thread\nare executed in "),e("strong",[t._v("serial")]),t._v(". We usually use 1 iteration per thread\nfor maximizing parallel performance.")]),t._v(" "),e("li",[e("strong",[t._v("block")]),t._v(": Threads are grouped into blocks. All threads within a\nblock are executed in "),e("strong",[t._v("parallel")]),t._v(". Threads within the same block\ncan share their "),e("strong",[t._v("block local storage")]),t._v(".")]),t._v(" "),e("li",[e("strong",[t._v("grid")]),t._v(": Blocks are grouped into grids. Grid is the minimal unit\nthat being "),e("strong",[t._v("launched")]),t._v(" from host. All blocks within a grid are\nexecuted in "),e("strong",[t._v("parallel")]),t._v(". In Taichi, each "),e("strong",[t._v("parallelized for-loop")]),t._v("\nis a grid.")])]),t._v(" "),e("p",[t._v("For more details, please see "),e("a",{attrs:{href:"https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html#thread-hierarchy",target:"_blank",rel:"noopener noreferrer"}},[t._v("the CUDA C programming\nguide"),e("OutboundLink")],1),t._v(".\nThe OpenGL and Metal backends follow a similar thread hierarchy.")]),t._v(" "),e("h3",{attrs:{id:"api-reference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api-reference"}},[t._v("#")]),t._v(" API reference")]),t._v(" "),e("p",[t._v("Programmers may "),e("strong",[t._v("prepend")]),t._v(" some decorator(s) to tweak the property of a\nfor-loop, e.g.:")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kernel")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8192")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# no decorator, use default settings")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("block_dim"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# change the property of next for-loop:")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8192")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# will be parallelized with block_dim=128")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8192")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# no decorator, use default settings")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),e("p",[t._v("For details, check "),e("RouterLink",{attrs:{to:"/zh/docs/develop/documentation/api/ti.html#block_dim"}},[t._v("The list of available decorators in API references")])],1)])}),[],!1,null,null,null);a.default=n.exports}}]);