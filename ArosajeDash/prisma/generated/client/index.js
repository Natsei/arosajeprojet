
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.7.1
 * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
 */
Prisma.prismaVersion = {
  client: "5.7.1",
  engine: "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  expires_at: 'expires_at',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires'
};

exports.Prisma.VerificationTokenScalarFieldEnum = {
  identifier: 'identifier',
  token: 'token',
  expires: 'expires'
};

exports.Prisma.UtilisateurScalarFieldEnum = {
  id: 'id',
  email: 'email',
  motDePasse: 'motDePasse',
  prenom: 'prenom',
  nom: 'nom',
  ville: 'ville',
  cp: 'cp',
  rue: 'rue',
  description: 'description',
  cheminPhoto: 'cheminPhoto',
  dateInscription: 'dateInscription'
};

exports.Prisma.RoleScalarFieldEnum = {
  id: 'id',
  nom: 'nom'
};

exports.Prisma.RoleUtilisateurScalarFieldEnum = {
  utilisateurId: 'utilisateurId',
  roleId: 'roleId'
};

exports.Prisma.PhotoScalarFieldEnum = {
  id: 'id',
  cheminPhoto: 'cheminPhoto',
  annonceId: 'annonceId'
};

exports.Prisma.AnnonceScalarFieldEnum = {
  id: 'id',
  description: 'description',
  datePublication: 'datePublication',
  auteurId: 'auteurId',
  planteId: 'planteId'
};

exports.Prisma.VisiteScalarFieldEnum = {
  id: 'id',
  dateVisite: 'dateVisite',
  dateInvitation: 'dateInvitation',
  visiteurId: 'visiteurId',
  annonceId: 'annonceId'
};

exports.Prisma.VisiteAccepteeScalarFieldEnum = {
  visiteId: 'visiteId',
  dateAcceptation: 'dateAcceptation',
  cheminPhoto: 'cheminPhoto'
};

exports.Prisma.VisiteRefuseeScalarFieldEnum = {
  visiteId: 'visiteId',
  dateRefus: 'dateRefus'
};

exports.Prisma.PlanteScalarFieldEnum = {
  id: 'id',
  libelle: 'libelle',
  description: 'description',
  categorieId: 'categorieId'
};

exports.Prisma.CategorieScalarFieldEnum = {
  id: 'id',
  libelle: 'libelle'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Account: 'Account',
  Session: 'Session',
  VerificationToken: 'VerificationToken',
  Utilisateur: 'Utilisateur',
  Role: 'Role',
  RoleUtilisateur: 'RoleUtilisateur',
  Photo: 'Photo',
  Annonce: 'Annonce',
  Visite: 'Visite',
  VisiteAcceptee: 'VisiteAcceptee',
  VisiteRefusee: 'VisiteRefusee',
  Plante: 'Plante',
  Categorie: 'Categorie'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\flogu\\Desktop\\Bureau\\react\\arosajeprojet\\ArosajeDash\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.7.1",
  "engineVersion": "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlite",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwNCi8vIGxlYXJuIG1vcmUgYWJvdXQgaXQgaW4gdGhlIGRvY3M6IGh0dHBzOi8vcHJpcy5seS9kL3ByaXNtYS1zY2hlbWENCg0KZ2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiDQogIG91dHB1dCAgID0gIi4vZ2VuZXJhdGVkL2NsaWVudCINCn0NCg0KZGF0YXNvdXJjZSBkYiB7DQogIHByb3ZpZGVyID0gInNxbGl0ZSINCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpDQp9DQoNCg0KbW9kZWwgQWNjb3VudCB7DQogIGlkICAgICAgICAgICAgICAgICBTdHJpbmcgIEBpZCBAZGVmYXVsdChjdWlkKCkpDQogIHVzZXJJZCAgICAgICAgICAgICBTdHJpbmcNCiAgdHlwZSAgICAgICAgICAgICAgIFN0cmluZw0KICBwcm92aWRlciAgICAgICAgICAgU3RyaW5nDQogIHByb3ZpZGVyQWNjb3VudElkICBTdHJpbmcNCiAgcmVmcmVzaF90b2tlbiAgICAgIFN0cmluZz8gIA0KICBhY2Nlc3NfdG9rZW4gICAgICAgU3RyaW5nPyAgDQogIGV4cGlyZXNfYXQgICAgICAgICBJbnQ/DQogIHRva2VuX3R5cGUgICAgICAgICBTdHJpbmc/DQogIHNjb3BlICAgICAgICAgICAgICBTdHJpbmc/DQogIGlkX3Rva2VuICAgICAgICAgICBTdHJpbmc/ICANCiAgc2Vzc2lvbl9zdGF0ZSAgICAgIFN0cmluZz8NCg0KICB1c2VyIFV0aWxpc2F0ZXVyIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkNCg0KICBAQHVuaXF1ZShbcHJvdmlkZXIsIHByb3ZpZGVyQWNjb3VudElkXSkNCn0NCg0KbW9kZWwgU2Vzc2lvbiB7DQogIGlkICAgICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQoY3VpZCgpKQ0KICBzZXNzaW9uVG9rZW4gU3RyaW5nICAgQHVuaXF1ZQ0KICB1c2VySWQgICAgICAgU3RyaW5nDQogIGV4cGlyZXMgICAgICBEYXRlVGltZQ0KICB1c2VyICAgICAgICAgVXRpbGlzYXRldXIgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkNCn0NCg0KbW9kZWwgVmVyaWZpY2F0aW9uVG9rZW4gew0KICBpZGVudGlmaWVyIFN0cmluZw0KICB0b2tlbiAgICAgIFN0cmluZyAgIEB1bmlxdWUNCiAgZXhwaXJlcyAgICBEYXRlVGltZQ0KDQogIEBAdW5pcXVlKFtpZGVudGlmaWVyLCB0b2tlbl0pDQp9DQoNCm1vZGVsIFV0aWxpc2F0ZXVyIHsNCiAgaWQgICAgU3RyaW5nICAgIEBpZCBAZGVmYXVsdChjdWlkKCkpDQogIGVtYWlsIFN0cmluZyAgQHVuaXF1ZQ0KICBtb3REZVBhc3NlICBTdHJpbmcNCiAgcHJlbm9tICBTdHJpbmcNCiAgbm9tICBTdHJpbmcNCiAgdmlsbGUgIFN0cmluZz8NCiAgY3AgIFN0cmluZz8NCiAgcnVlICBTdHJpbmc/DQogIGRlc2NyaXB0aW9uICBTdHJpbmc/DQogIGNoZW1pblBob3RvIFN0cmluZz8gDQogIGRhdGVJbnNjcmlwdGlvbiAgRGF0ZVRpbWUNCiAgcm9sZXNVdGlsaXNhdGV1cnMgUm9sZVV0aWxpc2F0ZXVyW10NCiAgbGVzQW5ub25jZXMgQW5ub25jZVtdDQogIGxlc1Zpc2l0ZXMgVmlzaXRlW10NCiAgYWNjb3VudHMgICAgICBBY2NvdW50W10NCiAgc2Vzc2lvbnMgICAgICBTZXNzaW9uW10NCn0NCg0KbW9kZWwgUm9sZSB7DQogIGlkIEludCBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBub20gU3RyaW5nPw0KICByb2xlc1V0aWxpc2F0ZXVycyBSb2xlVXRpbGlzYXRldXJbXQ0KfQ0KDQptb2RlbCBSb2xlVXRpbGlzYXRldXIgew0KICB1dGlsaXNhdGV1ciBVdGlsaXNhdGV1ciBAcmVsYXRpb24oZmllbGRzOiBbdXRpbGlzYXRldXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIHV0aWxpc2F0ZXVySWQgU3RyaW5nIA0KICByb2xlIFJvbGUgQHJlbGF0aW9uKGZpZWxkczogW3JvbGVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIHJvbGVJZCBJbnQgDQoNCiAgQEBpZChbdXRpbGlzYXRldXJJZCwgcm9sZUlkXSkNCn0NCg0KbW9kZWwgUGhvdG8gew0KICBpZCBJbnQgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgY2hlbWluUGhvdG8gU3RyaW5nDQogIGFubm9uY2UgQW5ub25jZSBAcmVsYXRpb24oZmllbGRzOiBbYW5ub25jZUlkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgYW5ub25jZUlkIEludA0KfQ0KDQptb2RlbCBBbm5vbmNlIHsNCiAgaWQgSW50IEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGRlc2NyaXB0aW9uIFN0cmluZw0KICBkYXRlUHVibGljYXRpb24gRGF0ZVRpbWUNCiAgYXV0ZXVyIFV0aWxpc2F0ZXVyIEByZWxhdGlvbihmaWVsZHM6IFthdXRldXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIGF1dGV1cklkIFN0cmluZw0KICBwbGFudGUgUGxhbnRlIEByZWxhdGlvbihmaWVsZHM6IFtwbGFudGVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIHBsYW50ZUlkIEludA0KICBsZXNQaG90b3MgUGhvdG9bXQ0KICBsZXNWaXNpdGVzIFZpc2l0ZVtdDQp9DQoNCg0KbW9kZWwgVmlzaXRlIHsNCiAgaWQgSW50IEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGRhdGVWaXNpdGUgRGF0ZVRpbWUNCiAgZGF0ZUludml0YXRpb24gRGF0ZVRpbWUNCiAgdmlzaXRldXIgVXRpbGlzYXRldXIgQHJlbGF0aW9uKGZpZWxkczogW3Zpc2l0ZXVySWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICB2aXNpdGV1cklkIFN0cmluZw0KICBhbm5vbmNlIEFubm9uY2UgQHJlbGF0aW9uKGZpZWxkczogW2Fubm9uY2VJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIGFubm9uY2VJZCBJbnQNCiAgdmlzaXRlQWNjZXB0ZWUgVmlzaXRlQWNjZXB0ZWU/DQogIHZpc2l0ZVJlZnVzZWUgVmlzaXRlUmVmdXNlZT8NCn0NCg0KbW9kZWwgVmlzaXRlQWNjZXB0ZWUgew0KICB2aXNpdGUgVmlzaXRlIEByZWxhdGlvbihmaWVsZHM6IFt2aXNpdGVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pIA0KICB2aXNpdGVJZCBJbnQgDQogIGRhdGVBY2NlcHRhdGlvbiBEYXRlVGltZQ0KICBjaGVtaW5QaG90byBTdHJpbmc/DQoNCiAgQEBpZChbdmlzaXRlSWRdKQ0KfQ0KDQptb2RlbCBWaXNpdGVSZWZ1c2VlIHsNCiAgdmlzaXRlIFZpc2l0ZSBAcmVsYXRpb24oZmllbGRzOiBbdmlzaXRlSWRdLCByZWZlcmVuY2VzOiBbaWRdKSANCiAgdmlzaXRlSWQgSW50DQogIGRhdGVSZWZ1cyBEYXRlVGltZT8NCg0KICBAQGlkKFt2aXNpdGVJZF0pDQp9DQoNCm1vZGVsIFBsYW50ZSB7DQogIGlkICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGliZWxsZSBTdHJpbmcgIEB1bmlxdWUNCiAgZGVzY3JpcHRpb24gIFN0cmluZyANCiAgY2F0ZWdvcmllIENhdGVnb3JpZSBAcmVsYXRpb24oZmllbGRzOiBbY2F0ZWdvcmllSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICBjYXRlZ29yaWVJZCBJbnQNCiAgYW5ub25jZXMgQW5ub25jZVtdDQp9DQoNCm1vZGVsIENhdGVnb3JpZSB7DQogIGlkICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGliZWxsZSBTdHJpbmcgIEB1bmlxdWUNCiAgbGVzUGxhbnRlcyBQbGFudGVbXQ0KfQ0K",
  "inlineSchemaHash": "9e62a227dfe5fc66c52f1e04b3e58827a8dc3638b3fa4d7e52e57c75343172d7",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/client",
    "generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Account\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provider\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerAccountId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refresh_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"access_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expires_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scope\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"session_state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Utilisateur\",\"relationName\":\"AccountToUtilisateur\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"provider\",\"providerAccountId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"provider\",\"providerAccountId\"]}],\"isGenerated\":false},\"Session\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessionToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expires\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Utilisateur\",\"relationName\":\"SessionToUtilisateur\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"VerificationToken\":{\"dbName\":null,\"fields\":[{\"name\":\"identifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expires\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"identifier\",\"token\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"identifier\",\"token\"]}],\"isGenerated\":false},\"Utilisateur\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"motDePasse\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prenom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ville\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cheminPhoto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateInscription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rolesUtilisateurs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RoleUtilisateur\",\"relationName\":\"RoleUtilisateurToUtilisateur\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lesAnnonces\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Annonce\",\"relationName\":\"AnnonceToUtilisateur\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lesVisites\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Visite\",\"relationName\":\"UtilisateurToVisite\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accounts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Account\",\"relationName\":\"AccountToUtilisateur\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Session\",\"relationName\":\"SessionToUtilisateur\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Role\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rolesUtilisateurs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RoleUtilisateur\",\"relationName\":\"RoleToRoleUtilisateur\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RoleUtilisateur\":{\"dbName\":null,\"fields\":[{\"name\":\"utilisateur\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Utilisateur\",\"relationName\":\"RoleUtilisateurToUtilisateur\",\"relationFromFields\":[\"utilisateurId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"utilisateurId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Role\",\"relationName\":\"RoleToRoleUtilisateur\",\"relationFromFields\":[\"roleId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roleId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"utilisateurId\",\"roleId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Photo\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cheminPhoto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"annonce\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Annonce\",\"relationName\":\"AnnonceToPhoto\",\"relationFromFields\":[\"annonceId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"annonceId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Annonce\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"datePublication\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auteur\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Utilisateur\",\"relationName\":\"AnnonceToUtilisateur\",\"relationFromFields\":[\"auteurId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auteurId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plante\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Plante\",\"relationName\":\"AnnonceToPlante\",\"relationFromFields\":[\"planteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"planteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lesPhotos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Photo\",\"relationName\":\"AnnonceToPhoto\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lesVisites\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Visite\",\"relationName\":\"AnnonceToVisite\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Visite\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateVisite\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateInvitation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"visiteur\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Utilisateur\",\"relationName\":\"UtilisateurToVisite\",\"relationFromFields\":[\"visiteurId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"visiteurId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"annonce\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Annonce\",\"relationName\":\"AnnonceToVisite\",\"relationFromFields\":[\"annonceId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"annonceId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"visiteAcceptee\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"VisiteAcceptee\",\"relationName\":\"VisiteToVisiteAcceptee\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"visiteRefusee\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"VisiteRefusee\",\"relationName\":\"VisiteToVisiteRefusee\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"VisiteAcceptee\":{\"dbName\":null,\"fields\":[{\"name\":\"visite\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Visite\",\"relationName\":\"VisiteToVisiteAcceptee\",\"relationFromFields\":[\"visiteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"visiteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateAcceptation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cheminPhoto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"visiteId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"VisiteRefusee\":{\"dbName\":null,\"fields\":[{\"name\":\"visite\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Visite\",\"relationName\":\"VisiteToVisiteRefusee\",\"relationFromFields\":[\"visiteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"visiteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateRefus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"visiteId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Plante\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"libelle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categorie\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Categorie\",\"relationName\":\"CategorieToPlante\",\"relationFromFields\":[\"categorieId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categorieId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"annonces\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Annonce\",\"relationName\":\"AnnonceToPlante\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Categorie\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"libelle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lesPlantes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Plante\",\"relationName\":\"CategorieToPlante\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma/generated/client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/client/schema.prisma")
