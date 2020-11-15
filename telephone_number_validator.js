const telephoneNumberRegex =
    /^(1?)(-| )?(\(\d{3}\)|\d{3})(-| )?(\d{3})(-| )?(\d{4})$/;

const telephoneCheck = str => telephoneNumberRegex.test(str);

telephoneCheck("555-555-5555");