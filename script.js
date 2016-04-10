/**
 * Created by FrankyR on 4/10/2016.
 */


$(function(){

    var times;

    $.ajax({
        beforeSend: function(xhr) {
            if(xhr.overrideMimeType) {
                xhr.overrideMimeType("application/json");
            }
        }
    });


    // Function that collects data from the JSON file
    function loadData() {
        $.getJSON('data/hsfitness.json')
            .success(function(data){
                console.log(data);
                times = data;
            })
            .fail(function(){
                $('#activity').html('Sorry! The information could not be loaded at the moment');
            })
    }

    loadData();
    
    $('#content').on('click', '#activity a', function(e){
       e.preventDefault(); // Prevent loading page 
    });
 });