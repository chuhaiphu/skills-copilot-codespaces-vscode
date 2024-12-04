function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 25,
        skills: ['HTML', 'CSS', 'JS'],
        details: function() {
            console.log('Name: ' + this.name + ', Age: ' + this.age);
        }
    };
    return member;
}