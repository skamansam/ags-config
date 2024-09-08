// used https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md
// as a reference for the emoji list
const emoji_to_unicode = {
  // Face Smiling
  grinning: "😀",
  smiley: "😃",
  smile: "😄",
  grin: "😁",
  laughing: "😆",
  satisfied: "😆",
  sweat_smile: "😅",
  rofl: "🤣",
  joy: "😂",
  slightly_smiling_face: "🙂",
  upside_down_face: "🙃",
  wink: "😉",
  blush: "😊",
  innocent: "😇",

  // Face Affection
  smiling_face_with_three_hearts: "🥰",
  heart_eyes: "😍",
  star_struck: "🤩",
  kissing_heart: "😘",
  kissing: "😗",
  relaxed: "☺️",
  kissing_closed_eyes: "😚",
  kissing_smiling_eyes: "😙",
  smiling_face_with_tear: "🥲",

  // Face Tongue
  yum: "😋",
  stuck_out_tongue: "😛",
  stuck_out_tongue_winking_eye: "😜",
  zany: "🤪",
  zany_face: "🤪",
  stuck_out_tongue_closed_eyes: "😝",
  money_mouth_face: "🤑",

  // Face Hand
  hugs: "🤗",
  hugging: "🤗",
  hand_over_mouth: "🤭",
  shushing_face: "🤫",
  thinking: "🤔",

  // Face Neutral Skeptical
  zipper_mouth: "🤐",
  zipper_mouth_face: "🤐",
  raised_eyebrow: "🤨",
  neutral_face: "😐",
  expressionless: "😑",
  no_mouth: "😶",
  face_in_clouds: "😶",
  smirk: "😏",
  unamused: "😒",
  roll_eyes: "🙄",
  grimacing: "😬",
  face_exhaling: "😮‍💨",
  lying_face: "🤥",

  // Face Sleepy
  relieved: "😌",
  pensive: "😔",
  sleepy: "😪",
  drooling_face: "🤤",
  sleeping: "😴",

  // Face Unwell
  mask: "😷",
  face_with_thermometer: "🤒",
  face_with_head_bandage: "🤕",
  nauseated_face: "🤢",
  vomiting_face: "🤮",
  sneezing_face: "🤧",
  hot_face: "🥵",
  cold_face: "🥶",
  woozy_face: "🥴",
  dizzy_face: "😵",
  face_with_spiral_eyes: "😵‍💫",
  exploding_head: "🤯",

  // Face Hat
  cowboy: "🤠",
  cowboy_hat_face: "🤠",
  partying_face: "🥳",
  disguised_face: "🥸",

  // Face Glasses,
  sunglasses: "😎",
  nerd: "🤓",
  nerd_face: "🤓",
  monocle: "🧐",
  monocle_face: "🧐",

  // Face Concerned
  confused: "😕",
  worried: "😟",
  slightly_frowning_face: "🙁",
  slightly_frowning: "🙁",
  frowning_face: "☹️",
  open_mouth: "😮",
  hushed: "😯",
  astonished: "😲",
  flushed: "😳",
  pleading: "🥺",
  pleading_face: "🥺",
  frowning: "😦",
  anguished: "😧",
  fearful: "😨",
  cold_sweat: "😰",
  disappointed_relieved: "😥",
  cry: "😢",
  sob: "😭",
  scream: "😱",
  confounded: "😖",
  persevere: "😣",
  disappointed: "😞",
  sweat: "😓",
  weary: "😩",
  tired_face: "😫",
  yawning_face: "🥱",

  // Face Negative
  triumph: "😤",
  pout: "😡",
  rage: "😡",
  angry: "😠",
  cursing: "🤬",
  cursing_face: "🤬",
  smiling_imp: "😈",
  imp: "👿",
  skull: "💀",
  skull_and_crossbones: "☠️",

  // Face Costume
  hankey: "💩",
  poop: "💩",
  shit: "💩",
  clown_face: "🤡",
  japanese_ogre: "👹",
  japanese_goblin: "👺",
  ghost: "👻",
  alien: "👽",
  space_invader: "👾",
  robot: "🤖",

  // Cat Face
  smiley_cat: "😺",
  smile_cat: "😸",
  joy_cat: "😹",
  heart_eyes_cat: "😻",
  smirk_cat: "😼",
  kissing_cat: "😽",
  scream_cat: "🙀",
  crying_cat_face: "😿",
  pouting_cat: "😾",

  // Monkey Face
  see_no_evil: "🙈",
  hear_no_evil: "🙉",
  speak_no_evil: "🙊",

  // Heart
  love_letter: "💌",
  cupid: "💘",
  gift_heart: "💝",
  sparkling_heart: "💖",
  heartpulse: "💗",
  heartbeat: "💓",
  revolving_hearts: "💞",
  two_hearts: "💕",
  heart_decoration: "💟",
  heart_exclamation: "❣️",
  heavy_heart_exclamation: "❣️",
  broken_heart: "💔",
  heart_on_fire: "❤️‍🔥",
  mending_heart: "❤️‍🩹",
  heart: "❤️",
  orange_heart: "🧡",
  yellow_heart: "💛",
  green_heart: "💚",
  blue_heart: "💙",
  purple_heart: "💜",
  brown_heart: "🤎",
  black_heart: "🖤",
  white_heart: "🤍",

  // Emotion
  kiss: "💋",
  100: "💯",
  anger: "💢",
  boom: "💥",
  collision: "💥",
  dizzy: "💫",
  sweat_drops: "💦",
  dash: "💨",
  hole: "🕳️",
  speech_balloon: "💬",
  eye_speech_bubble: "👁️‍🗨️",
  left_speech_bubble: "🗨️",
  right_anger_bubble: "🗯️",
  thought_balloon: "💭",
  zzz: "💤",

  //### People and Body ###

  // Hand Fingers Open
  wave: "👋",
  raised_back_of_hand: "🤚",
  raised_hand_with_fingers_splayed: "🖐️",
  hand: "✋",
  raised_hand: "✋",
  vulcan_salute: "🖖",

  // Hand Fingers Partial
  ok_hand: "👌",
  pinched_fingers: "🤌",
  pinching_hand: "🤏",
  v: "✌️",
  crossed_fingers: "🤞",
  love_you_gesture: "🤟",
  metal: "🤘",
  call_me_hand: "🤙",

  // Hand Single Finger
  point_left: "👈",
  point_right: "👉",
  point_up_2: "👆",
  middle_finger: "🖕",
  fu: "🖕",
  point_down: "👇",
  point_up: "☝️",

  // Hand Fingers Closed
  "+1": "👍",
  thumbsup: "👍",
  "-1": "👎",
  thumbsdown: "👎",
  fist: "✊",
  fist_raised: "✊",
  facepunch: "👊",
  fist_oncoming: "👊",
  punch: "👊",
  fist_left: "🤛",
  left_facing_fist: "🤛",
  fist_right: "🤜",
  right_facing_fist: "🤜",

  // Hands
  clap: "👏",
  raised_hands: "🙌",
  open_hands: "👐",
  palms_up_together: "🤲",
  handshake: "🤝",
  pray: "🙏",

  // Hand Prop
  writing_hand: "✍️",
  nail_care: "💅",
  selfie: "🤳",

  // Body Parts
  muscle: "💪",
  mechanical_arm: "🦾",
  mechanical_leg: "🦿",
  leg: "🦵",
  foot: "🦶",
  ear: "👂",
  ear_with_hearing_aid: "🦻",
  nose: "👃",
  brain: "🧠",
  anatomical_heart: "🫀",
  lungs: "🫁",
  tooth: "🦷",
  bone: "🦴",
  eyes: "👀",
  eye: "👁️",
  tongue: "👅",
  lips: "👄",

  // Person
  baby: "👶",
  child : "🧒",
  boy: "👦",
  girl: "👧",
  adult : "🧑",
  blond_haired_person: "👱",
  man: "👨",
  bearded_person: "🧔",
  man_beard: "🧔",
  woman_beard: "🧔‍",
  red_haired_man: "👨‍🦰",
  curly_haired_man: "👨‍🦱",
  white_haired_man: "👨‍🦳",
  bald_man: "👨‍🦲",
  woman: "👩",
  red_haired_woman: "👩‍🦰",
  person_red_hair: "🧑‍🦰",
  curly_haired_woman: "👩‍🦱",
  person_curly_hair: "🧑‍🦱",
  white_haired_woman: "👩‍🦳",
  person_white_hair: "🧑‍🦳",
  bald_woman: "👩‍🦲",
  person_bald: "🧑‍🦲",
  blond_haired_woman: "👱‍♀️",
  blond_woman: "👱‍♀️",
  blond_haired_man: "👱‍♂️",
  older_adult: "🧓",
  older_man: "👴",
  older_woman: "👵",

  // Person Gesture
  frowning_person: "🙍",
  frowning_man: "🙍‍♂️",
  frowning_woman: "🙍‍♀️",
  pouting_face: "🙎",
  pouting_man: "🙎‍♂️",
  pouting_woman: "🙎‍♀️",
  no_good: "🙅",
  ng_man: "🙅‍♂️",
  no_good_man: "🙅‍♂️",
  ng_woman: "🙅‍♀️",
  no_good_woman: "🙅‍♀️",
  ok_person: "🙆",
  ok_man: "🙆‍♂️",
  ok_woman: "🙆‍♀️",
  information_desk_person: "💁",
  tipping_hand_person: "💁",
  sassy_man: "💁‍♂️",
  tipping_hand_man: "💁‍♂️",
  sassy_woman: "💁‍♀️",
  tipping_hand_woman: "💁‍♀️",
  raising_hand: "🙋",
  raising_hand_man: "🙋‍♂️",
  raising_hand_woman: "🙋‍♀️",
  sassy_person: "💁",
  deaf_person: "🧏",
  deaf_man: "🧏‍♂️",
  deaf_woman: "🧏‍♀️",
  bow: "🙇",
  bowing_man: "🙇‍♂️",
  bowing_woman: "🙇‍♀️",
  facepalm: "🤦",
  man_facepalming: "🤦‍♂️",
  woman_facepalming: "🤦‍♀️",
  shrug : "🤷",
  man_shrugging: "🤷‍♂️",
  woman_shrugging: "🤷‍♀️",

  // Person Role
  health_worker: "🧑‍⚕️",
  man_health_worker: "👨‍⚕️",
  woman_health_worker: "👩‍⚕️",
  student: "🧑‍🎓",
  man_student: "👨‍🎓",
  woman_student: "👩‍🎓",
  teacher: "🧑‍🏫",
  man_teacher:


  baby_angel: "👼",
  breastfeeding: "🤱",
  elf: "🧝",
  fairy: "🧚",
  genie: "🧞",
  mage: "🧙",
  man_elf: "🧝‍♂️",
  man_fairy: "🧚‍♂️",
  man_feeding_baby: "👨‍🍼",
  man_genie: "🧞‍♂️",
  man_in_tuxedo: "🤵‍♂️",
  man_mage: "🧙‍♂️",
  man_superhero: "🦸‍♂️",
  man_supervillain: "🦹‍♂️",
  man_vampire: "🧛‍♂️",
  man_with_veil: "👰‍♂️",
  man_zombie: "🧟‍♂️",
  mermaid: "🧜‍♀️",
  merman: "🧜‍♂️",
  merperson: "🧜",
  mrs_claus: "🤶",
  person_feeding_baby: "🧑‍🍼",
  person_in_tuxedo: "🤵",
  person_with_veil: "👰",
  pregnant_woman: "🤰",
  santa: "🎅",
  superhero: "🦸",
  supervillain: "🦹",
  vampire: "🧛",
  woman_elf: "🧝‍♀️",
  woman_fairy: "🧚‍♀️",
  woman_feeding_baby: "👩‍🍼",
  woman_genie: "🧞‍♀️",
  woman_in_tuxedo: "🤵‍♀️",
  woman_mage: "🧙‍♀️",
  woman_superhero: "🦸‍♀️",
  woman_supervillain: "🦹‍♀️",
  woman_vampire: "🧛‍♀️",
  woman_with_veil: "👰‍♀️",
  woman_zombie: "🧟‍♀️",
  zombie: "🧟",






};
