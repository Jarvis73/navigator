function btn_onclick()
{
    var str1 = document.getElementById("str1").value;
    var str2 = document.getElementById("str2").value;
    const myArray = str1.split(",");

    res = "结果: \n";

    for (let i = 0; i < myArray.length; i++)
    {
        if (!str2.includes(myArray[i]))
        {
            res += myArray[i] + "\n";
        }
    }

    document.getElementById("results").innerText = res;
}