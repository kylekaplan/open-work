import { useEffect, useState } from "react";
import getFirebase, { getDb } from "../services/firebase";

export default function useFirebase() {
  const [instance, setInstance] = useState(false)

  useEffect(() => {
    setInstance(!!getFirebase())
  }, [])

  return instance
}

export function useDb() {
  const [db, setDb] = useState(null);

  useEffect(() => {
    setDb(getDb())
  }, [])
  return db
}
