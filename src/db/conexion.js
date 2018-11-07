
import Sequelize from 'sequelize'

let db = null

module.exports = config => {
  if (!db) {
    const mssql = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    )
    const opSequelize = {
      type: Sequelize.QueryTypes.SELECT
    }

    db = {
      mssql,
      opSequelize
    }

    return db
  }
  return db
}
