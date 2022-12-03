const quotes = [
    {
        quote: "Humor is the great thing, the saving thing. The minute it crops up, all our irritations and resentments slip away and a sunny spirit takes their place.",
        author: "- Mark Twain",
    },
    {
        quote: "Everyone has talent. What is rare is the courage to follow the talent to the dark place where it leads.",
        author: "- Erica Jong",
    },
    {
        quote: "I'm convinced that the only thing that kept me going was that I loved what I did. You've got to find what you love. And that is as true for your work as it is for your lovers.", 
        author: "- Steve Jobs",
    },
    {
        quote: "The most perfidious way of harming a cause consists of defending it deliberately with faulty arguments.",
        author: "- Friedrich Nietzsche",
    },
    {
        quote: "Look at market fluctuations as your friend rather than your enemy; profit from folly rather than participate in it.",
        author: "- Warren Buffett",
    },
    {
        quote: "It is no use saying, 'We are doing our best.' You have got to succeed in doing what is necessary.",
        author: "- Sir Winston Churchill",
    },
    {
        quote: "All you need in this life is ignorance and confidence; then success is sure.",
        author: "- Mark Twain",
    },
    {
        quote: "Everyone has talent. What is rare is the courage to follow the talent to the dark place where it leads.",
        author: "- Erica Jong",
    },
    {
        quote: "Take calculated risks. That is quite different from being rash.",
        author: "- George S. Patton",
    }
];

const quote = document.querySelector("#quote li:first-child");
const author = document.querySelector("#quote li:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;