/**
 * currying is advanced function writing process that takes multiple argument is   transformed into a series of function, each with single argument.
 * currying helps us to avoid passing the same variable multiple time.
 */

function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const result = curriedAdd(1)(2)(3); //

/**
 * Routing is a fundamental part of building web applications, and currying can be used to create a flexible and modular routing system.
 */
// Curried routing function
const route = (path) => (handler) => {
  console.log(`Route defined for path: ${path}`);
  // Here, you would typically set up a mapping between the path and the handler function
  // For simplicity, we'll just log the route definition.
};

// Define routes using currying
const createRoutes = (router) => {
  return {
    home: router("/"),
    about: router("/about"),
    products: router("/products"),
    contact: router("/contact"),
  };
};

// Usage
const appRouter = route(); // Initialize the router

const routes = createRoutes(appRouter);

// Define route handlers
routes.home(() => console.log("Home page"));
routes.about(() => console.log("About page"));
routes.products(() => console.log("Products page"));
routes.contact(() => console.log("Contact page"));
