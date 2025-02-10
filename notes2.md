**What is NPM?**
NPM (Node Package Manager) is a tool that helps developers install, manage, and share JavaScript packages (libraries and tools). It comes bundled with Node.js. (we have to install Node.js first)

==> Think of it like an App Store for JavaScript 📦
Just like you use the Play Store/App Store to download and manage apps on your phone, NPM helps you download and manage JavaScript libraries and tools for your project.

=> To include npm in our project -- *npm init*

==> *package.json* is a file in a JavaScript project that acts like a project's ID card 📄. It keeps track of important details about the project and its dependencies (installed packages).

==> *package-lock.json* Records the exact versions installed and locks them down. ( didn't use ^ and ~ for version minor updates)
 It doesn't use ranges like package.json. It’s more precise and ensures that everyone working on the project installs the same exact versions.

**Bundler**
A bundler is like a luggage packer for your project—it takes all your messy files, organizes them, and delivers a compact, optimized version for the browser to load quickly! 🚀

Popular Bundlers
Webpack - create react app uses this behind the scenes, Parcel, Vite

**dependencies** (Required for Production 🚀)
These are essential packages your app needs to run.

✅ Example: If your app is a web server, it needs Express.js to function.

"dependencies": {
  "express": "^4.18.2"
}

💡 Think of it like: Ingredients required to cook a dish. 🍛

🛠 Install a dependency: npm install express

**devDependencies** (Only for Development 🛠️)
📌 These are tools used during development but not needed in production.
📌 Helps with testing, debugging, and code formatting.

✅ Example: Jest (for testing) is used only while developing.

"devDependencies": {
  "jest": "^29.0.0"
}
💡 Think of it like: A recipe book—helps while cooking but isn’t served with the food. 📖

🛠 Install a dev dependency: npm install jest --save-dev  (or npm install -D jest for short)

🔹 Key Difference in One Line:
dependencies → Needed for the app to work. 📦
devDependencies → Only needed while coding. 👨‍💻

**Caret (^)**
It allows updates to the minor and patch versions, but keeps the major version the same.
It avoids breaking changes by only allowing non-major updates.
Example:  "^1.2.3" means you can use 1.2.x, 1.3.x, 1.4.x, etc., but not 2.x.x.
**Tilde (~)**
It only allows updates to the patch version, keeping the minor version fixed.
It’s more restrictive than the caret.
Example:  "~1.2.3" means you can use 1.2.x (like 1.2.4 or 1.2.5), but not 1.3.0.

Simple Breakdown:
Caret (^) = Updates to minor and patch versions.
Tilde (~) = Only updates to patch versions.

**Transitive Dependencies**
When a dependency has its own dependencies and those dependencies have their own dependencies, then it is known as transitive dependencies.
Inside node modules, every dependency folder has its own package.json file which contains the dependencies and the description of that dependency.

Why should we not push the *node_modules* to git or production ?
Node modules are huge in size.
If we have package.json and package-lock.json, then we can recreate the node modules anytime. ---> *npm install* 

***PARCEL***
--> File Watching: 
Parcel uses a C++-based file watching algorithm to track every file and its changes.

--> Cache Mechanism:
When you first run Parcel, it creates a folder named .parcel-cache to store cache data.
Subsequent builds update this cache to speed up the build process.

--> Development Build (npx parcel index.html):
Creates a development build.
Stores the output in the dist folder.
Updates the dist folder automatically with each change made during development.

--> Production Build (npx parcel build index.html):
Creates a production-ready build (optimized, minified, etc.).
Also stores the output in the dist folder.

Important: Do not push the dist and .parcel-cache folders to your Git repository, as they can be regenerated.

**NPM (Node Package Manager)**
It is like a toolbox where you store and manage all the tools (packages or libraries) your project needs.
You use npm to install, update, or remove packages.
**NPX (Node Package Executor)**
It is like a helper that runs specific tools (packages) without installing them globally or cluttering your project.
You can run a tool for a one-time task without needing to install it in your project.

=> Analogy:
Imagine you're working on a DIY project.
NPM is like buying a toolbox filled with tools (packages) that you need for your project. You store these tools in your workspace and use them whenever you need.
NPX is like borrowing a specific tool from a store just when you need it, without having to buy it and keep it in your toolbox. You return it after using it, which saves you space and money.

Example:
NPM: npm install parcel ( You buy the Parcel tool and store it in your toolbox (your project’s node_modules) )
NPX: npx parcel ( You borrow the Parcel tool from the store (without installing it permanently) just for the task, and return it after use )

Summary:
NPM: Manages tools (packages) for your project.
NPX: Runs a tool (package) temporarily without installing it.