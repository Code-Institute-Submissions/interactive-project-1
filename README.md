# Weather Application

This weather application is created to view the current weather forecast. By typing the city or zip code(USA only), the user is able to view the current conditions outside, temperature, pressure, and humidity anywhere in the world. The website is simplistic yet functional which leaves more room for further features that can be added in the future.

# UX

As a user, I want to be able to know the current weather status at a given place by typing the city or zip code(USA only).

# Technologies

- HTML
- CSS
- Javascript

# Features 

##### Implemented Features:

- Utilized CSS-Grid to properly separate the order of elements in the source from their visual presentation. Each element has their own grid-area that provides separation from each element, which prevents the risk of things overlapping due to css changes like image and/or text sizing, small viewports, etc
- Using fetch to get the data from the API as JSON
- Openweather API from: [openweathermap](https://openweathermap.org/)


##### Future Implementations:

- Add an animated icon for the current weather status
- 7 day weather forecast
- Visual presentation of the website

# Testing

Initially I wanted to use the API from [DarkSky](https://darksky.net/dev). Unfortunately I struggled to implement it in my project due to not being able to API request by typing the city. The DarkSky API requires longitude and latitude to be able to get the location. I would have to use the DarkSky API in conjuction with Google location API to be able to search by city location. In the process, I ended up changing my API midway through the development due to me getting stuck. I changed it to the Openweather API, which has city request parameters built into the API.

The website was tested across multiple platforms, browsers (changing viewports). I also sent the project to my mentor for testing.

# Credits and Acknowledgements

- [Jamie Vaughn](https://github.com/JamieVaughn) for CSS-Grid lessons
- [Openweather](https://openweathermap.org/) API 
- [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Button Animation](https://www.w3schools.com/howto/howto_css_animate_buttons.asp)



