# typewriter-effect
A typewriter effect that I created using JavaScript, HTML, and CSS. Let me know if there's anything that can be improved.

## the way it works
The function **textGenerator** takes string as an argument. It then separates the string into an array of individual characters and iterates through these to create span elements each containing a single character. Initially, span elements are styled to have an opacity of 0, meaning they won't be visible. The function **onTick** is ran repeatedly at a set interval, iterating through each span element to give a class of *typewriter*, which makes it visible. This creates the typewriter effect.

**textGenerator** also has the ability to highlight text in the case that something is important to the reader. For my uses, I have chosen *{ }* as syntax for when something is supposed to be highlighted. **textGenerator** looks for these symbols to see how many highlights are to be made, then runs the **highlighter** function that many times. **highlighter** saves the indexes of the first span elements that contain *{* and *}* and iterates through span elements between those indexes, giving each the class of *highlighter*, which changes their color. 


You can check it out [here](https://urmom73.github.io/typewriter-effect/).
