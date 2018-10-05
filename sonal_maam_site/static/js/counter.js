function incrementCounter(id){
    $(`#count-${id}`).text(parseInt($(`#count-${id}`).text()) + 1);
    return true;
}
function decrementCounter(id){
    $(`#count-${id}`).text(parseInt($(`#count-${id}`).text()) - 1);
    if (parseInt($(`#count-${id}`).text()) < 0){
        $(`#count-${id}`).text(1);
    }
    return true;
}