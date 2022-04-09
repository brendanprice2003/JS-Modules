const log = console.log.bind(console);

const parseDate = (date, inputFormat, targetFormat) => {

    var en='',
        c=0;

    if (inputFormat === 'mysql') {
        for (var b of targetFormat.split(' ')) {
            b === 'D' ? (en+= `${c>0?'/':''}${date.split('-')[2].split(' ')[0]}`, c++) : 
                ( b === 'M' ? (en+= `${c>0?'/':''}${date.split('-')[1]}`, c++) : 
                    ( b === 'Y' ? (en+= `${c>0?'/':''}${date.split('-')[0]}`, c++) : null ) 
                );
        };
    };
    
    if (inputFormat === 'commonjs') {

        log(date.toLocaleDateString('en-US'));
    };

    return en;
};

export {parseDate};

//  J, M, Y   -   7 Apr 2022
//  Y, M, D   -   2022-04-07
