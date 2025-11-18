# AI Coding Agent Instructions for JS Arrays Project

## Project Overview
This is a simple JavaScript learning project focused on array fundamentals. The codebase consists of:
- **`app.js`**: Contains array declarations and manipulations
- **`index.html`**: Basic HTML page that loads the JavaScript file in the browser

## Code Patterns & Conventions

### Array Initialization
The project uses traditional array literal syntax with indexed assignment:
```javascript
var pets = [];
pets[0] = "dog";
pets[1] = "frog";
// etc.
```
This pattern is intentional for teaching array indices. When extending this code, maintain this explicit index-assignment style rather than using shorthand array literals like `["dog", "frog", ...]`.

### JavaScript Version
The code uses `var` for variable declarations (legacy style). Maintain consistency with existing code style when adding new arrays or variables.

## Development & Execution

### Running the Code
The project is browser-based:
1. Open `index.html` in a web browser to execute `app.js`
2. Open browser DevTools (F12) to view console output if `console.log()` statements are added

### No Build Process
This is a simple educational project with no build tools, package managers, or test framework. Changes to files are immediately reflected when the page is reloaded.

## Common Tasks

- **Adding new arrays**: Follow the `var arrayName = []; arrayName[0] = value;` pattern shown in `app.js`
- **Adding console output**: Wrap any new code with `console.log()` to verify execution in browser DevTools
- **Testing changes**: Reload `index.html` in the browser to execute updated code

## Integration Points
- No external dependencies or APIs
- No database or backend services
- Completely self-contained frontend learning project
