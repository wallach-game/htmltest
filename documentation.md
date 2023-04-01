
### ChatGPT
Documentation

This documentation covers two files: `index.html` and `style.css`. These files together create a webpage for a cosmetics salon with a responsive design.

index.html

This file contains the structure of the web page, which consists of the following elements:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=GFS+Didot&family=Noto+Serif+Display:wght@100&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  <title>Document</title>
</head>
<body>
  ...
</body>
</html>

```

Head

The `<head>` section includes:

```html
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=GFS+Didot&family=Noto+Serif+Display:wght@100&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
<title>Document</title>

```

- <meta charset="UTF-8">: Defines the character encoding for the page.
- <meta http-equiv="X-UA-Compatible" content="IE=edge">: Ensures compatibility with Internet Explorer.
- <meta name="viewport" content="width=device-width, initial-scale=1.0">: Sets the viewport width and initial scale for responsive design.
- <link> tags: Connect to external resources, such as fonts from Google Fonts and the style.css file.

Body

The `<body>` section contains the following elements:

```html
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#">Domů</a></li>
        <li><a href="#">Služby</a></li>
        <li><a href="#">O mně</a></li>
        <li><a href="#">Kontakt</a></li>
      </ul>
    </nav>
  </header>
  <div class="mainwindowwrapper">
    <div class="mainwindow">
      <div class="imageWrapper">
        <img src="girl.png" alt="">
      </div>
      <div class="textPart">
        <h1>Karolina Engeová kosmetika</h1>
        <h2> a permanentní make up</h2>
        <p>Vítejte na stránkách našeho kosmetického salonu, kde vám nabízíme profesionální péči o vaše tělo. Jsme tu pro vás, abychom vám pomohli zlepšit váš vzhled a pocit pohody. Zarezervujte si nyní návštěvu a užijte si okamžik klidu a relaxace.</p>
      </div>
    </div>
  </div>
</body>
  
```


- <header>: Contains the navigation bar, which includes a list of links wrapped in an unordered list (<ul>).
- <div class="mainwindowwrapper">: A container that centers the main content of the page.<div class="mainwindow">: The main content container, which includes an image and text.<div class="imageWrapper">: A container for the image of the girl.<div class="textPart">: A container for the salon's title, subtitle, and description.
- <div class="mainwindow">: The main content container, which includes an image and text.<div class="imageWrapper">: A container for the image of the girl.<div class="textPart">: A container for the salon's title, subtitle, and description.
- <div class="imageWrapper">: A container for the image of the girl.
- <div class="textPart">: A container for the salon's title, subtitle, and description.

###style.css

The `style.css` file contains the styling rules for the webpage. Below is an overview of the key CSS rules used.

Root Variables

```css
:root {
  --backgroudpink: #edbbbe;
  --frontgroundpink: #edbbbe;
  --highlightpink: #f4d0cf;
  --mainwindowoffset: 5rem;
  --font: 'Noto Serif Display', serif;
}

```

This section defines the custom CSS properties (variables) used throughout the file. Variables include colors, offset, and font.

Body Styling

```css
body {
  margin: 0;
  background: linear-gradient(137deg, rgba(237, 187, 190, 1) 0%, rgba(244, 208, 207, 1) 45%, rgba(237, 187, 190, 1) 100%);
  height: min-content;
}

```

The `body` styling sets the margin to 0, applies a linear gradient as the background, and sets the height to `min-content`.

Header and Navigation Styling

```css
header {
  background-color: var(--backgroudpink);
  padding: 1rem;
}

nav ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

nav a {
  display: block;
  padding: 1rem;
  color: #333;
  text-decoration: none;
}

```

These rules style the header, navigation, and links. The header has a background color and padding, while the navigation uses a flex layout to displaythe links horizontally. The navigation links have a block display, padding, and no text decoration.

Main Content Styling

```css
.mainwindowwrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mainwindow {
  width: 60vw;
  height: calc(100vh - var(--mainwindowoffset));
  background: var(--frontgroundpink);
  border: solid var(--highlightpink) 1px;
  display: flex;
  justify-content: center;
  font-family: var(--font);
  color: #635353;
}

.imageWrapper {
  display: flex;
  align-items: flex-end;
}

.mainwindow > div {
  width: 50%;
  height: 100;
}

.mainwindow > div > img {
  width: 25em;
  height: 25em;
}

```

These rules style the main content of the page, including the main window container, image wrapper, and the image itself. The main window wrapper is centered using flexbox, and the main window has a background color, border, and flexbox layout. The image wrapper uses flexbox to align the image to the bottom.

Media Query and Responsive Design

```css
@media (orientation: portrait) {
  .mainwindow {
    width: 60%;
    display: flex;
    position: relative;
    flex-direction: column-reverse;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;
    padding: 0em 1em 0em 1em;
  }

  .mainwindow > .imageWrapper {
    position: absolute;
    margin-top: 22em;
    margin-right: 1em;
    z-index: 0;
  }

  .mainwindow > div {
    width: 100%;
  }

  .mainwindow > .textPart {
    display: flex;
    flex-direction: column;
    text-align: center;
    z-index: 1;
  }

  .mainwindow > .textPart > h1 {
    font-size: 1.75em;
  }

  .mainwindow > .textPart > h2 {
    font-size: 1.25em;
    margin-top: -0.5em;
  }

  .mainwindow > .textPart > p {
    font-weight: 600;
  }

  .mainwindow > div > img {
    width: 17em;
    height: 17em;
  }
}

```

This media query applies styles when the screen orientation is portrait. It modifies the layout of the main window and its child elements to display the content in a single column. The image and text are rearranged, with the image now placed above the text. The dimensions and positioning of the image, headings, and paragraphs are also adjusted for better display on portrait-oriented screens.

