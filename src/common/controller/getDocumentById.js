export default async (db, { _id }) => {
  try {
    const resp = await db.get(_id)[0]
    return resp
  } catch (e) {
    throw Error("OrbitDB: Failed to get document by ID")
  }
}
