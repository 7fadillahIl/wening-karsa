const PROGRAMS = [
  // ======================
  // CLUSTER 1: Komunikasi & Organisasi
  // ======================
  {
    cluster: "Komunikasi & Organisasi",
    items: [
      {
        slug: "service-excellence",
        title: "Service Excellence & Customer Experience",
        summary:
          "Memetakan journey, mengukur gap layanan, dan membangun sistem umpan balik NPS.",
        tujuan:
          "Memetakan journey, mengukur gap layanan, dan membangun sistem umpan balik NPS yang etis & berkelanjutan.",
        peserta: "Frontliners, service leaders, CX team.",
        metode:
          "Journey mapping, analisis gap, sistem umpan balik berbasis NPS.",
        referensi:
          "SERVQUAL (Parasuraman/Zeithaml/Berry, 1988); Journey Map NN/g; Net Promoter System — Bain.",
      },
      {
        slug: "high-impact-presentation",
        title: "Facilitation & High-Impact Presentation",
        summary: "Memfasilitasi rapat produktif & presentasi berdampak tinggi.",
        tujuan:
          "Memfasilitasi rapat/kolaborasi produktif & menyampaikan presentasi berdampak tinggi.",
        peserta: "Leader, trainer internal, fasilitator komunitas.",
        metode: "Simulasi fasilitasi rapat, latihan presentasi.",
        referensi:
          "IAF—Core Facilitator Competencies; Toastmasters—Pathways program.",
      },
      {
        slug: "positive-psychology",
        title: "Positive Psychology at Work",
        summary:
          "Menumbuhkan optimisme, flow, strengths-based leadership, dan well-being di organisasi.",
        tujuan:
          "Menumbuhkan optimisme, flow, strengths-based leadership, dan well-being di organisasi.",
        peserta: "Semua level karyawan.",
        metode: "VIA Strengths Assessment, appreciative inquiry, journaling.",
        referensi:
          "Martin Seligman – Flourish (2011); VIA Institute on Character.",
      },
      {
        slug: "workplace-mental-health",
        title: "Workplace Mental Health Awareness",
        summary:
          "Meningkatkan literasi kesehatan mental & mengurangi stigma di tempat kerja.",
        tujuan:
          "Meningkatkan literasi kesehatan mental, mengurangi stigma, & memperkuat dukungan rekan kerja.",
        peserta: "HR, atasan langsung, seluruh staf.",
        metode:
          "Psychoeducation, simulasi percakapan mendukung, tanda dini deteksi masalah.",
        referensi:
          "WHO – Mental Health in the Workplace Guidelines; Mental Health First Aid (MHFA).",
      },
      {
        slug: "effective-communication",
        title: "Effective Interpersonal Communication",
        summary:
          "Menguasai keterampilan komunikasi verbal & non-verbal untuk hubungan kerja harmonis.",
        tujuan:
          "Menguasai keterampilan komunikasi verbal & non-verbal yang efektif untuk membangun hubungan kerja harmonis.",
        peserta: "Semua level karyawan.",
        metode: "Role play, latihan empati, observasi bahasa tubuh.",
        referensi:
          "Adler, Rosenfeld & Proctor – Interplay: The Process of Interpersonal Communication.",
      },
      {
        slug: "active-listening",
        title: "Active Listening & Empathy in the Workplace",
        summary:
          "Meningkatkan kualitas mendengarkan aktif & keterampilan empati.",
        tujuan:
          "Meningkatkan kualitas mendengarkan aktif & keterampilan empati untuk membangun trust.",
        peserta: "Pimpinan tim, customer service, HR.",
        metode: "Latihan parafrasa, refleksi perasaan, listening circle.",
        referensi:
          "Carl Rogers – On Becoming a Person; APA – Active Listening Guidelines.",
      },
    ],
  },

  // ======================
  // CLUSTER 2: Pendidikan Anak
  // ======================
  {
    cluster: "Pendidikan Anak",
    items: [
      {
        slug: "emotional-coaching",
        title: "Emotional Coaching for Children",
        summary:
          "Membantu anak mengenali, menamai, dan mengatur emosi sejak dini.",
        tujuan:
          "Membantu anak mengenali, menamai, dan mengatur emosi sejak dini.",
        peserta: "Orang tua, guru PAUD/SD.",
        metode: "Storytelling, emotion cards, praktik labeling emotion.",
        referensi: "John Gottman – Raising an Emotionally Intelligent Child.",
      },
      {
        slug: "growth-mindset",
        title: "Growth Mindset in Learning",
        summary:
          "Mendorong anak percaya bahwa kecerdasan & kemampuan bisa berkembang lewat usaha.",
        tujuan:
          "Mendorong anak untuk percaya bahwa kecerdasan & kemampuan bisa berkembang lewat usaha.",
        peserta: "Guru, konselor sekolah, orang tua.",
        metode:
          "Workshop mindset, studi kasus anak, strategi umpan balik positif.",
        referensi: "Carol Dweck – Mindset: The New Psychology of Success.",
      },
    ],
  },

  // ======================
  // CLUSTER 3: Remaja
  // ======================
  {
    cluster: "Remaja",
    items: [
      {
        slug: "career-planning-teens",
        title: "Career & Future Planning for Teens",
        summary: "Eksplorasi minat-bakat & perencanaan masa depan remaja.",
        tujuan:
          "Membekali remaja dengan keterampilan eksplorasi minat-bakat, pengambilan keputusan karier, dan perencanaan masa depan.",
        peserta: "SMA/SMK sederajat.",
        metode: "Tes minat bakat, career coaching mini, workshop visi pribadi.",
        referensi:
          "Holland’s Theory of Vocational Personalities (RIASEC); Super’s Career Development Theory.",
      },
      {
        slug: "teen-resilience",
        title: "Adolescent Mental Health & Resilience",
        summary:
          "Membantu remaja memahami diri, mengelola emosi, & membangun daya lenting.",
        tujuan:
          "Membantu remaja memahami diri, mengelola emosi, dan membangun daya lenting menghadapi tekanan akademik maupun sosial.",
        peserta: "Siswa SMP/SMA, konselor sekolah.",
        metode: "Psikoedukasi interaktif, journaling, peer support group.",
        referensi:
          "WHO – Adolescent Mental Health; APA – Resilience in Adolescents.",
      },
      {
        slug: "academic-resilience",
        title: "Academic Resilience & Stress Management",
        summary:
          "Melatih mahasiswa mengelola stres kuliah, skripsi, & transisi ke dewasa awal.",
        tujuan:
          "Melatih mahasiswa mengelola stres kuliah, skripsi, maupun transisi kehidupan dewasa awal.",
        peserta: "Mahasiswa D3/S1/S2.",
        metode: "Mindfulness, CBT sederhana, kelompok dukungan sebaya.",
        referensi:
          "Lazarus & Folkman – Stress, Appraisal and Coping; Kabat-Zinn – Mindfulness for Students.",
      },
    ],
  },

  // ======================
  // CLUSTER 4: Pembekalan Tenaga Pendidik
  // ======================
  {
    cluster: "Pembekalan Tenaga Pendidik",
    items: [
      {
        slug: "motivation-higher-edu",
        title: "Psychology of Motivation in Higher Education",
        summary:
          "Memahami dinamika motivasi mahasiswa & iklim kelas yang mendukung.",
        tujuan:
          "Membantu dosen memahami dinamika motivasi mahasiswa, serta menciptakan iklim kelas yang mendukung.",
        peserta: "Dosen, tutor, pendidik perguruan tinggi.",
        metode:
          "Workshop teori motivasi (SDT, Expectancy-Value), simulasi pemberian feedback.",
        referensi:
          "Deci & Ryan – Self-Determination Theory; Eccles & Wigfield – Expectancy-Value Model.",
      },
      {
        slug: "study-skills",
        title: "Effective Study Skills & Self-Regulated Learning",
        summary: "Strategi belajar efektif berbasis psikologi kognitif.",
        tujuan:
          "Membekali mahasiswa strategi belajar efektif berbasis psikologi kognitif.",
        peserta: "Mahasiswa.",
        metode: "Latihan spaced repetition, self-monitoring, goal setting.",
        referensi:
          "Zimmerman – Self-Regulated Learning; Brown, Roediger & McDaniel – Make It Stick.",
      },
      {
        slug: "mentoring-skills",
        title: "Communication & Mentoring Skills for Lecturers",
        summary:
          "Melatih dosen dalam komunikasi akademik & mentoring mahasiswa.",
        tujuan:
          "Melatih dosen agar lebih efektif dalam komunikasi akademik, bimbingan, dan mentoring mahasiswa.",
        peserta: "Dosen, pembimbing akademik, pembina organisasi mahasiswa.",
        metode:
          "Latihan komunikasi empatik, coaching conversation, simulasi bimbingan skripsi.",
        referensi:
          "Chickering & Gamson – Seven Principles for Good Practice; Whitmore – Coaching for Performance.",
      },
    ],
  },

  // ======================
  // CLUSTER 5: Katalog Training Psikologi
  // ======================
  {
    cluster: "Katalog Training Psikologi",
    items: [
      {
        slug: "psychometrics",
        title: "Pengantar Psikometri & Etika Tes Psikologi",
        summary:
          "Dasar reliabilitas, validitas, norma, dan etika penggunaan tes.",
        tujuan:
          "Memberikan dasar pengetahuan tentang reliabilitas, validitas, norma, dan etika penggunaan tes.",
        metode:
          "Konsep dasar psikometri, prinsip etika APA/HIMPSI, hak & kerahasiaan klien.",
        referensi:
          "Aiken – Psychological Testing and Assessment; HIMPSI – Kode Etik Psikologi Indonesia.",
      },
      {
        slug: "intelligence-test",
        title: "Tes Intelegensi Individu",
        summary: "Administrasi & skoring tes intelegensi utama.",
        tujuan:
          "Melatih keterampilan administrasi & skoring tes intelegensi utama.",
        alat: "WAIS-IV, WISC-V, CFIT.",
        metode:
          "Simulasi administrasi, latihan skoring manual & digital, interpretasi profil IQ.",
        referensi: "Wechsler – WAIS-IV Manual; Cattell – CFIT Manual.",
      },
      {
        slug: "group-intelligence",
        title: "Tes Intelegensi Kolektif",
        summary: "Administrasi tes kelompok untuk pendidikan & organisasi.",
        tujuan:
          "Menguasai administrasi tes kelompok untuk kebutuhan pendidikan & organisasi.",
        alat: "IST, Raven’s Progressive Matrices.",
        referensi: "Raven – Raven’s Progressive Matrices Manual.",
      },
      {
        slug: "objective-personality",
        title: "Tes Kepribadian Objektif",
        summary: "Menggunakan tes inventori kepribadian secara benar & etis.",
        tujuan:
          "Mampu menggunakan tes inventori kepribadian secara benar & etis.",
        alat: "MMPI-2, 16PF, Big Five Inventory.",
        metode: "Administrasi manual & komputer, interpretasi profil.",
        referensi: "Hathaway & McKinley – MMPI Manual; Cattell – 16PF Manual.",
      },
      {
        slug: "projective-personality",
        title: "Tes Kepribadian Proyektif",
        summary: "Administrasi & interpretasi dasar tes proyektif.",
        tujuan:
          "Mengenal, mengadministrasikan, dan memahami dasar interpretasi tes proyektif.",
        alat: "DAP, BAUM, HTP, TAT.",
        metode: "Latihan administrasi, interpretasi dasar, diskusi kasus.",
        referensi:
          "Bellak – TAT Manual; Hammer – Advances in Projective Drawing.",
      },
      {
        slug: "aptitude-test",
        title: "Tes Bakat & Minat",
        summary: "Tes pemetaan potensi akademik & karier.",
        tujuan: "Memahami tes untuk pemetaan potensi akademik & karier.",
        alat: "DAT, Strong Interest Inventory.",
        metode:
          "Administrasi kolektif, interpretasi profil, aplikasi bimbingan konseling.",
        referensi: "Super – Career Development Theory; Holland – RIASEC Model.",
      },
      {
        slug: "clinical-test",
        title: "Tes Klinis & Psikodiagnostik Dasar",
        summary: "Pengenalan tes untuk asesmen klinis psikologi.",
        tujuan: "Pengenalan tes untuk asesmen klinis psikologi.",
        alat: "Bender-Gestalt Test, Goodenough-Harris Draw A Man.",
        metode: "Praktik administrasi, analisis hasil, diskusi klinis.",
        referensi: "Brannigan & Decker – Bender Visual-Motor Gestalt Test.",
      },
      {
        slug: "interview-observation",
        title: "Observasi & Wawancara Psikologis",
        summary: "Melatih keterampilan dasar asesmen non-tes.",
        tujuan: "Melatih keterampilan dasar asesmen non-tes.",
        metode:
          "Simulasi wawancara, latihan observasi perilaku, pembuatan laporan singkat.",
        referensi:
          "Kvale – Doing Interviews; Poerwandari – Pendekatan Kualitatif dalam Penelitian Psikologi.",
      },
    ],
  },
];

export default PROGRAMS;
