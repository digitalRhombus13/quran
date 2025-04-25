import React, { useState } from "react";
import { BookOpen } from "lucide-react";
import Navbar from "./Navbar"; // Assuming you have a Navbar component
import Footer from "./Footer"; // Assuming you have a Footer component
import hero from "../assets/design.jfif"; // Reuse the same hero image
import { Link } from "react-router-dom";

const RamadanDuas = () => {
  // List of Ramadan Duas
  const duas = [
    {
      id: 1,
      title: "1st Kalima",
      arabic:
        "پهلا کلمه طیب\nکالله إلا الله محمد رسول الله\nالسلام اول میریتین، چیه السلام علیکم",
      transliteration:
        "Pahla kalima tayyib\nKallah illa Allah Muhammad Rasulullah\nAs-salam awwal marratayn, cheye as-salam alaykum",
      translation:
        "First word is pure\nThere is no god but Allah, Muhammad is the Messenger of Allah\nPeace is the first two times, what is 'peace be upon you'",
    },
    {
      id: 2,
      title: "2nd Kalima",
      arabic:
        "دوسرا کلمه شهادت\n\n**أَشْهَدُ أَنْ لَا إِلَـٰهَ إِلَّا اللَّـهُ وَحْدَهُ لَا شَرِيكَ لَهُ**\n\nوَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
      transliteration:
        "Dusra Kalima Shahadat\n\n**Ashhadu an la ilaha illallah, wahdahu la sharika lah**\n\nWa ashhadu anna Muhammadan 'abduhu wa rasuluh",
      translation:
        "**Second Kalima (Testimony of Faith)**\n\nI bear witness that there is no god but Allah, alone without any partner.\n\nAnd I bear witness that Muhammad is His servant and Messenger.",
    },
    {
      id: 3,
      title: "3rd Kalima",
      arabic:
        "سُبْحَانَ اللهِ وَالْحَمْدُ لِلَّهِ وَلا إِلَـٰهَ إِلاَّ اللهُ وَاللهُ أَكْبَرُ\n\nوَلَا حَوْلَ وَلَا قُوَّةَ إِلاَّ بِاللهِ الْعَلِيِّ الْعَظِيمِ",
      transliteration:
        "Subhanallah, walhamdulillah, wa la ilaha illallah, wallahu akbar\n\nWa la hawla wa la quwwata illa billahil 'aliyyil 'azim",
      translation:
        "Glory be to Allah, all praise is for Allah, there is no god but Allah, and Allah is the Greatest.\n\nAnd there is no power nor strength except with Allah, the Most High, the Almighty.",
    },
    {
      id: 4,
      title: "4th Kalima",
      arabic:
        "چوتھا کلمہ توحید\n\n**لَا إِلٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ**\n\nيُحْيِي وَيُمِيتُ وَهُوَ حَيٌّ لَا يَمُوتُ أَبَدًا أَبَدًا ذُوالْجَلَالِ وَالإِكْرَامِ، بِيَدِهِ الْخَيْرُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
      transliteration:
        "Chautha Kalima Tauheed\n\n**La ilaha illallahu wahdahu la sharika lahu, lahu’l-mulku walahu’l-hamdu**\n\nYuhyi wa yumit, wa huwa hayyun la yamutu abadan abada, zul-jalali wal-ikram, biyadihi’l-khayru wa huwa ‘ala kulli shay’in qadeer.",
      translation:
        "**Fourth Kalima (Oneness of Allah)**\n\nThere is no god but Allah, He is alone and has no partner. His is the kingdom, and for Him is all praise.\n\nHe gives life and causes death, and He is ever-living and will never die. The Possessor of Glory and Honor, in His hand is all goodness, and He has power over all things.",
    },
    {
      id: 5,
      title: "5th Kalima",
      arabic:
        "پانچوان کلمہ استغفار\n\n**أَسْتَغْفِرُ اللّٰهَ رَبِّي مِنْ كُلِّ ذَنْبٍ أَذْنَبْتُهُ عَمْدًا أَوْ خَطَاً سِرًّا أَوْ عَلَانِيَةً**\n\nوَأَتُوبُ إِلَيْهِ مِنَ الذَّنْبِ الَّذِي أَعْلَمُ وَمِنَ الذَّنْبِ الَّذِي لَا أَعْلَمُ إِنَّكَ أَنْتَ عَلَّامُ الْغُيُوبِ وَسَتَّارُ الْعُيُوبِ وَغَفَّارُ الذُّنُوبِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ الْعَلِيِّ الْعَظِيمِ",
      transliteration:
        "Panchwan Kalima Astaghfar\n\n**Astaghfirullaha Rabbi min kulli dhanbin adhnabtuhu 'amdan aw khata'an sirran aw 'alaniyyah**\n\nWa atubu ilayhi min adh-dhanbi allathee a'lamu wa min adh-dhanbi allathee la a'lamu innaka anta 'allamul-ghuyubi wa sattarul-'uyubi wa ghaffarud-dhunubi wa la hawla wa la quwwata illa billahil 'aliyyil 'azim.",
      translation:
        "**Fifth Kalima (Seeking Forgiveness)**\n\nI seek forgiveness from Allah, my Lord, for every sin that I have committed knowingly or unknowingly, in secret or in public.\n\nAnd I turn to Him in repentance for the sins I know and for the sins I do not know. Indeed, You are the Knower of the unseen, the Concealer of faults, and the Forgiver of sins. And there is no power and no strength except with Allah, the Most High, the Most Great.",
    },
    {
      id: 6,
      title: "6th Kalima",
      arabic:
        "چھٹا کلمہ ردِّ کفر\n\n**اللّٰهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ أَنْ أُشْرِكَ بِكَ شَيْئًا وَأَنَا أَعْلَمُ بِهِ وَأَسْتَغْفِرُكَ لِمَا لَا أَعْلَمُ بِهِ**\n\nتُبْتُ عَنْهُ وَتَبَرَّأْتُ مِنَ الْكُفْرِ وَالشِّرْكِ وَالْكِذْبِ وَالْغِيبَةِ وَالْبِدْعَةِ وَالنَّمِيمَةِ وَالْفَوَاحِشِ وَالْبُهْتَانِ وَالْمَعَاصِي كُلِّهَا وَأَسْلَمْتُ وَآمَنْتُ وَأَقُولُ لَا إِلٰهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُوْلُ اللَّهِ",
      transliteration:
        "Chhata Kalima Radd-e-Kufr\n\n**Allahumma inni a'udhu bika min an ushrika bika shay'an wa ana a'lamu bihi wa astaghfiruka lima la a'lamu bihi**\n\nTubtu 'anhu wa tabarra'tu minal-kufri wash-shirki wal-kidhbi wal-ghibati wal-bid'ati wan-namimati wal-fawahishi wal-buhtani wal-ma'asi kulliha wa aslamtu wa amantu wa aqulu la ilaha illallahu Muhammadur Rasulullah.",
      translation:
        "**Sixth Kalima (Rejecting Disbelief)**\n\nO Allah! I seek refuge in You from knowingly associating anything with You, and I seek Your forgiveness for what I do not know.\n\nI repent from it and disassociate myself from disbelief, polytheism, lies, backbiting, innovations, slander, immorality, false accusations, and all disobedience. I have submitted and have faith, and I declare that there is no god but Allah, and Muhammad is the Messenger of Allah.",
    },
    {
      id: 7,
      title: "Before Eating",
      arabic: "بِسْمِ اللّٰهِ وَعَلٰى بَرَكَةِ اللّٰهِ",
      transliteration: "Bismillahi wa 'ala barakatillah",
      translation: "In the name of Allah and upon the blessings of Allah.",
    },
    {
      id: 8,
      title: "When Forgetting to Recite the Dua Before Eating",
      arabic: "بِسْمِ اللّٰهِ أَوَّلَهُ وَآخِرَهُ",
      transliteration: "Bismillahi awwalahu wa akhirahu",
      translation: "In the name of Allah in the beginning and the end.",
    },
    {
      id: 9,
      title: "After Eating",
      arabic:
        "الْحَمْدُ لِلّٰهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مِنَ المُسْلِمِينَ",
      transliteration:
        "Alhamdu lillahilladhi at'amana wa saqana wa ja'alana minal muslimeen",
      translation:
        "All praise be to Allah who gave us food and drink and made us Muslims.",
    },
    {
      id: 10,
      title: "Before Sleeping (1)",
      arabic: "اللّٰهُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا",
      transliteration: "Allahumma bismika amutu wa ahya",
      translation: "O Allah, with Your name do I die and live.",
    },
    {
      id: 11,
      title: "When Awakening",
      arabic:
        "الْحَمْدُ لِلّٰهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
      transliteration:
        "Alhamdu lillahil-ladhi ahyana ba'da ma amatana wa ilayhin-nushur",
      translation:
        "All praise is due to Allah who has given us life after death and to Him is the return after death.",
    },
    {
      id: 12,
      title: "Before Entering Toilet with Left Foot",
      arabic: "اللّٰهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
      transliteration:
        "Allahumma inni a'udhu bika minal khubuthi wal khaba'ith",
      translation:
        "O Allah, I seek Your protection from the male and female Devil.",
    },
    {
      id: 13,
      title: "After Leaving Toilet with Right Foot",
      arabic:
        "غُفْرَانَكَ الْحَمْدُ لِلّٰهِ الَّذِي أَذْهَبَ عَنِّيَ الْأَذَى وَعَافَانِي",
      transliteration:
        "Ghufranaka, alhamdu lillahil-ladhi adh-haba 'anni al-adha wa 'afani",
      translation:
        "I seek Your pardon. Praise be to Allah who removed from me discomfort and gave me relief.",
    },
    {
      id: 14,
      title: "When thanking someone",
      arabic: "جَزَاكَ اللّٰهُ خَيْرًا",
      transliteration: "Jazakallahu Khayran",
      translation: "May Allah reward you well.",
    },
    {
      id: 15,
      title: "When sneezing",
      arabic: "الْحَمْدُ لِلّٰهِ",
      transliteration: "Alhamdulillah",
      translation: "All praise be to Allah.",
    },
    {
      id: 16,
      title: "Sneezing - Complete Sequence",
      arabic: "الْحَمْدُ لِلّٰهِ\nيَرْحَمُكَ اللّٰهُ\nيَهْدِيكُمُ اللّٰهُ",
      transliteration: "Alhamdulillah\nYarhamukallah\nYahdikumullah",
      translation:
        "All praise be to Allah.\nMay Allah have mercy on you.\nMay Allah guide you.",
    },

    {
      id: 17,
      title: "For increase in knowledge",
      arabic: "رَبِّ زِدْنِي عِلْمًا",
      transliteration: "Rabbi zidni ilma",
      translation: "O My Lord, Increase me in knowledge.",
    },
    {
      id: 18,
      title: "Before wudhu",
      arabic: "بِسْمِ اللهِ وَالْحَمْدُ للهِ",
      transliteration: "Bismillah walhamdulillah",
      translation:
        "(I commence Wudhu), in the name of Allah the Great and all praise be to Allah (for keeping me faithful) in the Deen (religion) of Islam.",
    },
    {
      id: 19,
      title: "Whilst making wudhu",
      arabic:
        "اللَّهُمَّ اغْفِرْ لِي ذَنْبِي وَوَسِّعْ لِي فِي دَارِي وَبَارِكْ لِي فِي رِزْقِي",
      transliteration:
        "Allahummaghfir li dhanbi, wa wassi’ li fi dari, wa barik li fi rizqi",
      translation:
        "O Allah, forgive my sins and grant me abundance in my home and blessings in my livelihood.",
    },
    {
      id: 20,
      title: "After wudhu",
      arabic:
        "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا ٱللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ اللَّهُمَّ ٱجْعَلْنِي مِنَ ٱلتَّوَّابِينَ وَٱجْعَلْنِي مِنَ ٱلْمُتَطَهِّرِينَ",
      transliteration:
        "Ashhadu an lā ilāha illallāhu waḥdahu lā sharīka lahu, wa ashhadu anna Muḥammadan ‘abduhu wa rasūluh. Allāhummaj‘alnī minat-tawwābīn, waj‘alnī minal-mutaṭahhirīn.",
      translation:
        "O Allah, make me of the repenters and make me of the purified.",
    },
    {
      id: 21,
      title: "When entering the musjid",
      arabic: "اللَّهُمَّ ٱفْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
      transliteration: "Allāhumma iftaḥ lī abwāba raḥmatika",
      translation: "O Allah, open for me the doors of Your mercy.",
    },
    {
      id: 22,
      title: "When leaving the musjid",
      arabic: "اللهم إني أسألك من فضلك",
      transliteration: "Allāhumma innī as’aluka min faḍlik",
      translation: "O Allāh, verily I seek from You, Your bounty.",
    },
    {
      id: 23,
      title: "After drinking water",
      arabic:
        "الحمد لله الذي سقانا عذبًا فراتًا برحمته ولم يجعله ملحًا أجاجًا بذنوبنا",
      transliteration:
        "Alḥamdu lillāhil-ladhī saqānā ‘adhban furātan biraḥmatihī wa lam yaj‘alhu milḥan ujājan bidhunūbinā.",
      translation:
        "All praise is due to Allah ﷻ who gave us fresh sweet water to drink out of His Mercy and did not make it bitter due to our wrongdoings.",
    },
    {
      id: 24,
      title: "After drinking milk",
      arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيهِ وَزِدْنَا مِنْهُ",
      transliteration: "Allāhumma bārik lanā fīhi wa zidnā minhu",
      translation:
        "O Allah ﷻ, grant us blessings and abundance in it (the milk).",
    },
    {
      id: 25,
      title: "When wearing clothes",
      arabic: "الحمد لله الذي كساني هذا ورزقنيه من غير حول مني ولا قوة",
      transliteration:
        "Alḥamdu lillāhil-ladhī kasānī hādhā wa razaqanīhi min ghayri ḥawlin minnī wa lā quwwah.",
      translation:
        "All praise is due to Allah ﷻ who has clothed me with these garments and given them to me without any effort and help from my side.",
    },
    {
      id: 26,
      title: "When looking into the mirror",
      arabic: "اللَّهُمَّ أَنْتَ حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي",
      transliteration: "Allāhumma anta ḥassanta khalqī faḥassin khuluqī",
      translation:
        "O Allah ﷻ, You have beautified my body, so do beautify my character.",
    },

    {
      id: 27,
      title: "When entering the home",
      arabic:
        "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلَجِ وَخَيْرَ الْمَخْرَجِ بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا",
      transliteration:
        "Allāhumma innī as’aluka khayral-mawlaji wa khayral-makhraji bismillāhi walajnā wa bismillāhi kharajnā wa ‘alallāhi rabbanā tawakkalnā",
      translation:
        "O Allah ﷻ, I ask of You the blessings of entering the home and the blessing of leaving. In the name of Allah ﷻ, we leave and enter the home and upon Allah ﷻ, our Sustainer, do we rely and depend.",
    },
    {
      id: 28,
      title: "When leaving home",
      arabic:
        "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
      transliteration:
        "Bismillāhi tawakkaltu ‘alallāhi lā ḥawla wa lā quwwata illā billāh",
      translation:
        "(I leave) with the name of Allah ﷻ; I rely on Allah ﷻ; there is no power to do any good, nor any power to abstain from evil except with the help of Allah ﷻ.",
    },
    {
      id: 29,
      title: "When bidding someone farewell",
      arabic:
        "أَسْتَوْدِعُ اللَّهَ دِينَكَ وَأَمَانَتَكَ وَخَوَاتِيمَ عَمَلِكَ",
      transliteration:
        "Astawdi‘u Allāha dīnak wa amānatak wa khawātīma ‘amalik",
      translation:
        "I entrust to Allah ﷻ your Deen, your belongings and the final outcome of your deeds.",
    },
    {
      id: 30,
      title: "When it rains",
      arabic: "اللَّهُمَّ صَيِّبًا نَافِعًا",
      transliteration: "Allāhumma ṣayyiban nāfi‘ā",
      translation: "O Allah ﷻ, do send upon us beneficial rain.",
    },

    {
      id: 31,
      title: "On hearing good news",
      arabic: "الْحَمْدُ لِلَّهِ مَاشَاءَ اللَّهُ",
      transliteration: "Alhamdu lillāhi mā shā’a Allāh",
      translation: "All praise be to Allah ﷻ. Just as Allah ﷻ willed.",
      reference: "Muslim, Vol. 1, Pg. 300",
    },
    {
      id: 32,
      title: "When a loss occurs",
      arabic: "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ",
      transliteration: "Innā lillāhi wa innā ilayhi rāji‘ūn",
      translation: "Surely we belong to Allah ﷻ and to Him is our return.",
      reference: "Muslim, Vol. 1, Pg. 300",
    },
    {
      id: 33,
      title: "When in bodily pain - First supplication",
      instructions: "Place your hand on the affected area and say:",
      arabic: "بِسْمِ اللَّهِ",
      translation:
        "Say 'Bismillah' three times while placing your hand on the affected area.",
    },
    {
      id: 33,
      title: "When in bodily pain - Second supplication",
      arabic:
        "أَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ",
      transliteration:
        "A‘ūdhu billāhi wa qudratihi min sharri mā ajidu wa uhādhiru",
      translation:
        "Say this supplication seven times while seeking protection in Allah ﷻ from the evil of what you feel and fear.",
    },
    {
      "id": 34,
      "title": "When in difficulty",
      "arabic": "حَسْبُنَا اللّٰهُ وَنِعْمَ الْوَكِيلُ وَعَلَى اللّٰهِ تَوَكَّلْنَا",
      "transliteration": "Hasbunallāhu wa ni‘mal-wakīl wa ‘alā-llāhi tawakkalnā",
      "translation": "Allah ﷻ is sufficient for us and He is the Best Helper. And upon Allah ﷻ do we rely.",
      "reference": "Tirmidhi, Vol. 2, Pg. 65"
    }
    ,
    {
      "id": 35,
      "title": "Takbeer",
      "arabic": "اللّٰهُ أَكْبَرُ",
      "transliteration": "Allāhu Akbar",
      "translation": "Allah ﷻ is the greatest.",
      "reference": ""
    },
    {
      "id": 36,
      "title": "Thanaa",
      "arabic": "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلٰهَ غَيْرُكَ",
      "transliteration": "Subḥānaka Allāhumma wa biḥamdika wa tabāraka-ismuka wa ta‘ālā jadduka wa lā ilāha ghayruk",
      "translation": "Glory be to You O Allah ﷻ, praise be to You, and blessed is Your name, very lofty is Your greatness, and there is no Deity besides You.",
      "reference": "Tirmidhi, Vol. 1, Pg. 33"
    },
    {
      "id": 37,
      "title": "Ta'awwuz",
      "arabic": "أَعُوْذُ بِاللّٰهِ مِنَ الشَّيْطٰنِ الرَّجِيْمِ",
      "transliteration": "A‘ūdhu billāhi min ash-shayṭāni ar-rajīm",
      "translation": "I seek protection in Allah ﷻ from shaytaan, the rejected.",
      "reference": ""
    },
    {
      "id": 38,
      "title": "Tasmiyah",
      "arabic": "بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيْمِ",
      "transliteration": "Bismillāhi r-raḥmāni r-raḥīm",
      "translation": "In the name of Allah ﷻ, the Most Kind, the Most Merciful.",
      "reference": ""
    },
    {
      "id": 39,
      "title": "Tasbeeh in Ruku",
      "arabic": "سُبْحَانَ رَبِّيَ الْعَظِيْمِ",
      "transliteration": "Subḥāna rabbiyal ‘aẓīm",
      "translation": "Glory be to My Lord, the Great.",
      "reference": "Tirmidhi, Vol. 1, Pg. 35"
    },
    {
      "id": 40,
      "title": "Tasmee'",
      "arabic": "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ",
      "transliteration": "Sami‘a-llāhu liman ḥamidah",
      "translation": "Allah ﷻ hears the one who praises Him.",
      "reference": ""
    },
    {
      "id": 41,
      "title": "Dua in Qaumah (1)",
      "arabic": "اللَّهُمَّ رَبَّنَا وَلَكَ الْحَمْدُ",
      "transliteration": "Allāhumma rabbana wa laka-l-ḥamd",
      "translation": "O Allah ﷻ! Our Sustainer! Unto You belongs all praise.",
      "reference": "Ibnu Majah, Pg. 62"
    },
    {
      "id": 42,
      "title": "Tasbeeh in Sajdah",
      "arabic": "سُبْحَانَ رَبِّيَ الْأَعْلَى",
      "transliteration": "Subḥāna rabbiyal ‘a‘lā",
      "translation": "Glory be to My Lord, the Most High.",
      "reference": "Tirmidhi, Pg. 35"
    },
    {
      "id": 43,
      "title": "Dua in Jalsa",
      "arabic": "اللَّهُمَّ اغْفِرْلِي وَارْحَمْنِي وَعَافِنِي وَاهْدِنِي وَارْزُقْنِي",
      "transliteration": "Allāhumma ighfir lī, warḥamnī, wa‘āfinī, wahdinī, warzuqnī",
      "translation": "O Allah ﷻ, forgive me, have mercy on me, grant me safety, guide me and provide me with sustenance.",
      "reference": "Abu Dawood, Vol. 1, Pg. 130"
    },
    {
      "id": 44,
      "title": "Tashah’hud (for Hanafis)",
      "arabic": "التَّحِيَّاتُ للهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللهِ الصَّالِحِينَ أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
      "transliteration": "At-taḥiyyātu lillāhi waṣ-ṣalawātu waṭ-ṭayyibātu, as-salāmu ‘alayka ayyuhan-nabiyyu wa raḥmatullāhi wa barakātuh, as-salāmu ‘alaynā wa ‘alā ‘ibādillāhiṣ-ṣāliḥīn. Ashhadu an lā ilāha illallāh, wa ashhadu anna Muḥammadan ‘abduhū wa rasūluh.",
      "translation": "All devotions offered through words, bodily actions and wealth are due to Allah ﷻ. Peace be upon you, O Prophet ﷺ and the mercy of Allah ﷻ and His blessings. Peace be upon us and on the pious (righteous) servants of Allah ﷻ. I bear witness that there is no Deity besides Allah ﷻ, and I bear witness that Muhammad ﷺ is His servant and messenger.",
      "reference": "Nasai, Vol. 1, Pg. 174"
    }
,
{
  "id": 45,
  "title": "Durood-e-Ibrâhîm",
  "arabic": "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ\nاللَّهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
  "transliteration": "Allāhumma ṣalli ‘alā Muḥammadin wa ‘alā āli Muḥammad, kamā ṣallayta ‘alā Ibrāhīma wa ‘alā āli Ibrāhīm, innaka ḥamīdun majīd.\nAllāhumma bārik ‘alā Muḥammadin wa ‘alā āli Muḥammad, kamā bārakta ‘alā Ibrāhīma wa ‘alā āli Ibrāhīm, innaka ḥamīdun majīd.",
  "translation": "O Allah ﷻ! Shower Your mercy on Muhammad ﷺ and his family (followers) as You showered Your mercy on Ibrâhîm عليه السلام and his family (followers). Surely You are Praiseworthy and Most High.\nO Allah ﷻ! Bless Muhammad ﷺ and his family (followers) as You have blessed Ibrâhîm عليه السلام and his family (followers). Surely You are Praiseworthy and Most High.",
  "reference": "Ibnu Majah, Pg. 65"
}
,
{
  "id": 46,
  "title": "Dua after Durood-e-Ibrâhîm",
  "arabic": "اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ",
  "transliteration": "Allāhumma innī ẓalamtu nafsī ẓulman kathīran wa lā yaghfiru adh-dhunūba illā anta faghfir lī maghfiratan min ‘indika warḥamnī innaka anta al-ghafūru ar-raḥīm.",
  "translation": "O Allah ﷻ! I have wronged myself greatly and nobody forgives sins except You. Grant me forgiveness and have mercy on me. Surely, You are The Forgiver and The Merciful.",
  "reference": "Tirmidhi, Vol. 2, Pg. 191"
},
{
  "id": 47,
  "title": "Adhaan",
  "arabic": "اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ.\nأَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللَّهُ. أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللَّهُ.\nأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ. أَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ.\nحَيَّ عَلَى الصَّلَاةِ. حَيَّ عَلَى الصَّلَاةِ.\nحَيَّ عَلَى الْفَلَاحِ. حَيَّ عَلَى الْفَلَاحِ.\nاللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ.\nلَا إِلٰهَ إِلَّا اللَّهُ.",
  "transliteration": "Allāhu Akbar, Allāhu Akbar, Allāhu Akbar, Allāhu Akbar.\nAshhadu an lā ilāha illallāh. Ashhadu an lā ilāha illallāh.\nAshhadu anna Muḥammadan Rasūlullāh. Ashhadu anna Muḥammadan Rasūlullāh.\nḤayya ‘alaṣ-ṣalāh. Ḥayya ‘alaṣ-ṣalāh.\nḤayya ‘alal-falāḥ. Ḥayya ‘alal-falāḥ.\nAllāhu Akbar, Allāhu Akbar.\nLā ilāha illallāh.",
  "translation": "Allah ﷻ is the greatest. Allah ﷻ is the greatest.\nI bear witness that there is no God besides Allah ﷻ.\nI bear witness that Muhammad ﷺ is the messenger of Allah ﷻ.\nCome to Salaah. (Turn the face to the right when saying these words)\nCome to success. (Turn the face to the left when saying these words)\nAllah ﷻ is the greatest. Allah ﷻ is the greatest.\nThere is no God besides Allah ﷻ.",
  "reference": "Abu Dawood, Vol. 1, Pg. 79"
}
,
{
  "id": 48,
  "title": "Iqâmah",
  "arabic": "اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ.\nأَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللَّهُ. أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللَّهُ.\nأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ. أَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ.\nحَيَّ عَلَى الصَّلَاةِ. حَيَّ عَلَى الصَّلَاةِ.\nحَيَّ عَلَى الْفَلَاحِ. حَيَّ عَلَى الْفَلَاحِ.\nقَدْ قَامَتِ الصَّلَاةُ. قَدْ قَامَتِ الصَّلَاةُ.\nاللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ.\nلَا إِلٰهَ إِلَّا اللَّهُ.",
  "translation": "Salaah is indeed about to begin. Salaah is indeed about to begin.",
  "reference": "Abu Dawood, Vol. 1, Pg. 79"
},
{
  "id": 49,
  "title": "Dua after Adhân",
  "arabic": "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلَاةِ الْقَائِمَةِ آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ إِنَّكَ لَا تُخْلِفُ الْمِيعَادَ",
  "translation": "O Allah ﷻ! Lord of this perfect call and everlasting prayer, grant our master Muhammad ﷺ the Waseelah and the virtue, and raise him to that praised position which You have promised him. Verily You do not go against Your promise.",
  "reference": "Sunan-e-Baihaqi, Vol. 1, Pg. 410 / Abu Dawood, Vol. 1, Pg. 85"
},
{
  "id": 50,
  "title": "When getting into a vehicle",
  "arabic": "بِسْمِ اللَّهِ الْحَمْدُ لِلَّهِ. سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ. وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ",
  "translation": "All praise be to Allah ﷻ, Glory be to Allah ﷻ who has put this (vehicle) under our control though we were unable to control it. Surely, to our Sustainer are we to return.",
  "reference": "Tirmidhi, Vol. 2, Pg. 182"
},
{
  "id": 51,
  "title": "When the vehicle moves",
  "arabic": "بِسْمِ اللَّهِ مَجْرَاهَا وَمُرْسَاهَا إِنَّ رَبِّي لَغَفُورٌ رَحِيمٌ",
  "translation": "In the name of Allah ﷻ its moving and its stopping. Most certainly, my Lord is Oft-Forgiving, Most Merciful.",
  "reference": "Al-Quraan S.11 V.41"
},
{
  "id": 52,
  "title": "When returning from a journey",
  "arabic": "آيِبُونَ تَائِبُونَ عَابِدُونَ لِرَبِّنَا حَامِدُونَ",
  "translation": "We are returning, we are repenting, we pray (to Allah ﷻ), we praise our sustainer.",
  "reference": "Muslim Vol. 1, Pg. 434"
},
{
  "id": 53,
  "title": "When entering a town or city",
  "arabic": "اللَّهُمَّ بَارِكْ لَنَا فِيهَا\nاللَّهُمَّ ارْزُقْنَا جَنَاهَا وَحَبِّبْنَا إِلَى أَهْلِهَا وَحَبِّبْ صَالِحِي أَهْلِهَا إِلَيْنَا",
  "translation": "O Allah ﷻ! Grant us barakat in this place. O Allah ﷻ! Give us of its produce and make us liked by its people and make us like the good people of this place.",
  "reference": "Al Mu’jamul Awsat Tabra, Vol. 5, Pg. 379"
},
{
    "id": 54,
    "title": "Dua-e-Qunūt",
    "arabic": "اللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ وَنُؤْمِنُ بِكَ وَنَتَوَكَّلُ عَلَيْكَ وَنُثْنِي عَلَيْكَ الْخَيْرَ وَنَشْكُرُكَ وَلَا نَكْفُرُكَ وَنَخْلَعُ وَنَتْرُكُ مَنْ يَفْجُرُكَ، اللَّهُمَّ إِيَّاكَ نَعْبُدُ وَلَكَ نُصَلِّي وَنَسْجُدُ وَإِلَيْكَ نَسْعَى وَنَحْفِدُ وَنَرْجُو رَحْمَتَكَ وَنَخْشَى عَذَابَكَ إِنَّ عَذَابَكَ بِالْكُفَّارِ مُلْحِقٌ",
    "transliteration": "Allāhumma innā nasta‘īnuka wa nastaghfiruka wa nu’minu bika wa natawakkalu ‘alayka wa nuthnī ‘alayka al-khayra wa nashkuruka wa lā nakfuruka wa nakhla‘u wa natruku man yafjuruka. Allāhumma iyyāka na‘budu wa laka nuṣallī wa nasjudu wa ilayka nas‘ā wa naḥfid wa narjū raḥmataka wa nakhshā ‘adhābaka inna ‘adhābaka bil-kuffāri mulḥiq.",
    "translation": "O Allah ﷻ! We seek help from You. We seek Your forgiveness. We believe in You. We rely on You. We praise You in the best manner. We thank You and we are not ungrateful to You. We leave and cast off one who disobeys You. O Allah ﷻ! We worship You and to You do we pray and prostrate and to You do we flee and we are quick in doing so, and we hope for Your mercy and fear Your punishment. Verily, Your punishment overtakes the unbelievers.",
    "reference": "Musnaf Ibni Abi Shaybah, Vol. 2, Pg. 314/5"
}
,
{
  "id": 55,
  "title": "Dua after Witr Salaah",
  "arabic": "سُبْحَانَ الْمَلِكِ الْقُدُّوسِ",
  "transliteration": "Subḥān al-Malik al-Quddūs",
  "translation": "Glory be to the Most Holy King.",
  "reference": "Nasai, Vol. 1, Pg. 253"
},
{
  "id": 56,
  "title": "On seeing the new moon",
  "arabic": "اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالْيُمْنِ وَالْإِيمَانِ وَالسَّلَامَةِ وَالْإِسْلَامِ وَالتَّوْفِيقِ لِمَا تُحِبُّ وَتَرْضَى رَبِّي وَرَبُّكَ اللَّهُ",
  "transliteration": "Allāhumma ahillahu ‘alaynā bil-yumni wal-īmān was-salāmati wal-Islām wat-tawfīqi limā tuḥibbu wa tarḍā. Rabbī wa rabbuk Allah.",
  "translation": "O Allah ﷻ let this new moon appear to us with prosperity, faith, safety, and Islam and with the hope of success to do deeds which You would like and approve of. My Lord and Your Lord (O Moon!) is Allah ﷻ.",
  "reference": "Tirmidhi, Vol. 2, Pg. 183"
},
{
  "id": 57,
  "title": "Dua for fasting",
  "arabic": "اللَّهُمَّ أَصُومُ غَدًا لَكَ فَاغْفِرْ لِي مَا قَدَّمْتُ وَمَا أَخَّرْتُ",
  "transliteration": "Allāhumma aṣūmu ghadan laka faghfir lī mā qaddamtu wa mā akhkhartu.",
  "translation": "O Allah ﷻ! I shall fast tomorrow for Your sake, so forgive my future and past sins.",
  "reference": "—"
},
{
  "id": 58,
  "title": "When breaking the fast",
  "arabic": "اللَّهُمَّ لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ",
  "transliteration": "Allāhumma laka ṣumtu wa bika āmantu wa ‘alā rizqika afṭartu.",
  "translation": "O Allah ﷻ, I fasted for You. In You do I believe, and with Your provision (food) do I break my fast.",
  "reference": "Kitab-u-Dua Tabrani, Vol. 2, Pg. 1229"
},
{
  "id": 59,
  "title": "When eating elsewhere",
  "arabic": "اللَّهُمَّ بَارِكْ لَهُمْ فِيمَا رَزَقْتَهُمْ وَاغْفِرْ لَهُمْ وَارْحَمْهُمْ",
  "transliteration": "Allāhumma bārik lahum fī mā razaqtahum waghfir lahum warḥamhum.",
  "translation": "O Allah ﷻ, bless them in what You have provided them with and forgive them and have mercy upon them.",
  "reference": "Muslim, Vol. 2, Pg. 180"
},
{
  "id": 60,
  "title": "When eating the first fruit of the season",
  "arabic": "اللَّهُمَّ بَارِكْ لَنَا فِي ثَمَرِنَا وَبَارِكْ لَنَا فِي مَدِينَتِنَا وَبَارِكْ لَنَا فِي صَاعِنَا وَبَارِكْ لَنَا فِي مُدِّنَا",
  "transliteration": "Allāhumma bārik lanā fī thamarinā wa bārik lanā fī madīnatinā wa bārik lanā fī ṣā‘inā wa bārik lanā fī muddhinā.",
  "translation": "O Allah ﷻ, grant us abundance in our fruit and bless us in our towns and bless us in our weight and our measures.",
  "reference": "Muslim, Vol. 1, Pg. 442"
},
{
  "id": 61,
  "title": "When in financial difficulty",
  "arabic": "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
  "transliteration": "Allāhumma kfinī biḥalālika ‘an ḥarāmika wa aghninī bifaḍlika ‘amman siwāk.",
  "translation": "O Allah ﷻ, provide me lawful livelihood, adequate to my needs instead of an ill-gotten one, and grant me freedom from need for anything from anyone besides Yourself.",
  "reference": "Tirmidhi Vol. 2, Pg. 195"
},
{
  "id": 62,
  "title": "When seeing someone in distress",
  "arabic": "الْحَمْدُ لِلَّهِ الَّذِي عَافَانِي مِمَّا ابْتَلَاكَ بِهِ وَفَضَّلَنِي عَلَى كَثِيرٍ مِمَّنْ خَلَقَ تَفْضِيلًا",
  "transliteration": "Alḥamdu lillāhi al-ladhī ‘āfānī mimmā ibtalāk bihi wa faḍḍalanī ‘alā kathīrin mimman khalaqa tafḍīlā.",
  "translation": "All praise is due to Allah ﷻ who granted me safety from what He has afflicted you with.",
  "reference": "Tirmidhi, Vol. 2, Pg. 181"
},
{
  "id": 63,
  "title": "When angry",
  "arabic": "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
  "transliteration": "A‘ūdhu billāhi minash-shayṭānir-rajīm.",
  "translation": "I seek refuge in Allah ﷻ from the accursed devil.",
  "reference": "Bukhari, Vol. 2, Pg. 160"
},
{
  "id": 64,
  "title": "When in sorrow",
  "arabic": "لَا إِلٰهَ إِلَّا اللَّهُ العَظِيمُ الحَلِيمُ، لَا إِلٰهَ إِلَّا اللَّهُ رَبُّ العَرْشِ العَظِيمِ، لَا إِلٰهَ إِلَّا اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ العَرْشِ الْكَرِيمِ",
  "transliteration": "Lā ilāha illallāhul-‘aẓīmul-ḥalīm. Lā ilāha illallāhu rabbul-‘arshil-‘aẓīm. Lā ilāha illallāhu rabbus-samāwāti wa rabbul-arḍi wa rabbul-‘arshil-karīm.",
  "translation": "There is no god but Allah ﷻ, the Mighty, the Clement. There is no god but Allah ﷻ, the Lord of the Mighty Throne. There is no god but Allah ﷻ, the Lord of the heavens, the Lord of the earth, and the Lord of the Honorable Throne.",
  "reference": "Bukhari, Vol. 2, Pg. 152"
},
{
  "id": 65,
  "title": "Dua for relief from difficulty",
  "arabic": "اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا، وَأَنْتَ تَجْعَلُ الْحَزَنَ إِذَا شِئْتَ سَهْلًا",
  "transliteration": "Allāhumma lā sahla illā mā ja‘altahu sahlā wa anta taj‘alu al-ḥazana idhā shi’ta sahlā.",
  "translation": "O Allah ﷻ! There is nothing easy except what You make easy, and You make hardship easy if You will.",
  "reference": "Ibn Hibban, Hadith 2427"
},
{
  "id": 66,
  "title": "When waking up at night in fear",
  "arabic": "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ غَضَبِهِ وَعِقَابِهِ وَشَرِّ عِبَادِهِ وَمِنْ هَمَزَاتِ الشَّيَاطِينِ وَأَنْ يَحْضُرُونِ",
  "transliteration": "A‘ūdhu bikalimātillāhit-tāmmāti min ghaḍabihi wa ‘iqābihi wa sharri ‘ibādihi wa min hamazātish-shayāṭīni wa an yaḥḍurūn.",
  "translation": "I seek refuge in the perfect words of Allah ﷻ from His anger and His punishment, and from the evil of His slaves, and from the whisperings of devils and from their presence.",
  "reference": "Abu Dawood, Hadith 3893"
},
{
  "id": 67,
  "title": "Dua in Janaazah Salaah for an Adult",
  "arabic": "اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا وَشَاهِدِنَا وَغَائِبِنَا وَصَغِيرِنَا وَكَبِيرِنَا وَذَكَرِنَا وَأُنْثَانَا اللَّهُمَّ مَنْ أَحْيَيْتَهُ مِنَّا فَأَحْيِهِ عَلَى الْإِسْلَامِ وَمَنْ تَوَفَّيْتَهُ مِنَّا فَتَوَفَّهُ عَلَى الْإِيمَانِ",
  "transliteration": "Allāhumma ighfir liḥayyinā wa mayyitinā wa shāhidinā wa ghā'ibinā wa ṣaghīrinā wa kabīrinā wa dhakarinā wa unthānā. Allāhumma man aḥyaytahu minnā fa-aḥyihi 'ala al-islām wa man tawaffaytahu minnā fatawaffahu 'ala al-īmān.",
  "translation": "O Allah ﷻ, forgive amongst us those who are alive and those who are dead, those who are present and those who are absent, those who are young and those who are old, those who are males and those who are females. O Allah ﷻ, whom You keep alive amongst us, keep him alive upon Islam and whom You caused to die, let him die upon imaan.",
  "reference": "Tirmidhi, Vol. 1, Pg. 121"
},
{
  "id": 68,
  "title": "Janaazah Dua for a Boy",
  "arabic": "اللَّهُمَّ اجْعَلْهُ لَنَا فَرَطًا وَاجْعَلْهُ لَنَا أَجْرًا وَذُخْرًا وَاجْعَلْهُ لَنَا شَافِعًا وَمُشَفَّعًا",
  "transliteration": "Allāhumma aj‘alhu lanā faratan wa aj‘alhu lanā ajran wa dhukhran wa aj‘alhu lanā shāfi‘an wa mushaffa‘an.",
  "translation": "O Allah ﷻ, make him our fore-runner, a source of reward and treasure and make him a pleader for us and (make him) one whose plea has been accepted.",
  "reference": "Hidayah, Vol. 1, Pg. 180"
},
{
  "id": 69,
  "title": "Janaazah Dua for a Girl",
  "arabic": "اللَّهُمَّ اجْعَلْهَا لَنَا فَرَطًا وَاجْعَلْهَا لَنَا أَجْرًا وَذُخْرًا وَاجْعَلْهَا لَنَا شَافِعَةً وَمُشَفَّعَةً",
  "transliteration": "Allāhumma aj‘alhā lanā faratan wa aj‘alhā lanā ajran wa dhukhran wa aj‘alhā lanā shāfi‘atan wa mushaffa‘atan.",
  "translation": "O Allah ﷻ, make her our fore-runner, a source of reward and treasure and make her a pleader for us and (make her) one whose plea has been accepted.",
  "reference": "Hidayah, Vol. 1, Pg. 180"
},
{
  "id": 70,
  "title": "When Entering the Graveyard",
  "arabic": "السَّلَامُ عَلَيْكُمْ أَهْلَ الدِّيَارِ مِنَ الْمُؤْمِنِينَ وَالْمُسْلِمِينَ وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لَاحِقُونَ نَسْأَلُ اللَّهَ لَنَا وَلَكُمُ الْعَافِيَةَ",
  "transliteration": "As-salāmu ‘alaykum ahla ad-diyāri mina al-mu’minīna wa al-muslimīna wa innā in shā’ Allāhu bikum lāḥiqūna nas’alu Allāha lanā wa lakumu al-‘āfiyah.",
  "translation": "Peace be upon you O Mu’mineen and Muslimeen who dwell herein. Insha Allah ﷻ we shall join you. We ask Allah ﷻ for your and our pardon.",
  "reference": "Ibnu Majah, Pg. 111"
},
{
  "id": 71,
  "title": "When Laying the Dead into the Qabar",
  "arabic": "بِسْمِ اللَّهِ وَعَلَى مِلَّةِ رَسُولِ اللَّهِ",
  "transliteration": "Bismi Allāhi wa ‘alā millati rasūlillāh.",
  "translation": "In the name of Allah ﷻ and in the manner of Rasulullah ﷺ do we lay this body to rest.",
  "reference": "Ibnu Majah, Pg. 111"
},
{
  "id": 72,
  "title": "When Filling the Qabar with Soil",
  "arabic": "مِنْهَا خَلَقْنَاكُمْ\nوَفِيهَا نُعِيدُكُمْ\nوَمِنْهَا نُخْرِجُكُمْ تَارَةً أُخْرَى",
  "transliteration": "Minha khalaqnākum.\nWa fīhā nu‘īdukum.\nWa minhā nukhrijukum tāratan ukhrā.",
  "translation": "From dust did We create you.\nAnd to dust shall We return you.\nAnd from dust shall We raise you again.",
  "reference": "Mustadrak Hakim, Vol. 2, Pg. 379"
},
{
  "id": 73,
  "title": "Dua for Parents",
  "arabic": "رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
  "transliteration": "Rabbi irḥamhumā kamā rabbayānī ṣaghīrā.",
  "translation": "O Allah ﷻ! Have mercy upon them as they had mercy upon me when I was small.",
  "reference": "Quran, Surah Al-Isra (17:24)"
},
{
  "id": 74,
  "title": "At the Time of Sunset",
  "arabic": "اللَّهُمَّ هَذَا إِقْبَالُ لَيْلِكَ وَإِدْبَارُ نَهَارِكَ وَأَصْوَاتُ دُعَاتِكَ فَاغْفِرْ لِي",
  "transliteration": "Allāhumma hādhā iqbālu laylika wa idbāru nahārika wa aṣwātu du‘ātika faghfir lī.",
  "translation": "O Allah ﷻ, this is the approaching of Your night and the disappearing of Your day and the sounds of those who pray to You. So do forgive me.",
  "reference": "Mishkat, Pg. 660"
},
{
  "id": 75,
  "title": "When Seeing the Moon",
  "arabic": "أَعُوذُ بِاللَّهِ مِنْ شَرِّ هَذَا",
  "transliteration": "A‘ūdhu billāhi min sharri hādhā.",
  "translation": "I seek the protection of Allah ﷻ from the evil of this darkening moon.",
  "reference": "Tirmidhi, Vol. 2, Pg. 172"
},
{
  "id": 76,
  "title": "At the Time of Drought",
  "arabic": "اللَّهُمَّ اسْقِنَا، اللَّهُمَّ اسْقِنَا",
  "transliteration": "Allāhumma asqinā, Allāhumma asqinā.",
  "translation": "O Allah ﷻ, quench our thirst. O Allah ﷻ, send us rain.",
  "reference": "Tirmidhi, Vol. 2, Pg. 66"
},
{
  "id": 77,
  "title": "When There is Excessive Rain",
  "arabic": "اللَّهُمَّ حَوَالَيْنَا وَلَا عَلَيْنَا، اللَّهُمَّ عَلَى الْآكَامِ وَالْجِبَالِ وَالْآجَامِ وَالظِّرَابِ وَالْأَوْدِيَةِ وَمَنَابِتِ الشَّجَرِ",
  "transliteration": "Allāhumma ḥawālaynā wa lā ‘alaynā. Allāhumma ‘ala al-ākāmi wa al-jibāli wa al-ājāmi wa al-ẓirābi wa al-awdiyati wa manābiti al-shajar.",
  "translation": "O Allah ﷻ, send rain in the outskirts, not upon us. O Allah ﷻ, make it rain upon the hills, in the woods, on the mountains, in the valleys, and in the forests.",
  "reference": "Bukhari, Vol. 1, Pg. 138"
},
{
  "id": 78,
  "title": "Dua When Leaving a Gathering",
  "arabic": "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ",
  "transliteration": "Subḥānaka Allāhumma wa biḥamdika, ash-hadu an lā ilāha illā anta, astaghfiruka wa atūbu ilayk.",
  "translation": "Glory be to You, O Allah ﷻ, with Your praises. I bear witness that there is no God besides You. I beg Your forgiveness and repent to You.",
  "reference": "Mustadrak Hakim, Vol. 1, Pg. 537"
},
{
  "id": 79,
  "title": "When Entering a Shopping Centre",
  "arabic": "لَا إِلٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، يُحْيِي وَيُمِيتُ، وَهُوَ حَيٌّ لَا يَمُوتُ، بِيَدِهِ الْخَيْرُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
  "transliteration": "Lā ilāha illallāhu waḥdahu lā sharīka lahu, lahu al-mulku wa lahu al-ḥamdu, yuḥyī wa yumītu, wa huwa ḥayyul lā yamūtu, biyadihi al-khayru, wa huwa ‘ala kulli shay’in qadīr.",
  "translation": "There is no God besides Allah ﷻ. He is One. He has no partner. His is the kingdom and for Him is all praise. He gives life and causes death. He is Ever-living and never dies. In His hand is all good, and He has power over everything.",
  "reference": "Tirmidhi, Vol. 2, Pg. 180"
},
{
  "id": 80,
  "title": "The 99 Beautiful Names of Allah",
  "arabic": "اللهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ",
  "transliteration": "Allāhu alladhī lā ilāha illā huwa",
  "translation": "Allah is He besides whom there is no God but Him",
  "reference": "Quran 59:22-24, Hadith (Tirmidhi 3507)"
},
{
  "id": 81,
  "title": "When Laying the Qurbaani Animal Down for Slaughtering",
  "arabic": "إِنِّي وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَ السَّمٰوٰتِ وَالْأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ، إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ، لَا شَرِيكَ لَهُ، وَبِذٰلِكَ أُمِرْتُ وَأَنَا مِنَ الْمُسْلِمِينَ، اللَّهُمَّ هٰذَا مِنْكَ وَلَكَ",
  "transliteration": "Innī wajjahtu wajhiya lilladhī faṭara as-samāwāti wal-arḍa ḥanīfan wa mā anā mina al-mushrikīn. Inna ṣalātī wa nusukī wa maḥyāya wa mamātī lillāhi rabbil-‘ālamīn. Lā sharīka lah, wa bidhālika umirtu wa anā mina al-muslimīn. Allāhumma hādhā minka wa laka.",
  "translation": "I have firmly turned myself towards that Being who has created the heavens and the earth, while I am upon the Straight Deen of Ibrahim, and I am not among the Mushrikeen. Verily, my Salah, my sacrifice, my life and my death are for Allah ﷻ, Lord of the worlds. He has no partner; with this, I have been commanded, and I am among the Muslims. O Allah ﷻ! This sacrifice is due to You granting us the ability to do so, and it is for You.",
  "reference": "Sunan Abu Dawood, Tirmidhi"
},
{
  "id": 82,
  "title": "When Slaughtering the Animal",
  "arabic": "بِسْمِ اللَّهِ، اللَّهُ أَكْبَرُ",
  "transliteration": "Bismillāhi, Allāhu Akbar.",
  "translation": "In the name of Allah ﷻ, Allah ﷻ is the Greatest.",
  "reference": "Mishkat, Pg. 128"
},
{
  "id": 83,
  "title": "Sayyidul Istighfaar",
  "arabic": "اللَّهُمَّ أَنْتَ رَبِّي، لَا إِلٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلٰى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
  "transliteration": "Allāhumma anta rabbī, lā ilāha illā anta, khalaqtanī wa anā ‘abduka, wa anā ‘alā ‘ahdika wa wa‘dika mā istaṭa‘tu, a‘ūdhu bika min sharri mā ṣana‘tu, abū’u laka bini‘matika ‘alayya, wa abū’u bidhambī, faghfir lī fa’innahu lā yaghfiru adh-dhunūba illā anta.",
  "translation": "O Allah ﷻ, You are my Lord. There is no god except You. You created me, and I am Your servant. As much as possible, I abide by my promise and covenant to You. I seek Your protection against the evil of what I have done. I acknowledge Your blessings upon me, and I confess my sins. So forgive me, for none can forgive sins except You.",
  "reference": "Bukhari, Vol. 2, Pg. 933",
  "virtue": "Whoever recites this dua sincerely during the day or night and dies will be among the people of Jannah."
},
{
  "id": 84,
  "title": "Dua for Istikhaarah",
  "arabic": "اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ الْغُيُوبِ. اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هٰذَا الْأَمْرَ خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي، فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ، وَإِنْ كُنْتَ تَعْلَمُ أَنَّهُ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي، فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ، وَاقْدُرْ لِيَ الْخَيْرَ حَيْثُ كَانَ، ثُمَّ أَرْضِنِي",
  "transliteration": "Allāhumma innī astakhīruka bi‘ilmika, wa astaqdiruka biqudratika, wa as’aluka min faḍlika al-‘aẓīm, fa’innaka taqdiru wa lā aqdiru, wa ta‘lamu wa lā a‘lamu, wa anta ‘allāmul-ghuyūb. Allāhumma in kunta ta‘lamu anna hādhā al-amra khayrun lī fī dīnī wa ma‘āshī wa ‘āqibati amrī, faqdurhu lī wa yassirhu lī thumma bārik lī fīh. Wa in kunta ta‘lamu annahu sharrun lī fī dīnī wa ma‘āshī wa ‘āqibati amrī, faṣrifhu ‘annī waṣrifnī ‘anhu, waqdur līya al-khayra ḥaythu kāna, thumma arḍinī.",
  "translation": "O Allah ﷻ, I seek Your guidance in making a choice by Your knowledge and by Your power, and I seek Your great bounty. For surely, You have power, and I have none. You know everything, and I know not. You are the Knower of all that is unseen. O Allah ﷻ, if, in Your knowledge, this matter is good for my religion, for my livelihood, and for the consequences of my affairs, then ordain it for me, make it easy for me, and bless me in it. But if, in Your knowledge, this matter is bad for my religion, for my livelihood, and for the consequences of my affairs, then turn it away from me and turn me away from it. And ordain for me the good wherever it be and make me pleased with it.",
  "reference": "Bukhari, Vol. 1, Pg. 155",
  "note": "When reciting this Dua, mention the specific matter where indicated."
},
{
  "id": 85,
  "title": "The Most Comprehensive Dua",
  "arabic": "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ خَيْرِ مَا سَأَلَكَ مِنْهُ نَبِيُّكَ مُحَمَّدٌ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا اسْتَعَاذَ مِنْهُ نَبِيُّكَ مُحَمَّدٌ، وَأَنْتَ الْمُسْتَعَانُ، وَعَلَيْكَ الْبَلَاغُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
  "transliteration": "Allāhumma innī as’aluka min khayri mā sa’alaka minhu nabiyyuka Muḥammad, wa a‘ūdhu bika min sharri mā ista‘ādha minhu nabiyyuka Muḥammad, wa anta al-musta‘ān, wa ‘alayka al-balāgh, wa lā ḥawla wa lā quwwata illā billāh.",
  "translation": "O Allah ﷻ, I ask You for all the good that Your Prophet Muhammad ﷺ asked You for, and I seek Your protection from all the evil that Your Prophet Muhammad ﷺ sought protection from. You are the One whose help is sought. The ultimate decision is Yours. There is no power nor might except with Allah ﷻ.",
  "reference": "Tirmidhi, Vol. 2, Pg. 192"
},
  {
      id: 86,
      title: "Dua at the Time of Anger",
      arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
      transliteration: "A‘ūdhu billāhi minash-shayṭānir-rajīm",
      translation: "I seek the protection of Allah from Shaytan, the cursed one.",
      reference: "Abu Dawood, Vol. 2, Pg. 348"
  },
  {
      id: 87,
      title: "When a Dog Barks or Donkey Brays",
      arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
      transliteration: "A‘ūdhu billāhi minash-shayṭānir-rajīm",
      translation: "I seek the protection of Allah from Shaytan, the cursed one.",
      reference: "Abu Dawood, Vol. 2, Pg. 348"
  },
  {
      id: 88,
      title: "When Welcoming Someone",
      arabic: "كُنْ مِنْ أَهْلِنَا وَكُنْ فِي رَاحَتِنَا وَكُنْ مَرْحُوبًا بِكَ",
      transliteration: "Kun min ahlina wa kun fī rāḥatinā wa kun marḥūban bika",
      translation: "(May you enter and) be as one of us, be at ease and comfortable, and welcome (to you).",
      reference: "Tirmidhi, Ibn Majah"
  },
  {
      id: 89,
      title: "Dua When Intending to Do Something",
      arabic: "إِنْ شَاءَ اللَّهُ",
      transliteration: "In shā’ Allāh",
      translation: "If Allah wills.",
      reference: "Common Islamic phrase"
  },
  {
      id: 90,
      title: "Morning and Evening Dua",
      arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",
      transliteration: "Allāhumma bika aṣbaḥnā wa bika amsaynā wa bika naḥyā wa bika namūtu wa ilaykan-nushūr",
      translation: "O Allah, with Your help do we start this day/night, and with Your help do we live and die, and to You is our resurrection.",
      reference: "Abu Dawood, Vol. 2, Pg. 343"
  },
  {
      id: 91,
      title: "Before Sleeping (2)",
      arabic: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",
      transliteration: "Allāhumma qinī ‘adhābaka yawma tab‘athu ‘ibādak",
      translation: "O Allah! Save me from Your punishment on the day when You resurrect Your servants.",
      reference: "Mishkat, Pg. 210"
  },
  {
      id: 92,
      title: "When Seeing a Muslim Laugh",
      arabic: "ضَحِكَ اللَّهُ سِنَّكَ",
      transliteration: "Ḍaḥika Allāhu sinnak",
      translation: "May Allah grant you lifelong happiness.",
      reference: "Bukhari, Vol. 2, Pg. 899"
  },
  {
      id: 93,
      title: "When Eating with a Person Who Has a Disease",
      arabic: "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَتَوَاضَعْتُ لَهُ",
      transliteration: "Bismillāh, tawakkaltu ‘alā Allāh, wa tawāḍa‘tu lah",
      translation: "In the name of Allah, with confidence in Allah, and humbly trusting Him.",
      reference: "Tirmidhi, Vol. 2, Pg. 4"
  },
  {
      id: 94,
      title: "When Things Are in One's Favor",
      arabic: "الْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ",
      transliteration: "Al-ḥamdu lillāhi alladhī bi ni‘matihi tatimmuṣ-ṣāliḥāt",
      translation: "All praise is due to Allah, with whose grace all good things are realized.",
      reference: "Ibn Majah, Pg. 270"
  },
  {
      id: 95,
      title: "When an Evil Thought Comes to Mind",
      arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ، آمَنْتُ بِاللَّهِ وَرُسُلِهِ",
      transliteration: "A‘ūdhu billāhi minash-shayṭānir-rajīm, āmantu billāhi wa rusulih",
      translation: "I seek the protection of Allah from the accursed devil. I believe in Allah and His messengers.",
      reference: "Muslim, Vol. 1, Pg. 79"
  },
  {
      id: 96,
      title: "Dua When Afflicted with a Calamity",
      arabic: "اللَّهُمَّ إِنِّي أَرْجُو ثَوَابَكَ عَلَى هَذَا الْمَصِيبَةِ فَاجْعَلْ لِي فِيهَا أَجْرًا وَآتِنِي خَيْرًا مِنْهَا",
      transliteration: "Allāhumma innī arjū thawābaka ‘alā hādhāl-maṣībah, faj‘al lī fīhā ajran wa ātinī khayran minhā",
      translation: "O Allah! From You do I hope for reward for this difficulty of mine. So reward me therein and give me something better in return.",
      reference: "Muslim, Vol. 1, Pg. 300",
      virtue: "Whoever reads this dua while in difficulty, Allah will replace it with something better. (Mishkat, Pg. 140)"
  },
  {
      id: 97,
      title: "Dua for Death on Iman",
      arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ",
      transliteration: "Rabbanā lā tuzigh qulūbanā ba‘da idh hadaytanā wa hab lanā min ladunka raḥmah, innaka antal-Wahhāb",
      translation: "O our Lord! Do not let our hearts go astray after You have granted us guidance, and grant us mercy from Your side. Verily, You are the Bestower of favors.",
      reference: "Quran 3:8"
  },
  {
      id: 98,
      title: "Dua in Qiyam (2)",
      arabic: "اللَّهُمَّ لَكَ الْحَمْدُ مِلْءَ السَّمَاوَاتِ وَمِلْءَ الْأَرْضِ وَمَا بَيْنَهُمَا",
      transliteration: "Allāhumma laka al-ḥamdu mil’as-samāwāti wa mil’al-arḍi wa mā baynahumā",
      translation: "O Allah, praise be to You, filling the heavens, the earth, and whatever pleases You beyond that.",
      reference: "Abu Dawood, Vol. 1, Pg. 119"
  },
  {
      id: 99,
      title: "When the Sun Rises",
      arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَضَاءَ لَنَا هَذَا الْيَوْمَ وَلَمْ يُهْلِكْنَا بِذُنُوبِنَا",
      transliteration: "Al-ḥamdu lillāhi alladhī aḍā’a lanā hādhāl-yawm wa lam yuhliknā bi dhunūbinā",
      translation: "All praise be to Allah, who has brought upon us this day and has not destroyed us because of our sins.",
      reference: "Muslim, Vol. 1, Pg. 274"
  },
  {
      id: 100,
      title: "Dua After Iftar",
      arabic: "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ",
      transliteration: "Dhahaba al-ẓama’u wabtallat al-‘urūqu wa thabata al-ajru in shā’ Allāh",
      translation: "The thirst is gone, the veins are moistened, and the reward is confirmed, if Allah wills.",
      reference: "Abu Dawood, Vol. 1, Pg. 328"
  },
    {
        id: 101,
        title: "Dua After Iftar",
        arabic: "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الأَجْرُ إِنْ شَاءَ اللَّهُ",
        transliteration: "Dhahaba al-zama’u wabtallat al-‘urooqu wa thabata al-ajru in sha’a Allah",
        translation: "The thirst is gone, the veins are moistened, and the reward is confirmed, if Allah wills.",
        reference: "Abu Dawood, Vol. 1, Pg. 328"
    },
    {
        id: 102,
        title: "When Wearing New Clothes",
        arabic: "الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي مَا أُوَارِي بِهِ عَوْرَتِي وَأَتَجَمَّلُ بِهِ فِي حَيَاتِي",
        transliteration: "Alhamdulillah alladhi kasani ma uwari bihi ‘awrati wa atajammalu bihi fi hayati",
        translation: "Praise be to Allah, who clothed me with that which I cover my shame and adorn myself during my life.",
        reference: "Tirmidhi, Vol. 2, Pg. 195",
        virtue: "If recited after wearing new clothes and giving old clothes in charity, one will be under Allah’s protection."
    },
    {
        id: 103,
        title: "When Eating Elsewhere (2)",
        arabic: "يَأْكُلُ طَعَامَكُمُ الأَبْرَارُ وَتَنْزِلُ عَلَيْكُمُ الْمَلَائِكَةُ وَيُفْطِرُ عِنْدَكُمُ الصَّائِمُونَ",
        transliteration: "Ya’kulu ta’amakumul-abraru wa tanzilu ‘alaykumul-mala’ikatu wa yuftiru ‘indakumus-sa’imun",
        translation: "May the righteous partake of your food, the angels descend upon you, and those fasting break their fast with you.",
        reference: "General Sunnah"
    },
    {
        id: 104,
        title: "When Beginning a Journey",
        arabic: "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ. اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى وَمِنَ الْعَمَلِ مَا تَرْضَى...",
        transliteration: "Allahu akbar, Allahu akbar, Allahu akbar. Allahumma inna nas’aluka fi safarina hadha al-birra wat-taqwa wa minal-‘amali ma tardha...",
        translation: "Allah is the Greatest! O Allah, we ask You for piety, abstinence, and pleasing deeds in this journey. Ease our travel and protect our families.",
        reference: "Muslim, Vol. 1, Pg. 434"
    },
    {
        id: 105,
        title: "Dua for Protection from Calamities",
        arabic: "بِسْمِ اللَّهِ، عَلَى دِينِي، وَعَلَى نَفْسِي، وَعَلَى أَوْلَادِي، وَعَلَى أَهْلِي، وَعَلَى مَالِي",
        transliteration: "Bismillah, ‘ala deeni, wa ‘ala nafsi, wa ‘ala awladi, wa ‘ala ahli, wa ‘ala mali",
        translation: "In the name of Allah, (I seek protection) for my religion, life, children, family, and wealth.",
        reference: "Kanzul Ummal, Vol. 2, Pg. 141",
        virtue: "Protects against deviations, harm, and loss (Hadith of Ma’qal bin Yasaar)."
    },
    {
        id: 106,
        title: "Dua for Protection Against Harm",
        arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
        transliteration: "Bismillah alladhi la yadurru ma’a ismihi shay’un fil-ardi wa la fis-sama’i wa huwas-Sami’ul-‘Alim",
        translation: "In the name of Allah, with whose name nothing in the heavens or earth can cause harm. He is the All-Hearing, All-Knowing.",
        reference: "Abu Dawood, Vol. 2, Pg. 346",
        virtue: "Recite 3x in morning/evening for protection from calamities."
    },
    {
        id: 107,
        title: "Dua for Protection on the Day of Qiyamah",
        arabic: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا",
        transliteration: "Raditu billahi rabban, wa bil-Islami deenan, wa bi-Muhammadin (sallallahu ‘alayhi wa sallam) nabiyya",
        translation: "I am content with Allah as my Lord, Islam as my religion, and Muhammad (peace be upon him) as my Prophet.",
        reference: "Tirmidhi, Vol. 2, Pg. 174",
        virtue: "Allah guarantees happiness for those who recite it."
    },
    {
        id: 108,
        title: "Dua for Relief from Worries and Debts",
        arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ",
        transliteration: "Allahumma inni a’udhu bika minal-hammi wal-hazan, wal-‘ajzi wal-kasal, wal-bukhli wal-jubn, wa dala’id-dayni wa ghalabatir-rijal",
        translation: "O Allah! I seek refuge in You from worry, grief, weakness, laziness, miserliness, cowardice, debt burden, and oppression.",
        reference: "Abu Dawood, Vol. 1, Pg. 224"
    },
    {
        id: 109,
        title: "Before Sleeping (3)",
        arabic: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، إِنْ أَمْسَكْتَ نَفْسِي فَاغْفِرْ لَهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ",
        transliteration: "Bismika rabbi wada’tu janbi, wa bika arfa’uh, in amsakta nafsi faghfir laha, wa in arsaltaha fahfazha bima tahfazu bihi ‘ibadakas-salihin",
        translation: "With Your name, my Lord, I lay my side down, and with Your help I rise. If You take my soul, forgive it. If You release it, protect it as You protect Your righteous servants.",
        reference: "Bukhari, Vol. 2, Pg. 935"
    }
,
  {
      id: 110,
      title: "At the Time of a Thunderclap",
      arabic: "اللَّهُمَّ لَا تَقْتُلْنَا بِغَضَبِكَ، وَلَا تُهْلِكْنَا بِعَذَابِكَ، وَعَافِنَا قَبْلَ ذَلِكَ",
      transliteration: "Allahumma la taqtulna bi-ghadabika, wa la tuhlikna bi-'adhabika, wa 'afina qabla dhalik",
      translation: "O Allah, do not kill us through Your anger, and do not destroy us with Your punishment. Forgive us before this (happens).",
      reference: "Tirmidhi, Vol. 2, Pg. 183"
  },
  {
      id: 111,
      title: "When Seeing or Experiencing Something Evil",
      arabic: "الْحَمْدُ لِلَّهِ عَلَى كُلِّ حَالٍ",
      transliteration: "Alhamdulillah 'ala kulli hal",
      translation: "All praise is due to Allah under all circumstances.",
      reference: "Ibn Majah, Pg. 270"
  },
  {
      id: 112,
      title: "When a Fire Breaks Out",
      arabic: "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ",
      transliteration: "Allahu akbar, Allahu akbar, Allahu akbar",
      translation: "Allah is the Greatest! Allah is the Greatest! Allah is the Greatest!",
      reference: "Tabrani (Kitaabud-Dua), Vol. 22, Pg. 1266"
  },
  {
      id: 113,
      title: "Dua of Hadhrat Abu Darda (for Protection from Calamities)",
      arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَـٰهَ إِلَّا أَنْتَ، عَلَيْكَ تَوَكَّلْتُ، وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ... مَا شَاءَ اللَّهُ كَانَ، وَمَا لَمْ يَشَأْ لَمْ يَكُنْ...",
      transliteration: "Allahumma anta Rabbi, la ilaha illa anta, 'alayka tawakkaltu, wa anta Rabbul-'Arshil-'Azim... Ma sha'a Allahu kana, wa ma lam yasha' lam yakun...",
      translation: "O Allah, You are my Lord; there is no god but You. I place my trust in You, and You are the Lord of the Mighty Throne... Whatever Allah wills happens, and what He does not will does not happen...",
      reference: "Al-Azkaar (Nawawi), Pg. 79",
      virtue: "Reciting this in the morning/evening protects one and their family from calamities. Abu Darda's house remained unharmed while his entire street burned."
  },
  {
      id: 114,
      title: "After Slaughtering an Animal",
      arabic: "اللَّهُمَّ تَقَبَّلْهُ مِنِّي كَمَا تَقَبَّلْتَ مِنْ حَبِيبِكَ مُحَمَّدٍ وَخَلِيلِكَ إِبْرَاهِيمَ",
      transliteration: "Allahumma taqabbalhu minni kama taqabbalta min habibika Muhammadin wa khalilika Ibraheem",
      translation: "O Allah, accept this (sacrifice) from me as You accepted from Your Beloved Muhammad and Your Close Friend Ibrahim.",
      reference: "Baheshti Zewar, Pg. 231"
  },
  {
      id: 115,
      title: "When Completing the Quran",
      arabic: "اللَّهُمَّ ارْحَمْنِي بِالقُرْآنِ، وَاجْعَلْهُ لِي إِمَامًا وَنُورًا وَهُدًى وَرَحْمَةً...",
      transliteration: "Allahumma irhamni bil-Qur'an, waj'alhu li imaman wa nooran wa huda wa rahmah...",
      translation: "O Allah, grant me mercy through the Quran. Make it my guide, light, guidance, and mercy. Help me remember what I forget and understand what I do not know. Enable me to recite it day and night, and make it my proof (in the Hereafter).",
      reference: "Al-Mughni an mahal lil asfaar (Iraaqi), Vol. 1, Pg. 279"
  }



  ];

  // State to track the selected dua
  const [selectedDua, setSelectedDua] = useState(duas[0]); // Default to the first dua

  // Handle dropdown change
  const handleDuaChange = (event) => {
    const duaId = parseInt(event.target.value);
    const dua = duas.find((d) => d.id === duaId);
    setSelectedDua(dua);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-emerald-50 font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-24"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-indigo-900/80"></div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
            {" "}
            Duas
          </h1>
          <p className="text-lg md:text-xl font-light max-w-3xl mx-auto">
            Discover a collection of essential supplications for Ramadan to
            enhance your worship and spiritual connection during this blessed
            month.
          </p>
        </div>
      </section>

      {/* Dua Selection Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4 text-emerald-900">
              Select a Dua
            </h2>
            <div className="w-16 h-1 bg-amber-500 mb-6 mx-auto"></div>
            <p className="text-gray-600 mb-6">
              Choose a dua from the dropdown below to view its Arabic text,
              transliteration, and English translation.
            </p>

            {/* Dropdown */}
            <select
              value={selectedDua.id}
              onChange={handleDuaChange}
              className="w-full md:w-1/2 mx-auto p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {duas.map((dua,index) => (
                <option key={index} value={dua.id}>
                  {dua.id}. {dua.title}
                </option>
              ))}
            </select>

            {/* Selected Dua Display */}
            <div  className="mt-10 bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-amber-500" />
                <h3 className="text-xl font-serif font-semibold text-gray-800">
                  {selectedDua.title}
                </h3>
              </div>
              <div className="text-right mb-4">
                <p className="text-2xl text-emerald-900 font-arabic">
                  {selectedDua.arabic}
                </p>
              </div>
              <p className="text-gray-600 italic mb-2">
                {selectedDua.transliteration}
              </p>
              <p className="text-gray-700">{selectedDua.translation}</p>
              {selectedDua.instructions && (
                <p>
                  <strong>Instruction:</strong> {selectedDua.instructions}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-b from-white to-amber-50 text-center">
        <p className="text-gray-600 mb-6">
          Want to learn more about Ramadan or improve your Quranic recitation?
        </p>
        <Link
          to="/register"
          className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transform hover:scale-105 transition duration-300"
        >
          Register Now
        </Link>
      </section>
    </div>
  );
};

export default RamadanDuas;
