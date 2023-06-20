import { formatDistance } from "date-fns"

export const formatDate =  (currentDate) => {
    return formatDistance(currentDate, new Date(), { addSuffix: true })
}

