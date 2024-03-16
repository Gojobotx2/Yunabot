const handler = async (m, {conn, args, usedPrefix, command}) => {
  const isClose = { // Switch Case Like :v
    'فتح': 'not_announcement',
    'غلق': 'announcement',
    'abierto': 'not_announcement',
    'cerrado': 'announcement',
    'abrir': 'not_announcement',
    'cerrar': 'announcement',
  }[(args[0] || '')];
  if (isClose === undefined) {
    throw `
*[❗] اعدادات الجروب*

*┏━━━❲ ✨اختار✨ ❳━━━┓* 
*┠┉↯ ${usedPrefix + command} جروب فتح*
*┠┉↯ ${usedPrefix + command} جروب غلق*
`.trim();
  }
  await conn.groupSettingUpdate(m.chat, isClose);
  {m.reply('*[ ✔ ] تم تغيير اعدادات الجروب*');}
};
handler.help = ['جروب فتح / غلق','شات فتح / غلق'];
handler.tags = ['group'];
handler.command = /^(شات|جروب)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
