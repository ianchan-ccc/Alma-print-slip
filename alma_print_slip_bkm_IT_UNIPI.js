var loan_table = document.getElementById("TABLE_DATA_loanList");
if (loan_table) {
    var slip_name = "Ricevuta di Prestito";
    var institution_name = "Università di Pisa";
    var institution_logo_link = "https://sbart-unipi.alma.exlibrisgroup.com/infra/branding/logo/logo-email.png?institution=3298&amp;version=1552293706210?version=March2019";
    var body_css = "font-family: Arial, Helvetica, sans-serif;";
    var table_css = "border-collapse: collapse;";
    var institution_css = "font-size: medium;";
    var library_css = "font-size: medium;";
    var title_css = "font-size: large;";
    var user_css = "font-size: small; font-weight:bold;";
    var loans_css = "padding-top: 20px;";
    var signature_css = "padding-top:50px;";
    var date_format = "it-IT";
    var signature = "Firma _________________________";
    var d = new Date();
    var today = d.toLocaleDateString(date_format);
    var date_slip = "Date "+today;
    var user_name = document.getElementById("pageBeanfullPatronName").innerHTML;    
    var user_id = document.getElementById("pageBeanuserIDisplay").value;    
    var library = document.getElementById("locationText").innerHTML;    
    var rowLength = loan_table.rows.length;
    var loan_list = "";
    for (var i = 0; i < rowLength; i++) {
         var loan_cells = loan_table.rows.item(i).cells;
         var cellLength = loan_cells.length;
         for (var j = 1; j < cellLength; j++) {
              if (i == 0) {     
              var loan_text = loan_cells.item(j);
              var header = loan_text.getElementsByClassName("sort fontReg");
              if (header.length > 0) {
                 var loan_text = header[0].value;
                 } else {
                 var loan_text =  loan_cells.item(j).innerText;            
                 }
              } else {
                 var loan_text = loan_cells.item(j).innerText;
                }
              if (loan_text.length > 0) {
                loan_list += "|" + loan_text + "|";
               }
                    
            }
          loan_list += "\n";
          }
    var loan_list_table = loan_list.replace(/\|\|/g, "</td><td>");
    loan_list_table = loan_list_table.replace(/\|\n/g, "</td></tr>");
    loan_list_table = loan_list_table.replace(/\|/g, "<tr><td>");
    loan_list_table = loan_list_table.replace(/CET/g, "");
    loan_list_table = loan_list_table.replace(/\n/g, "");
    loan_list_table = "<table border=1>" + loan_list_table + "</table>";
    var css_style = "body {"+body_css+"} table {"+table_css+"} #slip_institution {"+institution_css+"} #slip_library {"+library_css+"} #slip_title {"+title_css+"} #slip_user {"+user_css+"} #slip_loans_table {"+loans_css+"} #slip_signature {"+signature_css+"}";
    var header_html ="<!DOCTYPE HTML><html><head><meta charset='UTF-8'><style>"+css_style+"</style></head><body><div id='slip'>"; 
    var html_slip = "<div id='slip_institution'><div id='slip_logo'><img src='"+institution_logo_link+"'/></div>"+institution_name+"</div><div id='slip_library'>"+library+"</div><div id='slip_title'>"+slip_name+"</div><div id='slip_user'>"+user_name+" ("+user_id+")</div><div id='slip_loans_table'>"+loan_list_table+"</div><div id='slip_signature'>"+date_slip+"&nbsp;&nbsp;&nbsp;&nbsp;"+signature+"</div></div>";
    var html_div = document.createElement('div');
    html_div.id = "alma_slip_hidden";
    html_div.style.display = "none";
    html_div.innerHTML = html_slip;
    loan_table.appendChild(html_div);
    html_slip = document.getElementById('alma_slip_hidden').innerHTML; 
    var slip = window.open('', '_blank','toolbar=no,resizable=yes,titlebar=no,menubar=no,top=300,left=500,width=500,height=600'); 
    slip.document.write(header_html+html_slip+'</body></html>'); 
    slip.document.close();
    slip.print(); 
    slip.close();
 }
