const cats = ['Milo','Otis','Garfield']

function destructivelyAppendCat(){
    return cats.push('Ralph');
}

function destructivelyPrependCat(){
    return cats.unshift('Bob');
}

function destructivelyRemoveLastCat(){
    return cats.pop('Garfield');
}

function destructivelyRemoveFirstCat(){
    return cats.shift('Milo');
}

function appendCat(){
    const copyOfCats = [...cats, 'Broom'];
    return copyOfCats;
}

function prependCat(){
    const copyOfCats = ['Arnold', ...cats];
    return copyOfCats;
}

function removeLastCat(){
    const catList = cats.slice(0,cats.length-1);
    return catList;
}

function removeFirstCat(){
    const catsList = cats.slice(1)
    return catsList;
}