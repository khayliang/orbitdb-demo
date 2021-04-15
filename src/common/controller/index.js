import addNewDocument from "./addNewDocument"
import deleteDocumentById from "./deleteDocumentById"
import updateDocumentById from "./updateDocumentById"
import getAllDocuments from "./getAllDocuments"
import getDocumentById from "./getDocumentById"

export default (db) => {
  return async ({ type, payload }) => {
    switch (type) {
      case "ADD_NEW_DOCUMENT":
        return addNewDocument(db, payload)
      case "DELETE_DOCUMENT_BY_HASH":
        return deleteDocumentById(db, payload)
      case "UPDATE_DOCUMENT_BY_HASH":
        return updateDocumentById(db, payload)
      case "GET_ALL_DOCUMENTS":
        return getAllDocuments(db)
      case "GET_DOCUMENT_BY_HASH":
        return getDocumentById(db, payload)
      default:
        return null
    }
  }
}
