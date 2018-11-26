/**
 * Collaborator Entity (ES6 Class)
 */

class Collaborator {
    constructor(id, firstName, lastName, phone, dateAdded, departmentId) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.dateAdded = dateAdded;
        this.departmentId = departmentId;
    }
}

module.exports = Collaborator;