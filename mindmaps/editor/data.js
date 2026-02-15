// Default tree data — 10-branch Sanātana Universe structure (Refined)
const DEFAULT_TREE_DATA = {
    id: "root",
    title: "🔱 Cosmic Architecture of Sanātana Universe",
    description: "Master blueprint for the animation project. Multi-perspective, multi-tradition unified epic connecting dots across all Puranas.",
    tag: "",
    status: "",
    children: [
        {
            id: "b1",
            title: "BRANCH 1 — The Unmanifest Absolute",
            description: "What existed before creation. The philosophical and Vedic foundation.",
            tag: "S",
            status: "verified",
            children: [
                {
                    id: "b1_1", title: "Parabrahman — The Supreme Reality",
                    description: "Beyond attributes, beyond time. The 'That' from which everything arises.",
                    tag: "S", status: "verified", children: [
                        { id: "b1_1_1", title: "Beyond attributes, beyond time", description: "", tag: "S", status: "", children: [] },
                        { id: "b1_1_2", title: "Source: Upanishads (Mandukya, Chandogya)", description: "", tag: "S", status: "", children: [] }
                    ]
                },
                {
                    id: "b1_2", title: "Nasadiya Sukta (Rigveda 10.129)",
                    description: "Neither sat nor asat. Even devas came later. 'Who truly knows? Who can declare?'",
                    tag: "S", status: "verified", children: [
                        { id: "b1_2_1", title: "Neither sat (existence) nor asat (non-existence)", description: "", tag: "S", status: "", children: [] },
                        { id: "b1_2_2", title: "Even devas came later — they cannot know origin", description: "", tag: "S", status: "", children: [] },
                        { id: "b1_2_3", title: "\"Who truly knows? Who can declare?\"", description: "", tag: "S", status: "", children: [] }
                    ]
                },
                {
                    id: "b1_3", title: "Nirguna vs Saguna Brahman",
                    description: "Formless absolute vs Brahman with form. Both are same truth from different perspectives.",
                    tag: "S", status: "verified", children: [
                        { id: "b1_3_1", title: "Nirguna — Formless, attributeless (Advaita)", description: "", tag: "Ph", status: "", children: [] },
                        { id: "b1_3_2", title: "Saguna — With form & qualities (Bhakti)", description: "", tag: "Ph", status: "", children: [] },
                        { id: "b1_3_3", title: "Source: Upanishads, Bhagavad Gita (Ch. 12)", description: "", tag: "S", status: "", children: [] }
                    ]
                },
                {
                    id: "b1_4", title: "Consciousness Before Creation",
                    description: "Pure awareness (Chit). No space, no time, no matter. The seed of all existence.",
                    tag: "S", status: "", children: []
                }
            ]
        },
        {
            id: "b2",
            title: "BRANCH 2 — Manifestation Engine",
            description: "How creation works — split into Philosophical (non-theistic Sankhya) and Theistic (Puranic) layers.",
            tag: "Ph",
            status: "warning",
            children: [
                {
                    id: "b2_1", title: "⚙️ Philosophical Layer [Ph] — Classical Sankhya",
                    description: "Classical Sankhya is NON-THEISTIC (Kapila Muni). Source: Sankhya Karika.",
                    tag: "Ph", status: "warning", children: [
                        { id: "b2_1_1", title: "Prakriti — Primordial nature/matter", description: "", tag: "Ph", status: "", children: [] },
                        { id: "b2_1_2", title: "Purusha — Cosmic consciousness/witness", description: "", tag: "Ph", status: "", children: [] },
                        { id: "b2_1_3", title: "Mahat — Cosmic intelligence (first evolute)", description: "", tag: "Ph", status: "", children: [] },
                        { id: "b2_1_4", title: "⚠️ Classical Sankhya is NON-THEISTIC", description: "Source: Sankhya Karika (Ishvarakrishna)", tag: "Ph", status: "warning", children: [] }
                    ]
                },
                {
                    id: "b2_2", title: "⚙️ Theistic Layer [P] — Puranic Integration",
                    description: "Puranas adopt Sankhya but theisticize it. Prakriti becomes the power of Ishvara.",
                    tag: "P", status: "warning", children: [
                        { id: "b2_2_1", title: "Prakriti becomes the power of Ishvara (God)", description: "", tag: "P", status: "", children: [] },
                        { id: "b2_2_2", title: "Creation driven by divine will", description: "", tag: "P", status: "", children: [] },
                        { id: "b2_2_3", title: "Source: Vishnu Purana, Bhagavata Purana", description: "", tag: "P", status: "", children: [] }
                    ]
                },
                {
                    id: "b2_3", title: "Trigunas — The Three Qualities",
                    description: "Sattva, Rajas, Tamas — the three fundamental qualities of nature.",
                    tag: "Ph", status: "", children: [
                        { id: "b2_3_1", title: "Sattva — Purity, harmony, knowledge", description: "", tag: "Ph", status: "", children: [] },
                        { id: "b2_3_2", title: "Rajas — Activity, passion, desire", description: "", tag: "Ph", status: "", children: [] },
                        { id: "b2_3_3", title: "Tamas — Inertia, darkness, ignorance", description: "", tag: "Ph", status: "", children: [] }
                    ]
                },
                {
                    id: "b2_4", title: "Kala (Time) & Cyclic Cosmology",
                    description: "Time as a weapon of the divine. Cycles within cycles. Nothing truly destroyed — only transformed.",
                    tag: "P", status: "", children: []
                }
            ]
        },
        {
            id: "b3",
            title: "BRANCH 3 — Trimurti Perspectives",
            description: "Parallel origins from three traditions — each declares its deity supreme. We don't pick sides.",
            tag: "P",
            status: "verified",
            children: [
                {
                    id: "b3_1", title: "🔵 Vaishnava Origin Sequence",
                    description: "Vishnu is supreme. Source: Vishnu Purana, Bhagavata Purana.",
                    tag: "P", status: "verified", children: [
                        { id: "b3_1_1", title: "Narayana resting on Kshirasagara", description: "", tag: "P", status: "", children: [] },
                        { id: "b3_1_2", title: "Lotus from navel → Brahma born", description: "", tag: "P", status: "", children: [] },
                        { id: "b3_1_3", title: "Vishnu declared supreme in these texts", description: "", tag: "P", status: "", children: [] }
                    ]
                },
                {
                    id: "b3_2", title: "🔴 Shaiva Origin Sequence",
                    description: "Shiva is supreme. Source: Shiva Purana, Linga Purana.",
                    tag: "P", status: "verified", children: [
                        { id: "b3_2_1", title: "Shiva as Maheshwara — the supreme lord", description: "", tag: "P", status: "", children: [] },
                        { id: "b3_2_2", title: "Tandava as cosmic dance of creation", description: "", tag: "P", status: "", children: [] },
                        { id: "b3_2_3", title: "Ardhanarishvara — unity of masculine & feminine", description: "", tag: "P", status: "", children: [] }
                    ]
                },
                {
                    id: "b3_3", title: "🟡 Shakta Origin Sequence",
                    description: "Devi is supreme. Source: Devi Bhagavata Purana.",
                    tag: "P", status: "verified", children: [
                        { id: "b3_3_1", title: "Adi Shakti as primordial cosmic energy", description: "", tag: "P", status: "", children: [] },
                        { id: "b3_3_2", title: "Without Shakti, even Shiva is 'Shava'", description: "", tag: "P", status: "", children: [] }
                    ]
                },
                {
                    id: "b3_4", title: "🟢 Multi-Perspective Integrity",
                    description: "Each tradition claims supremacy. We present all without declaring one final truth. Academically honest.",
                    tag: "", status: "verified", children: []
                }
            ]
        },
        {
            id: "b4",
            title: "BRANCH 4 — Cosmic Structure",
            description: "Architecture of the universe — Lokas, time cycles, and our exact cosmic position.",
            tag: "P",
            status: "warning",
            children: [
                {
                    id: "b4_1", title: "14 Lokas (Planes of Existence)",
                    description: "7 upper and 7 lower planes, each with purpose, beings, and rules.",
                    tag: "P", status: "", children: [
                        { id: "b4_1_1", title: "7 Upper: Bhuloka → Bhuvar → Svar → Mahar → Jana → Tapa → Satyaloka", description: "", tag: "P", status: "", children: [] },
                        { id: "b4_1_2", title: "7 Lower: Atala → Vitala → Sutala → Rasatala → Talatala → Mahatala → Patala", description: "", tag: "P", status: "", children: [] }
                    ]
                },
                {
                    id: "b4_2", title: "Time Architecture",
                    description: "Kalpa, Manvantara — cosmic time divisions.",
                    tag: "P", status: "", children: [
                        { id: "b4_2_1", title: "Kalpa — 1 day of Brahma (4.32 billion years)", description: "", tag: "P", status: "", children: [] },
                        { id: "b4_2_2", title: "Manvantara — Era of one Manu (306.72 million years)", description: "", tag: "P", status: "", children: [] }
                    ]
                },
                {
                    id: "b4_3", title: "📍 Our EXACT Position Now",
                    description: "Kali Yuga → 28th Mahayuga → Vaivasvata Manvantara → Shveta Varaha Kalpa. Source: Vishnu Purana, Bhagavata Purana.",
                    tag: "P", status: "warning", children: [
                        { id: "b4_3_1", title: "Kali Yuga (4th age)", description: "", tag: "P", status: "", children: [] },
                        { id: "b4_3_2", title: "28th Mahayuga", description: "", tag: "P", status: "", children: [] },
                        { id: "b4_3_3", title: "7th Manvantara — Vaivasvata Manu", description: "", tag: "P", status: "", children: [] },
                        { id: "b4_3_4", title: "Shveta Varaha Kalpa", description: "", tag: "P", status: "", children: [] }
                    ]
                },
                {
                    id: "b4_4", title: "Yuga Cycle — The Four Ages",
                    description: "",
                    tag: "P", status: "", children: [
                        { id: "b4_4_1", title: "Satya Yuga — 1,728,000 years", description: "Age of truth", tag: "P", status: "", children: [] },
                        { id: "b4_4_2", title: "Treta Yuga — 1,296,000 years", description: "Age of ritual", tag: "P", status: "", children: [] },
                        { id: "b4_4_3", title: "Dvapara Yuga — 864,000 years", description: "Age of doubt", tag: "P", status: "", children: [] },
                        { id: "b4_4_4", title: "Kali Yuga — 432,000 years", description: "Age of darkness", tag: "P", status: "", children: [] }
                    ]
                },
                {
                    id: "b4_5", title: "Sapta Rishis",
                    description: "Seven cosmic sages across Manvantaras. Guardians of Vedic knowledge.",
                    tag: "P", status: "", children: []
                }
            ]
        },
        {
            id: "b5",
            title: "BRANCH 5 — Avatar Intervention Grid",
            description: "Logic: Imbalance → Adharma → Avatar descent → Restoration → Residual karma.",
            tag: "P",
            status: "warning",
            children: [
                {
                    id: "b5_1", title: "Logic Pattern",
                    description: "Every avatar follows: Imbalance → Adharma rises → Avatar descends → Restoration → Residual karmic consequence.",
                    tag: "P", status: "", children: []
                },
                {
                    id: "b5_2", title: "Dashavatara — Primary List",
                    description: "",
                    tag: "P", status: "", children: [
                        { id: "b5_2_1", title: "Matsya — The Fish (Great Flood)", description: "", tag: "P", status: "", children: [] },
                        { id: "b5_2_2", title: "Kurma — The Tortoise (Ocean Churning)", description: "", tag: "P", status: "", children: [] },
                        { id: "b5_2_3", title: "Varaha — The Boar (Earth rescued)", description: "", tag: "P", status: "", children: [] },
                        { id: "b5_2_4", title: "Narasimha — The Man-Lion", description: "", tag: "P", status: "", children: [] },
                        { id: "b5_2_5", title: "Vamana — The Dwarf", description: "", tag: "P", status: "", children: [] },
                        { id: "b5_2_6", title: "Parashurama — The Warrior Sage", description: "", tag: "P", status: "", children: [] },
                        { id: "b5_2_7", title: "Rama — The Ideal King", description: "", tag: "I", status: "", children: [] },
                        { id: "b5_2_8", title: "Krishna — The Complete Avatar", description: "", tag: "I", status: "", children: [] }
                    ]
                },
                {
                    id: "b5_3", title: "9th Avatar — ⚠️ Variation Exists",
                    description: "Buddha (Vaishnava tradition) OR Balarama (some Puranas). Not universal.",
                    tag: "P", status: "warning", children: [
                        { id: "b5_3_1", title: "🅰️ Buddha — Vaishnava tradition inclusion", description: "", tag: "P", status: "", children: [] },
                        { id: "b5_3_2", title: "🅱️ Balarama — Some Puranas list him instead", description: "", tag: "P", status: "", children: [] }
                    ]
                },
                {
                    id: "b5_4", title: "Kalki — 10th Avatar (Yet to come)",
                    description: "End of Kali Yuga.",
                    tag: "P", status: "", children: []
                }
            ]
        },
        {
            id: "b6",
            title: "BRANCH 6 — Sacred Geography Layer",
            description: "Connecting myths to real-world places. Critical: distinguish Scriptural Core [P] from Regional Oral Expansion [R].",
            tag: "P",
            status: "warning",
            children: [
                {
                    id: "b6_1", title: "📜 Scriptural Core [P]",
                    description: "Events directly described in Puranas with primary textual basis.",
                    tag: "P", status: "", children: [
                        { id: "b6_1_1", title: "Gokarna & Atma Linga — Shiva Purana", description: "", tag: "P", status: "", children: [] }
                    ]
                },
                {
                    id: "b6_2", title: "🗣️ Regional Oral Expansion [R]",
                    description: "Expanded stories from local tradition. Not directly in primary Purana verses.",
                    tag: "R", status: "warning", children: [
                        { id: "b6_2_1", title: "Surathkal head-landing = temple tradition", description: "Not directly detailed in primary Purana verses", tag: "R", status: "warning", children: [] }
                    ]
                },
                {
                    id: "b6_3", title: "Why This Distinction Matters",
                    description: "Merging without labels invites criticism. Showing geographical myth expansion = powerful anthropology.",
                    tag: "", status: "", children: []
                }
            ]
        },
        {
            id: "b7",
            title: "BRANCH 7 — Itihasa Integration",
            description: "Ramayana (Treta Yuga) + Mahabharata (Dvapara Yuga) timeline integration. Kali Yuga starts 3102 BCE.",
            tag: "I",
            status: "verified",
            children: [
                {
                    id: "b7_1", title: "Ramayana Timeline",
                    description: "Treta Yuga events. Source: Valmiki Ramayana.",
                    tag: "I", status: "verified", children: [
                        { id: "b7_1_1", title: "Rama's exile, Lanka war, return", description: "", tag: "I", status: "", children: [] },
                        { id: "b7_1_2", title: "Dharma vs Adharma in human form", description: "", tag: "I", status: "", children: [] }
                    ]
                },
                {
                    id: "b7_2", title: "Mahabharata Timeline",
                    description: "Dvapara Yuga events. Source: Vyasa Mahabharata.",
                    tag: "I", status: "verified", children: [
                        { id: "b7_2_1", title: "Kurukshetra War — the cosmic reset", description: "", tag: "I", status: "", children: [] },
                        { id: "b7_2_2", title: "Bhagavad Gita — Krishna's divine teaching", description: "", tag: "I", status: "", children: [] }
                    ]
                },
                {
                    id: "b7_3", title: "Timeline Integration",
                    description: "How Ramayana events ripple into Mahabharata. Kali Yuga begins 3102 BCE.",
                    tag: "I", status: "", children: []
                }
            ]
        },
        {
            id: "b8",
            title: "BRANCH 8 — Present Era Mapping",
            description: "Kali Yuga = Now. Keep THEMATIC, not sensational. No 'Puranas predicted X' claims.",
            tag: "P",
            status: "warning",
            children: [
                {
                    id: "b8_1", title: "Kali Yuga Characteristics — Thematic Only",
                    description: "Decline of dharma, rise of greed. Present as symbolic pattern recognition, NOT prophecy.",
                    tag: "P", status: "warning", children: []
                },
                {
                    id: "b8_2", title: "Sacred Sites Still Active",
                    description: "Temples still standing. Living traditions continuing. Cultural continuity across millennia.",
                    tag: "P", status: "", children: []
                },
                {
                    id: "b8_3", title: "The 'Why' Factor — Our Core Mission",
                    description: "People know WHAT happened. We explain WHY. This is what makes our project unique.",
                    tag: "", status: "", children: []
                }
            ]
        },
        {
            id: "b9",
            title: "BRANCH 9 — Future Cosmology",
            description: "Kalki, Pralaya, Brahma's lifespan, cosmic reset. Mathematics verified correct.",
            tag: "P",
            status: "verified",
            children: [
                {
                    id: "b9_1", title: "Kalki Avatar",
                    description: "Final avatar. Arrives end of Kali Yuga. Source: Kalki Purana, Bhagavata Purana.",
                    tag: "P", status: "verified", children: []
                },
                {
                    id: "b9_2", title: "Types of Pralaya (Cosmic Dissolution)",
                    description: "",
                    tag: "P", status: "", children: [
                        { id: "b9_2_1", title: "Naimittika — End of Brahma's day", description: "", tag: "P", status: "", children: [] },
                        { id: "b9_2_2", title: "Prakritika — End of Brahma's life", description: "", tag: "P", status: "", children: [] },
                        { id: "b9_2_3", title: "Atyantika — Individual spiritual liberation", description: "", tag: "P", status: "", children: [] },
                        { id: "b9_2_4", title: "Nitya — Continuous change (death/rebirth)", description: "", tag: "P", status: "", children: [] }
                    ]
                },
                {
                    id: "b9_3", title: "Brahma's Lifespan",
                    description: "100 Brahma years = 311.04 trillion human years. Current: 51st year.",
                    tag: "P", status: "verified", children: []
                },
                {
                    id: "b9_4", title: "The Cycle Restarts",
                    description: "New Brahma, new universe. Same eternal truths, new forms. Infinite cycles.",
                    tag: "P", status: "", children: []
                }
            ]
        },
        {
            id: "b10",
            title: "BRANCH 10 — 🔐 Source Validation Layer",
            description: "Protects project intellectually. Tags: [S] Shruti, [P] Purana, [I] Itihasa, [Ph] Philosophy, [R] Regional.",
            tag: "",
            status: "verified",
            children: [
                {
                    id: "b10_1", title: "Tag Legend",
                    description: "",
                    tag: "", status: "", children: [
                        { id: "b10_1_1", title: "[S] Shruti — Vedas, Upanishads (highest authority)", description: "", tag: "S", status: "", children: [] },
                        { id: "b10_1_2", title: "[P] Purana — Mythological narratives (secondary)", description: "", tag: "P", status: "", children: [] },
                        { id: "b10_1_3", title: "[I] Itihasa — Epics (Ramayana, Mahabharata)", description: "", tag: "I", status: "", children: [] },
                        { id: "b10_1_4", title: "[Ph] Philosophy — Darshana (Sankhya, Vedanta, etc.)", description: "", tag: "Ph", status: "", children: [] },
                        { id: "b10_1_5", title: "[R] Regional — Temple tradition, oral expansion", description: "", tag: "R", status: "", children: [] }
                    ]
                },
                {
                    id: "b10_2", title: "Validation Rules",
                    description: "Never mix Darshana and Purana as same authority. Always tag regional traditions separately. Show variation where traditions differ.",
                    tag: "", status: "", children: []
                }
            ]
        }
    ]
};
