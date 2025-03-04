let handler = async (m, { conn }) => {
  let caption = `Halo Kak Ada yang bisa aku bantu?`
  
  await conn.sendMessage(m.chat, {
    image: { url: 'https://s6.krakenfiles.com/uploads/19-02-2025/kzcQzzBN0d/image.jpg' },
    gifPlayback: true,
    caption,
    footer: 'Bell - 2025',
    buttons: [{ buttonId: '.menu', buttonText: { displayText: 'All Menu' }, type: 1 }],
    headerType: 1,
    viewOnce: true
  }, { quoted: m })

  await conn.sendMessage(m.chat, {
    audio: { url: 'https://files.catbox.moe/61wol8.mp3' },
    mimetype: 'audio/mp4',
    ptt: true
  }, { quoted: m })
}

handler.help = ['menu']
handler.command = ['menu']
handler.tags = ['main']
handler.limit = false

export default handler