function expandedFalse() {
    //close open submenus when focus is on a menu with no submenu
    
	    var i;
		var hassubmenus = document.querySelectorAll('button[class*="usa-nav__link"][aria-expanded="true"]');	
	    for (i=0; i < hassubmenus.length; i++) {
            hassubmenus[i].click();
	    }
    
    

}
