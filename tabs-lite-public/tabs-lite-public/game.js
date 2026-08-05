const canvas = document.querySelector("#battlefield");
const ctx = canvas.getContext("2d");
const tiamatSprite = new Image();
tiamatSprite.src = "./assets/tiamat-sprite.png?v=20260614-particles-before-battle-1";
const homeScreen = document.querySelector("#homeScreen");
const appShell = document.querySelector("#appShell");
const sandboxModeBtn = document.querySelector("#sandboxModeBtn");
const levelsModeBtn = document.querySelector("#levelsModeBtn");
const pvzModeBtn = document.querySelector("#pvzModeBtn");
const pvzTools = document.querySelector("#pvzTools");
const pvzShovelBtn = document.querySelector("#pvzShovelBtn");
const pvzBuyCountInput = document.querySelector("#pvzBuyCount");
const pvzBuyCountLabel = document.querySelector("#pvzBuyCountLabel");
const pvzBuySlotBtn = document.querySelector("#pvzBuySlotBtn");
const pvzSlotInfo = document.querySelector("#pvzSlotInfo");
const homeBtn = document.querySelector("#homeBtn");
const battlefieldWrap = document.querySelector(".battlefield-wrap");
const unitList = document.querySelector("#unitList");
const budgetText = document.querySelector("#budgetText");
const blueCount = document.querySelector("#blueCount");
const redCount = document.querySelector("#redCount");
const levelBudgetBox = document.querySelector("#levelBudgetBox");
const levelBudgetLabel = document.querySelector("#levelBudgetLabel");
const levelBudgetText = document.querySelector("#levelBudgetText");
const phaseText = document.querySelector("#phaseText");
const controlPanel = document.querySelector("#controlPanel");
const controlTitle = document.querySelector("#controlTitle");
const controlName = document.querySelector("#controlName");
const controlCooldowns = document.querySelector("#controlCooldowns");
const controlBuildNextBtn = document.querySelector("#controlBuildNextBtn");
const controlBuildPlaceBtn = document.querySelector("#controlBuildPlaceBtn");
const controlDemolishBtn = document.querySelector("#controlDemolishBtn");
const toast = document.querySelector("#toast");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");
const eraseBtn = document.querySelector("#eraseBtn");
const randomBtn = document.querySelector("#randomBtn");
const enemySlider = document.querySelector("#enemySlider");
const levelSelect = document.querySelector("#levelSelect");
const loadLevelBtn = document.querySelector("#loadLevelBtn");
const levelInfo = document.querySelector("#levelInfo");
const rewardModal = document.querySelector("#rewardModal");
const rewardTitle = document.querySelector("#rewardTitle");
const rewardSubtitle = document.querySelector("#rewardSubtitle");
const rewardCards = document.querySelector("#rewardCards");
const speedSlider = document.querySelector("#speedSlider");
const sandboxToggle = document.querySelector("#sandboxToggle");
const blueTeamBtn = document.querySelector("#blueTeamBtn");
const redTeamBtn = document.querySelector("#redTeamBtn");
const batchPlaceLabel = document.querySelector("#batchPlaceLabel");
const batchPlaceCount = document.querySelector("#batchPlaceCount");
const exportFormationBtn = document.querySelector("#exportFormationBtn");
const importFormationBtn = document.querySelector("#importFormationBtn");
const exitChallengeBtn = document.querySelector("#exitChallengeBtn");
const saveSlotBtns = [1, 2, 3].map((slot) => document.querySelector(`#saveSlot${slot}Btn`));
const loadSlotBtns = [1, 2, 3].map((slot) => document.querySelector(`#loadSlot${slot}Btn`));
const upgradeSelectedBtn = document.querySelector("#upgradeSelectedBtn");
const formationCode = document.querySelector("#formationCode");
const wallToolBtn = document.querySelector("#wallToolBtn");
const thickWallToolBtn = document.querySelector("#thickWallToolBtn");
const arrowWallToolBtn = document.querySelector("#arrowWallToolBtn");
const unbreakableWallToolBtn = document.querySelector("#unbreakableWallToolBtn");
const waterToolBtn = document.querySelector("#waterToolBtn");
const fireTerrainToolBtn = document.querySelector("#fireTerrainToolBtn");
const grassToolBtn = document.querySelector("#grassToolBtn");
const highGroundToolBtn = document.querySelector("#highGroundToolBtn");
const eraseTerrainBtn = document.querySelector("#eraseTerrainBtn");
const commandToolBtn = document.querySelector("#commandToolBtn");
const focusToolBtn = document.querySelector("#focusToolBtn");
const eraseWallBtn = document.querySelector("#eraseWallBtn");
const clearWallsBtn = document.querySelector("#clearWallsBtn");
const customName = document.querySelector("#customName");
const customHp = document.querySelector("#customHp");
const customDamage = document.querySelector("#customDamage");
const customKnockback = document.querySelector("#customKnockback");
const customAttackSpeed = document.querySelector("#customAttackSpeed");
const customMoveSpeed = document.querySelector("#customMoveSpeed");
const customSize = document.querySelector("#customSize");
const customRange = document.querySelector("#customRange");
const customStopDistance = document.querySelector("#customStopDistance");
const customDodge = document.querySelector("#customDodge");
const customWeapon = document.querySelector("#customWeapon");
const customRanged = document.querySelector("#customRanged");
const customAttackWalls = document.querySelector("#customAttackWalls");
const customAreaAttack = document.querySelector("#customAreaAttack");
const customAreaRange = document.querySelector("#customAreaRange");
const customAreaDamage = document.querySelector("#customAreaDamage");
const customBurstCooldown = document.querySelector("#customBurstCooldown");
const customBurstCount = document.querySelector("#customBurstCount");
const customSecondWeapon = document.querySelector("#customSecondWeapon");
const customSecondRange = document.querySelector("#customSecondRange");
const customSecondRanged = document.querySelector("#customSecondRanged");
const customSecondDamage = document.querySelector("#customSecondDamage");
const customSecondBurstCooldown = document.querySelector("#customSecondBurstCooldown");
const customSecondBurstCount = document.querySelector("#customSecondBurstCount");
const createCustomBtn = document.querySelector("#createCustomBtn");
const skillExplode = document.querySelector("#skillExplode");
const skillExplodeDamage = document.querySelector("#skillExplodeDamage");
const skillExplodeRange = document.querySelector("#skillExplodeRange");
const skillPoisonSlime = document.querySelector("#skillPoisonSlime");
const skillSlimeChance = document.querySelector("#skillSlimeChance");
const skillSummonOnKill = document.querySelector("#skillSummonOnKill");
const skillSummonChance = document.querySelector("#skillSummonChance");
const skillSummonInheritPercent = document.querySelector("#skillSummonInheritPercent");
const skillSummonInheritSkills = document.querySelector("#skillSummonInheritSkills");
const skillSummonInheritSecond = document.querySelector("#skillSummonInheritSecond");
const skillDamageOnKill = document.querySelector("#skillDamageOnKill");
const skillDamageGain = document.querySelector("#skillDamageGain");
const skillDamageAura = document.querySelector("#skillDamageAura");
const skillDamageAuraRange = document.querySelector("#skillDamageAuraRange");
const skillDamageAuraDamage = document.querySelector("#skillDamageAuraDamage");
const skillTornado = document.querySelector("#skillTornado");
const skillTornadoDamage = document.querySelector("#skillTornadoDamage");
const skillTornadoDuration = document.querySelector("#skillTornadoDuration");
const skillTornadoRange = document.querySelector("#skillTornadoRange");
const skillFireBreath = document.querySelector("#skillFireBreath");
const skillFireParticleSize = document.querySelector("#skillFireParticleSize");
const skillFireDuration = document.querySelector("#skillFireDuration");
const skillFireRange = document.querySelector("#skillFireRange");
const skillFireball = document.querySelector("#skillFireball");
const skillFireballDamage = document.querySelector("#skillFireballDamage");
const skillHolyShield = document.querySelector("#skillHolyShield");
const skillHolyShieldRange = document.querySelector("#skillHolyShieldRange");
const skillHolyShieldReduction = document.querySelector("#skillHolyShieldReduction");
const skillFreezeAttack = document.querySelector("#skillFreezeAttack");
const skillBlockRanged = document.querySelector("#skillBlockRanged");
const skillBerserkHp = document.querySelector("#skillBerserkHp");
const skillBerserkDamage = document.querySelector("#skillBerserkDamage");
const skillBerserkHeal = document.querySelector("#skillBerserkHeal");
const languageSelect = document.querySelector("#languageSelect");
const itemsTitle = document.querySelector("#itemsTitle");
const itemBar = document.querySelector("#itemBar");
const itemButtons = document.querySelectorAll("[data-item]");

const weaponProfiles = {
  club: { tag: "鏈ㄦ", range: 34, radius: 15, knockback: 2.3, projectileSpeed: 0, splash: 0 },
  spear: { tag: "闀跨煕", range: 58, radius: 15, knockback: 2.7, projectileSpeed: 0, splash: 0 },
  hammer: { tag: "鎴橀敜", range: 38, radius: 19, knockback: 4.2, projectileSpeed: 0, splash: 0 },
  bow: { tag: "寮撶", range: 220, radius: 14, knockback: 2.3, projectileSpeed: 420, splash: 0 },
  musket: { tag: "鐏灙", range: 310, radius: 15, knockback: 2.5, projectileSpeed: 620, splash: 0 },
  cannon: { tag: "鐏偖", range: 285, radius: 21, knockback: 3.8, projectileSpeed: 320, splash: 62 },
};

const CUSTOM_LIMIT = 500000000;
const ITEM_RADIUS = 150;
const ITEM_BUFF_SECONDS = 120;
const itemTypes = {
  fireball: { cost: 120, damage: 80, color: "#ff7838" },
  defense: { cost: 180, buff: "defensePotionTimer", color: "#ffeaa0" },
  power: { cost: 180, buff: "powerPotionTimer", color: "#ff6d6d" },
  speed: { cost: 160, buff: "speedPotionTimer", color: "#7cff9c" },
  heal: { cost: 170, heal: 90, color: "#70e8a0" },
  meteor: { cost: 260, damage: 150, radius: 190, color: "#ff5d2e" },
  wall: { cost: 220, color: "#9bdcff" },
  lightning: { cost: 240, damage: 70, chains: 5, color: "#bde7ff" },
};
const levelBannedItems = new Set(["fireball", "meteor", "lightning"]);
const UNIT_PACK_2_IDS = new Set([
  "knight",
  "assassin",
  "crossbow",
  "poisoner",
  "stormcaller",
  "bomber",
  "giant",
  "wolf",
  "slimebeast",
  "dragonling",
  "adultdragon",
  "tiamat",
  "firebeast",
  "paladin",
  "plaguewizard",
  "frostmage",
  "necromancer",
  "bannerlord",
  "flameknight",
  "frostgiant",
  "sharpshooter",
  "portalmage",
  "unit67",
  "hydra",
  "voidbinder",
  "wallcrusher",
  "phoenixguard",
  "stormlancer",
  "whirlhammer",
  "zombie",
  "coneheadzombie",
  "bucketzombie",
  "footballzombie",
  "giantzombie",
  "armoredgiantzombie",
  "crystalbehemoth",
  "stormogre",
  "voidwardenboss",
  "archmagelord",
  "sunflower",
  "peashooter",
  "repeater",
  "gatlingshooter",
  "wildgatlingshooter",
  "corncannon",
  "chomper",
]);

const PLANT_TYPE_IDS = new Set(["sunflower", "nutwall", "obsidianwargod", "peashooter", "repeater", "gatlingshooter", "wildgatlingshooter", "corncannon", "chomper"]);
const PVZ_GRID = { left: 90, right: 560, top: 72, bottom: 696, cols: 5, rows: 9 };
const PVZ_START_UNLOCKED_CELLS = 9;
const PVZ_EMPTY_CELL_COST = 150;
const PVZ_CELLS_PER_PURCHASE = 3;
const PVZ_ZOMBIES = ["zombie", "coneheadzombie", "bucketzombie", "footballzombie"];

const buildingTypes = {
  arrowTower: { name: "Arrow Tower", zh: "箭塔", cost: 360, hp: 100, w: 42, h: 42, range: 180, cooldown: 0.2, damage: 10 },
  cannonTower: { name: "Cannon Tower", zh: "炮塔", cost: 620, hp: 160, w: 52, h: 52, range: 240, cooldown: 2.2, damage: 55, splash: 70 },
  healTower: { name: "Healing Tower", zh: "治疗塔", cost: 450, hp: 130, w: 48, h: 48, range: 145, cooldown: 0.5, heal: 12 },
  frostTower: { name: "Frost Tower", zh: "冰冻塔", cost: 520, hp: 120, w: 48, h: 48, range: 170, cooldown: 1.3, damage: 8 },
  goldMine: { name: "Gold Mine", zh: "金矿", cost: 300, hp: 140, w: 56, h: 46, range: 0, cooldown: 5, gold: 70 },
};
const controlledBuildTypes = ["arrowTower", "cannonTower", "healTower", "frostTower", "goldMine"];

const terrainTypes = {
  water: { name: "Water", zh: "水坑", cost: 90, radius: 70 },
  fire: { name: "Fire Ground", zh: "火地", cost: 130, radius: 62 },
  grass: { name: "Grass", zh: "草丛", cost: 80, radius: 76 },
  high: { name: "High Ground", zh: "高地", cost: 120, radius: 72 },
};

const levelDefinitions = [
  { number: 1, budget: 500, name: "First Clash", zh: "第一关：小冲突", enemies: [["clubber", 5], ["archer", 1]] },
  { number: 2, budget: 800, name: "Shield Line", zh: "第二关：盾墙", enemies: [["shield", 4], ["spear", 4], ["archer", 2]] },
  { number: 3, budget: 1100, name: "Fast Raiders", zh: "第三关：突袭队", enemies: [["berserker", 4], ["assassin", 2], ["crossbow", 3]] },
  { number: 4, budget: 1500, name: "Heavy Camp", zh: "第四关：重甲营地", enemies: [["knight", 3], ["hammer", 3], ["musketeer", 3], ["wolf", 2]] },
  { number: 5, budget: 2100, name: "Poison Field", zh: "第五关：毒液战场", enemies: [["poisoner", 3], ["slimebeast", 2], ["plaguewizard", 1], ["giant", 1]] },
  { number: 6, budget: 2900, name: "Frozen Dead", zh: "第六关：冰冻亡灵", enemies: [["zombie", 8], ["coneheadzombie", 4], ["frostmage", 2], ["necromancer", 1]] },
  { number: 7, budget: 3400, name: "67 Lockdown", zh: "第七关：67封锁", enemies: [["unit67", 5], ["shield", 5], ["sharpshooter", 2], ["voidbinder", 1]] },
  { number: 8, budget: 4300, name: "Dragon Nest", zh: "第八关：龙巢", enemies: [["dragonling", 8], ["adultdragon", 1], ["flameknight", 2], ["sharpshooter", 2]] },
  { number: 9, budget: 5000, name: "Zombie Wall", zh: "第九关：僵尸墙", enemies: [["zombie", 10], ["coneheadzombie", 5], ["bucketzombie", 3], ["footballzombie", 2], ["giantzombie", 1]] },
  { number: 10, budget: 5600, name: "Storm Legion", zh: "第十关：风暴军团", enemies: [["frostgiant", 2], ["stormlancer", 4], ["phoenixguard", 2], ["adultdragon", 2], ["voidbinder", 2]] },
  { number: 11, budget: 6500, name: "Tiamat", zh: "第十一关：龙神提亚马特", enemies: [["tiamat", 1], ["adultdragon", 2], ["dragonling", 6]] },
  { number: 12, budget: 6000, name: "Hydra Burn", zh: "第十二关：九头火阵", enemies: [["hydra", 4], ["flameknight", 4], ["phoenixguard", 2], ["dragonling", 8]] },
  { number: 13, budget: 6400, name: "Frozen Fortress", zh: "第十三关：冰霜堡垒", enemies: [["frostgiant", 4], ["frostmage", 4], ["shield", 8], ["sharpshooter", 3]] },
  { number: 14, budget: 6800, name: "Zombie Stampede", zh: "第十四关：僵尸冲锋", enemies: [["giantzombie", 2], ["footballzombie", 6], ["bucketzombie", 8], ["zombie", 16]] },
  { number: 15, budget: 7100, name: "Portal Disaster", zh: "第十五关：传送灾难", enemies: [["portalmage", 4], ["voidbinder", 4], ["unit67", 4], ["stormcaller", 4], ["sharpshooter", 3]] },
  { number: 16, budget: 7400, name: "Plant Siege", zh: "第十六关：植物火线", enemies: [["gatlingshooter", 3], ["repeater", 6], ["peashooter", 10], ["chomper", 4], ["sunflower", 6]] },
  { number: 17, budget: 7700, name: "Dragon Crown", zh: "第十七关：龙冠军团", enemies: [["adultdragon", 3], ["hydra", 3], ["dragonling", 12], ["phoenixguard", 3]] },
  { number: 18, budget: 8000, name: "Control Nightmare", zh: "第十八关：控制噩梦", enemies: [["unit67", 8], ["voidbinder", 5], ["stormcaller", 4], ["frostmage", 4], ["shield", 10]] },
  { number: 19, budget: 8300, name: "Barricade Trial", zh: "第十九关：路障试炼", map: "barricadeTrial", enemies: [["wallcrusher", 4], ["sharpshooter", 5], ["shield", 8], ["cannon", 3]] },
  { number: 20, budget: 6500, name: "Pea Maze", zh: "第二十关：豌豆迷宫", map: "peaMaze", enemies: [["peashooter", 5], ["chomper", 2], ["sunflower", 4]] },
  { number: 21, budget: 6800, name: "Tower Gate", zh: "第二十一关：塔门", map: "towerGate", enemies: [["knight", 6], ["musketeer", 6], ["paladin", 3], ["sharpshooter", 4]] },
  { number: 22, budget: 7100, name: "Frost Ramparts", zh: "第二十二关：冰霜壁垒", map: "frostRamparts", enemies: [["frostgiant", 3], ["frostmage", 6], ["shield", 12]] },
  { number: 23, budget: 7400, name: "Zombie Factory", zh: "第二十三关：僵尸工厂", map: "zombieFactory", enemies: [["giantzombie", 2], ["footballzombie", 7], ["bucketzombie", 9], ["zombie", 16]] },
  { number: 24, budget: 7700, name: "Fire Corridor", zh: "第二十四关：火焰走廊", map: "fireCorridor", enemies: [["flameknight", 7], ["phoenixguard", 4], ["dragonling", 12]] },
  { number: 25, budget: 8000, name: "Hydra Garden", zh: "第二十五关：九头蛇花园", map: "hydraGarden", enemies: [["hydra", 4], ["poisoner", 6], ["slimebeast", 4], ["plaguewizard", 3]] },
  { number: 26, budget: 8300, name: "Dragon Barricade", zh: "第二十六关：巨龙防线", map: "dragonBarricade", enemies: [["adultdragon", 3], ["dragonling", 16], ["flameknight", 6]] },
  { number: 27, budget: 8600, name: "Void Prison", zh: "第二十七关：虚空牢笼", map: "voidPrison", enemies: [["voidbinder", 7], ["unit67", 7], ["stormcaller", 6], ["frostmage", 4]] },
  { number: 28, budget: 8900, name: "Boss Warmup", zh: "第二十八关：Boss热身", map: "bossWarmup", enemies: [["giantzombie", 3], ["frostgiant", 3], ["adultdragon", 3], ["hydra", 3]] },
  { number: 29, budget: 9200, name: "Two-Headed Doom", zh: "第二十九关：双重末日", enemies: [["adultdragon", 4], ["giantzombie", 2], ["frostgiant", 3], ["hydra", 2], ["voidbinder", 4]] },
  { number: 30, budget: 9500, name: "Final Chaos", zh: "第三十关：终极混沌", enemies: [["tiamat", 1], ["adultdragon", 4], ["giantzombie", 3], ["hydra", 4], ["unit67", 6], ["phoenixguard", 4]] },
];

const levelTips = {
  1: { en: "A simple opener. Cheap melee plus one archer is enough.", zh: "入门关，便宜近战加一个弓箭手就够。" },
  2: { en: "Shields are slow. Use backline damage.", zh: "盾兵很慢，用后排输出打穿。" },
  3: { en: "Fast enemies rush you. Mix tanks with ranged units.", zh: "敌人会冲脸，前排肉盾加远程更稳。" },
  4: { en: "Armor and guns appear. Spread your units.", zh: "开始有重甲和火枪，兵种别挤在一起。" },
  5: { en: "Poison punishes clumps. Bring burst damage.", zh: "毒液克制抱团，带爆发输出。" },
  6: { en: "Frozen zombies reduce ranged damage, and some revive once.", zh: "冰冻亡灵会降低远程伤害，部分僵尸会复活一次。" },
  7: { en: "67 locks units down. Use extra bodies or long range.", zh: "67会定身，多放单位或用远程。" },
  8: { en: "Dragon enemies resist fire damage. Use physical hits.", zh: "龙类敌人抗火，建议用物理伤害。" },
  9: { en: "Zombies may revive once. Kill support first.", zh: "僵尸可能复活一次，先清小僵尸。" },
  10: { en: "Storm units punish weak backlines. Use sturdy frontliners.", zh: "风暴军团会切后排，要带硬前排。" },
  11: { en: "Tiamat is a boss. Physical damage works best.", zh: "龙神是Boss，物理伤害最有效。" },
  12: { en: "Hydras and fire units fill the lane. Bring durable melee.", zh: "九头蛇和火焰单位压线，带耐打近战。" },
  13: { en: "Frost reduces ranged damage. Bring melee too.", zh: "冰霜关会降低远程伤害，也要带近战。" },
  14: { en: "Zombie stampede revives some units. Area damage matters.", zh: "僵尸冲锋有复活，范围伤害很重要。" },
  15: { en: "Portal mages summon trouble. Rush or disable them.", zh: "传送门法师会召唤，尽快打掉或控制。" },
  16: { en: "Plant lines are fragile if you break through.", zh: "植物火线怕突破，冲进去就好打。" },
  17: { en: "Dragons dominate open fights. Use anti-large damage.", zh: "龙在开阔地很强，用高伤害打大体型。" },
  18: { en: "Control effects are everywhere. Use many cheap units.", zh: "控制很多，用大量便宜单位分摊。" },
  19: { en: "Walls block direct attacks. Bring wall breakers.", zh: "墙会挡路，建议带拆墙单位。" },
  20: { en: "Enemies hide at the far right behind a maze.", zh: "敌人在最右边迷宫后面，先打通道路。" },
  21: { en: "Towers punish slow pushes. Split your attack.", zh: "塔会惩罚慢推，分散进攻更稳。" },
  22: { en: "Frost towers and giants reduce ranged damage.", zh: "冰塔和冰巨人会让远程伤害变低。" },
  23: { en: "Zombie factory revives many zombies. Bring area damage.", zh: "僵尸工厂很多僵尸会复活，带范围伤害。" },
  24: { en: "Fire corridor enemies resist fire damage.", zh: "火焰走廊敌人抗火。" },
  25: { en: "Hydras resist fire and poison punishes long fights.", zh: "九头蛇抗火，毒会拖垮持久战。" },
  26: { en: "Dragon barricades need both tanks and burst.", zh: "巨龙防线需要肉盾和爆发一起上。" },
  27: { en: "Void control can stop elite units. Bring backups.", zh: "虚空控制会废掉精英单位，要有备用兵。" },
  28: { en: "This is a boss warmup. Test your strongest army.", zh: "这是Boss热身，试试你的最强阵容。" },
  29: { en: "Two boss lines at once. Kill one side first.", zh: "双重末日两边都强，先集火一边。" },
  30: { en: "Final boss. Gold reward cards do not help here.", zh: "最终Boss，金币奖励卡在这里不生效。" },
};

const rewardCardPool = [
  {
    id: "sharp_blades",
    kind: "damage",
    en: ["Sharp Blades", "+5% blue unit damage.", "Clean damage upgrade."],
    zh: ["锋利武器", "蓝队单位伤害 +5%。", "稳定的伤害强化。"],
    apply: () => {
      state.rewardMods.damageBonus += 0.05;
    },
  },
  {
    id: "training_manual",
    kind: "upgrade",
    en: ["Training Manual", "+2 upgrade points.", "Use them before later levels."],
    zh: ["训练手册", "获得 +2 升级点。", "可以用来升级兵种。"],
    apply: () => {
      state.upgradePoints += 2;
      saveUpgradePoints(state.upgradePoints);
    },
  },
  {
    id: "war_fund",
    kind: "other",
    en: ["War Fund", "+250 starting gold, -5% max HP.", "Money now has a real cost."],
    zh: ["战争资金", "开局金币 +250，最大血量 -5%。", "钱不再是白送的。"],
    apply: () => {
      state.rewardMods.startingGoldBonus += 250;
      state.rewardMods.hpBonus -= 0.05;
    },
  },
  {
    id: "glass_cannon",
    kind: "damage",
    en: ["Glass Cannon", "+25% damage, -10% max HP.", "High power with a real cost."],
    zh: ["玻璃大炮", "伤害 +25%，最大血量 -10%。", "更强输出，但更脆。"],
    apply: () => {
      state.rewardMods.damageBonus += 0.25;
      state.rewardMods.hpBonus -= 0.1;
    },
  },
  {
    id: "heavy_armor",
    kind: "other",
    en: ["Heavy Armor", "+18% max HP, -5% damage.", "Safer frontlines."],
    zh: ["重甲训练", "最大血量 +18%，伤害 -5%。", "前排更稳，但输出低一点。"],
    apply: () => {
      state.rewardMods.hpBonus += 0.18;
      state.rewardMods.damageBonus -= 0.05;
    },
  },
  {
    id: "paid_research",
    kind: "upgrade",
    en: ["Paid Research", "+4 upgrade points, -1200 starting gold.", "A powerful upgrade trade."],
    zh: ["付费研究", "获得 +4 升级点，开局金币 -1200。", "强力升级，但少很多钱。"],
    apply: () => {
      state.upgradePoints += 4;
      state.rewardMods.startingGoldBonus -= 1200;
      saveUpgradePoints(state.upgradePoints);
    },
  },
  {
    id: "quick_training",
    kind: "damage",
    en: ["Quick Training", "+12% attack speed, -6% damage.", "Good for slow heavy units."],
    zh: ["快速训练", "攻击速度 +12%，伤害 -6%。", "适合慢速重兵。"],
    apply: () => {
      state.rewardMods.attackSpeedBonus += 0.12;
      state.rewardMods.damageBonus -= 0.06;
    },
  },
  {
    id: "cheap_contracts",
    kind: "other",
    en: ["Cheap Contracts", "+300 starting gold, -18% damage.", "More units, weaker hits."],
    zh: ["廉价契约", "开局金币 +300，伤害 -18%。", "兵更多，但打人更痛苦。"],
    apply: () => {
      state.rewardMods.startingGoldBonus += 300;
      state.rewardMods.damageBonus -= 0.18;
    },
  },
  {
    id: "blood_research",
    kind: "upgrade",
    en: ["Blood Research", "+6 upgrade points, -18% max HP.", "Huge growth, dangerous army."],
    zh: ["血色研究", "获得 +6 升级点，最大血量 -18%。", "成长很高，但部队很脆。"],
    apply: () => {
      state.upgradePoints += 6;
      state.rewardMods.hpBonus -= 0.18;
      saveUpgradePoints(state.upgradePoints);
    },
  },
  {
    id: "siege_drill",
    kind: "other",
    en: ["Siege Drill", "+25% damage to walls, -5% unit damage.", "Better for maze levels."],
    zh: ["攻城训练", "对墙伤害 +25%，单位伤害 -5%。", "迷宫关更好用。"],
    apply: () => {
      state.rewardMods.wallDamageBonus += 0.25;
      state.rewardMods.damageBonus -= 0.05;
    },
  },
  {
    id: "elite_focus",
    kind: "damage",
    en: ["Elite Focus", "+18% damage, -450 starting gold.", "Fewer units, stronger hits."],
    zh: ["精英专注", "伤害 +18%，开局金币 -450。", "兵少一点，但输出更高。"],
    apply: () => {
      state.rewardMods.damageBonus += 0.18;
      state.rewardMods.startingGoldBonus -= 450;
    },
  },
];

const pvzRewardCardPool = [
  {
    id: "pvz_pea_damage",
    kind: "damage",
    pvz: true,
    en: ["Sharper Peas", "Plant damage +15%.", "Simple and strong."],
    zh: ["锋利豌豆", "植物伤害 +15%。", "简单直接的强化。"],
    apply: () => { state.pvzMods.damageBonus += 0.15; for (const unit of state.units) if (unit.team === "blue" && PLANT_TYPE_IDS.has(unit.typeId)) unit.damage *= 1.15; },
  },
  {
    id: "pvz_sun_boost",
    kind: "other",
    pvz: true,
    en: ["Sunny Day", "Sunflowers make +20% gold.", "More economy."],
    zh: ["阳光加成", "向日葵产金币 +20%。", "经济更快。"],
    apply: () => { state.pvzMods.sunGoldBonus += 0.2; },
  },
  {
    id: "pvz_hp_boost",
    kind: "other",
    pvz: true,
    en: ["Thick Stems", "Plants gain +25% max HP.", "Better defense."],
    zh: ["粗壮茎叶", "植物最大血量 +25%。", "防线更稳。"],
    apply: () => { state.pvzMods.hpBonus += 0.25; for (const unit of state.units) if (unit.team === "blue" && PLANT_TYPE_IDS.has(unit.typeId)) { const gain = Math.round(unit.maxHp * 0.25); unit.maxHp += gain; unit.hp += gain; } },
  },
  {
    id: "pvz_fast_fire",
    kind: "damage",
    pvz: true,
    en: ["Rapid Sprouts", "Plants attack +18% faster.", "More peas in the air."],
    zh: ["快速发芽", "植物攻击速度 +18%。", "豌豆更多。"],
    apply: () => { state.pvzMods.attackSpeedBonus += 0.18; for (const unit of state.units) if (unit.team === "blue" && PLANT_TYPE_IDS.has(unit.typeId)) unit.cooldownTime = Math.max(0.05, unit.cooldownTime / 1.18); },
  },
  {
    id: "pvz_cheap_plants",
    kind: "upgrade",
    pvz: true,
    en: ["Seed Sale", "Plants cost 10% less.", "Works for later buys."],
    zh: ["种子打折", "植物价格 -10%。", "之后购买生效。"],
    apply: () => { state.pvzMods.plantDiscount += 0.1; },
  },
  {
    id: "pvz_cell_sale",
    kind: "upgrade",
    pvz: true,
    en: ["Garden Expansion", "Empty cells cost 30% less.", "Expand faster."],
    zh: ["花园扩建", "购买空格价格 -30%。", "扩建更快。"],
    apply: () => { state.pvzMods.cellDiscount += 0.3; },
  },
  {
    id: "pvz_risky_harvest",
    kind: "other",
    pvz: true,
    en: ["Risky Harvest", "+350 gold now, zombie waves +15% larger.", "Greedy but dangerous."],
    zh: ["危险收割", "立刻 +350 金币，之后僵尸数量 +15%。", "贪，但危险。"],
    apply: () => { state.budget += 350; state.pvzMods.zombieCountBonus += 0.15; },
  },
];
const levelUnitUnlocks = [
  { maxLevel: 3, banned: ["dragonling", "adultdragon", "tiamat", "frostgiant", "giantzombie", "gatlingshooter", "chomper"] },
  { maxLevel: 7, banned: ["dragonling", "adultdragon", "tiamat", "giantzombie", "gatlingshooter"] },
  { maxLevel: 9, banned: ["adultdragon", "tiamat", "giantzombie"] },
  { maxLevel: 29, banned: ["tiamat"] },
  { maxLevel: 30, banned: [] },
];

const levelSpecificBans = {
  12: ["adultdragon", "peashooter", "repeater", "gatlingshooter", "portalmage"],
  13: ["adultdragon", "peashooter", "repeater", "gatlingshooter", "portalmage"],
  14: ["adultdragon", "peashooter", "repeater", "gatlingshooter", "portalmage"],
  15: ["adultdragon", "peashooter", "repeater", "gatlingshooter", "portalmage"],
  16: ["adultdragon", "peashooter", "repeater", "gatlingshooter", "portalmage"],
  17: ["portalmage"],
  18: ["portalmage"],
  19: ["portalmage"],
  20: ["peashooter", "repeater", "gatlingshooter", "portalmage"],
  21: ["portalmage"],
  22: ["portalmage"],
  23: ["portalmage"],
  24: ["portalmage"],
  25: ["portalmage"],
  26: ["portalmage"],
  27: ["portalmage"],
  28: ["portalmage"],
  29: ["portalmage"],
  30: ["portalmage"],
};

const INFECTABLE_TYPE_IDS = new Set([
  "clubber",
  "shield",
  "spear",
  "archer",
  "berserker",
  "hammer",
  "musketeer",
  "cannon",
  "knight",
  "assassin",
  "crossbow",
  "bomber",
  "giant",
  "wolf",
  "sharpshooter",
  "wallcrusher",
  "whirlhammer",
]);


const CHARMABLE_HUMAN_TYPE_IDS = new Set([
  "clubber",
  "shield",
  "spear",
  "archer",
  "berserker",
  "hammer",
  "musketeer",
  "cannon",
  "knight",
  "assassin",
  "crossbow",
  "bomber",
  "paladin",
  "flameknight",
  "sharpshooter",
  "bannerlord",
  "stormlancer",
  "unit67",
]);
const translations = {
  zh: {
    subtitle: "布阵、开战、看小人乱斗",
    home: "主页",
    homeSubtitle: "选择模式",
    sandboxModeTitle: "沙盒",
    sandboxModeDesc: "无限金币，可以放红队和蓝队，测试自定义兵种、建筑和Boss。",
    levelsModeTitle: "关卡",
    levelsModeDesc: "用有限金币挑战固定敌军，赢了就解锁下一关。",
    pvzModeTitle: "植物无尽",
    pvzModeDesc: "只能使用植物，按格子一次放 9 个，对抗越来越多的僵尸。",
    start: "开战",
    pause: "暂停",
    reset: "重置",
    units: "兵种",
    sandbox: "沙盒模式",
    blue: "蓝队",
    red: "红队",
    batchPlace: "一次放置数量",
    exportFormation: "导出阵容",
    importFormation: "导入阵容",
    exitChallenge: "退出挑战",
    formationPlaceholder: "阵容码",
    formationExported: "阵容码已生成，可以复制给别人",
    formationImported: "阵容已导入",
    formationInvalid: "阵容码无效",
    challengeExited: "已退出挑战模式",
    custom: "自定义兵种",
    create: "创建兵种",
    battle: "战况",
    control: "操控",
    controlEmpty: "战斗中点击兵种操控",
    controlKeys: "WASD移动 / 空格攻击 / V第二攻击 / B特殊 / 字母O建造模式 / 右键放置",
    controlPickBuild: "切换建筑",
    controlBuild: "建造",
    controlDemolish: "拆除",
    controlSelected: "正在操控",
    noControlTarget: "没有可操控兵种",
    noSpecialReady: "没有可用特殊技能",
    level: "关卡",
    loadLevel: "加载关卡",
    levelLocked: "还没解锁",
    levelUnlocked: "已解锁下一关",
    levelInfo: "金币",
    levelHint: "赢下当前关卡会解锁下一关",
    levelLoaded: "关卡已加载",
    levelWin: "关卡胜利",
    upgradePoints: "升级点",
    upgradePointEarned: "获得升级点",
    upgradeNeedPoint: "升级点不够",
    alreadyCleared: "已通关",
    rewardTitle: "选择奖励",
    rewardSubtitle: "选择一张卡，它会影响后面的关卡。",
    enemySize: "敌军规模",
    speed: "镜头速度",
    erase: "橡皮擦",
    random: "随机布阵",
    budget: "金币",
    infiniteMoney: "金币 ∞",
    setup: "布阵",
    fight: "战斗",
    paused: "暂停",
    ended: "结束",
    items: "道具",
    itemUseHint: "选择道具后点击战场释放",
    itemNeedBattle: "开战后才能使用道具",
    itemNoGold: "金币不够买这个道具",
    itemLevelLocked: "关卡模式不能使用攻击道具",
    itemCast: "道具已释放",
    itemHit: "喷中友军",
    itemCancel: "取消道具",
    itemCancelHint: "停止瞄准",
    blueWin: "蓝队胜利",
    redWin: "红队胜利",
    mapWall: "墙",
    mapThickWall: "厚墙",
    mapArrowWall: "透射墙",
    mapUnbreakableWall: "不可破坏墙",
    mapWater: "水坑",
    mapFireGround: "火地",
    mapGrass: "草丛",
    mapHighGround: "高地",
    mapEraseTerrain: "删地形",
    upgrade: "升级兵种",
    saveSlot: "保存",
    loadSlot: "读取",
    mapCommand: "指挥",
    mapFocus: "集火",
    mapEraseWall: "删除墙",
    mapClearWalls: "清空墙",
    wallDirection: "方向",
    wallLength: "长度",
    wallHorizontal: "横向",
    wallVertical: "竖向",
    wallOverlap: "这里已经有墙了",
    wallNeedGold: "金币不够放这面墙",
    wallStartHint: "再点一下确认墙的长度和方向",
    commandHint: "点击战场，命令当前队伍移动",
    focusHint: "点击一个敌人，当前队伍会优先攻击它",
    itemNames: {
      fireball: "火球",
      defense: "防御药水",
      power: "力量药水",
      speed: "速度药水",
      heal: "治疗药水",
      meteor: "陨石",
      wall: "召唤墙",
      lightning: "闪电链",
    },
    form: {
      customName: "名字",
      customHp: "血量",
      customDamage: "伤害",
      customKnockback: "击退",
      customAttackSpeed: "攻速",
      customMoveSpeed: "移速",
      customSize: "大小",
      customRange: "攻击距离",
      customStopDistance: "停止距离",
      customDodge: "躲闪概率",
      customWeapon: "武器",
      customRanged: "远程攻击",
      customAttackWalls: "攻击墙",
      areaAttack: "范围攻击",
      customAreaAttack: "是否范围攻击",
      customAreaRange: "范围攻击范围",
      customAreaDamage: "范围攻击伤害",
      customBurstCooldown: "爆发攻击冷却",
      customBurstCount: "爆发攻击次数",
      secondAttack: "第二攻击",
      customSecondWeapon: "第2攻击物品",
      customSecondRange: "第2攻击范围",
      customSecondRanged: "第2攻击是远程",
      customSecondDamage: "第2攻击伤害",
      customSecondBurstCooldown: "第2爆发攻击冷却",
      customSecondBurstCount: "第2爆发攻击次数",
      skills: "特殊技能",
      skillExplode: "死亡自爆",
      skillExplodeDamage: "自爆伤害",
      skillExplodeRange: "自爆范围",
      skillPoisonSlime: "中毒之液",
      skillSlimeChance: "喷出概率",
      skillSummonOnKill: "击杀召唤棍兵",
      skillSummonChance: "召唤概率",
      skillSummonInheritPercent: "继承敌人数值%",
      skillSummonInheritSkills: "继承特殊技能",
      skillSummonInheritSecond: "继承第二攻击",
      skillDamageOnKill: "击杀加伤害",
      skillDamageGain: "每次加多少伤害",
      skillDamageAura: "每秒范围伤害",
      skillDamageAuraRange: "范围伤害半径",
      skillDamageAuraDamage: "每秒范围伤害",
      skillTornado: "龙卷风",
      skillTornadoDamage: "龙卷风伤害",
      skillTornadoDuration: "龙卷风持续时间",
      skillTornadoRange: "龙卷风范围",
      skillFireBreath: "喷火",
      skillFireParticleSize: "火焰粒子大小",
      skillFireDuration: "火焰持续时间",
      skillFireRange: "火焰范围",
      skillFireball: "火球术",
      skillFireballDamage: "火球伤害",
      skillHolyShield: "圣光护盾",
      skillHolyShieldRange: "圣光护盾范围",
      skillHolyShieldReduction: "圣光护盾减伤%",
      skillFreezeAttack: "攻击冰冻",
      skillBlockRanged: "格挡远程概率",
      skillBerserkHp: "狂暴触发血量",
      skillBerserkDamage: "狂暴攻击%",
      skillBerserkHeal: "狂暴回血",
    },
    weapons: {
      club: "木棒",
      spear: "长矛",
      hammer: "战锤",
      bow: "弓",
      musket: "火枪",
      cannon: "火炮",
      none: "无",
    },
    unitsMap: {
      clubber: ["棍兵", "近战"],
      shield: ["盾卫", "抗线"],
      spear: ["长矛兵", "穿刺"],
      archer: ["弓手", "远程"],
      berserker: ["狂战士", "高速"],
      hammer: ["锤兵", "击退"],
      musketeer: ["火枪手", "远射"],
      cannon: ["炮手", "爆炸"],
      knight: ["骑士", "装甲"],
      assassin: ["刺客", "闪避"],
      crossbow: ["弩手", "穿透"],
      poisoner: ["毒液兵", "毒液"],
      stormcaller: ["风暴法师", "龙卷风"],
      bomber: ["爆破兵", "自爆"],
      giant: ["巨汉", "重击"],
      wolf: ["战狼", "扑咬"],
      slimebeast: ["毒史莱姆", "毒液"],
      dragonling: ["幼龙", "火焰"],
      adultdragon: ["成年龙", "火球巨兽"],
      tiamat: ["龙神-提亚马特", "五色龙神"],
      firebeast: ["火炮兽", "范围"],
      paladin: ["圣骑士", "格挡"],
      plaguewizard: ["瘟疫法师", "毒风"],
      frostmage: ["冰法师", "冰冻"],
      necromancer: ["死灵术士", "召唤"],
      bannerlord: ["战旗手", "光环"],
      flameknight: ["火焰骑士", "火球"],
      frostgiant: ["冰霜巨人", "冻结"],
      sharpshooter: ["神射手", "远狙"],
      portalmage: ["传送门法师", "召兵"],
      unit67: ["67", "凝视定身"],
      hydra: ["三头幼龙", "三连火焰"],
      voidbinder: ["虚空束缚者", "定身法术"],
      wallcrusher: ["破墙重锤", "拆墙"],
      phoenixguard: ["凤凰卫士", "圣火护盾"],
      stormlancer: ["风暴枪兵", "爆发远程"],
      whirlhammer: ["旋风重锤兵", "跃空重砸"],
      zombie: ["僵尸", "感染"],
      coneheadzombie: ["路障僵尸", "高血感染"],
      bucketzombie: ["铁桶僵尸", "重甲感染"],
      footballzombie: ["橄榄球僵尸", "高速重甲"],
      giantzombie: ["巨人僵尸", "Boss感染"],
      armoredgiantzombie: ["重甲武装巨人僵尸", "召唤冲锋"],
      crystalbehemoth: ["水晶巨兽", "震地护甲"],
      stormogre: ["雷暴巨魔", "风暴炮击"],
      voidwardenboss: ["虚空督军", "定身屏障"],
      archmagelord: ["奥术魔王", "万法策反"],
      sunflower: ["向日葵", "产金币"],
      nutwall: ["坚果墙", "高血防线"],
      obsidianwargod: ["黑曜石战神", "不动战神"],
      peashooter: ["豌豆射手", "固定远程"],
      repeater: ["双发射手", "双发豌豆"],
      gatlingshooter: ["机枪射手", "狂暴扫射"],
      wildgatlingshooter: ["狂野机枪射手", "永恒大招"],
      corncannon: ["玉米加农炮", "核弹轰炸"],
      chomper: ["大嘴花", "吞咬爆发"],
      arrowtower: ["旧箭塔", "固定五连射"],
    },
    tags: {
      ranged: "远程",
      melee: "近战",
      explode: "自爆",
      poisonTornado: "中毒龙卷风",
      poison: "中毒液",
      summon: "击杀召唤",
      killDamage: "击杀成长",
      auraDamage: "伤害光环",
      tornado: "龙卷风",
      fire: "喷火",
      fireball: "火球术",
      holyShield: "圣光护盾",
      freeze: "冰冻",
      block: "远程格挡",
      berserk: "狂暴",
    },
  },
  en: {
    subtitle: "Place units, start battle, watch chaos",
    home: "Home",
    homeSubtitle: "Choose a mode",
    sandboxModeTitle: "Sandbox",
    sandboxModeDesc: "Infinite gold, place red and blue units, and test custom units, buildings, and bosses.",
    levelsModeTitle: "Levels",
    levelsModeDesc: "Use limited gold against fixed enemy levels and unlock the next challenge.",
    pvzModeTitle: "PvZ Endless",
    pvzModeDesc: "Use plants only, place 9 at a time on grid cells, and survive endless zombie waves.",
    start: "Start",
    pause: "Pause",
    reset: "Reset",
    units: "Units",
    sandbox: "Sandbox",
    blue: "Blue",
    red: "Red",
    batchPlace: "Place Count",
    exportFormation: "Export Formation",
    importFormation: "Import Formation",
    exitChallenge: "Exit Challenge",
    formationPlaceholder: "Formation code",
    formationExported: "Formation code created. Copy it to share",
    formationImported: "Formation imported",
    formationInvalid: "Invalid formation code",
    challengeExited: "Challenge mode exited",
    custom: "Custom Unit",
    create: "Create Unit",
    battle: "Battle",
    control: "Control",
    controlEmpty: "Click a unit during battle",
    controlKeys: "WASD Move / Space Attack / V Second / B Skill / Letter O Build Mode / Right Click Place",
    controlPickBuild: "Pick Building",
    controlBuild: "Build",
    controlDemolish: "Demolish",
    controlSelected: "Controlling",
    noControlTarget: "No controllable unit",
    noSpecialReady: "No special skill ready",
    level: "Level",
    loadLevel: "Load Level",
    levelLocked: "Locked",
    levelUnlocked: "Next level unlocked",
    levelInfo: "Gold",
    levelHint: "Win this level to unlock the next one",
    levelLoaded: "Level loaded",
    levelWin: "Level cleared",
    upgradePoints: "Upgrade Points",
    upgradePointEarned: "Upgrade point earned",
    upgradeNeedPoint: "Not enough upgrade points",
    alreadyCleared: "Cleared",
    rewardTitle: "Choose a Reward",
    rewardSubtitle: "Pick one card. It affects later levels.",
    enemySize: "Enemy Size",
    speed: "Camera Speed",
    erase: "Erase",
    random: "Random",
    budget: "Gold",
    infiniteMoney: "Gold ∞",
    setup: "Setup",
    fight: "Battle",
    paused: "Paused",
    ended: "Ended",
    items: "Items",
    itemUseHint: "Select an item, then click the battlefield",
    itemNeedBattle: "Items can be used after battle starts",
    itemNoGold: "Not enough gold for this item",
    itemLevelLocked: "Attack items are locked in Levels",
    itemCast: "Item used",
    itemHit: "Friendly units hit",
    itemCancel: "Cancel Item",
    itemCancelHint: "stop aiming",
    blueWin: "Blue wins",
    redWin: "Red wins",
    mapWall: "Wall",
    mapThickWall: "Thick Wall",
    mapArrowWall: "Arrow Wall",
    mapUnbreakableWall: "Unbreakable Wall",
    mapWater: "Water",
    mapFireGround: "Fire Ground",
    mapGrass: "Grass",
    mapHighGround: "High Ground",
    mapEraseTerrain: "Erase Terrain",
    upgrade: "Upgrade Unit",
    saveSlot: "Save",
    loadSlot: "Load",
    mapCommand: "Command",
    mapFocus: "Focus",
    mapEraseWall: "Erase Wall",
    mapClearWalls: "Clear Walls",
    wallDirection: "Direction",
    wallLength: "Length",
    wallHorizontal: "Horizontal",
    wallVertical: "Vertical",
    wallOverlap: "A wall is already there",
    wallNeedGold: "Not enough gold for this wall",
    wallStartHint: "Click again to set wall length and direction",
    commandHint: "Click the battlefield to command the current team",
    focusHint: "Click an enemy to make the current team focus it",
    itemNames: {
      fireball: "Fireball",
      defense: "Defense Potion",
      power: "Power Potion",
      speed: "Speed Potion",
      heal: "Healing Potion",
      meteor: "Meteor",
      wall: "Summon Wall",
      lightning: "Chain Lightning",
    },
    form: {
      customName: "Name",
      customHp: "Health",
      customDamage: "Damage",
      customKnockback: "Knockback",
      customAttackSpeed: "Attack Speed",
      customMoveSpeed: "Move Speed",
      customSize: "Size",
      customRange: "Attack Range",
      customStopDistance: "Stop Distance",
      customDodge: "Dodge Chance",
      customWeapon: "Weapon",
      customRanged: "Ranged Attack",
      customAttackWalls: "Attack Walls",
      areaAttack: "Area Attack",
      customAreaAttack: "Use Area Attack",
      customAreaRange: "Area Radius",
      customAreaDamage: "Area Damage",
      customBurstCooldown: "Burst Cooldown",
      customBurstCount: "Burst Count",
      secondAttack: "Second Attack",
      customSecondWeapon: "Second Weapon",
      customSecondRange: "Second Range",
      customSecondRanged: "Second Attack Is Ranged",
      customSecondDamage: "Second Damage",
      customSecondBurstCooldown: "Second Burst Cooldown",
      customSecondBurstCount: "Second Burst Count",
      skills: "Special Skills",
      skillExplode: "Death Explosion",
      skillExplodeDamage: "Explosion Damage",
      skillExplodeRange: "Explosion Range",
      skillPoisonSlime: "Poison Slime",
      skillSlimeChance: "Spray Chance",
      skillSummonOnKill: "Summon Clubber On Kill",
      skillSummonChance: "Summon Chance",
      skillSummonInheritPercent: "Inherit Enemy Stats %",
      skillSummonInheritSkills: "Inherit Special Skills",
      skillSummonInheritSecond: "Inherit Second Attack",
      skillDamageOnKill: "Gain Damage On Kill",
      skillDamageGain: "Damage Gain",
      skillDamageAura: "Damage Aura",
      skillDamageAuraRange: "Aura Radius",
      skillDamageAuraDamage: "Aura Damage Per Second",
      skillTornado: "Tornado",
      skillTornadoDamage: "Tornado Damage",
      skillTornadoDuration: "Tornado Duration",
      skillTornadoRange: "Tornado Range",
      skillFireBreath: "Fire Breath",
      skillFireParticleSize: "Fire Particle Size",
      skillFireDuration: "Burn Duration",
      skillFireRange: "Fire Range",
      skillFireball: "Fireball",
      skillFireballDamage: "Fireball Damage",
      skillHolyShield: "Holy Shield",
      skillHolyShieldRange: "Holy Shield Range",
      skillHolyShieldReduction: "Holy Shield Damage Reduction %",
      skillFreezeAttack: "Freeze Attack",
      skillBlockRanged: "Block Ranged Chance",
      skillBerserkHp: "Berserk Trigger HP",
      skillBerserkDamage: "Berserk Damage%",
      skillBerserkHeal: "Berserk Heal",
    },
    weapons: {
      club: "Club",
      spear: "Spear",
      hammer: "Hammer",
      bow: "Bow",
      musket: "Musket",
      cannon: "Cannon",
      none: "None",
    },
    unitsMap: {
      clubber: ["Clubber", "Melee"],
      shield: ["Shield Guard", "Tank"],
      spear: ["Spearman", "Pierce"],
      archer: ["Archer", "Ranged"],
      berserker: ["Berserker", "Fast"],
      hammer: ["Hammerer", "Knockback"],
      musketeer: ["Musketeer", "Long Shot"],
      cannon: ["Cannoneer", "Explosive"],
      knight: ["Knight", "Armored"],
      assassin: ["Assassin", "Dodger"],
      crossbow: ["Crossbowman", "Piercing Shot"],
      poisoner: ["Poisoner", "Slime"],
      stormcaller: ["Storm Caller", "Tornado"],
      bomber: ["Bomber", "Death Blast"],
      giant: ["Giant", "Heavy"],
      wolf: ["War Wolf", "Pounce"],
      slimebeast: ["Slime Beast", "Poison"],
      dragonling: ["Dragonling", "Fire"],
      adultdragon: ["Adult Dragon", "Fire Tyrant"],
      tiamat: ["Tiamat", "Fivefold Dragon God"],
      firebeast: ["Blast Beast", "Area"],
      paladin: ["Paladin", "Guard"],
      plaguewizard: ["Plague Wizard", "Poison Storm"],
      frostmage: ["Frost Mage", "Freeze"],
      necromancer: ["Necromancer", "Summon"],
      bannerlord: ["Banner Lord", "Aura"],
      flameknight: ["Flame Knight", "Fireball"],
      frostgiant: ["Frost Giant", "Freeze"],
      sharpshooter: ["Sharpshooter", "Snipe"],
      portalmage: ["Portal Mage", "Spawner"],
      unit67: ["67", "Stasis Gaze"],
      hydra: ["Hydra Whelp", "Triple Fire"],
      voidbinder: ["Void Binder", "Stasis Spell"],
      wallcrusher: ["Wall Crusher", "Siege"],
      phoenixguard: ["Phoenix Guard", "Holy Fire"],
      stormlancer: ["Storm Lancer", "Burst Shot"],
      whirlhammer: ["Whirl Hammer", "Sky Slam"],
      zombie: ["Zombie", "Infection"],
      coneheadzombie: ["Conehead Zombie", "Tough Infection"],
      bucketzombie: ["Bucket Zombie", "Armored Infection"],
      footballzombie: ["Football Zombie", "Fast Heavy"],
      giantzombie: ["Giant Zombie", "Boss Infection"],
      armoredgiantzombie: ["Armored Giant Zombie", "Summon Rush"],
      crystalbehemoth: ["Crystal Behemoth", "Quake Armor"],
      stormogre: ["Storm Ogre", "Storm Barrage"],
      voidwardenboss: ["Void Warden", "Stasis Barrier"],
      archmagelord: ["Archmage Lord", "All Magic"],
      sunflower: ["Sunflower", "Gold Producer"],
      nutwall: ["Wall-nut", "High HP Wall"],
      obsidianwargod: ["Obsidian War God", "Immovable Titan"],
      peashooter: ["Peashooter", "Rooted Ranged"],
      repeater: ["Repeater", "Double Pea"],
      gatlingshooter: ["Gatling Shooter", "Fan Barrage"],
      wildgatlingshooter: ["Wild Gatling Shooter", "Forever Overdrive"],
      corncannon: ["Corn Cannon", "Nuke Blast"],
      chomper: ["Chomper", "Bite Blast"],
      arrowtower: ["Old Arrow Tower", "Fixed Barrage"],
    },
    tags: {
      ranged: "Ranged",
      melee: "Melee",
      explode: "Explode",
      poisonTornado: "Poison Tornado",
      poison: "Poison",
      summon: "Summon",
      killDamage: "Kill Growth",
      auraDamage: "Damage Aura",
      tornado: "Tornado",
      fire: "Fire",
      fireball: "Fireball",
      holyShield: "Holy Shield",
      freeze: "Freeze",
      block: "Ranged Block",
      berserk: "Berserk",
    },
  },
};

function applyLanguage(lang) {
  const text = translations[lang] || translations.zh;
  state.language = lang;
  const setText = (selector, value) => {
    const node = document.querySelector(selector);
    if (node) node.textContent = value;
  };
  setText(".brand p", text.subtitle);
  setText("#homeSubtitle", text.homeSubtitle);
  setText("#sandboxModeTitle", text.sandboxModeTitle);
  setText("#sandboxModeDesc", text.sandboxModeDesc);
  setText("#levelsModeTitle", text.levelsModeTitle);
  setText("#levelsModeDesc", text.levelsModeDesc);
  setText("#pvzModeTitle", text.pvzModeTitle);
  setText("#pvzModeDesc", text.pvzModeDesc);
  if (homeBtn) homeBtn.textContent = text.home;
  startBtn.textContent = text.start;
  pauseBtn.textContent = text.pause;
  resetBtn.textContent = text.reset;
  setText(".roster .panel-title h2", text.units);
  const sandboxLabel = sandboxToggle.closest("label");
  if (sandboxLabel) {
    sandboxLabel.childNodes[sandboxLabel.childNodes.length - 1].textContent = ` ${text.sandbox}`;
  }
  blueTeamBtn.textContent = text.blue;
  redTeamBtn.textContent = text.red;
  if (batchPlaceLabel) batchPlaceLabel.textContent = text.batchPlace;
  if (exportFormationBtn) exportFormationBtn.textContent = text.exportFormation;
  if (importFormationBtn) importFormationBtn.textContent = text.importFormation;
  if (exitChallengeBtn) exitChallengeBtn.textContent = text.exitChallenge;
  if (formationCode) formationCode.placeholder = text.formationPlaceholder;
  wallToolBtn.textContent = text.mapWall;
  thickWallToolBtn.textContent = text.mapThickWall;
  arrowWallToolBtn.textContent = text.mapArrowWall;
  unbreakableWallToolBtn.textContent = text.mapUnbreakableWall;
  waterToolBtn.textContent = text.mapWater;
  fireTerrainToolBtn.textContent = text.mapFireGround;
  grassToolBtn.textContent = text.mapGrass;
  highGroundToolBtn.textContent = text.mapHighGround;
  eraseTerrainBtn.textContent = text.mapEraseTerrain;
  upgradeSelectedBtn.textContent = state.levelMode ? `${text.upgrade} (${text.upgradePoints}: ${state.upgradePoints})` : text.upgrade;
  saveSlotBtns.forEach((button, index) => {
    if (button) button.textContent = `${text.saveSlot} ${index + 1}`;
  });
  loadSlotBtns.forEach((button, index) => {
    if (button) button.textContent = `${text.loadSlot} ${index + 1}`;
  });
  commandToolBtn.textContent = text.mapCommand;
  focusToolBtn.textContent = text.mapFocus;
  eraseWallBtn.textContent = text.mapEraseWall;
  clearWallsBtn.textContent = text.mapClearWalls;
  setText(".custom-builder summary", text.custom);
  createCustomBtn.textContent = text.create;
  setText(".inspector .panel-title h2", text.battle);
  if (controlTitle) controlTitle.textContent = text.control;
  if (controlBuildNextBtn) controlBuildNextBtn.textContent = text.controlPickBuild;
  if (controlBuildPlaceBtn) controlBuildPlaceBtn.textContent = text.controlBuild;
  if (controlDemolishBtn) controlDemolishBtn.textContent = text.controlDemolish;
  setText("#levelLabelText", text.level);
  if (loadLevelBtn) loadLevelBtn.textContent = text.loadLevel;
  setText("#enemySizeLabelText", text.enemySize);
  setText("#cameraSpeedLabelText", text.speed);
  if (state.selected !== "erase") eraseBtn.textContent = text.erase;
  randomBtn.textContent = text.random;
  applyFormLanguage(text);
  renderLevelSelect();
  renderUnitList();
  updateUi();
}

function setLabelText(control, value) {
  const label = control && control.closest("label");
  if (!label) return;
  for (const node of label.childNodes) {
    if (node.nodeType === 3 && node.textContent.trim()) {
      node.textContent = ` ${value} `;
      return;
    }
  }
}

function applyFormLanguage(text) {
  for (const [id, value] of Object.entries(text.form)) {
    if (id === "skills") continue;
    setLabelText(document.querySelector(`#${id}`), value);
  }
  const heading = document.querySelector(".skill-box h3");
  const headings = document.querySelectorAll(".skill-box h3");
  if (headings[0]) headings[0].textContent = text.form.areaAttack;
  if (headings[1]) headings[1].textContent = text.form.secondAttack;
  if (headings[2]) headings[2].textContent = text.form.skills;
  for (const option of customWeapon.options) {
    option.textContent = text.weapons[option.value] || option.textContent;
  }
  for (const option of customSecondWeapon.options) {
    option.textContent = text.weapons[option.value] || option.textContent;
  }
}

function syncLanguage() {
  if (languageSelect.value !== state.language) {
    applyLanguage(languageSelect.value);
  }
}

function showHome() {
  homeScreen?.classList.remove("home-hidden");
  appShell?.classList.add("app-hidden");
  document.body.dataset.mode = "home";
}

function resizeCanvas() {
  canvas.width = 1280;
  canvas.height = 760;
}
function showGame() {
  homeScreen?.classList.add("home-hidden");
  appShell?.classList.remove("app-hidden");
  resizeCanvas();
  updateUi();
}

const unitTypes = [
  {
    id: "clubber",
    name: "Clubber",
    tag: "Melee",
    glyph: "C",
    price: 85,
    hp: 86,
    damage: 15,
    range: 34,
    speed: 52,
    radius: 15,
    cooldown: 0.62,
    knockback: 2.3,
    weapon: "club",
    color: "#58a8ff",
  },
  {
    id: "shield",
    name: "Shield Guard",
    tag: "Tank",
    glyph: "S",
    price: 155,
    hp: 180,
    damage: 10,
    range: 30,
    speed: 38,
    radius: 18,
    cooldown: 0.58,
    knockback: 1.9,
    weapon: "shield",
    skills: { blockRangedChance: 0.55 },
    color: "#6fd4ff",
  },
  {
    id: "spear",
    name: "Spearman",
    tag: "Pierce",
    glyph: "P",
    price: 165,
    hp: 96,
    damage: 26,
    range: 58,
    speed: 46,
    radius: 15,
    cooldown: 0.82,
    knockback: 2.7,
    weapon: "spear",
    color: "#8fbfff",
  },
  {
    id: "archer",
    name: "Archer",
    tag: "Ranged",
    glyph: "A",
    price: 185,
    hp: 52,
    damage: 14,
    range: 205,
    speed: 34,
    radius: 14,
    cooldown: 1.08,
    projectileSpeed: 420,
    weapon: "bow",
    color: "#9fd7ff",
  },
  {
    id: "berserker",
    name: "Berserker",
    tag: "Fast",
    glyph: "B",
    price: 135,
    hp: 76,
    damage: 18,
    range: 32,
    speed: 76,
    radius: 14,
    cooldown: 0.42,
    knockback: 2.1,
    weapon: "club",
    color: "#76d7c4",
  },
  {
    id: "hammer",
    name: "Hammerer",
    tag: "Knockback",
    glyph: "H",
    price: 230,
    hp: 155,
    damage: 34,
    range: 38,
    speed: 34,
    radius: 19,
    cooldown: 1.05,
    knockback: 4.2,
    weapon: "hammer",
    color: "#7f9cff",
  },
  {
    id: "musketeer",
    name: "Musketeer",
    tag: "Long Shot",
    glyph: "M",
    price: 320,
    hp: 58,
    damage: 38,
    range: 295,
    speed: 27,
    radius: 15,
    cooldown: 1.55,
    projectileSpeed: 620,
    weapon: "musket",
    color: "#bdd7ff",
  },
  {
    id: "cannon",
    name: "Cannoneer",
    tag: "Explosive",
    glyph: "K",
    price: 500,
    hp: 115,
    damage: 46,
    range: 285,
    speed: 20,
    radius: 21,
    cooldown: 2.15,
    projectileSpeed: 320,
    splash: 62,
    weapon: "cannon",
    color: "#89a4d8",
  },
  {
    id: "knight",
    name: "Knight",
    tag: "Armored",
    glyph: "N",
    price: 285,
    hp: 235,
    damage: 27,
    range: 36,
    speed: 36,
    radius: 20,
    cooldown: 0.78,
    knockback: 2.6,
    weapon: "spear",
    skills: { blockRangedChance: 0.42 },
    color: "#6f9adf",
  },
  {
    id: "assassin",
    name: "Assassin",
    tag: "Dodger",
    glyph: "X",
    price: 230,
    hp: 62,
    damage: 30,
    range: 34,
    speed: 92,
    radius: 13,
    cooldown: 0.38,
    knockback: 1.6,
    dodgeChance: 0.35,
    weapon: "club",
    color: "#b483ff",
  },
  {
    id: "crossbow",
    name: "Crossbowman",
    tag: "Piercing Shot",
    glyph: "R",
    price: 290,
    hp: 64,
    damage: 28,
    range: 245,
    speed: 30,
    radius: 15,
    cooldown: 1.15,
    projectileSpeed: 520,
    weapon: "bow",
    color: "#8fd2c1",
  },
  {
    id: "poisoner",
    name: "Poisoner",
    tag: "Slime",
    glyph: "O",
    price: 310,
    hp: 82,
    damage: 18,
    range: 205,
    speed: 36,
    radius: 16,
    cooldown: 1,
    projectileSpeed: 380,
    weapon: "bow",
    skills: { poisonSlime: true, slimeChance: 0.55 },
    color: "#79d66d",
  },
  {
    id: "stormcaller",
    name: "Storm Caller",
    tag: "Tornado",
    glyph: "T",
    price: 470,
    hp: 95,
    damage: 14,
    range: 240,
    speed: 24,
    radius: 17,
    cooldown: 1.4,
    projectileSpeed: 300,
    weapon: "bow",
    skills: { tornado: true },
    color: "#b7c8ff",
  },
  {
    id: "bomber",
    name: "Bomber",
    tag: "Death Blast",
    glyph: "D",
    price: 340,
    hp: 92,
    damage: 16,
    range: 30,
    speed: 64,
    radius: 17,
    cooldown: 0.7,
    knockback: 2.2,
    weapon: "club",
    skills: { explode: true, explodeDamage: 150, explodeRange: 115 },
    color: "#f0a15f",
  },
  {
    id: "giant",
    name: "Giant",
    tag: "Heavy",
    glyph: "G",
    price: 390,
    hp: 340,
    damage: 44,
    range: 42,
    speed: 28,
    radius: 25,
    cooldown: 1.3,
    knockback: 3.6,
    weapon: "club",
    color: "#5f86ff",
  },
  {
    id: "wolf",
    name: "War Wolf",
    tag: "Pounce",
    glyph: "W",
    price: 175,
    hp: 86,
    damage: 21,
    range: 30,
    speed: 104,
    radius: 14,
    cooldown: 0.48,
    knockback: 2.8,
    dodgeChance: 0.18,
    weapon: "club",
    color: "#9ec0d1",
  },
  {
    id: "slimebeast",
    name: "Slime Beast",
    tag: "Poison",
    glyph: "L",
    price: 330,
    hp: 190,
    damage: 17,
    range: 34,
    speed: 33,
    radius: 23,
    cooldown: 0.72,
    knockback: 1.8,
    weapon: "club",
    areaAttack: { range: 58, damage: 13 },
    skills: { poisonSlime: true, slimeChance: 0.72 },
    color: "#68d982",
  },
  {
    id: "dragonling",
    name: "Dragonling",
    tag: "Fire",
    glyph: "Y",
    price: 620,
    hp: 120,
    damage: 22,
    range: 235,
    stopDistance: 165,
    speed: 44,
    radius: 18,
    cooldown: 1.05,
    projectileSpeed: 420,
    weapon: "bow",
    areaAttack: { range: 36, damage: 9 },
    secondAttack: { weapon: "club", range: 38, damage: 22, ranged: false, projectileSpeed: 0, splash: 0, cooldown: 0.72 },
    skills: { fireBreath: true, fireball: true, fireDuration: 2.2, fireRange: 72, fireballDamage: 30 },
    color: "#f47b55",
  },
  {
    id: "adultdragon",
    name: "Adult Dragon",
    tag: "Fire Tyrant",
    glyph: "D",
    price: 3600,
    hp: 750,
    damage: 58,
    range: 290,
    stopDistance: 210,
    speed: 114,
    radius: 38,
    cooldown: 1.45,
    projectileSpeed: 340,
    splash: 105,
    knockback: 12.5,
    weapon: "cannon",
    areaAttack: { range: 115, damage: 28 },
    secondAttack: { weapon: "club", range: 82, damage: 74, ranged: false, projectileSpeed: 0, splash: 0, cooldown: 0.95 },
    skills: {
      fireBreath: true,
      fireball: true,
      meleeKnockbackWithFire: true,
      damageAura: true,
      damageAuraRange: 90,
      damageAuraDamage: 15,
      explode: true,
      explodeDamage: 120,
      explodeRange: 120,
      burnImmune: true,
      fireResist: 1,
      magicResist: 0.85,
      knockbackImmune: true,
      berserkHp: 400,
      berserkDamage: 0.5,
      berserkHeal: 80,
    },
    color: "#d94f36",
  },
  {
    id: "tiamat",
    name: "Tiamat",
    tag: "Fivefold Dragon God",
    glyph: "T5",
    price: 9000,
    hp: 10000,
    damage: 170,
    range: 135,
    stopDistance: 90,
    speed: 800,
    radius: 56,
    cooldown: 0.78,
    projectileSpeed: 0,
    splash: 0,
    knockback: 28,
    weapon: "club",
    areaAttack: { range: 175, damage: 72 },
    secondAttack: { weapon: "club", range: 145, damage: 210, ranged: false, projectileSpeed: 0, splash: 0, cooldown: 0.95 },
    skills: {
      tiamatBoss: true,
      fireBreath: true,
      fireball: false,
      fireballDamage: 160,
      fireRange: 330,
      fireDuration: 7,
      damageAura: true,
      damageAuraRange: 160,
      damageAuraDamage: 20,
      burnImmune: true,
      fireResist: 1,
      magicResist: 1,
      defensePercent: 100,
      defenseLossHp: 100,
      hitSpeedBoost: 10,
      knockbackImmune: true,
      forceKnockback: true,
      berserkHp: 3000,
      berserkDamage: 0.85,
      berserkHeal: 420,
    },
    color: "#6d2f69",
  },
  {
    id: "firebeast",
    name: "Blast Beast",
    tag: "Area",
    glyph: "F",
    price: 520,
    hp: 180,
    damage: 38,
    range: 255,
    stopDistance: 205,
    speed: 26,
    radius: 24,
    cooldown: 1.75,
    projectileSpeed: 300,
    splash: 72,
    weapon: "cannon",
    areaAttack: { range: 80, damage: 18 },
    color: "#d98a52",
  },
  {
    id: "paladin",
    name: "Paladin",
    tag: "Guard",
    glyph: "Q",
    price: 450,
    hp: 270,
    damage: 28,
    range: 44,
    speed: 34,
    radius: 21,
    cooldown: 0.82,
    knockback: 3,
    weapon: "spear",
    skills: { holyShield: true, holyShieldRange: 160, holyShieldReduction: 0.45, blockRangedChance: 0.42, berserkHp: 70, berserkDamage: 0.45, berserkHeal: 70 },
    color: "#7db0ff",
  },
  {
    id: "plaguewizard",
    name: "Plague Wizard",
    tag: "Poison Storm",
    glyph: "Z",
    price: 580,
    hp: 92,
    damage: 18,
    range: 250,
    stopDistance: 190,
    speed: 24,
    radius: 17,
    cooldown: 1.2,
    projectileSpeed: 360,
    weapon: "bow",
    areaAttack: { range: 62, damage: 12 },
    skills: { poisonSlime: true, slimeChance: 0.5, tornado: true },
    color: "#9ddc6e",
  },
  {
    id: "frostmage",
    name: "Frost Mage",
    tag: "Freeze",
    glyph: "I",
    price: 380,
    hp: 72,
    damage: 16,
    range: 245,
    stopDistance: 185,
    speed: 25,
    radius: 16,
    cooldown: 1.05,
    projectileSpeed: 390,
    weapon: "bow",
    areaAttack: { range: 52, damage: 8 },
    skills: { freezeAttack: true, damageAura: true, damageAuraRange: 70, damageAuraDamage: 4 },
    color: "#8ee8ff",
  },
  {
    id: "necromancer",
    name: "Necromancer",
    tag: "Summon",
    glyph: "V",
    price: 480,
    hp: 86,
    damage: 21,
    range: 225,
    stopDistance: 175,
    speed: 24,
    radius: 17,
    cooldown: 1.18,
    projectileSpeed: 360,
    weapon: "bow",
    skills: { summonOnKill: true, summonChance: 0.85, summonInheritPercent: 0.45, summonInheritSkills: false, summonInheritSecond: false, damageOnKill: true, damageGain: 3 },
    color: "#a77be8",
  },
  {
    id: "bannerlord",
    name: "Banner Lord",
    tag: "Aura",
    glyph: "J",
    price: 500,
    hp: 190,
    damage: 20,
    range: 42,
    speed: 32,
    radius: 21,
    cooldown: 0.85,
    knockback: 2.7,
    weapon: "spear",
    skills: { holyShield: true, holyShieldRange: 210, holyShieldReduction: 0.3, blockRangedChance: 0.2, berserkHp: 80, berserkDamage: 0.25, berserkHeal: 45 },
    color: "#f2cb62",
  },
  {
    id: "flameknight",
    name: "Flame Knight",
    tag: "Fireball",
    glyph: "U",
    price: 540,
    hp: 170,
    damage: 30,
    range: 48,
    speed: 50,
    radius: 20,
    cooldown: 0.78,
    knockback: 3,
    weapon: "spear",
    areaAttack: { range: 48, damage: 10 },
    secondAttack: { weapon: "bow", range: 260, damage: 22, ranged: true, projectileSpeed: 420, splash: 0, cooldown: 1.15 },
    skills: { fireBreath: true, fireball: true, berserkHp: 65, berserkDamage: 0.55, berserkHeal: 55 },
    color: "#ff794f",
  },
  {
    id: "frostgiant",
    name: "Frost Giant",
    tag: "Freeze",
    glyph: "E",
    price: 620,
    hp: 520,
    damage: 48,
    range: 50,
    speed: 22,
    radius: 27,
    cooldown: 1.35,
    knockback: 4.1,
    weapon: "hammer",
    areaAttack: { range: 90, damage: 18 },
    skills: { freezeAttack: true, damageAura: true, damageAuraRange: 105, damageAuraDamage: 7, blockRangedChance: 0.55 },
    color: "#9fd8ff",
  },
  {
    id: "sharpshooter",
    name: "Sharpshooter",
    tag: "Snipe",
    glyph: "!",
    price: 500,
    hp: 55,
    damage: 58,
    range: 340,
    stopDistance: 270,
    speed: 26,
    radius: 14,
    cooldown: 1.85,
    projectileSpeed: 720,
    weapon: "musket",
    secondAttack: { weapon: "club", range: 34, damage: 12, ranged: false, projectileSpeed: 0, splash: 0, cooldown: 0.55 },
    skills: { damageOnKill: true, damageGain: 6 },
    color: "#d7efff",
  },
  {
    id: "portalmage",
    name: "Portal Mage",
    tag: "Spawner",
    glyph: "P+",
    price: 720,
    hp: 95,
    damage: 12,
    range: 210,
    stopDistance: 165,
    speed: 22,
    radius: 18,
    cooldown: 1.25,
    projectileSpeed: 330,
    weapon: "bow",
    skills: { randomSpawn: true, randomSpawnInterval: 5 },
    color: "#c48cff",
  },
  {
    id: "unit67",
    name: "67",
    tag: "Stasis Gaze",
    glyph: "67",
    price: 390,
    hp: 67,
    damage: 10,
    range: 42,
    speed: 42,
    radius: 17,
    cooldown: 0.95,
    knockback: 1.8,
    weapon: "club",
    skills: { stasisGaze: true, stasisRange: 200, stasisDuration: 5, stasisCooldown: 20 },
    color: "#2495ff",
  },
  {
    id: "hydra",
    name: "Hydra Whelp",
    tag: "Triple Fire",
    glyph: "3H",
    price: 660,
    hp: 210,
    damage: 18,
    range: 235,
    stopDistance: 165,
    speed: 48,
    radius: 22,
    cooldown: 1.35,
    projectileSpeed: 430,
    splash: 36,
    weapon: "bow",
    burstCount: 3,
    burstCooldown: 1.75,
    areaAttack: { range: 58, damage: 12 },
    secondAttack: { weapon: "club", range: 48, damage: 24, ranged: false, projectileSpeed: 0, splash: 0, cooldown: 0.7, burstCount: 2, burstCooldown: 0.9 },
    skills: { fireBreath: true, fireball: true, fireParticleSize: 1.25, fireDuration: 4, fireRange: 115, fireballDamage: 46 },
    color: "#ff6b4a",
  },
  {
    id: "voidbinder",
    name: "Void Binder",
    tag: "Stasis Spell",
    glyph: "VB",
    price: 560,
    hp: 80,
    damage: 15,
    range: 255,
    stopDistance: 205,
    speed: 30,
    radius: 16,
    cooldown: 1.15,
    projectileSpeed: 380,
    weapon: "bow",
    skills: { stasisGaze: true, stasisRange: 170, stasisDuration: 3.2, stasisCooldown: 11, damageAura: true, damageAuraRange: 64, damageAuraDamage: 5 },
    color: "#7b5cff",
  },
  {
    id: "wallcrusher",
    name: "Wall Crusher",
    tag: "Siege",
    glyph: "WC",
    price: 560,
    hp: 310,
    damage: 54,
    range: 46,
    speed: 34,
    radius: 24,
    cooldown: 1.15,
    knockback: 6.5,
    weapon: "hammer",
    burstCount: 2,
    burstCooldown: 1.45,
    areaAttack: { range: 76, damage: 20 },
    skills: { blockRangedChance: 0.2, berserkHp: 90, berserkDamage: 0.35, berserkHeal: 45 },
    color: "#9b8a6d",
  },
  {
    id: "phoenixguard",
    name: "Phoenix Guard",
    tag: "Holy Fire",
    glyph: "PG",
    price: 760,
    hp: 240,
    damage: 32,
    range: 52,
    speed: 46,
    radius: 22,
    cooldown: 0.82,
    knockback: 3.4,
    weapon: "spear",
    areaAttack: { range: 66, damage: 14 },
    secondAttack: { weapon: "bow", range: 250, damage: 20, ranged: true, projectileSpeed: 410, splash: 28, cooldown: 1.1 },
    skills: { fireBreath: true, fireball: true, fireballDamage: 38, holyShield: true, holyShieldRange: 175, holyShieldReduction: 0.35, burnImmune: true, berserkHp: 95, berserkDamage: 0.35, berserkHeal: 60 },
    color: "#ffb84e",
  },
  {
    id: "stormlancer",
    name: "Storm Lancer",
    tag: "Burst Shot",
    glyph: "SL",
    price: 470,
    hp: 92,
    damage: 20,
    range: 285,
    stopDistance: 225,
    speed: 42,
    radius: 16,
    cooldown: 1.25,
    projectileSpeed: 560,
    weapon: "musket",
    burstCount: 3,
    burstCooldown: 1.7,
    secondAttack: { weapon: "spear", range: 56, damage: 26, ranged: false, projectileSpeed: 0, splash: 0, cooldown: 0.72 },
    skills: { tornado: true, tornadoDamage: 4, tornadoDuration: 2.8, tornadoRange: 64, blockRangedChance: 0.12 },
    color: "#75d7ff",
  },
  {
    id: "whirlhammer",
    name: "Whirl Hammer",
    tag: "Sky Slam",
    glyph: "WH",
    price: 680,
    hp: 190,
    damage: 34,
    range: 44,
    speed: 42,
    radius: 22,
    cooldown: 0.92,
    knockback: 4.8,
    weapon: "hammer",
    areaAttack: { range: 58, damage: 12 },
    skills: {
      whirlwindLeap: true,
      whirlwindTriggerRange: 92,
      whirlwindDuration: 4,
      whirlwindCooldown: 5,
      whirlwindDamage: 200,
      whirlwindRadius: 105,
    },
    color: "#8ab4ff",
  },
  {
    id: "zombie",
    name: "Zombie",
    tag: "Infection",
    glyph: "Z",
    price: 210,
    hp: 135,
    damage: 13,
    range: 30,
    speed: 36,
    radius: 16,
    cooldown: 0.9,
    knockback: 1.9,
    weapon: "club",
    skills: { infectTouch: true, infectSeconds: 10 },
    color: "#76b86d",
  },
  {
    id: "coneheadzombie",
    name: "Conehead Zombie",
    tag: "Tough Infection",
    glyph: "CZ",
    price: 330,
    hp: 243,
    damage: 13,
    range: 30,
    speed: 34,
    radius: 17,
    cooldown: 0.9,
    knockback: 2,
    weapon: "club",
    skills: { infectTouch: true, infectSeconds: 10 },
    color: "#8aba64",
  },
  {
    id: "bucketzombie",
    name: "Bucket Zombie",
    tag: "Armored Infection",
    glyph: "BZ",
    price: 480,
    hp: 405,
    damage: 14,
    range: 30,
    speed: 31,
    radius: 18,
    cooldown: 0.95,
    knockback: 2.1,
    weapon: "club",
    skills: { infectTouch: true, infectSeconds: 10 },
    color: "#6fa260",
  },
  {
    id: "footballzombie",
    name: "Football Zombie",
    tag: "Fast Heavy",
    glyph: "FZ",
    price: 820,
    hp: 675,
    damage: 18,
    range: 32,
    speed: 72,
    radius: 20,
    cooldown: 0.72,
    knockback: 3.2,
    weapon: "club",
    skills: { infectTouch: true, infectSeconds: 10 },
    color: "#5f8f58",
  },
  {
    id: "giantzombie",
    name: "Giant Zombie",
    tag: "Boss Infection",
    glyph: "GZ",
    price: 2600,
    hp: 2400,
    damage: 95,
    range: 62,
    speed: 32,
    radius: 42,
    cooldown: 1.55,
    knockback: 9,
    weapon: "hammer",
    areaAttack: { range: 105, damage: 38 },
    skills: {
      zombieBoss: true,
      infectTouch: true,
      infectSeconds: 10,
      damageAura: true,
      damageAuraRange: 80,
      damageAuraDamage: 8,
      knockbackImmune: true,
      berserkHp: 900,
      berserkDamage: 0.45,
      berserkHeal: 180,
    },
    color: "#4f7c48",
  },
  {
    id: "armoredgiantzombie",
    name: "Armored Giant Zombie",
    tag: "Summon Rush",
    glyph: "AG",
    price: 7200,
    hp: 10000,
    damage: 285,
    range: 74,
    speed: 25,
    radius: 52,
    cooldown: 1.75,
    knockback: 12,
    weapon: "hammer",
    areaAttack: { range: 125, damage: 95 },
    skills: {
      zombieBoss: true,
      infectTouch: true,
      infectSeconds: 10,
      damageAura: true,
      damageAuraRange: 95,
      damageAuraDamage: 14,
      knockbackImmune: true,
      summonFootballOnAttack: true,
      summonFootballCount: 3,
      berserkHp: 2800,
      berserkDamage: 0.45,
      berserkHeal: 600,
    },
    color: "#314037",
  },
  {
    id: "crystalbehemoth",
    name: "Crystal Behemoth",
    tag: "Quake Armor",
    glyph: "CB",
    price: 4200,
    hp: 3600,
    damage: 120,
    range: 68,
    speed: 28,
    radius: 38,
    cooldown: 1.35,
    knockback: 10,
    weapon: "hammer",
    areaAttack: { range: 118, damage: 52 },
    skills: {
      zombieBoss: true,
      damageAura: true,
      damageAuraRange: 88,
      damageAuraDamage: 6,
      knockbackImmune: true,
      blockRangedChance: 0.32,
      berserkHp: 1050,
      berserkDamage: 0.35,
      berserkHeal: 240,
    },
    color: "#4bc8d8",
  },
  {
    id: "stormogre",
    name: "Storm Ogre",
    tag: "Storm Barrage",
    glyph: "SO",
    price: 5000,
    hp: 3000,
    damage: 92,
    range: 285,
    stopDistance: 210,
    speed: 34,
    radius: 36,
    cooldown: 1.65,
    knockback: 5,
    weapon: "cannon",
    projectileSpeed: 430,
    splash: 82,
    areaAttack: { range: 95, damage: 32 },
    skills: {
      zombieBoss: true,
      tornado: true,
      tornadoDamage: 9,
      tornadoDuration: 3.8,
      tornadoRange: 92,
      damageAura: true,
      damageAuraRange: 72,
      damageAuraDamage: 5,
      blockRangedChance: 0.18,
    },
    color: "#476cff",
  },
  {
    id: "voidwardenboss",
    name: "Void Warden",
    tag: "Stasis Barrier",
    glyph: "VW",
    price: 5600,
    hp: 3300,
    damage: 78,
    range: 260,
    stopDistance: 190,
    speed: 31,
    radius: 35,
    cooldown: 1.3,
    knockback: 4.5,
    weapon: "musket",
    projectileSpeed: 520,
    splash: 36,
    skills: {
      zombieBoss: true,
      stasisGaze: true,
      stasisRange: 230,
      stasisDuration: 4.5,
      stasisCooldown: 14,
      blockRangedChance: 0.55,
      damageAura: true,
      damageAuraRange: 76,
      damageAuraDamage: 7,
      berserkHp: 900,
      berserkDamage: 0.28,
      berserkHeal: 180,
    },
    color: "#6f3cff",
  },
  {
    id: "archmagelord",
    name: "Archmage Lord",
    tag: "All Magic",
    glyph: "AM",
    price: 8800,
    hp: 6200,
    damage: 88,
    range: 310,
    stopDistance: 235,
    speed: 34,
    radius: 42,
    cooldown: 1.05,
    knockback: 4.5,
    weapon: "musket",
    projectileSpeed: 560,
    splash: 42,
    areaAttack: { range: 118, damage: 36 },
    skills: {
      zombieBoss: true,
      archmageBoss: true,
      fireball: true,
      fireballDamage: 125,
      poisonSlime: true,
      slimeChance: 0.45,
      tornado: true,
      tornadoDamage: 12,
      tornadoDuration: 4.8,
      tornadoRange: 105,
      fireBreath: true,
      fireDuration: 7,
      fireRange: 150,
      freezeAttack: true,
      stasisGaze: true,
      stasisRange: 230,
      stasisDuration: 3.8,
      stasisCooldown: 13,
      holyShield: true,
      holyShieldRange: 170,
      holyShieldReduction: 0.35,
      blockRangedChance: 0.42,
      damageAura: true,
      damageAuraRange: 92,
      damageAuraDamage: 9,
      berserkHp: 1800,
      berserkDamage: 0.4,
      berserkHeal: 450,
    },
    color: "#8f4cff",
  },  {
    id: "sunflower",
    name: "Sunflower",
    tag: "Gold Producer",
    glyph: "SF",
    price: 50,
    hp: 65,
    damage: 0,
    range: 0,
    stopDistance: 0,
    speed: 0,
    radius: 17,
    cooldown: 999,
    projectileSpeed: 0,
    weapon: "club",
    canAttackWalls: false,
    skills: { rooted: true, sunProducer: true, sunInterval: 5, sunGold: 50 },
    color: "#f7ca42",
  },
  {
    id: "nutwall",
    name: "Wall-nut",
    tag: "High HP Wall",
    glyph: "WN",
    price: 120,
    hp: 520,
    damage: 0,
    range: 0,
    stopDistance: 0,
    speed: 0,
    radius: 22,
    cooldown: 999,
    projectileSpeed: 0,
    weapon: "club",
    canAttackWalls: false,
    skills: { rooted: true, wallNut: true },
    color: "#b88945",
  },
  {
    id: "obsidianwargod",
    name: "Obsidian War God",
    tag: "Immovable Titan",
    glyph: "OW",
    price: 6800,
    hp: 13000,
    damage: 550,
    range: 86,
    stopDistance: 0,
    speed: 0,
    radius: 36,
    cooldown: 5,
    projectileSpeed: 0,
    weapon: "hammer",
    knockback: 10,
    areaAttack: { range: 120, damage: 550 },
    canAttackWalls: true,
    skills: { rooted: true, obsidianWarGod: true, immovable: true, knockbackImmune: true, spitOnAttack: true, spitDamage: 200, spitSplash: 120, spitSpeed: 430 },
    color: "#1b1720",
  },  {
    id: "peashooter",
    name: "Peashooter",
    tag: "Rooted Ranged",
    glyph: "PS",
    price: 240,
    hp: 70,
    damage: 16,
    range: 500000000,
    stopDistance: 500000000,
    speed: 0,
    radius: 16,
    cooldown: 0.95,
    projectileSpeed: 440,
    weapon: "bow",
    canAttackWalls: false,
    skills: { rooted: true },
    color: "#68c96b",
  },
  {
    id: "repeater",
    name: "Repeater",
    tag: "Double Pea",
    glyph: "RP",
    price: 410,
    hp: 85,
    damage: 16,
    range: 500000000,
    stopDistance: 500000000,
    speed: 0,
    radius: 17,
    cooldown: 1.05,
    projectileSpeed: 455,
    weapon: "bow",
    burstCount: 2,
    burstCooldown: 1.05,
    canAttackWalls: false,
    skills: { rooted: true },
    color: "#48b85f",
  },
  {
    id: "gatlingshooter",
    name: "Gatling Shooter",
    tag: "Fan Barrage",
    glyph: "GS",
    price: 950,
    hp: 95,
    damage: 6,
    range: 500000000,
    stopDistance: 500000000,
    speed: 0,
    radius: 19,
    cooldown: 0.2,
    projectileSpeed: 520,
    weapon: "bow",
    canAttackWalls: false,
    skills: { rooted: true, gatling: true, gatlingCheckInterval: 3 },
    color: "#5bd071",
  },
  {
    id: "wildgatlingshooter",
    name: "Wild Gatling Shooter",
    tag: "Forever Overdrive",
    glyph: "WG",
    price: 2600,
    hp: 130,
    damage: 6,
    range: 500000000,
    stopDistance: 500000000,
    speed: 0,
    radius: 22,
    cooldown: 0.1,
    projectileSpeed: 580,
    weapon: "bow",
    burstCount: 60,
    burstCooldown: 0.1,
    canAttackWalls: false,
    skills: { rooted: true, gatling: true, permanentGatling: true, wildGatling: true },
    color: "#39f078",
  },
  {
    id: "corncannon",
    name: "Corn Cannon",
    tag: "Nuke Blast",
    glyph: "CC",
    price: 1800,
    hp: 180,
    damage: 0,
    range: 500000000,
    stopDistance: 500000000,
    speed: 0,
    radius: 26,
    cooldown: 9,
    projectileSpeed: 0,
    weapon: "cannon",
    canAttackWalls: false,
    skills: { rooted: true, cornCannon: true, cornNukeDamage: 1200, cornNukeCooldown: 9 },
    color: "#e8c24a",
  },
  {
    id: "chomper",
    name: "Chomper",
    tag: "Bite Blast",
    glyph: "CH",
    price: 780,
    hp: 220,
    damage: 0,
    range: 0,
    stopDistance: 0,
    speed: 0,
    radius: 24,
    cooldown: 999,
    projectileSpeed: 0,
    weapon: "club",
    canAttackWalls: false,
    skills: { rooted: true, chompBlast: true, chompDamage: 450, chompRange: 120, chompTriggerRange: 80, chompCooldown: 30 },
    color: "#8b4bc1",
  },
  {
    id: "arrowtower",
    name: "Arrow Tower",
    tag: "Fixed Barrage",
    glyph: "AT",
    price: 360,
    hp: 100,
    damage: 10,
    range: 180,
    stopDistance: 180,
    speed: 0,
    radius: 18,
    cooldown: 0.2,
    projectileSpeed: 520,
    weapon: "bow",
    skills: { rooted: true },
    color: "#b99768",
  },
];

let customUnitCounter = 1;

function readUnlockedLevel() {
  try {
    const saved = Number(localStorage.getItem("tabsLiteUnlockedLevel"));
    return Math.min(levelDefinitions.length, Math.max(1, Number.isFinite(saved) ? saved : 1));
  } catch {
    return 1;
  }
}

function saveUnlockedLevel(level) {
  try {
    localStorage.setItem("tabsLiteUnlockedLevel", String(level));
  } catch {
    // Local save can fail in private browser modes. The level still works for this session.
  }
}

function readUpgradePoints() {
  try {
    return Math.max(0, Number(localStorage.getItem("tabsLiteUpgradePoints")) || 0);
  } catch {
    return 0;
  }
}

function saveUpgradePoints(points) {
  try {
    localStorage.setItem("tabsLiteUpgradePoints", String(Math.max(0, points)));
  } catch {
    // Keep playing even if local save fails.
  }
}

function readClearedLevels() {
  try {
    const raw = JSON.parse(localStorage.getItem("tabsLiteClearedLevels") || "[]");
    return new Set(Array.isArray(raw) ? raw.map(Number).filter(Boolean) : []);
  } catch {
    return new Set();
  }
}

function saveClearedLevels(levels) {
  try {
    localStorage.setItem("tabsLiteClearedLevels", JSON.stringify([...levels].sort((a, b) => a - b)));
  } catch {
    // Keep the session version if local save fails.
  }
}

function defaultRewardMods() {
  return { damageBonus: 0, hpBonus: 0, startingGoldBonus: 0, attackSpeedBonus: 0, wallDamageBonus: 0 };
}

function readRewardMods() {
  try {
    return { ...defaultRewardMods(), ...(JSON.parse(localStorage.getItem("tabsLiteRewardMods") || "{}") || {}) };
  } catch {
    return defaultRewardMods();
  }
}

function saveRewardMods(mods) {
  try {
    localStorage.setItem("tabsLiteRewardMods", JSON.stringify(mods));
  } catch {
    // Reward still applies for this session.
  }
}

function readUnitUpgrades() {
  try {
    const raw = JSON.parse(localStorage.getItem("tabsLiteUnitUpgrades") || "{}");
    const upgrades = {};
    if (!raw || typeof raw !== "object") return upgrades;
    for (const [typeId, level] of Object.entries(raw)) {
      if (!typeById(typeId)) continue;
      upgrades[typeId] = clamp(Math.floor(Number(level) || 0), 0, 3);
    }
    return upgrades;
  } catch {
    return {};
  }
}

function saveUnitUpgrades(upgrades) {
  try {
    const clean = {};
    for (const [typeId, level] of Object.entries(upgrades || {})) {
      if (!typeById(typeId)) continue;
      const value = clamp(Math.floor(Number(level) || 0), 0, 3);
      if (value > 0) clean[typeId] = value;
    }
    localStorage.setItem("tabsLiteUnitUpgrades", JSON.stringify(clean));
  } catch {
    // Upgrades still work for this session.
  }
}

const state = {
  phase: "setup",
  selected: unitTypes[0].id,
  selectedItem: null,
  mapTool: null,
  wallStart: null,
  pointer: null,
  placeTeam: "blue",
  sandbox: false,
  plantMode: false,
  pvzMode: false,
  pvzWave: 0,
  pvzNextWaveTimer: 0,
  pvzShovel: false,
  pvzUnlockedCells: PVZ_START_UNLOCKED_CELLS,
  pvzRewardWave: 0,
  pvzMods: { damageBonus: 0, hpBonus: 0, attackSpeedBonus: 0, sunGoldBonus: 0, plantDiscount: 0, cellDiscount: 0, zombieCountBonus: 0 },
  challengeMode: false,
  challengeBudget: 0,
  levelMode: false,
  currentLevel: 0,
  unlockedLevel: readUnlockedLevel(),
  clearedLevels: readClearedLevels(),
  upgradePoints: readUpgradePoints(),
  rewardMods: readRewardMods(),
  pendingRewardChoices: [],
  language: "en",
  budget: 900,
  units: [],
  projectiles: [],
  particles: [],
  slimes: [],
  tornadoes: [],
  walls: [],
  terrains: [],
  upgrades: readUnitUpgrades(),
  battleStats: null,
  commands: { blue: null, red: null },
  focusTargets: { blue: null, red: null },
  controlledId: null,
  controlKeys: {},
  controlSpecialIndex: 0,
  controlBuildIndex: 0,
  controlBuildMode: false,
  nextId: 1,
  dragging: null,
  lastTime: performance.now(),
  winnerShown: false,
};

function isPvzMode() {
  return Boolean(state.pvzMode);
}

function pvzUnitCost(type) {
  const discount = Math.min(0.75, Math.max(0, state.pvzMods?.plantDiscount || 0));
  return Math.max(1, Math.ceil((type?.price || 0) * (1 - discount)));
}

function pvzCellCost() {
  const discount = Math.min(0.8, Math.max(0, state.pvzMods?.cellDiscount || 0));
  return Math.max(1, Math.ceil(PVZ_EMPTY_CELL_COST * (1 - discount)));
}

function pvzPlantCost(type) {
  return pvzUnitCost(type) * 9;
}
function pvzBuyCountValue() {
  const raw = Number(pvzBuyCountInput?.value) || 9;
  const value = Math.max(1, Math.min(15, Math.floor(raw)));
  if (pvzBuyCountInput && Number(pvzBuyCountInput.value) !== value) pvzBuyCountInput.value = String(value);
  return value;
}


function pvzCellSize() {
  return {
    w: (PVZ_GRID.right - PVZ_GRID.left) / PVZ_GRID.cols,
    h: (PVZ_GRID.bottom - PVZ_GRID.top) / PVZ_GRID.rows,
  };
}

function pvzCellForPoint(point) {
  const size = pvzCellSize();
  const col = Math.floor((point.x - PVZ_GRID.left) / size.w);
  const row = Math.floor((point.y - PVZ_GRID.top) / size.h);
  if (col < 0 || col >= PVZ_GRID.cols || row < 0 || row >= PVZ_GRID.rows) return null;
  return { col, row };
}

function pvzCellCenter(col, row) {
  const size = pvzCellSize();
  return {
    x: PVZ_GRID.left + (col + 0.5) * size.w,
    y: PVZ_GRID.top + (row + 0.5) * size.h,
  };
}
function pvzCellIndex(col, row) {
  return col * PVZ_GRID.rows + row;
}

function pvzMaxCells() {
  return PVZ_GRID.cols * PVZ_GRID.rows;
}

function pvzCellUnlocked(col, row) {
  return pvzCellIndex(col, row) < Math.max(0, Math.min(pvzMaxCells(), state.pvzUnlockedCells || 0));
}

function buyPvzEmptyCell() {
  if (!isPvzMode()) return;
  const maxCells = pvzMaxCells();
  state.pvzUnlockedCells = Math.max(PVZ_START_UNLOCKED_CELLS, Math.min(maxCells, state.pvzUnlockedCells || PVZ_START_UNLOCKED_CELLS));
  if (state.pvzUnlockedCells >= maxCells) {
    setToast(state.language === "zh" ? "所有空格都已经解锁了" : "All cells are already unlocked");
    updateUi();
    return;
  }
  const cellCost = pvzCellCost();
  if (state.budget < cellCost) {
    setToast(state.language === "zh" ? `金币不够，需要 ${cellCost}` : `Not enough gold: need ${cellCost}`);
    return;
  }
  state.budget -= cellCost;
  state.pvzUnlockedCells = Math.min(maxCells, state.pvzUnlockedCells + PVZ_CELLS_PER_PURCHASE);
  setToast(state.language === "zh" ? `购买空格 x${PVZ_CELLS_PER_PURCHASE} -${cellCost}` : `Empty cells x${PVZ_CELLS_PER_PURCHASE} bought -${cellCost}`);
  updateUi();
}
function pvzCellOccupied(col, row) {
  const center = pvzCellCenter(col, row);
  return state.units.some((unit) => !unit.dead && unit.team === "blue" && Math.abs(unit.x - center.x) < 24 && Math.abs(unit.y - center.y) < 24);
}
function pvzPlantAtCell(col, row) {
  const center = pvzCellCenter(col, row);
  return state.units.find((unit) => !unit.dead && unit.team === "blue" && isPlantType(typeById(unit.typeId)) && Math.abs(unit.x - center.x) < 30 && Math.abs(unit.y - center.y) < 30);
}

function shovelPvzPlant(point) {
  const cell = pvzCellForPoint(point);
  if (!cell) {
    setToast(state.language === "zh" ? "铲子只能点植物格子" : "Use the shovel on plant cells");
    return;
  }
  const plant = pvzPlantAtCell(cell.col, cell.row);
  if (!plant) {
    setToast(state.language === "zh" ? "这里没有植物" : "No plant here");
    return;
  }
  removeUnit(plant);
  state.particles.push({ x: plant.x, y: plant.y, life: 0.45, color: "#b7f08a", size: 22 });
  setToast(state.language === "zh" ? "植物已铲掉" : "Plant removed");
  updateUi();
}


function placePvzPlantBlock(point) {
  const type = typeById(state.selected);
  if (!type || !isPlantType(type)) {
    setToast(state.language === "zh" ? "植物无尽只能选择植物" : "PvZ Endless only uses plants");
    return;
  }
  const cell = pvzCellForPoint(point);
  if (!cell) {
    setToast(state.language === "zh" ? "只能放在植物格子里" : "Place plants on grid cells only");
    return;
  }
  const buyCount = pvzBuyCountValue();
  const spots = [];
  for (let row = 0; row < PVZ_GRID.rows; row += 1) {
    for (let col = 0; col < PVZ_GRID.cols; col += 1) {
      if (!pvzCellUnlocked(col, row)) continue;
      if (pvzCellOccupied(col, row)) continue;
      const center = pvzCellCenter(col, row);
      const dist = Math.abs(col - cell.col) + Math.abs(row - cell.row) + Math.hypot(col - cell.col, row - cell.row) * 0.01;
      spots.push({ ...center, dist });
    }
  }
  spots.sort((a, b) => a.dist - b.dist || a.y - b.y || a.x - b.x);
  const chosenSpots = spots.slice(0, buyCount);
  if (chosenSpots.length <= 0) {
    setToast(state.language === "zh" ? "附近格子已经满了" : "Nearby cells are full");
    return;
  }
  const unitCost = isPvzMode() ? pvzUnitCost(type) : type.price || 0;
  const affordable = unitCost <= 0 ? chosenSpots.length : Math.min(chosenSpots.length, Math.floor(state.budget / unitCost));
  if (affordable <= 0) {
    setToast(state.language === "zh" ? `金币不够，需要 ${unitCost}` : `Not enough gold: need ${unitCost}`);
    return;
  }
  let placed = 0;
  for (const center of chosenSpots.slice(0, affordable)) {
    addUnit(type.id, "blue", center.x, center.y);
    placed += 1;
  }
  const cost = unitCost * placed;
  state.budget -= cost;
  updateUi();
  setToast(state.language === "zh" ? `${type.name} x${placed} -${cost}` : `${type.name} x${placed} -${cost}`);
}
function resetPvzEndless() {
  state.phase = "setup";
  state.sandbox = false;
  state.plantMode = true;
  state.pvzMode = true;
  state.pvzWave = 0;
  state.pvzNextWaveTimer = 0;
  state.pvzRewardWave = 0;
  state.pvzUnlockedCells = PVZ_START_UNLOCKED_CELLS;
  state.pvzMods = { damageBonus: 0, hpBonus: 0, attackSpeedBonus: 0, sunGoldBonus: 0, plantDiscount: 0, cellDiscount: 0, zombieCountBonus: 0 };
  state.pendingRewardChoices = [];
  if (rewardModal) rewardModal.classList.add("hidden");
  state.challengeMode = false;
  state.challengeBudget = 0;
  state.levelMode = false;
  state.currentLevel = 0;
  state.placeTeam = "blue";
  state.selected = PLANT_TYPE_IDS.has(state.selected) ? state.selected : "peashooter";
  state.budget = 1800;
  state.units = [];
  state.projectiles = [];
  state.particles = [];
  state.slimes = [];
  state.tornadoes = [];
  state.walls = [];
  state.terrains = [];
  state.battleStats = null;
  state.commands = { blue: null, red: null };
  state.focusTargets = { blue: null, red: null };
  state.controlledId = null;
  state.controlKeys = {};
  state.controlSpecialIndex = 0;
  state.controlBuildMode = false;
  state.dragging = null;
  state.wallStart = null;
  state.pointer = null;
  state.mapTool = null;
  state.selectedItem = null;
  state.winnerShown = false;
}
function enterPvzMode() {
  resetPvzEndless();
  document.body.dataset.mode = "pvz";
  showGame();
  document.body.dataset.mode = "pvz";
  renderUnitList();
  updateUi();
  setToast(state.language === "zh" ? "植物无尽：点格子一次购买 9 个植物" : "PvZ Endless: click a grid cell to buy 9 plants");
}
function spawnPvzWave() {
  state.pvzWave += 1;
  const wave = state.pvzWave;
  const typeId = wave >= 12 && Math.random() < 0.28 ? "giantzombie" : PVZ_ZOMBIES[Math.min(PVZ_ZOMBIES.length - 1, Math.floor((wave - 1) / 3 + Math.random() * 2))];
  const groups = Math.max(1, Math.floor(1 + wave / 3));
  const count = Math.ceil(Math.min(9 * groups, 9 + wave * 3) * (1 + (state.pvzMods?.zombieCountBonus || 0)));
  const rows = 9;
  for (let i = 0; i < count; i += 1) {
    const row = i % rows;
    const laneOffset = Math.floor(i / rows);
    const center = pvzCellCenter(PVZ_GRID.cols - 1, row);
    const unit = addUnit(typeId, "red", canvas.width - 36 - laneOffset * 34, center.y);
    if (!unit) continue;
    const scale = 1 + Math.max(0, wave - 1) * 0.08;
    unit.maxHp *= scale;
    unit.hp = unit.maxHp;
    unit.damage *= 1 + Math.max(0, wave - 1) * 0.045;
    unit.speed *= 1 + Math.min(0.8, wave * 0.018);
  }
  state.pvzNextWaveTimer = 4.5;
  setToast(state.language === "zh" ? `第 ${wave} 波：${count} 个僵尸` : `Wave ${wave}: ${count} zombies`);
}

function updatePvzEndless(dt) {
  if (!isPvzMode() || state.phase !== "battle") return;
  const escaped = state.units.some((unit) => unit.team === "red" && !unit.dead && unit.x <= PVZ_GRID.left - 28);
  if (escaped) {
    state.winnerShown = true;
    setPhase("ended");
    setToast(state.language === "zh" ? `僵尸突破防线！你坚持到第 ${state.pvzWave} 波` : `Zombies broke through! You reached wave ${state.pvzWave}`);
    return;
  }
  const blueAlive = state.units.some((unit) => unit.team === "blue" && !unit.dead);
  if (!blueAlive) return;
  const redAlive = state.units.some((unit) => unit.team === "red" && !unit.dead);
  if (redAlive) return;
  if (state.pendingRewardChoices.length) return;
  if (state.pvzWave > 0 && state.pvzRewardWave < state.pvzWave) {
    state.pvzRewardWave = state.pvzWave;
    state.pendingRewardChoices = makePvzRewardChoices(state.pvzWave);
    state.pvzNextWaveTimer = 4.5;
    renderRewardModal();
    return;
  }
  state.pvzNextWaveTimer -= dt;
  if (state.pvzNextWaveTimer <= 0) {
    spawnPvzWave();
  }
}
function typeById(id) {
  return unitTypes.find((type) => type.id === id);
}

function isSandboxActive() {
  return state.sandbox || document.body.dataset.mode === "sandbox";
}

function displayType(type) {
  const text = translations[state.language] || translations.zh;
  if (text.unitsMap[type.id]) {
    return { name: text.unitsMap[type.id][0], tag: text.unitsMap[type.id][1] };
  }
  const mode = type.isRangedCustom ? text.tags.ranged : text.tags.melee;
  const weapon = text.weapons[type.weapon] || type.weapon;
  const tags = [];
  const skills = type.skills || {};
  if (skills.explode) tags.push(text.tags.explode);
  if (skills.poisonSlime && skills.tornado) tags.push(text.tags.poisonTornado);
  else if (skills.poisonSlime) tags.push(text.tags.poison);
  else if (skills.tornado) tags.push(text.tags.tornado);
  if (skills.summonOnKill) tags.push(text.tags.summon);
  if (skills.damageOnKill) tags.push(text.tags.killDamage);
  if (skills.damageAura) tags.push(text.tags.auraDamage);
  if (skills.fireBreath) tags.push(text.tags.fire);
  if (skills.fireball) tags.push(text.tags.fireball);
  if (skills.holyShield) tags.push(text.tags.holyShield);
  if (skills.freezeAttack) tags.push(text.tags.freeze);
  if (skills.blockRangedChance > 0) tags.push(text.tags.block);
  if (skills.berserkHp > 0) tags.push(text.tags.berserk);
  return { name: type.name, tag: [mode, weapon, ...tags].join("/") };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function blueZone() {
  return canvas.width * 0.46;
}

function totalBudgetForEnemySize() {
  return Number(enemySlider.value) * 125;
}

function blueArmyCost() {
  return state.units
    .filter((unit) => unit.team === "blue")
    .reduce((sum, unit) => sum + typeById(unit.typeId).price, 0);
}

function wallTotalCost() {
  return state.walls.reduce((sum, wall) => sum + (wall.challengeImported ? 0 : wallCost(wall)), 0);
}

function terrainTotalCost() {
  return state.terrains.reduce((sum, terrain) => sum + (terrainTypes[terrain.type]?.cost || 0), 0);
}

function isPlantType(typeOrId) {
  const id = typeof typeOrId === "string" ? typeOrId : typeOrId?.id;
  return PLANT_TYPE_IDS.has(id);
}

function syncBudgetToEnemySize() {
  if (state.sandbox) return;
  const baseBudget = state.challengeMode ? state.challengeBudget : totalBudgetForEnemySize();
  state.budget = Math.max(0, baseBudget - blueArmyCost() - wallTotalCost() - terrainTotalCost());
}

function levelStartingGold(level) {
  const bossGoldLocked = state.levelMode && [11, 28, 29, 30].includes(level?.number);
  if (bossGoldLocked) return clamp(Math.round(level?.budget || 0), 100, 9500);
  if ((level?.number || 0) >= 20) return clamp(Math.round(level?.budget || 0), 100, 9500);
  const bonus = clamp(state.rewardMods.startingGoldBonus || 0, -2500, 800);
  return clamp(Math.round((level?.budget || 0) + bonus), 100, 9500);
}

function worldPoint(event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: ((event.clientX - rect.left) / rect.width) * canvas.width,
    y: ((event.clientY - rect.top) / rect.height) * canvas.height,
  };
}

function setToast(message) {
  toast.textContent = message;
}

function wallCost(wall) {
  if (buildingTypes[wall.type]) return buildingTypes[wall.type].cost;
  const thickMultiplier = wall.type === "unbreakable" ? 4.2 : wall.type === "thick" ? 2.35 : wall.type === "arrow" ? 1.35 : 1;
  return Math.ceil((40 + Math.max(wall.w, wall.h) * 0.4) * 2 * thickMultiplier);
}

function wallMaxHp(wall) {
  const length = Math.max(wall.w, wall.h);
  if (buildingTypes[wall.type]) return buildingTypes[wall.type].hp;
  if (wall.type === "unbreakable") return 1;
  if (wall.type === "thick") return Math.ceil(260 + length * 3.2);
  if (wall.type === "arrow") return Math.ceil(90 + length * 1.15);
  return Math.ceil(120 + length * 1.55);
}

function addBuilding(point, typeId, options = {}) {
  if (state.phase !== "setup" && !options.allowBattle) {
    setToast(state.language === "zh" ? "布阵阶段才能放建筑" : "Buildings can be placed during setup");
    return;
  }
  if (state.challengeMode && typeId === "goldMine") {
    setToast(state.language === "zh" ? "挑战模式不能使用金矿" : "Gold mines are disabled in challenge mode");
    return;
  }
  const config = buildingTypes[typeId];
  if (!config) return;
  const text = translations[state.language] || translations.en;
  const wall = {
    x: clamp(point.x, config.w / 2, canvas.width - config.w / 2),
    y: clamp(point.y, config.h / 2, canvas.height - config.h / 2),
    w: config.w,
    h: config.h,
    type: typeId,
    team: options.team || (state.sandbox ? state.placeTeam : "blue"),
    cooldown: 0,
  };
  wall.maxHp = wallMaxHp(wall);
  wall.hp = wall.maxHp;
  const cost = wallCost(wall);
  if (!state.sandbox && state.budget < cost) {
    setToast(text.wallNeedGold);
    return;
  }
  const overlaps = state.walls.some((other) => {
    return Math.abs(wall.x - other.x) < (wall.w + other.w) / 2 + 6 && Math.abs(wall.y - other.y) < (wall.h + other.h) / 2 + 6;
  });
  if (overlaps) {
    setToast(text.wallOverlap);
    return;
  }
  state.walls.push(wall);
  if (!state.sandbox) state.budget -= cost;
  const name = state.language === "zh" ? config.zh : config.name;
  setToast(state.language === "zh" ? `已放置${name} -${cost}` : `${name} placed -${cost}`);
  return wall;
}

function addArrowTower(point) {
  addBuilding(point, "arrowTower");
}

function addTerrain(point, typeId) {
  if (state.phase !== "setup") return;
  const config = terrainTypes[typeId];
  if (!config) return;
  if (!state.sandbox && state.budget < config.cost) {
    setToast((translations[state.language] || translations.en).wallNeedGold);
    return;
  }
  state.terrains.push({
    x: clamp(point.x, config.radius, canvas.width - config.radius),
    y: clamp(point.y, config.radius, canvas.height - config.radius),
    type: typeId,
    radius: config.radius,
  });
  if (!state.sandbox) state.budget -= config.cost;
  const name = state.language === "zh" ? config.zh : config.name;
  setToast(state.language === "zh" ? `已放置${name} -${config.cost}` : `${name} placed -${config.cost}`);
}

function eraseTerrain(point) {
  const before = state.terrains.length;
  state.terrains = state.terrains.filter((terrain) => Math.hypot(point.x - terrain.x, point.y - terrain.y) > terrain.radius);
  if (before !== state.terrains.length) setToast(state.language === "zh" ? "地形已删除" : "Terrain removed");
}

function addWall(start, end) {
  if (state.phase !== "setup") {
    setToast(state.language === "zh" ? "布阵阶段才能放墙" : "Walls can be placed during setup");
    return;
  }
  const text = translations[state.language] || translations.en;
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const horizontal = Math.abs(dx) >= Math.abs(dy);
  const length = Math.max(36, horizontal ? Math.abs(dx) : Math.abs(dy));
  const thick = state.mapTool === "thickWall";
  const arrow = state.mapTool === "arrowWall";
  const unbreakable = state.mapTool === "unbreakableWall";
  const thickness = unbreakable ? 34 : thick ? 48 : arrow ? 22 : 28;
  const wall = {
    x: clamp(horizontal ? (start.x + end.x) / 2 : start.x, 30, canvas.width - 30),
    y: clamp(horizontal ? start.y : (start.y + end.y) / 2, 30, canvas.height - 30),
    w: horizontal ? length : thickness,
    h: horizontal ? thickness : length,
    type: unbreakable ? "unbreakable" : thick ? "thick" : arrow ? "arrow" : "normal",
  };
  wall.maxHp = wallMaxHp(wall);
  wall.hp = wall.maxHp;
  const cost = wallCost(wall);
  if (!state.sandbox && state.budget < cost) {
    setToast(text.wallNeedGold);
    return;
  }
  const overlaps = state.walls.some((other) => {
    return Math.abs(wall.x - other.x) < (wall.w + other.w) / 2 + 6 && Math.abs(wall.y - other.y) < (wall.h + other.h) / 2 + 6;
  });
  if (overlaps) {
    setToast(text.wallOverlap);
    return;
  }
  state.walls.push(wall);
  if (!state.sandbox) state.budget -= cost;
  setToast(`${state.language === "zh" ? "已放置墙" : "Wall placed"} -${cost}`);
}

function eraseWall(point) {
  const before = state.walls.length;
  state.walls = state.walls.filter((wall) => {
    return !(point.x >= wall.x - wall.w / 2 && point.x <= wall.x + wall.w / 2 && point.y >= wall.y - wall.h / 2 && point.y <= wall.y + wall.h / 2);
  });
  if (state.walls.length !== before) setToast(state.language === "zh" ? "墙已删除" : "Wall removed");
}

function isUnbreakableWall(wall) {
  return wall?.type === "unbreakable";
}

function damageWallsAt(x, y, radius, damage) {
  for (const wall of state.walls) {
    if (isUnbreakableWall(wall)) continue;
    wall.maxHp ??= wallMaxHp(wall);
    wall.hp ??= wall.maxHp;
    const closestX = clamp(x, wall.x - wall.w / 2, wall.x + wall.w / 2);
    const closestY = clamp(y, wall.y - wall.h / 2, wall.y + wall.h / 2);
    const distance = Math.hypot(x - closestX, y - closestY);
    if (distance > radius) continue;
    wall.hp -= damage;
    state.particles.push({ x: closestX, y: closestY, life: 0.45, startLife: 0.45, color: "#d8d0a8", size: 30 });
  }
  state.walls = state.walls.filter((wall) => (wall.hp ?? wallMaxHp(wall)) > 0);
}

function damageWall(wall, damage, x = wall.x, y = wall.y) {
  if (isUnbreakableWall(wall)) {
    state.particles.push({ x, y, life: 0.25, startLife: 0.25, color: "#8ee7ff", size: 18 });
    return;
  }
  wall.maxHp ??= wallMaxHp(wall);
  wall.hp ??= wall.maxHp;
  wall.hp -= damage;
  state.particles.push({ x, y, life: 0.45, startLife: 0.45, color: "#d8d0a8", size: 26 });
  state.walls = state.walls.filter((candidate) => (candidate.hp ?? wallMaxHp(candidate)) > 0);
}

function unitWallDamage(unit, damage) {
  const bonus = state.levelMode && unit?.team === "blue" && !state.sandbox ? 1 + (state.rewardMods.wallDamageBonus || 0) : 1;
  return damage * bonus;
}

function canUnitDamageWall(unit, wall) {
  if (!unit || unit.canAttackWalls === false || isUnbreakableWall(wall)) return false;
  if (wall.team && wall.team === unit.team) return false;
  return !(buildingTypes[wall.type] && wall.team === unit.team);
}

function terrainAt(x, y, type = null) {
  return state.terrains.find((terrain) => (!type || terrain.type === type) && Math.hypot(x - terrain.x, y - terrain.y) <= terrain.radius);
}

function terrainSpeedFactor(unit) {
  return terrainAt(unit.x, unit.y, "water") ? 0.55 : 1;
}

function terrainRangeFactor(unit) {
  return terrainAt(unit.x, unit.y, "high") ? 1.25 : 1;
}

function wallTargetNear(unit, target = null) {
  if (unit.canAttackWalls === false) return null;
  let best = null;
  let bestDistance = Infinity;
  for (const wall of state.walls) {
    if (!canUnitDamageWall(unit, wall)) continue;
    const closestX = clamp(unit.x, wall.x - wall.w / 2, wall.x + wall.w / 2);
    const closestY = clamp(unit.y, wall.y - wall.h / 2, wall.y + wall.h / 2);
    const distance = Math.hypot(unit.x - closestX, unit.y - closestY);
    const lineBlocksThisUnit = !(wall.type === "arrow" && unit.projectileSpeed);
    const blocked = target && lineBlocksThisUnit ? segmentHitsWall(unit.x, unit.y, target.x, target.y, wall, unit.radius + 12) : false;
    if (!blocked && distance > unit.radius + 18) continue;
    if (distance < bestDistance) {
      best = { kind: "wall", wall, x: closestX, y: closestY, radius: 0, dead: false };
      bestDistance = distance;
    }
  }
  return best ? { target: best, distance: bestDistance } : null;
}

function pushOutOfWalls(unit) {
  if (unit.dead) return;
  for (const wall of state.walls) {
    const closestX = clamp(unit.x, wall.x - wall.w / 2, wall.x + wall.w / 2);
    const closestY = clamp(unit.y, wall.y - wall.h / 2, wall.y + wall.h / 2);
    const dx = unit.x - closestX;
    const dy = unit.y - closestY;
    const distance = Math.max(0.01, Math.hypot(dx, dy));
    if (distance >= unit.radius) continue;
    const push = unit.radius - distance;
    const nx = dx / distance;
    const ny = dy / distance;
    unit.x += nx * push;
    unit.y += ny * push;
    unit.vx += nx * 45;
    unit.vy += ny * 45;
  }
}

function projectileHitsWall(projectile) {
  if (projectile.passWalls) return false;
  return state.walls.some((wall) => {
    if (wall.type === "arrow") return false;
    return projectile.x >= wall.x - wall.w / 2 && projectile.x <= wall.x + wall.w / 2 && projectile.y >= wall.y - wall.h / 2 && projectile.y <= wall.y + wall.h / 2;
  });
}

function segmentHitsWall(x1, y1, x2, y2, wall, padding = 20) {
  const minX = wall.x - wall.w / 2 - padding;
  const maxX = wall.x + wall.w / 2 + padding;
  const minY = wall.y - wall.h / 2 - padding;
  const maxY = wall.y + wall.h / 2 + padding;
  for (let i = 0; i <= 10; i += 1) {
    const t = i / 10;
    const x = x1 + (x2 - x1) * t;
    const y = y1 + (y2 - y1) * t;
    if (x >= minX && x <= maxX && y >= minY && y <= maxY) return true;
  }
  return false;
}

function wallAvoidancePoint(unit, target) {
  const directTarget = { x: target.x, y: target.y };
  let blocker = null;
  for (const wall of state.walls) {
    if (wall.type === "arrow" && unit.projectileSpeed) continue;
    if (segmentHitsWall(unit.x, unit.y, directTarget.x, directTarget.y, wall, unit.radius + 10)) {
      blocker = wall;
      break;
    }
  }
  if (!blocker) return directTarget;

  const margin = unit.radius + (isUnbreakableWall(blocker) ? 28 : 34);
  const left = blocker.x - blocker.w / 2 - margin;
  const right = blocker.x + blocker.w / 2 + margin;
  const top = blocker.y - blocker.h / 2 - margin;
  const bottom = blocker.y + blocker.h / 2 + margin;
  const nearX = unit.x < blocker.x ? left : right;
  const farX = unit.x < blocker.x ? right : left;
  const nearY = unit.y < blocker.y ? top : bottom;
  const farY = unit.y < blocker.y ? bottom : top;
  const candidates = blocker.w >= blocker.h
    ? [
        { x: left, y: nearY },
        { x: right, y: nearY },
        { x: left, y: farY },
        { x: right, y: farY },
      ]
    : [
        { x: nearX, y: top },
        { x: nearX, y: bottom },
        { x: farX, y: top },
        { x: farX, y: bottom },
      ];

  let best = directTarget;
  let bestScore = Infinity;
  for (const candidate of candidates) {
    const x = clamp(candidate.x, unit.radius, canvas.width - unit.radius);
    const y = clamp(candidate.y, unit.radius, canvas.height - unit.radius);
    const stillBlocked = segmentHitsWall(unit.x, unit.y, x, y, blocker, unit.radius + 4);
    const targetBlocked = segmentHitsWall(x, y, directTarget.x, directTarget.y, blocker, unit.radius + 4);
    const score = Math.hypot(unit.x - x, unit.y - y) + Math.hypot(directTarget.x - x, directTarget.y - y) + (stillBlocked ? 12000 : 0) + (targetBlocked ? 1200 : 0);
    if (score < bestScore) {
      best = { x, y };
      bestScore = score;
    }
  }
  return best;
}
function isWallBuildTool(tool = state.mapTool) {
  return tool === "wall" || tool === "thickWall" || tool === "arrowWall" || tool === "unbreakableWall";
}

function issueCommand(point) {
  const team = state.placeTeam;
  state.commands[team] = { x: point.x, y: point.y, timer: 5.5 };
  const label = team === "blue" ? "Blue" : "Red";
  setToast(state.language === "zh" ? `${team === "blue" ? "蓝队" : "红队"}前往目标点` : `${label} team moving`);
}

function updateCommands(dt) {
  for (const team of ["blue", "red"]) {
    const command = state.commands[team];
    if (!command) continue;
    command.timer -= dt;
    if (command.timer <= 0) state.commands[team] = null;
  }
}

function issueFocus(point) {
  const team = state.placeTeam;
  const enemyTeam = team === "blue" ? "red" : "blue";
  const target = nearestUnit(point, enemyTeam);
  if (!target) {
    setToast(state.language === "zh" ? "没有点中敌人" : "No enemy target selected");
    return;
  }
  state.focusTargets[team] = { id: target.id, timer: 12 };
  setToast(state.language === "zh" ? `${team === "blue" ? "蓝队" : "红队"}集火 ${target.name}` : `${team === "blue" ? "Blue" : "Red"} focusing ${target.name}`);
}

function updateFocusTargets(dt) {
  for (const team of ["blue", "red"]) {
    const focus = state.focusTargets[team];
    if (!focus) continue;
    focus.timer -= dt;
    const target = state.units.find((unit) => unit.id === focus.id && !unit.dead);
    if (!target || target.team === team || focus.timer <= 0) state.focusTargets[team] = null;
  }
}

function selectItem(itemId) {
  const text = translations[state.language] || translations.en;
  if (!isItemAllowedInCurrentMode(itemId)) {
    state.selectedItem = null;
    updateUi();
    setToast(text.itemLevelLocked);
    return;
  }
  state.selectedItem = state.selectedItem === itemId ? null : itemId;
  updateUi();
  if (state.selectedItem) {
    const name = text.itemNames[state.selectedItem] || state.selectedItem;
    const hint = state.phase === "battle" ? text.itemUseHint : text.itemNeedBattle;
    setToast(`${name}: ${hint}`);
  } else {
    setToast(state.language === "zh" ? "已取消道具" : "Item canceled");
  }
}

function createCustomUnitType() {
  const profile = weaponProfiles[customWeapon.value] || weaponProfiles.club;
  const hp = clamp(Number(customHp.value) || 120, 20, CUSTOM_LIMIT);
  const damage = clamp(Number(customDamage.value) || 22, 1, CUSTOM_LIMIT);
  const knockback = clamp(Number(customKnockback.value) || 2.3, 0, CUSTOM_LIMIT);
  const attackSpeed = clamp(Number(customAttackSpeed.value) || 1.2, 0.2, CUSTOM_LIMIT);
  const speed = clamp(Number(customMoveSpeed.value) || 48, 8, CUSTOM_LIMIT);
  const areaAttack =
    customAreaAttack.checked && Number(customAreaRange.value) > 0 && Number(customAreaDamage.value) > 0
      ? {
          range: clamp(Number(customAreaRange.value) || 0, 0, CUSTOM_LIMIT),
          damage: clamp(Number(customAreaDamage.value) || 0, 0, CUSTOM_LIMIT),
        }
      : null;
  const size = clamp(Number(customSize.value) || profile.radius, 8, CUSTOM_LIMIT);
  const customAttackRange = clamp(Number(customRange.value) || profile.range, 8, CUSTOM_LIMIT);
  const stopDistance = clamp(Number(customStopDistance.value) || customAttackRange, 0, CUSTOM_LIMIT);
  const dodgeChance = clamp(Number(customDodge.value) || 0, 0, CUSTOM_LIMIT) / 100;
  const burstCount = Math.max(1, Math.floor(clamp(Number(customBurstCount.value) || 1, 1, CUSTOM_LIMIT)));
  const burstCooldown = clamp(Number(customBurstCooldown.value) || 0, 0, CUSTOM_LIMIT);
  const skills = {
    explode: skillExplode.checked,
    explodeDamage: clamp(Number(skillExplodeDamage.value) || 120, 10, CUSTOM_LIMIT),
    explodeRange: clamp(Number(skillExplodeRange.value) || 90, 20, CUSTOM_LIMIT),
    poisonSlime: skillPoisonSlime.checked,
    slimeChance: clamp(Number(skillSlimeChance.value) || 35, 0, CUSTOM_LIMIT) / 100,
    summonOnKill: skillSummonOnKill.checked,
    summonChance: clamp(Number(skillSummonChance.value) || 35, 0, CUSTOM_LIMIT) / 100,
    summonInheritPercent: clamp(Number(skillSummonInheritPercent.value) || 50, 0, CUSTOM_LIMIT) / 100,
    summonInheritSkills: skillSummonInheritSkills.checked,
    summonInheritSecond: skillSummonInheritSecond.checked,
    damageOnKill: skillDamageOnKill.checked,
    damageGain: clamp(Number(skillDamageGain.value) || 5, 0, CUSTOM_LIMIT),
    damageAura: skillDamageAura.checked,
    damageAuraRange: clamp(Number(skillDamageAuraRange.value) || 120, 0, CUSTOM_LIMIT),
    damageAuraDamage: clamp(Number(skillDamageAuraDamage.value) || 10, 0, CUSTOM_LIMIT),
    tornado: skillTornado.checked,
    tornadoDamage: clamp(Number(skillTornadoDamage.value) || 6, 0, CUSTOM_LIMIT),
    tornadoDuration: clamp(Number(skillTornadoDuration.value) || 4.2, 0, CUSTOM_LIMIT),
    tornadoRange: clamp(Number(skillTornadoRange.value) || 82, 0, CUSTOM_LIMIT),
    fireBreath: skillFireBreath.checked,
    fireParticleSize: clamp(Number(skillFireParticleSize.value) || 1, 0, CUSTOM_LIMIT),
    fireDuration: clamp(Number(skillFireDuration.value) || 5, 0, CUSTOM_LIMIT),
    fireRange: clamp(Number(skillFireRange.value) || 95, 0, CUSTOM_LIMIT),
    fireball: skillFireball.checked,
    fireballDamage: clamp(Number(skillFireballDamage.value) || 52, 0, CUSTOM_LIMIT),
    holyShield: skillHolyShield.checked,
    holyShieldRange: clamp(Number(skillHolyShieldRange.value) || 160, 0, CUSTOM_LIMIT),
    holyShieldReduction: clamp(Number(skillHolyShieldReduction.value) || 45, 0, CUSTOM_LIMIT) / 100,
    freezeAttack: skillFreezeAttack.checked,
    blockRangedChance: clamp(Number(skillBlockRanged.value) || 0, 0, CUSTOM_LIMIT) / 100,
    berserkHp: clamp(Number(skillBerserkHp.value) || 0, 0, CUSTOM_LIMIT),
    berserkDamage: clamp(Number(skillBerserkDamage.value) || 50, 0, CUSTOM_LIMIT) / 100,
    berserkHeal: clamp(Number(skillBerserkHeal.value) || 0, 0, CUSTOM_LIMIT),
  };
  const ranged = customRanged.checked;
  const canAttackWalls = customAttackWalls.checked;
  const secondProfile = weaponProfiles[customSecondWeapon.value] || null;
  const secondRange = clamp(Number(customSecondRange.value) || 0, 0, CUSTOM_LIMIT);
  const secondDamage = clamp(Number(customSecondDamage.value) || 0, 0, CUSTOM_LIMIT);
  const secondRanged = customSecondRanged.checked;
  const secondBurstCount = Math.max(1, Math.floor(clamp(Number(customSecondBurstCount.value) || 1, 1, CUSTOM_LIMIT)));
  const secondBurstCooldown = clamp(Number(customSecondBurstCooldown.value) || 0, 0, CUSTOM_LIMIT);
  const secondAttack =
    customSecondWeapon.value !== "none" && secondRange > 0 && secondDamage > 0
      ? {
          weapon: customSecondWeapon.value,
          range: secondRange,
          damage: secondDamage,
          ranged: secondRanged,
          projectileSpeed: secondRanged ? secondProfile.projectileSpeed || 390 : 0,
          splash: secondRanged && customSecondWeapon.value === "cannon" ? secondProfile.splash : 0,
          cooldown: Math.max(0.25, 1 / attackSpeed),
          burstCount: secondBurstCount,
          burstCooldown: secondBurstCooldown,
        }
      : null;
  const cleanName = customName.value.trim() || `鑷畾涔?{customUnitCounter}`;
  const glyph = cleanName.slice(0, 1).toUpperCase();
  const palette = ["#f2a65a", "#d77fa1", "#77c1d2", "#a7d977", "#c4a7e7", "#f2d36b"];
  const projectileSpeed = ranged ? profile.projectileSpeed || 390 : 0;
  const splash = ranged && customWeapon.value === "cannon" ? profile.splash : 0;
  const range = customAttackRange;
  const price = Math.round(
      hp * 0.7 +
      damage * 7 +
      knockback * 18 +
      attackSpeed * 34 +
      speed * 1.4 +
      size * 3 +
      range * 0.45 +
      dodgeChance * 260 +
      (burstCount > 1 ? burstCount * 55 + burstCooldown * 18 : 0) +
      (areaAttack ? areaAttack.range * 0.35 + areaAttack.damage * 4.5 : 0) +
      (skills.explode ? skills.explodeDamage * 0.7 + skills.explodeRange * 0.55 : 0) +
      (skills.poisonSlime ? 120 + skills.slimeChance * 120 : 0) +
      (skills.summonOnKill ? 130 + skills.summonChance * 100 : 0) +
      (skills.damageOnKill ? 120 + skills.damageGain * 8 : 0) +
      (skills.damageAura ? 160 + skills.damageAuraRange * 0.35 + skills.damageAuraDamage * 8 : 0) +
      (skills.tornado ? 180 + skills.tornadoRange * 0.45 + skills.tornadoDamage * 12 + skills.tornadoDuration * 25 : 0) +
      (skills.fireBreath ? 120 + skills.fireRange * 0.35 + skills.fireDuration * 18 + skills.fireParticleSize * 30 : 0) +
      (skills.fireball ? 130 + skills.fireballDamage * 3 : 0) +
      (skills.holyShield ? 140 + skills.holyShieldRange * 0.45 + skills.holyShieldReduction * 320 : 0) +
      (skills.freezeAttack ? 140 : 0) +
      skills.blockRangedChance * 220 +
      (skills.berserkHp > 0 ? skills.berserkDamage * 180 + skills.berserkHeal * 0.8 : 0) +
      (secondAttack ? secondAttack.damage * 5 + secondAttack.range * 0.22 + (secondAttack.ranged ? 80 : 0) + (secondBurstCount > 1 ? secondBurstCount * 45 + secondBurstCooldown * 16 : 0) : 0) +
      (ranged ? 95 : 0) +
      splash * 1.5,
  );
  const type = {
    id: `custom-${customUnitCounter++}`,
    name: cleanName,
    tag: "",
    glyph,
    price,
    hp,
    damage,
    range,
    stopDistance,
    speed,
    radius: size,
    cooldown: 1 / attackSpeed,
    burstCount,
    burstCooldown,
    projectileSpeed,
    splash,
    areaAttack,
    knockback,
    dodgeChance,
    weapon: customWeapon.value,
    isRangedCustom: ranged,
    canAttackWalls,
    secondAttack,
    skills,
    color: palette[(customUnitCounter - 2) % palette.length],
  };
  unitTypes.push(type);
  state.selected = type.id;
  renderUnitList();
  updateUi();
  setToast(`${type.name} added to unit list`);
}

function addUnit(typeId, team, x, y) {
  const type = typeById(typeId);
  const tint = team === "blue" ? type.color : "#ff706c";
  const level = state.upgrades[typeId] || 0;
  const statBoost = 1 + level * 0.18;
  const enemyLevelBoost = state.levelMode && team === "red" && !state.sandbox ? 1 + Math.max(0, state.currentLevel - 1) * 0.07 : 1;
  const rangeBoost = 1 + level * 0.08;
  const speedBoost = 1 + level * 0.08;
  const rewardAttackSpeedBoost = state.levelMode && team === "blue" && !state.sandbox ? Math.max(0.1, 1 + (state.rewardMods.attackSpeedBonus || 0)) : 1;
  const pvzAttackSpeedBoost = isPvzMode() && team === "blue" ? Math.max(0.1, 1 + (state.pvzMods?.attackSpeedBonus || 0)) : 1;
  const cooldownBoost = Math.max(0.55, 1 - level * 0.08) / rewardAttackSpeedBoost / pvzAttackSpeedBoost;
  const rewardDamageBoost = state.levelMode && team === "blue" && !state.sandbox ? Math.max(0.1, 1 + (state.rewardMods.damageBonus || 0)) : 1;
  const pvzDamageBoost = isPvzMode() && team === "blue" ? Math.max(0.1, 1 + (state.pvzMods?.damageBonus || 0)) : 1;
  const rewardHpBoost = state.levelMode && team === "blue" && !state.sandbox ? Math.max(0.1, 1 + (state.rewardMods.hpBonus || 0)) : 1;
  const pvzHpBoost = isPvzMode() && team === "blue" ? Math.max(0.1, 1 + (state.pvzMods?.hpBonus || 0)) : 1;
  const unit = {
    id: state.nextId++,
    team,
    typeId,
    name: type.name,
    glyph: type.glyph,
    weapon: type.weapon || "club",
    secondAttack: type.secondAttack || null,
    areaAttack: type.areaAttack || null,
    x,
    y,
    vx: (Math.random() - 0.5) * 10,
    vy: (Math.random() - 0.5) * 10,
    hp: Math.round(type.hp * statBoost * rewardHpBoost * pvzHpBoost * enemyLevelBoost),
    maxHp: Math.round(type.hp * statBoost * rewardHpBoost * pvzHpBoost * enemyLevelBoost),
    damage: type.damage * statBoost * rewardDamageBoost * pvzDamageBoost * enemyLevelBoost,
    range: type.range * rangeBoost,
    burstCount: type.burstCount || 1,
    burstCooldown: type.burstCooldown || 0,
    stopDistance: (type.stopDistance ?? type.range) * rangeBoost,
    speed: type.speed * speedBoost,
    radius: type.radius,
    cooldownTime: type.cooldown * cooldownBoost,
    projectileSpeed: type.projectileSpeed || 0,
    splash: type.splash || 0,
    knockback: type.knockback || 2.3,
    dodgeChance: type.dodgeChance || 0,
    canAttackWalls: type.canAttackWalls !== false,
    skills: type.skills || {},
    poisonTimer: 0,
    poisonTick: 0,
    burnTimer: 0,
    burnTick: 0,
    freezeTimer: 0,
    stasisTimer: 0,
    defensePotionTimer: 0,
    powerPotionTimer: 0,
    speedPotionTimer: 0,
    infectionTimer: 0,
    infectionDuration: 0,
    infectionTeam: null,
    stasisSourceId: null,
    sunTimer: type.skills?.sunProducer ? type.skills.sunInterval || 5 : 0,
    gatlingBoosted: Boolean(type.skills?.permanentGatling),
    gatlingCheckTimer: type.skills?.gatling ? type.skills.gatlingCheckInterval || 3 : 0,
    chompCooldown: type.skills?.chompBlast ? 1.2 : 0,
    stasisCooldown: 1 + Math.random() * 2,
    fireBreathCooldown: type.skills?.fireBreath ? 0.8 + Math.random() * 1.1 : 0,
    fireballCooldown: 1.5 + Math.random() * 2,
    fiveElementBreathCooldown: 0,
    randomSpawnCooldown: type.skills?.randomSpawn ? type.skills.randomSpawnInterval || 5 : 0,
    whirlwindCooldown: type.skills?.whirlwindLeap ? 1.2 + Math.random() * 1.8 : 0,
    buildCooldown: 0,
    airborneTimer: 0,
    airborneTotal: 0,
    damageAuraPulse: 0,
    slimeCooldown: 0,
    tornadoCooldown: 1 + Math.random() * 1.5,
    berserked: false,
    statsDamage: 0,
    statsKills: 0,
    reviveChance: 0,
    levelFireResist: 0,
    color: tint,
    cooldown: Math.random() * 0.4,
    wobble: Math.random() * Math.PI * 2,
    dead: false,
  };
  state.units.push(unit);
  if (typeId === "tiamat") spawnTiamatSummonEffect(unit);
  return unit;
}

function spendFor(type) {
  if (state.sandbox) return;
  state.budget -= type.price;
  updateUi();
}

function bannedUnitsForCurrentLevel() {
  if (!state.levelMode || state.currentLevel <= 0) return new Set();
  const rule = levelUnitUnlocks.find((entry) => state.currentLevel <= entry.maxLevel) || levelUnitUnlocks[levelUnitUnlocks.length - 1];
  return new Set([...(rule.banned || []), "portalmage", ...(levelSpecificBans[state.currentLevel] || [])]);
}

function currentLevelHasDragonEnemy() {
  const level = levelDefinitions.find((entry) => entry.number === state.currentLevel);
  return Boolean(level?.enemies?.some(([typeId]) => ["dragonling", "adultdragon", "hydra", "tiamat"].includes(typeId)));
}

function currentLevelHasTiamatEnemy() {
  const level = levelDefinitions.find((entry) => entry.number === state.currentLevel);
  return Boolean(level?.enemies?.some(([typeId]) => typeId === "tiamat"));
}

function isUnitAllowedInCurrentLevel(type) {
  if (!type || !state.levelMode || isSandboxActive()) return true;
  if (type.id === "adultdragon" && !currentLevelHasDragonEnemy()) return false;
  if (type.id === "tiamat" && currentLevelHasTiamatEnemy()) return true;
  return !bannedUnitsForCurrentLevel().has(type.id);
}

function levelBanMessage(type) {
  const name = type ? displayType(type).name : "";
  return state.language === "zh" ? `这个关卡不能使用 ${name}` : `${name} is locked for this level`;
}

function upgradePointReward(levelNumber) {
  return 1 + Math.floor(Math.max(0, levelNumber - 1) / 10);
}

function rewardText(card) {
  const pack = state.language === "zh" ? card.zh : card.en;
  return { title: pack[0], effect: pack[1], cost: pack[2] };
}

function makeRewardChoices(levelNumber) {
  const start = levelNumber % rewardCardPool.length;
  const ordered = rewardCardPool.map((_, index) => rewardCardPool[(start + index) % rewardCardPool.length]);
  const choices = [];
  for (const kind of ["damage", "upgrade", "other"]) {
    const card = ordered.find((entry) => entry.kind === kind && !choices.includes(entry));
    if (card) choices.push(card);
  }
  return choices.slice(0, 3);
}

function makePvzRewardChoices(waveNumber) {
  const start = (waveNumber * 2) % pvzRewardCardPool.length;
  const ordered = pvzRewardCardPool.map((_, index) => pvzRewardCardPool[(start + index) % pvzRewardCardPool.length]);
  const choices = [];
  for (const kind of ["damage", "upgrade", "other"]) {
    const card = ordered.find((entry) => entry.kind === kind && !choices.includes(entry));
    if (card) choices.push(card);
  }
  return choices.slice(0, 3);
}
function renderRewardModal() {
  const text = translations[state.language] || translations.en;
  if (!rewardModal || !rewardCards) return;
  if (!state.pendingRewardChoices.length) {
    rewardModal.classList.add("hidden");
    return;
  }
  const pvzReward = state.pendingRewardChoices.some((card) => card.pvz);
  rewardTitle.textContent = pvzReward ? (state.language === "zh" ? "选择波次奖励" : "Choose Wave Reward") : text.rewardTitle;
  rewardSubtitle.textContent = pvzReward ? (state.language === "zh" ? "选一张卡强化这局 PvZ。" : "Pick one card for this PvZ run.") : text.rewardSubtitle;
  rewardCards.innerHTML = "";
  state.pendingRewardChoices.forEach((card) => {
    const info = rewardText(card);
    const button = document.createElement("button");
    button.className = "reward-card";
    button.type = "button";
    button.dataset.rewardId = card.id;
    button.innerHTML = `<b>${info.title}</b><span>${info.effect}</span><small>${info.cost}</small>`;
    rewardCards.appendChild(button);
  });
  rewardModal.classList.remove("hidden");
}
function chooseRewardCard(cardId) {
  const card = state.pendingRewardChoices.find((entry) => entry.id === cardId);
  if (!card) return;
  state.pendingRewardChoices = [];
  if (rewardModal) rewardModal.classList.add("hidden");
  card.apply();
  if (!card.pvz) saveRewardMods(state.rewardMods);
  updateLevelUi();
  updateUi();
  setToast(rewardText(card).title);
}
function ensureSelectedUnitAllowed() {
  const selectedType = typeById(state.selected);
  if (isUnitAllowedInCurrentLevel(selectedType)) return;
  const fallback = unitTypes.find((type) => type.id !== "arrowtower" && isUnitAllowedInCurrentLevel(type));
  if (fallback) state.selected = fallback.id;
}

function upgradeSelectedUnitType() {
  if (state.phase !== "setup") {
    setToast(state.language === "zh" ? "布阵阶段才能升级" : "Upgrade during setup");
    return;
  }
  const type = typeById(state.selected);
  if (!type || type.id === "arrowtower") return;
  const current = state.upgrades[type.id] || 0;
  if (current >= 3) {
    setToast(state.language === "zh" ? "已经满级" : "Max level reached");
    return;
  }
  const pointCost = current + 1;
  if (!state.sandbox && state.levelMode && state.upgradePoints < pointCost) {
    setToast((translations[state.language] || translations.en).upgradeNeedPoint);
    return;
  }
  const goldCost = Math.ceil(type.price * (0.75 + current * 0.45));
  if (!state.sandbox && !state.levelMode && state.budget < goldCost) {
    setToast(state.language === "zh" ? "金币不够升级" : "Not enough gold to upgrade");
    return;
  }
  if (!state.sandbox && state.levelMode) {
    state.upgradePoints -= pointCost;
    saveUpgradePoints(state.upgradePoints);
  } else if (!state.sandbox) {
    state.budget -= goldCost;
  }
  state.upgrades[type.id] = current + 1;
  saveUnitUpgrades(state.upgrades);
  renderUnitList();
  updateUi();
  if (state.levelMode && !state.sandbox) {
    setToast(state.language === "zh" ? `${type.name} 升到 ${current + 1} 级，消耗 ${pointCost} 升级点` : `${type.name} upgraded to level ${current + 1}, spent ${pointCost} point(s)`);
  } else {
    setToast(state.language === "zh" ? `${type.name} 升到 ${current + 1} 级` : `${type.name} upgraded to level ${current + 1}`);
  }
}

function refund(typeId) {
  if (state.sandbox) return;
  state.budget += typeById(typeId).price;
  updateUi();
}

function batchOffsets(count, spacing) {
  if (count <= 1) return [{ x: 0, y: 0 }];
  const offsets = [];
  const rings = Math.ceil((Math.sqrt(count) - 1) / 2);
  offsets.push({ x: 0, y: 0 });
  for (let ring = 1; ring <= rings && offsets.length < count; ring += 1) {
    const perSide = ring * 2;
    for (let side = 0; side < 4 && offsets.length < count; side += 1) {
      for (let step = 0; step < perSide && offsets.length < count; step += 1) {
        const a = -ring + step;
        const b = ring;
        const point =
          side === 0
            ? { x: a, y: -b }
            : side === 1
              ? { x: b, y: a }
              : side === 2
                ? { x: -a, y: b }
                : { x: -b, y: -a };
        offsets.push({ x: point.x * spacing, y: point.y * spacing });
      }
    }
  }
  return offsets.slice(0, count);
}

function placePlayerUnit(point) {
  if (isPvzMode()) {
    placePvzPlantBlock(point);
    return;
  }
  const type = typeById(state.selected);
  if (!type) return;
  if (state.challengeMode && type.id === "sunflower") {
    setToast(state.language === "zh" ? "挑战模式不能使用向日葵" : "Sunflowers are disabled in challenge mode");
    return;
  }
  if (!isUnitAllowedInCurrentLevel(type)) {
    setToast(levelBanMessage(type));
    return;
  }
  const battlePlantPlacement = state.phase === "battle" && state.plantMode && isPlantType(type);
  if (state.phase !== "setup" && !battlePlantPlacement) return;
  if (!state.sandbox && point.x > blueZone() - 18) {
    setToast("Only place blue units on the left side");
    return;
  }
  if (!state.sandbox && state.budget < type.price) {
    setToast("Not enough gold. Pick a cheaper unit");
    return;
  }
  const team = state.sandbox ? state.placeTeam : "blue";
  const wanted = Math.max(1, Math.min(60, Math.floor(Number(batchPlaceCount?.value) || 1)));
  const affordable = state.sandbox ? wanted : Math.max(1, Math.min(wanted, Math.floor(state.budget / type.price)));
  const spacing = Math.max(type.radius * 2.35, 34);
  const offsets = batchOffsets(affordable, spacing);
  let placed = 0;
  for (const offset of offsets) {
    const maxX = state.sandbox ? canvas.width - type.radius : blueZone() - 18;
    const x = clamp(point.x + offset.x, type.radius, maxX);
    const y = clamp(point.y + offset.y, type.radius, canvas.height - type.radius);
    addUnit(type.id, team, x, y);
    spendFor(type);
    placed += 1;
    if (!state.sandbox && state.budget < type.price) break;
  }
  const suffix = placed > 1 ? ` x${placed}` : "";
  setToast(`${team === "blue" ? "Blue" : "Red"} ${type.name}${suffix} deployed`);
}

function nearestUnit(point, team = "blue") {
  let best = null;
  let bestDistance = Infinity;
  for (const unit of state.units) {
    if ((team && unit.team !== team) || unit.dead) continue;
    const distance = Math.hypot(unit.x - point.x, unit.y - point.y);
    if (distance < bestDistance) {
      best = unit;
      bestDistance = distance;
    }
  }
  return bestDistance < 34 ? best : null;
}

function removeUnit(unit) {
  state.units = state.units.filter((candidate) => candidate.id !== unit.id);
  if (state.controlledId === unit.id) state.controlledId = null;
  if (unit.team === "blue") refund(unit.typeId);
}

function bytesToBase64(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}

function base64ToBytes(text) {
  const binary = atob(text);
  return Uint8Array.from(binary, (char) => char.charCodeAt(0));
}

function encodeFormationPayload(payload) {
  const json = JSON.stringify(payload);
  const bytes = new TextEncoder().encode(json);
  return `TLF1-${bytesToBase64(bytes)}`;
}

function compactNumber(value) {
  return Math.max(0, Math.round(Number(value) || 0)).toString(36);
}

function expandNumber(value) {
  return parseInt(String(value || "0"), 36) || 0;
}

function wallTypeCode(type) {
  return type === "unbreakable" ? "u" : type === "thick" ? "t" : type === "arrow" ? "a" : type === "arrowTower" ? "o" : type === "cannonTower" ? "c" : type === "healTower" ? "h" : type === "frostTower" ? "f" : type === "goldMine" ? "g" : "n";
}

function wallTypeFromCode(code) {
  return code === "u" ? "unbreakable" : code === "t" ? "thick" : code === "a" ? "arrow" : code === "o" ? "arrowTower" : code === "c" ? "cannonTower" : code === "h" ? "healTower" : code === "f" ? "frostTower" : code === "g" ? "goldMine" : "normal";
}

function terrainTypeCode(type) {
  return type === "water" ? "w" : type === "fire" ? "f" : type === "grass" ? "r" : type === "high" ? "h" : "w";
}

function terrainTypeFromCode(code) {
  return code === "f" ? "fire" : code === "r" ? "grass" : code === "h" ? "high" : "water";
}

function compactCustomType(type) {
  return {
    id: type.id,
    name: level > 0 ? `${type.name}+${level}` : type.name,
    tag: type.tag,
    glyph: type.glyph,
    price: type.price,
    hp: type.hp,
    damage: type.damage,
    range: type.range,
    stopDistance: type.stopDistance,
    speed: type.speed,
    radius: type.radius,
    cooldown: type.cooldown,
    projectileSpeed: type.projectileSpeed || 0,
    splash: type.splash || 0,
    knockback: type.knockback || 2.3,
    dodgeChance: type.dodgeChance || 0,
    weapon: type.weapon,
    isRangedCustom: type.isRangedCustom,
    canAttackWalls: type.canAttackWalls !== false,
    areaAttack: type.areaAttack || null,
    secondAttack: type.secondAttack || null,
    skills: type.skills || {},
    color: type.color,
  };
}

function ensureImportedCustomTypes(customTypes = []) {
  for (const raw of customTypes) {
    if (!raw || !String(raw.id || "").startsWith("custom-") || typeById(raw.id)) continue;
    unitTypes.push({
      ...raw,
      price: Number(raw.price) || 100,
      hp: Number(raw.hp) || 100,
      damage: Number(raw.damage) || 10,
      range: Number(raw.range) || 40,
      stopDistance: Number(raw.stopDistance) || Number(raw.range) || 40,
      speed: Number(raw.speed) || 30,
      radius: Number(raw.radius) || 16,
      cooldown: Number(raw.cooldown) || 1,
      projectileSpeed: Number(raw.projectileSpeed) || 0,
      splash: Number(raw.splash) || 0,
      knockback: Number(raw.knockback) || 2.3,
      dodgeChance: Number(raw.dodgeChance) || 0,
      weapon: raw.weapon || "club",
      areaAttack: raw.areaAttack || null,
      secondAttack: raw.secondAttack || null,
      skills: raw.skills || {},
      color: raw.color || "#b7c8ff",
    });
  }
}

function encodeShortFormation() {
  const ids = unitTypes.map((type) => type.id);
  const customIds = Array.from(new Set(state.units
    .filter((unit) => !unit.dead && unit.typeId.startsWith("custom-") && typeById(unit.typeId))
    .map((unit) => unit.typeId)));
  const customTypes = customIds.map((id) => compactCustomType(typeById(id)));
  const units = state.units
    .filter((unit) => !unit.dead && ids.includes(unit.typeId))
    .map((unit) => [
      unit.typeId.startsWith("custom-") ? `c${customIds.indexOf(unit.typeId).toString(36)}` : compactNumber(ids.indexOf(unit.typeId)),
      unit.team === "red" ? "r" : "b",
      compactNumber(unit.x),
      compactNumber(unit.y),
    ].join("."));
  const walls = state.walls.map((wall) => [
    compactNumber(wall.x),
    compactNumber(wall.y),
    compactNumber(wall.w),
    compactNumber(wall.h),
    wallTypeCode(wall.type),
    wall.team === "red" ? "r" : "b",
  ].join("."));
  const terrains = state.terrains.map((terrain) => [
    compactNumber(terrain.x),
    compactNumber(terrain.y),
    compactNumber(terrain.radius),
    terrainTypeCode(terrain.type),
  ].join("."));
  const customPart = customTypes.length ? bytesToBase64(new TextEncoder().encode(JSON.stringify(customTypes))) : "";
  const payload = `2|${units.join(",")}|${walls.join(",")}|${customPart}|${terrains.join(",")}`;
  return `TS1-${bytesToBase64(new TextEncoder().encode(payload))}`;
}

function decodeFormationPayload(code) {
  const trimmed = String(code || "").trim();
  if (trimmed.startsWith("TLF1-")) {
    const bytes = base64ToBytes(trimmed.slice(5));
    return JSON.parse(new TextDecoder().decode(bytes));
  }
  if (trimmed.startsWith("TS1-")) {
    const raw = new TextDecoder().decode(base64ToBytes(trimmed.slice(4)));
    const [version, unitPart = "", wallPart = "", customPart = "", terrainPart = ""] = raw.split("|");
    if (version !== "1" && version !== "2") throw new Error("bad short version");
    const ids = unitTypes.map((type) => type.id);
    const customTypes = customPart ? JSON.parse(new TextDecoder().decode(base64ToBytes(customPart))) : [];
    return {
      version: 2,
      customTypes,
      units: unitPart
        ? unitPart.split(",").filter(Boolean).map((entry) => {
            const [typeIndex, team, x, y] = entry.split(".");
            return {
              typeId: typeIndex?.startsWith("c") ? customTypes[parseInt(typeIndex.slice(1), 36) || 0]?.id : ids[expandNumber(typeIndex)],
              team: team === "r" ? "red" : "blue",
              x: expandNumber(x),
              y: expandNumber(y),
            };
          })
        : [],
      walls: wallPart
        ? wallPart.split(",").filter(Boolean).map((entry) => {
            const [x, y, w, h, type, team] = entry.split(".");
            return {
              x: expandNumber(x),
              y: expandNumber(y),
              w: expandNumber(w),
              h: expandNumber(h),
              type: wallTypeFromCode(type),
              team: team === "r" ? "red" : "blue",
            };
          })
        : [],
      terrains: version === "2" && terrainPart
        ? terrainPart.split(",").filter(Boolean).map((entry) => {
            const [x, y, radius, type] = entry.split(".");
            return {
              x: expandNumber(x),
              y: expandNumber(y),
              radius: expandNumber(radius),
              type: terrainTypeFromCode(type),
            };
          })
        : [],
    };
  }
  throw new Error("bad prefix");
}

function exportFormation() {
  const code = encodeShortFormation();
  if (formationCode) {
    formationCode.value = code;
    formationCode.focus();
    formationCode.select();
  }
  setToast((translations[state.language] || translations.en).formationExported);
}

function saveFormationSlot(slot) {
  try {
    localStorage.setItem(`tabsLiteFormation${slot}`, encodeShortFormation());
    setToast(state.language === "zh" ? `阵容 ${slot} 已保存` : `Formation ${slot} saved`);
  } catch {
    setToast(state.language === "zh" ? "保存失败" : "Save failed");
  }
}

function loadFormationSlot(slot) {
  const code = localStorage.getItem(`tabsLiteFormation${slot}`);
  if (!code) {
    setToast(state.language === "zh" ? `阵容 ${slot} 是空的` : `Formation ${slot} is empty`);
    return;
  }
  try {
    const payload = decodeFormationPayload(code);
    restoreLocalFormation(payload);
    if (formationCode) formationCode.value = code;
    setToast(state.language === "zh" ? `阵容 ${slot} 已读取` : `Formation ${slot} loaded`);
  } catch {
    setToast((translations[state.language] || translations.en).formationInvalid);
  }
}

function restoreLocalFormation(payload) {
  if (!payload || !Array.isArray(payload.units) || !Array.isArray(payload.walls)) throw new Error("bad payload");
  ensureImportedCustomTypes(payload.customTypes || []);
  state.phase = "setup";
  state.sandbox = false;
  state.placeTeam = "blue";
  state.units = [];
  state.projectiles = [];
  state.particles = [];
  state.slimes = [];
  state.tornadoes = [];
  state.commands = { blue: null, red: null };
  state.focusTargets = { blue: null, red: null };
  state.controlledId = null;
  state.challengeMode = false;
  state.challengeBudget = 0;
  for (const saved of payload.units.slice(0, 260)) {
    const type = typeById(saved.typeId);
    if (!type) continue;
    addUnit(type.id, saved.team === "red" ? "red" : "blue", clamp(Number(saved.x) || 80, type.radius, canvas.width - type.radius), clamp(Number(saved.y) || canvas.height / 2, type.radius, canvas.height - type.radius));
  }
  state.walls = payload.walls.slice(0, 160).map((saved) => {
    const wall = {
      x: clamp(Number(saved.x) || canvas.width / 2, 20, canvas.width - 20),
      y: clamp(Number(saved.y) || canvas.height / 2, 20, canvas.height - 20),
      w: clamp(Number(saved.w) || 60, 12, canvas.width),
      h: clamp(Number(saved.h) || 28, 12, canvas.height),
      type: ["normal", "thick", "arrow", "unbreakable", ...Object.keys(buildingTypes)].includes(saved.type) ? saved.type : "normal",
      team: saved.team === "red" ? "red" : "blue",
      cooldown: 0,
    };
    if (buildingTypes[wall.type]) {
      wall.w = buildingTypes[wall.type].w;
      wall.h = buildingTypes[wall.type].h;
    }
    wall.maxHp = wallMaxHp(wall);
    wall.hp = wall.maxHp;
    return wall;
  });
  state.terrains = (payload.terrains || []).slice(0, 80).map((saved) => ({
    x: clamp(Number(saved.x) || canvas.width / 2, 20, canvas.width - 20),
    y: clamp(Number(saved.y) || canvas.height / 2, 20, canvas.height - 20),
    radius: clamp(Number(saved.radius) || 70, 24, 160),
    type: terrainTypes[saved.type] ? saved.type : "water",
  }));
  syncBudgetToEnemySize();
  renderUnitList();
  updateUi();
}

function importFormation() {
  const text = translations[state.language] || translations.en;
  try {
    const payload = decodeFormationPayload(formationCode?.value || "");
    if (!payload || !Array.isArray(payload.units) || !Array.isArray(payload.walls)) throw new Error("bad payload");
    state.phase = "setup";
    state.sandbox = false;
    state.placeTeam = "blue";
    state.units = [];
    state.projectiles = [];
    state.particles = [];
    state.slimes = [];
    state.tornadoes = [];
    state.commands = { blue: null, red: null };
    state.focusTargets = { blue: null, red: null };
    state.controlledId = null;
    state.controlKeys = {};
    state.controlSpecialIndex = 0;
    state.mapTool = null;
    state.wallStart = null;
    state.pointer = null;
    state.selectedItem = null;
    state.winnerShown = false;
    state.plantMode = false;
  state.pvzMode = false;
  state.pvzWave = 0;
  state.pvzNextWaveTimer = 0;
    state.challengeMode = true;
    state.challengeBudget = 0;
    ensureImportedCustomTypes(payload.customTypes || []);
    const savedUnits = payload.units.filter((saved) => typeById(saved.typeId));
    const blueSaved = savedUnits.filter((saved) => saved.team !== "red");
    const challengeUnits = (blueSaved.length ? blueSaved : savedUnits).slice(0, 240);
    const mirrorFromBlue = blueSaved.length > 0;
    for (const saved of challengeUnits) {
      const type = typeById(saved.typeId);
      if (!type) continue;
      const rawX = Number(saved.x) || 80;
      const x = mirrorFromBlue ? canvas.width - rawX : rawX;
      addUnit(type.id, "red", clamp(x, canvas.width * 0.54 + type.radius, canvas.width - type.radius), clamp(Number(saved.y) || canvas.height / 2, type.radius, canvas.height - type.radius));
      state.challengeBudget += type.price;
    }
    state.walls = payload.walls.slice(0, 120).map((saved) => {
      const rawX = Number(saved.x) || canvas.width / 2;
      const wall = {
        x: clamp(mirrorFromBlue ? canvas.width - rawX : rawX, 20, canvas.width - 20),
        y: clamp(Number(saved.y) || canvas.height / 2, 20, canvas.height - 20),
        w: clamp(Number(saved.w) || 60, 12, canvas.width),
        h: clamp(Number(saved.h) || 28, 12, canvas.height),
        type: ["normal", "thick", "arrow", "unbreakable", ...Object.keys(buildingTypes)].includes(saved.type) ? saved.type : "normal",
        team: buildingTypes[saved.type] ? "red" : saved.team,
        challengeImported: true,
      };
      if (buildingTypes[wall.type]) {
        wall.w = buildingTypes[wall.type].w;
        wall.h = buildingTypes[wall.type].h;
        wall.cooldown = 0;
        state.challengeBudget += wallCost(wall);
      }
      wall.maxHp = wallMaxHp(wall);
      wall.hp = wall.maxHp;
      return wall;
    });
    state.terrains = (payload.terrains || []).slice(0, 80).map((saved) => ({
      x: clamp(mirrorFromBlue ? canvas.width - (Number(saved.x) || canvas.width / 2) : Number(saved.x) || canvas.width / 2, 20, canvas.width - 20),
      y: clamp(Number(saved.y) || canvas.height / 2, 20, canvas.height - 20),
      radius: clamp(Number(saved.radius) || 70, 24, 160),
      type: terrainTypes[saved.type] ? saved.type : "water",
    }));
    state.challengeBudget = Math.floor(state.challengeBudget * 0.9);
    syncBudgetToEnemySize();
    updateUi();
    renderUnitList();
    setToast(`${text.formationImported}: ${text.budget} ${state.challengeBudget}`);
  } catch {
    setToast(text.formationInvalid);
  }
}

function exitChallengeMode() {
  resetGame(false);
  setToast((translations[state.language] || translations.en).challengeExited);
}

function enterSandboxMode() {
  document.body.dataset.mode = "sandbox";
  resetGame(false);
  state.sandbox = true;
  state.challengeMode = false;
  state.levelMode = false;
  state.currentLevel = 0;
  state.placeTeam = "blue";
  showGame();
  updateUi();
  setToast(state.language === "zh" ? "沙盒模式：无限金币，可以放红队和蓝队" : "Sandbox: infinite gold, red and blue placement enabled");
}

function enterLevelsMode() {
  document.body.dataset.mode = "levels";
  showGame();
  const selectedLevel = Number(levelSelect?.value) || state.currentLevel || 1;
  const levelNumber = selectedLevel > state.unlockedLevel ? state.unlockedLevel : selectedLevel;
  loadLevel(levelNumber);
}

function poisonUnit(unit, seconds = 5) {
  if (unit.dead) return;
  unit.poisonTimer = Math.max(unit.poisonTimer || 0, seconds);
  unit.poisonTick = Math.min(unit.poisonTick || 1, 1);
}

function burnUnit(unit, seconds = 5) {
  if (unit.dead) return;
  if (unit.skills?.burnImmune) {
    unit.burnTimer = 0;
    unit.burnTick = 0;
    return;
  }
  unit.burnTimer = Math.max(unit.burnTimer || 0, seconds);
  unit.burnTick = Math.min(unit.burnTick || 1, 1);
}

function freezeUnit(unit, seconds = 2.4) {
  if (unit.dead) return;
  unit.freezeTimer = Math.max(unit.freezeTimer || 0, seconds);
}

function applyTiamatBurn(unit, dps = 50, seconds = 60) {
  if (unit.dead || (unit.skills?.burnImmune && unit.typeId !== "adultdragon")) return;
  unit.tiamatBurnTimer = Math.max(unit.tiamatBurnTimer || 0, seconds);
  unit.tiamatBurnTick = Math.min(unit.tiamatBurnTick || 1, 1);
  unit.tiamatBurnDps = Math.max(unit.tiamatBurnDps || 0, dps);
}

function applyTiamatFrost(unit, seconds = 60) {
  if (unit.dead) return;
  unit.tiamatFrostTimer = Math.max(unit.tiamatFrostTimer || 0, seconds);
  unit.tiamatFrostTick = Math.min(unit.tiamatFrostTick || 1, 1);
  freezeUnit(unit, seconds);
}

function isMagicOrPoisonDamage(source) {
  return (
    source.damageType === "poison" ||
    source.damageType === "tornado" ||
    source.damageType === "fire" ||
    source.damageType === "ice" ||
    source.damageType === "magic" ||
    source.damageType === "fireball" ||
    source.applyBurn ||
    source.applyFreeze ||
    source.fireball
  );
}

function isFireDamage(source) {
  return source.damageType === "fire" || source.damageType === "fireball" || source.applyBurn || source.fireball;
}

function tiamatDefensePercent(unit) {
  if (!unit.skills?.tiamatBoss) return 0;
  const maxDefense = unit.skills.defensePercent ?? 0;
  const lossHp = Math.max(1, unit.skills.defenseLossHp || 100);
  const missingHp = Math.max(0, unit.maxHp - unit.hp);
  return clamp(maxDefense - Math.floor(missingHp / lossHp), 0, maxDefense);
}

function itemTeam() {
  return state.selectedItem ? state.placeTeam : state.sandbox ? state.placeTeam : "blue";
}

function isItemAllowedInCurrentMode(itemId) {
  return isSandboxActive() || !levelBannedItems.has(itemId);
}

function canPayForItem(item) {
  return state.sandbox || state.budget >= item.cost;
}

function spendForItem(item) {
  if (state.sandbox) return;
  state.budget -= item.cost;
  updateUi();
}

function addRingParticle(x, y, color, size = ITEM_RADIUS) {
  state.particles.push({ x, y, life: 0.75, startLife: 0.75, color, size });
}

function spawnTiamatSummonEffect(unit) {
  const colors = ["#ff5d2e", "#9bdcff", "#70e071", "#d7ecff", "#8f4cff"];
  addRingParticle(unit.x, unit.y, "#8f4cff", unit.radius * 5.2);
  addRingParticle(unit.x, unit.y, "#fff0a8", unit.radius * 3.7);
  state.particles.push({ x: unit.x, y: unit.y, life: 1.25, startLife: 1.25, color: "#2b112f", size: unit.radius * 5.8 });
  state.particles.push({ x: unit.x, y: unit.y, life: 0.95, startLife: 0.95, color: "#c48cff", size: unit.radius * 4.4 });
  for (let i = 0; i < 90; i += 1) {
    const angle = (Math.PI * 2 * i) / 90 + Math.random() * 0.18;
    const distance = unit.radius * (0.8 + Math.random() * 4.1);
    const color = colors[i % colors.length];
    state.particles.push({
      x: unit.x + Math.cos(angle) * distance,
      y: unit.y + Math.sin(angle) * distance,
      vx: Math.cos(angle) * (45 + Math.random() * 180),
      vy: Math.sin(angle) * (45 + Math.random() * 180) - 35 - Math.random() * 120,
      life: 0.55 + Math.random() * 0.75,
      startLife: 1.25,
      color,
      size: 16 + Math.random() * 34,
    });
  }
  for (let i = 0; i < 5; i += 1) {
    const angle = -Math.PI / 2 + (i - 2) * 0.32;
    state.particles.push({
      x: unit.x + Math.cos(angle) * unit.radius * 1.6,
      y: unit.y + Math.sin(angle) * unit.radius * 1.2,
      vx: Math.cos(angle) * 120,
      vy: Math.sin(angle) * 120 - 180,
      life: 1.05,
      startLife: 1.05,
      color: colors[i],
      size: unit.radius * 1.2,
    });
  }
  for (let i = 0; i < 14; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const inner = unit.radius * (0.65 + Math.random() * 0.9);
    const outer = unit.radius * (2.8 + Math.random() * 2.8);
    const mid = unit.radius * (1.5 + Math.random() * 1.7);
    const x1 = unit.x + Math.cos(angle) * inner;
    const y1 = unit.y + Math.sin(angle) * inner;
    const x2 = unit.x + Math.cos(angle + (Math.random() - 0.5) * 0.45) * mid;
    const y2 = unit.y + Math.sin(angle + (Math.random() - 0.5) * 0.45) * mid;
    const x3 = unit.x + Math.cos(angle + (Math.random() - 0.5) * 0.75) * outer;
    const y3 = unit.y + Math.sin(angle + (Math.random() - 0.5) * 0.75) * outer;
    const color = Math.random() < 0.5 ? "#d7ecff" : colors[i % colors.length];
    state.particles.push({ x: x1, y: y1, x2, y2, life: 0.18 + Math.random() * 0.18, startLife: 0.36, color, line: true });
    state.particles.push({ x: x2, y: y2, x2: x3, y2: y3, life: 0.18 + Math.random() * 0.18, startLife: 0.36, color, line: true });
    state.particles.push({ x: x3, y: y3, life: 0.32, startLife: 0.32, color, size: 18 + Math.random() * 28 });
  }
}

function itemCastOrigin(team) {
  const units = state.units.filter((unit) => unit.team === team && !unit.dead);
  if (units.length) {
    const avgX = units.reduce((sum, unit) => sum + unit.x, 0) / units.length;
    const avgY = units.reduce((sum, unit) => sum + unit.y, 0) / units.length;
    return { x: avgX, y: avgY };
  }
  return team === "blue" ? { x: 60, y: canvas.height / 2 } : { x: canvas.width - 60, y: canvas.height / 2 };
}

function explodeItemFireball(projectile) {
  damageWallsAt(projectile.x, projectile.y, projectile.splash, 25);
  const owner = projectile.ownerId ? state.units.find((unit) => unit.id === projectile.ownerId) : null;
  for (const unit of state.units) {
    if (unit.dead || unit.team === projectile.team) continue;
    const distance = Math.hypot(unit.x - projectile.x, unit.y - projectile.y);
    if (distance > projectile.splash + unit.radius) continue;
    const falloff = Math.max(0.5, 1 - distance / projectile.splash);
    const poisonFireball = Boolean(projectile.poisonFireball);
    hurt(unit, projectile.damage * falloff, {
      x: projectile.x,
      y: projectile.y,
      knockback: 4.2,
      ignoreDodge: true,
      isRanged: true,
      applyBurn: !poisonFireball,
      fireDuration: projectile.fireDuration || 4,
      damageType: poisonFireball ? "poison" : projectile.damageType || "fireball",
      owner,
    });
    if (poisonFireball) poisonUnit(unit, projectile.poisonDuration || 8);
    else burnUnit(unit, projectile.fireDuration || 4);
  }
  for (let i = 0; i < 42; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 100 + Math.random() * 250;
    state.particles.push({
      x: projectile.x,
      y: projectile.y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 0.45 + Math.random() * 0.35,
      startLife: 0.8,
      color: projectile.poisonFireball ? (Math.random() < 0.5 ? "#70e071" : "#b8ff5a") : Math.random() < 0.5 ? "#ff7838" : "#ffd15a",
      size: 20 + Math.random() * 26,
    });
  }
  if (projectile.poisonFireball) spawnSlime(projectile.x, projectile.y, projectile.team, Math.max(56, projectile.splash * 0.45));
  addRingParticle(projectile.x, projectile.y, projectile.poisonFireball ? "#70e071" : "#ff7838", projectile.splash);
}

function cornCannonAtPoint(point) {
  let best = null;
  let bestDistance = Infinity;
  for (const unit of state.units) {
    if (unit.dead || unit.team !== "blue" || !unit.skills.cornCannon) continue;
    const distance = Math.hypot(unit.x - point.x, unit.y - point.y);
    if (distance <= unit.radius + 24 && distance < bestDistance) {
      best = unit;
      bestDistance = distance;
    }
  }
  return best;
}

function beginCornAim(unit) {
  if (!unit || unit.dead || !unit.skills.cornCannon) return false;
  if (unit.cooldown > 0) {
    setToast(state.language === "zh" ? `玉米加农炮冷却中：${unit.cooldown.toFixed(1)}秒` : `Corn Cannon cooldown: ${unit.cooldown.toFixed(1)}s`);
    return true;
  }
  state.cornAimId = unit.id;
  state.selectedItem = null;
  state.mapTool = null;
  state.controlBuildMode = false;
  setToast(state.language === "zh" ? "玉米加农炮瞄准中：再点一次发射核弹" : "Corn Cannon aiming: click again to fire the nuke");
  updateUi();
  return true;
}

function handleCornPointer(point) {
  if (state.phase !== "battle") return false;
  if (state.cornAimId) {
    const cannon = state.units.find((item) => item.id === state.cornAimId && !item.dead);
    if (cannon && fireCornNuke(cannon, point)) {
      state.cornAimId = null;
      updateUi();
      return true;
    }
    state.cornAimId = null;
    updateUi();
    return true;
  }
  const cannon = cornCannonAtPoint(point);
  return beginCornAim(cannon);
}
function fireCornNuke(unit, point) {
  if (!unit || unit.dead || unit.cooldown > 0) return false;
  const target = {
    x: Math.max(0, Math.min(canvas.width, point.x)),
    y: Math.max(0, Math.min(canvas.height, point.y)),
  };
  unit.cooldown = unit.skills.cornNukeCooldown || unit.cooldownTime || 9;
  const angle = Math.atan2(target.y - unit.y, target.x - unit.x);
  state.projectiles.push({
    x: unit.x + Math.cos(angle) * unit.radius * 0.7,
    y: unit.y + Math.sin(angle) * unit.radius * 0.7,
    targetX: target.x,
    targetY: target.y,
    team: unit.team,
    ownerId: unit.id,
    damage: unit.skills.cornNukeDamage || 1200,
    speed: 360,
    radius: 15,
    cornNuke: true,
    life: 7,
  });
  state.particles.push({ x: unit.x, y: unit.y, life: 0.55, startLife: 0.55, color: "#ffe05a", size: unit.radius * 3.4 });
  addRingParticle(unit.x, unit.y, "#ffe05a", unit.radius * 2.2);
  return true;
}

function explodeCornNuke(projectile) {
  const owner = projectile.ownerId ? state.units.find((unit) => unit.id === projectile.ownerId) : null;
  for (const unit of state.units) {
    if (unit.dead || unit.team === projectile.team) continue;
    const angle = Math.atan2(unit.y - projectile.y, unit.x - projectile.x);
    const adultDragonHit = unit.typeId === "adultdragon";
    hurt(unit, adultDragonHit ? 200 : projectile.damage, {
      x: projectile.x - Math.cos(angle) * 10,
      y: projectile.y - Math.sin(angle) * 10,
      knockback: 7.5,
      ignoreDodge: true,
      isRanged: true,
      applyBurn: !adultDragonHit,
      fireDuration: 6,
      damageType: adultDragonHit ? "nuclear" : "fireball",
      owner,
    });
    if (!adultDragonHit) burnUnit(unit, 6);
  }
  damageWallsAt(projectile.x, projectile.y, Math.max(canvas.width, canvas.height), projectile.damage * 0.25);
  for (let i = 0; i < 120; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 120 + Math.random() * 520;
    state.particles.push({
      x: projectile.x,
      y: projectile.y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 0.55 + Math.random() * 0.75,
      startLife: 1.25,
      color: Math.random() < 0.5 ? "#ff7a28" : Math.random() < 0.75 ? "#ffe05a" : "#ffffff",
      size: 18 + Math.random() * 44,
    });
  }
  addRingParticle(projectile.x, projectile.y, "#ff7a28", Math.max(canvas.width, canvas.height) * 0.72);
  setToast(state.language === "zh" ? "玉米核弹爆炸：全屏 1200 伤害" : "Corn nuke detonated: 1200 screen damage");
}
function healItemAt(point, team, item) {
  let affected = 0;
  for (const unit of state.units) {
    if (unit.dead || unit.team !== team) continue;
    const distance = Math.hypot(unit.x - point.x, unit.y - point.y);
    if (distance > ITEM_RADIUS + unit.radius) continue;
    unit.hp = Math.min(unit.maxHp, unit.hp + item.heal);
    affected += 1;
    state.particles.push({ x: unit.x, y: unit.y, life: 0.55, startLife: 0.55, color: item.color, size: unit.radius * 2.6 });
  }
  addRingParticle(point.x, point.y, item.color, ITEM_RADIUS);
  return affected;
}

function meteorItemAt(point, team, item) {
  for (let i = 0; i < 34; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * item.radius;
    state.particles.push({
      x: point.x + Math.cos(angle) * distance,
      y: point.y - 180 - Math.random() * 120,
      vx: Math.cos(angle) * 25,
      vy: 260 + Math.random() * 160,
      life: 0.55 + Math.random() * 0.35,
      startLife: 0.9,
      color: Math.random() < 0.5 ? "#ff5d2e" : "#ffd15a",
      size: 20 + Math.random() * 28,
    });
  }
  for (const unit of state.units) {
    if (unit.dead || unit.team === team) continue;
    const distance = Math.hypot(unit.x - point.x, unit.y - point.y);
    if (distance > item.radius + unit.radius) continue;
    const falloff = Math.max(0.45, 1 - distance / item.radius);
    hurt(unit, item.damage * falloff, { x: point.x, y: point.y, knockback: 5.2, ignoreDodge: true, applyBurn: true });
    burnUnit(unit, 5);
  }
  damageWallsAt(point.x, point.y, item.radius, item.damage * 0.75);
  addRingParticle(point.x, point.y, item.color, item.radius);
}

function wallItemAt(point, team) {
  const count = 5;
  const spacing = 34;
  for (let i = 0; i < count; i += 1) {
    const offset = (i - (count - 1) / 2) * spacing;
    const unit = addUnit("shield", team, clamp(point.x, 30, canvas.width - 30), clamp(point.y + offset, 30, canvas.height - 30));
    unit.maxHp *= 1.25;
    unit.hp = unit.maxHp;
    unit.speed *= 0.55;
    unit.damage *= 0.65;
    unit.name = "Wall Guard";
    state.particles.push({ x: unit.x, y: unit.y, life: 0.6, startLife: 0.6, color: "#9bdcff", size: 36 });
  }
  addRingParticle(point.x, point.y, "#9bdcff", 95);
}

function wallLightningCandidates(from, hitWalls, chainRange = Infinity) {
  return state.walls
    .filter((wall) => !hitWalls.includes(wall))
    .map((wall) => {
      const x = clamp(from.x, wall.x - wall.w / 2, wall.x + wall.w / 2);
      const y = clamp(from.y, wall.y - wall.h / 2, wall.y + wall.h / 2);
      return { kind: "wall", wall, x, y, distance: Math.hypot(x - from.x, y - from.y) };
    })
    .filter((target) => target.distance <= chainRange);
}

function lightningItemAt(point, team, item) {
  const hit = [];
  const hitWalls = [];
  let from = { x: point.x, y: point.y };
  let candidates = [
    ...state.units
      .filter((unit) => !unit.dead && unit.team !== team)
      .map((unit) => ({ kind: "unit", unit, x: unit.x, y: unit.y, distance: Math.hypot(unit.x - from.x, unit.y - from.y) })),
    ...wallLightningCandidates(from, hitWalls),
  ];
  let current = candidates.sort((a, b) => a.distance - b.distance)[0];
  for (let i = 0; i < item.chains && current; i += 1) {
    hit.push(current);
    const damage = item.damage * Math.max(0.45, 1 - i * 0.12);
    if (current.kind === "wall") {
      hitWalls.push(current.wall);
      damageWall(current.wall, damage, current.x, current.y);
    } else {
      hurt(current.unit, damage, { x: from.x, y: from.y, knockback: 1.7, ignoreDodge: true, isRanged: true });
    }
    state.particles.push({ x: current.x, y: current.y, life: 0.55, startLife: 0.55, color: item.color, size: 44 });
    state.particles.push({ x: from.x, y: from.y, x2: current.x, y2: current.y, life: 0.24, startLife: 0.24, color: item.color, line: true });
    from = { x: current.x, y: current.y };
    candidates = [
      ...state.units
        .filter((unit) => !unit.dead && unit.team !== team && !hit.some((target) => target.unit === unit))
        .map((unit) => ({ kind: "unit", unit, x: unit.x, y: unit.y, distance: Math.hypot(unit.x - from.x, unit.y - from.y) }))
        .filter((target) => target.distance <= 170),
      ...wallLightningCandidates(from, hitWalls, 170),
    ];
    current = candidates.sort((a, b) => a.distance - b.distance)[0];
  }
  addRingParticle(point.x, point.y, item.color, 80);
  return hit.length;
}

function castItemAt(itemId, point) {
  const text = translations[state.language] || translations.en;
  const item = itemTypes[itemId];
  if (!item) return;
  if (!isItemAllowedInCurrentMode(itemId)) {
    state.selectedItem = null;
    updateUi();
    setToast(text.itemLevelLocked);
    return;
  }
  if (state.phase !== "battle") {
    setToast(text.itemNeedBattle);
    return;
  }
  if (!canPayForItem(item)) {
    setToast(text.itemNoGold);
    return;
  }
  const team = itemTeam();
  if (itemId === "fireball") {
    const origin = itemCastOrigin(team);
    state.projectiles.push({
      x: origin.x,
      y: origin.y,
      targetX: point.x,
      targetY: point.y,
      team,
      damage: item.damage,
      speed: 620,
      splash: ITEM_RADIUS,
      radius: 13,
      itemFireball: true,
      fireball: true,
      life: 1.8,
    });
    for (let i = 0; i < 10; i += 1) {
      const angle = Math.random() * Math.PI * 2;
      state.particles.push({
        x: origin.x,
        y: origin.y,
        vx: Math.cos(angle) * 80,
        vy: Math.sin(angle) * 80,
        life: 0.35,
        startLife: 0.35,
        color: projectile.poisonFireball ? (Math.random() < 0.5 ? "#70e071" : "#b8ff5a") : Math.random() < 0.5 ? "#ff7838" : "#ffd15a",
        size: 14 + Math.random() * 16,
      });
    }
  } else if (itemId === "heal") {
    const affected = healItemAt(point, team, item);
    setToast(affected ? `${text.itemHit}: ${affected}` : state.language === "zh" ? "没有喷中友军" : "No friendly units hit");
  } else if (itemId === "meteor") {
    meteorItemAt(point, team, item);
    setToast(text.itemCast);
  } else if (itemId === "wall") {
    wallItemAt(point, team);
    setToast(text.itemCast);
  } else if (itemId === "lightning") {
    const affected = lightningItemAt(point, team, item);
    setToast(affected ? `${text.itemCast}: ${affected}` : state.language === "zh" ? "没有击中敌人" : "No enemies hit");
  } else {
    let affected = 0;
    for (const unit of state.units) {
      if (unit.dead || unit.team !== team) continue;
      const distance = Math.hypot(unit.x - point.x, unit.y - point.y);
      if (distance > ITEM_RADIUS + unit.radius) continue;
      unit[item.buff] = Math.max(unit[item.buff] || 0, ITEM_BUFF_SECONDS);
      affected += 1;
    }
    for (let i = 0; i < 18; i += 1) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * ITEM_RADIUS;
      state.particles.push({
        x: point.x + Math.cos(angle) * distance,
        y: point.y + Math.sin(angle) * distance,
        vx: Math.cos(angle) * 35,
        vy: Math.sin(angle) * 35,
        life: 0.55 + Math.random() * 0.35,
        startLife: 0.9,
        color: item.color,
        size: 12 + Math.random() * 14,
      });
    }
    addRingParticle(point.x, point.y, item.color, ITEM_RADIUS);
    if (!affected) {
      setToast(state.language === "zh" ? "没有喷中友军" : "No friendly units hit");
    } else {
      setToast(`${text.itemHit}: ${affected}`);
    }
  }
  spendForItem(item);
  updateUi();
  if (itemId === "fireball") setToast(text.itemCast);
}

function spawnFireBreathParticles(from, to, count = 14) {
  const angle = Math.atan2(to.y - from.y, to.x - from.x);
  const baseScale = from.typeId === "adultdragon" ? 2.15 : Math.max(1, from.radius / 22);
  const particleScale = Math.max(0.2, from.skills?.fireParticleSize || 1);
  const scale = baseScale * particleScale;
  const flameCount = Math.ceil(count * scale);
  const fireRange = Math.max(8, from.skills?.fireRange || 95);
  const distance = Math.min(fireRange * baseScale, Math.hypot(to.x - from.x, to.y - from.y));
  for (let i = 0; i < flameCount; i += 1) {
    const t = (i + Math.random() * 0.7) / flameCount;
    const spread = (Math.random() - 0.5) * (0.65 + scale * 0.12);
    const speed = 90 + Math.random() * 150 * scale;
    const size = (12 + Math.random() * 18) * scale;
    const life = 0.26 + Math.random() * 0.28 + (scale - 1) * 0.08;
    state.particles.push({
      x: from.x + Math.cos(angle) * distance * t + (Math.random() - 0.5) * 10 * scale,
      y: from.y + Math.sin(angle) * distance * t + (Math.random() - 0.5) * 10 * scale,
      vx: Math.cos(angle + spread) * speed,
      vy: Math.sin(angle + spread) * speed,
      life,
      startLife: life,
      color: Math.random() < 0.55 ? "#ff7a2f" : "#ffd15a",
      size,
    });
  }
}

function castFireball(unit, target) {
  spawnFireBreathParticles(unit, target, 10);
  state.projectiles.push({
    x: unit.x,
    y: unit.y,
    tx: target.id,
    team: unit.team,
    ownerId: unit.id,
    damage: damageFor(unit, unit.skills.fireballDamage || 52),
    speed: 360,
    splash: 92,
    radius: 11,
    isRanged: true,
    applyBurn: true,
    fireDuration: unit.skills.fireDuration || 5,
    damageType: "fireball",
    fireball: true,
    life: 2.2,
  });
  unit.fireballCooldown = 5.2;
}

function castFireballAtPoint(unit, point) {
  spawnFireBreathParticles(unit, point, 10);
  const angle = Math.atan2(point.y - unit.y, point.x - unit.x);
  const distance = Math.max(120, Math.hypot(point.x - unit.x, point.y - unit.y));
  const targetX = clamp(unit.x + Math.cos(angle) * distance, 0, canvas.width);
  const targetY = clamp(unit.y + Math.sin(angle) * distance, 0, canvas.height);
  state.projectiles.push({
    x: unit.x,
    y: unit.y,
    targetX,
    targetY,
    team: unit.team,
    ownerId: unit.id,
    damage: damageFor(unit, unit.skills.fireballDamage || 52),
    speed: 520,
    splash: 92,
    radius: 11,
    isRanged: true,
    applyBurn: true,
    fireDuration: unit.skills.fireDuration || 5,
    damageType: "fireball",
    itemFireball: true,
    fireball: true,
    life: 1.65,
  });
  unit.fireballCooldown = 5.2;
}

function castFireBreathAtPoint(unit, point, freeCast = false) {
  const angle = Math.atan2(point.y - unit.y, point.x - unit.x);
  const baseScale = unit.typeId === "adultdragon" ? 2.15 : Math.max(1, unit.radius / 22);
  const range = Math.max(35, (unit.skills.fireRange || 95) * baseScale);
  const width = 0.72;
  spawnFireBreathParticles(unit, {
    x: unit.x + Math.cos(angle) * range,
    y: unit.y + Math.sin(angle) * range,
  }, unit.typeId === "adultdragon" ? 34 : 20);
  for (const other of state.units) {
    if (other.team === unit.team || other.dead) continue;
    const dx = other.x - unit.x;
    const dy = other.y - unit.y;
    const distance = Math.hypot(dx, dy);
    if (distance > range + other.radius || distance < 1) continue;
    const delta = Math.abs(Math.atan2(Math.sin(Math.atan2(dy, dx) - angle), Math.cos(Math.atan2(dy, dx) - angle)));
    if (delta > width) continue;
    const falloff = Math.max(0.35, 1 - distance / range);
    hurt(other, damageFor(unit, (unit.damage * 0.65 + 12) * falloff), {
      x: unit.x,
      y: unit.y,
      owner: unit,
      isRanged: true,
      applyBurn: true,
      fireDuration: unit.skills.fireDuration || 5,
      damageType: "fire",
      noKnockback: true,
      knockback: 0,
    });
  }
  for (const wall of state.walls) {
    if (!canUnitDamageWall(unit, wall)) continue;
    const closestX = clamp(unit.x + Math.cos(angle) * range * 0.65, wall.x - wall.w / 2, wall.x + wall.w / 2);
    const closestY = clamp(unit.y + Math.sin(angle) * range * 0.65, wall.y - wall.h / 2, wall.y + wall.h / 2);
    const dx = closestX - unit.x;
    const dy = closestY - unit.y;
    const distance = Math.hypot(dx, dy);
    if (distance > range || distance < 1) continue;
    const delta = Math.abs(Math.atan2(Math.sin(Math.atan2(dy, dx) - angle), Math.cos(Math.atan2(dy, dx) - angle)));
    if (delta <= width) damageWall(wall, Math.max(8, unit.damage * 0.22), closestX, closestY);
  }
  if (!freeCast) unit.fireBreathCooldown = unit.typeId === "adultdragon" ? 2.6 : unit.typeId === "dragonling" ? 5.2 : 3.4;
}

function holyShieldReduction(target) {
  let bestReduction = 0;
  for (const unit of state.units) {
    if (unit.dead || unit.team !== target.team || !unit.skills.holyShield) continue;
    const radius = unit.skills.holyShieldRange ?? 160;
    if (Math.hypot(unit.x - target.x, unit.y - target.y) <= radius + target.radius) {
      bestReduction = Math.max(bestReduction, unit.skills.holyShieldReduction ?? 0.45);
    }
  }
  return bestReduction;
}

function spawnSlime(x, y, team, radius = 48) {
  state.slimes.push({ x, y, team, radius, life: 5 });
  state.particles.push({ x, y, life: 0.55, color: "#65d96f", size: radius });
}

function spawnChaosMud(x, y, team) {
  state.slimes.push({ x, y, team, radius: 78, life: 8, chaos: true });
  state.particles.push({ x, y, life: 0.8, startLife: 0.8, color: "#2b112f", size: 96 });
}

function tiamatEnemies(unit) {
  return state.units.filter((other) => other.team !== unit.team && !other.dead && other.airborneTimer <= 0);
}

function tiamatCataclysm(unit, enemies) {
  const elements = [
    { color: "#ff7838", burn: true, type: "fireball" },
    { color: "#9bdcff", freeze: true, type: "ice" },
    { color: "#73e66e", poison: true, type: "poison" },
    { color: "#d7ecff", stun: true, type: "lightning" },
  ];
  const strikes = Math.min(8, Math.max(4, enemies.length + 2));
  for (let i = 0; i < strikes; i += 1) {
    const target = enemies[Math.floor(Math.random() * enemies.length)];
    const element = elements[i % elements.length];
    const x = clamp(target.x + (Math.random() - 0.5) * 180, 24, canvas.width - 24);
    const y = clamp(target.y + (Math.random() - 0.5) * 140, 24, canvas.height - 24);
    state.projectiles.push({
      x: x + (Math.random() - 0.5) * 120,
      y: -40,
      targetX: x,
      targetY: y,
      team: unit.team,
      ownerId: unit.id,
      damage: 185,
      speed: 650,
      splash: 120,
      radius: 13,
      itemFireball: true,
      fireball: element.burn,
      applyBurn: element.burn,
      applyFreeze: element.freeze,
      damageType: element.type,
      color: element.color,
      life: 2.3,
    });
    if (element.poison) spawnSlime(x, y, unit.team);
    if (element.stun) state.particles.push({ x, y, life: 0.8, startLife: 0.8, color: "#d7ecff", size: 110 });
    state.particles.push({ x, y, life: 0.9, startLife: 0.9, color: element.color, size: 85 });
    damageWallsAt(x, y, 110, 42);
  }
}

function tiamatChaosTide(unit, enemies) {
  for (const other of enemies) {
    hurt(other, 24, { x: unit.x, y: unit.y, owner: unit, ignoreDodge: true, noKnockback: true, damageType: "magic" });
    if (Math.random() < 0.35) poisonUnit(other, 4);
    if (Math.random() < 0.18) freezeUnit(other, 1.2);
  }
  addRingParticle(unit.x, unit.y, "#8f4cff", 260);
  state.particles.push({ x: unit.x, y: unit.y, life: 0.75, startLife: 0.75, color: "#2b112f", size: 260 });
}

function empowerDragonMinion(unit, source) {
  unit.skills = {
    ...unit.skills,
    fiveElementBreath: true,
    fiveElementBreathDamage: unit.typeId === "adultdragon" ? 140 : 70,
    fiveElementBreathRange: unit.typeId === "adultdragon" ? 330 : 240,
  };
  unit.fiveElementBreathCooldown = 0.8 + Math.random() * 1.4;
  unit.summonedByTiamat = true;
  unit.vx += (unit.x - source.x) * 0.8;
  unit.vy += (unit.y - source.y) * 0.8;
}

function summonTiamatDragon(unit, typeId, index, total, radius) {
  const angle = (Math.PI * 2 * index) / total + Math.random() * 0.25;
  const distance = radius * (0.65 + Math.random() * 0.5);
  const ally = addUnit(
    typeId,
    unit.team,
    clamp(unit.x + Math.cos(angle) * distance, 40, canvas.width - 40),
    clamp(unit.y + Math.sin(angle) * distance, 40, canvas.height - 40),
  );
  empowerDragonMinion(ally, unit);
  return ally;
}

function tiamatElementBreath(unit, enemies) {
  const target = enemies.reduce((best, other) => (Math.hypot(other.x - unit.x, other.y - unit.y) < Math.hypot(best.x - unit.x, best.y - unit.y) ? other : best), enemies[0]);
  const baseAngle = Math.atan2(target.y - unit.y, target.x - unit.x);
  const element = [
    { id: "fire", color: "#ff5d2e" },
    { id: "ice", color: "#9bdcff" },
    { id: "poison", color: "#70e071" },
    { id: "lightning", color: "#d7ecff" },
    { id: "acid", color: "#b8ff5a" },
  ][Math.floor(Math.random() * 5)];
  const range = element.id === "fire" ? 620 : 540;
  const width = element.id === "fire" ? 1.18 : 0.98;
  for (let i = 0; i < 58; i += 1) {
    const spread = (Math.random() - 0.5) * width * 2;
    const distance = Math.random() * range;
    state.particles.push({
      x: unit.x + Math.cos(baseAngle + spread) * distance,
      y: unit.y + Math.sin(baseAngle + spread) * distance,
      vx: Math.cos(baseAngle + spread) * (80 + Math.random() * 120),
      vy: Math.sin(baseAngle + spread) * (80 + Math.random() * 120),
      life: 0.35 + Math.random() * 0.35,
      startLife: 0.7,
      color: element.color,
      size: 22 + Math.random() * 28,
    });
  }
  for (const other of enemies) {
    const dx = other.x - unit.x;
    const dy = other.y - unit.y;
    const distance = Math.hypot(dx, dy);
    if (distance > range + other.radius || distance < 1) continue;
    const delta = Math.abs(Math.atan2(Math.sin(Math.atan2(dy, dx) - baseAngle), Math.cos(Math.atan2(dy, dx) - baseAngle)));
    if (delta > width) continue;
    hurt(other, 1000, {
      x: unit.x,
      y: unit.y,
      owner: unit,
      isRanged: true,
      ignoreDodge: true,
      noKnockback: element.id === "fire",
      applyFreeze: element.id === "ice",
      damageType: element.id === "fire" ? "fire" : element.id === "ice" ? "ice" : element.id === "poison" || element.id === "acid" ? "poison" : "magic",
    });
    if (element.id === "fire") applyTiamatBurn(other, other.typeId === "adultdragon" ? 10 : 50, 60);
    if (element.id === "ice") applyTiamatFrost(other, 60);
    if (element.id === "poison" || element.id === "acid") poisonUnit(other, 60);
    if (element.id === "lightning") other.stasisTimer = Math.max(other.stasisTimer || 0, 2);
  }
  damageWallsAt(unit.x + Math.cos(baseAngle) * range * 0.55, unit.y + Math.sin(baseAngle) * range * 0.55, range * 0.32, 220);
  addRingParticle(unit.x, unit.y, element.color, 170);
}

function dragonFiveElementBreath(unit, target) {
  const baseAngle = Math.atan2(target.y - unit.y, target.x - unit.x);
  const element = [
    { id: "fire", color: "#ff5d2e" },
    { id: "ice", color: "#9bdcff" },
    { id: "poison", color: "#70e071" },
    { id: "lightning", color: "#d7ecff" },
    { id: "acid", color: "#b8ff5a" },
  ][Math.floor(Math.random() * 5)];
  const range = unit.skills.fiveElementBreathRange || 180;
  const width = 0.68;
  const damage = unit.skills.fiveElementBreathDamage || 70;
  for (let i = 0; i < 16; i += 1) {
    const spread = (Math.random() - 0.5) * width * 2;
    const distance = Math.random() * range;
    state.particles.push({
      x: unit.x + Math.cos(baseAngle + spread) * distance,
      y: unit.y + Math.sin(baseAngle + spread) * distance,
      vx: Math.cos(baseAngle + spread) * (45 + Math.random() * 80),
      vy: Math.sin(baseAngle + spread) * (45 + Math.random() * 80),
      life: 0.25 + Math.random() * 0.25,
      startLife: 0.5,
      color: element.color,
      size: 12 + Math.random() * 18,
    });
  }
  for (const other of state.units) {
    if (other.team === unit.team || other.dead || other.airborneTimer > 0) continue;
    const dx = other.x - unit.x;
    const dy = other.y - unit.y;
    const distance = Math.hypot(dx, dy);
    if (distance > range + other.radius || distance < 1) continue;
    const delta = Math.abs(Math.atan2(Math.sin(Math.atan2(dy, dx) - baseAngle), Math.cos(Math.atan2(dy, dx) - baseAngle)));
    if (delta > width) continue;
    hurt(other, damage, {
      x: unit.x,
      y: unit.y,
      owner: unit,
      isRanged: true,
      ignoreDodge: true,
      noKnockback: element.id === "fire",
      applyFreeze: element.id === "ice",
      damageType: element.id === "fire" ? "fire" : element.id === "ice" ? "ice" : element.id === "poison" || element.id === "acid" ? "poison" : "magic",
    });
    if (element.id === "fire") burnUnit(other, 8);
    if (element.id === "ice") freezeUnit(other, 4);
    if (element.id === "poison" || element.id === "acid") poisonUnit(other, 8);
    if (element.id === "lightning") other.stasisTimer = Math.max(other.stasisTimer || 0, 0.8);
  }
  damageWallsAt(unit.x + Math.cos(baseAngle) * range * 0.55, unit.y + Math.sin(baseAngle) * range * 0.55, range * 0.22, damage * 0.35);
}

function startTiamatDash(unit, enemies) {
  const target = enemies[Math.floor(Math.random() * enemies.length)];
  unit.tiamatDashAngle = Math.atan2(target.y - unit.y, target.x - unit.x);
  unit.tiamatDashTimer = 2.8;
  unit.tiamatDashHitIds = [];
  state.particles.push({ x: unit.x, y: unit.y, life: 0.8, startLife: 0.8, color: "#ffcf5f", size: 180 });
}

function updateTiamatDash(unit, dt) {
  if (unit.tiamatDashTimer <= 0) return false;
  unit.tiamatDashTimer = Math.max(0, unit.tiamatDashTimer - dt);
  const angle = unit.tiamatDashAngle || 0;
  const speed = 760;
  unit.x += Math.cos(angle) * speed * dt;
  unit.y += Math.sin(angle) * speed * dt;
  unit.vx = Math.cos(angle) * 180;
  unit.vy = Math.sin(angle) * 180;
  const hitIds = unit.tiamatDashHitIds || [];
  for (const other of state.units) {
    if (other.team === unit.team || other.dead || hitIds.includes(other.id)) continue;
    if (Math.hypot(other.x - unit.x, other.y - unit.y) <= unit.radius + other.radius + 42) {
      hitIds.push(other.id);
      hurt(other, 800, { x: unit.x, y: unit.y, owner: unit, ignoreDodge: true, knockback: 3.5 });
    }
  }
  unit.tiamatDashHitIds = hitIds;
  damageWallsAt(unit.x, unit.y, unit.radius + 44, 120);
  if (Math.random() < dt * 26) state.particles.push({ x: unit.x, y: unit.y, life: 0.28, startLife: 0.28, color: "#c48cff", size: 54 });
  const hitEdge = unit.x <= unit.radius || unit.x >= canvas.width - unit.radius || unit.y <= unit.radius || unit.y >= canvas.height - unit.radius;
  unit.x = clamp(unit.x, unit.radius, canvas.width - unit.radius);
  unit.y = clamp(unit.y, unit.radius, canvas.height - unit.radius);
  if (hitEdge) unit.tiamatDashTimer = 0;
  return true;
}

function updateTiamatMoveCrush(unit, dt) {
  if (!unit.skills?.tiamatBoss || unit.dead || unit.tiamatDashTimer > 0) return;
  unit.tiamatCrushCooldowns = unit.tiamatCrushCooldowns || {};
  for (const id of Object.keys(unit.tiamatCrushCooldowns)) {
    unit.tiamatCrushCooldowns[id] -= dt;
    if (unit.tiamatCrushCooldowns[id] <= 0) delete unit.tiamatCrushCooldowns[id];
  }
  const movingFast = Math.hypot(unit.vx || 0, unit.vy || 0) > 90 || unit.tiamatRageSpeedTimer > 0;
  if (!movingFast) return;
  for (const other of state.units) {
    if (other.team === unit.team || other.dead || other.airborneTimer > 0) continue;
    if (unit.tiamatCrushCooldowns[other.id] > 0) continue;
    if (Math.hypot(other.x - unit.x, other.y - unit.y) > unit.radius + other.radius + 22) continue;
    unit.tiamatCrushCooldowns[other.id] = 0.6;
    const damage = 120 + Math.random() * 100;
    hurt(other, damage, {
      x: unit.x,
      y: unit.y,
      owner: unit,
      ignoreDodge: true,
      knockback: 4.8,
      forceKnockback: true,
    });
    state.particles.push({ x: other.x, y: other.y, life: 0.35, startLife: 0.35, color: "#c48cff", size: other.radius * 2.8 });
  }
}

function updateTiamatBoss(unit, dt) {
  if (updateTiamatDash(unit, dt)) return true;
  unit.tiamatMudTimer = Math.max(0, (unit.tiamatMudTimer || 0) - dt);
  unit.tiamatBreathTimer = Math.max(0, (unit.tiamatBreathTimer || 0.8) - dt);
  unit.tiamatGazeTimer = Math.max(0, (unit.tiamatGazeTimer || 2.8) - dt);
  unit.tiamatSummonTimer = Math.max(0, (unit.tiamatSummonTimer || 7) - dt);
  unit.tiamatElementBreathTimer = Math.max(0, (unit.tiamatElementBreathTimer || 1.7) - dt);
  unit.tiamatDashCooldown = Math.max(0, (unit.tiamatDashCooldown || 3) - dt);
  unit.tiamatCataclysmTimer = Math.max(0, (unit.tiamatCataclysmTimer || 8) - dt);
  unit.tiamatTideTimer = Math.max(0, (unit.tiamatTideTimer || 12) - dt);
  unit.tiamatBarrierCooldown = Math.max(0, (unit.tiamatBarrierCooldown || 16) - dt);
  unit.tiamatBarrierTimer = Math.max(0, (unit.tiamatBarrierTimer || 0) - dt);
  unit.tiamatTideActive = Math.max(0, (unit.tiamatTideActive || 0) - dt);
  unit.tiamatTideTick = Math.max(0, (unit.tiamatTideTick || 0) - dt);
  if (unit.tiamatMudTimer <= 0) {
    spawnChaosMud(unit.x + (Math.random() - 0.5) * 160, unit.y + (Math.random() - 0.5) * 120, unit.team);
    unit.tiamatMudTimer = 1.4;
  }
  const enemies = tiamatEnemies(unit);
  if (!enemies.length) return;
  if (unit.tiamatBarrierCooldown <= 0) {
    unit.tiamatBarrierTimer = unit.hp < unit.maxHp * 0.45 ? 6.5 : 4.8;
    unit.tiamatBarrierCooldown = unit.hp < unit.maxHp * 0.45 ? 12 : 17;
    addRingParticle(unit.x, unit.y, "#fff0a8", 190);
    state.particles.push({ x: unit.x, y: unit.y, life: 1, startLife: 1, color: "#c48cff", size: 210 });
  }
  if (unit.tiamatCataclysmTimer <= 0) {
    tiamatCataclysm(unit, enemies);
    unit.tiamatCataclysmTimer = unit.hp < unit.maxHp * 0.45 ? 6.5 : 10;
  }
  if (unit.tiamatTideTimer <= 0) {
    unit.tiamatTideActive = unit.hp < unit.maxHp * 0.45 ? 5.5 : 4;
    unit.tiamatTideTick = 0;
    unit.tiamatTideTimer = unit.hp < unit.maxHp * 0.45 ? 14 : 18;
    spawnChaosMud(unit.x, unit.y, unit.team);
  }
  if (unit.tiamatTideActive > 0 && unit.tiamatTideTick <= 0) {
    tiamatChaosTide(unit, enemies);
    unit.tiamatTideTick = 0.8;
  }
  if (unit.tiamatElementBreathTimer <= 0) {
    tiamatElementBreath(unit, enemies);
    unit.tiamatElementBreathTimer = unit.hp < unit.maxHp * 0.45 ? 2.1 : 3.2;
  }
  if (unit.tiamatDashCooldown <= 0) {
    startTiamatDash(unit, enemies);
    unit.tiamatDashCooldown = unit.hp < unit.maxHp * 0.45 ? 3.8 : 5.2;
    return true;
  }
  if (unit.tiamatBreathTimer <= 0) {
    const target = enemies.reduce((best, other) => (Math.hypot(other.x - unit.x, other.y - unit.y) < Math.hypot(best.x - unit.x, best.y - unit.y) ? other : best), enemies[0]);
    const elements = [
      { color: "#9bdcff", freeze: true, type: "ice" },
      { color: "#65d96f", poison: true, type: "poison" },
      { color: "#d7ecff", stun: true, type: "lightning" },
      { color: "#7cff9c", poison: true, type: "poison" },
      { color: "#ff7838", burn: true, type: "fire" },
    ];
    elements.forEach((element, index) => {
      const x = target.x + (Math.random() - 0.5) * 90;
      const y = target.y + (Math.random() - 0.5) * 70;
      state.particles.push({ x, y, life: 0.65 + index * 0.05, startLife: 0.8, color: element.color, size: 95 + index * 12 });
      for (const other of enemies) {
        const distance = Math.hypot(other.x - x, other.y - y);
        if (distance > 95 + other.radius) continue;
        hurt(other, 34, { x, y, owner: unit, isRanged: true, ignoreDodge: true, applyBurn: element.burn, applyFreeze: element.freeze, damageType: element.type, noKnockback: element.burn });
        if (element.poison) poisonUnit(other, 5);
        if (element.stun) other.stasisTimer = Math.max(other.stasisTimer || 0, 0.65);
      }
    });
    damageWallsAt(target.x, target.y, 120, 38);
    unit.tiamatBreathTimer = unit.hp < unit.maxHp * 0.45 ? 1.6 : 2.8;
  }
  if (unit.tiamatGazeTimer <= 0) {
    const byHp = [...enemies].sort((a, b) => a.hp - b.hp)[0];
    const byDamage = [...enemies].sort((a, b) => (b.statsDamage || 0) - (a.statsDamage || 0))[0];
    const randomTarget = enemies[Math.floor(Math.random() * enemies.length)];
    const meteorTargets = Array.from(new Set([byHp, byDamage, randomTarget])).filter(Boolean);
    for (let i = 0; i < 15; i += 1) {
      const target = meteorTargets[i % meteorTargets.length] || enemies[Math.floor(Math.random() * enemies.length)];
      const spread = 35 + Math.random() * 150;
      const angle = Math.random() * Math.PI * 2;
      const targetX = clamp(target.x + Math.cos(angle) * spread, 30, canvas.width - 30);
      const targetY = clamp(target.y + Math.sin(angle) * spread, 30, canvas.height - 30);
      state.projectiles.push({
        x: targetX + (Math.random() - 0.5) * 180,
        y: -30,
        targetX,
        targetY,
        team: unit.team,
        ownerId: unit.id,
        damage: 260,
        speed: 560,
        splash: 92,
        radius: 12,
        itemFireball: true,
        fireball: true,
        applyBurn: Math.random() < 0.5,
        applyFreeze: Math.random() < 0.35,
        damageType: "fireball",
        life: 2.2,
      });
      state.particles.push({ x: targetX, y: targetY, life: 0.9, startLife: 0.9, color: "#ff3b4f", size: 90 });
    }
    unit.tiamatGazeTimer = unit.hp < unit.maxHp * 0.45 ? 4.2 : 5.4;
  }
  if (unit.tiamatSummonTimer <= 0) {
    for (let i = 0; i < 5; i += 1) summonTiamatDragon(unit, "adultdragon", i, 5, 130);
    for (let i = 0; i < 25; i += 1) summonTiamatDragon(unit, "dragonling", i, 25, 205);
    state.particles.push({ x: unit.x, y: unit.y, life: 1.1, startLife: 1.1, color: "#c48cff", size: 260 });
    addRingParticle(unit.x, unit.y, "#c48cff", 230);
    unit.tiamatSummonTimer = unit.hp < unit.maxHp * 0.45 ? 7 : 11;
  }
}

function archmageEnemies(unit) {
  return state.units.filter((other) => other.team !== unit.team && !other.dead && other.airborneTimer <= 0);
}

function archmageAllies(unit) {
  return state.units.filter((other) => other.team === unit.team && !other.dead);
}

function nearestUnitFromList(unit, list) {
  return list.sort((a, b) => Math.hypot(a.x - unit.x, a.y - unit.y) - Math.hypot(b.x - unit.x, b.y - unit.y))[0] || null;
}

function canArchmageCharm(unit) {
  return !unit.dead && CHARMABLE_HUMAN_TYPE_IDS.has(unit.typeId) && !unit.skills?.tiamatBoss && !unit.skills?.zombieBoss && !unit.typeId.startsWith("custom-");
}

function charmHumanUnit(target, source) {
  if (!target || target.dead || target.team === source.team || !canArchmageCharm(target)) return false;
  target.team = source.team;
  target.color = source.team === "blue" ? (typeById(target.typeId)?.color || target.color) : "#ff706c";
  target.stasisTimer = Math.max(target.stasisTimer || 0, 0.45);
  target.vx = 0;
  target.vy = 0;
  for (let i = 0; i < 22; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    state.particles.push({
      x: target.x,
      y: target.y,
      vx: Math.cos(angle) * (40 + Math.random() * 100),
      vy: Math.sin(angle) * (40 + Math.random() * 100),
      life: 0.45 + Math.random() * 0.35,
      startLife: 0.8,
      color: "#d9b8ff",
      size: 10 + Math.random() * 14,
    });
  }
  addRingParticle(target.x, target.y, "#ae65ff", target.radius * 4.2);
  return true;
}

function castArchmageCharm(unit, enemies) {
  const radius = unit.skills.charmRange || 255;
  const candidates = enemies
    .filter(canArchmageCharm)
    .filter((other) => Math.hypot(other.x - unit.x, other.y - unit.y) <= radius + other.radius)
    .sort((a, b) => a.maxHp - b.maxHp || Math.hypot(a.x - unit.x, a.y - unit.y) - Math.hypot(b.x - unit.x, b.y - unit.y));
  const max = unit.hp < unit.maxHp * 0.4 ? 3 : 2;
  let changed = 0;
  for (const target of candidates.slice(0, max)) {
    if (charmHumanUnit(target, unit)) changed += 1;
  }
  if (changed > 0) {
    addRingParticle(unit.x, unit.y, "#d9b8ff", radius);
    state.particles.push({ x: unit.x, y: unit.y, life: 0.9, startLife: 0.9, color: "#4d146c", size: radius * 0.75 });
  }
  unit.archmageCharmTimer = unit.hp < unit.maxHp * 0.4 ? 7.5 : 10.5;
}

function castPoisonFireball(unit, target) {
  if (!target) return;
  const angle = Math.atan2(target.y - unit.y, target.x - unit.x);
  state.projectiles.push({
    x: unit.x + Math.cos(angle) * unit.radius * 0.65,
    y: unit.y + Math.sin(angle) * unit.radius * 0.65,
    tx: target.id,
    targetX: target.x,
    targetY: target.y,
    team: unit.team,
    ownerId: unit.id,
    damage: damageFor(unit, unit.skills.poisonFireballDamage || 105),
    speed: 450,
    splash: unit.skills.poisonFireballSplash || 118,
    radius: 13,
    itemFireball: true,
    poisonFireball: true,
    damageType: "poison",
    poisonDuration: unit.skills.poisonFireballDuration || 9,
    color: "#70e071",
    life: 2.1,
  });
  for (let i = 0; i < 14; i += 1) {
    const a = Math.random() * Math.PI * 2;
    state.particles.push({ x: unit.x, y: unit.y, vx: Math.cos(a) * 95, vy: Math.sin(a) * 95, life: 0.36, startLife: 0.36, color: "#70e071", size: 14 + Math.random() * 18 });
  }
  unit.archmagePoisonFireballTimer = unit.hp < unit.maxHp * 0.4 ? 3.8 : 5.2;
}

function spawnElementTornado(unit, target, elementId = "arcane") {
  if (!target) return;
  const colors = { fire: "#ff7838", ice: "#9bdcff", poison: "#70e071", lightning: "#d7ecff", arcane: "#b05cff" };
  const baseRadius = unit.skills.tornadoRange || 105;
  state.tornadoes.push({
    x: unit.x + (target.x - unit.x) * 0.32,
    y: unit.y + (target.y - unit.y) * 0.32,
    team: unit.team,
    vx: (target.x - unit.x) * 0.34,
    vy: (target.y - unit.y) * 0.34,
    radius: elementId === "lightning" ? baseRadius * 0.95 : baseRadius,
    damage: unit.skills.tornadoDamage || 12,
    spin: Math.random() < 0.5 ? -1 : 1,
    life: unit.skills.tornadoDuration || 4.8,
    poison: elementId === "poison",
    element: elementId,
    color: colors[elementId] || colors.arcane,
  });
  unit.archmageTornadoTimer = unit.hp < unit.maxHp * 0.4 ? 2.8 : 4.1;
}

function archmagePotionAt(point, team, itemId) {
  const item = itemTypes[itemId];
  if (!item) return 0;
  let affected = 0;
  for (const unit of state.units) {
    if (unit.dead || unit.team !== team) continue;
    const distance = Math.hypot(unit.x - point.x, unit.y - point.y);
    if (distance > ITEM_RADIUS + unit.radius) continue;
    unit[item.buff] = Math.max(unit[item.buff] || 0, ITEM_BUFF_SECONDS * 0.55);
    affected += 1;
  }
  addRingParticle(point.x, point.y, item.color, ITEM_RADIUS);
  return affected;
}

function archmageUseItem(unit, enemies) {
  const allies = archmageAllies(unit);
  const wounded = allies.filter((ally) => ally.hp < ally.maxHp * 0.62).sort((a, b) => a.hp / a.maxHp - b.hp / b.maxHp)[0];
  const target = nearestUnitFromList(unit, enemies);
  const roll = Math.random();
  if (wounded && roll < 0.22) {
    healItemAt(wounded, unit.team, itemTypes.heal);
  } else if (roll < 0.42) {
    const point = nearestUnitFromList(unit, allies) || unit;
    archmagePotionAt(point, unit.team, roll < 0.30 ? "power" : "speed");
  } else if (roll < 0.62 && target) {
    lightningItemAt(target, unit.team, itemTypes.lightning);
  } else if (roll < 0.80 && target) {
    meteorItemAt(target, unit.team, itemTypes.meteor);
  } else if (target) {
    const origin = { x: unit.x, y: unit.y };
    state.projectiles.push({
      x: origin.x,
      y: origin.y,
      targetX: target.x,
      targetY: target.y,
      team: unit.team,
      ownerId: unit.id,
      damage: 95,
      speed: 620,
      splash: ITEM_RADIUS,
      radius: 13,
      itemFireball: true,
      fireball: true,
      life: 1.8,
    });
  }
  unit.archmageItemTimer = unit.hp < unit.maxHp * 0.4 ? 4.2 : 6.2;
}

function updateArchmageBoss(unit, dt) {
  unit.archmagePoisonFireballTimer = Math.max(0, (unit.archmagePoisonFireballTimer || 1.4) - dt);
  unit.archmageTornadoTimer = Math.max(0, (unit.archmageTornadoTimer || 1.9) - dt);
  unit.archmageCharmTimer = Math.max(0, (unit.archmageCharmTimer || 3.5) - dt);
  unit.archmageItemTimer = Math.max(0, (unit.archmageItemTimer || 4.4) - dt);
  const enemies = archmageEnemies(unit);
  if (!enemies.length) return;
  const target = nearestUnitFromList(unit, enemies);
  if (unit.archmageCharmTimer <= 0) castArchmageCharm(unit, enemies);
  if (unit.archmagePoisonFireballTimer <= 0) castPoisonFireball(unit, target);
  if (unit.archmageTornadoTimer <= 0) {
    const elements = ["fire", "ice", "poison", "lightning", "arcane"];
    spawnElementTornado(unit, target, elements[Math.floor(Math.random() * elements.length)]);
  }
  if (unit.archmageItemTimer <= 0) archmageUseItem(unit, enemies);
  if (unit.fireBreathCooldown <= 0 && target && Math.hypot(target.x - unit.x, target.y - unit.y) <= 260) {
    castFireBreathAtPoint(unit, target, true);
    unit.fireBreathCooldown = unit.hp < unit.maxHp * 0.4 ? 3.2 : 4.8;
  }
}
function spawnTornado(unit, target) {
  const baseRadius = unit.skills.tornadoRange || 82;
  const poison = Boolean(unit.skills.poisonSlime);
  state.tornadoes.push({
    x: unit.x + (target.x - unit.x) * 0.35,
    y: unit.y + (target.y - unit.y) * 0.35,
    team: unit.team,
    vx: (target.x - unit.x) * 0.32,
    vy: (target.y - unit.y) * 0.32,
    radius: poison ? baseRadius * 0.82 : baseRadius,
    damage: unit.skills.tornadoDamage || 6,
    spin: Math.random() < 0.5 ? -1 : 1,
    life: (unit.skills.tornadoDuration || 4.2) * (poison ? 0.82 : 1),
    poison,
  });
}

function triggerStasisGaze(unit) {
  const radius = unit.skills.stasisRange || 200;
  let affected = 0;
  for (const other of state.units) {
    if (other.team === unit.team || other.dead) continue;
    const distance = Math.hypot(other.x - unit.x, other.y - unit.y);
    if (distance > radius + other.radius) continue;
    other.stasisTimer = Math.max(other.stasisTimer || 0, unit.skills.stasisDuration || 5);
    other.stasisSourceId = unit.id;
    other.vx = 0;
    other.vy = 0;
    affected += 1;
  }
  if (affected > 0) {
    state.particles.push({ x: unit.x, y: unit.y, life: 0.9, color: "#80c8ff", size: radius });
  }
  unit.stasisCooldown = unit.skills.stasisCooldown || 20;
}

function triggerStasisGazeAtPoint(unit, point) {
  const radius = unit.skills.stasisRange || 200;
  const angle = Math.atan2(point.y - unit.y, point.x - unit.x);
  const width = 0.95;
  let affected = 0;
  for (const other of state.units) {
    if (other.team === unit.team || other.dead) continue;
    const dx = other.x - unit.x;
    const dy = other.y - unit.y;
    const distance = Math.hypot(dx, dy);
    if (distance > radius + other.radius || distance < 1) continue;
    const delta = Math.abs(Math.atan2(Math.sin(Math.atan2(dy, dx) - angle), Math.cos(Math.atan2(dy, dx) - angle)));
    if (delta > width) continue;
    other.stasisTimer = Math.max(other.stasisTimer || 0, unit.skills.stasisDuration || 5);
    other.stasisSourceId = unit.id;
    other.vx = 0;
    other.vy = 0;
    affected += 1;
  }
  const endX = unit.x + Math.cos(angle) * radius;
  const endY = unit.y + Math.sin(angle) * radius;
  for (let i = 0; i < 18; i += 1) {
    const t = i / 17;
    state.particles.push({
      x: unit.x + (endX - unit.x) * t + (Math.random() - 0.5) * 18,
      y: unit.y + (endY - unit.y) * t + (Math.random() - 0.5) * 18,
      life: 0.35,
      startLife: 0.35,
      color: "#80c8ff",
      size: 18 + Math.random() * 16,
    });
  }
  if (affected > 0) state.particles.push({ x: endX, y: endY, life: 0.65, color: "#80c8ff", size: radius * 0.45 });
  unit.stasisCooldown = unit.skills.stasisCooldown || 20;
}

function handleKillEffects(killer, target) {
  if (!killer || !killer.skills || killer.dead || killer.team === target.team) return;
  if (killer.skills.summonOnKill && Math.random() < (killer.skills.summonChance || 0)) {
    const angle = Math.random() * Math.PI * 2;
    const distance = killer.radius + 26;
    const summoned = addUnit(
      "clubber",
      killer.team,
      clamp(target.x + Math.cos(angle) * distance, 18, canvas.width - 18),
      clamp(target.y + Math.sin(angle) * distance, 18, canvas.height - 18),
    );
    const inherit = Math.max(0, killer.skills.summonInheritPercent ?? 0.5);
    summoned.name = "Inherited Clubber";
    summoned.maxHp = Math.max(20, target.maxHp * inherit);
    summoned.hp = summoned.maxHp;
    summoned.damage = Math.max(1, target.damage * inherit);
    summoned.range = Math.max(8, target.range * inherit);
    summoned.stopDistance = Math.max(0, target.stopDistance * inherit);
    summoned.speed = Math.max(8, target.speed * inherit);
    summoned.radius = Math.max(8, Math.min(48, target.radius * inherit));
    summoned.cooldownTime = Math.max(0.08, target.cooldownTime);
    summoned.projectileSpeed = 0;
    summoned.splash = 0;
    summoned.areaAttack = target.areaAttack
      ? { range: target.areaAttack.range * inherit, damage: target.areaAttack.damage * inherit }
      : null;
    summoned.skills = killer.skills.summonInheritSkills ? { ...target.skills } : {};
    summoned.secondAttack = killer.skills.summonInheritSecond && target.secondAttack ? { ...target.secondAttack } : null;
    state.particles.push({ x: target.x, y: target.y, life: 0.65, color: "#78bbff", size: 48 });
  }
  if (killer.skills.damageOnKill && killer.skills.damageGain > 0) {
    killer.damage += killer.skills.damageGain;
    state.particles.push({ x: killer.x, y: killer.y, life: 0.7, color: "#ffcf5f", size: killer.radius * 2.8 });
  }
}

function explodeUnit(unit) {
  const damage = unit.skills.explodeDamage || 120;
  const radius = unit.skills.explodeRange || Math.max(70, unit.radius * 4.2);
  for (const other of state.units) {
    if (other.team === unit.team || other.dead) continue;
    const distance = Math.hypot(other.x - unit.x, other.y - unit.y);
    if (distance > radius) continue;
    const falloff = 1 - distance / radius;
    hurt(other, damage * (0.35 + falloff * 0.85), {
      x: unit.x,
      y: unit.y,
      knockback: 4.5,
      ignoreDodge: true,
    });
  }
  state.particles.push({ x: unit.x, y: unit.y, life: 0.85, color: "#ffb14a", size: radius });
}

function spawnEnemyArmy() {
  state.units = state.units.filter((unit) => unit.team !== "red");
  const count = Number(enemySlider.value);
  const ids = [
    "clubber",
    "clubber",
    "shield",
    "spear",
    "archer",
    "berserker",
    "hammer",
    "musketeer",
    "knight",
    "assassin",
    "crossbow",
    "poisoner",
    "stormcaller",
    "bomber",
    "giant",
    "wolf",
    "slimebeast",
    "dragonling",
    "adultdragon",
    "firebeast",
    "paladin",
    "plaguewizard",
    "frostmage",
    "necromancer",
    "bannerlord",
    "flameknight",
    "frostgiant",
    "sharpshooter",
    "portalmage",
    "unit67",
    "hydra",
    "voidbinder",
    "wallcrusher",
    "phoenixguard",
    "stormlancer",
    "whirlhammer",
    "zombie",
    "peashooter",
  ];
  for (let i = 0; i < count; i += 1) {
    const typeId = ids[Math.floor(Math.random() * ids.length)];
    const x = canvas.width * (0.62 + Math.random() * 0.28);
    const y = 90 + Math.random() * (canvas.height - 180);
    addUnit(typeId, "red", x, y);
  }
  updateUi();
}

function levelName(level) {
  return state.language === "zh" ? level.zh : level.name;
}

function resetBattlefieldForLevel(level) {
  state.phase = "setup";
  state.sandbox = false;
  state.plantMode = false;
  state.pvzMode = false;
  state.pvzWave = 0;
  state.pvzNextWaveTimer = 0;
  state.challengeMode = true;
  state.levelMode = true;
  state.currentLevel = level.number;
  state.challengeBudget = levelStartingGold(level);
  state.budget = state.challengeBudget;
  state.placeTeam = "blue";
  state.units = [];
  state.projectiles = [];
  state.particles = [];
  state.slimes = [];
  state.tornadoes = [];
  state.walls = [];
  state.terrains = [];
  state.battleStats = null;
  state.commands = { blue: null, red: null };
  state.focusTargets = { blue: null, red: null };
  state.controlledId = null;
  state.controlKeys = {};
  state.controlSpecialIndex = 0;
  state.controlBuildMode = false;
  state.dragging = null;
  state.wallStart = null;
  state.pointer = null;
  state.mapTool = null;
  state.selectedItem = null;
  state.winnerShown = false;
  ensureSelectedUnitAllowed();
}

function addLevelWall(x, y, w, h, type = "normal", team = "red") {
  const config = buildingTypes[type];
  const wall = config
    ? { x, y, w: config.w, h: config.h, type, team, cooldown: Math.random() * (config.cooldown || 1) }
    : { x, y, w, h, type, team };
  wall.maxHp = wallMaxHp(wall);
  wall.hp = wall.maxHp;
  wall.challengeImported = true;
  state.walls.push(wall);
  return wall;
}

function spawnLevelMap(level) {
  if (!level.map) return;
  const w = canvas.width;
  const h = canvas.height;
  const v = (x, y, height, width = 34, type = "normal") => addLevelWall(w * x, h * y, width, h * height, type, "red");
  const hz = (x, y, width, height = 30, type = "normal") => addLevelWall(w * x, h * y, w * width, height, type, "red");
  if (level.map === "peaMaze") {
    hz(0.5, 0.07, 0.75, 34, "thick");
    hz(0.5, 0.17, 0.48, 30, "normal");
    hz(0.5, 0.26, 0.22, 28, "normal");
    hz(0.5, 0.70, 0.17, 34, "normal");
    hz(0.5, 0.82, 0.36, 34, "normal");
    hz(0.5, 0.94, 0.62, 36, "thick");
    v(0.08, 0.5, 0.78, 32, "thick");
    v(0.20, 0.52, 0.62, 32, "normal");
    v(0.33, 0.56, 0.46, 30, "normal");
    v(0.62, 0.56, 0.46, 30, "normal");
    v(0.75, 0.52, 0.62, 32, "normal");
    v(0.88, 0.5, 0.78, 32, "thick");
    v(0.96, 0.5, 0.88, 32, "thick");
    addLevelWall(w * 0.18, h * 0.28, 52, 52, "frostTower", "red");
    addLevelWall(w * 0.82, h * 0.28, 52, 52, "cannonTower", "red");
  } else if (level.map === "barricadeTrial") {
    hz(0.6, 0.32, 0.54, 30, "normal");
    hz(0.6, 0.62, 0.54, 30, "normal");
    v(0.45, 0.47, 0.34, 34, "thick");
    v(0.73, 0.47, 0.34, 34, "thick");
    addLevelWall(w * 0.58, h * 0.47, 52, 52, "cannonTower", "red");
  } else if (level.map === "towerGate") {
    v(0.52, 0.5, 0.72, 36, "thick");
    v(0.72, 0.5, 0.72, 36, "thick");
    hz(0.62, 0.22, 0.36, 30, "normal");
    hz(0.62, 0.78, 0.36, 30, "normal");
    addLevelWall(w * 0.61, h * 0.36, 42, 42, "arrowTower", "red");
    addLevelWall(w * 0.61, h * 0.64, 42, 42, "arrowTower", "red");
    addLevelWall(w * 0.78, h * 0.5, 52, 52, "cannonTower", "red");
  } else if (level.map === "frostRamparts") {
    hz(0.58, 0.25, 0.45, 32, "arrow");
    hz(0.58, 0.75, 0.45, 32, "arrow");
    v(0.42, 0.5, 0.5, 34, "normal");
    v(0.74, 0.5, 0.5, 34, "normal");
    addLevelWall(w * 0.58, h * 0.5, 48, 48, "frostTower", "red");
    addLevelWall(w * 0.67, h * 0.5, 48, 48, "frostTower", "red");
    addLevelWall(w * 0.82, h * 0.5, 48, 48, "frostTower", "red");
  } else if (level.map === "zombieFactory") {
    v(0.55, 0.5, 0.62, 38, "thick");
    v(0.82, 0.5, 0.62, 38, "thick");
    hz(0.68, 0.18, 0.42, 34, "thick");
    hz(0.68, 0.82, 0.42, 34, "thick");
    addLevelWall(w * 0.69, h * 0.38, 56, 46, "goldMine", "red");
    addLevelWall(w * 0.69, h * 0.62, 56, 46, "goldMine", "red");
  } else if (level.map === "fireCorridor") {
    hz(0.62, 0.36, 0.55, 30, "normal");
    hz(0.62, 0.64, 0.55, 30, "normal");
    addLevelWall(w * 0.52, h * 0.5, 52, 52, "cannonTower", "red");
    addLevelWall(w * 0.75, h * 0.5, 52, 52, "cannonTower", "red");
    addLevelWall(w * 0.63, h * 0.5, 52, 52, "cannonTower", "red");
  } else if (level.map === "hydraGarden") {
    hz(0.6, 0.24, 0.42, 28, "arrow");
    hz(0.6, 0.76, 0.42, 28, "arrow");
    v(0.48, 0.5, 0.56, 30, "normal");
    v(0.74, 0.5, 0.56, 30, "normal");
    addLevelWall(w * 0.61, h * 0.5, 48, 48, "healTower", "red");
  } else if (level.map === "dragonBarricade") {
    hz(0.62, 0.2, 0.56, 36, "thick");
    hz(0.62, 0.8, 0.56, 36, "thick");
    v(0.44, 0.5, 0.62, 34, "arrow");
    v(0.82, 0.5, 0.62, 34, "arrow");
  } else if (level.map === "voidPrison") {
    hz(0.62, 0.28, 0.48, 30, "normal");
    hz(0.62, 0.72, 0.48, 30, "normal");
    v(0.5, 0.5, 0.5, 30, "normal");
    v(0.74, 0.5, 0.5, 30, "normal");
    addLevelWall(w * 0.62, h * 0.5, 48, 48, "frostTower", "red");
  } else if (level.map === "bossWarmup") {
    hz(0.62, 0.18, 0.5, 34, "thick");
    hz(0.62, 0.82, 0.5, 34, "thick");
    v(0.46, 0.5, 0.6, 36, "thick");
    v(0.78, 0.5, 0.6, 36, "thick");
    addLevelWall(w * 0.62, h * 0.35, 52, 52, "cannonTower", "red");
    addLevelWall(w * 0.62, h * 0.65, 52, 52, "cannonTower", "red");
    addLevelWall(w * 0.72, h * 0.5, 48, 48, "frostTower", "red");
    addLevelWall(w * 0.52, h * 0.5, 48, 48, "healTower", "red");
  }
}

function spawnLevelEnemies(level) {
  const entries = level.enemies.flatMap(([typeId, count]) => Array.from({ length: count }, () => typeId));
  const applySpecialRules = (unit) => {
    if (!unit) return;
    if ([6, 9, 14, 23].includes(level.number) && ["zombie", "coneheadzombie", "bucketzombie", "footballzombie"].includes(unit.typeId)) {
      unit.reviveChance = level.number >= 23 ? 0.4 : 0.25;
    }
    if ([8, 11, 12, 17, 24, 25, 26, 28, 29, 30].includes(level.number)) {
      unit.levelFireResist = Math.max(unit.levelFireResist || 0, 0.5);
    }
  };
  if (level.map === "peaMaze") {
    entries.forEach((typeId, index) => {
      if (!typeById(typeId)) return;
      const col = index % 2;
      const row = Math.floor(index / 2);
      const x = canvas.width * (0.91 + col * 0.035);
      const y = canvas.height * 0.17 + row * 64;
      applySpecialRules(addUnit(typeId, "red", Math.min(canvas.width - 45, x), Math.min(canvas.height - 70, y)));
    });
    return;
  }
  const rows = Math.max(1, Math.ceil(entries.length / 4));
  entries.forEach((typeId, index) => {
    if (!typeById(typeId)) return;
    const col = index % 4;
    const row = Math.floor(index / 4);
    const x = canvas.width * 0.62 + col * 68 + (row % 2) * 18;
    const y = 90 + row * Math.max(48, Math.min(84, (canvas.height - 180) / rows));
    applySpecialRules(addUnit(typeId, "red", Math.min(canvas.width - 70, x), Math.min(canvas.height - 70, y)));
  });
}

function renderLevelSelect() {
  if (!levelSelect) return;
  const selected = Number(levelSelect.value) || state.currentLevel || 1;
  levelSelect.innerHTML = levelDefinitions
    .map((level) => {
      const locked = level.number > state.unlockedLevel;
      const name = state.language === "zh" ? level.zh : level.name;
      const label = locked ? `${level.number}. ${name} (${(translations[state.language] || translations.en).levelLocked})` : `${level.number}. ${name}`;
      return `<option value="${level.number}" ${level.number === selected ? "selected" : ""}>${label}</option>`;
    })
    .join("");
}

function updateLevelUi() {
  if (!levelSelect || !loadLevelBtn || !levelInfo) return;
  const text = translations[state.language] || translations.en;
  const levelNumber = Number(levelSelect.value) || state.currentLevel || 1;
  const level = levelDefinitions.find((entry) => entry.number === levelNumber) || levelDefinitions[0];
  const locked = level.number > state.unlockedLevel;
  const tip = levelTips[level.number]?.[state.language] || levelTips[level.number]?.en || text.levelHint;
  const cleared = state.clearedLevels.has(level.number) ? ` ${text.alreadyCleared}.` : "";
  const gold = levelStartingGold(level);
  loadLevelBtn.disabled = locked || state.phase === "battle";
  levelInfo.textContent = locked
    ? `${text.levelLocked}: ${text.levelHint}`
    : `${levelName(level)} - ${text.levelInfo} ${gold}. ${tip} ${text.upgradePoints}: ${state.upgradePoints}.${cleared}`;
}

function loadLevel(levelNumber) {
  const text = translations[state.language] || translations.en;
  const level = levelDefinitions.find((entry) => entry.number === levelNumber) || levelDefinitions[0];
  if (level.number > state.unlockedLevel) {
    setToast(`${text.levelLocked}: ${text.levelHint}`);
    updateLevelUi();
    return;
  }
  resetBattlefieldForLevel(level);
  spawnLevelMap(level);
  spawnLevelEnemies(level);
  syncBudgetToEnemySize();
  renderUnitList();
  renderLevelSelect();
  updateUi();
  setToast(`${text.levelLoaded}: ${levelName(level)} - ${text.budget} ${state.challengeBudget}`);
}

function resetGame(keepEnemies = false) {
  state.phase = "setup";
  state.budget = totalBudgetForEnemySize();
  state.units = keepEnemies ? state.units.filter((unit) => unit.team === "red") : [];
  state.projectiles = [];
  state.particles = [];
  state.slimes = [];
  state.tornadoes = [];
  state.walls = [];
  state.terrains = [];
  state.battleStats = null;
  state.commands = { blue: null, red: null };
  state.focusTargets = { blue: null, red: null };
  state.plantMode = false;
  state.pvzMode = false;
  state.pvzWave = 0;
  state.pvzNextWaveTimer = 0;
  state.challengeMode = false;
  state.challengeBudget = 0;
  state.levelMode = false;
  state.currentLevel = 0;
  ensureSelectedUnitAllowed();
  state.dragging = null;
  state.controlledId = null;
  state.controlKeys = {};
  state.controlSpecialIndex = 0;
  state.controlBuildMode = false;
  state.wallStart = null;
  state.pointer = null;
  state.mapTool = null;
  state.selectedItem = null;
  state.winnerShown = false;
  if (!keepEnemies) spawnEnemyArmy();
  setToast(state.sandbox ? "Sandbox: choose a team and place units anywhere" : "Click the blue half to place units");
  updateUi();
}

function randomFormation() {
  if (state.phase !== "setup") return;
  const order = [
    "shield",
    "shield",
    "clubber",
    "spear",
    "archer",
    "archer",
    "berserker",
    "hammer",
    "musketeer",
    "cannon",
    "knight",
    "assassin",
    "crossbow",
    "poisoner",
    "stormcaller",
    "bomber",
    "giant",
    "wolf",
    "wolf",
    "slimebeast",
    "dragonling",
    "adultdragon",
    "firebeast",
    "paladin",
    "plaguewizard",
    "frostmage",
    "necromancer",
    "bannerlord",
    "flameknight",
    "frostgiant",
    "sharpshooter",
    "portalmage",
    "unit67",
    "hydra",
    "voidbinder",
    "wallcrusher",
    "phoenixguard",
    "stormlancer",
    "whirlhammer",
    "zombie",
    "sunflower",
    "peashooter",
    "repeater",
    "gatlingshooter",
    "chomper",
  ];
  const team = state.sandbox ? state.placeTeam : "blue";
  let guard = 0;
  const maxUnits = state.sandbox ? 12 : 20;
  while ((state.sandbox || state.budget >= 80) && guard < maxUnits) {
    const possible = state.sandbox ? order : order.filter((id) => {
      const type = typeById(id);
      return type && type.price <= state.budget && isUnitAllowedInCurrentLevel(type);
    });
    if (!possible.length) break;
    const id = possible[Math.floor(Math.random() * possible.length)];
    const type = typeById(id);
    const minX = state.sandbox && team === "red" ? canvas.width * 0.54 : 75;
    const maxX = state.sandbox && team === "red" ? canvas.width - 75 : blueZone() - 75;
    addUnit(id, team, minX + Math.random() * Math.max(20, maxX - minX), 95 + Math.random() * (canvas.height - 190));
    spendFor(type);
    guard += 1;
  }
  setToast(`${team === "blue" ? "Blue" : "Red"} random formation created`);
}

function setPhase(phase) {
  state.phase = phase;
  updateUi();
}

function startBattle() {
  if (state.phase === "battle") return;
  if (!state.units.some((unit) => unit.team === "blue")) {
    setToast("Place some blue units first");
    return;
  }
  if (isPvzMode()) {
    state.commands = { blue: null, red: null };
    state.focusTargets = { blue: null, red: null };
    for (const unit of state.units) {
      unit.statsDamage = 0;
      unit.statsKills = 0;
    }
    state.battleStats = null;
    state.plantMode = true;
    state.winnerShown = false;
    setPhase("battle");
    if (!state.units.some((unit) => unit.team === "red" && !unit.dead)) spawnPvzWave();
    setToast(state.language === "zh" ? `植物无尽开始：第 ${state.pvzWave} 波` : `PvZ Endless started: Wave ${state.pvzWave}`);
    return;
  }
  if (!state.units.some((unit) => unit.team === "red") && !state.challengeMode) {
    spawnEnemyArmy();
  }
  if (!state.units.some((unit) => unit.team === "red")) {
    setToast("No challenge enemy loaded");
    return;
  }
  state.commands = { blue: null, red: null };
  state.focusTargets = { blue: null, red: null };
  for (const unit of state.units) {
    unit.statsDamage = 0;
    unit.statsKills = 0;
  }
  state.battleStats = null;
  state.plantMode =
    !state.challengeMode && (state.selected === "sunflower" || state.units.some((unit) => unit.team === "blue" && unit.typeId === "sunflower"));
  if (state.plantMode && !state.sandbox && !isPvzMode()) {
    state.budget = 0;
  }
  state.winnerShown = false;
  setPhase("battle");
  setToast(state.plantMode ? "Plant mode: gold starts at 0, sunflowers produce 50 gold every 5s" : "Battle started");
}
function pauseBattle() {
  if (state.phase === "battle") {
    setPhase("paused");
    setToast("Paused");
  } else if (state.phase === "paused") {
    setPhase("battle");
    setToast("Battle resumed");
  }
}

function findTarget(unit) {
  const focus = state.focusTargets[unit.team];
  if (focus) {
    const focused = state.units.find((other) => other.id === focus.id && !other.dead && other.airborneTimer <= 0 && other.team !== unit.team);
    if (focused) {
      const distance = Math.hypot(focused.x - unit.x, focused.y - unit.y);
      const wallInfo = wallTargetNear(unit, focused);
      if (wallInfo && unit.canAttackWalls !== false) return wallInfo;
      return { target: focused, distance };
    }
  }
  let best = null;
  let bestDistance = Infinity;
  for (const other of state.units) {
    if (other.team === unit.team || other.dead || other.airborneTimer > 0) continue;
    const distance = Math.hypot(other.x - unit.x, other.y - unit.y);
    if (distance < bestDistance) {
      best = other;
      bestDistance = distance;
    }
  }
  if (best) {
    const wallInfo = wallTargetNear(unit, best);
    if (wallInfo && unit.canAttackWalls !== false) return wallInfo;
    return { target: best, distance: bestDistance };
  }
  return unit.canAttackWalls === false ? null : wallTargetNear(unit);
}

function controlledUnit() {
  const unit = state.units.find((candidate) => candidate.id === state.controlledId && !candidate.dead);
  if (!unit) state.controlledId = null;
  return unit || null;
}

function nearestEnemyFor(unit, maxDistance = Infinity) {
  let best = null;
  let bestDistance = Infinity;
  for (const other of state.units) {
    if (other.team === unit.team || other.dead || other.airborneTimer > 0) continue;
    const distance = Math.hypot(other.x - unit.x, other.y - unit.y);
    if (distance < bestDistance && distance <= maxDistance) {
      best = other;
      bestDistance = distance;
    }
  }
  return best ? { target: best, distance: bestDistance } : null;
}

function controlAimPoint(unit, fallbackDistance = 360) {
  if (state.pointer && Math.hypot(state.pointer.x - unit.x, state.pointer.y - unit.y) > 8) {
    return state.pointer;
  }
  const info = nearestEnemyFor(unit, fallbackDistance);
  if (info) return { x: info.target.x, y: info.target.y };
  const facing = unit.lastControlAngle ?? 0;
  return {
    x: clamp(unit.x + Math.cos(facing) * fallbackDistance, 0, canvas.width),
    y: clamp(unit.y + Math.sin(facing) * fallbackDistance, 0, canvas.height),
  };
}

function controlAimAngle(unit, fallbackDistance = 360) {
  const point = controlAimPoint(unit, fallbackDistance);
  return Math.atan2(point.y - unit.y, point.x - unit.x);
}

function selectControlledUnit(unit) {
  state.controlledId = unit?.id || null;
  state.controlSpecialIndex = 0;
  state.controlBuildMode = false;
  const text = translations[state.language] || translations.en;
  if (unit) setToast(`${text.controlSelected}: ${unit.name}`);
  updateUi();
}

function controlledPrimaryAttack(unit) {
  if (!unit || unit.cooldown > 0) return;
  if (unit.skills.cornCannon) {
    beginCornAim(unit);
    return;
  }
  if (unit.projectileSpeed) {
    controlledRangedAttack(unit, {
      weapon: unit.weapon,
      damage: unit.damage,
      projectileSpeed: unit.projectileSpeed,
      splash: unit.splash,
      cooldown: unit.cooldownTime,
      burstCount: unit.skills.gatling && unit.gatlingBoosted ? 4 : unit.burstCount || 1,
      burstCooldown: unit.skills.gatling ? unit.cooldownTime : unit.burstCooldown || 0,
      fanSpread: unit.skills.gatling && unit.gatlingBoosted ? 0.55 : 0,
    });
    return;
  }
  const info = nearestEnemyFor(unit, Math.max(unit.range, 16) + unit.radius + 80);
  if (!info) return;
  const distance = Math.max(0, info.distance - unit.radius - info.target.radius);
  const attackDistance = unit.projectileSpeed ? unit.range * 0.88 : unit.range;
  if (distance <= attackDistance || unit.projectileSpeed) attack(unit, info.target);
}

function controlledSecondAttack(unit) {
  if (!unit || unit.cooldown > 0 || !unit.secondAttack) return;
  const second = unit.secondAttack;
  if (second.ranged && second.projectileSpeed) {
    controlledRangedAttack(unit, second);
    return;
  }
  const info = nearestEnemyFor(unit, second.range + unit.radius + 80);
  if (!info) return;
  const edgeDistance = Math.max(0, info.distance - unit.radius - info.target.radius);
  const engagementDistance = second.ranged ? info.distance : edgeDistance;
  if (engagementDistance <= second.range) attack(unit, info.target, second);
}

function controlledRangedAttack(unit, mode) {
  const burstCount = Math.max(1, Math.floor(mode.burstCount || 1));
  unit.cooldown = burstCount > 1 && mode.burstCooldown > 0 ? mode.burstCooldown : mode.cooldown || unit.cooldownTime;
  if (unit.tiamatFrostTimer > 0) unit.cooldown *= 1.5;
  const shotRange = Math.max(24, mode.range || unit.range || 280);
  const burnDuration = unit.typeId === "dragonling" ? 1.6 : unit.skills.fireDuration || 5;
  const baseAngle = controlAimAngle(unit, Math.max(shotRange, 280));
  unit.lastControlAngle = baseAngle;
  if (unit.skills.fireBreath) {
    castFireBreathAtPoint(unit, {
      x: unit.x + Math.cos(baseAngle) * Math.max(80, unit.skills.fireRange || 95),
      y: unit.y + Math.sin(baseAngle) * Math.max(80, unit.skills.fireRange || 95),
    }, true);
  }
  for (let i = 0; i < burstCount; i += 1) {
    const spread = mode.fanSpread ? (i - (burstCount - 1) / 2) * (mode.fanSpread / Math.max(1, burstCount - 1)) : burstCount > 1 ? (i - (burstCount - 1) / 2) * 0.055 : 0;
    const angle = baseAngle + spread;
    state.projectiles.push({
      x: unit.x + Math.cos(angle) * unit.radius * 0.45,
      y: unit.y + Math.sin(angle) * unit.radius * 0.45,
      vx: Math.cos(angle) * mode.projectileSpeed,
      vy: Math.sin(angle) * mode.projectileSpeed,
      team: unit.team,
      ownerId: unit.id,
      damage: damageFor(unit, mode.damage),
      speed: mode.projectileSpeed,
      splash: mode.splash || 0,
      radius: mode.weapon === "cannon" ? 7 : 4,
      isRanged: true,
      manualShot: true,
      areaAttack: unit.areaAttack,
      passWalls: unit.skills.rooted,
      continueOnTargetDeath: true,
      applyBurn: unit.skills.fireBreath,
      fireDuration: burnDuration,
      applyFreeze: unit.skills.freezeAttack,
      damageType: unit.skills.fireBreath ? "fire" : unit.skills.freezeAttack ? "ice" : null,
      life: Math.max(0.08, shotRange / Math.max(1, mode.projectileSpeed)),
    });
  }
}

function controlledSpecials(unit) {
  if (!unit) return [];
  const specials = [];
  if (unit.skills.stasisGaze) {
    specials.push({ name: "Stasis", cd: unit.stasisCooldown, ready: unit.stasisCooldown <= 0, cast: () => triggerStasisGazeAtPoint(unit, controlAimPoint(unit, unit.skills.stasisRange || 200)) });
  }
  if (unit.skills.fireBreath) {
    specials.push({
      name: "Fire Breath",
      cd: unit.fireBreathCooldown || 0,
      ready: (unit.fireBreathCooldown || 0) <= 0,
      cast: () => castFireBreathAtPoint(unit, controlAimPoint(unit, unit.skills.fireRange || 120)),
    });
  }
  if (unit.skills.fireball) {
    specials.push({ name: "Fireball", cd: unit.fireballCooldown, ready: unit.fireballCooldown <= 0, cast: () => castFireballAtPoint(unit, controlAimPoint(unit, 520)) });
  }
  if (unit.skills.tornado) {
    specials.push({
      name: "Tornado",
      cd: unit.tornadoCooldown,
      ready: unit.tornadoCooldown <= 0,
      cast: () => {
        spawnTornado(unit, controlAimPoint(unit, 420));
        unit.tornadoCooldown = unit.skills.poisonSlime ? 5.2 : 6.4;
      },
    });
  }
  if (unit.skills.whirlwindLeap) {
    specials.push({ name: "Sky Slam", cd: unit.whirlwindCooldown, ready: unit.whirlwindCooldown <= 0, cast: () => triggerWhirlwindLeapAtPoint(unit, controlAimPoint(unit, 240)) });
  }
  if (unit.skills.randomSpawn) {
    specials.push({
      name: "Spawn",
      cd: unit.randomSpawnCooldown,
      ready: unit.randomSpawnCooldown <= 0,
      cast: () => {
        spawnRandomUnit(unit);
        unit.randomSpawnCooldown = unit.skills.randomSpawnInterval || 5;
      },
    });
  }
  return specials;
}

function controlledSpecialAttack(unit) {
  const specials = controlledSpecials(unit).filter((special) => special.ready);
  const text = translations[state.language] || translations.en;
  if (!specials.length) {
    setToast(text.noSpecialReady);
    return;
  }
  const special = specials[state.controlSpecialIndex % specials.length];
  state.controlSpecialIndex += 1;
  special.cast();
  setToast(`${unit.name}: ${special.name}`);
}

function controlledBuildName() {
  const typeId = controlledBuildTypes[state.controlBuildIndex % controlledBuildTypes.length];
  const config = buildingTypes[typeId];
  return {
    id: typeId,
    name: state.language === "zh" ? config.zh : config.name,
    cost: config.cost,
  };
}

function cycleControlledBuild() {
  state.controlBuildIndex = (state.controlBuildIndex + 1) % controlledBuildTypes.length;
  const build = controlledBuildName();
  setToast(state.language === "zh" ? `选择建造：${build.name} ${build.cost}金币` : `Build selected: ${build.name} ${build.cost} gold`);
  updateUi();
}

function toggleControlledBuildMode() {
  state.controlBuildMode = !state.controlBuildMode;
  const build = controlledBuildName();
  setToast(
    state.controlBuildMode
      ? state.language === "zh"
        ? `建造模式开启：${build.name}，右键放置`
        : `Build mode on: ${build.name}, right click to place`
      : state.language === "zh"
        ? "建造模式关闭"
        : "Build mode off",
  );
  updateUi();
}

function buildControlledBuilding(unit, force = false) {
  if (!unit || unit.dead || state.phase !== "battle") return;
  if ((unit.buildCooldown || 0) > 0) {
    setToast(state.language === "zh" ? `建造冷却中 ${unit.buildCooldown.toFixed(1)}秒` : `Build cooldown ${unit.buildCooldown.toFixed(1)}s`);
    return;
  }
  if (!force && !state.controlBuildMode) {
    setToast(state.language === "zh" ? "先按字母O开启建造模式" : "Press letter O to enter build mode first");
    return;
  }
  const build = controlledBuildName();
  if (state.challengeMode && build.id === "goldMine") {
    setToast(state.language === "zh" ? "挑战模式不能建金矿" : "Gold mines are disabled in challenge mode");
    return;
  }
  const target = state.pointer || { x: unit.x + Math.cos(unit.lastControlAngle || 0) * 54, y: unit.y + Math.sin(unit.lastControlAngle || 0) * 54 };
  const angle = Math.atan2(target.y - unit.y, target.x - unit.x);
  const point = {
    x: unit.x + Math.cos(angle) * (unit.radius + 44),
    y: unit.y + Math.sin(angle) * (unit.radius + 44),
  };
  const placed = addBuilding(point, build.id, { allowBattle: true, team: unit.team });
  if (placed) unit.buildCooldown = 2;
}

function demolishControlledBuilding(unit) {
  if (!unit || unit.dead || state.phase !== "battle") return;
  let best = null;
  let bestDistance = Infinity;
  for (const wall of state.walls) {
    if (!buildingTypes[wall.type] || wall.team !== unit.team) continue;
    const distance = Math.hypot(wall.x - unit.x, wall.y - unit.y);
    if (distance < bestDistance && distance <= 80 + unit.radius) {
      best = wall;
      bestDistance = distance;
    }
  }
  if (!best) {
    setToast(state.language === "zh" ? "附近没有自己的建筑" : "No friendly building nearby");
    return;
  }
  state.walls = state.walls.filter((wall) => wall !== best);
  state.particles.push({ x: best.x, y: best.y, life: 0.55, startLife: 0.55, color: "#d8d0a8", size: Math.max(best.w, best.h) * 1.5 });
  setToast(state.language === "zh" ? "建筑已拆除" : "Building demolished");
}

function updateControlledUnit(unit, dt) {
  const up = state.controlKeys.w;
  const down = state.controlKeys.s;
  const left = state.controlKeys.a;
  const right = state.controlKeys.d;
  const dx = (right ? 1 : 0) - (left ? 1 : 0);
  const dy = (down ? 1 : 0) - (up ? 1 : 0);
  if (state.pointer && Math.hypot(state.pointer.x - unit.x, state.pointer.y - unit.y) > 8) {
    unit.lastControlAngle = Math.atan2(state.pointer.y - unit.y, state.pointer.x - unit.x);
  } else if (dx || dy) {
    unit.lastControlAngle = Math.atan2(dy, dx);
  }
  if (dx || dy) {
    const length = Math.hypot(dx, dy) || 1;
    const speedFactor = (unit.freezeTimer > 0 ? 0.45 : 1) * (unit.speedPotionTimer > 0 ? 1.55 : 1);
    unit.vx += (dx / length) * unit.speed * speedFactor * dt * 4.2;
    unit.vy += (dy / length) * unit.speed * speedFactor * dt * 4.2;
  }
  unit.vx *= 0.88;
  unit.vy *= 0.88;
  unit.x += unit.vx * dt;
  unit.y += unit.vy * dt;
  pushOutOfWalls(unit);
  unit.x = Math.max(unit.radius, Math.min(canvas.width - unit.radius, unit.x));
  unit.y = Math.max(unit.radius, Math.min(canvas.height - unit.radius, unit.y));
}

function damageFor(unit, amount) {
  if (unit.powerPotionTimer > 0) {
    amount *= 1.55;
  }
  if (unit.berserked) {
    return amount * (1 + unit.skills.berserkDamage);
  }
  return amount;
}

function applyAreaAttack(attacker, x, y, area = attacker.areaAttack, isRanged = Boolean(attacker.projectileSpeed)) {
  if (!area || area.range <= 0 || area.damage <= 0) return;
  for (const unit of state.units) {
    if (unit.team === attacker.team || unit.dead) continue;
    const distance = Math.hypot(unit.x - x, unit.y - y);
    if (distance > area.range + unit.radius) continue;
    const falloff = Math.max(0.35, 1 - distance / Math.max(1, area.range));
    hurt(unit, damageFor(attacker, area.damage * falloff), {
      x,
      y,
      knockback: 2.2,
      isRanged,
      applyBurn: attacker.skills.fireBreath,
      fireDuration: attacker.skills.fireDuration || 5,
      applyFreeze: attacker.skills.freezeAttack,
      damageType: attacker.skills.fireBreath ? "fire" : attacker.skills.freezeAttack ? "ice" : null,
      noKnockback: attacker.skills.fireBreath,
      owner: attacker,
    });
  }
  for (const wall of state.walls) {
    if (!canUnitDamageWall(attacker, wall)) continue;
    const closestX = clamp(x, wall.x - wall.w / 2, wall.x + wall.w / 2);
    const closestY = clamp(y, wall.y - wall.h / 2, wall.y + wall.h / 2);
    const distance = Math.hypot(x - closestX, y - closestY);
    if (distance > area.range) continue;
    damageWall(wall, damageFor(attacker, area.damage * 0.28), closestX, closestY);
  }
  state.particles.push({ x, y, life: 0.55, color: "#f8d36c", size: area.range });
}

function updateBerserk(unit) {
  if (unit.dead || unit.berserked || !unit.skills.berserkHp) return;
  if (unit.hp > unit.skills.berserkHp) return;
  unit.berserked = true;
  if (unit.skills.berserkHeal > 0) {
    unit.maxHp += unit.skills.berserkHeal;
    unit.hp += unit.skills.berserkHeal;
  }
  state.particles.push({ x: unit.x, y: unit.y, life: 0.75, color: "#ffcf5f", size: unit.radius * 2.2 });
}

function applyDamageAura(unit, dt) {
  if (!unit.skills.damageAura || unit.skills.damageAuraRange <= 0 || unit.skills.damageAuraDamage <= 0) return;
  const radius = unit.skills.damageAuraRange;
  for (const other of state.units) {
    if (other.team === unit.team || other.dead) continue;
    const distance = Math.hypot(other.x - unit.x, other.y - unit.y);
    if (distance > radius + other.radius) continue;
    hurt(other, unit.skills.damageAuraDamage * dt, {
      x: unit.x,
      y: unit.y,
      knockback: 0,
      ignoreDodge: true,
      noKnockback: true,
      owner: unit,
    });
  }
  unit.damageAuraPulse -= dt;
  if (unit.damageAuraPulse <= 0) {
    unit.damageAuraPulse = 1;
    state.particles.push({ x: unit.x, y: unit.y, life: 0.5, color: "#d97cff", size: radius });
  }
}

function spawnRandomUnit(unit) {
  if (!unit.skills.randomSpawn || unit.dead) return;
  const blockedSummons = new Set(["portalmage", "tiamat", "adultdragon", "giantzombie", "arrowtower"]);
  const candidates = unitTypes.filter((type) => {
    if (type.id.startsWith("custom-") || blockedSummons.has(type.id)) return false;
    return isUnitAllowedInCurrentLevel(type);
  });
  const moddedPlantTickets = [
    ["wildgatlingshooter", 3],
    ["corncannon", 3],
    ["chomper", 2],
    ["obsidianwargod", 1],
  ];
  for (const [id, tickets] of moddedPlantTickets) {
    const type = typeById(id);
    if (!type || blockedSummons.has(id) || !isUnitAllowedInCurrentLevel(type)) continue;
    for (let i = 0; i < tickets; i += 1) candidates.push(type);
  }
  if (!candidates.length) return;
  const type = candidates[Math.floor(Math.random() * candidates.length)];
  const angle = Math.random() * Math.PI * 2;
  const distance = unit.radius + 34 + Math.random() * 22;
  const x = clamp(unit.x + Math.cos(angle) * distance, 24, canvas.width - 24);
  const y = clamp(unit.y + Math.sin(angle) * distance, 24, canvas.height - 24);
  const summoned = addUnit(type.id, unit.team, x, y);
  summoned.vx += Math.cos(angle) * 80;
  summoned.vy += Math.sin(angle) * 80;
  for (let i = 0; i < 18; i += 1) {
    const a = Math.random() * Math.PI * 2;
    const speed = 40 + Math.random() * 110;
    state.particles.push({
      x,
      y,
      vx: Math.cos(a) * speed,
      vy: Math.sin(a) * speed,
      life: 0.45 + Math.random() * 0.35,
      startLife: 0.8,
      color: Math.random() < 0.5 ? "#c48cff" : "#78bbff",
      size: 14 + Math.random() * 18,
    });
  }
  state.particles.push({ x, y, life: 0.9, startLife: 0.9, color: "#c48cff", size: 58 });
}

function triggerChompBlast(unit) {
  const radius = unit.skills.chompRange || 200;
  const damage = unit.skills.chompDamage || 450;
  let hit = 0;
  for (const other of state.units) {
    if (other.team === unit.team || other.dead || other.airborneTimer > 0) continue;
    const distance = Math.hypot(other.x - unit.x, other.y - unit.y);
    if (distance > radius + other.radius) continue;
    const falloff = Math.max(0.72, 1 - distance / Math.max(1, radius));
    hurt(other, damage * falloff, {
      x: unit.x,
      y: unit.y,
      knockback: 4.6,
      ignoreDodge: true,
      owner: unit,
    });
    hit += 1;
  }
  damageWallsAt(unit.x, unit.y, radius, damage * 0.18);
  for (let i = 0; i < 36; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 80 + Math.random() * 260;
    state.particles.push({
      x: unit.x,
      y: unit.y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 0.35 + Math.random() * 0.35,
      startLife: 0.7,
      color: Math.random() < 0.5 ? "#b05cff" : "#8cff8f",
      size: 18 + Math.random() * 26,
    });
  }
  addRingParticle(unit.x, unit.y, hit ? "#b05cff" : "#75d77a", radius);
  unit.chompCooldown = unit.skills.chompCooldown || 30;
}

function canBeInfected(unit) {
  return !unit.dead && unit.typeId !== "zombie" && INFECTABLE_TYPE_IDS.has(unit.typeId);
}

function infectUnit(target, source) {
  if (!source.skills.infectTouch || !canBeInfected(target)) return;
  const seconds = source.skills.infectSeconds || 10;
  if (target.infectionTimer > 0 && target.infectionTeam === source.team) return;
  target.infectionTimer = seconds;
  target.infectionDuration = seconds;
  target.infectionTeam = source.team;
  state.particles.push({ x: target.x, y: target.y, life: 0.65, startLife: 0.65, color: "#83d96f", size: target.radius * 3.2 });
}

function convertToZombie(unit) {
  const zombie = typeById("zombie");
  unit.team = unit.infectionTeam || unit.team;
  unit.typeId = zombie.id;
  unit.name = zombie.name;
  unit.glyph = zombie.glyph;
  unit.weapon = zombie.weapon;
  unit.secondAttack = null;
  unit.areaAttack = null;
  unit.hp = zombie.hp;
  unit.maxHp = zombie.hp;
  unit.damage = zombie.damage;
  unit.range = zombie.range;
  unit.burstCount = 1;
  unit.burstCooldown = 0;
  unit.stopDistance = zombie.range;
  unit.speed = zombie.speed;
  unit.radius = zombie.radius;
  unit.cooldownTime = zombie.cooldown;
  unit.projectileSpeed = 0;
  unit.splash = 0;
  unit.knockback = zombie.knockback;
  unit.dodgeChance = 0;
  unit.canAttackWalls = true;
  unit.skills = { infectTouch: true, infectSeconds: 10 };
  unit.poisonTimer = 0;
  unit.burnTimer = 0;
  unit.freezeTimer = 0;
  unit.stasisTimer = 0;
  unit.defensePotionTimer = 0;
  unit.powerPotionTimer = 0;
  unit.speedPotionTimer = 0;
  unit.infectionTimer = 0;
  unit.infectionDuration = 0;
  unit.infectionTeam = null;
  unit.color = unit.team === "blue" ? zombie.color : "#ff706c";
  unit.cooldown = 0.4;
  unit.dead = false;
  for (let i = 0; i < 24; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 40 + Math.random() * 110;
    state.particles.push({
      x: unit.x,
      y: unit.y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 0.45 + Math.random() * 0.35,
      startLife: 0.8,
      color: "#83d96f",
      size: 12 + Math.random() * 16,
    });
  }
}

function triggerWhirlwindLeap(unit) {
  const duration = unit.skills.whirlwindDuration || 4;
  unit.airborneTimer = duration;
  unit.airborneTotal = duration;
  unit.whirlwindCooldown = duration + (unit.skills.whirlwindCooldown || 5);
  unit.cooldown = Math.max(unit.cooldown, duration + 0.2);
  for (let i = 0; i < 18; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 70 + Math.random() * 120;
    state.particles.push({
      x: unit.x,
      y: unit.y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 0.35 + Math.random() * 0.25,
      startLife: 0.6,
      color: "#d7ecff",
      size: 12 + Math.random() * 16,
    });
  }
}

function triggerWhirlwindLeapAtPoint(unit, point) {
  const angle = Math.atan2(point.y - unit.y, point.x - unit.x);
  triggerWhirlwindLeap(unit);
  const burst = Math.max(120, unit.speed * 5.2);
  unit.vx += Math.cos(angle) * burst;
  unit.vy += Math.sin(angle) * burst;
  unit.lastControlAngle = angle;
}

function finishWhirlwindLeap(unit) {
  const radius = unit.skills.whirlwindRadius || 105;
  const damage = unit.skills.whirlwindDamage || 200;
  for (const other of state.units) {
    if (other.team === unit.team || other.dead || other.airborneTimer > 0) continue;
    const distance = Math.hypot(other.x - unit.x, other.y - unit.y);
    if (distance > radius + other.radius) continue;
    const falloff = Math.max(0.45, 1 - distance / Math.max(1, radius));
    hurt(other, damage * falloff, {
      x: unit.x,
      y: unit.y,
      knockback: 5.5,
      ignoreDodge: true,
      owner: unit,
    });
  }
  damageWallsAt(unit.x, unit.y, radius, damage * 0.35);
  addRingParticle(unit.x, unit.y, "#d7ecff", radius);
  state.particles.push({ x: unit.x, y: unit.y, life: 0.85, startLife: 0.85, color: "#8ab4ff", size: radius * 1.25 });
}

function hurt(target, amount, source) {
  if (target.airborneTimer > 0) {
    state.particles.push({ x: target.x, y: target.y, life: 0.28, color: "#d7ecff", size: target.radius * 1.6 });
    return;
  }
  if (source.isRanged && terrainAt(target.x, target.y, "grass") && Math.random() < 0.32) {
    state.particles.push({ x: target.x, y: target.y, life: 0.35, color: "#8fe07a", size: target.radius * 2.2 });
    return;
  }
  const killer = source.owner || source;
  if (!source.isRanged && killer?.skills?.infectTouch) {
    infectUnit(target, killer);
  }
  if (source.isRanged && target.skills.blockRangedChance > 0 && Math.random() < target.skills.blockRangedChance) {
    state.particles.push({ x: target.x, y: target.y, life: 0.6, color: "#bde7ff", size: target.radius * 2.5 });
    return;
  }
  if (!source.ignoreDodge && !target.dead && target.dodgeChance > 0 && Math.random() < target.dodgeChance) {
    state.particles.push({ x: target.x, y: target.y, life: 0.35, color: "#ffffff" });
    return;
  }
  if (state.levelMode && !state.sandbox && target.team === "red" && source.isRanged && [6, 13, 22, 27].includes(state.currentLevel)) {
    amount *= 0.65;
    state.particles.push({ x: target.x, y: target.y, life: 0.32, color: "#9bdcff", size: target.radius * 1.9 });
  }
  if (target.levelFireResist > 0 && isFireDamage(source)) {
    amount *= Math.max(0, 1 - target.levelFireResist);
    state.particles.push({ x: target.x, y: target.y, life: 0.36, color: "#ff9f5a", size: target.radius * 2.2 });
  }
  const shieldReduction = holyShieldReduction(target);
  if (shieldReduction > 0) {
    amount *= 1 - shieldReduction;
    state.particles.push({ x: target.x, y: target.y, life: 0.45, color: "#ffeaa0", size: target.radius * 2.4 });
  }
  if (target.defensePotionTimer > 0) {
    amount *= 0.45;
    state.particles.push({ x: target.x, y: target.y, life: 0.38, color: "#ffeaa0", size: target.radius * 2.1 });
  }
  if (target.skills.fireResist > 0 && isFireDamage(source)) {
    amount *= Math.max(0, 1 - target.skills.fireResist);
    state.particles.push({ x: target.x, y: target.y, life: 0.42, color: "#ffb15d", size: target.radius * 2.8 });
  } else
  if (target.skills.magicResist > 0 && isMagicOrPoisonDamage(source)) {
    amount *= 1 - target.skills.magicResist;
    state.particles.push({ x: target.x, y: target.y, life: 0.42, color: "#ffcf8a", size: target.radius * 2.6 });
  }
  if (target.skills.tiamatBoss && state.units.some((unit) => unit.team === target.team && !unit.dead && unit.id !== target.id && ["dragonling", "hydra"].includes(unit.typeId))) {
    amount *= 0.72;
    state.particles.push({ x: target.x, y: target.y, life: 0.38, color: "#c48cff", size: target.radius * 3 });
  }
  if (target.skills.tiamatBoss && target.skills.defensePercent > 0 && !isMagicOrPoisonDamage(source)) {
    const defensePercent = tiamatDefensePercent(target);
    amount = Math.max(0, amount - defensePercent * 2);
    if (defensePercent > 0) {
      state.particles.push({ x: target.x, y: target.y, life: 0.45, color: amount > 0 ? "#ffcf5f" : "#d8d0a8", size: target.radius * (2.3 + defensePercent / 85) });
    }
    if (amount > 0) {
      target.tiamatRageSpeedTimer = Math.max(target.tiamatRageSpeedTimer || 0, 1.7);
    }
  }
  if (target.skills.tiamatBoss && (killer?.typeId === "obsidianwargod" || source.damageType === "obsidian")) {
    amount *= 0.35;
    state.particles.push({ x: target.x, y: target.y, life: 0.42, color: "#8b6cff", size: target.radius * 2.7 });
  }
  if (target.skills.tiamatBoss && target.tiamatBarrierTimer > 0) {
    amount *= 0.38;
    state.particles.push({ x: target.x, y: target.y, life: 0.55, color: "#fff0a8", size: target.radius * 3.4 });
    if (!source.reflected && killer && killer !== target && !killer.dead && killer.hp > 0) {
      hurt(killer, Math.max(8, amount * 0.45), { x: target.x, y: target.y, owner: target, ignoreDodge: true, noKnockback: true, damageType: "magic", reflected: true });
    }
  }
  if (source.applyBurn) burnUnit(target, source.fireDuration || 5);
  if (source.applyFreeze) freezeUnit(target, 2.4);
  if (killer && killer.statsDamage !== undefined && killer !== target) {
    killer.statsDamage += Math.max(0, Math.min(amount, target.hp));
  }
  target.hp -= amount;
  updateBerserk(target);
  const angle = Math.atan2(target.y - source.y, target.x - source.x);
  const forceKnockback = source.forceKnockback || source.skills?.forceKnockback || source.owner?.skills?.forceKnockback;
  const knockback = (target.skills.knockbackImmune && !forceKnockback) || source.noKnockback ? 0 : source.knockback || 2.3;
  target.vx += Math.cos(angle) * amount * knockback;
  target.vy += Math.sin(angle) * amount * knockback;
  state.particles.push({ x: target.x, y: target.y, life: 0.45, color: target.team === "blue" ? "#78bbff" : "#ff8582" });
  if (target.hp <= 0) {
    if (target.infectionTimer > 0 && target.infectionTeam) {
      convertToZombie(target);
      return;
    }
    if (target.reviveChance > 0 && !target.revivedOnce && Math.random() < target.reviveChance) {
      target.revivedOnce = true;
      target.hp = Math.max(1, target.maxHp * 0.45);
      target.poisonTimer = 0;
      target.burnTimer = 0;
      target.freezeTimer = 0;
      target.stasisTimer = 0;
      state.particles.push({ x: target.x, y: target.y, life: 0.8, startLife: 0.8, color: "#70e071", size: target.radius * 3.2 });
      return;
    }
    target.dead = true;
    if (killer && killer.statsKills !== undefined && killer !== target) killer.statsKills += 1;
    handleKillEffects(killer, target);
    if (target.skills.explode) explodeUnit(target);
    if (!target.skills.knockbackImmune || forceKnockback) {
      target.vx += Math.cos(angle) * 120;
      target.vy += Math.sin(angle) * 120;
    }
  }
}

function spawnObsidianSpit(unit, target) {
  if (!unit?.skills?.spitOnAttack || !target || target.dead) return;
  const angle = Math.atan2(target.y - unit.y, target.x - unit.x);
  state.projectiles.push({
    x: unit.x + Math.cos(angle) * unit.radius * 0.65,
    y: unit.y + Math.sin(angle) * unit.radius * 0.65,
    tx: target.id,
    team: unit.team,
    ownerId: unit.id,
    damage: unit.skills.spitDamage || 200,
    speed: unit.skills.spitSpeed || 430,
    splash: unit.skills.spitSplash || 120,
    radius: 9,
    isRanged: true,
    color: "#6d4bff",
    damageType: "obsidian",
    continueOnTargetDeath: true,
    life: 2.2,
  });
  state.particles.push({ x: unit.x, y: unit.y, life: 0.45, startLife: 0.45, color: "#7b5cff", size: unit.radius * 1.9 });
}

function summonFootballZombiesOnAttack(unit) {
  if (!unit?.skills?.summonFootballOnAttack) return;
  const type = typeById("footballzombie");
  if (!type) return;
  const count = Math.max(1, Math.floor(unit.skills.summonFootballCount || 3));
  for (let i = 0; i < count; i += 1) {
    const angle = (i / count) * Math.PI * 2 + Math.random() * 0.35;
    const distance = unit.radius + 28 + Math.random() * 22;
    const x = clamp(unit.x + Math.cos(angle) * distance, type.radius, canvas.width - type.radius);
    const y = clamp(unit.y + Math.sin(angle) * distance, type.radius, canvas.height - type.radius);
    const summoned = addUnit("footballzombie", unit.team, x, y);
    summoned.vx += Math.cos(angle) * 120;
    summoned.vy += Math.sin(angle) * 120;
    summoned.summonedByBoss = true;
    state.particles.push({ x, y, life: 0.55, startLife: 0.55, color: "#83d96f", size: 34 });
  }
}

function afterUnitAttack(unit, target) {
  if (!target || target.kind === "wall") return;
  spawnObsidianSpit(unit, target);
  summonFootballZombiesOnAttack(unit);
}
function attack(unit, target, mode = null) {
  const active = mode || {
    weapon: unit.weapon,
    damage: unit.damage,
    ranged: Boolean(unit.projectileSpeed),
    projectileSpeed: unit.projectileSpeed,
    splash: unit.splash,
    cooldown: unit.cooldownTime,
    burstCount: unit.skills.gatling && unit.gatlingBoosted ? 4 : unit.burstCount || 1,
    burstCooldown: unit.skills.gatling ? unit.cooldownTime : unit.burstCooldown || 0,
    fanSpread: unit.skills.gatling && unit.gatlingBoosted ? 0.55 : 0,
  };
  const burstCount = Math.max(1, Math.floor(active.burstCount || 1));
  unit.cooldown = burstCount > 1 && active.burstCooldown > 0 ? active.burstCooldown : active.cooldown || unit.cooldownTime;
  if (unit.tiamatFrostTimer > 0) unit.cooldown *= 1.5;
  if (target.kind === "wall") {
    if (!canUnitDamageWall(unit, target.wall)) return;
    if (active.ranged && active.projectileSpeed) {
      for (let i = 0; i < burstCount; i += 1) {
        state.projectiles.push({
          x: unit.x + (Math.random() - 0.5) * unit.radius * 0.35,
          y: unit.y + (Math.random() - 0.5) * unit.radius * 0.35,
          targetWall: target.wall,
          targetX: target.x,
          targetY: target.y,
          team: unit.team,
          ownerId: unit.id,
          damage: unitWallDamage(unit, damageFor(unit, active.damage)),
          speed: active.projectileSpeed,
          splash: active.splash || 0,
          radius: active.weapon === "cannon" ? 7 : 4,
          isRanged: true,
          life: active.weapon === "musket" ? 0.85 : 1.6,
        });
      }
      return;
    }
    for (let i = 0; i < burstCount; i += 1) {
      damageWall(target.wall, unitWallDamage(unit, damageFor(unit, active.damage * (0.85 + Math.random() * 0.3))), target.x, target.y);
    }
    applyAreaAttack(unit, target.x, target.y);
    const angle = Math.atan2(target.y - unit.y, target.x - unit.x);
    unit.vx -= Math.cos(angle) * 20;
    unit.vy -= Math.sin(angle) * 20;
    return;
  }
  if (unit.skills.poisonSlime && unit.slimeCooldown <= 0 && Math.random() < unit.skills.slimeChance) {
    spawnSlime(target.x, target.y, unit.team);
    unit.slimeCooldown = 1.2;
  }
  if (unit.skills.fireBreath) {
    spawnFireBreathParticles(unit, target, active.ranged ? 18 : 12);
  }
  if (active.ranged && active.projectileSpeed) {
    if (active.fanSpread) {
      const baseAngle = Math.atan2(target.y - unit.y, target.x - unit.x);
      for (let i = 0; i < burstCount; i += 1) {
        const spread = burstCount > 1 ? (i - (burstCount - 1) / 2) * (active.fanSpread / Math.max(1, burstCount - 1)) : 0;
        const angle = baseAngle + spread;
        state.projectiles.push({
          x: unit.x + Math.cos(angle) * unit.radius * 0.5,
          y: unit.y + Math.sin(angle) * unit.radius * 0.5,
          vx: Math.cos(angle) * active.projectileSpeed,
          vy: Math.sin(angle) * active.projectileSpeed,
          team: unit.team,
          ownerId: unit.id,
          damage: damageFor(unit, active.damage),
          speed: active.projectileSpeed,
          splash: active.splash || 0,
          radius: 4,
          isRanged: true,
          manualShot: true,
          passWalls: unit.skills.rooted,
          continueOnTargetDeath: true,
          life: 1.8,
        });
      }
      return;
    }
    for (let i = 0; i < burstCount; i += 1) {
      state.projectiles.push({
        x: unit.x + (Math.random() - 0.5) * unit.radius * 0.35,
        y: unit.y + (Math.random() - 0.5) * unit.radius * 0.35,
        tx: target.id,
        team: unit.team,
        ownerId: unit.id,
        damage: damageFor(unit, active.damage),
        speed: active.projectileSpeed,
        splash: active.splash || 0,
        radius: active.weapon === "cannon" ? 7 : 4,
        isRanged: true,
        areaAttack: unit.areaAttack,
        passWalls: unit.skills.rooted,
        continueOnTargetDeath: unit.typeId === "peashooter",
        applyBurn: unit.skills.fireBreath,
        fireDuration: unit.skills.fireDuration || 5,
        applyFreeze: unit.skills.freezeAttack,
        damageType: unit.skills.fireBreath ? "fire" : unit.skills.freezeAttack ? "ice" : null,
        life: active.weapon === "musket" ? 0.85 : 1.6,
      });
    }
    return;
  }
  for (let i = 0; i < burstCount; i += 1) {
    hurt(target, damageFor(unit, active.damage * (0.85 + Math.random() * 0.3)), {
      ...unit,
      applyBurn: unit.skills.fireBreath,
      fireDuration: unit.skills.fireDuration || 5,
      applyFreeze: unit.skills.freezeAttack,
      damageType: unit.skills.fireBreath ? "fire" : unit.skills.freezeAttack ? "ice" : null,
      noKnockback: unit.skills.fireBreath && !unit.skills.meleeKnockbackWithFire,
    });
  }
  applyAreaAttack(unit, target.x, target.y);
  afterUnitAttack(unit, target);
  const moveTarget = wallAvoidancePoint(unit, target);
  const angle = Math.atan2(moveTarget.y - unit.y, moveTarget.x - unit.x);
  unit.vx -= Math.cos(angle) * 28;
  unit.vy -= Math.sin(angle) * 28;
}

function updateUnit(unit, dt) {
  unit.cooldown = Math.max(0, unit.cooldown - dt);
  unit.slimeCooldown = Math.max(0, unit.slimeCooldown - dt);
  unit.tornadoCooldown = Math.max(0, unit.tornadoCooldown - dt);
  unit.stasisCooldown = Math.max(0, unit.stasisCooldown - dt);
  unit.fireBreathCooldown = Math.max(0, (unit.fireBreathCooldown || 0) - dt);
  unit.fireballCooldown = Math.max(0, unit.fireballCooldown - dt);
  unit.fiveElementBreathCooldown = Math.max(0, (unit.fiveElementBreathCooldown || 0) - dt);
  unit.randomSpawnCooldown = Math.max(0, unit.randomSpawnCooldown - dt);
  unit.whirlwindCooldown = Math.max(0, unit.whirlwindCooldown - dt);
  unit.buildCooldown = Math.max(0, (unit.buildCooldown || 0) - dt);
  unit.wobble += dt * (unit.typeId === "tiamat" ? 7 : 5 + unit.speed / 25);
  updateBerserk(unit);
  if (!unit.dead && unit.poisonTimer > 0) {
    unit.poisonTimer -= dt;
    unit.poisonTick -= dt;
    if (unit.poisonTick <= 0) {
      unit.poisonTick += 1;
      hurt(unit, 7, { x: unit.x - 1, y: unit.y, knockback: 0.4, ignoreDodge: true, damageType: "poison" });
      state.particles.push({ x: unit.x, y: unit.y, life: 0.4, color: "#70e071", size: 18 });
    }
  }
  if (!unit.dead && unit.burnTimer > 0) {
    unit.burnTimer -= dt;
    unit.burnTick -= dt;
    if (unit.burnTick <= 0) {
      unit.burnTick += 1;
      hurt(unit, 16, { x: unit.x - 1, y: unit.y, knockback: 0, ignoreDodge: true, noKnockback: true, damageType: "fire" });
      state.particles.push({ x: unit.x, y: unit.y, life: 0.4, color: "#ff8a38", size: 20 });
    }
  }
  if (!unit.dead && unit.tiamatBurnTimer > 0) {
    unit.tiamatBurnTimer -= dt;
    unit.tiamatBurnTick -= dt;
    if (unit.tiamatBurnTick <= 0) {
      unit.tiamatBurnTick += 1;
      hurt(unit, unit.tiamatBurnDps || 50, { x: unit.x - 1, y: unit.y, knockback: 0, ignoreDodge: true, noKnockback: true, damageType: "fire" });
      state.particles.push({ x: unit.x, y: unit.y, life: 0.48, color: "#ff5d2e", size: 32 });
    }
  }
  if (!unit.dead && unit.tiamatFrostTimer > 0) {
    unit.tiamatFrostTimer -= dt;
    unit.tiamatFrostTick -= dt;
    if (unit.tiamatFrostTick <= 0) {
      unit.tiamatFrostTick += 1;
      hurt(unit, 35, { x: unit.x - 1, y: unit.y, knockback: 0, ignoreDodge: true, noKnockback: true, damageType: "ice" });
      state.particles.push({ x: unit.x, y: unit.y, life: 0.48, color: "#9bdcff", size: 30 });
    }
  }
  unit.freezeTimer = Math.max(0, unit.freezeTimer - dt);
  unit.tiamatRageSpeedTimer = Math.max(0, (unit.tiamatRageSpeedTimer || 0) - dt);
  if (!unit.dead && terrainAt(unit.x, unit.y, "fire")) {
    unit.terrainFireTick = (unit.terrainFireTick || 0) - dt;
    if (unit.terrainFireTick <= 0) {
      unit.terrainFireTick = 0.55;
      hurt(unit, 7, { x: unit.x - 1, y: unit.y, knockback: 0, ignoreDodge: true, noKnockback: true, damageType: "fire" });
    }
  }
  unit.stasisTimer = Math.max(0, unit.stasisTimer - dt);
  unit.defensePotionTimer = Math.max(0, unit.defensePotionTimer - dt);
  unit.powerPotionTimer = Math.max(0, unit.powerPotionTimer - dt);
  unit.speedPotionTimer = Math.max(0, unit.speedPotionTimer - dt);
  if (!unit.dead && unit.infectionTimer > 0) {
    unit.hp -= unit.maxHp * 0.05 * dt;
    if (unit.hp <= 0) {
      convertToZombie(unit);
      return;
    }
    unit.infectionTimer = Math.max(0, unit.infectionTimer - dt);
    if (unit.infectionTimer <= 0) {
      convertToZombie(unit);
      return;
    }
  }
  if (unit.dead) {
    unit.vx *= 0.972;
    unit.vy *= 0.972;
    unit.x += unit.vx * dt;
    unit.y += unit.vy * dt;
    return;
  }
  if (unit.skills.tiamatBoss) {
    if (updateTiamatBoss(unit, dt)) return;
  }
  if (unit.skills.archmageBoss) {
    updateArchmageBoss(unit, dt);
  }
  if (unit.skills.permanentGatling) {
    unit.gatlingBoosted = true;
    if (Math.random() < dt * 10) {
      state.particles.push({ x: unit.x + (Math.random() - 0.5) * unit.radius * 2.2, y: unit.y + (Math.random() - 0.5) * unit.radius * 2.2, life: 0.22, startLife: 0.22, color: "#ffe05a", size: 10 + Math.random() * 18 });
    }
  } else if (unit.skills.gatling) {
    unit.gatlingCheckTimer = Math.max(0, (unit.gatlingCheckTimer || unit.skills.gatlingCheckInterval || 3) - dt);
    if (unit.gatlingCheckTimer <= 0) {
      unit.gatlingCheckTimer += unit.skills.gatlingCheckInterval || 3;
      if (Math.random() < 0.5) {
        unit.gatlingBoosted = !unit.gatlingBoosted;
        unit.cooldown = Math.min(unit.cooldown, 0.05);
        state.particles.push({
          x: unit.x,
          y: unit.y,
          life: 0.75,
          startLife: 0.75,
          color: unit.gatlingBoosted ? "#ffe05a" : "#7cff9c",
          size: unit.gatlingBoosted ? 70 : 42,
        });
      }
    }
  }
  if (unit.skills.cornCannon) {
    if (unit.team === "red" && unit.cooldown <= 0) {
      const info = nearestEnemyFor(unit, unit.range || Infinity);
      if (info?.target) fireCornNuke(unit, info.target);
    }
    unit.vx = 0;
    unit.vy = 0;
    return;
  }
  if (unit.skills.chompBlast) {
    unit.chompCooldown = Math.max(0, (unit.chompCooldown || 0) - dt);
    const radius = unit.skills.chompRange || 200;
    const triggerRadius = unit.skills.chompTriggerRange || Math.min(radius, 80);
    let enemiesInBlast = 0;
    let enemyClose = false;
    for (const other of state.units) {
      if (other.team === unit.team || other.dead || other.airborneTimer > 0) continue;
      const distance = Math.hypot(other.x - unit.x, other.y - unit.y);
      if (distance <= radius + other.radius) enemiesInBlast += 1;
      if (distance <= triggerRadius + other.radius) enemyClose = true;
    }
    if ((enemyClose || enemiesInBlast >= 2) && unit.chompCooldown <= 0) {
      triggerChompBlast(unit);
    }
  }
  if (unit.skills.sunProducer) {
    unit.sunTimer = Math.max(0, (unit.sunTimer || unit.skills.sunInterval || 5) - dt);
    if (unit.sunTimer <= 0) {
      unit.sunTimer += unit.skills.sunInterval || 5;
      const sunGold = Math.round((unit.skills.sunGold || 50) * (isPvzMode() ? 1 + (state.pvzMods?.sunGoldBonus || 0) : 1));
      if (!state.sandbox) state.budget += sunGold;
      state.particles.push({ x: unit.x, y: unit.y - unit.radius * 1.2, life: 0.9, startLife: 0.9, color: "#ffd95a", size: 36 });
      setToast(`+${sunGold} gold`);
    } }
  if (unit.airborneTimer > 0) {
    unit.airborneTimer = Math.max(0, unit.airborneTimer - dt);
    unit.vx *= 0.965;
    unit.vy *= 0.965;
    unit.x += unit.vx * dt;
    unit.y += unit.vy * dt;
    unit.x = Math.max(unit.radius, Math.min(canvas.width - unit.radius, unit.x));
    unit.y = Math.max(unit.radius, Math.min(canvas.height - unit.radius, unit.y));
    if (unit.airborneTimer <= 0) {
      finishWhirlwindLeap(unit);
      unit.airborneTotal = 0;
    } else if (Math.random() < dt * 16) {
      state.particles.push({
        x: unit.x + (Math.random() - 0.5) * unit.radius * 2,
        y: unit.y + (Math.random() - 0.5) * unit.radius * 2,
        vx: (Math.random() - 0.5) * 120,
        vy: (Math.random() - 0.5) * 120,
        life: 0.25,
        startLife: 0.25,
        color: "#d7ecff",
        size: 10 + Math.random() * 12,
      });
    }
    return;
  }
  applyDamageAura(unit, dt);
  if (unit.skills.randomSpawn && unit.randomSpawnCooldown <= 0) {
    spawnRandomUnit(unit);
    unit.randomSpawnCooldown = unit.skills.randomSpawnInterval || 5;
  }
  if (unit.skills.sunProducer) {
    unit.vx = 0;
    unit.vy = 0;
    return;
  }
  if (unit.stasisTimer > 0) {
    unit.vx = 0;
    unit.vy = 0;
    return;
  }
  if (state.phase === "battle" && state.controlledId === unit.id) {
    updateControlledUnit(unit, dt);
    return;
  }
  if (unit.skills.rooted) {
    unit.vx = 0;
    unit.vy = 0;
  }
  const command = state.commands[unit.team];
  if (command && !unit.skills.rooted) {
    const goal = wallAvoidancePoint(unit, command);
    const commandDistance = Math.hypot(goal.x - unit.x, goal.y - unit.y);
    const speedFactor = (unit.freezeTimer > 0 ? 0.45 : 1) * (unit.tiamatFrostTimer > 0 ? 0.2 : 1) * (unit.speedPotionTimer > 0 ? 1.55 : 1) * (unit.tiamatRageSpeedTimer > 0 ? unit.skills.hitSpeedBoost || 10 : 1) * terrainSpeedFactor(unit);
    if (commandDistance > unit.radius + 18) {
      const angle = Math.atan2(goal.y - unit.y, goal.x - unit.x);
      unit.vx += Math.cos(angle) * unit.speed * speedFactor * dt * 3.2;
      unit.vy += Math.sin(angle) * unit.speed * speedFactor * dt * 3.2;
      unit.vx += Math.cos(unit.wobble) * 6 * dt;
      unit.vy += Math.sin(unit.wobble * 1.7) * 5 * dt;
      unit.vx *= 0.91;
      unit.vy *= 0.91;
      unit.x += unit.vx * dt;
      unit.y += unit.vy * dt;
      pushOutOfWalls(unit);
      unit.x = Math.max(unit.radius, Math.min(canvas.width - unit.radius, unit.x));
      unit.y = Math.max(unit.radius, Math.min(canvas.height - unit.radius, unit.y));
      return;
    }
  }
  const info = findTarget(unit);
  if (!info) return;
  const { target, distance } = info;
  if (unit.skills.whirlwindLeap && unit.whirlwindCooldown <= 0 && target.kind !== "wall" && distance <= (unit.skills.whirlwindTriggerRange || 92)) {
    triggerWhirlwindLeap(unit);
    return;
  }
  if (unit.skills.stasisGaze && unit.stasisCooldown <= 0) {
    triggerStasisGaze(unit);
  }
  if (target.kind !== "wall" && unit.skills.fireball && unit.fireballCooldown <= 0 && distance <= 320) {
    castFireball(unit, target);
  }
  if (target.kind !== "wall" && unit.skills.fiveElementBreath && unit.fiveElementBreathCooldown <= 0 && distance <= (unit.skills.fiveElementBreathRange || 180)) {
    dragonFiveElementBreath(unit, target);
    unit.fiveElementBreathCooldown = unit.typeId === "adultdragon" ? 4.5 : 5.8;
  }
  if (unit.skills.tornado && unit.tornadoCooldown <= 0) {
    spawnTornado(unit, target);
    unit.tornadoCooldown = unit.skills.poisonSlime ? 5.2 : 6.4;
  }
  const moveTarget = wallAvoidancePoint(unit, target);
  const angle = Math.atan2(moveTarget.y - unit.y, moveTarget.x - unit.x);
  const isRanged = Boolean(unit.projectileSpeed);
  const blockedByUnbreakable = target.kind !== "wall" && state.walls.some((wall) => {
    if (!isUnbreakableWall(wall)) return false;
    return segmentHitsWall(unit.x, unit.y, target.x, target.y, wall, unit.radius + 10);
  });
  const edgeDistance = Math.max(0, distance - unit.radius - target.radius);
  const engagementDistance = isRanged ? distance : edgeDistance;
  const rangeFactor = terrainRangeFactor(unit);
  const primaryAttackDistance = isRanged ? unit.range * 0.88 * rangeFactor : unit.range;
  const second = unit.secondAttack;
  const secondEngagementDistance = second && second.ranged ? distance : edgeDistance;
  const secondAttackDistance = second ? second.range * (second.ranged ? rangeFactor : 1) : 0;
  const canPrimaryAttack = !blockedByUnbreakable && engagementDistance <= primaryAttackDistance;
  const canSecondAttack = !blockedByUnbreakable && Boolean(second && secondEngagementDistance <= secondAttackDistance);
  const attackDistance = Math.max(primaryAttackDistance, secondAttackDistance);
  const stopDistance = blockedByUnbreakable ? 0 : isRanged ? unit.stopDistance : Math.min(unit.stopDistance, attackDistance);
  const speedFactor = (unit.freezeTimer > 0 ? 0.45 : 1) * (unit.tiamatFrostTimer > 0 ? 0.2 : 1) * (unit.speedPotionTimer > 0 ? 1.55 : 1) * (unit.tiamatRageSpeedTimer > 0 ? unit.skills.hitSpeedBoost || 10 : 1) * terrainSpeedFactor(unit);
  if (!unit.skills.rooted && engagementDistance > stopDistance) {
    unit.vx += Math.cos(angle) * unit.speed * speedFactor * dt * 2.8;
    unit.vy += Math.sin(angle) * unit.speed * speedFactor * dt * 2.8;
  }
  if (unit.cooldown <= 0) {
    if (canSecondAttack && second && !second.ranged) {
      attack(unit, target, second);
    } else if (canPrimaryAttack) {
      attack(unit, target);
    } else if (canSecondAttack) {
      attack(unit, target, second);
    }
  }
  if (!unit.skills.rooted) {
    unit.vx += Math.cos(unit.wobble) * 9 * dt;
    unit.vy += Math.sin(unit.wobble * 1.7) * 8 * dt;
    unit.vx *= 0.91;
    unit.vy *= 0.91;
    unit.x += unit.vx * dt;
    unit.y += unit.vy * dt;
    pushOutOfWalls(unit);
  } else {
    unit.vx = 0;
    unit.vy = 0;
  }
  unit.x = Math.max(unit.radius, Math.min(canvas.width - unit.radius, unit.x));
  unit.y = Math.max(unit.radius, Math.min(canvas.height - unit.radius, unit.y));
  updateTiamatMoveCrush(unit, dt);
}

function resolveCrowding() {
  for (let i = 0; i < state.units.length; i += 1) {
    for (let j = i + 1; j < state.units.length; j += 1) {
      const a = state.units[i];
      const b = state.units[j];
      if (a.dead && b.dead) continue;
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const distance = Math.max(0.01, Math.hypot(dx, dy));
      const min = a.radius + b.radius;
      if (distance >= min) continue;
      if (!a.dead && !b.dead && a.team !== b.team) {
        infectUnit(b, a);
        infectUnit(a, b);
      }
      const totalPush = min - distance;
      const nx = dx / distance;
      const ny = dy / distance;
      const aFixed = Boolean(a.skills?.immovable);
      const bFixed = Boolean(b.skills?.immovable);
      if (aFixed && bFixed) continue;
      const aPush = aFixed ? 0 : bFixed ? totalPush : totalPush * 0.5;
      const bPush = bFixed ? 0 : aFixed ? totalPush : totalPush * 0.5;
      a.x -= nx * aPush;
      a.y -= ny * aPush;
      b.x += nx * bPush;
      b.y += ny * bPush;
      if (!aFixed) {
        a.vx -= nx * 10;
        a.vy -= ny * 10;
      }
      if (!bFixed) {
        b.vx += nx * 10;
        b.vy += ny * 10;
      }
    }
  }
}

function updateProjectiles(dt) {
  for (const projectile of state.projectiles) {
    if (projectile.manualShot) {
      projectile.life -= dt;
      const angle = Math.atan2(projectile.vy || 0, projectile.vx || 1);
      projectile.x += projectile.vx * dt;
      projectile.y += projectile.vy * dt;
      if ((projectile.applyBurn || projectile.applyFreeze) && Math.random() < 0.85) {
        state.particles.push({
          x: projectile.x + (Math.random() - 0.5) * 8,
          y: projectile.y + (Math.random() - 0.5) * 8,
          vx: -Math.cos(angle) * (25 + Math.random() * 60),
          vy: -Math.sin(angle) * (25 + Math.random() * 60),
          life: 0.15 + Math.random() * 0.12,
          startLife: 0.28,
          color: projectile.applyFreeze ? "#9bdcff" : "#ff8a38",
          size: 8 + Math.random() * 8,
        });
      }
      if (!projectile.passWalls && projectileHitsWall(projectile)) {
        state.particles.push({ x: projectile.x, y: projectile.y, life: 0.45, startLife: 0.45, color: "#d8d0a8", size: 24 });
        projectile.life = 0;
        continue;
      }
      const hit = state.units.find((unit) => {
        if (unit.team === projectile.team || unit.dead || unit.airborneTimer > 0) return false;
        return Math.hypot(unit.x - projectile.x, unit.y - projectile.y) <= unit.radius + projectile.radius + 3;
      });
      if (hit) {
        const owner = state.units.find((unit) => unit.id === projectile.ownerId);
        if (projectile.splash) {
          for (const unit of state.units) {
            if (unit.team === projectile.team || unit.dead) continue;
            const distance = Math.hypot(unit.x - projectile.x, unit.y - projectile.y);
            if (distance <= projectile.splash + unit.radius) {
              const falloff = Math.max(0.35, 1 - distance / Math.max(1, projectile.splash));
              hurt(unit, projectile.damage * falloff, {
                x: projectile.x - Math.cos(angle),
                y: projectile.y - Math.sin(angle),
                knockback: 3.2,
                isRanged: true,
                applyBurn: projectile.applyBurn,
                fireDuration: projectile.fireDuration || 5,
                applyFreeze: projectile.applyFreeze,
                damageType: projectile.damageType,
                noKnockback: projectile.applyBurn,
                owner,
              });
            }
          }
          damageWallsAt(projectile.x, projectile.y, projectile.splash, projectile.damage * 0.35);
        } else {
          hurt(hit, projectile.damage, {
            x: projectile.x - Math.cos(angle),
            y: projectile.y - Math.sin(angle),
            isRanged: true,
            applyBurn: projectile.applyBurn,
            fireDuration: projectile.fireDuration || 5,
            applyFreeze: projectile.applyFreeze,
            damageType: projectile.damageType,
            noKnockback: projectile.applyBurn,
            owner,
          });
          if (projectile.areaAttack && owner) applyAreaAttack(owner, projectile.x, projectile.y, projectile.areaAttack, true);
        }
        projectile.life = 0;
        continue;
      }
      if (projectile.life <= 0 || projectile.x < -40 || projectile.x > canvas.width + 40 || projectile.y < -40 || projectile.y > canvas.height + 40) {
        projectile.life = 0;
      }
      continue;
    }
    if (projectile.cornNuke) {
      projectile.life -= dt;
      const angle = Math.atan2(projectile.targetY - projectile.y, projectile.targetX - projectile.x);
      projectile.x += Math.cos(angle) * projectile.speed * dt;
      projectile.y += Math.sin(angle) * projectile.speed * dt;
      for (let i = 0; i < 3; i += 1) {
        state.particles.push({
          x: projectile.x + (Math.random() - 0.5) * 18,
          y: projectile.y + (Math.random() - 0.5) * 18,
          vx: -Math.cos(angle) * (50 + Math.random() * 110),
          vy: -Math.sin(angle) * (50 + Math.random() * 110),
          life: 0.18 + Math.random() * 0.18,
          startLife: 0.36,
          color: Math.random() < 0.55 ? "#ffe05a" : "#ff8a28",
          size: 16 + Math.random() * 20,
        });
      }
      if (Math.hypot(projectile.targetX - projectile.x, projectile.targetY - projectile.y) < 22 || projectile.life <= 0) {
        projectile.x = projectile.targetX;
        projectile.y = projectile.targetY;
        explodeCornNuke(projectile);
        projectile.life = 0;
      }
      continue;
    }    if (projectile.itemFireball) {
      projectile.life -= dt;
      const angle = Math.atan2(projectile.targetY - projectile.y, projectile.targetX - projectile.x);
      projectile.x += Math.cos(angle) * projectile.speed * dt;
      projectile.y += Math.sin(angle) * projectile.speed * dt;
      state.particles.push({
        x: projectile.x + (Math.random() - 0.5) * 10,
        y: projectile.y + (Math.random() - 0.5) * 10,
        vx: -Math.cos(angle) * (45 + Math.random() * 90),
        vy: -Math.sin(angle) * (45 + Math.random() * 90),
        life: 0.2 + Math.random() * 0.18,
        startLife: 0.38,
        color: projectile.poisonFireball ? (Math.random() < 0.5 ? "#70e071" : "#b8ff5a") : Math.random() < 0.5 ? "#ff7838" : "#ffd15a",
        size: 18 + Math.random() * 14,
      });
      if (Math.hypot(projectile.targetX - projectile.x, projectile.targetY - projectile.y) < 18 || projectile.life <= 0) {
        projectile.x = projectile.targetX;
        projectile.y = projectile.targetY;
        explodeItemFireball(projectile);
        projectile.life = 0;
      }
      continue;
    }
    if (projectile.targetWall) {
      projectile.life -= dt;
      if (!state.walls.includes(projectile.targetWall)) {
        projectile.life = 0;
        continue;
      }
      const angle = Math.atan2(projectile.targetY - projectile.y, projectile.targetX - projectile.x);
      projectile.x += Math.cos(angle) * projectile.speed * dt;
      projectile.y += Math.sin(angle) * projectile.speed * dt;
      if (Math.hypot(projectile.targetX - projectile.x, projectile.targetY - projectile.y) < 12 || projectileHitsWall(projectile)) {
        damageWall(projectile.targetWall, projectile.damage, projectile.x, projectile.y);
        if (projectile.splash) damageWallsAt(projectile.x, projectile.y, projectile.splash, projectile.damage * 0.45);
        projectile.life = 0;
      }
      continue;
    }
    const target = state.units.find((unit) => unit.id === projectile.tx && !unit.dead);
    projectile.life -= dt;
    if (!target) {
      if (!projectile.continueOnTargetDeath) {
        projectile.life = 0;
        continue;
      }
      projectile.vx ??= Math.cos(projectile.lastAngle || 0) * projectile.speed;
      projectile.vy ??= Math.sin(projectile.lastAngle || 0) * projectile.speed;
      projectile.x += projectile.vx * dt;
      projectile.y += projectile.vy * dt;
      const replacement = state.units.find((unit) => {
        if (unit.team === projectile.team || unit.dead) return false;
        return Math.hypot(unit.x - projectile.x, unit.y - projectile.y) < unit.radius + 6;
      });
      if (replacement) {
        const owner = state.units.find((unit) => unit.id === projectile.ownerId);
        const angle = Math.atan2(replacement.y - projectile.y, replacement.x - projectile.x);
        hurt(replacement, projectile.damage, {
          x: projectile.x - Math.cos(angle),
          y: projectile.y - Math.sin(angle),
          isRanged: true,
          applyBurn: projectile.applyBurn,
          fireDuration: projectile.fireDuration || 5,
          applyFreeze: projectile.applyFreeze,
          fireball: projectile.fireball,
          damageType: projectile.fireball ? "fireball" : projectile.applyBurn ? "fire" : projectile.applyFreeze ? "ice" : null,
          noKnockback: projectile.applyBurn,
          owner,
        });
        projectile.life = 0;
      }
      continue;
    }
    const angle = Math.atan2(target.y - projectile.y, target.x - projectile.x);
    projectile.lastAngle = angle;
    projectile.vx = Math.cos(angle) * projectile.speed;
    projectile.vy = Math.sin(angle) * projectile.speed;
    projectile.x += Math.cos(angle) * projectile.speed * dt;
    projectile.y += Math.sin(angle) * projectile.speed * dt;
    if (projectileHitsWall(projectile)) {
      state.particles.push({ x: projectile.x, y: projectile.y, life: 0.45, startLife: 0.45, color: "#d8d0a8", size: 24 });
      projectile.life = 0;
      continue;
    }
    if (projectile.applyBurn || projectile.fireball) {
      state.particles.push({
        x: projectile.x + (Math.random() - 0.5) * 8,
        y: projectile.y + (Math.random() - 0.5) * 8,
        vx: -Math.cos(angle) * (35 + Math.random() * 70),
        vy: -Math.sin(angle) * (35 + Math.random() * 70),
        life: 0.18 + Math.random() * 0.16,
        startLife: 0.34,
        color: Math.random() < 0.5 ? "#ff7a2f" : "#ffd15a",
        size: (projectile.fireball ? 18 : 10) + Math.random() * 10,
      });
    }
    if (Math.hypot(target.x - projectile.x, target.y - projectile.y) < target.radius + 5) {
      const owner = state.units.find((unit) => unit.id === projectile.ownerId);
      if (projectile.splash) {
        for (const unit of state.units) {
          if (unit.team === projectile.team || unit.dead) continue;
          const distance = Math.hypot(unit.x - projectile.x, unit.y - projectile.y);
          if (distance <= projectile.splash) {
            const falloff = 1 - distance / projectile.splash;
            hurt(unit, projectile.damage * (0.35 + falloff * 0.75), {
              x: projectile.x - Math.cos(angle),
              y: projectile.y - Math.sin(angle),
              knockback: 3.8,
              isRanged: true,
              applyBurn: projectile.applyBurn,
              fireDuration: projectile.fireDuration || 5,
              applyFreeze: projectile.applyFreeze,
              fireball: projectile.fireball,
              damageType: projectile.fireball ? "fireball" : projectile.applyBurn ? "fire" : projectile.applyFreeze ? "ice" : null,
              noKnockback: projectile.applyBurn,
              owner,
            });
          }
        }
        state.particles.push({
          x: projectile.x,
          y: projectile.y,
          life: projectile.fireball ? 0.95 : 0.7,
          color: projectile.fireball ? "#ff7838" : "#f0b24c",
          size: projectile.fireball ? 120 : 20,
        });
      } else {
        hurt(target, projectile.damage, {
          x: projectile.x - Math.cos(angle),
          y: projectile.y - Math.sin(angle),
          isRanged: true,
          applyBurn: projectile.applyBurn,
          fireDuration: projectile.fireDuration || 5,
          applyFreeze: projectile.applyFreeze,
          fireball: projectile.fireball,
          damageType: projectile.fireball ? "fireball" : projectile.applyBurn ? "fire" : projectile.applyFreeze ? "ice" : null,
          noKnockback: projectile.applyBurn,
          owner,
        });
      }
      if (owner && projectile.areaAttack) {
        applyAreaAttack(owner, projectile.x, projectile.y, projectile.areaAttack, true);
      }
      projectile.life = 0;
    }
  }
  state.projectiles = state.projectiles.filter((projectile) => projectile.life > 0);
}

function updateBuildings(dt) {
  for (const wall of state.walls) {
    const config = buildingTypes[wall.type];
    if (!config) continue;
    wall.cooldown = Math.max(0, (wall.cooldown || 0) - dt);
    if (wall.cooldown > 0) continue;
    const team = wall.team || "blue";
    if (wall.type === "goldMine") {
      if (state.challengeMode) continue;
      if (!state.sandbox && team === "blue" && state.phase === "battle") {
        state.budget += config.gold;
        state.particles.push({ x: wall.x, y: wall.y, life: 0.65, startLife: 0.65, color: "#ffd75a", size: 32 });
        updateUi();
      }
      wall.cooldown = config.cooldown;
      continue;
    }
    if (wall.type === "healTower") {
      let healed = false;
      for (const unit of state.units) {
        if (unit.team !== team || unit.dead || unit.hp >= unit.maxHp) continue;
        if (Math.hypot(unit.x - wall.x, unit.y - wall.y) > config.range + unit.radius) continue;
        unit.hp = Math.min(unit.maxHp, unit.hp + config.heal * dt * 2);
        healed = true;
      }
      if (healed) state.particles.push({ x: wall.x, y: wall.y, life: 0.22, startLife: 0.3, color: "#72f0a0", size: config.range });
      wall.cooldown = 0.5;
      continue;
    }
    let target = null;
    let bestDistance = Infinity;
    for (const unit of state.units) {
      if (unit.team === team || unit.dead || unit.airborneTimer > 0) continue;
      const distance = Math.hypot(unit.x - wall.x, unit.y - wall.y);
      if (distance < bestDistance && distance <= config.range + unit.radius) {
        target = unit;
        bestDistance = distance;
      }
    }
    if (!target) continue;
    state.projectiles.push({
      x: wall.x,
      y: wall.y - 10,
      tx: target.id,
      team,
      damage: config.damage,
      speed: wall.type === "cannonTower" ? 360 : 520,
      splash: config.splash || 0,
      radius: wall.type === "cannonTower" ? 7 : 3,
      life: wall.type === "cannonTower" ? 2.0 : 1.4,
      color: wall.type === "frostTower" ? "#9bdcff" : team === "blue" ? "#f0d19a" : "#ffb1a8",
      passWalls: true,
      applyFreeze: wall.type === "frostTower",
    });
    wall.cooldown = config.cooldown;
    state.particles.push({ x: wall.x, y: wall.y - 14, life: 0.16, startLife: 0.2, color: wall.type === "frostTower" ? "#9bdcff" : "#f7df9b", size: 12 });
  }
}

function updateParticles(dt) {
  for (const particle of state.particles) {
    particle.life -= dt;
    particle.x += (particle.vx || 0) * dt;
    particle.y += (particle.vy || 0) * dt;
    particle.vx = (particle.vx || 0) * 0.92;
    particle.vy = (particle.vy || 0) * 0.92;
  }
  state.particles = state.particles.filter((particle) => particle.life > 0);
}

function updateSlimes(dt) {
  for (const slime of state.slimes) {
    slime.life -= dt;
    for (const unit of state.units) {
      if (unit.team === slime.team || unit.dead) continue;
      if (Math.hypot(unit.x - slime.x, unit.y - slime.y) <= slime.radius + unit.radius) {
        poisonUnit(unit, slime.chaos ? 7 : 5);
        if (slime.chaos) {
          unit.hp -= unit.maxHp * 0.018 * dt;
          unit.vx *= 0.985;
          unit.vy *= 0.985;
          state.particles.push({ x: unit.x, y: unit.y, life: 0.18, color: "#2b112f", size: unit.radius * 1.4 });
          if (unit.hp <= 0) unit.dead = true;
        }
      }
    }
  }
  state.slimes = state.slimes.filter((slime) => slime.life > 0);
}

function tornadoControlFactor(unit) {
  let factor = 1;
  factor *= clamp(22 / Math.max(10, unit.radius || 16), 0.18, 1);
  factor *= clamp(180 / Math.max(60, unit.maxHp || 100), 0.2, 1);
  if (unit.skills?.knockbackImmune) factor *= 0.08;
  if (unit.skills?.tiamatBoss || unit.skills?.zombieBoss) factor *= 0.05;
  if (unit.maxHp >= 500 || unit.radius >= 32) factor *= 0.45;
  return clamp(factor, 0.03, 1);
}

function updateTornadoes(dt) {
  for (const tornado of state.tornadoes) {
    tornado.life -= dt;
    tornado.x += tornado.vx * dt;
    tornado.y += tornado.vy * dt;
    tornado.vx *= 0.992;
    tornado.vy *= 0.992;
    for (const wall of state.walls) {
      const closestX = clamp(tornado.x, wall.x - wall.w / 2, wall.x + wall.w / 2);
      const closestY = clamp(tornado.y, wall.y - wall.h / 2, wall.y + wall.h / 2);
      const distance = Math.hypot(tornado.x - closestX, tornado.y - closestY);
      if (distance > tornado.radius) continue;
      const effect = Math.max(0.25, 1 - distance / tornado.radius);
      damageWall(wall, 18 * effect * dt, closestX, closestY);
    }
    for (const unit of state.units) {
      if (unit.team === tornado.team || unit.dead) continue;
      const dx = tornado.x - unit.x;
      const dy = tornado.y - unit.y;
      const distance = Math.max(1, Math.hypot(dx, dy));
      if (distance > tornado.radius + unit.radius) continue;
      const effect = 1 - distance / (tornado.radius + unit.radius);
      const nx = dx / distance;
      const ny = dy / distance;
      const controlFactor = tornadoControlFactor(unit);
      if (controlFactor > 0.04) {
        const edgePressure = Math.max(0, distance / tornado.radius - 0.62);
        const poisonFactor = tornado.poison ? 0.72 : 1;
        const pull = (effect * 92 + edgePressure * 255) * controlFactor * poisonFactor;
        const orbit = (0.28 + effect * 0.42) * 360 * tornado.spin * controlFactor * poisonFactor;
        const tx = -ny;
        const ty = nx;
        unit.vx += (dx / distance) * pull * dt;
        unit.vy += (dy / distance) * pull * dt;
        unit.vx += tx * orbit * dt;
        unit.vy += ty * orbit * dt;
        const containment = 1 - Math.min(0.18, (0.045 + edgePressure * 0.18) * controlFactor * dt * 60);
        unit.vx *= containment;
        unit.vy *= containment;
        const carry = (0.18 + effect * 0.16) * controlFactor;
        unit.vx += tornado.vx * carry * 0.08;
        unit.vy += tornado.vy * carry * 0.08;
        unit.x += tornado.vx * carry * dt;
        unit.y += tornado.vy * carry * dt;
        const innerRadius = tornado.radius * 0.34;
        if (distance < innerRadius) {
          unit.vx -= nx * 90 * controlFactor * dt;
          unit.vy -= ny * 90 * controlFactor * dt;
        }
      }
      const element = tornado.element || (tornado.poison ? "poison" : "arcane");
      hurt(unit, (tornado.damage || 6) * dt, {
        x: tornado.x,
        y: tornado.y,
        knockback: 0.35,
        damageType: element === "fire" ? "fire" : element === "ice" ? "ice" : element === "poison" ? "poison" : element === "lightning" ? "magic" : "tornado",
        applyBurn: element === "fire",
        applyFreeze: element === "ice",
        noKnockback: element === "fire",
      });
      if (element === "poison") poisonUnit(unit, 5);
      if (element === "fire") burnUnit(unit, 2.5);
      if (element === "ice") freezeUnit(unit, 0.8);
      if (element === "lightning") unit.stasisTimer = Math.max(unit.stasisTimer || 0, 0.18);
    }
  }
  state.tornadoes = state.tornadoes.filter((tornado) => tornado.life > 0);
}

function checkWinner() {
  if (state.phase !== "battle" || state.winnerShown) return;
  if (isPvzMode()) {
    const blueAlive = state.units.some((unit) => unit.team === "blue" && !unit.dead);
    if (!blueAlive) {
      state.winnerShown = true;
      setPhase("ended");
      setToast(state.language === "zh" ? `僵尸胜利！你坚持到第 ${state.pvzWave} 波` : `Zombies win! You reached wave ${state.pvzWave}`);
    }
    return;
  }
  const blueAlive = state.units.some((unit) => unit.team === "blue" && !unit.dead);
  const redAlive = state.units.some((unit) => unit.team === "red" && !unit.dead);
  if (blueAlive && redAlive) return;
  state.winnerShown = true;
  setPhase("ended");
  const text = translations[state.language] || translations.en;
  const units = state.units.filter((unit) => unit.statsDamage > 0 || unit.statsKills > 0);
  const topDamage = units.reduce((best, unit) => (!best || unit.statsDamage > best.statsDamage ? unit : best), null);
  const topKills = units.reduce((best, unit) => (!best || unit.statsKills > best.statsKills ? unit : best), null);
  const bestValue = units.reduce((best, unit) => {
    const price = Math.max(1, typeById(unit.typeId)?.price || 100);
    const value = unit.statsDamage / price;
    return !best || value > best.value ? { unit, value } : best;
  }, null);
  const statsText = topDamage
    ? state.language === "zh"
      ? ` 最高伤害:${topDamage.name} ${Math.round(topDamage.statsDamage)} 击杀:${topKills?.name || "-"} ${topKills?.statsKills || 0} 最值:${bestValue?.unit.name || "-"}`
      : ` Top damage:${topDamage.name} ${Math.round(topDamage.statsDamage)} Kills:${topKills?.name || "-"} ${topKills?.statsKills || 0} Best value:${bestValue?.unit.name || "-"}`
    : "";
  state.battleStats = { topDamage: topDamage?.id, topKills: topKills?.id, bestValue: bestValue?.unit.id };
  let levelText = "";
  if (blueAlive && state.levelMode && state.currentLevel > 0) {
    const nextLevel = Math.min(levelDefinitions.length, state.currentLevel + 1);
    const firstClear = !state.clearedLevels.has(state.currentLevel);
    if (firstClear) {
      const reward = upgradePointReward(state.currentLevel);
      state.clearedLevels.add(state.currentLevel);
      saveClearedLevels(state.clearedLevels);
      state.upgradePoints += reward;
      saveUpgradePoints(state.upgradePoints);
      levelText += ` ${text.upgradePointEarned}: +${reward}`;
      state.pendingRewardChoices = makeRewardChoices(state.currentLevel);
      renderRewardModal();
    }
    if (nextLevel > state.unlockedLevel) {
      state.unlockedLevel = nextLevel;
      saveUnlockedLevel(state.unlockedLevel);
      renderLevelSelect();
      levelText += state.currentLevel === levelDefinitions.length ? ` ${text.levelWin}` : ` ${text.levelUnlocked}: ${nextLevel}`;
    } else {
      levelText += ` ${text.levelWin}`;
    }
  }
  setToast(`${blueAlive ? text.blueWin : text.redWin}${levelText}${statsText}`);
}

function update(dt) {
  syncLanguage();
  const speed = Number(speedSlider.value) / 100;
  const scaledDt = Math.min(0.033, dt * speed);
  if (state.phase === "battle") {
    updateCommands(scaledDt);
    updateFocusTargets(scaledDt);
    for (const unit of state.units) updateUnit(unit, scaledDt);
    resolveCrowding();
    updateBuildings(scaledDt);
    updateProjectiles(scaledDt);
    updateSlimes(scaledDt);
    updateTornadoes(scaledDt);
    updatePvzEndless(scaledDt);
    checkWinner();
  }
  updateParticles(scaledDt);
  state.units = state.units.filter((unit) => !unit.dead || unit.hp > -80);
  updateUi();
}

function drawGround() {
  if (isPvzMode()) {
    ctx.fillStyle = "#24443a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(66, 137, 92, 0.34)";
    ctx.fillRect(PVZ_GRID.left, PVZ_GRID.top, PVZ_GRID.right - PVZ_GRID.left, PVZ_GRID.bottom - PVZ_GRID.top);
    ctx.fillStyle = "rgba(102, 74, 45, 0.42)";
    ctx.fillRect(PVZ_GRID.right, 0, canvas.width - PVZ_GRID.right, canvas.height);
    ctx.fillStyle = "rgba(26, 55, 43, 0.46)";
    ctx.fillRect(0, 0, PVZ_GRID.left, canvas.height);
    ctx.strokeStyle = "rgba(247, 233, 157, 0.5)";
    ctx.lineWidth = 3;
    ctx.setLineDash([10, 10]);
    ctx.beginPath();
    ctx.moveTo(PVZ_GRID.right, 0);
    ctx.lineTo(PVZ_GRID.right, canvas.height);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.globalAlpha = 0.16;
    ctx.strokeStyle = "#f4f0e8";
    for (let x = 64; x < canvas.width; x += 64) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 64; y < canvas.height; y += 64) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    return;
  }
  ctx.fillStyle = "#394331";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(77, 163, 255, 0.14)";
  ctx.fillRect(0, 0, blueZone(), canvas.height);
  ctx.fillStyle = "rgba(255, 98, 95, 0.12)";
  ctx.fillRect(canvas.width * 0.54, 0, canvas.width * 0.46, canvas.height);
  ctx.strokeStyle = "rgba(244, 240, 232, 0.2)";
  ctx.lineWidth = 3;
  ctx.setLineDash([14, 14]);
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.globalAlpha = 0.16;
  ctx.strokeStyle = "#f4f0e8";
  for (let x = 64; x < canvas.width; x += 64) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  for (let y = 64; y < canvas.height; y += 64) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
}
function drawPvzGrid() {
  if (!isPvzMode()) return;
  const size = pvzCellSize();
  ctx.save();
  for (let row = 0; row < PVZ_GRID.rows; row += 1) {
    for (let col = 0; col < PVZ_GRID.cols; col += 1) {
      const x = PVZ_GRID.left + col * size.w;
      const y = PVZ_GRID.top + row * size.h;
      if (pvzCellUnlocked(col, row)) {
        ctx.fillStyle = row % 2 === 0 ? "rgba(117, 226, 123, 0.24)" : "rgba(86, 193, 103, 0.2)";
        ctx.fillRect(x + 3, y + 3, size.w - 6, size.h - 6);
        continue;
      }
      ctx.fillStyle = "rgba(3, 6, 7, 0.78)";
      ctx.fillRect(x + 3, y + 3, size.w - 6, size.h - 6);
      ctx.strokeStyle = "rgba(255, 105, 105, 0.42)";
      ctx.lineWidth = 2;
      ctx.strokeRect(x + 8, y + 8, size.w - 16, size.h - 16);
      ctx.fillStyle = "rgba(255, 244, 173, 0.82)";
      ctx.font = "800 13px Inter, Arial";
      ctx.textAlign = "center";
      ctx.fillText(state.language === "zh" ? "未买" : "LOCK", x + size.w / 2, y + size.h * 0.56);
    }
  }
  ctx.strokeStyle = "rgba(198, 255, 158, 0.9)";
  ctx.lineWidth = 3;
  for (let col = 0; col <= PVZ_GRID.cols; col += 1) {
    const x = PVZ_GRID.left + col * size.w;
    ctx.beginPath();
    ctx.moveTo(x, PVZ_GRID.top);
    ctx.lineTo(x, PVZ_GRID.bottom);
    ctx.stroke();
  }
  for (let row = 0; row <= PVZ_GRID.rows; row += 1) {
    const y = PVZ_GRID.top + row * size.h;
    ctx.beginPath();
    ctx.moveTo(PVZ_GRID.left, y);
    ctx.lineTo(PVZ_GRID.right, y);
    ctx.stroke();
  }
  ctx.fillStyle = "rgba(255, 244, 173, 0.92)";
  ctx.font = "700 18px Inter, Arial";
  ctx.textAlign = "center";
  ctx.fillText(state.language === "zh" ? "植物格子：按数量放置" : "Plant grid: place by count", (PVZ_GRID.left + PVZ_GRID.right) / 2, PVZ_GRID.top - 18);
  ctx.fillText(state.language === "zh" ? "僵尸从这里来" : "Zombies enter here", PVZ_GRID.right + (canvas.width - PVZ_GRID.right) / 2, PVZ_GRID.top - 18);
  ctx.restore();
}
function drawTerrains() {
  for (const terrain of state.terrains) {
    const colors = {
      water: ["rgba(78, 168, 255, 0.38)", "#9bdcff"],
      fire: ["rgba(255, 108, 54, 0.34)", "#ffcf5a"],
      grass: ["rgba(92, 194, 92, 0.28)", "#b7f08a"],
      high: ["rgba(190, 173, 124, 0.32)", "#f0dfae"],
    };
    const [fill, stroke] = colors[terrain.type] || colors.water;
    ctx.save();
    ctx.fillStyle = fill;
    ctx.strokeStyle = stroke;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(terrain.x, terrain.y, terrain.radius, terrain.radius * 0.58, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
}

function drawWalls() {
  for (const wall of state.walls) {
    ctx.save();
    ctx.translate(wall.x, wall.y);
    if (buildingTypes[wall.type]) {
      const r = Math.max(wall.w, wall.h) / 2;
      const buildingColors = {
        arrowTower: ["#4d3a24", "#9f7245", "AT"],
        cannonTower: ["#383834", "#777067", "CN"],
        healTower: ["#24563c", "#68ce88", "+"],
        frostTower: ["#26475f", "#86d8ff", "F"],
        goldMine: ["#5c4722", "#e2b84f", "$"],
      };
      const [base, top, label] = buildingColors[wall.type] || buildingColors.arrowTower;
      ctx.fillStyle = wall.team === "red" ? "#5d352b" : base;
      ctx.fillRect(-r * 0.58, -r * 0.15, r * 1.16, r * 1.18);
      ctx.fillStyle = wall.team === "red" ? "#a96352" : top;
      ctx.fillRect(-r * 0.78, -r * 0.66, r * 1.56, r * 0.5);
      ctx.fillStyle = "#2d2118";
      for (let i = -1; i <= 1; i += 1) {
        ctx.fillRect(i * r * 0.44 - r * 0.08, -r * 0.92, r * 0.16, r * 0.36);
      }
      ctx.strokeStyle = wall.type === "frostTower" ? "#d9f6ff" : wall.type === "healTower" ? "#d4ffd8" : "#f0d19a";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(-r * 0.5, -r * 0.34);
      ctx.lineTo(r * 0.5, -r * 0.34);
      ctx.moveTo(0, -r * 0.54);
      ctx.lineTo(wall.type === "healTower" || wall.type === "goldMine" ? 0 : r * 0.86, -r * 0.54);
      ctx.moveTo(0, -r * 0.38);
      ctx.lineTo(wall.type === "healTower" || wall.type === "goldMine" ? 0 : r * 0.84, -r * 0.18);
      ctx.stroke();
      if (wall.type === "cannonTower") {
        ctx.fillStyle = "#1e1d1b";
        ctx.fillRect(r * 0.1, -r * 0.58, r * 0.85, r * 0.22);
      }
      ctx.fillStyle = wall.team === "red" ? "#ffb1a8" : "#f7df9b";
      if (wall.type === "arrowTower") {
        ctx.beginPath();
        ctx.moveTo(r * 1.05, -r * 0.54);
        ctx.lineTo(r * 0.68, -r * 0.7);
        ctx.lineTo(r * 0.74, -r * 0.38);
        ctx.closePath();
        ctx.fill();
      }
      ctx.fillStyle = "#fff4d0";
      ctx.font = `${Math.max(12, r * 0.52)}px Arial`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(label, 0, r * 0.18);
      const health = Math.max(0, (wall.hp ?? wallMaxHp(wall)) / (wall.maxHp ?? wallMaxHp(wall)));
      ctx.globalAlpha = 0.9;
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      ctx.fillRect(-r, -r - 12, r * 2, 4);
      ctx.fillStyle = health > 0.45 ? "#63d28a" : "#e8bd57";
      ctx.fillRect(-r, -r - 12, r * 2 * health, 4);
      ctx.restore();
      continue;
    }
    ctx.fillStyle = wall.type === "unbreakable" ? "#1f2935" : wall.type === "thick" ? "#4b4940" : wall.type === "arrow" ? "rgba(73, 96, 104, 0.62)" : "#5a564b";
    ctx.fillRect(-wall.w / 2, -wall.h / 2, wall.w, wall.h);
    ctx.strokeStyle = wall.type === "unbreakable" ? "#8ee7ff" : wall.type === "thick" ? "#f0dfae" : wall.type === "arrow" ? "#9bdcff" : "#d8d0a8";
    ctx.lineWidth = wall.type === "unbreakable" ? 6 : wall.type === "thick" ? 5 : 3;
    ctx.strokeRect(-wall.w / 2, -wall.h / 2, wall.w, wall.h);
    ctx.globalAlpha = 0.35;
    ctx.strokeStyle = "#211f1a";
    for (let x = -wall.w / 2 + 18; x < wall.w / 2; x += 24) {
      ctx.beginPath();
      ctx.moveTo(x, -wall.h / 2);
      ctx.lineTo(x - 12, wall.h / 2);
      ctx.stroke();
    }
    const health = Math.max(0, (wall.hp ?? wallMaxHp(wall)) / (wall.maxHp ?? wallMaxHp(wall)));
    ctx.globalAlpha = 0.9;
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(-wall.w / 2, -wall.h / 2 - 8, wall.w, 4);
    ctx.fillStyle = health > 0.45 ? "#63d28a" : "#e8bd57";
    ctx.fillRect(-wall.w / 2, -wall.h / 2 - 8, wall.w * health, 4);
    ctx.restore();
  }
  for (const [team, command] of Object.entries(state.commands)) {
    if (!command) continue;
    ctx.save();
    ctx.translate(command.x, command.y);
    ctx.strokeStyle = team === "blue" ? "#6bbcff" : "#ff706c";
    ctx.fillStyle = team === "blue" ? "rgba(107, 188, 255, 0.18)" : "rgba(255, 112, 108, 0.18)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, -26);
    ctx.lineTo(0, 8);
    ctx.lineTo(18, 2);
    ctx.lineTo(0, -6);
    ctx.stroke();
    ctx.restore();
  }
  for (const [team, focus] of Object.entries(state.focusTargets)) {
    if (!focus) continue;
    const target = state.units.find((unit) => unit.id === focus.id && !unit.dead);
    if (!target) continue;
    ctx.save();
    ctx.translate(target.x, target.y - target.radius - 18);
    ctx.strokeStyle = team === "blue" ? "#6bbcff" : "#ff706c";
    ctx.fillStyle = "rgba(10, 13, 18, 0.52)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-21, 0);
    ctx.lineTo(-8, 0);
    ctx.moveTo(8, 0);
    ctx.lineTo(21, 0);
    ctx.moveTo(0, -21);
    ctx.lineTo(0, -8);
    ctx.moveTo(0, 8);
    ctx.lineTo(0, 21);
    ctx.stroke();
    ctx.restore();
  }
  if (isWallBuildTool() && state.wallStart && state.pointer) {
    const dx = state.pointer.x - state.wallStart.x;
    const dy = state.pointer.y - state.wallStart.y;
    const horizontal = Math.abs(dx) >= Math.abs(dy);
    const end = horizontal ? { x: state.pointer.x, y: state.wallStart.y } : { x: state.wallStart.x, y: state.pointer.y };
    ctx.save();
    ctx.strokeStyle = state.mapTool === "thickWall" ? "#d8d0a8" : state.mapTool === "unbreakableWall" ? "#8ee7ff" : state.mapTool === "arrowWall" ? "#9bdcff" : "#e8bd57";
    ctx.lineWidth = state.mapTool === "unbreakableWall" ? 7 : state.mapTool === "thickWall" ? 10 : state.mapTool === "arrowWall" ? 4 : 5;
    ctx.setLineDash([10, 8]);
    ctx.beginPath();
    ctx.moveTo(state.wallStart.x, state.wallStart.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "#e8bd57";
    ctx.beginPath();
    ctx.arc(state.wallStart.x, state.wallStart.y, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

function drawUnit(unit) {
  const stasisSource = unit.stasisTimer > 0 ? state.units.find((other) => other.id === unit.stasisSourceId && !other.dead) : null;
  const faceAngle = stasisSource ? Math.atan2(stasisSource.y - unit.y, stasisSource.x - unit.x) : 0;
  const stasisShake = unit.stasisTimer > 0 ? Math.sin(performance.now() / 42 + unit.id) * 0.82 : 0;
  const stasisSlide = unit.stasisTimer > 0 ? Math.sin(performance.now() / 35 + unit.id * 1.7) * 8 : 0;
  const airProgress = unit.airborneTotal > 0 ? 1 - unit.airborneTimer / unit.airborneTotal : 0;
  const airHeight = unit.airborneTimer > 0 ? Math.sin(airProgress * Math.PI) * 82 + 26 : 0;
  const tilt = unit.airborneTimer > 0 ? performance.now() / 90 : unit.stasisTimer > 0 ? stasisShake : Math.sin(unit.wobble) * (unit.dead ? 0.7 : 0.18);
  ctx.save();
  ctx.translate(unit.x + stasisSlide, unit.y);
  ctx.globalAlpha = unit.dead ? 0.45 : 1;
  ctx.fillStyle = "rgba(0, 0, 0, 0.28)";
  ctx.beginPath();
  ctx.ellipse(3, unit.radius * 0.86, unit.radius * (unit.airborneTimer > 0 ? 1.35 : 1.1), unit.radius * (unit.airborneTimer > 0 ? 0.24 : 0.42), 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.translate(0, -airHeight);
  ctx.rotate(faceAngle + tilt);
  if (!unit.dead && unit.airborneTimer > 0) {
    ctx.strokeStyle = "#d7ecff";
    ctx.lineWidth = 4;
    for (let i = 0; i < 3; i += 1) {
      ctx.beginPath();
      ctx.ellipse(0, i * 7 - 5, unit.radius * (1.25 + i * 0.22), unit.radius * 0.38, performance.now() / (220 - i * 35), 0, Math.PI * 2);
      ctx.stroke();
    }
  }
  if (!unit.dead && state.controlledId === unit.id) {
    ctx.strokeStyle = "#fff36d";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(0, 0, unit.radius + 22, 0, Math.PI * 2);
    ctx.stroke();
  }
  if (!unit.dead && unit.skills.holyShield) {
    const shieldRange = unit.skills.holyShieldRange ?? 160;
    ctx.save();
    ctx.globalAlpha = 0.16;
    ctx.fillStyle = "#ffeaa0";
    ctx.beginPath();
    ctx.arc(0, 0, shieldRange, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 0.7;
    ctx.strokeStyle = "#fff0a8";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.restore();
  }
  if (!unit.dead && unit.skills.tiamatBoss && unit.tiamatBarrierTimer > 0) {
    ctx.save();
    ctx.globalAlpha = 0.22 + Math.sin(performance.now() / 90) * 0.08;
    ctx.fillStyle = "#fff0a8";
    ctx.beginPath();
    ctx.arc(0, 0, unit.radius + 34, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 0.78;
    ctx.strokeStyle = "#c48cff";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(0, 0, unit.radius + 38, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }
  if (unit.typeId === "tiamat" && tiamatSprite.complete && tiamatSprite.naturalWidth > 0) {
    const spriteWidth = unit.radius * 6.7;
    const spriteHeight = spriteWidth * (tiamatSprite.naturalHeight / tiamatSprite.naturalWidth);
    ctx.drawImage(tiamatSprite, -spriteWidth / 2, -spriteHeight * 0.56, spriteWidth, spriteHeight);
    ctx.restore();
    if (!unit.dead) {
      const barWidth = unit.radius * 2;
      const health = Math.max(0, unit.hp / unit.maxHp);
      ctx.fillStyle = "rgba(0, 0, 0, 0.38)";
      ctx.fillRect(unit.x - barWidth / 2, unit.y - unit.radius - 12, barWidth, 4);
      ctx.fillStyle = health > 0.42 ? "#63d28a" : "#e8bd57";
      ctx.fillRect(unit.x - barWidth / 2, unit.y - unit.radius - 12, barWidth * health, 4);
    }
    return;
  }
  ctx.fillStyle = unit.color;
  ctx.beginPath();
  ctx.arc(0, 0, unit.radius, 0, Math.PI * 2);
  ctx.fill();
  drawUnitSkin(unit);
  if (!unit.dead && unit.berserked) {
    ctx.strokeStyle = "#ffcf5f";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, unit.radius + 4, 0, Math.PI * 2);
    ctx.stroke();
  }
  if (!unit.dead && unit.burnTimer > 0) {
    ctx.strokeStyle = "#ff8a38";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, unit.radius + 7, Math.PI * 0.1, Math.PI * 1.75);
    ctx.stroke();
  }
  if (!unit.dead && unit.freezeTimer > 0) {
    ctx.strokeStyle = "#9bdcff";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, unit.radius + 10, 0, Math.PI * 2);
    ctx.stroke();
  }
  if (!unit.dead && unit.defensePotionTimer > 0) {
    ctx.strokeStyle = "#ffeaa0";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, unit.radius + 13, 0, Math.PI * 2);
    ctx.stroke();
  }
  if (!unit.dead && unit.powerPotionTimer > 0) {
    ctx.strokeStyle = "#ff6d6d";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, unit.radius + 16, Math.PI * 0.12, Math.PI * 1.75);
    ctx.stroke();
  }
  if (!unit.dead && unit.speedPotionTimer > 0) {
    ctx.strokeStyle = "#7cff9c";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, unit.radius + 19, Math.PI * 1.25, Math.PI * 0.75);
    ctx.stroke();
  }
  if (!unit.dead && unit.stasisTimer > 0) {
    ctx.strokeStyle = "#80c8ff";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(0, 0, unit.radius + 14, 0, Math.PI * 2);
    ctx.stroke();
  }
  if (!unit.dead && unit.infectionTimer > 0) {
    const pulse = 0.55 + Math.sin(performance.now() / 120) * 0.25;
    ctx.strokeStyle = "#83d96f";
    ctx.lineWidth = 4;
    ctx.globalAlpha = pulse;
    ctx.beginPath();
    ctx.arc(0, 0, unit.radius + 17, 0, Math.PI * 2);
    ctx.stroke();
    ctx.globalAlpha = unit.dead ? 0.45 : 1;
  }
  ctx.fillStyle = unit.team === "blue" ? "#0b2038" : "#3b1010";
  ctx.beginPath();
  ctx.arc(-unit.radius * 0.33, -unit.radius * 0.2, unit.radius * 0.13, 0, Math.PI * 2);
  ctx.arc(unit.radius * 0.33, -unit.radius * 0.2, unit.radius * 0.13, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = unit.team === "blue" ? "#d7ecff" : "#ffd6d4";
  ctx.lineWidth = Math.max(3, unit.radius * 0.22);
  ctx.beginPath();
  if (unit.weapon === "shield") {
    ctx.arc(0, 3, unit.radius * 0.72, 0, Math.PI);
  } else if (unit.weapon === "spear") {
    ctx.moveTo(unit.radius * 0.4, 0);
    ctx.lineTo(unit.radius * 1.6, -unit.radius * 0.55);
  } else if (unit.weapon === "bow") {
    ctx.arc(unit.radius * 0.5, 0, unit.radius * 0.75, -1.2, 1.2);
  } else if (unit.weapon === "musket" || unit.weapon === "cannon") {
    ctx.moveTo(unit.radius * 0.35, 0);
    ctx.lineTo(unit.radius * 1.75, 0);
  } else if (unit.weapon === "hammer") {
    ctx.moveTo(unit.radius * 0.45, unit.radius * 0.15);
    ctx.lineTo(unit.radius * 1.2, -unit.radius * 0.45);
    ctx.moveTo(unit.radius * 1.05, -unit.radius * 0.72);
    ctx.lineTo(unit.radius * 1.42, -unit.radius * 0.25);
  } else {
    ctx.moveTo(unit.radius * 0.45, unit.radius * 0.2);
    ctx.lineTo(unit.radius * 1.25, -unit.radius * 0.55);
  }
  ctx.stroke();
  ctx.restore();

  if (!unit.dead) {
    const barWidth = unit.radius * 2;
    const health = Math.max(0, unit.hp / unit.maxHp);
    ctx.fillStyle = "rgba(0, 0, 0, 0.38)";
    ctx.fillRect(unit.x - barWidth / 2, unit.y - unit.radius - 12, barWidth, 4);
    ctx.fillStyle = health > 0.42 ? "#63d28a" : "#e8bd57";
    ctx.fillRect(unit.x - barWidth / 2, unit.y - unit.radius - 12, barWidth * health, 4);
  }
}

function drawUnitSkin(unit) {
  const r = unit.radius;
  ctx.save();
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  if (unit.typeId === "shield" || unit.typeId === "knight") {
    ctx.fillStyle = unit.typeId === "knight" ? "#d8d0a8" : "#d9edf8";
    ctx.beginPath();
    ctx.moveTo(-r * 0.72, -r * 0.15);
    ctx.quadraticCurveTo(0, -r * 0.78, r * 0.72, -r * 0.15);
    ctx.lineTo(r * 0.48, r * 0.56);
    ctx.quadraticCurveTo(0, r * 0.88, -r * 0.48, r * 0.56);
    ctx.closePath();
    ctx.fill();
  }
  if (unit.typeId === "knight" || unit.typeId === "giant") {
    ctx.strokeStyle = "#f2e7b5";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-r * 0.62, -r * 0.76);
    ctx.lineTo(0, -r * 1.05);
    ctx.lineTo(r * 0.62, -r * 0.76);
    ctx.stroke();
  }
  if (unit.typeId === "assassin") {
    ctx.fillStyle = "#171923";
    ctx.beginPath();
    ctx.moveTo(-r * 0.88, -r * 0.22);
    ctx.lineTo(r * 0.88, -r * 0.22);
    ctx.lineTo(r * 0.54, r * 0.34);
    ctx.lineTo(-r * 0.54, r * 0.34);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#d9c5ff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-r * 0.38, -r * 0.06);
    ctx.lineTo(r * 0.38, -r * 0.06);
    ctx.stroke();
  }
  if (unit.typeId === "archer" || unit.typeId === "crossbow") {
    ctx.strokeStyle = "#5b3b22";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-r * 0.7, r * 0.62);
    ctx.lineTo(r * 0.7, -r * 0.72);
    ctx.stroke();
    if (unit.typeId === "crossbow") {
      ctx.strokeStyle = "#efe1b0";
      ctx.beginPath();
      ctx.moveTo(-r * 0.8, -r * 0.1);
      ctx.lineTo(r * 0.8, -r * 0.1);
      ctx.moveTo(0, -r * 0.42);
      ctx.lineTo(0, r * 0.42);
      ctx.stroke();
    }
  }
  if (unit.typeId === "poisoner") {
    ctx.fillStyle = "#4de06f";
    ctx.beginPath();
    ctx.arc(-r * 0.62, r * 0.3, r * 0.28, 0, Math.PI * 2);
    ctx.arc(r * 0.62, r * 0.3, r * 0.28, 0, Math.PI * 2);
    ctx.fill();
  }
  if (unit.typeId === "stormcaller") {
    ctx.strokeStyle = "#eaf1ff";
    ctx.lineWidth = 2;
    for (let i = 0; i < 3; i += 1) {
      ctx.beginPath();
      ctx.arc(0, 0, r * (0.78 + i * 0.18), Math.PI * 0.1, Math.PI * 1.75);
      ctx.stroke();
    }
  }
  if (unit.typeId === "hydra") {
    ctx.fillStyle = "#7b2432";
    for (const offset of [-0.62, 0, 0.62]) {
      ctx.beginPath();
      ctx.arc(r * offset, -r * 0.72, r * 0.34, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#ffc36d";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(r * offset - r * 0.14, -r * 1.02);
      ctx.lineTo(r * offset, -r * 1.34);
      ctx.lineTo(r * offset + r * 0.14, -r * 1.02);
      ctx.stroke();
    }
    ctx.fillStyle = "#4a1420";
    ctx.beginPath();
    ctx.moveTo(-r * 1.35, r * 0.12);
    ctx.lineTo(-r * 0.35, -r * 0.7);
    ctx.lineTo(-r * 0.12, r * 0.45);
    ctx.closePath();
    ctx.moveTo(r * 1.35, r * 0.12);
    ctx.lineTo(r * 0.35, -r * 0.7);
    ctx.lineTo(r * 0.12, r * 0.45);
    ctx.closePath();
    ctx.fill();
  }
  if (unit.typeId === "voidbinder") {
    ctx.strokeStyle = "#d8c2ff";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, r * 1.08, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = "#6bffef";
    ctx.lineWidth = 2;
    for (let i = 0; i < 4; i += 1) {
      const a = i * Math.PI * 0.5 + performance.now() / 900;
      ctx.beginPath();
      ctx.moveTo(Math.cos(a) * r * 0.55, Math.sin(a) * r * 0.55);
      ctx.lineTo(Math.cos(a) * r * 1.35, Math.sin(a) * r * 1.35);
      ctx.stroke();
    }
    ctx.fillStyle = "#1b133d";
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.45, 0, Math.PI * 2);
    ctx.fill();
  }
  if (unit.typeId === "wallcrusher") {
    ctx.fillStyle = "#3f3b32";
    ctx.fillRect(r * 0.55, -r * 0.82, r * 1.05, r * 0.78);
    ctx.strokeStyle = "#f0dfae";
    ctx.lineWidth = 4;
    ctx.strokeRect(r * 0.55, -r * 0.82, r * 1.05, r * 0.78);
    ctx.strokeStyle = "#2f2a20";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(-r * 0.76, r * 0.72);
    ctx.lineTo(r * 0.86, -r * 0.42);
    ctx.stroke();
    ctx.fillStyle = "#d8d0a8";
    ctx.fillRect(-r * 0.74, r * 0.26, r * 0.52, r * 0.28);
  }
  if (unit.typeId === "phoenixguard") {
    ctx.fillStyle = "#ffcf5f";
    ctx.beginPath();
    ctx.moveTo(-r * 1.38, r * 0.2);
    ctx.quadraticCurveTo(-r * 0.75, -r * 1.3, -r * 0.12, -r * 0.12);
    ctx.quadraticCurveTo(-r * 0.6, -r * 0.05, -r * 1.38, r * 0.2);
    ctx.moveTo(r * 1.38, r * 0.2);
    ctx.quadraticCurveTo(r * 0.75, -r * 1.3, r * 0.12, -r * 0.12);
    ctx.quadraticCurveTo(r * 0.6, -r * 0.05, r * 1.38, r * 0.2);
    ctx.fill();
    ctx.strokeStyle = "#fff0a8";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, -r * 0.08, r * 0.82, Math.PI * 0.15, Math.PI * 1.85);
    ctx.stroke();
  }
  if (unit.typeId === "stormlancer") {
    ctx.strokeStyle = "#bde7ff";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(-r * 0.45, r * 0.72);
    ctx.lineTo(r * 1.15, -r * 0.92);
    ctx.stroke();
    ctx.strokeStyle = "#fff36d";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(r * 0.1, -r * 0.1);
    ctx.lineTo(r * 0.45, -r * 0.46);
    ctx.lineTo(r * 0.28, -r * 0.48);
    ctx.lineTo(r * 0.76, -r * 0.94);
    ctx.stroke();
    ctx.strokeStyle = "#75d7ff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, r * 1.05, Math.PI * 0.2, Math.PI * 1.65);
    ctx.stroke();
  }
  if (unit.typeId === "whirlhammer") {
    ctx.strokeStyle = "#d7ecff";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, r * 1.05, Math.PI * 0.12, Math.PI * 1.72);
    ctx.stroke();
    ctx.fillStyle = "#5f6f96";
    ctx.fillRect(r * 0.7, -r * 0.82, r * 0.82, r * 0.58);
    ctx.strokeStyle = "#f0dfae";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(-r * 0.55, r * 0.62);
    ctx.lineTo(r * 0.95, -r * 0.52);
    ctx.stroke();
  }
  if (unit.typeId === "bomber" || unit.typeId === "cannon") {
    ctx.fillStyle = "#2d3036";
    ctx.fillRect(-r * 0.62, -r * 0.28, r * 1.24, r * 0.56);
    ctx.fillStyle = "#ffcf5f";
    ctx.beginPath();
    ctx.arc(r * 0.58, -r * 0.28, r * 0.16, 0, Math.PI * 2);
    ctx.fill();
  }
  if (unit.typeId === "musketeer") {
    ctx.strokeStyle = "#47351e";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(-r * 0.62, r * 0.62);
    ctx.lineTo(r * 0.9, -r * 0.72);
    ctx.stroke();
  }
  if (unit.typeId === "berserker") {
    ctx.strokeStyle = "#ffe08a";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-r * 0.7, -r * 0.8);
    ctx.lineTo(-r * 0.35, -r * 1.12);
    ctx.moveTo(r * 0.7, -r * 0.8);
    ctx.lineTo(r * 0.35, -r * 1.12);
    ctx.stroke();
  }
  if (unit.typeId === "wolf") {
    ctx.fillStyle = "#253241";
    ctx.beginPath();
    ctx.moveTo(-r * 0.78, -r * 0.58);
    ctx.lineTo(-r * 0.34, -r * 1.08);
    ctx.lineTo(-r * 0.08, -r * 0.54);
    ctx.lineTo(r * 0.18, -r * 0.54);
    ctx.lineTo(r * 0.48, -r * 1.02);
    ctx.lineTo(r * 0.78, -r * 0.5);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#e8f0ff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-r * 0.42, r * 0.36);
    ctx.lineTo(-r * 0.2, r * 0.68);
    ctx.moveTo(r * 0.42, r * 0.36);
    ctx.lineTo(r * 0.2, r * 0.68);
    ctx.stroke();
  }
  if (unit.typeId === "slimebeast") {
    ctx.fillStyle = "rgba(135, 255, 158, 0.55)";
    ctx.beginPath();
    ctx.ellipse(0, r * 0.05, r * 0.92, r * 0.68, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#17452a";
    ctx.beginPath();
    ctx.arc(-r * 0.28, -r * 0.12, r * 0.12, 0, Math.PI * 2);
    ctx.arc(r * 0.28, -r * 0.12, r * 0.12, 0, Math.PI * 2);
    ctx.fill();
  }
  if (unit.typeId === "zombie" || unit.typeId === "coneheadzombie" || unit.typeId === "bucketzombie" || unit.typeId === "footballzombie" || unit.typeId === "giantzombie" || unit.typeId === "armoredgiantzombie") {
    ctx.fillStyle = "#2d5b35";
    ctx.beginPath();
    ctx.arc(-r * 0.3, -r * 0.18, r * 0.12, 0, Math.PI * 2);
    ctx.arc(r * 0.3, -r * 0.18, r * 0.12, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#dff5c8";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-r * 0.72, r * 0.22);
    ctx.lineTo(-r * 1.16, r * 0.72);
    ctx.moveTo(r * 0.72, r * 0.22);
    ctx.lineTo(r * 1.16, r * 0.72);
    ctx.moveTo(-r * 0.42, -r * 0.68);
    ctx.lineTo(r * 0.42, -r * 0.68);
    ctx.stroke();
    ctx.fillStyle = "#83d96f";
    ctx.beginPath();
    ctx.arc(0, r * 0.34, r * 0.18, 0, Math.PI * 2);
    ctx.fill();
    if (unit.typeId === "coneheadzombie") {
      ctx.fillStyle = "#e8872f";
      ctx.beginPath();
      ctx.moveTo(-r * 0.44, -r * 0.76);
      ctx.lineTo(0, -r * 1.42);
      ctx.lineTo(r * 0.44, -r * 0.76);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = "#ffd37a";
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    if (unit.typeId === "bucketzombie") {
      ctx.fillStyle = "#9ca6ad";
      ctx.fillRect(-r * 0.52, -r * 1.22, r * 1.04, r * 0.52);
      ctx.strokeStyle = "#e7eef2";
      ctx.lineWidth = 3;
      ctx.strokeRect(-r * 0.52, -r * 1.22, r * 1.04, r * 0.52);
      ctx.fillStyle = "#5b646a";
      ctx.fillRect(-r * 0.36, -r * 1.05, r * 0.72, r * 0.12);
    }
    if (unit.typeId === "footballzombie") {
      ctx.fillStyle = "#202733";
      ctx.beginPath();
      ctx.arc(0, -r * 0.82, r * 0.56, Math.PI, Math.PI * 2);
      ctx.lineTo(r * 0.52, -r * 0.64);
      ctx.lineTo(-r * 0.52, -r * 0.64);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = "#f4f7ff";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-r * 0.42, -r * 0.86);
      ctx.lineTo(r * 0.42, -r * 0.86);
      ctx.stroke();
      ctx.fillStyle = "#1d2630";
      ctx.fillRect(-r * 0.88, -r * 0.04, r * 0.36, r * 0.34);
      ctx.fillRect(r * 0.52, -r * 0.04, r * 0.36, r * 0.34);
    }
    if (unit.typeId === "giantzombie" || unit.typeId === "armoredgiantzombie") {
      ctx.fillStyle = unit.typeId === "armoredgiantzombie" ? "#22272a" : "#31472f";
      ctx.beginPath();
      ctx.ellipse(0, r * 0.08, r * 0.78, r * 1.02, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#222a24";
      ctx.beginPath();
      ctx.moveTo(-r * 0.62, -r * 0.82);
      ctx.lineTo(-r * 0.22, -r * 1.36);
      ctx.lineTo(r * 0.2, -r * 0.86);
      ctx.lineTo(r * 0.62, -r * 1.28);
      ctx.lineTo(r * 0.52, -r * 0.58);
      ctx.lineTo(-r * 0.58, -r * 0.58);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = "#bbd0b0";
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(-r * 0.86, r * 0.14);
      ctx.lineTo(r * 0.95, -r * 0.58);
      ctx.stroke();
      ctx.fillStyle = "#d8d0a8";
      ctx.fillRect(r * 0.56, -r * 0.78, r * 0.62, r * 0.32);
      if (unit.typeId === "armoredgiantzombie") {
        ctx.fillStyle = "#4b5358";
        ctx.fillRect(-r * 0.74, -r * 0.18, r * 1.48, r * 0.48);
        ctx.fillRect(-r * 0.58, r * 0.28, r * 1.16, r * 0.34);
        ctx.strokeStyle = "#cbd2d6";
        ctx.lineWidth = 4;
        ctx.strokeRect(-r * 0.76, -r * 0.2, r * 1.52, r * 0.52);
        ctx.fillStyle = "#111719";
        ctx.fillRect(-r * 0.82, -r * 0.92, r * 1.64, r * 0.34);
        ctx.fillStyle = "#b9c0c4";
        for (let i = -2; i <= 2; i += 1) {
          ctx.fillRect(i * r * 0.24 - r * 0.035, -r * 0.88, r * 0.07, r * 0.26);
        }
      }      ctx.fillStyle = "#94d47b";
      ctx.beginPath();
      ctx.arc(-r * 0.24, -r * 0.26, r * 0.1, 0, Math.PI * 2);
      ctx.arc(r * 0.24, -r * 0.26, r * 0.1, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#1d2b1f";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(0, 0, r * 1.04, 0.2, Math.PI * 1.75);
      ctx.stroke();
    }
  }
  if (unit.typeId === "crystalbehemoth") {
    ctx.fillStyle = "#123947";
    ctx.beginPath();
    ctx.ellipse(0, r * 0.08, r * 0.95, r * 0.82, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#50e2f2";
    for (let i = -3; i <= 3; i += 1) {
      const x = i * r * 0.27;
      const h = r * (0.85 + (3 - Math.abs(i)) * 0.14);
      ctx.beginPath();
      ctx.moveTo(x - r * 0.12, -r * 0.5);
      ctx.lineTo(x, -h);
      ctx.lineTo(x + r * 0.12, -r * 0.5);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = "#c7fbff";
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    ctx.strokeStyle = "#a9f7ff";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(0, r * 0.05, r * 0.86, 0.1, Math.PI * 1.9);
    ctx.stroke();
    ctx.fillStyle = "#d6ffff";
    ctx.beginPath();
    ctx.arc(-r * 0.28, -r * 0.14, r * 0.1, 0, Math.PI * 2);
    ctx.arc(r * 0.28, -r * 0.14, r * 0.1, 0, Math.PI * 2);
    ctx.fill();
  }
  if (unit.typeId === "stormogre") {
    ctx.fillStyle = "#202448";
    ctx.beginPath();
    ctx.ellipse(0, r * 0.06, r * 0.9, r * 1.05, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#6f7cff";
    ctx.fillRect(-r * 0.72, -r * 0.18, r * 1.44, r * 0.42);
    ctx.fillStyle = "#d7f5ff";
    ctx.beginPath();
    ctx.moveTo(-r * 0.18, -r * 1.12);
    ctx.lineTo(r * 0.08, -r * 0.45);
    ctx.lineTo(-r * 0.14, -r * 0.45);
    ctx.lineTo(r * 0.22, r * 0.25);
    ctx.lineTo(-r * 0.24, -r * 0.22);
    ctx.lineTo(-r * 0.02, -r * 0.22);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#7ee7ff";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(-r * 1.0, -r * 0.55);
    ctx.lineTo(-r * 0.35, -r * 0.2);
    ctx.lineTo(-r * 0.82, r * 0.18);
    ctx.moveTo(r * 1.0, -r * 0.55);
    ctx.lineTo(r * 0.35, -r * 0.2);
    ctx.lineTo(r * 0.82, r * 0.18);
    ctx.stroke();
    ctx.fillStyle = "#e9fbff";
    ctx.beginPath();
    ctx.arc(-r * 0.28, -r * 0.34, r * 0.1, 0, Math.PI * 2);
    ctx.arc(r * 0.28, -r * 0.34, r * 0.1, 0, Math.PI * 2);
    ctx.fill();
  }
  if (unit.typeId === "voidwardenboss") {
    ctx.fillStyle = "#11051f";
    ctx.beginPath();
    ctx.ellipse(0, r * 0.08, r * 0.88, r * 1.06, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#ae65ff";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(0, 0, r * 1.02, Math.PI * 0.08, Math.PI * 1.92);
    ctx.stroke();
    ctx.fillStyle = "#2e0b4b";
    ctx.beginPath();
    ctx.moveTo(-r * 0.82, -r * 0.42);
    ctx.lineTo(0, -r * 1.24);
    ctx.lineTo(r * 0.82, -r * 0.42);
    ctx.lineTo(r * 0.52, r * 0.8);
    ctx.lineTo(-r * 0.52, r * 0.8);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#d9b8ff";
    ctx.beginPath();
    ctx.ellipse(0, -r * 0.35, r * 0.38, r * 0.18, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#190821";
    ctx.beginPath();
    ctx.arc(0, -r * 0.35, r * 0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#7b2dff";
    ctx.lineWidth = 3;
    for (let i = 0; i < 3; i += 1) {
      ctx.beginPath();
      ctx.arc(0, 0, r * (0.46 + i * 0.22), i * 0.7, Math.PI + i * 0.7);
      ctx.stroke();
    }
  }  if (unit.typeId === "archmagelord") {
    ctx.fillStyle = "#16051f";
    ctx.beginPath();
    ctx.ellipse(0, r * 0.18, r * 0.9, r * 1.08, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#3a135c";
    ctx.beginPath();
    ctx.moveTo(-r * 0.98, r * 0.88);
    ctx.lineTo(-r * 0.48, -r * 0.52);
    ctx.lineTo(0, -r * 0.92);
    ctx.lineTo(r * 0.48, -r * 0.52);
    ctx.lineTo(r * 0.98, r * 0.88);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#c48cff";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(0, -r * 0.03, r * 1.12, 0.12, Math.PI * 1.88);
    ctx.stroke();
    ctx.fillStyle = "#2b0a3d";
    ctx.beginPath();
    ctx.arc(0, -r * 0.6, r * 0.48, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#d9b8ff";
    ctx.beginPath();
    ctx.moveTo(-r * 0.5, -r * 0.88);
    ctx.lineTo(-r * 0.28, -r * 1.5);
    ctx.lineTo(-r * 0.08, -r * 0.9);
    ctx.lineTo(r * 0.12, -r * 1.6);
    ctx.lineTo(r * 0.3, -r * 0.9);
    ctx.lineTo(r * 0.52, -r * 1.42);
    ctx.lineTo(r * 0.48, -r * 0.78);
    ctx.closePath();
    ctx.fill();
    const orbColors = ["#ff7838", "#9bdcff", "#70e071", "#d7ecff", "#b05cff"];
    for (let i = 0; i < orbColors.length; i += 1) {
      const angle = performance.now() / 700 + (Math.PI * 2 * i) / orbColors.length;
      const x = Math.cos(angle) * r * 1.28;
      const y = Math.sin(angle) * r * 0.72 - r * 0.16;
      ctx.fillStyle = orbColors[i];
      ctx.beginPath();
      ctx.arc(x, y, r * 0.13, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = "#f1ddff";
    ctx.beginPath();
    ctx.arc(-r * 0.18, -r * 0.62, r * 0.07, 0, Math.PI * 2);
    ctx.arc(r * 0.18, -r * 0.62, r * 0.07, 0, Math.PI * 2);
    ctx.fill();
  }  if (unit.typeId === "obsidianwargod") {
    ctx.fillStyle = "#09080d";
    ctx.beginPath();
    ctx.ellipse(0, 0, r * 0.95, r * 1.1, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#20142e";
    ctx.beginPath();
    ctx.ellipse(-r * 0.08, -r * 0.08, r * 0.72, r * 0.9, -0.08, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#7b5cff";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(0, 0, r * 1.04, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = "#b398ff";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(-r * 0.82, -r * 0.9);
    ctx.lineTo(-r * 0.42, -r * 1.42);
    ctx.lineTo(-r * 0.12, -r * 0.88);
    ctx.moveTo(r * 0.82, -r * 0.9);
    ctx.lineTo(r * 0.42, -r * 1.42);
    ctx.lineTo(r * 0.12, -r * 0.88);
    ctx.stroke();
    ctx.fillStyle = "#c4b5ff";
    ctx.beginPath();
    ctx.arc(-r * 0.25, -r * 0.18, r * 0.09, 0, Math.PI * 2);
    ctx.arc(r * 0.25, -r * 0.18, r * 0.09, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#4c2cff";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-r * 0.68, r * 0.42);
    ctx.lineTo(r * 0.74, -r * 0.46);
    ctx.stroke();
  }  if (unit.typeId === "nutwall") {
    ctx.fillStyle = "#7c4f25";
    ctx.beginPath();
    ctx.ellipse(0, 0, r * 0.82, r * 1.04, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#b88945";
    ctx.beginPath();
    ctx.ellipse(-r * 0.08, -r * 0.08, r * 0.68, r * 0.88, -0.05, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#4f2f19";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.86, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = "#2a1a10";
    ctx.beginPath();
    ctx.arc(-r * 0.24, -r * 0.18, r * 0.08, 0, Math.PI * 2);
    ctx.arc(r * 0.22, -r * 0.18, r * 0.08, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#3a2415";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, r * 0.18, r * 0.28, 0.15, Math.PI - 0.15);
    ctx.stroke();
  }  if (unit.typeId === "sunflower") {
    ctx.fillStyle = "#2f8f46";
    ctx.beginPath();
    ctx.ellipse(0, r * 0.78, r * 0.46, r * 0.22, 0, 0, Math.PI * 2);
    ctx.ellipse(-r * 0.46, r * 0.56, r * 0.34, r * 0.16, -0.65, 0, Math.PI * 2);
    ctx.ellipse(r * 0.44, r * 0.56, r * 0.34, r * 0.16, 0.65, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#24673b";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, r * 0.62);
    ctx.lineTo(0, -r * 0.18);
    ctx.stroke();
    ctx.fillStyle = "#ffd95a";
    for (let i = 0; i < 12; i += 1) {
      const angle = (i / 12) * Math.PI * 2;
      ctx.beginPath();
      ctx.ellipse(Math.cos(angle) * r * 0.54, -r * 0.34 + Math.sin(angle) * r * 0.54, r * 0.2, r * 0.34, angle, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = "#6b3f1d";
    ctx.beginPath();
    ctx.arc(0, -r * 0.34, r * 0.42, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#2a160c";
    ctx.beginPath();
    ctx.arc(-r * 0.14, -r * 0.42, r * 0.06, 0, Math.PI * 2);
    ctx.arc(r * 0.14, -r * 0.42, r * 0.06, 0, Math.PI * 2);
    ctx.fill();
  }
  if (unit.typeId === "corncannon") {
    ctx.fillStyle = "#2f8f46";
    ctx.beginPath();
    ctx.ellipse(-r * 0.28, r * 0.78, r * 0.52, r * 0.22, -0.45, 0, Math.PI * 2);
    ctx.ellipse(r * 0.28, r * 0.78, r * 0.52, r * 0.22, 0.45, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#f3c64f";
    ctx.beginPath();
    ctx.ellipse(-r * 0.08, -r * 0.02, r * 0.62, r * 0.9, -0.15, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#8b5c18";
    ctx.lineWidth = 4;
    for (let i = -2; i <= 2; i += 1) {
      ctx.beginPath();
      ctx.moveTo(-r * 0.42 + i * r * 0.18, -r * 0.72);
      ctx.lineTo(-r * 0.12 + i * r * 0.18, r * 0.62);
      ctx.stroke();
    }
    ctx.fillStyle = "#35633b";
    ctx.save();
    ctx.rotate(-0.18);
    ctx.fillRect(r * 0.02, -r * 0.34, r * 1.15, r * 0.46);
    ctx.fillStyle = "#1f3824";
    ctx.fillRect(r * 0.95, -r * 0.4, r * 0.28, r * 0.58);
    ctx.restore();
    ctx.fillStyle = "#fff3a2";
    ctx.beginPath();
    ctx.arc(-r * 0.25, -r * 0.26, r * 0.11, 0, Math.PI * 2);
    ctx.arc(r * 0.02, -r * 0.3, r * 0.11, 0, Math.PI * 2);
    ctx.fill();
    if (state.cornAimId === unit.id) {
      ctx.strokeStyle = "#ffe05a";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(0, 0, r * 1.32, 0, Math.PI * 2);
      ctx.stroke();
    }
  }  if (unit.typeId === "chomper") {
    ctx.fillStyle = "#2f8f46";
    ctx.beginPath();
    ctx.ellipse(0, r * 0.82, r * 0.56, r * 0.24, 0, 0, Math.PI * 2);
    ctx.ellipse(-r * 0.5, r * 0.58, r * 0.36, r * 0.17, -0.7, 0, Math.PI * 2);
    ctx.ellipse(r * 0.5, r * 0.58, r * 0.36, r * 0.17, 0.7, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#24673b";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0, r * 0.68);
    ctx.lineTo(0, -r * 0.08);
    ctx.stroke();
    if ((unit.chompCooldown || 0) <= 0.2) {
      ctx.strokeStyle = "#b05cff";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(0, -r * 0.25, r * 1.18, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.fillStyle = "#7c3fb0";
    ctx.beginPath();
    ctx.ellipse(0, -r * 0.38, r * 0.78, r * 0.72, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#371542";
    ctx.beginPath();
    ctx.ellipse(r * 0.16, -r * 0.22, r * 0.54, r * 0.34, 0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#f7f3d7";
    for (let i = 0; i < 6; i += 1) {
      const x = -r * 0.24 + i * r * 0.12;
      ctx.beginPath();
      ctx.moveTo(x, -r * 0.5);
      ctx.lineTo(x + r * 0.05, -r * 0.22);
      ctx.lineTo(x + r * 0.1, -r * 0.5);
      ctx.closePath();
      ctx.fill();
    }
    ctx.fillStyle = "#f6d8ff";
    ctx.beginPath();
    ctx.arc(-r * 0.28, -r * 0.66, r * 0.09, 0, Math.PI * 2);
    ctx.fill();
  }
  if (unit.typeId === "peashooter" || unit.typeId === "repeater" || unit.typeId === "gatlingshooter" || unit.typeId === "wildgatlingshooter") {
    ctx.fillStyle = "#2f8f46";
    ctx.beginPath();
    ctx.ellipse(0, r * 0.7, r * 0.55, r * 0.24, -0.25, 0, Math.PI * 2);
    ctx.ellipse(-r * 0.52, r * 0.5, r * 0.38, r * 0.18, -0.65, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#3fbf5e";
    ctx.beginPath();
    ctx.arc(-r * 0.12, -r * 0.22, r * 0.62, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#205c34";
    ctx.beginPath();
    ctx.ellipse(r * 0.72, -r * 0.2, r * 0.62, r * 0.34, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#80e88a";
    ctx.beginPath();
    ctx.ellipse(r * 0.9, -r * 0.2, r * 0.26, r * 0.15, 0, 0, Math.PI * 2);
    ctx.fill();
    if (unit.typeId === "repeater") {
      ctx.fillStyle = "#205c34";
      ctx.beginPath();
      ctx.ellipse(r * 0.64, -r * 0.48, r * 0.52, r * 0.26, -0.05, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#80e88a";
      ctx.beginPath();
      ctx.ellipse(r * 0.82, -r * 0.48, r * 0.22, r * 0.12, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    if (unit.typeId === "gatlingshooter" || unit.typeId === "wildgatlingshooter") {
      if (unit.gatlingBoosted) {
        ctx.strokeStyle = "#ffe05a";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, -r * 0.2, r * 1.05, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.fillStyle = "#204f34";
      for (let i = 0; i < 5; i += 1) {
        const offset = (i - 2) * r * 0.16;
        ctx.beginPath();
        ctx.ellipse(r * 0.72, -r * 0.42 + offset, r * 0.48, r * 0.12, 0, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = "#8ff29b";
      ctx.beginPath();
      ctx.arc(-r * 0.12, -r * 0.3, r * 0.16, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  if (unit.typeId === "arrowtower") {
    ctx.fillStyle = "#6c4a2b";
    ctx.fillRect(-r * 0.56, -r * 0.18, r * 1.12, r * 1.2);
    ctx.fillStyle = "#9f7245";
    ctx.fillRect(-r * 0.72, -r * 0.62, r * 1.44, r * 0.5);
    ctx.fillStyle = "#3e2b1a";
    for (let i = -1; i <= 1; i += 1) {
      ctx.fillRect(i * r * 0.42 - r * 0.08, -r * 0.86, r * 0.16, r * 0.34);
    }
    ctx.strokeStyle = "#f0d19a";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-r * 0.5, -r * 0.28);
    ctx.lineTo(r * 0.5, -r * 0.28);
    ctx.moveTo(0, -r * 0.5);
    ctx.lineTo(r * 0.78, -r * 0.5);
    ctx.moveTo(0, -r * 0.34);
    ctx.lineTo(r * 0.76, -r * 0.18);
    ctx.stroke();
    ctx.fillStyle = "#f7df9b";
    ctx.beginPath();
    ctx.moveTo(r * 0.98, -r * 0.5);
    ctx.lineTo(r * 0.62, -r * 0.66);
    ctx.lineTo(r * 0.68, -r * 0.34);
    ctx.closePath();
    ctx.fill();
  }
  if (unit.typeId === "dragonling") {
    ctx.fillStyle = "#7b2432";
    ctx.beginPath();
    ctx.moveTo(-r * 1.45, -r * 0.18);
    ctx.lineTo(-r * 0.42, -r * 0.88);
    ctx.lineTo(-r * 0.18, r * 0.3);
    ctx.closePath();
    ctx.moveTo(r * 1.45, -r * 0.18);
    ctx.lineTo(r * 0.42, -r * 0.88);
    ctx.lineTo(r * 0.18, r * 0.3);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#ffc36d";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-r * 1.05, -r * 0.22);
    ctx.lineTo(-r * 0.45, -r * 0.5);
    ctx.moveTo(r * 1.05, -r * 0.22);
    ctx.lineTo(r * 0.45, -r * 0.5);
    ctx.stroke();
    ctx.strokeStyle = "#4a1420";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, r * 0.42);
    ctx.quadraticCurveTo(-r * 0.42, r * 0.88, -r * 1.15, r * 0.64);
    ctx.stroke();
    ctx.fillStyle = "#3a1420";
    ctx.beginPath();
    ctx.ellipse(0, -r * 0.04, r * 0.62, r * 0.82, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#ff7a38";
    ctx.beginPath();
    ctx.ellipse(0, -r * 0.48, r * 0.45, r * 0.35, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#fff0a8";
    ctx.beginPath();
    ctx.moveTo(-r * 0.32, -r * 0.84);
    ctx.lineTo(-r * 0.12, -r * 1.18);
    ctx.lineTo(-r * 0.02, -r * 0.78);
    ctx.closePath();
    ctx.moveTo(r * 0.32, -r * 0.84);
    ctx.lineTo(r * 0.12, -r * 1.18);
    ctx.lineTo(r * 0.02, -r * 0.78);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#181018";
    ctx.beginPath();
    ctx.arc(-r * 0.18, -r * 0.52, r * 0.08, 0, Math.PI * 2);
    ctx.arc(r * 0.18, -r * 0.52, r * 0.08, 0, Math.PI * 2);
    ctx.fill();
  }
  if (unit.typeId === "adultdragon") {
    ctx.fillStyle = "#4a0f16";
    ctx.beginPath();
    ctx.moveTo(-r * 2.15, -r * 0.15);
    ctx.lineTo(-r * 0.62, -r * 1.28);
    ctx.lineTo(-r * 0.25, r * 0.42);
    ctx.closePath();
    ctx.moveTo(r * 2.15, -r * 0.15);
    ctx.lineTo(r * 0.62, -r * 1.28);
    ctx.lineTo(r * 0.25, r * 0.42);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#ffb15f";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(-r * 1.6, -r * 0.18);
    ctx.lineTo(-r * 0.55, -r * 0.72);
    ctx.moveTo(r * 1.6, -r * 0.18);
    ctx.lineTo(r * 0.55, -r * 0.72);
    ctx.stroke();
    ctx.strokeStyle = "#2a0910";
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(0, r * 0.48);
    ctx.quadraticCurveTo(-r * 0.78, r * 1.26, -r * 1.85, r * 0.82);
    ctx.stroke();
    ctx.fillStyle = "#2a0910";
    ctx.beginPath();
    ctx.ellipse(0, 0, r * 0.78, r * 1.02, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#e34227";
    ctx.beginPath();
    ctx.ellipse(0, -r * 0.48, r * 0.58, r * 0.42, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#ffd15a";
    ctx.beginPath();
    ctx.moveTo(-r * 0.4, -r * 0.98);
    ctx.lineTo(-r * 0.16, -r * 1.52);
    ctx.lineTo(-r * 0.04, -r * 0.88);
    ctx.closePath();
    ctx.moveTo(r * 0.4, -r * 0.98);
    ctx.lineTo(r * 0.16, -r * 1.52);
    ctx.lineTo(r * 0.04, -r * 0.88);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#fff0a8";
    ctx.beginPath();
    ctx.arc(-r * 0.22, -r * 0.56, r * 0.09, 0, Math.PI * 2);
    ctx.arc(r * 0.22, -r * 0.56, r * 0.09, 0, Math.PI * 2);
    ctx.fill();
  }
  if (unit.typeId === "tiamat") {
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#170818";
    ctx.beginPath();
    ctx.moveTo(-r * 2.9, r * 0.15);
    ctx.lineTo(-r * 0.95, -r * 1.18);
    ctx.lineTo(-r * 0.42, r * 0.58);
    ctx.closePath();
    ctx.moveTo(r * 2.9, r * 0.15);
    ctx.lineTo(r * 0.95, -r * 1.18);
    ctx.lineTo(r * 0.42, r * 0.58);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#2a0d2f";
    ctx.beginPath();
    ctx.moveTo(-r * 2.35, r * 0.05);
    ctx.lineTo(-r * 1.05, -r * 0.68);
    ctx.lineTo(-r * 0.55, r * 0.28);
    ctx.closePath();
    ctx.moveTo(r * 2.35, r * 0.05);
    ctx.lineTo(r * 1.05, -r * 0.68);
    ctx.lineTo(r * 0.55, r * 0.28);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#9b64ff";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(-r * 2.34, r * 0.08);
    ctx.lineTo(-r * 0.9, -r * 0.62);
    ctx.moveTo(r * 2.34, r * 0.08);
    ctx.lineTo(r * 0.9, -r * 0.62);
    ctx.stroke();
    ctx.strokeStyle = "#09040b";
    ctx.lineWidth = 11;
    ctx.beginPath();
    ctx.moveTo(-r * 0.1, r * 0.82);
    ctx.quadraticCurveTo(-r * 0.9, r * 1.38, -r * 2.42, r * 1.2);
    ctx.stroke();
    ctx.strokeStyle = "#211022";
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(-r * 0.1, r * 0.82);
    ctx.quadraticCurveTo(-r * 0.9, r * 1.38, -r * 2.42, r * 1.2);
    ctx.stroke();
    ctx.fillStyle = "#31123b";
    ctx.beginPath();
    ctx.ellipse(0, r * 0.18, r * 0.88, r * 1.2, -0.08, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#5a3476";
    ctx.beginPath();
    ctx.ellipse(0, -r * 0.16, r * 0.54, r * 0.84, -0.08, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#1a081d";
    ctx.lineWidth = 3;
    for (let i = -2; i <= 2; i += 1) {
      ctx.beginPath();
      ctx.moveTo(i * r * 0.18, -r * 0.92);
      ctx.lineTo(i * r * 0.1, r * 0.68);
      ctx.stroke();
    }
    const heads = [
      { x: -1.62, y: -1.03, neck: -0.62, color: "#11151b", shade: "#262b34", horn: "#adb2bc", eye: "#ff335c", dir: -1, scale: 1.18 },
      { x: -0.82, y: -1.34, neck: -0.32, color: "#eee7c9", shade: "#c9bea0", horn: "#fff3b0", eye: "#e2cd4b", dir: -1, scale: 1.1 },
      { x: 0, y: -1.62, neck: 0, color: "#1299a6", shade: "#0b4d58", horn: "#b9fbff", eye: "#58fff0", dir: 1, scale: 1.2 },
      { x: 0.82, y: -1.34, neck: 0.32, color: "#ff6428", shade: "#b23716", horn: "#ffd083", eye: "#ffcf5f", dir: 1, scale: 1.1 },
      { x: 1.62, y: -1.03, neck: 0.62, color: "#4ac85e", shade: "#1e6e33", horn: "#c8ffd8", eye: "#98ff8c", dir: 1, scale: 1.18 },
    ];
    for (const head of heads) {
      ctx.strokeStyle = "#120812";
      ctx.lineWidth = 9;
      ctx.beginPath();
      ctx.moveTo(head.neck * r, -r * 0.46);
      ctx.quadraticCurveTo(head.x * r * 0.74, -r * 0.95, head.x * r, head.y * r);
      ctx.stroke();
      ctx.strokeStyle = head.color;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(head.neck * r, -r * 0.46);
      ctx.quadraticCurveTo(head.x * r * 0.74, -r * 0.95, head.x * r, head.y * r);
      ctx.stroke();
      const hx = head.x * r;
      const hy = head.y * r;
      const dir = head.dir;
      const s = head.scale || 1;
      const drawHeadShape = (pad = 0) => {
        ctx.beginPath();
        ctx.moveTo(hx - dir * r * (0.52 + pad) * s, hy - r * 0.22 * s);
        ctx.lineTo(hx - dir * r * 0.28 * s, hy - r * (0.48 + pad) * s);
        ctx.lineTo(hx - dir * r * 0.02 * s, hy - r * 0.58 * s);
        ctx.lineTo(hx + dir * r * 0.18 * s, hy - r * 0.48 * s);
        ctx.lineTo(hx + dir * r * 0.44 * s, hy - r * 0.32 * s);
        ctx.lineTo(hx + dir * r * 0.78 * s, hy - r * 0.12 * s);
        ctx.lineTo(hx + dir * r * 0.62 * s, hy + r * 0.12 * s);
        ctx.lineTo(hx + dir * r * 0.28 * s, hy + r * 0.18 * s);
        ctx.lineTo(hx + dir * r * 0.06 * s, hy + r * 0.34 * s);
        ctx.lineTo(hx - dir * r * 0.24 * s, hy + r * 0.28 * s);
        ctx.lineTo(hx - dir * r * 0.38 * s, hy + r * 0.04 * s);
        ctx.closePath();
      };
      ctx.fillStyle = "#07040a";
      drawHeadShape(0.08);
      ctx.fill();
      ctx.fillStyle = head.color;
      ctx.beginPath();
      drawHeadShape(0);
      ctx.fill();
      ctx.fillStyle = head.shade;
      ctx.beginPath();
      ctx.moveTo(hx - dir * r * 0.12 * s, hy - r * 0.36 * s);
      ctx.lineTo(hx + dir * r * 0.36 * s, hy - r * 0.22 * s);
      ctx.lineTo(hx + dir * r * 0.08 * s, hy + r * 0.12 * s);
      ctx.lineTo(hx - dir * r * 0.22 * s, hy + r * 0.2 * s);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = head.horn;
      ctx.beginPath();
      ctx.moveTo(hx - dir * r * 0.18 * s, hy - r * 0.46 * s);
      ctx.lineTo(hx - dir * r * 0.05 * s, hy - r * 1.12 * s);
      ctx.lineTo(hx + dir * r * 0.08 * s, hy - r * 0.44 * s);
      ctx.closePath();
      ctx.moveTo(hx + dir * r * 0.16 * s, hy - r * 0.38 * s);
      ctx.lineTo(hx + dir * r * 0.42 * s, hy - r * 0.98 * s);
      ctx.lineTo(hx + dir * r * 0.36 * s, hy - r * 0.3 * s);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = head.color;
      ctx.beginPath();
      ctx.moveTo(hx - dir * r * 0.42 * s, hy - r * 0.16 * s);
      ctx.lineTo(hx - dir * r * 0.86 * s, hy - r * 0.38 * s);
      ctx.lineTo(hx - dir * r * 0.58 * s, hy - r * 0.02 * s);
      ctx.closePath();
      ctx.moveTo(hx - dir * r * 0.38 * s, hy + r * 0.08 * s);
      ctx.lineTo(hx - dir * r * 0.82 * s, hy + r * 0.18 * s);
      ctx.lineTo(hx - dir * r * 0.44 * s, hy + r * 0.26 * s);
      ctx.closePath();
      ctx.moveTo(hx + dir * r * 0.02 * s, hy - r * 0.52 * s);
      ctx.lineTo(hx + dir * r * 0.18 * s, hy - r * 0.82 * s);
      ctx.lineTo(hx + dir * r * 0.2 * s, hy - r * 0.44 * s);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = head.eye;
      ctx.beginPath();
      ctx.ellipse(hx + dir * r * 0.22 * s, hy - r * 0.12 * s, r * 0.095 * s, r * 0.04 * s, -dir * 0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#09040b";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(hx + dir * r * 0.05 * s, hy + r * 0.02 * s);
      ctx.lineTo(hx + dir * r * 0.6 * s, hy + r * 0.02 * s);
      ctx.moveTo(hx + dir * r * 0.52 * s, hy + r * 0.05 * s);
      ctx.lineTo(hx + dir * r * 0.66 * s, hy + r * 0.0);
      ctx.stroke();
    }
    ctx.fillStyle = "#201026";
    ctx.strokeStyle = "#09040b";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, -r * 0.94);
    ctx.lineTo(r * 0.46, -r * 0.62);
    ctx.lineTo(r * 0.62, -r * 0.16);
    ctx.lineTo(r * 0.42, r * 0.28);
    ctx.lineTo(0, r * 0.62);
    ctx.lineTo(-r * 0.42, r * 0.28);
    ctx.lineTo(-r * 0.62, -r * 0.16);
    ctx.lineTo(-r * 0.46, -r * 0.62);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#7b4fa8";
    ctx.beginPath();
    ctx.moveTo(0, -r * 1.38);
    ctx.lineTo(r * 0.14, -r * 0.82);
    ctx.lineTo(0, -r * 0.94);
    ctx.lineTo(-r * 0.14, -r * 0.82);
    ctx.closePath();
    ctx.moveTo(-r * 0.38, -r * 0.8);
    ctx.lineTo(-r * 0.64, -r * 1.2);
    ctx.lineTo(-r * 0.48, -r * 0.58);
    ctx.closePath();
    ctx.moveTo(r * 0.38, -r * 0.8);
    ctx.lineTo(r * 0.64, -r * 1.2);
    ctx.lineTo(r * 0.48, -r * 0.58);
    ctx.closePath();
    ctx.moveTo(-r * 0.58, -r * 0.28);
    ctx.lineTo(-r * 0.96, -r * 0.46);
    ctx.lineTo(-r * 0.62, -r * 0.08);
    ctx.closePath();
    ctx.moveTo(r * 0.58, -r * 0.28);
    ctx.lineTo(r * 0.96, -r * 0.46);
    ctx.lineTo(r * 0.62, -r * 0.08);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#3c1c58";
    ctx.beginPath();
    ctx.moveTo(0, -r * 0.72);
    ctx.lineTo(r * 0.18, -r * 0.36);
    ctx.lineTo(0, -r * 0.48);
    ctx.lineTo(-r * 0.18, -r * 0.36);
    ctx.closePath();
    ctx.moveTo(0, -r * 0.18);
    ctx.lineTo(r * 0.16, r * 0.02);
    ctx.lineTo(0, r * 0.16);
    ctx.lineTo(-r * 0.16, r * 0.02);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#a868ff";
    ctx.beginPath();
    ctx.ellipse(-r * 0.22, -r * 0.22, r * 0.11, r * 0.055, -0.2, 0, Math.PI * 2);
    ctx.ellipse(r * 0.22, -r * 0.22, r * 0.11, r * 0.055, 0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#0b0510";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-r * 0.34, r * 0.02);
    ctx.lineTo(0, r * 0.22);
    ctx.lineTo(r * 0.34, r * 0.02);
    ctx.moveTo(-r * 0.26, r * 0.22);
    ctx.lineTo(0, r * 0.44);
    ctx.lineTo(r * 0.26, r * 0.22);
    ctx.stroke();
    ctx.fillStyle = "#120812";
    ctx.beginPath();
    ctx.ellipse(-r * 0.62, r * 0.78, r * 0.22, r * 0.14, -0.25, 0, Math.PI * 2);
    ctx.ellipse(r * 0.62, r * 0.78, r * 0.22, r * 0.14, 0.25, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#8f4cff";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(0, r * 0.1, r * 1.08, 0.1, Math.PI * 1.88);
    ctx.stroke();
  }
  if (unit.typeId === "firebeast") {
    ctx.fillStyle = "#2d3036";
    ctx.fillRect(-r * 0.92, -r * 0.2, r * 1.84, r * 0.5);
    ctx.fillStyle = "#ffcf5f";
    ctx.beginPath();
    ctx.moveTo(r * 0.25, -r * 0.65);
    ctx.lineTo(r * 0.55, -r * 0.18);
    ctx.lineTo(r * 0.1, -r * 0.2);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#ffd39a";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.72, Math.PI * 0.15, Math.PI * 1.65);
    ctx.stroke();
  }
  if (unit.typeId === "paladin") {
    ctx.fillStyle = "#f7e8ae";
    ctx.beginPath();
    ctx.moveTo(0, -r * 0.95);
    ctx.lineTo(r * 0.72, -r * 0.2);
    ctx.lineTo(r * 0.36, r * 0.72);
    ctx.lineTo(-r * 0.36, r * 0.72);
    ctx.lineTo(-r * 0.72, -r * 0.2);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#6f8dff";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, -r * 0.52);
    ctx.lineTo(0, r * 0.42);
    ctx.moveTo(-r * 0.36, -r * 0.1);
    ctx.lineTo(r * 0.36, -r * 0.1);
    ctx.stroke();
  }
  if (unit.typeId === "plaguewizard") {
    ctx.fillStyle = "#26341f";
    ctx.beginPath();
    ctx.moveTo(-r * 0.72, r * 0.5);
    ctx.lineTo(0, -r * 1.1);
    ctx.lineTo(r * 0.72, r * 0.5);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#a7ff78";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.72, 0.3, Math.PI * 1.8);
    ctx.arc(0, 0, r * 0.42, Math.PI * 0.1, Math.PI * 1.55);
    ctx.stroke();
  }
  if (unit.typeId === "frostmage") {
    ctx.fillStyle = "#d7f7ff";
    ctx.beginPath();
    ctx.moveTo(0, -r * 1.1);
    ctx.lineTo(r * 0.72, r * 0.25);
    ctx.lineTo(0, r * 0.7);
    ctx.lineTo(-r * 0.72, r * 0.25);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#5bc8ff";
    ctx.lineWidth = 2;
    for (let i = 0; i < 6; i += 1) {
      const a = (Math.PI * 2 * i) / 6;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(a) * r * 0.82, Math.sin(a) * r * 0.82);
      ctx.stroke();
    }
  }
  if (unit.typeId === "necromancer") {
    ctx.fillStyle = "#21162e";
    ctx.beginPath();
    ctx.moveTo(-r * 0.75, r * 0.62);
    ctx.lineTo(0, -r * 1.15);
    ctx.lineTo(r * 0.75, r * 0.62);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#d8ffe8";
    ctx.beginPath();
    ctx.arc(0, -r * 0.18, r * 0.34, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#9f7cff";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-r * 0.9, r * 0.54);
    ctx.lineTo(r * 0.9, r * 0.54);
    ctx.stroke();
  }
  if (unit.typeId === "bannerlord") {
    ctx.fillStyle = "#f6d56d";
    ctx.fillRect(-r * 0.12, -r * 1.3, r * 0.24, r * 1.9);
    ctx.fillStyle = unit.team === "blue" ? "#4da3ff" : "#ff625f";
    ctx.beginPath();
    ctx.moveTo(r * 0.12, -r * 1.25);
    ctx.lineTo(r * 1.1, -r * 0.98);
    ctx.lineTo(r * 0.12, -r * 0.55);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#fff0a8";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.9, 0, Math.PI * 2);
    ctx.stroke();
  }
  if (unit.typeId === "flameknight") {
    ctx.fillStyle = "#2f1b18";
    ctx.beginPath();
    ctx.moveTo(-r * 0.72, r * 0.55);
    ctx.lineTo(0, -r * 1.05);
    ctx.lineTo(r * 0.72, r * 0.55);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#ffcf5f";
    ctx.beginPath();
    ctx.moveTo(0, -r * 1.22);
    ctx.quadraticCurveTo(r * 0.5, -r * 0.58, 0, -r * 0.22);
    ctx.quadraticCurveTo(-r * 0.38, -r * 0.58, 0, -r * 1.22);
    ctx.fill();
    ctx.strokeStyle = "#ff7a38";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.82, Math.PI * 0.05, Math.PI * 1.65);
    ctx.stroke();
  }
  if (unit.typeId === "frostgiant") {
    ctx.fillStyle = "rgba(215, 247, 255, 0.68)";
    ctx.beginPath();
    ctx.moveTo(0, -r * 1.2);
    ctx.lineTo(r * 0.36, -r * 0.28);
    ctx.lineTo(r * 1.06, -r * 0.15);
    ctx.lineTo(r * 0.45, r * 0.32);
    ctx.lineTo(r * 0.72, r * 1.02);
    ctx.lineTo(0, r * 0.56);
    ctx.lineTo(-r * 0.72, r * 1.02);
    ctx.lineTo(-r * 0.45, r * 0.32);
    ctx.lineTo(-r * 1.06, -r * 0.15);
    ctx.lineTo(-r * 0.36, -r * 0.28);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#5bc8ff";
    ctx.lineWidth = 3;
    ctx.stroke();
  }
  if (unit.typeId === "sharpshooter") {
    ctx.fillStyle = "#1c2732";
    ctx.fillRect(-r * 0.72, -r * 0.7, r * 1.44, r * 0.34);
    ctx.strokeStyle = "#d7efff";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(-r * 0.78, r * 0.44);
    ctx.lineTo(r * 1.75, -r * 0.42);
    ctx.stroke();
    ctx.strokeStyle = "#ffcf5f";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.72, -0.4, 0.4);
    ctx.stroke();
  }
  if (unit.typeId === "portalmage") {
    ctx.strokeStyle = "#d9b8ff";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.92, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = "#78bbff";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.58, Math.PI * 0.2, Math.PI * 1.65);
    ctx.stroke();
    ctx.fillStyle = "#291d40";
    ctx.beginPath();
    ctx.moveTo(-r * 0.72, r * 0.58);
    ctx.lineTo(0, -r * 1.08);
    ctx.lineTo(r * 0.72, r * 0.58);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#f0dcff";
    ctx.font = `${Math.max(10, r * 0.6)}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("+", 0, -r * 0.05);
  }
  if (unit.typeId === "unit67") {
    ctx.fillStyle = "#d8f0ff";
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.72, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#176dff";
    ctx.font = `${Math.max(12, r * 0.7)}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("67", 0, r * 0.04);
    ctx.strokeStyle = "#80c8ff";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, r * 1.1, 0, Math.PI * 2);
    ctx.stroke();
  }
  if (unit.typeId.startsWith("custom-")) {
    ctx.globalAlpha = 0.86;
    ctx.lineWidth = Math.max(2, r * 0.16);
    ctx.strokeStyle = "#f4f0e8";
    ctx.fillStyle = "#2b3038";
    if (unit.weapon === "cannon") {
      ctx.fillRect(-r * 0.18, -r * 0.34, r * 1.42, r * 0.68);
      ctx.strokeRect(-r * 0.18, -r * 0.34, r * 1.42, r * 0.68);
      ctx.fillStyle = "#f2d36b";
      ctx.beginPath();
      ctx.arc(r * 1.24, 0, r * 0.22, 0, Math.PI * 2);
      ctx.fill();
    } else if (unit.weapon === "hammer") {
      ctx.beginPath();
      ctx.moveTo(-r * 0.4, -r * 0.9);
      ctx.lineTo(r * 0.4, -r * 0.9);
      ctx.moveTo(0, -r * 0.9);
      ctx.lineTo(0, r * 0.6);
      ctx.stroke();
    } else if (unit.weapon === "musket") {
      ctx.beginPath();
      ctx.moveTo(-r * 0.42, -r * 0.12);
      ctx.lineTo(r * 1.45, -r * 0.12);
      ctx.moveTo(-r * 0.2, r * 0.16);
      ctx.lineTo(r * 0.42, r * 0.42);
      ctx.stroke();
    } else if (unit.projectileSpeed) {
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.82, -0.8, 0.8);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }
  ctx.restore();
}

function drawProjectiles() {
  for (const projectile of state.projectiles) {
    ctx.fillStyle = projectile.color || (projectile.fireball ? "#ff5d2e" : projectile.applyBurn ? "#ff8a38" : projectile.applyFreeze ? "#9bdcff" : "#f2d27a");
    ctx.beginPath();
    ctx.arc(projectile.x, projectile.y, projectile.radius, 0, Math.PI * 2);
    ctx.fill();
    if (projectile.fireball) {
      ctx.strokeStyle = "#ffd15a";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(projectile.x, projectile.y, projectile.radius + 5, 0, Math.PI * 2);
      ctx.stroke();
    }
  }
}

function drawSlimes() {
  for (const slime of state.slimes) {
    ctx.save();
    ctx.globalAlpha = Math.max(0.14, slime.life / 5) * 0.55;
    ctx.fillStyle = slime.chaos ? "#2b112f" : "#58d86a";
    ctx.beginPath();
    ctx.ellipse(slime.x, slime.y, slime.radius, slime.radius * 0.58, 0, 0, Math.PI * 2);
    ctx.fill();
    if (slime.chaos) {
      ctx.strokeStyle = "#8f4cff";
      ctx.lineWidth = 3;
      ctx.stroke();
    }
    ctx.restore();
  }
}

function drawTornadoes() {
  for (const tornado of state.tornadoes) {
    ctx.save();
    ctx.translate(tornado.x, tornado.y);
    ctx.globalAlpha = Math.min(0.86, tornado.life / 2);
    ctx.strokeStyle = tornado.color || (tornado.poison ? "#67e078" : "#dce9ff");
    ctx.lineWidth = 5;
    for (let i = 0; i < 4; i += 1) {
      const r = tornado.radius * (0.28 + i * 0.18);
      ctx.beginPath();
      ctx.ellipse(0, i * 10 - 22, r, r * 0.34, (performance.now() / 420) * tornado.spin + i, 0, Math.PI * 1.7);
      ctx.stroke();
    }
    ctx.restore();
  }
}

function drawParticles() {
  for (const particle of state.particles) {
    const startLife = particle.startLife || 0.5;
    const age = 1 - Math.max(0, particle.life) / startLife;
    ctx.globalAlpha = Math.max(0, Math.min(1, particle.life * 2.5));
    if (particle.line) {
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(particle.x, particle.y);
      ctx.lineTo(particle.x2, particle.y2);
      ctx.stroke();
      continue;
    }
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, (particle.size || 20) * Math.max(0.18, age), 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function drawBossHealthBar() {
  const bosses = state.units.filter((unit) => !unit.dead && (unit.skills?.tiamatBoss || unit.skills?.zombieBoss));
  if (!bosses.length) return;
  const boss = bosses.sort((a, b) => b.maxHp - a.maxHp || b.hp - a.hp)[0];
  const health = clamp(boss.hp / boss.maxHp, 0, 1);
  const defense = tiamatDefensePercent(boss);
  const defenseLabel = state.language === "zh" ? "防御值" : "Defense";
  const type = typeById(boss.typeId) || boss;
  const display = displayType(type);
  const barWidth = Math.min(520, canvas.width - 120);
  const barHeight = 18;
  const x = (canvas.width - barWidth) / 2;
  const y = 16;
  ctx.save();
  ctx.fillStyle = "rgba(10, 8, 14, 0.76)";
  ctx.strokeStyle = "rgba(255, 235, 190, 0.72)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(x - 12, y - 8, barWidth + 24, 54, 10);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
  ctx.fillRect(x, y + 20, barWidth, barHeight);
  const gradient = ctx.createLinearGradient(x, y, x + barWidth, y);
  gradient.addColorStop(0, "#6fe66d");
  gradient.addColorStop(0.38, "#9bdcff");
  gradient.addColorStop(0.62, "#ffcf5f");
  gradient.addColorStop(1, "#ff4f4a");
  ctx.fillStyle = gradient;
  ctx.fillRect(x, y + 20, barWidth * health, barHeight);
  ctx.strokeStyle = "#fff0a8";
  ctx.strokeRect(x, y + 20, barWidth, barHeight);
  ctx.fillStyle = "#f8ead6";
  ctx.font = "700 16px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(display.name, canvas.width / 2, y + 8);
  ctx.font = "700 12px Arial";
  ctx.fillStyle = "#ffffff";
  const extra = boss.skills?.tiamatBoss ? `   ${defenseLabel} ${defense}%` : "";
  ctx.fillText(`${Math.ceil(Math.max(0, boss.hp))} / ${boss.maxHp}${extra}`, canvas.width / 2, y + 29);
  ctx.fillStyle = boss.team === "blue" ? "#6bbcff" : "#ff706c";
  ctx.beginPath();
  ctx.arc(x - 26, y + 29, 8, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawCornAim() {
  const unit = state.units.find((item) => item.id === state.cornAimId && !item.dead);
  if (!unit || !state.pointer) return;
  ctx.save();
  ctx.strokeStyle = "#ffe05a";
  ctx.fillStyle = "rgba(255, 224, 90, 0.12)";
  ctx.lineWidth = 4;
  ctx.setLineDash([12, 8]);
  ctx.beginPath();
  ctx.arc(state.pointer.x, state.pointer.y, 74, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.beginPath();
  ctx.moveTo(state.pointer.x - 92, state.pointer.y);
  ctx.lineTo(state.pointer.x + 92, state.pointer.y);
  ctx.moveTo(state.pointer.x, state.pointer.y - 92);
  ctx.lineTo(state.pointer.x, state.pointer.y + 92);
  ctx.stroke();
  ctx.strokeStyle = "rgba(255, 224, 90, 0.55)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(unit.x, unit.y);
  ctx.lineTo(state.pointer.x, state.pointer.y);
  ctx.stroke();
  ctx.restore();
}
function draw() {
  drawGround();
  drawTerrains();
  drawSlimes();
  drawWalls();
  const sorted = [...state.units].sort((a, b) => a.y - b.y);
  for (const unit of sorted) drawUnit(unit);
  drawProjectiles();
  drawTornadoes();
  drawParticles();
  drawBossHealthBar();
}

function updateUi() {
  const text = translations[state.language] || translations.zh;
  const levelClean = state.levelMode && !state.sandbox;
  const pvzClean = isPvzMode();
  appShell?.classList.toggle("level-clean", levelClean);
  document.body.classList.toggle("level-clean", levelClean);
  document.body.classList.toggle("pvz-clean", pvzClean);
  if (pvzClean) document.body.dataset.mode = "pvz";
  else if (levelClean) document.body.dataset.mode = "levels";
  else if (state.sandbox) document.body.dataset.mode = "sandbox";
  document
    .querySelectorAll(".level-only-hidden, .roster .panel-title, .roster > .toggle-row, .team-picker, .placement-batch, .share-tools, .map-tools, .enemy-size-row")
    .forEach((node) => {
      node.hidden = levelClean;
    });
  document.querySelectorAll(".level-tools").forEach((node) => {
    node.hidden = !levelClean;
  });
  document.querySelectorAll(".share-tools, .map-tools, .team-picker, .placement-batch, .roster > .toggle-row, .custom-builder, .enemy-size-row").forEach((node) => {
    node.hidden = levelClean || pvzClean;
  });
  document.querySelectorAll(".roster .panel-title").forEach((node) => {
    node.hidden = false;
  });
  if (pvzTools) pvzTools.hidden = !pvzClean;
  if (pvzShovelBtn) {
    pvzShovelBtn.classList.toggle("active", pvzClean && state.pvzShovel);
    pvzShovelBtn.textContent = state.language === "zh" ? "铲子" : "Shovel";
  }
  if (pvzBuyCountLabel) pvzBuyCountLabel.textContent = state.language === "zh" ? "放置植物数量" : "Plant Count";
  if (pvzBuyCountInput) {
    pvzBuyCountInput.max = "15";
    pvzBuyCountValue();
  }
  if (pvzBuySlotBtn) {
    const maxCells = pvzMaxCells();
    const allUnlocked = (state.pvzUnlockedCells || 0) >= maxCells;
    pvzBuySlotBtn.textContent = allUnlocked ? (state.language === "zh" ? "空格已满" : "All Cells") : (state.language === "zh" ? `购买空格 x${PVZ_CELLS_PER_PURCHASE} ${pvzCellCost()}` : `Buy Cells x${PVZ_CELLS_PER_PURCHASE} ${pvzCellCost()}`);
    pvzBuySlotBtn.disabled = !pvzClean || allUnlocked;
  }
  if (pvzSlotInfo) {
    const maxCells = pvzMaxCells();
    const unlocked = Math.max(0, Math.min(maxCells, state.pvzUnlockedCells || 0));
    pvzSlotInfo.textContent = state.language === "zh" ? `已解锁 ${unlocked}/${maxCells}` : `Unlocked ${unlocked}/${maxCells}`;
  }
  if (levelBudgetBox) levelBudgetBox.hidden = !levelClean;
  budgetText.textContent = state.sandbox ? text.infiniteMoney : isPvzMode() ? `${text.budget} ${state.budget} | ${state.language === "zh" ? "波数" : "Wave"} ${state.pvzWave}` : `${text.budget} ${state.budget}`;
  if (levelBudgetLabel) levelBudgetLabel.textContent = text.budget;
  if (levelBudgetText) levelBudgetText.textContent = state.budget;
  if (state.pendingRewardChoices.length) renderRewardModal();
  blueCount.textContent = state.units.filter((unit) => unit.team === "blue" && !unit.dead).length;
  redCount.textContent = state.units.filter((unit) => unit.team === "red" && !unit.dead).length;
  const labels = { setup: text.setup, battle: text.fight, paused: text.paused, ended: text.ended };
  phaseText.textContent = labels[state.phase];
  startBtn.disabled = state.phase === "battle";
  pauseBtn.disabled = state.phase === "setup" || state.phase === "ended";
  wallToolBtn.classList.toggle("active", state.mapTool === "wall");
  thickWallToolBtn.classList.toggle("active", state.mapTool === "thickWall");
  arrowWallToolBtn.classList.toggle("active", state.mapTool === "arrowWall");
  unbreakableWallToolBtn.classList.toggle("active", state.mapTool === "unbreakableWall");
  waterToolBtn.classList.toggle("active", state.mapTool === "water");
  fireTerrainToolBtn.classList.toggle("active", state.mapTool === "fire");
  grassToolBtn.classList.toggle("active", state.mapTool === "grass");
  highGroundToolBtn.classList.toggle("active", state.mapTool === "high");
  eraseTerrainBtn.classList.toggle("active", state.mapTool === "eraseTerrain");
  commandToolBtn.classList.toggle("active", state.mapTool === "command");
  focusToolBtn.classList.toggle("active", state.mapTool === "focus");
  eraseWallBtn.classList.toggle("active", state.mapTool === "eraseWall");
  wallToolBtn.disabled = state.phase !== "setup";
  thickWallToolBtn.disabled = state.phase !== "setup";
  arrowWallToolBtn.disabled = state.phase !== "setup";
  unbreakableWallToolBtn.disabled = state.phase !== "setup";
  waterToolBtn.disabled = state.phase !== "setup";
  fireTerrainToolBtn.disabled = state.phase !== "setup";
  grassToolBtn.disabled = state.phase !== "setup";
  highGroundToolBtn.disabled = state.phase !== "setup";
  eraseTerrainBtn.disabled = state.phase !== "setup";
  commandToolBtn.disabled = state.phase !== "battle";
  focusToolBtn.disabled = state.phase !== "battle";
  eraseWallBtn.disabled = state.phase !== "setup";
  clearWallsBtn.disabled = state.phase !== "setup" || state.walls.length === 0;
  blueTeamBtn.classList.toggle("active", state.placeTeam === "blue");
  redTeamBtn.classList.toggle("active", state.placeTeam === "red");
  const canPickTeam = !state.challengeMode && (state.sandbox || Boolean(state.selectedItem) || state.mapTool === "command" || state.mapTool === "focus");
  blueTeamBtn.disabled = !canPickTeam;
  redTeamBtn.disabled = state.challengeMode || !canPickTeam;
  sandboxToggle.checked = state.sandbox;
  sandboxToggle.disabled = state.challengeMode;
  if (exitChallengeBtn) exitChallengeBtn.disabled = !state.challengeMode;
  updateLevelUi();
  if (battlefieldWrap) battlefieldWrap.classList.toggle("item-aiming", state.phase === "battle" && Boolean(state.selectedItem));
  if (itemsTitle) itemsTitle.textContent = text.items;
  for (const button of itemButtons) {
    const itemId = button.dataset.item;
    const item = itemTypes[itemId];
    if (!item) continue;
    const name = text.itemNames[itemId] || itemId;
    const lockedByLevel = !isItemAllowedInCurrentMode(itemId);
    button.classList.toggle("selected", state.selectedItem === itemId);
    button.classList.toggle("locked", state.phase !== "battle" || lockedByLevel);
    button.disabled = false;
    button.innerHTML = `<b>${name}</b><small>${lockedByLevel ? "LOCK" : `${item.cost} ${text.budget}`}</small>`;
  }
  const cancelButton = itemBar?.querySelector("[data-item-cancel]");
  if (cancelButton) {
    cancelButton.classList.toggle("selected", !state.selectedItem);
    cancelButton.innerHTML = `<b>${text.itemCancel}</b><small>${text.itemCancelHint}</small>`;
  }
  const unit = controlledUnit();
  if (controlName && controlCooldowns) {
    if (!unit) {
      controlName.textContent = text.controlEmpty;
      controlCooldowns.innerHTML = `<span>${text.controlKeys}</span>`;
      controlPanel?.classList.remove("active");
    } else {
      const specials = controlledSpecials(unit);
      const specialText = specials.length
        ? specials.map((special) => `${special.name}: ${special.ready ? "OK" : Math.max(0, special.cd || 0).toFixed(1)}`).join(" / ")
        : "B: -";
      const build = controlledBuildName();
      controlName.textContent = `${text.controlSelected}: ${unit.name}`;
      controlCooldowns.innerHTML = `
        <span>HP ${Math.max(0, Math.ceil(unit.hp))}/${unit.maxHp}</span>
        <span>Space ${unit.cooldown <= 0 ? "OK" : unit.cooldown.toFixed(1)}</span>
        <span>V ${unit.secondAttack ? (unit.cooldown <= 0 ? "OK" : unit.cooldown.toFixed(1)) : "-"}</span>
        <span>B ${specialText}</span>
        <span>${state.language === "zh" ? "建造模式" : "Build mode"} ${state.controlBuildMode ? "ON" : "OFF"}: ${build.name} ${build.cost}</span>
        <span>${state.language === "zh" ? "建造冷却" : "Build CD"} ${(unit.buildCooldown || 0) <= 0 ? "OK" : unit.buildCooldown.toFixed(1)}</span>
        <span>X ${state.language === "zh" ? "拆附近建筑" : "Demolish nearby"}</span>
      `;
      controlPanel?.classList.add("active");
    }
  }
}

function renderUnitList() {
  unitList.innerHTML = "";
  const text = translations[state.language] || translations.en;
  const packs = isPvzMode()
    ? [{ title: state.language === "zh" ? "植物" : "Plants", types: unitTypes.filter((type) => PLANT_TYPE_IDS.has(type.id)) }]
    : [
    {
      title: state.language === "zh" ? "植物" : "Plants",
      types: unitTypes.filter((type) => PLANT_TYPE_IDS.has(type.id)),
    },
    {
      title: state.language === "zh" ? "兵种包 1" : "Unit Pack 1",
      types: unitTypes.filter((type) => type.id !== "arrowtower" && !PLANT_TYPE_IDS.has(type.id) && !UNIT_PACK_2_IDS.has(type.id) && !type.id.startsWith("custom-")),
    },
    {
      title: state.language === "zh" ? "兵种包 2" : "Unit Pack 2",
      types: unitTypes.filter((type) => type.id !== "arrowtower" && (UNIT_PACK_2_IDS.has(type.id) || type.id.startsWith("custom-"))),
    },
  ];  for (const pack of packs) {
    if (!pack.types.length) continue;
    const heading = document.createElement("div");
    heading.className = "unit-pack-title";
    heading.textContent = pack.title;
    unitList.appendChild(heading);
    for (const type of pack.types) {
      const display = displayType(type);
      const level = state.upgrades[type.id] || 0;
      const lockedForLevel = !isUnitAllowedInCurrentLevel(type);
      const button = document.createElement("button");
      button.className = `unit-card ${state.selected === type.id ? "selected" : ""} ${lockedForLevel ? "locked" : ""}`;
      button.innerHTML = `
        <span class="icon">${level ? `${type.glyph}+${level}` : type.glyph}</span>
        <span><b>${display.name}</b><small>${display.tag}</small></span>
        <span class="price">${lockedForLevel ? "LOCK" : isPvzMode() ? pvzPlantCost(type) : type.price}</span>
      `;
      button.addEventListener("click", () => {
        if (lockedForLevel) {
          setToast(levelBanMessage(type));
          return;
        }
        state.selected = type.id;
        eraseBtn.textContent = text.erase;
        renderUnitList();
        setToast(`${state.language === "zh" ? "已选择" : "Selected"} ${display.name}`);
      });
      unitList.appendChild(button);
    }
  }
}


canvas.addEventListener("pointerdown", (event) => {
  const point = worldPoint(event);
  state.pointer = point;
  if (isPvzMode() && state.pvzShovel && event.button === 0) {
    shovelPvzPlant(point);
    return;
  }
  if (event.button === 2) {
    event.preventDefault();
    const unit = controlledUnit();
    if (unit && state.phase === "battle") {
      buildControlledBuilding(unit);
      updateUi();
    }
    return;
  }
  if (state.phase === "setup" && isWallBuildTool()) {
    if (!state.wallStart) {
      state.wallStart = point;
      state.pointer = point;
      setToast((translations[state.language] || translations.en).wallStartHint);
    } else {
      addWall(state.wallStart, point);
      state.wallStart = null;
      state.pointer = null;
      updateUi();
    }
    updateUi();
    return;
  }
  if (state.phase === "setup" && terrainTypes[state.mapTool]) {
    addTerrain(point, state.mapTool);
    updateUi();
    return;
  }
  if (state.phase === "setup" && state.mapTool === "eraseTerrain") {
    eraseTerrain(point);
    updateUi();
    return;
  }
  if (state.phase === "battle" && event.button === 0 && handleCornPointer(point)) {
    return;
  }
  if (state.phase === "battle" && state.mapTool === "command") {
    issueCommand(point);
    updateUi();
    return;
  }
  if (state.phase === "battle" && state.mapTool === "focus") {
    issueFocus(point);
    updateUi();
    return;
  }
  if (state.phase === "setup" && state.mapTool === "eraseWall") {
    eraseWall(point);
    updateUi();
    return;
  }

  if (state.phase === "battle" && state.selectedItem) {
    castItemAt(state.selectedItem, point);
    return;
  }
  if (state.phase === "battle" && !state.selectedItem && !state.mapTool) {
    if (state.controlBuildMode && event.button === 0) {
      cycleControlledBuild();
      updateUi();
      return;
    }
    const unit = nearestUnit(point, state.sandbox ? null : "blue");
    const text = translations[state.language] || translations.en;
    if (unit && Math.hypot(unit.x - point.x, unit.y - point.y) <= unit.radius + 18) {
      selectControlledUnit(unit);
    } else if (state.plantMode && isPlantType(state.selected)) {
      placePlayerUnit(point);
    } else {
      setToast(text.noControlTarget);
    }
    return;
  }
  if (state.phase !== "setup") return;
  const existing = nearestUnit(point, state.sandbox ? null : "blue");
  if (isPvzMode()) {
    if (existing && existing.team === "blue" && isPlantType(typeById(existing.typeId)) && Math.hypot(existing.x - point.x, existing.y - point.y) <= existing.radius + 18) {
      setToast(state.language === "zh" ? "PvZ 里植物不能拖动，要删除请用铲子" : "Plants cannot be dragged in PvZ. Use the shovel to remove them.");
      return;
    }
    placePlayerUnit(point);
    return;
  }
  if (existing) {
    if (state.selected === "erase") {
      removeUnit(existing);
      setToast("Unit removed");
      return;
    }
    state.dragging = existing;
    canvas.setPointerCapture(event.pointerId);
    return;
  }
  if (state.selected === "erase") return;
  placePlayerUnit(point);
});
canvas.addEventListener("pointermove", (event) => {
  state.pointer = worldPoint(event);
  if (isWallBuildTool() && state.wallStart) return;
  if (!state.dragging) return;
  const point = state.pointer;
  const maxX = state.sandbox ? canvas.width - state.dragging.radius : blueZone() - 18;
  state.dragging.x = Math.max(state.dragging.radius, Math.min(maxX, point.x));
  state.dragging.y = Math.max(state.dragging.radius, Math.min(canvas.height - state.dragging.radius, point.y));
});

canvas.addEventListener("pointerup", () => {
  state.dragging = null;
});

canvas.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

window.addEventListener("keydown", (event) => {
  const tag = event.target?.tagName;
  if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;
  const key = event.key.toLowerCase();
  if (["w", "a", "s", "d"].includes(key)) {
    state.controlKeys[key] = true;
    event.preventDefault();
    return;
  }
  if (event.code === "Space") {
    const unit = controlledUnit();
    if (unit && state.phase === "battle") {
      controlledPrimaryAttack(unit);
      event.preventDefault();
    }
    return;
  }
  if (key === "v") {
    const unit = controlledUnit();
    if (unit && state.phase === "battle") {
      controlledSecondAttack(unit);
      event.preventDefault();
    }
    return;
  }
  if (key === "b") {
    const unit = controlledUnit();
    if (unit && state.phase === "battle") {
      controlledSpecialAttack(unit);
      event.preventDefault();
    }
    return;
  }
  if (key === "o") {
    const unit = controlledUnit();
    if (unit && state.phase === "battle") {
      toggleControlledBuildMode();
      event.preventDefault();
    }
    return;
  }
  if (key === "p") {
    const unit = controlledUnit();
    if (unit && state.phase === "battle") {
      buildControlledBuilding(unit);
      event.preventDefault();
    }
    return;
  }
  if (key === "x") {
    const unit = controlledUnit();
    if (unit && state.phase === "battle") {
      demolishControlledBuilding(unit);
      event.preventDefault();
    }
  }
});

window.addEventListener("keyup", (event) => {
  const tag = event.target?.tagName;
  if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;
  const key = event.key.toLowerCase();
  if (["w", "a", "s", "d"].includes(key)) {
    state.controlKeys[key] = false;
    event.preventDefault();
  }
});

startBtn.addEventListener("click", startBattle);
pauseBtn.addEventListener("click", pauseBattle);
resetBtn.addEventListener("click", () => {
  if (isPvzMode()) {
    resetPvzEndless();
    renderUnitList();
    updateUi();
    setToast(state.language === "zh" ? "植物无尽已重置" : "PvZ Endless reset");
    return;
  }
  resetGame(false);
});
sandboxModeBtn?.addEventListener("click", enterSandboxMode);
levelsModeBtn?.addEventListener("click", enterLevelsMode);
pvzModeBtn?.addEventListener("click", enterPvzMode);
pvzBuySlotBtn?.addEventListener("click", buyPvzEmptyCell);
pvzShovelBtn?.addEventListener("click", () => {
  if (!isPvzMode()) return;
  state.pvzShovel = !state.pvzShovel;
  state.selectedItem = null;
  state.mapTool = null;
  updateUi();
  setToast(state.pvzShovel ? (state.language === "zh" ? "铲子开启：点击植物删除" : "Shovel on: click a plant to remove it") : (state.language === "zh" ? "铲子关闭" : "Shovel off"));
});
homeBtn?.addEventListener("click", showHome);
randomBtn.addEventListener("click", randomFormation);
exportFormationBtn?.addEventListener("click", exportFormation);
importFormationBtn?.addEventListener("click", importFormation);
exitChallengeBtn?.addEventListener("click", exitChallengeMode);
loadLevelBtn?.addEventListener("click", () => loadLevel(Number(levelSelect?.value) || 1));
levelSelect?.addEventListener("change", updateLevelUi);
saveSlotBtns.forEach((button, index) => button?.addEventListener("click", () => saveFormationSlot(index + 1)));
loadSlotBtns.forEach((button, index) => button?.addEventListener("click", () => loadFormationSlot(index + 1)));
upgradeSelectedBtn?.addEventListener("click", upgradeSelectedUnitType);
controlBuildNextBtn?.addEventListener("click", () => {
  cycleControlledBuild();
});
controlBuildPlaceBtn?.addEventListener("click", () => {
  const unit = controlledUnit();
  if (unit && state.phase === "battle") buildControlledBuilding(unit, true);
  else setToast((translations[state.language] || translations.en).controlEmpty);
});
controlDemolishBtn?.addEventListener("click", () => {
  const unit = controlledUnit();
  if (unit && state.phase === "battle") demolishControlledBuilding(unit);
  else setToast((translations[state.language] || translations.en).controlEmpty);
});
wallToolBtn.addEventListener("click", () => {
  if (state.phase !== "setup") return;
  state.mapTool = state.mapTool === "wall" ? null : "wall";
  state.wallStart = null;
  state.pointer = null;
  state.selectedItem = null;
  updateUi();
  setToast(state.mapTool === "wall" ? (state.language === "zh" ? "点一下起点，再点一下终点放墙" : "Click a start point, then an end point") : (state.language === "zh" ? "墙工具关闭" : "Wall tool off"));
});
thickWallToolBtn.addEventListener("click", () => {
  if (state.phase !== "setup") return;
  state.mapTool = state.mapTool === "thickWall" ? null : "thickWall";
  state.wallStart = null;
  state.pointer = null;
  state.selectedItem = null;
  updateUi();
  setToast(state.mapTool === "thickWall" ? (state.language === "zh" ? "点一下起点，再点一下终点放厚墙" : "Click a start point, then an end point for a thick wall") : (state.language === "zh" ? "厚墙工具关闭" : "Thick wall tool off"));
});
arrowWallToolBtn.addEventListener("click", () => {
  if (state.phase !== "setup") return;
  state.mapTool = state.mapTool === "arrowWall" ? null : "arrowWall";
  state.wallStart = null;
  state.pointer = null;
  state.selectedItem = null;
  updateUi();
  setToast(state.mapTool === "arrowWall" ? (state.language === "zh" ? "点一下起点，再点一下终点放透射墙" : "Click a start point, then an end point for an arrow wall") : (state.language === "zh" ? "透射墙工具关闭" : "Arrow wall tool off"));
});
unbreakableWallToolBtn.addEventListener("click", () => {
  if (state.phase !== "setup") return;
  state.mapTool = state.mapTool === "unbreakableWall" ? null : "unbreakableWall";
  state.wallStart = null;
  state.pointer = null;
  state.selectedItem = null;
  updateUi();
  setToast(state.mapTool === "unbreakableWall" ? (state.language === "zh" ? "点一下起点，再点一下终点放不可破坏墙" : "Click a start point, then an end point for an unbreakable wall") : (state.language === "zh" ? "不可破坏墙工具关闭" : "Unbreakable wall tool off"));
});
[
  [waterToolBtn, "water"],
  [fireTerrainToolBtn, "fire"],
  [grassToolBtn, "grass"],
  [highGroundToolBtn, "high"],
  [eraseTerrainBtn, "eraseTerrain"],
].forEach(([button, tool]) => {
  button?.addEventListener("click", () => {
    if (buildingTypes[tool]) {
      setToast(state.language === "zh" ? "建筑需要开战后控制兵种：O选择，P建造" : "Buildings are built by controlled units: O pick, P build");
      return;
    }
    if (state.phase !== "setup") return;
    if (state.challengeMode && tool === "goldMine") {
      setToast(state.language === "zh" ? "挑战模式不能使用金矿" : "Gold mines are disabled in challenge mode");
      return;
    }
    state.mapTool = state.mapTool === tool ? null : tool;
    state.wallStart = null;
    state.pointer = null;
    state.selectedItem = null;
    updateUi();
    const building = buildingTypes[tool];
    const terrain = terrainTypes[tool];
    const name = building ? (state.language === "zh" ? building.zh : building.name) : terrain ? (state.language === "zh" ? terrain.zh : terrain.name) : state.language === "zh" ? "删地形" : "Erase terrain";
    setToast(state.mapTool === tool ? (state.language === "zh" ? `点击地图使用${name}` : `Click the map to use ${name}`) : (state.language === "zh" ? `${name}关闭` : `${name} off`));
  });
});
commandToolBtn.addEventListener("click", () => {
  if (state.phase !== "battle") return;
  state.mapTool = state.mapTool === "command" ? null : "command";
  state.wallStart = null;
  state.pointer = null;
  state.selectedItem = null;
  updateUi();
  setToast(state.mapTool === "command" ? (translations[state.language] || translations.en).commandHint : (state.language === "zh" ? "指挥关闭" : "Command off"));
});
focusToolBtn.addEventListener("click", () => {
  if (state.phase !== "battle") return;
  state.mapTool = state.mapTool === "focus" ? null : "focus";
  state.wallStart = null;
  state.pointer = null;
  state.selectedItem = null;
  updateUi();
  setToast(state.mapTool === "focus" ? (translations[state.language] || translations.en).focusHint : (state.language === "zh" ? "集火关闭" : "Focus off"));
});
eraseWallBtn.addEventListener("click", () => {
  if (state.phase !== "setup") return;
  state.mapTool = state.mapTool === "eraseWall" ? null : "eraseWall";
  state.wallStart = null;
  state.pointer = null;
  state.selectedItem = null;
  updateUi();
  setToast(state.mapTool === "eraseWall" ? (state.language === "zh" ? "点击墙删除" : "Click a wall to erase it") : (state.language === "zh" ? "删墙关闭" : "Erase wall off"));
});
clearWallsBtn.addEventListener("click", () => {
  if (state.phase !== "setup") return;
  state.walls = [];
  state.mapTool = null;
  state.wallStart = null;
  state.pointer = null;
  updateUi();
  setToast(state.language === "zh" ? "墙已清空" : "Walls cleared");
});
if (itemBar) {
  itemBar.addEventListener("pointerdown", (event) => {
    const cancelButton = event.target.closest("[data-item-cancel]");
    if (cancelButton) {
      event.preventDefault();
      state.selectedItem = null;
      updateUi();
      setToast((translations[state.language] || translations.en).itemCancel);
      return;
    }
    const button = event.target.closest("[data-item]");
    if (!button) return;
    event.preventDefault();
    button.blur();
    selectItem(button.dataset.item);
  });
}
if (rewardCards) {
  rewardCards.addEventListener("pointerdown", (event) => {
    const button = event.target.closest("[data-reward-id]");
    if (!button) return;
    event.preventDefault();
    event.stopPropagation();
    chooseRewardCard(button.dataset.rewardId);
  });
}
eraseBtn.addEventListener("click", () => {
  state.selected = state.selected === "erase" ? unitTypes[0].id : "erase";
  renderUnitList();
  eraseBtn.textContent = state.selected === "erase" ? "Stop Erasing" : "Erase";
  setToast(state.selected === "erase" ? "Click a unit to remove it" : "Continue placing units");
});
enemySlider.addEventListener("input", () => {
  if (state.challengeMode) {
    syncBudgetToEnemySize();
    updateUi();
    return;
  }
  if (state.phase === "setup") {
    spawnEnemyArmy();
    syncBudgetToEnemySize();
    updateUi();
  }
});
sandboxToggle.addEventListener("change", () => {
  if (state.challengeMode) {
    state.sandbox = false;
    sandboxToggle.checked = false;
    setToast(state.language === "zh" ? "挑战模式不能开启沙盒" : "Sandbox is locked in challenge mode");
    updateUi();
    return;
  }
  state.sandbox = sandboxToggle.checked;
  if (state.sandbox) {
    state.challengeMode = false;
    state.levelMode = false;
    state.currentLevel = 0;
    document.body.dataset.mode = "sandbox";
  }
  state.placeTeam = state.sandbox ? state.placeTeam : "blue";
  if (state.sandbox) {
    setToast("Sandbox on: infinite gold, red and blue placement enabled");
  } else {
    setToast("Normal mode: blue left side, limited gold");
  }
  updateUi();
});
blueTeamBtn.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  if (!state.sandbox && !state.selectedItem && state.mapTool !== "command" && state.mapTool !== "focus" && !buildingTypes[state.mapTool]) return;
  state.placeTeam = "blue";
  setToast(state.mapTool === "focus" ? "Focus team: Blue" : state.mapTool === "command" ? "Command team: Blue" : buildingTypes[state.mapTool] ? "Building team: Blue" : state.selectedItem ? "Item team: Blue" : "Placing team: Blue");
  updateUi();
});
redTeamBtn.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  if (!state.sandbox && !state.selectedItem && state.mapTool !== "command" && state.mapTool !== "focus" && !buildingTypes[state.mapTool]) return;
  state.placeTeam = "red";
  setToast(state.mapTool === "focus" ? "Focus team: Red" : state.mapTool === "command" ? "Command team: Red" : buildingTypes[state.mapTool] ? "Building team: Red" : state.selectedItem ? "Item team: Red" : "Placing team: Red");
  updateUi();
});
customWeapon.addEventListener("change", () => {
  const profile = weaponProfiles[customWeapon.value] || weaponProfiles.club;
  const rangedWeapon = ["bow", "musket", "cannon"].includes(customWeapon.value);
  customRanged.checked = rangedWeapon;
  customRange.value = rangedWeapon ? profile.range : profile.range;
  customStopDistance.value = rangedWeapon ? Math.max(110, Math.round(profile.range * 0.72)) : Math.min(profile.range, 42);
  customSize.value = profile.radius;
  customKnockback.value = profile.knockback;
});
customSecondWeapon.addEventListener("change", () => {
  if (customSecondWeapon.value === "none") {
    customSecondRange.value = 0;
    customSecondDamage.value = 0;
    customSecondRanged.checked = false;
    return;
  }
  const profile = weaponProfiles[customSecondWeapon.value] || weaponProfiles.club;
  const rangedWeapon = ["bow", "musket", "cannon"].includes(customSecondWeapon.value);
  customSecondRanged.checked = rangedWeapon;
  customSecondRange.value = rangedWeapon ? Math.max(profile.range, 320) : profile.range;
  customSecondDamage.value = Math.max(12, Math.round(Number(customDamage.value) || 22));
});
createCustomBtn.addEventListener("click", createCustomUnitType);
languageSelect.addEventListener("change", () => applyLanguage(languageSelect.value));
languageSelect.addEventListener("input", () => applyLanguage(languageSelect.value));

function loop(now) {
  const dt = (now - state.lastTime) / 1000;
  state.lastTime = now;
  update(dt);
  draw();
  requestAnimationFrame(loop);
}

renderUnitList();
renderLevelSelect();
spawnEnemyArmy();
applyLanguage(languageSelect.value);
setInterval(syncLanguage, 200);
requestAnimationFrame(loop);














































































