# Toggle Data Task:
### Hosted Link: https://divyanshrajpoot9.github.io/Toggle_Data_Task/
### Technologies Used: HTML/CSS/JavaScript.
### JavaScript DOM Manipulation:
The Document Object Model (DOM) is a programming interface for web documents. It provides a structured web page representation, allowing you to access and manipulate its elements and content using JavaScript. Here are some basic DOM properties and methods.
document: The document object represents the entire HTML document and serves as the entry point to the DOM. It provides properties and methods to access and modify the document's structure, content, and style.

### Element Selection and Traversal:

  ### getElementById(id): Retrieves an element by its unique id attribute.
  #### getElementsByClassName(className): Returns a collection of elements with a specific class name.
  ####  getElementsByTagName(tagName): Returns a collection of elements with a specific tag name.
  ####  querySelector(selector): Returns the first element that matches the CSS selector.
  ####  querySelectorAll(selector): Returns a list of all elements that match the CSS selector.

This HTML code creates a simple web page called "Copy Cat." Here's a breakdown of its structure and functionality:

1. **HTML Structure**:
   - The `<!DOCTYPE html>` declaration defines the document type and HTML version being used.
   - The `<html>` element is the root element of the HTML document.
   - The `<head>` section contains meta-information about the document, such as character encoding, viewport settings, and the page title.
   - The `<body>` section contains the visible content of the web page.

2. **Page Elements**:
   - **Navbar**: It contains the title "Copy Cat Task" and has a light pink background with a blue-violet text colour.
   - **Middle Section**: This section occupies the main part of the page and is divided into two subsections:
   - **Input Section**: It contains an input field where users can enter text.
   - **Main Section**: It displays the entered text inside a box with a light goldenrod yellow background and red text colour. This section is initially empty but updates dynamically as the user types in the input field.
   - **Footer**: It displays the message "Made with Love By Divyansh Rajpoot" and has a light blue background with blue-violet text colour.

1. `text1_ref` and `text2_ref` are assigned references to HTML elements with the IDs "text1" and "text2" respectively. These references are obtained using `document.getElementById()` function. These elements will be manipulated in the subsequent steps.

2. `box3` is declared as a variable. It's used to temporarily store the text content of one of the elements.

3. `swipe_data()` function is defined. This function is responsible for swapping the text content of `text1_ref` and `text2_ref` elements.

4. Inside `swipe_data()`, the text content of `text1_ref` is assigned to the variable `box3`. This is done by accessing the `innerText` property of `text1_ref`.

5. Next, the text content of `text2_ref` is replaced with the text content of `text1_ref`. This is done by assigning the `innerText` property of `text2_ref` to the `innerText` property of `text1_ref`.

6. Finally, the text content of `text2_ref` is replaced with the text content stored in `box3`. This effectively swaps the text content between `text1_ref` and `text2_ref`.

  ## UI
![image](https://github.com/divyanshrajpoot9/Toggle_Data_Task/assets/114856467/50e642e5-53b5-4454-b985-979da73b980d)

