import TestOrbit from "../pages/TestOrbit"
import MapPage from "../pages/MapPage"

// Keep adding routes here
const routes = [
  {
    path: "/test",
    exact: true,
    component: TestOrbit,
  },
  {
    path: "/map",
    exact: true,
    component: MapPage,
  },
]

export default routes
