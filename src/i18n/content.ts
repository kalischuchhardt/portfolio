export type Locale = "en" | "jp";

export const getCopy = (locale: Locale) => {
  const copy: Record<Locale, any> = {
    en: {
      nav: {
        home: "Home",
        about: "About",
        contact: "Contact",
      },
      hero: {
        title: "Kali Schuchhardt",
        subtitle: "Full-stack developer",
        description: "I create beautiful, functional web experiences using modern technologies. Passionate about clean code, intuitive design, and solving complex problems.",
        viewProjects: "View My Work",
        getInTouch: "Get in Touch",
        imageAlt: "Kali with blob illustration",
      },
      projects: {
        title: "Featured Projects",
        viewDetails: "View Project",
      },
      about: {
        title: "About Me",
        body: "I'm a full-stack developer with a passion for creating elegant solutions to complex problems. With experience in React, TypeScript, and modern web technologies, I build applications that are not only functional but also delightful to use.\n\nWhen I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying the great outdoors.",
        resumeCta: "Download Resume",
      },
      contact: {
        title: "Get in Touch",
        description: "Have a project in mind or want to collaborate? I'd love to hear from you!",
        name: "Name",
        namePlaceholder: "Your full name",
        email: "Email",
        emailPlaceholder: "your.email@example.com",
        message: "Message",
        messagePlaceholder: "Tell me about your project...",
        send: "Send Message",
        imageAlt: "Contact illustration",
      },
      footer: {
        backToTop: "Back to Top",
        copyright: "© 2025 Kali Schuchhardt. All rights reserved.",
      },
    },
    jp: {
      nav: {
        home: "ホーム",
        about: "について",
        contact: "お問い合わせ",
      },
      hero: {
        title: "カリ・シューチャルド",
        subtitle: "フルスタック開発者",
        description: "最新のテクノロジーを使って、美しく機能的なウェブエクスペリエンスを作成します。クリーンなコード、直感的なデザイン、複雑な問題の解決に情熱を持っています。",
        viewProjects: "作品を見る",
        getInTouch: "お問い合わせ",
        imageAlt: "カリとブロブのイラスト",
      },
      projects: {
        title: "プロジェクト",
        viewDetails: "プロジェクトを見る",
      },
      about: {
        title: "私について",
        body: "複雑な問題に対する優れたソリューションを作成することに情熱を持つフルスタック開発者です。React、TypeScript、最新のウェブテクノロジーの経験があり、機能的であるだけでなく、使用して楽しいアプリケーションを構築します。\n\nコーディング以外の時間には、新しいテクノロジーを探索したり、オープンソースプロジェクトに貢献したり、自然を楽しむことができます。",
        resumeCta: "レジュメをダウンロード",
      },
      contact: {
        title: "お問い合わせ",
        description: "プロジェクトがありますか？一緒に仕事をしたいですか？ぜひご連絡ください！",
        name: "名前",
        namePlaceholder: "あなたの名前",
        email: "メール",
        emailPlaceholder: "your.email@example.com",
        message: "メッセージ",
        messagePlaceholder: "プロジェクトについて教えてください...",
        send: "メッセージを送信",
        imageAlt: "お問い合わせのイラスト",
      },
      footer: {
        backToTop: "トップに戻る",
        copyright: "© 2025 カリ・シューチャルド。著作権所有。",
      },
    },
  };

  return copy[locale];
};
