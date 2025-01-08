# Flow

## Inspiration 🌊

Staying in instead of going out, saving on coffee, eating instant ramen everyday, these are all things that we can do to save money and improve our financial health. Sometimes, it’s even what so-called financial gurus suggest to save money for an early retirement. We don’t believe in this type of thinking, so that’s why we created Flow. We believe that financial health shouldn’t come at the cost of your physical or mental health—even more so for students.

Many students can’t rely on budgeting apps for a multitude of reasons, which include but are not limited to, changing income and expenses, student tuition and loans, and unexpected expenses. We created Flow to be a more financially flexible and intuitive way to build a budget. 

Students are in a unique place where they are under the constant stress of exams, feeding themselves, and attempting to maintain a healthy lifestyle. So, if you need to spend some money to destress, we support you. We built Flow so that it can help plan your future while helping you stretch every dollar to its last.

The Features:

Some key features that we wanted to include: the ability to save on subscription plans, being able to cancel any subscription plan with the touch of a button, and to also keep track of your finances no matter how erratic your income is. Here’s an example of the features in action:

![demovid](https://youtu.be/vBFX6naBOaw)

Feature 1: Viva La Revolution! (Or not?)

![stats](/frontend/assets/images/stats.png)

Even the most advanced budgeting apps need to have some key features that allow users to see how much they are spending and to also create plans to save for the future. Our entry survey takes in your income, your expenses, email, and other factors that allows us to generate a quick budget for you to see. We then keep track of your goals and show you your progress to achieving these goals. Keeping in my mind that students often rely on short-term internships to supplement their income, we provide an easy way for users to update any key information that may impact their long-term budget. Additionally, we want to provide users with an easy to understand interface of all their budget breakdowns and how on track they are to meeting their goals.

Feature 2: Cancelling Done Right

![cancelscreen](/frontend/assets/images/cancelscreen.png)

Money makes the world spin, even more so if you’re a university student. In between your exams, going out, and trying to find time for extracurriculars, we often rely on subscriptions to help make the most of our time. This could include UberEats, SkipTheDishes, or Amazon Prime, I mean most of us want to make the most out of student deals right? More often than not, companies will hide their cancel button behind a disgusting mess of hidden links, clumped websites, or straight up predatory services. Just take a look at our demo!

You don’t want to deal with this, and neither do we! We leveraged the use of machine learning algorithms to help you deal with this process, and by using a knowledge base of company websites, we are able to directly cancel your subscriptions through your email with a simple click of a button.

Feature 3: Deal or No Deal?

![pricecheck](/frontend/assets/images/pricecheck.png)

Don’t worry, we’ll help you figure that out! Student deals are everywhere, you only have to know where to look. Students, the main demographic, simply don’t have the time to look. There are definitely useful subscriptions that help improve your student life immensely and others not so much (Netflix…). Either way though, we’re here to help you save money. We compare your current plan to other plans and see how you can save money. Don’t worry, you won’t have to do any work! You simply have to click on the subscription to get a summary of how you could be saving money and then you can hit a button to switch to that plan!

How we built it:

Frontend:

We wanted to fully utilize React Native's potential and took advantage of its cross-platform capabilities to build a seamless and responsive user experience. Our main focus was to create an intuitive mobile interface that would allow users to easily navigate through the subscription management process.

We began by designing a custom user interface with a clean, modern look, ensuring it would work smoothly on both iOS and Android devices. Key features included an easy-to-use subscription list, where users could view their active subscriptions, plan details, and upcoming payments. We used React Navigation to manage the app's navigation and ensure quick, smooth transitions between screens. One of the challenges we faced was handling dynamic subscription data from multiple sources. We leveraged React Native’s state management to keep the app’s data consistent across different screens and ensure updates from the backend API were reflected. This was particularly important when users made changes to their subscription plans or when new information about pricing and discounts was available.

To integrate the AI agent from Voiceflow without the need for a chatbot interface, we implemented a custom API call using the Voiceflow Knowledge Management API. This allowed us to fetch relevant data from the backend and display it in the app through specialized React Native components. We used Axios to make the API calls and manage responses through React Native’s state system to ensure real-time updates.

Overall, our goal was to provide a smooth and responsive user experience, and we successfully integrated the backend with React Native to achieve this. The app is now able to manage subscriptions effectively, send alerts to users, and allow them to easily change plans or cancel subscriptions.

Backend:

We really wanted to leverage the abilities of Voiceflow to the maximum and so we built a custom AI agent using the many features of Voiceflow. Most of our key features required building a knowledge base that the agent could pull from, so we fed the agent a few pricing sites from the largest subscription-based companies that students use (ex: Amazon, UberEats, SkipTheDishes, etc). The agent would then be able to webscrape the data from these sites and would also be able to find cheaper options for the consumer to switch to.

Something that we had the most trouble with when training the agent was getting the agent to recognize company names and to also find the prices of the different plans along with which companies offered certain discounts. We were able to mitigate these difficulties through adding more information to the knowledge base so that the agent was able to establish clear entities and intents from when we called it in the app.

Additionally, we leveraged Zap’s compatibility with Voiceflow to send the information the agent collected to an email API. The AI agent is also able to format emails to send to Zap, however we decided to send pre-determined responses to avoid variability in the responses. This agent would then be able to send cancellation emails to companies directly, allowing us an easy way to connect the user with the company.

Finally, since we didn’t want to add a chatbot to our app, we had to find a unique way to connect our app to the AI agent. We wanted a seamless experience to allow users to easily cancel and change their subscriptions. We created an API call using Voiceflow’s Knowledge Management API to directly call it from our application through the use of our own specialized components. Using Postman to test the API, we then were able to directly integrate it into our app through React-Native.

## Get started/try the demo!

1. Clone the repo

   ```bash
   git clone https://github.com/tongliu999/hackWestern11.git
   ```

2. Install dependencies

   ```bash
    cd frontend
    npm install
   ```

3. Download the Expo Go app (optional)
4. Start the live server

   ```bash
    npx expo start
   ```

5. Run the demo by scanning the generated QR code
