var loan_table = document.getElementById("TABLE_DATA_loanList");
if (loan_table) {
    var slip_name = "Ricevuta di Prestito";
    //var button_name = "Stampa la ricevuta";
    var institution_name = "Università di Pisa";
    var institution_logo = "https://sbart-unipi.alma.exlibrisgroup.com/infra/branding/logo/logo-email.png?institution=3298&amp;version=1552293706210?version=March2019";
    //var button_css = "background-color:red; color:white; height: 32px; padding: 6px 12px 6px 12px; border: 1px solid transparent; border-radius:4px";
    var body_css = "font-family: Arial, Helvetica, sans-serif;";
    var table_css = "border-collapse: collapse;";
    var institution_css = "order: 0; font-size: medium;";
    var library_css = "order: 1; font-size: medium;";
    var title_css = "order: 2; font-size: large;";
    var user_css = "order: 3; font-size: small; font-weight:bold;";
    var loans_css = "order: 4; padding-top: 20px;";
    var signature_css = "order: 5; padding-top:50px;";
    var date_format = "it-IT";
    var signature = "Firma _________________________";
    //var print_now = true;

    var user_name = document.getElementById("pageBeanfullPatronName").innerHTML;    
    var user_id = document.getElementById("pageBeanuserIDisplay");    
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
                        var loan_text = header[0];
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
            
            var css_style = "body {"+body_css+"} table {"+table_css+"} #slip_flex { display: flex; flex-direction: column;} #slip_institution {"+institution_css+"} #slip_library {"+library_css+"} #slip_title {"+title_css+"} #slip_user {"+user_css+"} #slip_loans_table {"+loans_css+"} #slip_signature {"+signature_css+"}";

            var header_html ="<html><head><meta charset='UTF-8';><style>"+css_style+"</style></head><body><div id='slip_flex'>"; 

            var html_slip = header_html+"<div id='slip_institution'><div id='slip_logo'><img src='"+institution_logo_link+"'/></div>"+institution_name+"</div><div id='slip_library'>"+library+"</div><div id='slip_title'>"+slip_name+"</div><div id='slip_user'>"+user_name+" ("+user_id+")</div><div id='slip_loans_table'>"+loan_list_table+"</div><div id='slip_signature'>"+data+"&nbsp;&nbsp;&nbsp;&nbsp;"+firma+"</div></div></body></html>";
            //var button_exists = document.getElementById("alma_print_slip");
            //if (!button_exists) {
            var html_div = document.createElement('div');
            html_div.id = "alma_slip_hidden";
            html_div.style.display = "none";
            html_div.innerHTML = html_slip;
            loan_table.appendChild(html_div);
                
            var call_javascript = "var html_slip = document.getElementById('alma_slip_hidden').innerHTML; slip = window.open('', '_blank','toolbar=no,scrollbars=no,resizable=yes,titlebar=no,menubar=no,top=300,left=500,width=500,height=600'); slip.document.write(html_slip); slip.document.close();";
                
               //if (print_now) call_javascript += " slip.print(); slip.close();";
                
                //var print_button = " <button id=\"alma_print_slip\" onclick=\""+call_javascript+"\" style=\""+button_style+"\"> <strong>"+button_name+"</strong> </button>"; 

                //var button_div = document.getElementById('PAGE_BUTTONS_checkoutpatronworkspacedone');
                //button_div.insertAdjacentHTML('afterend', print_button);
    //}
           var html_slip = document.getElementById('alma_slip_hidden').innerHTML; 
           slip = window.open('', '_blank','toolbar=no,scrollbars=no,resizable=yes,titlebar=no,menubar=no,top=300,left=500,width=500,height=600'); slip.document.write(html_slip); 
           slip.document.close();
}
