    (function(){
        try{
            var srp_dropdown_menu_elements = document.getElementsByClassName('sortBy');
            for(var i=0; i<srp_dropdown_menu_elements.length; i++){
                var select_element = srp_dropdown_menu_elements[i].children[0];
                select_element.addEventListener("change", function(){
                    dataLayer.push({'event':'Sort By Dropdown Change'});
                });
            }
        }catch(e){}
    })();