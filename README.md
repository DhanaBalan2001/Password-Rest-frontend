PASSWORD RESET FLOW

    
   1. Overview :

       - This client-side setup creates a simple user interface for requesting a password reset link by submitting an email.
       
       -  React handles the form's logic, while Bootstrap provides a responsive and clean design.

   2. Key Features :
 
       - User Interface :

           a) The user is presented with a form to enter their email address.

           b) The UI is styled using Bootstrap to ensure responsiveness across different devices.

       - Handling User Input :

           a) The user submits their email, which is captured by React state.

           b) On submission, a POST request is made to the backend API to initiate the password reset process.

   3. API Request :

       - Use either axios or the native fetch function to send the API request to the backend.

       - The request triggers the backend to send a password reset link to the provided email.

   4. Feedback and Validation :

       - Upon submitting the form, success or error messages are shown to the user based on the backend response.

       - Success: A message informs the user that the reset link has been sent.

       - Error: If the email is not found or any issue occurs, an appropriate error message is displayed.

       - Implement real-time form validation to ensure that the user submits a valid email format.

   5. Technical Notes :

       - Ensure form validation before submission to avoid incorrect input.

       - Integrate proper error handling in the frontend to give users clear and helpful feedback.

       - The UI can be further customized with Bootstrap components like Alerts, Buttons, and form styles for an enhanced user experience.
     
         
