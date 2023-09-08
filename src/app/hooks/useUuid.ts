import React from "react"
import { v4 as uuid } from "uuid"

/**
 * useUuid
 */
const useUuid = () => React.useMemo(uuid, [])
export default useUuid
