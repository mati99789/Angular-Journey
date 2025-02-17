export interface Investment {
  initialInvestment: number,
  duration: number,
  annualInvestment: number,
  expectedReturn: number
}

export interface InvestmentResult {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}
