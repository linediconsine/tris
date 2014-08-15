/**
 * Created by ninja on 02/08/14.
 */

/* main code */
function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

function fill(_map,_value) {
    for (var y = 0; y < _map.length; y++) {
        for (var x = 0; x < _map[0].length; x++) {
            _map[y][x] = _value;
        }
    }
    return _map;
}

function printMap(_map) {
    for (var y = 0; y < _map.length; y++) {
        for (var x = 0; x < _map[0].length; x++) {
            console.log(_map[y][x]);
        }
    }
}


function printMap(_map) {
    for (var y = 0; y < _map.length; y++) {
        for (var x = 0; x < _map[0].length; x++) {
            console.log(_map[y][x]);
        }
    }
}


function checkMapTRIS(_map) {
    __empty = 0;
    for (var y = 0; y < _map.length; y++) {
        for (var x = 0; x < _map[0].length; x++) {
            mySing = _map[y][x];
            if (mySing != 'undefined' && mySing != '0') {
                if(x == 0){
                    if(mySing == _map[y][x + 1] && mySing == _map[y][x + 2] ){
                        return mySing;
                    }
                }
                if(y == 0){
                    if(mySing == _map[y + 1 ][x] && mySing == _map[y + 2][x] ){
                        return mySing;
                    }
                }
                if(y == 0 && x == 0){
                    if(mySing == _map[y + 1 ][x + 1] && mySing == _map[y + 2][x + 2] ){
                        return mySing;
                    }
                }

                if(y == 2 && x == 2){
                    if(mySing == _map[y - 1 ][x - 1] && mySing == _map[y - 2][x - 2] ){
                        return mySing;
                    }
                }

            }else{
                __empty = __empty + 1;
            }


        }
    }
    if(__empty == 0){
        return 'nobody';
    }
    return false;
}

