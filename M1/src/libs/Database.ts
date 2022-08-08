import * as mongoose from 'mongoose';
import UnSortedObjectSeeding from './SeedDataUnSortedObject';

class Database {
    static async open(mongoURL: string) {
        const dbConnection = await mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });
        if (dbConnection) {
            console.log('Database Connected Successfully');
            await UnSortedObjectSeeding();
            return dbConnection;
        }
    }
    static disconnect() {
        const dbDisConnection = mongoose.connection.close();
        if (dbDisConnection) {
            console.log('DataBase Disconnected Successfully');
        }
    }
}

export default Database;
