export let grantNumbers = [];
export let pssNumbers = [];
export let grantAchievement = 100;
export let pssAchievement = 100;


export function setGrantNumbers(numbers) {
  grantNumbers = numbers;
}
export function setPssNumbers(numbers) {
  pssNumbers = numbers;
}
export function setGrantAchievement(value) {
  grantAchievement = value;
}
export function setPssAchievement(value) {
  pssAchievement = value;
}


export function calculateGrantPercentage() {
  if (!grantNumbers.length || !grantAchievement) return 0;
  const total = grantNumbers.reduce((sum, n) => sum + n, 0);
  const max = grantNumbers.length * grantAchievement;
  return Math.round((total / max) * 100);
}
export function calculatePssPercentage() {
  if (!pssNumbers.length || !pssAchievement) return 0;
  const total = pssNumbers.reduce((sum, n) => sum + n, 0);
  const max = pssNumbers.length * pssAchievement;
  return Math.round((total / max) * 100);
}


export function calculateGrantTotal() {
  if (!grantNumbers.length) return 0;
  return grantNumbers.reduce((sum, n) => sum + n, 0);
}
export function calculatePssTotal() {
  if (!pssNumbers.length) return 0;
  return pssNumbers.reduce((sum, n) => sum + n, 0);
}