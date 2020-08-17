import Headshot from "../images/dummy-headshot.jpg"

export const userProfileAPI = {
    userId: "fe3234jk3l2",
    firstName: "Katherine",
    lastName: "Johnson",
    profilePhoto: Headshot
}

export const initialGamesScheduled =
    [                {
        gameAdmin: "Jeilani",
        date: new Date (2020, 9, 1),
        lat: 37.75415835698726,
        lng: -122.44709014892578,
        gameID: "fjklsdfjksl323",
        name: "Twin Peaks",
        photo: "https://images.unsplash.com/photo-1585249167160-4665db9a7ed6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        types: ["park", "point_of_interest", "establishment"],
        website: "https://sfrecpark.org/Facilities/Facility/Details/Twin-Peaks-384",
        sport: "Basketball",
        friendsInvited: []
    },
    {
        gameAdmin: "Jeilani",
        date: new Date (2020, 9, 2),
        lat: 37.769629187677005,
        lng: -122.4862289428711,
        name: "Golden Gate Park",
        gameID: "sajfiwenc32rfsdja",
        photo: "https://images.unsplash.com/photo-1565375779067-9a0e5e0c9cff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        types: ["park", "tourist_attraction", "point_of_interest", "establishment"],
        website: "http://sfrecpark.org/parks-open-spaces/golden-gate-park-guide/",
        sport: "Football",
        friendsInvited: []
}
]

export const friends = [{
    userId: "325jkjn23432",
    firstName: "Kobe",
    lastName: "Bryant"
}]

// 20200809141107
// https://randomuser.me/api/?results=12&nat=us

export const friendsAPI =  [
      {
        gender: "female",
        name: {
          title: "Ms",
          first: "Lillian",
          last: "Ramirez"
        },
        location: {
          street: {
            number: 7485,
            name: "Shady Ln Dr"
          },
          city: "Edison",
          state: "Oklahoma",
          country: "United States",
          postcode: 14803,
          coordinates: {
            latitude: "-27.9238",
            longitude: "170.6862"
          },
          timezone: {
            offset: "+5:00",
            description: "Ekaterinburg, Islamabad, Karachi, Tashkent"
          }
        },
        email: "lillian.ramirez@example.com",
        login: {
          uuid: "9bfabb4b-0e24-470d-b343-431df2979774",
          username: "brownelephant282",
          password: "daffy",
          salt: "5krEaYEm",
          md5: "fe591515baea4dabb8db9921f4deb1db",
          sha1: "4d0d22dda85a6dd9678cda81b21595699ee3c893",
          sha256: "d19bad40fb24494bfe5abf11a4d76bd34f6b180b60670858668c5cf5d4e0c47a"
        },
        dob: {
          date: "1948-07-24T00:04:19.892Z",
          age: 72
        },
        registered: {
          date: "2016-12-03T04:56:01.942Z",
          age: 4
        },
        phone: "(164)-544-2307",
        cell: "(061)-235-9022",
        id: {
          name: "SSN",
          value: "657-56-3506"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/95.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/95.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/95.jpg"
        },
        nat: "US"
      },
      {
        gender: "female",
        name: {
          title: "Miss",
          first: "Zoe",
          last: "Clark"
        },
        location: {
          street: {
            number: 5613,
            name: "Avondale Ave"
          },
          city: "Orange",
          state: "Texas",
          country: "United States",
          postcode: 28328,
          coordinates: {
            latitude: "-33.0976",
            longitude: "-172.5403"
          },
          timezone: {
            offset: "-7:00",
            description: "Mountain Time (US & Canada)"
          }
        },
        email: "zoe.clark@example.com",
        login: {
          uuid: "b0a2459f-043a-48b8-9680-a79f23280ad3",
          username: "brownswan200",
          password: "yomama",
          salt: "qA8xqyi1",
          md5: "e7a721a86b75c0669fbf45710c98ad7a",
          sha1: "7633f9dfbe86e20889e8825dd8ca91bc8bb09c8d",
          sha256: "e30056a7196f6eb874999a19a483a8081dee67a09c001bc671e5e558108f028d"
        },
        dob: {
          date: "1945-10-19T14:58:26.110Z",
          age: 75
        },
        registered: {
          date: "2018-04-26T14:11:38.307Z",
          age: 2
        },
        phone: "(599)-478-3293",
        cell: "(896)-219-5492",
        id: {
          name: "SSN",
          value: "961-80-5714"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/6.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/6.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/6.jpg"
        },
        nat: "US"
      },
      {
        gender: "male",
        name: {
          title: "Mr",
          first: "Frederick",
          last: "Terry"
        },
        location: {
          street: {
            number: 4062,
            name: "Railroad St"
          },
          city: "Salinas",
          state: "Wisconsin",
          country: "United States",
          postcode: 47068,
          coordinates: {
            latitude: "-43.1058",
            longitude: "-26.5627"
          },
          timezone: {
            offset: "+3:30",
            description: "Tehran"
          }
        },
        email: "frederick.terry@example.com",
        login: {
          uuid: "f6462df3-d10e-419e-a7ce-54e5dfa32e87",
          username: "silverkoala101",
          password: "spoiled",
          salt: "9AzlvwIy",
          md5: "588af1d762c439053e525a88125a489a",
          sha1: "1925c529020b35cd5513bba742607534290952fe",
          sha256: "598c7fde6febbf4848ca6f086935e7e239e5d5b05934053b642efa5768d1cb25"
        },
        dob: {
          date: "1947-06-05T02:57:51.321Z",
          age: 73
        },
        registered: {
          date: "2017-05-09T22:25:17.888Z",
          age: 3
        },
        phone: "(480)-907-1364",
        cell: "(942)-583-5375",
        id: {
          name: "SSN",
          value: "458-62-9195"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/22.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/22.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/22.jpg"
        },
        nat: "US"
      },
      {
        gender: "male",
        name: {
          title: "Mr",
          first: "Luis",
          last: "Oliver"
        },
        location: {
          street: {
            number: 6436,
            name: "Mcclellan Rd"
          },
          city: "Abilene",
          state: "Utah",
          country: "United States",
          postcode: 39276,
          coordinates: {
            latitude: "74.1488",
            longitude: "-100.5463"
          },
          timezone: {
            offset: "+5:00",
            description: "Ekaterinburg, Islamabad, Karachi, Tashkent"
          }
        },
        email: "luis.oliver@example.com",
        login: {
          uuid: "f93e08c3-7e05-4e96-acf6-f6625586dc70",
          username: "whiterabbit837",
          password: "bubba123",
          salt: "eRJkWizn",
          md5: "c941aff91dec79aa24e16311557ae7f3",
          sha1: "133a426de6bd9e93c997b8fd90f280a0dab26fc4",
          sha256: "4df0a4c471df6ee649d470c636b3bed4621cc93106eb52605f376286cd6483c2"
        },
        dob: {
          date: "1959-09-06T20:55:47.346Z",
          age: 61
        },
        registered: {
          date: "2012-09-27T01:46:22.955Z",
          age: 8
        },
        phone: "(316)-438-0879",
        cell: "(657)-011-2672",
        id: {
          name: "SSN",
          value: "493-09-1556"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/22.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/22.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/22.jpg"
        },
        nat: "US"
      },
      {
        gender: "male",
        name: {
          title: "Mr",
          first: "Don",
          last: "Nguyen"
        },
        location: {
          street: {
            number: 4736,
            name: "E Little York Rd"
          },
          city: "Tacoma",
          state: "New York",
          country: "United States",
          postcode: 85022,
          coordinates: {
            latitude: "-80.7684",
            longitude: "131.1018"
          },
          timezone: {
            offset: "0:00",
            description: "Western Europe Time, London, Lisbon, Casablanca"
          }
        },
        email: "don.nguyen@example.com",
        login: {
          uuid: "37c0f0c3-4a7f-4738-9585-c878ca4e2e9c",
          username: "blueduck679",
          password: "geng",
          salt: "zEBu6IX8",
          md5: "d265e6a007f2133970cd6f35ccdbe452",
          sha1: "7a394ee9ccb1e6066b5e5801b4771c41c3a184c8",
          sha256: "374d1cfb398a6766334ec201015d96c7f69697084dcd9aba28acf12295bd193f"
        },
        dob: {
          date: "1981-10-09T00:06:33.284Z",
          age: 39
        },
        registered: {
          date: "2009-01-09T08:10:57.496Z",
          age: 11
        },
        phone: "(358)-019-5824",
        cell: "(023)-655-6817",
        id: {
          name: "SSN",
          value: "015-05-7974"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/47.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/47.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/47.jpg"
        },
        nat: "US"
      },
      {
        gender: "female",
        name: {
          title: "Ms",
          first: "Lauren",
          last: "Coleman"
        },
        location: {
          street: {
            number: 6215,
            name: "Marsh Ln"
          },
          city: "Columbus",
          state: "South Dakota",
          country: "United States",
          postcode: 50228,
          coordinates: {
            latitude: "-84.8463",
            longitude: "53.2945"
          },
          timezone: {
            offset: "+7:00",
            description: "Bangkok, Hanoi, Jakarta"
          }
        },
        email: "lauren.coleman@example.com",
        login: {
          uuid: "aba70d51-b92c-4263-aecd-49352975e1cc",
          username: "happymeercat594",
          password: "alisha",
          salt: "ZDIzT3AO",
          md5: "01033743fb1cfed5f6c61b209111e0af",
          sha1: "922cd398457cfa08eeedec9665aa7e1a5d6a638c",
          sha256: "67051a5592ef38c36e023cc2826bc107d81f96b06d1ac141e5b3b3198167817b"
        },
        dob: {
          date: "1944-10-24T08:18:46.381Z",
          age: 76
        },
        registered: {
          date: "2008-05-06T08:56:18.033Z",
          age: 12
        },
        phone: "(487)-142-8784",
        cell: "(089)-660-1767",
        id: {
          name: "SSN",
          value: "208-84-4628"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/59.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/59.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/59.jpg"
        },
        nat: "US"
      },
      {
        gender: "female",
        name: {
          title: "Mrs",
          first: "Constance",
          last: "Nguyen"
        },
        location: {
          street: {
            number: 7518,
            name: "Wheeler Ridge Dr"
          },
          city: "Madison",
          state: "Oklahoma",
          country: "United States",
          postcode: 12133,
          coordinates: {
            latitude: "87.2123",
            longitude: "52.9181"
          },
          timezone: {
            offset: "-9:00",
            description: "Alaska"
          }
        },
        email: "constance.nguyen@example.com",
        login: {
          uuid: "8b0323ab-46e5-40f2-8895-44a773e9d677",
          username: "organicmeercat318",
          password: "22222",
          salt: "Xinay3y2",
          md5: "0576e65c7d338aa95c6bb528dd84b0fe",
          sha1: "912bff03d714beafc411b78bc693ac9bbef4a2b9",
          sha256: "ec5636cf731e12d85cf1e309c015a2861bd6edeb242cb628299349a80bc766e3"
        },
        dob: {
          date: "1980-05-11T15:06:28.883Z",
          age: 40
        },
        registered: {
          date: "2016-11-15T08:07:45.320Z",
          age: 4
        },
        phone: "(022)-280-1180",
        cell: "(037)-467-9683",
        id: {
          name: "SSN",
          value: "836-95-6742"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/67.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/67.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/67.jpg"
        },
        nat: "US"
      },
      {
        gender: "male",
        name: {
          title: "Mr",
          first: "Kirk",
          last: "Hamilton"
        },
        location: {
          street: {
            number: 5664,
            name: "Westheimer Rd"
          },
          city: "Lakeland",
          state: "New York",
          country: "United States",
          postcode: 86716,
          coordinates: {
            latitude: "-31.2354",
            longitude: "156.5076"
          },
          timezone: {
            offset: "-3:00",
            description: "Brazil, Buenos Aires, Georgetown"
          }
        },
        email: "kirk.hamilton@example.com",
        login: {
          uuid: "8cf633aa-6758-4c02-b8d3-6146988ae3c0",
          username: "sadbear921",
          password: "phrases",
          salt: "cSbqhXuA",
          md5: "aebd3a12e4434b813568a7ed231351cf",
          sha1: "73db56d8f1ef4f37b403f0ef95fcc29929f12d25",
          sha256: "bd150e9d226dec1b25f4c4b6ceb0c9f9075112efc8b0655fcf04f30fd12012a1"
        },
        dob: {
          date: "1993-01-18T07:49:36.072Z",
          age: 27
        },
        registered: {
          date: "2017-10-11T00:26:43.076Z",
          age: 3
        },
        phone: "(869)-093-2574",
        cell: "(229)-470-8892",
        id: {
          name: "SSN",
          value: "292-67-9021"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/48.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/48.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/48.jpg"
        },
        nat: "US"
      },
      {
        gender: "male",
        name: {
          title: "Mr",
          first: "Jesse",
          last: "Barnes"
        },
        location: {
          street: {
            number: 5942,
            name: "Washington Ave"
          },
          city: "Great Falls",
          state: "South Carolina",
          country: "United States",
          postcode: 58908,
          coordinates: {
            latitude: "-54.1256",
            longitude: "9.4056"
          },
          timezone: {
            offset: "+3:00",
            description: "Baghdad, Riyadh, Moscow, St. Petersburg"
          }
        },
        email: "jesse.barnes@example.com",
        login: {
          uuid: "08bfc78a-82ed-4973-97d7-86bd6a169805",
          username: "blackladybug907",
          password: "aramis",
          salt: "XsRS8l11",
          md5: "158d2b4aea967d4545175337772ab97e",
          sha1: "65c936ef079ae3a55f95b037f83cf979ce8ceae6",
          sha256: "1d844a447722441f53c1edd3cd88cb417c95605cad9bf99b1677d20d5943115a"
        },
        dob: {
          date: "1968-11-02T15:04:13.215Z",
          age: 52
        },
        registered: {
          date: "2010-12-22T14:40:27.063Z",
          age: 10
        },
        phone: "(266)-985-6664",
        cell: "(149)-086-5008",
        id: {
          name: "SSN",
          value: "498-63-0406"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/47.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/47.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/47.jpg"
        },
        nat: "US"
      },
      {
        gender: "male",
        name: {
          title: "Mr",
          first: "Wade",
          last: "Howell"
        },
        location: {
          street: {
            number: 8544,
            name: "Edwards Rd"
          },
          city: "Richmond",
          state: "North Dakota",
          country: "United States",
          postcode: 65478,
          coordinates: {
            latitude: "21.0655",
            longitude: "-0.8371"
          },
          timezone: {
            offset: "+4:00",
            description: "Abu Dhabi, Muscat, Baku, Tbilisi"
          }
        },
        email: "wade.howell@example.com",
        login: {
          uuid: "cb173dbd-71df-49b0-abab-30de67a4dd83",
          username: "smallgoose808",
          password: "microsof",
          salt: "3W9e1F2t",
          md5: "73ce16fc4ebca174299adbcfd6fc9a24",
          sha1: "6392013a603a81522f27fe536719dbf374dad9b8",
          sha256: "c4c210b6d086123491f617ec1657b3776a79619e13593223565494e0af49149f"
        },
        dob: {
          date: "1967-05-13T08:51:18.222Z",
          age: 53
        },
        registered: {
          date: "2014-06-25T02:56:57.091Z",
          age: 6
        },
        phone: "(729)-865-0808",
        cell: "(114)-947-2270",
        id: {
          name: "SSN",
          value: "534-84-5790"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/63.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/63.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/63.jpg"
        },
        nat: "US"
      },
      {
        gender: "male",
        name: {
          title: "Mr",
          first: "Ruben",
          last: "Morales"
        },
        location: {
          street: {
            number: 3695,
            name: "Cackson St"
          },
          city: "South Bend",
          state: "New Mexico",
          country: "United States",
          postcode: 39234,
          coordinates: {
            latitude: "26.1407",
            longitude: "-38.3044"
          },
          timezone: {
            offset: "+4:30",
            description: "Kabul"
          }
        },
        email: "ruben.morales@example.com",
        login: {
          uuid: "1cf8b0c2-306e-46d0-993a-db1444c021e1",
          username: "ticklishfish343",
          password: "monkey12",
          salt: "hOKlO30z",
          md5: "f1ff8e97e45937bc3f7dc233f07448de",
          sha1: "dcdc16f985fccd92d816819939af2cc6c4e6c051",
          sha256: "6fbb03904931d4323a66fb7f5391591cec035288cd2b86f6382eabed7189b0e7"
        },
        dob: {
          date: "1973-02-14T05:20:54.893Z",
          age: 47
        },
        registered: {
          date: "2017-08-17T19:07:55.810Z",
          age: 3
        },
        phone: "(588)-623-9880",
        cell: "(229)-190-0620",
        id: {
          name: "SSN",
          value: "534-22-5328"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/91.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/91.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/91.jpg"
        },
        nat: "US"
      },
      {
        gender: "female",
        name: {
          title: "Mrs",
          first: "Patsy",
          last: "Harrison"
        },
        location: {
          street: {
            number: 9278,
            name: "Frances Ct"
          },
          city: "Jersey City",
          state: "Illinois",
          country: "United States",
          postcode: 34045,
          coordinates: {
            latitude: "-88.9513",
            longitude: "-60.2053"
          },
          timezone: {
            offset: "-2:00",
            description: "Mid-Atlantic"
          }
        },
        email: "patsy.harrison@example.com",
        login: {
          uuid: "c7acf9c6-e5af-48ac-b4a5-9559f7ad0b04",
          username: "goldenfrog535",
          password: "warriors",
          salt: "Id4Yof9q",
          md5: "45b92a58583f0f981406315689640799",
          sha1: "f5fafe3d6d0c17163b2a7e7f66f591dcaa95b4c0",
          sha256: "2b8c8c641eafa4afbaa7051d065bda8a7b25688d92b00a295e3947a54b26fbe7"
        },
        dob: {
          date: "1951-12-06T07:38:22.059Z",
          age: 69
        },
        registered: {
          date: "2002-09-19T18:17:31.324Z",
          age: 18
        },
        phone: "(909)-783-0692",
        cell: "(859)-332-0989",
        id: {
          name: "SSN",
          value: "493-13-5843"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/56.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/56.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/56.jpg"
        },
        nat: "US"
      }
    ]