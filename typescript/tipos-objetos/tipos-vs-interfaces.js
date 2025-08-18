var catalog = {
    postagePrice: 20,
    address: 'Rua das Flores, 123',
};
function updateRunGoal(run) {
    console.log("\n    Miles left:       ".concat(50 - run.left, "\n    Percent of goal:  ").concat(run.miles / 50, "% complete\n  "));
}
updateRunGoal({
    miles: 5,
    left: 10,
});
