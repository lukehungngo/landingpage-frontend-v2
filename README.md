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

SCSS
- SCSS will be used beacuse of those ability: mixins, global variables, nesting and so on.