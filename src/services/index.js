import api from "./api"
import getEntries from "./getEntries"

export default api


const getProjects = getEntries({ content_type: "projects", order: "-fields.order" });
const getHero = getEntries({ content_type: "hero" });
const getAbout = getEntries({ content_type: "aboutMe", order: "sys.createdAt"});


export {
  getProjects,
  getHero,
  getAbout
}
