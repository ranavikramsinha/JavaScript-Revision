function learningScope(){
    console.log('Learning var');
    console.log('x:', x);
    var x = 7;
    console.log('x:', x);

    // console.log('y:', y);
    let y = 9;
    console.log('y:', y);
}

// learningScope();

function testGlobal(){
    global = 11;
    console.log('global:', global);
    global = 33;
    console.log('global:', global);
}

// testGlobal();
// console.log('global:', global)

function testVar(){
    var pop = 55;
    console.log('pop:', pop);
    var pop = 66;
    console.log('pop:', pop);
}

testVar();