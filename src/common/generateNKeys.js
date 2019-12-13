import uuidv4 from "uuid/v4"

export default (N) => Array(N, "id").map(() => uuidv4())

