var status = '';
var mappa = createArray(3,3);

function initReady(){
    status = Math.random() > 0.5 ? 'cross' : 'circle';
    $('#tris-table').addClass(status);
    mappa = createArray(3,3);
    mappa = fill(mappa,'0');



    $('.tile').each(function( index ) {

        $(this).data('position-y',parseInt(index / 3));
        $(this).data('position-x',index % 3);
        $(this).addClass(parseInt(index / 3) + '-' + index % 3);
        $(this).removeClass('.circle').removeClass('.cross');

        console.log(parseInt(index / 3) + '-' + index % 3);



        $( "#tris-table" ).on( "click", ".tile", function() {
            if(!$('#tris-table').hasClass('game-over')){
                __x = parseInt($(this).data('position-x'));
                __y = parseInt($(this).data('position-y'));
                console.log(__x + '-' + __y);

                if(mappa[__y][__x] == 0){

                    mappa[__y][__x] = status;
                    $('.' + __y + '-' + __x).addClass(status);
                    $('#tris-table').removeClass(status);
                    status = status == 'cross' ? 'circle' : 'cross';
                    $('#tris-table').addClass(status);
                }
                __how = checkMapTRIS(mappa);

                if(__how){
                    if(__how == 'circle' ||  __how == 'cross' ){
                        $('#popup-msg').html(__how + ' WIN!!!');
                        $('#popup').removeClass('hide');
                    }else{
                        $('#popup-msg').html('COMMON LETS TRIS AGAIN!');
                        $('#popup').removeClass('hide');
                    }
                    $( "#tris-table").addClass('end-game-' + status).addClass('game-over');
                };
            }
        });




    });
};
$( "body" ).on( "click", ".newgame", function() {
    initReady();
})


initReady();




