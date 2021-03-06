$(document).ready(function () {
    var PDFhtml = "";
    {% assign record_id = request.params['id'] | xml_escape %}
    {% assign StudentPlacementRrd = entities.ccl1008_pmplacement[record_id] %}
    {% if StudentPlacementRrd != null %}
    {% if StudentPlacementRrd.ccl1008_pmvacancyid != null %}
    {% assign PMVacancyRrd = entities.ccl1008_pmvacancy[StudentPlacementRrd.ccl1008_pmvacancyid.id] %}
    {% if PMVacancyRrd != null %}
    {% for note in PMVacancyRrd.notes %}
    {% if note.notetext contains 'JobDescription' %}
    {% if note.isdocument == true %}
    //If the PM Vacancy has a PDF uploaded in CRM(This note will have a default name JobDescription),append a button to the form that point to the attachment url of JobDescription PDF
    PDFhtml += '<tr> <td colspan="1" rowspan="1" class="clearfix cell form-control-cell"> <div class="info"> <label id="placementdescription_label" readonly="readonly">Placement Description</label> </div> <div class="control"> <div> <a class="btn btn-primary" href="{{note.url}}" target="_blank">Download PDF</a> </div> </div> </td> <td class="cell zero-cell"></td> </tr>';
    {% unless forloop.last %}
    PDFhtml += '<br>';
    {% endunless %}
    {% endif %}
    {% endif %}
    {% endfor -%}
    {% endif %}
    {% endif %}
    {% endif %}
    $('table[data-name="tab_3_section_1"]').children('tbody').append(PDFhtml);
});