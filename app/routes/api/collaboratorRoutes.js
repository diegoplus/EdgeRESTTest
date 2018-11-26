/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const CollaboratorController = require('../../controller/collaboratorController');
const collaboratorController = new CollaboratorController();

/**
 * Collaborator Entity routes
 */


router.get('/:id', function (req, res) {
    collaboratorController.findById(req, res)
});

router.get('/', function (req, res) {
    collaboratorController.findAll(res);
});

router.put('/:id', function (req, res) {
    collaboratorController.update(req, res)
});

router.post('/', function (req, res) {
    collaboratorController.create(req, res);
});

router.delete('/:id', function (req, res) {
    collaboratorController.deleteById(req, res)
});

module.exports = router;