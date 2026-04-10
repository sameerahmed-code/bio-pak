import Layout from "@/components/Layout";
import Advantages from "@/pages/Advantages";
import Contact from "@/pages/Contact";
import Features from "@/pages/Features";
import Home from "@/pages/Home";
import Machinery from "@/pages/Machinery";
import Process from "@/pages/Process";
import Products from "@/pages/Products";
import Team from "@/pages/Team";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

const rootRoute = createRootRoute({ component: Layout });

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: Products,
});
const featuresRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/features",
  component: Features,
});
const processRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/process",
  component: Process,
});
const machineryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/machinery",
  component: Machinery,
});
const advantagesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/advantages",
  component: Advantages,
});
const teamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/team",
  component: Team,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  productsRoute,
  featuresRoute,
  processRoute,
  machineryRoute,
  advantagesRoute,
  teamRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
