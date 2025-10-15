1. Use Simple Selectors
Reason : Use simple selectors when possible. Complex selectors increase the parsing time.
2. Avoid Universal Selector for Styling
Reason : Avoid the universal selector (*) when not strictly necessary. The universal selector (*) affects every element and can slow down page rendering.
3. Avoid Inline Styles
Reason : Avoid inline styles when not necessary. Inline styles make your HTML heavier and are harder to manage.

4. Avoid @import
Reason : Avoid using @import for loading external CSS, as it delays stylesheet loading.
Add external CSS with the <link> tag in the head section, so it loads before the page is rendered.
5. Use Shorthand Properties
Reason : Use shorthand properties when possible. It saves space and is faster to parse.
6. Combine and Minify CSS
Use one CSS file when possible, and remove spaces and comments to reduce file size.

You can use tools like:

CSS Minifier
PostCSS