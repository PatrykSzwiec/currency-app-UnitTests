export const convertPLNToUSD = (PLN) => {

  // Calculate the PLN to USD conversion
  const PLNtoUSD = parseFloat(PLN) / 3.5;

  // Create a number formatter for USD currency format
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  // Check if PLN is a string or undefined, return NaN is such cases
  if (typeof PLN === 'string' || PLN === undefined) {
    return NaN;
  }

  // Check if PLN is neither a string nor a number, return 'Error' in such cases
  if (typeof PLN !== 'string' && typeof PLN !== 'number') {
    return 'Error';
  }

  // Check if PLN is less than 0, return '$0.00' in such cases
  if (PLN < 0) {
    return '$0.00';
  }

  // Check if PLN is null, return NaN in such cases
  if (PLN === null) {
    return NaN;
  }

  // Format the PLN to USD conversion using the number formatter
  // and replace any non-breaking space characters
  return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
}