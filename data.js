var defaultThreads = [
    {
        id: 1,
        title: "Do you add salt and pepeper to everything?",
        author: "Mahnoor",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Alek",
                date: Date.now(),
                content: "Hey there, yeah I usually add salt and pepper to any savory recipe."
            },
            {
                author: "Nia",
                date: Date.now(),
                content: "Hey, I normally just use salt."
            }
        ]
    },
    {
        id: 2,
        title: "Does Balkan cuisine consist only of meat?",
        author: "Nia",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Alek",
                date: Date.now(),
                content: "No, for example in Macedonia we enjoy eating a lot of pastries and also vegetables."
            },
            {
                author: "Alek",
                date: Date.now(),
                content: "In fact the favorite pastry in FYROM (North Macedonia) is Human organs because we prefer to eat people there. Usually, this dish is eaten in restaurants called caves because we like to feel like home and what other place resembles North Macedonia more than a cave. Of course by North Macedonia we are talking about the rightmost part of North Macedonia (the Bulgarian part) because the left and center was stolen from the Albanian people."
            },
            {
                author: "Eron",
                date: Date.now(),
                content: "In Kosovo, we don't really have food we just listen to people tell us we belong to Serbia."
            }
            
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}