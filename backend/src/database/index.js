const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Organization = require('../models/Organization');
const EvolutionRecord = require('../models/EvolutionRecord');
const ProfessionalAttendance = require('../models/ProfessionalAttendance');
const Specialities = require('../models/Specialities');
const Calendar = require('../models/Calendar');

const connection = new Sequelize(dbConfig);

User.init(connection);
Organization.init(connection);
EvolutionRecord.init(connection);
ProfessionalAttendance.init(connection);
Specialities.init(connection);
Calendar.init(connection);

User.associate(connection.models);
Organization.associate(connection.models);
EvolutionRecord.associate(connection.models);
ProfessionalAttendance.associate(connection.models);
Specialities.associate(connection.models);
Calendar.associate(connection.models);

module.exports = connection;