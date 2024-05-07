//  clock.js
//===================
//Αυτή η συνάρτηση θα αναλάβει να ενημερώσει την τρέχουσα ώρα στο στοιχείο HTML.
function displayTime() {
    // αποθηκεύεται το στοιχείο HTML με το αναγνωριστικό "clock" στη μεταβλητή element.
    var element = document.getElementById('clock');
    // δημιουργείται ένα αντικείμενο Date που αντιπροσωπεύει την τρέχουσα χρονική στιγμή.
    var currentTime = new Date();
    // αποθηκεύονται στις μεταβλητές hours,minutes, seconds οι τρεχουσα ώρα, λεπτά και δευτερόλεπτα αντίστοιχα.
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    // Προσθέστε μηδενικά μπροστά αν οι ώρες, οι λεπτά ή τα δευτερόλεπτα είναι μονοψήφια
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    // δημιουργείται μια συμβολοσειρά που περιέχει την τρέχουσα ώρα στη μορφή "ώρες:λεπτά:δευτερόλεπτα".
    var currentTimeString = hours + ":" + minutes + ":" + seconds;
    // Αντικαθιστούμε το περιεχόμενο του element με την τρέχουσα ώρα
    element.innerHTML = currentTimeString;
    }
// Καλούμε τη συνάρτηση displayTime κάθε δευτερόλεπτο
setInterval(displayTime, 1000);


//  clock.html
//===================
//<html>
//  <head>
//  </head>
//  <body>
//      <script src="clock.js"></script>
//      <h1 id="clock"></h1>
//  </body>
//</html>
