importClass(org.openqa.selenium.interactions.Actions);

this.Component = $page("Component Test", {
    loginButton: "#welcome-page .button-login",

    hoverFirstMenuItem: loggedFunction ("Hover first menu item", function (){
        var actions = new Actions(this.driver);
        actions.moveToElement(this.findChild("xpath: //*[@id='menu']//li/a[1]")).perform();
    }) 
});
