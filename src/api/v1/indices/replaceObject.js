const logger = require('../../../utils/logger')
const { makeTaskID, makeObjectID } = require('../../../utils/ids')

/*

*/
const replaceObject = (req, res) => {
  logger.debug('replaceObject')
  logger.debug('url', req.originalUrl)
  logger.debug('params', req.params)
  logger.debug('body', JSON.stringify(req.body, null, 2))
  res.json({
    objectID: req.params.objectID || makeObjectID(),
    taskId: makeTaskID()
  })
}

module.exports = replaceObject
