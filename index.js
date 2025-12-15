// Sample of TOP 500
const ratingGrossMovieData = [
    { rating: 93, gross: 2834, title: "The Shawshank Redemption" },
    { rating: 92, gross: 13497, title: "The Godfather" },
    { rating: 90, gross: 573, title: "The Godfather: Part II" },
    { rating: 89, gross: 969, title: "Schindler's List" },
    { rating: 89, gross: 10793, title: "Pulp Fiction" },
    { rating: 89, gross: 377, title: "12 Angry Men" },
    { rating: 88, gross: 33025, title: "Forrest Gump" },
    { rating: 88, gross: 29048, title: "Star Wars: Episode V" },
    { rating: 88, gross: 4684, title: "Goodfellas" },
    { rating: 87, gross: 1120, title: "One Flew Over the Cuckoo's Nest" },
    { rating: 87, gross: 4635, title: "Seven Samurai" },
    { rating: 86, gross: 32274, title: "Star Wars: Episode IV" },
    { rating: 86, gross: 13074, title: "The Silence of the Lambs" },
    { rating: 86, gross: 21654, title: "Saving Private Ryan" },
    { rating: 86, gross: 10013, title: "Se7en" },
    { rating: 85, gross: 20484, title: "Terminator 2: Judgment Day" },
    { rating: 85, gross: 42278, title: "The Lion King" },
    { rating: 85, gross: 2334, title: "The Usual Suspects" },
    { rating: 85, gross: 320, title: "Psycho" },
    { rating: 85, gross: 102, title: "Casablanca" },
    { rating: 78, gross: 65933, title: "Titanic" },              
    { rating: 81, gross: 165, title: "Trainspotting" },
    { rating: 83, gross: 159, title: "Citizen Kane" },
    { rating: 81, gross: 3287, title: "Blade Runner" },
    { rating: 84, gross: 24816, title: "Indiana Jones and the Raiders of the Lost Ark" },
    { rating: 76, gross: 93666, title: "Star Wars: Ep VII - Force Awakens" },
    { rating: 80, gross: 62330, title: "The Avengers" },
    { rating: 79, gross: 76050, title: "Avatar" }
];

const rankingRuntimeMovieData = [
  {
    title: "Star Wars: Episode IV - A New Hope",
    runtime: 121,
    ranking: 1
  },
  {
    title: "The Shawshank Redemption",
    runtime: 142,
    ranking: 2
  },
  {
    title: "Trainspotting",
    runtime: 93,
    ranking: 3
  },
  {
    title: "The Usual Suspects",
    runtime: 106,
    ranking: 4
  },
  {
    title: "The Wrong Trousers",
    runtime: 30,
    ranking: 5
  },
  {
    title: "A Close Shave",
    runtime: 30,
    ranking: 6
  },
  {
    title: "Star Trek: First Contact",
    runtime: 111,
    ranking: 7
  },
  {
    title: "Casablanca",
    runtime: 102,
    ranking: 8
  },
  {
    title: "Blade Runner",
    runtime: 117,
    ranking: 9
  },
  {
    title: "Schindler's List",
    runtime: 195,
    ranking: 10
  },
  {
    title: "Citizen Kane",
    runtime: 119,
    ranking: 11
  },
  {
    title: "Pulp Fiction",
    runtime: 154,
    ranking: 12
  },
  {
    title: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    runtime: 95,
    ranking: 13
  },
  {
    title: "The Godfather",
    runtime: 175,
    ranking: 14
  },
  {
    title: "The English Patient",
    runtime: 162,
    ranking: 15
  },
  {
    title: "Braveheart",
    runtime: 178,
    ranking: 16
  },
  {
    title: "Beautiful Thing",
    runtime: 90,
    ranking: 17
  },
  {
    title: "Lone Star",
    runtime: 135,
    ranking: 18
  },
  {
    title: "Toy Story",
    runtime: 81,
    ranking: 19
  },
  {
    title: "One Flew Over the Cuckoo's Nest",
    runtime: 133,
    ranking: 20
  },
  {
    title: "Romeo + Juliet",
    runtime: 120,
    ranking: 21
  },
  {
    title: "Fargo",
    runtime: 98,
    ranking: 22
  },
  {
    title: "The Postman",
    runtime: 108,
    ranking: 23
  },
  {
    title: "Three Colors: Red",
    runtime: 99,
    ranking: 24
  },
  {
    title: "Seven Samurai",
    runtime: 207,
    ranking: 25
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    runtime: 124,
    ranking: 26
  },
  {
    title: "Up in Smoke",
    runtime: 86,
    ranking: 27
  },
  {
    title: "Léon: The Professional",
    runtime: 110,
    ranking: 28
  },
  {
    title: "The Princess Bride",
    runtime: 98,
    ranking: 29
  },
  {
    title: "Sense and Sensibility",
    runtime: 136,
    ranking: 30
  },
  {
    title: "2001: A Space Odyssey",
    runtime: 149,
    ranking: 31
  },
  {
    title: "Reservoir Dogs",
    runtime: 99,
    ranking: 32
  },
  {
    title: "The City of Lost Children",
    runtime: 112,
    ranking: 33
  },
  {
    title: "Indiana Jones and the Raiders of the Lost Ark",
    runtime: 115,
    ranking: 34
  },
  {
    title: "That Thing You Do!",
    runtime: 108,
    ranking: 35
  },
  {
    title: "Clerks",
    runtime: 92,
    ranking: 36
  },
  {
    title: "Brazil",
    runtime: 132,
    ranking: 37
  },
  {
    title: "Monty Python and the Holy Grail",
    runtime: 91,
    ranking: 38
  },
  {
    title: "Rear Window",
    runtime: 112,
    ranking: 39
  },
  {
    title: "Se7en",
    runtime: 127,
    ranking: 40
  },
  {
    title: "Aliens",
    runtime: 137,
    ranking: 41
  },
  {
    title: "A Clockwork Orange",
    runtime: 136,
    ranking: 42
  },
  {
    title: "The Rock",
    runtime: 136,
    ranking: 43
  },
  {
    title: "Withnail & I",
    runtime: 107,
    ranking: 44
  },
  {
    title: "The Good, the Bad and the Ugly",
    runtime: 178,
    ranking: 45
  },
  {
    title: "12 Monkeys",
    runtime: 129,
    ranking: 46
  },
  {
    title: "It's a Wonderful Life",
    runtime: 130,
    ranking: 47
  },
  {
    title: "Babe",
    runtime: 91,
    ranking: 48
  },
  {
    title: "The Transformers: The Movie",
    runtime: 84,
    ranking: 49
  },
  {
    title: "Dead Man Walking",
    runtime: 122,
    ranking: 50
  },
  {
    title: "To Kill a Mockingbird",
    runtime: 129,
    ranking: 51
  },
  {
    title: "12 Angry Men",
    runtime: 96,
    ranking: 52
  },
  {
    title: "Lawrence of Arabia",
    runtime: 228,
    ranking: 53
  },
  {
    title: "North by Northwest",
    runtime: 136,
    ranking: 54
  },
  {
    title: "Apocalypse Now",
    runtime: 147,
    ranking: 55
  },
  {
    title: "Dazed and Confused",
    runtime: 102,
    ranking: 56
  },
  {
    title: "Underground",
    runtime: 167,
    ranking: 57
  },
  {
    title: "Goodfellas",
    runtime: 146,
    ranking: 58
  },
  {
    title: "Once Were Warriors",
    runtime: 102,
    ranking: 59
  },
  {
    title: "A Time to Kill",
    runtime: 149,
    ranking: 60
  },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    runtime: 131,
    ranking: 61
  },
  {
    title: "Once Upon a Time in the West",
    runtime: 165,
    ranking: 62
  },
  {
    title: "Cinema Paradiso",
    runtime: 155,
    ranking: 63
  },
  {
    title: "Taratingi Driver",
    runtime: 114,
    ranking: 64
  },
  {
    title: "Heat",
    runtime: 170,
    ranking: 65
  },
  {
    title: "Three Colors: Blue",
    runtime: 94,
    ranking: 66
  },
  {
    title: "The Silence of the Lambs",
    runtime: 118,
    ranking: 67
  },
  {
    title: "Vertigo",
    runtime: 128,
    ranking: 68
  },
  {
    title: "Wings of Desire",
    runtime: 128,
    ranking: 69
  },
  {
    title: "Ransom",
    runtime: 121,
    ranking: 70
  },
  {
    title: "Mystery Science Theater 3000: The Movie",
    runtime: 73,
    ranking: 71
  },
  {
    title: "Alien",
    runtime: 117,
    ranking: 72
  },
  {
    title: "The Big Blue",
    runtime: 168,
    ranking: 73
  },
  {
    title: "The Blues Brothers",
    runtime: 133,
    ranking: 74
  },
  {
    title: "The Third Man",
    runtime: 93,
    ranking: 75
  },
  {
    title: "Army of Darkness",
    runtime: 81,
    ranking: 76
  },
  {
    title: "The Godfather: Part II",
    runtime: 202,
    ranking: 77
  },
  {
    title: "Psycho",
    runtime: 109,
    ranking: 78
  },
  {
    title: "Secrets & Lies",
    runtime: 136,
    ranking: 79
  },
  {
    title: "The Killer",
    runtime: 111,
    ranking: 80
  },
  {
    title: " Babylon 5",
    runtime: 89,
    ranking: 81
  },
  {
    title: "The Wizard of Oz",
    runtime: 102,
    ranking: 82
  },
  {
    title: "Empire Records",
    runtime: 90,
    ranking: 83
  },
  {
    title: "Full Metal Jacket",
    runtime: 116,
    ranking: 84
  },
  {
    title: "Ran",
    runtime: 162,
    ranking: 85
  },
  {
    title: "A Grand Day Out",
    runtime: 24,
    ranking: 86
  },
  {
    title: "Tombstone",
    runtime: 130,
    ranking: 87
  },
  {
    title: "The Maltese Falcon",
    runtime: 100,
    ranking: 88
  },
  {
    title: "Terminator 2: Judgment Day",
    runtime: 137,
    ranking: 89
  },
  {
    title: "The Double Life of Véronique",
    runtime: 98,
    ranking: 90
  },
  {
    title: "The Quiet Man",
    runtime: 129,
    ranking: 91
  },
  {
    title: "Once Upon a Time in America",
    runtime: 229,
    ranking: 92
  },
  {
    title: "Stalker",
    runtime: 162,
    ranking: 93
  },
  {
    title: "Sunset Blvd.",
    runtime: 110,
    ranking: 94
  },
  {
    title: "Gone with the Wind",
    runtime: 238,
    ranking: 95
  },
  {
    title: "Singin' in the Rain",
    runtime: 103,
    ranking: 96
  },
  {
    title: "Smoke",
    runtime: 112,
    ranking: 97
  },
  {
    title: "Amadeus",
    runtime: 160,
    ranking: 98
  },
  {
    title: "Henry V",
    runtime: 137,
    ranking: 99
  },
  {
    title: "Rumble in the Bronrating",
    runtime: 87,
    ranking: 100
  },
  {
    title: "Much Ado About Nothing",
    runtime: 111,
    ranking: 101
  },
  {
    title: "Raging Bull",
    runtime: 129,
    ranking: 102
  },
  {
    title: "Harold and Maude",
    runtime: 91,
    ranking: 103
  },
  {
    title: "Emma",
    runtime: 120,
    ranking: 104
  },
  {
    title: "Hard Boiled",
    runtime: 128,
    ranking: 105
  },
  {
    title: "Delicatessen",
    runtime: 99,
    ranking: 106
  },
  {
    title: "The Fugitive",
    runtime: 130,
    ranking: 107
  },
  {
    title: "Annie Hall",
    runtime: 93,
    ranking: 108
  },
  {
    title: "Das Boot",
    runtime: 149,
    ranking: 109
  },
  {
    title: "Breakfast at Tiffany's",
    runtime: 115,
    ranking: 110
  },
  {
    title: "Local Hero",
    runtime: 111,
    ranking: 111
  },
  {
    title: "Now and Then",
    runtime: 100,
    ranking: 112
  },
  {
    title: "Trust",
    runtime: 107,
    ranking: 113
  },
  {
    title: "Dead Man",
    runtime: 121,
    ranking: 114
  },
  {
    title: "Roman Holiday",
    runtime: 118,
    ranking: 115
  },
  {
    title: "Rashomon",
    runtime: 88,
    ranking: 116
  },
  {
    title: "Glory",
    runtime: 122,
    ranking: 117
  },
  {
    title: "The Right Stuff",
    runtime: 193,
    ranking: 118
  },
  {
    title: "Modern Times",
    runtime: 87,
    ranking: 119
  },
  {
    title: "Metropolis",
    runtime: 153,
    ranking: 120
  },
  {
    title: "Mr. Holland's Opus",
    runtime: 143,
    ranking: 121
  },
  {
    title: "The Seventh Seal",
    runtime: 96,
    ranking: 122
  },
  {
    title: "Braindead",
    runtime: 104,
    ranking: 123
  },
  {
    title: "Courage Under Fire",
    runtime: 116,
    ranking: 124
  },
  {
    title: "Apollo 13",
    runtime: 140,
    ranking: 125
  },
  {
    title: "The Lion King",
    runtime: 88,
    ranking: 126
  },
  {
    title: "The Sting",
    runtime: 129,
    ranking: 127
  },
  {
    title: "True Romance",
    runtime: 119,
    ranking: 128
  },
  {
    title: "Touch of Evil",
    runtime: 95,
    ranking: 129
  },
  {
    title: "The Hunchback of Notre Dame",
    runtime: 91,
    ranking: 130
  },
  {
    title: "While You Were Sleeping",
    runtime: 103,
    ranking: 131
  },
  {
    title: "The Wild Bunch",
    runtime: 135,
    ranking: 132
  },
  {
    title: "Bound",
    runtime: 109,
    ranking: 133
  },
  {
    title: "Some Like It Hot",
    runtime: 121,
    ranking: 134
  },
  {
    title: "Dead Poets Society",
    runtime: 128,
    ranking: 135
  },
  {
    title: "Heavenly Creatures",
    runtime: 99,
    ranking: 136
  },
  {
    title: "The Crow",
    runtime: 102,
    ranking: 137
  },
  {
    title: "The Graduate",
    runtime: 106,
    ranking: 138
  },
  {
    title: "Manhattan",
    runtime: 96,
    ranking: 139
  },
  {
    title: "Rosencrantz & Guildenstern Are Dead",
    runtime: 117,
    ranking: 140
  },
  {
    title: "Paths of Glory",
    runtime: 88,
    ranking: 141
  },
  {
    title: "Better Off Dead...",
    runtime: 97,
    ranking: 142
  },
  {
    title: "The Terminator",
    runtime: 107,
    ranking: 143
  },
  {
    title: "Nikita",
    runtime: 117,
    ranking: 144
  },
  {
    title: "Cheech and Chong's Neratingt Movie",
    runtime: 99,
    ranking: 145
  },
  {
    title: "Tom and Huck",
    runtime: 97,
    ranking: 146
  },
  {
    title: "The African Queen",
    runtime: 105,
    ranking: 147
  },
  {
    title: "Life of Brian",
    runtime: 94,
    ranking: 148
  },
  {
    title: "The Day the Earth Stood Still",
    runtime: 92,
    ranking: 149
  },
  {
    title: "Man Bites Dog",
    runtime: 95,
    ranking: 150
  },
  {
    title: "The Ghost and the Darkness",
    runtime: 110,
    ranking: 151
  },
  {
    title: "Miller's Crossing",
    runtime: 115,
    ranking: 152
  },
  {
    title: "8½",
    runtime: 138,
    ranking: 153
  },
  {
    title: "The Deer Hunter",
    runtime: 183,
    ranking: 154
  },
  {
    title: "Chinatown",
    runtime: 130,
    ranking: 155
  },
  {
    title: "Pump Up the Volume",
    runtime: 102,
    ranking: 156
  },
  {
    title: "The Bridge on the River Kwai",
    runtime: 161,
    ranking: 157
  },
  {
    title: "Stand by Me",
    runtime: 89,
    ranking: 158
  },
  {
    title: "Mallrats",
    runtime: 94,
    ranking: 159
  },
  {
    title: "The Treasure of the Sierra Madre",
    runtime: 126,
    ranking: 160
  },
  {
    title: "The Shining",
    runtime: 146,
    ranking: 161
  },
  {
    title: "M",
    runtime: 99,
    ranking: 162
  },
  {
    title: "The Gold Rush",
    runtime: 95,
    ranking: 163
  },
  {
    title: "My Fair Lady",
    runtime: 170,
    ranking: 164
  },
  {
    title: "Phenomenon",
    runtime: 123,
    ranking: 165
  },
  {
    title: "The Great Escape",
    runtime: 172,
    ranking: 166
  },
  {
    title: "Naked",
    runtime: 131,
    ranking: 167
  },
  {
    title: "Big Night",
    runtime: 109,
    ranking: 168
  },
  {
    title: "Evil Dead II",
    runtime: 84,
    ranking: 169
  },
  {
    title: "Somewhere in Time",
    runtime: 103,
    ranking: 170
  },
  {
    title: "Strange Brew",
    runtime: 90,
    ranking: 171
  },
  {
    title: "The Sound of Music",
    runtime: 172,
    ranking: 172
  },
  {
    title: "Diva",
    runtime: 117,
    ranking: 173
  },
  {
    title: "Strictly Ballroom",
    runtime: 94,
    ranking: 174
  },
  {
    title: "All About Eve",
    runtime: 138,
    ranking: 175
  },
  {
    title: "Forrest Gump",
    runtime: 142,
    ranking: 176
  },
  {
    title: "Duck Soup",
    runtime: 69,
    ranking: 177
  },
  {
    title: "Bad Taste",
    runtime: 91,
    ranking: 178
  },
  {
    title: "Patton",
    runtime: 172,
    ranking: 179
  },
  {
    title: "National Lampoon's Animal House",
    runtime: 109,
    ranking: 180
  },
  {
    title: "Akira",
    runtime: 124,
    ranking: 181
  },
  {
    title: "Beauty and the Beast",
    runtime: 84,
    ranking: 182
  },
  {
    title: "The Long Kiss Goodnight",
    runtime: 121,
    ranking: 183
  },
  {
    title: "Down by Law",
    runtime: 107,
    ranking: 184
  },
  {
    title: "Dawn of the Dead",
    runtime: 127,
    ranking: 185
  },
  {
    title: "Koyaanisqatsi",
    runtime: 86,
    ranking: 186
  },
  {
    title: "Before Sunrise",
    runtime: 101,
    ranking: 187
  },
  {
    title: "Cyrano de Bergerac",
    runtime: 137,
    ranking: 188
  },
  {
    title: "Groundhog Day",
    runtime: 101,
    ranking: 189
  },
  {
    title: "Cool Hand Luke",
    runtime: 127,
    ranking: 190
  },
  {
    title: "Back to the Future",
    runtime: 116,
    ranking: 191
  },
  {
    title: "Highlander",
    runtime: 116,
    ranking: 192
  },
  {
    title: "The Remains of the Day",
    runtime: 134,
    ranking: 193
  },
  {
    title: "Pink Floyd: The Wall",
    runtime: 95,
    ranking: 194
  },
  {
    title: "The Philadelphia Story",
    runtime: 112,
    ranking: 195
  },
  {
    title: "City Lights",
    runtime: 87,
    ranking: 196
  },
  {
    title: "Night on Earth",
    runtime: 129,
    ranking: 197
  },
  {
    title: "Jean de Florette",
    runtime: 120,
    ranking: 198
  },
  {
    title: "Leaving Las Vegas",
    runtime: 111,
    ranking: 199
  },
  {
    title: "Young Frankenstein",
    runtime: 106,
    ranking: 200
  },
  {
    title: "Arsenic and Old Lace",
    runtime: 118,
    ranking: 201
  },
  {
    title: "Unforgiven",
    runtime: 130,
    ranking: 202
  },
  {
    title: "The Manchurian Candidate",
    runtime: 126,
    ranking: 203
  },
  {
    title: "Little Women",
    runtime: 115,
    ranking: 204
  },
  {
    title: "Shallow Grave",
    runtime: 89,
    ranking: 205
  },
  {
    title: "Fantasia",
    runtime: 125,
    ranking: 206
  },
  {
    title: "Ben-Hur",
    runtime: 212,
    ranking: 207
  },
  {
    title: "This Is Spinal Tap",
    runtime: 82,
    ranking: 208
  },
  {
    title: "The Great Dictator",
    runtime: 125,
    ranking: 209
  },
  {
    title: "Eratingotica",
    runtime: 103,
    ranking: 210
  },
  {
    title: "The Big Sleep",
    runtime: 114,
    ranking: 211
  },
  {
    title: "High Noon",
    runtime: 85,
    ranking: 212
  },
  {
    title: "Sabrina",
    runtime: 113,
    ranking: 213
  },
  {
    title: "Being There",
    runtime: 130,
    ranking: 214
  },
  {
    title: "Heathers",
    runtime: 103,
    ranking: 215
  },
  {
    title: "A Christmas Story",
    runtime: 93,
    ranking: 216
  },
  {
    title: "The Unbearable Lightness of Being",
    runtime: 171,
    ranking: 217
  },
  {
    title: "Die Hard",
    runtime: 132,
    ranking: 218
  },
  {
    title: "Willy Wonka & the Chocolate Factory",
    runtime: 100,
    ranking: 219
  },
  {
    title: "Some Kind of Wonderful",
    runtime: 95,
    ranking: 220
  },
  {
    title: "Aladdin",
    runtime: 90,
    ranking: 221
  },
  {
    title: "A Room with a View",
    runtime: 117,
    ranking: 222
  },
  {
    title: "Indiana Jones and the Last Crusade",
    runtime: 127,
    ranking: 223
  },
  {
    title: "The Adventures of Priscilla, Queen of the Desert",
    runtime: 104,
    ranking: 224
  },
  {
    title: "Independence Day",
    runtime: 145,
    ranking: 225
  },
  {
    title: "Forbidden Planet",
    runtime: 98,
    ranking: 226
  },
  {
    title: "Strange Days",
    runtime: 145,
    ranking: 227
  },
  {
    title: "Fried Green Tomatoes",
    runtime: 130,
    ranking: 228
  },
  {
    title: "Until the End of the World",
    runtime: 158,
    ranking: 229
  },
  {
    title: "Raise the Red Lantern",
    runtime: 125,
    ranking: 230
  },
  {
    title: "In the Name of the Father",
    runtime: 133,
    ranking: 231
  },
  {
    title: "Farewell My Concubine",
    runtime: 171,
    ranking: 232
  },
  {
    title: "Real Genius",
    runtime: 108,
    ranking: 233
  },
  {
    title: "Paris, Teratingas",
    runtime: 145,
    ranking: 234
  },
  {
    title: "Sleepers",
    runtime: 147,
    ranking: 235
  },
  {
    title: "Priest",
    runtime: 98,
    ranking: 236
  },
  {
    title: "Field of Dreams",
    runtime: 107,
    ranking: 237
  },
  {
    title: "Gandhi",
    runtime: 191,
    ranking: 238
  },
  {
    title: "The Rocky Horror Picture Show",
    runtime: 100,
    ranking: 239
  },
  {
    title: "Manon of the Spring",
    runtime: 113,
    ranking: 240
  },
  {
    title: "My Life as a Dog",
    runtime: 101,
    ranking: 241
  },
  {
    title: "The Killing Fields",
    runtime: 141,
    ranking: 242
  },
  {
    title: "The Man Who Would Be King",
    runtime: 129,
    ranking: 243
  },
  {
    title: "Charade",
    runtime: 113,
    ranking: 244
  },
  {
    title: "Clueless",
    runtime: 97,
    ranking: 245
  },
  {
    title: "The Breakfast Club",
    runtime: 97,
    ranking: 246
  },
  {
    title: "On the Waterfront",
    runtime: 108,
    ranking: 247
  },
  {
    title: "A River Runs Through It",
    runtime: 123,
    ranking: 248
  },
  {
    title: "Shadowlands",
    runtime: 131,
    ranking: 249
  },
  {
    title: "The Searchers",
    runtime: 119,
    ranking: 250
  },
  {
    title: "The Shawshank Redemption",
    runtime: 142,
    ranking: 1
  },
  {
    title: "Star Wars: Episode IV - A New Hope",
    runtime: 121,
    ranking: 2
  },
  {
    title: "The Godfather",
    runtime: 175,
    ranking: 3
  },
  {
    title: "Schindler's List",
    runtime: 195,
    ranking: 4
  },
  {
    title: "Casablanca",
    runtime: 102,
    ranking: 5
  },
  {
    title: "Citizen Kane",
    runtime: 119,
    ranking: 6
  },
  {
    title: "The Usual Suspects",
    runtime: 106,
    ranking: 7
  },
  {
    title: "One Flew Over the Cuckoo's Nest",
    runtime: 133,
    ranking: 8
  },
  {
    title: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    runtime: 95,
    ranking: 9
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    runtime: 124,
    ranking: 10
  },
  {
    title: "Titanic",
    runtime: 194,
    ranking: 11
  },
  {
    title: "Indiana Jones and the Raiders of the Lost Ark",
    runtime: 115,
    ranking: 12
  },
  {
    title: "Rear Window",
    runtime: 112,
    ranking: 13
  },
  {
    title: "North by Northwest",
    runtime: 136,
    ranking: 14
  },
  {
    title: "L.A. Confidential",
    runtime: 138,
    ranking: 15
  },
  {
    title: "Pulp Fiction",
    runtime: 154,
    ranking: 16
  },
  {
    title: "The Godfather: Part II",
    runtime: 202,
    ranking: 17
  },
  {
    title: "Blade Runner",
    runtime: 117,
    ranking: 18
  },
  {
    title: "Lawrence of Arabia",
    runtime: 228,
    ranking: 19
  },
  {
    title: "The Silence of the Lambs",
    runtime: 118,
    ranking: 20
  },
  {
    title: "Taxi Driver",
    runtime: 114,
    ranking: 21
  },
  {
    title: "It's a Wonderful Life",
    runtime: 130,
    ranking: 22
  },
  {
    title: "Seven Samurai",
    runtime: 207,
    ranking: 23
  },
  {
    title: "12 Angry Men",
    runtime: 96,
    ranking: 24
  },
  {
    title: "Goodfellas",
    runtime: 146,
    ranking: 25
  },
  {
    title: "To Kill a Mockingbird",
    runtime: 129,
    ranking: 26
  },
  {
    title: "Vertigo",
    runtime: 128,
    ranking: 27
  },
  {
    title: "Psycho",
    runtime: 109,
    ranking: 28
  },
  {
    title: "The Wrong Trousers",
    runtime: 30,
    ranking: 29
  },
  {
    title: "Fargo",
    runtime: 98,
    ranking: 30
  },
  {
    title: "The Princess Bride",
    runtime: 98,
    ranking: 31
  },
  {
    title: "Léon: The Professional",
    runtime: 110,
    ranking: 32
  },
  {
    title: "Braveheart",
    runtime: 178,
    ranking: 33
  },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    runtime: 131,
    ranking: 34
  },
  {
    title: "Monty Python and the Holy Grail",
    runtime: 91,
    ranking: 35
  },
  {
    title: "The Maltese Falcon",
    runtime: 100,
    ranking: 36
  },
  {
    title: "The Good, the Bad and the Ugly",
    runtime: 178,
    ranking: 37
  },
  {
    title: "The Third Man",
    runtime: 93,
    ranking: 38
  },
  {
    title: "Apocalypse Now",
    runtime: 147,
    ranking: 39
  },
  {
    title: "Reservoir Dogs",
    runtime: 99,
    ranking: 40
  },
  {
    title: "2001: A Space Odyssey",
    runtime: 149,
    ranking: 41
  },
  {
    title: "Alien",
    runtime: 117,
    ranking: 42
  },
  {
    title: "Contact",
    runtime: 150,
    ranking: 43
  },
  {
    title: "Aliens",
    runtime: 137,
    ranking: 44
  },
  {
    title: "A Clockwork Orange",
    runtime: 136,
    ranking: 45
  },
  {
    title: "The Full Monty",
    runtime: 91,
    ranking: 46
  },
  {
    title: "Sling Blade",
    runtime: 135,
    ranking: 47
  },
  {
    title: "The Wizard of Oz",
    runtime: 102,
    ranking: 48
  },
  {
    title: "Raging Bull",
    runtime: 129,
    ranking: 49
  },
  {
    title: "Das Boot",
    runtime: 149,
    ranking: 50
  },
  {
    title: "Ran",
    runtime: 162,
    ranking: 51
  },
  {
    title: "Amadeus",
    runtime: 160,
    ranking: 52
  },
  {
    title: "The Sting",
    runtime: 129,
    ranking: 53
  },
  {
    title: "Glory",
    runtime: 122,
    ranking: 54
  },
  {
    title: "Se7en",
    runtime: 127,
    ranking: 55
  },
  {
    title: "Some Like It Hot",
    runtime: 121,
    ranking: 56
  },
  {
    title: "The African Queen",
    runtime: 105,
    ranking: 57
  },
  {
    title: "Brazil",
    runtime: 132,
    ranking: 58
  },
  {
    title: "Cinema Paradiso",
    runtime: 155,
    ranking: 59
  },
  {
    title: "The Bridge on the River Kwai",
    runtime: 161,
    ranking: 60
  },
  {
    title: "The Fugitive",
    runtime: 130,
    ranking: 61
  },
  {
    title: "A Close Shave",
    runtime: 30,
    ranking: 62
  },
  {
    title: "Toy Story",
    runtime: 81,
    ranking: 63
  },
  {
    title: "Annie Hall",
    runtime: 93,
    ranking: 64
  },
  {
    title: "Modern Times",
    runtime: 87,
    ranking: 65
  },
  {
    title: "Singin' in the Rain",
    runtime: 103,
    ranking: 66
  },
  {
    title: "Henry V",
    runtime: 137,
    ranking: 67
  },
  {
    title: "Dead Man Walking",
    runtime: 122,
    ranking: 68
  },
  {
    title: "Secrets & Lies",
    runtime: 136,
    ranking: 69
  },
  {
    title: "The Treasure of the Sierra Madre",
    runtime: 126,
    ranking: 70
  },
  {
    title: "The Great Escape",
    runtime: 172,
    ranking: 71
  },
  {
    title: "The Postman",
    runtime: 108,
    ranking: 72
  },
  {
    title: "Rashomon",
    runtime: 88,
    ranking: 73
  },
  {
    title: "Duck Soup",
    runtime: 69,
    ranking: 74
  },
  {
    title: "The Graduate",
    runtime: 106,
    ranking: 75
  },
  {
    title: "Chinatown",
    runtime: 130,
    ranking: 76
  },
  {
    title: "Once Upon a Time in the West",
    runtime: 165,
    ranking: 77
  },
  {
    title: "Lone Star",
    runtime: 135,
    ranking: 78
  },
  {
    title: "Arsenic and Old Lace",
    runtime: 118,
    ranking: 79
  },
  {
    title: "Manhattan",
    runtime: 96,
    ranking: 80
  },
  {
    title: "Touch of Evil",
    runtime: 95,
    ranking: 81
  },
  {
    title: "12 Monkeys",
    runtime: 129,
    ranking: 82
  },
  {
    title: "Clerks",
    runtime: 92,
    ranking: 83
  },
  {
    title: "Much Ado About Nothing",
    runtime: 111,
    ranking: 84
  },
  {
    title: "The Deer Hunter",
    runtime: 183,
    ranking: 85
  },
  {
    title: "Breaking the Waves",
    runtime: 159,
    ranking: 86
  },
  {
    title: "Full Metal Jacket",
    runtime: 116,
    ranking: 87
  },
  {
    title: "Terminator 2: Judgment Day",
    runtime: 137,
    ranking: 88
  },
  {
    title: "Double Indemnity",
    runtime: 107,
    ranking: 89
  },
  {
    title: "Metropolis",
    runtime: 153,
    ranking: 90
  },
  {
    title: "The Right Stuff",
    runtime: 193,
    ranking: 91
  },
  {
    title: "The Gold Rush",
    runtime: 95,
    ranking: 92
  },
  {
    title: "Heavenly Creatures",
    runtime: 99,
    ranking: 93
  },
  {
    title: "The Philadelphia Story",
    runtime: 112,
    ranking: 94
  },
  {
    title: "Delicatessen",
    runtime: 99,
    ranking: 95
  },
  {
    title: "Ben-Hur",
    runtime: 212,
    ranking: 96
  },
  {
    title: "Mr. Smith Goes to Washington",
    runtime: 129,
    ranking: 97
  },
  {
    title: "The Great Dictator",
    runtime: 125,
    ranking: 98
  },
  {
    title: "8½",
    runtime: 138,
    ranking: 99
  },
  {
    title: "The Shining",
    runtime: 146,
    ranking: 100
  },
  {
    title: "The Seventh Seal",
    runtime: 96,
    ranking: 101
  },
  {
    title: "Wings of Desire",
    runtime: 128,
    ranking: 102
  },
  {
    title: "Nikita",
    runtime: 117,
    ranking: 103
  },
  {
    title: "Chasing Amy",
    runtime: 113,
    ranking: 104
  },
  {
    title: "Cool Hand Luke",
    runtime: 127,
    ranking: 105
  },
  {
    title: "Sense and Sensibility",
    runtime: 136,
    ranking: 106
  },
  {
    title: "The Killer",
    runtime: 111,
    ranking: 107
  },
  {
    title: "Once Upon a Time in America",
    runtime: 229,
    ranking: 108
  },
  {
    title: "A Christmas Story",
    runtime: 93,
    ranking: 109
  },
  {
    title: "Dead Poets Society",
    runtime: 128,
    ranking: 110
  },
  {
    title: "Indiana Jones and the Last Crusade",
    runtime: 127,
    ranking: 111
  },
  {
    title: "Life of Brian",
    runtime: 94,
    ranking: 112
  },
  {
    title: "The Big Sleep",
    runtime: 114,
    ranking: 113
  },
  {
    title: "Shine",
    runtime: 105,
    ranking: 114
  },
  {
    title: "Trainspotting",
    runtime: 93,
    ranking: 115
  },
  {
    title: "The Manchurian Candidate",
    runtime: 126,
    ranking: 116
  },
  {
    title: "Stand by Me",
    runtime: 89,
    ranking: 117
  },
  {
    title: "The Terminator",
    runtime: 107,
    ranking: 118
  },
  {
    title: "High Noon",
    runtime: 85,
    ranking: 119
  },
  {
    title: "Hamlet",
    runtime: 242,
    ranking: 120
  },
  {
    title: "Rebecca",
    runtime: 130,
    ranking: 121
  },
  {
    title: "Once Were Warriors",
    runtime: 102,
    ranking: 122
  },
  {
    title: "Swingers",
    runtime: 96,
    ranking: 123
  },
  {
    title: "In the Name of the Father",
    runtime: 133,
    ranking: 124
  },
  {
    title: "Butch Cassidy and the Sundance Kid",
    runtime: 110,
    ranking: 125
  },
  {
    title: "Die Hard",
    runtime: 132,
    ranking: 126
  },
  {
    title: "Roman Holiday",
    runtime: 118,
    ranking: 127
  },
  {
    title: "The Day the Earth Stood Still",
    runtime: 92,
    ranking: 128
  },
  {
    title: "On the Waterfront",
    runtime: 108,
    ranking: 129
  },
  {
    title: "The Blues Brothers",
    runtime: 133,
    ranking: 130
  },
  {
    title: "Gandhi",
    runtime: 191,
    ranking: 131
  },
  {
    title: "Smoke",
    runtime: 112,
    ranking: 132
  },
  {
    title: "Young Frankenstein",
    runtime: 106,
    ranking: 133
  },
  {
    title: "The Wild Bunch",
    runtime: 135,
    ranking: 134
  },
  {
    title: "Fantasia",
    runtime: 125,
    ranking: 135
  },
  {
    title: "Jaws",
    runtime: 124,
    ranking: 136
  },
  {
    title: "Gone with the Wind",
    runtime: 238,
    ranking: 137
  },
  {
    title: "Miller's Crossing",
    runtime: 115,
    ranking: 138
  },
  {
    title: "Notorious",
    runtime: 102,
    ranking: 139
  },
  {
    title: "The Killing Fields",
    runtime: 141,
    ranking: 140
  },
  {
    title: "Three Colors: Red",
    runtime: 99,
    ranking: 141
  },
  {
    title: "The City of Lost Children",
    runtime: 112,
    ranking: 142
  },
  {
    title: "Three Colors: Blue",
    runtime: 94,
    ranking: 143
  },
  {
    title: "The Remains of the Day",
    runtime: 134,
    ranking: 144
  },
  {
    title: "Scream",
    runtime: 111,
    ranking: 145
  },
  {
    title: "My Fair Lady",
    runtime: 170,
    ranking: 146
  },
  {
    title: "Unforgiven",
    runtime: 130,
    ranking: 147
  },
  {
    title: "Beauty and the Beast",
    runtime: 84,
    ranking: 148
  },
  {
    title: "Forrest Gump",
    runtime: 142,
    ranking: 149
  },
  {
    title: "Breakfast at Tiffany's",
    runtime: 115,
    ranking: 150
  },
  {
    title: "Bringing Up Baby",
    runtime: 102,
    ranking: 151
  },
  {
    title: "Being There",
    runtime: 130,
    ranking: 152
  },
  {
    title: "True Romance",
    runtime: 119,
    ranking: 153
  },
  {
    title: "Patton",
    runtime: 172,
    ranking: 154
  },
  {
    title: "Face/Off",
    runtime: 138,
    ranking: 155
  },
  {
    title: "The Conversation",
    runtime: 113,
    ranking: 156
  },
  {
    title: "The Game",
    runtime: 129,
    ranking: 157
  },
  {
    title: "Rain Man",
    runtime: 133,
    ranking: 158
  },
  {
    title: "Fried Green Tomatoes",
    runtime: 130,
    ranking: 159
  },
  {
    title: "Jean de Florette",
    runtime: 120,
    ranking: 160
  },
  {
    title: "MASH",
    runtime: 116,
    ranking: 161
  },
  {
    title: "Babe",
    runtime: 91,
    ranking: 162
  },
  {
    title: "The Player",
    runtime: 124,
    ranking: 163
  },
  {
    title: "Heat",
    runtime: 170,
    ranking: 164
  },
  {
    title: "Apollo 13",
    runtime: 140,
    ranking: 165
  },
  {
    title: "Three Colors: White",
    runtime: 92,
    ranking: 166
  },
  {
    title: "The Quiet Man",
    runtime: 129,
    ranking: 167
  },
  {
    title: "Night on Earth",
    runtime: 129,
    ranking: 168
  },
  {
    title: "This Is Spinal Tap",
    runtime: 82,
    ranking: 169
  },
  {
    title: "Cyrano de Bergerac",
    runtime: 137,
    ranking: 170
  },
  {
    title: "The Fifth Element",
    runtime: 126,
    ranking: 171
  },
  {
    title: "Back to the Future",
    runtime: 116,
    ranking: 172
  },
  {
    title: "Harold and Maude",
    runtime: 91,
    ranking: 173
  },
  {
    title: "Rebel Without a Cause",
    runtime: 111,
    ranking: 174
  },
  {
    title: "The Untouchables",
    runtime: 119,
    ranking: 175
  },
  {
    title: "Shallow Grave",
    runtime: 89,
    ranking: 176
  },
  {
    title: "Doctor Zhivago",
    runtime: 197,
    ranking: 177
  },
  {
    title: "Little Big Man",
    runtime: 139,
    ranking: 178
  },
  {
    title: "The Man Who Would Be King",
    runtime: 129,
    ranking: 179
  },
  {
    title: "Grosse Pointe Blank",
    runtime: 107,
    ranking: 180
  },
  {
    title: "Aladdin",
    runtime: 90,
    ranking: 181
  },
  {
    title: "The Sound of Music",
    runtime: 172,
    ranking: 182
  },
  {
    title: "Hard Boiled",
    runtime: 128,
    ranking: 183
  },
  {
    title: "A Fish Called Wanda",
    runtime: 108,
    ranking: 184
  },
  {
    title: "Akira",
    runtime: 124,
    ranking: 185
  },
  {
    title: "A Grand Day Out",
    runtime: 24,
    ranking: 186
  },
  {
    title: "Searching for Bobby Fischer",
    runtime: 109,
    ranking: 187
  },
  {
    title: "My Life as a Dog",
    runtime: 101,
    ranking: 188
  },
  {
    title: "Field of Dreams",
    runtime: 107,
    ranking: 189
  },
  {
    title: "A Room with a View",
    runtime: 117,
    ranking: 190
  },
  {
    title: "Witness",
    runtime: 112,
    ranking: 191
  },
  {
    title: "Bound",
    runtime: 109,
    ranking: 192
  },
  {
    title: "Blood Simple",
    runtime: 99,
    ranking: 193
  },
  {
    title: "The Double Life of Véronique",
    runtime: 98,
    ranking: 194
  },
  {
    title: "Rosencrantz & Guildenstern Are Dead",
    runtime: 117,
    ranking: 195
  },
  {
    title: "Raising Arizona",
    runtime: 94,
    ranking: 196
  },
  {
    title: "Dangerous Liaisons",
    runtime: 119,
    ranking: 197
  },
  {
    title: "Groundhog Day",
    runtime: 101,
    ranking: 198
  },
  {
    title: "Local Hero",
    runtime: 111,
    ranking: 199
  },
  {
    title: "Koyaanisqatsi",
    runtime: 86,
    ranking: 200
  },
  {
    title: "The Elephant Man",
    runtime: 124,
    ranking: 201
  },
  {
    title: "Naked",
    runtime: 131,
    ranking: 202
  },
  {
    title: "Crimes and Misdemeanors",
    runtime: 104,
    ranking: 203
  },
  {
    title: "Platoon",
    runtime: 120,
    ranking: 204
  },
  {
    title: "Spartacus",
    runtime: 197,
    ranking: 205
  },
  {
    title: "When Harry Met Sally...",
    runtime: 95,
    ranking: 206
  },
  {
    title: "Leaving Las Vegas",
    runtime: 111,
    ranking: 207
  },
  {
    title: "Short Cuts",
    runtime: 188,
    ranking: 208
  },
  {
    title: "Diva",
    runtime: 117,
    ranking: 209
  },
  {
    title: "Braindead",
    runtime: 104,
    ranking: 210
  },
  {
    title: "West Side Story",
    runtime: 153,
    ranking: 211
  },
  {
    title: "Airplane!",
    runtime: 88,
    ranking: 212
  },
  {
    title: "Snow White and the Seven Dwarfs",
    runtime: 83,
    ranking: 213
  },
  {
    title: "Mary Poppins",
    runtime: 139,
    ranking: 214
  },
  {
    title: "The Birds",
    runtime: 119,
    ranking: 215
  },
  {
    title: "A Few Good Men",
    runtime: 138,
    ranking: 216
  },
  {
    title: "The People vs. Larry Flynt",
    runtime: 130,
    ranking: 217
  },
  {
    title: "What's Eating Gilbert Grape",
    runtime: 118,
    ranking: 218
  },
  {
    title: "Gallipoli",
    runtime: 110,
    ranking: 219
  },
  {
    title: "The Producers",
    runtime: 88,
    ranking: 220
  },
  {
    title: "The Lion King",
    runtime: 88,
    ranking: 221
  },
  {
    title: "Dog Day Afternoon",
    runtime: 125,
    ranking: 222
  },
  {
    title: "Papillon",
    runtime: 151,
    ranking: 223
  },
  {
    title: "Deliverance",
    runtime: 109,
    ranking: 224
  },
  {
    title: "Dial M for Murder",
    runtime: 105,
    ranking: 225
  },
  {
    title: "The English Patient",
    runtime: 162,
    ranking: 226
  },
  {
    title: "Blue Velvet",
    runtime: 120,
    ranking: 227
  },
  {
    title: "Evil Dead II",
    runtime: 84,
    ranking: 228
  },
  {
    title: "Men in Black",
    runtime: 98,
    ranking: 229
  },
  {
    title: "Big Night",
    runtime: 109,
    ranking: 230
  },
  {
    title: "Paris, Texas",
    runtime: 145,
    ranking: 231
  },
  {
    title: "Ed Wood",
    runtime: 127,
    ranking: 232
  },
  {
    title: "The Hunt for Red October",
    runtime: 135,
    ranking: 233
  },
  {
    title: "A Time to Kill",
    runtime: 149,
    ranking: 234
  },
  {
    title: "The Big Blue",
    runtime: 168,
    ranking: 235
  },
  {
    title: "Dances with Wolves",
    runtime: 181,
    ranking: 236
  },
  {
    title: "Donnie Brasco",
    runtime: 127,
    ranking: 237
  },
  {
    title: "The Rock",
    runtime: 136,
    ranking: 238
  },
  {
    title: "Awakenings",
    runtime: 121,
    ranking: 239
  },
  {
    title: "Heathers",
    runtime: 103,
    ranking: 240
  },
  {
    title: "The Name of the Rose",
    runtime: 130,
    ranking: 241
  },
  {
    title: "Goldfinger",
    runtime: 110,
    ranking: 242
  },
  {
    title: "Cabaret",
    runtime: 124,
    ranking: 243
  },
  {
    title: "Highlander",
    runtime: 116,
    ranking: 244
  },
  {
    title: "Forbidden Planet",
    runtime: 98,
    ranking: 245
  },
  {
    title: "Tombstone",
    runtime: 130,
    ranking: 246
  },
  {
    title: "Better Off Dead...",
    runtime: 97,
    ranking: 247
  },
  {
    title: "Jerry Maguire",
    runtime: 139,
    ranking: 248
  },
  {
    title: "Shadowlands",
    runtime: 131,
    ranking: 249
  },
  {
    title: "All the President's Men",
    runtime: 138,
    ranking: 250
  }
];

const test = 0;

// Rating vs gross
function initRatingGrossChart() {
    const ctx = document.getElementById('ratingGrossMovieChart').getContext('2d');
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Movies (Top ranking)',
                data: ratingGrossMovieData,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            parsing: {
                xAxisKey: 'rating',
                yAxisKey: 'gross'
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: (context) => {
                            let point = context.raw;
                            return `${point.title},: Rating ${point.rating}, $${point.gross},`;
                        },
                    }
                }
            },
            scales: {
                x: { title: { display: true, text: 'Rating IMDB' }, min: 70, max: 100 },
                y: { title: { display: true, text: 'Gross ($)' }, beginAtZero: true }
            }
        }
    });
}

function initrankingRuntimeMovieChart() {
    const ctx = document.getElementById('rankingRuntimeMovieChart').getContext('2d');
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Movies',
                data: rankingRuntimeMovieData,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            parsing: {
                xAxisKey: 'runtime',
                yAxisKey: 'ranking'
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: (context) => {
                            let point = context.raw;
                            return `${point.title}: Ranking: ${point.ranking}, Runtime: ${point.runtime} min`;
                        }
                    }
                }
            },
            scales: {
                x: { title: { display: true, text: 'Runtime (min)' } },
                y: { title: { display: true, text: 'Ranking' }, max: 10 }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initRatingGrossChart();
    initrankingRuntimeMovieChart();
});
