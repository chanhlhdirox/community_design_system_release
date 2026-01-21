## Icons module

This module is implemented in such a way as to initially provide **only a set of default icons**
required by all Unified Post front-end applications. 

The rest of the icons are lazily loaded inside the modules that require them. The process of adding new icons and using them is described below.

###### Scenario 1 - Adding new icons that are not part of the default icon set
1. Export or copy the svg element(s) to the following folder - `projects/up/assets/icons`
2. Run the following command - `npm run generate-icons`, `npm run build`
3. In icons/utils there are two files. Import your icon in the corresponding file, depending on its type ( flag or system icon ).


###### Scenario 2 - Manual testing of the module in a separate Angular application (the library is not published on npm)
1. After the project has been built (the `dist` folder is present):
    * `cd` into it;
    * run the following command `npm pack`,
    * you should see a new file called `up-0.0.1.tgz`
2. Create a new Angular application and copy the `dist` folder in the root of the newly created app;
3. Run `npm i dist/up/up-0.0.1.tgz`. A new entry is created in `package.json`: 
   * `"up": "file:dist/up/up-0.0.1.tgz",`
4. Build the app and import UpIconsModule in your application.

  




