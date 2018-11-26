/* Load Collaborator entity */
const Collaborator = require('../model/collaborator');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Driver Data Access Object
 */
class CollaboratorDao {

    constructor() {
        this.common = new daoCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findById(id) {
        let sqlRequest = "SELECT id, firstName, lastName, phone, dateAdded, departmentId FROM collaborators WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Collaborator(row.id, row.firstName, row.lastName, row.phone, row.dateAdded, row.departmentId));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        let sqlRequest = "SELECT * FROM collaborators";
        return this.common.findAll(sqlRequest).then(rows => {
            let collaborators = [];
            for (const row of rows) {
                collaborators.push(new Collaborator(row.id, row.firstName, row.lastName, row.phone, row.dateAdded, row.departmentId));
            }
            return collaborators;
        });
    };

    /**
     * Updates the given entity in the database
     * @params Collaborator
     * @return true if the entity has been updated, false if not found and not updated
     * dateAdded should not be updated, departmentId not implemented yet, let's leave it by default
     */
    update(Collaborator) {
        let sqlRequest = "UPDATE collaborators SET " +
            "firstName=$firstName, " +
            "lastName=$lastName, " +
            "phone=$phone " +
            "WHERE id=$id";

        let sqlParams = {
            $firstName: Collaborator.firstName,
            $lastName: Collaborator.lastName,
            $phone: Collaborator.phone,
            $id: Collaborator.id
        };
        return this.common.run(sqlRequest, sqlParams);

    };

    /**
     * Creates the given entity in the database
     * @params Collaborator
     * returns database insertion status
     */
    create(Collaborator) {
        let sqlRequest = "INSERT into collaborators (firstName, lastName, phone, dateAdded, departmentId) " +
            "VALUES ($firstName, $lastName, $phone, $dateAdded, $departmentId)";
        let sqlParams = {
            $firstName: Collaborator.firstName,
            $lastName: Collaborator.lastName,
            $phone: Collaborator.phone,
            $dateAdded: Collaborator.dateAdded,
            $departmentId: Collaborator.departmentId
        };
        return this.common.run(sqlRequest, sqlParams);
    };


    /**
     * Deletes an entity using its Id / Primary Key
     * @params id
     * returns database deletion status
     */
    deleteById(id) {
        let sqlRequest = "DELETE FROM collaborators WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.run(sqlRequest, sqlParams);
    };

}

module.exports = CollaboratorDao;