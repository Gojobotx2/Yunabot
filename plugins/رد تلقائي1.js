let handler = m => m; 
handler.all = async function (m) { 
    let chat = global.db.data.chats[m.chat]; 
    let responses; 
    if (/^هلا$/i.test(m.text)) { 
        responses = [ 
            '*هلا بيك يعمري 😩❤‍🔥*', 
            '*اهلييين نورت✨*', 
        ]; 
    } else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
        responses = [ 
            '*♥🐥وعليكم السلام*',  
        ]; 
    } else if (/^يونا$/i.test(m.text)) { 
        responses = [ 
            '*يونا تحت امرك🫡*', 
            '*يونا في خدمتك❤️‍🔥*', 
        ]; 
    } else if (/^غوجو عمك|غوجو عمكم|يونا عمتك|يونا عمتكم$/i.test(m.text)) { 
        responses = [ 
            '*اكيد😩❤‍🔥*', 
            '*تفهم ياعيوني🫠🩵*', 
        ]; 
    } else if (/^يونا مرتبطه|يونا مرتبطة|يونا مرتبطة؟$/i.test(m.text)) { 
        responses = [ 
            '*نعم بغوجو🫠🩵*', 
            '*ايوه بعمك غوجو🩵*', 
        ]; 
    } else if (/^يونا تحبيني|تحبيني$/i.test(m.text)) { 
        responses = [ 
            '*نعم مثل اخوي🙂🤍*', 
            '*اكرهك🙂💔*', 
            '*احب غوجو🫠🩵*', 
        ]; 
    } else if (/^يونا تكرهيني|تكرهيني|تكرهيني؟$/i.test(m.text)) { 
        responses = [ 
            '*لا ياخي🫤*', 
            '*لا بس لا تتعب نفسك لحبك🫥*', 
            '*ااي اكرهك🙄*',   
        ]; 
    } else if (/^هاي|هالو|هلو$/i.test(m.text)) { 
        responses = [ 
            '*هالو🌚♥*', 
            '*القمر اجى🩵🌚*', 
        ]; 
    } else if (/^بحبك/i.test(m.text)) { 
        responses = [ 
            '*بحبك اكتر🌚❤*',  
        ]; 
    } else if (/^يونا من وين انتي$/i.test(m.text)) { 
        responses = [ 
            'تونس🇹🇳❤', 
        ]; 
    } else if (/^احبك$/i.test(m.text)) { 
        responses = [ 
            '*مـي تو 🙂🫀*', 
        ]; 
    } else if (/^كيفك|شخبارك|انتي منيحه$/i.test(m.text)) { 
        responses = [ 
            'الحمدالله🤍',  
        ]; 
    } else if (/^تحبيني$/i.test(m.text)) { 
        responses = [ 
            '🌚♥اكيد', 
            '*احب غوجو اكثر🐱*', 
        ]; 
    } else if (/^هاي$/i.test(m.text)) { 
        responses = [ 
            'هاي نورت✨',  
        ]; 
    } else if (/^يعمري|ياعمري|عيوني|ياعيوني$/i.test(m.text)) { 
        responses = [ 
            '*اعشقك💙*',  
        ]; 
    } else if (/^اهلا$/i.test(m.text)) { 
        responses = [ 
            '*اهلا♥*',  
        ]; 
    } else if (/^مساء|مساء$/i.test(m.text)) { 
        responses = [ 
            'مساء الخير',
            '*مساء النور*',
            '*مساء العسل يا سكر🫰🫶*',
        ]; 
    } else if (/^صباح|صباح$/i.test(m.text)) { 
        responses = [ 
            '*صباح الورد♥*',
            '*صباح النور✨🤍*',
            '*صباح الفل❄🌚*',
        ]; 
    } else if (/^غوجو كلب|غوجو التشلب|كلب|ياكلب|ياتشلب$/i.test(m.text)) { 
        responses = [ 
            '*انت الكلب🗿*',
            '*يا حيوان*',
            '*قول مياو و انطم*',
            '*اخرس ولك*',
        ]; 
    } else if (/^😂|😂😂|😂😂😂$/i.test(m.text)) { 
        responses = [ 
            '*ايش الي يضحك🙂*', 
            '*ضحكني معك بالله*',
            '*دووم يالضحكه💙*',
            '*دووووم❄✨*',
        ]; 
    } else if (/^مرحبا$/i.test(m.text)) { 
        responses = [ 
            '*مرحبا♥*',  
        ]; 
    } else if (/^بروح|باي|بسحب|رح اسحب|برجع|برجع بعدين|برب|يلا سلام$/i.test(m.text)) { 
        responses = [ 
            '*ترجع سالم💙💦*',
            '*بنشتاق لك لا تطول*',
            '*انقلع🙂*',
            '*لا ترجع🌚*',
        ]; 
    }
    
    if (responses) { 
        let randomIndex = Math.floor(Math.random() * responses.length); 
        conn.reply(m.chat, responses[randomIndex], m); 
    } 
    return !0; 
}; 

export default handler;
