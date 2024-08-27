// Regular expression for validating Uzbekistan phone numbers
export const PHONE_REGEX = new RegExp(/^\+?998?\s?-?(90|91|93|94|95|98|99|33|97|71)\s?-?(\d{3})\s?-?(\d{2})\s?-?(\d{2})$/);

// Regular expression for validating user names
export const USER_REGEX = new RegExp(/^[A-z][A-z0-9-_]{3,23}$/);

// Regular expression for validating passwords with specific criteria
export const PWD_REGEX = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/);

// Regular expression for validating email addresses
export const EMAIL_REGEX = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);