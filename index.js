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

const directorsAvgRatingData = [
    {moviesCount: 154, ratingAvg: 8.33, title: "Steven Spielberg" },
    {moviesCount: 199, ratingAvg: 8.27, title: "Stanley Kubrick" },
    {moviesCount: 154, ratingAvg: 8.33, title: "Steven Spielberg" },
    {moviesCount: 145, ratingAvg: 8.27, title: "Billy Wilder" },
    {moviesCount: 131, ratingAvg: 8.33, title: "Martin Scorsese" },
    {moviesCount: 130, ratingAvg: 8.3, title: "Akira Kurosawa" },
    {moviesCount: 116, ratingAvg: 8.39, title: "Charles Chaplin" },
    {moviesCount: 101, ratingAvg: 8.4, title: "Quentin Tarantino" },
    {moviesCount: 99, ratingAvg: 8.45, title: "Sergio Leone" },
    {moviesCount: 99, ratingAvg: 8.53, title: "Christopher Nolan" },
    {moviesCount: 91, ratingAvg: 8.71, title: "Francis Ford Coppola" },
    {moviesCount: 90, ratingAvg: 8.23, title: "Frank Capra" },
    {moviesCount: 88, ratingAvg: 8.31, title: "Hayao Miyazaki" },
    {moviesCount: 81, ratingAvg: 8.24, title: "James Cameron" },
    {moviesCount: 76, ratingAvg: 8.31, title: "Ridley Scott" },
    {moviesCount: 75, ratingAvg: 8.17, title: "Ingmar Bergman" },
    {moviesCount: 72, ratingAvg: 8.09, title: "Clint Eastwood" },
    {moviesCount: 71, ratingAvg: 8.01, title: "John Huston" },
    {moviesCount: 69, ratingAvg: 8.41, title: "Sidney Lumet" },
    {moviesCount: 68, ratingAvg: 8.63, title: "Peter Jackson" },
    {moviesCount: 66, ratingAvg: 8.04, title: "Rob Reiner" },
    {moviesCount: 65, ratingAvg: 7.97, title: "Joel Coen" },
    {moviesCount: 63, ratingAvg: 8.16, title: "David Lean" },
    {moviesCount: 63, ratingAvg: 8.07, title: "William Wyler" },
    {moviesCount: 61, ratingAvg: 8.55, title: "David Fincher" },
    {moviesCount: 59, ratingAvg: 8.07, title: "Terry Gilliam" },
    {moviesCount: 59, ratingAvg: 8, title: "John Ford" },
    {moviesCount: 54, ratingAvg: 8.46, title: "Milos Forman" },
    {moviesCount: 54, ratingAvg: 8.61, title: "Robert Zemeckis" },
    {moviesCount: 53, ratingAvg: 8.28, title: "Roman Polanski" },
    {moviesCount: 52, ratingAvg: 8.02, title: "Federico Fellini" },
    {moviesCount: 51, ratingAvg: 8.3, title: "Fritz Lang" },
    {moviesCount: 51, ratingAvg: 7.91, title: "Howard Hawks" },
    {moviesCount: 49, ratingAvg: 8.97, title: "Frank Darabont" },
    {moviesCount: 49, ratingAvg: 8.05, title: "Victor Fleming" },
    {moviesCount: 49, ratingAvg: 8.16, title: "George Roy Hill" },
    {moviesCount: 48, ratingAvg: 8.16, title: "Orson Welles" },
    {moviesCount: 45, ratingAvg: 7.95, title: "Woody Allen" },
    {moviesCount: 44, ratingAvg: 8.2, title: "Guy Ritchie" },
    {moviesCount: 41, ratingAvg: 8.06, title: "Elia Kazan" },
    {moviesCount: 40, ratingAvg: 8.04, title: "David Lynch" },
    {moviesCount: 39, ratingAvg: 8.13, title: "Pete Docter" },
    {moviesCount: 38, ratingAvg: 8.31, title: "Michael Curtiz" },
    {moviesCount: 37, ratingAvg: 8.16, title: "John Lasseter" },
    {moviesCount: 35, ratingAvg: 8.2, title: "Stanley Donen" },
    {moviesCount: 35, ratingAvg: 8, title: "Mike Nichols" },
    {moviesCount: 34, ratingAvg: 8.04, title: "Danny Boyle" },
    {moviesCount: 33, ratingAvg: 8.15, title: "Joseph L. Mankiewicz" },
    {moviesCount: 33, ratingAvg: 8.23, title: "Andrew Stanton" },
    {moviesCount: 32, ratingAvg: 8.26, title: "Mel Gibson" },
    {moviesCount: 32, ratingAvg: 8.31, title: "Luc Besson" },
    {moviesCount: 32, ratingAvg: 8.1, title: "Michael Mann" },
    {moviesCount: 31, ratingAvg: 8.2, title: "Darren Aronofsky" },
    {moviesCount: 29, ratingAvg: 8.42, title: "Bryan Singer" },
    {moviesCount: 28, ratingAvg: 8.52, title: "George Lucas" },
    {moviesCount: 28, ratingAvg: 8.04, title: "Ron Howard" },
    {moviesCount: 28, ratingAvg: 8.03, title: "Peter Weir" },
    {moviesCount: 28, ratingAvg: 7.95, title: "Franklin J. Schaffner" },
    {moviesCount: 28, ratingAvg: 8.16, title: "John McTiernan" },
    {moviesCount: 28, ratingAvg: 8.09, title: "Oliver Stone" },
    {moviesCount: 28, ratingAvg: 8.08, title: "Paul Thomas Anderson" },
    {moviesCount: 28, ratingAvg: 8.1, title: "Henri-Georges Clouzot" },
    {moviesCount: 27, ratingAvg: 8.18, title: "John Sturges" },
    {moviesCount: 27, ratingAvg: 8.26, title: "Sam Mendes" },
    {moviesCount: 26, ratingAvg: 8.7, title: "Irvin Kershner" },
    {moviesCount: 26, ratingAvg: 8.2, title: "Robert Mulligan" },
    {moviesCount: 26, ratingAvg: 8.3, title: "Richard Marquand" },
    {moviesCount: 26, ratingAvg: 8.5, title: "Giuseppe Tornatore" },
    {moviesCount: 26, ratingAvg: 8.6, title: "Jonathan Demme" },
    {moviesCount: 26, ratingAvg: 8.1, title: "Carol Reed" },
    {moviesCount: 26, ratingAvg: 8.3, title: "Wolfgang Petersen" },
    {moviesCount: 26, ratingAvg: 8.1, title: "Terry Jones" },
    {moviesCount: 26, ratingAvg: 8.1, title: "Michael Cimino" },
    {moviesCount: 26, ratingAvg: 8.1, title: "Stuart Rosenberg" },
    {moviesCount: 26, ratingAvg: 8.16, title: "Brian De Palma" },
    {moviesCount: 25, ratingAvg: 8.59, title: "Lana Wachowski" },
    {moviesCount: 25, ratingAvg: 7.94, title: "Richard Attenborough" },
    {moviesCount: 25, ratingAvg: 8.2, title: "Curtis Hanson" },
    {moviesCount: 25, ratingAvg: 8.29, title: "Vittorio De Sica" },
    {moviesCount: 24, ratingAvg: 7.94, title: "Fred Zinnemann" },
    {moviesCount: 24, ratingAvg: 7.85, title: "Tim Burton" },
    {moviesCount: 23, ratingAvg: 8, title: "Krzysztof Kieslowski" },
    {moviesCount: 23, ratingAvg: 8.1, title: "M. Night Shyamalan" },
    {moviesCount: 23, ratingAvg: 8.6, title: "Roberto Benigni" },
    {moviesCount: 23, ratingAvg: 8.5, title: "Tony Kaye" },
    {moviesCount: 23, ratingAvg: 8.1, title: "Clyde Bruckman" },
    {moviesCount: 23, ratingAvg: 8.06, title: "Alejandro G. IÃ±Ã¡rritu" },
    {moviesCount: 23, ratingAvg: 8.33, title: "Park Chan-wook" },
    {moviesCount: 22, ratingAvg: 8.06, title: "Richard Linklater" },
    {moviesCount: 22, ratingAvg: 7.87, title: "George Cukor" },
    {moviesCount: 22, ratingAvg: 8, title: "Harold Ramis" },
    {moviesCount: 22, ratingAvg: 8.1, title: "FranÃ§ois Truffaut" },
    {moviesCount: 22, ratingAvg: 7.99, title: "F.W. Murnau" },
    {moviesCount: 21, ratingAvg: 8.3, title: "Jean-Pierre Jeunet" },
    {moviesCount: 21, ratingAvg: 8.17, title: "Denis Villeneuve" },
    {moviesCount: 20, ratingAvg: 8.26, title: "Gus Van Sant" },
    {moviesCount: 20, ratingAvg: 8.19, title: "Thomas Vinterberg" },
    {moviesCount: 19, ratingAvg: 8.09, title: "Andrei Tarkovsky" },
    {moviesCount: 19, ratingAvg: 8.6, title: "Fernando Meirelles" },
    {moviesCount: 19, ratingAvg: 8.5, title: "Isao Takahata" },
    {moviesCount: 18, ratingAvg: 7.74, title: "Robert Wise" },
    {moviesCount: 18, ratingAvg: 7.9, title: "John Frankenheimer" },
    {moviesCount: 18, ratingAvg: 8, title: "Brad Bird" },
    {moviesCount: 18, ratingAvg: 8.3, title: "Michel Gondry" },
    {moviesCount: 17, ratingAvg: 7.74, title: "Edward Zwick" },
    {moviesCount: 17, ratingAvg: 8.5, title: "Roger Allers" },
    {moviesCount: 17, ratingAvg: 7.9, title: "Sam Peckinpah" },
    {moviesCount: 17, ratingAvg: 7.96, title: "William Friedkin" },
    {moviesCount: 17, ratingAvg: 8, title: "Charles Laughton" },
    {moviesCount: 17, ratingAvg: 8.19, title: "Stanley Kramer" },
    {moviesCount: 17, ratingAvg: 8, title: "Richard Kelly" },
    {moviesCount: 17, ratingAvg: 8.1, title: "Terry George" },
    {moviesCount: 17, ratingAvg: 8.2, title: "Oliver Hirschbiegel" },
    {moviesCount: 17, ratingAvg: 8.1, title: "John Carpenter" },
    {moviesCount: 17, ratingAvg: 8.26, title: "Lee Unkrich" },
    {moviesCount: 16, ratingAvg: 7.77, title: "Ang Lee" },
    {moviesCount: 16, ratingAvg: 8.04, title: "Jim Sheridan" },
    {moviesCount: 16, ratingAvg: 8, title: "Robert Rossen" },
    {moviesCount: 16, ratingAvg: 8, title: "Otto Preminger" },
    {moviesCount: 16, ratingAvg: 8.1, title: "James McTeigue" },
    {moviesCount: 16, ratingAvg: 8.2, title: "Guillermo del Toro" },
    {moviesCount: 16, ratingAvg: 8.07, title: "Ethan Coen" },
    {moviesCount: 15, ratingAvg: 7.8, title: "Leo McCarey" },
    {moviesCount: 15, ratingAvg: 7.93, title: "Mel Brooks" },
    {moviesCount: 15, ratingAvg: 7.9, title: "Bob Clark" },
    {moviesCount: 15, ratingAvg: 8.4, title: "Florian Henckel von Donnersmarck" },
    {moviesCount: 15, ratingAvg: 8.3, title: "Rajkumar Hirani" },
    {moviesCount: 14, ratingAvg: 7.5, title: "Kenneth Branagh" },
    {moviesCount: 14, ratingAvg: 7.96, title: "Hal Ashby" },
    {moviesCount: 14, ratingAvg: 7.93, title: "Gary Trousdale" },
    {moviesCount: 14, ratingAvg: 7.94, title: "Lasse HallstrÃ¶m" },
    {moviesCount: 14, ratingAvg: 7.46, title: "Robert Altman" },
    {moviesCount: 14, ratingAvg: 7.77, title: "Arthur Penn" },
    {moviesCount: 14, ratingAvg: 8.1, title: "Lewis Milestone" },
    {moviesCount: 14, ratingAvg: 8.1, title: "Sean Penn" },
    {moviesCount: 14, ratingAvg: 8.1, title: "John G. Avildsen" },
    {moviesCount: 13, ratingAvg: 8.11, title: "Nick Park" },
    {moviesCount: 13, ratingAvg: 7.96, title: "Wim Wenders" },
    {moviesCount: 13, ratingAvg: 7.9, title: "Henry Koster" },
    {moviesCount: 13, ratingAvg: 8, title: "Gore Verbinski" },
    {moviesCount: 12, ratingAvg: 7.53, title: "Kevin Smith" },
    {moviesCount: 12, ratingAvg: 7.75, title: "John Woo" },
    {moviesCount: 12, ratingAvg: 8, title: "Frank Miller" },
    {moviesCount: 12, ratingAvg: 8.1, title: "Gillo Pontecorvo" },
    {moviesCount: 12, ratingAvg: 8.1, title: "Mathieu Kassovitz" },
    {moviesCount: 12, ratingAvg: 7.97, title: "Paul Greengrass" },
    {moviesCount: 12, ratingAvg: 8.1, title: "Dean DeBlois" },
    {moviesCount: 12, ratingAvg: 8.2, title: "Juan JosÃ© Campanella" },
    {moviesCount: 12, ratingAvg: 8.1, title: "Adam Elliot" },
    {moviesCount: 12, ratingAvg: 8.23, title: "Bong Joon Ho" },
    {moviesCount: 11, ratingAvg: 7.96, title: "Barry Levinson" },
    {moviesCount: 11, ratingAvg: 7.9, title: "Merian C. Cooper" },
    {moviesCount: 11, ratingAvg: 8.1, title: "Carl Theodor Dreyer" },
    {moviesCount: 11, ratingAvg: 8.3, title: "Asghar Farhadi" },
    {moviesCount: 11, ratingAvg: 8.1, title: "Gavin O'Connor" },
    {moviesCount: 11, ratingAvg: 8.1, title: "David Yates" },
    {moviesCount: 10, ratingAvg: 7.75, title: "Philip Kaufman" },
    {moviesCount: 10, ratingAvg: 8, title: "Billy Bob Thornton" },
    {moviesCount: 10, ratingAvg: 8, title: "Alan J. Pakula" },
    {moviesCount: 10, ratingAvg: 7.8, title: "James Whale" },
    {moviesCount: 10, ratingAvg: 8.1, title: "Kar-Wai Wong" },
    {moviesCount: 10, ratingAvg: 8.03, title: "James Mangold" },
    {moviesCount: 10, ratingAvg: 8, title: "Andrew Lau" },
    {moviesCount: 10, ratingAvg: 8.5, title: "Olivier Nakache" },
    {moviesCount: 9, ratingAvg: 7.63, title: "James Ivory" },
    {moviesCount: 9, ratingAvg: 7.99, title: "Yimou Zhang" },
    {moviesCount: 9, ratingAvg: 7.7, title: "Spike Jonze" },
    {moviesCount: 9, ratingAvg: 7.7, title: "Tom Tykwer" },
    {moviesCount: 9, ratingAvg: 7.9, title: "Pedro AlmodÃ³var" },
    {moviesCount: 9, ratingAvg: 7.9, title: "Norman Jewison" },
    {moviesCount: 9, ratingAvg: 8, title: "Robert Hamer" },
    {moviesCount: 9, ratingAvg: 8.4, title: "Aamir Khan" },
    {moviesCount: 8, ratingAvg: 8, title: "Claude Berri" },
    {moviesCount: 8, ratingAvg: 7.7, title: "James Algar" },
    {moviesCount: 8, ratingAvg: 7.75, title: "Cameron Crowe" },
    {moviesCount: 8, ratingAvg: 8, title: "Sergei M. Eisenstein" },
    {moviesCount: 8, ratingAvg: 8.3, title: "Elem Klimov" },
    {moviesCount: 8, ratingAvg: 8, title: "Martin McDonagh" },
    {moviesCount: 8, ratingAvg: 8, title: "Tate Taylor" },
    {moviesCount: 8, ratingAvg: 8.1, title: "Steve McQueen" },
    {moviesCount: 8, ratingAvg: 8.1, title: "Wes Anderson" },
    {moviesCount: 8, ratingAvg: 8.44, title: "Damien Chazelle" },
    {moviesCount: 7, ratingAvg: 7.94, title: "Mike Leigh" },
    {moviesCount: 7, ratingAvg: 7.44, title: "Atom Egoyan" },
    {moviesCount: 7, ratingAvg: 7.8, title: "Roland JoffÃ©" },
    {moviesCount: 7, ratingAvg: 7.6, title: "William Cottrell" },
    {moviesCount: 7, ratingAvg: 7.8, title: "John Schlesinger" },
    {moviesCount: 7, ratingAvg: 8.1, title: "Jean Renoir" },
    {moviesCount: 7, ratingAvg: 7.9, title: "Sam Wood" },
    {moviesCount: 7, ratingAvg: 7.8, title: "Alfonso CuarÃ³n" },
    {moviesCount: 7, ratingAvg: 8.03, title: "Tom McCarthy" },
    {moviesCount: 7, ratingAvg: 7.87, title: "J.J. Abrams" },
    {moviesCount: 7, ratingAvg: 8.2, title: "YasujirÃ´ Ozu" },
    {moviesCount: 7, ratingAvg: 8.1, title: "Rakeysh Omprakash Mehra" },
    {moviesCount: 7, ratingAvg: 8.1, title: "George Miller" },
    {moviesCount: 7, ratingAvg: 8.1, title: "DamiÃ¡n Szifron" },
    {moviesCount: 7, ratingAvg: 8.4, title: "Anthony Russo" },
    {moviesCount: 6, ratingAvg: 7.8, title: "Andrew Davis" },
    {moviesCount: 6, ratingAvg: 7.7, title: "John Boorman" },
    {moviesCount: 6, ratingAvg: 7.9, title: "Anthony Harvey" },
    {moviesCount: 6, ratingAvg: 7.9, title: "Andrew Adamson" },
    {moviesCount: 6, ratingAvg: 7.7, title: "Paul Haggis" },
    {moviesCount: 6, ratingAvg: 8, title: "Julian Schnabel" },
    {moviesCount: 6, ratingAvg: 8.2, title: "Buster Keaton" },
    {moviesCount: 6, ratingAvg: 8, title: "Wilson Yip" },
    {moviesCount: 6, ratingAvg: 8.2, title: "Cagan Irmak" },
    {moviesCount: 6, ratingAvg: 8.3, title: "Majid Majidi" },
    {moviesCount: 6, ratingAvg: 8.1, title: "Lenny Abrahamson" },
    {moviesCount: 6, ratingAvg: 8.2, title: "Yavuz Turgul" },
    {moviesCount: 5, ratingAvg: 7.56, title: "Marc Caro" },
    {moviesCount: 5, ratingAvg: 7.5, title: "Tim Robbins" },
    {moviesCount: 5, ratingAvg: 8.1, title: "Emir Kusturica" },
    {moviesCount: 5, ratingAvg: 7.58, title: "Sam Raimi" },
    {moviesCount: 5, ratingAvg: 7.92, title: "Lars von Trier" },
    {moviesCount: 5, ratingAvg: 8, title: "W.S. Van Dyke" },
    {moviesCount: 5, ratingAvg: 8.2, title: "Ernst Lubitsch" },
    {moviesCount: 5, ratingAvg: 8.6, title: "Masaki Kobayashi" },
    {moviesCount: 5, ratingAvg: 7.9, title: "Tomas Alfredson" },
    {moviesCount: 5, ratingAvg: 8, title: "Tom Hooper" },
    {moviesCount: 5, ratingAvg: 8.2, title: "Anurag Kashyap" },
    {moviesCount: 5, ratingAvg: 8.4, title: "Nitesh Tiwari" },
    {moviesCount: 5, ratingAvg: 8.4, title: "Makoto Shinkai" },
    {moviesCount: 4, ratingAvg: 7.28, title: "Baz Luhrmann" },
    {moviesCount: 4, ratingAvg: 7.8, title: "John Landis" },
    {moviesCount: 4, ratingAvg: 7.68, title: "Jim Jarmusch" },
    {moviesCount: 4, ratingAvg: 8, title: "Katsuhiro Ã”tomo" },
    {moviesCount: 4, ratingAvg: 8, title: "Ron Clements" },
    {moviesCount: 4, ratingAvg: 7.7, title: "Nicholas Ray" },
    {moviesCount: 4, ratingAvg: 7.5, title: "Charles Crichton" },
    {moviesCount: 4, ratingAvg: 7.55, title: "Stephen Frears" },
    {moviesCount: 4, ratingAvg: 7.7, title: "James L. Brooks" },
    {moviesCount: 4, ratingAvg: 7.45, title: "Steven Soderbergh" },
    {moviesCount: 4, ratingAvg: 8, title: "Walter Salles" },
    {moviesCount: 4, ratingAvg: 7.7, title: "Alejandro AmenÃ¡bar" },
    {moviesCount: 4, ratingAvg: 7.9, title: "Jean Cocteau" },
    {moviesCount: 4, ratingAvg: 7.8, title: "Jonathan Dayton" },
    {moviesCount: 4, ratingAvg: 7.9, title: "Neill Blomkamp" },
    {moviesCount: 4, ratingAvg: 8, title: "Joss Whedon" },
    {moviesCount: 4, ratingAvg: 8.13, title: "Ashutosh Gowariker" },
    {moviesCount: 4, ratingAvg: 8, title: "James Gunn" },
    {moviesCount: 4, ratingAvg: 8.2, title: "Nishikant Kamat" },
    {moviesCount: 4, ratingAvg: 8.4, title: "Bob Persichetti" },
    {moviesCount: 3, ratingAvg: 7.4, title: "John Sayles" },
    {moviesCount: 3, ratingAvg: 7.7, title: "Michael Radford" },
    {moviesCount: 3, ratingAvg: 7.9, title: "Lee Tamahori" },
    {moviesCount: 3, ratingAvg: 7.4, title: "Wayne Wang" },
    {moviesCount: 3, ratingAvg: 7.6, title: "Blake Edwards" },
    {moviesCount: 3, ratingAvg: 7.9, title: "Tony Scott" },
    {moviesCount: 3, ratingAvg: 7.5, title: "Jean-Paul Rappeneau" },
    {moviesCount: 3, ratingAvg: 7.7, title: "Jon Avnet" },
    {moviesCount: 3, ratingAvg: 7.5, title: "Phil Alden Robinson" },
    {moviesCount: 3, ratingAvg: 7.2, title: "Doug Liman" },
    {moviesCount: 3, ratingAvg: 7.5, title: "Jerome Robbins" },
    {moviesCount: 3, ratingAvg: 7.7, title: "Guy Hamilton" },
    {moviesCount: 3, ratingAvg: 7.1, title: "John Madden" },
    {moviesCount: 3, ratingAvg: 7.8, title: "Joe Johnston" },
    {moviesCount: 3, ratingAvg: 7.7, title: "Sofia Coppola" },
    {moviesCount: 3, ratingAvg: 7.6, title: "Marc Forster" },
    {moviesCount: 3, ratingAvg: 8.1, title: "Robert Wiene" },
    {moviesCount: 3, ratingAvg: 8.1, title: "Jules Dassin" },
    {moviesCount: 3, ratingAvg: 8, title: "William A. Wellman" },
    {moviesCount: 3, ratingAvg: 8, title: "Kim Ki-duk" },
    {moviesCount: 3, ratingAvg: 8.4, title: "Todd Phillips" },
    {moviesCount: 3, ratingAvg: 8.4, title: "Nadine Labaki" },
    {moviesCount: 3, ratingAvg: 8.2, title: "Peter Farrelly" },
    {moviesCount: 3, ratingAvg: 8.2, title: "Sriram Raghavan" },
    {moviesCount: 3, ratingAvg: 8.2, title: "Sergio Pablos" },
    {moviesCount: 2, ratingAvg: 7.4, title: "Anthony Minghella" },
    {moviesCount: 2, ratingAvg: 7.4, title: "Michael Bay" },
    {moviesCount: 2, ratingAvg: 6.8, title: "Chris Noonan" },
    {moviesCount: 2, ratingAvg: 7.5, title: "Joel Schumacher" },
    {moviesCount: 2, ratingAvg: 6.95, title: "Allan Moyle" },
    {moviesCount: 2, ratingAvg: 7.8, title: "George P. Cosmatos" },
    {moviesCount: 2, ratingAvg: 7.4, title: "Bill Forsyth" },
    {moviesCount: 2, ratingAvg: 6.55, title: "Jon Turteltaub" },
    {moviesCount: 2, ratingAvg: 7.4, title: "Tom Stoppard" },
    {moviesCount: 2, ratingAvg: 7.2, title: "Savage Steve Holland" },
    {moviesCount: 2, ratingAvg: 7.3, title: "Campbell Scott" },
    {moviesCount: 2, ratingAvg: 7.2, title: "Jean-Jacques Beineix" },
    {moviesCount: 2, ratingAvg: 8.3, title: "Godfrey Reggio" },
    {moviesCount: 2, ratingAvg: 7.1, title: "Russell Mulcahy" },
    {moviesCount: 2, ratingAvg: 7.5, title: "Mike Figgis" },
    {moviesCount: 2, ratingAvg: 7.2, title: "Michael Lehmann" },
    {moviesCount: 2, ratingAvg: 7.6, title: "Fred M. Wilcox" },
    {moviesCount: 2, ratingAvg: 7.8, title: "John Hughes" },
    {moviesCount: 2, ratingAvg: 7.2, title: "Peter Cattaneo" },
    {moviesCount: 2, ratingAvg: 7.3, title: "George Armitage" },
    {moviesCount: 2, ratingAvg: 7.4, title: "Steven Zaillian" },
    {moviesCount: 2, ratingAvg: 7.7, title: "Jim Abrahams" },
    {moviesCount: 2, ratingAvg: 7.8, title: "Robert Stevenson" },
    {moviesCount: 2, ratingAvg: 7.7, title: "Mike Newell" },
    {moviesCount: 2, ratingAvg: 7.8, title: "Penny Marshall" },
    {moviesCount: 2, ratingAvg: 7.7, title: "Jean-Jacques Annaud" },
    {moviesCount: 2, ratingAvg: 7.8, title: "Bob Fosse" },
    {moviesCount: 2, ratingAvg: 8.4, title: "Chuck Jones" },
    {moviesCount: 2, ratingAvg: 7.1, title: "David O. Russell" },
    {moviesCount: 2, ratingAvg: 8.4, title: "Marcel CarnÃ©" },
    {moviesCount: 2, ratingAvg: 8.1, title: "Brian Desmond Hurst" },
    {moviesCount: 2, ratingAvg: 7.4, title: "Bill Condon" },
    {moviesCount: 2, ratingAvg: 7.35, title: "Alexander Payne" },
    {moviesCount: 2, ratingAvg: 7.7, title: "Trey Parker" },
    {moviesCount: 2, ratingAvg: 8, title: "Louis Malle" },
    {moviesCount: 2, ratingAvg: 7.5, title: "Kimberly Peirce" },
    {moviesCount: 2, ratingAvg: 7, title: "Peter Lord" },
    {moviesCount: 2, ratingAvg: 7.7, title: "Stephen Daldry" },
    {moviesCount: 2, ratingAvg: 7.5, title: "Lukas Moodysson" },
    {moviesCount: 2, ratingAvg: 7.5, title: "Kenneth Lonergan" },
    {moviesCount: 2, ratingAvg: 7.3, title: "Terry Zwigoff" },
    {moviesCount: 2, ratingAvg: 7.5, title: "Niki Caro" },
    {moviesCount: 2, ratingAvg: 7.4, title: "Zach Braff" },
    {moviesCount: 2, ratingAvg: 8, title: "Jacques Tourneur" },
    {moviesCount: 2, ratingAvg: 7.85, title: "Edgar Wright" },
    {moviesCount: 2, ratingAvg: 8, title: "JosÃ© Padilha" },
    {moviesCount: 2, ratingAvg: 8, title: "Morten Tyldum" },
    {moviesCount: 2, ratingAvg: 8.1, title: "Neeraj Pandey" },
    {moviesCount: 2, ratingAvg: 8.1, title: "Peter Bogdanovich" },
    {moviesCount: 2, ratingAvg: 8.2, title: "Zaza Urushadze" },
    {moviesCount: 2, ratingAvg: 8.4, title: "Thomas Kail" },
    {moviesCount: 1, ratingAvg: 7.6, title: "Jonathan Frakes" },
    {moviesCount: 1, ratingAvg: 7.6, title: "Hettie Macdonald" },
    {moviesCount: 1, ratingAvg: 6.9, title: "Lou Adler" },
    {moviesCount: 1, ratingAvg: 6.9, title: "Tom Hanks" },
    {moviesCount: 1, ratingAvg: 7.6, title: "Bruce Robinson" },
    {moviesCount: 1, ratingAvg: 7.3, title: "Nelson Shin" },
    {moviesCount: 1, ratingAvg: 7.3, title: "Jim Mallon" },
    {moviesCount: 1, ratingAvg: 6.5, title: "Richard Compton" },
    {moviesCount: 1, ratingAvg: 6.8, title: "Stanley Tong" },
    {moviesCount: 1, ratingAvg: 6.7, title: "Douglas McGrath" },
    {moviesCount: 1, ratingAvg: 6.8, title: "Lesli Linka Glatter" },
    {moviesCount: 1, ratingAvg: 7.4, title: "Hal Hartley" },
    {moviesCount: 1, ratingAvg: 7.3, title: "Stephen Herek" },
    {moviesCount: 1, ratingAvg: 7.6, title: "Alex Proyas" },
    {moviesCount: 1, ratingAvg: 6.1, title: "Tommy Chong" },
    {moviesCount: 1, ratingAvg: 5.5, title: "Peter Hewitt" },
    {moviesCount: 1, ratingAvg: 7.5, title: "RÃ©my Belvaux" },
    {moviesCount: 1, ratingAvg: 6.8, title: "Stephen Hopkins" },
    {moviesCount: 1, ratingAvg: 7.2, title: "Jeannot Szwarc" },
    {moviesCount: 1, ratingAvg: 6.7, title: "Rick Moranis" },
    {moviesCount: 1, ratingAvg: 6.8, title: "Renny Harlin" },
    {moviesCount: 1, ratingAvg: 7.9, title: "George A. Romero" },
    {moviesCount: 1, ratingAvg: 8, title: "Alan Parker" },
    {moviesCount: 1, ratingAvg: 7.3, title: "Gillian Armstrong" },
    {moviesCount: 1, ratingAvg: 7.8, title: "Mel Stuart" },
    {moviesCount: 1, ratingAvg: 7.1, title: "Howard Deutch" },
    {moviesCount: 1, ratingAvg: 7.5, title: "Stephan Elliott" },
    {moviesCount: 1, ratingAvg: 7, title: "Roland Emmerich" },
    {moviesCount: 1, ratingAvg: 7.2, title: "Kathryn Bigelow" },
    {moviesCount: 1, ratingAvg: 8.1, title: "Kaige Chen" },
    {moviesCount: 1, ratingAvg: 7, title: "Martha Coolidge" },
    {moviesCount: 1, ratingAvg: 7.1, title: "Antonia Bird" },
    {moviesCount: 1, ratingAvg: 7.4, title: "Jim Sharman" },
    {moviesCount: 1, ratingAvg: 6.9, title: "Amy Heckerling" },
    {moviesCount: 1, ratingAvg: 7.2, title: "Robert Redford" },
    {moviesCount: 1, ratingAvg: 7.7, title: "Scott Hicks" },
    {moviesCount: 1, ratingAvg: 7.3, title: "Wes Craven" },
    {moviesCount: 1, ratingAvg: 7.3, title: "Barry Sonnenfeld" },
    {moviesCount: 1, ratingAvg: 8, title: "Kevin Costner" },
    {moviesCount: 1, ratingAvg: 7.1, title: "Bobby Farrelly" },
    {moviesCount: 1, ratingAvg: 7.5, title: "Gary Ross" },
    {moviesCount: 1, ratingAvg: 7.2, title: "David Mamet" },
    {moviesCount: 1, ratingAvg: 6.5, title: "Eric Darnell" },
    {moviesCount: 1, ratingAvg: 7.8, title: "John Singleton" },
    {moviesCount: 1, ratingAvg: 7.9, title: "Cecil B. DeMille" },
    {moviesCount: 1, ratingAvg: 7.6, title: "Wolfgang Reitherman" },
    {moviesCount: 1, ratingAvg: 7.8, title: "Andrew Niccol" },
    {moviesCount: 1, ratingAvg: 7.5, title: "Martin Brest" },
    {moviesCount: 1, ratingAvg: 7.7, title: "Bernardo Bertolucci" },
    {moviesCount: 1, ratingAvg: 7.6, title: "FranÃ§ois Girard" },
    {moviesCount: 1, ratingAvg: 7.7, title: "Todd Solondz" },
    {moviesCount: 1, ratingAvg: 7.4, title: "Shekhar Kapur" },
    {moviesCount: 1, ratingAvg: 7.7, title: "Luis BuÃ±uel" },
    {moviesCount: 1, ratingAvg: 7.7, title: "Edward Dmytryk" },
    {moviesCount: 1, ratingAvg: 8.4, title: "Bill Melendez" },
    {moviesCount: 1, ratingAvg: 7.9, title: "Preston Sturges" },
    {moviesCount: 1, ratingAvg: 7.4, title: "Steve Box" },
    {moviesCount: 1, ratingAvg: 7.9, title: "Richard Brooks" },
    {moviesCount: 1, ratingAvg: 7.4, title: "Jason Reitman" },
    {moviesCount: 1, ratingAvg: 7.5, title: "Robert Rodriguez" },
    {moviesCount: 1, ratingAvg: 7.9, title: "Werner Herzog" },
    {moviesCount: 1, ratingAvg: 7.8, title: "Joe Wright" },
    {moviesCount: 1, ratingAvg: 8.1, title: "Jean-Pierre Melville" },
    {moviesCount: 1, ratingAvg: 8, title: "Alexander Mackendrick" },
    {moviesCount: 1, ratingAvg: 8.1, title: "Fred C. Newmeyer" },
    {moviesCount: 1, ratingAvg: 7.6, title: "Marc Webb" },
    {moviesCount: 1, ratingAvg: 8, title: "Henry Selick" },
    {moviesCount: 1, ratingAvg: 8, title: "Martin Campbell" },
    {moviesCount: 1, ratingAvg: 7.6, title: "Matthew Vaughn" },
    {moviesCount: 1, ratingAvg: 7.8, title: "Nicolas Winding Refn" },
    {moviesCount: 1, ratingAvg: 7.9, title: "Michel Hazanavicius" },
    {moviesCount: 1, ratingAvg: 7.7, title: "Ben Affleck" },
    {moviesCount: 1, ratingAvg: 7.9, title: "Stephen Chbosky" },
    {moviesCount: 1, ratingAvg: 8.1, title: "YÃ´jirÃ´ Takita" },
    {moviesCount: 1, ratingAvg: 8.1, title: "Farhan Akhtar" },
    {moviesCount: 1, ratingAvg: 7.6, title: "Ryan Coogler" },
    {moviesCount: 1, ratingAvg: 8.1, title: "Rajkumar Santoshi" },
    {moviesCount: 1, ratingAvg: 8.2, title: "Priyadarshan" },
    {moviesCount: 1, ratingAvg: 8.2, title: "Ramesh Sippy" },
    {moviesCount: 1, ratingAvg: 7.8, title: "Gareth Edwards" },
    {moviesCount: 1, ratingAvg: 8.2, title: "Moustapha Akkad" },
    {moviesCount: 1, ratingAvg: 8.2, title: "Vikramaditya Motwane" },
    {moviesCount: 1, ratingAvg: 8, title: "Byron Howard" },
    {moviesCount: 1, ratingAvg: 8.2, title: "Shimit Amin" },
    {moviesCount: 1, ratingAvg: 7.9, title: "Taika Waititi" },
    {moviesCount: 1, ratingAvg: 8.1, title: "Sujoy Ghosh" },
    {moviesCount: 1, ratingAvg: 7.9, title: "Noah Baumbach" },
    {moviesCount: 1, ratingAvg: 8.1, title: "Michael Powell" },
    {moviesCount: 1, ratingAvg: 8.1, title: "Raoul Walsh" },
    {moviesCount: 1, ratingAvg: 8.3, title: "Jeethu Joseph" },
    {moviesCount: 1, ratingAvg: 8.2, title: "Hrishikesh Mukherjee" },
    {moviesCount: 1, ratingAvg: 8.3, title: "Gayatri" },
    {moviesCount: 1, ratingAvg: 8.1, title: "CÃ©line Sciamma" },
    {moviesCount: 1, ratingAvg: 8.1, title: "Oriol Paulo" },
    {moviesCount: 1, ratingAvg: 8.1, title: "Nuri Bilge Ceylan" },
    {moviesCount: 1, ratingAvg: 8.7, title: "Jon Watts" },
    {moviesCount: 1, ratingAvg: 8.3, title: "Florian Zeller" },
    {moviesCount: 1, ratingAvg: 8.4, title: "Satyajit Ray" },
    {moviesCount: 1, ratingAvg: 9.3, title: "T.J. Gnanavel" },
    {moviesCount: 1, ratingAvg: 8.2, title: "Costa-Gavras" },
    {moviesCount: 1, ratingAvg: 8.2, title: "Naoko Yamada" },
    {moviesCount: 1, ratingAvg: 8.1, title: "Hideaki Anno" },
    {moviesCount: 1, ratingAvg: 8.4, title: "Ram Kumar" },
    {moviesCount: 1, ratingAvg: 8.7, title: "Shoojit Sircar" },
];

const ratingMoviesByYearData = [
  { year: 1925, rating: 8.2, label: "The Gold Rush" },
  { year: 1925, rating: 8.2, label: "The Gold Rush" },
  { year: 1927, rating: 8.3, label: "Metropolis" },
  { year: 1927, rating: 8.3, label: "Metropolis" },
  { year: 1931, rating: 8.3, label: "M" },
  { year: 1931, rating: 8.5, label: "City Lights" },
  { year: 1933, rating: 7.8, label: "Duck Soup" },
  { year: 1933, rating: 7.8, label: "Duck Soup" },
  { year: 1936, rating: 8.5, label: "Modern Times" },
  { year: 1936, rating: 8.5, label: "Modern Times" },
  { year: 1937, rating: 7.6, label: "Snow White and the Seven Dwarfs" },
  { year: 1938, rating: 7.9, label: "Bringing Up Baby" },
  { year: 1939, rating: 8.1, label: "Gone with the Wind" },
  { year: 1939, rating: 8.1, label: "Mr. Smith Goes to Washington" },
  { year: 1939, rating: 8.0, label: "The Wizard of Oz" },
  { year: 1939, rating: 8.1, label: "Gone with the Wind" },
  { year: 1939, rating: 8.0, label: "The Wizard of Oz" },
  { year: 1940, rating: 8.4, label: "The Great Dictator" },
  { year: 1940, rating: 8.1, label: "Rebecca" },
  { year: 1940, rating: 7.9, label: "The Philadelphia Story" },
  { year: 1940, rating: 8.4, label: "The Great Dictator" },
  { year: 1940, rating: 7.7, label: "Fantasia" },
  { year: 1940, rating: 7.9, label: "The Philadelphia Story" },
  { year: 1940, rating: 7.7, label: "Fantasia" },
  { year: 1941, rating: 8.3, label: "Citizen Kane" },
  { year: 1941, rating: 8.0, label: "The Maltese Falcon" },
  { year: 1941, rating: 8.3, label: "Citizen Kane" },
  { year: 1941, rating: 8.0, label: "The Maltese Falcon" },
  { year: 1942, rating: 8.5, label: "Casablanca" },
  { year: 1942, rating: 8.5, label: "Casablanca" },
  { year: 1943, rating: 8.0, label: "Arsenic and Old Lace" },
  { year: 1943, rating: 8.0, label: "Arsenic and Old Lace" },
  { year: 1944, rating: 8.3, label: "Double Indemnity" },
  { year: 1946, rating: 7.9, label: "The Big Sleep" },
  { year: 1946, rating: 8.6, label: "It's a Wonderful Life" },
  { year: 1946, rating: 7.9, label: "The Big Sleep" },
  { year: 1946, rating: 8.0, label: "Notorious" },
  { year: 1946, rating: 8.6, label: "It's a Wonderful Life" },
  { year: 1948, rating: 8.2, label: "The Treasure of the Sierra Madre" },
  { year: 1948, rating: 8.2, label: "The Treasure of the Sierra Madre" },
  { year: 1949, rating: 8.1, label: "The Third Man" },
  { year: 1949, rating: 8.1, label: "The Third Man" },
  { year: 1950, rating: 8.4, label: "Sunset Blvd." },
  { year: 1950, rating: 8.2, label: "Rashomon" },
  { year: 1950, rating: 8.2, label: "All About Eve" },
  { year: 1950, rating: 8.2, label: "Rashomon" },
  { year: 1951, rating: 7.8, label: "The African Queen" },
  { year: 1951, rating: 7.7, label: "The Day the Earth Stood Still" },
  { year: 1951, rating: 7.7, label: "The Day the Earth Stood Still" },
  { year: 1951, rating: 7.8, label: "The African Queen" },
  { year: 1952, rating: 7.8, label: "The Quiet Man" },
  { year: 1952, rating: 8.0, label: "High Noon" },
  { year: 1952, rating: 8.0, label: "High Noon" },
  { year: 1952, rating: 7.8, label: "The Quiet Man" },
  { year: 1952, rating: 8.3, label: "Singin' in the Rain" },
  { year: 1952, rating: 8.3, label: "Singin' in the Rain" },
  { year: 1953, rating: 8.0, label: "Roman Holiday" },
  { year: 1953, rating: 8.0, label: "Roman Holiday" },
  { year: 1954, rating: 7.6, label: "Sabrina" },
  { year: 1954, rating: 8.5, label: "Rear Window" },
  { year: 1954, rating: 8.6, label: "Seven Samurai" },
  { year: 1954, rating: 8.2, label: "Dial M for Murder" },
  { year: 1954, rating: 8.1, label: "On the Waterfront" },
  { year: 1954, rating: 8.6, label: "Seven Samurai" },
  { year: 1954, rating: 8.1, label: "On the Waterfront" },
  { year: 1954, rating: 8.5, label: "Rear Window" },
  { year: 1955, rating: 7.7, label: "Rebel Without a Cause" },
  { year: 1956, rating: 7.9, label: "The Searchers" },
  { year: 1956, rating: 7.6, label: "Forbidden Planet" },
  { year: 1956, rating: 7.6, label: "Forbidden Planet" },
  { year: 1957, rating: 8.2, label: "The Seventh Seal" },
  { year: 1957, rating: 9.0, label: "12 Angry Men" },
  { year: 1957, rating: 8.2, label: "The Seventh Seal" },
  { year: 1957, rating: 8.1, label: "The Bridge on the River Kwai" },
  { year: 1957, rating: 8.1, label: "The Bridge on the River Kwai" },
  { year: 1957, rating: 8.4, label: "Paths of Glory" },
  { year: 1957, rating: 9.0, label: "12 Angry Men" },
  { year: 1958, rating: 8.0, label: "Touch of Evil" },
  { year: 1958, rating: 8.3, label: "Vertigo" },
  { year: 1958, rating: 8.0, label: "Touch of Evil" },
  { year: 1958, rating: 8.3, label: "Vertigo" },
  { year: 1959, rating: 8.2, label: "Some Like It Hot" },
  { year: 1959, rating: 8.1, label: "Ben-Hur" },
  { year: 1959, rating: 8.3, label: "North by Northwest" },
  { year: 1959, rating: 8.2, label: "Some Like It Hot" },
  { year: 1959, rating: 8.3, label: "North by Northwest" },
  { year: 1959, rating: 8.1, label: "Ben-Hur" },
  { year: 1960, rating: 7.9, label: "Spartacus" },
  { year: 1960, rating: 8.5, label: "Psycho" },
  { year: 1960, rating: 8.5, label: "Psycho" },
  { year: 1961, rating: 7.6, label: "Breakfast at Tiffany's" },
  { year: 1961, rating: 7.6, label: "Breakfast at Tiffany's" },
  { year: 1961, rating: 7.5, label: "West Side Story" },
  { year: 1962, rating: 7.9, label: "The Manchurian Candidate" },
  { year: 1962, rating: 8.3, label: "Lawrence of Arabia" },
  { year: 1962, rating: 8.2, label: "To Kill a Mockingbird" },
  { year: 1962, rating: 7.9, label: "The Manchurian Candidate" },
  { year: 1962, rating: 8.3, label: "Lawrence of Arabia" },
  { year: 1962, rating: 8.2, label: "To Kill a Mockingbird" },
  { year: 1963, rating: 7.7, label: "The Birds" },
  { year: 1963, rating: 8.0, label: "8½" },
  { year: 1963, rating: 7.9, label: "Charade" },
  { year: 1963, rating: 8.0, label: "8½" },
  { year: 1963, rating: 8.2, label: "The Great Escape" },
  { year: 1963, rating: 8.2, label: "The Great Escape" },
  { year: 1964, rating: 7.7, label: "Goldfinger" },
  { year: 1964, rating: 7.8, label: "My Fair Lady" },
  { year: 1964, rating: 8.4, label: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb" },
  { year: 1964, rating: 8.4, label: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb" },
  { year: 1964, rating: 7.8, label: "My Fair Lady" },
  { year: 1964, rating: 7.8, label: "Mary Poppins" },
  { year: 1965, rating: 8.0, label: "Doctor Zhivago" },
  { year: 1965, rating: 8.0, label: "The Sound of Music" },
  { year: 1965, rating: 8.0, label: "The Sound of Music" },
  { year: 1966, rating: 8.8, label: "The Good, the Bad and the Ugly" },
  { year: 1966, rating: 8.8, label: "The Good, the Bad and the Ugly" },
  { year: 1967, rating: 8.1, label: "Cool Hand Luke" },
  { year: 1967, rating: 8.1, label: "Cool Hand Luke" },
  { year: 1967, rating: 8.0, label: "The Graduate" },
  { year: 1967, rating: 7.6, label: "The Producers" },
  { year: 1967, rating: 8.0, label: "The Graduate" },
  { year: 1968, rating: 8.3, label: "2001: A Space Odyssey" },
  { year: 1968, rating: 8.5, label: "Once Upon a Time in the West" },
  { year: 1968, rating: 8.3, label: "2001: A Space Odyssey" },
  { year: 1968, rating: 8.5, label: "Once Upon a Time in the West" },
  { year: 1969, rating: 8.0, label: "Butch Cassidy and the Sundance Kid" },
  { year: 1969, rating: 7.9, label: "The Wild Bunch" },
  { year: 1969, rating: 7.9, label: "The Wild Bunch" },
  { year: 1970, rating: 7.9, label: "Patton" },
  { year: 1970, rating: 7.6, label: "Little Big Man" },
  { year: 1970, rating: 7.9, label: "Patton" },
  { year: 1970, rating: 7.4, label: "MASH" },
  { year: 1971, rating: 8.3, label: "A Clockwork Orange" },
  { year: 1971, rating: 7.8, label: "Willy Wonka & the Chocolate Factory" },
  { year: 1971, rating: 7.9, label: "Harold and Maude" },
  { year: 1971, rating: 8.3, label: "A Clockwork Orange" },
  { year: 1971, rating: 7.9, label: "Harold and Maude" },
  { year: 1972, rating: 9.2, label: "The Godfather" },
  { year: 1972, rating: 9.2, label: "The Godfather" },
  { year: 1972, rating: 7.8, label: "Cabaret" },
  { year: 1972, rating: 7.7, label: "Deliverance" },
  { year: 1973, rating: 8.3, label: "The Sting" },
  { year: 1973, rating: 8.0, label: "Papillon" },
  { year: 1973, rating: 8.3, label: "The Sting" },
  { year: 1974, rating: 8.0, label: "Young Frankenstein" },
  { year: 1974, rating: 7.8, label: "The Conversation" },
  { year: 1974, rating: 8.2, label: "Chinatown" },
  { year: 1974, rating: 8.2, label: "Chinatown" },
  { year: 1974, rating: 8.0, label: "Young Frankenstein" },
  { year: 1974, rating: 9.0, label: "The Godfather: Part II" },
  { year: 1974, rating: 9.0, label: "The Godfather: Part II" },
  { year: 1975, rating: 7.8, label: "The Man Who Would Be King" },
  { year: 1975, rating: 8.0, label: "Jaws" },
  { year: 1975, rating: 8.2, label: "Monty Python and the Holy Grail" },
  { year: 1975, rating: 7.4, label: "The Rocky Horror Picture Show" },
  { year: 1975, rating: 8.0, label: "Dog Day Afternoon" },
  { year: 1975, rating: 8.7, label: "One Flew Over the Cuckoo's Nest" },
  { year: 1975, rating: 7.8, label: "The Man Who Would Be King" },
  { year: 1975, rating: 8.2, label: "Monty Python and the Holy Grail" },
  { year: 1975, rating: 8.7, label: "One Flew Over the Cuckoo's Nest" },
  { year: 1976, rating: 8.2, label: "Taxi Driver" },
  { year: 1976, rating: 8.0, label: "All the President's Men" },
  { year: 1976, rating: 8.2, label: "Taxi Driver" },
  { year: 1977, rating: 8.6, label: "Star Wars: Episode IV - A New Hope" },
  { year: 1977, rating: 8.0, label: "Annie Hall" },
  { year: 1977, rating: 8.0, label: "Annie Hall" },
  { year: 1977, rating: 8.6, label: "Star Wars: Episode IV - A New Hope" },
  { year: 1978, rating: 8.1, label: "The Deer Hunter" },
  { year: 1978, rating: 8.1, label: "The Deer Hunter" },
  { year: 1978, rating: 6.9, label: "Up in Smoke" },
  { year: 1978, rating: 7.5, label: "National Lampoon's Animal House" },
  { year: 1978, rating: 7.9, label: "Dawn of the Dead" },
  { year: 1979, rating: 7.9, label: "Manhattan" },
  { year: 1979, rating: 8.1, label: "Life of Brian" },
  { year: 1979, rating: 8.0, label: "Being There" },
  { year: 1979, rating: 8.4, label: "Apocalypse Now" },
  { year: 1979, rating: 8.1, label: "Stalker" },
  { year: 1979, rating: 7.9, label: "Manhattan" },
  { year: 1979, rating: 8.4, label: "Apocalypse Now" },
  { year: 1979, rating: 8.0, label: "Being There" },
  { year: 1979, rating: 8.1, label: "Life of Brian" },
  { year: 1979, rating: 8.4, label: "Alien" },
  { year: 1979, rating: 8.4, label: "Alien" },
  { year: 1980, rating: 8.4, label: "The Shining" },
  { year: 1980, rating: 8.7, label: "Star Wars: Episode V - The Empire Strikes Back" },
  { year: 1980, rating: 7.9, label: "The Blues Brothers" },
  { year: 1980, rating: 8.2, label: "Raging Bull" },
  { year: 1980, rating: 8.4, label: "The Shining" },
  { year: 1980, rating: 7.2, label: "Somewhere in Time" },
  { year: 1980, rating: 8.2, label: "Raging Bull" },
  { year: 1980, rating: 6.1, label: "Cheech and Chong's Next Movie" },
  { year: 1980, rating: 7.7, label: "Airplane!" },
  { year: 1980, rating: 8.1, label: "The Elephant Man" },
  { year: 1980, rating: 7.9, label: "The Blues Brothers" },
  { year: 1980, rating: 8.7, label: "Star Wars: Episode V - The Empire Strikes Back" },
  { year: 1981, rating: 7.2, label: "Diva" },
  { year: 1981, rating: 7.4, label: "Gallipoli" },
  { year: 1981, rating: 8.4, label: "Indiana Jones and the Raiders of the Lost Ark" },
  { year: 1981, rating: 8.3, label: "Das Boot" },
  { year: 1981, rating: 8.3, label: "Das Boot" },
  { year: 1981, rating: 8.4, label: "Indiana Jones and the Raiders of the Lost Ark" },
  { year: 1981, rating: 7.2, label: "Diva" },
  { year: 1982, rating: 8.3, label: "Koyaanisqatsi" },
  { year: 1982, rating: 8.1, label: "Blade Runner" },
  { year: 1982, rating: 8.3, label: "Koyaanisqatsi" },
  { year: 1982, rating: 8.0, label: "Gandhi" },
  { year: 1982, rating: 8.1, label: "Blade Runner" },
  { year: 1982, rating: 8.0, label: "Gandhi" },
  { year: 1982, rating: 8.0, label: "Pink Floyd: The Wall" },
  { year: 1983, rating: 7.4, label: "Local Hero" },
  { year: 1983, rating: 8.3, label: "Star Wars: Episode VI - Return of the Jedi" },
  { year: 1983, rating: 7.8, label: "The Right Stuff" },
  { year: 1983, rating: 7.9, label: "A Christmas Story" },
  { year: 1983, rating: 7.8, label: "The Right Stuff" },
  { year: 1983, rating: 8.3, label: "Star Wars: Episode VI - Return of the Jedi" },
  { year: 1983, rating: 7.9, label: "A Christmas Story" },
  { year: 1983, rating: 6.7, label: "Strange Brew" },
  { year: 1983, rating: 7.4, label: "Local Hero" },
  { year: 1984, rating: 8.3, label: "Amadeus" },
  { year: 1984, rating: 8.0, label: "The Terminator" },
  { year: 1984, rating: 7.9, label: "This Is Spinal Tap" },
  { year: 1984, rating: 7.8, label: "The Killing Fields" },
  { year: 1984, rating: 7.6, label: "Blood Simple" },
  { year: 1984, rating: 8.3, label: "Amadeus" },
  { year: 1984, rating: 8.1, label: "Paris, Texas" },
  { year: 1984, rating: 8.1, label: "Paris, Texas" },
  { year: 1984, rating: 8.3, label: "Once Upon a Time in America" },
  { year: 1984, rating: 7.9, label: "This Is Spinal Tap" },
  { year: 1984, rating: 8.3, label: "Once Upon a Time in America" },
  { year: 1984, rating: 7.8, label: "The Killing Fields" },
  { year: 1984, rating: 8.0, label: "The Terminator" },
  { year: 1985, rating: 7.3, label: "A Room with a View" },
  { year: 1985, rating: 8.2, label: "Ran" },
  { year: 1985, rating: 7.8, label: "The Breakfast Club" },
  { year: 1985, rating: 7.2, label: "Better Off Dead..." },
  { year: 1985, rating: 7.3, label: "A Room with a View" },
  { year: 1985, rating: 7.6, label: "My Life as a Dog" },
  { year: 1985, rating: 7.9, label: "Brazil" },
  { year: 1985, rating: 7.0, label: "Real Genius" },
  { year: 1985, rating: 7.4, label: "Witness" },
  { year: 1985, rating: 8.5, label: "Back to the Future" },
  { year: 1985, rating: 7.2, label: "Better Off Dead..." },
  { year: 1985, rating: 8.2, label: "Ran" },
  { year: 1985, rating: 7.9, label: "Brazil" },
  { year: 1985, rating: 7.6, label: "My Life as a Dog" },
  { year: 1985, rating: 8.5, label: "Back to the Future" },
  { year: 1986, rating: 8.1, label: "Stand by Me" },
  { year: 1986, rating: 8.1, label: "Platoon" },
  { year: 1986, rating: 8.3, label: "Aliens" },
  { year: 1986, rating: 7.3, label: "The Transformers: The Movie" },
  { year: 1986, rating: 7.7, label: "The Name of the Rose" },
  { year: 1986, rating: 8.0, label: "Jean de Florette" },
  { year: 1986, rating: 8.0, label: "Jean de Florette" },
  { year: 1986, rating: 7.7, label: "Blue Velvet" },
  { year: 1986, rating: 7.7, label: "Down by Law" },
  { year: 1986, rating: 7.1, label: "Highlander" },
  { year: 1986, rating: 8.0, label: "Manon of the Spring" },
  { year: 1986, rating: 8.1, label: "Stand by Me" },
  { year: 1986, rating: 7.1, label: "Highlander" },
  { year: 1986, rating: 8.3, label: "Aliens" },
  { year: 1987, rating: 7.7, label: "Evil Dead II" },
  { year: 1987, rating: 7.9, label: "The Untouchables" },
  { year: 1987, rating: 8.1, label: "The Princess Bride" },
  { year: 1987, rating: 7.3, label: "Raising Arizona" },
  { year: 1987, rating: 8.0, label: "Wings of Desire" },
  { year: 1987, rating: 7.7, label: "Evil Dead II" },
  { year: 1987, rating: 7.6, label: "Withnail & I" },
  { year: 1987, rating: 8.1, label: "The Princess Bride" },
  { year: 1987, rating: 6.5, label: "Bad Taste" },
  { year: 1987, rating: 8.0, label: "Wings of Desire" },
  { year: 1987, rating: 8.3, label: "Full Metal Jacket" },
  { year: 1987, rating: 8.3, label: "Full Metal Jacket" },
  { year: 1987, rating: 7.1, label: "Some Kind of Wonderful" },
  { year: 1988, rating: 8.0, label: "Rain Man" },
  { year: 1988, rating: 7.3, label: "The Unbearable Lightness of Being" },
  { year: 1988, rating: 7.2, label: "Heathers" },
  { year: 1988, rating: 7.2, label: "Heathers" },
  { year: 1988, rating: 8.2, label: "Die Hard" },
  { year: 1988, rating: 7.6, label: "The Big Blue" },
  { year: 1988, rating: 7.5, label: "A Fish Called Wanda" },
  { year: 1988, rating: 7.6, label: "The Big Blue" },
  { year: 1988, rating: 7.6, label: "Dangerous Liaisons" },
  { year: 1988, rating: 8.0, label: "Akira" },
  { year: 1988, rating: 8.5, label: "Cinema Paradiso" },
  { year: 1988, rating: 8.0, label: "Akira" },
  { year: 1988, rating: 8.2, label: "Die Hard" },
  { year: 1988, rating: 8.5, label: "Cinema Paradiso" },
  { year: 1989, rating: 7.6, label: "When Harry Met Sally..." },
  { year: 1989, rating: 7.8, label: "A Grand Day Out" },
  { year: 1989, rating: 7.9, label: "Crimes and Misdemeanors" },
  { year: 1989, rating: 7.5, label: "Henry V" },
  { year: 1989, rating: 7.8, label: "Glory" },
  { year: 1989, rating: 7.5, label: "Henry V" },
  { year: 1989, rating: 8.2, label: "Indiana Jones and the Last Crusade" },
  { year: 1989, rating: 7.8, label: "A Grand Day Out" },
  { year: 1989, rating: 7.8, label: "Glory" },
  { year: 1989, rating: 7.5, label: "Field of Dreams" },
  { year: 1989, rating: 7.5, label: "Field of Dreams" },
  { year: 1989, rating: 8.1, label: "Dead Poets Society" },
  { year: 1989, rating: 8.2, label: "Indiana Jones and the Last Crusade" },
  { year: 1989, rating: 7.8, label: "The Killer" },
  { year: 1989, rating: 8.1, label: "Dead Poets Society" },
  { year: 1989, rating: 7.8, label: "The Killer" },
  { year: 1990, rating: 8.0, label: "Dances with Wolves" },
  { year: 1990, rating: 7.3, label: "Nikita" },
  { year: 1990, rating: 7.4, label: "Rosencrantz & Guildenstern Are Dead" },
  { year: 1990, rating: 7.8, label: "Awakenings" },
  { year: 1990, rating: 7.4, label: "Trust" },
  { year: 1990, rating: 7.2, label: "Pump Up the Volume" },
  { year: 1990, rating: 7.7, label: "Miller's Crossing" },
  { year: 1990, rating: 7.5, label: "Cyrano de Bergerac" },
  { year: 1990, rating: 7.4, label: "Rosencrantz & Guildenstern Are Dead" },
  { year: 1990, rating: 7.5, label: "Cyrano de Bergerac" },
  { year: 1990, rating: 8.7, label: "Goodfellas" },
  { year: 1990, rating: 8.7, label: "Goodfellas" },
  { year: 1990, rating: 7.7, label: "Miller's Crossing" },
  { year: 1990, rating: 7.6, label: "The Hunt for Red October" },
  { year: 1990, rating: 7.3, label: "Nikita" },
  { year: 1991, rating: 7.8, label: "The Double Life of Véronique" },
  { year: 1991, rating: 8.6, label: "The Silence of the Lambs" },
  { year: 1991, rating: 7.7, label: "Fried Green Tomatoes" },
  { year: 1991, rating: 8.5, label: "Terminator 2: Judgment Day" },
  { year: 1991, rating: 7.7, label: "Night on Earth" },
  { year: 1991, rating: 8.0, label: "Beauty and the Beast" },
  { year: 1991, rating: 8.5, label: "Terminator 2: Judgment Day" },
  { year: 1991, rating: 7.7, label: "Night on Earth" },
  { year: 1991, rating: 7.8, label: "The Double Life of Véronique" },
  { year: 1991, rating: 8.0, label: "Beauty and the Beast" },
  { year: 1991, rating: 7.6, label: "Delicatessen" },
  { year: 1991, rating: 8.6, label: "The Silence of the Lambs" },
  { year: 1991, rating: 7.7, label: "Fried Green Tomatoes" },
  { year: 1991, rating: 6.8, label: "Until the End of the World" },
  { year: 1991, rating: 8.1, label: "Raise the Red Lantern" },
  { year: 1991, rating: 7.6, label: "Delicatessen" },
  { year: 1992, rating: 8.2, label: "Unforgiven" },
  { year: 1992, rating: 8.0, label: "Aladdin" },
  { year: 1992, rating: 7.8, label: "Hard Boiled" },
  { year: 1992, rating: 8.3, label: "Reservoir Dogs" },
  { year: 1992, rating: 7.5, label: "Braindead" },
  { year: 1992, rating: 7.2, label: "A River Runs Through It" },
  { year: 1992, rating: 8.2, label: "Unforgiven" },
  { year: 1992, rating: 7.5, label: "Braindead" },
  { year: 1992, rating: 7.8, label: "Hard Boiled" },
  { year: 1992, rating: 7.7, label: "A Few Good Men" },
  { year: 1992, rating: 7.5, label: "Man Bites Dog" },
  { year: 1992, rating: 7.5, label: "The Player" },
  { year: 1992, rating: 8.3, label: "Reservoir Dogs" },
  { year: 1992, rating: 7.2, label: "Strictly Ballroom" },
  { year: 1992, rating: 8.0, label: "Aladdin" },
  { year: 1992, rating: 7.5, label: "Army of Darkness" },
  { year: 1993, rating: 7.8, label: "Tombstone" },
  { year: 1993, rating: 7.8, label: "Tombstone" },
  { year: 1993, rating: 7.9, label: "Three Colors: Blue" },
  { year: 1993, rating: 8.0, label: "Groundhog Day" },
  { year: 1993, rating: 8.1, label: "In the Name of the Father" },
  { year: 1993, rating: 7.3, label: "Shadowlands" },
  { year: 1993, rating: 7.8, label: "The Remains of the Day" },
  { year: 1993, rating: 7.3, label: "Shadowlands" },
  { year: 1993, rating: 8.3, label: "The Wrong Trousers" },
  { year: 1993, rating: 7.9, label: "True Romance" },
  { year: 1993, rating: 8.1, label: "Farewell My Concubine" },
  { year: 1993, rating: 8.1, label: "In the Name of the Father" },
  { year: 1993, rating: 7.8, label: "The Remains of the Day" },
  { year: 1993, rating: 7.9, label: "Three Colors: Blue" },
  { year: 1993, rating: 7.3, label: "Much Ado About Nothing" },
  { year: 1993, rating: 7.9, label: "True Romance" },
  { year: 1993, rating: 8.9, label: "Schindler's List" },
  { year: 1993, rating: 7.6, label: "Dazed and Confused" },
  { year: 1993, rating: 7.8, label: "The Fugitive" },
  { year: 1993, rating: 7.7, label: "Short Cuts" },
  { year: 1993, rating: 7.8, label: "Naked" },
  { year: 1993, rating: 6.5, label: " Babylon 5" },
  { year: 1993, rating: 8.9, label: "Schindler's List" },
  { year: 1993, rating: 8.3, label: "The Wrong Trousers" },
  { year: 1993, rating: 7.4, label: "Searching for Bobby Fischer" },
  { year: 1993, rating: 7.8, label: "Naked" },
  { year: 1993, rating: 7.8, label: "The Fugitive" },
  { year: 1993, rating: 8.0, label: "Groundhog Day" },
  { year: 1993, rating: 7.7, label: "What's Eating Gilbert Grape" },
  { year: 1993, rating: 7.3, label: "Much Ado About Nothing" },
  { year: 1994, rating: 8.5, label: "Léon: The Professional" },
  { year: 1994, rating: 8.8, label: "Forrest Gump" },
  { year: 1994, rating: 7.3, label: "Little Women" },
  { year: 1994, rating: 7.3, label: "Shallow Grave" },
  { year: 1994, rating: 8.8, label: "Forrest Gump" },
  { year: 1994, rating: 7.6, label: "The Crow" },
  { year: 1994, rating: 7.1, label: "Exotica" },
  { year: 1994, rating: 7.3, label: "Heavenly Creatures" },
  { year: 1994, rating: 8.1, label: "Three Colors: Red" },
  { year: 1994, rating: 9.3, label: "The Shawshank Redemption" },
  { year: 1994, rating: 7.7, label: "Clerks" },
  { year: 1994, rating: 7.5, label: "The Adventures of Priscilla, Queen of the Desert" },
  { year: 1994, rating: 7.3, label: "Heavenly Creatures" },
  { year: 1994, rating: 7.7, label: "The Postman" },
  { year: 1994, rating: 7.9, label: "Once Were Warriors" },
  { year: 1994, rating: 8.5, label: "Léon: The Professional" },
  { year: 1994, rating: 8.9, label: "Pulp Fiction" },
  { year: 1994, rating: 8.9, label: "Pulp Fiction" },
  { year: 1994, rating: 8.1, label: "Three Colors: Red" },
  { year: 1994, rating: 7.9, label: "Once Were Warriors" },
  { year: 1994, rating: 8.5, label: "The Lion King" },
  { year: 1994, rating: 8.5, label: "The Lion King" },
  { year: 1994, rating: 7.1, label: "Priest" },
  { year: 1994, rating: 7.7, label: "The Postman" },
  { year: 1994, rating: 7.3, label: "Shallow Grave" },
  { year: 1994, rating: 7.7, label: "Clerks" },
  { year: 1994, rating: 7.8, label: "Ed Wood" },
  { year: 1994, rating: 9.3, label: "The Shawshank Redemption" },
  { year: 1994, rating: 7.6, label: "Three Colors: White" },
  { year: 1995, rating: 8.1, label: "A Close Shave" },
  { year: 1995, rating: 8.3, label: "Toy Story" },
  { year: 1995, rating: 8.5, label: "The Usual Suspects" },
  { year: 1995, rating: 8.3, label: "Braveheart" },
  { year: 1995, rating: 7.5, label: "Leaving Las Vegas" },
  { year: 1995, rating: 7.1, label: "Mallrats" },
  { year: 1995, rating: 8.2, label: "Heat" },
  { year: 1995, rating: 7.5, label: "Dead Man Walking" },
  { year: 1995, rating: 7.3, label: "Mr. Holland's Opus" },
  { year: 1995, rating: 6.7, label: "While You Were Sleeping" },
  { year: 1995, rating: 8.6, label: "Se7en" },
  { year: 1995, rating: 8.1, label: "Underground" },
  { year: 1995, rating: 7.7, label: "Sense and Sensibility" },
  { year: 1995, rating: 7.6, label: "Apollo 13" },
  { year: 1995, rating: 6.8, label: "Now and Then" },
  { year: 1995, rating: 8.2, label: "Heat" },
  { year: 1995, rating: 8.1, label: "A Close Shave" },
  { year: 1995, rating: 8.0, label: "12 Monkeys" },
  { year: 1995, rating: 8.3, label: "Toy Story" },
  { year: 1995, rating: 7.6, label: "Apollo 13" },
  { year: 1995, rating: 6.9, label: "Clueless" },
  { year: 1995, rating: 7.2, label: "Strange Days" },
  { year: 1995, rating: 6.7, label: "Empire Records" },
  { year: 1995, rating: 6.8, label: "Babe" },
  { year: 1995, rating: 7.4, label: "Smoke" },
  { year: 1995, rating: 6.8, label: "Babe" },
  { year: 1995, rating: 7.6, label: "Dead Man" },
  { year: 1995, rating: 8.3, label: "Braveheart" },
  { year: 1995, rating: 7.7, label: "Sense and Sensibility" },
  { year: 1995, rating: 6.8, label: "Rumble in the Bronx" },
  { year: 1995, rating: 7.5, label: "The City of Lost Children" },
  { year: 1995, rating: 8.5, label: "The Usual Suspects" },
  { year: 1995, rating: 7.5, label: "Dead Man Walking" },
  { year: 1995, rating: 7.5, label: "The City of Lost Children" },
  { year: 1995, rating: 7.4, label: "Smoke" },
  { year: 1995, rating: 8.6, label: "Se7en" },
  { year: 1995, rating: 8.1, label: "Before Sunrise" },
  { year: 1995, rating: 5.5, label: "Tom and Huck" },
  { year: 1995, rating: 7.5, label: "Leaving Las Vegas" },
  { year: 1995, rating: 8.0, label: "12 Monkeys" },
  { year: 1996, rating: 7.6, label: "Star Trek: First Contact" },
  { year: 1996, rating: 6.6, label: "Courage Under Fire" },
  { year: 1996, rating: 7.5, label: "A Time to Kill" },
  { year: 1996, rating: 7.3, label: "Big Night" },
  { year: 1996, rating: 7.6, label: "Sleepers" },
  { year: 1996, rating: 7.0, label: "The Hunchback of Notre Dame" },
  { year: 1996, rating: 7.0, label: "Independence Day" },
  { year: 1996, rating: 7.4, label: "The Rock" },
  { year: 1996, rating: 7.3, label: "Bound" },
  { year: 1996, rating: 8.1, label: "Trainspotting" },
  { year: 1996, rating: 6.8, label: "The Long Kiss Goodnight" },
  { year: 1996, rating: 6.8, label: "The Ghost and the Darkness" },
  { year: 1996, rating: 7.3, label: "Big Night" },
  { year: 1996, rating: 6.4, label: "Phenomenon" },
  { year: 1996, rating: 7.3, label: "Jerry Maguire" },
  { year: 1996, rating: 7.4, label: "The English Patient" },
  { year: 1996, rating: 7.3, label: "The People vs. Larry Flynt" },
  { year: 1996, rating: 6.7, label: "Ransom" },
  { year: 1996, rating: 7.3, label: "Mystery Science Theater 3000: The Movie" },
  { year: 1996, rating: 6.7, label: "Romeo + Juliet" },
  { year: 1996, rating: 6.9, label: "That Thing You Do!" },
  { year: 1996, rating: 7.2, label: "Swingers" },
  { year: 1996, rating: 7.7, label: "Hamlet" },
  { year: 1996, rating: 7.3, label: "Scream" },
  { year: 1996, rating: 8.1, label: "Trainspotting" },
  { year: 1996, rating: 7.7, label: "Shine" },
  { year: 1996, rating: 6.7, label: "Emma" },
  { year: 1996, rating: 7.3, label: "Bound" },
  { year: 1996, rating: 7.5, label: "A Time to Kill" },
  { year: 1996, rating: 7.8, label: "Breaking the Waves" },
  { year: 1996, rating: 7.4, label: "The Rock" },
  { year: 1996, rating: 7.4, label: "Lone Star" },
  { year: 1996, rating: 8.0, label: "Secrets & Lies" },
  { year: 1996, rating: 8.0, label: "Secrets & Lies" },
  { year: 1996, rating: 7.4, label: "Lone Star" },
  { year: 1996, rating: 8.0, label: "Sling Blade" },
  { year: 1996, rating: 7.6, label: "Beautiful Thing" },
  { year: 1996, rating: 7.4, label: "The English Patient" },
  { year: 1996, rating: 8.1, label: "Fargo" },
  { year: 1996, rating: 8.1, label: "Fargo" },
  { year: 1997, rating: 7.7, label: "The Fifth Element" },
  { year: 1997, rating: 7.2, label: "Face/Off" },
  { year: 1997, rating: 7.7, label: "The Game" },
  { year: 1997, rating: 8.2, label: "L.A. Confidential" },
  { year: 1997, rating: 7.2, label: "Chasing Amy" },
  { year: 1997, rating: 7.7, label: "Donnie Brasco" },
  { year: 1997, rating: 7.3, label: "Men in Black" },
  { year: 1997, rating: 7.5, label: "Contact" },
  { year: 1997, rating: 7.8, label: "Titanic" },
  { year: 1997, rating: 7.3, label: "Grosse Pointe Blank" },
  { year: 1997, rating: 7.2, label: "The Full Monty" },
];

// Rating vs gross
const initRatingGrossChart = () => {
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

const initRankingRuntimeMovieChart = () => {
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
                x: { title: { displaratingAvg: true, text: 'Runtime (min)' } },
                y: { title: { displaratingAvg: true, text: 'Ranking' }, max: 10 }
            }
        }
    });
}

const initDirectorAvgRatingChart = () => {
    const ctx = document.getElementById('directorsAvgRatingChart').getContext('2d');
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Directors',
                data: directorsAvgRatingData,
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
                xAxisKey: 'moviesCount',
                yAxisKey: 'ratingAvg'
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: (context) => {
                            let point = context.raw;
                            return `${point.title}: Movies count: ${point.moviesCount}, Rating AVG: ${point.ratingAvg}`;
                        }
                    }
                }
            },
            scales: {
                x: { title: { displaratingAvg: true, text: 'Movies count' } },
                y: { title: { displaratingAvg: true, text: 'Rating AVG' } }
            }
        }
    });
}

//Calculate Trendline
const calculateTrendline = (data) => {
    let n = data.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;

    data.forEach(p => {
        sumX += p.year;
        sumY += p.rating;
        sumXY += (p.year * p.rating);
        sumXX += (p.year * p.year);
    });

    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    //Calculate initial point (min year) y final (max year) to draw the line
    const minYear = Math.min(...data.map(d => d.year));
    const maxYear = Math.max(...data.map(d => d.year));

    return [
        { year: minYear, rating: slope * minYear + intercept },
        { year: maxYear, rating: slope * maxYear + intercept }
    ];
}

const initTestChart = () => {
    const trendlineData = calculateTrendline(ratingMoviesByYearData);
    const ctx = document.getElementById('ratingMoviesByYearChart').getContext('2d');
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [
                {
                    label: 'Movies',
                    data: ratingMoviesByYearData,
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    pointRadius: 4
                },
                {
                    label: 'Trend',
                    data: trendlineData,
                    type: 'line',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2,
                    pointRadius: 0, //Without points in line
                    fill: false,
                    tension: 0 //Straight line
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            parsing: {
                xAxisKey: 'year',
                yAxisKey: 'rating'
            },
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: { display: true, text: 'Year' }
                },
                y: { title: { display: true, text: 'Rating (IMDb)' } }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: (context) => {
                            if (context.dataset.type === 'line') return 'Trend';
                            const point = context.raw;
                            return `${point.label} (${point.year}): ${point.rating}`;
                        }
                    }
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initRatingGrossChart();
    initRankingRuntimeMovieChart();
    initDirectorAvgRatingChart();
    initTestChart();
});
