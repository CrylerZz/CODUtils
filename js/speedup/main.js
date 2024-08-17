function calcGeneric(){
    let genericInput =  $('#generic').find('input');
    let total = 0;
    $(genericInput).each(function(index){
        let value = $(genericInput[index]).val();
        let multiplier = $(genericInput[index]).data('multiplier');

        total += value * multiplier;
    })
    $('#genericResult').text(`${Math.floor(total / 24 / 60)} Days : ${Math.floor((total / 60) % 24)} Hours : ${Math.floor(total % 60)} Minutes`)
}
function calcTech(){
    let techInput =  $('#tech').find('input');
    let total = 0;
    $(techInput).each(function(index){
        let value = $(techInput[index]).val();
        let multiplier = $(techInput[index]).data('multiplier');

        total += value * multiplier;
    })
    $('#techResult').text(`${Math.floor(total / 24 / 60)} Days : ${Math.floor((total / 60) % 24)} Hours : ${Math.floor(total % 60)} Minutes`)
}

function calcTrain(){
    let trainInput =  $('#train').find('input');
    let total = 0;
    $(trainInput).each(function(index){
        let value = $(trainInput[index]).val();
        let multiplier = $(trainInput[index]).data('multiplier');

        total += value * multiplier;
    })
    $('#trainResult').text(`${Math.floor(total / 24 / 60)} Days : ${Math.floor((total / 60) % 24)} Hours : ${Math.floor(total % 60)} Minutes`)
}

let saveSpeedup = $('#save-speedup');

if(localStorage['speedups']){
    let storageSpeedUp = JSON.parse(localStorage['speedups']);
    for (const [key, value] of Object.entries(storageSpeedUp)) {
        for (const [k ,v] of Object.entries(value)) {
            $('#'+k).val(v);
        }
    }
    calcGeneric();
    calcTech();
    calcTrain();

}else{
    console.log('storageSpeedUp isnt defined')
}

let arr = {
    'generic':{},
    'tech' : {},
    'train' : {},
    'build' : {}
};

saveSpeedup.click(function(){

    let elems = $('.localData');

    elems.each(function(i){

        let elem = elems[i];
        let idParent = $(elem).attr('id');
        let arrInputs = $(elem).find('input');

        for (let v = 0; v < arrInputs.length; v++){
            let key = arrInputs[v].id;
            arr[idParent][key] = arrInputs[v].value;
        }
    })
    localStorage['speedups'] = JSON.stringify(arr);
    location.reload();
})