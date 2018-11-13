define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'scorecategory/index',
                    add_url: 'scorecategory/add',
                    edit_url: 'scorecategory/edit',
                    del_url: 'scorecategory/del',
                    multi_url: 'scorecategory/multi',
                    table: 'score_category',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                escape: false,
                sortName: 'weigh',
                pagination: false,
                commonSearch: false,
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Cate_id')},
                        {field: 'name', title: __('Title'), align: 'left'},
                        {field: 'category_id', title: __('category_id'), visible: false},
                        {field: 'get_cate_name.scName', title: __('Category name'), },
                        {field: 'weigh', title: __('Weigh')},
                        {field: 'status', title: __('Status'), operate: false, formatter: Table.api.formatter.status},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime, visible: false},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                $(document).on("change", "#c-category_id", function () {
                    $("#c-category_id option").removeClass("hide");
                });
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});