# HTML5 and Its Features

## 📌 Introduction

HTML5 is the latest and most advanced version of **HTML (Hypertext
Markup Language)**, the standard language used to structure content on
the web.\
It was finalized as a W3C recommendation in **2014** and has become the
backbone of modern web applications.\
Unlike older versions, HTML5 is designed for **cross-platform support,
multimedia handling, and semantic clarity**.

------------------------------------------------------------------------

## 🧩 What is HTML5?

-   HTML5 provides a **cleaner, more meaningful structure** to
    websites.\
-   It introduces new **semantic elements**, supports **audio/video
    without plugins**, and comes with **APIs for storage, graphics, and
    geolocation**.\
-   HTML5 also improves **performance** and helps build
    **mobile-friendly websites**.

------------------------------------------------------------------------

## 🚀 Key Features of HTML5

### 1. Semantic Elements

Semantic tags describe the **meaning of content**, making websites more
structured and accessible.\
Examples include: - `<header>` → Defines the header of a page or
section. - `<footer>` → Defines the footer of a page or section. -
`<article>` → Represents self-contained content like a blog post. -
`<section>` → Groups related content together. - `<nav>` → Defines
navigation links.

**Example:**

``` html
<header>
  <h1>My Website</h1>
</header>

<nav>
  <a href="#">Home</a> | <a href="#">About</a>
</nav>

<section>
  <article>
    <h2>Blog Post</h2>
    <p>This is my first blog post.</p>
  </article>
</section>

<footer>
  <p>© 2025 Teacher Trek</p>
</footer>
```

------------------------------------------------------------------------

### 2. Multimedia Support

HTML5 provides native support for **audio and video playback** without
requiring Flash or other plugins.

**Example:**

``` html
<video controls width="300">
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

------------------------------------------------------------------------

### 3. Canvas and SVG (Graphics)

-   `<canvas>` → Used to draw shapes, images, and graphics using
    JavaScript.\
-   **SVG (Scalable Vector Graphics)** → Vector-based graphics that
    scale without losing quality.

**Example (Canvas):**

``` html
<canvas id="myCanvas" width="200" height="100" style="border:1px solid black;"></canvas>
```

------------------------------------------------------------------------

### 4. Forms 2.0 (New Input Types)

HTML5 introduced **new form input types** that improve user experience
and validation.

**Examples:** - `email` → Validates email addresses. - `date` → Date
picker. - `url` → Validates URL. - `color` → Color picker. - `number` →
Numeric input.

**Example:**

``` html
<form>
  <input type="email" placeholder="Enter your email">
  <input type="date">
  <input type="color">
</form>
```

------------------------------------------------------------------------

### 5. Local Storage & Session Storage

HTML5 introduced **Web Storage API** for storing data on the client side
without cookies.

-   `localStorage` → Stores data permanently in the browser until
    manually cleared.
-   `sessionStorage` → Stores data only for the session (disappears when
    tab is closed).

**Example:**

``` js
localStorage.setItem("username", "Prakash");
console.log(localStorage.getItem("username"));
```

------------------------------------------------------------------------

### 6. Geolocation API

Allows web applications to **access the user's geographical location**
with permission.

**Example:**

``` js
navigator.geolocation.getCurrentPosition(pos => {
  console.log(pos.coords.latitude, pos.coords.longitude);
});
```

------------------------------------------------------------------------

### 7. Offline Support & Application Cache

-   HTML5 enables offline applications using **Application Cache**
    (deprecated, replaced by **Service Workers** in modern web apps).\
-   Helps create **Progressive Web Apps (PWAs)** that work without
    internet.

------------------------------------------------------------------------

## 🎯 Why HTML5 is Important?

-   Improves **readability and SEO** with semantic tags.\
-   Makes websites **interactive and multimedia-friendly** without
    external plugins.\
-   Enables **responsive and mobile-first designs**.\
-   Provides APIs for **storage, graphics, and offline use**.\
-   Ensures **cross-browser compatibility** and future-ready web
    applications.

------------------------------------------------------------------------

## ✅ Conclusion

HTML5 revolutionized web development by introducing **semantic meaning,
multimedia support, better forms, offline storage, and APIs**.\
It is the **foundation for modern frontend development** and the
starting point for learning advanced technologies like CSS3, JavaScript,
and React.


