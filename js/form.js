class Form{
    constructor(){
        this.inputBox=createInput("Name");
        this . button=createButton("login");
        this . Hi = createElement("h3")
    }
    display(){
        this.inputBox.position(300,300);
        this.button.position(400,500);
        this.button.mousePressed(()=>{
            this.inputBox.hide();
            this.button.hide();
            var name = this.inputBox.value();
            playerCount++;
            player.updateCount(playerCount);
            player.updateName(name)
            this.Hi.html("Hello "+name)
            this.Hi.position(300,200);
        })
    }
}