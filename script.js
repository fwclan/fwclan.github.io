// Шифр
function cipher()
{
    var str = document.getElementById('cipher-from').value;
    var arr;
    var index = str.indexOf("(");

    if (index == -1)
    {
        if (str.indexOf(" ") == -1)
        {
            arr = str.split("");
            mix(arr);
            str = arr.join("");
        }
        else
        {
            arr = str.split(" ");
            for (let j = 0; j < arr.length; j++)
            {
                arr[j] = arr[j].split("");
                mix(arr[j]);
                arr[j] = arr[j].join("");
            }
            str = arr.join(" ");
        }
    }
    else
    {
        var explan = str.slice(index);
        str = str.slice(0, index);
                    
        if (str.indexOf(" ") == -1)
        {
            arr = str.split("");
            mix(arr);
            str = arr.join("");
        }
        else
        {
            arr = str.split(" ");
            for (let j = 0; j < arr.length; j++)
            {
                arr[j] = arr[j].split("");
                mix(arr[j]);
                arr[j] = arr[j].join("");
            }
            str = arr.join(" ");
        }

        str = str.concat(" ", explan);
    }

    document.getElementById('cipher-result').innerHTML = str;
}

// Перемешивание букв в слове
function mix(arr)
{
    for (let i = 0; i < arr.length; i++)
    {
        var rnd1 = Math.floor(Math.random() * arr.length);
        var rnd2 = Math.floor(Math.random() * arr.length);
        var swap = arr[rnd1];
        arr[rnd1] = arr[rnd2];
        arr[rnd2] = swap;
    }
}

// Построй предложение
function build()
{
    var str = document.getElementById('build-from').value;
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++)
    {
        var rnd1 = Math.floor(Math.random() * arr.length);
        var rnd2 = Math.floor(Math.random() * arr.length);
        var swap = arr[rnd1];
        arr[rnd1] = arr[rnd2];
        arr[rnd2] = swap;
    }
    str = arr.join(" ");

    let trg1 = "—";
    let trg2 = "-";
    if (str.indexOf(trg1) != -1)
    {
        str = str.replace(trg1, " —");
    }
    if (str.indexOf(trg2) != -1)
    {
        str = str.replace(trg2, " -");
    }

    document.getElementById('build-result').innerHTML = str;
}

// Звёздочки
function star()
{
    var str = document.getElementById('star-from').value;
    var before = document.getElementById('star-from').value;
    var index = str.indexOf("(");

    var res = str.toLowerCase();
    var arr = res.split("");

    if (index == -1)
    {
        for (let i = 0; i < str.length; i++)
        {
            if (arr[i] == "а" ||
                arr[i] == "е" || 
                arr[i] == "ё" || 
                arr[i] == "и" || 
                arr[i] == "о" ||
                arr[i] == "у" ||
                arr[i] == "ы" ||
                arr[i] == "э" ||
                arr[i] == "ю" ||
                arr[i] == "я")
            {
                arr[i] = "*";
            }
        }
    }
    else
    {
        for (let i = 0; i < index; i++)
        {
            if (arr[i] == "а" ||
                arr[i] == "е" || 
                arr[i] == "ё" || 
                arr[i] == "и" || 
                arr[i] == "о" ||
                arr[i] == "у" ||
                arr[i] == "ы" ||
                arr[i] == "э" ||
                arr[i] == "ю" ||
                arr[i] == "я")
            {
                arr[i] = "*";
            }
        }
    }
    
    for (let k = 0; k < arr.length; k++)
    {
        if (arr[k] != before[k] && arr[k] != "*")
        {
            arr[k] = arr[k].toUpperCase();
        }
    }

    res = arr.join("");

    document.getElementById('star-result').innerHTML = res;
}

// Случайная тема Запрещённые буквы
function letters_theme()
{
    var arr = ["Города России", "Стражи КПВ", "Охотники КПВ", "Правители во всех фракциях", "Рыбы", "Породы кошек",
               "Породы собак", "Млекопитающие", "Профессии", "Игры игровиков", "Домашние животные", "Водоёмы", "Страны",
               "Национальности", "Религии", "Погода", "Эмоции", "Марки машин", "Органы", "Сериалы", "Книги", "Ягоды",
               "Фрукты", "Овощи", "Напитки", "Еда", "Обувь", "Одежда", "Аксессуары", "Цвета", "Цветы", "Растения",
               "Предметы в школе", "Канцелярия", "Исторические личности", "Пауки", "Земноводные", "Динозавры",
               "Вымершие животные", "Черты характера", "Элементы в КО", "Змеи", "Предметы повседневного использования", 
               "Ракообразные", "Техника", "Кухонные приборы", "Детёныши животных", "Грызуны", 
               "Предметы для рисования", "Предметы личной гигиены", "Игры игровиков", "Отряды КПВ", "Разделы сайта",
               "Фильмы", "Мультфильмы", "Мужские имена", "Женские имена", "Ласковые прозвища", "Твёрдые предметы"];
    var res = arr[Math.floor(Math.random() * arr.length)];
    document.getElementById('letters-theme').innerHTML = res;
}

// Случайная тема Коробочка
function box_theme()
{
    var arr = ["Канцелярия", "Животные", "Школьные принадлежности", "Рыбы", "Насекомые", "Двуногие",
               "Земноводные", "Пауки", "Млекопитающие", "Овощи", "Фрукты", "Аксессуары", 
               "Предметы личной гигиены", "Еда", "Грызуны", "Птицы", "Кухонные приборы", 
               "Твёрдые предметы", "Одежда", "Ягоды", "Детёныши животных", "Игрушки", "Растения",
               "Цветы", "Предметы повседневного использования", "Бабочки", "Змеи", "Техника",
               "Хладнокровные", "Ракообразные"];
    var res = arr[Math.floor(Math.random() * arr.length)];
    document.getElementById('box-theme').innerHTML = res;
}