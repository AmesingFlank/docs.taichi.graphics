(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{510:function(e,t,a){"use strict";a.r(t);var n=a(20),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"structural-nodes-snodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#structural-nodes-snodes"}},[e._v("#")]),e._v(" Structural nodes (SNodes)")]),e._v(" "),a("p",[e._v("After writing the computation code, the user needs to specify the\ninternal data structure hierarchy. Specifying a data structure includes\nchoices at both the macro level, dictating how the data structure\ncomponents nest with each other and the way they represent sparsity, and\nthe micro level, dictating how data are grouped together (e.g. structure\nof arrays vs. array of structures). Taichi provides "),a("em",[e._v("Structural Nodes\n(SNodes)")]),e._v(" to compose the hierarchy and particular properties. These\nconstructs and their semantics are listed below:")]),e._v(" "),a("ul",[a("li",[e._v("dense: A fixed-length contiguous array.")]),e._v(" "),a("li",[e._v("bitmasked: This is similar to dense, but it also uses a mask to\nmaintain sparsity information, one bit per child.")]),e._v(" "),a("li",[e._v("pointer: Store pointers instead of the whole structure to save\nmemory and maintain sparsity.")]),e._v(" "),a("li",[e._v("dynamic: Variable-length array, with a predefined maximum length. It\nserves the role of "),a("code",[e._v("std::vector")]),e._v(" in C++ or "),a("code",[e._v("list")]),e._v(" in Python, and can\nbe used to maintain objects (e.g. particles) contained in a block.")])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("Supported SNode types on each backend:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[e._v("SNode")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("CPU/CUDA")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("OpenGL")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("Metal")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("C source")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("dense")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("OK")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("OK")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("OK")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("OK")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("bitmasked")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("OK")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("N/A")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("OK")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("N/A")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("pointer")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("OK")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("N/A")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("N/A")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("N/A")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("dynamic")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("OK")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("PAR")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("N/A")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("N/A")])])])]),e._v(" "),a("p",[e._v("(OK: supported; PAR: partial support; N/A: not available)")])]),e._v(" "),a("p",[e._v("See "),a("code",[e._v("layout")]),e._v('{.interpreted-text role="ref"} for more details. '),a("code",[e._v("ti.root")]),e._v("\nis the root node of the data structure.")]),e._v(" "),a("p",[e._v("::: {.function}\nsnode.place(x, ...)")]),e._v(" "),a("p",[e._v("parameter snode")]),e._v(" "),a("p",[e._v(": (SNode) where to place")]),e._v(" "),a("p",[e._v("parameter a")]),e._v(" "),a("p",[e._v(": (ti.field) field(s) to be placed")]),e._v(" "),a("p",[e._v("return")]),e._v(" "),a("p",[e._v(": (SNode) the "),a("code",[e._v("snode")]),e._v(" itself")]),e._v(" "),a("p",[e._v("The following code places two 0-D fields named "),a("code",[e._v("x")]),e._v(" and "),a("code",[e._v("y")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("x = ti.field(dtype=ti.i32)\ny = ti.field(dtype=ti.f32)\nti.root.place(x, y)\nassert x.snode.parent == y.snode.parent\n")])])]),a("p",[e._v(":::")]),e._v(" "),a("p",[e._v("::: {.function}\nfield.shape")]),e._v(" "),a("p",[e._v("parameter a")]),e._v(" "),a("p",[e._v(": (ti.field)")]),e._v(" "),a("p",[e._v("return")]),e._v(" "),a("p",[e._v(": (tuple of integers) the shape of field")]),e._v(" "),a("p",[e._v("Equivalent to "),a("code",[e._v("field.snode.shape")]),e._v(".")]),e._v(" "),a("p",[e._v("For example,")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("ti.root.dense(ti.ijk, (3, 5, 4)).place(x)\nx.shape  # returns (3, 5, 4)\n")])])]),a("p",[e._v(":::")]),e._v(" "),a("p",[e._v("::: {.function}\nfield.snode")]),e._v(" "),a("p",[e._v("parameter a")]),e._v(" "),a("p",[e._v(": (ti.field)")]),e._v(" "),a("p",[e._v("return")]),e._v(" "),a("p",[e._v(": (SNode) the structual node where "),a("code",[e._v("field")]),e._v(" is placed")]),e._v(" "),a("div",{staticClass:"language-{=html} extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\x3c!-- --\x3e\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("x = ti.field(dtype=ti.i32)\ny = ti.field(dtype=ti.f32)\nblk1 = ti.root.dense(ti.i, 4)\nblk1.place(x, y)\nassert x.snode == blk1\n")])])]),a("p",[e._v(":::")]),e._v(" "),a("p",[e._v("::: {.function}\nsnode.shape")]),e._v(" "),a("p",[e._v("parameter snode")]),e._v(" "),a("p",[e._v(": (SNode)")]),e._v(" "),a("p",[e._v("return")]),e._v(" "),a("p",[e._v(": (tuple) the size of node along that axis")]),e._v(" "),a("div",{staticClass:"language-{=html} extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\x3c!-- --\x3e\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("blk1 = ti.root\nblk2 = blk1.dense(ti.i,  3)\nblk3 = blk2.dense(ti.jk, (5, 2))\nblk4 = blk3.dense(ti.k,  2)\nblk1.shape  # ()\nblk2.shape  # (3, )\nblk3.shape  # (3, 5, 2)\nblk4.shape  # (3, 5, 4)\n")])])]),a("p",[e._v(":::")]),e._v(" "),a("p",[e._v("::: {.function}\nsnode.parent(n = 1)")]),e._v(" "),a("p",[e._v("parameter snode")]),e._v(" "),a("p",[e._v(": (SNode)")]),e._v(" "),a("p",[e._v("parameter n")]),e._v(" "),a("p",[e._v(": (optional, scalar) the number of steps, i.e. "),a("code",[e._v("n=1")]),e._v(" for parent, "),a("code",[e._v("n=2")]),e._v("\ngrandparent, etc.")]),e._v(" "),a("p",[e._v("return")]),e._v(" "),a("p",[e._v(": (SNode) the parent node of "),a("code",[e._v("snode")])]),e._v(" "),a("div",{staticClass:"language-{=html} extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\x3c!-- --\x3e\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("blk1 = ti.root.dense(ti.i, 8)\nblk2 = blk1.dense(ti.j, 4)\nblk3 = blk2.bitmasked(ti.k, 6)\nblk1.parent()  # ti.root\nblk2.parent()  # blk1\nblk3.parent()  # blk2\nblk3.parent(1) # blk2\nblk3.parent(2) # blk1\nblk3.parent(3) # ti.root\nblk3.parent(4) # None\n")])])]),a("p",[e._v(":::")]),e._v(" "),a("h2",{attrs:{id:"node-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-types"}},[e._v("#")]),e._v(" Node types")]),e._v(" "),a("p",[e._v("::: {.function}\nsnode.dense(indices, shape)")]),e._v(" "),a("p",[e._v("parameter snode")]),e._v(" "),a("p",[e._v(": (SNode) parent node where the child is derived from")]),e._v(" "),a("p",[e._v("parameter indices")]),e._v(" "),a("p",[e._v(": (Index or Indices) indices used for this node")]),e._v(" "),a("p",[e._v("parameter shape")]),e._v(" "),a("p",[e._v(": (scalar or tuple) shape of the field")]),e._v(" "),a("p",[e._v("return")]),e._v(" "),a("p",[e._v(": (SNode) the derived child node")]),e._v(" "),a("p",[e._v("The following code places a 1-D field of size "),a("code",[e._v("3")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("x = ti.field(dtype=ti.i32)\nti.root.dense(ti.i, 3).place(x)\n")])])]),a("p",[e._v("The following code places a 2-D field of shape "),a("code",[e._v("(3, 4)")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("x = ti.field(dtype=ti.i32)\nti.root.dense(ti.ij, (3, 4)).place(x)\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("If "),a("code",[e._v("shape")]),e._v(" is a scalar and there are multiple indices, then "),a("code",[e._v("shape")]),e._v(" will\nbe automatically expanded to fit the number of indices. For example,")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("snode.dense(ti.ijk, 3)\n")])])]),a("p",[e._v("is equivalent to")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("snode.dense(ti.ijk, (3, 3, 3))\n")])])])]),e._v(" "),a("p",[e._v(":::")]),e._v(" "),a("p",[e._v("::: {.function}\nsnode.dynamic(index, size, chunk_size = None)")]),e._v(" "),a("p",[e._v("parameter snode")]),e._v(" "),a("p",[e._v(": (SNode) parent node where the child is derived from")]),e._v(" "),a("p",[e._v("parameter index")]),e._v(" "),a("p",[e._v(": (Index) the "),a("code",[e._v("dynamic")]),e._v(" node indices")]),e._v(" "),a("p",[e._v("parameter size")]),e._v(" "),a("p",[e._v(": (scalar) the maximum size of the dynamic node")]),e._v(" "),a("p",[e._v("parameter chunk_size")]),e._v(" "),a("p",[e._v(": (optional, scalar) the number of elements in each dynamic memory\nallocation chunk")]),e._v(" "),a("p",[e._v("return")]),e._v(" "),a("p",[e._v(": (SNode) the derived child node")]),e._v(" "),a("p",[a("code",[e._v("dynamic")]),e._v(" nodes acts like "),a("code",[e._v("std::vector")]),e._v(" in C++ or "),a("code",[e._v("list")]),e._v(" in Python.\nTaichi's dynamic memory allocation system allocates its memory on the\nfly.")]),e._v(" "),a("p",[e._v("The following places a 1-D dynamic field of maximum size "),a("code",[e._v("16")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("ti.root.dynamic(ti.i, 16).place(x)\n")])])]),a("p",[e._v(":::")]),e._v(" "),a("p",[e._v("::: {.function}\nsnode.bitmasked\n:::")]),e._v(" "),a("p",[e._v("::: {.function}\nsnode.pointer\n:::")]),e._v(" "),a("p",[e._v("::: {.function}\nsnode.hash")]),e._v(" "),a("p",[e._v("TODO: add descriptions here\n:::")]),e._v(" "),a("h2",{attrs:{id:"working-with-dynamic-snodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-dynamic-snodes"}},[e._v("#")]),e._v(" Working with "),a("code",[e._v("dynamic")]),e._v(" SNodes")]),e._v(" "),a("p",[e._v("::: {.function}\nti.length(snode, indices)")]),e._v(" "),a("p",[e._v("parameter snode")]),e._v(" "),a("p",[e._v(": (SNode, dynamic)")]),e._v(" "),a("p",[e._v("parameter indices")]),e._v(" "),a("p",[e._v(": (scalar or tuple of scalars) the "),a("code",[e._v("dynamic")]),e._v(" node indices")]),e._v(" "),a("p",[e._v("return")]),e._v(" "),a("p",[e._v(": (int32) the current size of the dynamic node\n:::")]),e._v(" "),a("p",[e._v("::: {.function}\nti.append(snode, indices, val)")]),e._v(" "),a("p",[e._v("parameter snode")]),e._v(" "),a("p",[e._v(": (SNode, dynamic)")]),e._v(" "),a("p",[e._v("parameter indices")]),e._v(" "),a("p",[e._v(": (scalar or tuple of scalars) the "),a("code",[e._v("dynamic")]),e._v(" node indices")]),e._v(" "),a("p",[e._v("parameter val")]),e._v(" "),a("p",[e._v(": (depends on SNode data type) value to store")]),e._v(" "),a("p",[e._v("return")]),e._v(" "),a("p",[e._v(": (int32) the size of the dynamic node, before appending")]),e._v(" "),a("p",[e._v("Inserts "),a("code",[e._v("val")]),e._v(" into the "),a("code",[e._v("dynamic")]),e._v(" node with indices "),a("code",[e._v("indices")]),e._v(".\n:::")]),e._v(" "),a("h2",{attrs:{id:"taichi-fields-like-powers-of-two"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#taichi-fields-like-powers-of-two"}},[e._v("#")]),e._v(" Taichi fields like powers of two")]),e._v(" "),a("p",[e._v("Non-power-of-two field dimensions are promoted into powers of two and\nthus these fields will occupy more virtual address space. For example, a\n(dense) field of size "),a("code",[e._v("(18, 65)")]),e._v(" will be materialized as "),a("code",[e._v("(32, 128)")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"indices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indices"}},[e._v("#")]),e._v(" Indices")]),e._v(" "),a("p",[e._v("::: {.attribute}\nti.i\n:::")]),e._v(" "),a("p",[e._v("::: {.attribute}\nti.j\n:::")]),e._v(" "),a("p",[e._v("::: {.attribute}\nti.k\n:::")]),e._v(" "),a("p",[e._v("::: {.attribute}\nti.ij\n:::")]),e._v(" "),a("p",[e._v("::: {.attribute}\nti.ji\n:::")]),e._v(" "),a("p",[e._v("::: {.attribute}\nti.jk\n:::")]),e._v(" "),a("p",[e._v("::: {.attribute}\nti.kj\n:::")]),e._v(" "),a("p",[e._v("::: {.attribute}\nti.ik\n:::")]),e._v(" "),a("p",[e._v("::: {.attribute}\nti.ki\n:::")]),e._v(" "),a("p",[e._v("::: {.attribute}\nti.ijk\n:::")]),e._v(" "),a("p",[e._v("::: {.attribute}\nti.ijkl\n:::")]),e._v(" "),a("p",[e._v("::: {.function}\nti.indices(a, b, ...)\n:::")]),e._v(" "),a("p",[e._v("(TODO)")])])}),[],!1,null,null,null);t.default=i.exports}}]);