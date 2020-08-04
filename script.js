// Шифр
function cipher()
{
    var str = document.getElementById('cipher-from').value;
    var arr;
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

    let target1 = "—";
    let target2 = "-";
    if (str.indexOf(target1) != -1)
    {
        str = str.replace(target1, " —");
    }
    if (str.indexOf(target2) != -1)
    {
        str = str.replace(target2, " -");
    }

    document.getElementById('build-result').innerHTML = str;
}

// Звёздочки
function star()
{
    var str = document.getElementById('star-from').value;
    var first = str[0];
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

    if (arr[0] != "*")
    {
        arr[0] = first;
    }
    res = arr.join("");
    
    document.getElementById('star-result').innerHTML = res;
}

// Случайная тема
function random_theme()
{
    var arr = ["Млекопитающие", "Планеты", "Космос", "Растения", "Животные", "Птицы", "Страны", "Столицы"];
    var res = arr[Math.floor(Math.random() * arr.length)];
    document.getElementById('random-theme').innerHTML = res;
}