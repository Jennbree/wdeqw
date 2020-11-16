const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RANDOM')
.addField('Rwely Help',`
**.p ** <Şarkı Adı Veya Youtube Url> : Belirttiğiniz Şarkıyı Sesli Odada Söyler
**.pause** : Çalan Şarkıyı Durdurur
**.resume** : Durdurduğunuz Şarkıyı Devam Ettirir
**.loop** : Çalan Şarkıyı Tekrarlar
**.skip** : Bi Sonraki Şarkıya Geçiş Yapar
**.stop** : Şarkıyı Durdurur 
**.volume** : Ses Seviyesini Belirler `)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail("https://cdn.discordapp.com/attachments/754914319078129704/776597072823713843/turk_bayragi.gif")
.setImage("https://cdn.discordapp.com/attachments/754914319078129704/776596002207301632/E5pLbu.gif")

 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["help","yardım"], 
  permLevel: 0
};
exports.help = {
  name: 'help'
};
  