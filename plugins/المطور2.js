import { createHash } from 'crypto'
const handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
const user = global.db.data.users[m.sender];
const mentionedUser = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
let username = conn.getName(who)
const taguser = '@' +  m.sender.split('@s.whatsapp.net')[0];
    const text = `
*⚘اهلا و سهلا بك يا 『${taguser}』*

*↯رقم المطور:『 https://wa.me/message/RYOUR2E5SRFOL1 』*

*↯انستا المطور:『 https://www.instagram.com/gojosaturo_876?igsh=amxrYmMydTh0NDN3 』*
`.trim();

    conn.sendMessage(m.chat, {
      text,
      contextInfo: {
        externalAdReply: {
          title: 'ᥡᥙᥒᥲ┇ᑲ᥆𝗍',
          body: "البوت الخاص بمملكة SPACE🚀",
          thumbnailUrl:'https://telegra.ph/file/7116c6426e496c317d83e.jpg',
          sourceUrl: 'https://www.instagram.com/gojosaturo_876?igsh=amxrYmMydTh0NDN3',
          mediaType: 2,
        }
      }
    }, { quoted: m });
  } catch (e) {
    conn.reply(m.chat, '❎ هناك خطأ في لائحة الاوامر', m);
    throw e;
  }
};

handler.help = ['استمارة'];
handler.tags = ['infobot'];
handler.command = ['معلومات_المطور'];
handler.register = false;

export default handler;
