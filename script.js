function compute() {
    var p = parseFloat(document.getElementById("principal").value);
    var r = parseFloat(document.getElementById("rate").value);
    var t = parseInt(document.getElementById("years").value);

    var int = (p * t * r) / 100;

    var maturity_year = new Date().getFullYear() + t;

    document.getElementById("results").style.display = 'block';
    document.getElementById("ph1").textContent = p;
    document.getElementById("ph2").textContent = r.toString() + "%";
    document.getElementById("ph3").textContent = int;
    document.getElementById("ph4").textContent = maturity_year;

}

function showRate() {
    rate = document.getElementById("rate").value;
    document.getElementById("rate-value").innerText = rate + "%";
}

function validateAmount() {
    var principal = document.getElementById("principal").value;
    if (!(parseInt(principal) > 0)) {
        alert("Enter a positive number");
        document.getElementById("compute").disabled = true
        document.getElementById("principal").focus();
    } else {
        document.getElementById("compute").disabled = false
    }
}