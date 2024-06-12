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

function calcBuild(){
    let buildInput =  $('#build').find('input');
    let total = 0;
    $(buildInput).each(function(index){
        let value = $(buildInput[index]).val();
        let multiplier = $(buildInput[index]).data('multiplier');

        total += value * multiplier;
    })
    $('#buildResult').text(`${Math.floor(total / 24 / 60)} Days : ${Math.floor((total / 60) % 24)} Hours : ${Math.floor(total % 60)} Minutes`)
}
