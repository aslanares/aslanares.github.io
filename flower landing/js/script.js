let flowerNames = ['Азистазия', 'Анредера', 'Аптения(ампельная)', 'Барлерия(красная)', 'Белопероне', 'Бугенвиллии',
                   'Валлота', 'Гемантус', 'Гибискус', 'Гинура(синяя птица)', 'Гиппиаструм', 'Глоксиния', 'Глориоза',
                   'Дуранта', 'Зефирантес', 'Калла', 'Калландива', 'Карисса', 'Картофельное дерево',
                   'Кислица', 'Клародендрон-инерме', 'Клеродендрум(Госпожи-Томсон)', 'Клеродендрум(угандийський)',
                   'Кливия', 'Колерия', 'Кринум(азиатський)', 'Кринум-мура', 'Кроссандра(оранжева)', 'Лантана',
                   'Олеандр', 'Пасифлора', 'Пахистахис', 'Пахистахис(красный)', 'Пеларгония', 'Пленткантус',
                   'Сансевиерия', 'Свинчатка(крассная)', 'Стефанотис', 'Тидея', 'Трандесканция', 'Уайтфельдия', 
                   'Фиалка', 'Фикус-Бенжамина', 'Фикус(Бенжамина-зеленый)', 'Хавортия', 'Хлорофитум-Бонни', 
                   'Хойя', 'Эписция', 'Якобиния(лимонная)', 'Якобиния(розовая)' 
                   // 50
                  ];
let flowerValues = [50, 35, 25, 35, 45, 60, 'от 40', 'от 40', 35, 50, 'от 50', 60, 150, 'от 45', 10, 'от 30', 
                    'от 25', 'от 50', "от 70 до 90", "от 10 до 25", "от 60", "от 70", "от 70", "от 150", 15,
                    "от 150", "от 150", "от 70", "от 60", "от 70 до 100", "от 50", "от 50", "от 50", "от 40", 
                    "от 60", "от 50", "от 70", "от 70 до 100", 25, 15, "от 50", 25, 50, 50, "от 30", "от 20", "от 50", 35, "от 50", "от 45"];
let flowerSlices = [25, 15, 10, 20, 25, 35, 'отсутствует', 'отсутствует', 20, 25, 'отсутствует', 'Лист: 10, Укоренненый лист: 25', 
                    'отсутствует', 25, 'отсутствует', 'отсутствует', 'отсутствует', 30, 45, 'отсутствует', 30, 40, 45, 'отсутствует',
                    'отсутствует', 'отсутствует', 'отсутствует', 40, 30, "25", 50, 30, 30, 35, 15, 40, 'отсутствует', 50, "Лист: 8 грн", 
                    "5 штук - 40", 35, "Лист 5 грн", 25, 25, 'отсутствует', 15, 30, 15, 30, 25];

const cards = new Cards();
const customize = new CustomFiels(flowerNames, flowerValues, flowerSlices);
cards.appendFlowerPath();
customize.customizeFlowerName();
customize.customizeFlowerValue();
customize.customizeFlowerSlice();

const phoneNum = new PhoneNumber('6867598', '7091265');
phoneNum.showPhoneNumber();

const searchForm = new SearchForm('#search');
searchForm.cardsFilter();

let slideArr = [
    'img/slider/slide1.jpg',
    'img/slider/slide2.jpg',
    'img/slider/slide3.jpg',
    'img/slider/slide4.jpg',
    'img/slider/slide5.jpg'
];

const slider = new Slider(slideArr);

slider.slideImages();

