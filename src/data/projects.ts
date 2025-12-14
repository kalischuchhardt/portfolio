import type { Locale } from "../i18n/content";

export interface ProjectLinkLabel {
  href: string;
  label: Record<Locale, string>;
}

export interface ProjectContent {
  slug: string;
  cardImage: string;
  title: Record<Locale, string>;
  overview: Record<Locale, string>;
  about: Record<Locale, string>;
  links: ProjectLinkLabel[];
}

export const PROJECTS: ProjectContent[] = [
  {
    slug: "phi-sigma-rho",
    cardImage: "/portfolio/project1-CaL29hLN.svg",
    title: {
      en: "Phi Sigma Rho Tau Chapter Website",
      jp: "Phi Sigma Rho Tau Chapter Website",
    },
    overview: {
      en: "A custom MERN-stack website for the sorority to: manage chapter events, track event sign-ups and attendance, assign and view points, and send automated email and SMS reminders",
      jp: "ソロリティ用のカスタムMERNスタックウェブサイト。チャプターイベントの管理、イベントサインアップと出席の追跡、ポイントの割り当てと表示、自動化されたメールとSMSリマインダーを送信します",
    },
    about: {
      en: "A custom MERN-stack website for the sorority to: manage chapter events, track event sign-ups and attendance, assign and view points, and send automated email and SMS reminders",
      jp: "ソロリティ用のカスタムMERNスタックウェブサイト。チャプターイベントの管理、イベントサインアップと出席の追跡、ポイントの割り当てと表示、自動化されたメールとSMSリマインダーを送信します",
    },
    links: [],
  },
  {
    slug: "gatormarket",
    cardImage: "/portfolio/project2-BJ5gxzqO.svg",
    title: {
      en: "GatorMarket",
      jp: "GatorMarket",
    },
    overview: {
      en: "GatorMarket is a dedicated peer-to-peer marketplace for UF students built on the principle of 'from students, for students.' The platform enables verified UF students to buy, sell, and trade items securely with features including email verification, a robust admin system for user management, and specialized listing filters tailored to student needs.",
      jp: "GatorMarketはUF学生向けの専用ピアツーピアマーケットプレイスで、「学生から、学生へ」という原則に基づいています。このプラットフォームは、メール認証、堅牢な管理者システム、および学生のニーズに適応した特別なリスティングフィルターを備えた、確認されたUF学生が安全にアイテムを売買および取引できるようにします。",
    },
    about: {
      en: "GatorMarket is a full-stack web application built to address a critical gap in UF's student marketplace ecosystem. The platform was built using React Router for frontend navigation, FastAPI for backend services, and PostgreSQL for data persistence. Key features include: secure session-based authentication with mandatory UFL email verification to ensure only UF students access member-only features; a comprehensive admin dashboard allowing administrators to view all users, manage listings, and ban problematic accounts; a user reporting system enabling students to report misconduct through a dedicated channel; advanced search, sorting, and filtering capabilities tailored to student needs like textbooks and furniture; and image hosting for listings. The architecture follows the client-server model with clear separation of concerns: React components handle the UI, Axios manages API communication, and FastAPI endpoints provide secure access control through dependency injection. The platform prioritizes security with protected routes on both frontend and backend, preventing unauthorized access to admin pages. A rigorous two-step testing workflow combines local developer testing with independent peer review to ensure reliability and security before merging to production. The application demonstrates practical understanding of full-stack development, database design, user authentication, and risk management in building a safe, scalable marketplace for college students.",
      jp: "GatorMarketはUFの学生マーケットプレイスエコシステムの重要なギャップに対応するために構築されたフルスタックウェブアプリケーションです。このプラットフォームは、フロントエンドナビゲーション用のReact Router、バックエンドサービス用のFastAPI、データ永続性用のPostgreSQLを使用して構築されました。主な機能には、UFLメール認証を備えた安全なセッションベースの認証によりUF学生のみがメンバーのみの機能にアクセス可能であること。すべてのユーザーを表示し、リスティングを管理し、問題のあるアカウントを禁止することを許可する包括的な管理者ダッシュボード。学生が専用チャネルを通じて不正行為を報告できるようにする学生報告システム。教科書や家具など学生のニーズに合わせた高度な検索、ソート、フィルタリング機能。およびリスティング用の画像ホスティングが含まれます。アーキテクチャはクライアントサーバーモデルに従い、UIを処理するReactコンポーネント、API通信を管理するAxios、および依存性注入を通じて安全なアクセス制御を提供するFastAPIエンドポイント間に明確な関心の分離があります。このプラットフォームは、フロントエンドとバックエンド両方の保護されたルートにより、管理者ページへの不正アクセスを防止してセキュリティを優先します。厳密な2段階のテストワークフローは、ローカル開発者テストと独立したピアレビューを組み合わせて、本番環境にマージする前に信頼性とセキュリティを確保します。アプリケーションは、フルスタック開発、データベース設計、ユーザー認証、および大学生向けの安全でスケーラブルなマーケットプレイスを構築する際のリスク管理の実践的な理解を示しています。",
    },
    links: [
      {
        href: "https://www.gatormarket.com/",
        label: {
          en: "Access the website",
          jp: "ウェブサイトにアクセス",
        },
      },
      {
        href: "https://github.com/AlexanderWangY/SWE_10776_Group3",
        label: {
          en: "View the repository",
          jp: "リポジトリを見る",
        },
      },
    ],
  },
  {
    slug: "midifi",
    cardImage: "/portfolio/midifi-CuXIo5aw.svg",
    title: {
      en: "MidiFi",
      jp: "MidiFi",
    },
    overview: {
      en: "MidiFi, is a program designed to assist pianists, particularly beginners, in selecting suitable sheet music to learn based on their skill level. It automates the process of finding and ranking songs by difficulty, making it user-friendly and visually appealing.",
      jp: "MidiFiは、特に初心者のピアニストが自分のスキルレベルに基づいて学習に適した楽譜を選択するのを支援するために設計されたプログラムです。難易度で曲を見つけてランク付けするプロセスを自動化し、ユーザーフレンドリーで視覚的に魅力的です。",
    },
    about: {
      en: "This project, MidiFi, is a program designed to assist pianists, particularly beginners, in selecting suitable sheet music to learn based on their skill level. It automates the process of finding and ranking songs by difficulty, making it user-friendly and visually appealing. The program contains a database of about 300 MIDI files of classical piano music and uses a library to parse the MIDI files to extract key attributes: Tempo, Distance between notes, and MIDI key information. Then the songs are assigned a difficulty score based off of the distance between notes, greater distance indicates a higher difficulty, and tempo, which higher tempos are considered easier because it implies simplicity in the note sequence. These scores are then mapped to three difficulty levels: Easy, Intermediate, and Hard. Songs are then organized into Min Heaps (for finding the easiest song quickly) and Max Heaps (for finding the hardest song). Each difficulty level has its own Min and Max Heaps so you can find your desired song efficiently. The UI features scrolling via using the mouse or keyboard, a re-sizable window, and a calming design with a moving background and soothing music to enhance user experience. MidiFi aims to make learning how to play the piano more accessible for beginners and experienced pianists by simplifying the process of selecting appropriate sheet music for their personal expertise.",
      jp: "このプロジェクト、MidiFiは、特に初心者のピアニストが自分のスキルレベルに基づいて学習に適した楽譜を選択するのを支援するために設計されたプログラムです。難易度で曲を見つけてランク付けするプロセスを自動化し、ユーザーフレンドリーで視覚的に魅力的です。このプログラムには、クラシックピアノ音楽の約300個のMIDIファイルが含まれているデータベースがあり、MIDIファイルを解析してキー属性を抽出するライブラリを使用します：テンポ、ノート間の距離、MIDIキー情報。その後、曲にはノート間の距離に基づいた難易度スコアが割り当てられ、より大きな距離はより高い難易度を示し、テンポはより高いテンポは注釈の単純さを示しているため、より簡単と見なされます。これらのスコアは、3つの難易度レベルにマップされます：イージー、中級、ハード。曲はMin Heaps（最も簡単な曲を素早く見つけるため）とMax Heaps（最も難しい曲を見つけるため）に整理されます。各難易度レベルには、独自のMinおよびMaxヒープがあるため、目的の曲を効率的に見つけることができます。UIはマウスまたはキーボードを使用したスクロール、サイズ変更可能なウィンドウ、ユーザーエクスペリエンスを向上させるための移動背景と落ち着きのある音楽を備えた落ち着いたデザインを備えています。MidiFiは、ピアニストが個人の専門知識に適した楽譜を選択するプロセスを簡素化することで、初心者と経験豊富なピアニストにとってピアノを演奏する方法をより身近にすることを目指しています。",
    },
    links: [
      {
        href: "https://youtu.be/Io7UjgAVYEY?si=77vKocFBCL3Y0avq",
        label: {
          en: "Watch the demo",
          jp: "デモ動画を見る",
        },
      },
      {
        href: "https://github.com/kalischuchhardt/MidiFi",
        label: {
          en: "View the repository",
          jp: "リポジトリを見る",
        },
      },
    ],
  },
  {
    slug: "safe-steps",
    cardImage: "/portfolio/project3-X7XDrRxQ.svg",
    title: {
      en: "Safe Steps",
      jp: "Safe Steps",
    },
    overview: {
      en: "Safe Steps is a choice-driven, narrative-based game where players guide Mia through various encounters on her way home. She interacts with strangers, navigates public spaces, and faces split-second decisions that could impact her safety.",
      jp: "Safe Stepsは、選択駆動型のナラティブベースのゲームで、プレイヤーはミアをさまざまな出会いを通じて家路を導きます。彼女は見知らぬ人と交流し、公共の場所を移動し、彼女の安全に影響を与える可能性のある決断に直面しています。",
    },
    about: {
      en: "Safe Steps was inspired by real experiences—times when we, or people we know, had to navigate tricky situations while walking home at night. We wanted to create an interactive way to explore decision-making in uncertain situations, helping players recognize warning signs and trust their instincts. Safe Steps is a choice-driven, narrative-based game where players guide Mia through various encounters on her way home. She interacts with strangers, navigates public spaces, and faces split-second decisions that could impact her safety. Each choice is categorized as Safe, Close Call, or Dangerous, giving players real-time feedback on their decisions and reinforcing real-world safety awareness. We developed Safe Steps using GameMaker Studio 2 and GML, despite having no prior experience with either tool. Learning both in such a short time was a major hurdle, but we quickly adapted to scripting interactive elements, structuring decision trees, and designing UI elements. Another challenge was creating pixel art from scratch. Since none of us had prior experience with pixel art, we had to learn as we went, experimenting with shading, animation, and sprite scaling to make the visuals cohesive. I took on the challenge of implementing most of the back-end game state logic. In addition to that, I contributed to our visuals by creating a bit of pixel art, which was a fun and new experience for me. I also worked on refining the button and character animation behavior, ensuring smooth transitions and interactions within the game.",
      jp: "Safe Stepsは、実際の経験に触発されました。私たちや私たちが知っている人が、夜間に家に帰る途中で厳しい状況を乗り越えなければならなかった時代です。私たちは、不確実な状況での意思決定を探索し、プレイヤーが警告兆候を認識して本能を信頼するのに役立つインタラクティブな方法を作成したかったのです。Safe Stepsは、選択駆動型のナラティブベースのゲームで、プレイヤーはミアをさまざまな出会いを通じて家路を導きます。彼女は見知らぬ人と交流し、公共の場所を移動し、彼女の安全に影響を与える可能性のある決断に直面しています。各選択肢は安全、危険な呼び出し、または危険として分類され、プレイヤーは決定についてのリアルタイムフィードバックを取得し、実世界の安全認識を強化します。私たちはGameMaker Studio 2とGMLを使用してSafe Stepsを開発しましたが、どちらのツールも以前の経験がありません。そのような短時間で両方を学ぶことは大きな障害でしたが、私たちはインタラクティブな要素のスクリプト化、決定木の構造化、UI要素の設計にすぐに適応しました。別の課題は、ゼロからピクセルアートを作成することでした。私たちのいずれもピクセルアートの経験がないため、ビジュアルを一貫性を持たせるためのシェーディング、アニメーション、スプライトスケーリングの実験に進めてください。私はバックエンドゲーム状態ロジックの大部分の実装という課題に取り組みました。それに加えて、私はピクセルアートの少しを作成することで、ビジュアルに貢献しました。これは私にとって楽しく、新しい経験でした。また、ボタンとキャラクターのアニメーション動作を改善し、ゲーム内でスムーズなトランジションとインタラクションを確保することに取り組みました。",
    },
    links: [
      {
        href: "https://devpost.com/software/safe-steps-s1orwe",
        label: {
          en: "View the Devpost submission",
          jp: "Devpost を見る",
        },
      },
      {
        href: "https://github.com/Ramia1205/SafeSteps",
        label: {
          en: "View the repository",
          jp: "リポジトリを見る",
        },
      },
    ],
  }
];

export const findProject = (slug: string) => PROJECTS.find((project) => project.slug === slug);
