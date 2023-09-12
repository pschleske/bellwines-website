import { DataTypes, Model } from "sequelize";
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
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apartmentNumber: {
            type: DataTypes.INTEGER,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        hashedPass: {
            type: DataTypes.STRING(500),
            // allowNull: false,
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        modelName: "user",
        sequelize: db
    }
)

class Pet extends Model {
    [util.inspect.custom]() {
        return this.JSON();
    }
}
Pet.init(
    {
        petId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
    },
    {
        modelName: "pet",
        sequelize: db
    }
)

class MaintenanceRequest extends Model {
    [util.inspect.custom]() {
        return this.JSON();
    }
}
MaintenanceRequest.init(
    {
        requestId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
        },
        // dateCreated: {
        //     type: DataTypes.DATE
        // },
        // dateClosed: {
        //     type: DataTypes.DATE,
        // },
    },
    {
        modelName: "maintenanceRequest",
        sequelize: db,
    }
)

class Message extends Model {
    [util.inspect.custom]() {
        return this.JSON();
    }
}
Message.init(
    {
        messageId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        messageContent: {
            type: DataTypes.STRING(5000),
            allowNull: false,
        },
        senderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        recipientId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        // dateCreated: {
        //     type: DataTypes.DATE,
        // },
    },
    {
        modelName: "message",
        sequelize: db
    }
)

User.hasMany(Pet, { foreignKey: 'userId' })
Pet.belongsTo(User, { foreignKey: 'userId' })

User.hasMany(MaintenanceRequest, { foreignKey: 'userId' })
MaintenanceRequest.belongsTo(User, { foreignKey: 'userId' })

User.hasMany(Message, { foreignKey: 'senderId', as: 'sentMessages' })
Message.belongsTo(User, { foreignKey: 'senderId' })

User.hasMany(Message, { foreignKey: 'recipientId', as: 'receivedMessage' })
Message.belongsTo(User, { foreignKey: 'recipientId' })

// if (require.main === module) {
//     console.log('Syncing to database...');
//     await db.sync();
//     console.log('Finished syncing database!');
// }

if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
    console.log("Syncing to database...")
    await db.sync()
    console.log("Finished syncing database!")
}

//exports here
export { User, Pet, MaintenanceRequest, Message }
