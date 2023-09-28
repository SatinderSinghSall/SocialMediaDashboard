let CheckBox = document.querySelector("input[name=theme]");

CheckBox.addEventListener("change", function() 
{
    if(this.checked)
    {
        document.documentElement.setAttribute("data-theme","dark");
    }

    else
    {
        document.documentElement.setAttribute("data-theme","light");
    }
});