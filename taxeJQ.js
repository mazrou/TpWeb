$(document).ready(function () {

    let htlements = $(".prix_ht");
    let taxElements = $(".prix_t");
    let ttcElements = $(".prix_ttc");
    for (let j = 0; j <= htlements.length - 1; j++) {
        let taxValue = parseFloat(taxElements[j].innerHTML) * parseFloat(htlements[j].innerHTML) / 100;
        ttcElements[j].innerHTML = taxValue;
    }

    $(".btn").click(function () {
        let formation = $("#formation").val();
        if (formation != " " && formation != "" ) {
            let item = $("<li> <a> " + formation + "</a> </li>");
            $("#menu").append(item);
        }
    });
    $("#button").click(function () {
        
       
            let item = $("<li> <a>  Tet</a> </li>");
            $("#menu").append(item);
        
    });    
});
