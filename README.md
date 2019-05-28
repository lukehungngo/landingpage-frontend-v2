Source Code Structure
1. components
- All root component can be use globally everywhere.
- Does not maintain states (stateless component).
- Nested component, component has parents (granparents,...) this new component can only be used its direct parent.
- Example: Button, Form, Section Background,...
2. pages
- Pages of applications.
- It's possible to nested a page in a page, or nested new services or component in pages.
- New thing (page, services, component) which defined inside pages, it can be only used in pages only.
3. services
- Independent module can be used by components and pages
4. assets
- Assets used by application
    + Images: all images in application
    + Color
    + Font
    + Measurement
5. router
- router for application
6. store: redux store
- index.js: export
- reducer: combine reducer
- saga: combine saga and export root saga
- Divide by feature in application, each feature have:
    + constant: contain constant, which will be used in this directory
    + saga: saga middle ware
    + reducer: reducer of this feature
    + action: action creator for this feature
SCSS
- SCSS will be used beacuse of those ability: mixins, global variables, nesting and so on.