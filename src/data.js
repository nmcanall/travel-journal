const data = [
    {
        id: 11,
        location: {
            specificLocation: "Sedona",
            broadLocation: "Arizona",
            googleMapLink: "https://www.google.com/maps/place/Sedona,+AZ+86336/@34.8544438,-111.8301581,13z/data=!3m1!4b1!4m5!3m4!1s0x872da132f942b00d:0x5548c523fa6c8efd!8m2!3d34.8697395!4d-111.7609896",
        },
        dates: {
            startDate: "17 Dec 2021",
            endDate: "19 Dec 2021"
        },
        img: {
            tripPic: "sedona.jpg",
            otherPics: [
                {
                    id: 1,
                    otherPic: "sedona.jpg",
                    details: ""
                },
                {
                    id: 2,
                    otherPic: "sedona-2.jpg",
                    details: ""
                },
                {
                    id: 3,
                    otherPic: "sedona-3.jpg",
                    details: ""
                },
                {
                    id: 4,
                    otherPic: "sedona-4.jpg",
                    details: ""
                },
                {
                    id: 5,
                    otherPic: "sedona-5.jpg",
                    details: ""
                },
                {
                    id: 6,
                    otherPic: "sedona-6.jpg",
                    details: ""
                },
                {
                    id: 7,
                    otherPic: "sedona-7.jpg",
                    details: ""
                }
            ]
        },
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo necessitatibus culpa eveniet repellendus, ut sint itaque quae! Recusandae incidunt natus quaerat odit quae beatae sint optio blanditiis maiores dolores. Quo."
    },
    {
        id: 10,
        location: {
            specificLocation: "Aspen Peak",
            broadLocation: "Arizona",
            googleMapLink: "https://www.google.com/maps/place/Hualapai+Peak/@35.0750205,-113.9095351,15z/data=!3m1!4b1!4m5!3m4!1s0x80cdeee38fc96395:0x6f8a48fe84736c19!8m2!3d35.0750038!4d-113.9007803",
        },
        dates: {
            startDate: "17 Dec 2021",
            endDate: ""
        },
        img: {
            tripPic: "aspen-peak.jpg",
            landscape: false,
            otherPics: [
                {
                    id: 1,
                    otherPic: "aspen-peak.jpg",
                    details: "The final approach to the summit.  The snow was less dense here as the summit got plenty of sun."
                },
                {
                    id: 2,
                    otherPic: "aspen-peak-2.jpg",
                    details: "Took a while to get this photo setup in the cold.  While I called this the summit, you can see on the left side some climbing (not scrambling) was needed to reach the true peak."
                },
                {
                    id: 3,
                    otherPic: "aspen-peak-3.jpg",
                    details: "The view down from the peak.  The main view was off the north side, so you can see the snow packed much denser here."
                },
                {
                    id: 4,
                    otherPic: "aspen-peak-4.jpg",
                    details: "One of the few flat spots of this whole trail.  Just about half a mile to go from here."
                }
            ]
        },
        description: "On my travels back east, I was trying to hit as many awesome spots as possible.  I was looking at the trip between my last stop at the Colorado River and the next stop in Sedona, AZ and was pretty disappointed.  Without much time until meeting Mark in Sedona, I wanted something quick and epic.  After some time staring at a map, Hualapai Peak jumped out.  My van struggled as I climbed the mountain on the approach the trailhead.  Turns out, the area was closed for the winter, but that sign really just looked like it applied to cars… so off I went.  The trail was snow packed and there was no one around for miles.  I started the steep climb to the peak, but with only a few hours, about 8 miles, and several thousand feet to climb in the snow, I ended up making it to a separate peak (unmarked on Google Maps) named Aspen Peak.  Total trip about 5 miles, 1,500 feet of elevation gain, and a fast jog to the bottom to make some time.  While I may not have reached the summit I wanted, it hit the goal of quick and epic."
    },
    // {
    //     id: 1,
    //     location: {
    //         specificLocation: "Pleasant Valley",
    //         broadLocation: "California",
    //         googleMapLink: "https://www.google.com/maps/place/Pleasant+Valley+Pit+Campground/@37.401106,-118.5127588,13.5z/data=!4m13!1m7!3m6!1s0x80be16019ea66407:0x13cd1e4d95e98916!2sBishop,+CA+93514!3b1!8m2!3d37.3614238!4d-118.3996636!3m4!1s0x80be1992e48118af:0xc8a34c458e5d6d87!8m2!3d37.4011516!4d-118.5117716",
    //     },
    //     dates: {
    //         startDate: "2 Jan 2021",
    //         endDate: "5 Jan 2021"
    //     },
    //     img: {
    //         tripPic: "bishop.jpg",
    //         landscape: false,
    //         otherPics: [
    //             {
    //                 otherPic: "bishop-2.jpg",
    //                 landscape: true
    //             },
    //             {
    //                 otherPic: "bishop-3.jpg",
    //                 landscape: true
    //             },
    //             {
    //                 otherPic: "bishop-4.jpg",
    //                 landscape: true
    //             }
    //         ]
    //     },
    //     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo necessitatibus culpa eveniet repellendus, ut sint itaque quae! Recusandae incidunt natus quaerat odit quae beatae sint optio blanditiis maiores dolores. Quo."
    // }
];

export default data;