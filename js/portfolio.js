function handleCheckboxClick(checkbox){
    if($(`.portfolio-container[data-filter='${checkbox}']`).is(":visible")){
        $(`.portfolio-container[data-filter='${checkbox}']`).hide();
    }else{
        $(`.portfolio-container[data-filter='${checkbox}']`).show();
    }
}

