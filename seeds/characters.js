const series = [
  {
    id: 1,
    name: "Dragon Ball",
    original_run: "February 26, 1986 - April 19, 1989",
    episodes: [],
    episode_count: 153,
    image_url: "",
    characters: [],
  },
  {
    id: 2,
    name: "Dragon Ball Z",
    original_run: "April 26, 1989 - January 31, 1996",
    episodes: [],
    episode_count: 291,
    image_url: "",
    characters: [],
  },
  {
    id: 3,
    name: "Dragon Ball GT",
    original_run: "February 7 1996 - November 19, 1997",
    episodes: [],
    episode_count: 64,
    image_url: "",
    characters: [],
  },
  {
    id: 4,
    name: "Dragon Ball Super",
    original_run: "July 5, 2015 - March 25, 2018",
    episodes: [],
    episode_count: 131,
    image_url: "",
    characters: [],
  },
];

const characters = [
  { id: 1, name: "Goku" },
  { id: 2, name: "Bulma" },
  { id: 3, name: "Oolong" },
  { id: 4, name: "Master Roshi" },
  { id: 5, name: "Turtle" },
  { id: 6, name: "Yamcha" },
  { id: 7, name: "Puar" },
  { id: 8, name: "Ox-King" },
  { id: 9, name: "Chi-Chi" },
  { id: 10, name: "Krillin" },
  { id: 11, name: "Launch" },
  { id: 12, name: "Nam" },
  { id: 13, name: "Suno" },
  { id: 14, name: "Android 8" },
  { id: 15, name: "Dr. Brief" },
  { id: 16, name: "Panchy" },
  { id: 17, name: "Upa" },
  { id: 18, name: "Bora" },
  { id: 19, name: "Korin" },
  { id: 20, name: "Baba" },
  { id: 21, name: "Grandpa Gohan" },
  { id: 22, name: "Tien Shinhan" },
  { id: 23, name: "Chiaotzu" },
  { id: 24, name: "Yajirobe" },
  { id: 25, name: "Kami" },
  { id: 26, name: "Mr. Popo" },
  { id: 27, name: "Emperor Pilaf" },
  { id: 28, name: "Mai" },
  { id: 29, name: "Shu" },
  { id: 30, name: "Commander Red" },
  { id: 31, name: "Staff Officer Black" },
  { id: 32, name: "General Blue" },
  { id: 33, name: "Mercenary Tao" },
  { id: 34, name: "Master Shen" },
  { id: 35, name: "World Tournament Announcer" },
  { id: 36, name: "King Piccolo" },
  { id: 37, name: "Piano" },
  { id: 38, name: "Tambourine" },
  { id: 39, name: "Piccolo" },
  { id: 40, name: "Shenron" },
  { id: 41, name: "Gohan" },
  { id: 42, name: "Goten" },
  { id: 43, name: "Vegeta" },
  { id: 44, name: "Trunks" },
  { id: 45, name: "Mr. Satan" },
  { id: 46, name: "Videl" },
  { id: 47, name: "Android 18" },
  { id: 48, name: "Dende" },
  { id: 49, name: "Kami" },
  { id: 50, name: "King Kai" },
  { id: 51, name: "Kibito" },
  { id: 52, name: "Old Kai" },
  { id: 53, name: "Raditz" },
  { id: 54, name: "Nappa" },
  { id: 55, name: "Frieza" },
  { id: 56, name: "Zarbon" },
  { id: 57, name: "Dodoria" },
  { id: 58, name: "Captain Ginyu" },
  { id: 59, name: "Garlic Jr." },
  { id: 60, name: "Dr. Gero" },
  { id: 61, name: "Android 17" },
  { id: 62, name: "Android 16" },
  { id: 63, name: "Cell" },
  { id: 64, name: "Pikkon" },
  { id: 65, name: "Babidi" },
  { id: 66, name: "Dabura" },
  { id: 67, name: "Majin Buu" },
  { id: 68, name: "Giru" },
  { id: 69, name: "Uub" },
  { id: 70, name: "Pan" },
  { id: 71, name: "Bulla" },
  { id: 71, name: "Marron" },
  { id: 72, name: "Kibito Kai" },
  { id: 73, name: "Sugoro" },
  { id: 74, name: "Shusugoro" },
  { id: 75, name: "Dr. Myuu" },
  { id: 76, name: "General Rilldo" },
  { id: 77, name: "Baby" },
  { id: 78, name: "Syn Shenron" },
  { id: 79, name: "Gotenks" },
  { id: 80, name: "Good Buu" },
  { id: 81, name: "Beerus" },
  { id: 82, name: "Whis" },
  { id: 83, name: "Oracle Fish" },
  { id: 84, name: "Champa" },
  { id: 85, name: "Vados" },
  { id: 86, name: "Bubbles" },
  { id: 87, name: "Gregory" },
  { id: 88, name: "Jaco" },
  { id: 89, name: "Bee" },
  { id: 90, name: "Shin" },
  { id: 91, name: "King Vegeta" },
  { id: 92, name: "Caroni" },
  { id: 93, name: "Miss Piiza" },
  { id: 94, name: "Pirozhki" },
  { id: 95, name: "Galbee" },
  { id: 96, name: "Sorbet" },
  { id: 97, name: "Tagoma" },
  { id: 98, name: "Shisami" },
  { id: 99, name: "Tights" },
  { id: 100, name: "Zuno" },
  { id: 101, name: "Geppuman" },
  { id: 102, name: "Galactic King" },
  { id: 102, name: "Monaka" },
  { id: 103, name: "Cabba" },
  { id: 104, name: "Frost" },
  { id: 105, name: "Hit" },
  { id: 106, name: "Botamo" },
  { id: 107, name: "Auta Magetta" },
  { id: 108, name: "Referee" },
  { id: 109, name: "Fuwa" },
  { id: 110, name: "Fuwa's Attendant" },
  { id: 111, name: "Singer" },
  { id: 112, name: "Zeno" },
  { id: 113, name: "Zeno's Attendant" },
  { id: 114, name: "Super Shenron" },
  { id: 115, name: "Gryll" },
  { id: 116, name: "Duplicate Gryll" },
  { id: 117, name: "Duplicate Vegeta" },
  { id: 118, name: "Potage" },
  { id: 119, name: "Future Trunks" },
  { id: 120, name: "Future Bulma" },
  { id: 121, name: "Arale Norimaki" },
  { id: 122, name: "Goku Black" },
  { id: 123, name: "Future, Mai" },
  { id: 124, name: "Future Scratch" },
  { id: 125, name: "Zamasu" },
  { id: 126, name: "Future Dabura" },
  { id: 127, name: "Future Gohan" },
  { id: 128, name: "Gowasu" },
  { id: 129, name: "Grand Minister" },
  { id: 130, name: "Future Yajirobe" },
  { id: 131, name: "Haru" },
  { id: 132, name: "Maki" },
  { id: 133, name: "Future, Zamasu" },
  { id: 134, name: "Fused Zamasu" },
  { id: 135, name: "Vegito" },
  { id: 136, name: "Future Zeno" },
  { id: 137, name: "Senbei Norimaki" },
  { id: 138, name: "Dr. Mashirito" },
  { id: 139, name: "Mr. Pig" },
  { id: 140, name: "Sun" },
  { id: 141, name: "Bubibinman" },
  { id: 142, name: "Barry Kahn" },
  { id: 143, name: "Cocoa Amaguri" },
  { id: 144, name: "Watagash" },
  { id: 145, name: "Fortuneteller Baba" },
  { id: 146, name: "Super Buu" },
  { id: 147, name: "Guldo" },
  { id: 148, name: "Burter" },
  { id: 149, name: "Jeice" },
  { id: 150, name: "Recoome" },
  { id: 151, name: "Tambourine" },
  { id: 152, name: "Roh" },
  { id: 153, name: "Sidra" },
  { id: 154, name: "Basil" },
  { id: 155, name: "Lavender" },
  { id: 156, name: "Bergamo" },
  { id: 157, name: "Heles" },
  { id: 158, name: "Khai" },
  { id: 159, name: "Top" },
  { id: 160, name: "Eyre" },
  { id: 161, name: "Belmod" },
  { id: 162, name: "Kuru" },
  { id: 163, name: "Anato" },
  { id: 164, name: "Ogma" },
  { id: 165, name: "Agu" },
  { id: 166, name: "Iru" },
  { id: 167, name: "Marcarita" },
  { id: 168, name: "Pell" },
  { id: 169, name: "Kahseral" },
  { id: 170, name: "Dyspo" },
  { id: 171, name: "Quitela" },
  { id: 172, name: "Camparri" },
  { id: 173, name: "Rumsshi" },
  { id: 174, name: "Araghne" },
  { id: 175, name: "Minotaurus" },
  { id: 176, name: "Galactic Poacher Boss" },
  { id: 177, name: "Renso" },
  { id: 178, name: "Yurin" },
  { id: 179, name: "Caulifla" },
  { id: 180, naem: "Kusu" },
  { id: 181, name: "Murichim" },
  { id: 182, name: "Mohito" },
  { id: 183, name: "Brianne de Chateau" },
  { id: 184, name: "Nigrissi" },
  { id: 185, name: "Narirama" },
  { id: 187, name: "Kale" },
  { id: 188, name: "King Yemma" },
  { id: 189, name: "Ganos" },
  { id: 190, name: "Universe 9's Assassin Boss" },
  { id: 191, name: "Arak" },
  { id: 192, name: "Iwan" },
  { id: 193, name: "Liquiir" },
  { id: 194, name: "Korn" },
  { id: 195, name: "Giin" },
  { id: 196, name: "Jiren" },
  { id: 197, name: "Rylibeu" },
  { id: 198, name: "Napapa" },
  { id: 199, name: "Nink" },
  { id: 200, name: "Roselle" },
  { id: 201, name: "Hop" },
  { id: 202, name: "Chappil" },
  { id: 202, name: "Hyssop" },
  { id: 203, name: "Comfrey" },
  { id: 204, name: "Oregano" },
  { id: 205, name: "Sorrel" },
  { id: 206, name: "Dium" },
  { id: 207, name: "Shosa" },
  { id: 208, name: "Majora" },
  { id: 209, name: "Methiop" },
  { id: 210, name: "Catopesra" },
  { id: 211, name: "Harmira" },
  { id: 212, name: "Murisam" },
  { id: 213, name: "Jimizu" },
  { id: 214, name: "Vewon" },
  { id: 215, name: "Tupper" },
  { id: 216, name: "Zoire" },
  { id: 217, name: "Cocotte" },
  { id: 218, name: "Za Priccio" },
  { id: 219, name: "Sanka Coo" },
  { id: 220, name: "Sous Roas" },
  { id: 221, name: "Rabanra" },
  { id: 222, name: "Dyrasem" },
  { id: 223, name: "Paparoni" },
  { id: 224, name: "Zarbuto" },
  { id: 225, name: "Zirloin" },
  { id: 226, name: "Bikal" },
  { id: 227, name: "Sour" },
  { id: 228, name: "Rubalt" },
  { id: 229, name: "Obni" },
  { id: 230, name: "Zircor" },
  { id: 231, name: "K'nsi" },
  { id: 232, name: "Biarra" },
  { id: 233, name: "Xiangca" },
  { id: 234, name: "Caway" },
  { id: 235, name: "Maji-Kayo" },
  { id: 236, name: "Dercori" },
  { id: 237, name: "Dr. Rota" },
  { id: 238, name: "Prum" },
  { id: 239, name: "Borareta" },
  { id: 240, name: "Koitsukai" },
  { id: 241, name: "Pancéa" },
  { id: 242, name: "Pilina" },
  { id: 243, name: "Saonel" },
  { id: 244, name: "Monna" },
  { id: 245, name: "Kefla" },
  { id: 246, name: "Gamisalas" },
  { id: 247, name: "Damom" },
  { id: 248, name: "Koicéareta" },
  { id: 249, name: "Agnilasa" },
  { id: 250, name: "Mule" },
];
