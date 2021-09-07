//Classes
const warrior = { className: "Warrior", imgPath: "/img/Warrior.png" };
const hunter = { className: "Hunter", imgPath: "/img/Hunter.png" };
const deathKnight = {
  className: "Death Knight",
  imgPath: "/img/Death_Knight.png",
};
const mage = { className: "Mage", imgPath: "/img/Mage.png" };
const priest = { className: "Priest", imgPath: "/img/Priest.png" };
const monk = { className: "Monk", imgPath: "/img/Monk.png" };
const rogue = { className: "Rogue", imgPath: "/img/Rogue.png" };
const warlock = { className: "Warlock", imgPath: "/img/Warlock.png" };
const shaman = { className: "Shaman", imgPath: "/img/Shaman.png" };
const paladin = { className: "Paladin", imgPath: "/img/Paladin.png" };
const druid = { className: "Druid", imgPath: "/img/Druid.png" };
const demonHunter = {
  className: "Demon Hunter",
  imgPath: "/img/Demon_Hunter.png",
};
// END of Classes

export const classes = [
  warrior,
  hunter,
  deathKnight,
  mage,
  priest,
  monk,
  rogue,
  warlock,
  shaman,
  paladin,
  druid,
  demonHunter,
];

//Alliance Races
const humanM = {
  faction: "Alliance",
  raceName: "Human",
  gender: "Male",
  imgPath: "img/human_male.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Warlock",
    "Paladin",
  ],
};
const humanF = {
  faction: "Alliance",
  raceName: "Human",
  gender: "Male",
  imgPath: "/img/human_female.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Warlock",
    "Paladin",
  ],
};
const dwarfM = {
  faction: "Alliance",
  raceName: "Dwarf",
  gender: "Male",
  imgPath: "/img/Dwarf_male.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Warlock",
    "Shaman",
    "Paladin",
  ],
};
const dwarF = {
  faction: "Alliance",
  raceName: "Human",
  gender: "Male",
  imgPath: "/img/human_male.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Warlock",
    "Shaman",
    "Paladin",
  ],
};
const nightElfM = {
  faction: "Alliance",
  raceName: "Night Elf",
  gender: "Male",
  imgPath: "/img/night_elf_male.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Druid",
    "Demon Hunter",
  ],
};
const nightElfF = {
  faction: "Alliance",
  raceName: "Night Elf",
  gender: "Female",
  imgPath: "/img/night_elf_female.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Druid",
    "Demon Hunter",
  ],
};

const gnomeM = {
  faction: "Alliance",
  raceName: "Gnome",
  gender: "Male",
  imgPath: "/img/gnome_male.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Warlock",
  ],
};
const gnomeF = {
  faction: "Alliance",
  raceName: "Gnome",
  gender: "Female",
  imgPath: "/img/gnome_female.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Warlock",
  ],
};
const draeneiM = {
  faction: "Alliance",
  raceName: "Draenei",
  gender: "Male",
  imgPath: "/img/draenei_male.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Shaman",
    "Paladin",
  ],
};
const draeneiF = {
  faction: "Alliance",
  raceName: "Draenei",
  gender: "Female",
  imgPath: "/img/draenei_female.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Shaman",
    "Paladin",
  ],
};
const worgenM = {
  faction: "Alliance",
  raceName: "Worgen",
  gender: "Male",
  imgPath: "/img/worgen_male.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Warlock",
    "Druid",
  ],
};
const worgenF = {
  faction: "Alliance",
  raceName: "Worgen",
  gender: "Female",
  imgPath: "/img/worgen_female.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Warlock",
    "Druid",
  ],
};
const voidElfM = {
  faction: "Alliance",
  raceName: "Void Elf",
  gender: "Male",
  imgPath: "/img/void_elf_male.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Warlock",
  ],
};
const voidElfF = {
  faction: "Alliance",
  raceName: "Void Elf",
  gender: "Female",
  imgPath: "/img/void_elf_female.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Warlock",
  ],
};
const lightforgedM = {
  faction: "Alliance",
  raceName: "Lightforged Draenei",
  gender: "Male",
  imgPath: "/img/lightforged_male.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Paladin",
  ],
};
const lightforgedF = {
  faction: "Alliance",
  raceName: "Lightforged Draenei",
  gender: "Female",
  imgPath: "/img/lightforged_female.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Paladin",
  ],
};
const darkIronM = {
  faction: "Alliance",
  raceName: "Dark Iron Dwarf",
  gender: "Male",
  imgPath: "/img/darkiron_male.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Warlock",
    "Shaman",
    "Paladin",
  ],
};
const darkIronF = {
  faction: "Alliance",
  raceName: "Dark Iron Dwarf",
  gender: "Female",
  imgPath: "/img/darkiron_female.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Warlock",
    "Shaman",
    "Paladin",
  ],
};
const kultiranM = {
  faction: "Alliance",
  raceName: "Kul Tiran Human",
  gender: "Male",
  imgPath: "/img/kultiran_male.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Shaman",
    "Druid",
  ],
};
const kultiranF = {
  faction: "Alliance",
  raceName: "Kul Tiran Human",
  gender: "Female",
  imgPath: "/img/kultiran_female.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Shaman",
    "Druid",
  ],
};
const mechagnomeM = {
  faction: "Alliance",
  raceName: "Mechagnome",
  gender: "Male",
  imgPath: "/img/mechagnome_male.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Warlock",
  ],
};
const mechagnomeF = {
  faction: "Alliance",
  raceName: "Mechagnome",
  gender: "Male",
  imgPath: "/img/mechagnome_male.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Warlock",
  ],
};
const aPandarenM = {
  faction: "Alliance",
  raceName: "Pandaren",
  gender: "Male",
  imgPath: "/img/pandaren_male.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Shaman",
  ],
};

const aPandarenF = {
  faction: "Alliance",
  raceName: "Pandaren",
  gender: "Female",
  imgPath: "/img/pandaren_female.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Shaman",
  ],
};
//End of Alliance Races

export const allianceMales = [
  humanM,
  dwarfM,
  nightElfM,
  gnomeM,
  draeneiM,
  worgenM,
  voidElfM,
  lightforgedM,
  darkIronM,
  kultiranM,
  mechagnomeM,
  aPandarenM,
];
export const allianceFemales = [
  humanF,
  dwarF,
  nightElfF,
  gnomeF,
  draeneiF,
  worgenF,
  voidElfF,
  lightforgedF,
  darkIronF,
  kultiranF,
  mechagnomeF,
  aPandarenF,
];
//Horde Races

const orcM = {
  faction: "Horde",
  raceName: "Orc",
  gender: "Male",
  imgPath: "/img/orc_male.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Monk",
    "Rogue",
    "Warlock",
    "Shaman",
  ],
};
const orcF = {
  faction: "Horde",
  raceName: "Orc",
  gender: "Female",
  imgPath: "/img/orc_female.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Monk",
    "Rogue",
    "Warlock",
    "Shaman",
  ],
};
const undeadM = {
  faction: "Horde",
  raceName: "Undead",
  gender: "Male",
  imgPath: "/img/undead_male.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Warlock",
  ],
};
const undeadF = {
  faction: "Horde",
  raceName: "Undead",
  gender: "Female",
  imgPath: "/img/undead_female.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Warlock",
  ],
};
const taurenM = {
  faction: "Horde",
  raceName: "Tauren",
  gender: "Male",
  imgPath: "/img/tauren_male.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Priest",
    "Monk",
    "Shaman",
    "Paladin",
    "Druid",
  ],
};
const taurenF = {
  faction: "Horde",
  raceName: "Tauren",
  gender: "Female",
  imgPath: "/img/tauren_female.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Priest",
    "Monk",
    "Shaman",
    "Paladin",
    "Druid",
  ],
};
const trollM = {
  faction: "Horde",
  raceName: "Troll",
  gender: "Male",
  imgPath: "/img/troll_male.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Warlock",
    "Shaman",
    "Druid",
  ],
};
const trollF = {
  faction: "Horde",
  raceName: "Troll",
  gender: "Male",
  imgPath: "/img/troll_male.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Warlock",
    "Shaman",
    "Druid",
  ],
};
const bloodElfM = {
  faction: "Horde",
  raceName: "Blood Elf",
  gender: "Male",
  imgPath: "/img/blood_elf_male.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Warlock",
    "Paladin",
    "Demon Hunter",
  ],
};
const bloodElfF = {
  faction: "Horde",
  raceName: "Blood Elf",
  gender: "Female",
  imgPath: "/img/blood_elf_female.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Warlock",
    "Paladin",
    "Demon Hunter",
  ],
};
const goblinM = {
  faction: "Horde",
  raceName: "Goblin",
  gender: "Male",
  imgPath: "/img/goblin_male.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Rogue",
    "Warlock",
    "Shaman",
  ],
};
const goblinF = {
  faction: "Horde",
  raceName: "Goblin",
  gender: "Female",
  imgPath: "/img/goblin_female.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Rogue",
    "Warlock",
    "Shaman",
  ],
};
const nightborneM = {
  faction: "Horde",
  raceName: "Nightborne",
  gender: "Male",
  imgPath: "/img/nightborne_male.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Warlock",
  ],
};
const nightborneF = {
  faction: "Horde",
  raceName: "Nightborne",
  gender: "Female",
  imgPath: "/img/nightborne_female.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Warlock",
  ],
};
const highmountainM = {
  faction: "Horde",
  raceName: "Highmountain Tauren",
  gender: "Male",
  imgPath: "/img/highmountain_male.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Monk",
    "Shaman",
    "Druid",
  ],
};
const highmountainF = {
  faction: "Horde",
  raceName: "Highmountain Tauren",
  gender: "Female",
  imgPath: "/img/highmountain_female.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Monk",
    "Shaman",
    "Druid",
  ],
};
const magharM = {
  faction: "Horde",
  raceName: "Mag'har Orc",
  gender: "Male",
  imgPath: "/img/maghar_male.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Shaman",
  ],
};
const magharF = {
  faction: "Horde",
  raceName: "Mag'har Orc",
  gender: "Female",
  imgPath: "/img/maghar_female.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Shaman",
  ],
};
const zandalariM = {
  faction: "Horde",
  raceName: "Zandalari Troll",
  gender: "Male",
  imgPath: "/img/zandalari_male.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Shaman",
    "Paladin",
    "Druid",
  ],
};
const zandalariF = {
  faction: "Horde",
  raceName: "Zandalari Troll",
  gender: "Female",
  imgPath: "/img/zandalari_female.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Shaman",
    "Paladin",
    "Druid",
  ],
};
const vulperaM = {
  faction: "Horde",
  raceName: "Vulpera",
  gender: "Male",
  imgPath: "/img/vulpera_male.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Warlock",
    "Shaman",
  ],
};
const vulperaF = {
  faction: "Horde",
  raceName: "Vulpera",
  gender: "Female",
  imgPath: "/img/vulpera_female.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Warlock",
    "Shaman",
  ],
};
const hPandarenM = {
  faction: "Horde",
  raceName: "Pandaren",
  gender: "Male",
  imgPath: "/img/pandaren_male.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Shaman",
  ],
};

const hPandarenF = {
  faction: "Horde",
  raceName: "Pandaren",
  gender: "Female",
  imgPath: "/img/pandaren_female.png",
  availableClasses: [
    "Warrior",
    "Hunter",
    "Death Knight",
    "Mage",
    "Priest",
    "Monk",
    "Rogue",
    "Shaman",
  ],
};

// End of Horde Races
export const hordeMales = [
  orcM,
  undeadM,
  taurenM,
  trollM,
  bloodElfM,
  goblinM,
  nightborneM,
  highmountainM,
  magharM,
  zandalariM,
  vulperaM,
  hPandarenM,
];
export const hordeFemales = [
  orcF,
  undeadF,
  taurenF,
  trollF,
  bloodElfF,
  goblinF,
  nightborneF,
  highmountainF,
  magharF,
  zandalariF,
  vulperaF,
  hPandarenF,
];
