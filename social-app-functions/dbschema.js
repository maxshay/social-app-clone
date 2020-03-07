let db = {
    screams: [
        {
            userHandle: 'user',
            body: 'this is teh scream body',
            createdAt: '2019-12-15T03:04:28.390Z', 
            likeCount: 5,
            commentCount: 2
        }
    ],
    comments: [
        {
            userHandle: 'user',
            screamId: 'askjdhfiuaskhgasukeg',
            body: 'this is my comment',
            createdAt: '2019-12-15T03:04:28.390Z'
        }
    ]
};


const userDetials = {
    // Redux data
    creadentials: {
        userId: "JljrMLuIZbYZCa23PZbBkG6e8oY2",
        bio: "Hello there",
        createdAt: "2019-12-15T07:05:34.788Z",
        email: "newuser@gmail.com",
        handle: "new user",
        location: "Sacramento, CA",
        website: "https://1nwuser.com"
    },
    likes: [
        {
            userHandle: 'user',
            screamId: 'JljrMLuIZbYZCa'
        },
        {
            userHandle: 'user',
            screamId: 'PZbBkG6e8oY2'
        }
    ]
}