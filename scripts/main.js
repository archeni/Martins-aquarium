import init from './dialogs.js';

init.initializeDetailButtonEvents();

const fishInfo = [
  {
    img: 'https://www.fws.gov/fisheries/freshwater-fish-of-america/images/originals/west_temperate/Alligator_gar.png',
    species: 'Atrctosteus spatula',
    size: '200cm',
    name: 'Alligator gar',
    location: 'southwestern Ohio and southern Illinois to the Mississippi River drainage basin',
    diet: 'Alligator gar feed on blue crabs, turtles, waterfowl or other birds and small mammals', 
  },
  {
    img: 'https://www.fws.gov/fisheries/freshwater-fish-of-america/images/originals/west_temperate/Humpback_chub_JosephRTomelleri_copyright.png',
    species: 'Gila cypha',
    size: '25cm',
    name: 'Humpback chub',
    location: 'Little Colorado River',
    diet: 'algae, plant debris, ﬁsh remains, Mormon crickets and other terrestrial insects', 
  },
  {
    img: 'https://www.fws.gov/fisheries/freshwater-fish-of-america/images/originals/east_temperate/Lake_sturgeon_TedWalke_PAFish&BoatCommission_copyright.png',
    species: 'Acipenser fulvescens',
    size: '140kg',
    name: 'Lake sturgeon',
    location: 'Mississippi River, Hudson Bay and the Great Lakes',
    diet: 'Lake sturgeon are omnivorous and eat insect larvae, crayﬁsh, snails, clams and leeches', 
  },
  {
    img: 'https://www.fws.gov/fisheries/freshwater-fish-of-america/images/originals/east_warm/Channel_catfish_DuaneRavenArt.png',
    species: 'Ictalurus punctatus',
    size: '57cm',
    name: 'Channel catfish',
    location: 'southern Canada into northern Mexico',
    diet: 'small ﬁsh, crustaceans (crayﬁsh), clams and snails, aquatic insects and small mammals', 
  },
  {
    img: 'https://www.fws.gov/fisheries/freshwater-fish-of-america/images/originals/west_cold/Arctic_grayling_JosephRTomelleri_copyright.png',
    species: 'Thymallus arcticus',
    size: '34.3',
    name: 'Arctic grayling',
    location: 'drainages of the Arctic Ocean, Hudson Bay and Northern Paciﬁc Ocean in North America and in Asia',
    diet: 'Young grayling feed on zooplankton, with a gradual shift to immature insects as the grow older. Adult grayling feed on surface insects but also on ﬁsh, ﬁsh eggs, lemmings, and planktonic crustaceans', 
  },
];