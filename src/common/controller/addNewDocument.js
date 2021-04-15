import { nanoid } from "nanoid"

export default async (db, payload) => {
  try {
    const resp = await db.put({
      _id: nanoid(),
      ...payload,
    })

    return resp
  } catch (e) {
    throw Error("OrbitDB: Failed to update document by ID")
  }
}
