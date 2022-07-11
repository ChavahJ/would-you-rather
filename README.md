# Would You Rather?

This is a project for Udacity's React Nanodegree. It was designed to test knowledge of React, Redux, and unit testing with Jest.

It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The premise of the project is the creation of an employee polls site by a benevolent HR department.

Inside the nifty login modal, you can log in as one of four users. Once inside the project, if you refresh the browser you will get logged out again. You can also logout at any time by clicking on the "log out" button in the header navigation.

Also, data does not persist from one browser session to the next.

As a temporary authorized user, you can view all the polls on your dashboard, both answered and unanswered. You can click into any poll from it's card on the dashboard.

Inside the poll page, you will see a pretty avatar of the hypothetical author of the poll.

There will always be two options.

If you have already answered the poll, then you will clearly see which answer you chose, how many others chose that answer and the other one, plus the percentage of votes each answer got.

You can create a new poll, by clicking on the New Poll link in the header navigation. There you can enter two questions about whichever issue is burning inside your brain. My favorite poll to create? "Pet bunny" vs "Pet cat". They are both so soft and fluffy, I can never decide.

Finally, you can head over to the leaderboard where you will see a breakdown of all four users. How many polls did they create? How many did they answer? The competition is fierce, but you can quickly climb the leaderboard as long as you don't refresh the browser.

Also, just for fun, if you try to go to a question that doesn't exist, you will be redirected.

## Get Started

To get started, first copy the repository:

```
git clone https://github.com/ChavahJ/would-you-rather.git
```

Or you can download a ZIP file directly from [Github](https://github.com/ChavahJ/would-you-rather.git).

Go to the main directory of the project.

run `NPM install`

run `NPM start`

This will run the app in development mode. In general, I didn't optimize this for a production build.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Get Testing

If you prefer to test rather than view, simply run `NPM test`

This will launch the test runner in the interactive watch mode.

As per the [rubric](https://review.udacity.com/#!/rubrics/4684/view), I implemented [Jest](https://jestjs.io/) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for this project.

When I run `NPM test` I get the following results:

![image of my test results](/src/images/npm-test-results.png)
