## HTML ? Difference between HTML & HTML5 advantages of HTML5

- HTML is the standard markup language used to create web pages
- Hyper means the attribute tags
- Text means the p of h tags
- Markup language is used to define the structure of a document using elements like headings , paragraphs , links , lists and more
- HTML is not a programming language its a markup language

## advantages of HTML5

1. new sementic elements : <header>, <nav>,<article>,<section>,<aside>,<footer>
2. Form Input types : <type="date">,<type="email">
3. in html 5 the audio and video are also supported
4. Mobile compatibility
5. Simpler Code

## What is the difference between HTML and XHTML?
`XHTML`
```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "dcsadfasdfcds">
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
 <head>
   <meta charset="UTF-8" />
   <meta http-equiv="X-UA-Compatible" content="IE=edge" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>Document</title>
 </head>
 <body>
   <h1>hello</h1>
 </body>
</html>

```
 - XHTML came before the HTML 5 to solve some issues which were coming in the HTML
 - it stands for `eXtensible HyperText Markup Language` its a different markup language 
## what is the role of DOCTYPE in HTML?
 - DOCTYPE(DOCUMENT Type) declaraition specifies the version of the HTML
 - DOCTYPE tells the browser which version of HTML it is and how to interpret 
## What if i remove the DOCTYPE 
- it will still render the page but they will not be able to validate the version of HTML which might lead to some compatibality issues
## What is the difference between Head & Body in HTML? where to place JS link reference ?
- so Head element is like the index of a book its the place where we place all our meta-information . For example <title>,<meta>,<link>,<script> <style> etc
- Body is the element where we put the actual content of the webpage like div, h1,p,img etc
- if you are manipulating the HTML elements in your JS functions then place the JS link at the end of the body section because until then all the elements will be loaded else you can put it in the head tag
## Title tag
- <title> tag is like the name of our web page 
  `advantages`
    1. **SEO** : Search engines use the title as the main heading for search results
    2. **Bookmarks** : Title tag is used as the default name for the bookmark
    3. **Social Media Sharing** : Title tag is used as the default title in the shared post
    ``
   <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style></style>
  </head>
    ``
## Meta Tags 
  ``
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Technical subahm" />
    <meta name="keywords" content="node, React, angular" />
  </head>
  ``
    1. Character Encoding : This helps browsers to interpret the different characters in the document. The charset="UTF-8" attribute ensures that characters from different languages will be displayed
    2. View Port : responsive design viewport meta tag is crucial for creating mobile-friendly reponsive web designs for various screen sizes
    3. Description for SEO : This meta tag provides description of  the content of the page for the search engines
    4. Keywords : SEO

## What are HTML elements ? DIff between Element and Tag?
 - HTML elements are the builiding blocks  of web pages
 - Elements consists of a start tag, content and an end tag
 - Tag is a specific part of an element that denotes the beginning or end of that element
## div element 
 - the element in HTML is a container that is used to group and structure the content on a webpage
## div Vs span?
 - div element in HTML is a container that is used to group and structure the content on a webpage
 - span element in HTML is an inline container used to apply styles 
 - div is a block-level element and span is an inline element
# semantic elements
 - <header>, <main>,<section> and <footer> are semantic elements used to define the layout and structure of a webpage in a meaningful and organized way
 - header contains the header content of website
 - main contains the main content of the document
 - footer contains the group related content
 - address provides contact information
# section and article elements difference?
 - `section` element is a generic container used to group related content together
 - The `article` element represents a self-contained or independent piece of content with a title and content 
 ``
    <section>
      <h2>mobile section</h2>
      <p>Samsung , nokia</p>
    </section>
    <article>
      <h1>Festival Sale</h1>
      <p>10% Discount on all items</p>
      <footer>
        <p>Terms and conditions apply</p>
      </footer>
    </article>
 ``
# what are empty elements?
- An empty element in HTML is an element that doesnt need content between opening and closing tags
- Empty elements are also called a self-closing or void elements
- Empty elements in HTML : <img>,<input>,<br>,<hr>,<meta>,<embed>
# Semantic Elements in HTML?
- Semantic elements in HTML are elements that prvide meaning to the content they contain
- div is not a semantic element because div is a general-purpose structural element
# Can HTML tags be written in Uppercase?
 - Yes they are not case sensitive but its not recommended
# HTML attributes?
 - HTML attributes provides additional information about HTML elements 
 - example : id and classes
 - there are common and specific attributes
   1. Common Attributes : class, id,style . They are common and applicable for all elements
   2. Specific Attributes are like src, href, alt,width , height , target, rel, type , value, name, placeholder, disabled . These are specific to the elements
# What are data attributes in HTML?
 ``
 <div data-info="info" id="div1">Data attributes </div>
 ``
 - Data attributes in HTML provide a way to add custom data attributes to add additional informational in elements
 - Data attributes are specified using the `data-` prefix

# what are the 5 types of Links in HTML?
 1. **Anchor Link** : Anchor Link used for navigating from one webpage to another 
 ``
  <a href="https://google.com">google</a>
 ``
 
 2. **External resource Link** : it is used to connect to an external resource like a stylesheet or an icon
 ``
<link rel="stylesheet" href="style.css">

 ``
 3. **Image Link** : used to create a clickable image that leads to another webpage
 ``
 <a href="https://google.com">
      <img src="abc.jpg" alt="">
 </a>
 ``
 
 4. **Bookmark Link** : points to a specific location within a
 webpage using a named anchor
 ``
  <a href="#section1">To section 1</a>
    <a href="section1"></a>
    <p>Content of section 1</p>
 ``
 
 5. **Email Link** : creates a clickable link that opens  the users default email
 ``
  <a href="mailto:deysubham999@gmail.com">send email</a>

 ``
# what is the diff between Absolute and Relative URL's?
- `Absolute URL` : Absolute URLs provide the complete web address of aresouce
- It typically used to link to resources on different websites
``
<a href="http://www.abc.com"/>
``

- `Relative URLs` : it specifies hte locationn of a resource in relation to the current document 
- They are used when linkking to resources within the same website
``
<a href="page.html"/>
<a href="sub/page.html">
``

# What is the purpose of the <nav> element ?
- it contains the navigation links
- it is good from SEO perspective
# What is a Fragment Identifier in a URL ?
 - A fragment identifier is used to navigate to a specific section of the same webpage
 - Fragment identifier is preceded by a #(hash) symbol
# What are different types of Lists in HTML?
 1. **Ordered List** : An ordered list is a list where the items are numbered or ordered in a specific sequence
 ``
  <h2>Ordered Lists</h2>
   <ol>
    <li>item 1</li>
    <li>item 2</li>
   </ol>
 ``
 
 2. **Unordered List**
 ``
  <h2>Unordered List</h2>
   <ul>
    <li>Item A</li>
    <li>Item B</li>
   </ul>
    
 ``
 3. **Description List**
 ``
    <h3>Description List</h3>
    <dl>
      <dt>term1</dt>
      <dd>description</dd>
      <dt>term2</dt>
      <dd>Description</dd>
    </dl>
 ``

# what is DOM?
 - The DOM stands for document object model 

# 