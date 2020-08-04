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

// Случайная тема
function random_theme()
{
    var arr = ["Млекопитающие", "Планеты", "Космос", "Растения", "Животные", "Птицы", "Страны", "Столицы"];
    var res = arr[Math.floor(Math.random() * arr.length)];
    document.getElementById('random-theme').innerHTML = res;
}