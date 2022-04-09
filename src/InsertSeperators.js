const InsertSeperators = (num) => {

    // n of 3 digit groups
    var n = Math.trunc(`${num}`.length / 3),
        ar = [],
        en;

    if (`${num}`.length % 3===0) {
        n = n-1;
    };

    for (let a=0; a<n; a++) {

        var grp = `${num}`.slice(-3);
        ar.push(grp);

        num = `${num}`.slice(0, -3);
    };

    en = `${num}`;
    for (let b=n-1; b>=0; b--) {
        en += `,${ar[b]}`;
    };
    return en;
};


export {
    InsertSeperators
}