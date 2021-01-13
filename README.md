# Petful Client
[Live App](https://petful-client-gamma.vercel.app)

[Client Repo](https://github.com/AngeloThinks/petful-client.git)

[Heroku Live App](https://pacific-chamber-02247.herokuapp.com)

[Server Repo/API Repo](https://github.com/AngeloThinks/petful-server.git)

## About:
Petful simulates a web application for a pet adoption service. The application maintains two queues: one for available dogs, and another for avaialble cats. The application also displays the people that are in line to adopt a pet. The application simulates pet adoption by scrolling through cats and dogs; making each pet available for adoption when the queue reaches the user's name. 

## How it works
The adoption process works strictly on a "First-in, First-Out" basis. The FIFO is based on the animals that came to the shelter first. People can adopt a cat, or a dog. As you enter the adoption page, the user will enter their name and be added to the queue. 

## Technologies Used
## Frontend
    *JavaScript
    *React
    *React-Router
## Backend
    *NodeJS
    *Express
    *Knex

## Landing Page
![Petful Landing Page](/screenshots/petful-landing-page.png)


## Adoption Page
![petful-adoption-page](/screenshots/petful-adoption-page.png)

## Add Name Section
![petful-add-name](/screenshots/petful-add-name.png)

## Adoption Success
![petful-adoption-success](/screenshots/petful-adoption-success.png)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


