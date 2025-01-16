Project name: Raise the Bar: a workout tracker

Render link: https://wk5a-nryo.onrender.com

Repo link: https://github.com/CW987/wk5a.git 

Team members: Curtis, Emine, Ricards and Hannah 


Project description:
A workout and mood tracker hybrid, allowing the user to input data about their workout into a form and save it for future reference. 



Problem domain: 

As it is January a surge of people suddenly sign up to the gym to start their journey on becoming a healthier and fitter version of themselves. Therefore it would be perfect to provide users an application that tracks their daily mood alongside a workout plan that they are currently doing. This can help them with achieving their fitness goals and keep them motivated as they see their progress.

User stories:
(e.g. As a user, I want to see a list of the items I have in my pantry.)
As a user, I’d like to have a form where I can track my workout progress.
 As a user, I would like to have a form for my daily schedule.
As a user I want the app to work on my desktop as well as my phone and tablet. 
As a developer I would like to deploy my application so that users can access it.
 As a developer, I want to create a working API GET route so that I can retrieve data from the server and display it to the users
 As a developer, I want to create a working API POST route so that users can send data to the server and store it.
As a developer, I want to create and seed a database with dummy data so that I have realistic test data for development purposes.

Wireframe:

![task management](/Wireframe.jpg "Our Trello steps")

Trello:

![task management](/Trello.jpg "Our Trello steps")



Database:

![Database](/database.jpg "Our Database on Supabase")


A list of any libraries, frameworks, or packages that your application requires in order to properly function:
(e.g. Express.js, pg, cors...)
Express
Pg
Cors
Dotenv
Open source database: Supabase which uses Postgres
API get and post route
Deployed on Render
Open source version control software: Github

Instructions on how to run your app:

Go to the website and fill in the required fields, the date of your activity, a little note on your mood and any notes on the workout.
 Fill out what exercise you did, how many sets, reps and whether you used any weight. 
If no weights were used, set it to 0. 
If you want to filter the information  by a specific date, use the second date selector and press “Show”.



Lighthouse report:

![LightHouse](/lighthouse.jpg "Our Light House Report")


Reflections:

Please mention the requirements you met and which goals you achieved for this assignment.

🎯 Were there any requirements or goals that you were not quite able to achieve?

🎯 If so, could you please tell us what was it that you found difficult about these tasks?
 
What went really well and what could have gone better?
Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials).
Describing errors or bugs you encountered while completing your assignment.

The form was simple enough to make however, the issue came with styling and figuring out a way to put it where we wanted it. We knew that it was best to use Flexbox to do this. I looked at Manny’s example page from the guest book assignment to try and copy the way he aligned his form but I couldn’t get the same result. I looked at online resources for Flex Box, but I couldn’t understand them. Thankfully, with the help of the team we figured out the right properties to use to get the look we required.


The application was not displaying the form comments that the user had submitted. We realised that there was an error in the front-end as the CSS was using an ID name but the querySelector method was using a class name. Therefore we changed the ‘.’ to a ‘#’, so it would be able to select the div that the messages were stored in and append it to the message container. 

We also noticed that if you did not fill out all of the fields in the form it would create an error and the comment would not display. Therefore to make sure that all fields in the form were filled, we added the ‘required’ attribute into the html form. This ensures that the user will fill out the whole form and allow it to be displayed in the results section. 

Media queries and testing. Lots of trial and error with CSS and the HTML. Major block was resolving conflicts with github, upload errors when switching branches etc even if following instructions. I found forcing it to upload or create a new branch is 

Found the media queries easier once I removed some of the base CSS styling in the main sheet, then adding the styling in media queries. 

I needed to synchronize html and SQL date values ​​to set a date filter. I had some difficulty converting SQL date data. After researching on the web, I found a sample code and adapted it to the project. After synchronizing the date values, I was able to display the data on the screen.


References:
(e.g Third-party APIs, CSS resets, icons, images... )

Colour scheme:
https://colorhunt.co/
Response.ok:
https://developer.mozilla.org/en-US/docs/Web/API/Response/ok 
Events:
https://developer.mozilla.org/en-US/docs/Web/API/Event/target 
ClassList property:
https://www.youtube.com/watch?v=XYzSyPlY7_E&ab_channel=dcode
Button tutorial:
https://youtu.be/tDqTXipQmBU?si=pBeKNFQfTVR4Vyh4
Forms:
https://www.youtube.com/watch?v=2O8pkybH6po&ab_channel=BroCode
Filterdate:
Date.prototype.getDate() - JavaScript | MDN
Flex-Box guide:
https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/

