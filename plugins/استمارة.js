const handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    const text = `
*╔══════✮╍╍╍ 𝙎𝙐𝙉☀╍╍╍✮═════╗*

             *🪐═══━━━منور/ة━━━════🪐*

           *💧════━━━اللقب𓊈𓊉━━━═══💧*

          *🌙════━━━الانمي𓊈𓊉━━━═══🌙*

         *💥════━━━الطرف𓊈𓊉━━━═══💥*

         *🔆════━━━الجنس𓊈𓊉━━━═══🔆*

                              *🔴ملاحظة:*
          *🚫ممنوع اخيار لقب من الهنتاي او الايتشي*
   *🚫ممنوع اختيار لقب شخصية بنت اذا كنت ولد و العكس*
                                *~🔴الشرح:~*
                  *اللقب:اسم شخصية انمي تحبها*
            *الانمي:الشخصية التي اخترتها من اي انمي؟*
           *الطرف:من اي حصلت على رابط الدخول؟*
                *+الحق صوره للشخصية التي اخترتها*
*╚══════✮╍╍╍𝙎𝙐𝙉☀╍╍✮══════╝*
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
handler.command = ['استمارة','الاستمارة','استماره','الاستماره'];
handler.register = false;

export default handler;
