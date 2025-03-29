(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2374f4"],{fb24:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,size:"small",inline:!0,"label-width":"68px"}},[r("el-form-item",{attrs:{label:"资源标题",prop:"resourceTitle"}},[r("el-input",{attrs:{placeholder:"请输入资源标题",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.resourceTitle,callback:function(t){e.$set(e.queryParams,"resourceTitle",t)},expression:"queryParams.resourceTitle"}})],1),r("el-form-item",{attrs:{label:"资源类型",prop:"resourceType"}},[r("el-select",{attrs:{placeholder:"请选择资源类型",clearable:""},model:{value:e.queryParams.resourceType,callback:function(t){e.$set(e.queryParams,"resourceType",t)},expression:"queryParams.resourceType"}},e._l(e.dict.type.resource_type,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-form-item",{attrs:{label:"关键字",prop:"keyword"}},[r("el-input",{attrs:{placeholder:"请输入搜素关键字",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.keyword,callback:function(t){e.$set(e.queryParams,"keyword",t)},expression:"queryParams.keyword"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),r("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),r("el-row",{staticClass:"mb8",attrs:{gutter:10}},[r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["app:resource:add"],expression:"['app:resource:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["app:resource:edit"],expression:"['app:resource:edit']"}],attrs:{type:"success",plain:"",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:e.handleUpdate}},[e._v("修改")])],1),r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["app:resource:remove"],expression:"['app:resource:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["app:resource:export"],expression:"['app:resource:export']"}],attrs:{type:"warning",plain:"",icon:"el-icon-download",size:"mini"},on:{click:e.handleExport}},[e._v("导出")])],1),r("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.resourceList},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),r("el-table-column",{attrs:{label:"id",align:"center",prop:"id"}}),r("el-table-column",{attrs:{label:"资源标题",align:"center",prop:"resourceTitle"}}),r("el-table-column",{attrs:{label:"封面图url",align:"center",prop:"showImg",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-image",{staticStyle:{width:"160px",height:"100px"},attrs:{src:e.baseUrl+t.row.showImg,"preview-src-list":[e.baseUrl+t.row.showImg]}})]}}])}),r("el-table-column",{attrs:{label:"资源类型",align:"center",prop:"resourceType"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("dict-tag",{attrs:{options:e.dict.type.resource_type,value:t.row.resourceType}})]}}])}),r("el-table-column",{attrs:{label:"搜素关键字",align:"center",prop:"keyword"}}),r("el-table-column",{attrs:{label:"是否隐藏",align:"center",prop:"isShow"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("dict-tag",{attrs:{options:e.dict.type.sys_yes_no2,value:t.row.isShow}})]}}])}),r("el-table-column",{attrs:{label:"需要广告",align:"center",prop:"isAd"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.isAd?r("el-tag",{attrs:{type:"success"}},[e._v("免费")]):e._e(),1==t.row.isAd?r("el-tag",{attrs:{type:"info"}},[e._v("看广告")]):e._e(),2==t.row.isAd?r("el-tag",{attrs:{type:"danger"}},[e._v("积分兑换")]):e._e()]}}])}),r("el-table-column",{attrs:{label:"兑换积分",align:"center",prop:"adNumber"},scopedSlots:e._u([{key:"default",fn:function(t){return[2==t.row.isAd?r("span",[e._v(e._s(t.row.adNumber))]):r("span",[e._v("-")])]}}])}),r("el-table-column",{attrs:{label:"下载次数",align:"center",prop:"downNum"}}),r("el-table-column",{attrs:{label:"权重",align:"center",prop:"weight"}}),r("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"160px"}}),r("el-table-column",{attrs:{label:"备注",align:"center",prop:"remark"}}),r("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["app:resource:edit"],expression:"['app:resource:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(r){return e.handleUpdate(t.row)}}},[e._v("修改")]),r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["app:resource:remove"],expression:"['app:resource:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(r){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),r("el-dialog",{attrs:{title:e.title,visible:e.open,width:"50%","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"资源标题",prop:"resourceTitle"}},[r("el-input",{attrs:{placeholder:"请输入资源标题"},model:{value:e.form.resourceTitle,callback:function(t){e.$set(e.form,"resourceTitle",t)},expression:"form.resourceTitle"}})],1),r("el-form-item",{attrs:{label:"说明"}},[r("editor",{attrs:{"min-height":192},model:{value:e.form.explain,callback:function(t){e.$set(e.form,"explain",t)},expression:"form.explain"}})],1),r("el-form-item",{attrs:{label:"资源类型",prop:"resourceType"}},[r("el-select",{attrs:{placeholder:"请选择资源类型"},model:{value:e.form.resourceType,callback:function(t){e.$set(e.form,"resourceType",t)},expression:"form.resourceType"}},e._l(e.dict.type.resource_type,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:parseInt(e.value)}})})),1)],1),r("el-form-item",{attrs:{label:"搜素关键字",prop:"keyword"}},[r("el-input",{attrs:{placeholder:"请输入搜素关键字"},model:{value:e.form.keyword,callback:function(t){e.$set(e.form,"keyword",t)},expression:"form.keyword"}})],1),r("el-form-item",{attrs:{label:"封面图url",prop:"showImg"}},[r("el-input",{attrs:{placeholder:"请输入封面图url"},model:{value:e.form.showImg,callback:function(t){e.$set(e.form,"showImg",t)},expression:"form.showImg"}}),r("image-upload",{staticStyle:{"margin-top":"10px"},model:{value:e.form.showImg,callback:function(t){e.$set(e.form,"showImg",t)},expression:"form.showImg"}})],1),r("el-form-item",{attrs:{label:"是否隐藏",prop:"isShow"}},[r("el-radio-group",{model:{value:e.form.isShow,callback:function(t){e.$set(e.form,"isShow",t)},expression:"form.isShow"}},e._l(e.dict.type.sys_yes_no2,(function(t){return r("el-radio",{key:t.value,attrs:{label:parseInt(t.value)}},[e._v(e._s(t.label))])})),1)],1),r("el-form-item",{attrs:{label:"获取方式",prop:"isAd"}},[r("el-radio-group",{model:{value:e.form.isAd,callback:function(t){e.$set(e.form,"isAd",t)},expression:"form.isAd"}},[r("el-radio",{attrs:{label:0}},[e._v("免费")]),r("el-radio",{attrs:{label:1}},[e._v("看广告")]),r("el-radio",{attrs:{label:2}},[e._v("积分兑换")])],1)],1),2==e.form.isAd?r("el-form-item",{attrs:{label:"兑换积分",prop:"adNumber"}},[r("el-input",{attrs:{placeholder:"请输入需要兑换多少积分解锁"},model:{value:e.form.adNumber,callback:function(t){e.$set(e.form,"adNumber",t)},expression:"form.adNumber"}})],1):e._e(),r("el-form-item",{attrs:{label:"权重",prop:"weight"}},[r("el-input",{attrs:{placeholder:"请输入权重"},model:{value:e.form.weight,callback:function(t){e.$set(e.form,"weight",t)},expression:"form.weight"}})],1),r("el-form-item",{attrs:{label:"备注",prop:"remark"}},[r("el-input",{attrs:{placeholder:"请输入备注"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1),r("el-divider",{attrs:{"content-position":"center"}},[e._v("资源列信息")]),r("el-row",{staticClass:"mb8",attrs:{gutter:10}},[r("el-col",{attrs:{span:1.5}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAddAppResourceList}},[e._v("添加")])],1),r("el-col",{attrs:{span:1.5}},[r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:e.handleDeleteAppResourceList}},[e._v("删除")])],1)],1),r("el-table",{ref:"appResourceList",attrs:{data:e.appResourceListList,"row-class-name":e.rowAppResourceListIndex},on:{"selection-change":e.handleAppResourceListSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"50",align:"center"}}),r("el-table-column",{attrs:{label:"序号",align:"center",prop:"index",width:"50"}}),r("el-table-column",{attrs:{label:"资源名称",prop:"listName"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{attrs:{placeholder:"请输入资源名称"},model:{value:t.row.listName,callback:function(r){e.$set(t.row,"listName",r)},expression:"scope.row.listName"}})]}}])}),r("el-table-column",{attrs:{label:"资源地址",prop:"listUrl"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{attrs:{placeholder:"请输入资源地址"},model:{value:t.row.listUrl,callback:function(r){e.$set(t.row,"listUrl",r)},expression:"scope.row.listUrl"}})]}}])}),r("el-table-column",{attrs:{label:"访问密码",prop:"password"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{attrs:{placeholder:"请输入访问密码"},model:{value:t.row.password,callback:function(r){e.$set(t.row,"password",r)},expression:"scope.row.password"}})]}}])})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),r("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},l=[],o=r("5530"),s=(r("4de4"),r("d81d"),r("14d9"),r("d3b7"),r("b775"));function i(e){return Object(s["a"])({url:"/app/resource/list",method:"get",params:e})}function n(e){return Object(s["a"])({url:"/app/resource/"+e,method:"get"})}function c(e){return Object(s["a"])({url:"/app/resource",method:"post",data:e})}function u(e){return Object(s["a"])({url:"/app/resource",method:"put",data:e})}function p(e){return Object(s["a"])({url:"/app/resource/"+e,method:"delete"})}var d={name:"Resource",dicts:["resource_type","sys_yes_no2"],data:function(){return{baseUrl:"/prod-api",loading:!0,ids:[],checkedAppResourceList:[],single:!0,multiple:!0,showSearch:!0,total:0,resourceList:[],appResourceListList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,resourceTitle:null,resourceType:null,isShow:null,isAd:null,adNumber:null},form:{},rules:{resourceTitle:[{required:!0,message:"资源标题不能为空",trigger:"blur"}],showImg:[{required:!0,message:"封面图不能为空",trigger:"blur"}],resourceType:[{required:!0,message:"资源类型不能为空",trigger:"change"}],keyword:[{required:!0,message:"搜素关键字不能为空",trigger:"blur"}],isShow:[{required:!0,message:"是否隐藏不能为空",trigger:"change"}],isAd:[{required:!0,message:"需要广告不能为空",trigger:"change"}]},directory:"appimg/fengmian/"}},created:function(){this.getList()},methods:{getQiniuToken:function(){var e=this;Object(s["a"])({url:"/sys/qiniu/getUpToken",method:"get"}).then((function(t){e.yourQiniuUploadToken=t}))},getList:function(){var e=this;this.loading=!0,i(this.queryParams).then((function(t){e.resourceList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={id:null,resourceTitle:null,showImg:null,explain:null,resourceType:null,isShow:null,isAd:null,adNumber:null,delFlag:null,createBy:null,createTime:null,remark:null},this.appResourceListList=[],this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.id})),this.single=1!==e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.open=!0,this.title="添加资源"},handleUpdate:function(e){var t=this;this.reset();var r=e.id||this.ids;n(r).then((function(e){t.form=e.data,t.appResourceListList=e.data.appResourceListList,t.open=!0,t.title="修改资源"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(e.form.appResourceListList=e.appResourceListList,null!=e.form.id?u(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):c(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))},handleDelete:function(e){var t=this,r=e.id||this.ids;this.$modal.confirm('是否确认删除资源编号为"'+r+'"的数据项？').then((function(){return p(r)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},rowAppResourceListIndex:function(e){var t=e.row,r=e.rowIndex;t.index=r+1},handleAddAppResourceList:function(){var e={listName:"",listUrl:"",password:""};this.appResourceListList.push(e)},handleDeleteAppResourceList:function(){if(0==this.checkedAppResourceList.length)this.$modal.msgError("请先选择要删除的资源列数据");else{var e=this.appResourceListList,t=this.checkedAppResourceList;this.appResourceListList=e.filter((function(e){return-1==t.indexOf(e.index)}))}},handleAppResourceListSelectionChange:function(e){this.checkedAppResourceList=e.map((function(e){return e.index}))},handleExport:function(){this.download("app/resource/export",Object(o["a"])({},this.queryParams),"resource_".concat((new Date).getTime(),".xlsx"))}}},m=d,h=r("2877"),f=Object(h["a"])(m,a,l,!1,null,null,null);t["default"]=f.exports}}]);