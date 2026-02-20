// ========== MULTILINGUAL SYSTEM (i18n) ==========
// Supported languages: Deutsch (DE), Türkçe (TR), English (EN)

const translations = {
  de: {
    about: "Über uns",
    services: "Services",
    demos_nav: "Demo",
    contact: "Kontakt",
    hero_title: "Voice AI, die <span class=\"gradient\">Umsatz generiert</span>",
    hero_tagline: "Automatisierte Gespräche. Qualifizierte Leads. Messbares Wachstum.",
    hero_desc: "Die künstliche Intelligenz revolutioniert die Kundeninteraktion. ZEYNAH nutzt diese Transformation, um Unternehmen zukunftsfähig zu machen. Mit intelligenten Voice-AI-Systemen ermöglichen wir es Ihnen, Ihre Vertriebsprozesse zu skalieren und Kundenbeziehungen zu automatisieren – ohne dabei an Qualität einzubußen. Unser erfahrenes Team kombiniert hochmoderne KI-Technologie mit bewährten Sales-Strategien, um Ihrem Unternehmen nachhaltiges Wachstum zu sichern.",
    cta_strategy: "Strategie-Session buchen",
    about_title: "Innovation trifft auf Kundenerfolg",
    about_p1: "Die digitale Transformation ist keine Option mehr – sie ist eine Notwendigkeit. Unternehmen verlieren täglich Millionen durch ineffiziente Kundeninteraktionen, verpasste Chancen und manuelle Prozesse. Die eigenen Teams sind überfordert, Call-Center Kosten explodieren, und potenzielle Kunden fallen durch die Maschen. Dieses Problem erkennen wir und lösen es.",
    about_p2: "Mit ZEYNAH verwandeln wir Ihre Kundeninteraktion in einen hochperformanten, vollautomatisierten Verkaufsprozess. Unsere Voice-AI-Systeme führen intelligente Gespräche, qualifizieren Interessenten in Echtzeit und leiten nur die besten Leads an Ihr Sales-Team weiter. Das Ergebnis: Weniger Kosten, höhere Conversion-Raten, und 24/7 Erreichbarkeit ohne zusätzliches Personal. Unsere Technologie ist nicht nur effizient – sie ist auch menschlich. Jedes Gespräch fühlt sich natürlich und vertrauenswürdig an.",
    about_p3: "Wir bei ZEYNAH glauben an die Kraft der Integration. Deshalb verknüpfen wir unsere KI-Systeme nahtlos mit Ihrem CRM, Ihrer Buchhaltung, Ihren Kalendersystemen und all Ihren bestehenden Tools. Kein Medienbruch. Keine manuellen Einträge. Keine verschlafenen Chancen mehr. Unsere Mission ist klar: Ihrem Unternehmen durch intelligente Automatisierung zu exponentiellem Wachstum zu verhelfen und digitale Grenzen zu überwinden. Die Zukunft des Vertriebs ist automatisiert. Die Frage ist nur: Wollen Sie sie gestalten?",
    services_title: "Unsere Leistungen",
    service_1_title: "AI Voice Agents",
    service_1_desc: "Automatisierte, natürliche Gesprächsführung für Lead-Qualifizierung, Terminbuchung und Sales-Prozesse.",
    service_2_title: "Revenue Automation",
    service_2_desc: "Optimierung Ihrer Vertriebsprozesse durch strukturierte KI-Dialoge mit klarer Conversion-Strategie.",
    service_3_title: "System-Integration",
    service_3_desc: "Nahtlose Anbindung an CRM, Kalender und interne Systeme mit automatischer Datensynchronisation.",
    service_4_title: "Analytics & Optimierung",
    service_4_desc: "Echtzeit-Datenanalyse, Performance-Tracking und kontinuierliche Conversion-Optimierung.",
    usecases_title: "Einsatzgebiete von ZEYNAH",
    usecase_1_title: "🏢 B2B Vertrieb",
    usecase_1_1: "Lead-Qualifizierung für Hochticketprodukte",
    usecase_1_2: "Automatisierte Erstkontakte & Terminbuchung",
    usecase_1_3: "Sales Pipeline Automation",
    usecase_1_4: "Integration mit Salesforce & HubSpot",
    usecase_2_title: "🏥 Healthcare & Wellness",
    usecase_2_1: "Patiententerminbuchung & Erinnerungen",
    usecase_2_2: "Telehealth-Terminvergabe",
    usecase_2_3: "Insurance Inquiry Management",
    usecase_2_4: "HIPAA-konforme Datenverarbeitung",
    usecase_3_title: "🏠 Immobilien & Makler",
    usecase_3_1: "Interessenten-Qualifizierung 24/7",
    usecase_3_2: "Besichtigungstermine automatisch vereinbaren",
    usecase_3_3: "Objektinformation & Preisberatung",
    usecase_3_4: "Lead-Scoring für Makler",
    usecase_4_title: "💼 Financial Services",
    usecase_4_1: "Versicherungsabschlüsse automatisieren",
    usecase_4_2: "Kreditanfragen qualifizieren",
    usecase_4_3: "Finanzberatungstermine buchen",
    usecase_4_4: "Compliance-konforme Prozesse",
    usecase_5_title: "🎓 Bildung & E-Learning",
    usecase_5_1: "Kursanmeldungen & Beratung",
    usecase_5_2: "Studentische Anfragen automatisiert beantworten",
    usecase_5_3: "Campus-Führungen vereinbaren",
    usecase_5_4: "Zulassungsverfahren beschleunigen",
    usecase_6_title: "🍕 Restaurant & Hospitality",
    usecase_6_1: "Tischreservierungen automatisiert",
    usecase_6_2: "Event-Booking & Cateringafragen",
    usecase_6_3: "Kundenabfragen in Echtzeit",
    usecase_6_4: "Review-Management & Follow-ups",
    usecases_cta: "Nicht sicher, ob ZEYNAH für Ihre Branche passt?",
    demos_title: "",
    demos_subtitle: "Sehen Sie ZEYNAH in Aktion. Verstehen Sie, wie unsere KI tatsächlich funktioniert.",
    demo_1_title: "🏢 B2B Lead-Qualifizierung",
    demo_1_desc: "Sehen Sie, wie unsere KI in 2 Minuten einen qualifizierten Lead aus einem Anfrage-Anruf macht.",
    demo_2_title: "🏠 Immobilien Terminvergabe",
    demo_2_desc: "Automatische Besichtigungstermine, Interessenten-Validierung und CRM-Integration in Echtzeit.",
    demo_3_title: "🏥 Patiententerminbuchung",
    demo_3_desc: "Intelligente Terminvergabe, Erinnerungen und automatische Anamnese-Datenerfassung für Praxen.",
    demo_4_title: "💼 Versicherungsabschluss",
    demo_4_desc: "Qualifizierung von Versicherungsnehmern, automatische Angebotserstellung und Abschluss-Beratung.",
    demo_5_title: "🎓 Kursanmeldung & Beratung",
    demo_5_desc: "Automatische Kursberatung, Anmeldungsabwicklung und Zahlungsintegration für E-Learning.",
    demo_6_title: "🍕 Reservierungsmanagement",
    demo_6_desc: "Automatische Tischreservierungen, Event-Anfragen und Kundengewinnungsanrufe rund um die Uhr.",
    demo_watch: "Demo ansehen",
    demo_voice_btn: "🎙️ Persönliche Beratung",
    demos_interested: "Interessiert? Buchen Sie eine persönliche Demo mit unserem Experten-Team.",
    demo_book: "Persönliche Demo buchen",
    form_title: "Persönliche Demo anfragen",
    form_subtitle: "Füllen Sie das Formular aus – ich melde mich bei Ihnen.",
    form_name: "Name",
    form_email: "E-Mail",
    form_message: "Nachricht / Ihr Anliegen",
    form_send: "Nachricht senden",
    form_placeholder_name: "Ihr Name",
    form_placeholder_email: "ihre@email.de",
    form_placeholder_message: "Womit kann ich Ihnen helfen?",
    modal_close: "Schließen",
    benefits_title: "Warum ZEYNAH?",
    benefit_1: "24/7 Erreichbarkeit ohne Personalaufwand",
    benefit_2: "Reduzierte Kosten pro Lead",
    benefit_3: "Skalierbare Infrastruktur",
    benefit_4: "DSGVO-konforme Systeme",
    benefit_5: "Klare Umsatzfokussierung",
    contact_title: "Starten Sie jetzt",
    contact_intro: "Buchen Sie eine unverbindliche Strategie-Session und analysieren Sie Ihr Automatisierungspotenzial.",
    contact_cta: "Interessiert? Schreiben Sie mir – ich antworte persönlich.",
    contact_form_btn: "✉️ Nachricht schreiben",
    ceo_title: "CEO & Gründer",
    footer_desc: "Voice AI Systems für Revenue Automation",
    footer_nav: "Navigation",
    footer_legal: "Rechtliches",
    imprint: "Impressum",
    privacy: "Datenschutz",
    terms: "AGB",
    all_rights: "Alle Rechte vorbehalten.",
  },
  tr: {
    about: "Hakkımızda",
    services: "Hizmetler",
    demos_nav: "Demo",
    contact: "İletişim",
    hero_title: "<span class=\"gradient\">Gelir Üreten</span> Voice AI",
    hero_tagline: "Otomatikleştirilmiş Konuşmalar. Nitelikli Müşteri Adayları. Ölçülebilir Büyüme.",
    hero_desc: "Yapay zeka müşteri etkileşimini devrimci bir şekilde değiştirmektedir. ZEYNAH bu dönüşümü kullanarak işletmeleri geleceğe hazır hale getirmektedir. Akıllı Voice-AI sistemleriyle satış süreçlerinizi ölçeklendirmenize ve müşteri ilişkilerinizi otomatikleştirmenize olanak sağlarız – kaliteden taviz vermeden. Deneyimli ekibimiz, en son yapay zeka teknolojisini kanıtlanmış satış stratejileriyle birleştirerek işletmenizin sürdürülebilir büyümesini sağlar.",
    cta_strategy: "Strateji Oturumu Rezerv Edin",
    about_title: "İnovasyon Müşteri Başarısıyla Karşılaşıyor",
    about_p1: "Dijital dönüşüm artık bir seçenek değil – bir zorunluluk. İşletmeler her gün verimsiz müşteri etkileşimleri, kaçırılan fırsatlar ve manuel süreçlerden milyonları kaybetmektedir. Kendi takımları ezilmiş, call center maliyetleri patlıyor ve potansiyel müşteriler aracılıklardan düşüyor. Bu sorunu tanıyor ve çözüyoruz.",
    about_p2: "ZEYNAH ile müşteri etkileşiminizi yüksek performanslı, tamamen otomatikleştirilmiş bir satış sürecine dönüştürüyoruz. Voice-AI sistemlerimiz akıllı konuşmalar yürütür, ilgi gösteren kişileri gerçek zamanlı olarak nitelendirir ve yalnızca en iyi müşteri adaylarını satış ekibinize iletir. Sonuç: Daha düşük maliyetler, daha yüksek dönüşüm oranları ve ek personel olmadan 24/7 erişilebilirlik. Teknolojimiz sadece verimli değil – aynı zamanda insansal. Her konuşma doğal ve güvenilir hissettiriyor.",
    about_p3: "ZEYNAH'de entegrasyonun gücüne inanıyoruz. Bu nedenle AI sistemlerimizi CRM'iniz, muhasebe yazılımınız, takvim sistemleriniz ve mevcut tüm araçlarınızla sorunsuzca bağlıyoruz. Hiç kesinti yok. Hiç manuel giriş yok. Artık hiç kaçırılan fırsat yok. Görevimiz açık: Akıllı otomasyonun gücüyle işletmenizi katlanarak büyümeye yardımcı olmak ve dijital sınırları genişletmek. Satışın geleceği otomatikleştirilmiş. Soru sadece şu: Bunu şekillendirmek istiyor musunuz?",
    services_title: "Hizmetlerimiz",
    service_1_title: "AI Sesli Ajanlar",
    service_1_desc: "Müşteri adayı nitelemesi, randevu rezervasyonu ve satış süreçleri için otomatikleştirilmiş, doğal konuşma yönetimi.",
    service_2_title: "Gelir Otomasyonu",
    service_2_desc: "Net dönüşüm stratejisine sahip yapılandırılmış AI diyalogları aracılığıyla satış süreçlerinizi optimize edin.",
    service_3_title: "Sistem Entegrasyonu",
    service_3_desc: "CRM, takvim ve dahili sistemlere sorunsuz bağlantı ve otomatik veri senkronizasyonu.",
    service_4_title: "Analitik & Optimizasyon",
    service_4_desc: "Gerçek zamanlı veri analizi, performans takibi ve sürekli dönüşüm optimizasyonu.",
    usecases_title: "ZEYNAH'nin Kullanım Alanları",
    usecase_1_title: "🏢 B2B Satış",
    usecase_1_1: "Yüksek değerli ürünler için müşteri adayı nitelemesi",
    usecase_1_2: "Otomatik ilk iletişim ve randevu ayarı",
    usecase_1_3: "Satış Hattı Otomasyonu",
    usecase_1_4: "Salesforce & HubSpot ile entegrasyon",
    usecase_2_title: "🏥 Sağlık & Wellness",
    usecase_2_1: "Hasta randevu rezervasyonu ve hatırlatmalar",
    usecase_2_2: "Telehealth randevu yönetimi",
    usecase_2_3: "Sigorta İnceleme Yönetimi",
    usecase_2_4: "HIPAA uyumlu veri işleme",
    usecase_3_title: "🏠 Gayrimenkul & Aracılık",
    usecase_3_1: "24/7 İlgili kişi nitelemesi",
    usecase_3_2: "Görüntüleme randevuları otomatik olarak ayarla",
    usecase_3_3: "Mülk bilgisi & fiyat danışmalığı",
    usecase_3_4: "Gayrimenkul aracıları için Lead Scoring",
    usecase_4_title: "💼 Finansal Hizmetler",
    usecase_4_1: "Sigorta anlaşmalarını otomatikleştir",
    usecase_4_2: "Kredi başvurularını nitelendir",
    usecase_4_3: "Mali danışma randevuları ayarla",
    usecase_4_4: "Uygunluk politikaları uyumlu süreçler",
    usecase_5_title: "🎓 Eğitim & E-Öğrenme",
    usecase_5_1: "Kurs kaydı ve danışmanlık",
    usecase_5_2: "Öğrenci sorularını otomatik olarak cevapla",
    usecase_5_3: "Kampüs turlarını ayarla",
    usecase_5_4: "Kabul prosedürünü hızlandır",
    usecase_6_title: "🍕 Restoran & Konaklama",
    usecase_6_1: "Tablo rezervasyonlarını otomatikleştir",
    usecase_6_2: "Etkinlik ve catering sorguları",
    usecase_6_3: "Müşteri sorularına gerçek zamanlı cevaplar",
    usecase_6_4: "İnceleme Yönetimi & Takip",
    usecases_cta: "ZEYNAH'nin sizin endüstrize uygun olup olmadığından emin değil misiniz?",
    demos_title: "",
    demos_subtitle: "ZEYNAH'yi harekete geçtikten sonra görün. Yapay zekamızın nasıl çalıştığını anlayın.",
    demo_1_title: "🏢 B2B Müşteri Adayı Nitelemesi",
    demo_1_desc: "Yapay zekamızın 2 dakika içinde bir sorgu çağrısından nasıl nitelenmiş bir müşteri adayı yaptığını görün.",
    demo_2_title: "🏠 Gayrimenkul Randevu Yönetimi",
    demo_2_desc: "Otomatik görüntüleme randevuları, gerçek zamanlı ilgili kişi doğrulaması ve CRM entegrasyonu.",
    demo_3_title: "🏥 Hasta Randevu Rezervasyonu",
    demo_3_desc: "Akıllı randevu yönetimi, hatırlatmalar ve otomatik tıbbi öykü veri toplama.",
    demo_4_title: "💼 Sigorta Anlaşması",
    demo_4_desc: "Sigortalı nitelemesi, otomatik teklif oluşturma ve anlaşma danışmalığı.",
    demo_5_title: "🎓 Kurs Kaydı & Danışmanlık",
    demo_5_desc: "Otomatik kurs danışmalığı, kayıt işleme ve ödeme entegrasyonu e-öğrenme için.",
    demo_6_title: "🍕 Rezervasyon Yönetimi",
    demo_6_desc: "Otomatik tablo rezervasyonları, etkinlik sorguları ve müşteri kazanım çağrıları 24/7.",
    demo_watch: "Demoyu İzle",
    demo_voice_btn: "🎙️ Kişisel Danışmanlık",
    demos_interested: "İlgileniyor musunuz? Uzman ekibimizle kişisel demo rezervasyonu yapın.",
    demo_book: "Kişisel Demo Ayırtn",
    form_title: "Kişisel Demo talebi",
    form_subtitle: "Formu doldurun – size geri dönüş yapacağım.",
    form_name: "Ad",
    form_email: "E-posta",
    form_message: "Mesaj / Talebiniz",
    form_send: "Mesaj gönder",
    form_placeholder_name: "Adınız",
    form_placeholder_email: "email@adresiniz.com",
    form_placeholder_message: "Size nasıl yardımcı olabilirim?",
    modal_close: "Kapat",
    benefits_title: "Neden ZEYNAH?",
    benefit_1: "Personel maliyeti olmayan 24/7 Erişilebilirlik",
    benefit_2: "Müşteri Adayı Başına Düşük Maliyetler",
    benefit_3: "Ölçeklenebilir Altyapı",
    benefit_4: "GDPR Uyumu Sistemler",
    benefit_5: "Net Gelir Odaklanması",
    contact_title: "Şimdi Başlayın",
    contact_intro: "Ücretsiz bir strateji oturumu ayırtarak otomasyonunuzun potansiyelini analiz edin.",
    contact_cta: "İlgileniyor musunuz? Bana yazın – size şahsen cevap vereceğim.",
    contact_form_btn: "✉️ Mesaj yaz",
    ceo_title: "CEO & Kurucu",
    footer_desc: "Gelir Otomasyonu İçin Voice AI Sistemleri",
    footer_nav: "Navigasyon",
    footer_legal: "Yasal",
    imprint: "İmprint",
    privacy: "Gizlilik",
    terms: "Şartlar ve Koşullar",
    all_rights: "Tüm haklarıyla saklıdır.",
  },
  en: {
    about: "About Us",
    services: "Services",
    demos_nav: "Demo",
    contact: "Contact",
    hero_title: "Voice AI That <span class=\"gradient\">Generates Revenue</span>",
    hero_tagline: "Automated Conversations. Qualified Leads. Measurable Growth.",
    hero_desc: "Artificial intelligence is revolutionizing customer interaction. ZEYNAH leverages this transformation to make businesses future-ready. With intelligent Voice-AI systems, we enable you to scale your sales processes and automate customer relationships without compromising on quality. Our experienced team combines cutting-edge AI technology with proven sales strategies to ensure sustainable growth for your business.",
    cta_strategy: "Book Strategy Session",
    about_title: "Innovation Meets Customer Success",
    about_p1: "Digital transformation is no longer an option – it's a necessity. Companies lose millions daily through inefficient customer interactions, missed opportunities, and manual processes. Teams are overwhelmed, call center costs are skyrocketing, and potential customers fall through the cracks. We recognize this problem and we solve it.",
    about_p2: "With ZEYNAH, we transform your customer interaction into a high-performance, fully automated sales process. Our Voice-AI systems conduct intelligent conversations, qualify prospects in real-time, and route only the best leads to your sales team. The result: Lower costs, higher conversion rates, and 24/7 availability without additional staff. Our technology isn't just efficient – it's human. Every conversation feels natural and trustworthy.",
    about_p3: "At ZEYNAH, we believe in the power of integration. That's why we seamlessly connect our AI systems with your CRM, accounting software, calendar systems, and all your existing tools. No media breaks. No manual entries. No more missed opportunities. Our mission is clear: Help your business achieve exponential growth through intelligent automation and expand digital horizons. The future of sales is automated. The only question is: Do you want to shape it?",
    services_title: "Our Services",
    service_1_title: "AI Voice Agents",
    service_1_desc: "Automated, natural conversation management for lead qualification, appointment booking, and sales processes.",
    service_2_title: "Revenue Automation",
    service_2_desc: "Optimize your sales processes through structured AI dialogues with clear conversion strategy.",
    service_3_title: "System Integration",
    service_3_desc: "Seamless integration with CRM, calendar, and internal systems with automatic data synchronization.",
    service_4_title: "Analytics & Optimization",
    service_4_desc: "Real-time data analysis, performance tracking, and continuous conversion optimization.",
    usecases_title: "ZEYNAH Use Cases",
    usecase_1_title: "🏢 B2B Sales",
    usecase_1_1: "Lead qualification for high-ticket products",
    usecase_1_2: "Automated initial contact & appointment booking",
    usecase_1_3: "Sales Pipeline Automation",
    usecase_1_4: "Integration with Salesforce & HubSpot",
    usecase_2_title: "🏥 Healthcare & Wellness",
    usecase_2_1: "Patient appointment booking & reminders",
    usecase_2_2: "Telehealth appointment management",
    usecase_2_3: "Insurance Inquiry Management",
    usecase_2_4: "HIPAA-compliant data processing",
    usecase_3_title: "🏠 Real Estate & Brokerage",
    usecase_3_1: "Prospect qualification 24/7",
    usecase_3_2: "Schedule property viewings automatically",
    usecase_3_3: "Property information & price consultation",
    usecase_3_4: "Lead scoring for real estate agents",
    usecase_4_title: "💼 Financial Services",
    usecase_4_1: "Automate insurance closures",
    usecase_4_2: "Qualify credit applications",
    usecase_4_3: "Book financial consultation appointments",
    usecase_4_4: "Compliance-compliant processes",
    usecase_5_title: "🎓 Education & E-Learning",
    usecase_5_1: "Course registration & counseling",
    usecase_5_2: "Answer student inquiries automatically",
    usecase_5_3: "Schedule campus tours",
    usecase_5_4: "Accelerate admission procedures",
    usecase_6_title: "🍕 Restaurant & Hospitality",
    usecase_6_1: "Automate table reservations",
    usecase_6_2: "Event booking & catering inquiries",
    usecase_6_3: "Real-time customer inquiries",
    usecase_6_4: "Review management & follow-ups",
    usecases_cta: "Not sure if ZEYNAH is right for your industry?",
    demos_title: "",
    demos_subtitle: "See ZEYNAH in action. Understand how our AI actually works.",
    demo_1_title: "🏢 B2B Lead Qualification",
    demo_1_desc: "Watch how our AI turns an inquiry call into a qualified lead in 2 minutes.",
    demo_2_title: "🏠 Real Estate Appointment Management",
    demo_2_desc: "Automatic property viewings, real-time prospect validation, and CRM integration.",
    demo_3_title: "🏥 Patient Appointment Booking",
    demo_3_desc: "Smart appointment management, reminders, and automatic medical history data collection.",
    demo_4_title: "💼 Insurance Closing",
    demo_4_desc: "Insured qualification, automatic quote generation, and closing consultation.",
    demo_5_title: "🎓 Course Registration & Counseling",
    demo_5_desc: "Automatic course consultation, registration processing, and payment integration for e-learning.",
    demo_6_title: "🍕 Reservation Management",
    demo_6_desc: "Automatic table reservations, event inquiries, and customer acquisition calls around the clock.",
    demo_watch: "Watch Demo",
    demo_voice_btn: "🎙️ Personal Consultation",
    demos_interested: "Interested? Book a personal demo with our expert team.",
    demo_book: "Book Personal Demo",
    form_title: "Request Personal Demo",
    form_subtitle: "Fill out the form – I'll get back to you.",
    form_name: "Name",
    form_email: "Email",
    form_message: "Message / Your request",
    form_send: "Send message",
    form_placeholder_name: "Your name",
    form_placeholder_email: "your@email.com",
    form_placeholder_message: "How can I help you?",
    modal_close: "Close",
    benefits_title: "Why ZEYNAH?",
    benefit_1: "24/7 Availability Without Personnel Costs",
    benefit_2: "Reduced Cost Per Lead",
    benefit_3: "Scalable Infrastructure",
    benefit_4: "GDPR-Compliant Systems",
    benefit_5: "Clear Revenue Focus",
    contact_title: "Get Started Now",
    contact_intro: "Book a free strategy session and analyze your automation potential.",
    contact_cta: "Interested? Write to me – I'll respond personally.",
    contact_form_btn: "✉️ Send message",
    ceo_title: "CEO & Founder",
    footer_desc: "Voice AI Systems for Revenue Automation",
    footer_nav: "Navigation",
    footer_legal: "Legal",
    imprint: "Imprint",
    privacy: "Privacy",
    terms: "Terms",
    all_rights: "All rights reserved.",
  }
};

// Language Manager
const LanguageManager = {
  currentLanguage: localStorage.getItem('language') || 'de',

  init() {
    this.setLanguage(this.currentLanguage);
    this.setupListeners();
  },

  setLanguage(lang) {
    if (!translations[lang]) lang = 'de';
    this.currentLanguage = lang;
    localStorage.setItem('language', lang);

    // Update all elements with data-trans attribute
    document.querySelectorAll('[data-trans]').forEach(elem => {
      const key = elem.getAttribute('data-trans');
      const translation = translations[lang][key];

      if (translation) {
        // Check if element is an h1, h3, p, span, etc.
        if (elem.innerHTML.includes('<span')) {
          // For elements with nested spans (like hero title)
          elem.innerHTML = translation;
        } else {
          elem.textContent = translation;
        }
      }
    });

    // Update placeholders (data-trans-placeholder)
    document.querySelectorAll('[data-trans-placeholder]').forEach(elem => {
      const key = elem.getAttribute('data-trans-placeholder');
      const translation = translations[lang][key];
      if (translation) elem.placeholder = translation;
    });

    // Update aria-labels (data-trans-aria)
    document.querySelectorAll('[data-trans-aria]').forEach(elem => {
      const key = elem.getAttribute('data-trans-aria');
      const translation = translations[lang][key];
      if (translation) elem.setAttribute('aria-label', translation);
    });

    // Update nav data-trans attributes
    const navLinks = {
      'about': translations[lang].about,
      'services': translations[lang].services,
      'contact': translations[lang].contact,
    };

    document.querySelectorAll('nav a[data-trans]').forEach(link => {
      const key = link.getAttribute('data-trans');
      if (navLinks[key]) {
        link.textContent = navLinks[key];
      }
    });

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update ElevenLabs ConvAI widget language (only on user-triggered change)
    if (this._initialized) {
      const widgetTexts = {
        de: {
          'override-language': 'de',
          'action-text': 'Frag Zeynah',
          'start-call-text': 'Gespräch starten',
          'end-call-text': 'Gespräch beenden',
          'expand-text': 'Chat öffnen',
          'listening-text': 'Hört zu...',
          'speaking-text': 'Zeynah spricht'
        },
        tr: {
          'override-language': 'tr',
          'action-text': "Zeynah'a sor",
          'start-call-text': 'Görüşme başlat',
          'end-call-text': 'Görüşmeyi bitir',
          'expand-text': 'Sohbeti aç',
          'listening-text': 'Dinliyor...',
          'speaking-text': 'Zeynah konuşuyor'
        },
        en: {
          'override-language': 'en',
          'action-text': 'Ask Zeynah',
          'start-call-text': 'Start conversation',
          'end-call-text': 'End conversation',
          'expand-text': 'Open chat',
          'listening-text': 'Listening...',
          'speaking-text': 'Zeynah speaking'
        }
      };
      setTimeout(() => {
        const oldWidget = document.querySelector('elevenlabs-convai');
        if (oldWidget) oldWidget.remove();
        const newWidget = document.createElement('elevenlabs-convai');
        newWidget.setAttribute('agent-id', 'agent_3201khxdc18wfrabzjjpqtes42jz');
        const texts = widgetTexts[lang] || widgetTexts['de'];
        Object.entries(texts).forEach(([attr, value]) => {
          newWidget.setAttribute(attr, value);
        });
        const scriptTag = document.body.querySelector('script[src*="elevenlabs"]');
        if (scriptTag) {
          document.body.insertBefore(newWidget, scriptTag);
        } else {
          document.body.appendChild(newWidget);
        }
      }, 100);
    }
    this._initialized = true;
  },

  setupListeners() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const lang = e.target.getAttribute('data-lang');
        this.setLanguage(lang);
      });
    });
  }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  LanguageManager.init();
});

console.log('🌍 i18n System loaded! Supported languages: DE, TR, EN');
