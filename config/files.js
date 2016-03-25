/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */

module.exports = function(lineman) {
    //Override file patterns here
    return {
        js: {
            vendor: [
                "vendor/js/**/*.js",
                "vendor/bower/jquery/dist/jquery.js",
                "vendor/bower/angular/angular.js",
                "vendor/bower/angular-route/angular-route.js",
                "vendor/bower/angular-resource/angular-resource.js",
                "vendor/bower/angular-sanitize/angular-sanitize.js",
                "vendor/bower/angular-touch/angular-touch.js",
                "vendor/bower/angular-ui-router/release/angular-ui-router.js",
                "vendor/bower/underscore/underscore.js",
                "node_modules/socket.io/node_modules/socket.io-client/socket.io.js",
                "vendor/bower/angular-material/angular-material.min.js",
                "vendor/bower/angular-aria/angular-aria.min.js",
                "vendor/bower/angular-animate/angular-animate.min.js"
            ],
            app: [
                "app/js/app.js",
                "app/js/**/*.js"
            ]
        },
        webfonts: {
            vendor: [
                "vendor/webfonts/*.*"
            ],
            root: "fonts"
        },
        css: {
            vendor: ["vendor/bower/angular-material/angular-material.css"]
        }
    };
};
