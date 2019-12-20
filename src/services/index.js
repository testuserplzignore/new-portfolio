import api from "./api"
import getEntries from "./getEntries"

export default api


const getProjects = getEntries({ content_type: "projects", order: "-fields.order" });
const getHero = getEntries({ content_type: "hero" });


export {
  getProjects,
  getHero
}
