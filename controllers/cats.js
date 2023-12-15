function show(req, res) {
    const CAT_ROOT = 'https://catfact.ninja/fact';

    fetch(CAT_ROOT)
        .then(res => res.json())
        .then(catFact => {
            console.log(catFact);
            res.render('cats/fact', { catFact })
        });
}

module.exports = { 
    show
};