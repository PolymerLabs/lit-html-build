# lit-html-build

Example Rollup build for a lit-html project.

Produces a single build with an ES module bundle for modern browsers, and ES5 code + polyfills for older browsers. Tested on IE11, may work on some other older browsers.

This example uses `<script type="module">` and `<script nomodule>` to serve the correct bundles to modern and legacy browsers. This approach allows you to serve two different JavaScript bundles while using static web serving. 

This approach has some limitations on Edge versions 16-18, which support JavaScript modules using the script tag, but not dynamic imports using the `import()` statement:

```html
<!-- import using script tag -->
<script type="module" src="./modules/my-module.js">
```

```js
// Dynamic imports
import('./modules/my-other-module.js').then((moduleObject) => {
    // Do something with the module
  });
```

If you use dynamic imports in your code and you need to support these legacy versions of Edge, the module/nomodule trick won't work for you. In this case, the easiest solution is to serve the legacy bundle for all browsers. You'll also need to switch to an output format that supports dynamic loading—such as [SystemJS](https://github.com/systemjs/systemjs).

If you switch to SystemJS format, you'll need to load the SystemJS loader and call `System.import` to load your main module (instead of using `<script type="module">`).

```html
<!-- minimal SystemJS loader -->
<script src="/node_modules/systemjs/dist/s.min.js"></script>
<!-- load main bundle -->
<script>
  System.import('./bundle.js');
</script>
```
