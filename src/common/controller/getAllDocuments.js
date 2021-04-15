export default async (db) => {
  try {
    const resp = await db.get("")
    return resp
  } catch {
    throw Error("OrbitDB: Failed to get all documents")
  }
}
