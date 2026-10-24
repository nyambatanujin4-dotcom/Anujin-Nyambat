export type Language = 'mn' | 'en';

export interface Translations {
  [key: string]: string;
}

export const translations: Record<Language, Translations> = {
  mn: {
    // Навигаци
    'nav.about': 'Тухай',
    'nav.hobby': 'Хобби',
    'nav.model': 'Миний модел',
    'nav.modelBtn': 'Миний модел 📖',
    'nav.home': '← Нүүр хуудас',

    // Баатар хэсэг (Hero)
    'hero.title': 'Сайна уу, намайг Анужин гэдэг<br>Би <em>10 настай.</em>',

    // Тоон үзүүлэлт (Stats)
    'stats.pill': 'Миний тухай',
    'stats.title': 'Ном унших, шүлэг бичих ба<br><em>AI сурах эрмэлзэл.</em>',
    'stats.ageLbl': 'Миний нас',
    'stats.ageSuf': ' нас',
    'stats.booksLbl': 'Уншсан ном',
    'stats.aiLbl': 'AI сурах хүсэл',
    'stats.yukiLoveLbl': 'Юкидээ өгөх хайр',
    'stats.tickerBook': 'Ном',
    'stats.tickerPoem': 'Шүлэг',
    'stats.tickerAi': 'AI Сургалт',
    'stats.tickerYuki': 'Юки 🐾',
    'stats.tickerCreative': 'Бүтээлч',

    // Аккордеон (Loop)
    'loop.pill': 'Миний сонирхол & зорилго',
    'loop.title': 'Миний хобби, зорилго ба<br>хайртай муур <em>Юки.</em>',
    'loop.panel1Title': 'Миний хобби',
    'loop.panel1Desc': 'Миний хамгийн дуртай хобби бол шинэ содон ном унших, сэтгэлээсээ уянгалаг шүлэг бичих явдал юм.',
    'loop.panel2Title': 'Сургалтын зорилго',
    'loop.panel2Desc': 'Энэхүү сургалтанд сууж байгаа гол зорилго маань орчин үеийн хиймэл оюун (AI) ашиглаж, шинийг сурах билээ.',
    'loop.panel3Title': 'Хайртай муур Юки',
    'loop.panel3Desc': 'Би цас шиг цагаан үстэй, хоёр өөр өнгийн нүдтэй, эрх дураараа Юки нэртэй хөөрхөн мууртай. Тэр намайг шүлэг бичихэд үргэлж онгод бэлэглэдэг!',
    'loop.panel3Bubble': 'Хайртай Юки 🐾',

    // Модел хэсэг (Миний модел)
    'model.pill': 'Ирээдүйн хүсэл мөрөөдөл · Миний модел',
    'model.title': 'Би том болоод<br><em>зохиолч болохыг хүсдэг.</em>',
    'model.intro': 'Миний хамгийн том мөрөөдөл бол сэтгэл догдлуулам үлгэр, яруу тансаг шүлэг бичдэг зохиолч болох явдал юм. Үүний тулд хичээлдээ шамдан суралцахын зэрэгцээ орчин үеийн хиймэл оюун (AI) ашиглан бичсэн шүлгээ edit хийж засахад суралцаж байна!',
    'model.subheadSubjects': 'Зохиолч болоход сайн сурах 3 гол хичээл',
    'model.subj1Title': 'Монгол хэл',
    'model.subj1Desc': 'Үгийн баялаг, дүрмийн найруулга, эх хэлнийхээ уянгалаг яруу үгсийг нарийн судалж, зөв найруулан бичих суурь ур чадвараа хөгжүүлнэ.',
    'model.subj2Title': 'Түүх',
    'model.subj2Desc': 'Өнгөрсөн үеийн баатарлаг түүх, өвөг дээдсийн соёл, сонирхолтой бодит үйл явдлуудаас сэдэвлэн адал явдалт зохиол бүтээхэд түүхийн мэдлэг хамгийн чухал.',
    'model.subj3Title': 'Уран зохиол',
    'model.subj3Desc': 'Дэлхийн болон Монголын шилдэг зохиолчдын бүтээлийг уншиж, шүлгийн айзам хэмнэл, зохиолын өрнөл, дүрүүдийн дотоод ертөнцийг нээх урлагт суралцана.',
    
    // AI ба Юки хэсэг
    'model.subheadAi': 'AI яагаад хэрэгтэй вэ? & Бяцхан туслах Юки',
    'model.aiCard1Title': 'Шүлгээ Edit хийж засах',
    'model.aiCard1Desc': 'Бичсэн шүлгийнхээ мөр бадгийг нягтлах, үгийн хэмнэлийг шалгах, үгийн баялгаа нэмэгдүүлж улам яруу тансаг болгон засахад AI хамгийн сайн туслагч болно.',
    'model.aiCard2Title': 'Шинэ содон санаа гаргах',
    'model.aiCard2Desc': 'Үлгэр, өгүүллэгийн сонирхолтой эхлэл, төгсгөл, дүрийн зан чанар, содон дүрслэлүүдийг олоход AI-аас санаа авч хамтран бүтээлчээр ажиллана.',
    'model.yukiRolePill': 'Зохиолын гол дүр',
    'model.yukiRoleTitle': 'Онгод хайрлагч муур Юки',
    'model.yukiRoleDesc': 'Цас мэт цагаахан үстэй, хоёр өөр өнгийн нүдтэй, эрх дураараа бяцхан муужгай Юки маань миний зохиолуудын гол баатар болж, шүлэг зохиол бичих үед дэргэд эрхлэн онгод хайрладаг хамгийн дотны анд минь юм.',
    'model.yukiPhotoTag': 'Цас мэт цагаан & Хоёр өөр нүдэт Юки 🌸',

    // Муур Юкигийн баримтууд
    'model.catFactsTitle': 'Муур Юкигийн маань тухай сонирхолтой 4 баримт',
    'model.fact1Title': 'Хоёр өөр өнгийн нүдтэй',
    'model.fact1Desc': 'Юкигийн нэг нүд нь далай шиг гүн цэнхэр, нөгөө нүд нь наран шар алтлаг өнгөтэй (гетерохроми). Яг л үлгэрийн шидэт сахиус шиг гайхамшигтай харцтай!',
    'model.fact2Title': 'Цас мэт цагаахан зөөлөн үстэй',
    'model.fact2Desc': 'Шинэхэн орсон хөвсгөр цас шиг цав цагаан, булбарай зөөлөн үстэй. Япон хэлээр "Юки" (Yuki) гэдэг нь "Цас" гэсэн үзэсгэлэнтэй утгатай билээ.',
    'model.fact3Title': 'Эрх дураараа бяцхан муужгай',
    'model.fact3Desc': 'Маш эрх, дураараа зантай! Намайг ном уншиж, шүлэг бичиж байхад дэвтэр дээр минь эрхлэн ирж хэвтээд дулаахан тэвэрт минь унтах дуртай.',
    'model.fact4Title': 'Шидэт хүржигнэх дуу (Purring)',
    'model.fact4Desc': 'Эрхлэх дуртай үедээ зөөлнөөр хүржигнэдэг бөгөөд энэ дуу нь намайг тайвшруулж, хамгийн уянгалаг шинэ шүлэг бичих онгодыг бэлэглэдэг.',

    // Төгсгөлийн уриалга (CTA)
    'cta.pill': 'Танилцсандаа таатай байна',
    'cta.title': 'Мөрөөдлийнхөө зүг<br><em>урагшаа!</em>',
    'cta.desc': 'Ном, шүлэг, эрх бяцхан муур Юкитэйгээ хамт зохиолч болох нандин мөрөөдөлдөө хүрэхээр тэмүүлж байна. Надтай танилцсанд баярлалаа!',
    'cta.btn': 'Дээш буцах 🌸',
    'cta.backHome': '← Нүүр хуудас руу буцах 🌸',

    // Хөл хэсэг (Footer)
    'footer.intro': 'Танилцуулга',
    'footer.about': 'Миний тухай',
    'footer.hobby': 'Хобби ба Юки',
    'footer.model': 'Миний модел',
    'footer.goal': 'Зорилго',
    'footer.copy': '© 2026 Анужин. Бүх эрх хамгаалагдсан.'
  },

  en: {
    // Navigation
    'nav.about': 'About',
    'nav.hobby': 'Hobby',
    'nav.model': 'My Model',
    'nav.modelBtn': 'My Model 📖',
    'nav.home': '← Back to Home',

    // Hero Section
    'hero.title': 'Hi, I am Anujin<br>I am <em>10 years old.</em>',

    // Stats Section
    'stats.pill': 'About Me',
    'stats.title': 'Reading books, writing poetry &<br><em>my passion to learn AI.</em>',
    'stats.ageLbl': 'My Age',
    'stats.ageSuf': ' yrs',
    'stats.booksLbl': 'Books Read',
    'stats.aiLbl': 'Desire to learn AI',
    'stats.yukiLoveLbl': 'Love for Yuki',
    'stats.tickerBook': 'Books',
    'stats.tickerPoem': 'Poetry',
    'stats.tickerAi': 'AI Learning',
    'stats.tickerYuki': 'Yuki 🐾',
    'stats.tickerCreative': 'Creative',

    // Accordion Section (Loop)
    'loop.pill': 'My Passions & Goals',
    'loop.title': 'My hobbies, dreams and<br>my beloved cat <em>Yuki.</em>',
    'loop.panel1Title': 'My Hobby',
    'loop.panel1Desc': 'My absolute favorite hobby is reading exciting new books and writing heartfelt, melodic poetry.',
    'loop.panel2Title': 'Learning Goal',
    'loop.panel2Desc': 'My main goal in this program is to master modern Artificial Intelligence (AI) and unlock new creative possibilities.',
    'loop.panel3Title': 'My Beloved Cat Yuki',
    'loop.panel3Desc': 'I have a playful kitten named Yuki with snow-white fur and heterochromatic eyes. She always inspires me when I write poetry!',
    'loop.panel3Bubble': 'Lovely Yuki 🐾',

    // Model Section
    'model.pill': 'Future Dreams · My Model',
    'model.title': 'When I grow up,<br><em>I want to be an author.</em>',
    'model.intro': 'My biggest dream is to become an author who writes enchanting stories and heartwarming poems. To reach this goal, I study diligently every day while learning to use AI to edit and polish my poems!',
    'model.subheadSubjects': '3 Key Subjects to Master for Becoming an Author',
    'model.subj1Title': 'Mongolian Language',
    'model.subj1Desc': 'Deepening my vocabulary, literary grammar, and expressive word choices to build a strong foundation for beautiful writing.',
    'model.subj2Title': 'History',
    'model.subj2Desc': 'Drawing inspiration from epic historical legends, cultural heritage, and real events to craft vivid adventure stories.',
    'model.subj3Title': 'Literature',
    'model.subj3Desc': 'Reading the finest works of world and Mongolian authors to master poetic rhythm, storytelling arcs, and deep characters.',

    // AI & Yuki Section
    'model.subheadAi': 'Why I Need AI & My Little Helper Yuki',
    'model.aiCard1Title': 'Editing & Polishing Poetry',
    'model.aiCard1Desc': 'Refining line rhythm, exploring rich synonyms, and perfecting poetic stanzas—AI is the ultimate creative writing companion.',
    'model.aiCard2Title': 'Sparking Fresh Ideas',
    'model.aiCard2Desc': 'Brainstorming creative openings, twist endings, unique characters, and magical worlds through friendly collaboration with AI.',
    'model.yukiRolePill': 'Main Protagonist',
    'model.yukiRoleTitle': 'Yuki the Muse Cat',
    'model.yukiRoleDesc': 'With snow-white fur and two distinct colored eyes, playful Yuki is the hero of my stories and my closest companion who sparks inspiration by my side.',
    'model.yukiPhotoTag': 'Snow-white & Odd-eyed Yuki 🌸',

    // Yuki Facts
    'model.catFactsTitle': '4 Fascinating Facts About My Cat Yuki',
    'model.fact1Title': 'Heterochromatic Odd Eyes',
    'model.fact1Desc': "One of Yuki's eyes is oceanic blue and the other is warm golden-amber (heterochromia). She looks like a magical fairy-tale guardian!",
    'model.fact2Title': 'Snow-White Silky Fur',
    'model.fact2Desc': 'Her fur is as soft and pristine as freshly fallen powder snow. In Japanese, "Yuki" (雪) means "Snow".',
    'model.fact3Title': 'Playful & Cuddly Kitten',
    'model.fact3Desc': 'She is so sweet and cuddly! Whenever I write poems or read, she curls right up on my notebook to sleep in my arms.',
    'model.fact4Title': 'Magical Purring Sounds',
    'model.fact4Desc': 'When she is content, her soothing purrs bring peace and serenity, helping sweet melodies and verses flow into my mind.',

    // CTA
    'cta.pill': 'Nice to meet you',
    'cta.title': 'Forward towards<br><em>my dreams!</em>',
    'cta.desc': "Together with my books, poetry, and sweet kitten Yuki, I am charging forward towards my dream of becoming an author. Thank you for getting to know me!",
    'cta.btn': 'Back to Top 🌸',
    'cta.backHome': '← Back to Homepage 🌸',

    // Footer
    'footer.intro': 'Intro',
    'footer.about': 'About',
    'footer.hobby': 'Hobby & Yuki',
    'footer.model': 'My Model',
    'footer.goal': 'Goal',
    'footer.copy': '© 2026 Anujin. All rights reserved.'
  }
};
