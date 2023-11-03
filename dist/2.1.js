"use strict";
{
    //
    // type assertion --> tumi amar thake base bujo 
    // jokon ami base bujbo typeScript thake
    var anything = void 0;
    anything = 'Next Level Web Development Course';
    anything = true;
    anything = 23;
    anything;
    var kgToGm = function (value) {
        if (value === 'string') {
            var convertKg = parseFloat(value) * 1000;
            return "The convert value is: ".concat(convertKg);
        }
        else if (typeof value === 'number') {
            return (value * 1000);
        }
    };
    var result = kgToGm(1000);
    var result2 = kgToGm('20 kg');
    try {
    }
    catch (error) {
        console.log(error.message);
    }
    //
}
