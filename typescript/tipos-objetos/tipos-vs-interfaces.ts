type Mail = {
  postagePrice: number;
  address: string;
};

interface Mail2 {
  postagePrice: number;
  address: string;
}

let catalog: Mail = {
  postagePrice: 20,
  address: 'Rua das Flores, 123',
};

interface Run {
  miles: number;
  left: number;
}

function updateRunGoal(run: Run) {
  console.log(`
    Miles left:       ${50 - run.left}
    Percent of goal:  ${run.miles / 50}% complete
  `);
}

updateRunGoal({
  miles: 5,
  left: 10,
});
