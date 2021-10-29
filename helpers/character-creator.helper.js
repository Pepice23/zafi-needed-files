//Classes
const warrior = {
  className: "Warrior",
  imgPath: "/src/assets/race-icons/Warrior.png",
};
const hunter = {
  className: "Hunter",
  imgPath: "/src/assets/race-icons/Hunter.png",
};
const deathKnight = {
  className: "Death Knight",
  imgPath: "/src/assets/race-icons/Death_Knight.png",
};
const mage = { className: "Mage", imgPath: "/src/assets/race-icons/Mage.png" };
const priest = {
  className: "Priest",
  imgPath: "/src/assets/race-icons/Priest.png",
};
const monk = { className: "Monk", imgPath: "/src/assets/race-icons/Monk.png" };
const rogue = {
  className: "Rogue",
  imgPath: "/src/assets/race-icons/Rogue.png",
};
const warlock = {
  className: "Warlock",
  imgPath: "/src/assets/race-icons/Warlock.png",
};
const shaman = {
  className: "Shaman",
  imgPath: "/src/assets/race-icons/Shaman.png",
};
const paladin = {
  className: "Paladin",
  imgPath: "/src/assets/race-icons/Paladin.png",
};
const druid = {
  className: "Druid",
  imgPath: "/src/assets/race-icons/Druid.png",
};
const demonHunter = {
  className: "Demon Hunter",
  imgPath: "/src/assets/race-icons/Demon_Hunter.png",
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
  imgPath: "src/assets/race-icons/human_male.png",
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
  imgPath: "/src/assets/race-icons/human_female.png",
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
  imgPath: "/src/assets/race-icons/dwarf_male.png",
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
  imgPath: "/src/assets/race-icons/dwarf_female.png",
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
  imgPath: "/src/assets/race-icons/night_elf_male.png",
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
  imgPath: "/src/assets/race-icons/night_elf_female.png",
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
  imgPath: "/src/assets/race-icons/gnome_male.png",
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
  imgPath: "/src/assets/race-icons/gnome_female.png",
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
  imgPath: "/src/assets/race-icons/draenei_male.png",
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
  imgPath: "/src/assets/race-icons/draenei_female.png",
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
  imgPath: "/src/assets/race-icons/worgen_male.png",
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
  imgPath: "/src/assets/race-icons/worgen_female.png",
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
  imgPath: "/src/assets/race-icons/void_elf_male.png",
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
  imgPath: "/src/assets/race-icons/void_elf_female.png",
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
  imgPath: "/src/assets/race-icons/lightforged_male.png",
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
  imgPath: "/src/assets/race-icons/lightforged_female.png",
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
  imgPath: "/src/assets/race-icons/dark_iron_male.png",
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
  imgPath: "/src/assets/race-icons/dark_iron_female.png",
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
  imgPath: "/src/assets/race-icons/kultiran_male.png",
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
  imgPath: "/src/assets/race-icons/kultiran_female.png",
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
  imgPath: "/src/assets/race-icons/mechagnome_male.png",
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
  imgPath: "/src/assets/race-icons/mechagnome_male.png",
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
  imgPath: "/src/assets/race-icons/pandaren_male.png",
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
  imgPath: "/src/assets/race-icons/pandaren_female.png",
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
  imgPath: "/src/assets/race-icons/orc_male.png",
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
  imgPath: "/src/assets/race-icons/orc_female.png",
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
  imgPath: "/src/assets/race-icons/undead_male.png",
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
  imgPath: "/src/assets/race-icons/undead_female.png",
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
  imgPath: "/src/assets/race-icons/tauren_male.png",
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
  imgPath: "/src/assets/race-icons/tauren_female.png",
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
  imgPath: "/src/assets/race-icons/troll_male.png",
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
  imgPath: "/src/assets/race-icons/troll_female.png",
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
  imgPath: "/src/assets/race-icons/blood_elf_male.png",
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
  imgPath: "/src/assets/race-icons/blood_elf_female.png",
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
  imgPath: "/src/assets/race-icons/goblin_male.png",
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
  imgPath: "/src/assets/race-icons/goblin_female.png",
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
  imgPath: "/src/assets/race-icons/nightborne_male.png",
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
  imgPath: "/src/assets/race-icons/nightborne_female.png",
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
  imgPath: "/src/assets/race-icons/highmountain_male.png",
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
  imgPath: "/src/assets/race-icons/highmountain_female.png",
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
  imgPath: "/src/assets/race-icons/maghar_male.png",
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
  imgPath: "/src/assets/race-icons/maghar_female.png",
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
  imgPath: "/src/assets/race-icons/zandalari_male.png",
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
  imgPath: "/src/assets/race-icons/zandalari_female.png",
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
  imgPath: "/src/assets/race-icons/vulpera_male.png",
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
  imgPath: "/src/assets/race-icons/vulpera_female.png",
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
  imgPath: "/src/assets/race-icons/pandaren_male.png",
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
  imgPath: "/src/assets/race-icons/pandaren_female.png",
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
