# react_hook_form
This React project shows 2 different ways to utilize the useState hook.
<br>
With 3 components: App.js, Form.js, and FormObject.js
<br>
App.js is the parent component.
<br>
Form.js is a child component. It is displayed in the blue box and holds a useState hook with 5 state variables. Each of these variables corresponds to an input field in the form. Each input field has an onChange handler that updates the corresponding state variable with the new value entered by the user into the form. State can be seen updated in real time in the right blue box.
<br>
FormObject.js is a second child component. It is displayed in the green box. It also has a useState hook but this time it is managing state as an object. A changeHandler function is called with the OnChange event listener by the change of an input field matching the name and using the event.target.name to update event.target.value. FormObject.js also uses conditional rendering to display error messages below each input field when simple front end validations are not met. State can be seen updated in real time in the right green box.

<img width="978" alt="Screenshot 2023-08-31 at 6 56 57 PM" src="https://github.com/ThereIsASmile/react_hook_form/assets/57597467/b3745e47-8a5b-4db2-a97b-5b8c42b96d89">
