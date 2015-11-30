window.onload = function () {

    //  +------------------------------------------------------------------+
    //  Calc width of steppers
    //  +------------------------------------------------------------------+
    var step = "katsenkatorz-stepper-group";
    var stepHeader = document.getElementsByClassName("katsenkatorz-stepper-header");

    for (var i = 0; i < stepHeader.length; i++) {
        var tab = [];
        //Count element step in header
        for (var j = 0; j < stepHeader[i].childNodes.length; j++) {
            if (stepHeader[i].childNodes[j].className != undefined)
                if (stepHeader[i].childNodes[j].className.indexOf(step) > -1)
                    tab.push(stepHeader[i].childNodes[j]);
        }
        for (var j = 0; j < tab.length; j++){
            tab[j].style.width = (100 / tab.length) + "%";
        }

    }
};