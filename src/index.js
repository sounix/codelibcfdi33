
import db from './db/conexion'
import config from './db/config'

const run = async () => {
  try {
    const con = db(config)
    const strQuery = `
      SELECT TOP 10 Articulo,Nombre FROM Articulos
    `
    const result = await con.mssql.query(strQuery, con.opSequelize)
    console.log(result)
  } catch (err) {
    console.error(`Error 500: ${err}`)
  }

  try {
    const con = db(config)
    const strQuery = `
      SELECT TOP 10 * FROM Subfamilias
    `
    const result = await con.mssql.query(strQuery, con.opSequelize)
    console.log(result)
  } catch (err) {
    console.error(`Error 500: ${err}`)
  }
}

run()
