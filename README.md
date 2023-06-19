# countries-app
Frontend Mentor project with React

This is my first React project made from scratch. It's a project from Frontend Mentor (https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca) with some changes and additions. 
I set it up with Vite, used React Router for pathing, and Sass for styling.

The challenge goals given by Frontend Mentor were the following. Users should be able to:
- See all countries from the API on the homepage
- Search for a country using an input field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

I started the project using the recommended API but soon opted for using the local data.json file provided in the challenge files. At the time of making this project, the website for REST countries API was threatening to shut it down and I didn't want to risk my work going to waste. Therefore the data may not be completely up to date, and I'm not responsible for any errors there.

For a while I was stuck on how to implement dark/light mode in a way that maintains the user's preference as they navigate to different routes. In the end I used local storage so that the mode stays the same even between refreshes.

Input field filters countries correctly regardless of upper/lowercase. By default the pathname starts with a capital letter, but it works even if the user types the country name in all lowercase or uppercase.

My main addition to the original challenge was adding an error element so that navigating to a route that doesn't exist leads the user neatly back to the home page. I also modified the styling a little bit: the mode toggler changes depending on the currently chosen mode, I added faint borders to make white flags distinguishable from the background, and the design is more responsive to different screen sizes. Unfortunately the original data provided flag images that were not at all uniform in size. In order to follow the model design I styled them all to the same height and width on the home page, which means some of them look stretched. In the individual info view the flags have their original dimensions.

I'm proud of my project, I learned a lot about using React Router, bug fixing, and overall problem solving. Here's a split screenshot of the home page in light and dark mode:

<img width="1024" alt="countries-app-ss" src="https://github.com/codenamecat/countries-app/assets/113186187/57db44f9-e246-45da-8182-3c8984f807b5">
