import getDocumentById from "./getDocumentById"

export default async (db, { _id, ...data }) => {
  try {
    const currDoc = await getDocumentById(db, { _id })
    const updatedDoc = {
      ...currDoc,
      ...data,
    }
    const resp = await db.put(updatedDoc)
    return resp
  } catch (e) {
    throw Error("OrbitDB: Failed to update document by ID")
  }
}
