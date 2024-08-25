export function formatMoney(amount: number) {
  if (amount === 0) return amount;
  const [integerPart, decimalPart] = amount ? amount.toString().split(".") : "";
  const newIntegerPart = integerPart?.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  if (amount) {
    if (decimalPart?.toString()) {
      return `${newIntegerPart || ""}.${decimalPart?.toString()}`;
    } else {
      return newIntegerPart;
    }
  } else {
    return 0;
  }
}
