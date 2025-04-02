function welcome(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;
    
    function displayFullName() {
        alert('Welcome ' + fullName + '!');
    }
    
    displayFullName();
}

// function tester
welcome('Holberton', 'School');
