# Errors and its solutions
- Installation Issue on macOS - EPERM: operation not permitted, uv_cwd
- **Solution** http://kb.yworks.com/article/784/Installation-Issue-on-macOS---EPERM-operation-not-permitted-uvcwd
## If you get dependency errors
- Delete package-lock. json (not package. json!) and/or yarn. lock in your project folder.
- Delete node_modules in your project folder.
- Remove "webpack" from dependencies and/or devDependencies in the package. json file in your project folder.
- Run npm install or yarn, depending on the package manager you use
