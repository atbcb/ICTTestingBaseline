(function() {
  const anchors = new AnchorJS({
    placement: "left",
    //ariaLabel: "Copy URL",
    //class: "",
    //placement: "right",
    ariaLabel: "copy",
    visible: "touch",
  });

  anchors.add('.anchored h2, .anchored h3, .anchored h4, .anchored h5, .anchored h6');
})();

$( document ).ready(function() {
  $( ".anchorjs-link" ).click(function() {    
    var pageurl = window.location.href;
    console.log(pageurl);
    var pageurl = pageurl.split('#')[0]; //base page link
    console.log(pageurl);
    ext = $(this).attr('href'); //specific extension  #XYZ
    console.log(ext);
    url = pageurl+ext; //link you want to copy
    console.log(url);

    //Copy To clipboard
    var temp = document.createElement('input');
    document.body.appendChild(temp);
    temp.value = url;
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);

    //visible alert
    $.toast({ 
      text : "Link copied to clipboard", 
      showHideTransition : 'slide',  // It can be plain, fade or slide
      bgColor : '#1a4480',              // Background color for toast
      textColor : '#ffffff',            // text color
      allowToastClose : false,       // Show the close button or not
      hideAfter : 5000,              // `false` to make it sticky or time in miliseconds to hide after
      stack : false,                     // `fakse` to show one stack at a time count showing the number of toasts that can be shown at once
      textAlign : 'left',            // Alignment of text i.e. left, right, center
      position : 'bottom-left'      // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values to position the toast on page


    });

  });
});

// Previous example
// function copyLink(buttonID) {
//   //	console.log(buttonID);

//     var c = document.getElementById(buttonID).nextSibling.href;
//   //	console.log(c);

//     var el = document.createElement("textarea");
//     el.innerHTML = c;
//     el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
//     el.style.position = 'absolute';
//     el.style.left = '-9999px';                      // Move outside the screen to make it invisible
//     document.body.appendChild(el);
//    const selected =
