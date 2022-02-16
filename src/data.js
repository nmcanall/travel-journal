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
                    details: "asdfasdfasdf"
                },
                {
                    id: 2,
                    otherPic: "sedona-2.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 3,
                    otherPic: "sedona-3.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 4,
                    otherPic: "sedona-4.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 5,
                    otherPic: "sedona-5.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 6,
                    otherPic: "sedona-6.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 7,
                    otherPic: "sedona-7.jpg",
                    details: "asdfasdfasdf"
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
    {
        id: 9,
        location: {
            specificLocation: "Colorado River (North of Blythe)",
            broadLocation: "California",
            googleMapLink: "https://www.google.com/maps/place/Riverside+Mountains+Wilderness+Area,+Blythe,+CA+92225/@33.9793325,-114.5911631,20545m/data=!3m1!1e3!4m5!3m4!1s0x80d10cab55de595b:0x2f206eaa2de0457e!8m2!3d33.9661868!4d-114.5250034",
        },
        dates: {
            startDate: "16 Dec 2021",
            endDate: "17 Dec 2021"
        },
        img: {
            tripPic: "colorado-river.jpg",
            otherPics: [
                {
                    id: 1,
                    otherPic: "colorado-river.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 2,
                    otherPic: "colorado-river-2.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 3,
                    otherPic: "colorado-river-3.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 4,
                    otherPic: "colorado-river-4.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 5,
                    otherPic: "colorado-river-5.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 6,
                    otherPic: "colorado-river-6.jpg",
                    details: "asdfasdfasdf"
                }
            ]
        },
        description: "wojalsdkfja;sldkfjasoidjf;asldkfjasldfjaosidjfa;sldkfjasdj"
    },
    {
        id: 8,
        location: {
            specificLocation: "Joshua Tree National Park",
            broadLocation: "California",
            googleMapLink: "https://www.google.com/maps/place/Joshua+Tree+National+Park/@33.9002347,-116.1408778,82258m/data=!3m2!1e3!4b1!4m5!3m4!1s0x80da8f85b965a87b:0x1977eda73aeb9de2!8m2!3d33.873415!4d-115.9009923",
        },
        dates: {
            startDate: "10 Dec 2021",
            endDate: "12 Dec 2021"
        },
        img: {
            tripPic: "joshua-tree-np.jpg",
            otherPics: [
                {
                    id: 1,
                    otherPic: "joshua-tree-np.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 2,
                    otherPic: "joshua-tree-np-2.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 3,
                    otherPic: "joshua-tree-np-3.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 4,
                    otherPic: "joshua-tree-np-4.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 5,
                    otherPic: "joshua-tree-np-5.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 6,
                    otherPic: "joshua-tree-np-6.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 7,
                    otherPic: "joshua-tree-np-7.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 8,
                    otherPic: "joshua-tree-np-8.jpg",
                    details: "asdfasdfasdf"
                }
            ]
        },
        description: "wojalsdkfja;sldkfjasoidjf;asldkfjasldfjaosidjfa;sldkfjasdj"
    },
    {
        id: 7,
        location: {
            specificLocation: "Pleasant Valley",
            broadLocation: "California",
            googleMapLink: "https://www.google.com/maps/place/Pleasant+Valley+Pit+Campground/@37.401106,-118.5127588,13.5z/data=!4m13!1m7!3m6!1s0x80be16019ea66407:0x13cd1e4d95e98916!2sBishop,+CA+93514!3b1!8m2!3d37.3614238!4d-118.3996636!3m4!1s0x80be1992e48118af:0xc8a34c458e5d6d87!8m2!3d37.4011516!4d-118.5117716",
        },
        dates: {
            startDate: "11 Nov 2021",
            endDate: "14 Nov 2021"
        },
        img: {
            tripPic: "bishop.jpg",
            otherPics: [
                {
                    id: 1,
                    otherPic: "bishop.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 2,
                    otherPic: "bishop-2.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 3,
                    otherPic: "bishop-3.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 4,
                    otherPic: "bishop-4.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 5,
                    otherPic: "bishop-5.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 6,
                    otherPic: "bishop-6.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 7,
                    otherPic: "bishop-7.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 8,
                    otherPic: "bishop-8.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 9,
                    otherPic: "bishop-9.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 10,
                    otherPic: "bishop-10.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 11,
                    otherPic: "bishop-11.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 12,
                    otherPic: "bishop-12.jpg",
                    details: "asdfasdfasdf"
                }
            ]
        },
        description: "wojalsdkfja;sldkfjasoidjf;asldkfjasldfjaosidjfa;sldkfjasdj"
    },
    {
        id: 6,
        location: {
            specificLocation: "Big Bear",
            broadLocation: "California",
            googleMapLink: "https://www.google.com/maps/place/Big+Bear+Lake,+CA/@34.2448679,-116.9376367,10240m/data=!3m2!1e3!4b1!4m5!3m4!1s0x80c4b38902708765:0xf46d45765fbb53bf!8m2!3d34.2438963!4d-116.9114215",
        },
        dates: {
            startDate: "15 Oct 2021",
            endDate: "17 Oct 2021"
        },
        img: {
            tripPic: "big-bear.jpg",
            otherPics: [
                {
                    id: 1,
                    otherPic: "big-bear.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 2,
                    otherPic: "big-bear-2.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 3,
                    otherPic: "big-bear-3.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 4,
                    otherPic: "big-bear-4.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 5,
                    otherPic: "big-bear-5.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 6,
                    otherPic: "big-bear-6.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 7,
                    otherPic: "big-bear-7.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 8,
                    otherPic: "big-bear-8.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 9,
                    otherPic: "big-bear-9.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 10,
                    otherPic: "big-bear-10.jpg",
                    details: "asdfasdfasdf"
                }
            ]
        },
        description: "wojalsdkfja;sldkfjasoidjf;asldkfjasldfjaosidjfa;sldkfjasdj"
    },
    {
        id: 5,
        location: {
            specificLocation: "Idyllwild",
            broadLocation: "California",
            googleMapLink: "https://www.google.com/maps/place/Humber+Park/@33.7665762,-116.697049,1820m/data=!3m1!1e3!4m13!1m7!3m6!1s0x80db0e125013eaff:0xadce7bb513be2dae!2sIdyllwild-Pine+Cove,+CA!3b1!8m2!3d33.7467471!4d-116.7152556!3m4!1s0x80db1193aba75227:0x35c039f5b36c83b6!8m2!3d33.7648763!4d-116.6859475",
        },
        dates: {
            startDate: "1 Oct 2021",
            endDate: "3 Oct 2021"
        },
        img: {
            tripPic: "idyllwild.jpg",
            otherPics: [
                {
                    id: 1,
                    otherPic: "idyllwild.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 2,
                    otherPic: "idyllwild-2.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 3,
                    otherPic: "idyllwild-3.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 4,
                    otherPic: "idyllwild-4.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 5,
                    otherPic: "idyllwild-5.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 6,
                    otherPic: "idyllwild-6.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 7,
                    otherPic: "idyllwild-7.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 8,
                    otherPic: "idyllwild-8.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 9,
                    otherPic: "idyllwild-9.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 10,
                    otherPic: "idyllwild-10.jpg",
                    details: "asdfasdfasdf"
                }
            ]
        },
        description: "wojalsdkfja;sldkfjasoidjf;asldkfjasldfjaosidjfa;sldkfjasdj"
    },
    {
        id: 4,
        location: {
            specificLocation: "White Sands National Park",
            broadLocation: "New Mexico",
            googleMapLink: "https://www.google.com/maps/place/White+Sands+National+Park/@32.7872448,-106.3278703,651m/data=!3m2!1e3!4b1!4m5!3m4!1s0x86e06303071072f3:0x36d1188767bf20c3!8m2!3d32.7872403!4d-106.3256816",
        },
        dates: {
            startDate: "21 Sept 2021",
            endDate: ""
        },
        img: {
            tripPic: "white-sands-np.jpg",
            otherPics: [
                {
                    id: 1,
                    otherPic: "white-sands-np.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 2,
                    otherPic: "white-sands-np-2.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 3,
                    otherPic: "white-sands-np-3.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 4,
                    otherPic: "white-sands-np-4.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 5,
                    otherPic: "white-sands-np-5.jpg",
                    details: "asdfasdfasdf"
                }
            ]
        },
        description: "wojalsdkfja;sldkfjasoidjf;asldkfjasldfjaosidjfa;sldkfjasdj"
    },
    {
        id: 3,
        location: {
            specificLocation: "Carlsbad Caverns National Park",
            broadLocation: "New Mexico",
            googleMapLink: "https://www.google.com/maps/place/Carlsbad+Caverns+National+Park/@32.1224297,-104.6733654,41966m/data=!3m2!1e3!4b1!4m5!3m4!1s0x86e37913c4b8d75b:0x6ed43df7bd3bb2bd!8m2!3d32.1291301!4d-104.5538893",
        },
        dates: {
            startDate: "19 Sept 2021",
            endDate: "20 Sept 2021"
        },
        img: {
            tripPic: "carlsbad-caverns-np.jpg",
            otherPics: [
                {
                    id: 1,
                    otherPic: "carlsbad-caverns-np.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 2,
                    otherPic: "carlsbad-caverns-np-2.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 3,
                    otherPic: "carlsbad-caverns-np-3.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 4,
                    otherPic: "carlsbad-caverns-np-4.jpg",
                    details: "asdfasdfasdf"
                }
            ]
        },
        description: "wojalsdkfja;sldkfjasoidjf;asldkfjasldfjaosidjfa;sldkfjasdj"
    },
    {
        id: 2,
        location: {
            specificLocation: "Saguaro National Park",
            broadLocation: "Arizona",
            googleMapLink: "https://www.google.com/maps/place/Saguaro+National+Park/@32.2194726,-111.1538685,83844m/data=!3m2!1e3!4b1!4m5!3m4!1s0x86d66fba16567663:0x91c796bfe5ae8e2a!8m2!3d32.2967359!4d-111.166615",
        },
        dates: {
            startDate: "18 Sept 2021",
            endDate: "19 Sept 2021"
        },
        img: {
            tripPic: "saguaro-np.jpg",
            otherPics: [
                {
                    id: 1,
                    otherPic: "saguaro-np.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 2,
                    otherPic: "saguaro-np-2.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 3,
                    otherPic: "saguaro-np-3.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 4,
                    otherPic: "saguaro-np-4.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 5,
                    otherPic: "saguaro-np-5.jpg",
                    details: "asdfasdfasdf"
                }
            ]
        },
        description: "wojalsdkfja;sldkfjasoidjf;asldkfjasldfjaosidjfa;sldkfjasdj"
    },
    {
        id: 1,
        location: {
            specificLocation: "Mammoth Lakes",
            broadLocation: "California",
            googleMapLink: "https://www.google.com/maps/place/Mammoth+Lakes,+CA+93546/@37.6199063,-119.0179815,19625m/data=!3m2!1e3!4b1!4m5!3m4!1s0x80960c5f79b3179f:0xf114d9d70fee8d6d!8m2!3d37.648546!4d-118.972079",
        },
        dates: {
            startDate: "2 Jul 2021",
            endDate: "5 Jul 2021"
        },
        img: {
            tripPic: "mammoth-lakes.jpg",
            otherPics: [
                {
                    id: 1,
                    otherPic: "mammoth-lakes.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 2,
                    otherPic: "mammoth-lakes-2.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 3,
                    otherPic: "mammoth-lakes-3.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 4,
                    otherPic: "mammoth-lakes-4.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 5,
                    otherPic: "mammoth-lakes-5.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 6,
                    otherPic: "mammoth-lakes-6.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 7,
                    otherPic: "mammoth-lakes-7.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 8,
                    otherPic: "mammoth-lakes-8.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 9,
                    otherPic: "mammoth-lakes-9.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 10,
                    otherPic: "mammoth-lakes-10.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 11,
                    otherPic: "mammoth-lakes-11.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 12,
                    otherPic: "mammoth-lakes-12.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 13,
                    otherPic: "mammoth-lakes-13.jpg",
                    details: "asdfasdfasdf"
                }
            ]
        },
        description: "wojalsdkfja;sldkfjasoidjf;asldkfjasldfjaosidjfa;sldkfjasdj"
    },
    {
        id: 0,
        location: {
            specificLocation: "Mt Laguna",
            broadLocation: "California",
            googleMapLink: "https://www.google.com/maps/place/Mt+Laguna,+CA+91948/@32.8711417,-116.4457697,5202m/data=!3m2!1e3!4b1!4m5!3m4!1s0x80d9823e0db090cb:0x1327544258989a10!8m2!3d32.8674653!4d-116.4187931",
        },
        dates: {
            startDate: "4 Jun 2021",
            endDate: "6 Jun 2021"
        },
        img: {
            tripPic: "mt-laguna.jpg",
            otherPics: [
                {
                    id: 1,
                    otherPic: "mt-laguna.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 2,
                    otherPic: "mt-laguna-2.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 3,
                    otherPic: "mt-laguna-3.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 4,
                    otherPic: "mt-laguna-4.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 5,
                    otherPic: "mt-laguna-5.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 6,
                    otherPic: "mt-laguna-6.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 7,
                    otherPic: "mt-laguna-7.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 8,
                    otherPic: "mt-laguna-8.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 9,
                    otherPic: "mt-laguna-9.jpg",
                    details: "asdfasdfasdf"
                },
                {
                    id: 10,
                    otherPic: "mt-laguna-10.jpg",
                    details: "asdfasdfasdf"
                }
            ]
        },
        description: "wojalsdkfja;sldkfjasoidjf;asldkfjasldfjaosidjfa;sldkfjasdj"
    }
];

export default data;