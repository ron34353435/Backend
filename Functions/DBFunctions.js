exports.createTable = createTable = (client, tableName, cols) => {
    const query = `
    CREATE TABLE users (
        firstName varchar,
        lastName varchar,
        age int
        );
        `;

    client.query(query, (err) => {
        if (err) {
            console.error("Creating DB Table Error -> " + err);
        } else {
            console.error("Table Created Successfully")
            client.end();
        }
    });
}

exports.connectDB = connectDB = async (client) => {
    const query = `
    SELECT * FROM ${dbConfig.dbName}`
    client.connect()
    let result = await client.query(query, (err) => console.log("ERROR -> " + err));
    client.end()
    return result
}

exports.getTablesNames = this.getTablesNames = async (client) => {
    const query = `select * from public.users` //`SELECT table_name FROM information_schema.tables
                  //    WHERE table_schema='public'`
    let r = client.connect((err) => console.log(err))
    let result = await client.query(query, (err) => console.log("ERROR -> " + err));
    client.end()
    return result
}
