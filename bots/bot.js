class Bot {
    constructor(name) {
      this.name = name;
      this.commands = {};
    }
  
    addCommand(trigger, action) {
      this.commands[trigger] = action;
      console.log(`Command added to ${this.name}: ${trigger}`);
    }
  
    respond(message) {
      const elements = message.split(" ");
      const command = this.commands[elements[0]];
      if (command && elements.length == 1) {
        return command();
      } else if (command){
        const args = elements.slice(1);
        return command(args);
      }
      return null;
    }
  }
  
  export default Bot;
  