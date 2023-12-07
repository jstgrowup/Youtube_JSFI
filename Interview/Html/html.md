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
   


