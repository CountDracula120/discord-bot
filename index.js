const Discord = require("discord.js")
const client = new Discord.Client();

const {prefix,token} = require("./config.json")

client.once("ready" , () => {

 console.log("Ready!")

});

client.on("message" , message => {

	console.log(message.content)

});

client.on("message" , message => {

if (message.content === `${prefix}fucku`) {
	message.channel.send("You might want to go home and rethink your life")
}

else if (message.content === `${prefix}server`) {
	message.channel.send(`This server name is: ${message.guild.name}\nTotal Members: ${message.guild.memberCount}`);
}

})

//RPS Game

client.on("message" , message => {

var rps = Math.floor(Math.random() * 3)

if (message.content === `${prefix}rps`) {

message.channel.send("RPS Game Available Options: Rock , Paper or Scissors")
                                           }


else if (message.content === `${prefix}rps rock` && rps === 0) {

	message.channel.send("You showed Rock. I showed Rock. Rock vs Rock. Its a Draw")

} else if (message.content === `${prefix}rps rock` && rps === 1) {

    message.channel.send("You showed Rock. I showed Paper. Paper covers Rock.I Won")

}
  else if (message.content === `${prefix}rps rock` && rps === 2) {

  	  message.channel.send("You showed Rock. I showed Scissors. Rock smashes Scissors. You Won")

  }

     else if (message.content === `${prefix}rps paper` && rps === 0) { 

     	message.channel.send("You showed Paper. I showed Rock. Paper covers Rock. You won")
   
     }

     else if (message.content === `${prefix}rps paper` && rps === 1) {
     
     message.channel.send("You showed Paper. I showed Paper. Paper vs Paper. Its a Draw")

     }

     else if (message.content === `${prefix}rps paper` && rps === 2) {

     message.channel.send("You showed Paper. I showed Scissors. Scissors cut Paper. I Won")

     } 

     else if (message.content === `${prefix}rps scissors` && rps === 0) {

      message.channel.send("You showed Scissors. I showed Rock. Rock smashes Scissors. I Won")

     }

      else if (message.content === `${prefix}rps scissors` && rps === 1) {

      message.channel.send("You showed Scissors. I showed Paper. Paper covers Rock. You Won")

     } 

      else if (message.content === `${prefix}rps scissors` && rps === 2) {

      message.channel.send("You showed Scissors. I showed Scissors. Scissors vs Scissors. Its a Draw")

     } 

     else if (message.content.startsWith(`${prefix}rps`) && message.content != (`${prefix}rps rock` || `${prefix}rps paper` || `${prefix}rps scissors`)) {

     	message.channel.send("Invalid Option. Valid Options: rock, paper and scissors")
     }


     })

client.on("message" , message => {

if (message.content.startsWith(`${prefix}middlefinger`) || message.content.startsWith(`${prefix}mf`)) {

message.channel.send(`:middle_finger: ${message.mentions.users.first()}`)

}

})


client.login(token)

