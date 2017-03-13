```js
{
  currentUser: {
    id: 1,
    username: "Daniel",
    imageUrl: "guest_pic.png"
  },
  planet: {
    id: 4,
    name: "Mars",
    description: "Your weekend getaway",
    imageUrl: "mars_cover.png",
    hosts: {
      1: {
        id: 1,
        name: "Globxor",
        imageUrl: "globxor.png"
      },
      2: {
        id: 7,
        name: "Spoozonite",
        imageUrl: "spoozonite.png"
      }
    }
  }
  hostDetail: {
    id: 1,
    name: "Globxor",
    imageUrl: "globxor.png",
    description: "Hi, I'm Globxor. I like flying UFOs and relaxing in zero gravity.",
    planetId: 4,
    requestForm: {
      beginDate: "12-12-2020",
      endDate: "1-9-2022",
      numTravelers: 2,
      hostId: 1,
      guestId: 7,
      errors: []
    },
    reviews: {
      1: {
        guestId: 4,
        guestName: "Hal",
        guestImageUrl: "hal.png",
        hostId: 1,
        body: "Great spot, but a bit remote",
        rating: 4
      }
    }
  }
}
```
