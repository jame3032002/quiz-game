const getQuestions = () => {
  const QUESTIONS = shuffle([
    {
      id: 1,
      question: "BDMS คือตัวย่อของคำว่าอะไร?",
      choices: shuffle([
        { label: "Bangkok Doctor Medical Services", value: "a" },
        { label: "Bangkok Dusit Medical Services", value: "b" },
        { label: "Bangkok Diagnostic Medical Solutions", value: "c" },
        { label: "Bangkok Dental Management Systems", value: "d" },
      ]),
    },
    {
      id: 2,
      question: "BDMS เป็นบริษัทที่ดำเนินธุรกิจในอุตสาหกรรมใด?",
      choices: shuffle([
        { label: "อุตสาหกรรมอาหาร", value: "a" },
        { label: "อุตสาหกรรมเทคโนโลยี", value: "b" },
        { label: "อุตสาหกรรมการเงินและการลงทุน", value: "c" },
        { label: "อุตสาหกรรมสุขภาพ", value: "d" },
      ]),
    },
    {
      id: 3,
      question: "ธุรกิจหลักของ BDMS คือ?",
      choices: shuffle([
        { label: "การท่องเที่ยวและการเรียนรู้", value: "a" },
        { label: "การค้าปลีก", value: "b" },
        { label: "การให้บริการด้านสุขภาพ", value: "c" },
        { label: "การพัฒนาซอฟต์แวร์", value: "d" },
      ]),
    },
    {
      id: 4,
      question: "โรคเบาหวานเกิดจากอะไร?",
      choices: shuffle([
        { label: "การบริโภคน้ำตาลมากเกินไป", value: "a" },
        { label: "การออกกำลังกายมากเกินไป", value: "b" },
        { label: "การบริโภคไขมันและคาร์โบไฮเดรตมากเกินไป", value: "c" },
        { label: "การบริโภคผลไม้และผักมากเกินไป", value: "d" },
      ]),
    },
    {
      id: 5,
      question: "วิธีการลดความเครียดได้อย่างไร?",
      choices: shuffle([
        { label: "การดื่มเครื่องดื่มแอลกอฮอล์", value: "a" },
        { label: "การดูภาพยนตร์ที่มีเนื้อหาร้ายแรง", value: "b" },
        { label: "การออกกำลังกายอย่างสม่ำเสมอ", value: "c" },
        { label: "การเล่นเกมส์คอมพิวเตอร์ตลอดเวลา", value: "d" },
      ]),
    },
    {
      id: 6,
      question: "ภาวะสมองเสื่อมเกิดจากสาเหตุใด?",
      choices: shuffle([
        { label: "การบริโภคอาหารที่มีไขมันสูง", value: "a" },
        { label: "การทานอาหารที่มีสารอาหารไม่ครบ", value: "b" },
        { label: "การออกกำลังกายเป็นพิษ", value: "c" },
        { label: "การทำงานทางเกษตรกรรม", value: "d" },
      ]),
    },
    {
      id: 7,
      question: "ปัจจัยใดที่ส่งผลต่อการเสี่ยงต่อโรคหัวใจ?",
      choices: shuffle([
        { label: "การทานอาหารทะเล", value: "a" },
        { label: "การออกกำลังกายที่สม่ำเสมอ", value: "b" },
        { label: "การสูบบุหรี่", value: "c" },
        { label: "การดื่มน้ำมันมะพร้าว", value: "d" },
      ]),
    },
    {
      id: 8,
      question: "วิธีการลดน้ำหนักอย่างมีประสิทธิภาพคือ?",
      choices: shuffle([
        { label: "การกินอาหารหลายมื้อในวัน", value: "a" },
        { label: "การเลี่ยงการทานผลไม้และผัก", value: "b" },
        { label: "การปรับเปลี่ยนรูปแบบการกินและการออกกำลังกาย", value: "c" },
        { label: "การทานอาหารมังสวิรัติ", value: "d" },
      ]),
    },
    {
      id: 9,
      question:
        "สารต้านอนุมูลอิสระ (Antioxidants) มีประโยชน์ต่อร่างกายอย่างไร?",
      choices: shuffle([
        { label: "ช่วยลดความดันโลหิต", value: "a" },
        { label: "ช่วยลดการเกิดอาการอักเสบในร่างกาย", value: "b" },
        { label: "เสริมสร้างระบบภูมิคุ้มกัน", value: "c" },
        { label: "ช่วยปรับสมดุลของฮอร์โมนในร่างกาย", value: "d" },
      ]),
    },
    {
      id: 10,
      question: "อะไรคือไม่ใช่สาเหตุของโรคอ้วน?",
      choices: shuffle([
        { label: "พันธุกรรม", value: "a" },
        { label: "การกินอาหารไม่ย่อย", value: "b" },
        { label: "การไม่ออกกำลังกาย", value: "c" },
        { label: "การนอนหลับพักผ่อนที่เพียงพอ", value: "d" },
      ]),
    },
    {
      id: 11,
      question: "ข้อใดไม่ใช่ประโยชน์ของการดื่มน้ำเปล่าวันละ 8 แก้ว?",
      choices: shuffle([
        { label: "ช่วยให้ผิวพรรณเปล่งปลั่ง", value: "a" },
        { label: "ช่วยให้ระบบย่อยอาหารทำงานดีขึ้น", value: "b" },
        { label: "ช่วยให้ระบบขับถ่ายทำงานดีขึ้น", value: "c" },
        { label: "ช่วยเพิ่มมวลกล้ามเนื้อ", value: "d" },
      ]),
    },
    {
      id: 12,
      question: "การทำงานในที่ที่มีแสงแดดตรงสามารถเสี่ยงต่อโรคใดได้?",
      choices: shuffle([
        { label: "โรคมะเร็งผิวหนัง", value: "a" },
        { label: "โรคเบาหวาน", value: "b" },
        { label: "โรคไขมันในเลือดสูง", value: "c" },
        { label: "โรคหัวใจ", value: "d" },
      ]),
    },
    {
      id: 13,
      question: "ข้อใดไม่ใช่วิธีการป้องกัน Covid-19?",
      choices: shuffle([
        { label: "สวมหน้ากากอนามัย", value: "a" },
        { label: "ล้างมือบ่อยๆ", value: "b" },
        { label: "เว้นระยะห่าง", value: "c" },
        { label: "อยู่ในที่ที่คนพลุกพล่าน", value: "d" },
      ]),
    },
    {
      id: 14,
      question: "วัคซีน Covid-19 มีประสิทธิภาพในการป้องกันโรคได้มากน้อยแค่ไหน?",
      choices: shuffle([
        { label: "50%", value: "a" },
        { label: "70%", value: "b" },
        { label: "90%", value: "c" },
        { label: "100%", value: "d" },
      ]),
    },
    {
      id: 15,
      question: "การหายใจอย่างไรสามารถช่วยลดความเครียดได้?",
      choices: shuffle([
        { label: "การหายใจเร็วๆ แบบเหนื่อย", value: "a" },
        { label: "การหายใจลึกๆ แบบจำกัด", value: "b" },
        { label: "การหายใจอย่างมีประสิทธิภาพและช้าๆ", value: "c" },
        { label: "การหายใจอย่างไม่เป็นระบบ", value: "d" },
      ]),
    },
    {
      id: 16,
      question: "การตรวจสุขภาพประจำปีช่วยลดความเสี่ยงต่อโรคใดต่อไปนี้?",
      choices: shuffle([
        { label: "ไขมันในเลือดสูง", value: "a" },
        { label: "โรคหัวใจขาดเลือด", value: "b" },
        { label: "มะเร็งลำไส้ใหญ่", value: "c" },
        { label: "โรคอัลไซเมอร์", value: "d" },
      ]),
    },
    {
      id: 17,
      question: "การตรวจปัสสาวะสามารถใช้เพื่อตรวจสุขภาพของอวัยวะใด?",
      choices: shuffle([
        { label: "หัวใจ", value: "a" },
        { label: "ไต", value: "b" },
        { label: "ตับ", value: "c" },
        { label: "สมอง", value: "d" },
      ]),
    },
    {
      id: 18,
      question:
        "การออกกำลังกายประเภทใดที่เน้นการเพิ่มกำลังและการฝึกซ้อมกล้ามเนื้อ?",
      choices: shuffle([
        { label: "โยคะ", value: "a" },
        { label: "วิดีโอการเต้น", value: "b" },
        { label: "แอโรบิค", value: "c" },
        { label: "เวทเทรนนิ่ง", value: "d" },
      ]),
    },
    {
      id: 19,
      question:
        "การออกกำลังกายประเภทใดที่ช่วยเพิ่มความยืดหยุ่นและความกระชับของกล้ามเนื้อ?",
      choices: shuffle([
        { label: "วิ่ง", value: "a" },
        { label: "โยคะ", value: "b" },
        { label: "การยกเวท", value: "c" },
        { label: "การว่ายน้ำ", value: "d" },
      ]),
    },
    {
      id: 20,
      question: "สิ่งใดส่งผลดีต่อคุณภาพของการนอน?",
      choices: shuffle([
        { label: "การดื่มกาแฟก่อนนอน", value: "a" },
        { label: "การออกกำลังกายก่อนนอน", value: "b" },
        { label: "การหลับในสภาพแวดล้อมที่มืดและเงียบสงบ", value: "c" },
        { label: "การทานอาหารมันทุกมื้อก่อนนอน", value: "d" },
      ]),
    },
  ]);

  return QUESTIONS;
};

const shuffle = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const mockLeaderboard = [
  {
    id: 1,
    image:
      "https://www.kajame.xyz/_next/image?url=%2Fstatic%2Fimages%2Fkajame.jpeg&w=256&q=75",
    name: "Kajame",
    score: 20,
  },
  {
    id: 3,
    image: "https://xsgames.co/randomusers/avatar.php?g=female",
    name: "Maxoty",
    score: 18,
  },
  {
    id: 5,
    image: "https://xsgames.co/randomusers/avatar.php?g=pixel",
    name: "Panda Jackky",
    score: 15,
  },
  {
    id: 2,
    image: "https://xsgames.co/randomusers/avatar.php?g=male",
    name: "Boobie",
    score: 13,
  },
  {
    id: 22,
    image: "https://xsgames.co/randomusers/avatar.php?g=female",
    name: "Zneb",
    score: 13,
  },
  {
    id: 4,
    image: "https://xsgames.co/randomusers/avatar.php?g=pixel",
    name: "Zoho",
    score: 12,
  },
  {
    id: 8,
    image: "https://xsgames.co/randomusers/avatar.php?g=male",
    name: "Big",
    score: 11,
  },
  {
    id: 66,
    image: "https://xsgames.co/randomusers/avatar.php?g=female",
    name: "Chai",
    score: 10,
  },
  {
    id: 20,
    image: "https://xsgames.co/randomusers/avatar.php?g=pixel",
    name: "Mookie",
    score: 7,
  },
  {
    id: 303,
    image: "https://xsgames.co/randomusers/avatar.php?g=female",
    name: "Konichiwa",
    score: 5,
  },
];

const ANSWER: any = {
  1: "b",
  2: "d",
  3: "c",
  4: "a",
  5: "c",
  6: "b",
  7: "c",
  8: "c",
  9: "b",
  10: "d",
  11: "d",
  12: "a",
  13: "d",
  14: "c",
  15: "c",
  16: "a",
  17: "b",
  18: "d",
  19: "b",
  20: "c",
};

export { shuffle, getQuestions, mockLeaderboard, ANSWER };
