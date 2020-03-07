

// helper #2
const isEmail = (email) => {
    return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test( email );
}

// helper #1
const isEmpty = (string) => {
    return (string.trim() === '') ? true : false;
}

exports.validateSignUpData = (data) => {
    let errors = {};
    
    // email empty and valid check
    if(isEmpty(data.email)) {
        errors.email = 'Must not be empty :((';
    } else if (!isEmail(data.email)) {
        errors.email = 'Must be a valid email address :(';
    }

    // password empty and valid check
    if(isEmpty(data.password)) {
        errors.password = 'Must not be empty'
    } else if (data.password !== data.confirmPassword) {
        errors.confirmPassword = 'Passwords must match'
    }

    // handle empty and valid check
    if(isEmpty(data.handle)) {
        errors.handle = 'Must not be empty';
    }


    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }
}

exports.validateLoginData = (data) => {
    let errors = {};

    if(isEmpty(data.email)) {
        errors.email = 'Must not be empty :((((';
    }
    if(isEmpty(data.password)) {
        errors.password = 'Must not be empty :((((((';
    }
    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }
}

exports.reduceUserDetails = (data) => {
    let userDetails = {};

    if (!isEmpty(data.bio.trim())) userDetails.bio = data.bio;
    if (!isEmpty(data.website.trim())) {
        // https://website.com
        console.log(data.website.trim().substring(0,4));
        console.log(data.website.trim().substring(0,5));
        if(data.website.trim().substring(0,4) !== 'http' && data.website.trim().substring(0,5) !== 'https') {
            userDetails.website = `http://${data.website.trim()}`;
        } else {
            userDetails.website = data.website;
        }
    }
    if (!isEmpty(data.location.trim())) userDetails.location = data.location;
    return userDetails;
}