import { DataTypes } from "sequelize";
import url from 'url';
import connectToDB from "./db.js";
import util from "util";

const db = await connectToDB('postgresql:///bellwines');

// create data models here
class User extends Model {
    [util.inspect.custom]() {
        return this.JSON();
    }
}
User.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {}
)

class Pet extends Model {
    [util.inspect.custom]() {
        return this.JSON();
    }
}
Pet.init({}, {})

class MaintenanceRequest extends Model {
    [util.inspect.custom]() {
        return this.JSON();
    }
}
MaintenanceRequest.init({}, {})

class Message extends Model {
    [util.inspect.custom]{
    return this.JSON();
}
}

if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
    console.log("Syncing to database...")
    await db.sync()
    console.log("Finished syncing database!")
}

//exports here
