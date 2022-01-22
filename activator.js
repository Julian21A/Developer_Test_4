
function addRow() {
    name = $("#first_name").val();
    last_name = $("#last_name").val();
    doc_id = $("#d_id").val();
    $.ajax({
        url: "AddFunc.php",
        method: "GET",
        async: false,
        data: {name: name,
                last_name:last_name,
                doc_id:doc_id},
        dataType: "json",
        success: function(data) {
            $('#tbdData').append(
                '<tr>' +
                '<td>' + data.id + '</td>' +
                '<td>' + data.values['name'] + '</td>' +
                '<td>' + data.values['last_name'] + '</td>' +
                '<td>' + data.values['document_id'] + '</td>' +
                + '</tr>');
        }
    });
}

function updRow() {
    name = $("#first_name").val();
    last_name = $("#last_name").val();
    doc_id = $("#d_id").val();
    row_id = $("#row").val();
    $.ajax({
        url: "UpdFunc.php",
        method: "GET",
        async: false,
        data: {name: name,
            last_name:last_name,
            doc_id:doc_id,
            row_id:row_id},
        dataType: "json",
        success: function(data) {
            $('#tbdData').append(
                '<td>' + data.id + '</td>' +
                '<td>' + data.values['name'] + '</td>' +
                '<td>' + data.values['last_name'] + '</td>' +
                '<td>' + data.values['document_id'] + '</td>' +
                + '</tr>');
        }
    });
}

function delRow(){
    row_id = $("#row").val();
    $.ajax({
        url: "DelFunc.php",
        method: "GET",
        async: false,
        data: {row_id:row_id},
        dataType: "json",
        success: function() {
            alert("Delete")
        }
    });
}

function selRow(){
    row_id= $("#row").val();
    $.ajax({
        url: "SelFunc.php",
        method: "GET",
        async: false,
        data: {row_id:row_id},
        dataType: "json",
        success: function(data) {
            alert(data.id+' '+data.values['name']+' '+data.values['last_name']+' '+data.values['document_id'])
        }
    });
}

function save(){
    $.ajax({
        url: "PubFunc.php",
        method: "GET",
        async: false,
        dataType: "json",
        success: function(data){
            alert("Saved Changes")
        }
    });
}

function clear(){
    $.ajax({
        url: "Clear.php",
        method: "GET",
        async: false,
        dataType: "json",
        success: function(data){
            alert("Clear")
        }
    });
}

