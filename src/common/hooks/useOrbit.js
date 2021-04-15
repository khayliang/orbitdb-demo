import { useEffect, useState } from "react"
import OrbitDB from "orbit-db"

const useOrbit = (ipfs, name, options = {}) => {
  const [orbit, setOrbit] = useState(null)
  const [orbitDb, setOrbitDb] = useState(null)
  const [records, setRecords] = useState(null)

  useEffect(() => {
    const createInstance = async () => {
      const instance = await OrbitDB.createInstance(ipfs)
      setOrbit(instance)
    }
    if (ipfs) createInstance()
    return () => {
      if (orbit && orbit.stop) {
        console.debug("OrbitDB: OrbitDB stopped")
        orbit.stop()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ipfs])

  useEffect(() => {
    if (orbitDb) return
    if (!name) return
    const createDb = async () => {
      const defaultOptions = { accessController: { write: ["*"] } }
      const docStoreOptions = {
        ...defaultOptions,
        ...options,
      }
      console.debug(
        "OrbitDB: Initializing document store",
        name,
        docStoreOptions
      )
      const db = await orbit.docstore(name, docStoreOptions)
      console.debug(
        "OrbitDB: Document store initialized",
        db.address.toString()
      )
      const refreshDb = async () => {
        await db.load()
        if (!orbitDb) {
          setOrbitDb(db)
        }
        if (db.type === "keyvalue") {
          setRecords({ ...(db.all || {}) })
        } else if (db.type === "eventlog") {
          const allEvents = await db
            .iterator({ limit: -1 })
            .collect()
            .map((e) => e.payload.value)
          setRecords([...allEvents] || [])
        } else if (db.type === "docstore") {
          setRecords(db.query(() => true))
        } else if (db.type === "counter") {
          setRecords(db.value)
        }
      }

      db.events.on("replicate", (_address) => {
        console.debug("OrbitDB: Replicating peer DB", _address.toString())
        // refreshDb();
      })

      db.events.on("replicated", (_address) => {
        console.debug("OrbitDB: Being replicated by peer", _address.toString())
        refreshDb()
      })

      db.events.on("write", (_address) => {
        console.debug("OrbitDB: Write made", _address.toString())
        refreshDb()
      })
      await refreshDb()
    }
    if (orbit) {
      createDb()
    }
    return () => {
      if (orbitDb) {
        console.debug("OrbitDB: DB closed")
        orbitDb.close()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orbit, name, options])

  const state = { orbit, db: orbitDb, records }

  return state
}

export default useOrbit
