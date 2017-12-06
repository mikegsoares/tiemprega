  //Variáveis globais
  var _row = null;

  // Próximo ID para adicionar um novo cargo
  var _nextId = 1;
 
  // ID do cargo que está em edição
  var _activeId = 0;

  // Adiciona empregos na <table>
  function jobAdd() {
    // Primeiro verifica se existe um tbody, para adicionar um caso não exista
    if ($("#jobTable tbody").length == 0) {
      $("#jobTable").append("<tbody></tbody>");
    }
      
    // Append (junta) uma nova linha na tabela
    $("#jobTable tbody").append(
      "<tr>" +
        "<td>Assistente de Mudança</td>" +
        "<td>20/11/2017</td>" +
        "<td>Granero</td>" +
        "<td>" +
        "<button type='button' " +
        "onclick='jobUpdate(this);' " +
        "class='btn btn-default'>" +
                "<i class='fa fa-pencil-square-o' aria-hidden='true'></i>" +
          "</button>" +
        "</td>" +
        "<td>" +
          "<button type='button' " +
                "onclick='jobDelete(this);' " +
                "class='btn btn-default'>" +
                "<i class='fa fa-ban' aria-hidden='true'></i>" +
          "</button>" +
        "</td>" +
      "</tr>"
      );
    $("#jobTable tbody").append(
      "<tr>" +
        "<td>Motorista</td>" +
        "<td>20/11/2017</td>" +
        "<td>Santa Casa de Misericórdia</td>" +
        "<td>" +
          "<button type='button' " +
                "onclick='jobUpdate(this);' " +
                "class='btn btn-default'>" +
                "<i class='fa fa-pencil-square-o' aria-hidden='true'></i>" +
          "</button>" +
        "</td>" +
        "<td>" +
          "<button type='button' " +
                "onclick='jobDelete(this);' " +
                "class='btn btn-default'>" +
                "<i class='fa fa-ban' aria-hidden='true'></i>" +
          "</button>" +
        "</td>" +
      "</tr>"
      );
  }

function jobAddToTable() {
  // Primeiro verifica se existe um tbody, para adicionar um caso não exista
  if ($("#jobTable tbody").length == 0) {
    $("#jobTable").append("<tbody></tbody>");
  }
      
  // Append (junta) uma nova linha na tabela
  $("#jobTable tbody").append(
    jobBuildTableRow(_nextId));
  // Incrementa o ID para utilizar
  _nextId += 1;
}

function jobBuildTableRow(id) {
  var ret =
  "<tr>" +
    "<td>" + $("#job_title").val() + "</td>" +
    "<td>" + $("#job_introdate").val() + "</td>" +
    "<td>" + $("#job_company").val() + "</td>" +
     "<td>" +
      "<button type='button' " +
              "onclick='jobDisplay(this);' " +
              "class='btn btn-default' " +
              "data-id='" + id + "'>" +
              "<i class='fa fa-pencil-square-o' aria-hidden='true'></i>" +
      "</button>" +
    "</td>" +
    "<td>" +
      "<button type='button' " +
              "onclick='jobDelete(this);' " +
              "class='btn btn-default' " +
              "data-id='" + id + "'>" +
              "<i class='fa fa-ban' aria-hidden='true'></i>" +
      "</button>" +
    "</td>" +
  "</tr>"
      
  return ret;
}

function jobDisplay(ctl) {
  var row = $(ctl).parents("tr");
  var cols = row.children("td");
  _activeId = $($(cols[0]).
              children("button")[0]).data("id");
  $("#job_title").val($(cols[0]).text());
  $("#job_introdate").val($(cols[1]).text());
  $("#job_company").val($(cols[2]).text());
  // Mudar o texto do botão de atualizar
  $("#updateButton").text("Atualizar");
}

function jobUpdateInTable(ctl){
  // Adiciona a linha modificada na tabela
  $(ctl).parents("tr").after(jobBuildTableRow());

  // Remover a linha antiga
  jobDelete();

  // Limpar o formulário
  formClear();

  // Mudar o texto do Botão
  $("#updateButton").text("Adicionar");
}

function jobUpdate() {
  if ($("#updateButton").text() == "Atualizar") {
    jobUpdateInTable();
  }
  else {
    jobAddToTable();
  }
  // Clear form fields
  formClear();
  // Focus to product name field
  $("#job_title").focus();
}

function formClear() {
  $("#job_title").val("");
  $("#job_introdate").val("");
  $("#job_company").val("");
}

function jobDelete(ctl) {
  $(ctl).parents("tr").remove();
}