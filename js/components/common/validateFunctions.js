

export function checkLength(value, len) {
    if (value.length >= len) {
        return true;
    } else {
        return false;
    }
}

export function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}