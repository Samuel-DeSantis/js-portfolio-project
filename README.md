# js-portfolio-project

## Objectives

[X] [Project Summary](id="section_1")
[X] [Getting Started](id="section_2")
[X] [Design](id="section_3")
[X] [Challenges](id="section_4")
[X] [Conclusion](id="section_4")

## <a id="section_1">Project Summary</a>
The inspiration for this project comes from my favorite hobby, rock climbing. I thought it'd would be a cool idea to design a website where I could log my climbs to keep track of my progress and achievements. My goal was to create a clean and easy to use where I could log my climbs quickly and also see how my progress builds with every climb I add.
## <a id="section_2">Getting Started</a>
When first approaching the project, my main task was to determine what information I needed to keep track of for my backend and how I was going to access it. I decidede that the relevant information I wanted to keep track of for the climbs was the location, number of ascents, difficulty, and a description of the climb. I created a climb model with these parameters then tested to make sure that I could indeed add, edit, and remove database entries. Once I had the backend pretty flushed out I then moved onto designing the frontend.
## <a id="section_3">Design</a>
I wanted to create a clean frontend but also didn't want to spend the time to customize every little detail, so I went for the Bootstrap CSS framework. I was able to assemble a clean outline for the site rather quickly with Bootstrap and was able to play around with different features like the modal for the create and edit forms. I took different portions from the bootstrap documentation and adjusted it to fit my application like with the climb badges at get added towards the bottom of the page. I developed the JavaScript to basically follow RESTful routes (all except SHOW since all the badges are already being shown on the page) and to watch out for form submissions to create and edit different entries. Since I wanted a SPA I thought using the modal for the forms would a cool way to bring focus to the form but not make it feel like you were leaving the page.
## <a id="section_4">Challenges</a>
I felt rather confident in my JavaScript programming ability with functions and classes but I didn't know till the project that I didn't fully grasp everything with the Fetch API. I was stuck on the create portion of CRUD for a little bit and was able to figure that out after revisitng some labs and reading some online forms. I realized that I was accepting the correct parameters and had them named correctly, but I forgot about strong parameters and I was sending the params without fulfulling the required 'outer' param. I got that figured out and the other main issue I had was implementing the edit/update portion of CRUD. Basically the issue I was having stemmed from a lack of a plan going into it. I was waiting for a click event on the edit form for 'submit' and I also was fetching the params for the specific entry so you could see it as a placeholder and it would resubmit the current values of the climb. The issue I was having was that I had the ID for what would be the SHOW route but through the event listener I didn't have a way to get the ID for patching the entry with the new data. To resolve this, I created a hidden tag that would be updated with the new ID whenever you hit the 'Edit' button on the specific badge. These challenges definitely showed me where I was lacking and helped me to improve on those areas.

## <a id="section_5">Conclusion</a>
This project was really fun and I liked bringing together the front and back ends of programming. I feel that I have a much better understanding of JavaScript frontend from doing this project and I really liked playing around with the design and different features of Bootstrap.