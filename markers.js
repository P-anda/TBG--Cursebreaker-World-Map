// Define labels with associated markers
const markers = [


    /*///////////////////////////////////////////////////////////////////////////
     __..___.__ .  .._. __ .___ __.
    (__ [__ [__)\  / | /  `[__ (__ 
    .__)[___|  \ \/ _|_\__.[___.__)

    *////////////////////////////////////////////////////////////////////////////
    {
        name: 'service_bank',
        image: 'images/service/bank.png',
        markers: [
            // Haywind
            { name: 'Haywind Bank', category: 'service_bank', coords: [581, 474] },

            // Grainwater
            { name: 'Grainwater Bank', category: 'service_bank', coords: [780, 320] },
            // Fog's Dwindling
            { name: 'Mistylake Bank', category: 'service_bank', coords: [994, 622] },
        ]
    },
    {
        name: 'service_fasttravel',
        image: 'images/service/fasttravel.png',
        markers: [
            // Haywind
            { name: 'Fast Travel: North Haywind Stables', category: 'service_fasttravel', coords: [503, 546] },
            // Timberwall Village
            { name: 'Fast Travel: Timberwell Village', category: 'service_fasttravel', coords: [902, 440] },
            //Grainwater
            { name: 'Fast Travel: Grainwater Village', category: 'service_fasttravel', coords: [770, 364] },
            // The Mistywoods
            { name: 'Fast Travel: Fog\'s Dwindling (Mistywood)', category: 'service_fasttravel', coords: [994, 663] },
            { name: 'Fast Travel: Portal Of The Wolf (Mistywood)', category: 'service_fasttravel', coords: [1019, 732] },
            { name: 'Fast Travel: Portal Of Spells (Mistywood)', category: 'service_fasttravel', coords: [1196, 715] },
        ]
    },
    {
        name: 'service_trainer',
        image: 'images/service/trainer.png',
        markers: [
            // Haywind
            { name: 'Trainers', category: 'service_trainer', coords: [562, 479] },
        ]
    },
    {
        name: 'service_house',
        image: 'images/service/house.png',
        hiddenByDefault: true,
        markers: [
            // Spruce Shades Rest
            { name: 'Dilapidated Shack (Spruce Shade Rest)', category: 'service_house', coords: [1056, 380] },
            // Timberwell
            { name: 'Isolated Cabin (Timberwell)', category: 'service_house', coords: [1013, 409] },
            // Grain Water
            { name: 'Quaint Village House (Grainwater)', category: 'service_house', coords: [746, 334] },
            // Haywind Outskirts
            { name: 'Riverside Warehouse (North Haywind Outskirts)', category: 'service_house', coords: [652, 593] },
            
        ]
    },
    {
        name: 'service_well',
        image: 'images/service/well.png',
        hiddenByDefault: true,
        markers: [
            // Spruce Shades Rest
            { name: 'Well', category: 'service_well', coords: [1033, 341] },
            { name: 'Well', category: 'service_well', coords: [1140, 353] },
            // Timberwall Village
            { name: 'Well', category: 'service_well', coords: [939, 433] },
            // Grainwater
            { name: 'Well', category: 'service_well', coords: [764, 307] },
            // Haywind
            { name: 'Well', category: 'service_well', coords: [540, 431] },
            // River Aure Banks
            { name: 'Well', category: 'service_well', coords: [675, 726] },
            // Aurfield
            { name: 'Well', category: 'service_well', coords: [701, 773] },
        ]
    },

    /*///////////////////////////////////////////////////////////////////////////
     __..___..__..__ .___ __.
    (__   |  |  |[__)[__ (__ 
    .__)  |  |__||  \[___.__)

    *////////////////////////////////////////////////////////////////////////////
    {
        name: 'store_general',
        image: 'images/store/general.png',
        markers: [
            // Haywind
            { name: 'General Store', category: 'store_general', coords: [579, 443] },
            //Grainwater
            { name: 'Grainwater General Store', category: 'store_general', coords: [795, 295] },
            // Spurce Shade
            { name: 'Spruce Shade General Store', category: 'store_general', coords: [1035, 318] },
            { name: 'Scavenger', category: 'store_general', coords: [1107, 288] }, ///////////////// ADD TO MISC?
            // Ratcliffe Village
            { name: 'Ratcliffe General Store', category: 'store_general', coords: [787, 150] },
            // Aurfield
            { name: 'Aurfield General Store', category: 'store_general', coords: [706, 791] },
            // Fog's Dwindling
            { name: 'Mistywood General Goods', category: 'store_general', coords: [983, 636] },
        ]
    },
    {
        name: 'store_weapon',
        image: 'images/store/weapon.png',
        markers: [
            // Haywind
            { name: 'Gerard\'s Weapons', category: 'store_weapon', coords: [588, 454] },
            // Ratcliffe Village
            { name: 'Ratcliffe Swords', category: 'store_weapon', coords: [778, 150] },
            // Fog's Dwindling
            { name: 'Fog\s Dwindling Weapon Merchant', category: 'store_weapon', coords: [978, 647] },
        ]
    },
    {
        name: 'store_archery',
        image: 'images/store/archery.png',
        markers: [
            // Haywind
            { name: 'Katelyn\'s Bows', category: 'store_archery', coords: [579, 452] },
            // Fog's Dwindling
            { name: 'The Goblin Hunt Archery', category: 'store_archery', coords: [1000, 637] },
        ]
    },
    {
        name: 'store_armor',
        image: 'images/store/armor.png',
        markers: [
            // Haywind
            { name: 'Haywind Armorer', category: 'store_armor', coords: [602, 472] },
        ]
    },
    {
        name: 'store_blacksmith',
        image: 'images/store/blacksmith.png',
        markers: [
            // Timberwall Village
            { name: 'Aaron Summervale', category: 'store_blacksmith', coords: [941, 447] },
            // Haywind
            { name: 'Forvan\'s Smithy', category: 'store_blacksmith', coords: [515, 547] },
        ]
    },
    {
        name: 'store_tailor',
        image: 'images/store/tailor.png',
        markers: [
            // Haywind
            { name: 'Haywind Seamstress', category: 'store_tailor', coords: [592, 470] },
            // Shearston Estate
            { name: 'Shearston Tailoring', category: 'store_tailor', coords: [432, 615] },
        ]
    },
    {
        name: 'store_hunter',
        image: 'images/store/hunter.png',
        markers: [
            // Haywind
            { name: 'Hunter', category: 'store_hunter', coords: [595, 475] },
        ]
    },
    {
        name: 'store_fishermen',
        image: 'images/store/fishermen.png',
        markers: [
            // Grainwater
            { name: 'Grainwater Fish Stall', category: 'store_fishermen', coords: [783, 296] },
            // Aurfield
            { name: 'Aurfield Fish Vendor', category: 'store_fishermen', coords: [695, 784] },
        ]
    },
    {
        name: 'store_alchemist',
        image: 'images/store/alchemist.png',
        markers: [
            // Haywind
            { name: 'Sporelake Alchemy', category: 'store_alchemist', coords: [503, 465] },
            { name: 'Haywind Potion Store', category: 'store_alchemist', coords: [547, 428] }, //////// edit
            // Grainwater
            { name: 'Miranda\'s Tonics', category: 'store_alchemist', coords: [780, 362] },
            // Fog's Dwindling
            { name: 'Traveling Mage', category: 'store_alchemist', coords: [978, 665] },
        ]
    },
    {
        name: 'store_magic',
        image: 'images/store/magic.png',
        markers: [
            // Haywind
            { name: 'Hydrobor Curios', category: 'store_magic', coords: [612.17, 511.15] },
            { name: 'Hydrobor Accessories', category: 'store_magic', coords: [615.96, 498.78] },
            { name: 'Hydrobor Spellwood', category: 'store_magic', coords: [612.17, 487.62] },
        ]
    },
    {
        name: 'store_herbalist',
        image: 'images/store/herbalist.png',
        markers: [
            // Haywind
            { name: 'Mareya\'s Healing Herbs', category: 'store_herbalist', coords: [519, 458] },
        ]
    },
    {
        name: 'store_tavern',
        image: 'images/store/tavern.png',
        markers: [
            // Haywind
            { name: 'The Fat Pony\'s Tavern', category: 'store_tavern', coords: [498, 566] },
            // Haywind Outskirts
            { name: 'The Singing Sparrow Tavern', category: 'store_tavern', coords: [610, 359] },
            //Timberwell Village
            { name: 'The Thirsty Lumberjack', category: 'store_tavern', coords: [895, 447] },
            // Grainwater
            { name: 'Grainwater Tavern', category: 'store_tavern', coords: [761, 364] },
            // Ratcliffe
            { name: 'The Failing Pick', category: 'store_tavern', coords: [776, 134] },
            // Fog's Dwindling
            { name: 'The Cloudy Swig', category: 'store_tavern', coords: [973, 660] },
        ]
    },
    {
        name: 'store_jeweler',
        image: 'images/store/jeweler.png',
        markers: [
            // Haywind
            { name: 'Haywind Jeweler Store', category: 'store_jeweler', coords: [506, 447] },
            // Ratcliffe
            { name: 'Ratcliffe Charms Peddler', category: 'store_jeweler', coords: [756, 139] },
        ]
    },
    {
        name: 'store_furnature',
        image: 'images/store/furnature.png',
        markers: [
            // Haywind
            { name: 'Thom\'s Store For Proud Homeowners', category: 'store_furnature', coords: [521, 445] },
        ]
    },
    {
        name: 'store_grocery',
        image: 'images/store/grocery.png',
        markers: [
            // Haywind
            { name: 'Haywind Meat Stall', category: 'store_grocery', coords: [568, 456] },
            { name: 'Haywind Vegetable Stall', category: 'store_grocery', coords: [546, 443] },
            // Grainwater
            { name: 'Grainwater Grocery Store', category: 'store_grocery', coords: [802, 308] },
            // Fog's Dwindling
            { name: 'Forestland Foods', category: 'store_grocery', coords: [1001, 647] },
        ]
    },

    /*///////////////////////////////////////////////////////////////////////////
    .  ..__..__ .  ..__ .___.  . __ .  ..___ __.
    |  ||  |[__)|_/ [__)[__ |\ |/  `|__|[__ (__ 
    |/\||__||  \|  \[__)[___| \|\__.|  |[___.__)

    *////////////////////////////////////////////////////////////////////////////
    {
        name: 'workbench_forge',
        image: 'images/workshop/forge.png',
        markers: [
            // Haywind
            { name: 'Forge', category: 'workbench_forge', coords: [521, 547] },
            { name: 'Forge', category: 'workbench_forge', coords: [551, 403] },
            // Timberwall Village
            { name: 'Forge', category: 'workbench_forge', coords: [935, 447] },
        ]
    },
    {
        name: 'workbench_anvil',
        image: 'images/workshop/anvil.png',
        markers: [
            // Haywind
            { name: 'Anvil', category: 'workbench_anvil', coords: [518, 542] },
            { name: 'Anvil', category: 'workbench_anvil', coords: [553, 398] },
            // Timberwall Village
            { name: 'Anvil', category: 'workbench_anvil', coords: [938, 442] },
            // Fog's Dwindling
            { name: 'Anvil', category: 'workbench_anvil', coords: [969, 641] },
        ]
    },
    {
        name: 'workbench_crafting',
        image: 'images/workshop/crafting.png',
        markers: [
            // Haywind
            { name: 'Carpenters\' Workbench', category: 'workbench_crafting', coords: [602, 420] },
            { name: 'Carpenters\' Workbench', category: 'workbench_crafting', coords: [542, 398] },
            // Grainwater
            { name: 'Carpenters\' Workbench', category: 'workbench_crafting', coords: [770, 322] },
            // Fog's Dwindling
            { name: 'Carpenters\' Workbench', category: 'workbench_crafting', coords: [1004, 622] },
        ]
    },
    {
        name: 'workbench_cooking',
        image: 'images/workshop/cooking.png',
        markers: [
            // Haywind
            { name: 'Stove', category: 'workbench_cooking', coords: [495, 571] },
            { name: 'Stove', category: 'workbench_cooking', coords: [548, 398] },
            // Haywind Outskirts
            { name: 'Stove', category: 'workbench_cooking', coords: [689, 418] },
            { name: 'Stove', category: 'workbench_cooking', coords: [676, 448] },
            { name: 'Roasting Stick', category: 'workbench_cooking', coords: [631, 607] },
            // Spruce Shades Rest
            { name: 'Roasting Stick', category: 'workbench_cooking', coords: [1047, 388] },
            { name: 'Stove', category: 'workbench_cooking', coords: [1027, 336] },
            // Timberwall Village
            { name: 'Stove', category: 'workbench_cooking', coords: [949, 447] },
            { name: 'Stove', category: 'workbench_cooking', coords: [898, 452] },
            // Grainwater
            { name: 'Stove', category: 'workbench_cooking', coords: [775, 294] },
            // Ratcliffe
            { name: 'Stove', category: 'workbench_cooking', coords: [773, 129] },
            // Aurfield
            { name: 'Stove', category: 'workbench_cooking', coords: [685, 780] },
            // Fog's Dwindling
            { name: 'Stove', category: 'workbench_cooking', coords: [970, 665] },
        ]
    },
    {
        name: 'workbench_tailor',
        image: 'images/workshop/tailor.png',
        markers: [
            // Haywind
            { name: 'Tailor Workbench', category: 'workbench_tailor', coords: [589, 475] },
            { name: 'Tailor Workbench', category: 'workbench_tailor', coords: [510, 486] },
            { name: 'Tailor Workbench', category: 'workbench_tailor', coords: [540, 403] },
            // Spruce Shades Rest
            { name: 'Tailor Workbench', category: 'workbench_tailor', coords: [1042, 353] },
        ]
    },
    {
        name: 'workbench_alchemy',
        image: 'images/workshop/alchemy.png',
        markers: [
            // Haywind
            { name: 'Alchemy Workbench', category: 'workbench_alchemy', coords: [497, 465] },
            { name: 'Alchemy Workbench', category: 'workbench_alchemy', coords: [545, 403] },
            // Timerwell Village
            { name: 'Alchemy Workbench', category: 'workbench_alchemy', coords: [984, 404] },
        ]
    },

    /*///////////////////////////////////////////////////////////////////////////
    .___.  ..___..__ .__..  . __ .___ __.
    [__ |\ |  |  [__)[__]|\ |/  `[__ (__ 
    [___| \|  |  |  \|  || \|\__.[___.__)
                                     
    *////////////////////////////////////////////////////////////////////////////
    {
        name: 'entrance_cave',
        image: 'images/entrance/cave.png',
        hiddenByDefault: true,
        markers: [
            // Spruce Shades Forest
            { name: 'Troll Cave', category: 'entrance_cave', coords: [923, 381] },
            // Ratcliffe Village
            { name: 'Ratcliffe Mines', category: 'entrance_cave', coords: [744, 141] },
            // River Aure Banks
            { name: 'Ratcliffe Mines', category: 'entrance_cave', coords: [744, 141] },
            // The Mistywood
            { name: 'Underground Tunnel', category: 'entrance_cave', coords: [905, 863] },
            { name: 'Underground Tunnel', category: 'entrance_cave', coords: [958, 814] },
        ]
    },
    {
        name: 'entrance_dungeon',
        image: 'images/entrance/cave.png',
        hiddenByDefault: true,
        markers: [
            // Spruce Shades Rest
            { name: 'Halls Of The Dead', category: 'entrance_dungeon', coords: [1112, 310] },
            { name: 'Spruce Shade Crypt', category: 'entrance_dungeon', coords: [1013, 318] },
        ]
    },

    /*///////////////////////////////////////////////////////////////////////////
    .  ..__..__..__ 
    |  ||  ||  ||  \
    |/\||__||__||__/
                
    *////////////////////////////////////////////////////////////////////////////
    {
        name: 'wood_spruce',
        image: 'images/resource/wood_spruce.png',
        hiddenByDefault: true,
        markers: [
            // Shearston Estate
            { name: 'Spruce', category: 'wood_spruce', coords: [412, 567] },
            // Spruce Shades Rest
            { name: 'Spruce', category: 'wood_spruce', coords: [1151, 339] },
            { name: 'Spruce', category: 'wood_spruce', coords: [1006, 479] },
            // Timberwell Village
            { name: 'Spruce', category: 'wood_spruce', coords: [950, 490] },
            { name: 'Spruce', category: 'wood_spruce', coords: [921, 420] },
            // Haywoods
            { name: 'Spruce', category: 'wood_spruce', coords: [834, 268] },
            { name: 'Spruce', category: 'wood_spruce', coords: [853, 361] },
            // Aurfield
            { name: 'Spruce', category: 'wood_spruce', coords: [649, 779] },
        ]
    },
    {
        name: 'wood_glowingwillow',
        image: 'images/resource/wood_glowingwillow.png',
        hiddenByDefault: true,
        markers: [
        ]
    },
    {
        name: 'wood_wildsfir',
        image: 'images/resource/wood_wildsfir.png',
        hiddenByDefault: true,
        markers: [
        ]
    },
    {
        name: 'wood_oak',
        image: 'images/resource/wood_oak.png',
        hiddenByDefault: true,
        markers: [
            // Haywind
            { name: 'Oak', category: 'wood_oak', coords: [523, 534] },
            // Shearston Estate
            { name: 'Oak', category: 'wood_oak', coords: [455, 607] },
            // Haywoods
            { name: 'Oak', category: 'wood_oak', coords: [875, 421] },
            { name: 'Oak', category: 'wood_oak', coords: [857, 367] },
            // Haywind Outskirts
            { name: 'Oak', category: 'wood_oak', coords: [672, 462] },
            { name: 'Oak', category: 'wood_oak', coords: [653, 519] },
            // Aurfield
            { name: 'Oak', category: 'wood_oak', coords: [653, 781] },
            // River Aure Banks
            { name: 'Oak', category: 'wood_oak', coords: [625, 697] },
        ]
    },

    /*///////////////////////////////////////////////////////////////////////////
    .__..__ .___
    |  |[__)[__ 
    |__||  \[___

    *////////////////////////////////////////////////////////////////////////////
    {
        name: 'ore_copper',
        image: 'images/resource/ore_copper.png',
        hiddenByDefault: true,
        markers: [
            // The Green Coppice
            { name: 'Copper Ore', category: 'ore_copper', coords: [481, 626] },
            // Spruce Shades Rest
            { name: 'Copper Ore', category: 'ore_copper', coords: [1043, 331] },
            // Timberwell Village
            { name: 'Copper Ore', category: 'ore_copper', coords: [978, 460] },
            // Haywoods
            { name: 'Copper Ore', category: 'ore_copper', coords: [867, 477] },
            { name: 'Copper Ore', category: 'ore_copper', coords: [840, 283] },
            // Ratcliffe Village
            { name: 'Copper Ore', category: 'ore_copper', coords: [751, 130] },
            // River Aure Banks
            { name: 'Copper Ore', category: 'ore_copper', coords: [634, 707] },
            { name: 'Copper Ore', category: 'ore_copper', coords: [649, 707] },
        ]
    },
    {
        name: 'ore_iron',
        image: 'images/resource/ore_iron.png',
        hiddenByDefault: true,
        markers: [
            // River Aure Banks
            { name: 'Iron Ore', category: 'ore_iron', coords: [642, 703] },
        ]
    },

    /*///////////////////////////////////////////////////////////////////////////
    .___._. __..  .
    [__  | (__ |__|
    |   _|_.__)|  |
               
    *////////////////////////////////////////////////////////////////////////////
    {
        name: 'fish_goopy',
        image: 'images/resource/fish_goopy.png',
        hiddenByDefault: true,
        markers: [
            // Mossneedle Pond
            { name: 'Wild Goopy', category: 'fish_goopy', coords: [1015, 440] },
            { name: 'Wild Goopy', category: 'fish_goopy', coords: [1001, 432] },
            { name: 'Wild Goopy', category: 'fish_goopy', coords: [967, 409] },
            // Haywind Fields
            { name: 'Wild Goopy', category: 'fish_goopy', coords: [748, 424] },
            // Haywind Outskirts
            { name: 'Wild Goopy', category: 'fish_goopy', coords: [641, 479] },
            { name: 'Wild Goopy', category: 'fish_goopy', coords: [646, 461] },
            { name: 'Wild Goopy', category: 'fish_goopy', coords: [636, 543] },
            { name: 'Wild Goopy', category: 'fish_goopy', coords: [634, 535] },
            { name: 'Wild Goopy', category: 'fish_goopy', coords: [639, 518] },
            // Aurfield
            { name: 'Wild Goopy', category: 'fish_goopy', coords: [652, 756] },
        ]
    },
    {
        name: 'fish_pebble',
        image: 'images/resource/fish_pebble.png',
        hiddenByDefault: true,
        markers: [
            // Haywind
            { name: 'Pebble Sturgeon', category: 'fish_pebble', coords: [512, 516] },
            { name: 'Pebble Sturgeon', category: 'fish_pebble', coords: [601, 588] },
            // Haywind Outskirts
            { name: 'Pebble Sturgeon', category: 'fish_pebble', coords: [628, 569] },
            { name: 'Pebble Sturgeon', category: 'fish_pebble', coords: [634, 582] },
            // Mossneedle Pond
            { name: 'Pebble Sturgeon', category: 'fish_pebble', coords: [1035, 452] },
            // Fog's Dwindling
            { name: 'Pebble Sturgeon', category: 'fish_pebble', coords: [957, 657] },
            { name: 'Pebble Sturgeon', category: 'fish_pebble', coords: [953, 645] },
            { name: 'Pebble Sturgeon', category: 'fish_pebble', coords: [961, 631] },
        ]
    },

    /*///////////////////////////////////////////////////////////////////////////
     __ .__ .__..__  __.
    /  `[__)|  |[__)(__ 
    \__.|  \|__||   .__)
                     
    *////////////////////////////////////////////////////////////////////////////
    {
        name: 'crop_cabbage',
        image: 'images/resource/crop_cabbage.png',
        hiddenByDefault: true,
        markers: [

            // Haywind
            { name: 'Cabbage', category: 'crop_cabbage', coords: [610, 440] },
            // The Harvest Festival
            { name: 'Cabbage', category: 'crop_cabbage', coords: [638, 326] },
            // Aure Cliffs
            { name: 'Cabbage', category: 'crop_cabbage', coords: [526, 603] },
            // Fog's Dwindling
            { name: 'Cabbage', category: 'crop_cabbage', coords: [1008, 631] },
            { name: 'Cabbage', category: 'crop_cabbage', coords: [974, 615] },
        ]
    },
    {
        name: 'crop_carrot',
        image: 'images/resource/crop_carrot.png',
        hiddenByDefault: true,
        markers: [
            // Haywind
            { name: 'Carrot', category: 'crop_carrot', coords: [614, 440] },
            // Haywind Outskirts
            { name: 'Carrot', category: 'crop_carrot', coords: [677, 443] },
            // Fog's Dwindling
            { name: 'Carrot', category: 'crop_carrot', coords: [992, 685] },
        ]
    },
    {
        name: 'crop_corn',
        image: 'images/resource/crop_corn.png',
        hiddenByDefault: true,
        markers: [
            // Haywind Outskirts
            { name: 'Corn', category: 'crop_corn', coords: [672, 492] },
            // Fog's Dwindling
            { name: 'Corn', category: 'crop_corn', coords: [1003, 631] },
            { name: 'Corn', category: 'crop_corn', coords: [968, 611] },
        ]
    },
    {
        name: 'crop_potato',
        image: 'images/resource/crop_potato.png',
        hiddenByDefault: true,
        markers: [
            // The Harvest Festival
            { name: 'Potato', category: 'crop_potato', coords: [636, 320] },
            // River Aure Banks
            { name: 'Potato', category: 'crop_potato', coords: [676, 678] },
        ]
    },
    {
        name: 'crop_barley',
        image: 'images/resource/crop_barley.png',
        hiddenByDefault: true,
        markers: [
            // Ashenside Fields
            { name: 'Barley', category: 'crop_barley', coords: [379, 552] },
            // Haywind Fields
            { name: 'Barley', category: 'crop_barley', coords: [713, 452] },
            { name: 'Barley', category: 'crop_barley', coords: [679, 522] },
            { name: 'Barley', category: 'crop_barley', coords: [706, 532] },
            { name: 'Barley', category: 'crop_barley', coords: [712, 554] },
        ]
    },
    {
        name: 'crop_egg',
        image: 'images/resource/food_egg.png',
        hiddenByDefault: true,
        markers: [
            // River Aure Banks
            { name: 'Egg', category: 'crop_egg', coords: [684, 639] },
        ]
    },

    /*///////////////////////////////////////////////////////////////////////////
    .  ..___.__ .__  __.
    |__|[__ [__)[__)(__ 
    |  |[___|  \[__).__)
                    
    *////////////////////////////////////////////////////////////////////////////
    {
        name: 'herb_dandelion',
        image: 'images/resource/herb_dandelions.png',
        hiddenByDefault: true,
        markers: [
            // Shearston Estate
            { name: 'Dandelions', category: 'herb_dandelion', coords: [409, 582] },
            // Ashenside Fields
            { name: 'Dandelions', category: 'herb_dandelion', coords: [482, 539] },
            { name: 'Dandelions', category: 'herb_dandelion', coords: [444, 520] },
            { name: 'Dandelions', category: 'herb_dandelion', coords: [422, 494] },
            // Haywind
            { name: 'Dandelions', category: 'herb_dandelion', coords: [413, 444] },
            // Spruce Shades Rest
            { name: 'Dandelions', category: 'herb_dandelion', coords: [1033, 386] },
            { name: 'Dandelions', category: 'herb_dandelion', coords: [1046, 341] },
            { name: 'Dandelions', category: 'herb_dandelion', coords: [1108, 326] },
            { name: 'Dandelions', category: 'herb_dandelion', coords: [1113, 346] },
            { name: 'Dandelions', category: 'herb_dandelion', coords: [1129, 362] },
            { name: 'Dandelions', category: 'herb_dandelion', coords: [1140, 337] },
            // Spruce Shades Forest
            { name: 'Dandelions', category: 'herb_dandelion', coords: [1003, 371] },
            // Timberwall Village
            { name: 'Dandelions', category: 'herb_dandelion', coords: [930, 405] },
            // Haywoods
            { name: 'Dandelions', category: 'herb_dandelion', coords: [840, 446] },
            { name: 'Dandelions', category: 'herb_dandelion', coords: [817, 288] },
            { name: 'Dandelions', category: 'herb_dandelion', coords: [819, 377] },
            // Haywind Fields
            { name: 'Dandelions', category: 'herb_dandelion', coords: [744, 430] },
            { name: 'Dandelions', category: 'herb_dandelion', coords: [743, 482] },
            // Haywind Outskirts
            { name: 'Dandelions', category: 'herb_dandelion', coords: [674, 482] },
            { name: 'Dandelions', category: 'herb_dandelion', coords: [685, 574] },
            { name: 'Dandelions', category: 'herb_dandelion', coords: [694, 256] },
            { name: 'Dandelions', category: 'herb_dandelion', coords: [661, 356] },
            // The Harvest Festival
            { name: 'Dandelions', category: 'herb_dandelion', coords: [633, 283] },
            // Grainwater
            { name: 'Dandelions', category: 'herb_dandelion', coords: [778, 376] },
            { name: 'Dandelions', category: 'herb_dandelion', coords: [749, 351] },
            // East Aure Banks
            { name: 'Dandelions', category: 'herb_dandelion', coords: [795, 266] },
            { name: 'Dandelions', category: 'herb_dandelion', coords: [747, 241] },
            // Ratcliffe Village
            { name: 'Dandelions', category: 'herb_dandelion', coords: [783, 176] },
            // Foresaken Woods
            { name: 'Dandelions', category: 'herb_dandelion', coords: [836, 157] },
            // Fog's Dwindling
            { name: 'Dandelions', category: 'herb_dandelion', coords: [931, 699] },
            { name: 'Dandelions', category: 'herb_dandelion', coords: [948, 708] },
            { name: 'Dandelions', category: 'herb_dandelion', coords: [987, 694] },
            { name: 'Dandelions', category: 'herb_dandelion', coords: [999, 683] },

        ]
    },
    {
        name: 'herb_redberry',
        image: 'images/resource/herb_redberry.png',
        hiddenByDefault: true,
        markers: [
            // Haywind
            { name: 'Redberries', category: 'herb_redberry', coords: [512, 536] },
            // Shearston Estate
            { name: 'Redberries', category: 'herb_redberry', coords: [436, 606] },
            { name: 'Redberries', category: 'herb_redberry', coords: [404, 574] },
            // Spruce Shades Rest
            { name: 'Redberries', category: 'herb_redberry', coords: [1025, 322] },
            { name: 'Redberries', category: 'herb_redberry', coords: [1075, 323] },
            { name: 'Redberries', category: 'herb_redberry', coords: [1103, 310] },
            { name: 'Redberries', category: 'herb_redberry', coords: [1121, 330] },
            // Timberwall Village
            { name: 'Redberries', category: 'herb_redberry', coords: [942, 414] },
            { name: 'Redberries', category: 'herb_redberry', coords: [991, 403] },
            { name: 'Redberries', category: 'herb_redberry', coords: [989, 408] },
            // Haywind Outskirts
            { name: 'Redberries', category: 'herb_redberry', coords: [669, 453] },
            // Grainwater
            { name: 'Redberries', category: 'herb_redberry', coords: [774, 369] },
            // River Aure Banks
            { name: 'Redberries', category: 'herb_redberry', coords: [628, 691] },
            // Fog's Dwindling
            { name: 'Redberries', category: 'herb_redberry', coords: [910, 687] },
            { name: 'Redberries', category: 'herb_redberry', coords: [924, 703] },
            { name: 'Redberries', category: 'herb_redberry', coords: [955, 701] },
            { name: 'Redberries', category: 'herb_redberry', coords: [988, 679] },
            { name: 'Redberries', category: 'herb_redberry', coords: [974, 674] },
            { name: 'Redberries', category: 'herb_redberry', coords: [983, 613] },
            { name: 'Redberries', category: 'herb_redberry', coords: [993, 612] },
        ]
    },
    {
        name: 'herb_blueberry',
        image: 'images/resource/herb_blueberry.png',
        hiddenByDefault: true,
        markers: [
            // Haywind
            { name: 'Blueberries', category: 'herb_blueberry', coords: [512, 526] },
            // Sheaston Estate
            { name: 'Blueberries', category: 'herb_blueberry', coords: [457, 615] },
            // Spruce Shades Rest
            { name: 'Blueberries', category: 'herb_blueberry', coords: [1055, 354] },
            { name: 'Blueberries', category: 'herb_blueberry', coords: [1081, 310] },
            { name: 'Blueberries', category: 'herb_blueberry', coords: [1157, 341] },
            // Haywind Outskirts
            { name: 'Blueberries', category: 'herb_blueberry', coords: [685, 442] },
            // Grainwater
            { name: 'Blueberries', category: 'herb_blueberry', coords: [787, 360] },
            // River Aure Banks
            { name: 'Blueberries', category: 'herb_blueberry', coords: [658, 713] },
            { name: 'Blueberries', category: 'herb_blueberry', coords: [644, 713] },
            // Fog's Dwindling
            { name: 'Blueberries', category: 'herb_blueberry', coords: [907, 698] },
            { name: 'Blueberries', category: 'herb_blueberry', coords: [984, 707] },
            { name: 'Blueberries', category: 'herb_blueberry', coords: [995, 676] },
            { name: 'Blueberries', category: 'herb_blueberry', coords: [979, 610] },
            { name: 'Blueberries', category: 'herb_blueberry', coords: [1016, 680] },

        ]
    },
    {
        name: 'herb_firestick',
        image: 'images/resource/herb_firestick.png',
        hiddenByDefault: true,
        markers: [
            // The Green Coppice
            { name: 'Firestick Plant', category: 'herb_firestick', coords: [438, 650] },
            { name: 'Firestick Plant', category: 'herb_firestick', coords: [444, 507] },
        ]
    },

    /*///////////////////////////////////////////////////////////////////////////
    .__..  .._..  ..__..    __.
    [__]|\ | | |\/|[__]|   (__ 
    |  || \|_|_|  ||  ||___.__)
                            
    *////////////////////////////////////////////////////////////////////////////
    {
        name: 'animal_chicken',
        image: 'images/animals/animal_chicken.png',
        hiddenByDefault: true,
        markers: [
            // Sheaston Estate
            { name: 'Chicken (Lvl. 1)', category: 'animal_chicken', coords: [448, 585] },
            // Spruce Shades Rest
            { name: 'Chicken (Lvl. 1)', category: 'animal_chicken', coords: [1031, 355] },
            // Timberwall Village
            { name: 'Chicken (Lvl. 1)', category: 'animal_chicken', coords: [937, 453] },
            // Haywind Fields
            { name: 'Chicken (Lvl. 1)', category: 'animal_chicken', coords: [780, 442] },
            // Grainwater
            { name: 'Chicken (Lvl. 1)', category: 'animal_chicken', coords: [765, 323] },
        ]
    },
    {
        name: 'animal_rabbit',
        image: 'images/animals/animal_rabbit.png',
        hiddenByDefault: true,
        markers: [
            // The Green Coppice
            { name: 'Rabbit (Lvl. 1)', category: 'animal_rabbit', coords: [390, 611] },
            // Ashenside Fields
            { name: 'Rabbit (Lvl. 1)', category: 'animal_rabbit', coords: [443, 492] },
            // Spruce Shades Rest
            { name: 'Rabbit (Lvl. 1)', category: 'animal_rabbit', coords: [1046, 371] },
            // Spruce Shades Forest
            { name: 'Rabbit (Lvl. 1)', category: 'animal_rabbit', coords: [987, 361] },
            // Mossneedle Pond
            { name: 'Rabbit (Lvl. 1)', category: 'animal_rabbit', coords: [1048, 450] },
            // Timberwell Village
            { name: 'Rabbit (Lvl. 1)', category: 'animal_rabbit', coords: [968, 447] },
            { name: 'Rabbit (Lvl. 1)', category: 'animal_rabbit', coords: [915, 458] },
            { name: 'Rabbit (Lvl. 1)', category: 'animal_rabbit', coords: [996, 423] },
            // Haywoods
            { name: 'Rabbit (Lvl. 1)', category: 'animal_rabbit', coords: [880, 432] },
            { name: 'Rabbit (Lvl. 1)', category: 'animal_rabbit', coords: [806, 466] },
            { name: 'Rabbit (Lvl. 1)', category: 'animal_rabbit', coords: [845, 340] },
            { name: 'Rabbit (Lvl. 1)', category: 'animal_rabbit', coords: [820, 279] },
            // Aure Cliffs
            { name: 'Rabbit (Lvl. 1)', category: 'animal_rabbit', coords: [553, 626] },
            // Grainwater
            { name: 'Rabbit (Lvl. 1)', category: 'animal_rabbit', coords: [773, 331] },
            // Forsaken Woods
            { name: 'Rabbit (Lvl. 1)', category: 'animal_rabbit', coords: [811, 168] },
            // The Mistywood
            { name: 'Rabbit (Lvl. 1)', category: 'animal_rabbit', coords: [811, 654] },
            { name: 'Rabbit (Lvl. 1)', category: 'animal_rabbit', coords: [841, 686] },
            { name: 'Rabbit (Lvl. 1)', category: 'animal_rabbit', coords: [849, 732] },
            { name: 'Rabbit (Lvl. 1)', category: 'animal_rabbit', coords: [894, 756] },
            { name: 'Rabbit (Lvl. 1)', category: 'animal_rabbit', coords: [923, 736] },
            { name: 'Rabbit (Lvl. 1)', category: 'animal_rabbit', coords: [948, 718] },
            { name: 'Rabbit (Lvl. 1)', category: 'animal_rabbit', coords: [1036, 688] },
            { name: 'Rabbit (Lvl. 1)', category: 'animal_rabbit', coords: [931, 830] },

        ]
    },
    {
        name: 'animal_sheep',
        image: 'images/animals/animal_sheep.png',
        hiddenByDefault: true,
        markers: [
            // Ashenside Fields
            { name: 'Sheep (Lvl. 3)', category: 'animal_sheep', coords: [454, 515] },
            // Haywind
            { name: 'Sheep (Lvl. 3)', category: 'animal_sheep', coords: [422, 452] },
            // Spruce Shades Forest
            { name: 'Sheep (Lvl. 3)', category: 'animal_sheep', coords: [972, 360] },
            // Timberwall Village
            { name: 'Sheep (Lvl. 3)', category: 'animal_sheep', coords: [941, 405] },
            // Haywind Fields
            { name: 'Sheep (Lvl. 3)', category: 'animal_sheep', coords: [757, 419] },
            { name: 'Sheep (Lvl. 3)', category: 'animal_sheep', coords: [727, 418] },
            { name: 'Sheep (Lvl. 3)', category: 'animal_sheep', coords: [759, 467] },
            // Haywind Outskirts
            { name: 'Sheep (Lvl. 3)', category: 'animal_sheep', coords: [680, 412] },
            { name: 'Sheep (Lvl. 3)', category: 'animal_sheep', coords: [659, 522] },
            { name: 'Sheep (Lvl. 3)', category: 'animal_sheep', coords: [687, 556] },
            // The Harvest Festival
            { name: 'Sheep (Lvl. 3)', category: 'animal_sheep', coords: [655, 314] },
            // Aure Cliffs
            { name: 'Sheep (Lvl. 3)', category: 'animal_sheep', coords: [551, 610] },
            // Grainwater
            { name: 'Sheep (Lvl. 3)', category: 'animal_sheep', coords: [722, 370] },
            { name: 'Sheep (Lvl. 3)', category: 'animal_sheep', coords: [694, 376] },
            // East Aure Banks
            { name: 'Sheep (Lvl. 3)', category: 'animal_sheep', coords: [748, 212] },
            // River Aure Banks
            { name: 'Sheep (Lvl. 3)', category: 'animal_sheep', coords: [706, 668] },
            { name: 'Sheep (Lvl. 3)', category: 'animal_sheep', coords: [673, 717] },
        ]
    },
    {
        name: 'animal_woolysheep',
        image: 'images/animals/animal_woolysheep.png',
        hiddenByDefault: true,
        markers: [
            // Shearston Estate
            { name: 'Wooly Sheep', category: 'animal_woolysheep', coords: [448, 614] },
        ]
    },
    {
        name: 'animal_cow',
        image: 'images/animals/animal_cow.png',
        hiddenByDefault: true,
        markers: [
            // Haywoods
            { name: 'Cow (Lvl. 6)', category: 'animal_cow', coords: [820, 434] },
            // Haywind Fields
            { name: 'Cow (Lvl. 6)', category: 'animal_cow', coords: [716, 418] },
            // Haywind Outskirts
            { name: 'Cow (Lvl. 6)', category: 'animal_cow', coords: [666, 543] },
            // The Harvest Festival
            { name: 'Cow (Lvl. 6)', category: 'animal_cow', coords: [639, 285] },
            // River Aure Banks
            { name: 'Cow (Lvl. 6)', category: 'animal_cow', coords: [691, 713] },
        ]
    },
    {
        name: 'animal_deer',
        image: 'images/animals/animal_deer.png',
        hiddenByDefault: true,
        markers: [
            // The Green Coppice
            { name: 'Deer (Lvl. 1)', category: 'animal_deer', coords: [390, 667] },
            // Spruce Shades Rest
            { name: 'Deer (Lvl. 1)', category: 'animal_deer', coords: [1029, 376] },
            // Haywoods
            { name: 'Deer (Lvl. 1)', category: 'animal_deer', coords: [897, 264] },
            // The Mistywoods
            { name: 'Deer (Lvl. 1)', category: 'animal_deer', coords: [1233, 775] },
            { name: 'Deer (Lvl. 1)', category: 'animal_deer', coords: [1218, 780] },
            { name: 'Deer (Lvl. 1)', category: 'animal_deer', coords: [1183, 785] },
            { name: 'Deer (Lvl. 1)', category: 'animal_deer', coords: [1071, 828] },
            { name: 'Deer (Lvl. 1)', category: 'animal_deer', coords: [1046, 850] },
            { name: 'Deer (Lvl. 1)', category: 'animal_deer', coords: [1023, 815] },
        ]
    },
    {
        name: 'animal_fox',
        image: 'images/animals/animal_fox.png',
        hiddenByDefault: true,
        markers: [
            // Haywoods
            { name: 'Fox (Lvl. 1)', category: 'animal_fox', coords: [860, 260] },
            { name: 'Fox (Lvl. 1)', category: 'animal_fox', coords: [844, 318] },
            { name: 'Fox (Lvl. 1)', category: 'animal_fox', coords: [889, 362] },
        ]
    },
    {
        name: 'animal_crab',
        image: 'images/animals/animal_crab.png',
        hiddenByDefault: true,
        markers: [
            // Haywind Fields
            { name: 'Crab (Lvl. 1)', category: 'animal_crab', coords: [780, 475] },
            // East Aure Banks
            { name: 'Crab (Lvl. 1)', category: 'animal_crab', coords: [779, 270] },
            // Haywind
            { name: 'Crab (Lvl. 1)', category: 'animal_crab', coords: [589, 575] },
            { name: 'Crab (Lvl. 1)', category: 'animal_crab', coords: [523, 556] },
            // River Aure Banks
            { name: 'Crab (Lvl. 1)', category: 'animal_crab', coords: [679, 733] },
            // Aurfield
            { name: 'Crab (Lvl. 1)', category: 'animal_crab', coords: [661, 761] },
            // Fog's Dwindling
            { name: 'Crab (Lvl. 5)', category: 'animal_crab', coords: [928, 672] },
        ]
    },
    {
        name: 'animal_frog',
        image: 'images/animals/animal_frog.png',
        hiddenByDefault: true,
        markers: [
            // Mossneedle Pond
            { name: 'Frog (Lvl. 1)', category: 'animal_frog', coords: [1027, 441] },
            { name: 'Frog (Lvl. 1)', category: 'animal_frog', coords: [1006, 460] },
            // Spruce Shades Forest
            { name: 'Frog (Lvl. 1)', category: 'animal_frog', coords: [977, 394] },
        ]
    },
    {
        name: 'animal_snail',
        image: 'images/animals/animal_snail.png',
        hiddenByDefault: true,
        markers: [
            // The Mistywood
            { name: 'Deep Forest Snail (Lvl. 12)', category: 'animal_snail', coords: [836, 738] },
            { name: 'Deep Forest Snail (Lvl. 12)', category: 'animal_snail', coords: [903, 752] },
            { name: 'Deep Forest Snail (Lvl. 12)', category: 'animal_snail', coords: [838, 762] },
            { name: 'Deep Forest Snail (Lvl. 12)', category: 'animal_snail', coords: [932, 723] },
            // Fog's Dwindling
            { name: 'Deep Forest Snail (Lvl. 12)', category: 'animal_snail', coords: [903, 676] },
        ]
    },
    {
        name: 'animal_snake',
        image: 'images/animals/animal_snake.png',
        hiddenByDefault: true,
        markers: [
            // The Mistywood
            { name: 'Forest Snake (Lvl. 12)', category: 'animal_snake', coords: [1128, 657] },
            { name: 'Forest Snake (Lvl. 12)', category: 'animal_snake', coords: [1099, 716] },
            { name: 'Forest Snake (Lvl. 12)', category: 'animal_snake', coords: [1107, 675] },
            { name: 'Forest Snake (Lvl. 12)', category: 'animal_snake', coords: [1231, 632] },
            { name: 'Forest Snake (Lvl. 12)', category: 'animal_snake', coords: [1156, 770] },
            { name: 'Forest Snake (Lvl. 12)', category: 'animal_snake', coords: [1127, 770] },
            { name: 'Forest Snake (Lvl. 12)', category: 'animal_snake', coords: [1070, 842] },
            { name: 'Forest Snake (Lvl. 12)', category: 'animal_snake', coords: [1013, 851] },
            { name: 'Forest Snake (Lvl. 12)', category: 'animal_snake', coords: [1005, 763] },
        ]
    },
    {
        name: 'animal_spider',
        image: 'images/animals/animal_spider.png',
        hiddenByDefault: true,
        markers: [
            // Cobwebbed Thicket
            { name: 'Venomous Blackhair Spider (Lvl. 14)', category: 'animal_spider', coords: [688, 234] },
            // The Mistywood
            { name: 'Spider (Lvl. 15)', category: 'animal_spider', coords: [1085, 672] },
            { name: 'Spider (Lvl. 15)', category: 'animal_spider', coords: [1106, 656] },
            { name: 'Spider (Lvl. 15)', category: 'animal_spider', coords: [1137, 637] },
            { name: 'Forest Spider (Lvl. 14)', category: 'animal_spider', coords: [1202, 627] },
            { name: 'Forest Spider (Lvl. 14)', category: 'animal_spider', coords: [1233, 648] },
            
        ]
    },
    {
        name: 'animal_giantrat',
        image: 'images/animals/animal_giantrat.png',
        hiddenByDefault: true,
        markers: [
            // The Mistywood
            { name: 'Giant Rat (Lvl. 8)', category: 'animal_giantrat', coords: [1219, 830] },
            { name: 'Giant Rat (Lvl. 8)', category: 'animal_giantrat', coords: [1210, 847] },
            
        ]
    },
    {
        name: 'animal_wolf',
        image: 'images/animals/animal_wolf.png',
        hiddenByDefault: true,
        markers: [
            // Mossneedle Pond
            { name: 'Scrawny Wolf (Lvl. 3)', category: 'animal_wolf', coords: [1041, 405] },
            // Timberwell Village
            { name: 'Scrawny Wolf (Lvl. 3)', category: 'animal_wolf', coords: [981, 448] },
            { name: 'Scrawny Wolf (Lvl. 3)', category: 'animal_wolf', coords: [914, 480] },
            // Haywoods
            { name: 'Wolf (Lvl. 6)', category: 'animal_wolf', coords: [843, 407] },
            { name: 'Wolf (Lvl. 6)', category: 'animal_wolf', coords: [869, 377] },
            // East Aure Banks
            { name: 'Wolf (Lvl. 6)', category: 'animal_wolf', coords: [791, 243] },
            { name: 'Wolf (Lvl. 6)', category: 'animal_wolf', coords: [813, 242] },
            // The Mistywoods
            { name: 'Wolf (Lvl. 12)', category: 'animal_wolf', coords: [1024, 708] },
            { name: 'Wolf (Lvl. 12)', category: 'animal_wolf', coords: [1100, 582] },
        ]
    },
    {
        name: 'animal_bear',
        image: 'images/animals/animal_bear.png',
        hiddenByDefault: true,
        markers: [
            // Mossneedle Pond
            { name: 'Bear (Lvl. 9)', category: 'animal_bear', coords: [1059, 440] },
            // Timberwell Village
            { name: 'Bear (Lvl. 9)', category: 'animal_bear', coords: [965, 491] },
            // Spruce Shades Forest
            { name: 'Bear (Lvl. 9)', category: 'animal_bear', coords: [930, 338] },
            // Haywind Fields
            { name: 'Bear (Lvl. 9)', category: 'animal_bear', coords: [786, 403] },
            // Heywoods
            { name: 'Bear (Lvl. 9)', category: 'animal_bear', coords: [880, 304] },
            { name: 'Bear (Lvl. 7)', category: 'animal_bear', coords: [866, 349] },
            // The Mistywoods
            { name: 'Bear (Lvl. 9)', category: 'animal_bear', coords: [833, 658] },
            { name: 'Bear (Lvl. 9)', category: 'animal_bear', coords: [874, 742] },
            { name: 'Bear (Lvl. 9)', category: 'animal_bear', coords: [900, 740] },
            { name: 'Bear (Lvl. 9)', category: 'animal_bear', coords: [939, 751] },
            { name: 'Bear (Lvl. 9)', category: 'animal_bear', coords: [1225, 702] },
            { name: 'Black Bear (Lvl. 15)', category: 'animal_bear', coords: [945, 765] },
            { name: 'Black Bear (Lvl. 15)', category: 'animal_bear', coords: [896, 795] },
            { name: 'Black Bear (Lvl. 15)', category: 'animal_bear', coords: [1084, 572] },
            { name: 'Black Bear (Lvl. 15)', category: 'animal_bear', coords: [1135, 591] },
            { name: 'Black Bear (Lvl. 15)', category: 'animal_bear', coords: [1165, 605] },
            { name: 'Black Bear (Lvl. 15)', category: 'animal_bear', coords: [1220, 691] },
            { name: 'Black Bear (Lvl. 15)', category: 'animal_bear', coords: [982, 800] },
            // Fog's Dwindling
            { name: 'Bear (Lvl. 9)', category: 'animal_bear', coords: [917, 680] },
            // Forsaken Woods
            { name: 'Black Bear (Lvl. 15)', category: 'animal_bear', coords: [826, 184] },
            
        ]
    },
    {
        name: 'animal_evergreen',
        image: 'images/animals/animal_evergreen.png',
        hiddenByDefault: true,
        markers: [
            // Spruce Shades Forest
            { name: 'Awakened Evergreen (Lvl. 20)', category: 'animal_evergreen', coords: [1072, 443] },
            // The Mistywood
            { name: 'Awakened Evergreen (Lvl. 20)', category: 'animal_evergreen', coords: [865, 803] },
            { name: 'Awakened Evergreen (Lvl. 20)', category: 'animal_evergreen', coords: [839, 832] },
            { name: 'Awakened Evergreen (Lvl. 20)', category: 'animal_evergreen', coords: [855, 870] },
            
        ]
    }

];

// Define custom markers
var locations = [
    { name: "Haywind City", coords: [555, 449], fontScale: 2 },
    { name: "Haywoods", coords: [827, 414], fontScale: .5},
    { name: "Barnsmill Estate", coords: [739, 519], fontScale: .1},
    // Add more places as needed
];

/////////////////////////////////////////////////////////////////////////////////
// DO NOT TOUCH //
/////////////////////////////////////////////////////////////////////////////////

// 
function reverseTransformCoordinates(newX, newY) {
    var minX = 24; // Min x
    var maxX = 256 - 24; // Max x
    var minY = 24; // Min y
    var maxY = 256 - 24; // Max y
    var targetSize = 1300; // Target size

    // Map x-coordinate from new range back to original range
    var x = (newX / targetSize) * (maxX - minX) + minX;

    // Map y-coordinate from new range back to original range and flip the Y-axis
    var y = ((targetSize - newY) / targetSize) * (maxY - minY) + minY;

    return [y, x];
}

// Create Markers for each label
markers.forEach(function (label) {
    var icon = L.icon({
        iconUrl: label.image,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -32]
    });

    label.markers.forEach(function (marker) {
        var markerObj = L.marker(reverseTransformCoordinates(marker.coords[0], marker.coords[1]), { icon: icon }).bindPopup(marker.name);
        markerObj.addTo(markerLayer);
        markerObj.category = marker.category;
    });
    

    // Check if the Marker should be hidden by default
    if (label.hiddenByDefault) {
        label.markers.forEach(function (marker) {
            markerLayer.eachLayer(function (layer) {
                if (layer.category === marker.category) {
                    map.removeLayer(layer);
                }
            });
        });
    }
});