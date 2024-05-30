import getBudgetObject from './7-getBudgetObject';

const getFullBudgetObject = (income, gdp, capita) => {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars() {
      return `$${this.income}`;
    },
    getIncomeInEuros() {
      return `${this.income} euros`;
    },
  };
  return fullBudget;
};
export default getFullBudgetObject;
