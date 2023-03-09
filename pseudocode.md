what will i create to kick off the questions to the user???


what does an svg element look like????


how can i modularize my code???


//App Structure
Class SVG - 2 keys - text and shape empty strings,  render method, setText, setShape 


Class Shape is the parent 1 key - color, setColor method


Class circle, Class triangle, Class square extend from Shape -- all return template strings of svg element shape


//Test Structure
tests should include

should render a 300 x 200 svg element

should append text element

should set text message and color

should throw if text exceeds 3 characters

should include a shape