const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);

client.on('guildMemberAdd', Sal => { //By Salto7#4595
    var embed = new Discord.RichEmbed()
    .setAuthor(Sal.user.username, Sal.user.avatarURL)
    .setThumbnail(Sal.user.avatarURL)
    .setImage('https://cdn.discordapp.com/attachments/492862340484694027/493771573740830740/welcome1.png') //هنا حط الصوره الي تبيها
    .setTitle('عضو جديد!')
    .setDescription('مرحبا بك بالسيرفر')
    .addField('``ايدي العضو``:',"" +  Sal.user.id, true)
    .addField('``تاق العضو``', Sal.user.discriminator, true)
    .addField('``تم الانشاء في``', Sal.user.createdAt, true)
    .addField(' 👤  انت رقم',`**[ ${Sal.guild.memberCount} ]**`,true)
    .setColor('RANDOM')
    .setFooter(Sal.guild.name, Sal.guild.iconURL, true)
    var channel =Sal.guild.channels.find('name', ' (general)') // هنا حط اسم الروم الي تبيه يكتب فيه
    if (!channel) return;
    channel.send({embed : embed});
    });


client.on('message', function(message) {
    if(!message.channel.guild) return;
if(message.content ===  '%color 100') {
if(message.member.hasPermission('MANAGE_ROLES')) {
setInterval(function(){})
message.channel.send('سيتم عمل الالوان انتظر ...')//Narox
}else{
message.channel.send('** يجب ان يكون لديك برمشن ،"MANAGE_ROLES" ❌**')
}
}
});
//Narox
client.on('message', message=>{
if (message.content ===  '%color 100'){
if(!message.channel.guild) return;
if (message.member.hasPermission('MANAGE_ROLES')){
  setInterval(function(){})
    let count = 0;
    let ecount = 0;
for(let x = 1; x < 100; x++){//اذا تريد ان تقوم بزياده الالوان قم بتعديل رقم 100
message.guild.createRole({name:x,
color: 'RANDOM'})
}
}
}
});
