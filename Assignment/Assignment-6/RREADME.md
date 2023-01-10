# Assignment-6:
Explain event bubbling and capturing with an example.  

In JavaScript, propagation of events is done, which is known as 'Event Flow'. Event Flow is the sequence or order in which the particular web page receives the event. Thus, in JS, the process of event flow depends on the following aspects, which are:
- Event Bubbling
- Event Capturing  

### Event Bubbling:-  

Event bubbling is a method of event propagation in the HTML DOM API when an event is in an element inside another element, and both elements have registered a handle to that event. It is a process that starts with the element that triggered the event and then bubbles up to the containing elements in the hierarchy. In event bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.  

*Example of Event Bubbling:*  
Let's look at the below example to understand the working concept of Event Bubbling:  

```html  
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Bubbling</title>
</head>
<body>
    <h1>Event Bubbling</h1>
    <p id="parent">
       Lorem, <strong id="child">ipsum</strong> dolor sit amet consectetur adipisicing elit. Saepe tempora beatae, consequatur, 
       commodi amet enim facilis quas minima provident rerum nesciunt nemo pariatur est, recusandae
       tenetur nisi dolorum sapiente doloribus.
    </p>
    <script>
        document.getElementById("child").addEventListener("click",function() {
            console.log(`I am Parent`);
        });
        document.getElementById("child").addEventListener("click",function() {
            console.log(`I am Child`);
        },true);
    </script>

</body>
</html>  

Here,when the strong element i.e.ipsum is clicked, it will first print "I am the Child" which means that the function within the child event handler executes first. Then it moves to the invocation of the p parent function.The sequence has taken place due to the concept of event bubbling. Thus, in this way event bubbling takes place.
```  
### Event Capturing:-  
Event Capturing is opposite to event bubbling, where in event capturing, an event moves from the outermost element to the target. Otherwise, in case of event bubbling, the event movement begins from the target to the outermost element in the file. Event Capturing is performed before event bubbling but capturing is used very rarely because event bubbling is sufficient to handle the event flow.  

*Example of Event Capturing:*  
Let's look at the below example to understand the working concept of Event Capturing:  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Capturing</title>
</head>
<body>
    <h1>Event Capturing</h1>
    <p id="parent">
       Lorem, <strong id="child">ipsum</strong> dolor sit amet consectetur adipisicing elit. Saepe tempora beatae, consequatur, 
       commodi amet enim facilis quas minima provident rerum nesciunt nemo pariatur est, recusandae
       tenetur nisi dolorum sapiente doloribus.
    </p>
    <script>
        document.getElementById("child").addEventListener("click",function() {
            console.log(`I am Parent`);
        },true);
        document.getElementById("child").addEventListener("click",function() {
            console.log(`I am Child`);
        });
    </script>

</body>
</html>  

Here,when the strong element i.e.ipsum is clicked, it will first print "I am the Parent" which means that the function within the parent event handler executes first. Then it moves to the invocation of the strong child function.The sequence has taken place due to the concept of event capturing. Thus, in this way event capturing takes place.
```








