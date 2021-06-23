(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{500:function(e,_,v){"use strict";v.r(_);var t=v(20),a=Object(t.a)({},(function(){var e=this,_=e.$createElement,v=e._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"版本管理与发布"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#版本管理与发布"}},[e._v("#")]),e._v(" 版本管理与发布")]),e._v(" "),v("h2",{attrs:{id:"_1-0-之前的版本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-之前的版本"}},[e._v("#")]),e._v(" 1.0 之前的版本")]),e._v(" "),v("p",[e._v("Taichi 遵循 "),v("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Semantic Versioning 2.0.0"),v("OutboundLink")],1),e._v(" 的标准。")]),e._v(" "),v("p",[e._v("目前 Taichi 还处在 1.0.0 版本以下的迭代，我们使用次版本变更（例如，"),v("code",[e._v("0.6.17->0.7.0")]),e._v("）来表示 API 的改版，使用补丁版本变更（例如，"),v("code",[e._v("0.6.9->0.6.10")]),e._v("）来代表向后兼容的变化。")]),e._v(" "),v("h2",{attrs:{id:"工作流-发布新版本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#工作流-发布新版本"}},[e._v("#")]),e._v(" 工作流：发布新版本")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("在 "),v("a",{attrs:{href:"http://f11.csail.mit.edu:8080/job/taichi/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jenkins"),v("OutboundLink")],1),e._v(" 上触发 Linux 下的构建，以查看 CUDA 是否通过了所有测试。 请注意，我们仅用 Jenkins 进行 CUDA 构建测试。 （整个过程可能需要半个小时。）")])]),e._v(" "),v("li",[v("p",[e._v("请克隆 "),v("code",[e._v("master")]),e._v(" 分支的最新一次提交，并为提出 PR 新建一个协助分支。")]),e._v(" "),v("ul",[v("li",[e._v("更新 "),v("code",[e._v("CMakeLists.txt")]),e._v(" 开头的 Taichi 版本号。 例如，将 "),v("code",[e._v("SET(TI_VERSION_PATCH 9)")]),e._v(" 改为 "),v("code",[e._v("SET(TI_VERSION_PATCH 10)")]),e._v(" 以进行补丁发布。")]),e._v(" "),v("li",[e._v('提交说明的格式应该为 "[release] vX.Y.Z"，例如 "[release] v0.6.10"。')]),e._v(" "),v("li",[e._v("你应该可以在这次提交中看到有两处更改：一处在 "),v("code",[e._v("CMakeLists.txt")]),e._v("，另一处在 "),v("code",[e._v("docs/version")]),e._v("。")]),e._v(" "),v("li",[e._v("执行 "),v("code",[e._v("ti changelog")]),e._v(" 并保存其输出。 你将会在稍后用到它。")])])]),e._v(" "),v("li",[v("p",[e._v('从你刚刚创建的分支发起一个 PR ，PR 的标题应该为 "[release] vX.Y.Z"。')]),e._v(" "),v("ul",[v("li",[e._v("使用你在上一步保存的 "),v("code",[e._v("ti changelog")]),e._v(" 输出，用它作为 PR 的描述内容。")]),e._v(" "),v("li",[e._v("等待所有检查和构建工具完成。 (这一步可能需要花费两个小时)。")])])]),e._v(" "),v("li",[v("p",[e._v('使用 "Squash and merge" 压缩合并 PR。')])]),e._v(" "),v("li",[v("p",[e._v("再次触发 Jenkins 上的 Linux 构建，以便将 Linux 包上传到 PyPI。")])]),e._v(" "),v("li",[v("p",[e._v("等待所有构建工具完成工作。 这一步将会为 OS X 和 Windows 上传 PyPI 包。 你可能需要等待两个小时。")])]),e._v(" "),v("li",[v("p",[e._v("更新 "),v("code",[e._v("stable")]),e._v(" 分支，使该分支的头(head) 指向你在 "),v("code",[e._v("master")]),e._v(" 上刚发布的提交。")])]),e._v(" "),v("li",[v("p",[e._v("起草新版本"),v("a",{attrs:{href:"https://github.com/taichi-dev/taichi/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("(在这里进入)"),v("OutboundLink")],1),e._v("：")]),e._v(" "),v("ul",[v("li",[e._v('标题格式应该为 "vX.Y.Z"。')]),e._v(" "),v("li",[e._v('标签格式应该为 "vX.Y.Z"。')]),e._v(" "),v("li",[e._v("目标(Target) 应该为 “recent commit” -> release commit。")]),e._v(" "),v("li",[e._v("发布描述应该从提交时的 PR 描述中复制粘贴过来。")]),e._v(" "),v("li",[e._v('点击 "Publish release" 按钮。')])])])]),e._v(" "),v("h2",{attrs:{id:"发布周期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#发布周期"}},[e._v("#")]),e._v(" 发布周期")]),e._v(" "),v("p",[e._v("目前 Taichi 每周会发布两次新版本:")]),e._v(" "),v("ul",[v("li",[e._v("第一次发布日期在周三。")]),e._v(" "),v("li",[e._v("第二次发布日期在周六。")])]),e._v(" "),v("p",[e._v("另外，如果有任何 Bug 需要被紧急修复，可能会额外发布补丁。")])])}),[],!1,null,null,null);_.default=a.exports}}]);