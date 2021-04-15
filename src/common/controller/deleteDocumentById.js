export default async (db, { _id }) => {
  try {
    const resp = await db.del(_id)
    return resp
  } catch (e) {
    throw Error("OrbitDB: Failed to delete document by ID")
  }
}
