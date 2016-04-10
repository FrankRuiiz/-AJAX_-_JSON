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
                times = data;
                console.log("times is" + times);
            })
            .fail(function(){
                $('#event').html('Sorry! The information could not be loaded at the moment');
            })
    }

    loadData();


    // Click on event to load an activity
    $('#content').on('click', '#event a', function(e){
        e.preventDefault(); // Prevent loading page
        var activity = this.id;
        console.log(activity + "clicked");

        var newContent = "";
        for(var i=0; i<times[activity].length; i++) {
            newContent += '<li><a href="descriptions.html#';
            newContent += times[activity][i].type.replace(/ /g, '-') + '">';
            newContent += times[activity][i].type + '</a></li>'
        }

        $('#sessions').html('<ul>' + newContent + '</ul>');

        $('#event a.current').removeClass('current');
        $(this).addClass('current');

        $('#details').text('');  //Clear third column
    });

    // Click on session to load a description
    $('#content').on('click', '#sessions li a', function(e) {
        e.preventDefault(e);
        var fragment = this.href;  //holds link to the session, collected from the href attr of the link that was clicked

        fragment = fragment.replace('#', ' #');
        $('#details').load(fragment);

        $('#sessions a.current').removeClass('current');
        $(this).addClass('current');
    });
 });