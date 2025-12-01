<div align="center">

# 🚀 Portfolio - Taiyo Yamada

**個人ポートフォリオサイト**

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://portfolio-seven-mocha-29.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat)](LICENSE)

[🌐 Live Site](https://portfolio-seven-mocha-29.vercel.app) | [📖 Documentation](.github/CICD_SETUP.md)

</div>

---

## 📋 目次

- [概要](#-概要)
- [特徴](#-特徴)
- [技術スタック](#-技術スタック)
- [開発環境のセットアップ](#-開発環境のセットアップ)
- [プロジェクト構成](#-プロジェクト構成)
- [CI/CD](#-cicd)
- [デプロイ](#-デプロイ)
- [ライセンス](#-ライセンス)

---

## 🎯 概要

研究・開発経験・作品・受賞歴・技術記事など、私の活動をまとめた個人ポートフォリオサイトです。
モダンなWebテクノロジーと洗練されたUIデザインで、訪問者に印象的な体験を提供します。

### 主な掲載内容

- 👤 **About Me**: プロフィールと自己紹介
- 💡 **Skills**: 開発スキルとテクノロジースタック
- 🎨 **Projects**: 手がけたプロジェクトの紹介
- 🏆 **Awards**: 受賞歴と実績
- 📝 **Articles**: Qiitaから取得した技術記事（API統合）
- 💼 **Experience**: 職務経験とインターンシップ
- 📧 **Contact**: 連絡先とSNSリンク

---

## ✨ 特徴

### 🎨 モダンなデザイン

- **ガラスモーフィズム**: 洗練された半透明デザイン
- **グラデーション**: 美しいカラーグラデーション効果
- **ダークモード**: 目に優しいダークテーマ
- **レスポンシブデザイン**: あらゆるデバイスに対応

### ⚡ パフォーマンス

- **Next.js 16**: 最新のReactフレームワーク
- **App Router**: 高速なページ遷移
- **画像最適化**: Next.js Image Componentによる自動最適化
- **TypeScript**: 型安全な開発

### 🎭 インタラクティブ

- **Framer Motion**: なめらかなアニメーション
- **ホバーエフェクト**: 魅力的なインタラクション
- **スクロールアニメーション**: 動的なコンテンツ表示

### 🔌 API統合

- **Qiita API**: 技術記事の自動取得と表示
- **動的コンテンツ**: リアルタイムでの記事更新

---

## 🛠️ 技術スタック

### フロントエンド

| 技術 | 用途 |
|------|------|
| [Next.js 16](https://nextjs.org/) | Reactフレームワーク（App Router） |
| [React 19](https://react.dev/) | UIライブラリ |
| [TypeScript](https://www.typescriptlang.org/) | 型安全な開発 |
| [Tailwind CSS](https://tailwindcss.com/) | CSSフレームワーク |
| [Framer Motion](https://www.framer.com/motion/) | アニメーションライブラリ |

### 3Dグラフィックス

| 技術 | 用途 |
|------|------|
| [Three.js](https://threejs.org/) | 3Dレンダリング |
| [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) | React用Three.jsバインディング |
| [React Three Drei](https://github.com/pmndrs/drei) | Three.jsヘルパー |

### スタイリング

| 技術 | 用途 |
|------|------|
| [Tailwind CSS](https://tailwindcss.com/) | ユーティリティCSS |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | クラス名の最適化 |
| [clsx](https://github.com/lukeed/clsx) | 条件付きクラス名 |
| [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography) | タイポグラフィプラグイン |

### アイコン

| 技術 | 用途 |
|------|------|
| [Lucide React](https://lucide.dev/) | アイコンライブラリ |
| [React Icons](https://react-icons.github.io/react-icons/) | 各種ブランドアイコン |

### 開発ツール

| 技術 | 用途 |
|------|------|
| [ESLint](https://eslint.org/) | コード品質チェック |
| [PostCSS](https://postcss.org/) | CSS処理 |
| [Autoprefixer](https://github.com/postcss/autoprefixer) | ベンダープレフィックス自動付与 |

### デプロイ・CI/CD

| 技術 | 用途 |
|------|------|
| [Vercel](https://vercel.com/) | ホスティング・デプロイ |
| [GitHub Actions](https://github.com/features/actions) | CI/CDパイプライン |

---

## 🚀 開発環境のセットアップ

### 必要要件

- **Node.js**: v20.x以上
- **npm**: v10.x以上（またはyarn）
- **Git**: v2.x以上

### インストール手順

1. **リポジトリのクローン**

```bash
git clone https://github.com/TaiyoYamada/portfolio.git
cd portfolio
```

2. **依存関係のインストール**

```bash
npm install
```

3. **環境変数の設定**

`.env.local` ファイルを作成し、必要な環境変数を設定：

```bash
# Qiita API設定（オプション）
QIITA_ACCESS_TOKEN=your_qiita_access_token_here

# サイトURL（本番環境）
NEXT_PUBLIC_SITE_URL=https://your-site.vercel.app
```

4. **開発サーバーの起動**

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### 利用可能なコマンド

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | 本番用ビルドを作成 |
| `npm run start` | 本番サーバーを起動 |
| `npm run lint` | ESLintでコードをチェック |

---

## 📁 プロジェクト構成

```
portfolio/
├── .github/               # GitHub設定
│   ├── workflows/         # GitHub Actionsワークフロー
│   │   └── ci.yml        # CI/CDパイプライン
│   └── CICD_SETUP.md     # CI/CDセットアップガイド
├── public/               # 静的ファイル
│   ├── kumatomo.png      # プロジェクト画像
│   └── portfolio.png     # プロジェクト画像
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── api/          # APIルート
│   │   │   └── qiita/    # Qiita API統合
│   │   ├── layout.tsx    # ルートレイアウト
│   │   ├── page.tsx      # メインページ
│   │   └── globals.css   # グローバルスタイル
│   ├── components/       # Reactコンポーネント
│   │   ├── icons/        # アイコンコンポーネント
│   │   ├── layout/       # レイアウトコンポーネント
│   │   │   └── Header.tsx
│   │   ├── sections/     # ページセクション
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Awards.tsx
│   │   │   ├── Articles.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/           # 再利用可能なUIコンポーネント
│   └── lib/              # ユーティリティ関数
│       └── utils.ts
├── .eslintrc.json        # ESLint設定
├── .gitignore            # Git除外設定
├── next.config.ts        # Next.js設定
├── package.json          # 依存関係
├── postcss.config.js     # PostCSS設定
├── tailwind.config.ts    # Tailwind CSS設定
├── tsconfig.json         # TypeScript設定
└── README.md             # このファイル
```

---

## 🔄 CI/CD

このプロジェクトでは、GitHub Actionsを使用した自動化されたCI/CDパイプラインを構築しています。

### ワークフロー

**mainブランチへのpush時:**

1. ✅ **Code Quality & Build**
   - 依存関係のインストール
   - ESLintによるコード品質チェック
   - TypeScriptの型チェック
   - ビルド検証

2. 🚀 **Deploy to Vercel**
   - Vercelへの本番環境デプロイ

### セットアップ

詳細なCI/CDのセットアップ手順は、[CICD_SETUP.md](.github/CICD_SETUP.md)を参照してください。

---

## 🌐 デプロイ

### Vercel（推奨）

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/TaiyoYamada/portfolio)

1. Vercelアカウントにログイン
2. GitHubリポジトリをインポート
3. 環境変数を設定
4. デプロイ

### 手動デプロイ

```bash
# ビルド
npm run build

# 本番サーバー起動
npm run start
```

---

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

---

## 👤 作成者

**山田 大陽 (Taiyo Yamada)**

- 🌐 Website: [https://portfolio-seven-mocha-29.vercel.app](https://portfolio-seven-mocha-29.vercel.app)
- 💻 GitHub: [@TaiyoYamada](https://github.com/TaiyoYamada)
- 📝 Qiita: [@TaiyoYamada](https://qiita.com/TaiyoYamada)
- 📧 Email: t-yamada@ilab.pu-kumamoto.ac.jp

---

<div align="center">

**⭐ このプロジェクトが気に入ったら、スターをお願いします！**

Made with ❤️ and Next.js

</div>
