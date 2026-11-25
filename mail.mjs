export function validateRecipient(address) {
  return typeof address === 'string' && address.includes('@')
}
