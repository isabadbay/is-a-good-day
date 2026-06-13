const canvas = document.querySelector("#battlefield");
const ctx = canvas.getContext("2d");
const battlefieldWrap = document.querySelector(".battlefield-wrap");
const unitList = document.querySelector("#unitList");
const budgetText = document.querySelector("#budgetText");
const blueCount = document.querySelector("#blueCount");
const redCount = document.querySelector("#redCount");
const phaseText = document.querySelector("#phaseText");
const controlPanel = document.querySelector("#controlPanel");
const controlTitle = document.querySelector("#controlTitle");
const controlName = document.querySelector("#controlName");
const controlCooldowns = document.querySelector("#controlCooldowns");
const toast = document.querySelector("#toast");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");
const eraseBtn = document.querySelector("#eraseBtn");
const randomBtn = document.querySelector("#randomBtn");
const enemySlider = document.querySelector("#enemySlider");
const speedSlider = document.querySelector("#speedSlider");
const sandboxToggle = document.querySelector("#sandboxToggle");
const blueTeamBtn = document.querySelector("#blueTeamBtn");
const redTeamBtn = document.querySelector("#redTeamBtn");
const batchPlaceLabel = document.querySelector("#batchPlaceLabel");
const batchPlaceCount = document.querySelector("#batchPlaceCount");
const exportFormationBtn = document.querySelector("#exportFormationBtn");
const importFormationBtn = document.querySelector("#importFormationBtn");
const exitChallengeBtn = document.querySelector("#exitChallengeBtn");
const formationCode = document.querySelector("#formationCode");
const wallToolBtn = document.querySelector("#wallToolBtn");
const thickWallToolBtn = document.querySelector("#thickWallToolBtn");
const arrowWallToolBtn = document.querySelector("#arrowWallToolBtn");
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
]);

const PLANT_TYPE_IDS = new Set(["sunflower", "peashooter", "repeater", "gatlingshooter", "chomper"]);

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

const translations = {
  zh: {
    subtitle: "布阵、开战、看小人乱斗",
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
    controlKeys: "WASD移动 / 空格攻击 / V第二攻击 / B特殊",
    controlSelected: "正在操控",
    noControlTarget: "没有可操控兵种",
    noSpecialReady: "没有可用特殊技能",
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
    itemCast: "道具已释放",
    itemHit: "喷中友军",
    itemCancel: "取消道具",
    itemCancelHint: "停止瞄准",
    blueWin: "蓝队胜利",
    redWin: "红队胜利",
    mapWall: "墙",
    mapThickWall: "厚墙",
    mapArrowWall: "透射墙",
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
      sunflower: ["向日葵", "产金币"],
      peashooter: ["豌豆射手", "固定远程"],
      repeater: ["双发射手", "双发豌豆"],
      gatlingshooter: ["机枪射手", "狂暴扫射"],
      chomper: ["大嘴花", "吞咬爆发"],
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
    controlKeys: "WASD Move / Space Attack / V Second / B Skill",
    controlSelected: "Controlling",
    noControlTarget: "No controllable unit",
    noSpecialReady: "No special skill ready",
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
    itemCast: "Item used",
    itemHit: "Friendly units hit",
    itemCancel: "Cancel Item",
    itemCancelHint: "stop aiming",
    blueWin: "Blue wins",
    redWin: "Red wins",
    mapWall: "Wall",
    mapThickWall: "Thick Wall",
    mapArrowWall: "Arrow Wall",
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
      sunflower: ["Sunflower", "Gold Producer"],
      peashooter: ["Peashooter", "Rooted Ranged"],
      repeater: ["Repeater", "Double Pea"],
      gatlingshooter: ["Gatling Shooter", "Fan Barrage"],
      chomper: ["Chomper", "Bite Blast"],
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
  commandToolBtn.textContent = text.mapCommand;
  focusToolBtn.textContent = text.mapFocus;
  eraseWallBtn.textContent = text.mapEraseWall;
  clearWallsBtn.textContent = text.mapClearWalls;
  setText(".custom-builder summary", text.custom);
  createCustomBtn.textContent = text.create;
  setText(".inspector .panel-title h2", text.battle);
  if (controlTitle) controlTitle.textContent = text.control;
  const rangeRows = document.querySelectorAll(".range-row");
  if (rangeRows[0]) rangeRows[0].childNodes[0].textContent = text.enemySize;
  if (rangeRows[1]) rangeRows[1].childNodes[0].textContent = text.speed;
  if (state.selected !== "erase") eraseBtn.textContent = text.erase;
  randomBtn.textContent = text.random;
  applyFormLanguage(text);
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

const unitTypes = [
  {
    id: "clubber",
    name: "Clubber",
    tag: "Melee",
    glyph: "C",
    price: 80,
    hp: 74,
    damage: 14,
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
    price: 130,
    hp: 140,
    damage: 9,
    range: 30,
    speed: 38,
    radius: 18,
    cooldown: 0.58,
    knockback: 1.9,
    weapon: "shield",
    color: "#6fd4ff",
  },
  {
    id: "spear",
    name: "Spearman",
    tag: "Pierce",
    glyph: "P",
    price: 150,
    hp: 86,
    damage: 24,
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
    price: 170,
    hp: 58,
    damage: 17,
    range: 220,
    speed: 34,
    radius: 14,
    cooldown: 0.95,
    projectileSpeed: 420,
    weapon: "bow",
    color: "#9fd7ff",
  },
  {
    id: "berserker",
    name: "Berserker",
    tag: "Fast",
    glyph: "B",
    price: 115,
    hp: 68,
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
    price: 210,
    hp: 130,
    damage: 31,
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
    price: 260,
    hp: 64,
    damage: 42,
    range: 310,
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
    price: 420,
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
    price: 240,
    hp: 185,
    damage: 24,
    range: 36,
    speed: 36,
    radius: 20,
    cooldown: 0.78,
    knockback: 2.6,
    weapon: "spear",
    skills: { blockRangedChance: 0.28 },
    color: "#6f9adf",
  },
  {
    id: "assassin",
    name: "Assassin",
    tag: "Dodger",
    glyph: "X",
    price: 190,
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
    price: 230,
    hp: 70,
    damage: 32,
    range: 260,
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
    price: 250,
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
    price: 380,
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
    price: 280,
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
    price: 320,
    hp: 250,
    damage: 38,
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
    price: 145,
    hp: 78,
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
    price: 260,
    hp: 165,
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
    price: 330,
    hp: 120,
    damage: 27,
    range: 235,
    stopDistance: 165,
    speed: 44,
    radius: 18,
    cooldown: 1.05,
    projectileSpeed: 420,
    weapon: "bow",
    areaAttack: { range: 45, damage: 16 },
    secondAttack: { weapon: "club", range: 38, damage: 22, ranged: false, projectileSpeed: 0, splash: 0, cooldown: 0.72 },
    skills: { fireBreath: true, fireball: true },
    color: "#f47b55",
  },
  {
    id: "adultdragon",
    name: "Adult Dragon",
    tag: "Fire Tyrant",
    glyph: "D",
    price: 1200,
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
    id: "firebeast",
    name: "Blast Beast",
    tag: "Area",
    glyph: "F",
    price: 430,
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
    price: 360,
    hp: 220,
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
    price: 470,
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
    price: 310,
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
    price: 390,
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
    price: 410,
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
    price: 440,
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
    price: 520,
    hp: 310,
    damage: 42,
    range: 50,
    speed: 22,
    radius: 27,
    cooldown: 1.35,
    knockback: 4.1,
    weapon: "hammer",
    areaAttack: { range: 90, damage: 18 },
    skills: { freezeAttack: true, damageAura: true, damageAuraRange: 95, damageAuraDamage: 6, blockRangedChance: 0.18 },
    color: "#9fd8ff",
  },
  {
    id: "sharpshooter",
    name: "Sharpshooter",
    tag: "Snipe",
    glyph: "!",
    price: 360,
    hp: 55,
    damage: 66,
    range: 360,
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
    price: 560,
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
    price: 250,
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
    price: 520,
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
    price: 430,
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
    price: 460,
    hp: 260,
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
    price: 610,
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
    price: 370,
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
    price: 520,
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
    price: 160,
    hp: 115,
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
    id: "peashooter",
    name: "Peashooter",
    tag: "Rooted Ranged",
    glyph: "PS",
    price: 180,
    hp: 70,
    damage: 18,
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
    price: 300,
    hp: 85,
    damage: 18,
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
    price: 550,
    hp: 115,
    damage: 9,
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
    id: "chomper",
    name: "Chomper",
    tag: "Bite Blast",
    glyph: "CH",
    price: 650,
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
    skills: { rooted: true, chompBlast: true, chompDamage: 450, chompRange: 200, chompCooldown: 30 },
    color: "#8b4bc1",
  },
];

let customUnitCounter = 1;

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
  challengeMode: false,
  challengeBudget: 0,
  language: "en",
  budget: 900,
  units: [],
  projectiles: [],
  particles: [],
  slimes: [],
  tornadoes: [],
  walls: [],
  commands: { blue: null, red: null },
  focusTargets: { blue: null, red: null },
  controlledId: null,
  controlKeys: {},
  controlSpecialIndex: 0,
  nextId: 1,
  dragging: null,
  lastTime: performance.now(),
  winnerShown: false,
};

function typeById(id) {
  return unitTypes.find((type) => type.id === id);
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

function isPlantType(typeOrId) {
  const id = typeof typeOrId === "string" ? typeOrId : typeOrId?.id;
  return PLANT_TYPE_IDS.has(id);
}

function syncBudgetToEnemySize() {
  if (state.sandbox) return;
  const baseBudget = state.challengeMode ? state.challengeBudget : totalBudgetForEnemySize();
  state.budget = Math.max(0, baseBudget - blueArmyCost() - wallTotalCost());
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
  const thickMultiplier = wall.type === "thick" ? 2.35 : wall.type === "arrow" ? 1.35 : 1;
  return Math.ceil((40 + Math.max(wall.w, wall.h) * 0.4) * 2 * thickMultiplier);
}

function wallMaxHp(wall) {
  const length = Math.max(wall.w, wall.h);
  if (wall.type === "thick") return Math.ceil(260 + length * 3.2);
  if (wall.type === "arrow") return Math.ceil(90 + length * 1.15);
  return Math.ceil(120 + length * 1.55);
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
  const thickness = thick ? 48 : arrow ? 22 : 28;
  const wall = {
    x: clamp(horizontal ? (start.x + end.x) / 2 : start.x, 30, canvas.width - 30),
    y: clamp(horizontal ? start.y : (start.y + end.y) / 2, 30, canvas.height - 30),
    w: horizontal ? length : thickness,
    h: horizontal ? thickness : length,
    type: thick ? "thick" : arrow ? "arrow" : "normal",
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

function damageWallsAt(x, y, radius, damage) {
  for (const wall of state.walls) {
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
  wall.maxHp ??= wallMaxHp(wall);
  wall.hp ??= wall.maxHp;
  wall.hp -= damage;
  state.particles.push({ x, y, life: 0.45, startLife: 0.45, color: "#d8d0a8", size: 26 });
  state.walls = state.walls.filter((candidate) => (candidate.hp ?? wallMaxHp(candidate)) > 0);
}

function wallTargetNear(unit, target = null) {
  if (unit.canAttackWalls === false) return null;
  let best = null;
  let bestDistance = Infinity;
  for (const wall of state.walls) {
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
  const lookX = unit.x + (target.x - unit.x) * 0.42;
  const lookY = unit.y + (target.y - unit.y) * 0.42;
  let blocker = null;
  for (const wall of state.walls) {
    if (segmentHitsWall(unit.x, unit.y, lookX, lookY, wall, unit.radius + 10)) {
      blocker = wall;
      break;
    }
  }
  if (!blocker) return target;
  const margin = unit.radius + 32;
  const candidates =
    blocker.w >= blocker.h
      ? [
          { x: blocker.x, y: blocker.y - blocker.h / 2 - margin },
          { x: blocker.x, y: blocker.y + blocker.h / 2 + margin },
        ]
      : [
          { x: blocker.x - blocker.w / 2 - margin, y: blocker.y },
          { x: blocker.x + blocker.w / 2 + margin, y: blocker.y },
        ];
  let best = candidates[0];
  let bestScore = Infinity;
  for (const candidate of candidates) {
    const x = clamp(candidate.x, unit.radius, canvas.width - unit.radius);
    const y = clamp(candidate.y, unit.radius, canvas.height - unit.radius);
    const score = Math.hypot(unit.x - x, unit.y - y) + Math.hypot(target.x - x, target.y - y);
    if (score < bestScore) {
      best = { x, y };
      bestScore = score;
    }
  }
  return best;
}

function isWallBuildTool(tool = state.mapTool) {
  return tool === "wall" || tool === "thickWall" || tool === "arrowWall";
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
    hp: type.hp,
    maxHp: type.hp,
    damage: type.damage,
    range: type.range,
    burstCount: type.burstCount || 1,
    burstCooldown: type.burstCooldown || 0,
    stopDistance: type.stopDistance ?? type.range,
    speed: type.speed,
    radius: type.radius,
    cooldownTime: type.cooldown,
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
    gatlingBoosted: false,
    gatlingCheckTimer: type.skills?.gatling ? type.skills.gatlingCheckInterval || 3 : 0,
    chompCooldown: type.skills?.chompBlast ? 1.2 : 0,
    stasisCooldown: 1 + Math.random() * 2,
    fireBreathCooldown: type.skills?.fireBreath ? 0.8 + Math.random() * 1.1 : 0,
    fireballCooldown: 1.5 + Math.random() * 2,
    randomSpawnCooldown: type.skills?.randomSpawn ? type.skills.randomSpawnInterval || 5 : 0,
    whirlwindCooldown: type.skills?.whirlwindLeap ? 1.2 + Math.random() * 1.8 : 0,
    airborneTimer: 0,
    airborneTotal: 0,
    damageAuraPulse: 0,
    slimeCooldown: 0,
    tornadoCooldown: 1 + Math.random() * 1.5,
    berserked: false,
    color: tint,
    cooldown: Math.random() * 0.4,
    wobble: Math.random() * Math.PI * 2,
    dead: false,
  };
  state.units.push(unit);
  return unit;
}

function spendFor(type) {
  if (state.sandbox) return;
  state.budget -= type.price;
  updateUi();
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
  const type = typeById(state.selected);
  if (!type) return;
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
  return type === "thick" ? "t" : type === "arrow" ? "a" : "n";
}

function wallTypeFromCode(code) {
  return code === "t" ? "thick" : code === "a" ? "arrow" : "normal";
}

function compactCustomType(type) {
  return {
    id: type.id,
    name: type.name,
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
  ].join("."));
  const customPart = customTypes.length ? bytesToBase64(new TextEncoder().encode(JSON.stringify(customTypes))) : "";
  const payload = `1|${units.join(",")}|${walls.join(",")}|${customPart}`;
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
    const [version, unitPart = "", wallPart = "", customPart = ""] = raw.split("|");
    if (version !== "1") throw new Error("bad short version");
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
            const [x, y, w, h, type] = entry.split(".");
            return {
              x: expandNumber(x),
              y: expandNumber(y),
              w: expandNumber(w),
              h: expandNumber(h),
              type: wallTypeFromCode(type),
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
        type: ["normal", "thick", "arrow"].includes(saved.type) ? saved.type : "normal",
        challengeImported: true,
      };
      wall.maxHp = wallMaxHp(wall);
      wall.hp = wall.maxHp;
      return wall;
    });
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

function isMagicOrPoisonDamage(source) {
  return (
    source.damageType === "poison" ||
    source.damageType === "tornado" ||
    source.damageType === "fire" ||
    source.damageType === "ice" ||
    source.damageType === "fireball" ||
    source.applyBurn ||
    source.applyFreeze ||
    source.fireball
  );
}

function isFireDamage(source) {
  return source.damageType === "fire" || source.damageType === "fireball" || source.applyBurn || source.fireball;
}

function itemTeam() {
  return state.selectedItem ? state.placeTeam : state.sandbox ? state.placeTeam : "blue";
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
    hurt(unit, projectile.damage * falloff, {
      x: projectile.x,
      y: projectile.y,
      knockback: 4.2,
      ignoreDodge: true,
      isRanged: true,
      applyBurn: true,
      fireDuration: projectile.fireDuration || 4,
      damageType: projectile.damageType || "fireball",
      owner,
    });
    burnUnit(unit, projectile.fireDuration || 4);
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
      color: Math.random() < 0.5 ? "#ff7838" : "#ffd15a",
      size: 20 + Math.random() * 26,
    });
  }
  addRingParticle(projectile.x, projectile.y, "#ff7838", projectile.splash);
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
        color: Math.random() < 0.5 ? "#ff7838" : "#ffd15a",
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
    const closestX = clamp(unit.x + Math.cos(angle) * range * 0.65, wall.x - wall.w / 2, wall.x + wall.w / 2);
    const closestY = clamp(unit.y + Math.sin(angle) * range * 0.65, wall.y - wall.h / 2, wall.y + wall.h / 2);
    const dx = closestX - unit.x;
    const dy = closestY - unit.y;
    const distance = Math.hypot(dx, dy);
    if (distance > range || distance < 1) continue;
    const delta = Math.abs(Math.atan2(Math.sin(Math.atan2(dy, dx) - angle), Math.cos(Math.atan2(dy, dx) - angle)));
    if (delta <= width) damageWall(wall, Math.max(8, unit.damage * 0.22), closestX, closestY);
  }
  if (!freeCast) unit.fireBreathCooldown = unit.typeId === "adultdragon" ? 2.6 : 3.4;
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

function spawnTornado(unit, target) {
  state.tornadoes.push({
    x: unit.x + (target.x - unit.x) * 0.35,
    y: unit.y + (target.y - unit.y) * 0.35,
    team: unit.team,
    vx: (target.x - unit.x) * 0.32,
    vy: (target.y - unit.y) * 0.32,
    radius: unit.skills.tornadoRange || 82,
    damage: unit.skills.tornadoDamage || 6,
    spin: Math.random() < 0.5 ? -1 : 1,
    life: unit.skills.tornadoDuration || 4.2,
    poison: Boolean(unit.skills.poisonSlime),
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

function resetGame(keepEnemies = false) {
  state.phase = "setup";
  state.budget = totalBudgetForEnemySize();
  state.units = keepEnemies ? state.units.filter((unit) => unit.team === "red") : [];
  state.projectiles = [];
  state.particles = [];
  state.slimes = [];
  state.tornadoes = [];
  state.walls = [];
  state.commands = { blue: null, red: null };
  state.focusTargets = { blue: null, red: null };
  state.plantMode = false;
  state.challengeMode = false;
  state.challengeBudget = 0;
  state.dragging = null;
  state.controlledId = null;
  state.controlKeys = {};
  state.controlSpecialIndex = 0;
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
    const possible = state.sandbox ? order : order.filter((id) => typeById(id).price <= state.budget);
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
  if (!state.units.some((unit) => unit.team === "red") && !state.challengeMode) {
    spawnEnemyArmy();
  }
  if (!state.units.some((unit) => unit.team === "red")) {
    setToast("No challenge enemy loaded");
    return;
  }
  state.commands = { blue: null, red: null };
  state.focusTargets = { blue: null, red: null };
  state.plantMode = state.selected === "sunflower" || state.units.some((unit) => unit.team === "blue" && unit.typeId === "sunflower");
  if (state.plantMode && !state.sandbox) {
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
  const text = translations[state.language] || translations.en;
  if (unit) setToast(`${text.controlSelected}: ${unit.name}`);
  updateUi();
}

function controlledPrimaryAttack(unit) {
  if (!unit || unit.cooldown > 0) return;
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
  const baseAngle = controlAimAngle(unit, Math.max(mode.range || unit.range || 280, 280));
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
      fireDuration: unit.skills.fireDuration || 5,
      applyFreeze: unit.skills.freezeAttack,
      damageType: unit.skills.fireBreath ? "fire" : unit.skills.freezeAttack ? "ice" : null,
      life: mode.weapon === "musket" ? 0.9 : 1.8,
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
  const candidates = unitTypes.filter((type) => !type.id.startsWith("custom-") && type.id !== "portalmage");
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
  if (source.applyBurn) burnUnit(target, source.fireDuration || 5);
  if (source.applyFreeze) freezeUnit(target, 2.4);
  target.hp -= amount;
  updateBerserk(target);
  const angle = Math.atan2(target.y - source.y, target.x - source.x);
  const knockback = target.skills.knockbackImmune || source.noKnockback ? 0 : source.knockback || 2.3;
  target.vx += Math.cos(angle) * amount * knockback;
  target.vy += Math.sin(angle) * amount * knockback;
  state.particles.push({ x: target.x, y: target.y, life: 0.45, color: target.team === "blue" ? "#78bbff" : "#ff8582" });
  if (target.hp <= 0) {
    if (target.infectionTimer > 0 && target.infectionTeam) {
      convertToZombie(target);
      return;
    }
    target.dead = true;
    handleKillEffects(killer, target);
    if (target.skills.explode) explodeUnit(target);
    if (!target.skills.knockbackImmune) {
      target.vx += Math.cos(angle) * 120;
      target.vy += Math.sin(angle) * 120;
    }
  }
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
  if (target.kind === "wall") {
    if (unit.canAttackWalls === false) return;
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
          damage: damageFor(unit, active.damage),
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
      damageWall(target.wall, damageFor(unit, active.damage * (0.85 + Math.random() * 0.3)), target.x, target.y);
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
  unit.randomSpawnCooldown = Math.max(0, unit.randomSpawnCooldown - dt);
  unit.whirlwindCooldown = Math.max(0, unit.whirlwindCooldown - dt);
  unit.wobble += dt * (5 + unit.speed / 25);
  updateBerserk(unit);
  if (!unit.dead && unit.poisonTimer > 0) {
    unit.poisonTimer -= dt;
    unit.poisonTick -= dt;
    if (unit.poisonTick <= 0) {
      unit.poisonTick += 1;
      hurt(unit, 20, { x: unit.x - 1, y: unit.y, knockback: 0.4, ignoreDodge: true, damageType: "poison" });
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
  unit.freezeTimer = Math.max(0, unit.freezeTimer - dt);
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
  if (unit.skills.gatling) {
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
  if (unit.skills.chompBlast) {
    unit.chompCooldown = Math.max(0, (unit.chompCooldown || 0) - dt);
    const radius = unit.skills.chompRange || 200;
    const enemyNearby = state.units.some((other) => {
      if (other.team === unit.team || other.dead || other.airborneTimer > 0) return false;
      return Math.hypot(other.x - unit.x, other.y - unit.y) <= radius + other.radius;
    });
    if (enemyNearby && unit.chompCooldown <= 0) {
      triggerChompBlast(unit);
    }
  }
  if (unit.skills.sunProducer) {
    unit.sunTimer = Math.max(0, (unit.sunTimer || unit.skills.sunInterval || 5) - dt);
    if (unit.sunTimer <= 0) {
      unit.sunTimer += unit.skills.sunInterval || 5;
      if (!state.sandbox) state.budget += unit.skills.sunGold || 50;
      state.particles.push({ x: unit.x, y: unit.y - unit.radius * 1.2, life: 0.9, startLife: 0.9, color: "#ffd95a", size: 36 });
      setToast(`+${unit.skills.sunGold || 50} gold`);
    }
  }
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
    const speedFactor = (unit.freezeTimer > 0 ? 0.45 : 1) * (unit.speedPotionTimer > 0 ? 1.55 : 1);
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
  if (unit.skills.tornado && unit.tornadoCooldown <= 0) {
    spawnTornado(unit, target);
    unit.tornadoCooldown = unit.skills.poisonSlime ? 5.2 : 6.4;
  }
  const angle = Math.atan2(target.y - unit.y, target.x - unit.x);
  const isRanged = Boolean(unit.projectileSpeed);
  const edgeDistance = Math.max(0, distance - unit.radius - target.radius);
  const engagementDistance = isRanged ? distance : edgeDistance;
  const primaryAttackDistance = isRanged ? unit.range * 0.88 : unit.range;
  const second = unit.secondAttack;
  const secondEngagementDistance = second && second.ranged ? distance : edgeDistance;
  const secondAttackDistance = second ? second.range : 0;
  const canPrimaryAttack = engagementDistance <= primaryAttackDistance;
  const canSecondAttack = Boolean(second && secondEngagementDistance <= secondAttackDistance);
  const attackDistance = Math.max(primaryAttackDistance, secondAttackDistance);
  const stopDistance = isRanged ? unit.stopDistance : Math.min(unit.stopDistance, attackDistance);
  const speedFactor = (unit.freezeTimer > 0 ? 0.45 : 1) * (unit.speedPotionTimer > 0 ? 1.55 : 1);
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
      const push = (min - distance) * 0.5;
      const nx = dx / distance;
      const ny = dy / distance;
      a.x -= nx * push;
      a.y -= ny * push;
      b.x += nx * push;
      b.y += ny * push;
      a.vx -= nx * 10;
      a.vy -= ny * 10;
      b.vx += nx * 10;
      b.vy += ny * 10;
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
    if (projectile.itemFireball) {
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
        color: Math.random() < 0.5 ? "#ff7838" : "#ffd15a",
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
        poisonUnit(unit, 5);
      }
    }
  }
  state.slimes = state.slimes.filter((slime) => slime.life > 0);
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
      if (!unit.skills.knockbackImmune) {
        const edgePressure = Math.max(0, distance / tornado.radius - 0.62);
        const pull = effect * 145 + edgePressure * 540;
        const orbit = (0.35 + effect * 0.65) * 640 * tornado.spin;
        const tx = -ny;
        const ty = nx;
        unit.vx += (dx / distance) * pull * dt;
        unit.vy += (dy / distance) * pull * dt;
        unit.vx += tx * orbit * dt;
        unit.vy += ty * orbit * dt;
        const containment = 1 - Math.min(0.38, (0.12 + edgePressure * 0.38) * dt * 60);
        unit.vx *= containment;
        unit.vy *= containment;
        const carry = 0.42 + effect * 0.28;
        unit.vx += tornado.vx * carry * 0.08;
        unit.vy += tornado.vy * carry * 0.08;
        unit.x += tornado.vx * carry * dt;
        unit.y += tornado.vy * carry * dt;
        const innerRadius = tornado.radius * 0.34;
        if (distance < innerRadius) {
          unit.vx -= nx * 190 * dt;
          unit.vy -= ny * 190 * dt;
        }
      }
      hurt(unit, (tornado.damage || 6) * dt, { x: tornado.x, y: tornado.y, knockback: 0.35, damageType: "tornado" });
      if (tornado.poison) poisonUnit(unit, 5);
    }
  }
  state.tornadoes = state.tornadoes.filter((tornado) => tornado.life > 0);
}

function checkWinner() {
  if (state.phase !== "battle" || state.winnerShown) return;
  const blueAlive = state.units.some((unit) => unit.team === "blue" && !unit.dead);
  const redAlive = state.units.some((unit) => unit.team === "red" && !unit.dead);
  if (blueAlive && redAlive) return;
  state.winnerShown = true;
  setPhase("ended");
  const text = translations[state.language] || translations.en;
  setToast(blueAlive ? text.blueWin : text.redWin);
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
    updateProjectiles(scaledDt);
    updateSlimes(scaledDt);
    updateTornadoes(scaledDt);
    updateParticles(scaledDt);
    checkWinner();
  }
  state.units = state.units.filter((unit) => !unit.dead || unit.hp > -80);
  updateUi();
}

function drawGround() {
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

function drawWalls() {
  for (const wall of state.walls) {
    ctx.save();
    ctx.translate(wall.x, wall.y);
    ctx.fillStyle = wall.type === "thick" ? "#4b4940" : wall.type === "arrow" ? "rgba(73, 96, 104, 0.62)" : "#5a564b";
    ctx.fillRect(-wall.w / 2, -wall.h / 2, wall.w, wall.h);
    ctx.strokeStyle = wall.type === "thick" ? "#f0dfae" : wall.type === "arrow" ? "#9bdcff" : "#d8d0a8";
    ctx.lineWidth = wall.type === "thick" ? 5 : 3;
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
    ctx.strokeStyle = state.mapTool === "thickWall" ? "#d8d0a8" : state.mapTool === "arrowWall" ? "#9bdcff" : "#e8bd57";
    ctx.lineWidth = state.mapTool === "thickWall" ? 10 : state.mapTool === "arrowWall" ? 4 : 5;
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
  if (unit.typeId === "zombie") {
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
  }
  if (unit.typeId === "sunflower") {
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
  if (unit.typeId === "chomper") {
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
  if (unit.typeId === "peashooter" || unit.typeId === "repeater" || unit.typeId === "gatlingshooter") {
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
    if (unit.typeId === "gatlingshooter") {
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
    ctx.fillStyle = projectile.fireball ? "#ff5d2e" : projectile.applyBurn ? "#ff8a38" : projectile.applyFreeze ? "#9bdcff" : "#f2d27a";
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
    ctx.fillStyle = "#58d86a";
    ctx.beginPath();
    ctx.ellipse(slime.x, slime.y, slime.radius, slime.radius * 0.58, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

function drawTornadoes() {
  for (const tornado of state.tornadoes) {
    ctx.save();
    ctx.translate(tornado.x, tornado.y);
    ctx.globalAlpha = Math.min(0.86, tornado.life / 2);
    ctx.strokeStyle = tornado.poison ? "#67e078" : "#dce9ff";
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

function draw() {
  drawGround();
  drawSlimes();
  drawWalls();
  const sorted = [...state.units].sort((a, b) => a.y - b.y);
  for (const unit of sorted) drawUnit(unit);
  drawProjectiles();
  drawTornadoes();
  drawParticles();
}

function updateUi() {
  const text = translations[state.language] || translations.zh;
  budgetText.textContent = state.sandbox ? text.infiniteMoney : `${text.budget} ${state.budget}`;
  blueCount.textContent = state.units.filter((unit) => unit.team === "blue" && !unit.dead).length;
  redCount.textContent = state.units.filter((unit) => unit.team === "red" && !unit.dead).length;
  const labels = { setup: text.setup, battle: text.fight, paused: text.paused, ended: text.ended };
  phaseText.textContent = labels[state.phase];
  startBtn.disabled = state.phase === "battle";
  pauseBtn.disabled = state.phase === "setup" || state.phase === "ended";
  wallToolBtn.classList.toggle("active", state.mapTool === "wall");
  thickWallToolBtn.classList.toggle("active", state.mapTool === "thickWall");
  arrowWallToolBtn.classList.toggle("active", state.mapTool === "arrowWall");
  commandToolBtn.classList.toggle("active", state.mapTool === "command");
  focusToolBtn.classList.toggle("active", state.mapTool === "focus");
  eraseWallBtn.classList.toggle("active", state.mapTool === "eraseWall");
  wallToolBtn.disabled = state.phase !== "setup";
  thickWallToolBtn.disabled = state.phase !== "setup";
  arrowWallToolBtn.disabled = state.phase !== "setup";
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
  if (battlefieldWrap) battlefieldWrap.classList.toggle("item-aiming", state.phase === "battle" && Boolean(state.selectedItem));
  if (itemsTitle) itemsTitle.textContent = text.items;
  for (const button of itemButtons) {
    const itemId = button.dataset.item;
    const item = itemTypes[itemId];
    if (!item) continue;
    const name = text.itemNames[itemId] || itemId;
    button.classList.toggle("selected", state.selectedItem === itemId);
    button.classList.toggle("locked", state.phase !== "battle");
    button.disabled = false;
    button.innerHTML = `<b>${name}</b><small>${item.cost} ${text.budget}</small>`;
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
      controlName.textContent = `${text.controlSelected}: ${unit.name}`;
      controlCooldowns.innerHTML = `
        <span>HP ${Math.max(0, Math.ceil(unit.hp))}/${unit.maxHp}</span>
        <span>Space ${unit.cooldown <= 0 ? "OK" : unit.cooldown.toFixed(1)}</span>
        <span>V ${unit.secondAttack ? (unit.cooldown <= 0 ? "OK" : unit.cooldown.toFixed(1)) : "-"}</span>
        <span>B ${specialText}</span>
      `;
      controlPanel?.classList.add("active");
    }
  }
}

function renderUnitList() {
  unitList.innerHTML = "";
  const text = translations[state.language] || translations.en;
  const packs = [
    {
      title: state.language === "zh" ? "兵种包 1" : "Unit Pack 1",
      types: unitTypes.filter((type) => !UNIT_PACK_2_IDS.has(type.id) && !type.id.startsWith("custom-")),
    },
    {
      title: state.language === "zh" ? "兵种包 2" : "Unit Pack 2",
      types: unitTypes.filter((type) => UNIT_PACK_2_IDS.has(type.id) || type.id.startsWith("custom-")),
    },
  ];
  for (const pack of packs) {
    if (!pack.types.length) continue;
    const heading = document.createElement("div");
    heading.className = "unit-pack-title";
    heading.textContent = pack.title;
    unitList.appendChild(heading);
    for (const type of pack.types) {
      const display = displayType(type);
      const button = document.createElement("button");
      button.className = `unit-card ${state.selected === type.id ? "selected" : ""}`;
      button.innerHTML = `
        <span class="icon">${type.glyph}</span>
        <span><b>${display.name}</b><small>${display.tag}</small></span>
        <span class="price">${type.price}</span>
      `;
      button.addEventListener("click", () => {
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
resetBtn.addEventListener("click", () => resetGame(false));
randomBtn.addEventListener("click", randomFormation);
exportFormationBtn?.addEventListener("click", exportFormation);
importFormationBtn?.addEventListener("click", importFormation);
exitChallengeBtn?.addEventListener("click", exitChallengeMode);
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
  if (!state.sandbox && !state.selectedItem && state.mapTool !== "command" && state.mapTool !== "focus") return;
  state.placeTeam = "blue";
  setToast(state.mapTool === "focus" ? "Focus team: Blue" : state.mapTool === "command" ? "Command team: Blue" : state.selectedItem ? "Item team: Blue" : "Placing team: Blue");
  updateUi();
});
redTeamBtn.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  if (!state.sandbox && !state.selectedItem && state.mapTool !== "command" && state.mapTool !== "focus") return;
  state.placeTeam = "red";
  setToast(state.mapTool === "focus" ? "Focus team: Red" : state.mapTool === "command" ? "Command team: Red" : state.selectedItem ? "Item team: Red" : "Placing team: Red");
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
spawnEnemyArmy();
applyLanguage(languageSelect.value);
setInterval(syncLanguage, 200);
requestAnimationFrame(loop);
