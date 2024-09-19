Technology: Laravel, React/Vue
Type: Fullstack Developer
Recommended for: Junior and beyond
Status: Active
Created by: @Sergio Ojeda @Nakanishi
Updated by: @Nakanishi
Updated at: 03-10-2023
Your goal is to create a patient registration application using Laravel, as the recommended tech for this challenge, but you can adapt yourself to other techs as Go or Python with FastAPI or Flask. You should implement the following functionalities:
Backend:
An API with a patient registration that requests the following information: name, email address, phone number, and a photo of the document.
The application should validate the user-entered data, ensuring all required fields are provided and valid as appropriate.
Once the patient's data has been validated, it should be stored in a MySQL database.
After a patient has been successfully registered, a confirmation email should be sent asynchronously to avoid blocking the application (it is unnecessary to design the email, use the framework's default template).
Use Docker to set up the development environment for the application.
Frontend:
List: Layout a screen where users can be displayed in the way you want. In a folding card format, where initially you can see the Name and the document photo, and when expanded you will see the rest.
User List
Add User Button
Empty states
Form: Layout a form with the name, email, phone number and a photo of the document.
Form: Validations.
Validate that the name field is only letters.
Validate that the email is only “@gmail.com”.
The phone number will have to be composed of two fields, the first field will be the country characteristic and the other will be the number.
The document photo field will have to be drag n' drop capable, and will only be able to accept .jpg images.
In case of error; show in each field a text below the input. Ideal, with an animation. Errors must be displayed once if you want to send the data.
Form: When data is sent, the different possible states of the messages must be taken into account.
Error states
Several errors state
Submitted successfully state
All these states must be in a modal, with an animation.
Form / List: Every time a user is added correctly it should be stored in the LocalStorage, in a list of users.
Keep in mind the following additional points:

- You can use Laravel's structure, conventions, and best practices that you consider best for organizing your code.
- Frontwise; use React or Vue and showcase you organization skills, your own styling methods, domain of the selected tech, domain at making reusable components, usage of standard industry-accepted tooling (TypeScript, linting, formatters), etc...
- You must ensure that your application runs correctly in some way.
- Avoid using UI libraries such as shadCN or MaterialUI, and we want to know how good you are at making components from the ground up, we are ok with primitives libraries.
- Make sure to use Laravel's validation to verify the user-entered data.
- Use a MySQL database to store the patient data.
- Develop the product with the understanding that the client will want SMS notifications within two months.
- It is not necessary to configure a real email server. You can use a library like "Mailtrap" to test email sending in a development environment.
- Use Docker to create a consistent and reproducible development environment.
- You need to upload into Github repository and shared with the People team.
  Disclaimer
  Remember not to use your name in the source code to keep the process as anonymous as possible.
  FAQ
  Can I use another tech that's not Laravel / React / Vue?
  Yes! Of course, just let us know and we'll take it into account. Laravel, React or Vue are our preferred technologies but they are not exclusive.
