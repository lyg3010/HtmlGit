$(document).ready(function () {
    //Adding field level help text 
    $("head").append("<link>");
    var css = $("head").children(":last");
    css.attr({
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    });

    $('.description').each(function () {
        var text = $(this).text();
        $(this).hide();
        $(this).next().children(":last-child").after('<span title="' + text + '" class="fa fa-question-circle-o" style="font-size:15px;margin-left:5px;margin-top:2px"></span> ');
    });
    $('.fa').tooltip();

    $("#ccl1007_havecv_label").parent().attr('class', 'info required');
    //other
    if ($("#ccl1007_relevantsector").val() != "890240002") {
        $("#ccl1007_sectorother_label").parent().parent().hide();
    }

    $('#ccl1007_relevantsector').on('change', function () {
        if ($("#ccl1007_relevantsector").val() != "890240002") {
            $("#ccl1007_sectorother_label").parent().parent().hide();
        }
        else {
            $("#ccl1007_sectorother_label").parent().parent().show();
        }
    });

    $("#ccl1007_havecv_label").parent().parent().parent().after('<tr id="uploadtr"> <td colspan="2" rowspan="1" class="clearfix cell"><div class="info"><label>Please Upload your CV</label></div><div class="control"> <div class="modal fade" id="CrimsonModal"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <button aria-label="Close" class="form-close" data-dismiss="modal" tabindex="0" title="Close" type="button"> <span aria-hidden="true">×</span> <span class="sr-only">Close</span> </button> <h1 class="modal-title" title="Create"> <span class="fa fa-pencil-square-o" aria-hidden="true" data-original-title="" title=""></span> Create</h1> </div> <div class="modal-body"><div style="border-width: 0px;width: 100%;height: 543px;"><div id="CrimsonLoading" class="form-loading" style=""> <span class="fa fa-spinner fa-spin fa-4x" aria-hidden="true" data-original-title="" title=""></span> </div> <iframe id="CrimsonIframe" style="display: none;border-width: 0px;width: 100%;height: 543px;"></iframe> </div> </div> </div> </div> </div> <a href="#" class="btn btn-primary action create-action" title="Create" id="UploadButton">Upload Document</a> </div></td> <td class="cell zero-cell"></td> </tr>');
    $("#UploadButton").click(function () {
        var directurl = "https://crimsondev.microsoftcrmportals.com/_portal/modal-form-template-path/7b138792-1090-45b6-9241-8f8d96d8c372?entityformid=f5127780-a296-e711-8103-70106faa6a31&languagecode=1033&refentity=ccl1000_application";
        directurl += "&refid=" + getUrlParam("id");
        directurl += "&refrel=ccl1007_ccl1007_applicationdocument_ccl1000_appli";
        directurl += "&doctype=b56eafa4-4e9d-e711-8103-70106faaf8c1";//CV
        $("#CrimsonIframe").attr("src", directurl);
        var datapage = "/_portal/modal-form-template-path/7b138792-1090-45b6-9241-8f8d96d8c372";
        $("#CrimsonIframe").attr("data-page", datapage);
        //$('#CrimsonModal').modal({
        //   show: true,
        //   backdrop: 'static'
        // });
        $('#CrimsonModal').modal("show");
    });

    //do you have a cv
    if ($('input[name="ctl00$ContentContainer$MainContent$EntityFormControl$EntityFormControl_EntityFormView$ccl1007_havecv"]:checked').val() == 0) {
        $("#uploadtr").hide();
    }
    else {
        $("#uploadtr").show();
    }
    $("#ccl1007_havecv_0,#ccl1007_havecv_1").click(function () {
        if ($(this).val() == 0) {
            $("#uploadtr").hide();
        }
        if ($(this).val() == 1) {
            $("#uploadtr").show();
        }
    });

    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.parent.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
});
