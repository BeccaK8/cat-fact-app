function show(req, res) {
    const CAT_ROOT = 'https://catfact.ninja/fact';

    fetch(CAT_ROOT)
        .then(res => res.json())
        .then(catFact => {
            res.render('cats/fact', { catFact, title: 'Enjoy this Cat Fact!' })
        });
}

function showMany(req, res) {
    const CAT_ROOT = 'https://catfact.ninja/facts';

    fetch(CAT_ROOT)
        .then(res => res.json())
        .then(catFacts => {
            console.log(catFacts);
            res.render('cats/manyfacts', { catFacts: catFacts.data, title: 'Enjoy these Cat Facts!' })
        });
}


module.exports = { 
    show,
    showMany
};