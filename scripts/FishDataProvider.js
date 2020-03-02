/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
  {
    img: 'https://www.fws.gov/fisheries/freshwater-fish-of-america/images/originals/west_temperate/Alligator_gar.png',
    species: 'Atrctosteus spatula',
    size: '200cm',
    name: 'Alligator gar',
    location: 'southwestern Ohio and southern Illinois to the Mississippi River drainage basin',
    diet: ['blue crabs', 'turtles', 'waterfowl', 'birds', 'small mammals']
  },
  {
    img: 'https://www.fws.gov/fisheries/freshwater-fish-of-america/images/originals/west_temperate/Humpback_chub_JosephRTomelleri_copyright.png',
    species: 'Gila cypha',
    size: '25cm',
    name: 'Humpback chub',
    location: 'Little Colorado River',
    diet: ['algae', 'plant debris', 'ﬁsh remains', 'Mormon crickets', 'terrestrial insects']
  },
  {
    img: 'https://www.fws.gov/fisheries/freshwater-fish-of-america/images/originals/east_temperate/Lake_sturgeon_TedWalke_PAFish&BoatCommission_copyright.png',
    species: 'Acipenser fulvescens',
    size: '140kg',
    name: 'Lake sturgeon',
    location: 'Mississippi River, Hudson Bay and the Great Lakes',
    diet: ['insect larvae', 'crayﬁsh', 'snails', 'clams', 'leeches'] 
  },
  {
    img: 'https://www.fws.gov/fisheries/freshwater-fish-of-america/images/originals/east_warm/Channel_catfish_DuaneRavenArt.png',
    species: 'Ictalurus punctatus',
    size: '57cm',
    name: 'Channel catfish',
    location: 'southern Canada into northern Mexico',
    diet: ['small ﬁsh', 'crustaceans (crayﬁsh)', 'clams and snails', 'aquatic insects', 'small mammals'] 
  },
  {
    img: 'https://www.fws.gov/fisheries/freshwater-fish-of-america/images/originals/west_cold/Arctic_grayling_JosephRTomelleri_copyright.png',
    species: 'Thymallus arcticus',
    size: '34.3',
    name: 'Arctic grayling',
    location: 'drainages of the Arctic Ocean, Hudson Bay and Northern Paciﬁc Ocean in North America and in Asia',
    diet: ['zooplankton', 'immature insects', 'surface insects', 'ﬁsh', 'ﬁsh eggs', 'lemmings', 'planktonic crustaceans'] 
  },
];

export const fishProvider = () => {
  return fishCollection.slice();
}