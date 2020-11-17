// bin/seeds.js
const mongoose = require('mongoose');
const Streetart = require('../models/Streetart.js');
const DB_NAME = 'route-app';
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const streetart = [{

  neighborhood: "Alfama",
  address: "Tv. Merceeiras 27, 1100-348 Lisboa",
  cross_street_1: "Travessa das Merceeiras",
  cross_street_2: "",
  artist: "Alexandre Farto (AKA Vhils)",
  name_description: "Face carved into side of building",
  other_location_note: "next to Memmo Alfama Hotel",
  latitude: "38.7175428",
  longitude: "-9.1195719",
  coordinates: "[-9.1195719, 38.7175428]",
  type: "Point",
  imageUrl: "vhils-alfama.jpg",
  location: "    location: {\n      coordinates [-9.1195719, 38.7175428]"
},{

  neighborhood: "Alfama",
  address: "Cal�ada do Menino Deus 1 3, 1100-465 Lisboa",
  cross_street_1: "Cal�ada do Menino Deus",
  cross_street_2: "",
  artist: "Alexandre Farto (AKA Vhils)",
  name_description: "Fado singer Am�lia Rodrigues",
  other_location_note: "",
  latitude: "38.7133686",
  longitude: "-9.1328826",
  coordinates: "[-9.1328826, 38.7133686]",
  type: "Point",
  imageUrl: "calcada-amalia-rodrigues.jpg",
  location: "    location: {\n      coordinates [-9.1328826, 38.7133686]"
},{

  neighborhood: "Alfama",
  address: "Tv. Mata 3, 1100-006 Lisboa",
  cross_street_1: "Travessa da Mata",
  cross_street_2: "",
  artist: "Nuno Saraiva",
  name_description: "Cavaleiros da Posta Real",
  other_location_note: "Correio Velho Palace",
  latitude: "38.7114972",
  longitude: "-9.1368075",
  coordinates: "[-9.1368075, 38.7114972]",
  type: "Point",
  imageUrl: "correio-mor.jpg",
  location: "    location: {\n      coordinates [-9.1368075, 38.7114972]"
},{

  neighborhood: "Alfama",
  address: "Cal�ada de Santa Apol�nia 2, 1100-188 Lisboa",
  cross_street_1: "Cal�ada de Santa Apol�nia",
  cross_street_2: "",
  artist: "PichiAvo�",
  name_description: "Poseidon",
  other_location_note: "",
  latitude: "38.7175939",
  longitude: "-9.1216741",
  coordinates: "[-9.1216741, 38.7175939]",
  type: "Point",
  imageUrl: "poseidon.jpg",
  location: "    location: {\n      coordinates [-9.1216741, 38.7175939]"
},{

  neighborhood: "Alfama",
  address: "Cal�ada de Santa Apol�nia 36, 1100-093 Lisboa",
  cross_street_1: "Cal�ada de Santa Apol�nia",
  cross_street_2: "",
  artist: "M�rio Bel�m",
  name_description: "Celebration of Abolishment of the Death Penalty",
  other_location_note: "",
  latitude: "38.717199",
  longitude: "-9.1220921",
  coordinates: "[-9.1220921, 38.717199]",
  type: "Point",
  imageUrl: "mario-belem.jpg",
  location: "    location: {\n      coordinates [-9.1220921, 38.717199]"
},{

  neighborhood: "Bairro Alto",
  address: "Largo da Oliveirinha 2, 1250-096 Lisboa",
  cross_street_1: "Cal�ada da Gl�ria",
  cross_street_2: "Largo da Oliveirinha",
  artist: "Unknown",
  name_description: "Official Street Art Gallery",
  other_location_note: "Gl�ria funicular",
  latitude: "38.7154421",
  longitude: "-9.145929",
  coordinates: "[-9.145929, 38.7154421]",
  type: "Point",
  imageUrl: "galeria-arte-urbana.jpg",
  location: "    location: {\n      coordinates [-9.145929, 38.7154421]"
},{

  neighborhood: "Bairro Alto",
  address: "Tv. dos Fi�is de Deus 42, 1200-043 Lisboa",
  cross_street_1: "Travessa dos Fi�is de Deus",
  cross_street_2: "",
  artist: "Ant�nio Alves and RIGO",
  name_description: "Maoist Inspired Leftist",
  other_location_note: "",
  latitude: "38.7118617",
  longitude: "-9.1468407",
  coordinates: "[-9.1468407, 38.7118617]",
  type: "Point",
  imageUrl: "rigo.jpg",
  location: "    location: {\n      coordinates [-9.1468407, 38.7118617]"
},{

  neighborhood: "Bairro Alto",
  address: "R. Vinha 26, 1200-295 Lisboa",
  cross_street_1: "Rua da Vinha",
  cross_street_2: "",
  artist: "Unknown",
  name_description: "Several panels by different artists",
  other_location_note: "",
  latitude: "38.7143558",
  longitude: "-9.1486484",
  coordinates: "[-9.1486484, 38.7143558]",
  type: "Point",
  imageUrl: "rua-da-vinha-arte.jpg",
  location: "    location: {\n      coordinates [-9.1486484, 38.7143558]"
},{

  neighborhood: "Bairro Alto",
  address: "R. S�o Boaventura 16, 1200-348 Lisboa",
  cross_street_1: "Rua de S�o Boaventura",
  cross_street_2: "",
  artist: "Binau",
  name_description: "Bull",
  other_location_note: "",
  latitude: "38.7143042",
  longitude: "-9.1482922",
  coordinates: "[-9.1482922, 38.7143042]",
  type: "Point",
  imageUrl: "binau.jpg",
  location: "    location: {\n      coordinates [-9.1482922, 38.7143042]"
},{

  neighborhood: "Bairro Alto",
  address: "Tv. dos Fi�is de Deus 69, 1200-043 Lisboa",
  cross_street_1: "Travessa dos Fi�is de Deus",
  cross_street_2: "",
  artist: "Sumo Doubledevil",
  name_description: "Sunglass cartoon characters",
  other_location_note: "",
  latitude: "38.7117622",
  longitude: "-9.1477206",
  coordinates: "[-9.1477206, 38.7117622]",
  type: "Point",
  imageUrl: "sumo-doubledevil.jpg",
  location: "    location: {\n      coordinates [-9.1477206, 38.7117622]"
},{

  neighborhood: "Bairro Alto",
  address: "R. do Norte 84, 1200-334 Lisboa",
  cross_street_1: "Rua do Norte",
  cross_street_2: "",
  artist: "Unknown",
  name_description: "Culture Pharmacy",
  other_location_note: "",
  latitude: "38.7124911",
  longitude: "-9.1459011",
  coordinates: "[-9.1459011, 38.7124911]",
  type: "Point",
  imageUrl: "pharmacia-de-cultura.jpg",
  location: "    location: {\n      coordinates [-9.1459011, 38.7124911]"
},{

  neighborhood: "Chiado",
  address: "Cal�ada do Carmo 43, 1200-090 Lisboa",
  cross_street_1: "Cal�ada do Carmo",
  cross_street_2: "",
  artist: "Oliveiros Rodrigues da Silva Junior",
  name_description: "Utopia63",
  other_location_note: "Rossio Station",
  latitude: "38.7133802",
  longitude: "-9.1430027",
  coordinates: "[-9.1430027, 38.7133802]",
  type: "Point",
  imageUrl: "utopia.jpg",
  location: "    location: {\n      coordinates [-9.1430027, 38.7133802]"
},{

  neighborhood: "GRA�A",
  address: "R. Josefa de �bidos 9, 1170-196 Lisboa",
  cross_street_1: "Rua Josefa de �bidos",
  cross_street_2: "",
  artist: "Eime",
  name_description: "Sophia de Mello Breyner�s face",
  other_location_note: "",
  latitude: "38.7197895",
  longitude: "-9.1318415",
  coordinates: "[-9.1318415, 38.7197895]",
  type: "Point",
  imageUrl: "eime.jpg",
  location: "    location: {\n      coordinates [-9.1318415, 38.7197895]"
},{

  neighborhood: "GRA�A",
  address: "Tv. do Monte 32, 1170-255 Lisboa",
  cross_street_1: "Travessa do Monte",
  cross_street_2: "",
  artist: "Mariana Dias Coutinho",
  name_description: "Nat�lia Correia and Florbela Espanca",
  other_location_note: "",
  latitude: "38.7187038",
  longitude: "-9.1327677",
  coordinates: "[-9.1327677, 38.7187038]",
  type: "Point",
  imageUrl: "mariana-dias-coutinho.jpg",
  location: "    location: {\n      coordinates [-9.1327677, 38.7187038]"
},{

  neighborhood: "GRA�A",
  address: "Rua da Gra�a 94, 1170-196 Lisboa",
  cross_street_1: "Rua da Gra�a",
  cross_street_2: "",
  artist: "Jo�o Maur�cio (AKA Violant)",
  name_description: "Book tree",
  other_location_note: "tram 28",
  latitude: "38.719663",
  longitude: "-9.1320037",
  coordinates: "[-9.1320037, 38.719663]",
  type: "Point",
  imageUrl: "violant.jpg",
  location: "    location: {\n      coordinates [-9.1320037, 38.719663]"
},{

  neighborhood: "GRA�A",
  address: "R. Nat�lia Correia 8, 1170-270 Lisboa",
  cross_street_1: "Rua Nat�lia Correia",
  cross_street_2: "",
  artist: "Shepard Fairey",
  name_description: "Woman holding gun with flower",
  other_location_note: "",
  latitude: "38.7207496",
  longitude: "-9.1314133",
  coordinates: "[-9.1314133, 38.7207496]",
  type: "Point",
  imageUrl: "shepard-fairey.jpg",
  location: "    location: {\n      coordinates [-9.1314133, 38.7207496]"
},{

  neighborhood: "GRA�A",
  address: "Rua da Senhora da Gl�ria 51, 1170-364 Lisboa",
  cross_street_1: "Rua Senhora da Gl�ria",
  cross_street_2: "",
  artist: "Shepard Fairey & Vhils",
  name_description: "Each half of a woman's face by the different artists",
  other_location_note: "",
  latitude: "38.7186534",
  longitude: "-9.1300983",
  coordinates: "[-9.1300983, 38.7186534]",
  type: "Point",
  imageUrl: "vhils-graca.jpg",
  location: "    location: {\n      coordinates [-9.1300983, 38.7186534]"
},{

  neighborhood: "GRA�A",
  address: "R. da Voz do Oper�rio 46, 1100-575 Lisboa",
  cross_street_1: "Travessa de S�o Vicente",
  cross_street_2: "",
  artist: "Pariz One and Mr. Dheo",
  name_description: "April 25th Revolution",
  other_location_note: "between the�S�o Vicente Monastery��and the Gra�a viewpoint",
  latitude: "38.7159256",
  longitude: "-9.1312927",
  coordinates: "[-9.1312927, 38.7159256]",
  type: "Point",
  imageUrl: "armu-yama.jpg",
  location: "    location: {\n      coordinates [-9.1312927, 38.7159256]"
},{

  neighborhood: "GRA�A",
  address: "R. Damasceno Monteiro 19, 1170-248 Lisboa",
  cross_street_1: "Rua Damasceno Monteiro",
  cross_street_2: "",
  artist: "akaCorleone",
  name_description: "Art Deco style",
  other_location_note: "not far from the Senhora do Monte viewpoint",
  latitude: "38.7190808",
  longitude: "-9.1356973",
  coordinates: "[-9.1356973, 38.7190808]",
  type: "Point",
  imageUrl: "akacorleone.jpg",
  location: "    location: {\n      coordinates [-9.1356973, 38.7190808]"
},{

  neighborhood: "BEL�M",
  address: "R. Bartolomeu Dias 43, 1400-029 Lisboa",
  cross_street_1: "Rua Bartolomeu Dias",
  cross_street_2: "",
  artist: "Bordalo II",
  name_description: "racoon",
  other_location_note: "behind the Bel�m Cultural Center",
  latitude: "38.6958346",
  longitude: "-9.2126479",
  coordinates: "[-9.2126479, 38.6958346]",
  type: "Point",
  imageUrl: "bordalo-ii-belem.jpg",
  location: "    location: {\n      coordinates [-9.2126479, 38.6958346]"
},{

  neighborhood: "BEL�M",
  address: "Largo Marqu�s Angeja 9, 1300-598 Lisboa",
  cross_street_1: "Av. da �ndia",
  cross_street_2: "",
  artist: "ARM Collective",
  name_description: "The Lusiads",
  other_location_note: "faces the river by the�Carriages Museum�, on the departure point of the ships of the Age of Discovery.",
  latitude: "38.6968141",
  longitude: "-9.196979",
  coordinates: "[-9.196979, 38.6968141]",
  type: "Point",
  imageUrl: "lusiadas-street-art.jpg",
  location: "    location: {\n      coordinates [-9.196979, 38.6968141]"
},{

  neighborhood: "ALG�S",
  address: "R. Dami�o de G�is 32, 1495-043 Alg�s",
  cross_street_1: "Pra�a D. Manuel I",
  cross_street_2: "",
  artist: "Nark",
  name_description: "stop! ",
  other_location_note: "by the next-to-last stop of�tram 15",
  latitude: "38.6997597",
  longitude: "-9.230146",
  coordinates: "[-9.230146, 38.6997597]",
  type: "Point",
  imageUrl: "street-art-nark.jpg",
  location: "    location: {\n      coordinates [-9.230146, 38.6997597]"
},{

  neighborhood: "AVENIDAS NOVAS",
  address: "Av. Fontes Pereira de Melo 17, 1050-208 Lisboa",
  cross_street_1: "Avenida Fontes Pereira de Melo",
  cross_street_2: "",
  artist: "Os G�meos, Blu & Eric Il Cane, and SAM3",
  name_description: "3 empty buildings covered by several artists",
  other_location_note: "",
  latitude: "38.7294606",
  longitude: "-9.1499101",
  coordinates: "[-9.1499101, 38.7294606]",
  type: "Point",
  imageUrl: "street-art-os-gemeos.jpg",
  location: "    location: {\n      coordinates [-9.1499101, 38.7294606]"
},{

  neighborhood: "AMOREIRAS",
  address: "Av. Conselheiro Fernando de Sousa 5, 1070-072 Lisboa",
  cross_street_1: "Rua Conselheiro Fernando Sousa",
  cross_street_2: "",
  artist: "Unknown",
  name_description: "murals on wall panels",
  other_location_note: "",
  latitude: "38.7252759",
  longitude: "-9.1623681",
  coordinates: "[-9.1623681, 38.7252759]",
  type: "Point",
  imageUrl: "arte-urbana-amoreiras.jpg",
  location: "    location: {\n      coordinates [-9.1623681, 38.7252759]"
},{

  neighborhood: "AMOREIRAS",
  address: "C� dos Mestres 75, 1070-283 Lisboa",
  cross_street_1: "Avenida Calouste Gulbenkian",
  cross_street_2: "",
  artist: "Vhils, Jo�o Abel Manta",
  name_description: "Vhils face carving, tile mural of forest",
  other_location_note: "not far from the�aqueduct�",
  latitude: "38.7295322",
  longitude: "-9.1683337",
  coordinates: "[-9.1683337, 38.7295322]",
  type: "Point",
  imageUrl: "vhils-campolide.jpg",
  location: "    location: {\n      coordinates [-9.1683337, 38.7295322]"
},{

  neighborhood: "ALC�NTARA",
  address: "R. Rodrigues de Faria 105, 1300-501 Lisboa",
  cross_street_1: "Rua Rodrigues de Faria",
  cross_street_2: "",
  artist: "Bordalo II and many others",
  name_description: "Many murals in the Lx Factory Complex",
  other_location_note: "",
  latitude: "38.7035607",
  longitude: "-9.1810148",
  coordinates: "[-9.1810148, 38.7035607]",
  type: "Point",
  imageUrl: "lx-factory.jpg",
  location: "    location: {\n      coordinates [-9.1810148, 38.7035607]"
},{

  neighborhood: "ALC�NTARA",
  address: "Av. da �ndia 52, 1300-299 Lisboa",
  cross_street_1: "Av. da �ndia",
  cross_street_2: "",
  artist: "akaCorleone",
  name_description: "Shipping containers and buses turned to art",
  other_location_note: "coworking space Village Underground",
  latitude: "38.7005557",
  longitude: "-9.1804729",
  coordinates: "[-9.1804729, 38.7005557]",
  type: "Point",
  imageUrl: "village-underground.jpg",
  location: "    location: {\n      coordinates [-9.1804729, 38.7005557]"
},{

  neighborhood: "ALC�NTARA",
  address: "Viaduto de Alc�ntara and R. Cascais, Lisboa",
  cross_street_1: "Viaduto de Alc�ntara",
  cross_street_2: "",
  artist: "Unknown",
  name_description: "many murals along the underpass",
  other_location_note: "the underpass that takes you to the Alc�ntara-Mar train station and Santo Amaro docks",
  latitude: "38.7026577",
  longitude: "-9.1772179",
  coordinates: "[-9.1772179, 38.7026577]",
  type: "Point",
  imageUrl: "alcantara-mar.jpg",
  location: "    location: {\n      coordinates [-9.1772179, 38.7026577]"
},{

  neighborhood: "ALC�NTARA",
  address: "Ac. Pte. 25 de Abril 152, 1300-228 Lisboa",
  cross_street_1: "Avenida de Ceuta",
  cross_street_2: "",
  artist: "Bordalo II",
  name_description: "fish sculpture",
  other_location_note: "across from the Alc�ntara-Terra train station",
  latitude: "38.7073432",
  longitude: "-9.1762787",
  coordinates: "[-9.1762787, 38.7073432]",
  type: "Point",
  imageUrl: "bordalo-ii-alcantara.jpg",
  location: "    location: {\n      coordinates [-9.1762787, 38.7073432]"
},{

  neighborhood: "INTENDENTE",
  address: "Largo do Intendente Pina Manique 14, 1150-017 Lisboa",
  cross_street_1: "Largo do Intendente",
  cross_street_2: "",
  artist: "Tamara Alves",
  name_description: "Woman and lion",
  other_location_note: "",
  latitude: "38.7208224",
  longitude: "-9.1373039",
  coordinates: "[-9.1373039, 38.7208224]",
  type: "Point",
  imageUrl: "tamara-alves.jpg",
  location: "    location: {\n      coordinates [-9.1373039, 38.7208224]"
},{

  neighborhood: "INTENDENTE",
  address: "Rua do Saco 36, 1150-311 Lisboa",
  cross_street_1: "Rua do Saco",
  cross_street_2: "",
  artist: "Violant",
  name_description: "Person and vegetation",
  other_location_note: "Intendente",
  latitude: "38.7208489",
  longitude: "-9.140345",
  coordinates: "[-9.140345, 38.7208489]",
  type: "Point",
  imageUrl: "violant-street-art.jpg",
  location: "    location: {\n      coordinates [-9.140345, 38.7208489]"
},{

  neighborhood: "INTENDENTE",
  address: "R. Antero de Quental 43, 1150-087 Lisboa",
  cross_street_1: "Rua Antero de Quintal",
  cross_street_2: "",
  artist: "Utopia63",
  name_description: "Women and flowers",
  other_location_note: "",
  latitude: "38.7225118",
  longitude: "-9.1386247",
  coordinates: "[-9.1386247, 38.7225118]",
  type: "Point",
  imageUrl: "utopia63.jpg",
  location: "    location: {\n      coordinates [-9.1386247, 38.7225118]"
},{

  neighborhood: "MOURARIA",
  address: "Cal�ada do Marqu�s de Tancos 3, 1100-340 Lisboa",
  cross_street_1: "",
  cross_street_2: "",
  artist: "Mar, Miguel Janu�rio, Nomen, Paulo Arraiano and Ram",
  name_description: "car park with several levels",
  other_location_note: "Ch�o do Loureiro, found between downtown and the castle",
  latitude: "38.7123757",
  longitude: "-9.1372043",
  coordinates: "[-9.1372043, 38.7123757]",
  type: "Point",
  imageUrl: "arte-chao-do-loureiro.jpg",
  location: "    location: {\n      coordinates [-9.1372043, 38.7123757]"
},{

  neighborhood: "MOURARIA",
  address: "Escadinhas de S�o Crist�v�o 14, 1100-213 Lisboa",
  cross_street_1: "Escadinhas de S�o Crist�v�o",
  cross_street_2: "Rua da Madalena",
  artist: "Unknown",
  name_description: "Fado inspired mural",
  other_location_note: "Church of St. Christopher in Mouraria",
  latitude: "38.7127502",
  longitude: "-9.1381962",
  coordinates: "[-9.1381962, 38.7127502]",
  type: "Point",
  imageUrl: "escadinhas-sao-cristovao.jpg",
  location: "    location: {\n      coordinates [-9.1381962, 38.7127502]"
},{

  neighborhood: "MOURARIA",
  address: "R. Achada 9A, 1100-179 Lisboa",
  cross_street_1: "Largo da Achada",
  cross_street_2: "",
  artist: "Andrea Tarli",
  name_description: "Older woman spray painting a man",
  other_location_note: "",
  latitude: "38.7130906",
  longitude: "-9.1374238",
  coordinates: "[-9.1374238, 38.7130906]",
  type: "Point",
  imageUrl: "street-art-mouraria.jpg",
  location: "    location: {\n      coordinates [-9.1374238, 38.7130906]"
},{

  neighborhood: "AVENIDA DA LIBERDADE",
  address: "Tv. de Santo Ant�o 23, 1150-265 Lisboa",
  cross_street_1: "Travessa de Santo Ant�o",
  cross_street_2: "Avenida da Liberdade",
  artist: "Mr. Dheo and Mosaik",
  name_description: "Am�lia Rodrigues",
  other_location_note: "",
  latitude: "38.7158588",
  longitude: "-9.1431402",
  coordinates: "[-9.1431402, 38.7158588]",
  type: "Point",
  imageUrl: "amalia.jpg",
  location: "    location: {\n      coordinates [-9.1431402, 38.7158588]"
},{

  neighborhood: "AVENIDA DA LIBERDADE",
  address: "Tv. Torel 21, 1150-122 Lisboa",
  cross_street_1: "",
  cross_street_2: "",
  artist: "Odeith, Pariz One, and Argon",
  name_description: "Many murals by different artists",
  other_location_note: "�Torel viewpoint",
  latitude: "38.719147",
  longitude: "-9.1427828",
  coordinates: "[-9.1427828, 38.719147]",
  type: "Point",
  imageUrl: "odeith.jpg",
  location: "    location: {\n      coordinates [-9.1427828, 38.719147]"
},{

  neighborhood: "SANTOS",
  address: "Rua do Instituto Industrial 2, 1200-225 Lisboa",
  cross_street_1: "Avenida 24 de Julho",
  cross_street_2: "",
  artist: "Bordalo II",
  name_description: "Fox created from found objects",
  other_location_note: "Ribeira Market",
  latitude: "38.70684",
  longitude: "-9.1525467",
  coordinates: "[-9.1525467, 38.70684]",
  type: "Point",
  imageUrl: "fox-bordalo-ii.jpg",
  location: "    location: {\n      coordinates [-9.1525467, 38.70684]"
},{

  neighborhood: "SANTOS",
  address: "R. Gaivotas 6, 1200-202 Lisboa",
  cross_street_1: "Rua das Gaivotas",
  cross_street_2: "",
  artist: "Vhils",
  name_description: "Man's face carved into building",
  other_location_note: "",
  latitude: "38.7092233",
  longitude: "-9.1531471",
  coordinates: "[-9.1531471, 38.7092233]",
  type: "Point",
  imageUrl: "vhils-santos.jpg",
  location: "    location: {\n      coordinates [-9.1531471, 38.7092233]"
},{

  neighborhood: "CAIS DO SODR�",
  address: "Cais G�s 19, 1200-161 Lisboa",
  cross_street_1: "Rua da Cintura do Porto de Lisboa",
  cross_street_2: "",
  artist: "Bicicleta Sem Freio",
  name_description: "Colorful mural on Clube Naval de Lisboa",
  other_location_note: "",
  latitude: "38.7056403",
  longitude: "-9.1497138",
  coordinates: "[-9.1497138, 38.7056403]",
  type: "Point",
  imageUrl: "bicicleta-sem-freio.jpg",
  location: "    location: {\n      coordinates [-9.1497138, 38.7056403]"
},{

  neighborhood: "AMADORA",
  address: "R. Carlos Duarte Cane�as 12, 2700-163 Amadora",
  cross_street_1: "Rua Antonio Duarte Canecas",
  cross_street_2: "",
  artist: "Odeith",
  name_description: "Fado singer Am�lia Rodrigues",
  other_location_note: "Amadora-Este subway station",
  latitude: "38.7586673",
  longitude: "-9.2206494",
  coordinates: "[-9.2206494, 38.7586673]",
  type: "Point",
  imageUrl: "amalia-rodrigues.jpg",
  location: "    location: {\n      coordinates [-9.2206494, 38.7586673]"
},{

  neighborhood: "AMADORA",
  address: "R. Ant�nio Duarte Cane�as 11, 2700-307 Amadora",
  cross_street_1: "",
  cross_street_2: "",
  artist: "Odeith",
  name_description: "Fado guitarist Carlos Paredes",
  other_location_note: "Amadora-Este subway station",
  latitude: "38.7582587",
  longitude: "-9.2204387",
  coordinates: "[-9.2204387, 38.7582587]",
  type: "Point",
  imageUrl: "carlos-paredes.jpg",
  location: "    location: {\n      coordinates [-9.2204387, 38.7582587]"
},{

  neighborhood: "AMADORA",
  address: "R. Ant�nio Duarte Cane�as 14 A, 2700-069 Amadora",
  cross_street_1: "",
  cross_street_2: "",
  artist: "Odeith",
  name_description: "Man Sitting on Chair",
  other_location_note: "Amadora-Este subway station",
  latitude: "38.7583494",
  longitude: "-9.2204383",
  coordinates: "[-9.2204383, 38.7583494]",
  type: "Point",
  imageUrl: "zeca-afonso.jpg",
  location: "    location: {\n      coordinates [-9.2204383, 38.7583494]"
},{

  neighborhood: "MARVILA",
  address: "R. F�brica de Material de Guerra 12, 1950-128 Lisboa",
  cross_street_1: "",
  cross_street_2: "",
  artist: "Vhils�and many others",
  name_description: "Vhils first face carving, many murals both inside and outside the walls of F�brica do Bra�o de Prata",
  other_location_note: "",
  latitude: "38.7586715",
  longitude: "-9.2228381",
  coordinates: "[-9.2228381, 38.7586715]",
  type: "Point",
  imageUrl: "vhils-fabrica-braco-de-prata.jpg",
  location: "    location: {\n      coordinates [-9.2228381, 38.7586715]"
},{

  neighborhood: "MARVILA",
  address: "R. Ant�nio Gede�o 7, 1950-373 Lisboa",
  cross_street_1: "",
  cross_street_2: "",
  artist: "Zecar Behamonte",
  name_description: "Fado inspired mural",
  other_location_note: "next to Marvila public library",
  latitude: "38.7432483",
  longitude: "-9.1029023",
  coordinates: "[-9.1029023, 38.7432483]",
  type: "Point",
  imageUrl: "street-art-zesar-behamonte.jpg",
  location: "    location: {\n      coordinates [-9.1029023, 38.7432483]"
},{

  neighborhood: "MARVILA",
  address: "R. Ant�nio Gede�o 7, 1950-373 Lisboa",
  cross_street_1: "",
  cross_street_2: "",
  artist: "God Mess",
  name_description: "Colorful Art Deco style",
  other_location_note: "across from Marvila public library",
  latitude: "38.7400916",
  longitude: "-9.1117969",
  coordinates: "[-9.1117969, 38.7400916]",
  type: "Point",
  imageUrl: "street-art-god-mess.jpg",
  location: "    location: {\n      coordinates [-9.1117969, 38.7400916]"
},{

  neighborhood: "MARVILA",
  address: "R. Alberto Jos� Pessoa 7, 1950-379 Lisboa",
  cross_street_1: "Rua Alberto Jos� Pessoa",
  cross_street_2: "",
  artist: "Colectivo Licuado",
  name_description: "Realistic man and woman",
  other_location_note: "",
  latitude: "38.7409958",
  longitude: "-9.1103405",
  coordinates: "[-9.1103405, 38.7409958]",
  type: "Point",
  imageUrl: "street-art-licuado.jpg",
  location: "    location: {\n      coordinates [-9.1103405, 38.7409958]"
},{

  neighborhood: "MARVILA",
  address: "R. Alberto Jos� Pessoa 6, 1950-379 Lisboa",
  cross_street_1: "",
  cross_street_2: "",
  artist: "Kobra",
  name_description: "Raoni, Caiap� tribe's chief",
  other_location_note: "",
  latitude: "38.7409606",
  longitude: "-9.1102714",
  coordinates: "[-9.1102714, 38.7409606]",
  type: "Point",
  imageUrl: "street-art-kobra.jpg",
  location: "    location: {\n      coordinates [-9.1102714, 38.7409606]"
},{

  neighborhood: "MARVILA",
  address: "R. Alberto Jos� Pessoa 7, 1950-379 Lisboa",
  cross_street_1: "",
  cross_street_2: "",
  artist: "Miguel Brum",
  name_description: "2 women and a snake",
  other_location_note: "next to ID 52",
  latitude: "38.7409958",
  longitude: "-9.1103405",
  coordinates: "[-9.1103405, 38.7409958]",
  type: "Point",
  imageUrl: "street-art-miguel-brum.jpg",
  location: "    location: {\n      coordinates [-9.1103405, 38.7409958]"
},{

  neighborhood: "MARVILA",
  address: "R. Alberto Jos� Pessoa 8, 1950-379 Lisboa",
  cross_street_1: "",
  cross_street_2: "",
  artist: "Kruella d'Enfer",
  name_description: "Tiger and birds in blue",
  other_location_note: "next to ID 53",
  latitude: "38.7413638",
  longitude: "-9.1089231",
  coordinates: "[-9.1089231, 38.7413638]",
  type: "Point",
  imageUrl: "street-art-kruella.jpg",
  location: "    location: {\n      coordinates [-9.1089231, 38.7413638]"
},{

  neighborhood: "MARVILA",
  address: "R. Alberto Jos� Pessoa 12, 1950-379 Lisboa",
  cross_street_1: "",
  cross_street_2: "",
  artist: "Steep",
  name_description: "Mystical Amazonian",
  other_location_note: "next to ID 54",
  latitude: "38.741606",
  longitude: "-9.1090436",
  coordinates: "[-9.1090436, 38.741606]",
  type: "Point",
  imageUrl: "street-art-steep.jpg",
  location: "    location: {\n      coordinates [-9.1090436, 38.741606]"
},{

  neighborhood: "MARVILA",
  address: "R. Alberto Jos� Pessoa 3, 1950-379 Lisboa",
  cross_street_1: "",
  cross_street_2: "",
  artist: "The Caver",
  name_description: "Man and dogs in red",
  other_location_note: "across from ID 55",
  latitude: "38.7418404",
  longitude: "-9.1088678",
  coordinates: "[-9.1088678, 38.7418404]",
  type: "Point",
  imageUrl: "street-art-the-caver.jpg",
  location: "    location: {\n      coordinates [-9.1088678, 38.7418404]"
}]
Streetart.create(streetart)
  .then(streetartFromDB => {
    console.log(`Created ${streetartFromDB.length} streetart`);
    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating streetart from the DB: ${err}`));