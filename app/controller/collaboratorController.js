/* Load Driver Data Access Object */
const CollaboratorDao = require('../dao/collaboratorDao');

/* Load Controller Common function */
const controllerCommon = require('./common/controllerCommon');

/* Load Driver entity */
const Collaborator = require('../model/collaborator');

/**
 * Collaborator Controller
 */
class CollaboratorController {

    constructor() {
        this.collaboratorDao = new CollaboratorDao();
        this.common = new controllerCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params req, res
     * @return entity
     */
    findById(req, res) {
        let id = req.params.id;
        this.collaboratorDao.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll(res) {
        this.collaboratorDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };
  

    /**
     * Updates the given entity in the database
     * @params req, res
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(req, res) {
        let collaborator = new Collaborator();
        collaborator.id = req.params.id;
        collaborator.firstName = req.body.firstName;
        collaborator.lastName = req.body.lastName;
        collaborator.phone = req.body.phone;

        return this.collaboratorDao.update(collaborator)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Creates the given entity in the database
     * @params req, res
     * returns database insertion status
     */
    create(req, res) {

        var currentDate = new Date().toISOString();
        let collaborator = new Collaborator();
        if (req.body.id) {
            driver.id = req.body.id;
        }
        collaborator.firstName = req.body.firstName;
        collaborator.lastName = req.body.lastName;
        collaborator.phone = req.body.phone;
        collaborator.dateAdded = currentDate;
        if (req.body.departmentId) {
            collaborator.departmentId = req.body.departmentId;
        } else {
            collaborator.departmentId=1 //default department for now
        }

        
        return this.collaboratorDao.create(collaborator)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    
    };

    /**
     * Deletes an entity using its Id / Primary Key
     * @params req, res
     * returns database deletion status
     */
    deleteById(req, res) {
        let id = req.params.id;

        this.collaboratorDao.deleteById(id)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };

    
}

module.exports = CollaboratorController;